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

<table>
        <tr>
            <th>Task</th>
      <th>Versions</th>
        </tr>
        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/android-build.png"/>
            Android Build - deprecated<br/>
      Use [Gradle](../steps/build/gradle.md)</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/android-signing.png"/>
            [Android Signing](../steps/build/android-signing.md)<br/>
      Sign and align Android APK files</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>
        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/ant.png"/>
            [Ant](../steps/build/ant.md)<br/>
      Build with Apache Ant</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/cmake.png"/>
            [CMake](../steps/build/cmake.md)<br/>
      Build with the CMake cross-platform build system</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/gradle.png"/>
            [Gradle](../steps/build/gradle.md)<br/>
      Build using a Gradle wrapper script</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/grunt.png"/>
            [Grunt](../steps/build/grunt.md)<br/>
      The JavaScript Task Runner</td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/gulp.png"/>
            [Gulp](../steps/build/gulp.md) <br/>
      Node.js streaming task based build system</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/index-sources-publish-symbols.png"/>
            [Index Sources & Publish Symbols](../steps/build/index-sources-publish-symbols.md)<br/>
      Index your source code and publish symbols to a file share</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/jenkins-queue-job.png"/>
            [Jenkins Queue Job](../steps/build/jenkins-queue-job.md)<br/>
      Queue a job on a Jenkins server</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/maven.png"/>
            [Maven](../steps/build/maven.md)<br/>
      Build with Apache Maven</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/msbuild.png"/>
            [MSBuild](../steps/build/msbuild.md)<br/>
      Build with MSBuild</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/publish-build-artifacts.png"/>
      [Publish Build Artifacts](../steps/utility/copy-and-publish-build-artifacts.md)<br/>
      Publish Build artifacts to the server or a file share</td>
      <td>TFS 2015 RTM. Deprecated on Team Services and newer versions of TFS.</td>
    </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/SonarQubePreBuild/icon.png?raw=true"/>
            [SonarQube for MSBuild - Begin Analysis](http://go.microsoft.com/fwlink/?LinkId=620063)<br/>
      Fetch the Quality Profile from SonarQube to configure the analysis</td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/SonarQubePostTest/icon.png?raw=true"/>
            [SonarQube for MSBuild - End Analysis](http://go.microsoft.com/fwlink/?LinkId=620063)<br/>
      Finish the analysis and upload the results to SonarQube</td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/visual-studio-build.png"/>
            [Visual Studio Build](../steps/build/visual-studio-build.md)<br/>
      Build with MSBuild and set the Visual Studio version property</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/xamarin-android.png"/>
      [Xamarin.Android](../steps/build/xamarin-android.md)<br/>
      Build an Android app with Xamarin</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/xamarin-ios.png"/>
      [Xamarin.iOS](../steps/build/xamarin-ios.md)<br/>
      Build an iOS app with Xamarin on Mac OS</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/xcode-build.png"/>
            [Xcode Build](../steps/build/xcode-build.md)<br/>
      Build an Xcode workspace on Mac OS</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/xcode-package-ios.png"/>
            [Xcode Package iOS](../steps/build/xcode-package-ios.md)<br/>
      Generate an .ipa file from Xcode build output</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>
</table>


## Utility

<table>
        <tr>
            <th>Task</th>
      <th>Versions</th>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/archive-files.png"/>
            [Archive Files](../steps/utility/archive-files.md)<br/>
      Archive files using a variety of compression formats such as .7z, .rar, .tar.gz, and .zip.</td>
      <td>Team Services, TFS 2017</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/batch-script.png"/>
            [Batch Script](../steps/utility/batch-script.md)<br/>
      Run a windows cmd or bat script and optionally allow it to change the environment</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/command-line.png"/>
            [Command Line](../steps/utility/command-line.md)<br/>
      Run a command line with arguments</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/copy-and-publish-build-artifacts.png"/>
      [Copy and Publish Build Artifacts](../steps/utility/copy-and-publish-build-artifacts.md)<br/>
      Copy Build artifacts to staging folder then publish Build artifacts to the server or a file share</td>
      <td>TFS 2015 RTM. Deprecated on Team Services and newer versions of TFS.</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/copy-files.png"/>
      [Copy Files](../steps/utility/copy-files.md)<br/>
      Copy files from source folder to target folder using minimatch patterns (The minimatch patterns will only match file paths, not folder paths)
      </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
    </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/curl-upload-files.png"/>
            [cURL Upload Files](../steps/utility/curl-upload-files.md)<br/>
      Use cURL to upload files with supported protocols. (FTP, FTPS, SFTP, HTTP, and more)</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/delete-files.png"/>
      [Delete Files](../steps/utility/delete-files.md)<br/>
      Delete files or folders.
      </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
    </tr>

    <tr>
        <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/extract-files.png"/>
        [Extract Files](../steps/utility/extract-files.md)<br />
    Extract files from archives (.zip, .jar, .war, .ear, .tar, .7z., and others) to a target folder.
        </td>
    <td>Team Services, TFS 2017</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/ftp-upload.png"/>
      [FTP Upload](../steps/utility/ftp-upload.md)<br/>
      Upload files to a remote machine using the File Transfer Protocol (FTP), or securely with FTPS.</td>
      <td>Team Services, TFS 2017</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/xcode-build.png"/>
      [Install Apple Certificate](../steps/utility/install-apple-certificate.md)<br/>
      Install an Apple certificate required to build on a macOS agent.</td>
      <td>Team Services</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/build/_img/xcode-build.png"/>
      [Install Apple Provisioning Profile](../steps/utility/install-apple-provisioning-profile.md)<br/>
      Install an Apple provisioning profile required to build on a macOS agent.</td>
      <td>Team Services</td>
    </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/powershell.png"/>
            [PowerShell](../steps/utility/powershell.md)<br/>
      Run a PowerShell script</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

  <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/publish-build-artifacts.png"/>
            [Publish Build Artifacts](../steps/utility/publish-build-artifacts.md)<br/>
      Publish Build artifacts to the server or a file share</td>
      <td>Team Services, TFS Update 3 and newer</td>
    </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/azure-service-fabric.png"/>
      [Service Fabric PowerShell](../steps/utility/service-fabric-powershell.md)<br/>
      Runs any PowerShell command or script in a PowerShell session that has a Service Fabric cluster connection initialized.</td>
      <td>Team Services</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/shell-script.png"/>
            [Shell Script](../steps/utility/shell-script.md)<br/>
      Run a shell script using bash</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/azure-service-fabric.png"/>
      [Update Service Fabric App Versions](../steps/utility/service-fabric-versioning.md)<br/>
      Automatically updates the versions of a packaged Service Fabric application</td>
      <td>Team Services, TFS 2017</td>
        </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/utility/_img/xamarin-license.png"/>
      [Xamarin License](../steps/utility/xamarin-license.md)<br/>
      Activate or deactivate Xamarin licenses</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>
</table>

## Test

<table>
        <tr>
            <th>Task</th>
      <th>Versions</th>
        </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/apache-jmeter-load-test.png"/>
            [Cloud-based Apache JMeter Load Test](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/RunJMeterLoadTest)<br/>
      Runs the Apache JMeter load test in cloud
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/cloud-based-load-test-icon.png"/>
            [Cloud-based Load Test](../steps/test/cloud-based-load-test.md)<br/> 
      Runs the load test in cloud, with Visual Studio Team Services
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/web-based-perf-icon.png"/>
            [Cloud-based Web Performance Test](../steps/test/cloud-based-web-performance-test.md)<br/>
      Runs the quick web performance test in cloud, with Visual Studio Team Services
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/mobile-center-test-icon.png"/>
       [Mobile Center Test](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/VSMobileCenterTest)<br/>
      Test mobile app packages with Visual Studio Mobile Center
       </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
        </tr>

        <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/publish-code-coverage-results-icon.png"/>
       [Publish Code Coverage Results](../steps/test/publish-code-coverage-results.md)<br/>
      Publish code coverage results to VSTS/TFS
       </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
        </tr>

        <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/publish-test-results-icon.png"/>
       [Publish Test Results](../steps/test/publish-test-results.md)<br/>
       Publish Test Results to Visual Studio Team Services/TFS
       </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/run-functional-tests-icon.png"/>
      [Run Functional Tests](../steps/test/run-functional-tests.md)<br/>
      Run Coded UI/Selenium/Functional tests on a set of machines (using Test Agent)
      </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
    </tr>

        <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/visual-studio-test-icon.png"/>
            [Visual Studio Test version 1](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTest/README.md)<br/>
            [Visual Studio Test version 2](https://github.com/Microsoft/vsts-tasks/blob/releases/m109/Tasks/VsTest/README.md)<br/>
      Run tests with Visual Studio test runner
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/visual-studio-test-agent-deployment-icon.png"/>
            [Visual Studio Test Agent Deployment](../steps/test/visual-studio-test-agent-deployment.md)<br/>
      Deploy and configure Test Agent to run tests on a lab machine group
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/test/_img/xamarin-test-cloud-icon.png"/>
            [Xamarin Test Cloud](../steps/test/xamarin-test-cloud.md)<br/>
      Test mobile apps with Xamarin Test Cloud using Xamarin.UITest</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>
</table>

## Package

<table>
        <tr>
            <th>Task</th>
      <th>Versions</th>
        </tr>
        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/package/_img/cocoapods.png"/>
            [CocoaPods](../steps/package/cocoapods.md)<br/>
      CocoaPods is the dependency manager for Swift and Objective-C Cocoa projects. Runs pod install
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/package/_img/npm.png"/>
            [npm](../steps/package/npm-install.md)<br/>
      Install npm packages
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/package/_img/nuget-installer.png"/>
            [NuGet Installer](../steps/package/nuget-installer.md)<br/>
      Installs and updates missing NuGet packages
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

    <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/package/_img/nuget-packager.png"/>
            [NuGet Packager](../steps/package/nuget-packager.md)<br/>
      Creates nupkg outputs from csproj or nuspec files
      </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
        </tr>

    <tr>
            <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/package/_img/nuget-publisher.png"/>
            [NuGet Publisher](../steps/package/nuget-publisher.md)<br/>
      Uploads nupkg files to a nuget server
      </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
        </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/package/_img/xamarin-component-restore.png"/>
      [Xamarin component restore](../steps/package/xamarin-component-restore.md)<br/>Restores Xamarin components for the specified solution</td>
      <td>Team Services, TFS 2017</td>
    </tr>
</table>

## Deploy

<table>
  <tr>
    <th>Task</th>
      <th>Versions</th>
  </tr>

  <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-web-app-deployment-icon.png"/>
       [Azure App Service Deploy](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureRmWebAppDeployment)<br/>
      Update Azure App Service using Web Deploy / Kudu REST APIs
      </td>
      <td>Team Services, TFS 2017</td>
  </tr>

  <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-app-service-manage.png"/>
       [Azure App Service Manage](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureAppServiceManage)<br/>
      Start, Stop, Restart or Slot swap for an Azure App Service
      </td>
      <td>Team Services, TFS 2017</td>
  </tr>

  <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-cli-icon.png"/>
       [Azure CLI](../steps/deploy/azure-cli.md)<br/>
      Run a shell or batch script containing Azure CLI commands against an Azure subscription
      </td>
      <td>Team Services, TFS 2017</td>
  </tr>

  <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-cloud-service-deployment-icon.png"/>
       [Azure Cloud Service Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureCloudPowerShellDeployment)<br/>
      Deploy an Azure Cloud Service
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-file-copy-icon.png"/>
       [Azure File Copy](../steps/deploy/azure-file-copy.md)<br/> 
      Copy files to Azure blob or VM(s)
       </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
    </tr>

  <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-key-vault-icon.png"/>
       [Azure Key Vault](../steps/deploy/azure-key-vault.md)<br/>
      Incorporate secrets from an Azure Key Vault into a release definition
      </td>
      <td>Team Services</td>
  </tr>

    <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-powershell-icon.png"/>
       [Azure PowerShell](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzurePowerShell)<br/>
      Run a PowerShell script within an Azure environment
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
        </tr>

        <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-resource-group-deployment-icon.png"/>
       [Azure Resource Group Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureResourceGroupDeployment)<br/> 
      Deploy, start, stop, delete Azure Resource Groups
       </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
    </tr>

    <tr>
       <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-sql-database-deployment-icon.png"/>
       [Azure SQL Database Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/SqlAzureDacpacDeployment)<br/> 
      Deploy Azure SQL DB using DACPAC
       </td>
      <td>Team Services, TFS 2015 Update 3 and newer</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/ssh.png"/>
      [Copy Files Over SSH](../steps/deploy/copy-files-over-ssh.md)<br/>
      Copy files from source folder to target folder on a remote machine over SSH</td>
      <td>Team Services, TFS 2017</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/iis-deploy-icon.png"/>
      [IIS Web App Deploy](../steps/deploy/iis-deploy.md)<br/>
      Deploy IIS Websites and Virtual Applications using WebDeploy</td>
      <td>Team Services</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/iis-manage-icon.png"/>
      [IIS Web App Manage](../steps/deploy/iis-manage.md)<br/>
      Create or update, start or stop, and recycle IIS Websites, IIS Web Applications, Virtual Directories, and IIS Application Pools</td>
      <td>Team Services</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/manual-intervention-icon.png"/>
      [Manual Intervention](../concepts/process/phases.md#the-manual-intervention-task)<br/>
      Pause deployment and wait for intervention</td>
      <td>Team Services, TFS 2017</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/mobile-center-upload-icon.png"/>
      [Mobile Center Upload](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/VSMobileCenterUpload)<br/>
      Upload mobile app packages to Visual Studio Mobile Center
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/powershell-on-target-machines-icon.png"/>
      [PowerShell on Target Machines](../steps/deploy/powershell-on-target-machines.md)<br/>
      Execute PowerShell scripts on remote machine(s)
      </td>
      <td>Team Services, TFS 2015 RTM and newer</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-service-fabric.png"/>
      [Service Fabric Application Deployment](../steps/deploy/service-fabric-deploy.md)<br/>
      Deploy a Service Fabric application to a cluster
      </td>
      <td>Team Services, TFS 2017</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/azure-service-fabric.png"/>
      [Service Fabric Compose Deploy](../steps/deploy/service-fabric-compose-deploy.md)<br/>
      Deploy a Service Fabric application to a cluster using a compose file
      </td>
      <td>Team Services</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/ssh.png"/>
      [SSH](../steps/deploy/ssh.md)<br/>
      Run shell commands or a script on a remote machine using SSH
      </td>
      <td>Team Services, TFS 2017</td>
    </tr>

    <tr>
      <td><img style="float:left;padding-right:5px" alt="icon" src="../steps/deploy/_img/windows-machine-file-copy-icon.png"/>
      [Windows Machine File Copy](../steps/deploy/windows-machine-file-copy.md)<br/>
      Copy files to remote machine(s)</td>
      <td>Team Services, TFS 2015 RTM and newer</td>
    </tr>
</table>

<h2 id="tool">Tool</h2>

| Task | Versions |
|------|----------|
| <img style="float:left;padding-right:5px" alt="icon" src="../steps/tool/_img/node.png"/> [Node Tool Installer](../steps/tool/node-js.md)<br/> Finds or downloads and caches the specified version of [Node.js](https://nodejs.org/) and adds it to the PATH | Team Services |

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
