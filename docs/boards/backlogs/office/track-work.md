---
title: Connect Azure Boards to Excel (legacy)
titleSuffix: Azure Boards
description: Learn how to use the legacy Office integration add-in to connect Excel to Azure Boards for work item tracking.
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 06/08/2026
ai-usage: ai-assisted
#customer intent: As a team member or lead, I want to use Microsoft Excel in working with Azure Boards or Azure DevOps Server to improve my team's tracking efforts.
---

# Connect Azure Boards to Excel (legacy)

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [deprecate-office-integration](../../includes/deprecate-office-integration.md)]

> [!NOTE]
> This article describes the legacy Azure DevOps Office integration add-in. For new bulk work item workflows, use [CSV import/export](../../queries/import-work-items-from-csv.md) or [bulk modify work items in the web portal](../bulk-modify-work-items.md) instead. The following steps remain documented for teams who must continue using existing Excel-based workflows.

To support legacy work tracking workflows, you can use Microsoft Excel to add or update work items. You can either work in online mode (connected to Azure Boards or Azure DevOps Server) or in offline mode (against a local copy of the document).

> [!TIP]
> For bulk import or to update work items, use the [web portal](../bulk-modify-work-items.md) or [CSV import](../../queries/import-work-items-from-csv.md).

## Supported Office clients and Azure DevOps versions

The following table indicates the Office clients supported for each Azure DevOps version.

macOS isn't supported. Even if you installed Visual Studio for Mac, connection to Azure DevOps from Excel or any other Office client isn't supported.

| Azure DevOps/Visual Studio version | Excel | Project<sup>1</sup> | PowerPoint Storyboarding<sup>2</sup> |
|-------------------------------------|-------|---------------------|--------------------------------------|
| Azure DevOps Services<br>Azure DevOps Server 2020<br>Visual Studio 2022<br>Visual Studio 2019<br>Azure DevOps Office Integration 2019 | ✔️ | | |
| Visual Studio 2017 (legacy) | ✔️ | ✔️ | ✔️ |

