## Deploy to a Government cloud or Azure Stack

Do this by creating a suitable service endpoint:

* [Azure Government Cloud deployment](../../../library/government-cloud.md)
* [Azure Stack deployment](../../../library/connect-to-azure.md#connect-stack)

## Deployment mechanisms

The examples above rely on the built-in [Azure App Service Deploy task](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureRmWebAppDeployment),
which provides simplified integration with Azure. 

If you use a Windows agent, this task uses Web Deploy technology to interact with the Azure web app.
Web Deploy provides several convenient deployment options such as renaming locked files, excluding files from the App_Data folder during deployment, and so on.

If you use the Linux agent, the task relies on the [Kudu REST APIs](https://github.com/projectkudu/kudu/wiki/REST-API).

The [Azure App Service Manage task](../../../tasks/deploy/azure-app-service-manage.md) is another task that's useful for deployment.
You can use this task to start, stop, or restart the web app prior to or after deployment.
This task can also be used to swap slots, install site extensions, or enable monitoring of the web app.

If the built-in tasks do not meet your needs, you can use other methods to script your deployment.
View the YAML snippets in each of the following tasks for some examples:

* [Azure Powershell task](../../../tasks/deploy/azure-powershell.md)
* [Azure CLI task](../../../tasks/deploy/azure-cli.md)
* [FTP task](../../../tasks/utility/ftp-upload.md)
