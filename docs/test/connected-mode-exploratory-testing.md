---
title: Exploratory testing in connected mode
description: Learn how to connect the Test & Feedback extension to Azure DevOps, run exploratory tests, capture findings, and review sessions.
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ai-usage: ai-assisted
ms.topic: quickstart
ms.author: pliaros
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 08/14/2026
ms.update-cycle: 1095-days
---

# Exploratory testing with the Test & Feedback extension in Connected mode

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

To use the Test & Feedback extension in Connected mode, connect to an Azure DevOps project, which automatically configures the extension based on your access level. 

* Users with **Basic** access can use the extension to perform exploratory
  testing, as described in this article.
* Users with **Stakeholder** access can use the extension to respond to feedback requests or to [provide feedback](request-stakeholder-feedback.md#voluntary) voluntarily.
* Users with **Basic** or **Stakeholder** access can use the extension to respond to feedback requests sent by the team by choosing the **Provide feedback** link in the email. For more information, see [Provide stakeholder feedback](request-stakeholder-feedback.md#email).

## Prerequisites

[!INCLUDE [prerequisites-stakeholder](includes/prerequisites-stakeholder.md)] 

<a name="connectvtfs"></a>

## Connect to Azure DevOps 

1. If you don't have a subscription, [sign up for a subscription](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs). Make sure you create a project when you create your subscription.

2. [Install the Test & Feedback extension](perform-exploratory-tests.md).

3. Open the extension in your web browser and select **Connected** mode.

   ![Screenshot showing starting the extension in Connected mode.](media/perform-exploratory-tests/getstarted-06.png)
 
4. Enter the Azure DevOps URL you want to connect to and select **Next**.

   ![Screenshot showing entering the Azure DevOps URL you want to connect to.](media/shared/connectedmode-02.png)

   If you're connecting for the first time, you might be prompted to sign in. 
 
   After you connect to the server, the extension shows all the collections, projects, and teams in that server. 
5. Select the project or team you want to connect to and select **Save**.

   ![Screenshot showing project or team selection.](media/connected-mode-exploratory-testing/connected-mode-03.png)

   If there are many projects or teams, use the search textbox to find the one you need. 
 
The extension is now ready to be used in **Connected** mode. 
Depending on your access level (Basic or Stakeholder), you see the appropriate UI for either [exploratory testing](#create-bugs) or [providing feedback](request-stakeholder-feedback.md#email).
The extension remembers your selection and remains connected until the session cookies expire or you explicitly disconnect from the server.

<a name="create-bugs"></a>

## Create bugs or tasks

Do the following steps to start your exploratory testing session and create bugs or tasks.

1. Start your exploratory testing session. 

   ![Screenshot of the Test and Feedback toolbar with the Start session button highlighted.](media/connected-mode-exploratory-testing/create-bugs-01.png)

1. Open the web application you want to test, and start exploring it. 

1. When you find an area that has a bug, take a screenshot of any part of the screen,
   make notes, or record your actions as a video.

   ![Take a screenshot, make notes, or record your actions as a video](media/connected-mode-exploratory-testing/create-bugs-01a.png)

   Some browsers might not provide all of the capture capabilities.
   See [Supported web browsers for the extension](perform-exploratory-tests.md#browser-support).

1. When you're done exploring and capturing information, create a bug or a task. 

   ![Create a bug or a task from the captured information](media/connected-mode-exploratory-testing/create-bugs-02.png)

1. The bug or task form contains all your captured information. 
   It also contains an image action log describing your interactions with the page
   (such as mouse select, keyboard typing events, touch gestures, and more) and
   page load data. Uncheck these options if you don't want to include this
   data in the bug or task.

   ![Decide whether to include the image action log and page load data](media/connected-mode-exploratory-testing/create-bugs-03.png)

   The image action log is the sequence of steps you took that led to the issue.
   It can be used to reproduce the issue and understand the context.
   Page load data provides preliminary information about the time it takes to load
   the pages, such as the resource timings and navigation timelines.

1. Enter a title for the bug or task and add any other notes 
   you require to the description. Then save the bug or task.

   ![Screenshot of a new bug form with a captured screen recording and the Save button highlighted.](media/connected-mode-exploratory-testing/create-bugs-04.png)

   You can also [add your findings to an existing similar bug](reference-qa.yml#can-i-edit-an-existing-bug-instead-of-creating-a-new-bug-when-using-the-test---feedback-extension). 

1. View a list of all your activities in reverse chronological order
   in the **Session timeline** page. The timeline shows all the screenshots, videos, notes, the work items such as bugs, tasks, and test cases you already
   filed, and the work items you explored.

   ![Screenshot of captured information for review.](media/connected-mode-exploratory-testing/create-bugs-08.png)

   You can use the extension to [explore work items](explore-workitems-exploratory-testing.md)
   in Azure DevOps.

1. To view a bug or task in Azure DevOps, choose the link in the session timeline.

   ![Screenshot of the session timeline with a newly created bug selected.](media/connected-mode-exploratory-testing/create-bugs-09.png)

   The work item form opens in Azure DevOps.

   ![Screenshot of a bug work item with captured observations and a screen recording link.](media/connected-mode-exploratory-testing/create-bugs-10.png)

[How do I play the video recordings I created with the extension?](reference-qa.yml#how-do-i-play-the-video-recordings-i-created-with-the-extension)
 
<a name="create-testcase"></a>

## Create test cases

The extension lets you create test cases as you explore your application.

1. When you find a scenario where you want to create a test case, select **Create test case**.

   ![Screenshot showing creating a test case.](media/connected-mode-exploratory-testing/create-testcase-01.png)

2. The test case form lists all your actions while exploring the app, as recorded in the image action log.

   ![Screenshot showing the actions for the new test case.](media/connected-mode-exploratory-testing/create-testcase-02.png)

3. Enter a title for the test case and then edit it as required. For example, uncheck the action steps you don't want to include in the test case, edit the captured text, and add the expected result. Then save the test case.
 
   ![Screenshot showing editing a new test case.](media/connected-mode-exploratory-testing/create-testcase-03.png)

<a name="endsession"></a>

## End your testing session

1. When you're done, stop your session.

   ![Screenshot of stopping the exploratory testing session.](media/connected-mode-exploratory-testing/create-bugs-05.png)

2. Open the **Session timeline** page and select the "view" icon to see your completed exploratory 
   sessions in Azure DevOps.

   ![Screenshot of View the exploratory testing session.](media/connected-mode-exploratory-testing/create-bugs-06.png)

::: moniker range="azure-devops"

Alternatively, in your Azure DevOps project, select **Test Plans** > **Exploratory sessions**.

![Screenshot of the Test Plans menu with Exploratory sessions highlighted.](media/insights-exploratory-testing/exploratory-sessions-navigation.png)

::: moniker-end

::: moniker range="< azure-devops"

Alternatively, in your Azure DevOps project, select **Test Plans** > **Runs** > **Recent exploratory sessions**.

![Screenshot of the Recent exploratory sessions page in Azure DevOps Server.](media/connected-mode-exploratory-testing/create-bugs-07.png)

::: moniker-end

## See your exploratory session results 

::: moniker range="azure-devops"

After you file bugs, create tasks, or create test cases, they appear on the **Exploratory sessions** page in Azure Test Plans.

::: moniker-end

::: moniker range="< azure-devops"

After you file bugs, create tasks, or create test cases, they appear on the **Recent exploratory sessions** page in Azure Test Plans.

::: moniker-end

See how you can [view your sessions and get insights](insights-exploratory-testing.md).

[How do I play the video recordings I created with the extension?](reference-qa.yml#how-do-i-play-the-video-recordings-i-created-with-the-extension)
