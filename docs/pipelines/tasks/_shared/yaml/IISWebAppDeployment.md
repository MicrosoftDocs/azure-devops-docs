```YAML
# [Deprecated] IIS Web App Deployment
# Deploy by MSDeploy, create/update website & app pools
- task: IISWebAppDeployment@1
  inputs:
    environmentName: 
    #adminUserName: # Optional
    #adminPassword: # Optional
    #winRMProtocol: # Optional. Options: http, https
    #testCertificate: true # Optional
    webDeployPackage: 
    #webDeployParamFile: # Optional
    #overRideParams: # Optional
    #createWebSite: false # Optional
    #webSiteName: # Required when createWebSite == True
    #webSitePhysicalPath: '%SystemDrive%\inetpub\wwwroot' # Required when createWebSite == True
    #webSitePhysicalPathAuth: 'Application User (Pass-through)' # Required when createWebSite == True# Options: webSiteUserPassThrough, webSiteWindowsAuth
    #webSiteAuthUserName: # Required when webSitePhysicalPathAuth == WebSiteWindowsAuth
    #webSiteAuthUserPassword: # Optional
    #addBinding: true # Optional
    #assignDuplicateBinding: false # Optional
    #protocol: 'http' # Required when addBinding == True# Options: https, http
    #iPAddress: 'All Unassigned' # Required when addBinding == True
    #port: '80' # Required when addBinding == True
    #serverNameIndication: false # Optional
    #hostNameWithOutSNI: # Optional
    #hostNameWithHttp: # Optional
    #hostNameWithSNI: # Required when serverNameIndication == True
    #sSLCertThumbPrint: # Required when protocol == Https
    #createAppPool: false # Optional
    #appPoolName: # Required when createAppPool == True
    #dotNetVersion: 'v4.0' # Required when createAppPool == True# Options: v4.0, v2.0, no Managed Code
    #pipeLineMode: 'Integrated' # Required when createAppPool == True# Options: integrated, classic
    #appPoolIdentity: 'ApplicationPoolIdentity' # Required when createAppPool == True# Options: applicationPoolIdentity, localService, localSystem, networkService, specificUser
    #appPoolUsername: # Required when appPoolIdentity == SpecificUser
    #appPoolPassword: # Optional
    #appCmdCommands: # Optional
    #deployInParallel: true # Optional
    #resourceFilteringMethod: 'machineNames' # Optional. Options: machineNames, tags
    #machineFilter: # Optional
```
