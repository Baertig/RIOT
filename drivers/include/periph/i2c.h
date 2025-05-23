/*
 * Copyright (C) 2014-2017 Freie Universität Berlin
 *
 * This file is subject to the terms and conditions of the GNU Lesser
 * General Public License v2.1. See the file LICENSE in the top level
 * directory for more details.
 */

#ifndef PERIPH_I2C_H
#define PERIPH_I2C_H

/**
 * @defgroup    drivers_periph_i2c I2C
 * @ingroup     drivers_periph
 * @brief       Low-level I2C peripheral driver
 *
 * This interface provides a simple abstraction to use the MCUs I2C peripherals.
 * It provides support for 7-bit and 10-bit addressing and can be used for
 * different kind of register addressing schemes.
 *
 *
 * @section   sec_i2c_usage Usage
 *
 * Example for reading a 8-bit register on a device, using a 10-bit device
 * address and 8-bit register addresses and using a RESTART condition (CAUTION:
 * this example does not check any return values...):
 *
 * @code{c}
 * // before accessing the bus, we need to acquire it
 * i2c_acquire(dev);
 * // next we write the register address, but create no STOP condition when done
 * i2c_write_byte(dev, device_addr, reg_addr, (I2C_NOSTOP | I2C_ADDR10));
 * // and now we read the register value
 * i2c_read_byte(dev, device_addr, &reg_value, I2C_ADDR10);
 * // finally we have to release the bus
 * i2c_release(dev);
 * @endcode
 *
 * Example for writing a 16-bit register with 16-bit register addressing and
 * 7-bit device addressing:
 *
 * @code{c}
 * // first, acquire the shared bus again
 * i2c_acquire(dev);
 * // write the 16-bit register address to the device and prevent STOP condition
 * i2c_write_byte(dev, device_addr, reg_addr, I2C_NOSTOP);
 * // and write the data after a REPEATED START
 * i2c_write_bytes(dev, device_addr, reg_data, 2, 0);
 * // and finally free the bus again
 * i2c_release(dev);
 * @endcode
 *
 *
 * @section   sec_i2c_pull Pull Resistors
 *
 * The I2C signal lines SDA/SCL need external pull-up resistors which connect
 * the lines to the positive voltage supply Vcc. The I2C driver implementation
 * should enable the pin's internal pull-up resistors. There are however some
 * use cases for which the internal pull resistors are not strong enough and the
 * I2C bus will show faulty behavior. This can for example happen when
 * connecting a logic analyzer which will raise the capacitance of the bus. In
 * this case you should make sure you connect external pull-up resistors to both
 * I2C bus lines.
 *
 * The minimum and maximum resistances are computed by:
 * \f{eqnarray*}{
 * R_{min} &=& \frac{V_{DD} - V_{OL(max)}} {I_{OL}}\\
 * R_{max} &=& \frac{t_r} {(0.8473 \cdot C_b)}
 * \f}<br>
 * where:<br>
 * \f$ V_{DD} =\f$ Supply voltage,
 * \f$ V_{OL(max)} =\f$ Low level voltage,
 * \f$ I_{OL} =\f$ Low level output current,
 * \f$ t_r =\f$ Signal rise time,
 * \f$ C_b =\f$ Bus capacitance <br>
 * <br>The pull-up resistors depend on the bus speed.
 * Some typical values are:<br>
 * Normal mode:       10k&Omega;<br>
 * Fast mode:          2k&Omega;<br>
 * Fast plus mode:     2k&Omega;
 *
 * For more details refer to section 7.1 in:<br>
 * http://www.nxp.com/documents/user_manual/UM10204.pdf
 *
 *
 * @section   sec_i2c_pm (Low-) power implications
 *
 * The I2C interface realizes a transaction-based access scheme to the bus. From
 * a power management perspective, we can leverage this by only powering on the
 * I2C peripheral while it is actually used, that is inside an i2c_acquire() -
 * i2c_release() block.
 *
 * After initialization, the I2C peripheral **should** be powered off (e.g.
 * through peripheral clock gating). It should only be powered on once a
 * transaction on the I2C bus starts, namely in the i2c_acquire() function. Once
 * the transaction is finished, the corresponding I2C peripheral **should** be
 * powered off again in the i2c_release() function.
 *
 * If the implementation puts the active thread to sleep while a transfer is in
 * progress (e.g. when using DMA), the implementation might need to block
 * certain power states.
 *
 * @{
 * @file
 * @brief       Low-level I2C peripheral driver interface definition
 *
 * @author      Hauke Petersen <hauke.petersen@fu-berlin.de>
 * @author      Thomas Eichinger <thomas.eichinger@fu-berlin.de>
 */

