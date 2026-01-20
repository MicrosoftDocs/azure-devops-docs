---
title: View sample work item templates that show usage in Azure Boards
titleSuffix: Azure Boards
description: Learn about sample work item templates you can use to prepopulate fields and provide guidance in work item forms.
ms.service: azure-devops-boards
ms.assetid: 9b575c05-16f3-4027-aa5a-67b017a0089d
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.topic: example-scenario
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
---

# View sample work item templates in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Work item templates save time and provide guidance when teams create user stories, features, bugs, or tasks. Teams commonly use templates to:

- create bugs for specific product areas,
- provide guidance to complete a work item,
- create work items with specific tags,
- define a bug template for use with an extension such as [Bug Bash Pro](https://marketplace.visualstudio.com/items?itemName=mohitbagra.bugbashpro).

Review this article for examples of template values. For guidance on adding, managing, and applying templates, see [Use templates to add and update work items](../backlogs/work-item-template.md).

> [!NOTE]  
> Work item templates are distinct from process templates. For more information, see [About processes and process templates](../work-items/guidance/choose-process.md) or process-specific articles: [Basic](../get-started/plan-track-work.md), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), and [CMMI](../work-items/guidance/cmmi-process.md).

<a id="area-path"> </a>

## Specify the Area Path

As organizations grow, product areas and teams often multiply. To ensure a work item appears on the correct team's backlog or board, templates should specify the team's Area Path.

In this example, the Voice team sets the <strong>Area Path</strong>=`Fabrikam Fiber/Voice`.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows specifying the Area Path for a template.](media/template/area-path.png)

For more about area paths, see [About area and iteration (sprint) paths](../../organizations/settings/about-areas-iterations.md).

<a id="rich-text"> </a>

## Add guidance in a rich-text field

Add HTML into a rich-text field to provide guidance to authors.

For example, add this HTML into the <strong>Repos Steps</strong> field:

> [!div class="tabbedCodeSnippets"]
> ```HTML
> <p><b>Steps to reproduce:</b><br>1.&nbsp; <br><br><b>Expected Behavior:</b><br>1. <br><br><b>Affected Branch:</b> <br> <b>Affected Build:</b><br></p>
> ```
>
> [!div class="mx-imgBorder"]  
> ![Screenshot that shows adding HTML syntax into the Repos Steps rich-text field.](media/template/repo-steps.png)

The work item form renders the HTML as shown:

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the rendered rich-text content in the work item form.](media/template/repo-steps-rendered.png)

<a id="add-tags"> </a>

## Add work item tags

Tags help you quickly filter backlogs, boards, or queries. To add multiple tags, enter them in the **Tags (Add)** field separated by commas (for example: Web, Sept Release).

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows adding tags to a work item.](media/template/add-tags.png)

For more about tags, see [Add work item tags to categorize and filter lists and boards](../queries/add-tags-to-work-items.md).

You can also use the **Tags (Remove)** template field to remove tags from many work items by bulk applying a template that removes the tag.

## Define and prepopulate custom fields

Prepopulate a custom field only after you add it to the work item type. For inherited process models, see [Add and manage fields for an inherited process](../../organizations/settings/work/customize-process-field.md). For on-premises XML process models, see [Add or modify a field to track work](../../reference/add-modify-field.md).

For example, set a custom <strong>Triage</strong> field to `False` to indicate a bug needs triage.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows setting a custom Triage field to False.](media/template/custom-field.png)

## Access other features through extensions

Work item templates don't create child links automatically (for example, creating five tasks from one user story). If you need that behavior, look for Marketplace extensions that add it. Examples:

- [Work item form one select actions](https://marketplace.visualstudio.com/items?itemName=mohitbagra.witoneclickactions)  
- [1-select Tasks](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-tasks)  
- [1-select Child-Links](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-child-links)

::: moniker range="< azure-devops"

## Customize the work item web form

If your project uses the on-premises XML process model, you can add help text, hyperlinks, or web content to a form.

For more information, see:
- [WebLayout and Control elements](/previous-versions/azure/devops/reference/xml/weblayout-xml-elements)
- [Provide help text, hyperlinks, or web content on a work item form](../../reference/xml/provide-help-text-hyperlinks-web-content-form.md)
- [Edit a WIT definition to add web content to a work item form](/previous-versions/azure/devops/reference/xml/edit-wit-definition-add-web-content-form)

::: moniker-end

## Extensibility

You can programmatically create, get, list, and delete work item templates with the [Templates REST APIs](/rest/api/azure/devops/wit/templates/list).

## Related content

- [Use templates to add and update work items](../backlogs/work-item-template.md)
