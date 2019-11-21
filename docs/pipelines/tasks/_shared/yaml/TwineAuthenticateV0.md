```YAML
# Python twine upload authenticate
# Authenticate for uploading Python distributions using twine. Add '-r FeedName/EndpointName --config-file $(PYPIRC_PATH)' to your twine upload command. For feeds present in this organization, use the feed name as the repository (-r). Otherwise, use the endpoint name defined in the service connection.
- task: TwineAuthenticate@0
  inputs:
    artifactFeeds: 
    #externalFeeds: # Optional
    #publishPackageMetadata: true # Optional
```
