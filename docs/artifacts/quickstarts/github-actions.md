---
title: Use GitHub Actions to push to Azure Artifacts
description: Push a NuGet package to Azure Artifacts with a GitHub Actions workflow
ms.author: jukullam
ms.custom: github-actions-azure
ms.date: 08/06/2024
monikerRange: azure-devops
author: juliakm
ms.topic: quickstart
zone_pivot_groups: github-actions-auth
---

# Quickstart: Use GitHub Actions to push to Azure Artifacts

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Get started using [GitHub Actions](https://docs.github.com/en/actions) and Azure Artifacts together. GitHub Actions help you automate your software development workflows from within GitHub. You can use GitHub Actions to deploy to an Azure Artifacts feed. 

::: zone pivot="managed-identity"  

## Prerequisites

- A GitHub account with a repository. [Join GitHub](https://github.com/join) and [create a repository](https://docs.github.com/en/github/getting-started-with-github/create-a-repo). 
- An Azure Artifact feed that you'll push your NuGet package to from a GitHub workflow. [Get Started with NuGet Packages](../get-started-nuget.md).
- Set up a user-assigned managed identity with an associated federated credential.
    - [Create a user-assigned managed identity](/entra/identity/managed-identities-azure-resources/how-manage-user-assigned-managed-identities#create-a-user-assigned-managed-identity).
    -  Copy the values for **Client ID**, **Subscription ID**, and **Directory (tenant) ID** to use later in your GitHub Actions workflow.
    - [Assign an appropriate role to your user-assigned managed identity](/entra/identity/managed-identities-azure-resources/how-manage-user-assigned-managed-identities#manage-access-to-user-assigned-managed-identities).
    - [Configure a federated identity credential on a user-assigned managed identity](/entra/workload-id/workload-identity-federation-create-trust-user-assigned-managed-identity) to trust tokens issued by GitHub Actions to your GitHub repository. 
- Have permission to assign a managed identity to the **Contributor** group in Azure DevOps. **Project Administrators** and **Collection Administrators** both have this permission. 

> [!NOTE]
> An alternative approach is to use an Microsoft Entra application with a service principal and federated authentication credential to connect Azure DevOps and GitHub Actions. To learn more about this approach, see [Configure an app to trust an external identity provider](/entra/workload-id/workload-identity-federation-create-trust). 

## Assign permissions to your managed identity in Azure DevOps 

To assign your managed identity to the **Contributor** team, follow these steps:

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`).
1. Go to **Project settings**. 
1. Select **General** > **Permissions**.
1. Choose the **Contributors** group. 

    :::image type="content" source="media/select-contributors-group.png" alt-text="Screenshot of contributors group permission option." lightbox="media/select-contributors-group.png" :::

1. Select the **Members** tab and then select **Add**.
1. Search and find the managed identity. 
1. Select **Save** to add the identity to the **Contributors** group. 

    :::image type="content" source="media/invite-managed-identity.png" alt-text="Screenshot of adding a managed identity. ":::

## Create GitHub secrets 

[!INCLUDE [include](~/../docs/reusable-content/github-actions/create-secrets-managed-identity-only.md)]


## Create a GitHub workflow that builds an artifact


[GitHub workflows](/azure/developer/github/github-actions) are a series of actions (like tasks in Azure Pipelines). This  workflow automates the process of building, testing, packaging, and publishing a .NET project to Azure Artifacts using a managed identity and federated authentication. The workflow:

* Uses the [azure/login action](https://github.com/marketplace/actions/azure-login) to log in to Azure using a managed identity.
* Installs the [credential provider for Azure Artifacts](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider). 
* Extracts an access token using Azure CLI and configures the authentication provider to use the Azure DevOps token.
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
    name: Push a NuGet package to Azure Artifacts with managed identity and federated authentication
    
    on:
      push:
        branches:
          - main
    
    permissions:
      id-token: write # Require write permission to Fetch an federated identity token.
      contents: read # Require read permission to access the repository contents.
    
    env:
      AZURE_ARTIFACTS_FEED_URL: https://pkgs.dev.azure.com/myorg/nuget-artifact/_packaging/Fabrikam_Feed/nuget/v3/index.json    
      BUILD_CONFIGURATION: 'Release'    # set this to the appropriate build configuration
      DOTNET_VERSION: '6.0' 
      NuGetDirectory: ${{ github.workspace}}/nuget
      VSS_NUGET_URI_PREFIXES: https://pkgs.dev.azure.com/myorg/
    
    
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          # Checkout the repo
          - uses: actions/checkout@v4
            with:
              token: ${{ secrets.GITHUB_TOKEN }}
    
          - name: Azure CLI Login
            uses: azure/login@v2
            with:
              client-id: ${{ secrets.AZURE_CLIENT_ID }}
              tenant-id: ${{ secrets.AZURE_TENANT_ID }}
              subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
    
          # Setup .NET Core SDK
          - name: Setup .NET Core
            uses: actions/setup-dotnet@v3
            with:
              dotnet-version: ${{ env.DOTNET_VERSION }}
    
          # Run dotnet build and package
          - name: dotnet build and test
            run: |
              dotnet restore
              dotnet build --configuration '${{ env.BUILD_CONFIGURATION }}'
              dotnet test --configuration '${{ env.BUILD_CONFIGURATION }}'
    
        # Create the NuGet package in the folder from the environment variable NuGetDirectory
          - run: dotnet pack --configuration Release --output ${{ env.NuGetDirectory }}
    
        # Publish the NuGet package as an artifact, so they can be used in the following jobs
          - uses: actions/upload-artifact@v3
            with:
              name: nuget
              if-no-files-found: error
              retention-days: 7
              path: ${{ env.NuGetDirectory }}/*.nupkg
    
      az-artifacts-build-and-deploy:
        needs: build
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
            with:
              token: ${{ secrets.GITHUB_TOKEN }}
    
          - name: Azure CLI Login
            uses: azure/login@v2
            with:
              client-id: ${{ secrets.AZURE_CLIENT_ID }}
              tenant-id: ${{ secrets.AZURE_TENANT_ID }}
              subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
    
          - uses: actions/download-artifact@v3
            with:
              name: nuget
              path: ${{ env.NuGetDirectory }}
    
          - name: Setup .NET Core
            uses: actions/setup-dotnet@v3
            with:
              dotnet-version: ${{ env.DOTNET_VERSION }}
              source-url: ${{ env.AZURE_ARTIFACTS_FEED_URL }}
            env:
              NUGET_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
    
          - name: Install credential provider for Azure Artifacts
            run: sh -c "$(curl -fsSL https://aka.ms/install-artifacts-credprovider.sh)"
    
          - name: Extract access token
            run: |
                accessToken=$(az account get-access-token --query accessToken --resource 499b84ac-1321-427f-aa17-267ca6975798 -o tsv)
                echo "::add-mask::$accessToken"
                echo "ACCESS_TOKEN=$accessToken" >> $GITHUB_ENV
    
          - name: Configure authentication provider to use Azure DevOps token
            run: |
              echo "VSS_NUGET_ACCESSTOKEN=$ACCESS_TOKEN" >> $GITHUB_ENV
    
          - name: dotnet build and publish
            run: |
              dotnet restore
              dotnet build --configuration '${{ env.BUILD_CONFIGURATION }}'
              dotnet pack --configuration '${{ env.BUILD_CONFIGURATION }}' --output ./nupkg --version-suffix ${{ github.run_id }}
              
          - name: 'Publish the package to Azure Artifacts'
            run: dotnet nuget push ${{ env.NuGetDirectory }}/*.nupkg --api-key AzureDevOps --source ${{ env.AZURE_ARTIFACTS_FEED_URL }}    
    ```

:::zone-end

::: zone pivot="pat"

## Prerequisites

- A GitHub account with a repository. [Join GitHub](https://github.com/join) and [create a repository](https://docs.github.com/en/github/getting-started-with-github/create-a-repo). 
- An Azure Artifact feed that you'll push your NuGet package to from a GitHub workflow. [Get Started with NuGet Packages](../get-started-nuget.md).
- An Azure DevOps personal access token (PAT) to use with your GitHub action. [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).
    - Your PAT needs to have read, write, and manage **Packaging** permissions.

## Authenticate with Azure Pipelines

[!INCLUDE [include](~/../docs/reusable-content/github-actions/authenticate-with-pat.md)]

## Create a GitHub workflow that builds an artifact


[GitHub workflows](/azure/developer/github/github-actions) are a series of actions (like tasks in Azure Pipelines). This workflow:

1. Sets up a .NET Core CLI environment with the [setup-dotnet action](https://github.com/actions/setup-dotnet).
1. Restores dependencies, builds the project and its dependencies into a set of binaries, and runs all unit tests associated with the project. 
1. Packs the code into a NuGet package with the GitHub Run ID environmental variable included in the version number.
1. Publishes the NuGet package to Azure Artifacts. 

### Create a YAML file

1. In your repository on GitHub, create a new YAML file in the `.github/workflows` directory.

2. Copy the following contents into your YAML file. Customize the `AZURE_ARTIFACTS_FEED_URL`, `BUILD_CONFIGURATION`, and  `DOTNET_VERSION` values. 
    * Set `AZURE_ARTIFACTS_FEED_URL` to the registry url for your Azure Artifacts Feed.
    * Set the `BUILD_CONFIGURATION`. 
    * Set `DOTNET_VERSION` to the version of your project. 

    
    ```yaml
    name: Push a NuGet package to Azure Artifacts
    
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
    
    :::image type="content" source="media/artifacts-nuget-package.png" alt-text="Screenshot of review for new Azure Artifacts feed." lightbox-"media/artifacts-nuget-package.png" ::: 

:::zone-end

## Clean up resources

If you're not going to continue to use your GitHub workflow, [disable the workflow](https://docs.github.com/actions/managing-workflow-runs/disabling-and-enabling-a-workflow).
## Next steps

> [!div class="nextstepaction"]
> [Deploy to Azure using GitHub Actions](/azure/developer/github/github-actions)
