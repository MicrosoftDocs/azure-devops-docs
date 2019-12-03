```YAML
# FTP upload
# Upload files using FTP
- task: FtpUpload@2
  inputs:
    #credentialsOption: 'serviceEndpoint' # Options: serviceEndpoint, inputs
    #serverEndpoint: # Required when credentialsOption == ServiceEndpoint
    #serverUrl: # Required when credentialsOption == Inputs
    #username: # Required when credentialsOption == Inputs
    #password: # Required when credentialsOption == Inputs
    rootDirectory: 
    #filePatterns: '**' 
    #remoteDirectory: '/upload/$(Build.BuildId)/' 
    #clean: false 
    #cleanContents: false # Required when clean == False
    #preservePaths: false 
    #trustSSL: false 
```
