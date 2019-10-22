---
title: Service Fabric Application Deployment task 
description: Service Fabric Application Deployment task
ms.assetid: 82493BC9-241C-491F-9B42-075FD0E33b52
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: mijacobs
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 7/25/2019
monikerRange: '>= tfs-2017'
---

# Service Fabric Application Deployment task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to deploy a Service Fabric application to a cluster.
This task deploys an Azure Service Fabric application to a cluster 
according to the settings defined in the publish profile.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Prerequisites

### Service Fabric

This task uses a Service Fabric installation to connect and 
deploy to a Service Fabric cluster.  
[Download and install Service Fabric](https://aka.ms/servicefabric) on the build agent.

::: moniker range=">= azure-devops-2019"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/ServiceFabricDeployV1.md)]

## Task Inputs

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>applicationPackagePath</code><br/>Application Package</td><td>(Required) Path to the application package that is to be deployed. [Variables](https://go.microsoft.com/fwlink/?LinkID=550988) and wildcards can be used in the path</td></tr>
<tr><td><code>serviceConnectionName</code><br/>Cluster Service Connection</td><td>(Required) Select an Azure Service Fabric service connection to be used to connect to the cluster. The settings defined in this referenced service connection will override those defined in the publish profile. Choose 'Manage' to register a new service connection. <br/>To connect to the cluster, the service fabric task uses the machine cert store to store the information about the certificate. Using the same certificate, if two releases run together on one machine they will start properly. However, if one of the tasks is complete, the certificate from the machine cert store would be cleaned up, which would affect the second release</td></tr>
<tr><td><code>publishProfilePath</code><br/>Publish Profile</td><td>(Optional) Path to the publish profile file that defines the settings to use. [Variables](https://go.microsoft.com/fwlink/?LinkID=550988) and wildcards can be used in the path. Publish profiles can be created in Visual Studio as shown <a href="https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-tutorial-deploy-app-to-party-cluster#publish-the-application-to-the-cluster">here</a></td></tr>
<tr><td><code>applicationParameterPath</code><br/>Application Parameters</td><td>(Optional) Path to the application parameters file. [Variables](https://go.microsoft.com/fwlink/?LinkID=550988) and wildcards can be used in the path. If specified, this will override the value in the publish profile. Application parameters file can be created in Visual Studio as shown <a href="https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-manage-multiple-environment-app-configuration#specifying-parameters-during-application-creation">here</a></td></tr>
<tr><td><code>overrideApplicationParameter</code><br/>Override Application Parameters</td><td>(Optional) Variables defined in the build or release pipeline will be matched against the 'Parameter Name' entries in the application manifest file. Application parameters file can be created in Visual Studio as shown <a href="https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-manage-multiple-environment-app-configuration#specifying-parameters-during-application-creation">here</a><br/>Example: If your application has a parameter defined as below- <br/>

```xml
<Parameters>
<Parameter Name = "SampleApp_PartitionCount" Value ="1"/>
<Parameter Name = "SampleApp_InstanceCount" DefaultValue ="-1"/>
</Parameters>
```
and you want to change the partition count to 2, you can define a release pipeline or an environment variable "SampleApp_PartitionCount" and its value as "2". <br/><b>Note:</b> If same variables are defined in the release pipeline and in the environment, then the environment variables will supersede the release pipeline variables<br/>Default value: false</td></tr>
<tr><td><code>compressPackage</code><br/>Compress Package</td><td>(Optional) Indicates whether the application package should be compressed before copying to the image store. If enabled, this will override the value in the publish profile. More information for compress package can be found <a href="https://docs.microsoft.com/azure/service-fabric/service-fabric-package-apps#compress-a-package">here</a><br/>Default value: false</td></tr>
<tr><td><code>copyPackageTimeoutSec</code><br/>CopyPackageTimeoutSec</td><td>(Optional) Timeout in seconds for copying application package to image store. If specified, this will override the value in the publish profile </td></tr>
<tr><td><code>registerPackageTimeoutSec</code><br/>RegisterPackageTimeoutSec</td><td>(Optional) Timeout in seconds for registering or un-registering application package</td></tr>
<tr><td><code>overwriteBehavior</code><br/>Overwrite Behavior</td><td>(Required) Overwrite Behavior: when upgrade is not configured and an Application with same name already exists in the cluster, then following actions are available => Never, Always, SameAppTypeAndVersion. <br/><b>Never</b> will not remove the existing Application. This is the default behavior. <br/><b>Always</b> will remove the existing Application even if its Application type and Version is different from the Application being created.<br/><b>SameAppTypeAndVersion</b> will remove the existing Application only if its Application type and Version is same as the Application being created<br/>Default value: SameAppTypeAndVersion</td></tr>
<tr><td><code>skipUpgradeSameTypeAndVersion</code><br/>Skip upgrade for same Type and Version</td><td>(Optional) Indicates whether an upgrade will be skipped if the same application type and version already exists in the cluster, otherwise the upgrade fails during validation. If enabled, re-deployments are idempotent. <br/>Default value: false</td></tr>
<tr><td><code>skipPackageValidation</code><br/>Skip package validation</td><td>(Optional) Indicates whether the package should be validated or not before deployment. More information about package validation can be found <a href="https://docs.microsoft.com/azure/service-fabric/service-fabric-package-apps#test-the-package" >here</a><br/>Default value: false</td></tr>
<tr><td><code>useDiffPackage</code><br/>Use Diff Package</td><td>(Optional) Diff package is created by task by comparing the package specified in Application Package input against the package which is currently registered in the target cluster. If a service version in cluster's current package is same as the new package, then this service package will be removed from new Application package. See more details about diff package <a href="https://docs.microsoft.com/azure/service-fabric/service-fabric-application-upgrade-advanced#upgrade-with-a-diff-package">here.</a><br/>Default value: false</td></tr>
<tr><td><code>overridePublishProfileSettings</code><br/>Override All Publish Profile Upgrade Settings</td><td>(Optional) This will override all upgrade settings with either the values specified below or the default value if not specified. More information about upgrade settings can be found <a href="https://docs.microsoft.com/azure/service-fabric/service-fabric-application-upgrade-parameters#visual-studio-and-powershell-parameters">here</a><br/>Default value: false</td></tr>
<tr><td><code>isUpgrade</code><br/>Upgrade the Application</td><td>(Optional) If false, the application will be overwritten. <br/>Default value: true</td></tr>
<tr><td><code>unregisterUnusedVersions</code><br/>Unregister Unused Versions</td><td>(Optional) Indicates whether all unused versions of the application type will be removed after an upgrade<br/>Default value: true</td></tr>
<tr><td><code>upgradeMode</code><br/>Upgrade Mode</td><td>(Required) <br/>Default value: Monitored</td></tr>
<tr><td><code>FailureAction</code><br/>FailureAction</td><td>(Required) <br/>Default value: Rollback</td></tr>
<tr><td><code>UpgradeReplicaSetCheckTimeoutSec</code><br/>UpgradeReplicaSetCheckTimeoutSec</td><td>(Optional) </td></tr>
<tr><td><code>TimeoutSec</code><br/>TimeoutSec</td><td>(Optional)</td></tr>
<tr><td><code>ForceRestart</code><br/>ForceRestart</td><td>(Optional) <br/>Default value: false</td></tr>
<tr><td><code>HealthCheckRetryTimeoutSec</code><br/>HealthCheckRetryTimeoutSec</td><td>(Optional) </td></tr>
<tr><td><code>HealthCheckWaitDurationSec</code><br/>HealthCheckWaitDurationSec</td><td>(Optional)</td></tr>
<tr><td><code>HealthCheckStableDurationSec</code><br/>HealthCheckStableDurationSec</td><td>(Optional)</td></tr>
<tr><td><code>UpgradeDomainTimeoutSec</code><br/>UpgradeDomainTimeoutSec</td><td>(Optional)</td></tr>
<tr><td><code>ConsiderWarningAsError</code><br/>ConsiderWarningAsError</td><td>(Optional) <br/>Default value: false</td></tr>
<tr><td><code>DefaultServiceTypeHealthPolicy</code><br/>DefaultServiceTypeHealthPolicy</td><td>(Optional)</td></tr>
<tr><td><code>MaxPercentUnhealthyDeployedApplications</code><br/>MaxPercentUnhealthyDeployedApplications</td><td>(Optional)</td></tr>
<tr><td><code>UpgradeTimeoutSec</code><br/>UpgradeTimeoutSec</td><td>(Optional)</td></tr>
<tr><td><code>ServiceTypeHealthPolicyMap</code><br/>ServiceTypeHealthPolicyMap</td><td>(Optional)</td></tr>
<tr><td><code>configureDockerSettings</code><br/>Configure Docker settings</td><td>Default value: false</td></tr>
<tr><td><code>registryCredentials</code><br/>Registry Credentials Source</td><td>(Required) Choose how credentials for the Docker registry will be provided<br/>Default value: AzureResourceManagerEndpoint</td></tr>
<tr><td><code>dockerRegistryEndpoint</code><br/>Docker Registry Service Connection</td><td>(Required) Select a Docker registry service connection. Required for commands that need to authenticate with a registry. <br/><b>Note:</b> task will try to encrypt the registry secret before transmitting it to service fabric cluster. However, it needs cluster's server certificate to be installed on agent machine in order to do so. If certificate is not present, secret will not be encrypted</td></tr>
<tr><td><code>azureSubscriptionEndpoint</code><br/>Azure subscription</td><td>(Required) Select an Azure subscription. <br/><b>Note:</b> task will try to encrypt the registry secret before transmitting it to service fabric cluster. However, it needs cluster's server certiticate to be installed on agent machine in order to do so. If certificate is not present, secret will not be encrypted</td></tr>
<tr><td><code>registryUserName</code><br/>Registry User Name</td><td>(Optional) Username for the Docker registry</td></tr>
<tr><td><code>registryPassword</code><br/>Registry Password</td><td>(Optional) Password for the Docker registry. If the password is not encrypted, it is recommended that you use a custom release pipeline secret variable to store it</td></tr>
<tr><td><code>passwordEncrypted</code><br/>Password Encrypted</td><td>(Optional) It is recommended to encrypt your password using [Invoke-ServiceFabricEncryptText](https://docs.microsoft.com/azure/service-fabric/service-fabric-application-secret-management#encrypt-application-secrets). If you do not, and a certificate matching the Server Certificate Thumbprint in the Cluster Service Connection is installed on the build agent, it will be used to encrypt the password; otherwise an error will occur</td></tr>
</table>

Also see: [Update Service Fabric Manifests task](../utility/service-fabric-versioning.md)

::: moniker-end

::: moniker range="< azure-devops-2019"

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Publish Profile** | The location of the publish profile that specifies the settings to use for deployment, including the location of the target Service Fabric cluster. Can include wildcards and variables. Example:<br />`$(system.defaultworkingdirectory)/**/drop/projectartifacts/**/PublishProfiles/Cloud.xml` |
| **Application Package** | The location of the Service Fabric application package to be deployed to the cluster. Can include wildcards and variables. Example: `$(system.defaultworkingdirectory)/**/drop/applicationpackage` |
| **Cluster Connection** | The name of the Azure Service Fabric service connection defined in the TS/TFS project that describes the connection to the cluster. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Also see: [Update Service Fabric App Versions task](../utility/service-fabric-versioning.md)

::: moniker-end

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
