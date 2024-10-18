---
title: Create a Managed DevOps Pool using Azure CLI
description: Learn how to create a Managed DevOps Pool using Azure CLI.
ms.date: 10/18/2024
ms.topic: quickstart
#Customer intent: As a developer, I want to learn how to create a Managed DevOps Pool using Azure CLI and run a pipeline in the new pool.
---

# Quickstart: Create a Managed DevOps Pool using Azure CLI

This article shows you how to create a Managed DevOps Pool using Azure CLI, and run a pipeline in it.

## Prerequisites

Before completing the steps in this article, you must have configured your Azure subscription and Azure DevOps organization for use with Managed DevOps Pools, as described in the [Prerequisites](./prerequisites.md) article. These steps need to be completed only once per Azure subscription and Azure DevOps organization.

## Install or run in Azure Cloud Shell

The easiest way to learn how to use the Azure CLI is by running a Bash environment in [Azure Cloud Shell](https://portal.azure.com/#cloudshell/) through your browser. To learn about Cloud Shell, see [Quickstart for Bash in Azure Cloud Shell](/azure/cloud-shell/quickstart).

When you're ready to install the Azure CLI, see the [installation instructions](/cli/azure/install-azure-cli)
for Windows, Linux, macOS, and Docker container.

Check your version by running `az --version`. Azure Cloud Shell always has the latest version of the Azure CLI preinstalled.

```azurecli-interactive
az version
```

## Sign in to the Azure CLI

Open a command prompt (on Windows, use Windows Command Prompt or PowerShell) and run the following commands. If you're using [Azure Cloud Shell](https://portal.azure.com/#cloudshell/) you don't need to run `az login` unless you want to use a different account.

1. Sign in the to Azure CLI.
 
   ```azurecli
   az login
   ```

2. If you have more than one Azure subscription, set your default Azure subscription.

   ```azurecli
   az account set --subscription "My subscription name"
   ```

   To get a list of your subscriptions, you can run the following command.

   ```azurecli
   az account list -o table
   ```

   If you have multiple tenants, or want to see more information about working with Azure subscription using Azure CLI, see [How to manage Azure subscriptions with the Azure CLI](/cli/azure/manage-azure-subscriptions-azure-cli). 


## Define environment variables

1. Run the following commands to generate the names for the resources in this quickstart. This example uses the `EastUS2` region. Replace `EastUS2` with your desired region.

    ```bash
    export RANDOM_ID="$(openssl rand -hex 3)"
    export RESOURCE_GROUP_NAME="myManagedDevOpsPoolGroup$RANDOM_ID"
    export REGION=EastUS2
    export POOL_NAME="mdpPool$RANDOM_ID"
    export DEV_CENTER_NAME="mdpDevCenter$RANDOM_ID"
    export DEV_CENTER_PROJECT_NAME="mdpDevCenterProject$RANDOM_ID"
    ```

2. Run the following commands to review your resource names.

    ```bash
    echo $RESOURCE_GROUP_NAME
    echo $POOL_NAME
    echo $DEV_CENTER_NAME
    echo $DEV_CENTER_PROJECT_NAME
    echo $REGION
    ```

## Create a resource group

1. Run the following command to create the resource group to contain the resources used in this quickstart.

    ```azurecli
    az group create --name $RESOURCE_GROUP_NAME --location $REGION
    ```

## Create a dev center and dev center project

1. Install the Azure CLI `devcenter` extension.

    ```azurecli
    az extension add --name devcenter --upgrade
    ```

1. Run the following commands to create a dev center and dev center project.

    ```azurecli
    # Create a dev center
    az devcenter admin devcenter create -n $DEV_CENTER_NAME \
        -g $RESOURCE_GROUP_NAME \
        -l $REGION

    # Save the id of the newly created dev center
    DEVCID= \
        $(az devcenter admin devcenter show -n $DEV_CENTER_NAME \
        -g $RESOURCE_GROUP_NAME \
        --query id -o tsv)

    # Create a dev center project
    az devcenter admin project create -n $DEV_CENTER_PROJECT_NAME \
        --description "My dev center project." \
        -g $RESOURCE_GROUP_NAME \
        -l $REGION \
        --dev-center-id $DEVCID

    # Save the dev center project for use when creating
    # the Managed DevOps Pool
    DEVCPID= \
        $(az devcenter admin project show -n $DEV_CENTER_PROJECT_NAME \
        -g $RESOURCE_GROUP_NAME \
        --query id -o tsv)
    ```

    After a few moments, the output indicates that the Dev center was created. The `id` of the created dev center is saved in `DEVCID` and is used to create the dev center project.

    ```json
    {
        "devCenterUri": "https://...",
        "id": "/subscriptions/aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e/resourceGroups/resourceGroupName/providers/Microsoft.DevCenter/devcenters/devCenterName",
        "location": "eastus",
        "name": "devCenterName",
        "provisioningState": "Succeeded",
        "resourceGroup": "resourceGroupName",
        "systemData": { ... },
        "type": "microsoft.devcenter/devcenters"
    }
    ```

    After a few more moments, the output indicates that the dev center project was created. The `id` of the created dev center project is saved in `DEVCPID` and is used when creating the Managed DevOps Pool in the next section.

    ```json
    {
      "description": "My dev center project.",
      "devCenterId": "...",
      "devCenterUri": "https://...",
      "id": "/subscriptions/aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e/resourceGroups/resourceGroupName/providers/Microsoft.DevCenter/projects/devCenterProjectName",
      "location": "eastus",
      "name": "devCenterProjectName",
      "provisioningState": "Succeeded",
      "resourceGroup": "resourceGroupName",
      "systemData": { ... },
      "type": "microsoft.devcenter/projects"
    }
    ```

## Prepare the Managed DevOps Pool configuration files

The `mdp pool create` method has several parameters that take JSON values that configure different aspects of the pool.

* `agent-profile` specifies whether the pool is stateful or stateless, and contains the standby agent schedule. It is a dictionary with a single key named either `Stateful` or `Stateless`, depending on your desired agent configuration. For more information on `agent-profile` properties, see [Configure scaling](./configure-scaling.md?tabs=azure-cli).
* `fabric-profile` specifies the agent size, VM images, OS disk, and attached storage. For more information on the `fabric-profile` properties, see [Configure pool settings](./configure-pool-settings.md?tabs=azure-cli) and [Configure additional storage](./configure-storage.md?tabs=azure-cli).
* `organization-profile` specifies the Azure DevOps organizations and projects that can use the pool. For more information on `organization-profile` settings, see [Configure security settings - Configure organization access](./configure-security.md?tabs=azure-cli#configure-organization-access).

Create the following three files and save them to the folder where you plan to run the Azure CLI commands to create the pool.

1. Create a file name **agent-profile.json** with the following contents.

    ```json
    {
      "Stateless": {}
    }
    ```

   This configuration specifies a [stateless agent](./configure-scaling.md?tabs=azure-cli#stateless-pools) for your pool.


2. Create a file named **fabric-profile.json** with the following contents.

    ```json
    {
      "vmss": {
        "sku": {
          "name": "Standard_D2as_v5"
        },
        "images": [
          {
            "aliases": [
              "ubuntu-22.04"
            ],
            "buffer": "*",
            "wellKnownImageName": "ubuntu-22.04/latest"
          }
        ],
        "osProfile": {
          "secretsManagementSettings": {
            "observedCertificates": [],
            "keyExportable": false
          },
          "logonType": "Service"
        },
        "storageProfile": {
          "osDiskStorageAccountType": "Standard",
          "dataDisks": []
        }
      }
    }
    ```

   This configuration specifies a pool using the **Standard_D2as_v5** image, the **ubuntu-22.04** [Azure Pipelines image](./configure-images.md?tabs=azure-cli#azure-pipelines-images), and a **Standard** [OS Disk type](./configure-pool-settings.md?tabs=azure-cli#os-disk-type) with no [attached data disk](./configure-storage.md?tabs=azure-cli).

1. Create a file named **organization-profile.json** with the following contents. Replace `<organization-name>` with the name for your Azure DevOps organization.

    ```json
    {
      "azure-dev-ops": {
        "organizations": [
          {
            "url": "https://dev.azure.com/<organization-name>",
            "projects": [],
            "parallelism": 1
          }
        ],
        "permissionProfile": {
          "kind": "CreatorOnly"
        }
      }
    }
    ```

   This configuration specifies a pool that is available to [all projects in your Azure DevOps organization](./configure-security.md?tabs=azure-cli#configure-organization-access).


## Create the Managed DevOps Pool

1. Install the `mdp` extension.

   ```azurecli
    az extension add --name mdp
   ```

1. Create the Managed DevOps Pool by running the following [az mdp pool create](/cli/azure/mdp/pool#az-mdp-pool-create) command.

    ```azurecli
    az mdp pool create -n $POOL_NAME \
       -g $RESOURCE_GROUP_NAME \
       -l $REGION \
       --devcenter-project-id $DEVCPID \
       --maximum-concurrency 1 \
       --agent-profile agent-profile.json \
       --fabric-profile fabric-profile.json \
       --organization-profile organization-profile.json
    ```

   If your subscription doesn't have the capacity to configure your pool with desired Azure VM SKU and maximum agents count, pool creation fails with an error similar to the following message. `Cores needed to complete this request is 2, which exceeds the current limit of 0 for SKU family standardDDSv4Family in region eastus. Please choose a different region if possible, or request additional quota at https://portal.azure.com/#view/Microsoft_Azure_Support/NewSupportRequestV3Blade/issueType/quota/subscriptionId/subscription_id_placeholder/topicId/3eadc5d3-b59a-3658-d8c6-9c729ba35b97`. To resolve the issue, see [Review Managed DevOps Pools quotas](./prerequisites.md#review-managed-devops-pools-quotas).
   
## View your created pool in the Azure portal

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. Search for **Managed DevOps Pools** and select it from the available options.
1. Choose your new Managed DevOps Pool from the list.
1. Choose **JSON View** to see the JSON format of your Managed DevOps Pools resource.

   :::image type="content" source="./media/pool-settings/json-view-button.png" alt-text="Screenshot of JSON View button in pool overview.":::

## View the agent pool in Azure DevOps

1. Go to the Azure DevOps portal and sign in to your Azure DevOps organization (`https://dev.azure.com/{your-organization}`).

1. Go to **Azure DevOps** > **Organization settings**.

   :::image type="content" source="./media/prerequisites/organization-settings.png" alt-text="Screenshot of Organization settings button.":::

1. Go to **Pipelines** > **Agent pools**, and verify that your new pool is listed. If you just created the Managed DevOps Pool, it can take a few moments for the new pool to appear in the agents list.

   ![Screenshot of Agent pools list.](./media/get-started/agent-pools-list.png)

## Run a pipeline in your new pool

In this step, we'll create a simple pipeline in the default repository of an Azure DevOps project and run it in your new Managed DevOps Pool.

1. Go to the Azure DevOps portal and sign in to your Azure DevOps organization (`https://dev.azure.com/{your-organization}`).
1. Go to the project where you want to run the pipeline, and choose Pipelines.

   ![Screenshot of Projects list.](./media/get-started/project-pipelines.png)

1. Choose **New pipeline** (or **Create Pipeline** if this is your first pipeline).

   ![Screenshot of new pipeline button.](./media/get-started/new-pipeline-button.png)

1. Choose **Azure Repos Git**.

   ![Screenshot of repository types.](./media/get-started/choose-repo-type.png)

1. Choose the repository that has the same name as your project. In this example, the project is named FabrikamFiber, so we choose the repository with the same name.

   ![Screenshot of FabrikamFiber repository.](./media/get-started/choose-repository.png)

1. Choose Starter pipeline.

   ![Screenshot of pipeline template list.](./media/get-started/choose-starter-pipeline.png)

1. By default the starter template uses a Microsoft hosted Linux agent. Edit the pipeline template and change the `pool` section so that it refers to the pool you created in the previous steps.

   ```
   # Change these two lines as shown in the following example.
    pool:
     vmImage: ubuntu-latest
   ```

   In this example, the Managed DevOps Pools is named `fabrikam-managed-pool`, so replace `vmImage: ubuntu-latest` with `name: fabrikam-managed-pools`, and specify the name of your Managed DevOps Pool.

   ```
   # Replace fabrikam-managed-pools with the name
   # of your Managed DevOps Pool.
   pool:
     name: fabrikam-managed-pool
   ```

1. Choose **Save and run**, and choose **Save and run** a second time to confirm.

   ![Screenshot of save and run button.](./media/get-started/save-and-run.png)

1. If this is the first pipeline run in this pool, you may be asked to grant permissions before the pipeline runs.

1. Watch the [pipeline run](../pipelines/create-first-pipeline.md#view-pipeline-run-details) in Azure DevOps, and you can switch over to the Azure portal and see the running agent in the [Agents](./view-agents.md) view.

## Clean up resources

If you're not going to continue to use this application, delete the resource group, dev center, dev center project, and the Managed DevOps Pool. This quickstart created all of the resources in a new resource group, so you can delete them all by using the [az group delete](/cli/azure/group#az-group-delete) command to delete the resource group and all of its resources.


```azurecli
az group delete -n $RESOURCE_GROUP_NAME
```

## See also

* [Review the Managed DevOps Pools Azure CLI reference](/cli/azure/service-page/managed%20devops%20pools)
