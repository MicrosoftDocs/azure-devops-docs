---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 08/10/2020
---


## Connect to an Analytics view 

1. Open Power BI Desktop.
2. Sign in to the service. Upon first-time access, you're required to sign in and have your credentials authenticated - choose between **Windows** or **Personal Access Token** to authenticate. Power BI Desktop saves your credentials so you only have to do so once.
3. Select **Connect** upon verification of your credentials. 

   :::image type="content" source="../powerbi/media/powerbi-successful-organizational-signin.png" alt-text="Screenshot of Power BI Connection dialog.":::
 
4. Select **Get Data** > **Online Services**, **Azure DevOps (Boards only)** for cloud services or **Azure DevOps Server (Boards only)** for on-premises > **Connect**.  Analytics views only support queries against work items and test cases.  

   :::image type="content" source="../powerbi/media/data-connector/get-data-azure-devops.png" alt-text="Screenshot of Get data flow."::: 

5. **Specify the basic parameters to connect to your data**. 

	::: moniker range="azure-devops"
	:::image type="content" source="../powerbi/media/create-report/specify-account.png" alt-text="Screenshot of Specify organization and project name.":::
	::: moniker-end
	::: moniker range="< azure-devops"
	:::image type="content" source="../powerbi/media/onprem-credentials.png" alt-text="Screenshot of Specify organization and project name, on-premises version.":::
	- For *Collection URL*, enter the URL where your Azure DevOps Server instance is hosted. For example, an example URL is `http://fabrikam-server/AzureDevOpsServer/fabrikam-collection`.
	- For *Team project*, enter just the project name. For example, use `Fabrikam-Fiber` if the URL of your Azure DevOps Server instance is `http://fabrikam-server/AzureDevOpsServer/fabrikam-collection/Fabrikam-Fiber`.
	::: moniker-end

     > [!IMPORTANT]  
     > Don't confuse the team name with the project name, which is a common mistake. 
     > For example, if the URL you use is "`http://fabrikam-server/AzureDevOpsServer/fabrikam-collection/Fabrikam-Fiber-Git/Device`", then `Fabrikam-Fiber-Git` is the project name, whereas `Device` is the team name.

	Upon successful sign in, Power BI verifies if your user credentials have permissions to access the specified project. If any errors arise, see the [Q & A](../powerbi/data-connector-connect.md#q-a) section as it covers the most common problems. 

## Select the Analytics view

1. Expand the **Shared Views** folder, choose an Analytics view, and then choose **Load**. The Data Connector presents a list of available [Analytics views](../powerbi/what-are-analytics-views.md). Each view represents a set of data that you can pull into Power BI. You can also [create custom Analytics views](../powerbi/analytics-views-create.md).

	The following image shows the default Analytics views. Your list of views might differ based on the process model used to create your project. All views listed, except those appended with "Today", provide historical trend data. 

	Here we choose **Stories - Last 30 days**, which filters for product backlog items.

	![Screenshot of Navigator dialog, Choose an Analytics view.](/azure/devops/report/powerbi/media/create-report/choose-view.png) 
 
	> [!NOTE]  
	> Since you verified the view in the previous section, the view should load. However, if the view doesn't load, it's most likely because the dataset is too large. Return to the view under the **Analytics view** in the web portal and adjust the filters to decrease the size of the dataset. 

2. Select the view. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of Navigator dialog, default views.](/azure/devops/report/powerbi/media/default-views/navigator-dialog-default-views.png)

	> [!NOTE]
	> The preview shown for any selected views in the navigator can be truncated depending on the number of fields selected and the size of the dataset. The data is truncated only for the preview and won't impact the full data refresh.

	- Choose **Work Items - Today** table and wait for the preview to load.
	It represents the current state of all Work Items in the project.
	- Select the checkbox next to **Work Items - Today** table and choose **Load**. 

	> [!NOTE]
	> [Analytics views](../powerbi/what-are-analytics-views.md) don't apply filters defined using Power BI on the server. Any filters applied in Power BI limit the data shown to end users but don't reduce the amount of data retrieved from Analytics. If the filter is intended to reduce the size of the dataset, it should be applied by [customizing the view](../powerbi/analytics-views-create.md).  

3. Wait for the data to load. You can observe its progress by looking at the status messages, which appear directly under the table name. Should you see any errors, refer to the [Q & A](../powerbi/data-connector-connect.md#q-a) section as it covers the most common problems.  

	> [!div class="mx-imgBorder"]
	> ![Screenshot of Apply query changes loading dialog.](/azure/devops/report/powerbi/media/power-bi-data-loading-onprem.png)

4. Review the Data model. While the model loads, review the [Dataset design for the Power BI Data Connector](../powerbi/data-connector-dataset.md).
