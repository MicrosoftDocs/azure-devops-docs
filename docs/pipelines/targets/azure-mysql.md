---
title: Deploy to Azure MySQL
description: Deploy to an Azure MySQL database from Azure Pipelines
ms.assetid: B4255EC0-1A25-48FB-B57D-EC7FDB7124D9
ms.topic: quickstart
ms.date: 09/03/2021
ms.author: jukullam
author: JuliaKM
monikerRange: '=azure-devops'
---

# Quickstart: Deploy to an Azure MySQL database

Get started with [Azure Database for MySQL](/azure/mysql/) by deploying a database update with Azure Pipelines. Azure Database for MySQL is a relational database service in the Microsoft cloud. This quickstart walks through updating a single-server database. 

You'll use the [Azure Database for MySQL Deployment task](../tasks/deploy/azure-mysql-deployment.md). The Azure Database for MySQL Deployment task only works with [Azure Database for MySQL Single Server](/azure/mysql/single-server-overview).

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../get-started/pipelines-sign-up.md).
- A GitHub repository that you can use for your pipeline. If you do not have an existing repository, see [Create your first pipeline](../create-first-pipeline.md). 

This quickstart uses the resources created in either of these guides as a starting point:
- [Create an Azure Database for MySQL server using Azure portal](/azure/mysql/quickstart-create-mysql-server-database-using-azure-portal)
- [Create an Azure Database for MySQL server using Azure CLI](/azure/mysql/quickstart-create-mysql-server-database-using-azure-cli)


## Create your pipeline

You'll use the basic starter pipeline as a basis for your pipeline. 

1. Sign in to your Azure DevOps organization and go to your project.

2. In your project, navigate to the **Pipelines** page. Then choose the action to create a new pipeline.

3. Walk through the steps of the wizard by first selecting GitHub as the location of your source code.

4. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

5. When the list of repositories appears, select your desired repository.

6. Azure Pipelines will analyze your repository and offer configuration options. Select **Starter pipeline**.

    :::image type="content" source="media/databases/configure-pipeline-option.png" alt-text="Select Starter pipeline.":::
    
## Create a secret

You'll need to know your database server name, SQL username, and SQL password to use with the [Azure Database for MySQL Deployment task](../tasks/deploy/azure-mysql-deployment.md). 

For security, you'll want to save your SQL password as a secret variable in the pipeline settings UI for your pipeline.

1. Go to the **Pipelines** page, select the appropriate pipeline, and then select **Edit**.
1. Select **Variables**. 
1. Add a new variable named `SQLpass` and select **Keep this value secret** to encrypt and save the variable.

    :::image type="content" source="media/databases/save-secret-variable.png" alt-text="Add a secret variable.":::  
 
1. Select **Ok** and **Save** to add the variable. 

## Verify permissions for your database

To access your MySQL database with Azure Pipelines, you need to set your database to accept connections from all Azure resources. 

1. In the Azure portal, open your database resource. 
1. Select **Connection security**.
1. Toggle **Allow access to Azure services** to **Yes**. 

    :::image type="content" source="media/databases/allow-azure-access-mysql.png" alt-text="Set MySQL to allow Azure connections.":::    

## Add the Azure Database for MySQL Deployment task

In this example, we'll create a new databases named `quickstartdb` and add an inventory table. The inline SQL script will:

- Delete `quickstartdb` if it exists and create a new `quickstartdb` database.
- Delete the table `inventory` if it exists and create a new `inventory` table.
- Insert three rows into `inventory`.
- Show all the rows.
- Update the value of the first row in `inventory`.
- Delete the second row in `inventory`.

You'll need to replace the following values in your deployment task.

|Input  |Description  |Example  |
|---------|---------|---------|
|`azureSubscription`     |   Authenticate with your Azure Subscription with a [service connection](../library/connect-to-azure.md).     |   `My Subscription`      |
|`ServerName`     |    The name of your Azure Database for MySQL server.     |   `fabrikam.mysql.database.azure.com`      |
|`SqlUsername`     |    The user name of your Azure Database for MySQL.   |    `mysqladmin@fabrikam`     |
|`SqlPassword`     |   The password for the username. This should be defined as a secret variable.     |  `$(SQLpass)`       |

```yaml

trigger:
- master

pool:
  vmImage: ubuntu-latest

steps:
- task: AzureMysqlDeployment@1
  inputs:
    azureSubscription: '<your-subscription>
    ServerName: '<db>.mysql.database.azure.com'
    SqlUsername: '<username>@<db>'
    SqlPassword: '$(SQLpass)'
    TaskNameSelector: 'InlineSqlTask'
    SqlInline: |
      DROP DATABASE IF EXISTS quickstartdb;
      CREATE DATABASE quickstartdb;
      USE quickstartdb;
      
      -- Create a table and insert rows
      DROP TABLE IF EXISTS inventory;
      CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
      INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
      INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
      INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
      
      -- Read
      SELECT * FROM inventory;
      
      -- Update
      UPDATE inventory SET quantity = 200 WHERE id = 1;
      SELECT * FROM inventory;
      
      -- Delete
      DELETE FROM inventory WHERE id = 2;
      SELECT * FROM inventory;
    IpDetectionMethod: 'AutoDetect'
```

## Deploy and verify resources

Select **Save and run** to deploy your pipeline. The pipeline job will be launched and after few minutes, the job status should indicate `Success`.

You can verify that your pipeline ran successfully within the `AzureMysqlDeployment` task in the pipeline run. 

Open the task and verify that the last two entries show two rows in `inventory`. There are two rows because the second row has been deleted. 

:::image type="content" source="media/databases/database-update-results.png" alt-text="Review final table results.":::


## Clean up resources

When you are done working with your pipeline, delete `quickstartdb` in your Azure Database for MySQL. You can also delete the deployment pipeline you created. 

## Next steps

> [!div class="nextstepaction"]
> [Tutorial: Build an ASP.NET Core and Azure SQL Database app in Azure App Service](/azure/app-service/tutorial-dotnetcore-sqldb-app)