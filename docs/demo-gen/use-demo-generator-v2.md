---
title: Use Azure DevOps Demo Generator
description: Use the Azure DevOps Services Demo Generator V2 to create and populate a demo project.
ms.subservice: azure-devops-new-user
ms.author: sdanie
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.date: 06/06/2025    
---

# Get started creating and populating demo Azure DevOps Services projects

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

This article explains how to use the **Azure DevOps Demo Generator** application to quickly create a new Azure DevOps project prepopulated with sample content, such as work items, repositories, and other resources needed for labs and demonstrations. 

## Prerequisites

Set up the Demo Generator application by following the steps in the [configure section](configure.md).

## Select your authentication method for Demo Generator

Use one of the following methods to authenticate to use the Azure DevOps Demo Generator app:

- **Microsoft Entra token:** Register your application in Microsoft Entra. For more information, see [Register an application](/entra/identity-platform/quickstart-register-app?tabs=certificate%2Cexpose-a-web-api#register-an-application). 

   * Sign in with the displayed code.
   * Select an organization to create a project from the list.

   > [!div class="mx-imgBorder"]
   > [![Device login using AD Auth](../demo-gen/media/102.png "Device login using AD Auth")](../demo-gen/media/102.png#lightbox)

[!INCLUDE [use-microsoft-entra-reduce-pats](../includes/use-microsoft-entra-reduce-pats.md)]

- **Personal Access Token (PAT):** Sign in with a [Personal Access Token (PAT)](../organizations/accounts/use-personal-access-tokens-to-authenticate.md#creating-pats) with the following scopes:

   | Scope                      | Description                                |
   | -------------------------- | ------------------------------------------ |
   | vso.agentpools             | Agent Pools (read)                         |
   | vso.build_execute          | Build (read and execute)                   |
   | vso.code_full              | Code (full)                                |
   | vso.dashboards_manage      | Team dashboards (manage)                   |
   | vso.extension_manage       | Extensions (read and manage)               |
   | vso.profile                | User profile (read)                        |
   | vso.project_manage         | Project and team (read, write, and manage)  |
   | vso.release_manage         | Release (read, write, execute, and manage)  |
   | vso.serviceendpoint_manage | Service Endpoints (read, query, and manage) |
   | vso.test_write             | Test management (read and write)           |
   | vso.variablegroups_write   | Variable Groups (read, create)             |
   | vso.work_full              | Work items (full)                          |

   Enter the organization name and the PAT. Provide the project name and press enter to create a project

   > [!div class="mx-imgBorder"]
   > [![Screenshot shows Authenticating the app using Personal Access Token (PAT).](../demo-gen/media/103.png "Authenticating the app using Personal Access Token (PAT)")](../demo-gen/media/103.png#lightbox)

## Create your demo project

To create your demo project, do the following steps:

1. Select the organization where you want to host the project created by the Azure DevOps Demo Generator. If you belong to multiple organizations associated with your credentials, choose the appropriate one. 
2. Enter a project name, such as "MyProjectDemo," that you and other contributors can easily identify as a demo project.
3. Choose from several available templates, such as:
   - **eShopOnWeb**: a .NET app that deploys to Azure App Service
   - **PartsUnlimited**: an ASP.NET app with customized CI/CD pipelines
   - **MyShuttle**: a Java app with Azure App Service deployment. 
    If you're following a lab from [Azure DevOps Labs](https://www.azuredevopslabs.com), select the **DevOps Labs** section to choose the relevant template.

   Use templates that provide fictional Azure DevOps users, prepopulated Agile work items and data, source code in an Azure Repos Git repo, and access to Azure Pipelines.
4. (Optional) Manually install any required extensions by selecting the provided link for each extension. This link opens the extension's page in the Azure DevOps Marketplace, where you can install it. 
5. (Optional) Approve the installation of other required extensions when prompted. If the demo generation process detects missing extensions, consent by pressing **Y** or **Yes**, then press **Enter** to create the project.

   Your project might take a few minutes for the Demo Generator to create. 

   > [!div class="mx-imgBorder"]
   > :::image type="content" source="media/104.png" alt-text="Screenshot shows Required extensions setup in organization." lightbox="media/104.png":::

6. Go to your organization to confirm that the project was created once the "Project created successfully" message displays.
