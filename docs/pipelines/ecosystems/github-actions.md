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
- A GitHub account with a repository. [Join GitHub](https://github.com/join) and [create a repository](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/create-a-repo). 
- An Azure DevOps personal access token (PAT) to use with your GitHub action. [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

## Create a GitHub secret

1. Open your GitHub repository and go to **Settings**.

    :::image type="content" source="media/github-repo-settings.png" alt-text="Select Settings in GitHub":::


1. Select **Secrets** and then **New repository secret**.

    :::image type="content" source="media/select-secrets.png" alt-text="Choose to add a secret":::

1. Paste in your PAT and give it the name `AZURE_DEVOPS_TOKEN`. 

1. Save by selecting **Add secret**.


## Add a GitHub workflow

1. In your repository on GitHub, create a new YAML file in the .github/workflows directory.

1. Copy the following contents into your YAML file. Customize the `azure-devops-project-url` and  `azure-pipeline-name` values. 

    ```yaml
    name: CI

    # Run this workflow every time a commit is pushed to main or a pull request is opened against main
    on:
    push:
        branches: [ main ]
    pull_request:
        branches: [ main ]

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

1. Commit and push your workflow file.

1. The workflow will run every time a commit is pushed to main or a pull request is opened against main. To verify that your action ran, open your GitHub repository and select **Actions**.

    :::image type="content" source="media/github-actions-header.png" alt-text="Select Actions in the GitHub navigation"::: 

1. Select the workflow title to see more information about the run. You should see a green check mark for the Azure Pipelines Action. Open the Action to see a direct link to the pipeline run. 

    :::image type="content" source="media/pipeline-run-from-github.png" alt-text="GitHub Actions detailed run":::

## Clean up resources

If you're not going to continue to use the GitHub Action, [disable the workflow](https://docs.github.com/actions/managing-workflow-runs/disabling-and-enabling-a-workflow).


## Next steps

Learn how to connect to the Azure environment and deploy to Azure with GitHub. 
> [!div class="nextstepaction"]
> [Deploy to Azure using GitHub Actions](/azure/developer/github/github-actions)
