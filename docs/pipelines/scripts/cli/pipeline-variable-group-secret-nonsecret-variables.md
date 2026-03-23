---
title: Manage variables in variable groups with the Azure DevOps CLI
description: Use this Azure DevOps CLI sample to create and manage secret and nonsecret variables in an Azure Pipelines variable group.
author: juliakm
ms.author: jukullam
manager: mijacobs
ms.date: 01/14/2026
ms.topic: how-to
ms.devlang: azurecli 
monikerRange: 'azure-devops'
ms.custom: devx-track-azurecli
ai-usage: ai-assisted
---

# Manage variables in variable groups with the Azure DevOps CLI

[!INCLUDE [version-gt-2022](../../../includes/version-gt-2022.md)]

Managing variables in Azure Pipelines is crucial for maintaining flexibility and security in your CI/CD workflows. This article shows how to use the Azure DevOps CLI to create and manage both secret and nonsecret variables within an Azure Pipelines variable group. By using variable groups, you can centralize the management of variables and ensure that sensitive information is securely handled.

By using the sample in this article, you learn how to:

- Define an Azure Pipelines pipeline using a YAML file stored in GitHub.
- Create a variable group containing both secret and nonsecret variables.
- Execute the pipeline by using the Azure DevOps CLI and monitor the run processing and output.

> [!NOTE]
> This sample demonstrates the functionality of Azure DevOps CLI with variable groups. For increased security, [define variables in variables groups in the Pipelines UI](../../library/variable-groups.md) or [link a variable group to secrets in Azure Key Vault](../../library/link-variable-groups-to-key-vaults.md). 

[!INCLUDE [include](~/../docs/reusable-content/azure-cli/azure-cli-prepare-your-environment.md)]

- A [GitHub repository with Azure Pipelines installed](../../get-started/pipelines-sign-up.md)
- A [GitHub personal access token (PAT)](https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) for access
- An [Azure DevOps organization](../../get-started/pipelines-sign-up.md) with a [personal access token (PAT)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) for authentication
- [Project Collection Administrator permissions in the Azure DevOps organization](../../../organizations/security/change-organization-collection-level-permissions.md)

## Save pipeline YAML file

Save the following YAML pipeline definition as a file named *azure-pipelines.yml* in the root directory and `main` branch of your GitHub repository.

```yaml
parameters:
- name: image
  displayName: 'Pool image'
  default: ubuntu-latest
  values:
  - windows-latest
  - ubuntu-latest
  - macOS-latest
- name: test
  displayName: Run Tests?
  type: boolean
  default: false

variables:
- group: "Contoso Variable Group"
- name: va
  value: $[variables.a]
- name: vb
  value: $[variables.b]
- name: vcontososecret
  value: $[variables.contososecret]

trigger:
- main

pool:
  vmImage: ubuntu-latest

steps:
- script: |
    echo "Hello, world!"
    echo "Pool image: ${{ parameters.image }}"
    echo "Run tests? ${{ parameters.test }}"
  displayName: 'Show runtime parameter values'

- script: |
    echo "a=$(va)"
    echo "b=$(vb)"
    echo "contososecret=$(vcontososecret)"
    echo
    echo "Count up to the value of the variable group's nonsecret variable *a*:"
    for number in {1..$(va)}
    do
        echo "$number"
    done
    echo "Count up to the value of the variable group's nonsecret variable *b*:"
    for number in {1..$(vb)}
    do
        echo "$number"
    done
    echo "Count up to the value of the variable group's secret variable *contososecret*:"
    for number in {1..$(vcontososecret)}
    do
        echo "$number"
    done
  displayName: 'Test variable group variables (secret and nonsecret)'
  env:
    SYSTEM_ACCESSTOKEN: $(System.AccessToken)
```

## The sample script

This sample script performs the following tasks:

* Creates the DevOps resources
* Runs the pipeline
* Modifies the variable values three times
* Runs the pipeline again each time the variable values change

The script creates the following resources in Azure DevOps:

