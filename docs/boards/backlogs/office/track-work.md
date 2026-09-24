---
title: Connect Azure Boards to Excel (legacy)
titleSuffix: Azure Boards
description: Learn how to use the legacy Office integration add-in to connect Excel to Azure Boards for work item tracking.
ms.service: azure-boards
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.custom: copilot-scenario-highlight
monikerRange: '<= azure-devops'
ms.date: 07/16/2026
ai-usage: ai-assisted
#customer intent: As a team member or lead, I want to use Microsoft Excel in working with Azure Boards or Azure DevOps Server to improve my team's tracking efforts.
---

# Connect Azure Boards to Excel (legacy)

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [deprecate-office-integration](../../includes/deprecate-office-integration.md)]

> [!NOTE]
> This article covers the legacy Azure DevOps Office integration add-in. For new bulk workflows, use [CSV import/export](../../queries/import-work-items-from-csv.md) or [bulk modify work items in the web portal](../bulk-modify-work-items.md). The following steps are for teams that still rely on Excel-based workflows.

To support legacy work tracking workflows, you can use Microsoft Excel to add or update work items. You can either work in online mode (connected to Azure Boards or Azure DevOps Server) or in offline mode (against a local copy of the document).

[!INCLUDE [ai-assistance-mcp-server-tip](../../../includes/ai-assistance-mcp-server-tip.md)]

## Supported Office clients and Azure DevOps versions

The following table shows Office client support by Azure DevOps/Visual Studio version.

macOS isn't supported. Even if you installed Visual Studio for Mac, connection to Azure DevOps from Excel or any other Office client isn't supported.

| Azure DevOps/Visual Studio version | Excel | Project integration | PowerPoint Storyboarding | Notes |
|-------------------------------------|-------|---------------------|--------------------------|-------|
| Azure DevOps Services<br>Azure DevOps Server 2020<br>Visual Studio 2022<br>Visual Studio 2019<br>Azure DevOps Office Integration 2019 | ✅ Supported | ❌ Not supported | ❌ Not supported | Project integration and **TFSFieldMapping** are deprecated. Linking from inside PowerPoint is deprecated, but you can still add a Storyboard link from within a work item. |
| Visual Studio 2017 (legacy) | ✅ Supported | ✅ Supported | ✅ Supported | Legacy support only. |

## Prerequisites

