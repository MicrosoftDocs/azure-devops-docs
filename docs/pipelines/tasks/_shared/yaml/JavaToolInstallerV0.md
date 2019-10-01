```YAML
# Java tool installer
# Acquire a specific version of Java from a user-supplied Azure blob or the tool cache and sets JAVA_HOME
- task: JavaToolInstaller@0
  inputs:
    #versionSpec: '8' 
    jdkArchitectureOption: # Options: x64, x86
    jdkSourceOption: # Options: AzureStorage, LocalDirectory
    #jdkFile: # Required when jdkSourceOption == LocalDirectory
    #azureResourceManagerEndpoint: # Required when jdkSourceOption == AzureStorage
    #azureStorageAccountName: # Required when jdkSourceOption == AzureStorage
    #azureContainerName: # Required when jdkSourceOption == AzureStorage
    #azureCommonVirtualFile: # Required when jdkSourceOption == AzureStorage
    jdkDestinationDirectory: 
    #cleanDestinationDirectory: true 
```
