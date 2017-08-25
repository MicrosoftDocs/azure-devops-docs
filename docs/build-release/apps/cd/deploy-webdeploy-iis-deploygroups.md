---
ms.assetid: 979E4504-C88A-4D0A-A912-6E5998D87445
title: CD to an IIS Deployment Group
description: Example of deploying an ASP.NET or Node Web Deploy package to IIS servers using Deployment Groups in Release Management in Visual Studio Team Services (VSTS) or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-release
ms.manager: douge
ms.author: ahomer
ms.date: 01/02/2017
---

# CD to an IIS Deployment Group

Continuous deployment means starting an automated deployment process whenever a new successful build is available. Here we'll show you how to set up continuous deployment of your ASP.NET or Node app to one or more IIS servers using Release Management.

## Prerequisites

Before you begin, you'll need a CI build that publishes your Web Deploy package. To set up CI for your specific type of app, see:

* [Build your ASP.NET 4 app](../aspnet/ci/build-aspnet-4.md)

* [Build your ASP.NET Core app](../aspnet/build-aspnet-core.md)

* [Build your Node app with Gulp](../nodejs/nodejs-to-azure.md)

### IIS configuration

If you are deploying an ASP.NET app, make sure that you have ASP.NET 4.5 or ASP.NET 4.6 installed on each of your IIS target servers. For more information, see [this topic](https://www.asp.net/web-forms/overview/deployment/visual-studio-web-deployment/deploying-to-iis).

If you are deploying an ASP.NET Core application to IIS target servers, follow the additional instructions in [this topic](https://docs.microsoft.com/en-us/aspnet/core/publishing/iis) to install .NET Core Windows Server Hosting Bundle.

If you are deploying a Node application to IIS target servers, follow the instructions in [this topic](https://github.com/tjanczuk/iisnode) to install and configure IISnode on IIS servers.

In this example, we will deploy to the Default Web Site on each of the servers. If you need to deploy to another website, make sure you configure this as well.

## Create a Deployment Group

Carry out the following steps in your VSTS account to create a Deployment Group consisting of the target IIS servers.

1. Open the **Deployment groups** tab of the **Build &amp; Release** hub
   and choose **+ New** to create a new group

1. Enter a name for the group in the **Details** tab and then choose **Create**.

1. Set (tick) the **Use a personal access token** checkbox.

1. Choose **Copy script to clipboard**.

Sign into each of the IIS server where you will deploy your web app, and perform the following steps:

1. Open an **Administrator Powershell** command prompt on each of the target IIS servers and paste the script you copied,
   then execute it to register the machine with this group.

1. When prompted to configure tags for the agent, press `Y` and enter `web`.

1. When prompted for the user account, press _Return_ to accept the defaults.

1. Wait for the script to finish with a message **Service vstsagent._account_._computername_ started successfully**.

1. In the **Deployment groups** page of the **Build &amp; Release** hub, open
   the **Machines** tab and verify that the agent is running. If the
   tag named `web` is not visible, refresh the page.

## Define and test your CD release process

Continuous deployment (CD) means starting an automated release process whenever a new successful build is available.
Your CD release process picks up the artifacts published by your CI build and then deploys them to your IIS servers.

1. Do one of the following:

   * If you've just completed a CI build (see above) then, in the build's **Summary** tab under **Deployments**,
     choose **Create release** followed by **Yes**. This starts a new release definition that's automatically linked to the build definition.

   * Open the **Releases** tab of the **Build &amp; Release** hub, open the **+** drop-down
     in the list of release definitions, and choose **Create release definition**.

1. Select the **IIS Website and SQL Database Deployment** template and choose **Next**.

1. In the **Artifacts** section, make sure your CI build definition that publishes the Web deploy package is selected as the artifact source.

1. Select the **Continuous deployment** check box, and then choose **Create**.

1. Select the _second_ **SQL Deployment** section containing the **SQL DB Deploy** task and delete it
   (you will not be deploying a database in this example).

1. Configure the phases and tasks in the environment as follows:

   **[Run on deployment group phase](../../concepts/process/phases.md)** for configuration of web servers.
   
   - **Deployment Group**: Select the deployment group you created earlier.
   
   - **Machine tags**: `web`<p />
   
   ![IIS Web App Manage](../../tasks/deploy/_img/iis-manage-icon.png) [Deploy: IIS Web App Manage](../../tasks/deploy/iis-manage.md) - Create or update the websites.
   
   - **Website Name**: `Default Web Site`. If you created a different website on the IIS servers, use that name instead.
   
   - **Port**: `80`
   
   - **IIS Application pool**: `DefaultAppPool`<p />
   
   ![IIS Web App Deploy](../../tasks/deploy/_img/iis-deploy-icon.png) [Deploy: IIS Web App Deploy](../../tasks/deploy/iis-deploy.md) - Deploy the app to IIS.
   
   - **Website Name**: `Default Web Site`. If you created a different website on the IIS servers, use that name instead.<p />
   
1. Edit the name of the release definition, choose **Save**, and choose **OK**. Note that the default environment is named "Environment1", which you can edit by selecting the name.

You're now ready to create a release, which means to start the process of running the release definition with the artifacts produced by a specific build. This will result in deploying the build to the IIS servers:

1. Choose **+ Release** and select **Create Release**.

1. Select the build you just completed in the highlighted drop-down list and choose **Create**.

1. Choose the release link in the popup message. For example: "Release **Release-1** has been created".

1. Open the **Logs** tab to watch the release console output.

1. After the release is complete, navigate to your site running on the IIS servers, and verify its contents.

## Next steps

* [Dynamically create and remove a deployment group](howto-webdeploy-iis-deploygroups.md#depgroup)
* [Apply environment-specific configurations](howto-webdeploy-iis-deploygroups.md#envirconfig)
* [Perform a safe rolling deployment](howto-webdeploy-iis-deploygroups.md#rolling)
* [Deploy a database with your app](howto-webdeploy-iis-deploygroups.md#database)
