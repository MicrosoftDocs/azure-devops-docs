---
ms.topic: include
ms.date: 05/03/2018
author: steved0x
ms.author: sdanie
ms.prod: devops
ms.technology: devops-cicd-tasks
---

## Build

| Task   | Versions  |
|--------|-----------|
| ![icon](../build/media/dotnetcorecli.png) [.NET Core CLI task](../build/dotnet-core-cli.md) - Build, test, package, or publish a dotnet application, or run a custom dotnet command. For package commands, supports NuGet.org and authenticated feeds like Package Management and MyGet. | Azure Pipelines, TFS 2017 and newer |
| ![icon](../build/media/android-build.png) [Android build task (deprecated; use Gradle)](../build/android-build.md) - Android build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/android-signing.png) [Android signing build and release task](../build/android-signing.md) - Android signing build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/ant.png) [Ant build and release task](../build/ant.md) - Learn how to build with Apache Ant | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/azure-iot-edge.png) [Azure IoT Edge task](../build/azure-iot-edge.md) - Build, test, and deploy applications quickly and efficiently to Azure IoT Edge | Azure Pipelines |
| ![icon](../build/media/cmake.png) [CMake build and release task](../build/cmake.md) - CMake build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/dockercompose.png) [Docker Compose task](../build/docker-compose.md) - Build, push or run multi-container Docker applications. Task can be used with Docker or Azure Container registry. | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../build/media/docker.png) [Docker task](../build/docker.md) - Build and push Docker images to any container registry using Docker registry service connection | Azure Pipelines, TFS 2018 and newer |
| ![icon](../build/media/go.png) [Go task](../build/go.md) - Get, build, test a go application, or run a custom go command. | Azure Pipelines |
| ![icon](../build/media/gradle.png) [Gradle build and release task](../build/gradle.md) - Gradle build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/grunt.png) [Grunt build and release task](../build/grunt.md) - Grunt build and release task | Azure Pipelines, TFS 2015.3 and newer |
| ![icon](../build/media/gulp.png) [Gulp build and release task](../build/gulp.md) - Gulp build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/index-sources-publish-symbols.png) [Index Sources & Publish Symbols](../build/index-sources-publish-symbols.md) - Index Sources & Publish Symbols build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/jenkins-queue-job.png) [Jenkins Queue Job build and release task](../build/jenkins-queue-job.md) - Queue a job on a Jenkins server build and release task | Azure Pipelines, TFS 2017 and newer |
| ![icon](../build/media/maven.png) [Maven build and release task](../build/maven.md) - Maven build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/msbuild.png) [MSBuild build and release task](../build/msbuild.md) - MSBuild build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/sonarqube.png) [SonarQube - Prepare Analysis Configuration](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-azure-devops/) - Configure all the required settings before executing the build | Azure Pipelines, TFS 2015.3 and newer |
| ![icon](../build/media/sonarqube.png) [SonarQube - Publish Quality Gate Result ](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-azure-devops/) - Display the Quality Gate status in the build summary | Azure Pipelines, TFS 2015.3 and newer |
| ![icon](../build/media/sonarqube.png) [SonarQube - Run Code Analysis](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-azure-devops/) - Run the analysis of the source code | Azure Pipelines, TFS 2015.3 and newer |
| ![icon](../build/media/visual-studio-build.png) [Visual Studio Build build and release task](../build/visual-studio-build.md) - Visual Studio Build build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/xamarin-android.png) [Xamarin.Android build and release task](../build/xamarin-android.md) - Xamarin.Android build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/xamarin-ios.png) [Xamarin.iOS build and release task](../build/xamarin-ios.md) - Xamarin.iOS build and release task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../build/media/xcode.png) [Xcode build and release task](../build/xcode.md) - Xcode build and release task | Azure Pipelines |
| ![icon](../build/media/xcode-build.png) [Xcode Build build and release task](../build/xcode-build.md) - Xcode Build build and release task | TFS 2015, TFS 2017, TFS 2018 |
| ![icon](../build/media/xcode-package-ios.png) [Xcode Package iOS build and release task](../build/xcode-package-ios.md) - Xcode Package iOS build and release task | Azure Pipelines, TFS 2015 RTM and newer |

