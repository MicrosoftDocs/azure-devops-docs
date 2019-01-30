```YAML
# Service Fabric Application Deployment
# Deploy a Service Fabric application to a cluster.
- task: ServiceFabricDeploy@1
  inputs:
    applicationPackagePath: 
    serviceConnectionName: 
    #publishProfilePath: # Optional
    #applicationParameterPath: # Optional
    #overrideApplicationParameter: false # Optional
    #compressPackage: false # Optional
    #copyPackageTimeoutSec: # Optional
    #registerPackageTimeoutSec: # Optional
    #overwriteBehavior: 'SameAppTypeAndVersion' # Options: always, never, sameAppTypeAndVersion
    #skipUpgradeSameTypeAndVersion: false # Optional
    #skipPackageValidation: false # Optional
    #useDiffPackage: false # Optional
    #overridePublishProfileSettings: false # Optional
    #isUpgrade: true # Optional
    #unregisterUnusedVersions: true # Optional
    #upgradeMode: 'Monitored' # Required when overridePublishProfileSettings == True && IsUpgrade == True# Options: monitored, unmonitoredAuto, unmonitoredManual
    #failureAction: 'Rollback' # Required when overridePublishProfileSettings == True && IsUpgrade == True && UpgradeMode == Monitored# Options: rollback, manual
    #upgradeReplicaSetCheckTimeoutSec: # Optional
    #timeoutSec: # Optional
    #forceRestart: false # Optional
    #healthCheckRetryTimeoutSec: # Optional
    #healthCheckWaitDurationSec: # Optional
    #healthCheckStableDurationSec: # Optional
    #upgradeDomainTimeoutSec: # Optional
    #considerWarningAsError: false # Optional
    #defaultServiceTypeHealthPolicy: # Optional
    #maxPercentUnhealthyDeployedApplications: # Optional
    #upgradeTimeoutSec: # Optional
    #serviceTypeHealthPolicyMap: # Optional
    #configureDockerSettings: false # Optional
    #registryCredentials: 'AzureResourceManagerEndpoint' # Required when configureDockerSettings == True# Options: azureResourceManagerEndpoint, containerRegistryEndpoint, usernamePassword
    #dockerRegistryConnection: # Required when configureDockerSettings == True && RegistryCredentials == ContainerRegistryEndpoint
    #azureSubscription: # Required when configureDockerSettings == True && RegistryCredentials == AzureResourceManagerEndpoint
    #registryUserName: # Optional
    #registryPassword: # Optional
    #passwordEncrypted: true # Optional
```
