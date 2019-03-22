---
title: Job and step templates
ms.custom: seodec18
description: How to re-use pipelines through templates
ms.assetid: 6f26464b-1ab8-4e5b-aad8-3f593da556cf
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.author: alewis
author: vtbassmatt
ms.date: 03/22/2019
monikerRange: 'azure-devops'
---

# Job and step templates

**Azure Pipelines**

Use templates to define your logic once and then reuse it several times.
Templates combine the content of multiple YAML files into a single pipeline.
You can pass parameters into a template from your parent pipeline.

## Step re-use

You can reuse one or more steps across several jobs.
In addition to the steps from the template, each job can define additional steps.

```yaml
# File: templates/npm-steps.yml
steps:
- script: npm install
- script: npm test
```

```yaml
# File: azure-pipelines.yml

jobs:
- job: Linux
  pool:
    vmImage: 'ubuntu-16.04'
  steps:
  - template: templates/npm-steps.yml  # Template reference

- job: macOS
  pool:
    vmImage: 'macOS-10.13'
  steps:
  - template: templates/npm-steps.yml  # Template reference

- job: Windows
  pool:
    vmImage: 'vs2017-win2016'
  steps:
  - script: echo This script runs before the template's steps, only on Windows.
  - template: templates/npm-steps.yml  # Template reference
  - script: echo This step runs after the template's steps.
```

## Job reuse

Much like steps, jobs can be reused.

```yaml
# File: templates/jobs.yml
jobs:
- job: Build
  steps:
  - script: npm install

- job: Test
  steps:
  - script: npm test
```

```yaml
# File: azure-pipelines.yml

jobs:
- template: templates/jobs.yml  # Template reference
```

## Passing parameters

You can pass parameters to both step and job templates.
The `parameters` section defines what parameters are available in the template and their default values. 
Templates are expanded just before the pipeline runs so that values surrounded by `${{ }}` are replaced by the parameters it receives from the enclosing pipeline.

### Job templates with parameters

```yaml
# File: templates/npm-with-params.yml

parameters:
  name: ''  # defaults for any parameters that aren't specified
  vmImage: ''

jobs:
- job: ${{ parameters.name }}
  pool: 
    vmImage: ${{ parameters.vmImage }}
  steps:
  - script: npm install
  - script: npm test
```

When you consume the template in your pipeline, specify values for
the template parameters.

```yaml
# File: azure-pipelines.yml

jobs:
- template: templates/npm-with-params.yml  # Template reference
  parameters:
    name: Linux
    vmImage: 'ubuntu-16.04'

- template: templates/npm-with-params.yml  # Template reference
  parameters:
    name: macOS
    vmImage: 'macOS-10.13'

- template: templates/npm-with-params.yml  # Template reference
  parameters:
    name: Windows
    vmImage: 'vs2017-win2016'
```

### Step templates with parameters

You can also use parameters with step templates:

```yaml
# File: templates/steps-with-params.yml

parameters:
  runExtendedTests: 'false'  # defaults for any parameters that aren't specified

steps:
- script: npm test
- ${{ if eq(parameters.runExtendedTests, 'true') }}:
  - script: npm test --extended
```

When you consume the template in your pipeline, specify values for
the template parameters.

```yaml
# File: azure-pipelines.yml

steps:
- script: npm install
  
- template: templates/steps-with-params.yml  # Template reference
  parameters:
    runExtendedTests: 'true'
```


## Using other repositories

You can keep your templates in other repositories.
For example, suppose you have a core pipeline that you want all of your app pipelines to use.
You can put the template in a core repo and then refer to it from each of your app repos:

```yaml
# Repo: Contoso/BuildTemplates
# File: common.yml
parameters:
  vmImage: 'ubuntu 16.04'

jobs:
- job: Build
  pool:
    vmImage: ${{ parameters.vmImage }}
  steps:
  - script: npm install
  - script: npm test
```

Now you can reuse this template in multiple pipelines.
Use the `resources` specification to provide the location of the core repo.
When you refer to the core repo, use `@` and the name you gave it in `resources`.

```yaml
# Repo: Contoso/LinuxProduct
# File: azure-pipelines.yml
resources:
  repositories:
    - repository: templates
      type: github
      name: Contoso/BuildTemplates

jobs:
- template: common.yml@templates  # Template reference
```

```yaml
# Repo: Contoso/WindowsProduct
# File: azure-pipelines.yml
resources:
  repositories:
    - repository: templates
      type: github
      name: Contoso/BuildTemplates
      ref: refs/tags/v1.0 # optional ref to pin to

jobs:
- template: common.yml@templates  # Template reference
  parameters:
    vmImage: 'vs2017-win2016'
```

Repositories are resolved only once, when the pipeline starts up.
After that, the same resource is used for the duration of the pipeline.
Only the template files are used.
Once the templates are fully expanded, the final pipeline runs as if it were defined entirely in the source repo.
This means that you can't use scripts from the template repo in your pipeline.

