```YAML
# Azure Resource Group Deployment
# Deploy an Azure resource manager (ARM) template to a resource group. You can also start, stop, delete, deallocate all Virtual Machines (VM) in a resource group
- task: AzureResourceGroupDeployment@2
  inputs:
    azureSubscription: 
    #action: 'Create Or Update Resource Group' # Options: create Or Update Resource Group, select Resource Group, start, stop, stopWithDeallocate, restart, delete, deleteRG
    resourceGroupName: 
    #location: # Required when action == Create Or Update Resource Group
    #templateLocation: 'Linked artifact' # Options: linked Artifact, uRL Of The File
    #csmFileLink: # Required when templateLocation == URL Of The File
    #csmParametersFileLink: # Optional
    #csmFile: # Required when  TemplateLocation == Linked Artifact
    #csmParametersFile: # Optional
    #overrideParameters: # Optional
    #deploymentMode: 'Incremental' # Options: incremental, complete, validation
    #enableDeploymentPrerequisites: 'None' # Optional. Options: none, configureVMwithWinRM, configureVMWithDGAgent
    #teamServicesConnection: # Required when enableDeploymentPrerequisites == ConfigureVMWithDGAgent
    #teamProject: # Required when enableDeploymentPrerequisites == ConfigureVMWithDGAgent
    #deploymentGroupName: # Required when enableDeploymentPrerequisites == ConfigureVMWithDGAgent
    #copyAzureVMTags: true # Optional
    #runAgentServiceAsUser: # Optional
    #userName: # Required when enableDeploymentPrerequisites == ConfigureVMWithDGAgent && RunAgentServiceAsUser == True
    #password: # Optional
    #outputVariable: # Optional
    #deploymentName: # Optional
    #deploymentOutputs: # Optional
    #addSpnToEnvironment: false # Optional
```