## Utility

| Task   | Versions  |
|--------|-----------|
| ![icon](../utility/media/archive-files.png) [Archive Files task](../utility/archive-files.md) - Use an archive file to then create a source folder | Azure Pipelines, TFS 2017 and newer |
| ![icon](../utility/media/azurenlbmanagement.png) [Azure Network Load Balancer task](../utility/azure-nlb-management.md) - Connect or disconnect an Azure virtual machine's network interface to a load balancer's address pool | Azure Pipelines |
| ![icon](../utility/media/bash.png) [Bash task](../utility/bash.md) - Run a Bash script on macOS, Linux, or Windows | Azure Pipelines |
| ![icon](../utility/media/batch-script.png) [Batch Script task](../utility/batch-script.md) - Execute .bat or .cmd scripts when building your code | Azure Pipelines, TFS 2015 RTM and newer |
| [Cache task](../utility/cache.md) - Improve build performance by caching files, like dependencies, between pipeline runs. | Azure Pipelines, TFS 2017 and newer |
| ![icon](../utility/media/command-line.png) [Command Line task](../utility/command-line.md) - Execute tools from a command prompt when building code | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../utility/media/copy-and-publish-build-artifacts.png) [Copy and Publish Build Artifacts task](../utility/copy-and-publish-build-artifacts.md) - Copy build artifacts to a staging folder and publish them | TFS 2015 RTM. Deprecated on Azure Pipelines and newer versions of TFS. |
| ![icon](../utility/media/copy-files.png) [Copy Files task](../utility/copy-files.md) - Copy files between folders with match patterns when building code | Azure Pipelines, TFS 2015.3 and newer |
| ![icon](../utility/media/curl-upload-files.png) [cURL Upload Files task](../utility/curl-upload-files.md) - Use cURL to upload files with supported protocols | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../utility/media/decryptfile.png) [Decrypt File (OpenSSL) task](../utility/decrypt-file.md) - A thin utility task for file decryption using OpenSSL | Azure Pipelines |
| ![icon](../utility/media/delay.png) [Delay task](../utility/delay.md) - Pause execution of a build or release pipeline for a fixed delay time | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../utility/media/delete-files.png) [Delete Files task](../utility/delete-files.md) - Delete files from the agent working directory when building code | Azure Pipelines, TFS 2015.3 and newer |
| ![icon](../utility/media/downloadbuildartifacts.png) [Download Build Artifacts task](../utility/download-build-artifacts.md) - Download Build Artifacts task for use in a build or release pipeline | Azure Pipelines |
| ![icon](../utility/media/download-fileshare-artifacts.png) [Download Fileshare Artifacts task](../utility/download-fileshare-artifacts.md) - Download Fileshare Artifacts task for Azure Pipelines and TFS | Azure Pipelines |
| ![icon](../utility/media/download-github-release.png) [Download GitHub Release task](../utility/download-github-release.md) - Download assets from your GitHub release as part of your pipeline | Azure Pipelines |
| ![icon](../utility/media/downloadpackage.png) [Download Package task](../utility/download-package.md) - Download a package from a Package Management feed in Azure Artifacts or TFS. | Azure Pipelines |
| ![icon](../utility/media/download-pipeline-artifact.png) [Download Pipeline Artifacts task](../utility/download-pipeline-artifact.md) - Download Pipeline Artifacts task to download pipeline artifacts from earlier stages in this pipeline, or from another pipeline | Azure Pipelines |
| ![icon](../utility/media/download-secure-file.png) [Download Secure File task](../utility/download-secure-file.md) - Download a secure file to a temporary location on the build or release agent in | Azure Pipelines |
| ![icon](../utility/media/extract-files.png) [Extract Files task](../utility/extract-files.md) - Extract files from archives to a target folder using minimatch patterns on  (TFS) | Azure Pipelines, TFS 2017 and newer |
| ![icon](../utility/media/file-transform.png) [File Transform task](../utility/file-transform.md) - Apply configuration file transformations and variable substitution to a target package or folder | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../utility/media/ftp-upload.png) [FTP Upload task](../utility/ftp-upload.md) - Upload files to a remote machine using the File Transfer Protocol (FTP), or securely with FTPS on  (TFS) | Azure Pipelines, TFS 2017 and newer |
| ![icon](../utility/media/github-release.png) [GitHub Release task](../utility/github-release.md) - Create, edit, or discard a GitHub release. | Azure Pipelines |
| ![icon](../utility/media/install-apple-certificate.png) [Install Apple Certificate task](../utility/install-apple-certificate.md) - Install an Apple certificate required to build on a macOS agent on  (TFS) | Azure Pipelines, TFS 2018 and newer |
| ![icon](../utility/media/install-apple-provisioning-profile.png) [Install Apple Provisioning Profile task](../utility/install-apple-provisioning-profile.md) - Install an Apple provisioning profile required to build on a macOS agent | Azure Pipelines, TFS 2018 and newer |
| ![icon](../utility/media/installsshkey.png) [Install SSH Key task](../utility/install-ssh-key.md) - Install an SSH key prior to a build or release | Azure Pipelines |
| ![icon](../utility/media/azure-function.png) [Invoke Azure Function task](../utility/azure-function.md) - Invoke a HTTP triggered function in an Azure function app and parse the response | Azure Pipelines, TFS 2017 and newer |
| ![icon](../utility/media/http-rest-api.png) [Invoke HTTP REST API task](../utility/http-rest-api.md) - Build and release task to invoke an HTTP API and parse the response with a build or release pipeline | Azure Pipelines, TFS 2018 and newer |
| ![icon](../utility/media/jenkinsdownloadartifacts.png) [Jenkins Download Artifacts task](../utility/jenkins-download-artifacts.md) - Download artifacts produced by a Jenkins job | Azure Pipelines, TFS 2017 and newer |
| ![icon](../utility/media/manual-intervention.png) [Manual Intervention task](../utility/manual-intervention.md) - Pause an active deployment within a stage in a release pipeline | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../utility/media/powershell.png) [PowerShell task](../utility/powershell.md) - Execute PowerShell scripts | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../utility/media/publish-build-artifacts.png) [Publish Build Artifacts task](../utility/publish-build-artifacts.md) - Publish build artifacts to Azure Pipelines, Team Foundation Server (TFS), or to a file share | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../utility/media/publish-pipeline-artifact.png) [Publish Pipeline Artifacts task](../utility/publish-pipeline-artifact.md) - Publish artifacts to Azure Pipelines. | Azure Pipelines |
| ![icon](../utility/media/publish-to-azure-service-bus.png) [Publish To Azure Service Bus task](../utility/publish-to-azure-service-bus.md) - Send a message to an Azure Service Bus with a build or release pipeline | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../utility/media/pythonscript.png) [Python Script task](../utility/python-script.md) - Run a Python script in a build or release pipeline | Azure Pipelines |
| ![icon](../utility/media/azure-monitor.png) [Query Azure Monitor Alerts task](../utility/azure-monitor.md) - Observe the configured Azure monitor rules for active alerts  in a build or release pipeline | Azure Pipelines, TFS 2017 and newer |
| ![icon](../utility/media/work-item-query.png) [Query Work Items task](../utility/work-item-query.md) - Ensure the number of matching items returned by a work item query is within the configured threshold | Azure Pipelines, TFS 2017 and newer |
| ![icon](../utility/media/service-fabric-powershell.png) [Service Fabric PowerShell Utility task](../utility/service-fabric-powershell.md) - Service Fabric PowerShell task for use in build or release pipelines in | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../utility/media/shell-script.png) [Shell Script task](../utility/shell-script.md) - Execute a bash script when building code | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../utility/media/service-fabric-versioning.png) [Update Service Fabric Manifests task](../utility/service-fabric-versioning.md) - Update the Service Fabric App versions | Azure Pipelines, TFS 2017 and newer |
| ![icon](../utility/media/xamarin.png) [Xamarin License task](../utility/xamarin-license.md) - Activate or deactivate a Xamarin license when building code | Azure Pipelines, TFS 2015 RTM and newer |

