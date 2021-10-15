---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 10/15/2021
---

Follow this quick tutorial to learn how to connect your npm client to your feed and publish your packages using the command line. If you don't have a feed yet, you can follow the steps in the quickstart to [Create your own feed](../../get-started-npm.md#create-a-feed). 

## Project setup

1. From within your project, select **Artifacts** and then select **Connect to feed**. 

1. Select **npm** and then follow the instructions under **Project setup** to configure your .npmrc file.

    :::image type="content" source="../../npm/media/project-setup-npm.png" alt-text="Screenshot showing how to set up your project":::

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