#include <stdint.h>
#include <stddef.h>
#include <limits.h>

#include "periph_conf.h"
#include "periph_cpu.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief   Default I2C device access macro
 * @{
 */
#ifndef I2C_DEV
#define I2C_DEV(x)          (x)
#endif
/** @} */

/**
 * @brief   Default I2C undefined value
 * @{
 */
#ifndef I2C_UNDEF
#define I2C_UNDEF           (UINT_FAST8_MAX)
#endif
/** @} */

/**
 * @brief   Default i2c_t type definition
 * @{
 */
#ifndef HAVE_I2C_T
typedef uint_fast8_t i2c_t;
#endif
/**  @} */

/**
 * @brief   Read bit needs to be set when reading
 */
#define I2C_READ            (0x0001)

/**
 * @brief   Special bit pattern indicating a 10 bit address is used
 *
 * Should only be used internally in CPU driver implementations, this is not
 * intended to be used by applications.
 *
 * @see https://www.i2c-bus.org/addressing/10-bit-addressing/
 */
#define I2C_10BIT_MAGIC     (0xF0u)

/**
 * @brief   Default mapping of I2C bus speed values
 * @{
 */
#ifndef HAVE_I2C_SPEED_T
typedef enum {
    I2C_SPEED_LOW = 0,      /**< low speed mode:     ~10 kbit/s */
    I2C_SPEED_NORMAL,       /**< normal mode:       ~100 kbit/s */
    I2C_SPEED_FAST,         /**< fast mode:         ~400 kbit/s */
    I2C_SPEED_FAST_PLUS,    /**< fast plus mode:   ~1000 kbit/s */
    I2C_SPEED_HIGH,         /**< high speed mode:  ~3400 kbit/s */
} i2c_speed_t;
#endif
/** @} */

/**
 * @brief   I2C transfer flags
 * @{
 */
#ifndef HAVE_I2C_FLAGS_T
typedef enum {
    I2C_ADDR10  = 0x01,     /**< use 10-bit device addressing */
    I2C_REG16   = 0x02,     /**< use 16-bit register addressing, big-endian */
    I2C_NOSTOP  = 0x04,     /**< do not issue a STOP condition after transfer */
    I2C_NOSTART = 0x08,     /**< skip START sequence, ignores address field */
} i2c_flags_t;
#endif
/** @} */

/**
 * @brief   Initialize the given I2C bus
 *
 * The given I2C device will be initialized with the parameters as specified in
 * the boards periph_conf.h, using the pins and the speed value given there.
 *
 * The bus MUST not be acquired before initializing it, as this is handled
 * internally by the i2c_init function!
 *
 * @warning     This function **MUST NOT** be called by the user unless you add
 *              `DISABLE_MODULE += periph_init_i2c` to your `Makefile`. If you
 *              do so, call this function before any call to `i2c_acquire()`,
 *              and call no more than **once**.
 *
 * @param[in] dev       the device to initialize
 */
void i2c_init(i2c_t dev);

/**
 * @brief   Initialize the used I2C bus pins
 *
 * After calling i2c_init, the pins must be initialized (i.e. spi_init is
 * calling this function internally). In normal cases, this function will not be
 * used. But there are some devices (e.g. ATECC608A), that use I2C bus lines also
 * for other purposes and need the option to dynamically re-configure one or
 * more of the used pins.
 *
 * @param[in] dev       I2C device the pins are configure for
 */
void i2c_init_pins(i2c_t dev);

/**
 * @brief   Change the pins of the given I2C bus back to plain GPIO functionality
 *
 * The pin mux of the SDA and SCL pins of the bus will be changed back to
 * default (GPIO) mode and the I2C bus is powered off.
 * This allows to use the I2C pins for another function and return to I2C
 * functionality again by calling i2c_init_pins()
 *
 * If you want the pin to be in a defined state, call gpio_init() on it.
 *
 * The bus MUST not be acquired before initializing it, as this is handled
 * internally by the i2c_deinit function!
 *
 * Calls to i2c_acquire() will block until i2c_init_pins() is called.
 *
 * @note Until this is implemented on all platforms, this requires the
 *       periph_i2c_reconfigure feature to be used.
 *
 * @param[in] dev       the device to de-initialize
 */
void i2c_deinit_pins(i2c_t dev);

#if DOXYGEN /* functions to be implemented as `#define` in `periph_cpu.h` */
/**
 * @brief   Get the SDA pin of the given I2C bus.
 *
 * @param[in] dev       The device to query
 *
 * @note Until this is implemented on all platforms, this requires the
 *       periph_i2c_reconfigure feature to be used.
 *
 * @return              The GPIO used for the I2C data line.
 */
gpio_t i2c_pin_sda(i2c_t dev);

/**
 * @brief   Get the SCL pin of the given I2C bus.
 *
 * @param[in] dev       The device to query
 *
 * @note Until this is implemented on all platforms, this requires the
 *       periph_i2c_reconfigure feature to be used.
 *
 * @return              The GPIO used for the I2C clock line.
 */
gpio_t i2c_pin_scl(i2c_t dev);
#endif /* DOXYGEN */

/**
 * @brief   Get mutually exclusive access to the given I2C bus
 *
 * In case the I2C device is busy, this function will block until the bus is
 * free again.
 *
 * @pre     Given device is valid, otherwise an assertion blows up
 *          (if assertions are enabled).
 *
 * @param[in] dev           I2C device to access
 */
void i2c_acquire(i2c_t dev);

/**
 * @brief   Release the given I2C device to be used by others
 *
 * @param[in] dev           I2C device to release
 */
void i2c_release(i2c_t dev);

/**
 * @brief   Convenience function for reading one byte from a given register
 *          address
 *
 * @note    This function is using a repeated start sequence for reading from
 *          the specified register address.
 *
 * @pre     i2c_acquire must be called before accessing the bus
 *
 * @param[in]  dev          I2C peripheral device
 * @param[in]  reg          register address to read from (8- or 16-bit,
 *                          right-aligned)
 * @param[in]  addr         7-bit or 10-bit device address (right-aligned)
 * @param[out] data         memory location to store received data
 * @param[in]  flags        optional flags (see @ref i2c_flags_t)
 *
 * @return                  0 When success
 * @return                  -EIO When slave device doesn't ACK the byte
 * @return                  -ENXIO When no devices respond on the address sent on the bus
 * @return                  -ETIMEDOUT  When timeout occurs before device's response
 * @return                  -EINVAL When an invalid argument is given
 * @return                  -EOPNOTSUPP When MCU driver doesn't support the flag operation
 * @return                  -EAGAIN When a lost bus arbitration occurs
 */

int i2c_read_reg(i2c_t dev, uint16_t addr, uint16_t reg,
                 void *data, uint8_t flags);

/**
 * @brief   Convenience function for reading several bytes from a given
 *          register address
 *
 * @note    This function is using a repeated start sequence for reading from
 *          the specified register address.
 *
 * @pre     i2c_acquire must be called before accessing the bus
 *
 * @param[in]  dev          I2C peripheral device
 * @param[in]  reg          register address to read from (8- or 16-bit,
 *                          right-aligned)
 * @param[in]  addr         7-bit or 10-bit device address (right-aligned)
 * @param[out] data         memory location to store received data
 * @param[in]  len          the number of bytes to read into @p data
 * @param[in]  flags        optional flags (see @ref i2c_flags_t)
 *
 * @return                  0 When success
 * @return                  -EIO When slave device doesn't ACK the byte
 * @return                  -ENXIO When no devices respond on the address sent on the bus
 * @return                  -ETIMEDOUT  When timeout occurs before device's response
 * @return                  -EINVAL When an invalid argument is given
 * @return                  -EOPNOTSUPP When MCU driver doesn't support the flag operation
 * @return                  -EAGAIN When a lost bus arbitration occurs
 */
int i2c_read_regs(i2c_t dev, uint16_t addr, uint16_t reg,
                  void *data, size_t len, uint8_t flags);

/**
 * @brief   Convenience function for reading one byte from a device
 *
 * @note    This function is using a repeated start sequence for reading from
 *          the specified register address.
 *
 * @pre     i2c_acquire must be called before accessing the bus
 *
 * @param[in]  dev          I2C peripheral device
 * @param[in]  addr         7-bit or 10-bit device address (right-aligned)
 * @param[out] data         memory location to store received data
 * @param[in]  flags        optional flags (see @ref i2c_flags_t)
 *
 * @return                  0 When success
 * @return                  -EIO When slave device doesn't ACK the byte
 * @return                  -ENXIO When no devices respond on the address sent on the bus
 * @return                  -ETIMEDOUT  When timeout occurs before device's response
 * @return                  -EINVAL When an invalid argument is given
 * @return                  -EOPNOTSUPP When MCU driver doesn't support the flag operation
 * @return                  -EAGAIN When a lost bus arbitration occurs
 */

int i2c_read_byte(i2c_t dev, uint16_t addr, void *data, uint8_t flags);

/**
 * @brief   Convenience function for reading bytes from a device
 *
 * @note    This function is using a repeated start sequence for reading from
 *          the specified register address.
 *
 * @pre     i2c_acquire must be called before accessing the bus
 *
 * @param[in]  dev          I2C peripheral device
 * @param[in]  addr         7-bit or 10-bit device address (right-aligned)
 * @param[out] data         memory location to store received data
 * @param[in]  len          the number of bytes to read into @p data
 * @param[in]  flags        optional flags (see @ref i2c_flags_t)
 *
 * @return                  0 When success
 * @return                  -EIO When slave device doesn't ACK the byte
 * @return                  -ENXIO When no devices respond on the address sent on the bus
 * @return                  -ETIMEDOUT  When timeout occurs before device's response
 * @return                  -EINVAL When an invalid argument is given
 * @return                  -EOPNOTSUPP When MCU driver doesn't support the flag operation
 * @return                  -EAGAIN When a lost bus arbitration occurs
 */

int i2c_read_bytes(i2c_t dev, uint16_t addr,
                   void *data, size_t len, uint8_t flags);

/**
 * @brief   Convenience function for writing a single byte onto the bus
 *
 * @pre     i2c_acquire must be called before accessing the bus
 *
 * @param[in] dev           I2C peripheral device
 * @param[in] addr          7-bit or 10-bit device address (right-aligned)
 * @param[in] data          byte to write to the device
 * @param[in] flags         optional flags (see @ref i2c_flags_t)
 *
 * @return                  0 When success
 * @return                  -EIO When slave device doesn't ACK the byte
 * @return                  -ENXIO When no devices respond on the address sent on the bus
 * @return                  -ETIMEDOUT  When timeout occurs before device's response
 * @return                  -EINVAL When an invalid argument is given
 * @return                  -EOPNOTSUPP When MCU driver doesn't support the flag operation
 * @return                  -EAGAIN When a lost bus arbitration occurs
 */
int i2c_write_byte(i2c_t dev, uint16_t addr, uint8_t data, uint8_t flags);

/**
 * @brief   Convenience function for writing several bytes onto the bus
 *
 * @pre     i2c_acquire must be called before accessing the bus
 *
 * @param[in] dev           I2C peripheral device
 * @param[in] addr          7-bit or 10-bit device address (right-aligned)
 * @param[in] data          array holding the bytes to write to the device
 * @param[in] len           the number of bytes to write
 * @param[in] flags         optional flags (see @ref i2c_flags_t)
 *
 * @return                  0 When success
 * @return                  -EIO When slave device doesn't ACK the byte
 * @return                  -ENXIO When no devices respond on the address sent on the bus
 * @return                  -ETIMEDOUT  When timeout occurs before device's response
 * @return                  -EINVAL When an invalid argument is given
 * @return                  -EOPNOTSUPP When MCU driver doesn't support the flag operation
 * @return                  -EAGAIN When a lost bus arbitration occurs
 */
int i2c_write_bytes(i2c_t dev, uint16_t addr, const void *data,
                    size_t len, uint8_t flags);

/**
 * @brief   Convenience function for writing one byte to a given
 *          register address
 *
 * @note    This function is using a continuous sequence for writing to the
 *          specified register address. It first writes the register then data.
 *
 * @pre     i2c_acquire must be called before accessing the bus
 *
 * @param[in]  dev          I2C peripheral device
 * @param[in]  reg          register address to read from (8- or 16-bit,
 *                          right-aligned)
 * @param[in]  addr         7-bit or 10-bit device address (right-aligned)
 * @param[in]  data         byte to write
 * @param[in]  flags        optional flags (see @ref i2c_flags_t)
 *
 * @return                  0 When success
 * @return                  -EIO When slave device doesn't ACK the byte
 * @return                  -ENXIO When no devices respond on the address sent on the bus
 * @return                  -ETIMEDOUT  When timeout occurs before device's response
 * @return                  -EINVAL When an invalid argument is given
 * @return                  -EOPNOTSUPP When MCU driver doesn't support the flag operation
 * @return                  -EAGAIN When a lost bus arbitration occurs
 */
int i2c_write_reg(i2c_t dev, uint16_t addr, uint16_t reg,
                  uint8_t data, uint8_t flags);

/**
 * @brief   Convenience function for writing data to a given register address
 *
 * @note    This function is using a continuous sequence for writing to the
 *          specified register address. It first writes the register then data.
 *
 * @pre     i2c_acquire must be called before accessing the bus
 *
 * @param[in]  dev          I2C peripheral device
 * @param[in]  reg          register address to read from (8- or 16-bit,
 *                          right-aligned)
 * @param[in]  addr         7-bit or 10-bit device address (right-aligned)
 * @param[out] data         memory location to store received data
 * @param[in]  len          the number of bytes to write
 * @param[in]  flags        optional flags (see @ref i2c_flags_t)
 *
 * @return                  0 When success
 * @return                  -EIO When slave device doesn't ACK the byte
 * @return                  -ENXIO When no devices respond on the address sent on the bus
 * @return                  -ETIMEDOUT  When timeout occurs before device's response
 * @return                  -EINVAL When an invalid argument is given
 * @return                  -EOPNOTSUPP When MCU driver doesn't support the flag operation
 * @return                  -EAGAIN When a lost bus arbitration occurs
 */
int i2c_write_regs(i2c_t dev, uint16_t addr, uint16_t reg,
                  const void *data, size_t len, uint8_t flags);

#ifdef __cplusplus
}
#endif

/** @} */
#endif /* PERIPH_I2C_H */