## Test

| Task   | Versions  |
|--------|-----------|
| ![icon](../test/media/appcentertest.png) [App Center Test task](../test/app-center-test.md) - Test app packages with Visual Studio App Center. | Azure Pipelines, TFS 2017 and newer |
| ![icon](../test/media/run-jmeter-load-test.png) [Cloud-based Apache JMeter Load Test task (Deprecated)](../test/run-jmeter-load-test.md) - Runs the Apache JMeter load test in cloud | Azure Pipelines |
| ![icon](../test/media/cloud-based-load-test-icon.png) [Cloud-based Load Test task (Deprecated)](../test/cloud-based-load-test.md) - Runs the load test in cloud with a build or release pipeline with Azure Pipelines to integrate cloud-based load tests into your build and release pipelines | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../test/media/cloud-based-web-performance-test.png) [Cloud-based Web Performance Test task (Deprecated)](../test/cloud-based-web-performance-test.md) - Runs the Quick Web Performance Test with a build or release pipeline to easily verify your web application exists and is responsive | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../test/media/container-structure-test-task.png) [Container Structure Test Task](../test/container-structure-test-task.md) - Test container structure by container task and integrate test reporting into your build and release pipelines | Azure Pipelines |
| ![icon](../test/media/publish-code-coverage-results-icon.png) [Publish Code Coverage Results task](../test/publish-code-coverage-results.md) - Publish Cobertura or JaCoCo code coverage results from an Azure Pipelines or TFS build | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../test/media/publish-test-results-icon.png) [Publish Test Results task](../test/publish-test-results.md) - Publish Test Results to integrate test reporting into your build and release pipelines | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../test/media/run-functional-tests-icon.png) [Run Functional Tests task](../test/run-functional-tests.md) - Run Coded UI/Selenium/Functional tests on a set of machines using the Test Agent to integrate cloud-based load tests into your build and release pipelines | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../test/media/visual-studio-test-agent-deployment-icon.png) [Visual Studio Test Agent Deployment task](../test/visual-studio-test-agent-deployment.md) - Deploy and configure the Test Agent to run tests on a set of machines to integrate cloud-based load tests into your build and release pipelines | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../test/media/vstest.png) [Visual Studio Test task](../test/vstest.md) - Run unit and functional tests (Selenium, Appium, Coded UI test, etc.) using the Visual Studio Test runner. Test frameworks that have a Visual Studio test adapter such as xUnit, NUnit, Chutzpah, etc. can also be run. | Azure Pipelines |
| ![icon](../test/media/xamarin.png) [Xamarin Test Cloud task](../test/xamarin-test-cloud.md) - This task is deprecated. Use the App Center Test task instead. | Azure Pipelines, TFS 2015 RTM and newer |

