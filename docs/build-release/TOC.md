# [Build and Release](index.md)
# Quickstarts
## CI/CD to Azure web app
### [ASP.NET Core](apps/aspnet-core-to-webapp.md)
## CI/CD to Windows VMs
### ASP.NET Core
# Tutorials
## Create a build definition
## Create a release definition
# Concepts
## Agents
### [Build and release agents](concepts/agents/agents.md)
### [Agent pools and queues](concepts/agents/pools-queues.md)
### [Hosted agents](concepts/agents/hosted.md)
### [Deployment groups](concepts/definitions/release/deployment-groups/index.md)
## Definitions
### Build
#### [Artifacts](concepts/definitions/build-release/artifacts.md)
#### [History](define/history.md)
#### [Options](define/options.md)
#### [Repository](define/repository.md)
#### [Triggers](define/triggers.md)
#### [Variables](define/variables.md)
### Release
#### [Release definitions](concepts/definitions/release/index.md)
#### [Environments](concepts/definitions/release/environments.md)
#### [Artifacts](concepts/definitions/release/artifacts.md)
#### [Triggers](concepts/definitions/release/triggers.md)
#### [Variables](concepts/definitions/release/variables.md)
#### [Templates](concepts/definitions/release/env-templates.md)
## Process
### [Tasks](concepts/process/tasks.md)
### [Phases](concepts/process/phases.md)
### [Conditions](concepts/process/conditions.md)
## Licensing
### [Pipelines in TFS](concepts/licensing/concurrent-pipelines-tfs.md)
### [Pipelines in Team Services](concepts/licensing/concurrent-pipelines-ts.md)
## Library
### [Variable groups](concepts/library/variable-groups.md)
### [Task groups](concepts/library/task-groups.md)
### [Service endpoints](concepts/library/service-endpoints.md)
### [Secure files](concepts/library/secure-files.md)
## Policies
### [Retention policies](concepts/policies/retention.md)
### [Permissions](concepts/policies/permissions.md)
# How to
## Deploy an agent
### [Windows](actions/agents/v2-windows.md)
### [Windows (TFS 2015)](actions/agents/v1-windows.md)
### [OSX](actions/agents/v2-osx.md)
### [Linux](actions/agents/v2-linux.md)
### [Configure TFS authentication](actions/agents/configure-tfs-authentication.md)
## Configure/manage CI
### [Run a PowerShell script](scripts/index.md)
### [Run Git commands](scripts/git-commands.md)
### [Troubleshooting build](troubleshooting.md)
## Configure/manage CD
### [Debug deployment issues](actions/debug-deployment-issues.md)
### [Run SCVMM scripts for managing VMs](apps/cd/scvmm/manage-vms-using-scvmm.md)
### [Troubleshoot Azure connections](actions/azure-rm-endpoint.md)
## Automatically generate CI/CD
### [ASP.NET from Visual Studio](get-started/aspnet-4-ci-cd-vs-automatic.md)
### [ASP.NET Core with Docker from Visual Studio](apps/aspnet/aspnetcore-docker-to-azure.md)
## Use Package Management
### Set up Team Build with NuGet
#### [Restore private packages](package/nuget/)
#### [Pack and push packages](package/nuget/)
### Set up Team Build with npm
#### [Install private packages](package/npm/) 
#### [Publish NuGet packages](package/npm/)
### Set up Team Build with Maven
#### [Install private packages](package/maven/)
#### [Publish packages](package/maven/)
## Migrate
### [Migrate from XAML builds](actions/migrate-from-xaml-builds.md)
# [Reference](define/build.md)
## Build tasks
### [Android build](steps/build-release/android-build.md)
### [Android signing](steps/build-release/android-signing.md)
### [Ant](steps/build-release/ant.md)
### [CMake](steps/build-release/cmake.md)
### [Gradle](steps/build-release/gradle.md)
### [Grunt](steps/build-release/grunt.md)
### [Gulp](steps/build-release/gulp.md)
### [Index Sources & Publish Symbols](steps/build-release/index-sources-publish-symbols.md)
### [Jenkins Queue Job](steps/build-release/jenkins-queue-job.md)
### [Maven](steps/build-release/maven.md)
### [MSBuild](steps/build-release/msbuild.md)
### [Visual Studio Build](steps/build-release/visual-studio-build.md)
### [Xamarin.Android](steps/build-release/xamarin-android.md)
### [Xamarin.iOS](steps/build-release/xamarin-ios.md)
### [Xcode Build](steps/build-release/xcode-build.md)
### [Xcode Package iOS](steps/build-release/xcode-package-ios.md)
## Utility tasks
### [Archive files](steps/utility/archive-files.md)
### [Batch script](steps/utility/batch-script.md)
### [Command line](steps/utility/command-line.md)
### [Copy and Publish Build Artifacts](steps/utility/copy-and-publish-build-artifacts.md)
### [Copy Files](steps/utility/copy-files.md)
### [cURL Upload Files](steps/utility/curl-upload-files.md)
### [Delete Files](steps/utility/delete-files.md)
### [Extract Files](steps/utility/extract-files.md)
### [FTP Upload](steps/utility/ftp-upload.md)
### [Install Apple Certificate](steps/utility/install-apple-certificate.md)
### [Install Apple Provisioning Profile](steps/utility/install-apple-provisioning-profile.md)
### [PowerShell](steps/utility/powershell.md)
### [Publish Build Artifacts](steps/utility/publish-build-artifacts.md)
### [Service Fabric PowerShell](steps/utility/service-fabric-powershell.md)
### [Shell script](steps/utility/shell-script.md)
### [Update Service Fabric App Versions](steps/utility/service-fabric-versioning.md)
### [Xamarin license](steps/utility/xamarin-license.md)
## Test tasks
### [Cloud-based Apache JMeter Load Test](steps/test/cloud-based-apache-jmeter-load-test.md)
### [Cloud-based Load Test](steps/test/cloud-based-load-test.md)
### [Cloud-based Web Performance Test](steps/test/cloud-based-web-performance-test.md)
### [Mobile Center Test](steps/test/mobile-center-test.md)
### [Publish Code Coverage Results](steps/test/publish-code-coverage-results.md)
### [Publish Test Results](steps/test/publish-test-results.md)
### [Run Functional Tests](steps/test/run-functional-tests.md)
### [Visual Studio Test](steps/test/visual-studio-test.md)
### [Visual Studio Test Agent Deployment](steps/test/visual-studio-test-agent-deployment.md)
### [Xamarin Test Cloud](steps/test/xamarin-test-cloud.md)
## Package tasks
### [CocoaPods](steps/package/cocoapods.md)
### [npm](steps/package/npm-install.md)
### [NuGet Installer](steps/package/nuget-installer.md)
### [NuGet Packager](steps/package/nuget-packager.md)
### [NuGet Publisher](steps/package/nuget-publisher.md)
### [Xamarin Component Restore](steps/package/xamarin-component-restore.md)
## Deploy tasks
### [Azure App Service Deploy](steps/deploy/azure-app-service-deploy.md)
### [Azure App Service Manage](steps/deploy/azure-app-service-manage.md)
### [Azure CLI](steps/deploy/azure-cli.md)
### [Azure Cloud Service Deployment](steps/deploy/azure-cloud-service-deployment.md)
### [Azure File Copy](steps/deploy/azure-file-copy.md)
### [Azure Key Vault](steps/deploy/azure-key-vault.md)
### [Azure PowerShell](steps/deploy/azure-powershell.md)
### [Azure Resource Group Deployment](steps/deploy/azure-resource-group-deployment.md)
### [Azure SQL Database Deployment](steps/deploy/azure-sql-database-deployment.md)
### [Copy Files Over SSH](steps/deploy/copy-files-over-ssh.md)
### [IIS Web App Deploy](steps/deploy/iis-deploy.md)
### [IIS Web App Manage](steps/deploy/iis-manage.md)
### [Mobile Center Upload](steps/deploy/mobile-center-upload.md)
### [PowerShell on Target Machines](steps/deploy/powershell-on-target-machines.md)
### [Service Fabric App Deployment](steps/deploy/service-fabric-deploy.md)
### [Service Fabric Compose Deploy](steps/deploy/service-fabric-compose-deploy.md)
### [SSH](steps/deploy/ssh.md)
### [Windows Machine File Copy](steps/deploy/windows-machine-file-copy.md)
## Tool tasks
### [Node Tool Installer](steps/tool/node-js.md)
## [File matching patterns](steps/file-matching-patterns.md)
## [File and variable transform](steps/transforms-variable-substitution.md)
