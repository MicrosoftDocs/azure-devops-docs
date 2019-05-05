```YAML
# Azure Cloud Service Deployment
# Deploy an Azure Cloud Service
- task: AzureCloudPowerShellDeployment@1
  inputs:
    azureClassicSubscription: 
    storageAccount: 
    serviceName: 
    serviceLocation: 
    csPkg: 
    csCfg: 
    #slotName: 'Production' 
    #deploymentLabel: '$(Build.BuildNumber)' # Optional
    #appendDateTimeToLabel: false # Optional
    #allowUpgrade: true 
    #simultaneousUpgrade: false # Optional
    #forceUpgrade: false # Optional
    #verifyRoleInstanceStatus: false # Optional
    #diagnosticStorageAccountKeys: # Optional
    #newServiceCustomCertificates: # Optional
    #newServiceAdditionalArguments: # Optional
    #newServiceAffinityGroup: # Optional
```
