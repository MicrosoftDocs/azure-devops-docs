---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 06/19/2020
---

This article will show you how to connect your npm client to your feed in Azure Artifacts and share your packages with your team and your organization.

If you don't have a feed yet, check out the [Create a feed](../../get-started-npm.md#create-a-feed) section in the npm quickstart to set up your own Azure Artifacts feed.

## Publish your packages

To publish an npm package to your feed, follow these steps:

1. [Set up the npm client with your feed](../../npm/npmrc.md).

1. Open a shell and navigate to the directory that contains your package's **package.json** file.
   If you don't have a **package.json** file, run the following command:

   ```
   npm init
   ```
    See the [npm CLI docs](https://docs.npmjs.com/cli-documentation/cli) for a list of npm commands.
   
1. Push your package to your feed 
   ```
   npm publish
   ```

    See the [npm publish docs](https://docs.npmjs.com/cli/publish) for more information on the `publish` command.

## What's next?

Check out the [Azure Artifacts landing page](../../index.yml) to learn about other topics.