## Package

| Task   | Versions  |
|--------|-----------|
| ![icon](../package/media/cocoapods.png) [CocoaPods task](../package/cocoapods.md) - Learn all about how you can use CocoaPods packages when you are building code in Azure Pipelines or Team Foundation Server (TFS). | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../package/media/conda.png) [Conda Environment task](../package/conda-environment.md) - How to create and activate a Conda environment when building code | Azure Pipelines |
| ![icon](../package/media/maven.png) [Maven Authenticate task (for task runners)](../package/maven-authenticate.md) - Provides credentials for Azure Artifacts feeds and external Maven repositories. | Azure Pipelines |
| ![icon](../package/media/npmauthenticate.png) [npm Authenticate task (for task runners)](../package/npm-authenticate.md) - Don't use this task if you're also using the npm task. Provides npm credentials to an .npmrc file in your repository for the scope of the build. This enables npm task runners like gulp and Grunt to authenticate with private registries. | Azure Pipelines |
| ![icon](../package/media/npm.png) [npm task](../package/npm.md) - How to use npm packages when building code in Azure Pipelines | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../package/media/nuget.png) [NuGet Authenticate](../package/nuget-authenticate.md) - Configure NuGet tools to authenticate with Azure Artifacts and other NuGet repositories | Azure Pipelines |
| ![icon](../package/media/nuget.png) [NuGet restore, pack, and publish task](../package/nuget.md) - Learn all about how you can make use of NuGet packages when you are building code | Azure Pipelines, TFS 2018 and newer |
| ![icon](../package/media/pypi-publisher.png) [PyPI Publisher task (Deprecated)](../package/pypi-publisher.md) - How to upload a package to PyPI when building code | Azure Pipelines |
| ![icon](../package/media/pip-authenticate.png) [Python Pip Authenticate](../package/pip-authenticate.md) - Sets up authentication with pip so you can perform pip commands in your pipeline. | Azure Pipelines |
| ![icon](../package/media/twine-authenticate.png) [Python Twine Upload Authenticate](../package/twine-authenticate.md) - Sets up authentication with twine to Python feeds so you can publish Python packages in your pipeline. | Azure Pipelines |
| ![icon](../package/media/universal-packages.png) [Universal Package, download and publish task](../package/universal-packages.md) - Learn all about how you can make use of NuGet packages when you are building code | Azure Pipelines, TFS 2018 and newer |

