---
title: Request and provide stakeholder feedback
description: Learn how to request, provide, and track stakeholder feedback in Azure DevOps using the Test & Feedback browser extension.
ms.assetid: 6AE1D62D-43EE-4C0B-92CD-F11BC10A9CA8
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ai-usage: ai-assisted
ms.topic: how-to
ms.author: pliaros
author: rohit-batra
ms.date: 03/30/2026
ms.update-cycle: 1095-days
monikerRange: '<= azure-devops'
---

# Request and provide stakeholder feedback

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Use the Test & Feedback extension in Azure DevOps to collect stakeholder feedback. The available workflow depends on your platform:

- **Azure DevOps Services (cloud):** The formal **Request feedback** action and the extension's **Feedback requests** page aren't available. Stakeholders and Basic users use the extension to capture screenshots, notes, and screen recordings, and then create bugs or tasks.
- **Azure DevOps Server:** The full feedback workflow is available. You can send formal feedback requests from work items, stakeholders respond through the extension's **Provide feedback** flow, and responses are captured in *Feedback Response* work items.

## Prerequisites

| Category | Requirement |
|----------|-------------|
| **Project access** | [Project member](../organizations/security/add-users-team-project.md) |
| **Permissions** | At least **Stakeholder** access. Basic users can also provide feedback. |
| **To track feedback** | Permissions to view and run work item queries. For more information, see [Set query permissions](../boards/queries/set-query-permissions.md). |
| **Extensions** | [Test & Feedback extension](perform-exploratory-tests.md) installed in your browser |

---

::: moniker range="azure-devops"

## Azure DevOps Services (cloud)

In Azure DevOps Services, the **Request feedback** menu action and the extension's **Feedback requests** page aren't available. To collect stakeholder feedback, ask stakeholders via email or chat to test a feature using the Test & Feedback extension, then create bugs or tasks from their findings.

### Request feedback

Because the built-in **Request feedback** action isn't available in Azure DevOps Services, use one of these alternatives:

- Send an email or chat message to stakeholders with a link to the feature or page to test, along with instructions on what to look for.
- Ask stakeholders to install the [Test & Feedback extension](perform-exploratory-tests.md) and use it to capture and submit bugs or tasks.

### Provide feedback (Azure DevOps Services)

When a stakeholder or Basic user receives a request via email or chat, they use the Test & Feedback extension to capture feedback and create work items.

1. Open the Test & Feedback extension in your browser using the ![launch exploratory testing](media/shared/exp-test-icon.png) icon in the toolbar.

2. In **Connection settings**, select **Connected** mode.

   ![Screenshot of choosing Connected mode.](media/shared/connectedmode-01.png)

3. Connect to the Azure DevOps organization and project.

   ![Screenshot showing entering connection details.](media/shared/connectedmode-02.png)

4. Start an exploratory testing session.

   ![Starting the exploratory testing session](media/voluntary-stakeholder-feedback/voluntary-stakeholder-feedback-26.png)

