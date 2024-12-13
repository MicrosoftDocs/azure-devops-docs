---
title: Change the Work Items page experience
titleSuffix: Azure Boards
description: Learn how to change the Work Items page setting from legacy to default.
ms.custom: work-items
ms.service: azure-devops-boards
ms.assetid: EBDE0739-FAE6-4BEA-8F59-E9D20AFE5FE8
ms.author: chcomley
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 11/21/2024
---

# Set the work items experience

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Visual Studio 2019 allows you to switch between the default and legacy views of the Team Explorer **Work Items** page. The default view is designed to align with the web portal's **Boards** > **Work Items** page, offering a modern and consistent interface for managing work items. The legacy view retains the familiar layout from previous versions of Visual Studio, supporting users who prefer the traditional Work Items page experience.

## Prerequisites

Before switching between work item views in Visual Studio 2019, ensure you meet the following requirements:

[!INCLUDE [prerequisites-work-items](../includes/prerequisites-work-items.md)]

- **Tools**: Have Visual Studio 2019 installed with the latest updates.
- **Extensions**: Verify that the Team Explorer extension is installed and enabled in Visual Studio 2019.

## Work item views

Visual Studio 2019 provides flexibility in how you interact with work items by offering the following two distinct views:

### Default view

- **Consistency with web portal**: Mirrors the **Boards** > **Work Items** page in the Azure DevOps web portal.
- **Modern interface**: Features a streamlined and updated design for enhanced usability.
- **Integrated features**: Applies the latest updates and integrations available in Azure DevOps.

### Legacy view

- **Familiar layout**: Maintains the traditional Work Items page layout from earlier Visual Studio versions.
- **Compatibility**: Ensures continuity for users transitioning from previous versions of Visual Studio.
- **Customizations**: Supports existing customizations and workflows established in older environments.

## Switch work item views

To switch between the default and legacy views of the Work Items page in Visual Studio 2019, do the following steps:

1. Select **View** > **Team Explorer** in the Visual Studio menu.

2. In Team Explorer, select **Work Items** to open the Work Items page.

3. Look for a toggle or option labeled **Switch to Legacy View** or **Use Default View** and move the toggle to switch between the default and legacy views based on your preference.

## More resources

For more information on managing work items and customizing your experience, see the following resources:

- [Azure Boards-GitHub integration](index.md)
- [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)
- [Work item field index](guidance/work-item-field.md)
- [Manage work item fields using witadmin](../../reference/witadmin/manage-work-item-fields.md)
- [Naming restrictions and conventions](../../organizations/settings/naming-restrictions.md#work-items-work-item-types-and-customizations)

## New Git tool experience

Visual Studio 2019 now includes a new Git tool that provides an improved experience when connecting to a Git repository. When you enable this tool, the Team Explorer tool is effectively disabled when connected to a Git repository. You can acquire the new tool by downloading [Visual Studio 2019 version 16.6](/visualstudio/releases/2019/release-notes-v16.6). To enable and use the new tool, see [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio).  

## Related articles

- [Manage work items](../backlogs/manage-work-items.md)