> [!NOTE]
> 1. Support for Project integration and the **TFSFieldMapping** command is deprecated. You might find support using one of the [Marketplace extensions](#marketplace-extensions).
> 2. Support for linking PowerPoint files to work items from within PowerPoint is deprecated starting with Visual Studio 2019 and Azure DevOps Office Integration 2019. You can still link to PowerPoint using the Storyboard link from within a work item. Also, the Visual Studio Gallery for PowerPoint Storyboarding is deprecated.

## Prerequisites

| Category | Requirements |
|----------|-------------|
| Software | - Microsoft Excel 2016 or later, including Microsoft 365 versions.<br>- Visual Studio or the free Azure DevOps Office Integration 2019 (see the following installation note).<br>- The Azure DevOps Office Integration plug-in (installed with Visual Studio or with Azure DevOps Office Integration 2019). |
| Permissions | - [Project member](../../../organizations/security/add-users-team-project.md) access to connect to an Azure Boards project. |
| Project | - An Azure Boards project. If you don't have one, see [Create a project](../../../organizations/projects/create-project.md). |

> [!NOTE]
> **To download Azure DevOps Office Integration 2019:**
>
> 1. Go to [Visual Studio Downloads](https://visualstudio.microsoft.com/downloads/).
> 1. Scroll down to **All Downloads**.
> 1. Expand **Other Tools, Frameworks, and Redistributables**.
> 1. Find **Azure DevOps Office Integration 2019** and select **Download**.
>
> If you can't locate the download or don't have access, you might need to sign in with a Microsoft account or contact your administrator for access permissions.

For information about compatibility requirements, see [Azure DevOps client compatibility](/azure/devops/server/compatibility).

## Limitations and known issues

The Azure DevOps Office integration add-in predates modern Microsoft 365 authentication and is no longer actively maintained. Expect the following limitations:

- **Modern authentication:** Sign-in might fail in environments that require Conditional Access, multifactor authentication (MFA), or device compliance policies. If interactive sign-in fails, try signing into your Office client with the same account used for Azure DevOps before opening the worksheet.
- **Personal access tokens (PATs):** Some scenarios prompt for a PAT instead of interactive sign-in. PATs are long-lived credentials and aren't recommended&mdash;use [Microsoft Entra tokens](../../../integrate/get-started/authentication/entra.md) where supported. If you must use a PAT, see [Use personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).
- **Microsoft 365 (web) and macOS:** The add-in works only with the desktop versions of Office on Windows. Excel for the web and Office for Mac aren't supported.
- **Hosted agents and automation:** The add-in is interactive only and isn't supported for unattended or pipeline-based scenarios. Use the [Azure DevOps REST API](/rest/api/azure/devops/wit/work-items) instead.
- **Large datasets:** Publishing or refreshing thousands of work items in a single worksheet can time out. Split work across multiple worksheets or use CSV import/export.

For supported alternatives, see [Bulk modify work items in the web portal](../bulk-modify-work-items.md) and [Bulk import or update work items using CSV files](../../queries/import-work-items-from-csv.md).

## Publish and refresh work items

When you add or update work items from Excel, local copies of your work items are created. To keep data in sync, refresh your local file when you open it and publish and refresh frequently during a long online session.

At first, the data in the local document matches the data in the database. But you or other team members can change the data about work items and cause the two to differ. To view the most recent changes from the database, refresh the document. The refresh downloads the latest values in the data store to your local document. To write changes from the document to the database, publish the changes. Publishing uploads the changes you made to the work item tracking data store.

To keep work items in sync from your local data store and Azure Boards, publish and refresh often.

### Azure DevOps and Excel

The following diagram shows how Team Explorer and Excel exchange work item data with Azure DevOps. Excel publishes your edits to Azure DevOps and refreshes its local copy with server-side updates.

:::image type="content" source="media/connect/excel-sequence.png" alt-text="Diagram that shows the bidirectional publish-and-refresh flow between Excel, Team Explorer, and Azure DevOps.":::

For the full Excel workflow, see [Bulk add work items with Excel](bulk-add-modify-work-items-excel.md).

## Connect an Azure DevOps project to Excel

To add or modify work items by using Excel, connect your worksheet to a project. Establish this connection to bind the document to the Azure DevOps project to exchange information.

> [!NOTE]
>
> - This section illustrates how to connect Excel to an Azure Boards project. The steps to connect to PowerPoint are similar.
> - When you connect to Azure Boards in the cloud, the **Team Project Collection** is selected automatically because only one collection is associated with your Azure DevOps Services organization. When you connect to Azure Boards in an on-premises server, select the **Team Project Collection** before you select the project.

You can start work from the web portal, Excel, or Visual Studio/Team Explorer. Your worksheet is associated with either a list of work items or a work item query.

### [From the web portal](#tab/open-excel)

This connection method requires the [Azure DevOps Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel) Marketplace extension and Visual Studio 2017 or later.

1. From your web browser, confirm you selected the correct project, select **Boards** > **Queries**, and then select **All**.

   :::image type="content" source="../../queries/media/view-run-queries/open-queries-vert.png" alt-text="Screenshot that shows the Boards menu expanded with the Queries item highlighted.":::

1. Select the query you want to open in Excel.

1. From the **Results** tab, select the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: actions icon, and then select **Open in Excel**.

   :::image type="content" source="media/connect/open-in-excel-from-portal.png" alt-text="Screenshot that shows the query results context menu with the Open in Excel command highlighted.":::

### [From an Office client (cloud)](#tab/open-excel-cloud)

To connect from your Office client to an Azure DevOps Services project, follow these steps.

1. Start with a blank worksheet.

1. If your client is signed in to a user account, confirm it's your Azure DevOps user account. If not, select your account name and sign in as another user.

   :::image type="content" source="media/connect/sign-in-as-other-user.png" alt-text="Screenshot that shows the account name menu in Excel for signing in as another user.":::

1. If the **Team** ribbon isn't available, see [Resolve Azure DevOps and Office integration issues](tfs-office-integration-issues.md).

1. Select **Team**, place your cursor in cell A1, and then select **New List**.

   :::image type="content" source="media/excel/team-ribbon.png" alt-text="Screenshot that shows the New List button on the Excel Team ribbon.":::

1. The **Connect to Azure DevOps Server** dialog opens. (The dialog name is historical; it's used for both Azure DevOps Services and Azure DevOps Server connections.)

   :::image type="content" source="media/connect/connect-to-azure-devops.png" alt-text="Screenshot of the Connect to Azure DevOps Server dialog listing available servers.":::

   If you're signed in to your Office client with your Azure DevOps user account, the dropdown menu lists the cloud and on-premises servers you can access.

   If you aren't signed in, you're working from an older Office client, or you aren't connected to any servers, add a server now.

1. Select **Servers**, select **Add**, enter the URL of your Azure Boards organization, confirm the preview matches the URL you entered, and then select **OK**.

   :::image type="content" source="media/connect/connect-cloud.png" alt-text="Screenshot of the Add/Remove Team Foundation Server dialog with a cloud organization URL entered.":::

   If you can't connect, [get added as a team member](../../../organizations/security/add-users-team-project.md#add-team-members).

1. With the server selected, select the project you want to connect to, and then select **Connect**.

   :::image type="content" source="media/connect/choose-project.png" alt-text="Screenshot of the Connect to Azure DevOps dialog with a project selected.":::

   Confirm your Azure DevOps user account appears at the bottom of the dialog. If it doesn't, select **Switch User** and sign in with the correct account.

1. In the **New List** dialog, select **Input list**. Or, to work with a list of work items defined in a query, select **Query list**.

   :::image type="content" source="media/excel/2019-input-list-dialog.png" alt-text="Screenshot of the New List dialog with Input list selected.":::

### [From an Office client (on-premises)](#tab/open-excel-on-prem)

To connect from your Office client to an Azure DevOps Server project, follow these steps.

1. Start with a blank worksheet.

1. If your client is signed in to a user account, confirm it's yours. If not, select your account name and sign in as another user.

   :::image type="content" source="media/connect/sign-in-as-other-user.png" alt-text="Screenshot that shows the account name menu in Excel for signing in as another user.":::

1. If the **Team** ribbon isn't available, see [Resolve Azure DevOps and Office integration issues](tfs-office-integration-issues.md).

1. Select the **Team** tab, place your cursor in cell A1, and then select **New List**.

   :::image type="content" source="media/excel/team-ribbon.png" alt-text="Screenshot that shows the New List button on the Excel Team ribbon.":::

   The **Connect to Azure DevOps Server** dialog opens.

   :::image type="content" source="media/connect/connect-to-azure-devops.png" alt-text="Screenshot of the Connect to Azure DevOps Server dialog showing on-premises server entries.":::

   If you're signed in to your Office client with your Azure DevOps user account, the dropdown menu lists the cloud and on-premises servers you can access.

   If you aren't signed in, you're working from an older Office client, or you aren't connected to any servers, add a server now.

1. Select **Servers**, select **Add**, and then enter the name of your Azure DevOps Server instance. Change the port number if your deployment uses a nondefault port. The **Preview** entry should display the correct URL for your deployment. Select **OK**.

   :::image type="content" source="media/connect/connect-on-premises.png" alt-text="Screenshot of the Add Team Foundation Server dialog with on-premises server details entered.":::

   Select **Close** to close the Add/Remove Team Foundation Server dialog. In the **Select an Azure DevOps Server** dialog, confirm the server you added is selected, and then select **Connect**.

   If you can't connect, [get added as a team member](../../../organizations/security/add-users-team-project.md#add-team-members).

1. With the server selected, select the project you want to connect to, and then select **Connect**.

   :::image type="content" source="media/connect/choose-project.png" alt-text="Screenshot of the Connect to Azure DevOps dialog with an on-premises project selected.":::

   Confirm your Azure DevOps user account appears at the bottom of the dialog. If it doesn't, select **Switch User** and sign in with the correct account.

1. In the **New List** dialog, select **Input list**. Or, to work with a list of work items defined in a query, select **Query list**.

   :::image type="content" source="media/excel/2019-input-list-dialog.png" alt-text="Screenshot of the New List dialog with Input list selected (on-premises connection).":::

### [From Visual Studio](#tab/open-excel-vs)

1. Open Visual Studio and then Team Explorer.

   > [!IMPORTANT]
   > To work from Visual Studio/Team Explorer, select **Tools** > **Options** > **Work Items** > **General** > **Legacy experience**. For more information, see [Set the Work Items experience](../../work-items/set-work-item-experience-vs.md).

   :::image type="content" source="media/connect/work-items-legacy-experience.png" alt-text="Screenshot of the Visual Studio Options dialog with Work Items > General > Legacy experience selected.":::

1. Connect to your Azure DevOps project that contains the work items you want to add to or update. For more information, see [Connect to a project](../../../organizations/projects/connect-to-projects.md).

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

One advantage of working in Excel is that you can work offline and add or modify work items. The following procedures show you how to disconnect an Excel work item list from Azure Boards. You can then reconnect later to synchronize the document with the work item database.

> [!NOTE]
> If the project that contains work items for your Excel document is moved to a different organization or Azure DevOps Server instance, you must reconfigure the server to which the document connects. For more information, see [Connect Azure DevOps project to Excel](#connect-an-azure-devops-project-to-excel) earlier in this article.

### Disconnect a document file from the network

To disconnect an Excel document file from the network:

1. Open the document that you want to change while you're offline.

1. Refresh the work item list to retrieve the latest information from the work item database. In Excel, on the **Team** ribbon, in the **Work Items** group, select **Refresh**.

1. Add to the work item list the columns for all fields that you want to modify. You can't add columns when the work item list is disconnected from the server.

1. Disconnect your computer from the network, or save the work item list file and copy it to another computer.

   An error message might appear that tells you the Office program couldn't establish a connection with an Azure DevOps Server.

1. Modify or update the work item list as needed.

   You can't create most types of links between work items when the work item document is disconnected from the system. The exceptions are parent-child links in an Excel tree list.

### Reconnect a file to Azure Boards

To reconnect an Excel document file:

1. Reconnect your computer to the network, or copy the file to a computer that is connected to Azure Boards.

1. If you changed the document offline, in Excel, on the **Team** ribbon, in the **Work Items** group, select **Publish**.

1. If you didn't change the document offline, in Excel, on the **Team** ribbon, in the **Work Items** group, select **Refresh**.

1. Resolve any data validation errors or conflicts that occur.

## Marketplace extensions

The following Marketplace extensions support integration between Azure DevOps and Office products:

- [Azure DevOps Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel): Opens a selected query or set of work items in Excel from the web portal. Maintained by Microsoft DevLabs and updated as recently as 2025. Requires Microsoft Excel and the Azure DevOps Office Integration client.
- [Office 365 Integration](https://marketplace.visualstudio.com/items?itemName=ms-vsts.vss-services-o365): Sends notifications of Azure DevOps events (such as build completion, code pushes, and work item changes) to a Microsoft 365 group inbox through service hooks. Pre-installed with Azure DevOps Services.

## Related content

- [Bulk modify work items (web portal)](../bulk-modify-work-items.md)
- [Bulk import or update work items using CSV files](../../queries/import-work-items-from-csv.md)
- [Work in Excel connected to Azure Boards](faqs.yml)
- [Create your backlog](../../backlogs/create-your-backlog.md)
