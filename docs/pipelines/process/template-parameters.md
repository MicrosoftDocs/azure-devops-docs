---
title: Parameters and templateContext
description: How to use parameters in templates
ms.topic: conceptual
ms.date: 07/16/2025
monikerRange: "<=azure-devops"
ai-usage: ai-assisted
---

# Template parameters

::: moniker range=">=azure-devops-2020"

You can specify parameters and their data types in a template and reference those parameters in a pipeline. With [templateContext](#use-templatecontext-to-pass-properties-to-templates), you can also pass properties to stages, steps, and jobs that are used as parameters in a template. 

You can also [use parameters outside of templates](runtime-parameters.md). You can only use literals for parameter default values. Learn more about [parameters in the YAML schema](/azure/devops/pipelines/yaml-schema/parameters-parameter). 

### Passing parameters

Parameters must include a name and data type. In `azure-pipelines.yml`, if the parameter `yesNo` is set to a boolean value, the build succeeds. If `yesNo` is set to a string like `apples`, the build fails.

```yaml
# File: simple-param.yml
parameters:
- name: yesNo # name of the parameter; required
  type: boolean # data type of the parameter; required
  default: false

steps:
- script: echo ${{ parameters.yesNo }}
```

```yaml
# File: azure-pipelines.yml
trigger:
- main

extends:
  template: simple-param.yml
  parameters:
      yesNo: false # set to a non-boolean value to have the build fail
```
::: moniker-end

::: moniker range="azure-devops"

## Use templateContext to pass properties to templates

You can use `templateContext` to pass more properties to [stages](/azure/devops/pipelines/yaml-schema/stages-stage), steps, and [jobs](/azure/devops/pipelines/yaml-schema/jobs-job) that are used as parameters in a template. Specifically, you can specify `templateContext` within the `jobList`, `deploymentList`, or `stageList` parameter data type. 
  
`templateContext` makes it easier to set up environments when processing each job. By bundling a job and its environment properties object together, `templateContext` helps create more maintainable and easier-to-understand YAML. 

In this example, the parameter `testSet` in `testing-template.yml` has the data type `jobList`. The template `testing-template.yml` creates a new variable `testJob` using the [each keyword](expressions.md#each-keyword). The template then references the `testJob.templateContext.expectedHTTPResponseCode`, which gets set in `azure-pipeline.yml` and passed to the template. 

When the response code is 200, the template makes a REST request. When the response code is 500, the template outputs all environment variables for debugging. 

`templateContext` can contain properties. 

```yaml
#testing-template.yml

parameters: 
- name: testSet
  type: jobList

jobs:
- ${{ each testJob in parameters.testSet }}:  # Iterate over each job in the 'testSet' parameter
  - ${{ if eq(testJob.templateContext.expectedHTTPResponseCode, 200) }}: # Check if the HTTP response is 200
    - job:
      steps: 
      - powershell: 'Invoke-RestMethod -Uri https://blogs.msdn.microsoft.com/powershell/feed/ | Format-Table -Property Title, pubDate'
      - ${{ testJob.steps }}    
  - ${{ if eq(testJob.templateContext.expectedHTTPResponseCode, 500) }}: # Check if the HTTP response is 500
    - job:
      steps:
      - powershell: 'Get-ChildItem -Path Env:\' # Run a PowerShell script to list environment variables
      - ${{ testJob.steps }} # Include additional steps from the 'testJob' object
```

```yaml
#azure-pipeline.yml

trigger: none

pool:
  vmImage: ubuntu-latest

extends:
  template: testing-template.yml 
  parameters:
    testSet:  # Define the 'testSet' parameter to pass to the template
    - job: positive_test # Define a job named 'positive_test'
      templateContext:
        expectedHTTPResponseCode: 200 # Set the expected HTTP response code to 200 for this job
      steps:
      - script: echo "Run positive test" 
    - job: negative_test # Define a job named 'negative_test'
      templateContext:
        expectedHTTPResponseCode: 500 # Set the expected HTTP response code to 500 for this job
      steps:
      - script: echo "Run negative test" 
```
::: moniker-end

::: moniker range=">=azure-devops-2020"

#### Parameters to select a template at runtime

You can call different templates from a pipeline YAML depending on a condition. In this example, the `experimental.yml` YAML runs when the parameter `experimentalTemplate` is true. 

```yml
#azure-pipeline.yml
parameters:
- name: experimentalTemplate 
  displayName: 'Use experimental build process?'
  type: boolean
  default: false

steps:
- ${{ if eq(parameters.experimentalTemplate, true) }}: # Check if 'experimentalTemplate' is true
  - template: experimental.yml
- ${{ if not(eq(parameters.experimentalTemplate, true)) }}:  # Check if 'experimentalTemplate' is not true
  - template: stable.yml
```

### Parameter data types

[!INCLUDE [parameter-data-types](includes/parameter-data-types.md)]


### Iterating through parameters and their data types

Azure Pipelines allows you to iterate through parameters of various data types, such as strings, objects, numbers, and booleans. This flexibility enables dynamic pipeline behavior based on parameter values. Below are examples demonstrating how to iterate through parameters and handle different data types.

#### Iterating through simple parameters

You can loop through simple parameters like strings, numbers, and booleans. In this example, the pipeline iterates through a list of parameters and prints their names and values.

```yaml
# start.yaml
parameters:
- name: myStringName
  type: string
  default: a string value
- name: myNumber
  type: number
  default: 2
- name: myBoolean
  type: boolean
  default: true

steps: 
- ${{ each parameter in parameters }}:
  - script: echo ${{ parameter.Key }} 
  - script: echo ${{ parameter.Value }}
```

```yaml
# azure-pipeline.yaml
trigger: none

extends:
  template: start.yaml
```

#### Iterating through objects

Objects allow you to define complex parameter structures, such as nested elements. You can iterate through objects to access their keys and values or nested properties.

##### Example: Iterating through object keys and values

The following template file the `myObject` parameter as an object with default key-value pairs. The job iterates through the keys and prints their values.

```yaml
# object-keys-template.yml

parameters:
  - name: myObject
    type: object
    default:
      key1: 'value1'
      key2: 'value2'
      key3: 'value3'

jobs:
- job: ExampleJob
  displayName: 'Example object parameter job'
  pool:
    vmImage: 'ubuntu-latest'
  steps:
  - script: |
      echo "Keys in myObject:"
      echo "Key1: ${{ parameters.myObject.key1 }}"
      echo "Key2: ${{ parameters.myObject.key2 }}"
      echo "Key3: ${{ parameters.myObject.key3 }}"
    displayName: 'Display object keys and values'
```

The pipeline overrides the default values of `myObject` with custom values.

```yaml
# azure-pipelines.yml

trigger:
- main

extends:
  template: object-keys-template.yml
  parameters:
    myObject:
      key1: 'customValue1'
      key2: 'customValue2'
      key3: 'customValue3'
```

##### Example: Iterating through nested objects

The template defines a `listOfFruits` parameter containing objects with nested arrays, then uses nested loops to process each fruit and its associated colors. 



```yaml
# File: nested-objects-template.yml

parameters:
- name: listOfFruits
  type: object
  default:
  - fruitName: 'apple'
    colors: ['red', 'green']
  - fruitName: 'lemon'
    colors: ['yellow']

steps:
- ${{ each fruit in parameters.listOfFruits }}: # Iterate over each fruit in the 'listOfFruits'
  - ${{ each fruitColor in fruit.colors }}: # Iterate over each color in the current fruit's colors
    - script: echo ${{ fruit.fruitName }} ${{ fruitColor }} # Echo the current fruit's name and color
```

The pipeline file shows how to override the default values with custom fruit data.

```yaml
# File: azure-pipelines.yml

trigger:
- main

extends:
  template: nested-objects-template.yml
  parameters:
    listOfFruits:
    - fruitName: 'banana'
      colors: ['yellow']
    - fruitName: 'grape'
      colors: ['purple', 'green']
```

### Dynamically include a list of steps with the stepList parameter

In this example, the `stepList` parameter type is used to dynamically include a list of steps in the build process.

- The main pipeline (`azure-pipelines.yml`) defines two jobs: build and deploy.
- The build job uses a template (`build.yml`) and passes a list of build tasks using the `stepList` parameter.
- The `build.yml` template dynamically includes the steps defined in the `build_tasks` parameter.

```yaml
#azure-pipelines.yml

trigger:
- main

jobs:
  - job: build
    displayName: 'Build .NET Core Application'
    pool:
      vmImage: 'ubuntu-latest'

    steps:
      - checkout: self

      - template: build.yml
        parameters:
          build_tasks:
            - task: DotNetCoreCLI@2
              displayName: 'Restore'
              inputs:
                command: 'restore'
                projects: '**/*.csproj'  

            - task: DotNetCoreCLI@2
              displayName: 'Build'
              inputs:
                command: 'build'
                arguments: '--no-restore'
                projects: '**/*.csproj' 

  - job: deploy
    displayName: 'Pack for Azure App Service deployment'
    dependsOn: build
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - download: current
        artifact: drop
```

The `build.yml` template:

- Defines the parameter `build_tasks` with the stepList type and a default empty list.
- Sets the .NET Core SDK to 8.x. 
- Iterates over each step in the `build_tasks` parameter.
- Executes each step defined in the `build_tasks` list.

```yaml
#build.yml

parameters:
  - name: build_tasks
    type: stepList
    default: []

steps:
  - task: UseDotNet@2
    displayName: 'Use .NET Core SDK'
    inputs:
      packageType: 'sdk'
      version: '8.x'

  - ${{ each step in parameters.build_tasks }}:
      - ${{ step }}

  - task: DotNetCoreCLI@2
    displayName: 'Publish'
    inputs:
      command: 'publish'
      arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)'
      projects: '**/*.csproj'

  - task: PublishBuildArtifacts@1
    displayName: 'Publish Artifact'
    inputs:
      PathtoPublish: '$(Build.ArtifactStagingDirectory)'
      ArtifactName: 'drop'
```

