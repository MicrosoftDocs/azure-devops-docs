---
author: ckanyika
ms.author: ckanyika
ms.date: 5/1/2024
ms.topic: include
---

### macOS-14 is available in preview, macOS-11 will be retired June 2024

The `macOS-14` image is now available in preview for Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'macos-14'`:  

```yaml
- job: macOS14
  pool:
    vmImage: 'macOS-14'
  steps:
  - bash: |
      echo Hello from macOS Ventura Preview
      sw_vers
```

For macOS-14 installed software, see the [image configuration](https://github.com/actions/runner-images/blob/main/images/macos/macos-14-Readme.md).

The `macOS-12` image will still be used when specifying `macOS-latest` until we have enough capacity for `macOS-14` available for it to be latest. The `macOS-latest` label will skip macOS-13.

`macOS-11` is deprecated and will be retired June 2024.
