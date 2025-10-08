---
title: Scaled Agile Framework (SAFe®) and Azure Boards  
titleSuffix: Azure Boards
description: Learn how Scaled Agile Framework concepts map to Azure Boards artifacts.
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
---

# How SAFe&reg; concepts map to Azure Boards artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Configure Azure Boards to track SAFe® deliverables and support many teams working together on Epics that span releases. This article maps common SAFe® artifacts to Azure Boards artifacts and shows configuration patterns you can apply to any process (Agile, Scrum, Basic, or CMMI).

> [!div class="checklist"]
> * SAFe® Agile, program, and portfolio teams
> * SAFe® deliverables such as epics, features, and stories
> * SAFe® Product, program, and portfolio views
> * SAFe® Release trains, sprints, and other timeboxes
> * SAFe® Iteration goals and objectives
> * SAFe® Value streams and budgets
> * SAFe® Portfolio Vision and Strategic Themes
> * SAFe® Roadmaps
> * SAFe® Milestones and events
> * SAFe® Retrospectives and reviews

For an overview of how Azure Boards implements Scrum and Kanban, see [About Sprints, Scrum, and project management](../sprints/scrum-overview.md) and [About Boards and Kanban](../boards/kanban-overview.md).

[!INCLUDE [temp](../includes/note-safe-articles.md)]

The following diagram shows a three-level team hierarchy mapped to area and iteration paths. The examples use the Agile process as a base, but you can apply these patterns to any supported process.

![Screenshot that shows an Agile tool structure to support SAFe®](media/safe-objects-map-to-vso-objects.png)

<a id="teams"></a>

## Agile feature, program, and portfolio teams

Azure Boards gives each team its own view of work. Configure a hierarchical team structure so each team focuses on its work and roll-up occurs to higher levels.

![Screenshot that shows SAFe® roles mapped to a hierarchy of teams](media/safe/portfolio-programs-teams-area-paths-mapping.png)

To support SAFe® teams, promote the default team to act as the Portfolio team for Epics, then create program and team subteams. Track work across teams by assigning area paths and iteration paths appropriately.

<a id="work-items"></a>

## Stories, Features, Epics, Enablers, and Capabilities

Capture all deliverables in work items. Each work item uses a specific work item type and workflow. The available work item types depend on the process chosen when you created the project—Agile, Basic, Scrum, or CMMI.

[!INCLUDE [temp](../includes/work-item-types.md)]

Backlog items might be called *User Stories* (Agile), *Issues* (Basic), *Product backlog items* (Scrum), or *Requirements* (CMMI). They all describe customer value and the work to deliver it.

