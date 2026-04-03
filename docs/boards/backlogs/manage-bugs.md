---
title: Define, capture, triage, and manage bugs in Azure Boards
titleSuffix: Azure Boards
description: Effectively define, capture, triage, and manage bugs and code defects using Azure Boards to maintain high software quality and control technical debt.
ms.custom: boards-backlogs, copilot-scenario-highlight
ms.service: azure-devops-boards
ms.assetid: 6E5710EE-21C8-4264-AD65-A827D186F134
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 04/02/2026
#customer intent: As a team administrator, I want to manage how the team tracks bugs to provide a good workflow process.
---

# Define, capture, triage, and manage bugs in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Boards provides a *Bug* work item type to capture, prioritize, assign, and track code defects in ways that align with your Agile practices. Bug work items include all the standard work item features plus:

- **Flexible tracking options** — each team chooses whether to track bugs as requirements or as tasks
- **Test tool integration** — capture bugs directly from Test Runner and the Test & Feedback extension
- **Cross-service linking** — link bugs to builds, releases, commits, and pull requests

For an overview of standard work item features, see [About work items and work item types](../work-items/about-work-items.md).

[!INCLUDE [no bugs in basic process](../includes/basic-process-bug-note.md)]

To learn more about process-specific work item types and how they differ from bugs, see [Choose a process](../work-items/guidance/choose-process.md).

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [prerequisites](../includes/prerequisites-work-items.md)]

## Bug work item type

The following image shows the Bug work item type for the Scrum process. The Agile and CMMI processes track similar information. Depending on your team's [bug tracking option](#choose-how-your-team-tracks-bugs), bugs appear on the product backlog with requirements or on the Taskboard with tasks.

[!INCLUDE [image differences](../includes/image-differences-with-wits.md)]

:::image type="content" source="media/manage-bugs/bug-work-item-type.png" alt-text="Screenshot of a Bug work item form for the Scrum process." lightbox="media/manage-bugs/bug-work-item-type.png":::

## Fields specific to bugs

The following table describes fields specific to the Bug work item type. For CMMI-specific bug fields, see [Bugs, issues, and risks field reference](../work-items/guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md). For all other fields, see [Work item field index](../work-items/guidance/work-item-field.md).

