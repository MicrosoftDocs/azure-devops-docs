---
title: Catalog of the built-in tasks for build-release and Azure Pipelines & TFS 
ms.custom: seodec18
description: Catalog of the built-in tasks on Azure Pipelines and Team Foundation Server
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: D2DE8A26-AF89-4B08-9FCD-30CD58635B0A
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.date: 05/03/2018
monikerRange: '>= tfs-2015'
---

# Build and release tasks

**Azure Pipelines | TFS 2018 | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/ms400688%28v=vs.120%29.aspx)**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

## Build

|Task   |  Versions  |
|-------|----------|
| [Android build and release task](build/android-build.md) - Android build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Android signing build and release task](build/android-signing.md) - Android signing build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Ant build and release task](build/ant.md) - Learn how to build with Apache Ant | Azure Pipelines, TFS 2015 RTM and newer |
| [Azure IoTEdge task](build/azure-iot-edge.md) - Build, test, and deploy applications quickly and efficiently to Azure IoT Edge | Azure Pipelines |
| [CMake build and release task](build/cmake.md) - CMake build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Docker Compose task](build/docker-compose.md) - Build, push or run multi-container Docker applications. Task can be used with Docker or Azure Container registry. | Azure Pipelines, Azure DevOps Server 2019 |
| [Docker task](build/docker.md) - Build and push Docker images to any container registry using Docker registry service connection | Azure Pipelines, TFS 2018 and newer |
| [.NET Core CLI task](build/dotnet-core-cli.md) - Build, test, package, or publish a dotnet application, or run a custom dotnet command. For package commands, supports NuGet.org and authenticated feeds like Package Management and MyGet. | Azure Pipelines, TFS 2017 and newer |
| [Go task](build/go.md) - Get, build, test a go application, or run a custom go command. | Azure Pipelines |
| [Gradle build and release task](build/gradle.md) - Gradle build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Grunt build and release task](build/grunt.md) - Grunt build and release task | Azure Pipelines, TFS 2015.3 and newer |
| [Gulp build and release task](build/gulp.md) - Gulp build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Index Sources & Publish Symbols build and release task](build/index-sources-publish-symbols.md) - Index Sources & Publish Symbols build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Jenkins Queue Job build and release task](build/jenkins-queue-job.md) - Queue a job on a Jenkins server build and release task | Azure Pipelines, TFS 2017 and newer |
| [Maven build and release task](build/maven.md) - Maven build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [MSBuild build and release task](build/msbuild.md) - MSBuild build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Visual Studio Build build and release task](build/visual-studio-build.md) - Visual Studio Build build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Xamarin.Android build and release task](build/xamarin-android.md) - Xamarin.Android build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Xamarin.iOS build and release task](build/xamarin-ios.md) - Xamarin.iOS build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Xcode Build build and release task](build/xcode-build.md) - Xcode Build build and release task | TFS 2015, TFS 2017, TFS 2018 |
| [Xcode Package iOS build and release task](build/xcode-package-ios.md) - Xcode Package iOS build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| [Xcode build and release task](build/xcode.md) - Xcode build and release task | Azure Pipelines |
## Deploy