| Category | Requirements |
|----------|-------------|
| Software | - Microsoft Excel 2016 or later, including Microsoft 365 versions.<br>- Visual Studio or the free Azure DevOps Office Integration 2019.<br>- The Azure DevOps Office Integration plug-in (installed with Visual Studio or with Azure DevOps Office Integration 2019). |
| Download Azure DevOps Office Integration 2019 | - Go to [Visual Studio Downloads](https://visualstudio.microsoft.com/downloads/).<br>- Scroll to **All Downloads**.<br>- Expand **Other Tools, Frameworks, and Redistributables**.<br>- Find **Azure DevOps Office Integration 2019** and select **Download**.<br>- If you can't locate the download or don't have access, sign in with a Microsoft account or contact your administrator. |
| Permissions | - [Project member](../../../organizations/security/add-users-team-project.md) access to connect to an Azure Boards project. |
| Project | - An Azure Boards project. If you don't have one, see [Create a project](../../../organizations/projects/create-project.md). |

For information about compatibility requirements, see [Azure DevOps client compatibility](/azure/devops/server/compatibility).

## Limitations and known issues

The Azure DevOps Office integration add-in predates modern Microsoft 365 authentication, and Microsoft no longer actively maintains it. Expect these limitations:

- **Modern authentication:** Conditional Access, multifactor authentication (MFA), and device compliance policies can block sign-in. If interactive sign-in fails, sign in to your Office client with the same account you use for Azure DevOps before you open the worksheet.
- **Personal access tokens (PATs):** Some scenarios prompt for a PAT instead of interactive sign-in. PATs are long-lived credentials, so avoid them when possible. Use [Microsoft Entra tokens](../../../integrate/get-started/authentication/entra.md) where supported. If you must use a PAT, see [Use personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).
- **Microsoft 365 (web) and macOS:** The add-in works only in desktop Office on Windows. Excel for the web and Office for Mac don't support this add-in.
- **Hosted agents and automation:** The add-in supports interactive use only. It doesn't support unattended or pipeline-based scenarios. Use the [Azure DevOps REST API](/rest/api/azure/devops/wit/work-items) instead.
- **Large datasets:** Publishing or refreshing thousands of work items in one worksheet can time out. Split work across worksheets or use CSV import/export.

For supported alternatives, see [Bulk modify work items in the web portal](../bulk-modify-work-items.md) and [Bulk import or update work items using CSV files](../../queries/import-work-items-from-csv.md).

## Publish and refresh work items

When you work in Excel, you edit a local copy of work item data.

Use these actions to stay synchronized:

- **Refresh** downloads the latest values from Azure Boards into your worksheet.
- **Publish** uploads your worksheet changes to Azure Boards.

At first, your worksheet and Azure Boards match. Over time, other users or processes can change the same work items. To avoid conflicts and stale edits, use this rhythm:

1. **Refresh** when you open the file.
1. Make a small set of edits.
1. **Publish** changes.
1. **Refresh** again, especially during longer sessions.

Repeat this cycle throughout your session.

### Azure DevOps and Excel

The following diagram shows the two-way sync between Excel and Azure DevOps:

- Excel **publishes** local edits to Azure DevOps.
- Excel **refreshes** to pull server-side updates.

:::image type="content" source="media/connect/excel-sequence.png" alt-text="Diagram that shows the bidirectional publish-and-refresh flow between Excel, Team Explorer, and Azure DevOps.":::

For the full Excel workflow, see [Bulk add work items with Excel](bulk-add-modify-work-items-excel.md).

## Connect an Azure DevOps project to Excel

To add or modify work items in Excel, first connect your worksheet to an Azure DevOps project.

> [!NOTE]
>
> - This section shows Excel steps for Azure Boards. PowerPoint uses a similar connection flow.
> - In Azure DevOps Services, the portal automatically selects the **Team Project Collection**. In Azure DevOps Server, select the collection before you select the project.

Choose one connection path:

- Web portal
- Excel client (cloud)
- Excel client (on-premises)
- Visual Studio/Team Explorer

Your worksheet connects as either an **Input list** (manual list) or a **Query list** (saved query results).

### [From the web portal](#tab/open-excel)

This connection method requires the [Azure DevOps Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel) Marketplace extension and Visual Studio 2017 or later.

1. In your browser, confirm the correct project is selected, and then go to **Boards** > **Queries** > **All**.

   :::image type="content" source="../../queries/media/view-run-queries/open-queries-vert.png" alt-text="Screenshot that shows the Boards menu expanded with the Queries item highlighted.":::

1. Select the query you want to open in Excel.

1. On the **Results** tab, select the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: actions icon, and then select **Open in Excel**.

   :::image type="content" source="media/connect/open-in-excel-from-portal.png" alt-text="Screenshot that shows the query results context menu with the Open in Excel command highlighted.":::

### [From an Office client (cloud)](#tab/open-excel-cloud)

To connect from your Office client to an Azure DevOps Services project, follow these steps.

1. Start with a blank worksheet.

1. If Office is signed in, confirm it uses your Azure DevOps account. If not, select your account name and sign in as another user.

   :::image type="content" source="media/connect/sign-in-as-other-user.png" alt-text="Screenshot that shows the account name menu in Excel for signing in as another user.":::

1. If the **Team** ribbon isn't available, see [Resolve Azure DevOps and Office integration issues](tfs-office-integration-issues.md).

1. Select **Team**, place your cursor in cell A1, and then select **New List**.

   :::image type="content" source="media/excel/team-ribbon.png" alt-text="Screenshot that shows the New List button on the Excel Team ribbon.":::

1. The **Connect to Azure DevOps Server** dialog opens. (The name is historical and applies to both Azure DevOps Services and Azure DevOps Server.)

   :::image type="content" source="media/connect/connect-to-azure-devops.png" alt-text="Screenshot of the Connect to Azure DevOps Server dialog listing available servers.":::

   If you're signed in with your Azure DevOps account, the dropdown shows available cloud and on-premises servers. If not, add a server.

1. Select **Servers** > **Add**, enter your Azure DevOps organization URL, confirm the preview, and then select **OK**.

   :::image type="content" source="media/connect/connect-cloud.png" alt-text="Screenshot of the Add/Remove Team Foundation Server dialog with a cloud organization URL entered.":::

   If you can't connect, [get added as a team member](../../../organizations/security/add-users-team-project.md#add-team-members).

1. With the server selected, select the project you want to connect to, and then select **Connect**.

   :::image type="content" source="media/connect/choose-project.png" alt-text="Screenshot of the Connect to Azure DevOps dialog with a project selected.":::

   Confirm your Azure DevOps user account appears at the bottom of the dialog. If it doesn't, select **Switch User** and sign in with the correct account.

1. In the **New List** dialog, choose one option:

   - **Input list** for a manual list.
   - **Query list** to use work items from a saved query.

   :::image type="content" source="media/excel/2019-input-list-dialog.png" alt-text="Screenshot of the New List dialog with Input list selected.":::

### [From an Office client (on-premises)](#tab/open-excel-on-prem)

To connect from your Office client to an Azure DevOps Server project, follow these steps.

1. Start with a blank worksheet.

1. If Office is signed in, confirm it uses your Azure DevOps account. If not, select your account name and sign in as another user.

   :::image type="content" source="media/connect/sign-in-as-other-user.png" alt-text="Screenshot that shows the account name menu in Excel for signing in as another user.":::

1. If the **Team** ribbon isn't available, see [Resolve Azure DevOps and Office integration issues](tfs-office-integration-issues.md).

1. Select the **Team** tab, place your cursor in cell A1, and then select **New List**.

   :::image type="content" source="media/excel/team-ribbon.png" alt-text="Screenshot that shows the New List button on the Excel Team ribbon.":::

   The **Connect to Azure DevOps Server** dialog opens.

   :::image type="content" source="media/connect/connect-to-azure-devops.png" alt-text="Screenshot of the Connect to Azure DevOps Server dialog showing on-premises server entries.":::

   If you're signed in with your Azure DevOps account, the dropdown shows available cloud and on-premises servers. If not, add a server.

1. Select **Servers** > **Add**, and then enter your Azure DevOps Server instance name. Change the port if your deployment uses a nondefault port. Confirm the **Preview** URL, and then select **OK**.

   :::image type="content" source="media/connect/connect-on-premises.png" alt-text="Screenshot of the Add Team Foundation Server dialog with on-premises server details entered.":::

   Select **Close** to close the Add/Remove Team Foundation Server dialog. In the **Select an Azure DevOps Server** dialog, confirm the server you added is selected, and then select **Connect**.

   If you can't connect, [get added as a team member](../../../organizations/security/add-users-team-project.md#add-team-members).

1. With the server selected, select the project you want to connect to, and then select **Connect**.

   :::image type="content" source="media/connect/choose-project.png" alt-text="Screenshot of the Connect to Azure DevOps dialog with an on-premises project selected.":::

   Confirm your Azure DevOps user account appears at the bottom of the dialog. If it doesn't, select **Switch User** and sign in with the correct account.

1. In the **New List** dialog, choose one option:

   - **Input list** for a manual list.
   - **Query list** to use work items from a saved query.

   :::image type="content" source="media/excel/2019-input-list-dialog.png" alt-text="Screenshot of the New List dialog with Input list selected (on-premises connection).":::

### [From Visual Studio](#tab/open-excel-vs)

1. Open Visual Studio and then Team Explorer.

   > [!IMPORTANT]
   > To work from Visual Studio/Team Explorer, select **Tools** > **Options** > **Work Items** > **General** > **Legacy experience**. For more information, see [Set the Work Items experience](../../work-items/set-work-item-experience-vs.md).

   :::image type="content" source="media/connect/work-items-legacy-experience.png" alt-text="Screenshot of the Visual Studio Options dialog with Work Items > General > Legacy experience selected.":::

1. Connect to the Azure DevOps project that contains the work items you want to add or update. For more information, see [Connect to a project](../../../organizations/projects/connect-to-projects.md).

1. Right-click the query you want to open and select **Open in Microsoft Excel**.

   :::image type="content" source="media/connect/open-from-visual-studio-query.png" alt-text="Screenshot of a Team Explorer query context menu with Open in Microsoft Excel highlighted.":::

   Excel opens with the work items listed in the query that you selected.

***

> [!TIP]
> You can use multiple worksheets within an Excel workbook to work with different input or query lists. You can only connect to one project per workbook.

::: moniker range="< azure-devops"

If you move your Azure DevOps project to a different project collection in the same Azure DevOps Server instance, your documents reconnect automatically. If the project moves to a different Azure DevOps Server instance, you must manually reconnect your documents to the new server.

::: moniker-end

## Work offline and reconnect to Azure Boards

You can work offline in Excel to add or update work items, then reconnect and sync later.

> [!NOTE]
> If the project moves to a different Azure DevOps organization or Azure DevOps Server instance, reconfigure the document connection. For steps, see [Connect Azure DevOps project to Excel](#connect-an-azure-devops-project-to-excel).

### Disconnect a document file from the network

Before you disconnect, prepare your worksheet:

1. Open the document you want to edit offline.

1. Get the latest updates. In Excel, on the **Team** ribbon, in the **Work Items** group, select **Refresh**.

1. Add all columns you plan to edit. You can't add columns after you disconnect.

1. Disconnect your computer from the network, or save the work item list file and copy it to another computer.

   Office might show a connection error after you disconnect.

1. Modify or update the work item list as needed.

   While offline, you can't create most link types between work items. Parent-child links in an Excel tree list are the exception.

### Reconnect a file to Azure Boards

When you're back online, resync your file:

1. Reconnect your computer to the network, or copy the file to a computer that is connected to Azure Boards.

1. If you changed the file offline, in Excel, on the **Team** ribbon, in the **Work Items** group, select **Publish**.

1. If you didn't make offline changes, select **Refresh** instead.

1. Resolve any validation errors or conflicts.

## Marketplace extensions

These Marketplace extensions support Azure DevOps and Microsoft 365 integration scenarios:

- [Azure DevOps Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel)

   Opens query results or selected work items in Excel from the web portal for bulk editing and analysis.

   - Publisher: Microsoft DevLabs
   - Requirements: Microsoft Excel and either Visual Studio or the Azure DevOps Office Integration client
   - Compatibility: Azure DevOps Services and Azure DevOps Server

- [Office 365 Integration](https://marketplace.visualstudio.com/items?itemName=ms-vsts.vss-services-o365)

   Sends Azure DevOps service hook notifications (for example, build, code push, and work item events) to a Microsoft 365 group inbox.

   - Publisher: Microsoft
   - Scope: Azure DevOps Services
   >[!Note]
   >The Marketplace page states this extension is preinstalled with Visual Studio Team Services/Azure DevOps Services.

<a id="use-ai-assistance"></a>

## Use AI to work with work items without Excel

If you configure the [Azure DevOps MCP Server](../../../mcp-server/mcp-server-overview.md), you can describe common work item tasks in natural language, avoiding the legacy Excel add-in for many scenarios.

Replace placeholder values before you run a prompt: `<ProjectName>`, `<AreaPath>`, `<IterationPath>`, and `<UserName>`.

| Task | Example prompt |
|------|----------------|
| Add work items in bulk | `Create 10 User Stories in project <ProjectName> under area path <AreaPath> in iteration <IterationPath>` |
| Import a hierarchy | `Create an Epic "Checkout revamp" in project <ProjectName> with 3 Features and 2 User Stories under each Feature` |
| Update field values | `Set Iteration Path to <IterationPath> for all active Tasks assigned to <UserName> in project <ProjectName>` |
| Reassign work | `Reassign all active User Stories in area path <AreaPath> from <UserName> to <UserName>` |
| Move items to a sprint | `Move all uncommitted User Stories in project <ProjectName> from iteration <IterationPath> to iteration <IterationPath>` |
| Add tags in bulk | `Add tag "release-2026" to all User Stories in iteration <IterationPath> in project <ProjectName>` |
| Query work items | `Show all active unassigned Bugs in project <ProjectName>` |
| Export a snapshot | `List all resolved Bugs in project <ProjectName> from the last 30 days with Title, Assigned To, and Closed Date` |
| Refresh values in bulk | `Set Priority to 2 for all active Bugs in area path <AreaPath> in project <ProjectName>` |
| Change work item type | `Change all Issues tagged "convert-to-bug" to Bug in project <ProjectName>` |

> [!NOTE]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for complex work item operations.

## Related content

- [Bulk modify work items (web portal)](../bulk-modify-work-items.md)
- [Bulk import or update work items using CSV files](../../queries/import-work-items-from-csv.md)
- [Work in Excel connected to Azure Boards](faqs.yml)
- [Create your backlog](../../backlogs/create-your-backlog.md)
