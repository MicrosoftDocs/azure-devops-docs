---
author: ckanyika
ms.author: ckanyika
ms.date: 10/15/2024
ms.topic: include
---

### Ubuntu 24.04 on Azure Pipelines Hosted agents

The Ubuntu 24.04 image is now available for Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'ubuntu-24.04'`:  

```yaml
- job: ubuntu2404
  pool:
    vmImage: 'ubuntu-24.04'
  steps:
  - bash: |
      echo Hello from Ubuntu 24.04 Preview
      lsb_release -d
```

Please note, the ubuntu-latest image label will continue to point to ubuntu-22.04 until later this year. See the [Ubuntu 24.04 image readme](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md) for installed software.


### Enable Running Child Stages


