---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 01/24/2023
---

## Publish packages

1. Open a command prompt window and navigate to the directory that contains your *package.json*. If you don't have a *package.json* file, run the following command:

    ```Command
    npm init 
    ```

1. Run the following command in your project directory to publish your npm packages:

    ```Command
    npm publish
    ```

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../../organizations/security/allow-list-ip-url.md#azure-artifacts). 

## Restore packages

1. Run the following command in your project directory to restore your npm packages: 
   
    ```Command
    npm install
    ```
