---
title: Use VSTS Demo Generator
description: Use the Visual Studio Team Services Demo Generator V2 to create and populate a demo project
ms.prod: devops  
ms.technology: devops-new-user
ms.manager: douge
ms.author: douge
ms.topic: conceptual
monikerRange: 'vsts'
ms.date: 05/09/2018
---
# Get started creating and populating demo VSTS projects with the VSTS Demo Generator

1. Browse to the [VSTS Demo Generator site](https://vstsdemogenerator.azurewebsites.net/) by click the link, or copy `https://vstsdemogenerator.azurewebsites.net/` into your browser's URL field.

1. Click **Sign In** and provide your Visual Studio Team Services (VSTS) account login/password. If you don't have a VSTS account, Click on **Get Started for Free** to create one and then log in with your new credentials.

    > [!div class="mx-imgBorder"]
![Image of VSTS Demo Generator V2 login](_img/1.png)


1. After you sign in, select **Accept** to grant the Demo Generator permissions to access your VSTS account.

    > [!div class="mx-imgBorder"]
![Image of VSTS Demo Generator V2 permissions screen](_img/2.png)

1. Select the account you will use to host the project created by the Demo Generator. (You may have multiple accounts of which you are a member, and which are associated with your login, so choose carefully.) Provide a name for your project (such as "MyProjectDemo" ) that you and other contributors can use to identify it as a demo project. Lastly, select the demo project template you want to provision by clicking **...** (Browse) button.

    > [!div class="mxImage"]
![Image of VSTS Demo Generator template selection screen](_img/choose_template.png)

    > [!NOTE] 
    > The default template is **SmartHotel360**, which contains complete ASP.NET 2 web mobile and desktop business apps for a hotel, and can be deployed using Docker containers. Other templates include **MyHealthClinic**, which defines a team project for an ASP.NET Core app that deploys to Azure App Service; **PartsUnlimited**, which defines an ASP.NET app with customized CI/CD pipelines; and **MyShuttle**, which defines a Java app and Azure APp service deployment.
    >
    > All four templates provide fictional VSTS users and pre-populated Agile planning andtracking work items and data, along with source code in VSTS Git as well as build and release pipelines.

1. Some templates may require additional extensions to be installed to your VSTS account. The demo generation process checks to see if these extensions are already installed. If the extension is already installed, a green check will be displayed in front of the extension name. If the extension is **not** installed, select the empty check boxes to install the extension(s) to your account. When ready, click on **Create Project** button.

    > If you want to manually install the extensions,  click on the provided link for a specific extension, which takes you to the extension's page on Visual Studio Team Services Marketplace. From there, you can install the extension.

1. Your project may take a couple of minutes for the Demo Generator to provision. When it completes, you will be provided with a link to the demo project.

    > [!div class="mxImage"]
![Image of VSTS Demo Generator project created screen](_img/projectcreated.png)

1. Select the link to go to the new demo project and confirm it was successfully provisioned.

    > [!div class="mxImage"]
![Image of VSTS Demo Generator provision confirmation screen](_img/projecthomepage.png)

> [!NOTE]
> You must provide your own information such as URLs, logins, password, and others for the configuration of demo endpoints that use Azure resources. 