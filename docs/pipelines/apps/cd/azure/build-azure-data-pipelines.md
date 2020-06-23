---
title: Quickstart - Build a data pipeline with Azure Pipelines
description: Learn how to use an Azure CI/CD data pipeline to ingest, process, and share data
ms.author: jukullam
author: JuliaKM
ms.technology: devops-cicd-apps
ms.topic: quickstart 
ms.date: 06/19/2020
monikerRange: '=azure-devops'
---

# Quickstart: Implement a data pipeline with Azure DevOps, Azure Data Factory, and machine learning

Get started with data pipelines by building a data pipeline with data ingestion, data transformation, and model training. 

Learn how to injest data from a CSV and save to blob storage, and then transform the injested data and save it to a staging area. Then, train a machine learning model using the transformed data and output the model as pickle file to blob storage. 

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).
- A downloaded code sample [sample.csv](https://github.com/gary918/DataPipeline/blob/master/data/sample.csv)
- Fork the [data pipeline solution](https://github.com/gary918/DataPipeline) in GitHub 
- Install [DevOps for Azure Databricks](https://marketplace.visualstudio.com/items?itemName=riserrad.azdo-databricks) into your Azure DevOps account

## Provision Azure resources

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. Create a new resource group named `datapipeline`. 
1. Create a storage account in `datapipeline`. Append the name with a unique identifiers. Use the default options available when creating the account. 
    1. Within the storage account, create two containers, `rawdata`, `prepareddata`.
    1. Open the `prepareddata` container and upload `sample.csv`([source](https://github.com/gary918/DataPipeline/blob/master/data/sample.csv)). 
1. Create a new Azure Data Factory account. 
1. Add a new Azure Databricks service. 
1. Add Azure Key Value. 
1. Verify that you have the following resources in your resource group:
    - Key vault
    - Storage account
    - Data factory (V2)
    - Azure Databricks Service

## Set up Key Vault

You will use Key Vault to store all secrets (connection information) between the Azure services.

1. Generate a personal access token to use with Azure Databricks ([steps](https://docs.microsoft.com/azure/databricks/dev-tools/api/latest/authentication#--generate-a-personal-access-token)). 
1. Copy the account key and connection string for your storage account.
1.	Make key vault accessible by other services. You will need to first [create a service principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal). 

## Create your pipeline and deploy your template

1. Sign in to your Azure DevOps organization and navigate to your project.
1. Go to **Pipelines**, and then select **Create Pipeline**.
1. Create a service connection for Azure Resource Manager and name it azure_rm_connection.
1. You will create two variable groups, one to connect to the Key Vault and one that stores information for the pipeline. 
Names MATTER - datapipeline-vg

## Configure Azure Databricks
Please refer to this document https://docs.microsoft.com/en-us/azure/databricks/security/secrets/secret-scopes to create a secret scope named "testscope" within the Azure Databricks workspace.

You can find the DNS Name and Resource ID in your Key Vault properties. 

## Configure Azure Data Factory 

1. Go to **Author & Monitor** in Azure Data Factory. 
1. Click **Set up code repository** and connect your repo. 
* ADD TABLE WITH SPECIFICS
1. Update Key Pass
1. Publish the pipeline under **Manage**

## Run the CI/CD Pipeline

1. Create a Pipeline using `/pipelines/data_pipeline_ci_cd.yml`. 
1. Need to give permission during the run. 
<!---Required:
Quickstarts are prescriptive and guide the customer through an end-to-end procedure.
Make sure to use specific naming for setting up accounts and configuring technology.

Avoid linking off to other content - include whatever the customer needs to complete the
scenario in the article. For example, if the customer needs to set permissions, include the
permissions they need to set, and the specific settings in the quickstart procedure. Don't
send the customer to another article to read about it.

In a break from tradition, do not link to reference topics in the procedural part of the
quickstart when using cmdlets or code. Provide customers what they need to know in the quickstart
to successfully complete the quickstart.

For portal-based procedures, minimize bullets and numbering.

For the CLI or PowerShell based procedures, don't use bullets or numbering.

Be mindful of the number of H2/procedures in the Quickstart. 3-5 procedural steps are about right.
Once you've staged the article, look at the right-hand "In this article" section on the docs page;
if there are more than 8 total, consider restructuring the article.
--->

Include a sentence or two to explain only what is needed to complete the
procedure.

1. Step 1 of the procedure
1. Step 2 of the procedure
1. Step 3 of the procedure
   ![Browser](media/contribute-how-to-mvc-quickstart/browser.png)
   <!---Use screenshots but be judicious to maintain a reasonable length. Make
    sure screenshots align to the
    [current standards](https://review.docs.microsoft.com/help/contribute/contribute-how-to-create-screenshot?branch=master).

   If users access your product/service via a web browser the first screenshot
   should always include the full browser window in Chrome or Safari. This is
   to show users that the portal is browser-based - OS and browser agnostic.--->
1. Step 4 of the procedure

## Procedure 2

Include a sentence or two to explain only what is needed to complete the procedure.

1. Step 1 of the procedure
1. Step 2 of the procedure
1. Step 3 of the procedure

## Procedure 3

Include a sentence or two to explain only what is needed to complete the procedure.
<!---Code requires specific formatting. Here are a few useful examples of
commonly used code blocks. Make sure to use the interactive functionality where
possible.
For the CLI or PowerShell based procedures, don't use bullets or numbering.--->

Here is an example of a code block for Java:

```java
cluster = Cluster.build(new File("src/remote.yaml")).create();
...
client = cluster.connect();
```

or a code block for Azure CLI:

```azurecli 
az vm create --resource-group myResourceGroup --name myVM --image win2016datacenter --admin-username azureuser --admin-password myPassword12
```
or a code block for Azure PowerShell:

```azurepowershell
New-AzureRmContainerGroup -ResourceGroupName myResourceGroup -Name mycontainer -Image microsoft/iis:nanoserver -OsType Windows -IpAddressType Public
```

<!-- Use the -interactive CLI/PowerShell code fences ONLY if all such commands can be marked that way,
otherwise the reader might run some in the interactive in which case the state isn't determinate. --->

## Clean up resources

If you're not going to continue to use this application, delete <resources> with the following steps:

1. From the left-hand menu...
2. ...click Delete, type...and then click Delete

<!---Required:
To avoid any costs associated with following the quickstart procedure, a
Clean up resources (H2) should come just before Next steps (H2).

If there is a follow-on quickstart that uses the same resources, make that option clear
so that a reader doesn't need to recreate those resources.
--->

## Next steps

Advance to the next article to learn how to create...
> [!div class="nextstepaction"]
> [Next steps button](contribute-get-started-mvc.md)
