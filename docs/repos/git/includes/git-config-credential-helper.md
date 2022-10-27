---
author: vijayma
ms.author: vijayma
ms.date: 10/19/2022
ms.topic: include
msservice: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

The **Credential helper** setting corresponds to the `git config credential.helper` command. This setting is only available at the global scope.

1. From the **Git** menu, choose **Git > Settings** and then select the **Git Global Settings** view to configure this setting.

1. Set **Credential helper** to the desired value, and select **OK** to save.

   :::image type="content" source="../media/git-config/visual-studio-2019/git-experience/credential-helper-setting.png" alt-text="Screenshot of the credential helper setting in the Options dialog box in Visual Studio." lightbox="../media/git-config/visual-studio-2019/git-experience/credential-helper-setting-lrg.png":::

Valid values are:

- `GCM for Windows`: use [Git Credential Manager for Windows](https://github.com/microsoft/Git-Credential-Manager-for-Windows) as the helper.
- `GCM Core`: use [Git Credential Manager Core](https://github.com/microsoft/Git-Credential-Manager-Core) as the helper.
- `Unset` (default): if this setting is unset, the credential helper set in the system config is used. As of Git for Windows 2.29, the default credential helper is `GCM Core`.
