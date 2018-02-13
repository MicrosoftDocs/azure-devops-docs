---
title: Catalog of the built-in tasks for build-release and VSTS & TFS 
description: Catalog of the built-in tasks on VSTS and Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: D2DE8A26-AF89-4B08-9FCD-30CD58635B0A
ms.manager: douge
ms.author: alewis
ms.date: 08/18/2016
---

# Build and release tasks

**VSTS | TFS 2018 | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/ms400688%28v=vs.120%29.aspx)**

## Build

| Task | Versions |
| ---- | -------- |
| ![icon](build/_img/android-build.png) Android Build - deprecated. Use [Gradle](build/gradle.md) | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/android-signing.png) [Android Signing](build/android-signing.md). Sign and align Android APK files | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/ant.png) [Ant](build/ant.md). Build with Apache Ant | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/cmake.png) [CMake](build/cmake.md). Build with the CMake cross-platform build system | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/gradle.png) [Gradle](build/gradle.md). Build using a Gradle wrapper script | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/grunt.png) [Grunt](build/grunt.md). The JavaScript Task Runner | VSTS, TFS 2015.3 and newer |
| ![icon](build/_img/gulp.png) [Gulp](build/gulp.md). Node.js streaming task based build system | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/index-sources-publish-symbols.png) [Index Sources & Publish Symbols](build/index-sources-publish-symbols.md). Index your source code and publish symbols to a file share | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/jenkins-queue-job.png) [Jenkins Queue Job](build/jenkins-queue-job.md). Queue a job on a Jenkins server | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/maven.png) [Maven](build/maven.md). Build with Apache Maven | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/msbuild.png) [MSBuild](build/msbuild.md). Build with MSBuild | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/net-core-cli.png) [.NET Core CLI](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/DotNetCoreCLI). Build, test, and publish using the .NET Core command line  | VSTS, TFS 2018 |
| ![icon](utility/_img/publish-build-artifacts.png) [Publish Build Artifacts](utility/copy-and-publish-build-artifacts.md). Publish Build artifacts to the server or a file share | TFS 2015 RTM. Deprecated on VSTS and newer versions of TFS. |
| [SonarQube for MSBuild - Begin Analysis](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Extension+for+VSTS-TFS). Fetch the Quality Profile from SonarQube to configure the analysis | VSTS, TFS 2015.3 and newer |
| [SonarQube for MSBuild - End Analysis](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Extension+for+VSTS-TFS). Finish the analysis and upload the results to SonarQube | VSTS, TFS 2015.3 and newer |
| ![icon](build/_img/visual-studio-build.png) [Visual Studio Build](build/visual-studio-build.md). Build with MSBuild and set the Visual Studio version property | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/xamarin-android.png) [Xamarin.Android](build/xamarin-android.md). Build an Android app with Xamarin | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/xamarin-ios.png) [Xamarin.iOS](build/xamarin-ios.md). Build an iOS app with Xamarin on macOS | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/xcode.png) [Xcode](build/xcode.md). Build an Xcode workspace on macOS | VSTS, TFS 2015 RTM and newer |
| ![icon](build/_img/xcode-package-ios.png) [Xcode Package iOS](build/xcode-package-ios.md). Generate an .ipa file from Xcode build output | VSTS, TFS 2015 RTM and newer |

## Utility

