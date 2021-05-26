---
title: Templates
ms.custom: seodec18
description: How to reuse pipelines through templates
ms.assetid: 6f26464b-1ab8-4e5b-aad8-3f593da556cf
ms.topic: conceptual
ms.date: 04/29/2021
monikerRange: 'azure-devops-2019 || azure-devops || azure-devops-2020'
---

# Template types & usage

::: moniker range=">=azure-devops-2020"

Templates let you define reusable content, logic, and parameters. Templates function in two ways. You can insert reusable content with a template or you can use a template to control what is allowed in a pipeline. The second approach is useful for [building secure pipelines with templates](../security/templates.md).

If a template is used to include content, it functions like an include directive in many programming languages. Content from one file is inserted into another file. When a template controls what is allowed in a pipeline, the template defines logic that another file must follow.  

::: moniker-end

::: moniker range="azure-devops-2019"

Use templates to define your logic once and then reuse it several times. Templates combine the content of multiple YAML files into a single pipeline. You can pass parameters into a template from your parent pipeline. 

::: moniker-end


::: moniker range=">=azure-devops-2020"

## Parameters

You can specify parameters and their data types in a template and pass those parameters to a pipeline. You can also [use parameters outside of templates](runtime-parameters.md). 


### Passing parameters

Parameters must contain a name and data type. In `azure-pipelines.yml`, when the parameter `yesNo` is set to a boolean value, the build succeeds. When `yesNo` is set to a string such as `apples`, the build fails.

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
- master

extends:
  template: simple-param.yml
  parameters:
      yesNo: false # set to a non-boolean value to have the build fail
```

#### Parameters to select a template at runtime

You can call different templates from a pipeline YAML depending on a condition. In this example, the `experimental.yml` YAML will run when the parameter `experimentalTemplate` is true. 

```yml
#azure-pipeline.yml
parameters:
- name: experimentalTemplate
  displayName: 'Use experimental build process?'
  type: boolean
  default: false

steps:
- ${{ if eq(parameters.experimentalTemplate, true) }}:
  - template: experimental.yml
- ${{ if not(eq(parameters.experimentalTemplate, true)) }}:
  - template: stable.yml
```

### Parameter data types

[!INCLUDE [parameter-data-types](includes/parameter-data-types.md)]

You can iterate through an object and print out each string in the object. 

```yaml
parameters:
- name: listOfStrings
  type: object
  default:
  - one
  - two

steps:
- ${{ each value in parameters.listOfStrings }}:
  - script: echo ${{ value }}
``` 

## Extend from a template

To increase security, you can enforce that a pipeline extends from a particular template. The file `start.yml` defines the parameter `buildSteps`, which is then used in the pipeline `azure-pipelines.yml`. 
In `start.yml`, if a `buildStep` gets passed with a script step, then it is rejected and the pipeline build fails. 
When extending from a template, you can increase security by adding a [required template approval](../security/templates.md#set-required-templates). 

```yaml
# File: start.yml
parameters:
- name: buildSteps # the name of the parameter is buildSteps
  type: stepList # data type is StepList
  default: [] # default value of buildSteps
stages:
- stage: secure_buildstage
  pool: Hosted VS2017
  jobs:
  - job: secure_buildjob
    steps:
    - script: echo This happens before code 
      displayName: 'Base: Pre-build'
    - script: echo Building
      displayName: 'Base: Build'

    - ${{ each step in parameters.buildSteps }}:
      - ${{ each pair in step }}:
          ${{ if ne(pair.value, 'CmdLine@2') }}:
            ${{ pair.key }}: ${{ pair.value }}       
          ${{ if eq(pair.value, 'CmdLine@2') }}: 
            '${{ pair.value }}': error         

    - script: echo This happens after code
      displayName: 'Base: Signing'
```

```yaml
# File: azure-pipelines.yml
trigger:
- master

extends:
  template: start.yml
  parameters:
    buildSteps:  
      - bash: echo Test #Passes
        displayName: succeed
      - bash: echo "Test"
        displayName: succeed
      - task: CmdLine@2
        displayName: Test 3 - Will Fail
        inputs:
          script: echo "Script Test"
```

## Extend from a template with resources

You can also use `extends` to extend from a template in your Azure pipeline that contains resources. 

```yaml
# File: azure-pipelines.yml
trigger:
- none

extends:
  template: resource-template.yml
```

```yaml
# File: resource-template.yml
resources:
  pipelines:
  - pipeline: my-pipeline 
    source: sourcePipeline

steps:
 - script: echo "Testing resource template"
