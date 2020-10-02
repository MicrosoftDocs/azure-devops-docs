---
title: Trigger a pipeline run from a GitHub action
description: Start a pipeline run from within a GitHub action
ms.author: jukullam
ms.custom: github-actions-azure
ms.date: 09/11/2020
monikerRange: azure-devops
author: juliakm
ms.topic: quickstart
---

# Quickstart: trigger a pipeline run from GitHub Actions

Get started using GitHub Actions and Azure Pipelines together. 

If you have both Azure Pipelines and GitHub Actions workflows, you may want to trigger a pipeline run from within a GitHub action. You can do so with the [Azure Pipelines Action](https://github.com/marketplace/actions/azure-pipelines-action).  

## Prerequisites

- A working Azure pipeline. [Create your first pipeline](../create-first-pipeline.md). 
- A GitHub account with a repository. [Join GitHub](https://github.com/join) and [create a repository](https://docs.github.com/en/github/getting-started-with-github/create-a-repo). 
- An Azure DevOps personal access token (PAT) to use with your GitHub action. [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

## Create a GitHub secret

1. Open your GitHub repository and go to **Settings**.

    :::image type="content" source="media/github-repo-settings.png" alt-text="Select Settings in GitHub":::


1. Select **Secrets** and then **New Secret**.

    :::image type="content" source="media/select-secrets.png" alt-text="Choose to add a secret":::

1. Paste in your PAT and give it the name `AZURE_DEVOPS_TOKEN`. 

1. Save by selecting **Add secret**.


## Add a GitHub workflow

1. Open your GitHub repository and select **Actions**.

    :::image type="content" source="media/github-actions-header.png" alt-text="Select Actions in the GitHub navigation"::: 

1. Select _Set up your workflow yourself_. 

1. Delete everything after `branches: [ master ]`. Your remaining workflow should look like this. 

    ```yaml
    name: CI

    on:
    push:
        branches: [ master ]
    pull_request:
        branches: [ master ]
    ```

1. Select the **Azure Pipelines Action** in the Marketplace.  

    :::image type="content" source="media/marketplace-pipelines.png" alt-text="GitHub Actions Marketplace":::

1. Copy this workflow and replace the contents of your GitHub Actions workflow file. Customize the `azure-devops-project-url` and  `azure-pipeline-name` values. Your complete workflow should look like this. 

    ```yaml
    name: CI

    on:
    push:
        branches: [ master ]
    pull_request:
        branches: [ master ]

    jobs:
        build:
            name: Call Azure Pipeline
            runs-on: ubuntu-latest
            steps:
            - name: Azure Pipelines Action
              uses: Azure/pipelines@v1
              with:
                azure-devops-project-url: https://dev.azure.com/organization/project-name
                azure-pipeline-name: 'My Pipeline'
                azure-devops-token: ${{ secrets.AZURE_DEVOPS_TOKEN }}
    ```

1. On the **Actions** page, verify that your workflow ran. Select the workflow title to see more information about the run. You should see a green check mark for the Azure Pipelines Action. Open the Action to see a direct link to the pipeline run. 

    :::image type="content" source="media/pipeline-run-from-github.png" alt-text="GitHub Actions detailed run":::

## Clean up resources

If you're not going to continue to use the GitHub Action, delete the workflow with the following steps:

1. Open _.github/workflows_ in your GitHub repository.
1. Open the workflow you created and **Delete**.

    :::image type="content" source="media/github-delete.png" alt-text="Delete the GitHub workflow":::

## Next steps

Learn how to connect to the Azure environment and deploy to Azure with GitHub. 
> [!div class="nextstepaction"]
> [Deploy to Azure using GitHub Actions](https://docs.microsoft.com/azure/developer/github/github-actions)