## Deploy

| Task   | Versions  |
|--------|-----------|
| ![icon](../deploy/media/appcenterdistribute.png) [App Center Distribute task](../deploy/app-center-distribute.md) - Distribute app builds to testers and users through App Center | Azure Pipelines, TFS 2017 and newer |
| ![icon](../deploy/media/azurermwebappdeployment.png) [Azure App Service Deploy task](../deploy/azure-rm-web-app-deployment.md) - The Azure App Service Deploy task is used to update Azure App Services to deploy Web Apps, Functions, and WebJobs. | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../deploy/media/azureappservicemanage.png) [Azure App Service Manage task](../deploy/azure-app-service-manage.md) - Start, Stop, Restart, Slot swap, Swap with Preview, Install site extensions, or Enable Continuous Monitoring for an Azure App Service | Azure Pipelines |
| ![icon](../deploy/media/azure-app-service-settings.png) [Azure App Service Settings task](../deploy/azure-app-service-settings.md) - Azure App Service Settings Task supports configuring App settings, connection strings and other general settings in bulk using JSON syntax on your web app or any of its deployment slots. | Azure Pipelines |
| ![icon](../deploy/media/azure-cli-icon.png) [Azure CLI task](../deploy/azure-cli.md) - build task to run a shell or batch script containing Microsoft Azure CLI commands | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../deploy/media/azurecloudpowershelldeployment.png) [Azure Cloud Service Deployment task](../deploy/azure-cloud-powershell-deployment.md) - Deploy an Azure Cloud Service | Azure Pipelines |
| ![icon](../deploy/media/azuremysqldeployment.png) [Azure Database for Mysql Deployment task](../deploy/azure-mysql-deployment.md) - Run your scripts and make changes to your Azure DB for Mysql. | Azure Pipelines |
| ![icon](../deploy/media/azure-file-copy-icon.png) [Azure File Copy task](../deploy/azure-file-copy.md) - build task to copy files to Microsoft Azure storage blobs or virtual machines (VMs) | Azure Pipelines, TFS 2015.3 and newer |
| ![icon](../deploy/media/azure-rm-functionapp-containers.png) [Azure Function App for Container task](../deploy/azure-rm-functionapp-containers.md) - Deploy Azure Functions on Linux using custom images | Azure Pipelines |
| ![icon](../deploy/media/azure-function-app.png) [Azure Function App task](../deploy/azure-function-app.md) - The Azure App Service Deploy task is used to update Azure App Services to deploy Web Apps, Functions, and WebJobs. | Azure Pipelines |
| ![icon](../deploy/media/azure-key-vault-icon.png) [Azure Key Vault task](../deploy/azure-key-vault.md) - Azure Key Vault task for use in the jobs of all of your build and release pipelines | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../deploy/media/azuremonitoralerts.png) [Azure Monitor Alerts task](../deploy/azure-monitor-alerts.md) - Configure alerts on available metrics for an Azure resource | Azure Pipelines |
| ![icon](../deploy/media/azure-policy.png) [Azure Policy task](../deploy/azure-policy.md) - Security and compliance assessment with Azure policies | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../deploy/media/azure-powershell-icon.png) [Azure PowerShell task](../deploy/azure-powershell.md) - Run a PowerShell script within an Azure environment | Azure Pipelines |
| ![icon](../deploy/media/azure-resource-group-deployment-icon.png) [Azure Resource Group Deployment task](../deploy/azure-resource-group-deployment.md) - Deploy, start, stop, or delete Azure Resource Groups | Azure Pipelines |
| ![icon](../deploy/media/sqlazuredacpacdeployment.png) [Azure SQL Database Deployment task](../deploy/sql-azure-dacpac-deployment.md) - Deploy Azure SQL DB using DACPAC or run scripts using SQLCMD | Azure Pipelines |
| ![icon](../deploy/media/azurevmssdeployment.png) [Azure virtual machine scale set deployment task](../deploy/azure-vmss-deployment.md) - Deploy virtual machine scale set image | Azure Pipelines |
| ![icon](../deploy/media/azure-rm-web-app-containers.png) [Azure Web App for Container task](../deploy/azure-rm-web-app-containers.md) - Deploy Web Apps, Functions, and WebJobs to Azure App Services | Azure Pipelines |
| ![icon](../deploy/media/azure-rm-web-app.png) [Azure Web App task](../deploy/azure-rm-web-app.md) - The Azure App Service Deploy task is used to update Azure App Services to deploy Web Apps, Functions, and WebJobs. | Azure Pipelines |
| ![icon](../deploy/media/packerbuild.png) [Build Machine Image task](../deploy/packer-build.md) - Build a machine image using Packer to use for Azure Virtual machine scale set deployment | Azure Pipelines |
| ![icon](../deploy/media/chefknife.png) [Chef Knife task](../deploy/chef-knife.md) - Run scripts with Knife commands on your Chef workstation | Azure Pipelines |
| ![icon](../deploy/media/chef.png) [Chef task](../deploy/chef.md) - Deploy to Chef environments by editing environment attributes | Azure Pipelines |
| ![icon](../deploy/media/copy-files-over-ssh.png) [Copy Files Over SSH task](../deploy/copy-files-over-ssh.md) - Copy Files Over SSH task for use in the jobs of all of your build and release pipelines | Azure Pipelines, TFS 2017 and newer |
| ![icon](../deploy/media/iiswebappdeploymentonmachinegroup.png) [IIS Web App Deploy task](../deploy/iis-web-app-deployment-on-machine-group.md) - Deploy a website or web app using WebDeploy | Azure Pipelines |
| ![icon](../deploy/media/iiswebappmanagementonmachinegroup.png) [IIS Web App Manage task](../deploy/iis-web-app-management-on-machine-group.md) - Create or update a Website, Web App, Virtual Directory, or Application Pool | Azure Pipelines |
| ![icon](../deploy/media/kubernetes.png) [Kubectl task](../deploy/kubernetes.md) - Deploy, configure, or update a Kubernetes cluster in Azure Container Service by running kubectl commands. | Azure Pipelines |
| ![icon](../deploy/media/kubernetes-manifest.png) [Kubernetes manifest task](../deploy/kubernetes-manifest.md) - Bake and deploy manifests to Kubernetes clusters | Azure Pipelines |
| ![icon](../deploy/media/mysqldb-deployment.png) [MySQL Database Deployment On Machine Group task](../deploy/mysqldb-deployment.md) - The task is used to deploy for MySQL Database. | Azure Pipelines |
| ![icon](../deploy/media/helmdeploy.png) [Package and Deploy Helm Charts task](../deploy/helm-deploy.md) - Deploy, configure, update your Kubernetes cluster in Azure Container Service by running helm commands. | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../deploy/media/powershell-on-target-machines-icon.png) [PowerShell on Target Machines task](../deploy/powershell-on-target-machines.md) - PowerShell on Target Machines build task | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../deploy/media/service-fabric-deploy.png) [Service Fabric Application Deployment task](../deploy/service-fabric-deploy.md) - Service Fabric Application Deployment task | Azure Pipelines, TFS 2017 and newer |
| ![icon](../deploy/media/service-fabric-compose-deploy.png) [Service Fabric Compose Deploy task](../deploy/service-fabric-compose-deploy.md) - Service Fabric Compose Deploy Deployment task | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../deploy/media/ssh.png) [SSH Deployment task](../deploy/ssh.md) - SSH task for use in the jobs of all of your build and release pipelines | Azure Pipelines, TFS 2017 and newer |
| ![icon](../deploy/media/windows-machine-file-copy-icon.png) [Windows Machine File Copy task](../deploy/windows-machine-file-copy.md) - Copy application files and other artifacts to remote Windows machines | Azure Pipelines, TFS 2015 RTM and newer |
| ![icon](../deploy/media/sqldacpacdeploymentonmachinegroup.png) [WinRM SQL Server DB Deployment task](../deploy/sql-dacpac-deployment-on-machine-group.md) - Deploy to SQL Server Database using DACPAC or SQL scripts | Azure Pipelines |

