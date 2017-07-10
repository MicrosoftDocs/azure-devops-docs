---
title: Exploratory test your web app in Visual Studio Team Services from your browser with the Test &amp; Feedback extension
description: Exploratory test your web app, find and file bugs in Visual Studio Team Services (VSTS) from your browser with the Test &amp; Feedback extension - for any platform, no test cases or test steps
ms.prod: vs-devops-alm
ms.technology: vs-devops-test-manual
ms.assetid: 1426e139-c7d4-4270-8db7-af7d6da80574
ms.manager: douge
ms.author: ahomer
ms.date: 08/12/2016
---

# Exploratory test and submit feedback directly from your browser

[!INCLUDE [version-header-ts-tfs](../../_shared/version-header-ts-tfs.md)] 

The **Test &amp; Feedback extension** (previously called the Exploratory Testing extension)
helps teams perform exploratory testing and provide feedback. 
Everyone in the team, such as developers, product owners, managers, UX or UI engineers, 
marketing teams, early adopters, and other stakeholders can use the 
extension to submit bugs or provide feedback and contribute to the 
quality of your product. 

## What is the Test &amp; Feedback extension?

The Test &amp; Feedback extension
is a simple browser-based extension you can use to test web apps 
anytime and anywhere, and is simple enough for everyone in the team to use.
It helps to improve productivity by allowing you to spend more time
finding issues, and less time filing them.

Using the extension is a simple, three step process.

![Schematic showing process steps Capture, Create, Collaborate](_img/perform-exploratory-tests/getstarted-05.png)
 
* **Capture your findings** quickly and easily using the tools in the extension. 
  Capture notes, screenshots with annotations, and screen recordings 
  to describe your findings and highlight issues. Additionally, in 
  the background the extension automatically captures rich data such
  as user actions as an image action log, page load data,
  and system information about the browser, operating system, memory,
  and more that can serve as a starting point for debugging. 

* **Create work items** such as bugs, tasks, and test cases directly from 
  the extension. The captured findings automatically become a part of the work item. 
  Users can file a bug to report an issue with the product, or create a task that
  indicates a new work requirement. The extension can also be used to 
  create test cases for scenarios discovered during exploration. 

* **Collaborate with your team** by sharing your findings. 
  Export your session report in Standalone mode, or connect to Team Services or
  Team Foundation Server (2015 or later) for a fully integrated experience
  including exploring user stories and backlog items, simplified tracking and triaging of 
  bugs and tasks, and managing feedback requests in one place.

As users perform exploratory testing, you can
[get insights from the sessions](../insights-exploratory-testing.md) in the **Test** hub of 
Team Services or TFS. View completed exploratory sessions and derive meaningful
insights across all the sessions. Get end-to-end traceability such as a breakdown 
of the work items created, the work items explored and not explored, session owners,
and more.

<iframe width="640" height="360" src="//channel9.msdn.com/Series/Test-Tools-in-Visual-Studio/IntroducingTestFeedbackextension/player" frameborder="0" allowfullscreen="true"></iframe><p />

<a name="install"></a>
## Install the Test &amp; Feedback extension