|Task   |  Versions  |
|-------|----------|
| [App Center Distribute task](deploy/app-center-distribute.md) - Distribute app builds to testers and users through App Center | Azure Pipelines, TFS 2017 and newer |
| [Azure App Service Manage task](deploy/azure-app-service-manage.md) - Start, Stop, Restart, Slot swap, Install site extensions, or Enable Continuous Monitoring for an Azure App Service | Azure Pipelines |
| [Azure CLI task](deploy/azure-cli.md) - build task to run a shell or batch script containing Microsoft Azure CLI commands | Azure Pipelines, Azure DevOps Server 2019 |
| [Azure Cloud Service Deployment task](deploy/azure-cloud-powershell-deployment.md) - Deploy an Azure Cloud Service | Azure Pipelines |
| [Azure File Copy task](deploy/azure-file-copy.md) - build task to copy files to Microsoft Azure storage blobs or virtual machines (VMs) | Azure Pipelines, TFS 2015.3 and newer |
| [Azure Function App task](deploy/azure-function-app.md) - The Azure App Service Deploy task is used to update Azure App Services to deploy Web Apps, Functions, and WebJobs. | Azure Pipelines |
| [Azure Key Vault task](deploy/azure-key-vault.md) - Azure Key Vault task for use in the jobs of all of your build and release pipelines | Azure Pipelines, Azure DevOps Server 2019 |
| [Azure Monitor Alerts task](deploy/azure-monitor-alerts.md) - Configure alerts on available metrics for an Azure resource | Azure Pipelines |
| [Azure Database for Mysql Deployment task](deploy/azure-mysql-deployment.md) - Run your scripts and make changes to your Azure DB for Mysql.  | Azure Pipelines |
| [Azure Policy Check Gate task](deploy/azure-policy-check-gate.md) - Security and compliance assessment with Azure policies on resources that belong to the resource group and Azure subscription. | Azure Pipelines |
| [Azure PowerShell task](deploy/azure-powershell.md) - Run a PowerShell script within an Azure environment | Azure Pipelines |
| [Azure Resource Group Deployment task](deploy/azure-resource-group-deployment.md) - Deploy, start, stop, or delete Azure Resource Groups | Azure Pipelines |
| [Azure Function App for Container task](deploy/azure-rm-functionapp-containers.md) - Deploy Azure Functions on Linux using custom images | Azure Pipelines |
| [Azure Web App for Container task](deploy/azure-rm-web-app-containers.md) - Deploy Web Apps, Functions, and WebJobs to Azure App Services | Azure Pipelines |
| [Azure App Service Deploy task](deploy/azure-rm-web-app-deployment.md) - The Azure App Service Deploy task is used to update Azure App Services to deploy Web Apps, Functions, and WebJobs. | Azure Pipelines, Azure DevOps Server 2019 |
| [Azure Web App task](deploy/azure-rm-web-app.md) - The Azure App Service Deploy task is used to update Azure App Services to deploy Web Apps, Functions, and WebJobs. | Azure Pipelines |
| [Azure VM Scale Set Deployment task](deploy/azure-vmss-deployment.md) - Deploy Virtual Machine scale set image | Azure Pipelines |
| [Chef Knife task](deploy/chef-knife.md) - Run scripts with Knife commands on your Chef workstation | Azure Pipelines |
| [Chef task](deploy/chef.md) - Deploy to Chef environments by editing environment attributes | Azure Pipelines |
| [Copy Files Over SSH task](deploy/copy-files-over-ssh.md) - Copy Files Over SSH task for use in the jobs of all of your build and release pipelines | Azure Pipelines, TFS 2017 and newer |
| [Package and Deploy Helm Charts task](deploy/helm-deploy.md) - Deploy, configure, update your Kubernetes cluster in Azure Container Service by running helm commands. | Azure Pipelines, Azure DevOps Server 2019 |
| [IIS Web App Deploy task](deploy/iis-web-app-deployment-on-machine-group.md) - Deploy a website or web app using WebDeploy | Azure Pipelines |
| [IIS Web App Manage task](deploy/iis-web-app-management-on-machine-group.md) - Create or update a Website, Web App, Virtual Directory, or Application Pool | Azure Pipelines |
| [Kubernetes Manifest task](deploy/kubernetes-manifest.md) - Bake and deploy manifests to Kubernetes clusters | Azure Pipelines |
| [Kubectl task](deploy/kubernetes.md) - Deploy, configure, or update a Kubernetes cluster in Azure Container Service by running kubectl commands. | Azure Pipelines |
| [MySQL Database Deployment On Machine Group task](deploy/mysqldb-deployment.md) - The task is used to deploy for MySQL Database. | Azure Pipelines |
| [Build Machine Image task](deploy/packer-build.md) - Build a machine image using Packer to use for Azure Virtual machine scale set deployment | Azure Pipelines |
| [PowerShell on Target Machines task](deploy/powershell-on-target-machines.md) - PowerShell on Target Machines build task | Azure Pipelines, TFS 2015 RTM and newer |
| [Service Fabric Compose Deploy task](deploy/service-fabric-compose-deploy.md) - Service Fabric Compose Deploy Deployment task | Azure Pipelines, Azure DevOps Server 2019 |
| [Service Fabric Application Deployment task ](deploy/service-fabric-deploy.md) - Service Fabric Application Deployment task | Azure Pipelines, TFS 2017 and newer |
| [Azure SQL Database Deployment task](deploy/sql-azure-dacpac-deployment.md) - Deploy Azure SQL DB using DACPAC or run scripts using SQLCMD | Azure Pipelines |
| [WinRM SQL Server DB Deployment task](deploy/sql-dacpac-deployment-on-machine-group.md) - Deploy to SQL Server Database using DACPAC or SQL scripts | Azure Pipelines |
| [SSH Deployment task](deploy/ssh.md) - SSH task for use in the jobs of all of your build and release pipelines | Azure Pipelines, TFS 2017 and newer |
| [Windows Machine File Copy task](deploy/windows-machine-file-copy.md) - Copy application files and other artifacts to remote Windows machines | Azure Pipelines, TFS 2015 RTM and newer |
## Package