## Tool

| Task   | Versions  |
|--------|-----------|
| ![icon](../tool/media/docker-installer.png) [Docker Installer task](../tool/docker-installer.md) - Install the Docker CLI on an agent machine | Azure Pipelines, Azure DevOps Server 2019 |
| ![icon](../tool/media/gotool.png) [Go Tool Installer task](../tool/go-tool.md) - Finds or downloads a specific version of the Go tool into the tools cache and adds it to the PATH | Azure Pipelines |
| ![icon](../tool/media/helminstaller.png) [Helm installer task](../tool/helm-installer.md) - Install helm on an agent machine | Azure Pipelines |
| ![icon](../tool/media/java.png) [Java Tool Installer task](../tool/java-tool-installer.md) - Change the version of Java | Azure Pipelines |
| ![icon](../tool/media/kubectl-installer.png) [Kubectl installer task](../tool/kubectl-installer.md) - Install kubectl on an agent machine | Azure Pipelines |
| ![icon](../tool/media/node.png) [Node.js Tool Installer task](../tool/node-js.md) - Find, download, and cache a specified version of Node.js and add it to the PATH | Azure Pipelines |
| ![icon](../tool/media/nuget.png) [NuGet Tool Installer task](../tool/nuget.md) - Find, download, and cache a specified version of NuGet and add it to the PATH | Azure Pipelines |
| ![icon](../tool/media/dotnet.png) [Use .NET Core task](../tool/dotnet-core-tool-installer.md) - Acquires a specific version of .NET Core from the internet or the tools cache and adds it to the PATH | Azure Pipelines |
| ![icon](../tool/media/use-python-version.png) [Use Python Version task](../tool/use-python-version.md) - Select a version of Python to run on an agent and optionally add it to PATH | Azure Pipelines |
| ![icon](../tool/media/use-ruby-version.png) [Use Ruby Version task](../tool/use-ruby-version.md) - Select a version of Ruby to run on an agent and optionally add it to PATH | Azure Pipelines |
| ![icon](../tool/media/vstest.png) [Visual Studio Test Platform Installer task](../tool/vstest-platform-tool-installer.md) - Acquires the test platform from nuget.org or the tools cache and can allow you to run tests and collect diagnostic data | Azure Pipelines |