5. Open the application or web page to test. Use the extension to capture feedback:
   - Capture screenshots (with inline annotations)
   - Record a short screen capture
   - Add notes or steps

   ![Screenshot of capturing a screenshot.](media/voluntary-stakeholder-feedback/voluntary-stakeholder-feedback-27.png)

   Some browsers might not provide all capture capabilities. See [Supported web browsers for the extension](perform-exploratory-tests.md#browser-support).

6. Create a bug or task from the captured information.

   ![Screenshot shows creating a bug or a task from the captured information.](media/connected-mode-exploratory-testing/create-bugs-02.png)

   The process is the same as described in [Exploratory testing in connected mode](connected-mode-exploratory-testing.md#create-bugs).

7. Select the **Stop** icon to end your session.

   ![Screenshot showing highlighted square icon to stop your feedback session.](media/shared/provide-stakeholder-feedback-12.png)

::: moniker-end

::: moniker range="< azure-devops"

## Azure DevOps Server

Azure DevOps Server supports the full feedback request and response workflow. You can send formal feedback requests from work items, and stakeholders respond through the extension's **Provide feedback** flow. Responses are captured as *Feedback Response* work items.

<a name="request"></a>

### Request feedback from stakeholders

1. Open the work item form for the user story or feature you want feedback on.
2. Open the shortcut menu (ellipsis …) and select **Request feedback**.

3. Enter or select one or more stakeholder names, and optionally add instructions or notes for meaningful feedback.

   ![Screenshot shows selecting users and entering instructions.](media/request-stakeholder-feedback/request-stakeholder-feedback-02.png)

4. Select **Send**. Azure DevOps sends a Request feedback email to the selected stakeholders.

Teams can request feedback from other team members, including users with Basic access. Add their names to the request form so a Request feedback email gets sent to them. For more information about Basic user responses, see the [Nonstakeholder (Basic user) workflow](#non-stakeholder-feedback).

<a name="email"></a>

### Provide feedback from a feedback request email

Follow these steps when you receive a Request feedback email.

1. In the feedback request email, choose **Provide feedback**.

   ![Screenshot shows choosing the Provide feedback link in the request email.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-04.png)

2. The Azure DevOps landing page opens and confirms the extension is configured for the request.

3. Launch the extension by selecting the Test & Feedback icon (![launch extension](media/shared/exp-test-icon.png)) in the browser toolbar.

   ![Screenshot shows confirmation that the extension has been automatically configured.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-05.png)

   - If the extension doesn't open or configure automatically, open the extension, sign in, and connect to the server and project that sent the request.

4. Read the instructions in the feedback form to learn what to test and any special notes from the requestor.

   ![Screenshot shows the feedback form containing the instructions.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-06.png)

5. Depending on your access level:
   - **Stakeholders:** open the **Feedback requests** page in the extension to view and manage any pending requests.
   - **Basic users:** the extension opens the **Explore work item** traceability page that shows the user story, acceptance criteria, and context.

   ![Screenshot shows the traceability page showing the user story and user acceptance criteria.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-18.png)

6. Open the app or web page to test and capture feedback using the extension. You can:
   - Capture screenshots (with inline annotations)
   - Record a short screen capture
   - Add notes or steps
   - Annotate screenshots and highlight UI elements

   ![Screenshot shows capturing a screenshot.](media/shared/provide-stakeholder-feedback-07.png)

7. Submit your feedback:
   - **Stakeholders:** choose **Provide feedback** in the extension. Optionally create bugs or tasks when you submit.
   - **Basic users:** create a bug or a task from the captured information (nonstakeholder flow).

   ![Screenshot shows submitting your feedback.](media/shared/provide-stakeholder-feedback-08.png)
   ![Screenshot shows creating a bug or a task from the captured information.](media/connected-mode-exploratory-testing/create-bugs-02.png)

8. Review the feedback and enter a meaningful title. Optionally choose a star rating, and then save. The extension creates a work item that contains your feedback and attachments.

   ![Screenshot shows entering a title and star rating.](media/shared/provide-stakeholder-feedback-09.png)

9. If you responded as a Stakeholder:
   - Open **Feedback requests** in the extension and mark the request **Completed** when you finish.

   ![Screenshot shows opening the pending feedback requests page.](media/shared/provide-stakeholder-feedback-10.png)
   ![Screenshot shows completing your feedback session.](media/shared/provide-stakeholder-feedback-11.png)

10. End your feedback session by selecting **Stop** in the extension.

    ![Screenshot shows ending your feedback session.](media/shared/provide-stakeholder-feedback-12.png)

<a name="direct"></a>

### Provide feedback from the Test & Feedback extension

Use this flow when you want to manage multiple requests or work directly from the extension.

1. Launch the extension from the toolbar icon (![launch exploratory testing](media/shared/exp-test-icon.png)).
2. In Connection settings, select **Connected** mode and sign in to the Azure DevOps Server instance that hosts the request.
3. Connect to the server and the project or team that requested feedback.

   ![Screenshot of the Test & Feedback extension connection dialog showing server and project fields for entering connection details.](media/shared/connectedmode-02.png)

4. Open the **Feedback requests** page to list all requests for the connected project or team.

   ![Screenshot of the Feedback requests list in Test & Feedback showing feedback requests for the connected project or team.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-15.png)

5. Select a request and choose **View feedback**, read the instructions, then choose **Provide feedback**.

   ![Screenshot of selecting a feedback request in the Feedback requests list to view its details.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-16.png)
   ![Screenshot of the Provide feedback workflow start screen in Test & Feedback with the Provide feedback action highlighted.](media/provide-stakeholder-feedback/provide-stakeholder-feedback-17.png)

6. Capture and submit feedback as [previously described](#email).

<a name="voluntary"></a>

### Provide voluntary feedback

Use the Test & Feedback extension to provide voluntary feedback on Azure DevOps Server, even if you don't receive a feedback request.

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

6. When you're done capturing feedback, choose **Provide feedback**.

   ![Screenshot showing submitting feedback.](media/shared/provide-stakeholder-feedback-08.png)

   You can optionally choose to create bugs and tasks when you submit your feedback. The process is the same as described in [Exploratory testing in connected mode](connected-mode-exploratory-testing.md#create-bugs).

7. All your feedback captured is shown in the response form. Enter a suitable title and, optionally, select a star rating for the feature you're testing.

   ![Screenshot showing entering a title and star rating.](media/shared/provide-stakeholder-feedback-09.png)

8. **Save** your feedback, which creates a work item in Azure DevOps containing all your feedback.

9. Continue to capture more feedback if necessary. You can submit multiple feedback responses, bugs, and tasks for the same feedback request.

10. Select the **Stop** icon to end your feedback session.

    ![Screenshot showing highlighted square icon to stop your feedback session.](media/shared/provide-stakeholder-feedback-12.png)

<a name="non-stakeholder-feedback"></a>

### Nonstakeholder (Basic user) workflow

If you have Basic access and the requestor invited you to respond, the extension opens the Explore work item view. Use that view to capture details and then create a bug or task from the captured feedback. For full instructions, see [Exploratory testing in connected mode](connected-mode-exploratory-testing.md#create-bugs).

::: moniker-end

<a name="track"></a>

## Track feedback requests

All feedback gets captured in a *Feedback Response* work item. You can track feedback, whether captured by the Test & Feedback extension or the [Microsoft Feedback client](/previous-versions/azure/devops/project/feedback/give-feedback), through a work item query.

::: moniker range="<=azure-devops"

1. To view feedback, use the **Feedback** shared query.
2. Select your project and open **Boards** > **Queries**.
3. Under **Queries**, select **All**.
4. In the Shared Queries, select **Feedback**.

   ![Screenshot shows Boards with Queries selected and the Feedback query selected.](media/track-stakeholder-feedback/open-feedback-query.png)

The query displays a list of all the feedback responses received. For more information, see [Web portal navigation](../project/navigation/index.md).

### Create a feedback query

1. Select **Boards** > **Queries** and then select **New query**.

1. In the **Editor** for your new query, enter the following values:

   ![Screenshot shows editor with values entered.](media/track-stakeholder-feedback/editor-feedback-values.png)

   - `Team Project` `=` `@Project`
   - `Work Item Type` `In Group` `Microsoft.FeedbackRequestCategory`
   - `State` `=` `Active`

1. Select **Save query** and enter a name.

1. Select **Run query** to see a list of active feedback responses for your team project.

   ![Screenshot shows results view of Feedback request work items.](media/track-stakeholder-feedback/feedback-request-work-items.png)

1. Select a response work item to see the details of the feedback.

::: moniker-end

<a name="capture-feedback"></a>

## Tips for capturing feedback

- Capture multiple screenshots and short recordings to show steps to reproduce.
- Add clear, actionable notes and include expected vs. actual behavior.
- Use annotation tools to highlight UI elements, errors, and the important parts of a screen.
- Follow any requestor-provided instructions to give the feedback they expect.

## Related content

- [Perform exploratory tests and submit feedback from your browser](perform-exploratory-tests.md)
- [What is Azure Test Plans?](overview.md)
- [Get feedback](/previous-versions/azure/devops/project/feedback/get-feedback)
- [Define a work item query](../boards/queries/using-queries.md)
- [Overview of manual and exploratory testing](index.yml)
