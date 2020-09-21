---
title: Using secrets from Azure Key Vault in Azure Pipelines
description: DevOps CI CD - Use secrets from Azure Key Vault in Azure Pipelines
ms.topic: tutorial
ms.date: 05/22/2020
monikerRange: '>= azure-devops-2019'
---

# Use secrets from Azure Key Vault in Azure Pipelines

[!INCLUDE [version-server-2019-rtm](../includes/version-server-2019-rtm.md)]

[Azure Key Vault](/azure/key-vault/general/basic-concepts) helps teams to securely store and manage sensitive information such as keys, passwords, certificates, etc., in a centralized storage which are safeguarded by industry-standard algorithms, key lengths, and even hardware security modules. This prevents the disclosure of information through source code, a common mistake that many developers make. Many developers leave confidential details such as database connection strings, passwords, private keys, etc., in their source code which when gained by malicious users can result in undesired consequences. Access to a key vault requires proper authentication and authorization and with RBAC, teams can have even fine granular control who has what permissions over the sensitive data.

In this tutorial, you learn about:

> [!div class="checklist"]
> * Creating an Azure Key Vault using the Azure CLI
> * Adding a secret to and configuring access for the Azure Key Vault 
> * Securely consuming the Azure Key Vault secret from an Azure Pipeline

## Prerequisites

[!INCLUDE [include](../includes/azure-prerequisites.md)]

* An Azure DevOps organization. If you don't have one, you can [create one for free](../get-started/pipelines-sign-up.md). 

<a name="creating-azure-key-vault"></a>

## Create an Azure Key Vault

This tutorial uses a simple scenario to illustrate the integration between Azure Pipelines and Azure Key Vault. The first step is to create an Azure Key Vault, which can be done via the portal or CLI. This tutorial uses the CLI.

[!INCLUDE [include](../ecosystems/includes/sign-in-azure-cli.md)]


1. If you have more than one Azure subscription associated with your account, use the command below to specify a default subscription. You can use `az account list` to generate a list of your subscriptions to find the details you need to specify one.

    ```azurecli-interactive
    az account set --subscription <subscription name or ID>
    ```

1. Execute the following command to configure a default Azure region for your subscription. Be sure to update the region to reflect the one you want to use. You can use `az account list-locations` to generate a list of available regions.

    ```azurecli-interactive
    az configure --defaults location=<REGION>
    ```

    For example, this command would select the westus2 region:

    ```azurecli-interactive
    az configure --defaults location=westus2
    ```

1. Creating Bash variables helps make the setup process more convenient and less error-prone. Run the command below to create a variable for the resource group's name.

    ```azurecli-interactive
    rgName='PipelinesKeyVaultResourceGroup'
    ```

1. Run the command below to create a variable for the Azure Key Vault's name. Note that this name is required to be globally unique, so it uses string interpolation (double quotes) and the `$RANDOM` helper. If you see a name conflict error later on when creating the key vault, try running this again to generate a new random name before rerunning the key vault creation command.

    ```azurecli-interactive
    keyVaultName="PipelinesKeyVault$RANDOM"
    ```

1. If you're interested in the generated name, you can print it by running the command below.

    ```azurecli-interactive
    echo $keyVaultName
    ```
    
    The resulting output should be something like this:

    ```
    PipelinesKeyVault7954
    ```

1. Run the following `az group create` command to create a resource group using the name defined earlier.

    ```azurecli-interactive
    az group create --name $rgName
    ```
   
1. Run the following `az keyvault create` command to create a resource group using the name defined earlier.

    ```azurecli-interactive
    az keyvault create \
      --name $keyVaultName \
      --resource-group $rgName
    ```

1. Run the following `az keyvault secret set` command to create a secret in the key vault named `Password` with the contents `mysecretpassword`. This will be the secret securely retrieved later on in the pipeline. 

    ```azurecli-interactive
    az keyvault secret set \
      --name "Password" \
      --value "mysecretpassword" \
      --vault-name $keyVaultName
    ```

## Sign in to Azure Pipelines

> [!TIP]
> You will need to switch back and forth between Azure and Azure DevOps during this tutorial. It is recommended that you open a new tab to perform the upcoming Azure DevOps tasks.

[!INCLUDE [include](../ecosystems/includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](../ecosystems/includes/create-project.md)]

## Create the pipeline

### Create a repo

This pipeline will use YAML, which requires a repo. This repo could theoretically be hosted anywhere, but it's easiest to just create a default repo in the newly created Azure DevOps project. 

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Go to **Repos**, and then select **Initialize** to initialize a new repo with a README.

    > [!div class="mx-imgBorder"]  
    > ![Creating the repo](media/azure-key-vault/initialize-repo.png)

### Create a new pipeline

1. Go to **Pipelines**, and then select **New Pipeline**.

1. Select the **Azure Repos Git** option.

    > [!div class="mx-imgBorder"]  
    > ![Creating the pipeline](media/azure-key-vault/create-pipeline.png)

1. Select the repo created earlier. It should have the same name as your Azure DevOps project.

1. Select the **Starter pipeline** option.

1. The default pipeline will include a few scripts that run echo commands. Delete them so that the last line of your pipeline is `steps:`. The core will now look something like the YAML below.

    ```
	trigger:
	- main
	
	pool:
	  vmImage: 'ubuntu-latest'
	
	steps:
    ```