1. Check the list of [supported browsers](#browser-support) and decide which you want to use.

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

##  Select an exploratory testing mode

1. Open the extension you installed in your browser by choosing the
   ![Test and Feedback](../_img/_shared/exp-test-icon.png) icon.

   ![Open extension](_img/perform-exploratory-tests/open-extension.png)
 
1. Decide if you want to use the extension in Connected or Standalone mode.

   ![Choose connection mode](_img/perform-exploratory-tests/getstarted-06.png)

   **[Connected mode](../connected-mode-exploratory-testing.md)**  
   Available to all users of Team Services and TFS 2015 or later:

   - Users with **Basic** access: Full capture and create capabilities
     to submit bugs, tasks, and test cases. Includes collaboration
     capabilities such as end-to-end traceability, rich insights
     across completed exploratory sessions, simplified tracking
     and triaging for bugs and tasks, and more.
   - Users with **Stakeholder** access: Full capture and create capabilities,
     except for test cases, to submit feedback and respond to feedback
     requests from the team. 
   - Feedback experience is available only in Team Services and TFS 2017 or later.<p />
 
   **[Standalone mode](../standalone-mode-exploratory-testing.md)**  
   Available to everyone. No connection to Team Services or Team
   Foundation Server is required. Take notes and screenshots with
   inline annotations to capture issues. Create bugs and export
   a session report to share findings.
 
>If you have problems connecting to Team Services or TFS, you may find
the topic [TF31002: Unable to connect](https://www.visualstudio.com/en-us/docs/work/reference/error/tf31002-unable-connect-tfs) useful.

## Try this next

* [Use the Test &amp; Feedback extension in **Connected** mode](../connected-mode-exploratory-testing.md)
* [Use the Test &amp; Feedback extension in **Standalone** mode](../standalone-mode-exploratory-testing.md)
* [Get stakeholder feedback with the Test & Feedback extension](../stakeholder/request-stakeholder-feedback.md)

##  Q&A

<!-- BEGINSECTION class="md-qanda" -->

<a name="browser-support"><a/>
#### Q: Which web browsers does the extension support?

A:  The Test &amp; Feedback extension is currently available for
[Google Chrome](https://www.google.com/chrome/)
and [Mozilla Firefox version 50.0 and higher](https://www.mozilla.org/).
Edge support is planned. 

Some browser versions do not currently support all the features of the Test &amp; Feedback extension.

| Feature | Chrome | Firefox |
| --- | --- | --- |
| Capture screenshots with inline annotations | &nbsp; **Yes** | &nbsp; **Yes** |
| Capture notes | &nbsp; **Yes** | &nbsp; **Yes** |
| Capture screen recordings | &nbsp; **Yes** | &nbsp; **No** |
| Capture page load data | &nbsp; **Yes** | &nbsp; **No** |
| Capture user actions log | &nbsp; **Yes** |&nbsp; **No** |
| Capture system information | &nbsp; **Yes** |&nbsp; **No** |
| Create bugs | &nbsp; **Yes** | &nbsp; **Yes** |
| Create tasks and test cases | &nbsp; **Yes** | &nbsp; **Yes** |
| Create feedback requests | &nbsp; **Yes** | &nbsp; **Yes** |
| Export session report for sharing | &nbsp; **Yes** | &nbsp; **Yes** |
| End-to-end tracability for workitems | &nbsp; **Yes** | &nbsp; **Yes** |
| Simplified bug and task tracking and triaging | &nbsp; **Yes** | &nbsp; **Yes** |
| View and get insights from sessions | &nbsp; **Yes** | &nbsp; **Yes** |
| View similar existing bugs | &nbsp; **Yes** | &nbsp; **Yes** |
| Test app on devices using cloud providers such as Perfecto | &nbsp; **Yes** | &nbsp; **No** |
| Manage feedback requests | &nbsp; **Yes** | &nbsp; **Yes** |

<p />
For more details, see 
[Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms.vss-exploratorytesting-web).

<a name="recording-playback"><a/>
#### Q: How do I play the video recordings I created with the extension?

The video recordings created by the Test &amp; Feedback extension can be
viewed in [Google Chrome](https://www.google.com/chrome/) browser and in the
[VLC Video Player](http://www.videolan.org/vlc/download-windows.html).

#### Q: Does the extension support Team Foundation Server?

A: The Test &amp; Feedback extension supports Team Foundation Server 2015 and later. 
All users, including stakeholders, can use the extension in Connected
mode with all the functionality except session insights and the request
and provide feedback flow, which are supported only for TFS 2017.

<!-- ENDSECTION --> 

[!INCLUDE [help-and-support-footer](../../_shared/help-and-support-footer.md)] 