| Task | Versions |
| ---- | -------- |
| ![icon](utility/_img/archive-files.png) [Archive Files](utility/archive-files.md). Archive files using a variety of compression formats such as .7z, .rar, .tar.gz, and .zip. | VSTS, TFS 2017 and newer |
| ![icon](utility/_img/azure-function.png) [Azure function](utility/azure-function.md). Invoke a HTTP triggered function in an Azure function app and parse the response. | VSTS |
| ![icon](utility/_img/azure-monitor.png) [Azure monitor](utility/azure-monitor.md). Observe the configured Azure monitor rules for active alerts. | VSTS |
| ![icon](utility/_img/batch-script.png) [Batch Script](utility/batch-script.md). Run a windows cmd or bat script and optionally allow it to change the environment | VSTS, TFS 2015 RTM and newer |
| ![icon](utility/_img/command-line.png) [Command Line](utility/command-line.md). Run a command line with arguments | VSTS, TFS 2015 RTM and newer |
| ![icon](utility/_img/copy-and-publish-build-artifacts.png) [Copy and Publish Build Artifacts](utility/copy-and-publish-build-artifacts.md). Copy Build artifacts to staging folder then publish Build artifacts to the server or a file share | TFS 2015 RTM. Deprecated on VSTS and newer versions of TFS. |
| ![icon](utility/_img/copy-files.png) [Copy Files](utility/copy-files.md). Copy files from source folder to target folder using minimatch patterns (The minimatch patterns will only match file paths, not folder paths). | VSTS, TFS 2015.3 and newer |
| ![icon](utility/_img/curl-upload-files.png) [cURL Upload Files](utility/curl-upload-files.md). Use cURL to upload files with supported protocols. (FTP, FTPS, SFTP, HTTP, and more) | VSTS, TFS 2015 RTM and newer |
| ![icon](utility/_img/delay.png) [Delay](utility/delay.md). Pause execution of the process for a fixed delay time. | VSTS |
| ![icon](utility/_img/delete-files.png) [Delete Files](utility/delete-files.md). Delete files or folders. | VSTS, TFS 2015.3 and newer |
| ![icon](utility/_img/secure-file.png) [Download Secure File](utility/download-secure-file.md). Download a secure file to a temporary location on the build or release agent. | VSTS |
| ![icon](utility/_img/extract-files.png) [Extract Files](utility/extract-files.md). Extract files from archives (.zip, .jar, .war, .ear, .tar, .7z., and others) to a target folder. | VSTS, TFS 2017 and newer |
| ![icon](utility/_img/ftp-upload.png) [FTP Upload](utility/ftp-upload.md). Upload files to a remote machine using the File Transfer Protocol (FTP), or securely with FTPS. | VSTS, TFS 2017 and newer |
| ![icon](build/_img/xcode.png) [Install Apple Certificate](utility/install-apple-certificate.md). Install an Apple certificate required to build on a macOS agent. | VSTS, TFS 2018 |
| ![icon](build/_img/xcode.png) [Install Apple Provisioning Profile](utility/install-apple-provisioning-profile.md). Install an Apple provisioning profile required to build on a macOS agent. | VSTS, TFS 2018 |
| ![icon](utility/_img/http-rest-api.png) [Invoke HTTP REST API](utility/http-rest-api.md). Invoke an HTTP API and parse the response. | VSTS |
| ![icon](utility/_img/manual-intervention.png) [Manual intervention](utility/manual-intervention.md). Pause an active deployment within an environment, typically to perform some manual steps or actions, and then continue the automated deployment steps. | VSTS |
| ![icon](utility/_img/powershell.png) [PowerShell](utility/powershell.md). Run a PowerShell script | VSTS, TFS 2015 RTM and newer |
| ![icon](utility/_img/publish-build-artifacts.png) [Publish Build Artifacts](utility/publish-build-artifacts.md). Publish Build artifacts to the server or a file share | VSTS, TFS 2015.3 and newer |
| ![icon](utility/_img/publish-to-azure-service-bus.png) [Publish To Azure Service Bus](utility/publish-to-azure-service-bus.md). Send a message to an Azure Service Bus using a service connection and without using an agent. | VSTS |
| ![icon](utility/_img/query-work-items.png) [Query Work Items](utility/work-item-query.md). Ensure the number of matching items returned by a work item query in within the configured thresholds. | VSTS |
| ![icon](utility/_img/azure-service-fabric.png) [Service Fabric PowerShell](utility/service-fabric-powershell.md). Runs any PowerShell command or script in a PowerShell session that has a Service Fabric cluster connection initialized. | VSTS |
| ![icon](utility/_img/shell-script.png) [Shell Script](utility/shell-script.md). Run a shell script using bash | VSTS, TFS 2015 RTM and newer |
| ![icon](utility/_img/azure-service-fabric.png) [Update Service Fabric App Versions](utility/service-fabric-versioning.md). Automatically updates the versions of a packaged Service Fabric application | VSTS, TFS 2017 and newer |
| ![icon](utility/_img/xamarin-license.png) [Xamarin License](utility/xamarin-license.md). Activate or deactivate Xamarin licenses | VSTS, TFS 2015 RTM and newer |

## Test