|Task   |  Versions  |
|-------|----------|
| [CocoaPods task](package/cocoapods.md) - Learn all about how you can use CocoaPods packages when you are building code in Azure Pipelines or Team Foundation Server (TFS). | Azure Pipelines, TFS 2015 RTM and newer |
| [Conda Environment task](package/conda-environment.md) - How to create and activate a Conda environment when building code | Azure Pipelines |
| [Maven Authenticate task (for task runners)](package/maven-authenticate.md) - Provides credentials for Azure Artifacts feeds and external Maven repositories. | Azure Pipelines |
| [npm Authenticate task (for task runners)](package/npm-authenticate.md) - Don't use this task if you're also using the npm task. Provides npm credentials to an .npmrc file in your repository for the scope of the build. This enables npm task runners like gulp and Grunt to authenticate with private registries. | Azure Pipelines |
| [npm task](package/npm.md) - How to use npm packages when building code in Azure Pipelines | Azure Pipelines, TFS 2015 RTM and newer |
| [NuGet Authenticate](package/nuget-authenticate.md) - Configure NuGet tools to authenticate with Azure Artifacts and other NuGet repositories. | Azure Pipelines |
| [NuGet restore, pack, and publish task](package/nuget.md) - Learn all about how you can make use of NuGet packages when you are building code . | Azure Pipelines, TFS 2018 and newer |
| [Python Pip Authenticate](package/pip-authenticate.md) - Sets up authentication with pip so you can perform pip commands in your pipeline.  | Azure Pipelines |
| [PyPI Publisher task (Deprecated)](package/pypi-publisher.md) - How to upload a package to PyPI when building code | Azure Pipelines |
| [Python Twine Upload Authenticate](package/twine-authenticate.md) - Sets up authentication with twine to Python feeds so you can publish Python packages in your pipeline.  | Azure Pipelines |
## Test

|Task   |  Versions  |
|-------|----------|
| [App Center Test task](test/app-center-test.md) - Test app packages with Visual Studio App Center. | Azure Pipelines, TFS 2017 and newer |
| [Cloud-based Load Test task](test/cloud-based-load-test.md) - Runs the load test in cloud with a build or release pipeline with Azure Pipelines to integrate cloud-based load tests into your build and release pipelines | Azure Pipelines, TFS 2015 RTM and newer |
| [Cloud-based Web Performance Test task](test/cloud-based-web-performance-test.md) - Runs the Quick Web Performance Test with a build or release pipeline to easily verify your web application exists and is responsive | Azure Pipelines, TFS 2015 RTM and newer |
| [Container Structure Test Task](test/container-structure-test-task.md) - Test container structure by container task and integrate test reporting into your build and release pipelines  | Azure Pipelines |
| [Publish Code Coverage Results task](test/publish-code-coverage-results.md) - Publish Cobertura or JaCoCo code coverage results from an Azure Pipelines or TFS build | Azure Pipelines, TFS 2015 RTM and newer |
| [Publish Test Results task](test/publish-test-results.md) - Publish Test Results to integrate test reporting into your build and release pipelines  | Azure Pipelines, TFS 2015 RTM and newer |
| [Run Functional Tests task](test/run-functional-tests.md) - Run Coded UI/Selenium/Functional tests on a set of machines using the Test Agent to integrate cloud-based load tests into your build and release pipelines | Azure Pipelines, TFS 2015 RTM and newer |
| [Cloud-based Apache JMeter Load Test task](test/run-jmeter-load-test.md) - Runs the Apache JMeter load test in cloud | Azure Pipelines |
| [Visual Studio Test Agent Deployment task](test/visual-studio-test-agent-deployment.md) - Deploy and configure the Test Agent to run tests on a set of machines to integrate cloud-based load tests into your build and release pipelines | Azure Pipelines, TFS 2015 RTM and newer |
| [Visual Studio Test task](test/vstest.md) - Run unit and functional tests (Selenium, Appium, Coded UI test, etc.) using the Visual Studio Test runner. Test frameworks that have a Visual Studio test adapter such as xUnit, NUnit, Chutzpah, etc. can also be run. | Azure Pipelines |
| [Xamarin Test Cloud task](test/xamarin-test-cloud.md) - This task is deprecated. Use the App Center Test task instead.  | Azure Pipelines, TFS 2015 RTM and newer |
## Tool

