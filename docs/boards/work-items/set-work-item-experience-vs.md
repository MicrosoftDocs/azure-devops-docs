---
title: Change the Work Items Page Experience
titleSuffix: Azure Boards
description: Learn how to change the Work Items page setting from legacy to default.
ms.custom: work-items
ms.service: azure-devops-boards
ms.assetid: EBDE0739-FAE6-4BEA-8F59-E9D20AFE5FE8
ai-usage: ai-assisted
ms.author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 10/27/2025
---

# Change the Work Items page experience

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Visual Studio 2019 and later versions allow you to switch between the default and legacy views of the Team Explorer **Work Items** page. The default view aligns with the web portal's **Boards** > **Work Items** page, offering a modern and consistent interface for managing work items. The legacy view retains the familiar layout from previous versions of Visual Studio, supporting users who prefer the traditional Work Items page experience.

> [!IMPORTANT]
> We strongly recommend using the default view as it provides the latest features and aligns with the Azure DevOps web experience. Microsoft no longer enhances the legacy view and expects to remove it in a future release of Visual Studio.

## Why choose the default view

The default view offers several advantages over the legacy experience:

- **Modern interface**: Features an updated, streamlined design that improves productivity
- **Feature parity**: Includes the latest Azure DevOps features and capabilities
- **Consistent experience**: Matches the web portal interface, reducing context switching
- **Better performance**: Optimized for faster loading and improved responsiveness
- **Future-proof**: Receives ongoing updates and new feature additions

## Prerequisites

Before you switch between work item views in Visual Studio 2019, ensure you meet the following requirements:

[!INCLUDE [prerequisites-work-items](../includes/prerequisites-work-items.md)]

| Category | Requirements |
|--------------|-------------|
|**Tools**| Visual Studio 2019 or later versions with the latest updates.|
|**Extensions**| Team Explorer extension enabled in Visual Studio.|
|**Connection**| Active connection to your Azure DevOps project.|

## Work item views comparison

Visual Studio provides flexibility in how you interact with work items by offering two distinct views:

### Default view (Recommended)

| Feature | Description | Benefits |
|---------|-------------|----------|
| **Web portal consistency** | Mirrors the **Boards** > **Work Items** page in Azure DevOps | Familiar interface across platforms |
| **Modern interface** | Updated design with improved usability | Enhanced productivity and user experience |
| **Latest features** | Access to newest Azure DevOps capabilities | Stay current with platform updates |
| **Performance optimizations** | Faster loading and better responsiveness | Improved development workflow |

### Legacy view (Deprecated)

| Feature | Description | Considerations |
|---------|-------------|----------------|
| **Traditional layout** | Maintains the Work Items page from earlier Visual Studio versions | Limited feature updates |
| **Familiar interface** | Consistent with previous Visual Studio experiences | might lack newer capabilities |
| **Transition support** | Helps users migrate from older versions | Temporary solution during migration |

> [!WARNING]
> The legacy view is deprecated and will be removed in future Visual Studio releases. Plan to transition to the default view to ensure continued access to work item management features.

## Switch work item views

To switch between the default and legacy views of the Work Items page in Visual Studio:

### Method 1: Using the toggle switch

1. Open Visual Studio and connect to your Azure DevOps project.

2. Navigate to **View** > **Team Explorer** in the Visual Studio menu.

3. In Team Explorer, select **Work Items** to open the Work Items page.

4. Look for the toggle switch at the top of the Work Items page:
   - Select **Switch to Legacy View** to use the traditional interface
   - Select **Use Default View** to return to the modern interface

### Method 2: Using Visual Studio options

1. In Visual Studio, navigate to **Tools** > **Options**.

2. Expand **Source Control** and select **Team Explorer**.

3. Find the work item view settings and select your preferred option.

4. Select **OK** to apply the changes.

5. Restart Team Explorer or reconnect to your project to see the changes.

## Troubleshooting view switching

If you experience issues when switching between views:

### Common problems and solutions

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| **Toggle not visible** | Visual Studio needs updates | Update to the latest Visual Studio 2019 version |
| **View doesn't change** | Cache or connection issues | Restart Visual Studio and reconnect to your project |
| **Features missing** | Using legacy view | Switch to default view for full feature access |
| **Performance issues** | Outdated Visual Studio version | Update Visual Studio and Azure DevOps extensions |

### Verification steps

1. **Check Visual Studio version**: Ensure you're using Visual Studio 2019 version 16.6 or later
2. **Verify connection**: Confirm you're connected to your Azure DevOps project
3. **Update extensions**: Check for and install any available Azure DevOps extension updates
4. **Clear cache**: Clear Visual Studio cache if switching doesn't work properly

## Best practices for work item management

When using either view, consider these best practices:

### Workflow optimization
- **Use queries**: Create and save custom queries for frequently accessed work items
- **Organize work**: Use tags, area paths, and iteration paths to organize work effectively
- **Batch operations**: Use bulk edit features for efficient work item management
- **Stay synchronized**: Regularly refresh to see the latest updates from team members

### Team collaboration
- **Follow work items**: Use the follow feature to stay informed about important items
- **Use discussions**: Leverage work item discussions for team communication
- **Share queries**: Share useful queries with team members for consistent reporting
- **Document processes**: Maintain team documentation for work item workflows

## Migration from legacy to default view

If you're currently using the legacy view, plan your migration:

### Preparation steps
1. **Familiarize yourself**: Explore the default view in a test environment first
2. **Train team members**: Ensure your team understands the new interface
3. **Update documentation**: Revise any team processes that reference the legacy view
4. **Test workflows**: Verify that your current workflows work in the default view

### Migration timeline
- **Immediate**: Switch to default view for new projects
- **Short-term**: Gradually transition existing projects to default view
- **Long-term**: Complete migration before legacy view removal

## Integration with new Git tool experience

Visual Studio 2019 and later versions include an improved Git tool that provides better integration when working with Git repositories:

### New Git tool benefits
- **Enhanced Git operations**: Improved performance for Git commands and operations
- **Better branch management**: More intuitive branch creation and switching
- **Integrated conflict resolution**: Built-in tools for resolving merge conflicts
- **Visual Git history**: Enhanced visualization of repository history

### Impact on Team Explorer
When you enable the new Git tool, Team Explorer functionality changes:
- **Git operations**: Moved to the new Git tool interface
- **Work item management**: Remains available through Team Explorer
- **Project connection**: Maintained through existing Team Explorer connections

To enable the new Git tool, see [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio).

## Related content

- [View and add work items using the Work Items page](view-add-work-items.md)
- [Manage work items](../backlogs/manage-work-items.md)
- [Azure Boards-GitHub integration](index.md)
- [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)
- [Work item field index](guidance/work-item-field.md)
- [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio)
- [Visual Studio 2019 release notes](/visualstudio/releases/2019/release-notes)

## More resources

For additional information on managing work items and customizing your experience:

- [Naming restrictions and conventions](../../organizations/settings/naming-restrictions.md#work-items-work-item-types-and-customizations)
- [Azure DevOps CLI for work items](../../cli/quick-reference.md)
- [REST API for work items](/rest/api/azure/devops/wit/)
