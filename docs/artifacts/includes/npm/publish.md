---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 10/15/2021
---

Follow this quick tutorial to learn how to connect your npm client to your feed and publish your packages using the command line. If you don't have a feed yet, you can follow the steps in the quickstart to [Create your own feed](../../get-started-npm.md#create-a-feed). 

## Project setup

1. From within your project, select **Artifacts** and then select **Connect to feed**. 

1. Select **npm** and then follow the instructions under **Project setup** to configure your .npmrc file.

    :::image type="content" source="../../npm/media/project-setup-npm.png" alt-text="Screenshot showing how to set up your project":::

## Publish npm packages

1. Open a command prompt window and navigate to the directory that contains your *package.json*. If you don't have a *package.json* file, run the following command:

    ```Command
    npm init 
    ```

1. Run the following command in your project directory to publish your npm packages:

    ```Command
    npm publish
    ```

## Restore npm packages

1. Run the following command in your project directory to restore your npm packages: 
   
    ```Command
    npm install
    ```

## Related articles

- [Publish npm packages (YAML/Classic)](../../../pipelines/artifacts/npm.md)
- [Use packages from npmjs.com](../../npm/upstream-sources.md)
- [Use npm audit](../../npm/npm-audit.md)
