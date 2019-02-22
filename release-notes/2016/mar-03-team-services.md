---
title: Better exploratory testing, test results for release environments, squash merge, and more – Mar 3
description: VSTS release notes for March 3 2016
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: 66042038-4458-4bd3-8257-91e3cd7c7ee4
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Better exploratory testing, test results for release environments, squash merge, and more – Mar 3

Our deployment this week is jam-packed with new value. Let’s start by looking at test results in release environments.

##View test results for each release environment

We’ve enabled a feature that lets you view test quality and test results in context of release. The Tests tab in the Release summary page will show you test status of each environment in which tests have run. The status includes count of passed and failed tests, pass percentage, and test duration, for a particular environment or for the entire release, across all environments. You can drill down into the error message, stack trace and test attachments for failed tests without having to navigate away from the Release summary page. From here you can create bugs for failed tests and auto-populate the bug with related information (error messages, stack traces, etc.).

![Viewing test results](_img/3_3_01.png)

##Triggers: Deploy based on completion in multiple environments (join)

Additionally, you can now create release definitions that release to an environment (say, Prod) automatically after a successful deploy to multiple environments (for example, QA1 and QA2). This is an extension to the set of features aimed at providing more control over complex release orchestrations.

##Epic and Feature board drill-down

Last summer we released a [feature](https://visualstudio.microsoft.com/articles/news/2015/sep-18-team-services) that lets you drill down to tasks directly from a Kanban board of stories. We’ve extended that feature to boards at any level, giving you the ability to drill down on your Epic and Feature boards. The checklist format lets you easily mark work as completed, and provides a handy bird’s eye view of the completed versus outstanding work.

![Board drill-down](_img/3_3_02.png)

##Exploratory testing directly from a work item

You can now launch an exploratory testing session for a specific work item, directly from within the product. We’ve added entry points on all cards, grids, and in the Test hub. This lets you associate the selected work item to your testing session and view the acceptance criteria and description from within the extension. It also creates end-to-end traceability between any bugs or tasks you file and the selected work item. The [Exploratory Testing](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web) extension can be found in the Visual Studio Marketplace.

![Exploratory testing directly from a work item](_img/3_3_03.png)

##Data collection: Image action log

The Exploratory Testing extension also gives you a new option to add the steps that led to the bug automatically with just one click. Select the **Include image action log** option to capture the mouse, keyboard, and touch actions, and add the corresponding text and images directly into the bug or task.

![The include-image-action-log option](_img/3_3_04.png)

##Create test cases based on Image action log data

You can also now create test cases during your exploratory session, wherein the test steps with images are automatically filled in for you. Simultaneous test design and test execution is the basis of true exploratory testing, and this new capability makes this a reality. You can edit the text captured, add the expected result, uncheck rows not relevant, and save it for upcoming test passes/runs.

![Creating a test case based on image action log data](_img/3_3_05.png)

##Assigning configurations to test plans, test suites and test cases

Assigning configurations just got easier as we turned on a new feature that allow you to assign test configurations to a test plan, test suite or test case(s) directly from within the Test hub. Right-click an item, select **Assign configurations to** …, and you’re off and running. The ability to create and manage test configurations and test configuration variables from within the Test Hub is coming next.

![Assigning configurations to a test suite](_img/3_3_06.png)

##Squash merge pull requests

When completing a pull request, you now have the option to squash merge. This new option will produce a single commit containing the changes from the topic branch that will be applied to the target branch. The most notable difference between a regular merge and a squash merge is that the squash merge commit will only have one parent commit. This will mean a simpler history graph, as any intermediate commits made to the topic branch will not be reachable in the resulting commit graph.

![Completing a pull request with squash merge option](_img/3_3_07.png)

##Clone in IntelliJ, Android Studio, etc.

Right from your repo on the web, you can clone in IntelliJ, Android Studio, and other IDEs. All you need is the latest version of the VS Team Services plug-in for your IDE to save precious time getting started with a new repo.

![Cloning a repo in Android Studio](_img/3_3_08.png)

##Gated builds for Team Foundation Version Control (TFVC)

Team build now supports creating a gated trigger for a build definition on a TFVC repository. You can read more here [https://msdn.microsoft.com/Library/vs/alm/Build/define/triggers#gated](https://msdn.microsoft.com/Library/vs/alm/Build/define/triggers#gated).

##Automated testing on Azure environments

Using the “Azure Resource Group Deployment” task, users can provision Azure resources (such as virtual machines) using a template file, and then deploy the latest build into those resources using resource extensions (for example,, the DSC resource extension). The same Azure resources can be used in the "Visual Studio Test Agent Deployment" and "Run Functional Tests" tasks to run tests in a fast, efficient and distributed way.

##NuGet package delist

We’ve added the ability to permanently delist packages from a feed. When a package is delisted, it no longer shows up in any package listing, whether on the web, the NuGet Visual Studio extension, or nuget.exe. Delisted packages remain downloadable by specifying an exact version, which allows the Restore workflow to continue working. To permanently delist a package, run:

nuget.exe delete <package ID> <package version> -Source <NuGet v2 endpoint URL> -ApiKey VST

##Office connector

We had originally included the Office 365 Connector in these notes. Unfortunately, this is not available yet.  We’re investigating a few open issues, and we’ll update this post as soon as we have more information. Thank you for your patience.

That’s it! Lots of great new value here. Feel free to reach out on Twitter ([@aaronbjork](https://twitter.com/aaronbjork)) if you have questions. If you have ideas on things you’d like to see us prioritize, head over to [UserVoice](http://visualstudio.uservoice.com/forums/121579-visual-studio) to add your idea or vote for an existing one.

Thanks,

Aaron Bjork



















