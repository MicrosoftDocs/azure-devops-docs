---
title: Use Azure DevOps Demo Generator
description: Use the Azure DevOps Services Demo Generator V2 to create and populate a demo project
ms.prod: devops  
ms.technology: devops-new-user
ms.manager: jillfra
ms.author: sdanie
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.date: 05/09/2018
---
# Get started creating and populating demo Azure DevOps Services projects with the Azure DevOps Demo Generator

1. Browse to the [Azure DevOps Demo Generator site](https://azuredevopsdemogenerator.azurewebsites.net/) by click the link, or copy `https://azuredevopsdemogenerator.azurewebsites.net/` into your browser's URL field.

2. Click **Sign In** and provide the Microsoft or Azure AD account credentials associated with an organization in Azure DevOps Services. If you don't have an organization, click on **Get Started for Free** to create one and then log in with your credentials.

    > [!div class="mx-imgBorder"]
![Image of VSTS Demo Generator V2 login](_img/1.png)


1. After you sign in, select **Accept** to grant the Demo Generator permissions to access your Azure DevOps account.

    > [!div class="mx-imgBorder"]
![Image of VSTS Demo Generator V2 permissions screen](_img/2.png)

1. Select the organization you will use to host the project created by the Azure DevOps Demo Generator. (You may have multiple accounts of which you are a member, and which are associated with your login, so choose carefully.) Provide a name for your project (such as "MyProjectDemo" ) that you and other contributors can use to identify it as a demo project. Lastly, select the demo project template you want to provision by clicking **...** (Browse) button.

    > [!div class="mxImage"]
![Image of VSTS Demo Generator template selection screen](_img/choose_template.png)

    > [!NOTE] 
    > The default template is **SmartHotel360**, which contains complete ASP.NET 2 web mobile and desktop business apps for a hotel, and can be deployed using Docker containers. Other templates include **MyHealthClinic**, which defines a team project for an ASP.NET Core app that deploys to Azure App Service; **PartsUnlimited**, which defines an ASP.NET app with customized CI/CD pipelines; and **MyShuttle**, which defines a Java app and Azure App service deployment.
    >
    > All four templates provide fictional Azure DevOps users and pre-populated Agile planning and tracking work items and data, along with source code in an Azure Repos Git repo, as well as access to Azure Pipelines.

1. Some templates may require additional extensions to be installed to your organization. The demo generation process checks to see if these extensions are already installed. If the extension is already installed, a green check will be displayed in front of the extension name. If the extension is **not** installed, select the empty check boxes to install the extension(s) to your account. When ready, click on **Create Project** button.

    > If you want to manually install the extensions,  click on the provided link for a specific extension, which takes you to the extension's page on Azure DevOps Marketplace. From there, you can install the extension.

2. Your project may take a couple of minutes for the Demo Generator to provision. When it completes, you will be provided with a link to the demo project.

    > [!div class="mxImage"]
![Image of Azure DevOps Demo Generator project created screen](_img/projectcreated.png)

1. Select the link to go to the new demo Azure DevOps Services project and confirm it was successfully provisioned.

    > [!div class="mxImage"]
![Image of Azure DevOps Demo Generator provision confirmation screen](_img/projecthomepage.png)

> [!NOTE]
> You must provide your own information such as URLs, logins, password, and others for the configuration of demo endpoints that use Azure resources. 
