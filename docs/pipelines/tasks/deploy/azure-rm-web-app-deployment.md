---
title: Azure App Service Deploy task
description: The Azure App Service Deploy task is used to update Azure App Services to deploy Web Apps, Functions, and WebJobs.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 6D557DD5-9373-47AD-AA2E-72B6DE264F66
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'vsts'
---

# Azure App Service Deploy task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy to a range of App Services on Azure.
The task works on cross-platform agents running Windows, Linux, or Mac;
and uses several different [underlying deployment technologies](#deploy-methods).

The task works for [ASP.NET](../../apps/aspnet/build-aspnet-4.md),
[ASP.NET Core](../../languages/dotnet-core.md),
[PHP](../../languages/php.md),
[Java](../../languages/java.md),
[Python](../../languages/python.md),
[Go](../../languages/go.md), and
[Node.js](https://www.visualstudio.com/docs/release/examples/nodejs/node-to-azure-webapps) based web applications.

The task can be used to deploy to a range of Azure App Services such as:

* [Web Apps on both Windows and Linux](https://azure.microsoft.com/documentation/articles/app-service-web-overview/)
* [Web Apps for Containers](https://docs.microsoft.com/azure/app-service/containers/app-service-linux-intro)
* [Function Apps](https://docs.microsoft.com/azure/azure-functions/)
* [WebJobs](https://azure.microsoft.com/blog/webjobs-goes-into-full-production/)
* Apps configured under [Azure App Service Environments](https://docs.microsoft.com/azure/app-service/environment/intro)

::: moniker range="> tfs-2018"

## Pre-requisites for the task

The following pre-requisites must be set up in the target machine(s) in order for the task to work correctly.

* **App Service instance**. The task is used to deploy a Web App project or Azure Function project to an existing Azure App Service instance, which must exist before the task runs.
  The App Service instance can be created from the [Azure portal](https://azure.microsoft.com/documentation/videos/azure-app-service-web-apps-with-yochay-kiriaty/)
  and [configured](https://azure.microsoft.com/documentation/articles/web-sites-configure/) there.
  Alternatively, the [Azure PowerShell task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzurePowerShell) can be used to run
  [AzureRM PowerShell scripts](https://msdn.microsoft.com/library/mt619237.aspx) to provision and configure the Web App.

* **Azure Subscription**. To deploy to Azure, an Azure subscription must be [linked to the pipeline](../../library/connect-to-azure.md).
  The task does not work with the Azure Classic service connection, and it will not list these connections in the settings of the task.

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/AzureRmWebAppDeploymentV4.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Parameter</th><th>Description</th></tr></thead>
<tr><td>Connection type</td><td>connectionType</td><td>(Required) Select **Azure Resource Manager**.</td></tr>
<tr><td>Azure subscription</td><td>azureSubscription</td><td>(Required) Select your Azure Resource Manager subscription. If none exists, choose **Manage** to navigate to the Services page in the administration section. Choose **New Service Endpoint** and select **Azure Resource Manager** from the list, then enter the required details.</td></tr>
<tr><td>Publish profile path</td><td>publishProfilePath</td><td>(Required) The path to the file containing the publishing information.</td></tr>
<tr><td>Publish profile password</td><td>publishProfilePassword</td><td>(Required) The password for the profile file. Consider storing the password in a secret variable and using that variable here. Example: `$(Password)`.</td></tr>
<tr><td>App Service type</td><td>appType</td><td>(Required) Select the Azure App Service type. The app types supported are Function App, Web App on Windows, Web App on Linux, Web App for Containers, and Azure App Service Environments.</td></tr>
<tr><td>App Service name</td><td>webAppName</td><td>(Required) Select an existing Azure App Service or enter the name of the Web App if it was provisioned dynamically using the [Azure PowerShell task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzurePowerShell) and [AzureRM PowerShell scripts](https://msdn.microsoft.com/library/mt619237.aspx).</td></tr>
<tr><td>Deploy to Slot or App Service Environment</td><td>deployToSlotOrASE</td><td>(Optional) Select this option to deploy to an existing slot other than the Production slot. Do not select it if the Web project is being deployed to the Production slot. The Web App itself is the Production slot.</td></tr>
<tr><td>Resource group</td><td>resourceGroupName</td><td>(Required) Select the Azure Resource Group that contains the Azure App Service, or enter the name of the Azure Resource Group if has been dynamically provisioned using the [Azure Resource Group Deployment task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/DeployAzureResourceGroup) or [Azure PowerShell task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzurePowerShell). This is a required parameter if the option **Deploy to Slot** has been selected.</td></tr>
<tr><td>Slot</td><td>slotName</td><td>(Required) Select the slot to deploy the Web project to, or enter the name of the slot if has been dynamically provisioned using [Azure Resource Group Deployment task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/DeployAzureResourceGroup) or [Azure PowerShell task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzurePowerShell). This is a required parameter if the option **Deploy to Slot** has been selected.</td></tr>
<tr><td>Registry or Namespace</td><td>dockerNamespace</td><td>(Required) A globally unique top-level domain name for your specific registry or namespace. Note: the fully-qualified image name will be of the format: **{registry or namespace}/{repository}:{tag}**. For example, **myregistry.azurecr.io/nginx:latest**.</td></tr>
<tr><td>Image</td><td>dockerRepository</td><td>(Required) Name of the repository where the container images are stored. Note: the fully-qualified image name will be of the format: **{registry or namespace}/{repository}:{tag}**. For example, **myregistry.azurecr.io/nginx:latest**.</td></tr>
<tr><td>Tag</td><td>dockerImageTag</td><td>(Optional) Tags are optional, but are the mechanism that registries use to apply version information to Docker images. Note: the fully-qualified image name will be of the format: **{registry or namespace}/{repository}:{tag}**. For example, **myregistry.azurecr.io/nginx:latest**.</td></tr>
<tr><td>Virtual application</td><td>virtualApplication</td><td>(Optional) Specify the name of the Virtual Application that has been configured in the Azure portal. This option is not required for deployments to the website root. The Virtual Application must have been [configured](https://azure.microsoft.com/documentation/articles/web-sites-configure/) before deployment of the web project.</td></tr>
<tr><td>Package or folder</td><td>packageForLinux</td><td>(Required) Location of the Web App zip package or folder on the automation agent, or on a UNC path accessible to the automation agent such as **\\\\BudgetIT\\Web\\Deploy\\Fabrikam.zip**. Predefined system variables and wild cards such as **$(System.DefaultWorkingDirectory)\\\*.zip** can be also used here. Despite the name of the YAML property, this setting applies to both Linux and Windows apps.</td></tr>
<tr><td>Runtime Stack</td><td>runtimeStack</td><td>(Required) Web App on Linux offers two different options to publish your application: Custom image deployment (Web App for Containers) and App deployment with a built-in platform image (Web App on Linux). You will see this parameter only if you selected **Linux Web App** as the **App type** option.</td></tr>
<tr><td>Startup command </td><td>startupCommand</td><td>(Optional) The start up command for the container. For example, if you are using PM2 process manager for Nodejs, you can specify the PM2 file here.</td></tr>
<tr><td>Deployment script type</td><td>scriptType</td><td>(Optional) Customize the deployment by providing a script that runs on the Azure App Service after successful deployment. Choose inline deployment script or the path and name of a script file. [Learn more](https://go.microsoft.com/fwlink/?linkid=843471).</td></tr>
<tr><td>Inline Script</td><td>inlineScript</td><td>(Required) The script to execute. See [this example](#sample-dep-script).</td></tr>
<tr><td>Deployment script path</td><td>scriptPath</td><td>(Required) The path and name of the script to execute.</td></tr>
<tr><td>Generate web.config parameters for Python, Node.js and Go apps</td><td>webConfigParameters</td><td>(Optional) A standard **Web.config** will be generated and deployed to the Azure App Service if the app does not already have one. For example, for a [Nodejs application](https://github.com/projectkudu/kudu/wiki/Using-a-custom-web.config-for-Node-apps), Web.config will have startup file and **iis_node** module values. Similarly, for Python (Bottle, Django, or Flask), Web.config will have details of the WSGI handler, Python path, and more. The task will generate a new Web.config only when the artifact package or folder does not contain an existing Web.config.<br /><br />Use this option to edit the values (such as the startup file) in the task-generated **Web.config file**. The default values populated by the task can be overridden by passing in Web.config parameters. This  feature is for _only_ the generated Web.config file. It is useful, for example, when the [Azure App Service Manage task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureAppServiceManage) is used to install a specific Python version by using extensions, or when you want to provide a different startup file for Node.js. For Python, the path can be set as an output variable of the Azure App Service Manage task and then set as the Python path in the Web.config generated by this deploy task. You can try out this feature by selecting any Python, Nodejs, PHP release definition template. [Learn more](https://go.microsoft.com/fwlink/?linkid=843469).</td>
<tr><td>App settings</td><td>appSettings</td><td>(Optional) Edit web app application settings using the syntax `-key value`. Values containing spaces must be enclosed in double quotes. Examples: `-Port 5000 -RequestTimeout 5000` and `-WEBSITE_TIME_ZONE "Eastern Standard Time"`</td></tr>
<tr><td>Configuration settings</td><td>configurationSettings</td><td>(Optional) Edit web app configuration settings using the syntax `-key value`. Values containing spaces must be enclosed in double quotes. Example: `-phpVersion 5.6 -linuxFxVersion: node|6.11`</td></tr>
<tr><td>Publish using Web Deploy</td><td>deploymentType</td><td>(Optional) Select Web Deploy, Container, Zip Deploy, RunFromZip, or Kudu REST APIs. By default, when this option is not selected, the task attempts to select the appropriate deployment technology based on the input package, app service type, and agent OS.</td></tr>
<tr><td>Take App Offline</td><td>takeAppOfflineFlag</td><td>(Optional) Select this option to take the Azure App Service offline by placing an **app\_offline.htm** file in the root directory before the synchronization operation begins. The file will be removed after the synchronization completes successfully.</td></tr>
<tr><td>SetParameters file</td><td>setParametersFile</td><td>(Optional) The file is used to override the default settings in the Web Deploy zip package file, such as the IIS Web application name or the database connection string. This enables a single package to be deployed across multiple environments such as dev, test, staging, and production by using a specific parameter file for each environment.</td></tr>
<tr><td>Remove additional files at destination</td><td>removeAdditionalFilesFlag</td><td>(Optional) Select this option to delete the files in the Azure App Service that have no matching files in the Web App zip package. This ensures that, during deployment, any additional files in the Azure App Service are deleted, and the only files remaining are those in the Web App zip package. This will also remove all files related to any extension (for example, Application Insights) installed on this Azure App Service. To prevent this, enable **Exclude files from the App\_Data folder** as well.</td></tr>
<tr><td>Exclude files from the App\_Data folder</td><td>excludeFilesFromAppDataFlag</td><td>(Optional) Select this option to prevent files in the App\_Data folder from being deployed to the Azure App Service. This is useful if a local database or a WebJob has previously been deployed to the Azure App Service and should not be deleted in subsequent deployments of the Web project.</td></tr>
<tr><td>Additional arguments</td><td>additionalArguments</td><td>(Optional) Additional Web Deploy arguments that will be appended to the MSDeploy command while deploying the Azure Web App such as `-disableLink:AppPoolExtension` and `-disableLink:ContentExtension`. This is useful for enabling and disabling rules, and for skipping synchronization of specific folders ([more examples](https://go.microsoft.com/fwlink/?linkid=838471)).</td></tr>
<tr><td>Rename locked files</td><td>renameFilesFlag</td><td>(Optional) Select this option to enable msdeploy flag MSDEPLOY\_RENAME\_LOCKED\_FILES=1 in Azure App Service application settings. If set it enables msdeploy to rename locked files that are locked during app deployment</td></tr>
<tr><td>XML transformation</td><td>enableXmlTransform</td><td>(Optional) The configuration transformations will be run for **\*.Release.config** and **\*.{EnvironmentName}.config** on the **\*.config** files. Configuration transformations run before variable substitution. XML transformations are supported only for Windows platform. [Learn more](https://docs.microsoft.com/vsts/build-release/tasks/transforms-variable-substitution?view=vsts#xml-transformation).</td></tr>
<tr><td>XML variable substitution</td><td>enableXmlVariableSubstitution</td><td>(Optional) Variables defined in the build or release pipeline will be matched against the 'key' or 'name' entries in the **appSettings**, **applicationSettings**, and **connectionStrings** sections of any configuration file and **parameters.xml** file. Variable substitution runs after configuration transformations. Note: if the same variables are defined in the release pipeline and in the stage, the stage variables will supersede the release pipeline variables. [Learn more](https://docs.microsoft.com/vsts/build-release/tasks/transforms-variable-substitution?view=vsts#xml-variable-substitution).</td></tr>
<tr><td>JSON variable substitution</td><td>jSONFiles</td><td>(Optional) Provide a new line separated list of JSON files to substitute the variable values. Files names must be relative to the root folder. To substitute JSON variables that are nested or hierarchical, specify them using JSONPath expressions. For example, to replace the value of **ConnectionString** in the sample below, define a variable named **Data.DefaultConnection.ConnectionString** in the build or release pipeline (or release pipelines stage).<br/><br/>{<br/>&nbsp;&nbsp;"Data": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"DefaultConnection": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ConnectionString": "Server=(localdb)\\SQLEXPRESS;Database=MyDB;Trusted\_Connection=True"<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/> }<br/><br/>Variable substitution runs after configuration transformations. Note: build and release pipeline variables are excluded from substitution. [Learn more](https://docs.microsoft.com/vsts/build-release/tasks/transforms-variable-substitution?view=vsts#json-variable-substitution).</td></tr>
</table>

[!INCLUDE [control-options-arguments](../_shared/control-options-arguments.md)]

## Output Variables

* **Web App Hosted URL:** Provide a name, such as `FabrikamWebAppURL` for the variable populated with the Azure App Service Hosted URL.
  The variable can be used as `$(variableName)`, for example `$(FabrikamWebAppURL)`, to refer to the hosted URL of the Azure App Service
  in subsequent tasks.

## Usage notes


* The task works with the [Azure Resource Manager APIs](https://msdn.microsoft.com/library/azure/dn790568.aspx) only.
* To ignore SSL errors, define a variable named `VSTS_ARM_REST_IGNORE_SSL_ERRORS` with value `true` in the release pipeline.
* For .NET apps targeting Web App on Windows, avoid deployment failure with the error `ERROR_FILE_IN_USE` by ensuring that
  **Rename locked files** and **Take App Offline** settings are enabled. For zero downtime deployment, use the slot swap option.
* When deploying to an App Service that has Application Insights configured, and you have enabled **Remove additional files at destination**,
  ensure you also enable **Exclude files from the App\_Data folder** in order to maintain the Application insights extension in
  a safe state. This is required because the Application Insights continuous web job is installed into the App\_Data folder. 

<a name="sample-dep-script"></a>

## Sample deployment script

The task provides an option to customize the deployment by providing
a script that will run on the Azure App Service after the app's artifacts
have been successfully copied to the App Service. You can choose to provide
either an inline deployment script or the path and name of a script file in
your artifact folder.

This is very useful when you want to restore your
application dependencies directly on the App Service. Restoring packages for
Node, PHP, and Python apps helps to avoid timeouts when the application
dependency results in a large artifact being copied over from the agent to the
Azure App Service.

An example of a deployment script is:

```script
@echo off
if NOT exist requirements.txt (
 echo No Requirements.txt found.
 EXIT /b 0
)
if NOT exist "$(PYTHON_EXT)/python.exe" (
 echo Python extension not available >&2
 EXIT /b 1
)
echo Installing dependencies
call "$(PYTHON_EXT)/python.exe" -m pip install -U setuptools
if %errorlevel% NEQ 0 (
 echo Failed to install setuptools >&2
 EXIT /b 1
)
call "$(PYTHON_EXT)/python.exe" -m pip install -r requirements.txt
if %errorlevel% NEQ 0 (
 echo Failed to install dependencies>&2
 EXIT /b 1
)
```

<a name="deploy-methods"></a>

## Deployment methods

Several deployment methods are available in this task. Web Deploy (msdeploy.exe) is the default.
To change the deployment option, expand **Additional Deployment Options** and enable **Select deployment method**
to choose from additional package-based deployment options.

Based on the type of Azure App Service and agent, the task chooses a suitable deployment technology. The different deployment technologies used by the task are:

* [Web Deploy](#web-deploy-notes) 
* [Kudu REST APIs](#kudu-notes)
* [Container Registry](#acr-notes)
* [Zip Deploy](#zip-deploy-notes)
* [Run From Zip](#runfromzip-notes)
* Deploy **.war** files

By default, the task tries to select the appropriate deployment technology
based on the input package type, App Service type, and agent operating system.

On Windows-based agents:

* For msdeploy (MSBuild-generated package) package, use Web Deploy 
* When post-deployment script is provided, use Zip Deploy 
* When the App Service type is Web App on Linux App, use Zip Deploy 
* If a WAR file is provided, use War Deploy 
* If a JAR file is provided, use Run From Zip 
* For all others, use Run From Zip (through Zip Deploy) 

On non-Windows agents (for any App Service type), the task relies on
[Kudu REST APIs](#kudu-notes)
to deploy the app.

<a name="web-deploy-notes"></a>

### Web Deploy

[Web Deploy](https://www.iis.net/downloads/microsoft/web-deploy) (msdeploy.exe) can be used to deploy a Web App on Windows
or a Function Appan app to the Azure App Service using a Windows agent.
Web Deploy is feature-rich and offers options such as:

* **Rename locked files:** Rename any file that is still in use by the web server by enabling the msdeploy flag
  MSDEPLOY\_RENAME\_LOCKED\_FILES=1 in the Azure App Service settings.
  This option, if set, enables msdeploy to rename files that are locked during app deployment.

* **Remove additional files at destination:** Deletes files in the Azure App Service that have no matching files
  in the App Service artifact package or folder being deployed.

* **Exclude files from the App\_Data folder:** Prevent files in the App\_Data folder (in the artifact package/folder being deployed)
  being deployed to the Azure App Service

* **Additional Web Deploy arguments:** Arguments that will be applied when deploying the Azure App Service.
  Example: `-disableLink:AppPoolExtension -disableLink:ContentExtension`.
  For more examples of Web Deploy operation settings, see [Web Deploy Operation Settings](https://go.microsoft.com/fwlink/?linkid=838471).

Install Web Deploy on the agent using the [Microsoft Web Platform Installer](https://www.microsoft.com/web/gallery/install.aspx?appid=wdeploynosmo).
Web Deploy 3.5 must be installed without the bundled SQL support. There is no need to choose any custom settings when installing Web Deploy.
Web Deploy is installed at C:\\Program Files (x86)\\IIS\\Microsoft Web Deploy V3.

<a name="kudu-notes"></a>

### Kudu REST APIs

[Kudu REST APIs](https://github.com/projectkudu/kudu/wiki/REST-API) work on both Windows and Linux automation agents when the target is a
Web App on Windows, Web App on Linux (built-in source), or Function App. The task uses Kudu to copy files to the Azure App service.

<a name="acr-notes"></a>

### Container Registry

Works on both Windows and Linux automation agents when the target is a Web App for Containers. The task updates the app by setting the appropriate
container registry, repository, image name, and tag information. You can also use the task to pass a startup command for the container image.

<a name="zip-deploy-notes"></a>

### Zip Deploy

Creates a .zip deployment package and deploys the file contents to the **wwwroot** folder of the App Service or Function App in Azure.
This option overwrites all existing contents in the **wwwroot** folder. For more information, see
[Zip deployment for Azure Functions](https://docs.microsoft.com/azure/azure-functions/deployment-zip-push).

<a name="runfromzip-notes"></a>

### RunFromZip

Creates the same deployment package as Zip Deploy. However, instead of deploying files to the **wwwroot** folder, the entire package is
mounted by the Functions runtime and files in the **wwwroot** folder become read-only. For more information, see
[Run your Azure Functions from a package file](https://docs.microsoft.com/azure/azure-functions/run-functions-from-deployment-package).

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
