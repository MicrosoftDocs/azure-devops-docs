---
title: Publish Artifacts with Jenkins
ms.custom: seodec18, devx-track-jenkins
description: How to publish Artifacts with Jenkins and Azure Pipelines
ms.assetid: FC3EC349-1F9B-42A7-B523-495F21BC73F6
ms.date: 12/08/2021
monikerRange: '<= azure-devops'
---

# Publish NuGet packages with Jenkins 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can leverage a variety of build and deployment automation tools such as Maven, Gradle, and Jenkins. This article will walk you through creating and publishing NuGet packages using Jenkins.

## Prerequisites

- [Install NuGet CLI](/nuget/tools/nuget-exe-cli-reference).
- [A personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to authenticate your feed.
- [Azure DevOps Services account](https://azure.microsoft.com/services/devops/).
- [Azure Artifacts feed](../../artifacts/get-started-nuget.md).

## Jenkins Setup

This walkthrough uses the latest Jenkins running on Windows 10. Ensure the following Jenkins plugins are enabled:

- [MSBuild](https://plugins.jenkins.io/msbuild/)
- [Git](https://plugins.jenkins.io/git/)
- [Git Client](https://plugins.jenkins.io/git-client/)
- [Credentials Binding plugin](https://plugins.jenkins.io/credentials-binding/)

Some of these plugins are enabled by default, others you will need to install by using the Jenkins's "Manage Plugins" feature.

### The sample project

We will be using a C# class library sample project for this article. 

1. In Visual Studio, create a new project, and then select the C# **Class Library** template.

1. Name your solution *FabrikamLibrary*.

1. Open your solution and then right click on the project and select **Properties**.

1. Select **Package** and then fill out the *description*, *product*, and *company* fields.

1. Select **Save** when you are done.

1. Check the new solution into a Git repository where your Jenkins server can access it later.

:::image type="content" source="media/jenkins-package.png" alt-text="Screenshot showing how to configure the package properties for a class library project.":::

## Create a NuGet package

1. Open a new command prompt window navigate to your project directory.

1. Run the `nuget spec` command to create a nuspec file.

1. Open the newly created *FabrikamLibrary.nuspec* and remove the boilerplate tags *projectUrl* and *iconUrl*. Add an author inside the *authors* tag, and then change the tags from *Tag1 Tag2* to *fabrikam*.

1. **Save** your file when you are done. 

1. Run the following command to create a NuGet package: `nuget pack FabrikamLibrary.csproj`.

1. A NuGet package *FabrikamLibrary.1.0.0.nupkg* will be generated in the same directory as your *.csproj* file.

## Connect to feed

1. From within your project, select **Artifacts**, and then select your feed. You can [create a new feed](../../artifacts/get-started-nuget.md#create-a-feed) if you don't have one already. 

1. Select **Connect to feed**.

    :::image type="content" source="../../artifacts/media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to your feed":::

1. Select **NuGet.exe** under the **NuGet** header.

    :::image type="content" source="../../artifacts/media/nuget-connect-feed.png" alt-text="Screenshot showing the NuGet.exe feed connection":::

1. If this is the first time using Azure Artifacts with Nuget.exe, select **Get the tools** button and follow the instructions to install the prerequisites.

    1. Download the [latest NuGet version](https://www.nuget.org/downloads).
    1. Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

1. Follow the instructions in the **Project setup** to connect to your feed. 

    :::image type="content" source="../../artifacts/media/project-setup.png" alt-text="Screenshot showing the project setup section":::

## Create a build pipeline in Jenkins

1. From your Jenkins dashboard, select **Create a job**.

1. Enter an item name, and then select **Freestyle project**. Select **OK** when you are done.
 
    :::image type="content" source="./media/jenkins-freestyle.png" alt-text="Screenshot showing how to create a freestyle project in Jenkins":::

1. Select **Source Code Management**, and then select **Git**. Enter your Git repository and select the branches to build.

1. Select **Build Environment**, and then select **Use secret text(s) or file(s)**.

1. Select **Add**, and then select **Username and password (separated)**.

1. Set the **Username Variable** to "FEEDUSER" and the **Password Variable** to "FEEDPASS". Select **Add** when you are done.

    :::image type="content" source="./media/jenkins-build-environment.png" alt-text="Screenshot showing how to set up build environment in jenkins.":::

1. Set the *Username* to "token" and the *Password* to the personal access token PAT you generated earlier. Select **Add** to save your credentials.

    :::image type="content" source="./media/jenkins-add-credentials.png" alt-text="Screenshot showing how to add your credentials.":::

1. Select **Build** > **Add build step**., and then select **Execute Windows batch command**. Enter your batch command in the command box.

1. Select **Save** and then queue your build.

## Publish a package using Jenkins

1. Select your build pipeline, and then select **Configure** to edit your build definition.

1. Select **Build**, and then select **Add build step** to add a new task.

1. Select **Execute a Windows batch command** and enter the following commands in the command box:

    ```Command
    .tools\VSS.NuGet\nuget sources update -Name <YOUR_FEED_NAME> -UserName "%FEEDUSER%" -Password "%FEEDPASS%"
    .tools\VSS.NuGet\nuget push *.nupkg -Name <YOUR_FEED_NAME> -ApiKey key
    ```

1. Select **Save**, and then queue your build. Your NuGet package should be published to your Azure Artifacts feed. 

## Related articles

- [Publish and download pipeline Artifacts](../artifacts/pipeline-artifacts.md)
- [Release artifacts and artifact sources](../release/artifacts.md)
- [Restore NuGet packages in Azure Pipelines](./nuget-restore.md)
