---
title: Tasks | Team Services & TFS 
description: Catalog of the built-in tasks on Visual Studio Team Services and Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-overview
ms.assetid: D2DE8A26-AF89-4B08-9FCD-30CD58635B0A
ms.manager: douge
ms.author: alewis
ms.date: 08/18/2016
---

# Build and release tasks

**Team Services | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/ms400688%28v=vs.120%29.aspx)**

[!INCLUDE [temp](../_shared/ci-cd-newbies.md)]

<!--
<div style="padding:5px;border-bottom:1px solid #ccc;font-family:Segoe UI;font-size:13px;margin-bottom:15px">

![Definition edit panel header](../define/_img/_shared/definition-edit-panel-header.png)<br/>

**[Build](#)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Options](options.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Repository](repository.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Variables](variables.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Triggers](triggers.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [General](general.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Retention](retention.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [History](history.md)
</div>

![add build step button](../_shared/_img/add-build-step-button.png)

Add steps to specify what you want to build, the tests to run, and all the other steps needed to complete the process. 

-->

## Build

| Task | Versions |
| ---- | -------- |
| ![icon](../steps/build/_img/android-build.png)<br />Android Build - deprecated. Use [Gradle](../steps/build/gradle.md) | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/android-signing.png)<br />[Android Signing](../steps/build/android-signing.md). Sign and align Android APK files | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/ant.png)<br />[Ant](../steps/build/ant.md). Build with Apache Ant | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/cmake.png)<br />[CMake](../steps/build/cmake.md). Build with the CMake cross-platform build system | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/gradle.png)<br />[Gradle](../steps/build/gradle.md). Build using a Gradle wrapper script | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/grunt.png)<br />[Grunt](../steps/build/grunt.md). The JavaScript Task Runner | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/build/_img/gulp.png)<br />[Gulp](../steps/build/gulp.md). Node.js streaming task based build system | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/index-sources-publish-symbols.png)<br />[Index Sources & Publish Symbols](../steps/build/index-sources-publish-symbols.md). Index your source code and publish symbols to a file share | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/jenkins-queue-job.png)<br />[Jenkins Queue Job](../steps/build/jenkins-queue-job.md). Queue a job on a Jenkins server | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/maven.png)<br />[Maven](../steps/build/maven.md). Build with Apache Maven | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/msbuild.png)<br />[MSBuild](../steps/build/msbuild.md). Build with MSBuild | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/utility/_img/publish-build-artifacts.png)<br />[Publish Build Artifacts](../steps/utility/copy-and-publish-build-artifacts.md). Publish Build artifacts to the server or a file share | TFS 2015 RTM. Deprecated on Team Services and newer versions of TFS. |
| [SonarQube for MSBuild - Begin Analysis](http://go.microsoft.com/fwlink/?LinkId=620063). Fetch the Quality Profile from SonarQube to configure the analysis | Team Services, TFS 2015 Update 3 and newer |
| [SonarQube for MSBuild - End Analysis](http://go.microsoft.com/fwlink/?LinkId=620063). Finish the analysis and upload the results to SonarQube | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/build/_img/visual-studio-build.png)<br />[Visual Studio Build](../steps/build/visual-studio-build.md). Build with MSBuild and set the Visual Studio version property | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/xamarin-android.png)<br />[Xamarin.Android](../steps/build/xamarin-android.md). Build an Android app with Xamarin | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/xamarin-ios.png)<br />[Xamarin.iOS](../steps/build/xamarin-ios.md). Build an iOS app with Xamarin on Mac OS | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/xcode-build.png)<br />[Xcode Build](../steps/build/xcode-build.md). Build an Xcode workspace on Mac OS | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/build/_img/xcode-package-ios.png)<br />[Xcode Package iOS](../steps/build/xcode-package-ios.md). Generate an .ipa file from Xcode build output | Team Services, TFS 2015 RTM and newer |

## Utility

| Task | Versions |
| ---- | -------- |
| ![icon](../steps/utility/_img/archive-files.png)<br />[Archive Files](../steps/utility/archive-files.md). Archive files using a variety of compression formats such as .7z, .rar, .tar.gz, and .zip. | Team Services, TFS 2017 |
| ![icon](../steps/utility/_img/batch-script.png)<br />[Batch Script](../steps/utility/batch-script.md). Run a windows cmd or bat script and optionally allow it to change the environment | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/utility/_img/command-line.png)<br />[Command Line](../steps/utility/command-line.md). Run a command line with arguments | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/utility/_img/copy-and-publish-build-artifacts.png)<br />[Copy and Publish Build Artifacts](../steps/utility/copy-and-publish-build-artifacts.md). Copy Build artifacts to staging folder then publish Build artifacts to the server or a file share | TFS 2015 RTM. Deprecated on Team Services and newer versions of TFS. |
| ![icon](../steps/utility/_img/copy-files.png)<br />[Copy Files](../steps/utility/copy-files.md). Copy files from source folder to target folder using minimatch patterns (The minimatch patterns will only match file paths, not folder paths). | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/utility/_img/curl-upload-files.png)<br />[cURL Upload Files](../steps/utility/curl-upload-files.md). Use cURL to upload files with supported protocols. (FTP, FTPS, SFTP, HTTP, and more) | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/utility/_img/delete-files.png)<br />[Delete Files](../steps/utility/delete-files.md). Delete files or folders. | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/utility/_img/extract-files.png)<br />[Extract Files](../steps/utility/extract-files.md). Extract files from archives (.zip, .jar, .war, .ear, .tar, .7z., and others) to a target folder. | Team Services, TFS 2017 |
| ![icon](../steps/utility/_img/ftp-upload.png)<br />[FTP Upload](../steps/utility/ftp-upload.md). Upload files to a remote machine using the File Transfer Protocol (FTP), or securely with FTPS. | Team Services, TFS 2017 |
| ![icon](../steps/build/_img/xcode-build.png)<br />[Install Apple Certificate](../steps/utility/install-apple-certificate.md). Install an Apple certificate required to build on a macOS agent. | Team Services |
| ![icon](../steps/build/_img/xcode-build.png)<br />[Install Apple Provisioning Profile](../steps/utility/install-apple-provisioning-profile.md). Install an Apple provisioning profile required to build on a macOS agent. | Team Services |
| ![icon](../steps/utility/_img/powershell.png)<br />[PowerShell](../steps/utility/powershell.md). Run a PowerShell script | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/utility/_img/publish-build-artifacts.png)<br />[Publish Build Artifacts](../steps/utility/publish-build-artifacts.md). Publish Build artifacts to the server or a file share | Team Services, TFS Update 3 and newer |
| ![icon](../steps/utility/_img/azure-service-fabric.png)<br />[Service Fabric PowerShell](../steps/utility/service-fabric-powershell.md). Runs any PowerShell command or script in a PowerShell session that has a Service Fabric cluster connection initialized. | Team Services |
| ![icon](../steps/utility/_img/shell-script.png)<br />[Shell Script](../steps/utility/shell-script.md). Run a shell script using bash | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/utility/_img/azure-service-fabric.png)<br />[Update Service Fabric App Versions](../steps/utility/service-fabric-versioning.md). Automatically updates the versions of a packaged Service Fabric application | Team Services, TFS 2017 |
| ![icon](../steps/utility/_img/xamarin-license.png)<br />[Xamarin License](../steps/utility/xamarin-license.md). Activate or deactivate Xamarin licenses | Team Services, TFS 2015 RTM and newer |

