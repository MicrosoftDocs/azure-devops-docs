---
title: Get started with the VSTS Demo Generator
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

1. Browse to VSTS Demo Generator

2. Sign In with your VSTS credentials. If you don't have Team Service account, Click on Get Started for Free to create a VSTS account.

![](_img/1.png)


3. After you sign in, select Accept to grant the Demo Generatror permissions to access your VSTS accounts .

![](_img/2.png)

4. Select the account you wanted to create the project, provide a name for your project and select the template you want to provision from the '...' button

![](_img/3.png)

5. Some templates may require additional extensions to be installed to your VSTS account. The system will check if these extensions are already installed. A green tick before the extension means that the extension is already installed. If not select check boxes provided to install the extension(s) to your account and click on Create Project button.

> If you want to manually install the extensions, you can click on the extension which will take you to the page on Visual Studio Team Services Marketplace, from where you can install the extension.

![](_img/choose_template.png)



6. Upon successful creation of a project, you will see a link with the URL to the team project you created.

![](_img/projectcreated.png)

7. Select the link to navigate to the project and confirm the project was successfully provisioned.

![](_img/projecthomepage.png)

> [!NOTE] You will need to provide your own information such as URLs, user name, password, etc. for the endpoints created. You will need to provide them before you attempt to use them, say in build, release definitions, for example.