|Task   |  Versions  |
|-------|----------|
| [Docker Installer task](tool/docker-installer.md) - Install the Docker CLI on an agent machine | Azure Pipelines, Azure DevOps Server 2019 |
| [Use .NET Core task](tool/dotnet-core-tool-installer.md) - Acquires a specific version of .NET Core from the internet or the tools cache and adds it to the PATH | Azure Pipelines |
| [Go Tool Installer task](tool/go-tool.md) - Finds or downloads a specific version of the Go tool into the tools cache and adds it to the PATH | Azure Pipelines |
| [Helm installer task](tool/helm-installer.md) - Install helm on an agent machine | Azure Pipelines |
| [Java Tool Installer task](tool/java-tool-installer.md) - Change the version of Java | Azure Pipelines |
| [Kubectl installer task](tool/kubectl-installer.md) - Install kubectl on an agent machine | Azure Pipelines |
| [Node.js Tool Installer task](tool/node-js.md) - Find, download, and cache a specified version of Node.js and add it to the PATH | Azure Pipelines |
| [NuGet Tool Installer task](tool/nuget.md) - Find, download, and cache a specified version of NuGet and add it to the PATH | Azure Pipelines |
| [Use Python Version task](tool/use-python-version.md) - Select a version of Python to run on an agent and optionally add it to PATH | Azure Pipelines |
| [Use Ruby Version task](tool/use-ruby-version.md) - Select a version of Ruby to run on an agent and optionally add it to PATH | Azure Pipelines |
| [Visual Studio Test Platform Installer task](tool/vstest-platform-tool-installer.md) - Acquires the test platform from nuget.org or the tools cache and can allow you to run tests and collect diagnostic data | Azure Pipelines |
## Utility