## Test

| Task | Versions |
| ---- | -------- |
| ![icon](../steps/test/_img/apache-jmeter-load-test.png)<br />[Cloud-based Apache JMeter Load Test](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/RunJMeterLoadTest). Runs the Apache JMeter load test in cloud | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/test/_img/cloud-based-load-test-icon.png)<br />[Cloud-based Load Test](../steps/test/cloud-based-load-test.md). Runs the load test in cloud, with Visual Studio Team Services | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/test/_img/web-based-perf-icon.png)<br />[Cloud-based Web Performance Test](../steps/test/cloud-based-web-performance-test.md). Runs the quick web performance test in cloud, with Visual Studio Team Services | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/test/_img/mobile-center-test-icon.png)<br />[Mobile Center Test](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/VSMobileCenterTest). Test mobile app packages with Visual Studio Mobile Center | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/test/_img/publish-code-coverage-results-icon.png)<br />[Publish Code Coverage Results](../steps/test/publish-code-coverage-results.md). Publish code coverage results to VSTS/TFS | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/test/_img/publish-test-results-icon.png)<br />[Publish Test Results](../steps/test/publish-test-results.md). Publish Test Results to Visual Studio Team Services/TFS | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/test/_img/run-functional-tests-icon.png)<br />[Run Functional Tests](../steps/test/run-functional-tests.md). Run Coded UI/Selenium/Functional tests on a set of machines (using Test Agent) | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/test/_img/visual-studio-test-icon.png)<br />[Visual Studio Test version 1](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTest/README.md). [Visual Studio Test version 2](https://github.com/Microsoft/vsts-tasks/blob/releases/m109/Tasks/VsTest/README.md)<br/>Run tests with Visual Studio test runner | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/test/_img/visual-studio-test-agent-deployment-icon.png)<br />[Visual Studio Test Agent Deployment](../steps/test/visual-studio-test-agent-deployment.md). Deploy and configure Test Agent to run tests on a lab machine group | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/test/_img/xamarin-test-cloud-icon.png)<br />[Xamarin Test Cloud](../steps/test/xamarin-test-cloud.md). Test mobile apps with Xamarin Test Cloud using Xamarin.UITest | Team Services, TFS 2015 RTM and newer |

## Package

| Task | Versions |
| ---- | -------- |
| ![icon](../steps/package/_img/cocoapods.png)<br />[CocoaPods](../steps/package/cocoapods.md). CocoaPods is the dependency manager for Swift and Objective-C Cocoa projects. Runs pod install | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/package/_img/npm.png)<br />[npm](../steps/package/npm-install.md). Install npm packages | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/package/_img/nuget-installer.png)<br />[NuGet Installer](../steps/package/nuget-installer.md). Installs and updates missing NuGet packages | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/package/_img/nuget-packager.png)<br />[NuGet Packager](../steps/package/nuget-packager.md)Creates nupkg outputs from csproj or nuspec files | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/package/_img/nuget-publisher.png)<br />[NuGet Publisher](../steps/package/nuget-publisher.md). Uploads nupkg files to a nuget server | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/package/_img/xamarin-component-restore.png)<br />[Xamarin component restore](../steps/package/xamarin-component-restore.md). Restores Xamarin components for the specified solution | Team Services, TFS 2017 |

