---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 03/09/2021
---

You can install npm packages from your Azure Artifacts feed or the public registry.

1. [Set up your client's npmrc](../../npm/npmrc.md).

1. open an elevated command prompt window and navigate to the directory that contains your **package.json** file.

1. Install a package by running this command:
    ```Command
    npm install --save <package>
    ```

For more details, see the [npm-install](https://docs.npmjs.com/cli/install) docs.
