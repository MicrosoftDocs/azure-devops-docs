---
title: Exploratory test your web app
description: Test tools - Exploratory test your web app in Azure DevOps from your web browser with the Microsoft Test & Feedback extension
ms.assetid: 1426e139-c7d4-4270-8db7-af7d6da80574
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Install the Test &amp; Feedback extension

[!INCLUDE [version-header](_shared/version-header.md)]

The **Test &amp; Feedback extension** helps teams perform exploratory testing and provide feedback. 
Everyone in the team, such as developers, product owners, managers, UX or UI engineers, 
marketing teams, early adopters, and other stakeholders can use the 
extension to submit bugs or provide feedback and contribute to the 
quality of your product. 

[!INCLUDE [feature-availability](_shared/feature-availability.md)] 

<a name="installext"></a>
## Install the extension

1. Check the list of [supported browsers](reference-qa.md#browser-support) and decide which you want to use.

1. Download and install your chosen browser, if you haven't already, then open it.

1. Go to [Visual Studio Marketplace > Test &amp; Feedback](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web)
   and choose **Install**.

   ![Visual Studio Marketplace, Test &amp; Feedback extension, Install](_img/perform-exploratory-tests/getstarted-01.png)

1. Follow the instructions shown to install the Test &amp; Feedback extension in your browser:

   - If you are using Google Chrome, choose the **Install** link to open the 
     Google Chrome web store and follow the instructions to install the extension.

     ![Install extension on Chrome](_img/perform-exploratory-tests/getstarted-02.png)

     ![Install extension on Chrome](_img/perform-exploratory-tests/getstarted-03.png)

   - If you are using Mozilla Firefox 50.0 and higher, choose the **Download** link
     and save the file to a local folder on your computer. 

     ![Install extension on Firefox](_img/perform-exploratory-tests/getstarted-07.png)

     Select and drag the downloaded file and drop it on any tab in Firefox.

     ![Install extension on Firefox](_img/perform-exploratory-tests/getstarted-08.png)

     Choose **Install**.

     ![Install extension on Firefox](_img/perform-exploratory-tests/getstarted-09.png)

     ![Install extension on Firefox](_img/perform-exploratory-tests/getstarted-10.png)

>You need to install the extension or add-on only once. Afterwards your browser will
update it automatically.

<a name="selectmode"></a>
##  Select an exploratory testing mode

1. Open the extension you installed in your browser by choosing the
   ![Test and Feedback](_img/_shared/exp-test-icon.png) icon.

   ![Open extension](_img/perform-exploratory-tests/open-extension.png)
 
1. Decide if you want to use the extension in Connected or Standalone mode.

   ![Choose connection mode](_img/perform-exploratory-tests/getstarted-06.png)

   **[Connected mode](connected-mode-exploratory-testing.md)**  
   Available to all users of Azure DevOps and TFS 2015 or later:

   - Users with **Basic** access: Full capture and create capabilities
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
 
>If you have problems connecting to Azure DevOps or TFS, you may find
the topic [TF31002: Unable to connect](../reference/error/tf31002-unable-connect-tfs.md) useful.

## See also

*  [FAQs for manual testing](reference-qa.md#tandfext)

## Next step

> [!div class="nextstepaction"]
> [Use the Test &amp; Feedback extension in Connected mode](connected-mode-exploratory-testing.md)