* A project in your DevOps organization
* A GitHub service connection
* A pipeline
* A variable group with two nonsecret variables and one secret variable

Before you run the script, replace the following placeholders:

- `<devops-organization>` Your Azure DevOps organization name. For example, if your Azure DevOps URL is `https://dev.azure.com/Contoso`, use `Contoso`.
- `<github-organization>` Your GitHub organization or user name. For example, `myusername` or `myorganization`.
- `<github-repository>` Your GitHub repository name. For example, if your repository URL is `https://github.com/myusername/my-repo`, use `my-repo`.
- `<pipelinename>` A name for the pipeline that is between 3-19 characters and contains only numerals and lowercase letters. The script adds a five-digit unique identifier. For example, `mypipeline`.

Save your GitHub PAT in your local environment.

```bash
AZURE_DEVOPS_EXT_GITHUB_PAT=<your-github-pat>
```

After storing the YAML file in GitHub, run the following Azure DevOps CLI script in a Bash shell in Azure Cloud Shell or locally.

> [!IMPORTANT]
> Ensure you have the latest version of the Azure CLI and the DevOps extension installed. Run `az upgrade` and `az extension add --name azure-devops` before executing this script.

```azurecli
#!/bin/bash

# ===== CONFIGURATION =====
# Replace the placeholder values with your own.
devopsOrg="https://dev.azure.com/<devops-organization>"
githubOrg="<github-organization>"
githubRepo="<github-repository>"
pipelineName="<pipeline-name>"
repoName="$githubOrg/$githubRepo"
repoType="github"
branch="main"

# Declare other variables.
uniqueId=$RANDOM
devopsProject="Contoso DevOps Project $uniqueId"
serviceConnectionName="Contoso Service Connection $uniqueId"
variableGroupName="Contoso Variable Group $uniqueId"

# ===== AUTHENTICATION =====
# Sign in to Azure CLI and follow the sign-in instructions, if necessary.
echo "Signing in to Azure CLI..."
az login

# Sign in to Azure DevOps with your Azure DevOps PAT, if necessary.
# Uncomment the following line if your Azure AD account doesn't have Azure DevOps access.
# echo "Signing in to Azure DevOps..."
# az devops login

# ===== PROJECT CREATION =====
# Create the Azure DevOps project and set defaults.
echo "Creating Azure DevOps project..."
projectId=$(az devops project create \
    --name "$devopsProject" \
    --organization "$devopsOrg" \
    --visibility private \
    --query id \
    --output tsv)
echo "Project created with ID: $projectId"

# Set default organization and project for subsequent commands.
az devops configure --defaults organization="$devopsOrg" project="$devopsProject"
pipelineRunUrlPrefix="$devopsOrg/$projectId/_build/results?buildId="

# ===== SERVICE CONNECTION =====
# Create GitHub service connection.
echo "Creating GitHub service connection..."
githubServiceEndpointId=$(az devops service-endpoint github create \
    --name "$serviceConnectionName" \
    --github-url "https://www.github.com/$repoName" \
    --query id \
    --output tsv)
echo "Service connection created with ID: $githubServiceEndpointId"

# ===== PIPELINE CREATION =====
# Create the pipeline from the YAML file.
echo "Creating pipeline..."
pipelineId=$(az pipelines create \
    --name "$pipelineName" \
    --skip-first-run \
    --repository $repoName \
    --repository-type $repoType \
    --branch $branch \
    --service-connection $githubServiceEndpointId \
    --yml-path azure-pipelines.yml \
    --query id \
    --output tsv)
echo "Pipeline created with ID: $pipelineId"

# ===== VARIABLE GROUP =====
# Create a variable group with 2 non-secret variables and 1 secret variable.
echo "Creating variable group..."
variableGroupId=$(az pipelines variable-group create \
    --name "$variableGroupName" \
    --authorize true \
    --variables a=12 b=29 \
    --query id \
    --output tsv)
echo "Variable group created with ID: $variableGroupId"

# Add a secret variable to the group.
echo "Adding secret variable to the group..."
az pipelines variable-group variable create \
    --group-id $variableGroupId \
    --name contososecret \
    --secret true \
    --value 17

# ===== PIPELINE RUNS =====
# Run the pipeline for the first time.
echo "Running pipeline (1st run)..."
pipelineRunId1=$(az pipelines run \
    --id $pipelineId \
    --query id \
    --output tsv)
echo "Pipeline run 1 started with ID: $pipelineRunId1"
echo "Go to the pipeline run's web page to view the output results of the 'Test variable group variables' job."
echo "URL: ${pipelineRunUrlPrefix}${pipelineRunId1}"
read -p "Press Enter to change the value of variable 'a', then run again:"

# Change the value of one of the variable group's nonsecret variables.
echo "Updating variable 'a'..."
az pipelines variable-group variable update \
    --group-id $variableGroupId \
    --name a \
    --value 22

# Run the pipeline for the second time.
echo "Running pipeline (2nd run)..."
pipelineRunId2=$(az pipelines run \
    --id $pipelineId \
    --query id \
    --output tsv)
echo "Pipeline run 2 started with ID: $pipelineRunId2"
echo "URL: ${pipelineRunUrlPrefix}${pipelineRunId2}"
read -p "Press Enter to change the value of the secret variable, then run once more:"

# Change the value of the variable group's secret variable.
echo "Updating secret variable 'contososecret'..."
az pipelines variable-group variable update \
    --group-id $variableGroupId \
    --name contososecret \
    --value 35

# Run the pipeline for the third time.
echo "Running pipeline (3rd run)..."
pipelineRunId3=$(az pipelines run \
    --id $pipelineId \
    --query id \
    --output tsv)
echo "Pipeline run 3 started with ID: $pipelineRunId3"
echo "URL: ${pipelineRunUrlPrefix}${pipelineRunId3}"
read -p "Press Enter to continue:"
```

