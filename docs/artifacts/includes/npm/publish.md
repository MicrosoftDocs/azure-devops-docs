---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 10/15/2021
---

Follow this quick tutorial to learn how to connect your npm client to your feed and publish your packages using the command line. If you don't have a feed yet, you can follow the steps in the quickstart to [Create your own feed](../../get-started-npm.md#create-a-feed). 

## Publish npm packages

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

