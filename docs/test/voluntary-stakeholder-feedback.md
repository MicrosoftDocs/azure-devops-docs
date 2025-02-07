---
title: Voluntarily provide stakeholder feedback
description: Voluntarily provide stakeholder feedback in Azure DevOps using the Exploratory Testing browser extension when you want to test your applications.
ms.assetid: 4E467527-62C6-4321-BA56-FF82F0FFFD69
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: conceptual
ms.author: jeom
author: rohit-batra
ms.date: 12/07/2018
monikerRange: '<= azure-devops'
---

# Provide stakeholder feedback with the Test & Feedback extension

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

[!INCLUDE [feedback-header-text](includes/feedback-header-text.md)] 

## Prerequisites

| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../../organizations/security/add-users-team-project.md). |
| **Access levels** | To request or provide feedback: At least **Stakeholder** access. |
| **Extensions** |[Test & Feedback extension](perform-exploratory-tests.md).|

<a name="voluntary"></a>

## Provide voluntary feedback  

Use the Test & Feedback extension to provide voluntary feedback, even if you don't receive a  [feedback request](request-stakeholder-feedback.md#request). 

[!INCLUDE [important-note-request-feedback-unavailable](includes/important-note-request-feedback-unavailable.md)]

1. Open the Test & Feedback extension in your browser using the ![launch exploratory testing](media/shared/exp-test-icon.png) icon in the toolbar. 

2. In the **Connection settings** page, select **Connected**.
 
   ![Screenshot of choosing Connected mode.](media/shared/connectedmode-01.png)
 
3. Connect to the server and appropriate project or team.
 
   ![Screenshot showing entering connection details.](media/shared/connectedmode-02.png)

4. Start the exploratory testing session.

   ![Starting the exploratory testing session](media/voluntary-stakeholder-feedback/voluntary-stakeholder-feedback-26.png)

5. Open the application you want to provide feedback on and begin your feedback. For example, select **Capture screenshot**.
 
   ![Screenshot of capturing a screenshot.](media/voluntary-stakeholder-feedback/voluntary-stakeholder-feedback-27.png)

   You can use all the capabilities of the extension such as capturing screenshots, notes, and screen recordings.

   Some browsers might not provide all of the capture capabilities. See [Supported web browsers for the extension](perform-exploratory-tests.md#browser-support).
 
6. When you're done capturing feedback, Choose **Provide feedback**.

   ![Screenshot showing submitting feedback.](media/shared/provide-stakeholder-feedback-08.png)

   You can optionally choose to create bugs and tasks when you 
   submit your feedback. The process is the same as described 
   [here](connected-mode-exploratory-testing.md#create-bugs).
 
7. All your feedback captured is shown in the response form. Enter a suitable title and, optionally, select a star rating for the feature you're testing. 

   ![Screenshot showing Entering a title and star rating.](media/shared/provide-stakeholder-feedback-09.png)

8. **Save** your feedback, which creates a work item in Azure DevOps containing all your feedback.
 
9. Continue to capture more feedback if necessary. You can submit multiple feedback responses, bugs, and tasks for the same feedback request. 

10. Select the **Stop** icon to end your feedback session. 
     
   ![Screenshot showing highlighted square icon to stop your feedback session.](media/shared/provide-stakeholder-feedback-12.png)

## Related articles

* [Request stakeholder feedback using the Test &amp; Feedback extension](request-stakeholder-feedback.md#request)
* [Provide stakeholder feedback using the Test &amp; Feedback extension](provide-stakeholder-feedback.md#provide)
* [Track stakeholder feedback using the Test &amp; Feedback extension](track-stakeholder-feedback.md#track)
* [Exploratory test and submit feedback directly from your browser](perform-exploratory-tests.md)
* [Overview of manual and exploratory testing](index.yml)
