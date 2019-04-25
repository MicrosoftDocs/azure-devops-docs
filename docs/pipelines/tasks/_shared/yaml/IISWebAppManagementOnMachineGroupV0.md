```YAML
# IIS Web App Manage
# Create or update a Website, Web App, Virtual Directories, and Application Pool
- task: IISWebAppManagementOnMachineGroup@0
  inputs:
    #enableIIS: false # Optional
    #iISDeploymentType: 'IISWebsite' # Options: iISWebsite, iISWebApplication, iISVirtualDirectory, iISApplicationPool
    #actionIISWebsite: 'CreateOrUpdateWebsite' # Required when iISDeploymentType == IISWebsite# Options: createOrUpdateWebsite, startWebsite, stopWebsite
    #actionIISApplicationPool: 'CreateOrUpdateAppPool' # Required when iISDeploymentType == IISApplicationPool# Options: createOrUpdateAppPool, startAppPool, stopAppPool, recycleAppPool
    #startStopWebsiteName: # Required when actionIISWebsite == StartWebsite || ActionIISWebsite == StopWebsite
    websiteName: 
    #websitePhysicalPath: '%SystemDrive%\inetpub\wwwroot' 
    #websitePhysicalPathAuth: 'WebsiteUserPassThrough' # Options: websiteUserPassThrough, websiteWindowsAuth
    #websiteAuthUserName: # Required when websitePhysicalPathAuth == WebsiteWindowsAuth
    #websiteAuthUserPassword: # Optional
    #addBinding: false # Optional
    #protocol: 'http' # Required when iISDeploymentType == RandomDeployment# Options: https, http
    #iPAddress: 'All Unassigned' # Required when iISDeploymentType == RandomDeployment
    #port: '80' # Required when iISDeploymentType == RandomDeployment
    #serverNameIndication: false # Optional
    #hostNameWithOutSNI: # Optional
    #hostNameWithHttp: # Optional
    #hostNameWithSNI: # Required when iISDeploymentType == RandomDeployment
    #sSLCertThumbPrint: # Required when iISDeploymentType == RandomDeployment
    bindings: 
    #createOrUpdateAppPoolForWebsite: false # Optional
    #configureAuthenticationForWebsite: false # Optional
    appPoolNameForWebsite: 
    #dotNetVersionForWebsite: 'v4.0' # Options: v4.0, v2.0, no Managed Code
    #pipeLineModeForWebsite: 'Integrated' # Options: integrated, classic
    #appPoolIdentityForWebsite: 'ApplicationPoolIdentity' # Options: applicationPoolIdentity, localService, localSystem, networkService, specificUser
    #appPoolUsernameForWebsite: # Required when appPoolIdentityForWebsite == SpecificUser
    #appPoolPasswordForWebsite: # Optional
    #anonymousAuthenticationForWebsite: false # Optional
    #basicAuthenticationForWebsite: false # Optional
    #windowsAuthenticationForWebsite: true # Optional
    parentWebsiteNameForVD: 
    virtualPathForVD: 
    #physicalPathForVD: '%SystemDrive%\inetpub\wwwroot' 
    #vDPhysicalPathAuth: 'VDUserPassThrough' # Optional. Options: vDUserPassThrough, vDWindowsAuth
    #vDAuthUserName: # Required when vDPhysicalPathAuth == VDWindowsAuth
    #vDAuthUserPassword: # Optional
    parentWebsiteNameForApplication: 
    virtualPathForApplication: 
    #physicalPathForApplication: '%SystemDrive%\inetpub\wwwroot' 
    #applicationPhysicalPathAuth: 'ApplicationUserPassThrough' # Optional. Options: applicationUserPassThrough, applicationWindowsAuth
    #applicationAuthUserName: # Required when applicationPhysicalPathAuth == ApplicationWindowsAuth
    #applicationAuthUserPassword: # Optional
    #createOrUpdateAppPoolForApplication: false # Optional
    appPoolNameForApplication: 
    #dotNetVersionForApplication: 'v4.0' # Options: v4.0, v2.0, no Managed Code
    #pipeLineModeForApplication: 'Integrated' # Options: integrated, classic
    #appPoolIdentityForApplication: 'ApplicationPoolIdentity' # Options: applicationPoolIdentity, localService, localSystem, networkService, specificUser
    #appPoolUsernameForApplication: # Required when appPoolIdentityForApplication == SpecificUser
    #appPoolPasswordForApplication: # Optional
    appPoolName: 
    #dotNetVersion: 'v4.0' # Options: v4.0, v2.0, no Managed Code
    #pipeLineMode: 'Integrated' # Options: integrated, classic
    #appPoolIdentity: 'ApplicationPoolIdentity' # Options: applicationPoolIdentity, localService, localSystem, networkService, specificUser
    #appPoolUsername: # Required when appPoolIdentity == SpecificUser
    #appPoolPassword: # Optional
    #startStopRecycleAppPoolName: # Required when actionIISApplicationPool == StartAppPool || ActionIISApplicationPool == StopAppPool || ActionIISApplicationPool == RecycleAppPool
    #appCmdCommands: # Optional
```
