---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 09/16/2024
---

## Connect to an Analytics view 

1. Open Power BI Desktop.
1. Sign in to the service. First-time access requires you to sign in and have your credentials authenticated. Power BI Desktop saves your credentials so you only have to do so once.

   > [!NOTE]
   > Azure DevOps doesn't support cross-tenant scenarios using OAuth. Instead, [use service principals and managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md).

1. Select **Connect** upon verification of your credentials.

   :::image type="content" source="../powerbi/media/powerbi-successful-organizational-signin.png" alt-text="Screenshot that shows the Power BI Connection dialog.":::

1. Select **Get Data** > **Online Services**, then select **Azure DevOps (Boards only)** for cloud services or select **Azure DevOps Server (Boards only)** for on-premises. Select **Connect**. Analytics views only support queries against work items and test cases.

   :::image type="content" source="../powerbi/media/data-connector/get-data-azure-devops.png" alt-text="Screenshot that shows the Get Data flow.":::

1. Specify the basic parameters to connect to your data.

   ::: moniker range="azure-devops"
   :::image type="content" source="../powerbi/media/create-report/specify-account.png" alt-text="Screenshot that shows specifying the organization and project name.":::
   ::: moniker-end
   ::: moniker range="< azure-devops"
   :::image type="content" source="../powerbi/media/onprem-credentials.png" alt-text="Screenshot that shows specifying the organization and project name, on-premises version.":::

   - **Collection URL**: Enter the URL where your Azure DevOps Server instance is hosted. An example URL is `http://fabrikam-server/AzureDevOpsServer/fabrikam-collection`.
   - **Team project**: Enter only the project name. For example, use *Fabrikam-Fiber* if the URL of your Azure DevOps Server instance is `http://fabrikam-server/AzureDevOpsServer/fabrikam-collection/Fabrikam-Fiber`.
   ::: moniker-end

   > [!IMPORTANT]
   > Don't confuse the team name with the project name, which is a common mistake. For example, if the URL that you use is `http://fabrikam-server/AzureDevOpsServer/fabrikam-collection/Fabrikam-Fiber-Git/Device`, then *Fabrikam-Fiber-Git* is the project name and *Device* is the team name.

   After successful sign-in, Power BI verifies that your user credentials have permissions to access the specified project. If any errors arise, see the [FAQs](../powerbi/data-connector-connect.md#q-a) for solutions to the most common problems.

## Select the Analytics view

1. Expand the **Shared Views** folder, select an Analytics view, and then select **Load**. The Data Connector presents a list of available [Analytics views](../powerbi/what-are-analytics-views.md). Each view represents a set of data that you can pull into Power BI. You can also [create custom Analytics views](../powerbi/analytics-views-create.md).

   The following image shows the default Analytics views. Your list of views might differ based on the process model used to create your project. All views listed, except the views appended with "Today," provide historical trend data.

   In the following example, we select **Stories - Last 30 days**, which filters for product backlog items.

   :::image type="content" source="/azure/devops/report/powerbi/media/create-report/choose-view.png" alt-text="Screenshot that shows the Navigator dialog with the Choose an Analytics view.":::

   > [!NOTE]
   > Because you verified the view in the previous section, the view should load. If the view doesn't load, it's most likely because the dataset is too large. Return to the view under the **Analytics view** in the web portal and adjust the filters to decrease the size of the dataset.

1. Select the view.

   :::image type="content" source="/azure/devops/report/powerbi/media/default-views/navigator-dialog-default-views.png" alt-text="Screenshot that shows the Navigator dialog with default views.":::

   > [!NOTE]
   > The preview shown for any selected views in the navigator can be truncated depending on the number of fields selected and the size of the dataset. The data is truncated only for the preview and won't affect the full data refresh.

   - Select the **Work Items - Today** table and wait for the preview to load. It represents the current state of all work items in the project.
   - Select the checkbox next to the **Work Items - Today** table and select **Load**.

   > [!NOTE]
   > [Analytics views](../powerbi/what-are-analytics-views.md) don't apply filters defined by using Power BI on the server. Any filters applied in Power BI limit the data shown to end users but don't reduce the amount of data retrieved from Analytics. If the filter is intended to reduce the size of the dataset, apply it by [customizing the view](../powerbi/analytics-views-create.md).

1. Wait for the data to load. You can observe its progress by looking at the status messages, which appear directly under the table name. If you see any errors, see the [FAQs](../powerbi/data-connector-connect.md#q-a) section for solutions to the most common problems.

   :::image type="content" source="/azure/devops/report/powerbi/media/power-bi-data-loading-onprem.png" alt-text="Screenshot that shows the Apply query changes loading dialog.":::

1. Review the Data model. While the model loads, review the [dataset design for the Power BI Data Connector](../powerbi/data-connector-dataset.md).
