---
title: Use GitHub Actions to push to Azure Artifacts
description: Push a NuGet package to Azure Artifacts with a GitHub Actions workflow
ms.author: jukullam
ms.custom: github-actions-azure
ms.date: 06/06/2023
monikerRange: azure-devops
author: juliakm
ms.topic: quickstart
---

# Quickstart: Use GitHub Actions to push to Azure Artifacts

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Get started using [GitHub Actions](https://docs.github.com/en/actions) and Azure Artifacts together. GitHub Actions help you automate your software development workflows from within GitHub. You can use GitHub Actions to deploy to an Azure Artifacts feed. 
## Prerequisites

- A GitHub account with a repository. [Join GitHub](https://github.com/join) and [create a repository](https://docs.github.com/en/github/getting-started-with-github/create-a-repo). 
- An Azure Artifact feed that you'll push your NuGet package to from a GitHub workflow. [Get Started with NuGet Packages](../get-started-nuget.md).
- An Azure DevOps personal access token (PAT) to use with your GitHub action. [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).
    - Your PAT needs to have read, write, and manage **Packaging** permissions.

## Authenticate with Azure Pipelines

[!INCLUDE [include](~/../docs/reusable-content/github-actions/authenticate-with-pat.md)]

## Create a GitHub workflow that builds an artifact


[GitHub workflows](/azure/developer/github/github-actions) are a series of actions (like tasks in Azure Pipelines). This workflow:

* Sets up a .NET Core CLI environment with the [setup-dotnet action](https://github.com/actions/setup-dotnet).
* Restores dependencies, builds the project and its dependencies into a set of binaries, and runs all unit tests associated with the project. 
* Packs the code into a NuGet package with the GitHub Run ID environmental variable included in the version number.
* Publishes the NuGet package to Azure Artifacts. 

1. In your repository on GitHub, create a new YAML file in the `.github/workflows` directory.

2. Copy the following contents into your YAML file. Customize the `AZURE_ARTIFACTS_FEED_URL`, `BUILD_CONFIGURATION`, and  `DOTNET_VERSION` values. 
    * Set `AZURE_ARTIFACTS_FEED_URL` to the registry url for your Azure Artifacts Feed.
    * Set the `BUILD_CONFIGURATION`. 
    * Set `DOTNET_VERSION` to the version of your project. 

    
    ```yaml
    name: Push a NuGet package to Azure Artifacts or GitHub Package Registry
    
    on:
      push:
        branches:
          - main
    
    env:
      AZURE_ARTIFACTS_FEED_URL: https://pkgs.dev.azure.com/myorg/nuget-artifact/_packaging/Fabrikam_Feed/nuget/v3/index.json    
      BUILD_CONFIGURATION: 'Release'    # set this to the appropriate build configuration
      DOTNET_VERSION: '6.x' 
     
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          # Checkout the repo
          - uses: actions/checkout@v2
          
          # Setup .NET Core SDK
          - name: Setup .NET Core
            uses: actions/setup-dotnet@v1
            with:
              dotnet-version: ${{ env.DOTNET_VERSION }}
              
          # Run dotnet build and package
          - name: dotnet build and test
            run: |
              dotnet restore
              dotnet build --configuration '${{ env.BUILD_CONFIGURATION }}'
              dotnet test --configuration '${{ env.BUILD_CONFIGURATION }}'
          
      az-artifacts-build-and-deploy:
        needs: build
        runs-on: ubuntu-latest
        steps:
          # Checkout the repo
          - uses: actions/checkout@v2
          
          # Setup .NET Core SDK
          - name: Setup .NET Core
            uses: actions/setup-dotnet@v1
            with:
              dotnet-version: ${{ env.DOTNET_VERSION }}
              source-url: ${{ env.AZURE_ARTIFACTS_FEED_URL }}
            env:
              NUGET_AUTH_TOKEN: ${{ secrets.AZURE_DEVOPS_TOKEN }} 
          
          # Run dotnet build and package
          - name: dotnet build and publish
            run: |
              dotnet restore
              dotnet build --configuration '${{ env.BUILD_CONFIGURATION }}'
              dotnet pack -c '${{ env.BUILD_CONFIGURATION }}' --version-suffix $GITHUB_RUN_ID
              
          # Publish the package to Azure Artifacts
          - name: 'dotnet publish'
            run: dotnet nuget push --api-key AzureArtifacts bin/Release/*.nupkg 
    ```
3. Go to your Azure Artifacts feed to verify that you see the package you pushed.
    
    :::image type="content" source="media/artifacts-nuget-package.png" alt-text="Review new Azure Artifacts feed."::: 

## Clean up resources

If you're not going to continue to use your GitHub workflow, [disable the workflow](https://docs.github.com/actions/managing-workflow-runs/disabling-and-enabling-a-workflow).
## Next steps

> [!div class="nextstepaction"]
> [Deploy to Azure using GitHub Actions](/azure/developer/github/github-actions)
