---
ms.topic: include
ms.date: 02/11/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

## Example

```yaml
steps:
- task: CopyFiles@2
  inputs:
    contents: '_buildOutput/**'
    targetFolder: $(Build.ArtifactStagingDirectory)
- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: $(Build.ArtifactStagingDirectory)
    artifactName: MyBuildOutputs
```