```

## Insert a template

You can copy content from one YAML and reuse it in a different YAML. This saves you from having to manually include the same logic in multiple places. The `include-npm-steps.yml` file template contains steps that are reused in `azure-pipelines.yml`.  

```yaml
# File: templates/include-npm-steps.yml

steps:
- script: npm install
- script: yarn install
- script: npm run compile
```

```yaml
# File: azure-pipelines.yml

jobs:
- job: Linux
  pool:
    vmImage: 'ubuntu-latest'
  steps:
  - template: templates/include-npm-steps.yml  # Template reference
- job: Windows
  pool:
    vmImage: 'windows-latest'
  steps:
  - template: templates/include-npm-steps.yml  # Template reference
```

### Step reuse

You can insert a template to reuse one or more steps across several jobs.
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
    vmImage: 'macOS-10.14'
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

### Job reuse

Much like steps, jobs can be reused with templates.

```yaml
# File: templates/jobs.yml
jobs:
- job: Ubuntu
  pool:
    vmImage: 'ubuntu-latest'
  steps:
  - bash: echo "Hello Ubuntu"

- job: Windows
  pool:
    vmImage: 'windows-latest'
  steps:
  - bash: echo "Hello Windows"
```

```yaml
# File: azure-pipelines.yml

jobs:
- template: templates/jobs.yml  # Template reference
```

When working with multiple jobs, remember to remove the name of the job in the template file, so as to avoid conflict

```yaml
# File: templates/jobs.yml
jobs:
- job: 
  pool:
    vmImage: 'ubuntu-latest'
  steps:
  - bash: echo "Hello Ubuntu"

- job: Windows
  pool:
    vmImage: 'windows-latest'
  steps:
  - bash: echo "Hello Windows"
```

```yaml
# File: azure-pipelines.yml

jobs:
- template: templates/jobs.yml  # Template reference
- template: templates/jobs.yml  # Template reference
- template: templates/jobs.yml  # Template reference
```

### Stage reuse

Stages can also be reused with templates.

```yaml
# File: templates/stages1.yml
stages:
- stage: Angular
  jobs:
  - job: angularinstall
    steps:
    - script: npm install angular
```

```yaml
# File: templates/stages2.yml
stages:
- stage: Build
  jobs:
  - job: build
    steps:
    - script: npm run build
```

```yaml
# File: azure-pipelines.yml
trigger:
- master

pool:
  vmImage: 'ubuntu-latest'

stages:
- stage: Install
  jobs: 
  - job: npminstall
    steps:
    - task: Npm@1
      inputs:
        command: 'install'
- template: templates/stages1.yml
- template: templates/stages2.yml
```


### Job, stage, and step templates with parameters

```yaml
# File: templates/npm-with-params.yml

parameters:
- name: name  # defaults for any parameters that aren't specified
  default: ''
- name: vmImage
  default: ''

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
    vmImage: 'macOS-10.14'

- template: templates/npm-with-params.yml  # Template reference
  parameters:
    name: Windows
    vmImage: 'vs2017-win2016'
```

You can also use parameters with step or stage templates.
For example, steps with parameters:

```yaml
# File: templates/steps-with-params.yml

parameters:
- name: 'runExtendedTests'  # defaults for any parameters that aren't specified
  type: boolean
  default: false

steps:
- script: npm test
- ${{ if eq(parameters.runExtendedTests, true) }}:
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

> [!Note]
> Scalar parameters without a specified type are treated as strings.
> For example, `eq(true, parameters['myparam'])` will return `true`, even if the `myparam` parameter is the word `false`, if `myparam` is not explicitly made `boolean`.
> Non-empty strings are cast to `true` in a Boolean context.
> That [expression](expressions.md) could be rewritten to explicitly compare strings: `eq(parameters['myparam'], 'true')`.

