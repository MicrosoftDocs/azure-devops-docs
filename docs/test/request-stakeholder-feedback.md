---
title: Request stakeholder feedback
description: Request stakeholder feedback in Azure DevOps using the Exploratory Testing browser extension
ms.assetid: 6AE1D62D-43EE-4C0B-92CD-F11BC10A9CA8
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: conceptual
ms.author: jeom
author: rohit-batra
ms.date: 12/07/2018
ms.update-cycle: 1095-days
monikerRange: '<= azure-devops'
---

# Request stakeholder feedback using the Test & Feedback extension

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

[!INCLUDE [feedback-header-text](includes/feedback-header-text.md)] 

## Prerequisites

| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../organizations/security/add-users-team-project.md). |
| **Access levels** | To request or provide feedback: At least **Stakeholder** access. |
| **Extensions** |[Test & Feedback extension](perform-exploratory-tests.md).|

<a name="request"></a>

## Request feedback from stakeholders

[!INCLUDE [important-note-request-feedback-unavailable](includes/important-note-request-feedback-unavailable.md)]

Request feedback from stakeholders directly from an Azure DevOps work item. 

1. Open the work item form for the user story or feature for which
   you want to request feedback.

2. Open the shortcut menu from the ellipses (**...**) and select **Request feedback**.

   ![Screenshot shows choosing the Request feedback option.](media/request-stakeholder-feedback/request-stakeholder-feedback-01.png)
   
3. Enter or select the names of the stakeholder(s) you want to send the request to, and optionally add any instructions or notes that help them provide meaningful feedback. 
 
   ![Screenshot shows selecting users and entering instructions.](media/request-stakeholder-feedback/request-stakeholder-feedback-02.png)

4. Select **Send** to generate emails to the selected stakeholders.

Teams can request feedback from other team members, such as users having Basic access. Just add their names in the feedback request form so that a **Request feedback** email gets sent to them. Also see [Can users with Basic access respond to feedback requests](provide-stakeholder-feedback.md#non-stakeholder-feedback).

## Related articles

* [Provide stakeholder feedback using the Test &amp; Feedback extension](provide-stakeholder-feedback.md#provide)
* [Voluntary stakeholder feedback using the Test &amp; Feedback extension](voluntary-stakeholder-feedback.md#voluntary)
* [Track stakeholder feedback using the Test &amp; Feedback extension](track-stakeholder-feedback.md#track)
* [Exploratory test and submit feedback directly from your browser](perform-exploratory-tests.md)
* [Overview of manual and exploratory testing](index.yml)