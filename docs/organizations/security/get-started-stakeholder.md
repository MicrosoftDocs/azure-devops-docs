---
title: Get started with Stakeholder access 
titleSuffix: Azure DevOps 
description: Learn how to add and update work items and view work tracking progress with Stakeholder access in Azure Boards.
ms.service: azure-boards
ms.author: chcomley
author: chcomley
ms.topic: how-to
ai-usage: ai-assisted
ms.custom: copilot-scenario-highlight
monikerRange: '<= azure-devops'
ms.date: 07/07/2026
#customer intent: As a stakeholder, I want to understand how to use my access to manage work items for my team in Azure Boards. 
---

# Get started as a stakeholder

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [public-projects-retirement](../projects/includes/public-projects-retirement.md)]

::: moniker range="azure-devops"
*Stakeholders* are users with free but limited access to Azure DevOps features and functions. This guide covers work item management with Stakeholder access in Azure Boards. You can add and modify work items, view dashboards, and check project status to provide direction, feedback, and business alignment to your team. For information on all Stakeholder capabilities, see the [Stakeholder access quick reference](stakeholder-access.md).
::: moniker-end  

::: moniker range="< azure-devops"
*Stakeholders* are users with free but limited access to Azure DevOps features and functions. This guide covers work item management with Stakeholder access in Azure Boards. You can add and modify work items and view dashboards to check project status and provide direction, feedback, and business alignment to your team.
::: moniker-end  

For more information, see the [Stakeholder access quick reference](stakeholder-access.md) and [features available at each access level](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).

