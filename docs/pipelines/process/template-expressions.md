---
title: Template expressions
description: How to use expressions in templates
ms.topic: conceptual
ms.date: 10/25/2024
monikerRange: '>=azure-devops-2020'
---

# Template expressions

Use template [expressions](expressions.md) to specify how values are dynamically resolved during pipeline initialization.
Wrap your template expression inside this syntax: `${{ }}`. 

Template expressions can expand template parameters, and also variables.
You can use parameters to influence how a template is expanded.
The `parameters` object works like the [`variables` object](expressions.md#variables)
in an expression. Only predefined variables can be used in template expressions.

> [!NOTE]
> Expressions are only expanded for `stages`, `jobs`, `steps`, and `containers` (inside `resources`).
> You cannot, for example, use an expression inside `trigger` or a resource like `repositories`.
> Additionally, on Azure DevOps 2020 RTW, you can't use template expressions inside `containers`.

For example, you define a template:

```yaml
# File: steps/vsbuild.yml

parameters:
- name: 'solution'
  default: '**/*.sln'
  type: string

steps:
- task: VSBuild@1
  inputs:
    solution: ${{ parameters['solution'] }}  # index syntax
- task: VSTest@3
  inputs:
    testSelector: 'testAssemblies' 
    testAssemblyVer2: ${{ parameters.solution }} # property dereference syntax
    searchFolder: '$(System.DefaultWorkingDirectory)' 
```

Then you reference the template and pass it the optional `solution` parameter:

```yaml
# File: azure-pipelines.yml

steps:
- template: steps/vsbuild.yml
  parameters:
    solution: my.sln
```

### Context

Within a template expression, you have access to the `parameters` context that contains the values of parameters passed in.
Additionally, you have access to the `variables` context that contains all the variables specified in the YAML file plus 
many of the [predefined variables](../build/variables.md) (noted on each variable in that article). 
Importantly, it doesn't have runtime variables such as those stored on the pipeline or given when you start a run.
Template expansion happens [early in the run](runs.md#process-the-pipeline), so those variables aren't available.


### Template expression functions

You can use [general functions](expressions.md#functions) in your templates. You can also use a few template expression functions.

#### format
* Simple string token replacement
* Min parameters: 2. Max parameters: N
* Example: `${{ format('{0} Build', parameters.os) }}` &rarr; `'Windows Build'`

#### coalesce
* Evaluates to the first non-empty, non-null string argument
* Min parameters: 2. Max parameters: N
* Example:

```yaml
parameters:
- name: 'restoreProjects'
  default: ''
  type: string
- name: 'buildProjects'
  default: ''
  type: string

steps:
- script: echo ${{ coalesce(parameters.foo, parameters.bar, 'Nothing to see') }}
```

### Insertion

You can use template expressions to alter the structure of a YAML pipeline.
For instance, to insert into a sequence:

```yaml
# File: jobs/build.yml

parameters:
- name: 'preBuild'
  type: stepList
  default: []
- name: 'preTest'
  type: stepList
  default: []
- name: 'preSign'
  type: stepList
  default: []

jobs:
- job: Build
  pool:
    vmImage: 'windows-latest'
  steps:
  - script: cred-scan
  - ${{ parameters.preBuild }}
  - task: VSBuild@1
  - ${{ parameters.preTest }}
  - task: VSTest@3
  - ${{ parameters.preSign }}
  - script: sign
```

```yaml
# File: .vsts.ci.yml

jobs:
- template: jobs/build.yml
  parameters:
    preBuild:
    - script: echo hello from pre-build
    preTest:
    - script: echo hello from pre-test
```

When an array is inserted into an array, the nested array is flattened.

To insert into a mapping, use the special property `${{ insert }}`.

```yaml
# Default values
parameters:
- name: 'additionalVariables'
  type: object
  default: {}

jobs:
- job: build
  variables:
    configuration: debug
    arch: x86
    ${{ insert }}: ${{ parameters.additionalVariables }}
  steps:
  - task: VSBuild@1
  - task: VSTest@3
```

```yaml
jobs:
- template: jobs/build.yml
  parameters:
    additionalVariables:
      TEST_SUITE: L0,L1
```

### Conditional insertion

If you want to conditionally insert into a sequence or a mapping in a template, use insertions and expression evaluation. You can also use `if` statements [outside of templates](expressions.md) as long as you use template syntax.  

For example, to insert into a sequence in a template:

```yaml
# File: steps/build.yml

parameters:
- name: 'toolset'
  default: vsbuild
  type: string
  values:
  - vsbuild
  - dotnet

steps:
# msbuild
- ${{ if eq(parameters.toolset, 'msbuild') }}:
  - task: VSBuild@1
  - task: VSTest@3

# dotnet
- ${{ if eq(parameters.toolset, 'dotnet') }}:
  - task: UseDotNet@2
    inputs:
      command: build
  - task: UseDotNet@2
    inputs:
      command: test
```

```yaml
# File: azure-pipelines.yml

steps:
- template: steps/build.yml
  parameters:
    toolset: dotnet
```

For example, to insert into a mapping in a template:

```yaml
# File: steps/build.yml

parameters:
- name: 'debug'
  type: boolean
  default: false

steps:
- script: tool
  env:
    ${{ if eq(parameters.debug, true) }}:
      TOOL_DEBUG: true
      TOOL_DEBUG_DIR: _dbg
```

```yaml
steps:
- template: steps/build.yml
  parameters:
    debug: true
```

You can also use conditional insertion for variables. In this example, `start` always prints and `this is a test` only prints when the `foo` variable equals `test`. 

```yaml
variables:
  - name: foo
    value: test

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: echo "start" # always runs
- ${{ if eq(variables.foo, 'test') }}:
  - script: echo "this is a test" # runs when foo=test
```

You can also set variables based on the values of other variables. In the following pipeline, `myVar` is used to set the value of `conditionalVar`. 


```yaml
trigger:
- main

pool: 
   vmImage: 'ubuntu-latest' 

variables:
  - name: myVar
    value: 'baz'

  - name: conditionalVar
    ${{ if eq(variables['myVar'], 'foo') }}:
      value: 'bar'
    ${{ elseif eq(variables['myVar'], 'baz') }}:
      value: 'qux'
    ${{ else }}:
      value: 'default'

steps:
- script: echo "start" # always runs
- ${{ if eq(variables.conditionalVar, 'bar') }}:
  - script: echo "the value of myVar is set in the if condition" # runs when myVar=foo
- ${{ if eq(variables.conditionalVar, 'qux') }}:
  - script: echo "the value of myVar is set in the elseif condition" # runs when myVar=baz
```


### Iterative insertion

The `each` directive allows iterative insertion based on a YAML sequence (array) or mapping (key-value pairs).

For example, you can wrap the steps of each job with other pre- and post-steps:

```yaml
# job.yml
parameters:
- name: 'jobs'
  type: jobList
  default: []

jobs:
- ${{ each job in parameters.jobs }}: # Each job
  - ${{ each pair in job }}:          # Insert all properties other than "steps"
      ${{ if ne(pair.key, 'steps') }}:
        ${{ pair.key }}: ${{ pair.value }}
    steps:                            # Wrap the steps
    - task: SetupMyBuildTools@1       # Pre steps
    - ${{ job.steps }}                # Users steps
    - task: PublishMyTelemetry@1      # Post steps
      condition: always()
```

```yaml
# azure-pipelines.yml
jobs:
- template: job.yml
  parameters:
    jobs:
    - job: A
      steps:
      - script: echo This will get sandwiched between SetupMyBuildTools and PublishMyTelemetry.
    - job: B
      steps:
      - script: echo So will this!
```

You can also use `stringList` to define and interate over parameters that contain a list of items. 

> [!NOTE]
> The `stringList` data type isn't available in templates. Use the `object` data type in templates instead.


```yaml
parameters:
- name: regions
  type: stringList
  displayName: Regions
  values:
    - WUS
    - CUS
    - EUS
  default: 
    - WUS
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


You can also manipulate the properties of whatever you're iterating over.
For example, to add more dependencies:

```yaml
# job.yml
parameters:
- name: 'jobs'
  type: jobList
  default: []

jobs:
- job: SomeSpecialTool                # Run your special tool in its own job first
  steps:
  - task: RunSpecialTool@1
- ${{ each job in parameters.jobs }}: # Then do each job
  - ${{ each pair in job }}:          # Insert all properties other than "dependsOn"
      ${{ if ne(pair.key, 'dependsOn') }}:
        ${{ pair.key }}: ${{ pair.value }}
    dependsOn:                        # Inject dependency
    - SomeSpecialTool
    - ${{ if job.dependsOn }}:
      - ${{ job.dependsOn }}
```

```yaml
# azure-pipelines.yml
jobs:
- template: job.yml
  parameters:
    jobs:
    - job: A
      steps:
      - script: echo This job depends on SomeSpecialTool, even though it's not explicitly shown here.
    - job: B
      dependsOn:
      - A
      steps:
      - script: echo This job depends on both Job A and on SomeSpecialTool.
```

### Escape a value

If you need to escape a value that literally contains `${{`, then wrap the value in an expression string. For example, `${{ 'my${{value' }}` or `${{ 'my${{value with a '' single quote too' }}`