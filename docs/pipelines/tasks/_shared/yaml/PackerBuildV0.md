```YAML
# Build Machine Image
# Build machine image using Packer. This image can be used for Azure Virtual machine scale set deployment
- task: PackerBuild@0
  inputs:
    #templateType: 'builtin' # Options: builtin, custom
    #customTemplateLocation: # Required when templateType == Custom
    #customTemplateParameters: '{}' # Optional
    connectedServiceName: 
    location: 
    storageAccountName: 
    azureResourceGroup: 
    #baseImageSource: 'default' # Options: default, customVhd
    #baseImage: 'MicrosoftWindowsServer:WindowsServer:2012-R2-Datacenter:windows' # Required when baseImageSource == Default# Options: microsoftWindowsServer:WindowsServer:2012-R2-Datacenter:Windows, microsoftWindowsServer:WindowsServer:2016-Datacenter:Windows, microsoftWindowsServer:WindowsServer:2012-Datacenter:Windows, microsoftWindowsServer:WindowsServer:2008-R2-SP1:Windows, canonical:UbuntuServer:14.04.4-LTS:Linux, canonical:UbuntuServer:16.04-LTS:Linux, redHat:RHEL:7.2:Linux, redHat:RHEL:6.8:Linux, openLogic:CentOS:7.2:Linux, openLogic:CentOS:6.8:Linux, credativ:Debian:8:Linux, credativ:Debian:7:Linux, sUSE:OpenSUSE-Leap:42.2:Linux, sUSE:SLES:12-SP2:Linux, sUSE:SLES:11-SP4:Linux
    #customImageUrl: # Required when baseImageSource == CustomVhd
    #customImageOSType: 'windows' # Required when baseImageSource == CustomVhd# Options: windows, linux
    packagePath: 
    deployScriptPath: 
    #deployScriptArguments: # Optional
    #additionalBuilderParameters: '{}' # Optional
    #skipTempFileCleanupDuringVMDeprovision: true # Optional
    #imageUri: # Optional
```
