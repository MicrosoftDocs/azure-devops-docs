---
title: Manage variables in variable groups with the Azure DevOps CLI
description: Use this Azure DevOps CLI sample to create and manage secret and nonsecret variables in an Azure Pipelines variable group.
author: juliakm
ms.author: jukullam
manager: mijacobs
ms.date: 08/15/2024
ms.topic: sample
ms.devlang: azurecli 
monikerRange: 'azure-devops'
ms.custom: devx-track-azurecli
---

# Manage variables in variable groups with the Azure DevOps CLI

[!INCLUDE [version-gt-2022](../../../includes/version-gt-2022.md)]

Managing variables in Azure Pipelines is crucial for maintaining flexibility and security in your CI/CD workflows. This guide demonstrates how to use the Azure DevOps CLI to create and manage both secret and nonsecret variables within an Azure Pipelines variable group. By using variable groups, you can centralize the management of variables and ensure that sensitive information is securely handled.

With the sample in this guide, you learn how to:

- Define an Azure Pipelines pipeline using a YAML file stored in GitHub.
- Create a variable group containing both secret and nonsecret variables.
- Execute the pipeline using the Azure DevOps CLI and monitor the run processing and output.

> [!NOTE]
> This sample demonstrates the functionality of Azure DevOps CLI with variable groups. For increased security, [define variables in variables groups in the Pipelines UI](../../library/variable-groups.md) or [link a variable group to secrets in Azure Key Vault](../../library/link-variable-groups-to-key-vaults.md). 

[!INCLUDE [include](~/../docs/reusable-content/azure-cli/azure-cli-prepare-your-environment.md)]

- A [GitHub repository with Azure Pipelines installed](../../get-started/pipelines-sign-up.md)
- A [GitHub personal access token (PAT)](https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) for access
- An [Azure DevOps organization](../../get-started/pipelines-sign-up.md) with a [personal access token (PAT)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) for authentication
- [Project Collection Administrator permissions in the Azure DevOps organization](../../../organizations/security/change-organization-collection-level-permissions.md)

## Save Pipeline YAML file

Save the following YAML pipeline definition as a file called *azure-pipelines.yml* in the root directory and `main` branch of your GitHub repository.

```yaml
parameters:
- name: image
  displayName: 'Pool image'
  default: ubuntu-latest
  values:
  - windows-latest
  - windows-latest
  - ubuntu-latest
  - ubuntu-latest
  - macOS-latest
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

This sample does the following tasks:

* Create the DevOps resources
* Run the pipeline
* Modify the variable values three times
* Run the pipeline again each time the variable values are changed

The script creates the following resources in Azure DevOps:

* A project in your DevOps organization
* A GitHub service connection
* A pipeline
* A variable group with two nonsecret variables and one secret variable

Before you run the script, replace the following placeholders as follows:

- `<devops-organization>` Your Azure DevOps organization name
- `<github-organization>` Your GitHub organization or user name
- `<github-repository>` Your GitHub repository name
- `<pipelinename>` A name for the pipeline that is between 3-19 characters and contains only numerals and lowercase letters. The script adds a five-digit unique identifier.

Save your GitHub PAT in your local environment.

```bash
AZURE_DEVOPS_EXT_GITHUB_PAT=<your-github-pat>
```


After you store the YAML file in GitHub, run the following Azure DevOps CLI script in a Bash shell in Cloud Shell or locally. 

```azurecli
#!/bin/bash

# Provide placeholder variables.
devopsOrg="https://dev.azure.com/<devops-organization>"
githubOrg="<github-organization>"
githubRepo="<github-repository>"
pipelineName="<pipelinename>"
repoName="$githubOrg/$githubRepo"
repoType="github"
branch="main"

# Declare other variables.
uniqueId=$RANDOM
devopsProject="Contoso DevOps Project $uniqueId"
serviceConnectionName="Contoso Service Connection $uniqueId"

# Sign in to Azure CLI and follow the sign-in instructions, if necessary.
echo "Sign in."
az login