## Clean up resources

To avoid incurring charges for the Azure project, delete the sample project. This action also deletes its resource.

Copy the `id` of the sample project from the output of the following command:

```azurecli
az devops project list --org <your-organization>
```

Delete the project by running the following command:

```azurecli
az devops project delete --id <project-id> --org <your-organization> --yes
```

Clean up your local environment by running the following commands:

```azurecli
export AZURE_DEVOPS_EXT_GITHUB_PAT=""
az devops configure --defaults organization="" project=""
```

## Azure CLI references

The sample in this article uses the following Azure CLI commands:

- [az devops configure](/cli/azure/devops#az-devops-configure)
- [az devops project create](/cli/azure/devops/project#az-devops-project-create)
- [az devops project delete](/cli/azure/devops/project#az-devops-project-delete)
- [az devops project list](/cli/azure/devops/project#az-devops-project-list)
- [az devops service-endpoint github create](/cli/azure/devops/service-endpoint/github#az-devops-service-endpoint-github-create)
- [az login](/cli/azure/reference-index#az-login)
- [az pipelines create](/cli/azure/pipelines#az-pipelines-create)
- [az pipelines delete](/cli/azure/pipelines#az-pipelines-delete)
- [az pipelines run](/cli/azure/pipelines#az-pipelines-run)
- [az pipelines variable-group create](/cli/azure/pipelines/variable-group#az-pipelines-variable-group-create)
- [az pipelines variable-group delete](/cli/azure/pipelines/variable-group#az-pipelines-variable-group-delete)
- [az pipelines variable-group variable create](/cli/azure/pipelines/variable-group/variable#az-pipelines-variable-group-variable-create)
- [az pipelines variable-group variable update](/cli/azure/pipelines/variable-group/variable#az-pipelines-variable-group-variable-update)

## Related content

- [Manage variable groups](../../library/variable-groups.md)

- [Link a variable group to secrets in Azure Key Vault](../../library/link-variable-groups-to-key-vaults.md)

- [Use predefined variables](../../build/variables.md)