If you want to use a particular, fixed version of the template, be sure to pin to a ref.
Refs are either branches (`refs/heads/<name>`) or tags (`refs/tags/<name>`).
If you want to pin a specific commit, first create a tag pointing to that commit, then pin to that tag.

## Template expressions

Use template [expressions](expressions.md) to specify how values are dynamically resolved during pipeline initialization.
Wrap your template expression inside this syntax: `${{ }}`.

Template expressions can expand template parameters, and also variables.
You can use parameters to influence how a template is expanded.
The `parameters` object works like the [`variables` object](expressions.md#variables)
in an expression.

For example you define a template:

```yaml
# File: steps/msbuild.yml

parameters:
  solution: '**/*.sln'

steps:
- task: msbuild@1
  inputs:
    solution: ${{ parameters['solution'] }}  # index syntax
- task: vstest@2
  inputs:
    solution: ${{ parameters.solution }}  # property dereference syntax
```

Then you reference the template and pass it the optional `solution` parameter:

```yaml
# File: azure-pipelines.yml

steps:
- template: steps/msbuild.yml
  parameters:
    solution: my.sln
```

### Required parameters

You can add a validation step at the beginning of your template to check for the parameters you require.

Here's an example that checks for the `solution` parameter using Bash (which enables it to work on any platform):

```yaml
# File: steps/msbuild.yml

parameters:
  solution: ''

steps:
- bash: |
    if [ -z "$SOLUTION" ]; then
      echo "##vso[task.logissue type=error;]Missing template parameter \"solution\""
      echo "##vso[task.complete result=Failed;]"
    fi
  env:
    SOLUTION: ${{ parameters.solution }}
  displayName: Check for required parameters
- task: msbuild@1
  inputs:
    solution: ${{ parameters.solution }}
- task: vstest@2
  inputs:
    solution: ${{ parameters.solution }}
```

To show that the template fails if it's missing the required parameter:

```yaml
# File: azure-pipelines.yml

# This will fail since it doesn't set the "solution" parameter to anything,
# so the template will use its default of an empty string
steps:
- template: steps/msbuild.yml

```

## Template expression functions

You can use [general functions](expressions.md#functions) in your templates. You can also use a few template expression functions.

### format
* Simple string token replacement
* Min parameters: 2. Max parameters: N
* Example: `${{ format('{0} Build', parameters.os) }}` &rarr; `'Windows Build'`

### coalesce
* Evaluates to the first non-empty, non-null string argument
* Min parameters: 2. Max parameters: N
* Example:

```yaml
parameters:
  restoreProjects: ''
  buildProjects: ''

steps:
- script: echo ${{ coalesce(parameters.foo, parameters.bar, 'Nothing to see') }}
```

## Insertion

You can use template expressions to alter the structure of a YAML pipeline.
For instance, to insert into a sequence:

```yaml
# File: jobs/build.yml

parameters:
  preBuild: []
  preTest: []
  preSign: []

jobs:
- job: Build
  pool:
    vmImage: 'vs2017-win2016'
  steps:
  - script: cred-scan
  - ${{ parameters.preBuild }}
  - task: msbuild@1
  - ${{ parameters.preTest }}
  - task: vstest@2
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
  additionalVariables: {}

jobs:
- job: build
  variables:
    configuration: debug
    arch: x86
    ${{ insert }}: ${{ parameters.additionalVariables }}
  steps:
  - task: msbuild@1
  - task: vstest@2
```

```yaml
jobs:
- template: jobs/build.yml
  parameters:
    additionalVariables:
      TEST_SUITE: L0,L1
```

## Conditional insertion

If you want to conditionally insert into a sequence or a mapping, then use insertions and expression evaluation.

For example, to insert into a sequence:

```yaml
# File: steps/build.yml

parameters:
  toolset: msbuild

steps:
# msbuild
- ${{ if eq(parameters.toolset, 'msbuild') }}:
  - task: msbuild@1
  - task: vstest@2

# dotnet
- ${{ if eq(parameters.toolset, 'dotnet') }}:
  - task: dotnet@1
    inputs:
      command: build
  - task: dotnet@1
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

For example, to insert into a mapping:

```yaml
# File: steps/build.yml

parameters:
  debug: false

steps:
- script: tool
  env:
    ${{ if eq(parameters.debug, 'true') }}:
      TOOL_DEBUG: true
      TOOL_DEBUG_DIR: _dbg
```

```yaml
steps:
- template: steps/build.yml
  parameters:
    debug: true
```

## Iterative insertion

The `each` directive allows iterative insertion based on a YAML sequence (array) or mapping (key-value pairs).

For example, you can wrap the steps of each job with additional pre- and post-steps:

```yaml
# job.yml
parameters:
  jobs: []

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

You can also manipulate the properties of whatever you're iterating over.
For example, to add additional dependencies:

```yaml
# job.yml
parameters:
  jobs: []

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

## Escaping

If you need to escape a value that literally contains `${{`, then wrap the value in an expression string. For example `${{ 'my${{value' }}` or `${{ 'my${{value with a '' single quote too' }}`
