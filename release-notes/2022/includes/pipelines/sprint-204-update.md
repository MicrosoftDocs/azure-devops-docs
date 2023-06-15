---
author: gloridelmorales
ms.author: glmorale
ms.date: 6/2/2022
ms.topic: include
---

### Ubuntu 22.04 in preview for Azure Pipelines hosted pools

The Ubuntu 22.04 image is now available in preview for Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'ubuntu-22.04'`:  

```yaml
- job: ubuntu2204
  pool:
    vmImage: 'ubuntu-22.04'
  steps:
  - bash: |
      echo Hello from Ubuntu 22.04 Preview
      lsb_release -d
```
The ubuntu-latest image label will continue to point to ubuntu-20.04 until ubuntu-22.04 comes out of preview later this year. While the Ubuntu 22.04 image is in preview, it currently doesn't support all of the tooling available in ubuntu-20.04 and you may experience longer queue times than other images. For more information, check the [virtual-environments repository](https://github.com/actions/virtual-environments) and [Ubuntu image configurations](https://github.com/actions/virtual-environments/tree/main/images/linux).

### Preview of macOS 12 Monterey for Azure Pipeline hosted pools

The macOS 12 image is now available in preview for Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'macos-12'`:  

```yaml
- job: macOS12
  pool:
    vmImage: 'macOS-12'
  steps:
  - bash: |
      echo Hello from macOS Monterey Preview
      sw_vers
```

The macos-latest image label will continue to point to macos-11 until macos-12 comes out of preview later this year. While the macOS 12 image is in preview, it currently doesn't support all of the tooling available in macOS 11 and you may experience longer queue times than other images. For more information, check the [virtual-environments repository](https://github.com/actions/virtual-environments) and [macOS image configurations](https://github.com/actions/virtual-environments/tree/main/images/macos).
