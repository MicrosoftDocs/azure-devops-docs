---
title: Give feedback with Test & Feedback extension
description: Provide feedback in Azure DevOps using the Test & Feedback browser extension
ms.assetid: 41CCD562-C071-4C33-A178-71DDAE83912E
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ai-usage: ai-assisted
ms.topic: conceptual
ms.author: jeom
author: rohit-batra
ms.date: 09/30/2025
ms.update-cycle: 1095-days
monikerRange: '<= azure-devops'
---

# Provide feedback using the Test & Feedback extension

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

[!INCLUDE [important-note-request-feedback-unavailable](includes/important-note-request-feedback-unavailable.md)]

This article shows how stakeholders and other recipients respond to feedback requests using the Test & Feedback browser extension. It covers two response flows:

- Respond using the link in a feedback request email (recommended for quick responses).
- Respond from the Test & Feedback extension (useful when you want to manage multiple requests).

## Prerequisites

| Category | Requirement |
|---|---|
| **Project access** | [Project member](../organizations/security/add-users-team-project.md) |
| **Access levels** | Stakeholders should use the Test & Feedback extension. Basic users can provide feedback using the nonstakeholder flow described in this article. |
| **Extensions** | [Test & Feedback extension](perform-exploratory-tests.md) installed in your browser. |

<a name="email"></a>

## Provide feedback from a feedback request email

Follow these steps when you received a Request feedback email.

1. In the feedback request email, select **Provide feedback**.

   ![Screenshot shows choosing the Provide feedback link in the request email.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-04.png)

2. The Azure DevOps landing page opens and confirms the extension is configured for the request.

3. Select the Test & Feedback icon (![launch extension](media/shared/exp-test-icon.png)) in the browser toolbar to launch the extension.

   ![Screenshot shows confirmation that the extension has been automatically configured.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-05.png)

4. Read the instructions in the feedback form to learn what to test and any special notes from the requestor.

   ![Screenshot shows the feedback form containing the instructions.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-06.png)

5. Choose the action that matches your access level:
   - If you're a **Stakeholder**, open the **Feedback requests** page in the extension to manage pending requests.
   - If you're a **Basic** user, the extension opens the **Explore work item** traceability page that shows the user story, acceptance criteria, and context for the request.

   ![Screenshot shows the traceability page showing the user story and user acceptance criteria.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-18.png)

6. Open the app or web page you want to test and capture feedback. Use the extension to:
   - Capture a screenshot
   - Record a short screen capture
   - Add notes or steps
   - Annotate screenshots and highlight issues

   ![Screenshot shows capturing a screenshot.](media/shared/provide-stakeholder-feedback-07.png)

7. When you're ready to submit:
   - If you're a **Stakeholder**, choose **Provide feedback**. You can optionally create bugs or tasks when you submit.
   - If you're a **Basic** user, create a bug or a task from the captured information (the nonstakeholder flow).

   ![Screenshot shows submitting your feedback.](media/shared/provide-stakeholder-feedback-08.png)
   ![Screenshot shows creating a bug or a task from the captured information.](media/connected-mode-exploratory-testing/create-bugs-02.png)

8. Review the feedback, enter a meaningful title, optionally choose a star rating, then save. The extension creates a work item that contains your feedback and attachments.

   ![Screenshot shows entering a title and star rating.](media/shared/provide-stakeholder-feedback-09.png)

9. If you provided feedback as a Stakeholder:
   - Open **Feedback requests** in the extension.
   - Mark the feedback request as **Completed** when you finish.

   ![Screenshot shows opening the pending feedback requests page.](media/shared/provide-stakeholder-feedback-10.png)
   ![Screenshot shows completing your feedback session.](media/shared/provide-stakeholder-feedback-11.png)

10. End your feedback session by selecting **Stop** in the extension.

   ![Screenshot shows ending your feedback session.](media/shared/provide-stakeholder-feedback-12.png)

<a name="capture-feedback"></a>

## Tips while capturing feedback

- Capture multiple screenshots and short recordings to show steps to reproduce.
- Add clear, actionable notes and include expected vs. actual behavior.
- Use the annotation tools to highlight UI elements and errors.
- If a request includes specific instructions, follow them so the requestor gets the context they asked for.

<a name="non-stakeholder-feedback"></a>

## Nonstakeholder (Basic user) workflow

If you have Basic access and the requestor invited you to respond, the extension opens the Explore work item view. Use that view to capture details and then create a bug or task from the captured feedback. For full instructions, see [Exploratory testing in connected mode](connected-mode-exploratory-testing.md#create-bugs).

<a name="direct"></a>

## Provide feedback from the Test & Feedback extension

Use this flow when you want to manage multiple requests or work directly from the extension.

1. Launch the extension from the toolbar icon (![launch exploratory testing](media/shared/exp-test-icon.png)).
2. In Connection settings, choose **Connected** mode and sign in to the Azure DevOps organization that hosts the request.
3. Connect to the server and the project or team that requested feedback.

   ![Screenshot of the Test & Feedback extension connection dialog showing server and project fields for entering connection details.](media/shared/connectedmode-02.png)

4. Open the **Feedback requests** page to list all requests for the connected project or team.

   ![Screenshot of the Feedback requests list in Test & Feedback showing feedback requests for the connected project or team.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-15.png)

5. Select a request and choose **View feedback**, read the instructions, then choose **Provide feedback**.

   ![Screenshot of selecting a feedback request in the Feedback requests list to view its details.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-16.png)
   ![Screenshot of the Provide feedback workflow start screen in Test & Feedback with the Provide feedback action highlighted.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-17.png)

6. Capture and submit feedback as previously described.

## Related content

- [Perform exploratory tests and submit feedback from your browser](perform-exploratory-tests.md)
- [Request stakeholder feedback](request-stakeholder-feedback.md#request)
- [Voluntary stakeholder feedback using the Test & Feedback extension](voluntary-stakeholder-feedback.md#voluntary)
- [Overview of manual and exploratory testing](index.yml)
