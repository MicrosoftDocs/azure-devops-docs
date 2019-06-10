---
ms.topic: include
---

### Filtered downloads for Universal Packages

Until now, you've always had to download an entire Universal Package, even if you only needed a few files from it. With this update, you can specify a minimatch pattern (using the same syntax as Azure Pipelines) to download a subset of files. For example:

`az artifacts universal download --organization "https://dev.azure.com/myorganization/" --feed "myFeed" --name "myPackageName" --version 1.0.0 --path .  --file-filter "**/*.exe;**/*.dll"`

To use this feature, make sure you've updated to the latest Azure DevOps CLI extension: **az extension update -n azure-devops**