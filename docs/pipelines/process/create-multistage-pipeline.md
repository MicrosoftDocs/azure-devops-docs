---
title: Create a multistage pipeline with Azure DevOps
description: Build an app pipeline for development and staging.
ms.topic: how-to 
ms.date: 06/15/2023
ms.custom: template-how-to-pattern
---

# Create a multistage pipeline with Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use an Azure DevOps multistage pipeline to divide your CI/CD process into stages that represent different parts of your development cycle. Using a multistage pipeline gives you more visibility into your deployment process and makes it easier to integrate like [approvals and checks](approvals.md). 

In this article, you'll build a YAML pipeline with three stages: 

* Build: build the source code and produce a package
* Dev: test changes before deploying to staging
* Staging: deploy to a staging Azure App Service instance

In a real-world scenario, you may have another stage for deploying to production depending on your DevOps process. 

In this article, you'll create a .NET web application for a pretend space game that includes a leaderboard to show high scores. 

## Prerequisites

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/dotnet).
    * An Azure DevOps organization and project. [Create one for free](../get-started/pipelines-sign-up.md). 
* An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier. 


## 1 - Fork the project

1. Fork the following sample repository at GitHub.

```
https://github.com/MicrosoftDocs/mslearn-tailspin-spacegame-web-deploy
```

## 2 - Create the App Service environments

Before you can deploy your pipeline, you need to first create an App Service environment to deploy to. You'll use Azure CLI to create the environment. 

1. Go to [Azure portal](https://portal.azure.com) and sign in.  

1. From the menu, select **Cloud Shell** and the **Bash** experience.

1. Generate a random number that makes your web app's domain name unique.

    ```code
    webappsuffix=$RANDOM    
    ```

1. Use a `az group create` command to create a resource group named *tailspin-space-game-rg* that contains all of your App Service instances.
    
    ```azurecli
    az group create --name tailspin-space-game-rg
    ```

1. Create an App Service plan.

    ```azurecli
    az appservice plan create \
      --name tailspin-space-game-asp \
      --resource-group tailspin-space-game-rg \
      --sku B1 \
      --is-linux
    ```

1. Create two App Service instances, one for each environment (Dev and Staging) with the `az webapp create` command. 

    ```azurecli
    az webapp create \
      --name tailspin-space-game-web-dev-$webappsuffix \
      --resource-group tailspin-space-game-rg \
      --plan tailspin-space-game-asp \
      --runtime "DOTNET|6.0"
    
    az webapp create \
      --name tailspin-space-game-web-staging-$webappsuffix \
      --resource-group tailspin-space-game-rg \
      --plan tailspin-space-game-asp \
      --runtime "DOTNET|6.0"
    ```

1. List both App Service instances to verify that they are running with the `az webapp list` command. 

    ```azurecli
    az webapp list \
      --resource-group tailspin-space-game-rg \
      --query "[].{hostName: defaultHostName, state: state}" \
      --output table
    ```

## 3 - Create your Azure DevOps project and variables

In this step, you'll set up your Azure DevOps project and a YAML Starter pipeline. You'll also add variables for your development and staging environments. 

### Add a build pipeline 

In this section, you'll build a pipeline using an Ubuntu virtual image and that:

* Includes a trigger that runs when there is a code change to branch.
* Defines two variables, `buildConfiguration` and `releaseBranchName`.
* Includes a stage named Build that builds the web application
* Publishes an artifact you'll use in a later stage. 

[!INCLUDE [include](../ecosystems/includes/create-pipeline-before-template-selected.md)]

1. When the **Configure** tab appears, select **Starter pipeline**.

1. Replace the contents of *azure-pipelines.yml* with this code. 

    ```yaml
    trigger:
    - '*'
    
    variables:
      buildConfiguration: 'Release'
      releaseBranchName: 'release'
    
    stages:
    - stage: 'Build'
      displayName: 'Build the web application'
      jobs: 
      - job: 'Build'
        displayName: 'Build job'
        pool:
          vmImage: 'ubuntu-20.04'
          demands:
          - npm
    
        variables:
          wwwrootDir: 'Tailspin.SpaceGame.Web/wwwroot'
          dotnetSdkVersion: '6.x'
    
        steps:
        - task: UseDotNet@2
          displayName: 'Use .NET SDK $(dotnetSdkVersion)'
          inputs:
            version: '$(dotnetSdkVersion)'
    
        - task: Npm@1
          displayName: 'Run npm install'
          inputs:
            verbose: false
    
        - script: './node_modules/.bin/node-sass $(wwwrootDir) --output $(wwwrootDir)'
          displayName: 'Compile Sass assets'
    
        - task: gulp@1
          displayName: 'Run gulp tasks'
    
        - script: 'echo "$(Build.DefinitionName), $(Build.BuildId), $(Build.BuildNumber)" > buildinfo.txt'
          displayName: 'Write build info'
          workingDirectory: $(wwwrootDir)
    
        - task: DotNetCoreCLI@2
          displayName: 'Restore project dependencies'
          inputs:
            command: 'restore'
            projects: '**/*.csproj'
    
        - task: DotNetCoreCLI@2
          displayName: 'Build the project - $(buildConfiguration)'
          inputs:
            command: 'build'
            arguments: '--no-restore --configuration $(buildConfiguration)'
            projects: '**/*.csproj'
    
        - task: DotNetCoreCLI@2
          displayName: 'Publish the project - $(buildConfiguration)'
          inputs:
            command: 'publish'
            projects: '**/*.csproj'
            publishWebProjects: false
            arguments: '--no-build --configuration $(buildConfiguration) --output $(Build.ArtifactStagingDirectory)/$(buildConfiguration)'
            zipAfterPublish: true
    
        - publish: '$(Build.ArtifactStagingDirectory)'
          artifact: drop
    ```

1. When you're ready, select **Save and run**.

### Add environment variables

1. In Azure DevOps, go to **Pipelines** > **Library**. 

1. Select **+ Variable group**.

1. Under **Properties**, add *Release* for the variable group name.

1. Create a two variables to refer to your development and staging host names. Replace the value `1234` with the correct value for your environment. 

    
    |Variable name  |Example value  |
    |---------|---------|
    |WebAppNameDevelopment     |    tailspin-space-game-web-dev-1234     |
    |WebAppNameStaging     |    tailspin-space-game-web-staging-1234     |
    
 
1. Select **Save** to save your variables. 

## 4 - Add the Build stage

Next, you'll update your pipeline to promote your build to the *Dev* stage. 

1. In Azure Pipelines, go to **Pipelines** > **Pipelines**. 

1.  Select **Edit** in the contextual menu to edit your pipeline. 

    :::image type="content" source="media/mutistage-pipeline/multistage-pipeline-edit-contextual-menu.png" alt-text="Screenshot of select Edit menu item. ":::
    
1. Update *azure-pipelines.yml* to include a 

## 5 - Add the Dev stage


## 6 - Add the Deploy stage 


<!-- 5. Next steps ------------------------------------------------------------------------

Required: Provide at least one next step and no more than three. Include some context so the 
customer can determine why they would click the link.
Add a context sentence for the following links.

-->

## Next steps
TODO: Add your next step link(s)

<!--
Remove all the comments in this template before you sign-off or merge to the main branch.

-->