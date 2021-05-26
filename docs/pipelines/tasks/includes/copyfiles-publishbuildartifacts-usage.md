---
ms.topic: include
ms.date: 02/11/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
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
- script: ./buildSomething.sh
- task: CopyFiles@2
  inputs:
    contents: '_buildOutput/**'
    targetFolder: $(Build.ArtifactStagingDirectory)
- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: $(Build.ArtifactStagingDirectory)
    artifactName: MyBuildOutputs
```
::: moniker-end