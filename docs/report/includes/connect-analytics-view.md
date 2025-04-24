---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 04/24/2025
---

## Connect to an Analytics view

Follow these steps to connect to an Analytics view:

1. Open Power BI Desktop.

1. Sign in to the service. First-time access requires you to sign in and authenticate your credentials. Power BI Desktop saves your credentials, so you only have to sign in once.

   > [!NOTE]
   > Azure DevOps doesn't support cross-tenant scenarios that use Open Authorization (OAuth). Instead, [use service principals and managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md).

1. Select **Connect**.

   :::image type="content" source="../powerbi/media/powerbi-successful-organizational-signin.png" alt-text="Screenshot that shows the Power BI Connection dialog, with the You are currently signed in message and the Connect button highlighted.":::

1. Select **Get Data** > **Online Services**, and then select **Azure DevOps (Boards only)** for cloud services or **Azure DevOps Server (Boards only)** for an on-premises server. Select **Connect**. Analytics views support queries only against work items and test cases.

   :::image type="content" source="../powerbi/media/data-connector/get-data-azure-devops.png" alt-text="Screenshot of Power BI with Get data, Online Services, and the Azure DevOps services highlighted.":::

1. Specify the basic parameters to connect to your data.

   ::: moniker range="azure-devops"
   :::image type="content" source="../powerbi/media/create-report/specify-account.png" alt-text="Screenshot of the Azure DevOps (Boards only) dialog. The Organization and Team project fields are highlighted.":::
   ::: moniker-end
   ::: moniker range="< azure-devops"
   :::image type="content" source="../powerbi/media/onprem-credentials.png" alt-text="Screenshot of the Azure DevOps Server (Boards only) dialog. The Collection URL and Team project fields and the OK button are highlighted.":::

   - **Collection URL**: Enter the URL where your Azure DevOps Server instance is hosted. An example URL is `https://fabrikam-server/AzureDevOpsServer/fabrikam-collection`.
   - **Team project**: Enter only the project name. For example, enter **Fabrikam-Fiber** if the URL of your Azure DevOps Server instance is `https://fabrikam-server/AzureDevOpsServer/fabrikam-collection/Fabrikam-Fiber`.
   ::: moniker-end

   > [!IMPORTANT]
   > Don't confuse the team name with the project name, which is a common mistake. For example, if the URL you use is `https://fabrikam-server/AzureDevOpsServer/fabrikam-collection/Fabrikam-Fiber-Git/Device`, *Fabrikam-Fiber-Git* is the project name, and *Device* is the team name.

   After you successfully sign in, Power BI verifies that your credentials have the permissions that are needed to access the specified project. If any errors arise, see the [FAQs](../powerbi/data-connector-connect.md#q-a) for solutions to common problems.

## Select the Analytics view

Follow these steps to select the Analytics view:

1. Expand **Shared Views**. The Data Connector presents a list of available [Analytics views](../powerbi/what-are-analytics-views.md). Each view represents a set of data that you can pull into Power BI. You can also [create custom Analytics views](../powerbi/analytics-views-create.md).

   The following image shows the default Analytics views. Your list of views might differ based on the process model used to create your project. All views listed, except the views appended with **Today**, provide historical trend data.

   :::image type="content" source="../powerbi/media/default-views/navigator-dialog-default-views.png" alt-text="Screenshot of the Navigator dialog. The Shared Views folder is highlighted and expanded, with several default views visible.":::

1. Select the **Work Items - Last 30 days** view and wait for the preview to load. This view uses a filter to show the last 30 days of history for all work items in the project.

   > [!NOTE]
   > If you verify the view when you create it, the view should load. If the view doesn't load, it's most likely because the dataset is too large. Return to the **Analytics views** page in the web portal and open the view for editing. Adjust the filters to decrease the size of the dataset.

   :::image type="content" source="../powerbi/media/create-report/choose-view.png" alt-text="Screenshot of the Navigator dialog. The Work Items - Last 30 days view is selected and highlighted, and its preview is visible.":::

   > [!NOTE]
   > - The preview shown for any selected view in the navigator can be truncated depending on the number of fields selected and the size of the dataset. The data gets truncated only for the preview and doesn't affect the full data refresh.
   > - [Analytics views](../powerbi/what-are-analytics-views.md) don't apply filters defined by using Power BI on the server. Any filters applied in Power BI limit the data shown to end users but don't reduce the amount of data retrieved from Analytics. If the filter is intended to reduce the size of the dataset, apply it by [customizing the view](../powerbi/analytics-views-create.md).

1. Select the **Work Items - Today** view, which represents the current state of all work items in the project. Select the checkbox next to the view, and then select **Load**. Wait for the data to load. Monitor its progress through the status messages displayed under the table name. If any errors occur, refer to the [FAQs](../powerbi/data-connector-connect.md#q-a) section for solutions to common issues.

   :::image type="content" source="../powerbi/media/power-bi-data-loading-onprem.png" alt-text="Screenshot of the Load window for the Work Items - Today view. A partial progress ring and an Evaluating message are visible.":::

1. Review the data model. While the model loads, review the [dataset design for the Power BI Data Connector](../powerbi/data-connector-dataset.md).
