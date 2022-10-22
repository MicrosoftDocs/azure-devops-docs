---
title: Exploratory testing in connected mode
description: Manual and exploratory testing - exploratory testing by using the Test & Feedback extension in Connected mode
ms.assetid: 0F52826C-218D-437A-B6FF-EB8E8292CE3C
ms.service: azure-devops-test-plans
ms.topic: quickstart
ms.author: sdanie
author: steved0x
monikerRange: '<= azure-devops'
ms.date: 09/14/2021
---

# Exploratory testing with the Test &amp; Feedback extension in Connected mode

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

To use the Test &amp; Feedback extension in **Connected** mode you must connect 
to an Azure DevOps project.
This automatically configures the extension based on your access level: 

* Users with **Basic** access can use the extension to perform exploratory
  testing, as described below.

* Users with **Stakeholder** access can use the extension to respond to 
  feedback requests or to provide feedback voluntarily.
  [More details](provide-stakeholder-feedback.md#direct).
 
* Users with **Basic** or **Stakeholder** access can use extension to respond to feedback requests sent 
  by the team by choosing the **Provide feedback** link in the email.
  [More details](provide-stakeholder-feedback.md#email).

[!INCLUDE [prerequisites-define](includes/prerequisites-stakeholder.md)] 

<a name="connectvtfs"></a>

## Connect to Azure DevOps 

1. If you want to use Azure DevOps, and you haven't already done so, 
   [sign up for a subscription](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs)
   now. Make sure you create a project when you create your subscription.

1. If you haven't already, [install the Test &amp; Feedback extension](perform-exploratory-tests.md).

1. Open the extension in your web browser and select **Connected** mode.

   ![Start the extension in Connected mode](media/shared/connectedmode-01.png)
 
1. Enter the Azure DevOps URL you want to connect to and choose **Next**.

   ![Enter the Azure DevOps URL you want to connect to](media/shared/connectedmode-02.png)

   If you are connecting for the first time, you may be prompted to sign in. 
 
1. After connecting to the server, the extension shows 
   all the collections, projects and teams in that server. Select the
   project or team you want to connect to and choose **Save**.

   ![Select your project or team](media/connected-mode-exploratory-testing/connectedmode-03.png)

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

   ![Start your exploratory testing session](media/connected-mode-exploratory-testing/create-bugs-01.png)

1. Open the web application you want to test, and start exploring it. 

1. When you find an area that has a bug, take a screenshot of any part of the screen,
   make notes, or record your actions as a video.

   ![Take a screenshot, make notes, or record your actions as a video](media/connected-mode-exploratory-testing/create-bugs-01a.png)

   >Some browsers may not provide all of the capture capabilities.
   See [Supported web browsers for the extension](perform-exploratory-tests.md#browser-support).

1. When you are done exploring and capturing information, create a bug or a task. 

   ![Create a bug or a task from the captured information](media/connected-mode-exploratory-testing/create-bugs-02.png)

1. The bug or task form contains all your captured information. 
   It also contains an image action log describing your interactions with the page
   (such as mouse clicks, keyboard typing events, touch gestures, and more) and
   page load data. Uncheck these options if you do not want to include this
   data in the bug or task.

   ![Decide whether to include the image action log and page load data](media/connected-mode-exploratory-testing/create-bugs-03.png)

   >The image action log is the sequence of steps you took that led to the issue.
   It can be used to reproduce the issue and understand the context.
   Page load data provides preliminary information about the time it takes to load
   the pages, such as the resource timings and navigation timelines.

1. Enter a title for the bug or task and add any additional notes 
   you require to the description. Then save the bug or task.

   ![Save the bug or task](media/connected-mode-exploratory-testing/create-bugs-04.png)

   > You can also [add your findings to an existing similar bug](reference-qa.yml#addsimilar). 

1. View a list of all your activities in reverse chronological order
   in the **Session timeline** page. It shows all the screenshots, videos, and notes 
   you've captured, the work items such as bugs, tasks, and test cases you've already
   filed, and the work items you've explored.

   ![Review your captured information](media/connected-mode-exploratory-testing/create-bugs-08.png)

   > You can use the extension to [explore work items](explore-workitems-exploratory-testing.md)
   in Azure DevOps.

1. To view a bug or task in Azure DevOps, choose the link in the session timeline.

   ![View a bug or task](media/connected-mode-exploratory-testing/create-bugs-09.png)

   This opens the work item form in Azure DevOps.

   ![The bug or task in TS](media/connected-mode-exploratory-testing/create-bugs-10.png)

[How do I play the video recordings I created with the extension?](reference-qa.yml#recording-playback)
 
<a name="create-testcase"></a>
## Create test cases

The extension lets you create test cases as you explore your application.

1. When you find a scenario where you want to create a test case, 
   choose **Create test case**.

   ![Creating a test case](media/connected-mode-exploratory-testing/create-testcase-01.png)

1. The test case form contains a list of all your actions up to this point
   while exploring the app (it reads them from the image action log).

   ![The actions for the new test case](media/connected-mode-exploratory-testing/create-testcase-02.png)

1. Enter a title for the test case and then edit it as required. For example, 
   uncheck the action steps you don't want to include in the test case, edit the captured 
   text, and add the expected result. Then save the test case.
 
   ![Editing new test case](media/connected-mode-exploratory-testing/create-testcase-03.png)

1. Continue exploring the application. Create more bugs, tasks, or test cases  as required. 

<a name="endsession"></a>
## End your testing session

1. When you're done, stop your session.

   ![Stop the exploratory testing session](media/connected-mode-exploratory-testing/create-bugs-05.png)

2. If you are using Azure DevOps, TFS 2017, or later version, open the **Session timeline** page and choose the "view" icon to see your completed exploratory 
   sessions in Azure DevOps.

   ![View the exploratory testing session](media/connected-mode-exploratory-testing/create-bugs-06.png)

   Alternatively, open the **Recent exploratory sessions** list directly in the **Runs** page of the **Test Plans** web portal.
 
   ![View exploratory testing sessions on the server](media/connected-mode-exploratory-testing/create-bugs-07.png)

## See your exploratory session results 

After you file bugs, create tasks, or create test cases, all these show up in the "Recent exploratory sessions" page in Azure Test Plans.

* See how you can [view your sessions and get insights](insights-exploratory-testing.md).

[How do I play the video recordings I created with the extension?](reference-qa.yml#recording-playback)

