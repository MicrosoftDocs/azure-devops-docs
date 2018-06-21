## Deploy to a Government cloud or Azure Stack

Do this by creating a suitable service endpoint:

* [Azure Government Cloud deployment](../../../library/government-cloud.md)
* [Azure Stack deployment](../../../library/connect-to-azure.md#connect-stack)

## Deployment mechanisms

The examples above rely on our built-in [Azure App Service Deploy task](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureRmWebAppDeployment) which provides simplified integration with Azure. 

If you use a Windows agent, then this task uses Web Deploy technology to interact with the Azure web app. Web Deploy provides several convenient deployment options such as renaming locked files, excluding files from the App_Data folder during deployment, and so on.

If you use the Linux agent, then the task relies on the [Kudu REST APIs](https://github.com/projectkudu/kudu/wiki/REST-API).

The [Azure App Service Manage task](https://docs.microsoft.com/vsts/build-release/tasks/deploy/azureappservicemanage.0?view=vsts) is another task that's useful for deployment. You can use this task to start, stop, or restart the web app prior to or after deployment. This task can also be used to swap slots, install site extensions, or enable monitoring of the web app.

If the built-in tasks do not meet your needs, then you can use other methods to script your deployment. View the YAML snippets in each of the following tasks for some examples:

* [Azure Powershell task](https://docs.microsoft.com/vsts/build-release/tasks/deploy/azurepowershellv3.3?view=vsts)
* [Azure CLI task](https://docs.microsoft.com/vsts/build-release/tasks/deploy/azure-cli?view=vsts)
* [FTP task](https://docs.microsoft.com/vsts/build-release/tasks/utility/ftp-upload?view=vsts)