## Deploy

| Task | Versions |
| ---- | -------- |
| ![icon](../steps/deploy/_img/azure-web-app-deployment-icon.png)<br />[Azure App Service Deploy](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureRmWebAppDeployment). Update Azure App Service using Web Deploy / Kudu REST APIs | Team Services, TFS 2017 |
| ![icon](../steps/deploy/_img/azure-app-service-manage.png)<br />[Azure App Service Manage](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureAppServiceManage). Start, Stop, Restart or Slot swap for an Azure App Service | Team Services, TFS 2017 |
| ![icon](../steps/deploy/_img/azure-cli-icon.png)<br />[Azure CLI](../steps/deploy/azure-cli.md). Run a shell or batch script containing Azure CLI commands against an Azure subscription | Team Services, TFS 2017 |
| ![icon](../steps/deploy/_img/azure-cloud-service-deployment-icon.png)<br />[Azure Cloud Service Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureCloudPowerShellDeployment). Deploy an Azure Cloud Service | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/deploy/_img/azure-file-copy-icon.png)<br />[Azure File Copy](../steps/deploy/azure-file-copy.md). Copy files to Azure blob or VM(s) | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/deploy/_img/azure-key-vault-icon.png)<br />[Azure Key Vault](../steps/deploy/azure-key-vault.md). Incorporate secrets from an Azure Key Vault into a release definition | Team Services |
| ![icon](../steps/deploy/_img/azure-powershell-icon.png)<br />[Azure PowerShell](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzurePowerShell). Run a PowerShell script within an Azure environment | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/deploy/_img/azure-resource-group-deployment-icon.png)<br />[Azure Resource Group Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureResourceGroupDeployment). Deploy, start, stop, delete Azure Resource Groups | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/deploy/_img/azure-sql-database-deployment-icon.png)<br />[Azure SQL Database Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/SqlAzureDacpacDeployment). Deploy Azure SQL DB using DACPAC | Team Services, TFS 2015 Update 3 and newer |
| ![icon](../steps/deploy/_img/ssh.png)<br />[Copy Files Over SSH](../steps/deploy/copy-files-over-ssh.md). Copy files from source folder to target folder on a remote machine over SSH | Team Services, TFS 2017 |
| ![icon](../steps/deploy/_img/iis-deploy-icon.png)<br />[IIS Web App Deploy](../steps/deploy/iis-deploy.md). Deploy IIS Websites and Virtual Applications using WebDeploy | Team Services |
| ![icon](../steps/deploy/_img/iis-manage-icon.png)<br />[IIS Web App Manage](../steps/deploy/iis-manage.md). Create or update, start or stop, and recycle IIS Websites, IIS Web Applications, Virtual Directories, and IIS Application Pools | Team Services |
| ![icon](../steps/deploy/_img/manual-intervention-icon.png)<br />[Manual Intervention](../concepts/process/phases.md#the-manual-intervention-task). Pause deployment and wait for intervention | Team Services, TFS 2017 |
| ![icon](../steps/deploy/_img/mobile-center-upload-icon.png)<br />[Mobile Center Upload](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/VSMobileCenterUpload). Upload mobile app packages to Visual Studio Mobile Center | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/deploy/_img/powershell-on-target-machines-icon.png)<br />[PowerShell on Target Machines](../steps/deploy/powershell-on-target-machines.md). Execute PowerShell scripts on remote machine(s) | Team Services, TFS 2015 RTM and newer |
| ![icon](../steps/deploy/_img/azure-service-fabric.png)<br />[Service Fabric Application Deployment](../steps/deploy/service-fabric-deploy.md). Deploy a Service Fabric application to a cluster | Team Services, TFS 2017 |
| ![icon](../steps/deploy/_img/azure-service-fabric.png)<br />[Service Fabric Compose Deploy](../steps/deploy/service-fabric-compose-deploy.md). Deploy a Service Fabric application to a cluster using a compose file | Team Services |
| ![icon](../steps/deploy/_img/ssh.png)<br />[SSH](../steps/deploy/ssh.md). Run shell commands or a script on a remote machine using SSH | Team Services, TFS 2017 |
| ![icon](../steps/deploy/_img/windows-machine-file-copy-icon.png)<br />[Windows Machine File Copy](../steps/deploy/windows-machine-file-copy.md). Copy files to remote machine(s) | Team Services, TFS 2015 RTM and newer |

<h2 id="tool">Tool</h2>

| Task | Versions |
|------|----------|
| ![icon](../steps/tool/_img/node.png)<br />[Node Tool Installer](../steps/tool/node-js.md). Finds or downloads and caches the specified version of [Node.js](https://nodejs.org/) and adds it to the PATH | Team Services |

To learn more about tool installer tasks, see [Tool installers](../concepts/process/tasks.md#tool-installers).

## Q&A  

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn step-by-step how to build my app?

[Build your app](../apps/index.md)

### Can I add my own build tasks?

Yes: [Add a build task](../../integrate/extensions/develop/add-build-task.md)

[!INCLUDE [temp](../_shared/qa-agents.md)]

[!INCLUDE [temp](../_shared/qa-versions.md)]

<!-- ENDSECTION -->
