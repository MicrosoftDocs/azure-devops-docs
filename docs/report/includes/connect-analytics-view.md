---
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 08/10/2020
---


## Connect to an Analytics view 

1. Open Power BI Desktop.  

1. **Sign in to the service**. Upon first-time access, you're required to sign in and have your credentials authenticated. Power BI Desktop saves your credentials so you only have to do this once.

	Choose between these two authentication options: 
   - Select *Windows* if you want to sign in using Windows.  
   - Select *Personal Access Token* if you want to use a personal access token.

     > [!div class="mx-imgBorder"]
     > ![Sign in dialog](/azure/devops/report/powerbi/media/powerbi-windows-login-onprem.png) 

1. Choose **Connect** upon verification of your credentials. 

	> [!div class="mx-imgBorder"]  
	> ![Connect dialog](/azure/devops/report/powerbi/media/powerbi-successful-organizational-signin.png) 
 
1. Choose **Get Data**, **Online Services**, **Azure DevOps Server**, and then choose **Connect**. 

    > [!div class="mx-imgBorder"]  
    > ![Connect to data](/azure/devops/report/powerbi/media/data-connector/get-data-azure-devops.png)  

2. **Specify the basic parameters to connect to your data**. 

	::: moniker range="azure-devops"
	![Specify organization and project name.](/azure/devops/report/powerbi/media/create-report/specify-account.png) 
	::: moniker-end
	::: moniker range="< azure-devops"
	![Specify organization and project name, on-premises version.](/azure/devops/report/powerbi/media/onprem-cardentials.png) 

	- For *Collection URL*, enter the URL where your Azure DevOps Server instance is hosted. For example, an example URL is "`http://fabrikam-server/AzureDevOpsServer/fabrikam-collection`".
	- For *Team project*, enter just the project name (e.g. use `Fabrikam-Fiber` if the URL of your Azure DevOps Server instance is "`http://fabrikam-server/AzureDevOpsServer/fabrikam-collection/Fabrikam-Fiber`").

	::: moniker-end

     > [!IMPORTANT]  
     > Don't confuse the team name with the project name, a common mistake. 
     > If the URL you use on the daily basis is "`http://fabrikam-server/AzureDevOpsServer/fabrikam-collection/Fabrikam-Fiber-Git/Device`", then `Fabrikam-Fiber-Git` is the project name, whereas `Device` is the team name.

	Upon successful sign in, Power BI verifies if your user credentials have the right permissions to access the specified project. If any errors arise, refer to the [Q & A](../powerbi/data-connector-connect.md#q-a) section as it covers the most common problems. 
 

## Select the Analytics view

1. Expand the **Shared Views** folder, choose an Analytics view, and then choose **Load**. The Data Connector presents a list of available [Analytics Views](../powerbi/what-are-analytics-views.md). Each view represents a set of data that you can pull into Power BI. You can also [create custom Analytics Views](../powerbi/analytics-views-create.md).

	 The image below shows the default Analytics views. Your list of views may differ based on the process model used to created your project. All views listed, except those appended with "Today", will provide historical trend data. 

	Here we choose **Stories - Last 30 days**. This view filters for product backlog items.

	![Navigator dialog, Choose an Analytics view](/azure/devops/report/powerbi/media/create-report/choose-view.png) 
 
	> [!NOTE]  
	> Because you verified the view in the previous section, the view should load. However, if the view won't load, it is most likely because the dataset is too large. Return to the view under the **Analytics view** in the web portal and adjust the filters to decrease the size of the dataset. 

1. **Select the view**. 

	> [!div class="mx-imgBorder"]
	> ![Navigator dialog, default views](/azure/devops/report/powerbi/media/default-views/navigator-dialog-default-views.png)

	> [!NOTE]
	> The preview shown for any selected views in the navigator can be truncated depending on the number of fields selected and the size of the dataset. The data is truncated only for the preview and won't impact the full data refresh.

	Choose **Work Items - Today** table and wait for the preview to load.
	It represents the current state of all Work Items in the project.

	Select the checkbox next to **Work Items - Today** table and choose **Load**. 

	> [!NOTE]
	> [Analytics Views](../powerbi/what-are-analytics-views.md) do not apply filters that have defined using Power BI on the server. Any filters applied in Power BI will limit the data shown to end users but will not reduce the amount of data retrieved from Analytics. If the filter is intended to reduce the size of the dataset, it should be applied by [customizing the view](../powerbi/analytics-views-create.md).  

2. **Wait for the data to load**. You can observe its progress by looking at the status messages, which appear directly under 
	the table name. Should you see any errors, refer to the [Q & A](../powerbi/data-connector-connect.md#q-a) section as it covers the most common problems.  

	> [!div class="mx-imgBorder"]
	> ![Apply query changes loading dialog](/azure/devops/report/powerbi/media/power-bi-data-loading-onprem.png)

3. **Review the Data model**. While the model loads, review the [Dataset design for the Power BI Data Connector](../powerbi/data-connector-dataset.md).