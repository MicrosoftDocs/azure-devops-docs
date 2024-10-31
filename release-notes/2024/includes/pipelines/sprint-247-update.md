---
author: ckanyika
ms.author: ckanyika
ms.date: 11/1/2024
ms.topic: include
---

### macOS-15 Sequia is available in preview

The `macOS-15` image is now available in preview for Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'macos-15'`:  

```yaml
- job: macOS15
  pool:
    vmImage: 'macOS-15'
  steps:
  - bash: |
      echo Hello from macOS Sequia Preview
      sw_vers
```

For macOS-15 installed software, see [image configuration](https://github.com/actions/runner-images/blob/main/images/macos/macos-15-Readme.md).

The `macOS-14` image will still be used when specifying `macOS-latest`. Once `macOS-15` is generally available, `macOS-latest` will migrate directly to `macOS-15`.


### Newly created Azure Service Connections create App registrations with new naming convention

Currently, a Service Connection is named `<azure devops org>-<azure devops project>-<azure subscription id>`. This makes it difficult to correlate App registrations to service connections apart that target the same Azure subscription. To make it easy to distinguish App registrations, the name of the app registration will include the id of the service connection: `<azure devops org>-<azure devops project>-<service connection id>`.

The id of a service connection can be found on the service connection details page:

> [!div class="mx-imgBorder"]
> ![Screenshot of service connection details page.](../../media/247-pipelines-01.png "Screenshot of service connection details page")

