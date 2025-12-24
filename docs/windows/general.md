---
sidebar_position: 1
---
# General

## General tweaks

Generally you would be using these tools to optimize the OS.

+ [Sophia](./tweaks/sophia.md)
+ [Atlas OS](./tweaks/atlas-os.md)

## Disabling mitigations

> [!WARNING]
> Disabling them will degrade the security of your system, and use them at your own risk.

+ Spectre: https://www.grc.com/inspectre.htm

## IO

+ Disable the "last accessed" attribute: https://serverfault.com/questions/33932/how-do-you-disable-the-last-accessed-attribute-on-ntfs-windows

## 25H2

### Native NVME driver

In Windows 11 25H2 and higher, there exists a native NVME driver that offers better performance than the current one (current one is NVME <-> SCSI then Windows will read that SCSI). To install it simply download the [batch file](../../scripts/windows/25h2/Native%20NVMe%20Win11%20by%20Koekieezz%20and%20ZenKromaT-v1.2.bat) and run, credits to the original author of the script.
