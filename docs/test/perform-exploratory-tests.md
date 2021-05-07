---
title: Exploratory test your web app
description: Test tools - Exploratory test your web app in Azure DevOps from your web browser with the Microsoft Test & Feedback extension
ms.assetid: 1426e139-c7d4-4270-8db7-af7d6da80574
ms.technology: devops-test
ms.topic: quickstart
ms.author: sdanie
author: steved0x
ms.date: 06/02/2019
monikerRange: '>= tfs-2015'
---

# Install the Test &amp; Feedback extension

[!INCLUDE [version-header](includes/version-header.md)]

The **Test &amp; Feedback extension** helps teams perform exploratory testing and provide feedback. 
Everyone in the team, such as developers, product owners, managers, UX or UI engineers, 
marketing teams, early adopters, and other stakeholders can use the 
extension to submit bugs or provide feedback and contribute to the 
quality of your product. 

[!INCLUDE [feature-availability](includes/feature-availability.md)] 

<a name="installext"></a>

## Install the extension

1. Check the list of [supported browsers](reference-qa.md#browser-support) and decide which you want to use.

1. Download and install your chosen browser, if you haven't already, then open it.

1. Go to [Visual Studio Marketplace > Test &amp; Feedback](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web)
   and choose **Install**.

   ![Visual Studio Marketplace, Test &amp; Feedback extension, Install](media/perform-exploratory-tests/getstarted-01.png)

   ![Visual Studio Marketplace, Test &amp; Feedback extension, Supported Browsers](media/perform-exploratory-tests/get-started-11.png)

1. Follow the instructions shown to install the Test &amp; Feedback extension in your browser:

   - If you are using Google Chrome, choose the **Install** link for Chrome from the above image to open the 
     Google Chrome web store and follow the instructions to install the extension.

     ![Add extension to Chrome](media/perform-exploratory-tests/get-started-chrome01.png)

     ![Follow instructions to install the extension on Chrome.](media/perform-exploratory-tests/get-started-chrome02.png)
     
   - If you are using Microsoft Edge (Chromium), choose the **Install** link for Edge from the above image to open the 
     Microsoft Edge Add-ons page and follow the instructions to install the extension.

     ![Add extension to Edge](media/perform-exploratory-tests/get-started-edge01.png)

     ![Follow instructions to install the extension on Edge.](media/perform-exploratory-tests/get-started-edge02.png)
     
   - If you are using Mozilla Firefox 50.0 and higher, choose the **Install** link for Firefox from the above image to open the 
     Firefox Browser Add-ons page and follow the instructions to install the extension.

     ![Add extension to Firefox](media/perform-exploratory-tests/get-started-firefox01.png)

     ![Follow instructions to install the extension on Firefox.](media/perform-exploratory-tests/get-started-firefox02.png)

>You need to install the extension or add-on only once. Afterwards your browser will
update it automatically.

<a name="selectmode"></a>
##  Select an exploratory testing mode

1. Open the extension you installed in your browser by choosing the
   ![Test and Feedback](media/shared/exp-test-icon.png) icon.

   ![Open extension](media/perform-exploratory-tests/open-extension.png)
 
1. Decide if you want to use the extension in Connected or Standalone mode.

   ![Choose connection mode](media/perform-exploratory-tests/getstarted-06.png)

   **[Connected mode](connected-mode-exploratory-testing.md)**  
   Available to all users of Azure DevOps and TFS 2015 or later:

   - Users with **Basic** access or higher: Full capture and create capabilities
     to submit bugs, tasks, and test cases. Includes collaboration
     capabilities such as end-to-end traceability, rich insights
     across completed exploratory sessions, simplified tracking
     and triaging for bugs and tasks, and more.
   - Users with **Stakeholder** access: Full capture and create capabilities,
     except for test cases, to submit feedback and respond to feedback
     requests from the team. 
   - Feedback experience is available only in Azure DevOps and TFS 2017 or later.<p />
 
   **[Standalone mode](standalone-mode-exploratory-testing.md)**  
   Available to everyone. No connection to Azure DevOps or TFS is required. Take notes and screenshots with
   inline annotations to capture issues. Create bugs and export
   a session report to share findings.
 
If you have problems connecting to Azure DevOps or TFS, you may find
the topic [TF31002: Unable to connect](../organizations/projects/tf31002-unable-connect-tfs.md) useful.

## See also

*  [FAQs for manual testing](reference-qa.md#tandfext)

## Next step

> [!div class="nextstepaction"]
> [Use the Test &amp; Feedback extension in Connected mode](connected-mode-exploratory-testing.md)