1. Select **Show assistant** to expand the assistant panel. This panel provides convenient (and searchable) access to pipeline tasks.  

    > [!div class="mx-imgBorder"]  
    > ![Showing the pipeline assistant](media/azure-key-vault/show-assistant.png)

1. Search for **vault** and select the [**Azure Key Vault**](../tasks/deploy/azure-key-vault.md) task.

    > [!div class="mx-imgBorder"]  
    > ![Selecting the Azure Key Vault task](media/azure-key-vault/azure-key-vault-task.png)

1. Select and authorize the Azure subscription used to create the key vault earlier. Then select the key vault and select **Add** to insert the task at the end of the pipeline. This task connects to your Azure Key Vault and loads its secrets as variables that can be accessed like any other pipeline or environment variables.

    > [!NOTE]
    > **Make secrets available to whole job** is new and is not present in Azure DevOps Server 2019.

    > [!div class="mx-imgBorder"]  
    > ![Configuring the Azure Key Vault task](media/azure-key-vault/configure-azure-key-vault-task.png)

    > [!NOTE]
	> This process creates a principal in Azure that will need to be granted access to the key vault. You will authorize those permissions in a later step.

1. It's important to note that Azure Pipelines protects your secrets, even when using them in the context of a pipeline. You can easily insert them into configurations or as parameters for other tasks, but they won't be printed to pipeline logs that might be inadvertently shared with others. To illustrate this, add the tasks below to the end of the pipeline. They will print the password secret to a file and then publish the file for review so we can confirm that the secret made it all the way through the chain.

    ```
    - script: echo $(Password) > secret.txt

    - publish: secret.txt
    ```

    > [!NOTE]
    > YAML is very particular about formatting and indentation. The tasks should be left-aligned in the pipeline such that there is no whitespace before the dash.

1. Do not save or run the pipeline yet. It will fail at this time because the pipeline does not have permissions to access the key vault yet.

### Configure Azure Key Vault access

1. Return to the Azure portal browser tab.

1. Use the search bar at the top of the window to open the key vault created earlier.

    > [!div class="mx-imgBorder"]  
    > ![Searching for Azure Key Vault](media/azure-key-vault/search-azure-key-vault.png)

1. Select **Access policies** from under the **Settings** navigation.

1. Select **Add Access Policy**.

1. For **Secret permissions**, select **Get** and **List**. These are the two permissions required by the Azure Pipelines task.

1. Select the option to select a principal to assign this access policy for.

1. When the Azure Key Vault task was authorized, it created the principal used by Azure Pipelines to connect to your Azure subscription. Use the search bar to locate that principal. The default convention is for these connections to be named as shown below.

    ```
    [Azure DevOps account name]-[Azure DevOps project name]-[subscription ID]
    ```
    
    So if your account is at https://dev.azure.com/Contoso and the team project was called **AzureKeyVault**, the principal would be named something like:

    ```
    Contoso-AzureKeyVault-[subscription ID]
    ``` 

    > [!NOTE]
    > You may need to minimize the Azure CLI panel to see the **Select** button on the principal search panel.

1. Complete the process to select the principal and select **Add** to create the access policy.

1. Select **Save** to save the updated access policies.

## Run and review the pipeline

1. Return to the browser tab open to the pipeline.

1. Select **Save**, and select **Save** again to commit the change, which triggers the pipeline.

1. Select the running job to follow it through to completion. It should complete pretty quickly since it's just pulling in a secret from the key vault and writing it to a file.  

    > [!NOTE]
    > You may be asked to permit the pipeline to access a resource, which you can allow. You will only be asked to approve it once. 

1. Select the **CmdLine** task to view its output. Note that while the command executed successfully, the actual secret text was redacted from the logs. Fortunately, the file it was printed to was published for review. 

    > [!div class="mx-imgBorder"]  
    > ![Reviewing the command line task](media/azure-key-vault/command-line-task.png)

1. Return to the pipeline summary and select the published artifact.

    > [!div class="mx-imgBorder"]  
    > ![The pipeline summary](media/azure-key-vault/pipeline-summary.png)

1. Select the **secret.txt** artifact from under **Job** to view it.

    > [!div class="mx-imgBorder"]  
    > ![Viewing the secret in the artifact](media/azure-key-vault/view-artifact.png)

1. The file displays `mysecretpassword`, which was the secret configured in the key vault.

## Summary

In this tutorial, you learned how to access secrets from an Azure Key Vault from Azure Pipelines.

## Clean up resources

This tutorial created an Azure DevOps project and some resources in Azure. If you're not going to continue to use these resources, delete them with the following steps:

1. If you created an Azure DevOps organization (or a project within an existing organization) for this tutorial, you can [delete the organization](../../organizations/accounts/delete-your-organization.md) (or [project](../../organizations/projects/delete-project.md)) if you no longer wish to use it.

1. All Azure resources created during this tutorial were assigned to the **PipelinesKeyVaultResourceGroup** resource group. You may delete this using the portal UI or via the CLI command below.

    ```azurecli-interactive
    az group delete --name PipelinesKeyVaultResourceGroup
    ```

## Next steps

> [!div class="nextstepaction"]
> [Architect secure infrastructure in Azure](/learn/paths/architect-secure-infrastructure/)
> [Secure your cloud data](/learn/paths/secure-your-cloud-data/)