> [!IMPORTANT]
> If your Visual Studio subscription or GitHub Enterprise license expires, your Azure DevOps access might be limited to Stakeholder, restricting access to Azure Repos and Azure Pipelines.
>
> - [What happens when a Visual Studio subscription is no longer detected?](../accounts/faq-user-and-permissions-management.yml#q--what-happens-when-a-visual-studio-subscription-is-no-longer-detected-)
> - [What happens when a GitHub Enterprise license is no longer detected?](../accounts/faq-user-and-permissions-management.yml#q--what-happens-when-a-github-enterprise-license-is-no-longer-detected-)

::: moniker range="azure-devops"

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

::: moniker-end

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
| Private project: | |
| Access levels | **Stakeholder** access. To get access as a Stakeholder, ask your organization owner or Project Collection Administrator to add you to a project with Stakeholder access. For more information, see [Add organization users and manage access](../accounts/add-organization-users.md). |
| Permissions | Member of the **Contributors** or **Project Administrators** group. You can view boards, open and modify work items, and add child tasks to a checklist. You can add existing tags to work items but can't create new tags. You can't reorder or reparent a backlog item by using the drag-and-drop method. You can't update a field on a card. |
| Public project: | |
| Access levels | **Stakeholder** access. |
| Permissions | Member of the **Contributors** or **Project Administrators** group for full access. You can add existing tags but can't create new tags. For more information, see [Default permissions quick reference](../security/permissions-access.md). |

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|--------------|-------------|
| Private project: | |
| Access levels | **Stakeholder** access. To get access as a Stakeholder, ask your server administrator to add you to a security group that has Stakeholder access. For more information, see [Change access levels](change-access-levels.md). |
| Permissions | Member of the **Contributors** or **Project Administrators** group. You can view boards, open and modify work items, and add child tasks to a checklist. You can add existing tags to work items but can't create new tags. You can't reorder or reparent a backlog item by using the drag-and-drop method. You can't update a field on a card. |
| Public project: | |
| Access levels | **Stakeholder** access. |
| Permissions | Member of the **Contributors** or **Project Administrators** group for full access. You can add existing tags but can't create new tags. For more information, see [Default permissions quick reference](../security/permissions-access.md). |

::: moniker-end

## Sign in to a project

1. Select the link provided in your email invitation or open a browser window and enter the URL for the web portal.

   ::: moniker range="azure-devops"  
   `https://dev.azure.com/{OrganizationName}/{ProjectName}`
   ::: moniker-end
   ::: moniker range="< azure-devops"
   `http://ServerName:8080/tfs/DefaultCollection/ProjectName`

   For example, to connect to the server named **FabrikamPrime** and the project named **Contoso**, enter `http://FabrikamPrime:8080/tfs/DefaultCollection/Contoso`.
   ::: moniker-end

1. Enter your credentials. If you can't sign in, ask the organization owner or Project Administrator to add you as a member of the project with Stakeholder access.

## Understand work items and types

Work items support planning and tracking work. Each work item is based on a work item type and is assigned a unique identifier within an organization or project collection.

Different work items track different types of work. The work item types available are based on the [process used when your project was created](../../boards/work-items/guidance/choose-process.md): *Agile*, *Basic*, *Scrum*, or *Capability Maturity Model Integration (CMMI)*, as illustrated in the following images. For more information, see [About work items and work item types](../../boards/work-items/about-work-items.md).

To find which process your project uses, see [Determine your project's process](../../boards/work-items/guidance/choose-process.md#determine-your-projects-process).

[!INCLUDE [work item types](../../boards/includes/work-item-types.md)]

## Open your board

After you connect to a project, you can view work items.

::: moniker range="azure-devops"
1. In your project, select **Boards** > **Boards**. From the dropdown menu, select a team board.

   :::image type="content" source="../../boards/boards/media/quickstart/open-kanban-board-agile.png" alt-text="Screenshot that shows opening your board, cloud version.":::

   You can also enter a keyword in the search box or select **View Board directory** to see a list of available team boards.

   :::image type="content" source="../../boards/boards/media/quickstart/select-kanban-team-board.png" alt-text="Screenshot that shows selecting another team's board.":::

   > [!TIP]
   > Select the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to make a team board a favorite. Favorite boards appear at the top of the team selector list, helping you quickly access the boards you use most frequently.

1. Ensure that for the backlog level, you select:

    - **Stories** for Agile.
    - **Issues** for Basic.
    - **Backlog items** for Scrum.
    - **Requirements** for CMMI.

   :::image type="content" source="../../boards/sprints/media/assign-items-sprint/select-product-backlog-agile.png" alt-text="Screenshot that shows the menu to select the product backlog level option of Backlog items, Stories, Issues, or Requirements.":::

::: moniker-end
::: moniker range="<azure-devops"

1. In your project, select **Boards** > **Boards**. From the dropdown menu, select a team board.

   :::image type="content" source="../../boards/boards/media/quickstart/open-kanban-board-agile.png" alt-text="Screenshot that shows opening your board in Azure DevOps Server 2022 and later.":::

   To select another team's board, open the selector. Then select a different team, or select the :::image type="icon" source="../../media/icons/home-icon.png"::: **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

   :::image type="content" source="../../boards/boards/media/quickstart/select-kanban-team-board.png" alt-text="Screenshot that shows selecting another team's board in Azure DevOps Server 2022 and later.":::

   > [!TIP]
   > Select the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to make a team board a favorite. Favorite boards appear at the top of the team selector list, helping you quickly access the boards you use most frequently.

1. Ensure that for the backlog level, you select:

    - **Stories** for Agile.
    - **Issues** for Basic.
    - **Backlog items** for Scrum.
    - **Requirements** for CMMI.

   :::image type="content" source="../../boards/boards/media/quickstart/select-product-backlog-agile.png" alt-text="Screenshot that shows selecting the product backlog level option of Backlog items, Stories, Issues, or Requirements in Azure DevOps Server 2022 and later.":::

::: moniker-end

## Add work items

With Stakeholder access, the steps to add work items depend on your Azure DevOps version:

- **Azure DevOps Services (cloud):** Add items directly from your board
- **Azure DevOps Server (on-premises):** Add items from the backlog view

::: moniker range="azure-devops"

### Add items from your board (Azure DevOps Services)

From your board, select the :::image type="icon" source="../../media/icons/add-icon.png" border="false"::: plus sign, enter a title, and then press **Enter**.

:::image type="content" source="../../boards/boards/media/quickstart/add-new-item-agile-s155.png" alt-text="Screenshot that shows the highlighted New item button.":::

::: moniker-end  

::: moniker range="< azure-devops"

### Add items from your backlog (Azure DevOps Server)

1. From your project, select **Boards** > **Backlog**.
1. In the backlog view, select the :::image type="icon" source="../../media/icons/add-icon.png" border="false"::: plus sign to add a new item.
1. Enter the work item title and press **Enter**.

> [!NOTE]
> With Stakeholder access on on-premises, you can't add work items from the Kanban board. You must use the backlog view. Also, you can't update the status of a work item by using the drag-and-drop method to move to a different column or reorder cards within a column.

::: moniker-end  

For more information, see [View and add work items](../../boards/work-items/view-add-work-items.md).

::: moniker range="<=azure-devops"

## Update work items

Your work item forms might differ from the following images, but the functionality is the same.

### Change status

Drag a work item downstream as you finish work.

:::image type="content" source="../../boards/boards/media/alm-cc-move-card.png" alt-text="Screenshot that shows a board that uses an Agile template to update the status of a work item.":::

::: moniker-end  

### Add details

To open a work item, double-click the title or highlight it, and then select **Enter**. This example shows how to assign work. You can only assign work to a user who is added to the project.

#### [Agile process](#tab/agile-process)

This example assigns the story to Raisa Pokrovskaya and at-mentions Raisa in a discussion note. When you're finished, select **Save & Close**.

:::image type="content" source="../../boards/get-started/media/plan-track-work/user-story-form-add-details.png" alt-text="Screenshot that shows details in the Discussion box on the User Story work item form.":::

#### [Basic process](#tab/basic-process)

This example assigns the issue to Raisa Pokrovskaya and at-mentions Raisa in a discussion note. When you're finished, select **Save & Close**.

:::image type="content" source="../../boards/get-started/media/track-issues/issue-form-add-details.png" alt-text="Screenshot that shows details in the Discussion box on the Issues work item form.":::

#### [Scrum process](#tab/scrum-process)

This example assigns the Product backlog item to Jamal Hartnett and adds a description and tags. When you're finished, select **Save & Close**.

:::image type="content" source="../../boards/media/pbi-form-cloud.png" alt-text="Screenshot that shows adding details to the Scrum Product backlog work item form.":::

#### [CMMI process](#tab/cmmi-process)

This example assigns the Requirement work item to Jamal Hartnett. When you're finished, select **Save & Close**.

:::image type="content" source="../../boards/media/requirement-form-cloud.png" alt-text="Screenshot that shows the Requirement work item form.":::

#### CMMI-specific field descriptions

[!INCLUDE [cmmi field descriptions](../../boards/includes/section-cmmi-field-descriptions.md)]

***

To add more details, change field values, add a description or tags, and add comments, see:

- [Plan and track work in Azure Boards](../../boards/get-started/plan-track-work.md).
- [Add tags to work items](../../boards/queries/add-tags-to-work-items.md). As a Stakeholder, you can add existing tags to a work item, but you can't create new tags.
- [Capture comments in the Discussion section](../../boards/get-started/plan-track-work.md#capture-comments-in-the-discussion-section).

## View as backlog

Check the product backlog to see how the team prioritized their work. Backlog items appear in priority order. Work item types might include bugs, depending on the process used when your project was created. For more information, see [About default processes and process templates](../../boards/work-items/guidance/choose-process.md).

::: moniker range="azure-devops"
From the board, select **View as backlog**.

:::image type="content" source="../../boards/media/switch-to-backlog-cloud.png" alt-text="Screenshot that shows View as backlog in a cloud version.":::
::: moniker-end

::: moniker range=" < azure-devops"
From the board, select **View as backlog**.
:::image type="content" source="../../boards/media/switch-to-backlog-2019.png" alt-text="Screenshot that shows View as backlog in an on-premises version.":::
::: moniker-end

The list of backlog items appears in priority order. You can add a backlog item, which goes to the bottom of the list. With Stakeholder access, you can't reprioritize work.

<a id="query">  </a>

## Find work items

::: moniker range="<=azure-devops"

Select **Boards** > **Work Items**. Then select an option from the dropdown menu. For example, select **Assigned to me**.

:::image type="content" source="media/stakeholder/work-items-assigned-to-me.png" alt-text="Screenshot that shows selections of work on the Work Items page and choosing Assigned to me.":::

For more information, see:

- [View, run, or email a work item query](../../boards/queries/view-run-query.md)
- [View and add work items](../../boards/work-items/view-add-work-items.md)

::: moniker-end

<a id="use-ai-assistance"></a>

## Use AI to manage work items

::: moniker range="azure-devops"

You can use an AI assistant to help with work item management tasks. Treat AI as a productivity aid - not an authoritative source - and always review generated content before posting or using it.

### Guidance and best practices

- **Capabilities**: Your AI assistant can help draft detailed work item descriptions, summarize long discussion threads, suggest tags and status updates, identify related work items based on content, and generate acceptance criteria or test scenarios.
- **Validate**: Always review AI-generated text for accuracy and tone before adding it to work items. Check that suggested tags match your team's tagging conventions and that status updates reflect current reality.
- **Security**: Never paste secrets, access tokens, connection strings, or sensitive customer information into your AI prompts. Redact any private data in examples you provide.
- **Context**: Provide enough context in your prompt so your AI assistant understands your project domain, process template, and team conventions. This context helps generate more relevant suggestions.
- **Stakeholder constraints**: Remember that AI suggestions respect your Stakeholder access level. You can't create new tags or modify permissions, but your AI assistant can help you identify the right existing tags to apply.

### Example scenarios

| Scenario | What your AI assistant can help with |
|----------|---------------------------|
| **Draft descriptions** | Prompt: "Write a clear work item description for a user story about implementing single sign-on authentication." Your AI assistant can generate structured descriptions with acceptance criteria. |
| **Summarize discussions** | Prompt: "Summarize the last 10 comments on this work item for a stakeholder update." Your AI assistant extracts key decisions and blockers from lengthy comment threads. |
| **Suggest status updates** | Prompt: "Write a brief status update comment: we've fixed the blocking issue and are ready for testing next week." Your AI assistant can polish your message for clarity and tone. |
| **Identify related work** | Prompt: "Based on this work item about payment processing, what other items might be related?" Your AI assistant suggests similar work items and related features to investigate. |
| **Build test scenarios** | Prompt: "Generate acceptance criteria for a feature that allows users to export reports as PDF." Your AI assistant creates concrete, testable criteria. |

::: moniker-end

## Frequently asked questions

**Q: Can I create work items?**  
A: Yes. With Stakeholder access in Azure DevOps Services (cloud), you can add work items directly from the board or backlog. On-premises, you must use the backlog view.

**Q: Can I modify field values on work items?**  
A: Yes, but not directly on the Kanban card. Double-click a work item to open its form and update fields there. With Stakeholder access, you can modify most fields, but some custom fields might be restricted.

**Q: Can I organize and reprioritize the backlog?**  
A: No. You can view the backlog and add items, but you can't reorder or reparent items (drag and drop). Ask a team member with higher access to prioritize work for you.

**Q: What features can't I access with Stakeholder access?**  
A: Stakeholder access doesn't include direct access to Azure Repos, Azure Pipelines, or Azure Test Plans. You can view and comment on work items, but can't manage source code, build definitions, or test cases. For a complete list, see the [Stakeholder access quick reference](stakeholder-access.md).

**Q: How do I get higher access levels?**  
A: Contact your organization owner or Project Administrator. For more information, see [Assign access levels](../accounts/add-organization-users.md).

## Troubleshooting

### Common access restrictions and workarounds

| Issue | Why it happens | Solution |
|-------|---|---|
| Can't update field values directly on a card | Stakeholder access doesn't include inline card editing | Double-click the work item to open its form, then update fields there |
| Can't drag work items to reorder the backlog | Stakeholder access doesn't include reprioritization permission | Ask a team member with Project Contributor or Project Administrator permission to prioritize work items |
| Can't see the Azure Repos or Azure Pipelines tabs | Stakeholder access is limited to work tracking and dashboard features only | Contact your organization owner or Project Administrator about upgrading your access level. For more information, see [Change access levels](change-access-levels.md). |
| Can't create new tags | Stakeholders can only add existing tags to work items | Ask a team member to create tag categories; then you can apply them to your work items |
| Can't access the project (on-premises only) | Your user account might not be added to the project or you might lack Stakeholder permissions | Contact your server administrator or Project Administrator to verify your access level. For more information, see [Look up project administrators](look-up-project-administrators.md). |

### Permission errors

**Error: "You don't have permission to perform this action"**
- **Cause:** The action requires a higher access level (for example, creating work items in on-premises, editing custom fields, or managing pipelines)
- **Solution:** Ask your Project Administrator or organization owner to upgrade your access level to Basic or higher. For more information, see [Assign access levels](../accounts/add-organization-users.md). Alternatively, ask them to perform the action for you.

## Next step

Now that you understand how to use Stakeholder access to manage work items, create your product backlog to get started planning your project.

> [!div class="nextstepaction"]
> [Create your product backlog](../../boards/backlogs/create-your-backlog.md)
 
## Related content

- [Add work items](../../boards/backlogs/add-work-items.md)
- [Get started with Kanban boards](../../boards/boards/kanban-quickstart.md)
- [Stakeholder access quick reference](stakeholder-access.md)
- [Learn about access levels](access-levels.md)
- [Change access levels](change-access-levels.md)
- [Features available at each access level](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
