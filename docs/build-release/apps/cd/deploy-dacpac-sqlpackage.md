---
ms.assetid: BB1FC018-77A7-42E7-A270-4BC7CB3AD1C4
title: Deploy your database to Azure SQL Database using DACPACs
description: Deploy a SQL DACPAC to an Azure SQL Database from Release Management in VSTS or TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Deploy your database to Azure SQL Database using DACPACs

[!INCLUDE [temp](../../_shared/version-rm-dev14.md)]

Continuous deployment means starting an automated deployment process whenever a new successful build is available.
Here we'll show you how to set up continuous deployment of your database packaged as a DACPAC to an Azure SQL Database using Release Management.

## Get set up

### Begin with a CI build

Before you begin, you need a CI build that publishes your SQL server package. To set up CI, see:

* [Continuous integration for SQL Server databases](../aspnet/build-aspnet-dacpac.md)

### Azure SQL Database

Carry out the following steps to set up an Azure SQL Database server to which the
DACPAC of the database will be deployed.

1. Sign into the Azure management portal and choose
   the **+New** icon in the left panel, then choose
   **Data + Storage**. Select **SQL Database** from the
   list.

1. In the **SQL Database** blade, enter a name for
   Azure SQL Database and then
   choose **Server** to configure the required settings
   for the server.

1. In the **Server** blade, choose **Create a new server**.

1. In the **New server** blade, enter a name for the
   server and enter the admin
   login and password for the new server.
   Leave all other settings as they are and choose **OK**.  

1. Back in the **SQL Database** blade, leave all the
   other settings at their default values and choose
   **Create**.

1. After the Azure SQL Database server and database
   have been created, open its blade and make a note
   of the **Server name**.

## Define and test your CD release process

Continuous deployment (CD) means starting an automated release process whenever a new successful build is available. Your CD release process picks up the artifacts published by your CI build and then deploys them to your database.

1. Do one of the following:

   * If you've just completed a CI build (see above) then, in the build's **Summary** tab under **Deployments**, choose **Create release** followed by **Yes**. This starts a new release definition that's automatically linked to the build definition.

   * Open the **Releases** tab of the **Build &amp; Release** hub, open the **+** drop-down
     in the list of release definitions, and choose **Create release definition**.

1. Select the **Empty** template and choose **Next**.

1. In the **Artifacts** section, make sure your CI build definition that publishes the DACPAC is selected as the artifact source.

1. Select the **Continuous deployment** check box, and then choose **Create**.

1. Add a **SQL Database** task to the default environment and configure it as follows:

   ![icon](../../tasks/deploy/_img/azure-sql-database-deployment-icon.png) [Deploy: Azure SQL Database Deployment](../../tasks/deploy/azure-sql-database-deployment.md) - Deploy the database to Azure SQL Database.
   
   - **Azure Connection Type**: `Azure Resource Manager`.
   
   - **Azure Subscription:** Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions connection to your Azure subscription. For more details, see [Azure Resource Manager service endpoint](../../concepts/library/service-endpoints.md#sep-azure-rm).
   
   - **Azure SQL Server Name**: Enter the name of the SQL Database server you created earlier.
   
   - **Database Name**: Enter the name of database.
   
   - **Server Admin Login**: Enter the admin user name for your SQL Database.
   
   - **Password**: Enter the admin password for your SQL Database. To hide the password, create a variable for it in the environment.
   
   - **Firewall - Specify Firewall Rules Using**: `AutoDetect`<p />

   > [How can I perform other actions on a SQL Server or Azure SQL Database?](sql-server-actions.md)

1. Edit the name of the release definition, choose **Save**, and choose **OK**.
   Note that the default environment is named Environment1, which you can edit by clicking directly on the name.

You're now ready to create a release, which means to start the process of running the release definition with the artifacts produced by a specific build.
This will result in deploying the database DACPAC to Azure SQL Database:

1. Choose **+ Release** and select **Create Release**.

1. Select the build you just completed in the highlighted drop-down list and choose **Create**.

1. Choose the release link in the popup message. For example: "Release **Release-1** has been created".

1. Open the **Logs** tab to watch the release console output.

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### How can I perform other actions on a SQL Server or Azure SQL Database?

You can use a PowerShell task to execute other types of SQL scripts.
For more details, see [Perform SQL server actions in VSTS or TFS](sql-server-actions.md).

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
