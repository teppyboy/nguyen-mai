# KernelSU

This guide will show you how to integrate KernelSU (and its forks) to the kernel source.

:::info
Referer to https://github.com/teppyboy/sinestrea-kernel/ to see how exactly it is used.
:::

## Applying

This requires you to be in the kernel source code directory already (`common`), if not then `cd common` first, then after that execute this command to set the config file:

```
export CONFIG_FILE="./arch/arm64/configs/gki_defconfig"
# Enables KernelSU
echo "CONFIG_KSU=y" >> "$CONFIG_FILE"
```

### KernelSU

```
curl -LSs "https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh" | bash -s <branch>
```

Replace the `<branch>` with your desired branch, if not then use `main` as the branch.

### KernelSU-Next

```
curl -LSs "https://raw.githubusercontent.com/pershoot/KernelSU-Next/dev-susfs/kernel/setup.sh" | bash -s <branch>
```

Replace the `<branch>` with your desired branch, if not then use `dev-susfs` as the branch.

:::info
If you're using `dev-susfs` branch, you don't need to apply `10_enable_susfs_for_ksu.patch` anymore because this fork is pre-applied with the patch to support integration with SuSFS!
:::

This is using pershoot's fork because it is more updated and with experimental hiding features, you can use the official KSUN if you're uncomfortable with this fork.

### SukiSU

```
curl -LSs "https://raw.githubusercontent.com/SukiSU-Ultra/SukiSU-Ultra/main/kernel/setup.sh" | bash -s <branch>
echo "CONFIG_KPM=y" >> "$CONFIG_FILE"
```

Replace the `<branch>` with your desired branch, if not then use `main` as the branch.

:::info
KPM apparently doesn't work, you'll still need to patch the kernel to support KPM manually (or better use a module for that).
:::
