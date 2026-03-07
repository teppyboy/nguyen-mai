---
sidebar_position: 1
---
# General

## Presets

Generally you would be using these tools to optimize the OS as they'll do most of the tweak for you.

+ [Sophia](./tweaks/sophia.md)
+ [Atlas OS](./tweaks/atlas-os.md)

## Individual tweaks

### Disabling mitigations

> Disabling them will degrade the security of your system, and use them at your own risk.

+ Spectre: https://www.grc.com/inspectre.htm

### IO

+ Disable the "last accessed" attribute: https://serverfault.com/questions/33932/how-do-you-disable-the-last-accessed-attribute-on-ntfs-windows

### Enable large page

> *By ChatGPT*: "Enable large page improves memory-access performance by reducing TLB misses and page-table overhead, mainly benefiting memory-heavy workloads."

> Thanks `@peid.jun` for telling me that this exists!

1. Windows + R -> `secpol.msc`
2. In the left tab: "Local Policies" -> "User Rights Assignment"
3. In the right tab: Double click in "Lock pages in memory" -> Add your user here.
4. Log out/restart the computer.

Now it will work for applications that utilize this (SQL, Minecraft, etc.)

### 25H2

#### Native NVME driver

In Windows 11 25H2 and higher, there exists a native NVME driver that offers better performance than the current one (current one is NVME to SCSI then Windows will read that SCSI). 

> Credits to the original author of the script, I just collected it and redistributed it here.

To install it simply download the [batch file](../../scripts/windows/25h2/Native%20NVMe%20Win11%20by%20Koekieezz%20and%20ZenKromaT-v1.2.bat) and run and hope it works. If it doesn't then you're out of luck, try NOT to use a stripped version of Windows (modified ISO).
