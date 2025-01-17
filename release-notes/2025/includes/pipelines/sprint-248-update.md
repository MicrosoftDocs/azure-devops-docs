---
author: ckanyika
ms.author: ckanyika
ms.date: 1/17/2025
ms.topic: include
---

### New pipeline expression functions

Pipeline expression functions allow you to write powerful YAML pipelines. In this sprint, we've introduced two new functions:

* `iif(condition, value_when_true, value_when_false)` that returns `value_when_true` when `condition` evaluates to `true` or `value_when_false`, otherwise

* `trim(string)` that returns a new string in which whitespaces at the beginning and end of the string are removed

For example, you can use the `iif` function to dynamically select a pool for running your pipeline. If you want to build PRs using the Azure Pipelines pool, but all other runs should use a Managed DevOps Pool, you can write the following pipeline.
```yaml
variables:
  poolToUse: ${{ iif(eq(variables['Build.Reason'], 'PullRequest'), 'Azure Pipelines', 'ManagedDevOpsPool')}}

stages:
- stage: build
  pool: ${{variables.poolToUse}}
  jobs:
  - job:
    steps:   
    - task: DotNetCoreCLI@2
      inputs:
        command: 'build'
```

You can use the `trim` function to make your YAML more resilient to user input. For example, in the following pipeline, we use the `trim` function to ensure the stage name doesn't start with white spaces.
```yaml
parameters:
- name: regions
  type: string
  default: '  wus1,   wus2, wus3,wus4'

stages:
- ${{ each region in split(parameters.regions, ',')}}:
  - stage: stage_${{trim(region)}}
    displayName: Deploy to ${{trim(region)}}
    jobs:
    - job: deploy
      steps:
      - script: ./deploy.sh ${{trim(region)}}
```

### Enhancements to ManualValidation Task

The [ManualValidation](/azure/devops/pipelines/tasks/reference/manual-validation-v1) task enables you to pause a pipeline run and wait for manual intervention. One scenario for using this task is manual testing. 

To increase security of your pipeline, you may wish to restrict who can complete the task and resume the pipeline run. To this end, we're introducing a new version of the task that provides two additional parameters:

* `approvers`: restrict who can complete the task to a predefined set of users / security groups / teams

* `allowApproversToApproveTheirOwnRuns`: restrict the user who queued the pipeline run from resuming it

For example, the following YAML snippet restricts the set of people who can resume the pipeline run to members of the Release Approvers group, but not by the user who triggered the pipeline run.

```yaml
- task: ManualValidation@1
  inputs:
    notifyUsers: 'Release Approvers'
    approvers: 'Release Approvers'
    allowApproversToApproveTheirOwnRuns: false
```

In the `approvers` property, you can use the following values (comma separated) :
* Email address,
* Permission-Group,
* Project-Team,
* [ProjectName]\[Permission Group],
* [Org]\[Permission Group],
* [ProjectName]\[Project Team]

