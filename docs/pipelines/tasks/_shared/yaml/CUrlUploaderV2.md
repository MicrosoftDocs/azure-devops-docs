```YAML
# cURL Upload Files
# Use cURL to upload files.
- task: cURLUploader@2
  inputs:
    files: 
    #authType: 'ServiceEndpoint' # Optional. Options: serviceEndpoint, userAndPass
    #serviceEndpoint: # Required when authType == ServiceEndpoint
    #username: # Optional
    #password: # Optional
    #url: # Required when authType == UserAndPass
    #remotePath: 'upload/$(Build.BuildId)/' # Optional
    #options: # Optional
    #redirectStderr: true # Optional
```
