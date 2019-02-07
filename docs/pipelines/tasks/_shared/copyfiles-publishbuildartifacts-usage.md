---
ms.topic: include
---

::: moniker range="azure-devops"
## Usage

A typical pattern for using this task is:
- Build something
- Copy build outputs to a staging directory
- Publish staged artifacts

For example:

```yaml
steps:
- powershell: .\build.ps1
- task: CopyFiles@2
  inputs:
    contents: '_buildOutput\**'
    targetFolder: $(Build.ArtifactStagingDirectory)
- task: PublishBuildArtifacts@1
  inputs:
    pathtoPublish: $(Build.ArtifactStagingDirectory)
    artifactName: MyBuildOutputs
```
::: moniker-end