|Task   |  Versions  |
|-------|----------|
| [Archive Files task](utility/archive-files.md) - Use an archive file to then create a source folder | Azure Pipelines, TFS 2017 and newer |
| [Invoke Azure Function task ](utility/azure-function.md) - Invoke a HTTP triggered function in an Azure function app and parse the response | Azure Pipelines, TFS 2017 and newer |
| [Query Azure Monitor Alerts task](utility/azure-monitor.md) - Observe the configured Azure monitor rules for active alerts  in a build or release pipeline | Azure Pipelines, TFS 2017 and newer |
| [Azure Network Load Balancer task](utility/azure-nlb-management.md) - Connect or disconnect an Azure virtual machine's network interface to a load balancer's address pool | Azure Pipelines |
| [Azure Policy task ](utility/azure-policy.md) - Security and compliance assessment with Azure policies | Azure Pipelines, Azure DevOps Server 2019 |
| [Bash task](utility/bash.md) - Run a Bash script on macOS, Linux, or Windows | Azure Pipelines |
| [Batch Script task](utility/batch-script.md) - Execute .bat or .cmd scripts when building your code | Azure Pipelines, TFS 2015 RTM and newer |
| [Command Line task](utility/command-line.md) - Execute tools from a command prompt when building code | Azure Pipelines, TFS 2015 RTM and newer |
| [Copy and Publish Build Artifacts task](utility/copy-and-publish-build-artifacts.md) - Copy build artifacts to a staging folder and publish them with  (TFS) | Azure Pipelines, TFS 2015 RTM and newer |
| [Copy Files task](utility/copy-files.md) - Copy files between folders with match patterns when building code | Azure Pipelines, TFS 2015.3 and newer |
| [cURL Upload Files task](utility/curl-upload-files.md) - Use cURL to upload files with supported protocols | Azure Pipelines, TFS 2015 RTM and newer |
| [Decrypt File (OpenSSL) task](utility/decrypt-file.md) - A thin utility task for file decryption using OpenSSL | Azure Pipelines |
| [Delay task](utility/delay.md) - Pause execution of a build or release pipeline for a fixed delay time  | Azure Pipelines, Azure DevOps Server 2019 |
| [Delete Files task](utility/delete-files.md) - Delete files from the agent working directory when building code | Azure Pipelines, TFS 2015.3 and newer |
| [Download Build Artifacts task](utility/download-build-artifacts.md) - Download Build Artifacts task for use in a build or release pipeline | Azure Pipelines |
| [Download Fileshare Artifacts task](utility/download-fileshare-artifacts.md) - Download Fileshare Artifacts task for Azure Pipelines and TFS | Azure Pipelines |
| [Download GitHub Release task](utility/download-github-release.md) - Download assets from your GitHub release as part of your pipeline | Azure Pipelines |
| [Download Package task](utility/download-package.md) - Download a package from a Package Management feed in Azure Artifacts or TFS. | Azure Pipelines |
| [Download Pipeline Artifact task](utility/download-pipeline-artifact.md) - Download Pipeline Artifact task to download pipeline artifacts from earlier stages in this pipeline, or from another pipeline | Azure Pipelines |
| [Download Secure File task](utility/download-secure-file.md) - Download a secure file to a temporary location on the build or release agent in | Azure Pipelines |
| [Extract Files task](utility/extract-files.md) - Extract files from archives to a target folder using minimatch patterns on  (TFS) | Azure Pipelines, TFS 2017 and newer |
| [File Transform task](utility/file-transform.md) - Apply configuration file transformations and variable substitution to a target package or folder | Azure Pipelines, Azure DevOps Server 2019 |
| [FTP Upload task](utility/ftp-upload.md) - Upload files to a remote machine using the File Transfer Protocol (FTP), or securely with FTPS on  (TFS) | Azure Pipelines, TFS 2017 and newer |
| [GitHub Release task](utility/github-release.md) - Create, edit, or discard a GitHub release. | Azure Pipelines |
| [Invoke HTTP REST API task](utility/http-rest-api.md) - Build and release task to invoke an HTTP API and parse the response with a build or release pipeline | Azure Pipelines, TFS 2018 and newer |
| [Install Apple Certificate task ](utility/install-apple-certificate.md) - Install an Apple certificate required to build on a macOS agent on  (TFS) | Azure Pipelines, TFS 2018 and newer |
| [Install Apple Provisioning Profile task](utility/install-apple-provisioning-profile.md) - Install an Apple provisioning profile required to build on a macOS agent | Azure Pipelines, TFS 2018 and newer |
| [Install SSH Key task](utility/install-ssh-key.md) - Install an SSH key prior to a build or release | Azure Pipelines |
| [Jenkins Download Artifacts task](utility/jenkins-download-artifacts.md) - Download artifacts produced by a Jenkins job | Azure Pipelines, TFS 2017 and newer |
| [Manual Intervention task ](utility/manual-intervention.md) - Pause an active deployment within a stage in a release pipeline | Azure Pipelines, Azure DevOps Server 2019 |
| [PowerShell task](utility/powershell.md) - Execute PowerShell scripts | Azure Pipelines, TFS 2015 RTM and newer |
| [Publish Build Artifacts task](utility/publish-build-artifacts.md) - Publish build artifacts to Azure Pipelines, Team Foundation Server (TFS), or to a file share | Azure Pipelines, TFS 2015 RTM and newer |
| [Publish Pipeline Artifacts task](utility/publish-pipeline-artifact.md) - Publish artifacts to Azure Pipelines. | Azure Pipelines |
| [Publish To Azure Service Bus task ](utility/publish-to-azure-service-bus.md) - Send a message to an Azure Service Bus with a build or release pipeline | Azure Pipelines, Azure DevOps Server 2019 |
| [Python Script task](utility/python-script.md) - Run a Python script in a build or release pipeline | Azure Pipelines |
| [Service Fabric PowerShell Utility task](utility/service-fabric-powershell.md) - Service Fabric PowerShell task for use in build or release pipelines in | Azure Pipelines, Azure DevOps Server 2019 |
| [Update Service Fabric Manifests task](utility/service-fabric-versioning.md) - Update the Service Fabric App versions | Azure Pipelines, TFS 2017 and newer |
| [Shell Script task](utility/shell-script.md) - Execute a bash script when building code | Azure Pipelines, TFS 2015 RTM and newer |
| [Query Work Items task ](utility/work-item-query.md) - Ensure the number of matching items returned by a work item query is within the configured threshold | Azure Pipelines, TFS 2017 and newer |
| [Xamarin License task](utility/xamarin-license.md) - Activate or deactivate a Xamarin license when building code | Azure Pipelines, TFS 2015 RTM and newer |


To learn more about tool installer tasks, see [Tool installers](../process/tasks.md#tool-installers).

## Open source

These tasks are open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A  

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn step-by-step how to build my app?

[Build your app](../apps/index.md)

### Can I add my own build tasks?

Yes: [Add a build task](../../extend/develop/add-build-task.md)

[!INCLUDE [temp](../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
