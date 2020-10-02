---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 01/23/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Download pipeline artifacts
# Download build and pipeline artifacts
- task: DownloadPipelineArtifact@2
  inputs:
    #source: 'current' # Options: current, specific
    #project: # Required when source == Specific
    #pipeline: # Required when source == Specific
    #preferTriggeringPipeline: false # Optional
    #runVersion: 'latest' # Required when source == Specific# Options: latest, latestFromBranch, specific
    #runBranch: 'refs/heads/master' # Required when source == Specific && RunVersion == LatestFromBranch
    #runId: # Required when source == Specific && RunVersion == Specific
    #tags: # Optional
    #artifact: # Optional
    #patterns: '**' # Optional
    #path: '$(Pipeline.Workspace)' 
```
