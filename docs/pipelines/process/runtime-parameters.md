---
title: Use runtime and type-safe parameters
description: You can use runtime parameters in pipelines or as part of a template
ms.topic: conceptual
ms.date: 07/15/2025
monikerRange: '>=azure-devops-2020'
ai-usage: ai-assisted
---

# Runtime parameters

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Runtime parameters give you more control over the values passed to a pipeline. With runtime parameters, you can:
- Supply different values to scripts and tasks at runtime
- Control parameter types, allowed ranges, and default values
- Dynamically select jobs and stages with [template expressions](template-expressions.md)

You can specify [parameters in templates](template-parameters.md) and in the pipeline. Parameters have data types such as number and string, and they can be restricted to a subset of values. The `parameters` section in a YAML defines what parameters are available. 

Parameters are available only during template parsing. They expand just before the pipeline runs, replacing values surrounded by `${{ }}` with parameter values. Use [variables](variables.md) if you need your values to be more widely available during your [pipeline run](runs.md). 

> [!NOTE]
> This guidance doesn't apply to classic pipelines. For parameters in classic pipelines, see [Process parameters (classic)](parameters.md). 
> 

Parameters must contain a name and data type. Parameters can't be optional. A default value needs to be assigned in your YAML file or when you run your pipeline. If you don't assign a default value or set `default` to `false`, the first available value is used. 