---
:::row:::
   :::column span="1":::
      **Field, Group, or Tab**
   :::column-end:::
   :::column span="3":::
      **Usage**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Steps to Reproduce](../queries/titles-ids-descriptions.md)
      (friendly name=Repro Steps)
   :::column-end:::
   :::column span="3":::
      Use to capture enough information so that other team members can fully understand the code defect. Include actions taken to find or reproduce the bug and expected behavior.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [System Info](../queries/titles-ids-descriptions.md)
      [Found In Build](../queries/build-test-integration.md)
   :::column-end:::
   :::column span="3":::
       Information about the software and system configuration that's relevant to the bug and tests to apply. The **System Info** and **Found in Build** fields are automatically filled in when you create a bug through a testing tool. These fields specify information about the software environment and build where the bug occurred. For more information, see [Test different configurations](../../test/test-different-configurations.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Acceptance Criteria](../queries/titles-ids-descriptions.md)
   :::column-end:::
   :::column span="3":::
      Provide the criteria to meet before the bug can be closed. Before work begins, describe the customer acceptance criteria as clearly as possible. Teams should use this criteria as the basis for acceptance tests and to evaluate whether an item is satisfactorily completed.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Integrated in Build](../queries/build-test-integration.md)
   :::column-end:::
   :::column span="3":::
      Specifies the name of the build that incorporates the code that fixes the bug. Specify this field when you resolve the bug.

      For on-premises Azure DevOps, to access a dropdown menu of all builds that run, update the `FIELD` definitions for **Found in Build** and **Integrated in Build** to reference a global list. The global list automatically updates with each build that runs. For more information, see [Query based on build and test integration fields](../queries/build-test-integration.md).

      For information about how to define build numbers, see [Classic pipelines configuration](../../pipelines/build/options.md). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Priority](../queries/planning-ranking-priorities.md)<sup>1</sup>
   :::column-end:::
   :::column span="3":::
      - **1**: Must resolve before the product ships. Address soon.
      - **2**: Must resolve before the product ships, but doesn't need immediate attention.
      - **3**: Resolution is optional, based on resources, time, and risk.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Severity](../queries/planning-ranking-priorities.md)<sup>1</sup>
   :::column-end:::
   :::column span="3":::
      A subjective rating of the impact of a bug or work item on the project or software system. For example: If a remote link within the user interface (a rare event) causes an application or web page to crash (a severe customer experience), you might specify **Severity = 2 - High** and **Priority = 3**. Allowed values and suggested guidelines are:

      - **1 - Critical**: Must fix. A defect that causes termination of one or more system components or the complete system, or causes extensive data corruption. There are no acceptable alternative methods to achieve required results.
      - **2 - High**: Consider fix. A defect that causes termination of one or more system components or the complete system, or causes extensive data corruption. An acceptable alternative method exists to achieve required results.
      - **3 - Medium**: (Default) A defect that causes the system to produce incorrect, incomplete, or inconsistent results.
      - **4 - Low**: A minor or cosmetic defect that has acceptable workarounds to achieve required results.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Deployment](#deployment-control)
   :::column-end:::
   :::column span="3":::
      Links to and displays releases that contain the work item. You must enable release settings to use this control. For more information, see [Link work items to releases](#deployment-control) later in this article.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Development](#development-control)
   :::column-end:::
   :::column span="3":::
      Links to and displays Git commits, pull requests, TFVC changesets, and versioned items. You can create links from the work item or from the development object. For more information, see [Link work items to development](#development-control) later in this article.
   :::column-end:::
:::row-end:::
---

### Notes

<sup>1</sup> To change the menu selection or picklist, see [Customize the work tracking experience](../../reference/customize-work.md). The customization method depends on the process model used by your project.

## Choose how your team tracks bugs

Each team chooses whether to track bugs as requirements or as tasks. Consider the following factors:

- **Team size** — Smaller teams can keep a lightweight process by tracking bugs as requirements.
- **Time tracking** — If your team tracks hours, track bugs as tasks.
- **Backlog prioritization** — If your team uses the product backlog to prioritize work, track bugs as requirements.
- **Tool availability** — Tracking bugs as tasks prevents use of the Planning pane, velocity chart, forecast, rollup, and delivery plans.

The following table summarizes all three options. To set the option for your team, see [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md).

[!INCLUDE [bug track options](../includes/show-bugs-matrix-options.md)]

<a id="customize"> </a>

## Customize the Bug work item type

You can customize the Bug work item type or create custom types to track software issues or customer feedback. Customization options include:

- Adding or removing custom fields
- Adding custom controls or tabs to the work item form
- Customizing workflow states
- Adding conditional rules
- Choosing the backlog level where work items appear

Before you customize, review [About configuring and customizing Azure Boards](../configure-customize.md).

::: moniker range="azure-devops"
To get started, see [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md).
::: moniker-end

::: moniker range="<azure-devops"
To get started, see [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md) or [Customize the On-premises XML process model](../../reference/on-premises-xml-process-model.md).
::: moniker-end

## Add or capture bugs

You can add bugs from backlogs, boards, and testing tools. By default, only the **Title** field is required.

> [!TIP]
> To make other fields required, add conditional rules based on state changes. For more information, see [Add a rule to a work item type](../../organizations/settings/work/custom-rules.md).

### Add a bug from your backlog or board

If your team *manages bugs with requirements*, you can add bugs from the product backlog or board. Bugs added this way automatically inherit the team's default Area Path and Iteration Path. For more information, see [Create your product backlog](create-your-backlog.md) or [Use your board](../boards/kanban-quickstart.md).

- **Add a bug from the product backlog**

  :::image type="content" source="media/manage-bugs/add-bug-from-backlog.png" alt-text="Screenshot shows adding a bug from the product backlog.":::

- **Add a bug from the board**

  :::image type="content" source="media/manage-bugs/add-bug-from-board.png" alt-text="Screenshot shows adding a bug from the board.":::

### Add a bug from your sprint backlog or taskboard

If your team *manages bugs with tasks*, add bugs as child items to product backlog work items from the sprint backlog or taskboard.

- **Add a linked child bug from the Sprint Backlog**

  Add a bug the same way you add a task to a sprint backlog. For more information, see [Add tasks to backlog items](../sprints/add-tasks.md).

  :::image type="content" source="media/manage-bugs/add-bug-sprint-backlog.png" alt-text="Screenshot shows adding a linked child bug from the product backlog.":::

- **Add a linked child bug from the board**

  Add a bug the same way you add a task to a backlog item. For more information, see [Add tasks or child items as checklists](../boards/add-task-checklists.md).

  :::image type="content" source="media/manage-bugs/add-child-bug-from-board.png" alt-text="Screenshot shows adding a linked child bug from the board.":::

### Create a bug from a testing tool

You can create bugs directly while testing by using either of the following tools:

- **Test Runner**: When running manual tests, select **Create bug**. For more information, see [Run manual tests](../../test/run-manual-tests.md).

  :::image type="content" source="media/manage-bugs/test-runner-create-bug.png" alt-text="Screenshot shows Test Runner, where you can add a bug.":::

- **Test & Feedback extension**: When running exploratory tests, select **Create bug** or **Create task**. For more information, see [Exploratory testing with the Test & Feedback extension](../../test/connected-mode-exploratory-testing.md).

   :::image type="content" source="../../test/media/connected-mode-exploratory-testing/create-bugs-02.png" alt-text="Screenshot shows the Test & Feedback extension, where you can add a bug or task feature.":::

<a id="fix-resolve-close">  </a>

## Bug lifecycle and workflow states

Each bug workflow consists of three or more **states** and a **reason** that explains why the bug transitioned between states. The following diagrams show the default bug workflows for each process.

| Agile | Scrum | CMMI |
|:------------|:------------|:-----------|
| :::image type="content" source="../work-items/guidance/media/ALM_PT_Agile_WF_Bug.png" alt-text="Diagram shows the bug workflow states in the Agile process template."::: | :::image type="content" source="../work-items/guidance/media/alm-pt-scrum-wf-bug.png" alt-text="Diagram shows the bug workflow states in the Scrum process template."::: | :::image type="content" source="../work-items/guidance/media/ALM_PT_CMMI_WF_Bug.png" alt-text="Diagram shows the bug workflow states in the CMMI process template."::: |

How bugs move through the workflow depends on your process:

- **Scrum** — Change **State** from *Committed* to *Done*.
- **Agile and CMMI** — First resolve the bug (State = *Resolved*), then the person who created it verifies the fix and closes it (State = *Closed*).
- **All processes** — To reactivate a resolved or closed bug, set **State** back to *Committed* or *Active*.

::: moniker range="<=azure-devops"
> [!NOTE]
> The Agile process previously had a rule that reassigned resolved bugs to the person who created them. The default system process no longer includes this rule. To reinstate it, see [Automate reassignment based on state change](../../organizations/settings/work/apply-rules-to-workflow-states.md#reassign).

::: moniker-end

### Verify a fix

To verify a fix, a developer or tester attempts to reproduce the bug and checks for additional unexpected behavior. If the bug wasn't fixed or you disagree with the resolution, discuss it with the person who resolved it and reactivate the bug if needed. When reactivating, document the reason in the bug description.

<a id="close">  </a>

### Close a bug

Close a bug when a team member verifies the fix. The available close reasons depend on your project process.

**Agile process:**

- **Deferred**: Fix deferred until a future release.
- **Fixed**: Bug is verified as fixed.
- **Duplicate**: Bug duplicates another bug. Link them with the **Duplicate/Duplicate of** link type and close one.
- **As Designed**: Feature works as designed.
- **Cannot Reproduce**: Bug can't be reproduced.
- **Obsolete**: The feature is no longer in the product.
- **Copied to Backlog**: A user story was opened to track the bug.

**Scrum process:**

- **Not a Bug**: Item isn't a bug.
- **Duplicate**: Bug duplicates another bug. Link them with the **Duplicate/Duplicate of** link type and close one.
- **Removed from the backlog**: Item isn't a bug. Remove it from the backlog.
- **Work finished**: Bug is verified as fixed.

**CMMI process:**

- **Deferred**: Fix deferred until a future release.
- **Duplicate**: Bug duplicates another bug. Link them with the **Duplicate/Duplicate of** link type and close one.
- **Rejected**: Item isn't a bug.
- **Verified**: Bug is verified as fixed.

> [!TIP]
> Don't reopen closed bugs for regressions. Instead, open a new bug and link it to the original with a **Related** link.

Document the reason for closure in the **Discussion** field to provide context for future reference.

### Automate bug closure when merging pull requests

If your team uses Git, you can automatically close linked bugs when you merge pull requests. For more information, see [Set work item state in pull request](#set-state-pr) later in this article.

## List and triage bugs

Most teams, whatever option they choose to track bugs, define one or more bug queries. With queries, you can list active bugs, unassigned bugs, stale bugs, bug trends, and more. You can add queries and query charts to your team dashboards to monitor bug status and progress.

### Bug queries

Open a shared query or [use the query editor](../queries/using-queries.md) to create useful bug queries, such as the following options:

- Active bugs by priority (`State <> Done` or `State <> Closed`)
- In Progress bugs (`State = Committed` or `State = Active`)
- Bugs to fix for a target release (`Tags Contains RTM`)
- Recent bugs, such as bugs opened in the last three weeks (`Created Date > @Today-21`)

When you have the queries of interest to your team, [create status or trend charts](../../report/dashboards/charts.md). You can also add the chart you create to a [dashboard](../../report/dashboards/dashboards.md).

### Triage mode in query results

After you start coding and testing, hold periodic triage meetings to review and rank your bugs. Typically, the project owner runs the bug triage meetings. Team leads, business analysts, and other stakeholders who can speak about specific project risks attend the triage meetings.

The project owner can define a shared query for new and reopened bugs to list bugs to be triaged.

From the query results page, you can move up and down within the list of bug work items by using the up and down arrows. As you review each bug, you can assign it, add details, or set priority.

:::image type="content" source="media/manage-bugs/bug-triage-mode.png" alt-text="Screenshot of Query Results, Active Bugs, and Triage mode Right pane.":::

### Organize and assign bugs to a sprint

If your team *tracks bugs as requirements*, view the list of active bugs from your backlog. By using the [filter function](filter-backlogs-boards-plans.md), you can focus solely on bugs. From the product backlog, you can also do the following tasks:

- [Organize bugs on your backlog](create-your-backlog.md#reorder-your-backlog). Stack rank bugs against other items. Stack ranking is disabled when filtering is enabled.
- [Assign bugs to a sprint](../sprints/assign-work-sprint.md) from your backlog by using the **Planning** pane.
- [Map Parent bugs to Features](organize-backlog.md#map-items-to-group-them-under-a-feature-or-epic) or other portfolio backlog items by using the **Mapping** pane.
- [View rollup of work to portfolio backlog items](display-rollup.md).

If your team *tracks bugs as tasks*, use managed queries to list and triage bugs. In each sprint, you see the bugs assigned to the sprint from the Sprint backlog or [Taskboard](../sprints/task-board.md).

<a id="task-board-items"></a>

### Taskboard items versus query list items

You might notice and wonder why the items shown on a sprint Taskboard differ from a query list created in a corresponding sprint backlog.

You can assign tasks or bugs to an iteration but not link them to a parent backlog item. These items appear in the created query, but might not show up on the Taskboard itself. The system runs the query and then applies a few background processes before it displays Taskboard items.

These reasons can cause work items that belong to the Task Category to not appear on a sprint backlog or Taskboard:

- The task or bug isn't linked to a parent backlog item. Only bugs and tasks that link to a parent product backlog item (Scrum), user story (Agile), or requirement (CMMI) with an iteration path set to the sprint appear on the sprint backlog page.
- The task or bug is a parent of another task or bug, or the user story is a parent of another user story. If you create a hierarchy of tasks, bugs, or user stories, only the child-level tasks or the child-level stories at the bottom of the hierarchy appear. For more information, see [Troubleshoot reordering and nesting issues](resolve-backlog-reorder-issues.md).
- The task's or bug's linked parent corresponds to a backlog item defined for another team. Or, the area path of the task's or bug's parent backlog item differs from the task's or bug's area path.

## Create inline tests linked to bugs

When your team *tracks bugs as requirements*, use the board to add tests that verify bug fixes.

:::image type="content" source="media/manage-bugs/add-tests-inline-kanban-board.png" alt-text="Screenshot of board, three columns showing inline tests added and linked to bugs.":::

## Update bug status

Drag and drop bugs to a new column on a board to update their status.

- **Bugs tracked as requirements** — Use the board. For more information, see [Update work item status](../boards/kanban-quickstart.md#update-status).

  :::image type="content" source="media/manage-bugs/kanban-board-update-status.png" alt-text="Screenshot of a board, where you can drag a bug to update status." lightbox="media/manage-bugs/kanban-board-update-status.png":::

- **Bugs tracked as tasks** — Use the Taskboard. For more information, see [Update and monitor your Taskboard](../sprints/task-board.md).

  :::image type="content" source="../sprints/media/alm_tb_move_to_done.png" alt-text="Screenshot of the Taskboard, where you can drag a bug to update status.":::

### Customize your board to track intermediate states

Add intermediate columns to track bug status on the board, and define queries that filter by Board Column. For more information, see the following articles:

::: moniker range="<=azure-devops"

- [Add columns to your board](../boards/add-columns.md)
- [Customize a sprint Taskboard](../sprints/customize-taskboard.md)
- [Query changes to a board](../queries/query-by-workflow-changes.md#kanban-query-fields)

::: moniker-end

### Automate bug reassignment based on workflow state

Add custom rules to your Bug work item type to automate actions. For example, you can reassign a resolved bug to the person who opened it so they can verify the fix and close the bug. For more information, see [Apply rules to workflow states (Inheritance process)](../../organizations/settings/work/apply-rules-to-workflow-states.md).

:::image type="content" source="media/manage-bugs/rule-reassigned-resolved-bug.png" alt-text="Screenshot of rule defined to reassign bug based on resolved state.":::

<a id="set-state-pr">  </a>

### Set work item state in pull request

::: moniker range="<=azure-devops"

When you create a pull request, you can set the *state* value of linked work items in the description using the syntax: `{state value}: #ID`. When you merge the pull request, the system updates the work item state automatically. The following example sets work items #300 and #301 to Resolved, and #323 and #324 to Closed.

:::image type="content" source="/azure/devops/organizations/notifications/media/pr-set-state-of-work-items.png" alt-text="Screenshot of setting work item state within a pull request." lightbox="/azure/devops/organizations/notifications/media/pr-set-state-of-work-items.png":::

::: moniker-end

## Integration across Azure DevOps

You can link work items to builds, releases, branches, commits, and pull requests. Add links from the work item or from the build and release objects.

:::image type="content" source="../../organizations/notifications/media/types-of-work-item-links.png" alt-text="Diagram that shows link types used to link work items to build and release objects.":::

<a id="development-control"></a>

### Link work items to development

The **Development** control links to and displays builds, Git commits, and pull requests. For TFVC repositories, it also supports changesets and versioned items. Select any link to open the corresponding item in a new browser tab. For more information, see [Drive Git development from a work item](connect-work-items-to-git-dev-ops.md).

:::image type="content" source="media/manage-bugs/development-links.png" alt-text="Screenshot shows Development control on work item form with sample links to build, pull requests, and commits.":::

<a id="deployment-control"></a>

### Link work items to releases

The **Deployment** control links to and displays releases that contain the work item. Expand each release to see stage details, and select any link to open the corresponding release or stage. For more information, see [Link work items to deployments](../backlogs/add-link.md#link-work-items-to-deployments).

:::image type="content" source="media/manage-bugs/deployment-section-with-releases.png" alt-text="Screenshot shows Deployment control on work item form with sample releases.":::

### Link work items to pipeline runs

Work items associated with commits appear in pipeline runs when you enable the setting in your pipeline configuration. For more information, see [Customize your pipeline](../../pipelines/customize-pipeline.md).

:::image type="content" source="media/manage-bugs/pipeline-settings.png" alt-text="Screenshot of Pipeline Settings with Automatically link work items in this run from selected branch highlighted.":::

### Create a work item on build failure

Classic pipelines (not YAML) can automatically create work items on build failure. For more information, see [Create a work item on failure](../../pipelines/build/options.md#create-work-items-on-failure).

## Monitor bug status, assignments, and trends

Use queries to track bug status, assignments, and trends. Then, chart the results and add them to a dashboard.

:::image type="content" source="media/manage-bugs/query-charts-active-bugs.png" alt-text="Screenshot of two active bug query charts, Bug Trends by State and by Priority.":::

For more information, see [Managed queries](../queries/about-managed-queries.md), [Charts](../../report/dashboards/charts.md), and [Dashboards](../../report/dashboards/dashboards.md).

::: moniker range="<=azure-devops"

### Use Analytics views for bug reports

Analytics views provide prebuilt filters for bug reporting. Use them as defined or edit them to create custom views:

- Bugs - All history by month
- Bugs - Last 26 weeks
- Bugs - Last 30 days
- Bugs - Today

For more information, see [About Analytics views](../../report/powerbi/what-are-analytics-views.md) and [Create an active bugs report in Power BI](../../report/powerbi/active-bugs-sample-report.md).

For more complex reports, use Power BI. For more information, see [Connect with Power BI Data Connector](../../report/powerbi/data-connector-connect.md).

::: moniker-end

### Marketplace extensions

Find bug-related extensions in the [Marketplace for Azure DevOps](https://marketplace.visualstudio.com/search?term=bug&target=AzureDevOps&category=All%20categories&sortBy=Installs). For Microsoft-developed extensions, see [Azure Boards extensions developed by Microsoft](../extensions/index.md).

<a id="use-ai-assistance"></a>

## Use AI to manage bugs

If you configure the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md), you can triage and manage bugs by using natural language.

| Task | Example prompt |
|------|----------------|
| List new bugs | `Show all new bugs created in the last week in project <Contoso>` |
| Triage by priority | `List unassigned bugs with priority 1 in <Contoso> sorted by created date` |
| Find regressions | `Show bugs tagged "regression" that are still active in <Contoso>` |
| Assign bugs to a team member | `Assign all unassigned bugs in area path <Contoso\\Backend> to <Jamal>` |
| Summarize bug trends | `Show me a count of bugs created vs resolved per week for the last month in <Contoso>` |
| Find stale bugs | `List active bugs in <Contoso> that haven't been updated in more than 30 days` |
| Check bug debt by area | `Show the count of active bugs grouped by area path in project <Contoso>` |
| Escalate high-severity bugs | `List active bugs in <Contoso> with severity 1 - Critical that aren't assigned to a sprint` |
| Link bugs to recent builds | `Show bugs in <Contoso\\Backend> that were created after the last completed build` |
| Bulk update bug states | `Move all resolved bugs in area path <Contoso\\Frontend> that have been resolved for more than 14 days to Closed` |

> [!NOTE]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for complex bug triage scenarios.

## Next step

> [!div class="nextstepaction"]
> [Use templates to add and update work items](work-item-template.md)

## Related content

- [Forecast your product backlog](../sprints/forecast.md)
- [Update your Taskboard](../sprints/task-board.md)
