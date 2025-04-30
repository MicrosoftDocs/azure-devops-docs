---
title: Exploratory test in standalone mode
description: Manual and exploratory testing - exploratory testing by using the Microsoft Test & Feedback extension in Standalone mode
ms.assetid: 762A75FB-0B6D-47C3-9232-371348D8D529
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: quickstart
ms.author: jeom
author: rohit-batra
ms.date: 12/07/2018
monikerRange: '<= azure-devops'
---

# Exploratory testing with the Test &amp; Feedback extension in Standalone mode

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

All teams can use the Test & Feedback extension in **Standalone** mode. 
Users don't need an Azure DevOps subscription to use this mode.

## Prerequisites

| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../organizations/security/add-users-team-project.md). |
| **Access levels** | To request or provide feedback: At least **Stakeholder** access. |
| **Extensions** |[Test & Feedback extension](perform-exploratory-tests.md).|

<a name="testmode"></a>

## Start testing in Standalone mode

1. If you haven't already, [install the Test & Feedback extension](perform-exploratory-tests.md).

2. Open the extension in your web browser and select **Standalone** mode.

   ![Screenshot shows starting the extension in Standalone mode.](media/standalone-mode-exploratory-testing/standalonemode-01.png)

3. Open the web application you want to explore and
   start the testing session.

   ![Screenshot shows starting recording in Standalone mode.](media/standalone-mode-exploratory-testing/standalonemode-02.png)

4. When you find an area that has a bug, take a screenshot of the entire screen or any part of it.

   ![Take a screenshot of the application issue](media/standalone-mode-exploratory-testing/standalonemode-03.png)

5. You can annotate the screenshot using the tools available in the inline annotation toolbar. 

   ![Screenshot show annotating a screenshot.](media/standalone-mode-exploratory-testing/standalonemode-04.png)

6. Make notes about the issue to share with your team, and then **Save** the note.

   ![Screenshot show adding notes about the issue.](media/standalone-mode-exploratory-testing/standalonemode-05.png)

<a name="createbug"></a>

## Create a bug

1. When you finish capturing information for an issue, select **Create bug**.

   ![Screenshot shows creating a bug from the captured information.](media/standalone-mode-exploratory-testing/standalonemode-06.png)

2. The bug form contains all your captured information. Enter a title for the bug and add any other notes you require to the description. Then **Save** the bug.

   ![Screenshot shows entering a title and description to the bug.](media/standalone-mode-exploratory-testing/standalonemode-07.png)

3. View a list of all your activities in reverse chronological order in the **Session timeline** page. This page shows all the screenshots and notes you captured and the bugs you already created.

   ![Screenshot shows review of captured information.](media/standalone-mode-exploratory-testing/standalonemode-07a.png)

<a name="endsession"></a>

## End your testing session

1. Continue to explore the application. Create more bugs as you encounter issues with the app.
   
2. When you're done, stop your session.

   ![Screenshot shows stopping the exploratory testing session.](media/standalone-mode-exploratory-testing/standalonemode-08.png)

   The extension automatically creates a session report that contains details of all the bugs created during the session, and any attachments. 
  
   ![Screenshot show the exploratory testing report.](media/standalone-mode-exploratory-testing/standalonemode-09.png)

3. The report saves in the default **Downloads** folder of your web browser. Share it with the rest of your team as an email attachment, or copy it to OneNote, Word, or in any other format you prefer.

   [How do I play the video recordings I created with the extension?](reference-qa.yml#recording-playback)

## Next steps

> [!div class="nextstepaction"]
> [Use the extension in Connected mode](connected-mode-exploratory-testing.md)