| Task | Versions |
| ---- | -------- |
| ![icon](test/_img/apache-jmeter-load-test.png) [Cloud-based Apache JMeter Load Test](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/RunJMeterLoadTest). Runs the Apache JMeter load test in cloud | VSTS, TFS 2015 RTM and newer |
| ![icon](test/_img/cloud-based-load-test-icon.png) [Cloud-based Load Test](test/cloud-based-load-test.md). Runs the load test in cloud, with VSTS | VSTS, TFS 2015 RTM and newer |
| ![icon](test/_img/web-based-perf-icon.png) [Cloud-based Web Performance Test](test/cloud-based-web-performance-test.md). Runs the quick web performance test in cloud, with VSTS | VSTS, TFS 2015 RTM and newer |
| ![icon](test/_img/mobile-center-test-icon.png) [App Center Test](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AppCenterTest). Test mobile app packages with Visual Studio App Center | VSTS, TFS 2015.3 and newer |
| ![icon](test/_img/publish-code-coverage-results-icon.png) [Publish Code Coverage Results](test/publish-code-coverage-results.md). Publish code coverage results to VSTS/TFS | VSTS, TFS 2015.3 and newer |
| ![icon](test/_img/publish-test-results-icon.png) [Publish Test Results](test/publish-test-results.md). Publish Test Results to VSTS/TFS | VSTS, TFS 2015 RTM and newer |
| ![icon](test/_img/run-functional-tests-icon.png) [Run Functional Tests](test/run-functional-tests.md). Run Coded UI/Selenium/Functional tests on a set of machines (using Test Agent) | VSTS, TFS 2015.3 and newer |
| ![icon](test/_img/visual-studio-test-icon.png) [Visual Studio Test version 2](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTest/README.md). [Visual Studio Test version 1](https://github.com/Microsoft/vsts-tasks/blob/releases/m109/Tasks/VsTest/README.md)<br/>Run tests with Visual Studio test runner | VSTS, TFS 2015 RTM and newer |
| ![icon](test/_img/visual-studio-test-agent-deployment-icon.png) [Visual Studio Test Agent Deployment](test/visual-studio-test-agent-deployment.md). Deploy and configure Test Agent to run tests on a lab machine group | VSTS, TFS 2015 RTM and newer |
| ![icon](test/_img/xamarin-test-cloud-icon.png) [Xamarin Test Cloud](test/xamarin-test-cloud.md). Test mobile apps with Xamarin Test Cloud using Xamarin.UITest | VSTS, TFS 2015 RTM and newer |

## Package

| Task | Versions |
| ---- | -------- |
| ![icon](package/_img/cocoapods.png) [CocoaPods](package/cocoapods.md). CocoaPods is the dependency manager for Swift and Objective-C Cocoa projects. Runs pod install | VSTS, TFS 2015 RTM and newer |
| ![icon](package/_img/npm.png) [npm](package/npm-install.md). Install npm packages | VSTS, TFS 2015 RTM and newer |
| ![icon](package/_img/nuget-installer.png) [NuGet Installer](package/nuget-installer.md). Installs and updates missing NuGet packages | VSTS, TFS 2015 RTM and newer |
| ![icon](package/_img/nuget-packager.png) [NuGet Packager](package/nuget-packager.md)Creates nupkg outputs from csproj or nuspec files | VSTS, TFS 2015.3 and newer |
| ![icon](package/_img/nuget-publisher.png) [NuGet Publisher](package/nuget-publisher.md). Uploads nupkg files to a nuget server | VSTS, TFS 2015.3 and newer |
| ![icon](package/_img/xamarin-component-restore.png) [Xamarin component restore](package/xamarin-component-restore.md). Restores Xamarin components for the specified solution | VSTS, TFS 2017 and newer |

## Deploy

| Task | Versions |
| ---- | -------- |
| ![icon](deploy/_img/azure-web-app-deployment-icon.png) [Azure App Service Deploy](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureRmWebAppDeployment). Update Azure App Service using Web Deploy / Kudu REST APIs | VSTS, TFS 2017 and newer |
| ![icon](deploy/_img/azure-app-service-manage.png) [Azure App Service Manage](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureAppServiceManage). Start, Stop, Restart or Slot swap for an Azure App Service | VSTS, TFS 2017 and newer|
| ![icon](deploy/_img/azure-cli-icon.png) [Azure CLI](deploy/azure-cli.md). Run a shell or batch script containing Azure CLI commands against an Azure subscription | VSTS, TFS 2017 and newer |
| ![icon](deploy/_img/azure-cloud-service-deployment-icon.png) [Azure Cloud Service Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureCloudPowerShellDeployment). Deploy an Azure Cloud Service | VSTS, TFS 2015 RTM and newer |
| ![icon](deploy/_img/azure-file-copy-icon.png) [Azure File Copy](deploy/azure-file-copy.md). Copy files to Azure blob or VM(s) | VSTS, TFS 2015.3 and newer |
| ![icon](deploy/_img/azure-key-vault-icon.png) [Azure Key Vault](deploy/azure-key-vault.md). Incorporate secrets from an Azure Key Vault into a release definition | VSTS |
| ![icon](deploy/_img/azure-powershell-icon.png) [Azure PowerShell](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzurePowerShell). Run a PowerShell script within an Azure environment | VSTS, TFS 2015 RTM and newer |
| ![icon](deploy/_img/azure-resource-group-deployment-icon.png) [Azure Resource Group Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureResourceGroupDeployment). Deploy, start, stop, delete Azure Resource Groups | VSTS, TFS 2015.3 and newer |
| ![icon](deploy/_img/azure-sql-database-deployment-icon.png) [Azure SQL Database Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/SqlAzureDacpacDeployment). Deploy Azure SQL DB using DACPAC | VSTS, TFS 2015.3 and newer |
| ![icon](deploy/_img/ssh.png) [Copy Files Over SSH](deploy/copy-files-over-ssh.md). Copy files from source folder to target folder on a remote machine over SSH | VSTS, TFS 2017 and newer |
| ![icon](deploy/_img/iis-deploy-icon.png) [IIS Web App Deploy](deploy/iis-deploy.md). Deploy IIS Websites and Virtual Applications using WebDeploy | VSTS |
| ![icon](deploy/_img/iis-manage-icon.png) [IIS Web App Manage](deploy/iis-manage.md). Create or update, start or stop, and recycle IIS Websites, IIS Web Applications, Virtual Directories, and IIS Application Pools | VSTS |
| ![icon](deploy/_img/mobile-center-upload-icon.png) [App Center Distribute](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AppCenterDistribute). Upload and distribute mobile app packages using Visual Studio App Center | VSTS, TFS 2015 RTM and newer |
| ![icon](deploy/_img/powershell-on-target-machines-icon.png) [PowerShell on Target Machines](deploy/powershell-on-target-machines.md). Execute PowerShell scripts on remote machine(s) | VSTS, TFS 2015 RTM and newer |
| ![icon](deploy/_img/azure-service-fabric.png) [Service Fabric Application Deployment](deploy/service-fabric-deploy.md). Deploy a Service Fabric application to a cluster | VSTS, TFS 2017 and newer |
| ![icon](deploy/_img/azure-service-fabric.png) [Service Fabric Compose Deploy](deploy/service-fabric-compose-deploy.md). Deploy a Service Fabric application to a cluster using a compose file | VSTS |
| ![icon](deploy/_img/ssh.png) [SSH](deploy/ssh.md). Run shell commands or a script on a remote machine using SSH | VSTS, TFS 2017 and newer |
| ![icon](deploy/_img/windows-machine-file-copy-icon.png) [Windows Machine File Copy](deploy/windows-machine-file-copy.md). Copy files to remote machine(s) | VSTS, TFS 2015 RTM and newer |

<h2 id="tool">Tool</h2>

| Task | Versions |
|------|----------|
| ![icon](tool/_img/net-core-tool-installer.png) [.NET Core Tool Installer](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/DotNetCoreInstaller). Acquires a specific version of .NET Core and adds it to the PATH. Use the task to change the Core version for subsequent tasks. | VSTS, TFS 2018 |
| ![icon](tool/_img/node.png) [Node Tool Installer](tool/node-js.md). Finds or downloads and caches the specified version of [Node.js](https://nodejs.org/) and adds it to the PATH | VSTS |
| ![icon](tool/_img/java.png) [Java Tool Installer](tool/java-tool-installer.md). Acquires a specific version of Java from a user supplied Azure blob, a location in the souce or on the agent, or the tools cache and sets JAVA_HOME. Use this task to change the version of Java used in Java tasks. | VSTS |

To learn more about tool installer tasks, see [Tool installers](../concepts/process/tasks.md#tool-installers).

## Q&A  

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn step-by-step how to build my app?

[Build your app](../apps/index.md)

### Can I add my own build tasks?

Yes: [Add a build task](../../extend/develop/add-build-task.md)

[!INCLUDE [temp](../_shared/qa-agents.md)]

[!INCLUDE [temp](../_shared/qa-versions.md)]

<!-- ENDSECTION -->
