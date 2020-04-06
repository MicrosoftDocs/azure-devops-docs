---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 02/19/2020
---

Install npm packages from your feed, and also from npmjs.com if you've configured [upstream sources](../../npm/upstream-sources.md), using the npm client.

1. [Set up the npm client with your feed](../../npm/npmrc.md).

1. Open a shell and navigate to the directory that contains your project's **package.json** file.

1. Install a package by running `npm install --save <package>`. 

See the [npm CLI docs](https://docs.npmjs.com/cli/install) for more install options.
