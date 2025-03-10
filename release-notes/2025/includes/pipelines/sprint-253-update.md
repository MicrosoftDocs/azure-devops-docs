---
author: ckanyika
ms.author: ckanyika
ms.date: 3/12/2025
ms.topic: include
---

### ubuntu-latest now runs Ubuntu 24.04


### Segmented Identities to acquire OIDC token

### Upgrade Gradle task

### CDN URL from Edgio endpoint to a custom URL

### StringList parameter type

One of the top requested YAML pipelines features is to [define parameters that contain a list of items](https://developercommunity.visualstudio.com/t/parameters-that-support-multiselect/1224839).

Starting with this sprint, weve added a new parameter type, named `StringList`, that provides this capability.

Say you want to allow those who queue pipeline runs to choose which regions they want to deploy a payload to. Now you can do this as shown in the example below.

```yaml
parameters:
- name: regions
  type: stringList
  displayName: Regions
  values:
    - WUS
    - CUS
    - EUS

stages:
- ${{ each stage in parameters.regions}}:
  - stage: ${{stage}}
    displayName: Deploy to ${{stage}}
    jobs:
    - job:
      steps:
      - script: ./deploy ${{stage}}
```

When queuing this pipeline, you'll now have the option of choosing multiple regions to deploy to, as shown in the screenshot below.

###  Ability to disable release pipelines

### Identity of user who requested a stage to run

to improve security of your YAML pipelines, you may wish to know who requested a stage to run. To address this need, were adding two new predefined variables, `Build.StageRequestedBy` and `Build.StageRequestedById`. These variables are similar to the `Build.RequestedFor` and `Build.RequestedForId` variables, but for a stage, not a run.

When a user explicitly triggers a user, for example, in case of a manually triggered stage or rerunning a stage, their identity will be used to fill in the two variables.

