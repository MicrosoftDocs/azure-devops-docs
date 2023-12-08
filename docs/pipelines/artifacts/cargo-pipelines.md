---
title: Publish Cargo packages with Azure Pipelines
description: How to publish Cargo packages to an Azure Artifacts feed using Azure Pipelines
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.topic: quickstart
ms.date: 12/08/2023
monikerRange: azure-devops
"recommendations": "true"
---

# Publish Cargo packages with Azure Pipelines

Azure Pipelines enables developers to publish their Cargo packages to Azure Artifacts feeds and public registries such as Crates.io. In this article, you will learn how to publish your Cargo packages to an Azure Artifacts feed using both YAML and Classic pipelines.

This article will guide you through how to:

> [!div class="checklist"]  
> * Create an Azure Artifacts feed 
> * Authenticate with Azure Artifacts
> * Publish Cargo packages 

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md) if you haven't already.

- An Azure DevOps project. [Create a project](../../organizations/projects/create-project.md#create-a-project) if you don't have one yet.

## Create a feed

Azure Artifacts recommends having a dedicated feed for consuming crates from crates.io and a separate feed exclusively for publishing internal crates. If you already have a feed, you can proceed to the next section.
 
1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a **Name** for your feed, specify its **Visibility**, and then choose a **Scope** for your feed.

1. Select **Create** when you're done.

## Authenticate with Azure Artifacts

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select **Connect to feed**, and then select **Cargo** from the left pane.

1. Follow the instructions in the **Project setup** section by adding the provided snippet to your *config.toml* file in your source repository:

    - Project-scoped feed:
    
    ```
    [registries]
    <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/Cargo/index/" }
    
    [source.crates-io]
    replace-with = "<FEED_NAME>"
    ```

    - Organization-scoped feed:
    
    ```
    [registries]
    <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/Cargo/index/" }
    
    [source.crates-io]
    replace-with = "<FEED_NAME>"
    ```

1. Use the [CargoAuthenticate](/azure/devops/pipelines/tasks/reference/cargo-authenticate-v0) task to authenticate from your pipeline:

# [YAML](#tab/yaml)

```yaml
- task: CargoAuthenticate@0
  displayName: 'Cargo Authenticate'
  inputs:
    configFile: 'hello-rust/Cargo.toml'    ## Path to the config.toml file that specifies the registries you want to work with. Select the file, not the folder e.g. "/.cargo/config.toml"
```

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Select the `+` sign to add a new task. Search for the **Cargo Authenticate** task, and then select **Add** to add it to your pipeline.

1. Select the ellipsis icon to open a new window displaying your repository contents, and then choose your *config.toml* file.

    :::image type="content" source="media/cargo-authenticate-classic.png" alt-text="A screenshot showing the Cargo authenticate task in Azure Pipelines.":::

* * *