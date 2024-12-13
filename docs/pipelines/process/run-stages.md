---
title: Design and run a YAML pipeline with stages
description: 
ms.topic: how-to 
ms.date: 11/01/2024
monikerRange: 'azure-devops'

#customer intent: As a developer, I want to design a sample pipeline with stages so that I can see how to use conditions, validation, triggers, etc..

---

# Run stages
 
[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Learn how to run a pipeline with more complex stages in Azure DevOps YAML pipelines. 

    - Learn how to run stages
    - Include properties like conditions, dependsOn, trigger: Manual, running children
    - Explain what happens if a stage fails
    - Possibly include manualValidation tasks and checks


## Prerequisites

Azure DevOps account
Basic knowledge of YAML and Azure Pipelines
Sample repository or project to work with

## "[verb] * [noun]"

[Introduce the procedure.]

1. Create the build stage

Include 

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
            echo "Building the project..."
          displayName: 'Run build commands'
    
    - stage: Test
      displayName: 'Test Stage'
      dependsOn: Build
      jobs:
      - job: TestJob
        displayName: 'Test Job'
        steps:
        - script: |
            echo "Running tests..."
          displayName: 'Run test commands'
    
    - stage: Deploy
      displayName: 'Deploy Stage'
      jobs:
      - job: DeployJob
        displayName: 'Deploy Job'
        steps:
        - script: |
            echo "Deploying the project..."
          displayName: 'Run deployment commands'
    ```
    
1. Test stage - Add a dependsOn clause

isSkippable: false
- show what that looks like in the UI, you can't do a run without the Test stage

  ```yaml
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
            echo "Building the project..."
          displayName: 'Run build commands'
    
    - stage: Test
      displayName: 'Test Stage'
      dependsOn: Build
      isSkippable: false
      jobs:
      - job: TestJob
        displayName: 'Test Job'
        steps:
        - script: |
            echo "Running tests..."
          displayName: 'Run test commands'
    
    - stage: Deploy
      displayName: 'Deploy Stage'
      dependsOn: 
      - Build
      - Test
      jobs:
      - job: DeployJob
        displayName: 'Deploy Job'
        steps:
        - script: |
            echo "Deploying the project..."
          displayName: 'Run deployment commands'
   ```

1. Deploy to staging
- include approval 


1. Deploy to production
- Only allow deployment from certain branches

## Full pipeline

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
        echo "Building the project..."
        # Add your build commands here
      displayName: 'Run build commands'

- stage: Test
  displayName: 'Test Stage'
  dependsOn: Build
  isSkippable: false
  jobs:
  - job: TestJob
    displayName: 'Test Job'
    steps:
    - script: |
        echo "Running tests..."
        # Add your test commands here
      displayName: 'Run test commands'

- stage: DeployToStaging
  displayName: 'Deploy to Staging'
  dependsOn: Test
  jobs:
  - job: DeployStagingJob
    displayName: 'Deploy to Staging Job'
    steps:
    - script: |
        echo "Deploying to staging..."
        # Add your deployment commands here
      displayName: 'Run deployment commands'
    - task: ManualValidation@1
      inputs:
        notifyUsers: 'julia.kullamader@microsoft.com'
        approvers: 'julia.kullamader@microsoft.com'
        instructions: 'Please validate the deployment to production.'

- stage: DeployToProduction
  displayName: 'Deploy to Production'
  dependsOn: DeployToStaging
  condition: and(succeeded(), in(variables['Build.SourceBranch'], 'refs/heads/main', 'refs/heads/release'))
  jobs:
  - job: DeployProductionJob
    displayName: 'Deploy to Production Job'
    steps:
    - script: |
        echo "Deploying to production..."
        # Add your deployment commands here
      displayName: 'Run deployment commands'
    - task: ManualValidation@1
      inputs:
        notifyUsers: 'julia.kullamader@microsoft.com'
        approvers: 'julia.kullamader@microsoft.com'
        instructions: 'Please validate the deployment to production.'
      displayName: 'Manual Validation'
  # - task: Lock@0
  #   inputs:
  #     lockName: 'ProductionLock'
  #     lockType: 'Exclusive'
  #   displayName: 'Acquire exclusive lock for production deployment'

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


## Clean up resources

<!-- Optional: Steps to clean up resources - H2

Provide steps the user can take to clean up resources that
they might no longer need.

-->

## Next step -or- Related content

> [!div class="nextstepaction"]
> [Next sequential article title](link.md)

-or-

* [Related article title](link.md)
* [Related article title](link.md)
* [Related article title](link.md)

<!-- Optional: Next step or Related content - H2

Consider adding one of these H2 sections (not both):

A "Next step" section that uses 1 link in a blue box 
to point to a next, consecutive article in a sequence.

-or- 

A "Related content" section that lists links to 
1 to 3 articles the user might find helpful.

-->

<!--

Remove all comments except the customer intent
before you sign off or merge to the main branch.

-->