```YAML
# Java Tool Installer
# Acquires a specific version of Java from a user supplied Azure blob or the tools cache and sets JAVA_HOME. Use this task to change the version of Java used in Java tasks.
- task: JavaToolInstaller@0
  inputs:
    #versionSpec: '8' 
    jdkArchitectureOption: # Options: x64, x86
    jdkSourceOption: # Options: azureStorage, localDirectory
    #jdkFile: # Required when jdkSourceOption == LocalDirectory
    #azureResourceManagerEndpoint: # Required when jdkSourceOption == AzureStorage
    #azureStorageAccountName: # Required when jdkSourceOption == AzureStorage
    #azureContainerName: # Required when jdkSourceOption == AzureStorage
    #azureCommonVirtualFile: # Required when jdkSourceOption == AzureStorage
    jdkDestinationDirectory: 
    #cleanDestinationDirectory: true 
```