Use [templateContext](template-parameters.md#use-templatecontext-to-pass-properties-to-templates) to pass extra properties to stages, steps, and jobs that are used as parameters in a template. 


## Use parameters in pipelines

Set runtime parameters at the beginning of a YAML file. 

This example pipeline includes an `image` parameter with three hosted agents as `string` options. In the jobs section, the `pool` value specifies the agent from the parameter used to run the job. The `trigger` is set to none so that you can select the value of `image` when you manually trigger your pipeline to run. 

```yaml
parameters:
- name: image
  displayName: Pool Image
  type: string
  default: ubuntu-latest
  values:
  - windows-latest
  - ubuntu-latest
  - macOS-latest

trigger: none

jobs:
- job: build
  displayName: build
  pool: 
    vmImage: ${{ parameters.image }}
  steps:
  - script: echo building $(Build.BuildNumber) with ${{ parameters.image }}
```

From the pipeline runs page, select **Run pipeline** to run the pipeline. You'll see the option to select the Pool Image. If you don't make a selection, the default option `ubuntu-latest` is used. You don't have the option to select a Pool Image if you run your pipeline from the YAML editor. 

> [!div class="mx-imgBorder"]
> ![runtime parameters](media/runtime-param-ui.png)

## Use conditionals with parameters

You can also use parameters as part of conditional logic. With conditionals, part of a YAML runs if it meets the `if` criteria. 

### Use parameters to determine what steps run

This pipeline adds a second boolean parameter, `test`, which controls whether to run tests in the pipeline. When the value of `test` is true, the step that outputs *Running all the tests* runs. 

```yaml
parameters:
- name: image
  displayName: Pool Image
  values:
  - windows-latest
  - ubuntu-latest
  - macOS-latest
- name: test
  displayName: Run Tests?
  type: boolean
  default: false

trigger: none

jobs:
- job: build
  displayName: Build and Test
  pool: 
    vmImage: ${{ parameters.image }}
  steps:
  - script: echo building $(Build.BuildNumber)
  - ${{ if eq(parameters.test, true) }}:
    - script: echo "Running all the tests"
```

### Use parameters to set what configuration is used

You can also use parameters to set which job runs. In this example, different architectures build depending on the value of `config` parameter, which is a `string` type. By default, both the `x86` and `x64` architectures build.  

```yaml
parameters:
- name: configs
  type: string
  default: 'x86,x64'

trigger: none

jobs:
- ${{ if contains(parameters.configs, 'x86') }}:
  - job: x86
    steps:
    - script: echo Building x86...
- ${{ if contains(parameters.configs, 'x64') }}:
  - job: x64
    steps:
    - script: echo Building x64...
- ${{ if contains(parameters.configs, 'arm') }}:
  - job: arm
    steps:
    - script: echo Building arm...
```

### Selectively exclude a stage

You can also use parameters to set whether a stage runs. In this example, there's a pipeline with four stages and different jobs for each stage. The Performance Test stage runs if the parameter `runPerfTests` is true. The default value of `runPerfTests` is false, so only three of the four stages run unless updated. 

```yaml
parameters:
- name: runPerfTests
  type: boolean
  default: false

trigger: none

stages:
- stage: Build
  displayName: Build
  jobs:
  - job: Build
    steps:
    - script: echo running Build


- stage: UnitTest
  displayName: Unit Test
  dependsOn: Build
  jobs:
  - job: UnitTest
    steps:
    - script: echo running UnitTest


- ${{ if eq(parameters.runPerfTests, true) }}:
  - stage: PerfTest
    displayName: Performance Test
    dependsOn: Build
    jobs:
    - job: PerfTest
      steps:
      - script: echo running PerfTest


- stage: Deploy
  displayName: Deploy
  dependsOn: UnitTest
  jobs:
  - job: Deploy
    steps:
    - script: echo running UnitTest
```

### Loop through parameters


You can also loop through your string, number, and boolean parameters. 

#### [Script](#tab/script)

This example loops through parameters and prints the name and value of each parameter. There are four different parameters and each represents a different type. `myStringName` is a single-line string. `myMultiString` is a multi-line string. `myNumber` is a number. `myBoolean` is a boolean value. In the steps section, the script tasks output the key and value of each parameter. 

```yaml
# start.yaml
parameters:
- name: myStringName
  type: string
  default: a string value
- name: myMultiString
  type: string
  default: default
  values:
  - default
  - ubuntu
- name: myNumber
  type: number
  default: 2
  values:
  - 1
  - 2
  - 4
  - 8
  - 16
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

#### [PowerShell](#tab/powershell)

In this example, you loop through parameters and print the name and value of each parameter. There are four different parameters and each represents a different type. `myStringName` is a single-line string. `myMultiString` is a multi-line string. `myNumber` is a number. `myBoolean` is a boolean value. In the steps section, you loop through parameters in a PowerShell task and set each parameter as an environment variable. 

```yaml
# start.yaml

parameters:
- name: myStringName
  type: string
  default: a string value
- name: myMultiString
  type: string
  default: default
  values:
  - default
  - ubuntu
- name: myNumber
  type: number
  default: 2
  values:
  - 1
  - 2
  - 4
  - 8
  - 16
- name: myBoolean
  type: boolean
  default: true

steps: 
  - task: PowerShell@2
    env:
      ${{ each parameter in parameters }}:
        ${{ parameter.Key }}: ${{ parameter.Value }}
    inputs:
      filePath: test_script.ps1
      pwsh: true
```

```yaml
# azure-pipeline.yaml
trigger: none

extends:
  template: start.yaml
```

```powershell
# test_script.ps1

Write-Host "Hello, World!"
Write-Host $env:myStringName

```

---

### Check for an empty parameter object

Use the `length()` [expression](expressions.md) to check whether an object parameter has no value. 

```yaml
parameters:
- name: foo
  type: object
  default: []

steps:
- checkout: none
- ${{ if eq(length(parameters.foo), 0) }}:
  - script: echo Foo is empty
    displayName: Foo is empty
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

## Parameter data types

[!INCLUDE [parameter-data-types](includes/parameter-data-types.md)]

## Parameter security best practices

When using runtime parameters in Azure Pipelines, avoid passing secrets or sensitive values as parameter inputs, since parameter values are expanded at template parsing time and might be exposed in pipeline logs or outputs. 

Always validate and restrict allowed parameter values to prevent injection of unexpected or unsafe input, and follow the principle of least privilege when granting access to pipeline resources. 

Use pipeline variables marked as secrets and stored in Azure Key Vault, the Pipeline UI, or variable groups for credentials, tokens, or other confidential data. For more information, see [Protect secrets in Azure Pipelines](../security/secrets.md).