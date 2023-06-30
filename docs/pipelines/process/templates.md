---
title: Templates
ms.custom: seodec18
description: How to reuse pipelines through templates
ms.assetid: 6f26464b-1ab8-4e5b-aad8-3f593da556cf
ms.topic: conceptual
ms.date: 05/12/2023
monikerRange: 'azure-devops-2019 || azure-devops || azure-devops-2020'
zone_pivot_groups: template-type
---

# Template usage reference

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

::: moniker range=">=azure-devops-2020"

Templates let you define reusable content, logic, and parameters in YAML pipelines. To work with templates effectively, you'll need to have a basic understanding of [Azure Pipelines key concepts](../get-started/key-pipelines-concepts.md) such as stages, steps, and jobs. 

Templates can help you speed up development. For example, you can have a series of the same tasks in a template and then include the template multiple times in different stages of your YAML pipeline. 

Templates also can help you secure your pipeline. When a template controls what is allowed in a pipeline, the template defines logic that another file must follow. For example, if you have a template that sets which tasks are allowed in your pipeline, then you can prevent someone from adding and successfully running a task to a pipeline that violates your organization's security rules.
 
Templates function in two ways. You can insert reusable content with a template or you can use a template to control what is allowed in a pipeline. The second approach is useful for [building secure pipelines with templates](../security/templates.md).

If a template is used to include content, it functions like an include directive in many programming languages. Content from one file is inserted into another file. When a template controls what is allowed in a pipeline, the template defines logic that another file must follow. 

To take full advantage of templates, you should also use [template expressions](template-expressions.md) and [template parameters](template-parameters.md). 

::: moniker-end

::: moniker range="azure-devops-2019"

Use templates to define your logic once and then reuse it several times. Templates combine the content of multiple YAML files into a single pipeline. You can pass parameters into a template from your parent pipeline. 

::: moniker-end

::: zone pivot="templates-extends"  

::: moniker range=">=azure-devops-2020"

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
  pool:
    vmImage: windows-latest
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
            # Step is rejected by raising a YAML syntax error: Unexpected value 'CmdLine@2'
            '${{ pair.value }}': error         

    - script: echo This happens after code
      displayName: 'Base: Signing'
```

```yaml
# File: azure-pipelines.yml
trigger:
- main

extends:
  template: start.yml
  parameters:
    buildSteps:  
      - bash: echo Test #Passes
        displayName: succeed
      - bash: echo "Test"
        displayName: succeed
      # Step is rejected by raising a YAML syntax error: Unexpected value 'CmdLine@2'
      - task: CmdLine@2
        inputs:
          script: echo "Script Test"
      # Step is rejected by raising a YAML syntax error: Unexpected value 'CmdLine@2'
      - script: echo "Script Test"
```

### Extend from a template with resources

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
::: moniker-end

::: moniker range=">=azure-devops-2020"

:::zone-end

::: zone pivot="templates-includes"  

## Insert a template

You can copy content from one YAML and reuse it in a different YAML. Copying content from one YAML to another saves you from having to manually include the same logic in multiple places. The `include-npm-steps.yml` file template contains steps that are reused in `azure-pipelines.yml`.  

> [!NOTE]
> Template files need to exist on your filesystem at the start of a pipeline run. You can't reference templates in an artifact. 



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


#### Step reuse

You can insert a template to reuse one or more steps across several jobs.
In addition to the steps from the template, each job can define more steps.

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
    vmImage: 'ubuntu-latest'
  steps:
  - template: templates/npm-steps.yml  # Template reference

- job: macOS
  pool:
    vmImage: 'macOS-latest'
  steps:
  - template: templates/npm-steps.yml  # Template reference

- job: Windows
  pool:
    vmImage: 'windows-latest'
  steps:
  - script: echo This script runs before the template's steps, only on Windows.
  - template: templates/npm-steps.yml  # Template reference
  - script: echo This step runs after the template's steps.
```

#### Job reuse

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

- job:
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

#### Stage reuse

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
- main

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


#### Job, stage, and step templates with parameters

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
    vmImage: 'ubuntu-latest'

- template: templates/npm-with-params.yml  # Template reference
  parameters:
    name: macOS
    vmImage: 'macOS-latest'

- template: templates/npm-with-params.yml  # Template reference
  parameters:
    name: Windows
    vmImage: 'windows-latest'
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

Parameters aren't limited to scalar strings.
See the list of [data types](template-parameters.md#parameter-data-types).
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

Variables can be defined in one YAML and included in another template. This could be useful if you want to store all of your variables in one file. If you are using a template to include variables in a pipeline, the included template can only be used to define variables. You can use steps and more complex logic when you're [extending from a template](#extend-from-a-template). 
Use [parameters](template-parameters.md#passing-parameters) instead of variables when you want to restrict type. 

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
### Variable templates with parameter

You can pass parameters to variables with templates. In this example, you're passing the `DIRECTORY` parameter to a `RELEASE_COMMAND` variable. 

```yaml
# File: templates/package-release-with-params.yml

parameters:
- name: DIRECTORY 
  type: string
  default: "." # defaults for any parameters that specified with "." (current directory)

variables:
- name: RELEASE_COMMAND
  value: grep version ${{ parameters.DIRECTORY }}/package.json | awk -F \" '{print $4}'  
```

When you consume the template in your pipeline, specify values for
the template parameters.

```yaml
# File: azure-pipelines.yml

variables: # Global variables
  - template: package-release-with-params.yml # Template reference
    parameters:
      DIRECTORY: "azure/checker"

pool:
  vmImage: 'ubuntu-latest'

stages:
- stage: Release_Stage 
  displayName: Release Version
  variables: # Stage variables
  - template: package-release-with-params.yml  # Template reference
    parameters:
      DIRECTORY: "azure/todo-list"
  jobs: 
  - job: A
    steps: 
    - bash: $(RELEASE_COMMAND) #output release command
```
:::zone-end

## Reference template paths

Template paths should be relative to the file that does the including. Here's an example nested hierarchy. 

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

### Use other repositories

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
    vmImage: 'windows-latest'
```

For `type: github`, `name` is `<identity>/<repo>` as in the examples above.
For `type: git` (Azure Repos), `name` is `<project>/<repo>`.
If that project is in a separate Azure DevOps organization, you'll need to configure a [service connection](../library/service-endpoints.md#azure-repos) of type `Azure Repos/Team Foundation Server` with access to the project and include that in YAML:

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
> If no `ref` is specified, the pipeline will default to using `refs/heads/main`.

You may also use `@self` to refer to the repository where the original pipeline was found.
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

## FAQ

### How can I use variables inside of templates?

There are times when it may be useful to set parameters to values based on variables. Parameters are expanded early in processing a [pipeline run](runs.md) so not all variables will be available. To see what predefined variables are available in templates, see [Use predefined variables](../build/variables.md). 

In this example, the predefined variables `Build.SourceBranch` and `Build.Reason` are used in conditions in template.yml.


```yaml
# File: azure-pipelines.yml
trigger:
- main

extends:
  template: template.yml
```

```yaml
# File: template.yml
steps:
- script: echo Build.SourceBranch = $(Build.SourceBranch) # outputs refs/heads/main
- script: echo Build.Reason = $(Build.Reason) # outputs IndividualCI
- ${{ if eq(variables['Build.SourceBranch'], 'refs/heads/main') }}: 
  - script: echo I run only if Build.SourceBranch = refs/heads/main 
- ${{ if eq(variables['Build.Reason'], 'IndividualCI') }}: 
  - script: echo I run only if Build.Reason = IndividualCI 
- script: echo I run after the conditions
```

::: moniker-end

