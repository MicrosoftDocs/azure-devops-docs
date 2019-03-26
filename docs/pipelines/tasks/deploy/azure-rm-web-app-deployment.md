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
ms.date: 03/26/2019
monikerRange: '> tfs-2018'
---

# Azure App Service Deploy task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy to a range of App Services on Azure.
The task works on cross-platform agents running Windows, Linux, or Mac 
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
* [Function Apps on both Windows and Linux](https://docs.microsoft.com/azure/azure-functions/)
* [Function Apps for Containers](https://docs.microsoft.com/en-us/azure/azure-functions/)
* [WebJobs](https://azure.microsoft.com/blog/webjobs-goes-into-full-production/)
* Apps configured under [Azure App Service Environments](https://docs.microsoft.com/azure/app-service/environment/intro)

## Prerequisites for the task

The following prerequisites must be set up in the target machine(s) for the task to work correctly.

* **App Service instance**. The task is used to deploy a Web App project or Azure Function project to an existing Azure App Service instance, which must exist before the task runs.
  The App Service instance can be created from the [Azure portal](https://azure.microsoft.com/documentation/videos/azure-app-service-web-apps-with-yochay-kiriaty/)
  and [configured](https://azure.microsoft.com/documentation/articles/web-sites-configure/) there.
  Alternatively, the [Azure PowerShell task](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzurePowerShell) can be used to run
  [AzureRM PowerShell scripts](https://msdn.microsoft.com/library/mt619237.aspx) to provision and configure the Web App.

* **Azure Subscription**. To deploy to Azure, an Azure subscription must be [linked to the pipeline](../../library/connect-to-azure.md).
  The task does not work with the Azure Classic service connection, and it will not list these connections in the settings of the task.

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>ConnectionType</code><br/>(Connection type)</td><td>(Required) Select the service connection type to use to deploy the Web App.<br/>Default value: AzureRM</td></tr>
<tr><td><code>Connected<br/>ServiceName</code><br/>(Azure subscription)</td><td>(Required if ConnectionType = AzureRM) Select the Azure Resource Manager subscription for the deployment.</td></tr>
<tr><td><code>PublishProfilePath</code><br/>(Publish profile path)</td><td>(Required if ConnectionType = PublishProfile) The path to the file containing the publishing information.<br/>Default value:<code>$(System.DefaultWorkingDirectory)/&#42;&#42;/&#42;.pubxml</code></td></tr>
<tr><td><code>PublishProfilePassword</code><br/>(Publish profile password)</td><td>(Required if ConnectionType = PublishProfile) The password for the profile file. Consider storing the password in a secret variable and using that variable here. Example: $(Password)</td></tr>
<tr><td><code>WebAppKind</code><br/>(App Service type)</td><td>(Required if ConnectionType = AzureRM) Choose from Web App On Windows, Web App On Linux, Web App for Containers, Function App, Function App on Linux, Function App for Containers and Mobile App <br/>Default value: webApp</td></tr>
<tr><td><code>WebAppName</code><br/>(App Service name)</td><td>(Required if ConnectionType = AzureRM) Enter or select the name of an existing Azure App Service. Only App Services based on the selected app type will be listed.</td></tr>
<tr><td><code>DeployTo<br/>SlotOrASEFlag</code><br/>(Deploy to Slot or App Service Environment)</td><td>(Optional) Select the option to deploy to an existing deployment slot or Azure App Service environment. For both the targets, the task requires a Resource Group name.<br />If the deployment target is a slot, by default the deployment is to the <b>production</b> slot. Any other existing slot name can be provided.<br />If the deployment target is an Azure App Service environment, leave the slot name as <b>production</b> and specify just the Resource Group name.<br/>Default value: false</td></tr>
<tr><td><code>ResourceGroupName</code><br/>(Resource group)</td><td>(Required if DeployToSlotOrASEFlag = true) The Resource Group name is required when the deployment target is either a deployment slot or an App Service environment. Enter or select the Azure Resource Group that contains the Azure App Service specified above.</td></tr>
<tr><td><code>SlotName</code><br/>(Slot)</td><td>(Required, if DeployToSlotOrASEFlag = true) Enter or select an existing slot other than the <b>production</b> slot.<br/>Default value: production</td></tr>
<tr><td><code>DockerNamespace</code><br/>(Registry or Namespace)</td><td>(Required if WebAppKind = webAppContainer <br/>or WebAppkind = functionAppContainer) A globally unique top-level domain name for your specific registry or namespace. <b>Note</b>: the fully-qualified image name will be of the format: <b>{registry or namespace}/{repository}:{tag}</b>. For example, <b>myregistry.azurecr.io/nginx:latest</b></td></tr>
<tr><td><code>DockerRepository</code><br/>(Image)</td><td>(Required if WebAppKind = webAppContainer <br/>or WebAppkind = functionAppContainer) Name of the repository where the container images are stored. <b>Note:</b> the fully-qualified image name will be of the format: <b>{registry or namespace}/{repository}:{tag}</b>. For example, <b>myregistry.azurecr.io/nginx:latest</b></td></tr>
<tr><td><code>DockerImageTag</code><br/>(Tag)</td><td>(Optional) Tags are optional, but are the mechanism that registries use to apply version information to Docker images. <b>Note:</b> the fully-qualified image name will be of the format: <b>{registry or namespace}/{repository}:{tag}</b>. For example, <b>myregistry.azurecr.io/nginx:latest</b></td></tr>
<tr><td><code>VirtualApplication</code><br/>(Virtual application)</td><td>(Optional) Specify the name of the Virtual Application that has been configured in the Azure portal. This option is not required for deployments to the website root. The Virtual Application must have been [configured](https://azure.microsoft.com/documentation/articles/web-sites-configure/) before deployment of the web project.</td></tr>
<tr><td><code>Package</code><br/>(Package or folder)</td><td>(Required if ConnectionType = PublishProfile or WebAppKind = webApp, apiApp, functionApp, mobileApp, webAppLinux, or functionAppLinux) File path to the package, or to a folder containing App Service contents generated by MSBuild, or to a compressed zip or war file.<br />[Build variables](../../build/variables.md) or [release variables](../../release/variables.md#default-variables)) and wildcards are supported. For example, <code>$(System.DefaultWorkingDirectory)/&#42;&#42;/&#42;.zip</code> or <code>$(System.DefaultWorkingDirectory)/&#42;&#42;/&#42;.war</code><br/>Default value: <code>$(System.DefaultWorkingDirectory)/&#42;&#42;/&#42;.zip</code></td></tr>
<tr><td><code>RuntimeStack</code><br/>(Runtime Stack)</td><td>(Optional) Select the framework and version. This is for WebApp for Linux.</td></tr>
<tr><td><code>RuntimeStackFunction</code><br/>(Runtime Stack)</td><td>(Optional) Select the framework and version. This is for Function App on Linux.</td></tr>
<tr><td><code>StartupCommand</code><br/>(Startup command)</td><td>(Optional) Enter the start up command.</td></tr>
<tr><td><code>ScriptType</code><br/>(Deployment script type)</td><td>(Optional) Customize the deployment by providing a script that runs on the Azure App Service after successful deployment. Choose inline deployment script or the path and name of a script file. [Learn more](https://go.microsoft.com/fwlink/?linkid=843471).</td></tr>
<tr><td><code>InlineScript</code><br/>(Inline Script)</td><td>(Required if ScriptType == Inline Script) The script to execute. You can provide your deployment commands here, one command per line.  See [this example](#sample-dep-script).</td></tr>
<tr><td><code>ScriptPath</code><br/>(Deployment script path)</td><td>(Required if ScriptType == File Path) The path and name of the script to execute.</td></tr>
<tr><td><code>Web<br/>ConfigParameters</code><br/>(Generate web.config parameters for Python, Node.js, Go and Java apps)</td><td>(Optional) A standard web.config will be generated and deployed to Azure App Service if the application does not have one. The values in web.config can be edited and will vary based on the application framework. For example for Node.js applications, web.config will have startup file and iis\_node module values. This edit feature is only for the generated web.config file. [Learn more](https://go.microsoft.com/fwlink/?linkid=843469).</td>
<tr><td><code>AppSettings</code><br/>(App settings)</td><td>(Optional) Edit web app <b>Application</b> settings using the syntax <b>-key value</b>. Values containing spaces must be enclosed in double quotes. Examples: <b>-Port 5000 -RequestTimeout 5000</b> and <b>-WEBSITE_TIME_ZONE "Eastern Standard Time"</b>.</td></tr>
<tr><td><code>ConfigurationSettings</code><br/>(Configuration settings)</td><td>(Optional) Edit web app configuration settings using the syntax <b>-key value</b>. Values containing spaces must be enclosed in double quotes. Example: <b>-phpVersion 5.6 -linuxFxVersion: node|6.11</b></td></tr>
<tr><td><code>UseWebDeploy</code><br/>(Select deployment method)</td><td>(Optional) If unchecked, the task auto-detects the best deployment method based on the app type, package format, and other parameters. Select the option to view the supported deployment methods, and choose one for deploying your app.</td></tr>
<tr><td><code>DeploymentType</code><br/>(Deployment method)</td><td>(Required if UseWebDeploy == true) Choose the deployment method for the app.<br/>Default value: webDeploy</td></tr>
<tr><td><code>TakeAppOfflineFlag</code><br/>(Take App Offline)</td><td>(Optional) Select this option to take the Azure App Service offline by placing an <b>app\_offline.htm</b> file in the root directory before the synchronization operation begins. The file will be removed after the synchronization completes successfully.<br/>Default value: true</td></tr>
<tr><td><code>SetParametersFile</code><br/>(SetParameters file)</td><td>(Optional) location of the <b>SetParameters.xml</b> file to be used.</td></tr>
<tr><td><code>RemoveAdditional<br/>FilesFlag</code><br/>(Remove additional files at destination)</td><td>(Optional) Select the option to delete files on the Azure App Service that have no matching files in the App Service package or folder.<br/><b>Note:</b> This will also remove all files related to any extensions installed on this Azure App Service. To prevent this, set the <b>Exclude files from App\_Data folder</b> checkbox.<br/>Default value: false</td></tr>
<tr><td><code>ExcludeFiles<br/>FromAppDataFlag</code><br/>(Exclude files from the App\_Data folder)</td><td>(Optional) Select the option to prevent files in the App_Data folder from being deployed to or deleted from the Azure App Service.<br/>Default value: true</td></tr>
<tr><td><code>AdditionalArguments</code><br/>(Additional arguments)</td><td>(Optional) Additional Web Deploy arguments following the syntax <b>-key:value</b>. These will be applied when deploying the Azure App Service. Example: <b>-disableLink:AppPoolExtension -disableLink:ContentExtension.</b> [More examples](https://go.microsoft.com/fwlink/?linkid=838471).<br/>Default value: <b>-retryAttempts:6 -retryInterval:10000</b></td></tr>
<tr><td><code>RenameFilesFlag</code><br/>(Rename locked files)</td><td>(Optional) Select this option to enable the MSDeploy flag <b>MSDEPLOY\_RENAME\_LOCKED\_FILES=1</b> in the Azure App Service application settings. When set, it enables MSDeploy to rename files that are locked during app deployment.<br/>Default value: true</td></tr>
<tr><td><code>XmlTransformation</code><br/>(XML transformation)</td><td>(Optional) The configuration transformations will be run for **\*.Release.config** and **\*.{EnvironmentName}.config** on the **\*.config** files. Configuration transformations run before variable substitution. XML transformations are supported only for the Windows platform. [Learn more](https://docs.microsoft.com/vsts/build-release/tasks/transforms-variable-substitution?view=vsts#xml-transformation).<br/>Default value: false</td></tr>
<tr><td><code>XmlVariable<br/>Substitution</code><br/>(XML variable substitution)</td><td>(Optional) Variables defined in the build or release pipeline will be matched against the <b>key</b> or <b>name</b> entries in the <b>appSettings</b>, <b>applicationSettings</b>, and <b>connectionStrings</b> sections of any configuration file and <b>parameters.xml</b> file. Variable substitution runs after configuration transformations. <br/><b>Note:</b> if the same variables are defined in the release pipeline and in the stage, the stage variables will supersede the release pipeline variables. [Learn more](https://docs.microsoft.com/vsts/build-release/tasks/transforms-variable-substitution?view=vsts#xml-variable-substitution) <br/>Default value: false</td></tr>
<tr><td><code>JSONFiles</code><br/>(JSON variable substitution)</td><td>(Optional) Provide a newline-separated list of JSON files to substitute the variable values. Filenames must be relative to the root folder. To substitute JSON variables that are nested or hierarchical, specify them using JSONPath expressions. For example, to replace the value of <b>ConnectionString</b> in the sample below, define a variable named <b>Data.DefaultConnection.ConnectionString</b> in the build or release pipeline (or release pipelines stage).<br/><br/>{<br/>&nbsp;&nbsp;"Data": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;"DefaultConnection": {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ConnectionString": "Server=(localdb)\\SQLEXPRESS;Database=MyDB;Trusted\_Connection=True"<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/> }<br/><br/>Variable substitution runs after configuration transformations. <b>Note</b>: build and release pipeline variables are excluded from substitution. [Learn more](https://docs.microsoft.com/vsts/build-release/tasks/transforms-variable-substitution?view=vsts#json-variable-substitution).</td></tr>
</table>

This YAML example deploys to an Azure Web App container (Linux).

```YAML
pool:
  vmImage: Ubuntu-16.04

variables:
  azureSubscriptionEndpoint: Contoso
  DockerNamespace: contoso.azurecr.io
  DockerRepository: aspnetcore
  WebAppName: containersdemoapp

steps:

- task: AzureRMWebAppDeployment@4
  displayName: Azure App Service Deploy
  inputs:
    appType: webAppContainer
    ConnectedServiceName: $(azureSubscriptionEndpoint)
    WebAppName: $(WebAppName)
    DockerNamespace: $(DockerNamespace)
    DockerRepository: $(DockerRepository)
    DockerImageTag: $(Build.BuildId)
```

## Output Variables

* **Web App Hosted URL:** Provide a name, such as `FabrikamWebAppURL`, for the variable populated with the Azure App Service Hosted URL.
  The variable can be used as **$(_variableName_.AppServiceApplicationUrl)**, for example `$(FabrikamWebAppURL.AppServiceApplicationUrl)`, to refer to the hosted URL of the Azure App Service
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

## Sample Post deployment script

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

```ps
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
* [Run From Package](#runfromzip-notes)
* [War Deploy](#wardeploy-notes)

By default, the task tries to select the appropriate deployment technology
based on the input package type, App Service type, and agent operating system.

## Auto Detect Logic

For windows based agents.

<table><thead><tr><th>App Service type</th><th>Package type</th><th>Deployment Method</th></tr></thead>
<tr><td>WebApp on Linux or Function App on Linux</td><td>Folder/Zip/jar <br/>War</td><td>Zip Deploy<br/>War Deploy</td></tr>
<tr><td>WebApp for Containers (Linux) or Function App for Containers (Linux)</td><td>Update the App settings</td><td>NA</td></tr>
<tr><td>WebApp on Windows, Function App on Windows, API App, or Mobile App</td><td>War<br/>Jar<br/>MsBuild package type or deploy to virtual application <br/> Folder/Zip</td><td>War Deploy<br/>Zip Deploy <br/>Web Deploy <br/>if postDeploymentScript == true Zip Deploy <br/> else, Run From Package</td></tr>
</table>

On non-Windows agents (for any App Service type), the task relies on
[Kudu REST APIs](#kudu-notes) to deploy the app.

<a name="web-deploy-notes"></a>

### Web Deploy

[Web Deploy](https://www.iis.net/downloads/microsoft/web-deploy) (msdeploy.exe) can be used to deploy a Web App on Windows
or a Function App to the Azure App Service using a Windows agent.
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

### Run From Package

Creates the same deployment package as Zip Deploy. However, instead of deploying files to the **wwwroot** folder, the entire package is
mounted by the Functions runtime and files in the **wwwroot** folder become read-only. For more information, see
[Run your Azure Functions from a package file](https://docs.microsoft.com/azure/azure-functions/run-functions-from-deployment-package).

<a name="wardeploy-notes"></a>

### War Deploy

Creates a .war deployment package and deploys the file content to the **wwwroot** folder or **webapps** folder of the App Service in Azure.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
