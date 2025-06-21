---
sidebar_position: 1
---
# Dependency

Install the needed dependencies to compile, on Ubuntu (Firebase Studio) you would execute the following command:

```
sudo apt update -y
sudo apt install -y git-core gnupg flex bison build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 x11proto-core-dev libx11-dev lib32z1-dev libgl1-mesa-dev libxml2-utils xsltproc unzip fontconfig python3 ccache libssl-dev rsync repo
ccache -M 50G
ccache -o compression=true
```
