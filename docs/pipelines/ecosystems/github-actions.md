---
title: Trigger an Azure Pipelines run from GitHub Actions
description: Start an Azure DevOps pipeline run from within a GitHub action
ms.author: jukullam
ms.custom: github-actions-azure, contperf-fy21q4
ms.date: 05/13/2021
monikerRange: azure-devops
author: juliakm
ms.topic: quickstart
---

# Quickstart: Trigger an Azure Pipelines run from GitHub Actions

Get started using [GitHub Actions](https://docs.github.com/en/actions) and Azure Pipelines together. GitHub Actions help you automate your software development workflows from within GitHub. You can deploy workflows in the same place where you store code and collaborate on pull requests and issues. 

If you have both Azure Pipelines and GitHub Actions workflows, you might want to trigger a pipeline run from within a GitHub action. For example, you might have a specific set of Azure DevOps pipeline tasks that you want to trigger from your GitHub Actions workflow. 

To accomplish this, you can trigger a pipeline run with the [Azure Pipelines Action](https://github.com/marketplace/actions/azure-pipelines-action).  

## Prerequisites

- A working Azure pipeline. [Create your first pipeline](../create-first-pipeline.md). 
- A GitHub account with a repository. [Join GitHub](https://github.com/join) and [create a repository](https://docs.github.com/en/github/getting-started-with-github/create-a-repo). 
- An Azure DevOps personal access token (PAT) to use with your GitHub action. [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

## Authenticate with Azure Pipelines

You'll use a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (PAT) to connect your GitHub account to Azure DevOps. You can generate a PAT from within Azure DevOps and then store it as a GitHub secret. Within your GitHub workflow, you'll reference the secret so that your GitHub action can authenticate with your Azure DevOps project. 

1. Open your GitHub repository and go to **Settings**.

    :::image type="content" source="media/github-repo-settings.png" alt-text="Select Settings in GitHub":::


1. Select **Secrets** and then **New repository secret**.

    :::image type="content" source="media/select-secrets.png" alt-text="Choose to add a secret":::

1. Paste in your PAT and give it the name `AZURE_DEVOPS_TOKEN`. 

1. Save by selecting **Add secret**.


## Create a GitHub workflow that triggers a pipeline

[GitHub workflows](/azure/developer/github/github-actions) are a series of actions (like tasks in Azure Pipelines). You'll use the [Azure Pipelines Action](https://github.com/marketplace/actions/azure-pipelines-action) to trigger a pipeline run. 

This example walks through creating a new workflow from within GitHub Actions and can be adapted to meet your needs. The relevant section for connecting to Azure Pipelines is the Azure Pipelines action. 

1. In your repository on GitHub, create a new YAML file in the `.github/workflows` directory.

1. Copy the following contents into your YAML file. Customize the `azure-devops-project-url` and  `azure-pipeline-name` values. The `azure-devops-project-url` shouldn't have a trailing slash.

    ```yaml
    name: CI

    # Run this workflow every time a commit is pushed to main or a pull request is opened against main
    on:
      push:
        branches:
          - main
      pull_request:
        branches: 
          - main

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


## Branch considerations

The pipeline your branch runs on depends on whether your pipeline is in the same repo as your GitHub workflow file. 

* If the pipeline and the GitHub workflow are in different repositories, the triggered pipeline version in the branch specified by **Default branch for manual and scheduled builds** is run.
* If the pipeline and the GitHub workflow are in the same repository, the triggered pipeline version in the same branch as the triggering pipeline is run. 

To configure the **Default branch for manual and scheduled builds** setting, see [Default branch for manual and scheduled builds setting](../process/pipeline-triggers.md#default-branch-for-manual-and-scheduled-builds-setting).

## Clean up resources

If you're not going to continue to use your GitHub workflow, [disable the workflow](https://docs.github.com/actions/managing-workflow-runs/disabling-and-enabling-a-workflow).


## Next steps

> [!div class="nextstepaction"]
> [Deploy to Azure using GitHub Actions](/azure/developer/github/github-actions)
