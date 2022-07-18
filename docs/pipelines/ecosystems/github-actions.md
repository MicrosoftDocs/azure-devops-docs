---
title: Trigger an Azure Pipelines run from GitHub Actions
description: Start an Azure DevOps pipeline run from within a GitHub Action
ms.author: jukullam
ms.custom: github-actions-azure, contperf-fy21q4, freshness-fy22q2
ms.date: 05/03/2022
monikerRange: azure-devops
author: juliakm
ms.topic: quickstart
---
# Trigger an Azure Pipelines run from GitHub Actions

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Get started using [GitHub Actions](https://docs.github.com/en/actions) with Azure Pipelines. GitHub Actions help you automate your software development workflows from within GitHub. You can deploy workflows in the same place where you store code and collaborate on pull requests and issues. 

If you have both Azure Pipelines and GitHub Actions workflows, you might want to trigger a pipeline run from within a GitHub Action. For example, you might have a specific set of pipeline tasks that you want to trigger from your GitHub Actions workflow. You can trigger a pipeline run with the [Azure Pipelines Action](https://github.com/marketplace/actions/azure-pipelines-action).  

## Prerequisites

- A working Azure pipeline. [Create your first pipeline](../create-first-pipeline.md). 
- A GitHub account with a repository. [Join GitHub](https://github.com/join) and [create a repository](https://docs.github.com/en/github/getting-started-with-github/create-a-repo). 
- An Azure DevOps personal access token (PAT) to use with GitHub Actions. [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

## Authenticate with Azure Pipelines

Use a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (PAT) to connect your GitHub account to Azure DevOps. You can generate a PAT from within Azure DevOps and then store it as a GitHub secret. Within your GitHub workflow, reference the secret so that your GitHub Actions can authenticate with your Azure DevOps project. 

1. Open your GitHub repository and go to **Settings**.

    :::image type="content" source="media/github-repo-settings.png" alt-text="Select Settings in GitHub":::


2. Select **Secrets** and then **New repository secret**.

    :::image type="content" source="media/select-secrets.png" alt-text="Choose to add a secret":::

3. Paste in your PAT and give it the name `AZURE_DEVOPS_TOKEN`. 

4. Save by selecting **Add secret**.


## Create a GitHub workflow that triggers a pipeline

[GitHub workflows](/azure/developer/github/github-actions) are a series of actions (like tasks in Azure Pipelines). Use the [Azure Pipelines Action](https://github.com/marketplace/actions/azure-pipelines-action) to trigger a pipeline run. 

Do the following steps to create a workflow from within GitHub Actions. Then, you can adapt the workflow to meet your needs. The relevant section for connecting to Azure Pipelines is the Azure Pipelines action. 

1. In your repository on GitHub, create a YAML file in the `.github/workflows` directory.

2. Copy the following contents into your YAML file. Customize the `azure-devops-project-url` and  `azure-pipeline-name` values. The `azure-devops-project-url` shouldn't have a trailing slash.

    ```yaml
    name: CI

    # Run this workflow every time a commit gets pushed to main or a pull request gets opened against main
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

3. Commit and push your workflow file.

4. The workflow runs every time you push a commit to main or open a pull request against main. To verify that your action ran, open your GitHub repository and select **Actions**.

    :::image type="content" source="media/github-actions-header.png" alt-text="Select Actions in the GitHub navigation"::: 

5. Select the workflow title to see more information about the run. You should see a green check mark for the Azure Pipelines Action. Open the Action to see a direct link to the pipeline run. 

    :::image type="content" source="media/pipeline-run-from-github.png" alt-text="GitHub Actions detailed run":::


## Branch considerations

The pipeline your branch runs on depends on whether your pipeline is in the same repo as your GitHub workflow file. 

* If the pipeline and the GitHub workflow are in different repositories, the triggered pipeline version in the branch specified by **Default branch for manual and scheduled builds** runs.
* If the pipeline and the GitHub workflow are in the same repository, the triggered pipeline version in the same branch as the triggering pipeline runs. 

To configure the **Default branch for manual and scheduled builds** setting, see [Default branch for manual and scheduled builds setting](../process/pipeline-default-branch.md).

## Clean up resources

If you're not going to continue to use your GitHub workflow, [disable the workflow](https://docs.github.com/actions/managing-workflow-runs/disabling-and-enabling-a-workflow).


## Next steps

> [!div class="nextstepaction"]
> [Deploy to Azure using GitHub Actions](/azure/developer/github/github-actions)
