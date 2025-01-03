---
title: Design and run a YAML pipeline with stages
description: 
ms.topic: how-to 
ms.date: 01/03/2025
monikerRange: 'azure-devops'
ai-usage: ai-assisted

#customer intent: As a developer, I want to design a sample pipeline with stages so that I can see how to use conditions, validation, triggers, etc..

---

# Run stages
 
[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this article, learn how to create and run a more complex YAML pipeline with multiple stages and conditions. The example pipeline includes build, test, and deploy stages and also has optional stages for alternate deployments and rollbacks. With multiple stages you can isolate different parts of your pipeline, improve quality control and security, have better visibility into the pipeline's progress, and mitigate risk. The rollback stage lets you quickly revert to a stable version if something goes wrong, enhacing reliability and stability. 

This code works for most scenarios but doesn't include language or platform-specific requirements. As a next step, customize the pipeline for your specific implementation needs. 

## Prerequisites

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure DevOps organization and project. [Create one for free](../get-started/pipelines-sign-up.md). 
* An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier. 
* Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../create-first-pipeline.md). 

## 1. Create the build stage

In the `Build` stage, restore dependencies and run unit tests to make sure the code is ready for testing and deployment. If your application needs to compile source code, do so in the build stage.

```yaml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

stages:
- stage: Build
  displayName: 'Build Stage'
  jobs:
  - job: BuildJob
    displayName: 'Build Job'
    steps:
    - script: |
        echo "Restoring project dependencies..."
      displayName: 'Restore dependencies'
    - script: |
        echo "Running unit tests..."
      displayName: 'Run unit tests'
```
    
## 2. Add the test stage 

The `Test` stage runs tests on the project and typically publishes the test results to Azure DevOps. To learn more about publishing test results, see the [Publish Test Results task](/azure/devops/pipelines/tasks/reference/publish-test-results-v2). 

The Test stage only runs if the Build stage completes successfully and the stage can't be skipped.

Because `isSkippable` is set to `false`, the option to skip the Test stage isn't available in the Azure DevOps UI. 

:::image type="content" source="media/stages/isskippable-stage-false.png" alt-text="Screenshot of stage that can't be skipped.":::  

```yaml
- stage: Test
  displayName: 'Test Stage'
  dependsOn: Build
  isSkippable: false
  jobs:
  - job: TestJob
    displayName: 'Test Job'
    steps:
    - script: |
        echo "Running unit tests..."
      displayName: 'Run unit tests'
```

## 3. Deploy to staging

The `DeployToStaging` stage depends on the `Test` stage to run. The `DeployStagingJobWithValidation` job requires manual approval. The [manual validation task](/azure/devops/pipelines/tasks/reference/manual-validation-v1) pauses the pipeline run and waits for a manual interaction. A user needs to validate the stage before the run proceeds. Having a manual approval in your pipeline adds another level of security, helps mitigate risks, and makes sure that all changes get reviewed by the appropriate stakeholders. 

The pool for the manual approval is `server`. Manual validations only run on a server pool. 

```yaml
- stage: DeployToStaging
  displayName: 'Deploy to Staging'
  dependsOn: Test
  jobs:
  - job: DeployStagingJob
    displayName: 'Deploy to Staging Job'
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - script: |
        echo "Build staging job..."
      displayName: 'Build and deploy to staging'

  - job: DeployStagingJobWithValidation
    pool: server
    timeoutInMinutes: 4320 # job times out in 3 days
    displayName: 'Deploy to Staging Job'
    steps:
    - task: ManualValidation@1
      timeoutInMinutes: 1440 # task times out in 1 day
      inputs:
        notifyUsers: user@example.com
        instructions: 'Please validate the stage configuration and resume'
        onTimeout: 'resume'
```

## 4. Deploy to production

In the `DeployToProduction` stage, the application deploys to the production environment, but only if the `DeployToStaging` stage succeeds and the source branch is either `main` or `release`. 

The [manual validation task](/azure/devops/pipelines/tasks/reference/manual-validation-v1) here adds a second human validation step for security and quality control. We also used a manual validation task in the `DeployToStaging` stage. 

```yaml
- stage: DeployToProduction
  displayName: 'Deploy to Production'
  dependsOn: DeployToStaging
  lockBehavior: sequential
  condition: and(succeeded(), in(variables['Build.SourceBranch'], 'refs/heads/main', 'refs/heads/release'))
  jobs:
  - job: DeployProductionJob
    displayName: 'Deploy to Production Job'
    steps:
    - script: |
        echo "Deploying to production..."
        # Add your deployment commands here
      displayName: 'Run deployment commands'
  - job: waitForValidation
    displayName: Wait for external validation
    pool: server
    timeoutInMinutes: 4320 # job times out in 3 days
    steps:
    - task: ManualValidation@1
      timeoutInMinutes: 1440 # task times out in 1 day
      inputs:
        notifyUsers: user@example.com
        instructions: 'Please validate the build configuration and resume'
        onTimeout: 'resume'
```

## 5. Add optional alternate production and rollback stages

Two optional stages,`DeployToAlternateProduction` and `Rollback`, are manually queued. The `DeployToAlternateProduction` stage lets you have a backup production environment ready in case your primary environment fails. This enhances the overall reliability and availability of your application. You may also want to have an alternate deployment environment for disaster recovery or testing and validation. For more complicated deployment strategies, see [Deployment jobs](deployment-jobs.md).

The `Rollback` stage provides a safety net to revert your application to a previously stable state if something goes wrong during or after a deployment. This could be because of a deployment failure, bug, compliance requirement, disaster recovery, or other issue. A rollback stage is essential for maintaining the stability and reliability of your application. 

```yaml
- stage: DeployToAlternateProduction
  displayName: 'Deploy to Alternate Production'
  condition: succeeded()
  trigger: manual
  jobs:
  - job: DeployAlternateProductionJob
    displayName: 'Deploy to Alternate Production Job'
    steps:
    - script: |
        echo "Deploying to alternate production..."
        # Add your deployment commands here
      displayName: 'Run deployment commands'

- stage: Rollback
  displayName: 'Rollback Stage'
  trigger: manual
  jobs:
  - job: RollbackJob
    displayName: 'Rollback Job'
    steps:
    - script: |
        echo "Rolling back the deployment..."
        # Add your rollback commands here
      displayName: 'Run rollback commands'
```


## Next steps

> [!div class="nextstepaction"]
> [Learn about the pipeline run sequence](runs.md)
