```YAML
# Python pip authenticate V1
# Authentication task for the pip client used for installing Python distributions
- task: PipAuthenticate@1
  inputs:
    #artifactFeeds: MyFeed, MyTestFeed # Optional
    #pythonDownloadServiceConnections: pypiOrgFeed, OtherOrganizationFeed # Optional
    #onlyAddExtraIndex: false # Optional
```
