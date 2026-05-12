# App Hiding

*A surprising number of apps decide that a device is rooted just because they detect the package name of a few suspicious apps: root managers, custom ROM system apps, and apps that need root to work. I find that pretty funny because even on a non-rooted device, having those apps installed can still get you flagged as rooted. Still, you can hide them.*

There are basically two ways to hide apps:

## Change the package name, or just remove it

Not much to say here. Some root managers and other apps already ship builds with a renamed package, so you can simply use those. If the app is open source and you have time to spare, you can also change the package name yourself and rebuild it. Or just uninstall it if you do not need it anymore.

## Fake the installed app list

There are quite a few modules that can do this, such as [HMAL](https://github.com/Dr-TSNG/Hide-My-Applist) and [HMA-OSS](https://github.com/frknkrc44/HMA-OSS). They usually come as LSPosed modules that only hook into the system framework. I use HMA-OSS because it has plenty of features and ships with presets, so I do not have to build everything from scratch.

> *Usage is simple: pick the target app that should not see sensitive apps, then add a preset and you are done. The UI is easy enough to figure out on sight.*
> <a><img src="/img/Screenshot_20260308-025851.png" width="400"/></a>

:::tip
Besides app hiding, HMA-OSS also has presets for hiding developer options state and accessibility services. Pretty handy for banking apps.
:::
