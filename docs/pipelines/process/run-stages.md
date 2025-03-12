---
title: Build a YAML pipeline with stages
description: Create and run a complex YAML pipeline with multiple stages, conditions, validations, triggers, and rollback options.
ms.topic: how-to 
ms.date: 02/21/2025
monikerRange: 'azure-devops'
ai-usage: ai-assisted

#customer intent: As a developer, I want to design a sample pipeline with stages so that I can see how to use conditions, validation, triggers, etc..

---

# Build a YAML pipeline with stages
 
[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With multiple stages, you can isolate different parts of your pipeline, improve quality control and security, have better visibility into the pipeline's progress, and mitigate risk. 

In this article, learn how to create and run a more complex YAML pipeline with multiple stages and conditions. The example pipeline includes build, test, and deploy stages and also has optional stages for alternate deployments and rollbacks. The rollback stage lets you quickly revert to a stable version if something goes wrong, enhancing reliability and stability. 

This code works for most scenarios but doesn't include language or platform-specific requirements. As a next step, customize the pipeline for your specific implementation needs. 

To learn how to build a Classic pipeline with stages, see [Deploy to different stages from multiple branches using Classic release pipelines](../release/deploy-multiple-branches.md). 

## Prerequisites

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br>   - An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier.  <br> - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../create-first-pipeline.md). <br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project: Member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md). |
| **GitHub** | - A [GitHub](https://github.com) account.<br>   - A [GitHub service connection](../library/service-endpoints.md) to authorize Azure Pipelines.|
| **Azure** | - An [Azure subscription](https://azure.microsoft.com/free/).<br>   - An [Azure Container Registry](/azure/container-registry/container-registry-get-started-portal). |


## 1. Create a starter pipeline

1. In your Azure DevOps project, select **Pipelines** > **Create Pipeline**, and then select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**.
1. Save your pipeline. 

## 2. Add the build stage

The starter pipeline you added in the previous stage was a placeholder. Remove the starter pipeline code and add in a new YAML pipeline with a Build stage. 

1. Remove all of the code in your pipeline. 
1. Replace the code with the following YAML that includes a `Build` stage. 

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
    
In this `Build` stage and throughout the sample pipeline, there are placeholder script tasks. When you build a working pipeline, replace the placeholder commands like `Restoring project dependencies...` with actual code. 

In this sample, you're restoring dependencies and running unit tests to make sure the code is ready for testing and deployment. If your application needs to compile source code, that will also happen in the `Build` stage.

## 3. Add the test stage 

The `Test` stage runs tests on the project and publishes the test results to Azure DevOps. To learn more about publishing test results, see the [Publish Test Results task](/azure/devops/pipelines/tasks/reference/publish-test-results-v2). 

The `Test` stage only runs if the `Build` stage completes successfully and the stage can't be skipped.

Add the `Test` stage after the `Build` stage in your pipeline. 

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

The Test stage includes an attribute that sets `isSkippable` to `false`. When you set `isSkippable` to `false`, a stage can't be skipped. The option to skip the stage is also disabled in the Azure DevOps UI. 

:::image type="content" source="media/stages/is-skippable-stage-false.png" alt-text="Screenshot of stage that can't be skipped.":::  

## 4. Deploy to staging

Add the `DeployToStaging` stage after the `Test` stage in your pipeline.

The `DeployToStaging` stage depends on the `Test` stage to run. There are two different jobs in the `DeployToStaging` stage - `DeployStagingJob` and `DeployStagingJobWithValidation`. The `DeployStagingJob` should contain the code to deploy your staging job to staging resources like a staging server. 

The `DeployStagingJobWithValidation` job contains all of the validation that goes with your staging deployment. The `DeployStagingJobWithValidation` job requires manual approval. The [manual validation task](/azure/devops/pipelines/tasks/reference/manual-validation-v1) pauses the pipeline run and waits for a manual interaction. A user needs to validate the stage before the run proceeds. Having a manual approval in your pipeline adds another level of security, helps mitigate risks, and makes sure that all changes get reviewed by the appropriate stakeholders. 

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

## 5. Deploy to production

Add the `DeployToProduction` stage after the `DeployToStaging` stage in your pipeline.

In the `DeployToProduction` stage, the application deploys to production, but only if the `DeployToStaging` stage succeeds and the source branch is either `main` or `release`. 

There are two different jobs in the `DeployToProduction` stage - `DeployProductionJob` and `waitForValidation`. 

The [manual validation task](/azure/devops/pipelines/tasks/reference/manual-validation-v1) in `waitForValidation` adds a second human validation step for security and quality control. We also used a manual validation task in the `DeployToStaging` stage. 

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

## 6. Add optional alternate production and rollback stages

You can optionally add two stages `DeployToAlternateProduction` and `Rollback` after the `DeployToProduction` stage.

 `DeployToAlternateProduction` and `Rollback` are manually queued. The `DeployToAlternateProduction` stage lets you have a backup production environment ready in case your primary environment fails. An environment can be an [Azure DevOps Environment](environments.md) or another location like a different cloud provider. This enhances the overall reliability and availability of your application. You might also want to have an alternate deployment environment for disaster recovery or testing and validation. For more complicated deployment strategies, see [Deployment jobs](deployment-jobs.md) and [Add stages, dependencies, and conditions](stages.md).

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

## View the entire YAML pipeline

Here's the entire pipeline with all of the referenced stages. 

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
> [Add stages, dependencies, & conditions](stages.md)