Parameters are not limited to scalar strings.
See the list of [data types](#parameter-data-types).
For example, using the `object` type:

```yaml
# azure-pipelines.yml
jobs:
- template: process.yml
  parameters:
    pool:   # this parameter is called `pool`
      vmImage: ubuntu-latest  # and it's a mapping rather than a string


# process.yml
parameters:
- name: 'pool'
  type: object
  default: {}

jobs:
- job: build
  pool: ${{ parameters.pool }}
```


## Variable reuse

Variables can be defined in one YAML and included in another template. This could be useful if you want to store all of your variables in one file. If you are using a template to include variables in a pipeline, the included template can only be used to define variables. You can use steps and more complex logic when you are [extending from a template](#extend-from-a-template). 
Use [parameters](#passing-parameters) instead of variables when you want to restrict type. 

In this example, the variable `favoriteVeggie` is included in `azure-pipelines.yml`.

```yaml
# File: vars.yml
variables:
  favoriteVeggie: 'brussels sprouts'
```

```yaml
# File: azure-pipelines.yml

variables:
- template: vars.yml  # Template reference

steps:
- script: echo My favorite vegetable is ${{ variables.favoriteVeggie }}.
```

## Reference template paths

Template paths should be relative to the file that does the including. Here is an example nested hierarchy. 

```
|
+-- fileA.yml
|
+-- dir1/
     |
     +-- fileB.yml
     |
     +-- dir2/
          |
          +-- fileC.yml
```

Then, in `fileA.yml` you can reference `fileB.yml` and `fileC.yml`  like this. 

```yaml
steps:
- template: dir1/fileB.yml
- template: dir1/dir2/fileC.yml
```

If `fileC.yml` is your starting point, you can include `fileA.yml` and `fileB.yml` like this. 

```yaml
steps:
- template: ../../fileA.yml
- template: ../fileB.yml
```
When `fileB.yml` is your starting point, you can include `fileA.yml` and `fileC.yml` like this. 

```yaml
steps:
- template: ../fileA.yml
- template: dir2/fileC.yml
```
## Use other repositories

You can keep your templates in other repositories.
For example, suppose you have a core pipeline that you want all of your app pipelines to use.
You can put the template in a core repo and then refer to it from each of your app repos:

```yaml
# Repo: Contoso/BuildTemplates
# File: common.yml
parameters:
- name: 'vmImage'
  default: 'ubuntu 16.04'
  type: string

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

For `type: github`, `name` is `<identity>/<repo>` as in the examples above.
For `type: git` (Azure Repos), `name` is `<project>/<repo>`.
If that project is in a separate Azure DevOps organization, you'll need to configure a [service connection](../library/service-endpoints.md#sep-tfsts) of type `Azure Repos/Team Foundation Server` with access to the project and include that in YAML:

```yaml
resources:
  repositories:
  - repository: templates
    name: Contoso/BuildTemplates
    endpoint: myServiceConnection # Azure DevOps service connection
jobs:
- template: common.yml@templates
```

Repositories are resolved only once, when the pipeline starts up.
After that, the same resource is used for the duration of the pipeline.
Only the template files are used.
Once the templates are fully expanded, the final pipeline runs as if it were defined entirely in the source repo.
This means that you can't use scripts from the template repo in your pipeline.

If you want to use a particular, fixed version of the template, be sure to pin to a `ref`.
The `refs` are either branches (`refs/heads/<name>`) or tags (`refs/tags/<name>`).
If you want to pin a specific commit, first create a tag pointing to that commit, then pin to that tag.

> [!NOTE]
> If no `ref` is specified, the pipeline will default to using `refs/heads/master`.

You may also use `@self` to refer to the repository where the main pipeline was found.
This is convenient for use in `extends` templates if you want to refer back to contents in the extending pipeline's repository.
For example:

```yaml
# Repo: Contoso/Central
# File: template.yml
jobs:
- job: PreBuild
  steps: []

  # Template reference to the repo where this template was
  # included from - consumers of the template are expected
  # to provide a "BuildJobs.yml"
- template: BuildJobs.yml@self

- job: PostBuild
  steps: []
```

```yaml
# Repo: Contoso/MyProduct
# File: azure-pipelines.yml
resources:
  repositories:
    - repository: templates
      type: git
      name: Contoso/Central

extends:
  template: template.yml@templates
```

```yaml
# Repo: Contoso/MyProduct
# File: BuildJobs.yml
jobs:
- job: Build
  steps: []
```

## Template expressions

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
# File: steps/msbuild.yml

parameters:
- name: 'solution'
  default: '**/*.sln'
  type: string

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

### Context

Within a template expression, you have access to the `parameters` context that contains the values of parameters passed in.
Additionally, you have access to the `variables` context that contains all the variables specified in the YAML file plus 
many of the [predefined variables](../build/variables.md) (noted on each variable in that topic). 
Importantly, it doesn't have runtime variables such as those stored on the pipeline or given when you start a run.
Template expansion happens [very early in the run](runs.md#process-the-pipeline), so those variables aren't available.

### Required parameters

You can add a validation step at the beginning of your template to check for the parameters you require.

Here's an example that checks for the `solution` parameter using Bash (which enables it to work on any platform):

```yaml
# File: steps/msbuild.yml

parameters:
- name: 'solution'
  default: ''
  type: string

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

### Conditional insertion

If you want to conditionally insert into a sequence or a mapping in a template, use insertions and expression evaluation. You can also use `if` statements [outside of templates](expressions.md) as long as you use template syntax.  

For example, to insert into a sequence in a template:

```yaml
# File: steps/build.yml

parameters:
- name: 'toolset'
  default: msbuild
  type: string
  values:
  - msbuild
  - dotnet

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

You can also use conditional insertion for variables:

```yaml
variables:
  - name: foo
    value: test

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: echo "start"
- ${{ if eq(variables.foo, 'test') }}:
  - script: echo "this is a test"
```

### Iterative insertion

The `each` directive allows iterative insertion based on a YAML sequence (array) or mapping (key-value pairs).

For example, you can wrap the steps of each job with additional pre- and post-steps:

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

You can also manipulate the properties of whatever you're iterating over.
For example, to add additional dependencies:

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

## Imposed limits

Templates and template expressions can cause explosive growth to the size and complexity of a pipeline.
To help prevent runaway growth, Azure Pipelines imposes the following limits:
- No more than 100 separate YAML files may be included (directly or indirectly)
- No more than 20 levels of template nesting (templates including other templates)
- No more than 10 megabytes of memory consumed while parsing the YAML (in practice, this is typically between 600KB - 2MB of on-disk YAML, depending on the specific features used)

::: moniker-end

::: moniker range="azure-devops-2019"

## Template parameters

You can pass parameters to templates.
The `parameters` section defines what parameters are available in the template and their default values. 
Templates are expanded just before the pipeline runs so that values surrounded by `${{ }}` are replaced by the parameters it receives from the enclosing pipeline. As a result, only [predefined variables](../build/variables.md) can be used in parameters. 

To use parameters across multiple pipelines, see how to create a [variable group](../library/variable-groups.md).

### Job, stage, and step templates with parameters

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

You can also use parameters with step or stage templates.
For example, steps with parameters:

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

> [!Note]
> Scalar parameters are always treated as strings.
> For example, `eq(parameters['myparam'], true)` will almost always return `true`, even if the `myparam` parameter is the word `false`.
> Non-empty strings are cast to `true` in a Boolean context.
> That [expression](expressions.md) could be rewritten to explicitly compare strings: `eq(parameters['myparam'], 'true')`.

Parameters are not limited to scalar strings.
As long as the place where the parameter expands expects a mapping, the parameter can be a mapping.
Likewise, sequences can be passed where sequences are expected.
For example:

```yaml
# azure-pipelines.yml
jobs:
- template: process.yml
  parameters:
    pool:   # this parameter is called `pool`
      vmImage: ubuntu-latest  # and it's a mapping rather than a string


# process.yml
parameters:
  pool: {}

jobs:
- job: build
  pool: ${{ parameters.pool }}
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

For `type: github`, `name` is `<identity>/<repo>` as in the examples above.
For `type: git` (Azure Repos), `name` is `<project>/<repo>`.
The project must be in the same organization; cross-organization references are not supported.

Repositories are resolved only once, when the pipeline starts up.
After that, the same resource is used for the duration of the pipeline.
Only the template files are used.
Once the templates are fully expanded, the final pipeline runs as if it were defined entirely in the source repo.
This means that you can't use scripts from the template repo in your pipeline.

If you want to use a particular, fixed version of the template, be sure to pin to a ref.
Refs are either branches (`refs/heads/<name>`) or tags (`refs/tags/<name>`).
If you want to pin a specific commit, first create a tag pointing to that commit, then pin to that tag.

## Expressions

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

### Context

Within a template expression, you have access to the `parameters` context which contains the values of parameters passed in.
Additionally, you have access to the `variables` context which contains all the variables specified in the YAML file plus 
the [system variables](../build/variables.md#system-variables). 
Importantly, it doesn't have runtime variables such as those stored on the pipeline or given when you start a run.
Template expansion happens [very early in the run](runs.md#process-the-pipeline), so those variables aren't available.

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
  restoreProjects: ''
  buildProjects: ''

steps:
- script: echo ${{ coalesce(parameters.foo, parameters.bar, 'Nothing to see') }}
```

### Insertion

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

### Conditional insertion

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

### Iterative insertion

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

### Escaping

If you need to escape a value that literally contains `${{`, then wrap the value in an expression string. For example `${{ 'my${{value' }}` or `${{ 'my${{value with a '' single quote too' }}`

## Limits

Templates and template expressions can cause explosive growth to the size and complexity of a pipeline.
To help prevent runaway growth, Azure Pipelines imposes the following limits:
- No more than 50 separate YAML files may be included (directly or indirectly)
- No more than 10 megabytes of memory consumed while parsing the YAML (in practice, this is typically between 600KB - 2MB of on-disk YAML, depending on the specific features used)
- No more than 2000 characters per template expression are allowed

::: moniker-end