# Sign in to Azure DevOps with your Azure DevOps PAT, if necessary.
echo "Sign in to Azure DevOps."
az devops login

# Create the Azure DevOps project and set defaults.
projectId=$(az devops project create \
    --name "$devopsProject" --organization "$devopsOrg" --visibility private --query id)
projectId=${projectId:1:-1}  # Just set to GUID; drop enclosing quotes.
az devops configure --defaults organization="$devopsOrg" project="$devopsProject"
pipelineRunUrlPrefix="$devopsOrg/$projectId/_build/results?buildId="

# Create GitHub service connection.
githubServiceEndpointId=$(az devops service-endpoint github create \
    --name "$serviceConnectionName" --github-url "https://www.github.com/$repoName" --query id)
githubServiceEndpointId=${githubServiceEndpointId:1:-1}  # Just set to GUID; drop enclosing quotes.

# Create the pipeline.
pipelineId=$(az pipelines create \
    --name "$pipelineName" \
    --skip-first-run \
    --repository $repoName \
    --repository-type $repoType \
    --branch $branch \
    --service-connection $githubServiceEndpointId \
    --yml-path azure-pipelines.yml \
    --query id)

# Create a variable group with 2 non-secret variables and 1 secret variable.
# (contososecret < a < b). Then run the pipeline.
variableGroupId=$(az pipelines variable-group create \
    --name "$variableGroupName" --authorize true --variables a=12 b=29 --query id)
az pipelines variable-group variable create \
    --group-id $variableGroupId --name contososecret --secret true --value 17
pipelineRunId1=$(az pipelines run --id $pipelineId --open --query id)
echo "Go to the pipeline run's web page to view the output results of the 'Test variable group variables' job for the 1st run."
echo "If the web page doesn't automatically appear, go to:"
echo "    ${pipelineRunUrlPrefix}${pipelineRunId1}"
read -p "Press Enter to change the value of one of the variable group's nonsecret variables, then run again:"

# Change the value of one of the variable group's nonsecret variables.
az pipelines variable-group variable update \
    --group-id $variableGroupId --name a --value 22
pipelineRunId2=$(az pipelines run --id $pipelineId --open --query id)
echo "Go to the pipeline run's web page to view the output results of the 'Test variable group variables' job for the 2nd run."
echo "If the web page doesn't automatically appear, go to:"
echo "    ${pipelineRunUrlPrefix}${pipelineRunId2}"
read -p "Press Enter to change the value of the variable group's secret variable, then run once more:"

# Change the value of the variable group's secret variable.
az pipelines variable-group variable update \
    --group-id $variableGroupId --name contososecret --value 35
pipelineRunId3=$(az pipelines run --id $pipelineId --open --query id)
echo "Go to the pipeline run's web page to view the output results of the 'Test variable group variables' job for the 3rd run."
echo "If the web page doesn't automatically appear, go to:"
echo "    ${pipelineRunUrlPrefix}${pipelineRunId3}"
read -p "Press Enter to continue:"
```

## Clean up resources

To avoid incurring charges for the Azure project, you can delete the sample project, which also deletes its resource.

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
- [az devops project delete](/cli/azure/devops/project#az-devops-project-list)
- [az devops service-endpoint github create](/cli/azure/devops/service-endpoint/github#az-devops-service-endpoint-github-create)
- [az login](/cli/azure/reference-index#az-login)
- [az pipelines create](/cli/azure/pipelines#az-pipelines-create)
- [az pipelines delete](/cli/azure/pipelines#az-pipelines-delete)
- [az pipelines run](/cli/azure/pipelines#az-pipelines-run)
- [az pipelines variable-group create](/cli/azure/pipelines/variable-group#az-pipelines-variable-group-create)
- [az pipelines variable-group delete](/cli/azure/pipelines/variable-group#az-pipelines-variable-group-delete)
- [az pipelines variable-group variable create](/cli/azure/pipelines/variable-group/variable#az-pipelines-variable-group-variable-create)
- [az pipelines variable-group variable update](/cli/azure/pipelines/variable-group/variable#az-pipelines-variable-group-variable-update)

