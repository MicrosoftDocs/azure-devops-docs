```YAML
# Azure IoT Edge
# Azure IoT Edge pipelines tasks for continuous integration(build and push docker image) and continuous deployment(create Edge deployment on Azure)
- task: AzureIoTEdge@2
  inputs:
    #action: 'Build module images' # Options: build Module Images, push Module Images, deploy To IoT Edge Devices
    #deploymentFilePath: '$(System.DefaultWorkingDirectory)/**/*.json' # Required when action == Deploy To IoT Edge Devices
    #azureSubscription: # Required when action == Deploy To IoT Edge Devices
    #iothubname: # Required when action == Deploy To IoT Edge Devices
    #deploymentid: '$(System.TeamProject)-devops-deployment' 
    #priority: '0' 
    #deviceOption: # Required when action == Deploy To IoT Edge Devices# Options: single Device, multiple Devices
    #deviceId: # Required when deviceOption == Single Device
    #targetcondition: # Required when deviceOption == Multiple Devices
    #containerregistrytype: 'Azure Container Registry' # Required when action == Push Module Images# Options: azure Container Registry, generic Container Registry
    #dockerRegistryConnection: # Required when containerregistrytype == Generic Container Registry
    #azureSubscriptionEndpoint: # Optional
    #azureContainerRegistry: # Required when containerregistrytype == Azure Container Registry
    #templateFilePath: 'deployment.template.json' # Required when action == Build Module Images || Action == Push Module Images
    #defaultPlatform: 'amd64' # Required when action == Build Module Images || Action == Push Module Images# Options: amd64, windows-Amd64, arm32v7
    #bypassModules: # Optional
```