- Track Enablers using User Stories or Features, and track Capabilities using Features or Epics.
- Add custom work item types if you need specialized tracking. For details, see [Customize Azure Boards, Add custom work item types](safe-customize.md#customize-wits).

Work items support:
- descriptions and acceptance criteria
- assignment to a team (area path) and an owner
- state updates and iteration assignment
- linking, attachments, and tags
- comments and discussion threads

For more about work items, see [Track work with user stories, issues, bugs, features, and epics](../work-items/about-work-items.md).

<a id="backlogs-boards"></a>

## Team backlogs and boards

Map SAFe® backlogs to team, program, and portfolio backlogs. The Agile process provides User Story, Feature, and Epic backlog levels out of the box. Use hierarchical backlogs to show the work that supports Features and the progress of Epics.

![Screenshot that shows a hierarchical backlog with epics, features, and stories](media/safe/epic-feature-story-mapping.png)

Customize backlogs and boards (including adding portfolio backlog levels) as described in [Customize Azure Boards, Customize backlogs](safe-customize.md#custom-backlog). Each team can configure their board view independently.

<a id="iterations"></a>

## Program increments, releases, and sprints

Map SAFe® Release Trains, Program Increments (PIs), Releases, and Sprints to iteration paths. Share iterations across the team hierarchy so teams align on release schedules.

![Screenshot that shows how SAFe® release trains map to iterations](media/safe/iteration-mapping.png)

Because Epics can span multiple release trains, the Portfolio team typically doesn't bind to specific iterations. Program teams track Features by PI; Feature teams use Sprints to complete Stories.

![Screenshot that shows teams tracking deliverables using iterations](media/safe/program-iterations.png)

<a id="misc-artifacts"></a>

## Iteration goals and objectives

Capture iteration goals and objectives in the project wiki or on team dashboards. Both the wiki and dashboards support Markdown and let teams store goals, objectives, and guidance.

<a id="tags"></a>

## Value streams and budgets

Use tags or custom fields to map Features and Epics to Value Streams, Strategic Themes, and budgets. Define rollup fields or use queries and charts to aggregate budget estimates from child Features up to Epics.

![Screenshot that shows tags used to track value streams or associated budgets](media/safe/epic-value-area-tags.png)

With tags and queries you can:
- filter backlogs and boards
- build queries and filter results by tag
- create charts and reports based on tags

For robust mappings, add a Value Area custom field on Epics, Features, or Stories and use rollup to gather estimates into portfolio views.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a budget estimate rollup](media/safe/budget-estimate-rollup.png)

To add custom fields, see [Customize Azure Boards, Add a custom field](safe-customize.md#add-custom-field).

<a id="wiki"></a>

## Use the project wiki to support portfolio vision and strategic themes

Use the project wiki to share Portfolio Vision, Strategic Themes, taxonomy, goals, and objectives. The wiki versions pages and supports Markdown, so you can track edits and recover previous versions.

For details, see [About Wikis, READMEs, and Markdown](../../project/wiki/about-readme-wiki.md).

<a id="milestones"></a>

## Milestones and key events

Represent SAFe® milestones (end of PIs, Sprints, Release Train events, or IP iterations) using:
- a custom Milestone or Release work item field (picklist)
- a tag on work items
- a work item that represents the milestone with a target date
- a one-day iteration path for an event date

Use queries, dashboards, and charts to track milestone progress.

<a id="shared-services"></a>

## Shared services team structure

Model shared services (for example, UX or Security) as their own teams and area paths. Shared-area work items appear on the backlogs and boards of the teams they support.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows the shared services area path and team structure](media/safe/shared-services-team-structure.png)

<a id="retrospectives"></a>

## Retrospectives and reviews

Use the [Retrospectives extension by Microsoft DevLabs](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives) to run retrospectives, capture feedback, and create follow-up work.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a retrospective board](media/safe/retrospective-board.png)

The extension helps teams:
- collect feedback on milestones
- organize and prioritize feedback
- create and track action items

<a id="share-information"></a>

## Share information

Share information across teams with:
- rich work item fields and attachments
- project and team dashboards (use Markdown widgets)—see [Add Markdown to a dashboard](../../report/dashboards/add-markdown-to-dashboard.md)
- the project wiki for versioned, shareable documentation—see [About Wikis, READMEs, and Markdown](../../project/wiki/about-readme-wiki.md)

For Markdown syntax guidance, see:
- [Syntax guidance for Markdown usage in Wiki](../../project/wiki/markdown-guidance.md)
- [Syntax guidance for basic Markdown usage](../../project/wiki/markdown-guidance.md)

## Next step

> [!div class="nextstepaction"]
> [Configure Azure Boards to support SAFe®](safe-configure-boards.md)

<a id="related-articles"></a>

## Related content

- [Agile process](../work-items/guidance/agile-process.md)
- [Scrum process](../work-items/guidance/scrum-process.md)
- [CMMI process](../work-items/guidance/cmmi-process.md)
- [View SAFe® progress, roadmaps, and metrics](safe-review-roadmaps-progress.md)
- [Agile culture](agile-culture.md)
- [Practices that scale](practices-that-scale.md)
- [Scale Agile to Large Teams](/devops/plan/scaling-agile)
