---
title: Parameters and templateContext
description: How to use parameters in templates
ms.topic: conceptual
ms.date: 08/30/2024
monikerRange: '>=azure-devops-2019'
ai-usage: ai-assisted
---

# Template parameters

::: moniker range=">=azure-devops-2020"

You can specify parameters and their data types in a template and reference those parameters in a pipeline. With [templateContext](#use-templatecontext-to-pass-properties-to-templates), you can also pass properties to stages, steps, and jobs that are used as parameters in a template. 

You can also [use parameters outside of templates](runtime-parameters.md). You can only use literals for parameter default values. Learn more about [parameters in the YAML schema](/azure/devops/pipelines/yaml-schema/parameters-parameter). 

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
- main

extends:
  template: simple-param.yml
  parameters:
      yesNo: false # set to a non-boolean value to have the build fail
```
::: moniker-end

::: moniker range="azure-devops"

## Use templateContext to pass properties to templates

You can use `templateContext` to pass more properties to stages, steps, and jobs that are used as parameters in a template. Specifically, you can specify `templateContext` within the `jobList`, `deploymentList`, or `stageList` parameter data type. 
  
You can use `templateContext` to make it easier to set up environments when processing each job. By bundling a job and its environment properties object together, `templateContext` can help you have more maintainable and easier to understand YAML. 

In this example, the parameter `testSet` in `testing-template.yml` has the data type `jobList`. The template `testing-template.yml` creates a new variable `testJob` using the [each keyword](expressions.md#each-keyword). The template then references the `testJob.templateContext.expectedHTTPResponseCode`, which gets set in `azure-pipeline.yml` and passed to the template. 

When response code is 200, the template makes a REST request. When the response code is 500, the template outputs all of the environment variables for debugging. 

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

You can iterate through an object and print each string in the object. 

```yaml
parameters:
- name: listOfStrings  
  type: object
  default: 
  - one
  - two

steps:
- ${{ each value in parameters.listOfStrings }}: # Iterate over each value in the 'listOfStrings' parameter
  - script: echo ${{ value }} # Output the current value in the iteration
``` 

Additionally, you can iterate through nested elements within an object.

```yaml
parameters:
- name: listOfFruits
  type: object
  default:
  - fruitName: 'apple'
    colors: ['red','green']
  - fruitName: 'lemon'
    colors: ['yellow'] 

steps:
- ${{ each fruit in parameters.listOfFruits }} : # Iterate over each fruit in the 'listOfFruits'
  - ${{ each fruitColor in fruit.colors}} : # Iterate over each color in the current fruit's colors
    - script: echo ${{ fruit.fruitName}} ${{ fruitColor }} # Echo the current fruit's name and color
``` 


### Required parameters

You can add a validation step at the beginning of your template to check for the parameters you require.

Here's an example that checks for the `solution` parameter using Bash:

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

::: moniker-end

::: moniker range="azure-devops-2019"

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
    vmImage: 'ubuntu-latest'

- template: templates/npm-with-params.yml  # Template reference
  parameters:
    name: macOS
    vmImage: 'macOS-10.13'

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

Parameters aren't limited to scalar strings.
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

::: moniker-end
