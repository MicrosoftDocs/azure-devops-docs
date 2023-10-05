---
author: gloridelmorales
ms.author: glmorale
ms.date: 1/19/2022
ms.topic: include
---

### The default agent specification for pipelines will be Windows-2022 

The `windows-2022` image is ready to be the default version for the `windows-latest` label in Azure Pipelines Microsoft-hosted agents. Until now, this label pointed to windows-2019 agents. This change will be rolled out over a period of several weeks beginning on January 17. We plan to complete the migration by March.

Azure Pipelines has supported `windows-2022` since September 2021. We have monitored your feedback to improve the `windows-2022` image stability and now we are ready to set it as the latest.

The `windows-2022` image includes Visual Studio 2022. For a full list of differences between `windows-2022` and `windows-2019`, visit the [GitHub issue](https://github.com/actions/virtual-environments/issues/4856). For a full list of software installed on the image, check [here](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2022-Readme.md).

### Pipeline folder rename validates permissions

Folders containing pipelines can be renamed. Renaming a folder will now succeed only if the user has edit permissions on at least one pipeline contained in the folder.
