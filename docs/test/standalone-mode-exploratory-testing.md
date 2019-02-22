---
title: Exploratory test in standalone mode
description: Manual and exploratory testing - exploratory testing by using the Microsoft Test & Feedback extension in Standalone mode
ms.assetid: 762A75FB-0B6D-47C3-9232-371348D8D529
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Exploratory testing with the Test &amp; Feedback extension in Standalone mode

[!INCLUDE [version-header](_shared/version-header.md)] 

All teams can use the Test &amp; Feedback extension in **Standalone** mode. 
Users don't need an Azure DevOps subscription 
or Team Foundation Server connection to use this mode.

<a name="testmode"></a>
## Start testing in Standalone mode

1. If you haven't already, [install the Test &amp; Feedback extension](perform-exploratory-tests.md).

1. Open the extension in your web browser and select **Standalone** mode.

   ![Start the extension in Standalone mode](_img/standalone-mode-exploratory-testing/standalonemode-01.png)

1. Open the web application you want to explore and
   start the testing session.

   ![Start recording in Standalone mode](_img/standalone-mode-exploratory-testing/standalonemode-02.png)

1. When you find an area that has a bug, take a screenshot of the entire screen or any part of it.

   ![Take a screenshot of the application issue](_img/standalone-mode-exploratory-testing/standalonemode-03.png)

1. You can annotate the screenshot using the tools available in the inline annotation toolbar. 

   ![Annotate your screenshot if required](_img/standalone-mode-exploratory-testing/standalonemode-04.png)

1. Make notes about the issue to share with your team, and then save the note.

   ![Add notes about the issue if required](_img/standalone-mode-exploratory-testing/standalonemode-05.png)

<a name="createbug"></a>
## Create a bug

1. When you have finished capturing information for an issue, choose **Create bug**.

   ![Create a bug from the captured information](_img/standalone-mode-exploratory-testing/standalonemode-06.png)

1. The bug form contains all your captured information. 
   Enter a title for the bug and add any additional notes 
   you require to the description. Then save the bug.

   ![Enter a title and description, then save the bug](_img/standalone-mode-exploratory-testing/standalonemode-07.png)

1. View a list of all your activities in reverse chronological
   order in the **Session timeline** page. It shows all the
   screenshots and notes you've captured and the bugs you've already created.

   ![Review your captured information](_img/standalone-mode-exploratory-testing/standalonemode-07a.png)

<a name="endsession"></a>
## End your testing session

1. Continue exploring the application. Create more bugs as you encounter
   issues with the app.
   
1. When you're done, stop your session.

   ![Stop the exploratory testing session](_img/standalone-mode-exploratory-testing/standalonemode-08.png)

   The extension automatically creates a session report that contains 
   details of all the bugs created during the session, and any attachments. 
  
   ![The exploratory testing report](_img/standalone-mode-exploratory-testing/standalonemode-09.png)

1. The report is saved in the default Downloads folder of your web browser. 
   Share it with the rest of your team as an email attachment, or 
   copy it to OneNote, Word, or in any other format you prefer.

[How do I play the video recordings I created with the extension?](reference-qa.md#recording-playback)

## Next step

> [!div class="nextstepaction"]
> [Use the extension in Connected mode](connected-mode-exploratory-testing.md)
