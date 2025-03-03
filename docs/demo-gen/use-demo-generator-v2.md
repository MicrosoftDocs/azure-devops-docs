---
title: Use Azure DevOps Demo Generator
description: Use the Azure DevOps Services Demo Generator V2 to create and populate a demo project
ms.subservice: azure-devops-new-user
ms.author: sadie
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.date: 10/10/2019
---

## Get started creating and populating demo Azure DevOps Services projects

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Keep **Azure DevOps Demo Generator** app ready. This app will automate the process of creating a new Azure DevOps project within your account that is prepopulated with content (work items, repos, etc.) required for the lab.

### 1. Select the project template

When you run the application you will see the information about predefined templates, choose the template by entering the corresponding number

> [!div class="mx-imgBorder"]
    > :::image type="content" source="media/101.png" alt-text="Azure DevOps Demo Generator select project template" rightbox="media/101.png":::

### 2. Select the authentication method

Here you have 2 methods to authenticate Azure DevOps Demo Generator:

1. Device Login using AD authentication

   Register Your Application in Azure AD. Refer [Register and Setup](https://azuredevopslabs.com/labs/azuredevops/appregister)

   Login with the code displayed

   After the login, organizations will be listed and select organization to create project

    > [!div class="mx-imgBorder"]
        > :::image type="content" source="media/102.png" alt-text="Device login using AD Auth " listbox="media/102.png":::

2. With Personal Access Token (PAT)

   [Create Personal Access Token](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#create-a-pat) with the given scopes below

   | Scope                      | Description                                |
   | -------------------------- | ------------------------------------------ |
   | vso.agentpools             | Agent Pools (read)                         |
   | vso.build_execute          | Build (read and execute)                   |
   | vso.code_full              | Code (full)                                |
   | vso.dashboards_manage      | Team dashboards (manage)                   |
   | vso.extension_manage       | Extensions (read and manage)               |
   | vso.profile                | User profile (read)                        |
   | vso.project_manage         | Project and team (read, write and manage)  |
   | vso.release_manage         | Release (read, write, execute and manage)  |
   | vso.serviceendpoint_manage | Service Endpoints (read, query and manage) |
   | vso.test_write             | Test management (read and write)           |
   | vso.variablegroups_write   | Variable Groups (read, create)             |
   | vso.work_full              | Work items (full)                          |

   Enter the organization name and the Personal Access Token (PAT). Provide the project name and press enter to create a project

    > [!div class="mx-imgBorder"]
        > :::image type="content" source="media/103.png" alt-text="Authenticating the app using Personal Access Token(PAT)" Limitbox="media/103.png":::

### 3. Steps

1. Select the organization you will use to host the project created by the Azure DevOps Demo Generator. (You may have multiple accounts of which you are a member, and which are associated with your login, so choose carefully.) Provide a name for your project (such as "MyProjectDemo" ) that you and other contributors can use to identify it as a demo project. Lastly, select the demo project template you want to provision by clicking **...** (Browse) button.

    > [!div class="mx-imgBorder"]
    > :::image type="content" source="media/templateselection.png" alt-text="Azure DevOps Demo Generator template selection screen" limitBox="media/templateselection.png":::

    There are several other templates available, including **eShopOnWeb**, which defines a team project for an .NET app that deploys to Azure App Service; **PartsUnlimited**, which defines an ASP.NET app with customized CI/CD pipelines; and **MyShuttle**, which defines a Java app and Azure App Service deployment. If you are following a lab from [Azure DevOps Labs](https://www.azuredevopslabs.com), select the **DevOps Labs** section to choose the template

    > [!NOTE]
    > All  templates provide fictional Azure DevOps users and pre-populated Agile planning and tracking work items and data, along with source code in an Azure Repos Git repo, as well as access to Azure Pipelines.

1. Some templates may require additional extensions to be installed to your organization. The demo generation process checks to see if these extensions are already installed. If the extension is **not** installed, provide your consent to install extension by pressing **Y** or **Yes** to install the extension(s) to your account. When ready, press enter to **Create Project**.

    > [!NOTE]
    > If you want to manually install the extensions,  click on the provided link for a specific extension, which takes you to the extension's page on Azure DevOps Marketplace. From there, you can install the extension.

1. Your project may take a couple of minutes for the Demo Generator to provision. When it completes, you will be provided with a link to the demo project.

    > [!div class="mx-imgBorder"]
    > :::image type="content" source="media/104.png" alt-text="Required extensions setup in organization" RightBox="media/104.png":::

1. Select the link to go to the new demo Azure DevOps Services project and confirm it was successfully provisioned.

    > [!div class="mx-imgBorder"]
    > :::image type="content" source="media/projecthomepage.png" alt-text="Azure DevOps Demo Generator provision confirmation screen" listbox="media/projecthomepage.png":::

> [!NOTE]
> You must provide your own information such as URLs, logins, password, and others for the configuration of demo endpoints that use Azure resources.

Next: [Learn how you can build your own template](build-your-own-template.md)

## Common Issues and workarounds

### **Issue:** Error while creating release definition

Tasks with versions `ARM Outputs:4.*` are not valid for deploy job `Agent job` in stage Stage 1

**Cause:** This is usually caused by one of the third-party extensions not enabled or installed in your Azure DevOps org. Usually installation of extensions are quick but sometimes, it  can take a few minutes (or even hours!) for an extension to be available to use, after it is installed in the marketplace.

**Workaround:** You can try waiting for a few minutes and confirm whether the extension is available to use, and then run the generator again.

------------------

### **Issue:** Error while creating query: TF401256: You do not have Write permissions for query Shared Queries

**Cause:** In Azure DevOps, users have different access levels - Basic, Stakeholder and Visual Studio Subscriber. Access levels determine what features are available to users. In order to provision projects using the demo generator, you need at least a **Basic** access level. This error indicates the user has a *stakeholder* license which does not grant permissions to writing shared queries

**Fix:** You should change the access level, from stakeholder to basic. Please refer to this article on docs:  [Add users to your organization or project](../organizations/accounts/add-organization-users.md?view=azure-devops&preserve-view=true) for more information on how to add users to your organization, and specify the level of features they can use

------------------

### **Issue:** TF50309: The following account does not have sufficient permissions to complete the operation

The following permissions are needed to perform this operation: Create new projects

**Cause:** You do not have permissions to create new projects in the Azure DevOps organization you have selected. You will need to be a part of the Project Administrators group or have explicit permissions to create new projects

**Fix:**  Please make sure you have the required permissions or try selecting a different Azure DevOps org where you project creation permission.
