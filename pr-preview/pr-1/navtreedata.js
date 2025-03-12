/*
@ @licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2017 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "RIOT OS", "index.html", [
    [ "RIOT Documentation", "index.html", [
      [ "RIOT in a nutshell                                        ", "index.html#riot-in-a-nutshell", null ],
      [ "Contribute to RIOT                                        ", "index.html#contribute-to-riot", null ],
      [ "The quickest start                                        ", "index.html#the-quickest-start", null ],
      [ "Structure                                                          ", "index.html#structure", [
        [ "core", "index.html#autotoc_md2216", null ],
        [ "boards", "index.html#autotoc_md2217", null ],
        [ "cpu", "index.html#autotoc_md2218", null ],
        [ "drivers", "index.html#autotoc_md2219", null ],
        [ "sys", "index.html#autotoc_md2220", null ],
        [ "sys/net", "index.html#autotoc_md2221", null ],
        [ "pkg", "index.html#autotoc_md2222", null ],
        [ "examples", "index.html#autotoc_md2223", null ],
        [ "tests", "index.html#autotoc_md2224", null ],
        [ "dist & doc", "index.html#autotoc_md2225", null ]
      ] ],
      [ "Further information                                      ", "index.html#further-information", null ]
    ] ],
    [ "doc", "md_boards_feather-m0_doc.html", null ],
    [ "doc", "md_boards_feather-m0-lora_doc.html", null ],
    [ "doc", "md_boards_feather-m0-wifi_doc.html", null ],
    [ "doc", "md_boards_nucleo-f413zh_doc.html", null ],
    [ "doc", "md_boards_stm32f469i-disco_doc.html", null ],
    [ "doc", "md_boards_stm32l496g-disco_doc.html", null ],
    [ "RIOT Vision", "vision.html", null ],
    [ "Governance of the RIOT Community", "autotoc_md2226.html", null ],
    [ "Roadmap", "roadmap.html", [
      [ "Network Stack High layers", "roadmap.html#autotoc_md2244", null ],
      [ "Network Stack Low layers", "roadmap.html#autotoc_md2245", null ],
      [ "Integrations", "roadmap.html#autotoc_md2246", null ],
      [ "Power Modes", "roadmap.html#autotoc_md2247", null ],
      [ "Peripheral drivers", "roadmap.html#autotoc_md2248", [
        [ "Values", "autotoc_md2226.html#autotoc_md2227", null ],
        [ "Community Processes", "autotoc_md2226.html#autotoc_md2228", null ],
        [ "Roles", "autotoc_md2226.html#autotoc_md2229", [
          [ "Contributors", "autotoc_md2226.html#autotoc_md2230", null ],
          [ "Maintainers", "autotoc_md2226.html#autotoc_md2231", [
            [ "Becoming a Maintainer", "autotoc_md2226.html#autotoc_md2232", null ],
            [ "Removing a Maintainer", "autotoc_md2226.html#autotoc_md2233", null ]
          ] ],
          [ "Release Managers", "autotoc_md2226.html#autotoc_md2234", null ],
          [ "Admins", "autotoc_md2226.html#autotoc_md2235", null ],
          [ "GitHub Owners", "autotoc_md2226.html#autotoc_md2236", null ],
          [ "Moderators", "autotoc_md2226.html#autotoc_md2237", null ]
        ] ],
        [ "Decision Making", "autotoc_md2226.html#autotoc_md2238", null ],
        [ "Meetings", "autotoc_md2226.html#autotoc_md2239", null ],
        [ "Code of Conduct", "autotoc_md2226.html#autotoc_md2240", null ],
        [ "Security Response Team", "autotoc_md2226.html#autotoc_md2241", null ],
        [ "Modifying this Charter", "autotoc_md2226.html#autotoc_md2242", null ],
        [ "Attribution", "autotoc_md2226.html#autotoc_md2243", null ],
        [ "Timers", "roadmap.html#autotoc_md2249", null ],
        [ "SPI", "roadmap.html#autotoc_md2250", null ],
        [ "I2C", "roadmap.html#autotoc_md2251", null ],
        [ "GPIO", "roadmap.html#autotoc_md2252", null ],
        [ "ADC", "roadmap.html#autotoc_md2253", null ]
      ] ],
      [ "Software Updates", "roadmap.html#autotoc_md2254", null ],
      [ "Documentation", "roadmap.html#autotoc_md2255", null ],
      [ "Low-level Hardware Support", "roadmap.html#autotoc_md2256", null ],
      [ "Testing", "roadmap.html#autotoc_md2257", null ],
      [ "Security", "roadmap.html#autotoc_md2258", [
        [ "802.15.4 link layer security", "roadmap.html#autotoc_md2259", null ]
      ] ]
    ] ],
    [ "Code of Conduct Information", "coc-info.html", "coc-info" ],
    [ "Creating modules", "creating-modules.html", [
      [ "The general structure                                  ", "creating-modules.html#the-general-structure", null ],
      [ "Module dependencies", "creating-modules.html#autotoc_md2271", null ],
      [ "Modules outside of RIOTBASE                      ", "creating-modules.html#modules-outside-of-riotbase", null ],
      [ "Pseudomodules                                                  ", "creating-modules.html#pseudomodules", null ],
      [ "Helper tools", "creating-modules.html#autotoc_md2272", null ]
    ] ],
    [ "Creating an application", "creating-an-application.html", [
      [ "The main function                                          ", "creating-an-application.html#the-main-function", null ],
      [ "The application's Makefile                         ", "creating-an-application.html#the-applications-makefile", [
        [ "The minimal Makefile                                    ", "creating-an-application.html#the-minimal-makefile", null ],
        [ "How to handle unsupported boards?                  ", "creating-an-application.html#handle-unsupported-boards", null ],
        [ "Including modules                                          ", "creating-an-application.html#including-modules", null ],
        [ "Including source files in subfolders", "creating-an-application.html#autotoc_md2273", null ]
      ] ],
      [ "Helper tools", "creating-an-application.html#autotoc_md2274", null ],
      [ "Creating an out of tree application structure", "creating-an-application.html#autotoc_md2275", [
        [ "External Boards", "creating-an-application.html#autotoc_md2276", null ],
        [ "External Modules", "creating-an-application.html#external-modules", null ],
        [ "Extra Makefile Scaffolding", "creating-an-application.html#autotoc_md2277", null ]
      ] ]
    ] ],
    [ "Porting boards", "porting-boards.html", [
      [ "Porting flowchart", "porting-boards.html#porting-flowchart", null ],
      [ "General structure", "porting-boards.html#general-structure", [
        [ "Source files", "porting-boards.html#board-source-files", null ],
        [ "Makefiles", "porting-boards.html#autotoc_md2278", [
          [ "Questions?", "coc.html#autotoc_md2260", [
            [ "What happens after you file a report?", "coc-reporting-guide.html#autotoc_md2261", [
              [ "Reference", "coc-reporting-guide.html#autotoc_md2262", null ]
            ] ],
            [ "Why have you adopted a Code of Conduct?", "coc-faq.html#autotoc_md2264", null ],
            [ "What does it mean to \"adopt\" a Code of Conduct?", "coc-faq.html#autotoc_md2265", null ],
            [ "What happens if someone violates the Code of Conduct?", "coc-faq.html#autotoc_md2266", null ],
            [ "Why do we need a Code of Conduct? Everyone knows not to be a jerk.", "coc-faq.html#autotoc_md2267", null ],
            [ "This is censorship! I have the right to say whatever I want!", "coc-faq.html#autotoc_md2268", [
              [ "References", "coc-faq.html#autotoc_md2269", null ]
            ] ]
          ] ],
          [ "Pitfalls", "creating-modules.html#autotoc_md2270", null ],
          [ "Makefile", "porting-boards.html#Makefile", null ],
          [ "Makefile.dep", "porting-boards.html#makefile-dep", [
            [ "Default configurations", "porting-boards.html#autotoc_md2279", null ]
          ] ],
          [ "Makefile.features", "porting-boards.html#makefile-features", null ],
          [ "Makefile.include", "porting-boards.html#makefile-include", null ]
        ] ],
        [ "Timer Configurations", "porting-boards.html#board-timer-configurations", null ]
      ] ]
    ] ],
    [ "Writing a Device Driver in RIOT", "driver-guide.html", [
      [ "General Design Objectives", "driver-guide.html#driver-guide-design-objectives", null ],
      [ "General", "driver-guide.html#driver-guide-general", [
        [ "Documentation", "driver-guide.html#driver-guide-doc", null ],
        [ "Device descriptor and parameter configuration", "driver-guide.html#driver-guide-types", null ],
        [ "Default device configuration", "driver-guide.html#driver-guide-config", null ],
        [ "Compile-time configuration documentation", "driver-guide.html#driver-guide-doxygen", null ],
        [ "Initialization", "driver-guide.html#driver-guide-initialization", null ],
        [ "Return Values", "driver-guide.html#driver-guide-return-values", [
          [ "Documenting Return Values", "driver-guide.html#driver-guide-return-values-doc", null ]
        ] ],
        [ "General Device Driver Checklist", "driver-guide.html#driver-guide-general-checklist", null ],
        [ "Build system integration", "driver-guide.html#autotoc_md2281", [
          [ "Internal include files", "driver-guide.html#autotoc_md2282", null ],
          [ "External dependencies", "driver-guide.html#autotoc_md2283", null ]
        ] ],
        [ "Helper tools", "driver-guide.html#autotoc_md2284", null ]
      ] ],
      [ "Sensors", "driver-guide.html#driver-guide-sensors", [
        [ "SAUL", "driver-guide.html#driver-guide-saul", null ],
        [ "Initialization", "driver-guide.html#driver-guide-sensor-initialization", null ],
        [ "Value handling", "driver-guide.html#driver-guide-sensor-value-handling", [
          [ "Value semantics", "driver-guide.html#driver-guide-sensor-value-semantics", null ],
          [ "Typing", "driver-guide.html#driver-guide-sensor-types", null ]
        ] ],
        [ "Additional Sensor Driver Checklist", "driver-guide.html#driver-guide-sensor-checklist", null ]
      ] ],
      [ "Network devices", "driver-guide.html#driver-guide-netdev", [
        [ "Initialization", "driver-guide.html#driver-guide-netdev-init", null ],
        [ "netdev", "driver-guide.html#driver-guide-netdev-interface", null ],
        [ "Additional Network Device Driver Checklist", "driver-guide.html#driver-guide-netdev-checklist", null ]
      ] ],
      [ "TODO", "driver-guide.html#driver-guide-todo", null ]
    ] ],
    [ "Getting started", "getting-started.html", [
      [ "Downloading RIOT code                                  ", "getting-started.html#downloading-riot-code", null ],
      [ "Compiling RIOT                                                ", "getting-started.html#compiling-riot", [
        [ "Required Software for Development ", "getting-started.html#setting-up-a-toolchain", [
          [ "Choosing an Operating System for the Development PC", "getting-started.html#autotoc_md2285", null ],
          [ "Common Tools", "getting-started.html#autotoc_md2286", null ],
          [ "Architecture: ARM7 and ARM Cortex M*", "getting-started.html#autotoc_md2287", null ],
          [ "Architecture: Xtensa", "getting-started.html#autotoc_md2288", [
            [ "ESP32", "getting-started.html#autotoc_md2289", null ],
            [ "ESP8266", "getting-started.html#autotoc_md2290", null ]
          ] ],
          [ "Architecture: AVR", "getting-started.html#autotoc_md2291", null ],
          [ "Architecture: RISC-V", "getting-started.html#autotoc_md2292", null ],
          [ "Architecture: MSP430", "getting-started.html#autotoc_md2293", null ],
          [ "Architecture: native", "getting-started.html#autotoc_md2294", null ]
        ] ],
        [ "The build system                                            ", "getting-started.html#the-build-system", null ],
        [ "Building and executing an example           ", "getting-started.html#building-and-executing-an-example", null ],
        [ "Configuring an application                         ", "getting-started.html#configuring-an-application", null ],
        [ "Default configurations                                 ", "getting-started.html#default-configurations", null ]
      ] ],
      [ "Use Docker to build RIOT                           ", "getting-started.html#docker", [
        [ "Setup                                              ", "getting-started.html#docker-setup", [
          [ "Installing docker", "getting-started.html#autotoc_md2295", null ],
          [ "Downloading and testing RIOT docker container", "getting-started.html#autotoc_md2296", null ]
        ] ],
        [ "Usage", "getting-started.html#autotoc_md2297", null ],
        [ "Troubleshooting                                    ", "getting-started.html#docker-troubleshooting", null ]
      ] ],
      [ "Generating compile_commands.json e.g. for code completion in IDEs", "getting-started.html#autotoc_md2298", null ],
      [ "Using the native port with networking", "getting-started.html#autotoc_md2299", [
        [ "Setting up a tap network", "getting-started.html#autotoc_md2300", null ]
      ] ]
    ] ],
    [ "Flashing via RIOT's Build System", "flashing.html", [
      [ "General Approach                                            ", "flashing.html#flashing-general", null ],
      [ "Supported Tools                                     ", "flashing.html#flashing-supported-tools", [
        [ "Compatibility Matrix of Generic Tools       ", "flashing.html#flashing-supported-tools-generic", null ],
        [ "Specialized Flashing Tools Per Platform     ", "flashing.html#flashing-supported-tools-special", [
          [ "AVR", "flashing.html#autotoc_md2301", null ],
          [ "CC13xx / CC26xx", "flashing.html#autotoc_md2302", null ],
          [ "CC2538", "flashing.html#autotoc_md2303", null ],
          [ "ESP8266 / ESP32 (Xtensa) / ESP32 (RISC-V)", "flashing.html#autotoc_md2304", null ],
          [ "LPC23xx", "flashing.html#autotoc_md2305", null ],
          [ "MSP430", "flashing.html#autotoc_md2306", null ],
          [ "nRF52", "flashing.html#autotoc_md2307", null ],
          [ "RP2040", "flashing.html#autotoc_md2308", null ],
          [ "SAM", "flashing.html#autotoc_md2309", null ],
          [ "STM32", "flashing.html#autotoc_md2310", null ]
        ] ]
      ] ],
      [ "Programmer Configuration                              ", "flashing.html#flashing-configuration", [
        [ "OpenOCD Configuration                         ", "flashing.html#flashing-configuration-openocd", [
          [ "OPENOCD_DEBUG_ADAPTER", "flashing.html#autotoc_md2311", null ],
          [ "OPENOCD_RESET_USE_CONNECT_ASSERT_SRST", "flashing.html#autotoc_md2312", null ],
          [ "OPENOCD_PRE_FLASH_CMDS", "flashing.html#autotoc_md2313", null ],
          [ "OPENOCD_PRE_VERIFY_CMDS", "flashing.html#autotoc_md2314", null ],
          [ "OPENOCD_PRE_FLASH_CHECK_SCRIPT", "flashing.html#autotoc_md2315", null ],
          [ "OPENOCD_CONFIG", "flashing.html#autotoc_md2316", null ],
          [ "OPENOCD_TRANSPORT", "flashing.html#autotoc_md2317", null ]
        ] ],
        [ "stm32flash Configuration                  ", "flashing.html#flashing-configuration-stm32flash", null ],
        [ "MSPDEBUG Configuration                         ", "flashing.html#flashing-configuration-mspdebug", null ]
      ] ],
      [ "Handling Multiple Boards With UDEV-Rules                ", "flashing.html#multiple-boards-udev", [
        [ "Handling Multiple Versions of the Same BOARD", "flashing.html#autotoc_md2318", null ],
        [ "Notes", "flashing.html#autotoc_md2319", null ],
        [ "Documentation:", "flashing.html#autotoc_md2320", null ]
      ] ],
      [ "Handling Multiple Boards Without UDEV-Rules           ", "flashing.html#multiple-boards-no-udev", null ],
      [ "Handling Multiple Boards: Simplest Approach            ", "flashing.html#multiple-boards-simple", [
        [ "Adding Board Filters", "flashing.html#autotoc_md2321", null ],
        [ "Advances Board Filters", "flashing.html#autotoc_md2322", null ]
      ] ]
    ] ],
    [ "Terminal programs configuration", "terminal-programs.html", [
      [ "Background                                                         ", "terminal-programs.html#background", null ],
      [ "gtkterm                                                               ", "terminal-programs.html#gtkterm", null ],
      [ "minicom                                                               ", "terminal-programs.html#minicom", null ],
      [ "miniterm                                                             ", "terminal-programs.html#miniterm", null ],
      [ "picocom                                                               ", "terminal-programs.html#picocom", null ],
      [ "putty                                                                   ", "terminal-programs.html#putty", null ]
    ] ],
    [ "Build In Docker", "build-in-docker.html", null ],
    [ "Running and creating tests", "running-and-creating-tests.html", [
      [ "Directory Structure", "running-and-creating-tests.html#autotoc_md2329", null ],
      [ "Running automated tests", "running-and-creating-tests.html#autotoc_md2330", [
        [ "Targets ran in Docker: DOCKER_MAKECMDGOALS_POSSIBLE", "build-in-docker.html#autotoc_md2323", null ],
        [ "Environment Variables: DOCKER_ENV_VARS", "build-in-docker.html#autotoc_md2324", [
          [ "Directly Define Environment Variables: DOCKER_ENVIRONMENT_CMDLINE", "build-in-docker.html#autotoc_md2325", null ]
        ] ],
        [ "Command Line Variables: DOCKER_OVERRIDE_CMDLINE", "build-in-docker.html#autotoc_md2326", [
          [ "Redefined or Overridden Variables: DOCKER_ENV_VARS_ALWAYS", "build-in-docker.html#autotoc_md2327", [
            [ "CFLAGS", "build-in-docker.html#autotoc_md2328", null ]
          ] ]
        ] ],
        [ "Running single test", "running-and-creating-tests.html#autotoc_md2331", null ],
        [ "Running all test for particular board", "running-and-creating-tests.html#autotoc_md2332", null ],
        [ "Running tests that require a preliminary manual configuration", "running-and-creating-tests.html#autotoc_md2333", null ],
        [ "Running tests that require root privileges", "running-and-creating-tests.html#autotoc_md2334", null ],
        [ "Cleaning intermediate files", "running-and-creating-tests.html#autotoc_md2335", null ]
      ] ],
      [ "Implementing automated tests", "running-and-creating-tests.html#autotoc_md2336", [
        [ "Automated Tests Guidelines", "running-and-creating-tests.html#autotoc_md2337", null ],
        [ "Use expect() instead of assert()", "running-and-creating-tests.html#autotoc_md2338", null ],
        [ "Interaction through the uart", "running-and-creating-tests.html#autotoc_md2339", null ]
      ] ]
    ] ],
    [ "Hints for quicker & better RIOT development", "dev-best-practices.html", null ],
    [ "Build System Basics", "build-system-basics.html", [
      [ "BOARD, CPU & FEATURES", "build-system-basics.html#board-cpu-features", [
        [ "Coding \"Dos\" and \"Don'ts\":", "dev-best-practices.html#coding-dos-and-donts", [
          [ "Dos", "dev-best-practices.html#autotoc_md2340", null ],
          [ "Don'ts", "dev-best-practices.html#autotoc_md2341", null ]
        ] ],
        [ "Methodology: emulator first, target IoT hardware last!", "dev-best-practices.html#methodology", null ],
        [ "Static vs. Dynamic Memory", "dev-best-practices.html#static-vs-dynamic", [
          [ "Static memory", "dev-best-practices.html#autotoc_md2342", null ],
          [ "Dynamic memory", "dev-best-practices.html#autotoc_md2343", null ]
        ] ],
        [ "FEATURES", "build-system-basics.html#features", [
          [ "What is a FEATURE?", "build-system-basics.html#autotoc_md2344", null ],
          [ "Providing a FEATURE", "build-system-basics.html#autotoc_md2345", null ],
          [ "All the FEATURES_%", "build-system-basics.html#autotoc_md2346", null ],
          [ "Where to define FEATURES_%", "build-system-basics.html#autotoc_md2347", null ]
        ] ],
        [ "CPU/CPU_MODEL", "build-system-basics.html#cpu", null ],
        [ "BOARD", "build-system-basics.html#board", null ]
      ] ],
      [ "Variables declaration guidelines", "build-system-basics.html#variable-declaration-guidelines", [
        [ "Avoid unnecessary export", "build-system-basics.html#autotoc_md2348", null ],
        [ "Use memoized for variables referencing a function or command", "build-system-basics.html#autotoc_md2349", [
          [ "recursively expanded variable:", "build-system-basics.html#autotoc_md2350", null ],
          [ "simply expanded variable:", "build-system-basics.html#autotoc_md2351", null ],
          [ "memoized:", "build-system-basics.html#autotoc_md2352", null ]
        ] ],
        [ "Additional documentation", "build-system-basics.html#autotoc_md2353", null ]
      ] ]
    ] ],
    [ "List of Features (Features as Build System Enties)", "feature-list.html", [
      [ "Architecture Features", "feature-list.html#autotoc_md2354", [
        [ "Word size", "feature-list.html#autotoc_md2355", null ],
        [ "Architecture grouping", "feature-list.html#autotoc_md2356", null ]
      ] ],
      [ "CPU Features", "feature-list.html#autotoc_md2357", [
        [ "CPU Capabilities", "feature-list.html#autotoc_md2358", [
          [ "Cortex M Specific Features", "feature-list.html#autotoc_md2359", [
            [ "nRF Capabilities", "feature-list.html#autotoc_md2360", null ]
          ] ],
          [ "AVR-8 Specific Features", "feature-list.html#autotoc_md2361", [
            [ "ATmega Specific Features", "feature-list.html#autotoc_md2362", null ],
            [ "ATxmega Specific Features", "feature-list.html#autotoc_md2363", null ]
          ] ],
          [ "EFM32 Specific Features", "feature-list.html#autotoc_md2364", null ],
          [ "ESP Specific Features", "feature-list.html#autotoc_md2365", null ],
          [ "nordic nRF Specific Features", "feature-list.html#autotoc_md2366", null ]
        ] ],
        [ "CPU Grouping", "feature-list.html#autotoc_md2367", [
          [ "Atmel / Microchip AVR-8 Grouping", "feature-list.html#autotoc_md2368", [
            [ "ATmega Grouping", "feature-list.html#autotoc_md2369", null ],
            [ "ATxmega Grouping", "feature-list.html#autotoc_md2370", null ]
          ] ],
          [ "ARM Cortex-M and Classic ARM Grouping", "feature-list.html#autotoc_md2371", [
            [ "Atmel / Microchip SAM Grouping", "feature-list.html#autotoc_md2372", null ],
            [ "GigaDevice Semiconductor Inc Grouping", "feature-list.html#autotoc_md2376", null ],
            [ "nordic nRF Grouping", "feature-list.html#autotoc_md2377", null ],
            [ "NXP Grouping", "feature-list.html#autotoc_md2378", null ],
            [ "Nintendo Grouping", "feature-list.html#autotoc_md2379", null ],
            [ "Raspberry Pi Grouping", "feature-list.html#autotoc_md2380", null ],
            [ "Silicon Laboratories EFM32 Grouping", "feature-list.html#autotoc_md2381", null ],
            [ "SiFive, Inc. Grouping", "feature-list.html#autotoc_md2382", null ],
            [ "STMicroelectronics STM32 Grouping", "feature-list.html#autotoc_md2383", null ],
            [ "Texas Instruments ARM MCU Grouping", "feature-list.html#autotoc_md2384", null ]
          ] ],
          [ "Expressif ESP Grouping", "feature-list.html#autotoc_md2385", null ],
          [ "Texas Instruments MSP430 MCU Grouping", "feature-list.html#autotoc_md2386", null ]
        ] ]
      ] ],
      [ "Arduino Features", "feature-list.html#autotoc_md2387", [
        [ "Arduino I/O Mapping Features", "feature-list.html#autotoc_md2388", null ],
        [ "Arduino Form Factor Features", "feature-list.html#autotoc_md2389", null ]
      ] ],
      [ "RAM Related Features", "feature-list.html#autotoc_md2390", null ],
      [ "Bluetooth Low Energy Features", "feature-list.html#autotoc_md2391", null ],
      [ "Toolchain Features", "feature-list.html#autotoc_md2392", null ],
      [ "Peripheral Features", "feature-list.html#autotoc_md2393", [
        [ "General-Purpose Input/Output (GPIO)", "feature-list.html#autotoc_md2394", [
          [ "Pin Level Peripheral GPIO API", "feature-list.html#autotoc_md2395", null ],
          [ "GPIO LL API", "feature-list.html#autotoc_md2396", null ]
        ] ],
        [ "Serial Interfaces", "feature-list.html#autotoc_md2397", [
          [ "UART Features", "feature-list.html#autotoc_md2398", null ],
          [ "SPI Features", "feature-list.html#autotoc_md2399", null ],
          [ "I²C Features", "feature-list.html#autotoc_md2400", null ],
          [ "USB Features", "feature-list.html#autotoc_md2401", null ]
        ] ],
        [ "Analog Features", "feature-list.html#autotoc_md2402", null ],
        [ "Integrated Connectivity", "feature-list.html#autotoc_md2403", null ],
        [ "SD / MMC Card Features", "feature-list.html#autotoc_md2404", null ],
        [ "Flash Features", "feature-list.html#autotoc_md2405", null ],
        [ "Other Peripheral Storage Features", "feature-list.html#autotoc_md2406", null ],
        [ "Timer Features", "feature-list.html#autotoc_md2407", [
          [ "High Frequency Timers", "feature-list.html#autotoc_md2408", null ],
          [ "PTP Timers", "feature-list.html#autotoc_md2409", null ]
        ] ],
        [ "Platform Specific", "feature-list.html#autotoc_md2410", null ],
        [ "Cryptographic Features", "feature-list.html#autotoc_md2411", null ]
      ] ],
      [ "Other Features", "feature-list.html#autotoc_md2412", null ],
      [ "Board Features", "feature-list.html#autotoc_md2413", [
        [ "STM32L496G Discovery Board Features", "feature-list.html#autotoc_md2414", null ]
      ] ]
    ] ],
    [ "Kconfig in RIOT", "kconfig-in-riot.html", [
      [ "Overview", "kconfig-in-riot.html#kconfig-overview", [
        [ "Exposure", "kconfig-in-riot.html#autotoc_md2415", null ],
        [ "Assignment", "kconfig-in-riot.html#autotoc_md2416", null ],
        [ "Verification and application", "kconfig-in-riot.html#autotoc_md2417", null ]
      ] ],
      [ "User's guide to configure with Kconfig", "kconfig-in-riot.html#kconfig-users-guide", [
        [ "Configure using menuconfig", "kconfig-in-riot.html#configure-using-menuconfig", null ],
        [ "Configure using '.config' files", "kconfig-in-riot.html#configure-using-files", null ],
        [ "Application configuration with Kconfig", "kconfig-in-riot.html#app-config-kconfig", null ],
        [ "Configuration via environment variables", "kconfig-in-riot.html#env-config-kconfig", null ],
        [ "A note on the usage of CFLAGS", "kconfig-in-riot.html#autotoc_md2419", null ]
      ] ],
      [ "Integration into the build system", "kconfig-in-riot.html#kconfig-integration-into-build-system", [
        [ "Steps during the build process", "kconfig-in-riot.html#kconfig-steps-build-process", [
          [ "0. Module dependency resolution", "kconfig-in-riot.html#autotoc_md2421", [
            [ "Input", "kconfig-in-riot.html#autotoc_md2422", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md2423", null ]
          ] ],
          [ "1. Module listing", "kconfig-in-riot.html#autotoc_md2424", [
            [ "Input", "kconfig-in-riot.html#autotoc_md2425", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md2426", null ]
          ] ],
          [ "2. Merging all configuration sources", "kconfig-in-riot.html#kconfig-steps-merge-configs", [
            [ "Input", "kconfig-in-riot.html#autotoc_md2427", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md2428", null ]
          ] ],
          [ "3. Menuconfig execution (optional)", "kconfig-in-riot.html#autotoc_md2429", [
            [ "Input", "kconfig-in-riot.html#autotoc_md2430", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md2431", null ]
          ] ],
          [ "4. Generation of the autoconf.h header", "kconfig-in-riot.html#kconfig-steps-header-gen", [
            [ "Input:", "kconfig-in-riot.html#autotoc_md2432", null ],
            [ "Output:", "kconfig-in-riot.html#autotoc_md2433", null ]
          ] ],
          [ "Summary of files", "kconfig-in-riot.html#autotoc_md2434", null ]
        ] ],
        [ "Kconfig symbols in Makefiles", "kconfig-in-riot.html#autotoc_md2435", null ]
      ] ],
      [ "Transition phase", "kconfig-in-riot.html#kconfig-transition-phase", [
        [ "Making configuration via Kconfig optional", "kconfig-in-riot.html#kconfig-configuration-optional", null ],
        [ "Modelling CPUs and boards", "kconfig-in-riot.html#kconfig-cpu-boards-fekconfig-cpu-boards", [
          [ "CPUs", "kconfig-in-riot.html#autotoc_md2437", [
            [ "Example", "kconfig-in-riot.html#autotoc_md2438", null ]
          ] ],
          [ "Boards", "kconfig-in-riot.html#autotoc_md2439", [
            [ "Example", "kconfig-in-riot.html#autotoc_md2440", null ]
          ] ],
          [ "Default configurations", "kconfig-in-riot.html#autotoc_md2441", null ]
        ] ],
        [ "Summary of reserved Kconfig prefixes", "kconfig-in-riot.html#autotoc_md2442", null ]
      ] ],
      [ "Appendixes", "kconfig-in-riot.html#kconfig-appendixes", [
        [ "Appendix A: Check if a module or package is used", "kconfig-in-riot.html#kconfig-appendix-a", null ],
        [ "Appendix B: Difference between 'Kconfig' and '.config' files", "kconfig-in-riot.html#kconfig-appendix-b", null ],
        [ "Appendix C: Pitfall when using different configuration interfaces", "kconfig-in-riot.html#kconfig-appendix-c", null ],
        [ "Appendix D: A few key aspects while exposing a macro to Kconfig", "kconfig-in-riot.html#kconfig-appendix-d", null ]
      ] ],
      [ "Useful references", "kconfig-in-riot.html#kconfig-useful-references", null ]
    ] ],
    [ "Using C++ in RIOT", "using-cpp.html", [
      [ "Levels of Support                                          ", "using-cpp.html#levels-of-support", null ],
      [ "Using C++", "using-cpp.html#autotoc_md2446", null ],
      [ "RIOT Modules in C++                                              ", "using-cpp.html#cpp-in-riot", null ],
      [ "See Also                                                            ", "using-cpp.html#see-also", null ]
    ] ],
    [ "Using Rust in RIOT", "using-rust.html", null ],
    [ "Advanced build system tricks", "advanced-build-system-tricks.html", [
      [ "Introduction                                                    ", "advanced-build-system-tricks.html#introduction", null ],
      [ "Customize the build system                            ", "advanced-build-system-tricks.html#customize-build-system", [
        [ "Examples", "using-rust.html#autotoc_md2447", null ],
        [ "IDE / editor setup", "using-rust.html#autotoc_md2448", null ],
        [ "How it works", "using-rust.html#autotoc_md2449", null ],
        [ "Library components in Rust", "using-rust.html#autotoc_md2450", null ],
        [ "Toolchain ", "using-rust.html#toolchain", null ],
        [ "Maintenance", "using-rust.html#autotoc_md2451", null ],
        [ "Usage", "advanced-build-system-tricks.html#autotoc_md2452", null ]
      ] ],
      [ "Speed-up builds with ccache                                           ", "advanced-build-system-tricks.html#ccache", [
        [ "Setup", "advanced-build-system-tricks.html#autotoc_md2453", null ],
        [ "Result", "advanced-build-system-tricks.html#autotoc_md2454", null ]
      ] ],
      [ "Analyze dependency resolution                   ", "advanced-build-system-tricks.html#analyze-depedency-resolution", null ],
      [ "Generate Makefile.ci content                             ", "advanced-build-system-tricks.html#generate-makefileci", null ],
      [ "Out of Tree Cache Directory                            ", "advanced-build-system-tricks.html#out-of-tree-cache-dir", null ],
      [ "Comparing Build Sizes                                  ", "advanced-build-system-tricks.html#comparing-build-sizes", null ],
      [ "RIOT-aware Completion in zsh                         ", "advanced-build-system-tricks.html#zsh-completion-for-riot", null ]
    ] ],
    [ "Debugging Tools", "debugging-tools.html", null ],
    [ "Emulators", "emulators.html", [
      [ "Qemu", "emulators.html#autotoc_md2459", [
        [ "Undefined Behavior Sanitizer (ubsan)", "debugging-tools.html#ubsan", [
          [ "Overview", "debugging-tools.html#autotoc_md2455", null ],
          [ "How to use", "debugging-tools.html#autotoc_md2456", null ]
        ] ],
        [ "Features", "emulators.html#autotoc_md2457", null ],
        [ "Usage", "emulators.html#autotoc_md2458", null ],
        [ "Overview", "emulators.html#autotoc_md2460", null ],
        [ "Installation", "emulators.html#autotoc_md2461", null ],
        [ "Boards supported", "emulators.html#autotoc_md2462", null ],
        [ "Configuration", "emulators.html#autotoc_md2463", null ]
      ] ],
      [ "Renode", "emulators.html#autotoc_md2464", [
        [ "Overview", "emulators.html#autotoc_md2465", null ],
        [ "Installation", "emulators.html#autotoc_md2466", [
          [ "From package", "emulators.html#autotoc_md2467", null ],
          [ "From source", "emulators.html#autotoc_md2468", null ],
          [ "Testing", "emulators.html#autotoc_md2469", null ]
        ] ],
        [ "Documentation", "emulators.html#autotoc_md2470", null ],
        [ "Usage", "emulators.html#autotoc_md2471", null ]
      ] ]
    ] ],
    [ "Release cycle", "release-cycle.html", [
      [ "Download a release                                                   ", "release-cycle.html#download", null ],
      [ "Point releases and hot fixes                                   ", "release-cycle.html#point-releases", null ]
    ] ],
    [ "IO-Mapping and Shields", "iomaps.html", [
      [ "Introduction                                                    ", "iomaps.html#iomaps-intro", null ],
      [ "I/O Mappings                                                  ", "iomaps.html#iomaps-mapping", [
        [ "Digital Pins                                             ", "iomaps.html#iomaps-mapping-gpio", null ],
        [ "Analog Pins                                               ", "iomaps.html#iomaps-mapping-adc", null ],
        [ "DAC Pins                                                  ", "iomaps.html#iomaps-mapping-dac", null ],
        [ "PWM Pins                                                  ", "iomaps.html#iomaps-mapping-pwm", null ],
        [ "UART Device                                              ", "iomaps.html#iomaps-mapping-uart", null ],
        [ "I²C Buses                                                 ", "iomaps.html#iomaps-mapping-i2c", null ],
        [ "SPI Buses                                                 ", "iomaps.html#iomaps-mapping-spi", null ]
      ] ],
      [ "Mechanical and Electrical Compatibility                       ", "iomaps.html#iomaps-shields", null ]
    ] ],
    [ "Changelog", "changelog.html", [
      [ "Release 2025.01", "changelog.html#release-2025-01", null ],
      [ "Release 2024.01", "changelog.html#release-2024-01", null ],
      [ "Release 2023.10", "changelog.html#release-2023-10", null ],
      [ "Release 2023.07", "changelog.html#release-2023-07", null ],
      [ "Release 2023.04", "changelog.html#release-2023-04", null ],
      [ "Release 2023.01", "changelog.html#release-2023-01", null ],
      [ "Release 2022.10", "changelog.html#release-2022-10", null ],
      [ "Release 2022.07", "changelog.html#release-2022-07", null ],
      [ "Release 2022.04", "changelog.html#release-2022-04", null ],
      [ "Release 2022.01", "changelog.html#release-2022-01", null ],
      [ "Release 2021.10", "changelog.html#release-2021-10", null ],
      [ "Release 2021.07", "changelog.html#release-2021-07", null ],
      [ "Release 2021.04", "changelog.html#release-2021-04", null ],
      [ "Release 2021.01", "changelog.html#release-2021-01", null ],
      [ "Release 2020.10", "changelog.html#release-2020-10", null ],
      [ "Release 2020.07.1", "changelog.html#release-2020-07-1", null ],
      [ "Release 2020.07", "changelog.html#release-2020-07", null ],
      [ "Release 2020.04", "changelog.html#release-2020-04", null ],
      [ "Release 2020.01", "changelog.html#release-2020-01", null ],
      [ "Release 2019.10", "changelog.html#release-2019-10", null ],
      [ "Release 2019.07", "changelog.html#release-2019-07", null ],
      [ "Release 2019.04", "changelog.html#release-2019-04", null ],
      [ "Release 2019.01", "changelog.html#release-2019-01", null ],
      [ "Release 2018.10.1", "changelog.html#release-2018-10-1", null ],
      [ "Release 2018.10", "changelog.html#release-2018-10", null ],
      [ "Release 2018.07", "changelog.html#release-2018-07", null ],
      [ "Release 2018.04", "changelog.html#release-2018-04", null ],
      [ "Release 2018.01", "changelog.html#release-2018-01", null ],
      [ "Release 2017.10", "changelog.html#release-2017-10", null ],
      [ "Release 2017.07", "changelog.html#release-2017-07", null ],
      [ "Release 2017.04", "changelog.html#release-2017-04", null ],
      [ "Release 2017.01", "changelog.html#release-2017-01", null ],
      [ "Release 2016.10", "changelog.html#release-2016-10", null ],
      [ "Release 2016.07", "changelog.html#release-2016-07", null ],
      [ "Release 2016.04", "changelog.html#release-2016-04", null ],
      [ "Release 2015.12", "changelog.html#release-2015-12", null ],
      [ "Release 2015.09", "changelog.html#release-2015-09", null ],
      [ "Release 2014.12", "changelog.html#release-2014-12", null ],
      [ "Release 2014.05", "changelog.html#release-2014-05", null ],
      [ "Release 2014.01", "changelog.html#release-2014-01", null ],
      [ "Release 2013.08", "changelog.html#release-2013-08", null ]
    ] ],
    [ "Removed Features and Modules", "autotoc_md2472.html", [
      [ "Removed Features", "autotoc_md2472.html#autotoc_md2474", [
        [ "How to read this list", "autotoc_md2472.html#autotoc_md2473", [
          [ "cpu/mips* [6cad5d24771ba6199228351a11b5062cd2e9b36d]", "autotoc_md2472.html#autotoc_md2475", null ],
          [ "pkg/libcoap [d83d08f0995a88f399e70a7d07b44dd780082436]", "autotoc_md2472.html#autotoc_md2476", null ],
          [ "sys/net/gnrc/nettest [cdc252ab7bd4161cc046bf93a3e55995704b24d4]", "autotoc_md2472.html#autotoc_md2477", null ],
          [ "boards/chronos [ed3887ac5c1e95308c2827bce3cdca8b0f146c22]", "autotoc_md2472.html#autotoc_md2478", null ],
          [ "sys/net/gnrc/application_layer/tftp [0e2a62078850e1ecc74db2db4d639cf2d8fb96d3]", "autotoc_md2472.html#autotoc_md2479", null ],
          [ "pkg/oonf_api [c829f820ee870bffc60c7df688d2da8373553212]", "autotoc_md2472.html#autotoc_md2480", null ],
          [ "sys/net/routing/nhdp [9026823bb906f64168d7d38e52be92f390353dc8]", "autotoc_md2472.html#autotoc_md2481", null ],
          [ "sys/ubjson [bea30c3f8949ebd9fdf4a9bf0a987652889930f5]", "autotoc_md2472.html#autotoc_md2482", null ],
          [ "boards/jiminy-mega256rfr2 [232aed3e18118624b862d36bfec7cd1c21ca2d26]", "autotoc_md2472.html#autotoc_md2483", null ],
          [ "cpu/mips32r2_generic [a2bcd7539ce1931b7aec0077ea71dadd62c96edd]", "autotoc_md2472.html#autotoc_md2484", null ],
          [ "boards/mips-malta [ee6b6b9c388b78fcec7ba6e239a6c76041b9bbb7]", "autotoc_md2472.html#autotoc_md2485", null ],
          [ "boards/pca10000 [9447cb303426d7c6348bb84999f88bf929cd6263]", "autotoc_md2472.html#autotoc_md2486", null ],
          [ "boards/pca10005 [ea73cc49eacd45640b9660134c4c92b887cb2716]", "autotoc_md2472.html#autotoc_md2487", null ],
          [ "boards/qemu-i386 [99009af25e201bbc182d376e99df34133417be6c]", "autotoc_md2472.html#autotoc_md2488", null ],
          [ "boards/weio [cfa9580f319508f858c8fe30ecce8b2b59b6caa3]", "autotoc_md2472.html#autotoc_md2489", null ],
          [ "boards/x86-multiboot-common [b3eb9b8cf23f0702fa725d536df6ad6528f84189]", "autotoc_md2472.html#autotoc_md2490", null ],
          [ "cpu/lpc11u34 [7bc271807cecbffbb01a37c56a367b98fb823573]", "autotoc_md2472.html#autotoc_md2491", null ],
          [ "cpu/x86 [fc45d7c5ac3d46bfdfb21c243cd3d4881bc5c836]", "autotoc_md2472.html#autotoc_md2492", null ],
          [ "gnrc_pktbuf_duplicate_upto() [b83430aa625a1d42f11f9badf5e5cfbb8efacd99]", "autotoc_md2472.html#autotoc_md2493", null ],
          [ "boards/wsn430-v1_3b, boards/wsn430-v1_4 [e63cd54f3b1e002a7895bb7c46af889b341c1a15]", "autotoc_md2472.html#autotoc_md2494", null ],
          [ "pkg/emb6 [4f243c52eabefe709d78560ce7f1d502d737a999]", "autotoc_md2472.html#autotoc_md2495", null ],
          [ "GNRC_NETTYPE_IOVEC [4f243c52eabefe709d78560ce7f1d502d737a999]", "autotoc_md2472.html#autotoc_md2496", null ],
          [ "pkg/nordic_softdevice_ble [35b6ccedf31f10a5f8e4f97609ad5b10c28bdc34]", "autotoc_md2472.html#autotoc_md2497", null ],
          [ "gnrc_pktbuf_replace_snip() [72821a502f073006643cb4ef7815fc8c42563ce6]", "autotoc_md2472.html#autotoc_md2498", null ],
          [ "sys/irq_handler [a2dd6f90e51ca9edef643ba72bd1fd18113cf0d2]", "autotoc_md2472.html#autotoc_md2499", null ],
          [ "boards/slwstk6220a [cab1ea66b49e3c72e2827c8686c09d84ae3ef9a9]", "autotoc_md2472.html#autotoc_md2500", null ],
          [ "boards/fox [81458c8eed8949c686d5ded652dbee10748e860b]", "autotoc_md2472.html#autotoc_md2501", null ],
          [ "boards/waspmote-pro [2b8a0d48940517f7df4e78c7a0b16024f46a8694]", "autotoc_md2472.html#autotoc_md2502", null ],
          [ "boards/nrf6310 [4953ba8e6759d2b1a1a1ea497a4ad1e71489195a]", "autotoc_md2472.html#autotoc_md2503", null ]
        ] ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Supported Boards", "group__boards.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", "globals_type" ],
        [ "Enumerations", "globals_enum.html", "globals_enum" ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"adafruit-grand-central-m4-express_2include_2arduino__iomap_8h.html#af5c60e4465fa7f8020e550d6c7492289",
"ads101x__regs_8h.html#ac1ab488c45e4bfdcc68fec611bf00f13",
"apds99xx__params_8h.html#aa72e95ecc8b7882ccb6c00af28f12abe",
"arduino__board__pwm_8h.html",
"at86rf215__internal_8h.html#a4fadfa996f9ed352eceb7e32c658543e",
"at86rf2xx__registers_8h.html#a3b9beda7a1f2e41513be83ec392b4811",
"atmega1284p_2include_2default__timer__config_8h_source.html",
"atmega8_2include_2cpu__conf_8h.html#a5821c413a94831dfa3f1b57000f9713e",
"atxmega-a1u-xpro_2include_2board_8h.html#a904884feea8e03c30c9a85ca6d7a8e5c",
"autotoc_md2226.html#autotoc_md2233",
"bit_8h.html#a37a2f727e14b66792ce533119b764bc4",
"bmx280__internals_8h.html#ac639c3d1de25412c3826f6b5bb784716",
"boards_2arduino-mkrwan1300_2include_2periph__conf_8h_source.html",
"boards_2calliope-mini_2include_2periph__conf_8h.html#a44adbd579bb180f3cfe8ec78932eb7a1",
"boards_2common_2slwstk6000b_2include_2periph__conf_8h.html#a160c7b1c3bc13c7cb5ac4ed375f4e21d",
"boards_2esp32-wrover-kit_2include_2periph__conf_8h_source.html",
"boards_2frdm-k22f_2include_2periph__conf_8h.html#a5177e7e865ac2ae63f7d56c8b3078707",
"boards_2lobaro-lorabox_2include_2periph__conf_8h.html#ab35a2b79568128efef74adf1ba1910a8",
"boards_2nrf52840-mdk_2include_2periph__conf_8h.html",
"boards_2nucleo-f302r8_2include_2periph__conf_8h.html#a160c7b1c3bc13c7cb5ac4ed375f4e21d",
"boards_2nucleo-f439zi_2include_2periph__conf_8h.html#a873188d7292e07499dcde9674b1e849c",
"boards_2nucleo-l412kb_2include_2periph__conf_8h.html",
"boards_2openlabs-kw41z-mini_2include_2periph__conf_8h.html#a1a870c6d2c1dd6f64431b2daeca6fd98",
"boards_2sam4s-xpro_2include_2periph__conf_8h.html#a6e2f66f5b6f5c835dd11f9766c4ed897",
"boards_2samr21-xpro_2include_2periph__conf_8h.html#a44adbd579bb180f3cfe8ec78932eb7a1",
"boards_2slstk3401a_2include_2periph__conf_8h.html#a72c545f836f5baef7095780b4f98c8b7",
"boards_2spark-core_2include_2periph__conf_8h.html#ab35a2b79568128efef74adf1ba1910a8",
"boards_2stm32f746g-disco_2include_2periph__conf_8h.html#a08cad2d5b5be3a456b03795de581a5a9",
"boards_2yarm_2include_2periph__conf_8h.html#a4c490d334538c05373718609ca5fe2d4",
"can_2raw_8h.html#abb2a2b098c0f7fd801833223fb84463f",
"cc1352p-launchpad_2include_2board_8h.html#aebc6389533d9fc8dcbe4d2129a4d5a45",
"cc2538_8h.html#a0dc8f6742f4e90a155a1d310ed6323e3",
"cc2538_8h.html#a6f6583e7932be2e62f224802ed601dd6",
"cc2538_8h.html#ad2773304f3acd66a08ddf6c959786eb4",
"cc2538__rf_8h.html#ac84e7d7a646df222d7905e1b6fcde800",
"cc26x2__cc13x2__aux_8h.html#a08eeac4f50d3229f59e3c2da2825ea6b",
"cc26xx__cc13xx__gpt_8h.html#a192c150536f36dca8f22f515bb2ac3f2",
"cc26xx__cc13xx__rfc_8h.html#ab9f5637308e76c99c05363cbace8a638ac0e06ced7ba617f7687a171b8d302490",
"cfg__clock__default__216_8h.html#afbc60baeb2b594d6abe49d072aa412e7",
"classSerialPort.html#ae6ee41e63f1e3a9eb7e0bc7925585171",
"clic_8h.html#a74e02effdc8cdb7d6e6926a7fa1b5337",
"common_2arduino-mkr_2include_2arduino__iomap_8h.html#a8f73a9609391e1c5b8883cef6931cd64",
"common_2nucleo64_2include_2arduino__iomap_8h.html#acad741047fd7dca25a3dd8a62aa29462",
"coretemp_8h_source.html",
"cpu_2rpx0xx_2include_2pio_2pio_8h.html#aad5d27f9b592e7a0b7ea2cde04185e1caade13540ba1c71f9185787132171c230",
"cpu__eth_8h.html#a388287f19ba51da485fd1775f4eaa54a",
"crypto_8h.html#af737271e0d134f480334784fc23c8672",
"dfplayer__constants_8h.html#a162ce1882cb216eeed18057262520979",
"dir_1238ff146bb747b8e5c9369d6494c12d.html",
"dir_425e00c772953497ef2ce1b3c7e34162.html",
"dir_7482bd822dd2b39c99b95cb323cabba9.html",
"dir_a54755e576c9a65859560770ed34b1a4.html",
"dir_d2cab96731d635e19539208a5dfa4ca7.html",
"div_8h_source.html",
"drivers_2sx127x_2include_2sx127x__params_8h.html#ac917eea6062e10a46800eed21dd3c59b",
"dynamixel__protocol_8h.html#a30dde007c590bd78ea7d614e6b80b5f9",
"emulators.html#autotoc_md2471",
"encx24j600__defines_8h.html#a2611912ddc4e2d6d4c46661724e1d2e4",
"esp32-heltec-lora32-v2_2include_2gpio__params_8h.html",
"esp32-wrover-kit_2include_2board_8h.html#a0f50ae3b4bdb42dd5ad74b2c604a7515",
"esp32s2-lilygo-ttgo-t8_2include_2arduino__iomap_8h.html#a4610d5acda40575f42f367db84e7a90a",
"esp8266-esp-12x_2include_2gpio__params_8h.html",
"event_2periodic_8h.html#a40c0c7f3f5a76b6bfb730566ac2deefa",
"fe310_2include_2periph__cpu_8h.html#ac91b29bf80f58030decd7a89d9fa6e8d",
"feetech__reader_8h.html#a09fa6ea7efb42e2973099c3ad28bd23e",
"frdm-kw41z_2include_2board_8h.html#a669ed6e073140d069b30442bf4c08842",
"fxos8700__regs_8h.html#a55eb92e02ffe77bd06e3581be1ac8c4f",
"gd32vf103c-start_2include_2arduino__iomap_8h.html#ae24f35895db78170d5201e14fb8d8a0f",
"globals_type.html",
"gnrc__tcp__common_8h.html#a670b09ef3e48f63f083538e93975fb39",
"group__CC13x2__cmsis.html#gga666eb0caeb12ec0e281415592ae89083a4ce820b3cc6cf3a796b41aadc0cf1237",
"group__ble__defs.html#ga1384ef157b6ee9ab6ee0dd7c6c2aaba4",
"group__ble__defs.html#gaa1474055deb281094b685e9299b6827f",
"group__boards__b-l072z-lrwan1.html",
"group__boards__esp32__wemos-lolin-d32-pro.html",
"group__boards__sodaq-explorer.html",
"group__core__sched.html#gaf4e431441709328f9355dfb7e21a0eb9",
"group__cpu__atmega256rfr2.html",
"group__cpu__cc2538__gpio.html#ga99716e9dd6c1e5bd22092003943493f5",
"group__cpu__cc2538__rfcore.html#gga5d76b81b0ad4c19007a781d4edb8181fa85660e5d5ea8b405b3806c2a762a01d6",
"group__cpu__cortexm__common.html#ga88cf8bce83b348c30fa8793c31e5e7ac",
"group__cpu__nrf51.html",
"group__cpu__stm32__periph__fmc.html#ga4c376973f7069198f5f31c4593383597",
"group__drivers__ad7746.html#ggac27e150f98c939be117a8c933f9b6017ac30fe66a2ddca473af81e078cdc9ccbd",
"group__drivers__adxl345.html#ga48708aba5d58923a28e3387b86ad64fd",
"group__drivers__apds99xx.html#gaa3762beec647cda32361349791ce57e7",
"group__drivers__at30tse75x.html#gga995ed7ef8bd331621851f376d8bfc0b0a6793552f181dc97483f24ee92b95eeeb",
"group__drivers__at86rf2xx.html#ga0331b9576d69bc87c6a1cab9cd58a183",
"group__drivers__ata8520e.html#ggafe9e9ddace8cf7974ae94c0fc452dbceabb8889a7005e8edeb858091daee28d61",
"group__drivers__bmx280.html#ga52d28004e2fc7fd50ef194c37097e84f",
"group__drivers__candev__linux.html#ga00760c630e69898d536b0dd61a6ee138",
"group__drivers__dfplayer.html#ga1722146af40230534fa42b92c84b10d4",
"group__drivers__ds1307.html#ggac639008da1051d2ab3b7e47764fb47e9a56e17652b84041d911dbda58c2fa7a20",
"group__drivers__epd__bw__spi.html#ggada50b297d4216c0809a9cd863b4d8dc5acb9e27aa9ec414811c31dad9b5d5f317",
"group__drivers__hd44780.html#ga2a57c0b8e66a2bcfa11b14b3f1139ef1",
"group__drivers__hsc.html#ga37adf735b6282e0bd85846be72e41976",
"group__drivers__ina2xx.html#gga6363ccce5a3a21784ae8f2d0c6287380a400b09ddbcd219592577488016799bc8",
"group__drivers__ina3221.html#gab727576964b195632ec26cc3e8e93679",
"group__drivers__ina3221.html#ggac40d8e84ae276e75f56616a498a07bbea7090c04c2ff3477fe035f8740aa3a9de",
"group__drivers__itg320x.html#gga2c1a5dae8a6b7d005e16912ea7519003ad9e339580afefa9aa419c806ef65ed04",
"group__drivers__l3gxxxx.html#ga8e800b74cf431f9e1eb818be5ed93d6d",
"group__drivers__l3gxxxx.html#ggaf5451bba86f903b374648fcd8e1ac7b9ae03e20a2173f4ba08fd0c7f196e72de1",
"group__drivers__lis2dh12.html#ga3d41cfc87a78c62bd1ae3773179134b5",
"group__drivers__lis3dh.html#ga278a676f2f5e2b67834b9450b227076c",
"group__drivers__lis3dh.html#gaddf6daca1fbe4b281f2599014a649f53",
"group__drivers__lsm303dlhc.html#gga388a4733819b2541d067f4c60214d882a2637b6963a9e2293138802d64e6418e6",
"group__drivers__mag3110.html#gabb55cff11ebbfd69614fc22166999cfd",
"group__drivers__mfrc522.html#ga5138229a9f4723ff4aeb4302611006a5",
"group__drivers__mii.html#gafcfc8e6c14ac856f1c0c8a633aca8cf1",
"group__drivers__mpl3115a2.html#ggaa52ea6a123f47db5e6b145e5fc5e369aa1f07e58d39a2daf1260d10cc0e7eead6",
"group__drivers__mtd__at24cxxx.html#ga278d519403130643a46f10d543f9eb3d",
"group__drivers__netdev__ieee802154.html#gad68efd69046291c4711bdb3e0091e0d6",
"group__drivers__nrf24l01p__ng.html#ga5644a7c69ec88aeb2eed1ee4a12574fe",
"group__drivers__pca9685.html#ga6d38c6c9a13df01a8454be525c3ebf7e",
"group__drivers__periph__eeprom.html#gab7dc966f5c6e0fddbedfce0347d61929",
"group__drivers__periph__gpio.html#gga0e8c3f46deb150e48acaa79fe26b2e86aa66eac98d2fbcbacb1b23ddbd12fcd54",
"group__drivers__periph__i2c.html#ga5e65efc34a8bd77223795faadc29d304",
"group__drivers__periph__qdec.html#ga02c82a47f6e4c59e0e35798eeb89e237",
"group__drivers__periph__spi.html#ggae81cec9f03084065c25089e514a57337a4105210aa902203502e4392d4a3fbe58",
"group__drivers__periph__uart.html#ggabe4eb8a7f480877e96248c1c2b2b96a4a6608baae54141f9335c1c735c5bca620",
"group__drivers__ph__oem.html#ggaf859a7a988d4650f5c6d449633667673ab91707cdd382105c0f66131468d686b1",
"group__drivers__rn2xx3.html#ga70bf867ac1598fd65fcb934645196347",
"group__drivers__saul.html#ggaa9908284c0827729f14cf9b2489e1479a4bf682c148f1407571540641e9f5af27",
"group__drivers__sdmmc.html#ga7347ebd7c55fdb4e6b854f77c5909cd8",
"group__drivers__sdmmc.html#gga0cb33b64a4279b29e816220206cc46b5af68e6e178534111392ab18384717d985",
"group__drivers__sgp30.html#ga9edf67ea21e5d1aa2b7e1188e4e24ab4",
"group__drivers__si114x.html#gga67bcb332da5eaf760068d925b4706d68afaae54caeae277d4a44e66fece435ea1",
"group__drivers__srf02.html#ga8f870bdc3ad2bc26688ffb1d2587f6b4",
"group__drivers__sx127x.html#ga13228b9d2316962f642e4c3a7c3d3572",
"group__drivers__tcs37727__config.html",
"group__drivers__uart__half__duplex.html#gga2215bf270a4991ca057bb6efb294846ba9ad14162547afe3e804e340954048133",
"group__drivers__vl6180x.html#ggaeef583aa05ce818cc70d29a056989b25a7f6affab50fad3822de4282756dea121",
"group__fido2__ctap__cbor.html#ga5829f1f0f172abedbf4a2fb02119f40f",
"group__fido2__ctap__ctap.html#gac1ec2ff64da0a265efbe5545fed180c9",
"group__lwm2m__client.html#gafbbae2dedd13957b7f02e08a162ef956",
"group__lwm2m__objects__device.html#gga128286c57e81fc250ee34376b4e9269aab612aedc7bdaf525c0cde475434c81d6",
"group__lwm2m__objects__ipso__sensor__base__config.html#ga6bbf1ce2ca564e272593e52053da04d5",
"group__net__af.html#ggad825d553b53d96e75e002bc6f64642e1a879512295f51cdbbee0aab3ec7cf3a00",
"group__net__coap.html#ga6dd52f64758c050ac6eff19975d1a682",
"group__net__cord__lc.html#ggad559b3ed307be626eacea8b56942de61af43abe96ee3b848dbc8966563ba97dc1",
"group__net__dhcpv6__relay.html#ga7a7fcb66a33fadc888fac3cdb806a459",
"group__net__fib.html#ga19a0ca4ab7759dd445dbee753fb14ddf",
"group__net__gcoap__dns.html#ga9b79f31ead91bcee1409d7a1c805f00c",
"group__net__gnrc__ipv6__ext__rh.html#gga57ea8175acdce8eeb8af23163fe5a045a27f021d2bcd60cf720fd23b609357eaa",
"group__net__gnrc__lorawan.html#ga081ef52e0242fb797f7c39b6546f52cf",
"group__net__gnrc__netif.html#ga473401db652f531fd853a9529adb54cd",
"group__net__gnrc__nettype.html#gga2582fbb16a318806983c225a69460902aadb666d279898cdecd1dcc0cc18799f1",
"group__net__gnrc__rpl.html#gac0c09c21b9eb726d20bca432da1c12fc",
"group__net__gnrc__sixlowpan__frag__rb.html#ga717aae85efc54c72a208cff5b350aa39",
"group__net__gnrc__udp.html#ga58042bdb9954ecec46aa0011705223ee",
"group__net__ieee802154__header.html#gab12d08a9821180028c12463a781e3e7a",
"group__net__ipv6__addr.html#ga0d509bf1276eba053d18980ba7bd87fb",
"group__net__l2util.html#gaaa4c7f588480db684853d97de113361b",
"group__net__loramac__conf.html#ga220428c7412403e395dbb08fd1e92281",
"group__net__nanocoap.html#ga0c9cfbe5210cba4e35c9fbad51a88e19",
"group__net__nanocoap.html#gaf94c66182f7412d256c32c66d1d7a012",
"group__net__ndp.html#gaa3dc9f50d4867bf53630ea6b76e0c445",
"group__net__netopt.html#gga19e30424c1ab107c9c84dc0cb29d9906a88c5d8f2807ffa20328ecd85eda79aef",
"group__net__protnum.html#ga3035eadcaa149f9df4fdc52f80d422ca",
"group__net__sixlowpan.html#ga41b6219da7e728858700b2aa951db76a",
"group__net__sock__async__event.html#gaaca71a0983b47ba06c5c6e13e16028f0",
"group__net__sock__udp.html#gacc31d9fd5c02e95e4ca7257c808e53ac",
"group__pkg__flashdb.html",
"group__pkg__nimble__addr.html#gae775c7e1093c0a37eec7ecfe880a878e",
"group__pkg__nimble__netif__conn.html#ga2df7f0b9bff868b2f5d4e445fce6368c",
"group__pkg__openwsn.html",
"group__posix__sockets.html#gab332d40b15142f33a88d4fcb1d6a5920",
"group__sys__arduino__api.html#gacaf1fa6c3b30e84189c7cb48a615cf44",
"group__sys__benchmark.html#gac1f243ea9c28121882631a1770df3f40",
"group__sys__cb__mux.html#ga72d3d07db1cabc9a5c6e71de764a39cf",
"group__sys__congure__test.html#gaec4d4a6168b86abe3ffd2ce5af3e8511",
"group__sys__event.html#gaf979ad68f1d4ef379de1f0da0644ff72",
"group__sys__hashes__sha1.html#gaebec0a07688f1b976f20b70e46da8ae2",
"group__sys__lwext4.html#ga394592b9843411c6bc7e3c3f94884c27",
"group__sys__psa__crypto__hashes.html",
"group__sys__sema__inv.html#ga8cf2306bf0dc7d6c99595d0a33763b6b",
"group__sys__senml.html#ggac5597b7bfe72dfb7ea3d1d26f9290c5bae8935dfe4111542bb38580d8fe38c704",
"group__sys__suit.html#gab313c09e7d9e39fb73febd8f2f91ab8e",
"group__sys__universal__address.html#ga2f06b7f9019e63c60aeeea54a579b756",
"group__sys__vfs.html#ga39a3ce949009b07b680210b57ace4650",
"group__sys__ztimer.html#gab5514d8cb5abf5fb540565fd3d070f0f",
"group__turo__API.html#ga98db6a1bc1e6bf9b723f31c73bdf46b4",
"group__usb__conf.html#gafc337ed0720a10c0cb8bde8a99b8fc7c",
"group__usb__hid__descriptor.html#gaa3ddfad5577877d9a5bb28d1db437ec1",
"group__usb__usbus.html#gga75a538ca121919799d4e604539db2525ac7bcc649f1028c8c3ef02864ae39f2f8",
"hamilton_2include_2board_8h.html#abe9610e318a1d8873b278c0cede124ff",
"hmc5883l__regs_8h.html#af7ac2f3bc7b2f2ee891e946d1d3edd84",
"ina3221__defines_8h.html#a47af13b36e7ee838314c779831db0c13",
"isl29020-internal_8h.html#a4b671fa3a54847be042bc3c9a68a3e86",
"kinetis_2include_2periph__cpu_8h.html#a5df130ef5152041e30a95957a5e4ca64a8784937474269f0e7b8a3115c63925cc",
"kw2xrf__reg_8h.html#a8eb7e78010b65b57cc532dca4bb12bfda5b1d36b9554db05871c4772701634d1a",
"kw2xrf__reg_8h.html#aca3221ee5f3f7dfd0c5d6e5dc8d31577",
"l3gxxxx__params_8h.html#a065d593658c8bcffb8ec1c07833c1994",
"lifetime_8h.html#a261423f269458e7d62be920f0cae12b9",
"lm4f120_2include_2periph__cpu_8h.html#afcfd0cb57b9f605239767c4d18ed7304a73c68266253638e2246dda97a0d65d91",
"lsm303dlhc-internal_8h.html#a2c7e21c9a2f04f59db51f2a07ad77a72",
"lua__builtin_8h.html#ad1480e9557edcc543498ca259cee6c7d",
"matstat_8h.html#ac9aa33b061aa11e2b2feb0f562b0e675",
"mcp2515__defines_8h.html#a41034dce261fd530f7d01fa0ba372963",
"mega-xplained__pinmap_8h.html#a4fdf33bc92f4c60b1e27d9ab1dc7dca2",
"mhz19__internals_8h.html#a1d599b380fb402cd1ab3e6a48429bcd9",
"mma8x5x__regs_8h.html#a8ef60e2e259ee291d2499dd67b052b03",
"mpu9x50__regs_8h.html#abd48798db650eaea9750f68e6e24cc90",
"mrf24j40__registers_8h.html#a92dec68cea840b454f00f9d9d62922fc",
"msp430_2include_2periph__cpu__common_8h.html#a340fb45a8ca27fb692ea5172513130bb",
"native_2include_2board_8h.html#aadd4c7ae0cd4e9bbb17f7055dd51fe08",
"nimble__autoadv__params_8h.html#ac214a87c0ecf869b0e34cfb89de9f5d0",
"nrf24l01p__ng__registers_8h.html#a749b268d4f8ad58b9b9df18c760cef86",
"nrf24l01p__settings_8h.html#aca6b0735ab18d35c9dc2c1844991c329",
"nrf52840dk_2include_2arduino__iomap_8h.html#ad13a5303f8ed4526a0d3a46316490f82",
"nrf53_2include_2periph__cpu_8h.html#af7fe3e7b1fe6ed3d712ab34edf532d27",
"olimexino-stm32_2include_2board_8h.html#afea1be2406d45b8fbb1dca1a318ac2dc",
"opt3001__params_8h.html#a177b23716397c4fa95ad278215c20746",
"pbkdf2_8h_source.html",
"periph__cpu__esp32c3_8h.html#abf972cfb05a7f86e9a69db243792cbac",
"pinetime_2include_2board_8h.html#a332bd11e1119d41023c35783a24445e6",
"psa__crypto_2psa_2key_2type_8h.html#ab4f857c4cd56f5fe65ded421e61bcc8c",
"pthread__threading__attr_8h.html#af032906f326f3c209c7eed6bb248ebee",
"reel_2include_2board_8h.html#abfabde35a3e8b7ab50146a5e223bfead",
"riotboot_2flashwrite_8h.html#ae976fc115297a4b1b2b5b47bab27726e",
"ruuvitag_2include_2board_8h.html#a343fd2d3ce61b84f88ddfaea32c67c58",
"samd20-xpro_2include_2board_8h.html#a663daa01e565aee93c6f20c5845b90b4",
"saml1x_2include_2periph__cpu_8h.html#aaf89506c27e685f7a19a2be8198ff326",
"scsi_8h.html#a9dbe602f6f065f56340568451b4a9714",
"seeedstudio-gd32_2include_2board_8h.html#aafff7922492a49535a39a7f55b87fd59",
"seq_8h_source.html",
"si1133__internals_8h.html#a53f2dfbbf73dec485b96e8179f37e371",
"si70xx__params_8h_source.html",
"sltb001a_2include_2board_8h.html#af89f1ad1cb96df46c09100e70c3886c6",
"sodaq-autonomo_2include_2arduino__iomap_8h.html#a0d996802f5f3842bd6e2805411bca335",
"sodaq-one_2include_2arduino__iomap_8h.html#aef31a843294d1d365534cc24f8f83a58",
"sodaq-sara-sff_2include_2arduino__iomap_8h.html#ae52d466203b1be7d2a8b52a05efa0c49",
"st77xx__params_8h.html#a5cfffe0bfd5ecf0c917a61b750431b8f",
"stm32f0discovery_2include_2gpio__params_8h.html",
"stm32l0538-disco_2include_2board_8h.html#a7c4ab0b378f6ec8096a0039a96b5741a",
"stmpe811__constants_8h.html#a9adeb088d6583ba4a98ae6f99d091569",
"structadcxx1c__params.html#a55e5b050793c637819b6b99c8dbf0b0e",
"structapds99xx__int__config__t.html",
"structat86rf215__RF__regs.html#a93f8aa1cc264f88d0b59c94ea9af83e5",
"structaux__evtcl__regs__t.html#ad5486c847a5bb42b015bf1285e4a97e3",
"structbmp180__t.html",
"structcandev__dev.html#ac14393b436ded33ffd40c0970bd4c489",
"structcc2538__rfcore__t.html#a5e6b22c5a4c610ba715166be16efafd1",
"structcc2538__uart__t.html#aa3bad31a166a372531b82e022fc48036",
"structcongure__quic__snd__t.html#ac503dba145d930a45400b9a43e83f996",
"structctap__config__t.html#abcd9caa1ddd3d032345350cfd68a27b9",
"structdhcpv6__duid__l2__t.html#adcb58ff9567ce8c5d5cf856634bc5b1f",
"structdynamixel__writer__t.html#a56994527c3d442f733e4ca587ca8690c",
"structfcfg__regs__t.html#a40e3223da62acc1e1f179cada0314da0",
"structflash__regs__t.html#ac224210172b0b6d972117a0ad640fe12",
"structgnrc__ipv6__ext__frag__rbuf__t.html#a6bf9096630c2bce9938336be437a62d4",
"structgnrc__rpl__dao__t.html#a5d0a0e1430a8aca99f6596898adbbb24",
"structgpio__pad__ctrl__t.html#a28c00d5bfce1947833b6691ad9531285",
"structi2c__conf__t.html#ad8a00ea8d95d9f429a6474e6dba918e7",
"structina3221__t.html#ad97883673d5e77859ffc92cb055874ac",
"structl3g4200d__params__t.html#affc039fafec3472b786012db935d61c5",
"structlis2dh12__params__t.html#a48fdc8b42b5852c9003acd4ea2bbaace",
"structlsm6dsxx__params__t.html#ad55e7be409c608c01b48feb0aece18de",
"structmcp47xx__params__t.html",
"structmsc__inquiry__pkt__t.html#a620f4cf7403e32092829b7c841d3b4e6",
"structmtd__spi__nor__params__t.html#a1c64a2c9c34d4fc356ead4146f3dbf52",
"structnetstats__nb__t.html#a0d23d4a4e09c0daff2f22d16b432ccb3",
"structnrf24l01p__ng__params__t.html#ac183c7f84b01aa772550412549e2e3df",
"structpir__t.html#ab873ccfd2354057a9793e2530d1fd482",
"structpthread__barrier__t.html",
"structsam0__aux__cfg__mapping.html#a38dd7fe84c5510046f9b52be506ce8c0",
"structsdmmc__csd__mmc__t.html#a6a38e7261e29eabee75e797940d59390",
"structsdmmc__scr__t.html#a137fb95c63e88f6ccbd7c4a5fa06230e",
"structsht1x__params__t.html#a6a2e89f2292ad0167e0ebf63eaeed229",
"structsock__tcp.html#a3e0047015532f209c1516bc252532c3b",
"structspi__conf__t.html#a77f95de5887d76b71da74288938214df",
"structsx127x__params__t.html#a7228e79863cf73b13582252fde7a36d8",
"structtsl2561__t.html#a8b6667d53600605f30844db33f360e5c",
"structusb__descriptor__device__t.html#adf718cb8bcfee20922b29fe6de29769d",
"structusbus__string.html#a14e73181770533a95ad275c1f05eef18",
"structxbee__t.html#a3a764dc506ac5121bbc95e563a8d733c",
"sx127x__registers_8h.html#a105f21fdd9cc4d2a750b9b25ececf5bc",
"sx127x__registers_8h.html#a4e385bdf0c1bc830f969f60f15e9e891",
"sx127x__registers_8h.html#a8799e510ae297f0ea0688b2c8400861b",
"sx127x__registers_8h.html#ac2035d44a47a40efe96cd54fd4b79690",
"sx127x__registers_8h.html#afccdd60b5960ee748b66bf63ad6ef05f",
"sys_2include_2ztimer_2config_8h.html#ab915043cc9cb94c04e98fe8b87b9809a",
"thread_8hpp.html#ac719e7faf32059985929ee317de18d24",
"ublox-c030-u201_2include_2arduino__iomap_8h.html#a170a6c527949ee7b9c8ca6889f2b7235",
"unionchacha20poly1305__ctx__t.html#aaa280fd18b998d3a30817449b2a2e81f",
"usb-kw41z_2include_2board_8h.html#ab6d4952eed71e522883e3bc1bb164e1e",
"vectors__cortexm_8h_source.html",
"vl6180x__regs_8h.html#a24367b61e62e8b10e0c09fc0401d8310",
"w5500__regs_8h.html#a9837cbf918f7ff6aa4673c9683798679",
"xor_8h.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';