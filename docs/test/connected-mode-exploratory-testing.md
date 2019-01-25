---
title: Exploratory testing in connected mode
description: Manual and exploratory testing - exploratory testing by using the Test & Feedback extension in Connected mode
ms.assetid: 0F52826C-218D-437A-B6FF-EB8E8292CE3C
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Exploratory testing with the Test &amp; Feedback extension in Connected mode

[!INCLUDE [version-header](_shared/version-header.md)] 

To use the Test &amp; Feedback extension in **Connected** mode you must connect 
to Azure DevOps or TFS 2015 and later.
This automatically configures the extension based on your access level: 

* Users with **Basic** access can use the extension to perform exploratory
  testing, as described below.

* Users with **Stakeholder** access can use the extension to respond to 
  feedback requests or to provide feedback voluntarily.
  [More details](provide-stakeholder-feedback.md#direct).
 
* Users with **Basic** or **Stakeholder** access can use extension to respond to feedback requests sent 
  by the team by choosing the **Provide feedback** link in the email.
  [More details](provide-stakeholder-feedback.md#email).

[!INCLUDE [feature-availability](_shared/feature-availability.md)] 

<a name="connectvtfs"></a>
## Connect to Azure DevOps or TFS

1. If you want to use Azure DevOps, and you haven't already done so, 
   [sign up for a subscription](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs)
   now. Make sure you create a project when you create your subscription.

1. If you haven't already, [install the Test &amp; Feedback extension](perform-exploratory-tests.md).

1. Open the extension in your web browser and select **Connected** mode.

   ![Start the extension in Connected mode](_img/_shared/connectedmode-01.png)
 
1. Enter the Azure DevOps or TFS URL you want to connect to and choose **Next**.

   ![Enter the Azure DevOps or TFS URL you want to connect to](_img/_shared/connectedmode-02.png)

   If you are connecting for the first time, you may be prompted to sign in. 
 
1. After connecting to the server, the extension shows 
   all the collections, projects and teams in that server. Select the
   project or team you want to connect to and choose **Save**.

   ![Select your project or team](_img/connected-mode-exploratory-testing/connectedmode-03.png)

   If there are many projects or teams, use the search textbox
   to find the one you need. 
 
The extension is now ready to be used in **Connected** mode. 
Depending on your access level (Basic or Stakeholder)
you will see the appropriate UI for either [exploratory testing](#create-bugs)
or [providing feedback](provide-stakeholder-feedback.md#provide).
The extension remembers your selection and remains connected until
the session cookies expire or you explicitly disconnect from the server.

<a name="create-bugs"></a>
## Create bugs or tasks

After you have connected, you are ready to begin testing your app.

1. Start your exploratory testing session. 

   ![Start your exploratory testing session](_img/connected-mode-exploratory-testing/create-bugs-01.png)

1. Open the web application you want to test, and start exploring it. 

1. When you find an area that has a bug, take a screenshot of any part of the screen,
   make notes, or record your actions as a video.

   ![Take a screenshot, make notes, or record your actions as a video](_img/connected-mode-exploratory-testing/create-bugs-01a.png)

   >Some browsers may not provide all of the capture capabilities.
   See [Which web browsers does the extension support?](reference-qa.md#browser-support) 

1. When you are done exploring and capturing information, create a bug or a task. 

   ![Create a bug or a task from the captured information](_img/connected-mode-exploratory-testing/create-bugs-02.png)

1. The bug or task form contains all your captured information. 
   It also contains an image action log describing your interactions with the page
   (such as mouse clicks, keyboard typing events, touch gestures, and more) and
   page load data. Uncheck these options if you do not want to include this
   data in the bug or task.

   ![Decide whether to include the image action log and page load data](_img/connected-mode-exploratory-testing/create-bugs-03.png)

   >The image action log is the sequence of steps you took that led to the issue.
   It can be used to reproduce the issue and understand the context.
   Page load data provides preliminary information about the time it takes to load
   the pages, such as the resource timings and navigation timelines.

1. Enter a title for the bug or task and add any additional notes 
   you require to the description. Then save the bug or task.

   ![Save the bug or task](_img/connected-mode-exploratory-testing/create-bugs-04.png)

   > You can also [add your findings to an existing similar bug](reference-qa.md#addsimilar). 

1. View a list of all your activities in reverse chronological order
   in the **Session timeline** page. It shows all the screenshots, videos, and notes 
   you've captured, the work items such as bugs, tasks, and test cases you've already
   filed, and the work items you've explored.

   ![Review your captured information](_img/connected-mode-exploratory-testing/create-bugs-08.png)

   > You can use the extension to [explore work items](explore-workitems-exploratory-testing.md)
   in Azure DevOps or TFS.

1. To view a bug or task in Azure DevOps or TFS, choose the link in the session timeline.

   ![View a bug or task](_img/connected-mode-exploratory-testing/create-bugs-09.png)

   This opens the work item form in Azure DevOps or TFS.

   ![The bug or task in TS or TFS](_img/connected-mode-exploratory-testing/create-bugs-10.png)

[How do I play the video recordings I created with the extension?](reference-qa.md#recording-playback)
 
<a name="create-testcase"></a>
## Create test cases

The extension lets you create test cases as you explore your application.

1. When you find a scenario where you want to create a test case, 
   choose **Create test case**.

   ![Creating a test case](_img/connected-mode-exploratory-testing/create-testcase-01.png)

1. The test case form contains a list of all your actions up to this point
   while exploring the app (it reads them from the image action log).

   ![The actions for the new test case](_img/connected-mode-exploratory-testing/create-testcase-02.png)

1. Enter a title for the test case and then edit it as required. For example, 
   uncheck the action steps you don't want to include in the test case, edit the captured 
   text, and add the expected result. Then save the test case.
 
   ![Editing new test case](_img/connected-mode-exploratory-testing/create-testcase-03.png)

1. Continue exploring the application. Create more bugs, tasks, or test cases  as required. 

<a name="endsession"></a>
## End your testing session

1. When you're done, stop your session.

   ![Stop the exploratory testing session](_img/connected-mode-exploratory-testing/create-bugs-05.png)

1. If you are using Azure DevOps, or TFS 2017 and higher, open the **Session timeline** page and choose the "view" icon to see your completed exploratory 
   sessions in Azure DevOps or TFS.

   ![View the exploratory testing session](_img/connected-mode-exploratory-testing/create-bugs-06.png)

   Alternatively, open the **Recent exploratory sessions** list directly in the **Runs** page of [!INCLUDE [test-hub-include](_shared/test-hub-include.md)].
 
   ![View exploratory testing sessions on the server](_img/connected-mode-exploratory-testing/create-bugs-07.png)

## See your exploratory session results 

After you file bugs, create tasks, or create test cases, all these show up in the "Recent exploratory sessions" page in Azure Test Plans or TFS.

* See how you can [view your sessions and get insights](insights-exploratory-testing.md).

[How do I play the video recordings I created with the extension?](reference-qa.md#recording-playback)

