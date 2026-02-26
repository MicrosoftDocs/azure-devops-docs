---
title: Request stakeholder feedback
description: Request stakeholder feedback in Azure DevOps using the Test & Feedback extension
ms.assetid: 6AE1D62D-43EE-4C0B-92CD-F11BC10A9CA8
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ai-usage: ai-assisted
ms.topic: how-to
ms.author: pliaros
author: rohit-batra
ms.date: 09/30/2025
ms.update-cycle: 1095-days
monikerRange: '<= azure-devops'
---

# Request stakeholder feedback in Azure DevOps using the Test & Feedback extension

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [feedback-header-text](includes/feedback-header-text.md)]

[!INCLUDE [important-note-request-feedback-unavailable](includes/important-note-request-feedback-unavailable.md)]

Use the Test & Feedback extension in Azure DevOps for collecting stakeholder feedback. Recipients have two response options:
- From the link in the Request feedback email (quick for one-off responses).
- From the Test & Feedback extension—useful when you want to manage multiple requests or when you're using Azure DevOps Services (cloud).

## Prerequisites

| Category | Requirement |
|----------|-------------|
| **Project access** | [Project member](../organizations/security/add-users-team-project.md) |
| **To request feedback** | On Azure DevOps Server, the work-item **Request feedback** action lets users with **Basic** access send requests. In Azure DevOps Services (cloud) this menu action isn't available—use email/chat or the Test & Feedback extension. |
| **To provide feedback** | Stakeholders respond using the Test & Feedback extension. |
| **Extensions** | [Test & Feedback extension](perform-exploratory-tests.md) |

<a name="request"></a>

## Request feedback from stakeholders

Follow these steps to send a feedback request from a work item:

1. Open the work item form for the user story or feature you want feedback on.
2. Try to open the shortcut menu (ellipsis …) and select **Request feedback**.

   - If the **Request feedback** action is visible, continue with the workflow.
   - If you don't see **Request feedback** (expected in Azure DevOps Services/cloud), use [one of the alternatives](#feedback-shortcut-unavailable).

3. Enter or select one or more stakeholder names, and optionally add instructions or notes for meaningful feedback.

   ![Screenshot shows selecting users and entering instructions.](media/request-stakeholder-feedback/request-stakeholder-feedback-02.png)

4. Select **Send**. Azure DevOps sends a Request feedback email to the selected stakeholders.

Teams can request feedback from other team members, including users with Basic access. Add their names to the request form so a Request feedback email gets sent to them. For more information about Basic user responses, see [Can users with Basic access respond to feedback requests](provide-stakeholder-feedback.md#non-stakeholder-feedback).

## Related content

- [Provide stakeholder feedback using the Test & Feedback extension](provide-stakeholder-feedback.md)
- [Voluntary stakeholder feedback using the Test & Feedback extension](voluntary-stakeholder-feedback.md)
- [Track stakeholder feedback using the Test & Feedback extension](track-stakeholder-feedback.md)
- [Exploratory test and submit feedback directly from your browser](perform-exploratory-tests.md)
- [Overview of manual and exploratory testing](index.yml)
