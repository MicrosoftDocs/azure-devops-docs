---
title: Expressions
ms.custom: seodec18
description: Learn about how you can use expressions in Azure Pipelines or Team Foundation Server (TFS).
ms.topic: conceptual
ms.assetid: 4df37b09-67a8-418e-a0e8-c17d001f0ab3
ms.date: 10/11/2022
monikerRange: '>= azure-devops-2019'
---

# Expressions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-gt-eq-2019.md)]

Expressions can be used in many places where you need to specify a string, boolean, or number value when authoring a pipeline.
The most common use of expressions is in [conditions](conditions.md) to determine whether a job or step should run.

::: moniker range=">= azure-devops-2019"
```yaml
# Expressions are used to define conditions for a step, job, or stage
steps:
- task: ...
  condition: <expression>
```

Another common use of expressions is in defining variables.
Expressions can be evaluated at [compile time](runs.md#process-the-pipeline) or at [run time](runs.md#run-each-step).
Compile time expressions can be used anywhere; runtime expressions can be used in variables and conditions. Runtime expressions are intended as a way to compute the contents of variables and state (example: `condition`). 

```yaml
# Two examples of expressions used to define variables
# The first one, a, is evaluated when the YAML file is compiled into a plan.
# The second one, b, is evaluated at runtime.
# Note the syntax ${{}} for compile time and $[] for runtime expressions.
variables:
  a: ${{ <expression> }}
  b: $[ <expression> ]
```

The difference between runtime and compile time expression syntaxes is primarily what context is available.
In a compile-time expression (`${{ <expression> }}`), you have access to `parameters` and statically defined `variables`.
In a runtime expression (`$[ <expression> ]`), you have access to more `variables` but no parameters.

In this example, a runtime expression sets the  value of `$(isMain)`. A static variable in a compile expression sets the value of `$(compileVar)`.

```yaml
variables:
  staticVar: 'my value' # static variable
  compileVar: ${{ variables.staticVar }} # compile time expression
  isMain: $[eq(variables['Build.SourceBranch'], 'refs/heads/main')] # runtime expression

steps:
  - script: |
      echo ${{variables.staticVar}} # outputs my value
      echo $(compileVar) # outputs my value
      echo $(isMain) # outputs True
```

::: moniker-end

An expression can be a literal, a reference to a variable, a reference to a dependency, a function, or a valid nested combination of these.

## Literals

As part of an expression, you can use boolean, null, number, string, or version literals.

```yaml
# Examples
variables:
  someBoolean: ${{ true }} # case insensitive, so True or TRUE also works
  someNumber: ${{ -1.2 }}
  someString: ${{ 'a b c' }}
  someVersion: ${{ 1.2.3 }}
```

### Boolean
`True` and `False` are boolean literal expressions.

### Null
Null is a special literal expression that's returned from a dictionary miss, e.g. (`variables['noSuch']`). Null can be the output of an expression but cannot be called directly within an expression.

### Number
Starts with '-', '.', or '0' through '9'.

### String
Must be single-quoted. For example: `'this is a string'`.

To express a literal single-quote, escape it with a single quote.
For example: `'It''s OK if they''re using contractions.'`.

You can use a pipe character (`|`) for multiline strings.

```yaml
myKey: |
  one
  two
  three
```

### Version
A version number with up to four segments.
Must start with a number and contain two or three period (`.`) characters.
For example: `1.2.3.4`.

## Variables

As part of an expression, you may access variables using one of two syntaxes:

* Index syntax: `variables['MyVar']`
* Property dereference syntax: `variables.MyVar`

In order to use property dereference syntax, the property name must:
- Start with `a-Z` or `_`
- Be followed by `a-Z` `0-9` or `_`

Depending on the execution context, different variables are available.
- If you create pipelines using YAML, then [pipeline variables](../build/variables.md) are available.
- If you create build pipelines using classic editor, then [build variables](../build/variables.md) are available.
- If you create release pipelines using classic editor, then [release variables](../release/variables.md) are available.

Variables are always strings. If you want to use typed values, then you should use [parameters](runtime-parameters.md) instead.

> [!NOTE]
> There is a limitation for using variables with expressions for both Classical and YAML pipelines when setting up such variables via variables tab UI. Variables that are defined as expressions shouldn't depend on another variable with expression in value since **it isn't guaranteed** that both expressions will be evaluated properly. For example we have variable `a` whose value `$[ <expression> ]` is used as a part for the value of variable `b`. Since the order of processing variables isn't guaranteed variable `b` could have an incorrect value of variable `a` after evaluation.
>
> Described constructions are only allowed while setup variables through [variables keyword](./variables.md#set-variables-in-pipeline) in YAML pipeline. It is required to place the variables in the order they should be processed to get the correct values after processing.

## Functions

The following built-in functions can be used in expressions.

### and
* Evaluates to `True` if all parameters are `True`
* Min parameters: 2. Max parameters: N
* Casts parameters to Boolean for evaluation
* Short-circuits after first `False`
* Example: `and(eq(variables.letters, 'ABC'), eq(variables.numbers, 123))`

::: moniker range=">= azure-devops-2019"

### coalesce
* Evaluates the parameters in order, and returns the value that does not equal null or empty-string.
* Min parameters: 2. Max parameters: N
* Example: `coalesce(variables.couldBeNull, variables.couldAlsoBeNull, 'literal so it always works')`

::: moniker-end

### contains
* Evaluates `True` if left parameter String contains right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison
* Example: `contains('ABCDE', 'BCD')` (returns True)

### containsValue
* Evaluates `True` if the left parameter is an array, and any item equals the right parameter. Also evaluates `True` if the left parameter is an object, and the value of any property equals the right parameter.
* Min parameters: 2. Max parameters: 2
* If the left parameter is an array, convert each item to match the type of the right parameter. If the left parameter is an object, convert the value of each property to match the type of the right parameter.  The equality comparison for each specific item evaluates `False` if the conversion fails.
* Ordinal ignore-case comparison for Strings
* Short-circuits after the first match

> [!NOTE]
> There is no literal syntax in a YAML pipeline for specifying an array.
> This function is of limited use in general pipelines.
> It's intended for use in the [pipeline decorator context](../../extend/develop/pipeline-decorator-context.md) with system-provided arrays such as the list of steps.

You can use the `containsValue` expression to find a matching value in an object. Here is an example that demonstrates looking in list of source branches for a match for `Build.SourceBranch`. 

```yaml
parameters:
- name: branchOptions
  displayName: Source branch options
  type: object
  default:
    - refs/heads/main
    - refs/heads/test

jobs:
  - job: A1 
    steps:
    - ${{ each value in parameters.branchOptions }}:
      - script: echo ${{ value }}

  - job: B1 
    condition: ${{ containsValue(parameters.branchOptions, variables['Build.SourceBranch']) }}
    steps:
      - script: echo "Matching branch found"
```

::: moniker range=">= azure-devops-2019"

### convertToJson
* Take a complex object and outputs it as JSON.
* Min parameters: 1. Max parameters: 1.

```yaml
parameters:
  - name: listOfValues
    type: object
    default:
      this_is:
        a_complex: object
        with:
          - one
          - two
 
steps:
- script: |
    echo "${MY_JSON}"
  env:
    MY_JSON: ${{ convertToJson(parameters.listOfValues) }}
```

Script output:

```json
{
  "this_is": {
    "a_complex": "object",
    "with": [
      "one",
      "two"
    ]
  }
}
```

### counter
* This function can only be used in an expression that defines a variable. It cannot be used as part of a condition for a step, job, or stage.
* Evaluates a number that is incremented with each run of a pipeline.
* Parameters: 2. `prefix` and `seed`.
* Prefix is a string expression. A separate value of counter is tracked for each unique value of prefix. The `prefix` should use UTF-16 characters.
* Seed is the starting value of the counter

You can create a counter that is automatically incremented by one in each execution of your pipeline. When you define a counter, you provide a `prefix` and a `seed`. Here is an example that demonstrates this. 

```yaml
variables:
  major: 1
  # define minor as a counter with the prefix as variable major, and seed as 100.
  minor: $[counter(variables['major'], 100)]

steps:
- bash: echo $(minor)
```

The value of `minor` in the above example in the first run of the pipeline will be 100. In the second run it will be 101, provided the value of `major` is still 1.

If you edit the YAML file, and update the value of the variable `major` to be 2, then in the next run of the pipeline, the value of `minor` will be 100. Subsequent runs will increment the counter to 101, 102, 103, ...

Later, if you edit the YAML file, and set the value of `major` back to 1, then the value of the counter resumes where it left off for that prefix. In this example, it resumes at 102.

Here is another example of setting a variable to act as a counter that starts at 100, gets incremented by 1 for every run, and gets reset to 100 every day.

> [!NOTE]
> `pipeline.startTime` is not available outside of expressions. `pipeline.startTime`
>  formats `system.pipelineStartTime` into a date and time object so that it is available to work with expressions.
> The default time zone for `pipeline.startTime` is UTC. You can [change the time zone](../../organizations/accounts/change-time-zone.md) for your organization.


```yaml
jobs:
- job:
  variables:
    a: $[counter(format('{0:yyyyMMdd}', pipeline.startTime), 100)]
  steps:
  - bash: echo $(a)
```

Here is an example of having a counter that maintains a separate value for PRs and CI runs.

```yaml
variables:
  patch: $[counter(variables['build.reason'], 0)]
```

Counters are scoped to a pipeline. In other words, its value is incremented for each run of that pipeline. There are no project-scoped counters.

::: moniker-end

### endsWith
* Evaluates `True` if left parameter String ends with right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison
* Example: `endsWith('ABCDE', 'DE')` (returns True)

### eq
* Evaluates `True` if parameters are equal
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Returns `False` if conversion fails.
* Ordinal ignore-case comparison for Strings
* Example: `eq(variables.letters, 'ABC')`

::: moniker range=">= azure-devops-2019"

### format
* Evaluates the trailing parameters and inserts them into the leading parameter string
* Min parameters: 1. Max parameters: N
* Example: `format('Hello {0} {1}', 'John', 'Doe')`
* Uses [.NET custom date and time format specifiers](/dotnet/standard/base-types/custom-date-and-time-format-strings) for date formatting (`yyyy`, `yy`, `MM`, `M`, `dd`, `d`, `HH`, `H`, `m`, `mm`, `ss`, `s`, `f`, `ff`, `ffff`, `K`)
* Example: `format('{0:yyyyMMdd}', pipeline.startTime)`. In this case `pipeline.startTime` is a special date time object variable.
* Escape by doubling braces. For example: `format('literal left brace {{ and literal right brace }}')`

::: moniker-end

### ge
* Evaluates `True` if left parameter is greater than or equal to the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings
* Example: `ge(5, 5)` (returns True)

### gt
* Evaluates `True` if left parameter is greater than the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings
* Example: `gt(5, 2)` (returns True)

### in
* Evaluates `True` if left parameter is equal to any right parameter
* Min parameters: 1. Max parameters: N
* Converts right parameters to match type of left parameter. Equality comparison evaluates `False` if conversion fails.
* Ordinal ignore-case comparison for Strings
* Short-circuits after first match
* Example: `in('B', 'A', 'B', 'C')` (returns True)

::: moniker range="> azure-devops-2019"

### join
* Concatenates all elements in the right parameter array, separated by the left parameter string.
* Min parameters: 2. Max parameters: 2
* Each element in the array is converted to a string. Complex objects are converted to empty string.
* If the right parameter is not an array, the result is the right parameter converted to a string.

In this example, a semicolon gets added between each item in the array. The parameter type is an object.

```yaml
parameters:
- name: myArray
  type: object
  default:
    - FOO
    - BAR
    - ZOO

variables:
   A: ${{ join(';',parameters.myArray) }}

steps:
  - script: echo $A # outputs FOO;BAR;ZOO
```

::: moniker-end

### le
* Evaluates `True` if left parameter is less than or equal to the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings
* Example: `le(2, 2)` (returns True)

### length
* Returns the length of a string or an array, either one that comes from the system or that comes from a parameter
* Min parameters: 1. Max parameters 1
* Example: `length('fabrikam')` returns 8

::: moniker range="> azure-devops-2019"
### lower
* Converts a string or variable value to all lowercase characters
* Min parameters: 1. Max parameters 1
* Returns the lowercase equivalent of a string
* Example: `lower('FOO')` returns `foo`
::: moniker-end

### lt
* Evaluates `True` if left parameter is less than the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings
* Example: `lt(2, 5)` (returns True)

### ne
* Evaluates `True` if parameters are not equal
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Returns `True` if conversion fails.
* Ordinal ignore-case comparison for Strings
* Example: `ne(1, 2)` (returns True)

### not
* Evaluates `True` if parameter is `False`
* Min parameters: 1. Max parameters: 1
* Converts value to Boolean for evaluation
* Example: `not(eq(1, 2))` (returns True)

### notIn
* Evaluates `True` if left parameter is not equal to any right parameter
* Min parameters: 1. Max parameters: N
* Converts right parameters to match type of left parameter. Equality comparison evaluates `False` if conversion fails.
* Ordinal ignore-case comparison for Strings
* Short-circuits after first match
* Example: `notIn('D', 'A', 'B', 'C')` (returns True)

### or
* Evaluates `True` if any parameter is `True`
* Min parameters: 2. Max parameters: N
* Casts parameters to Boolean for evaluation
* Short-circuits after first `True`
* Example: `or(eq(1, 1), eq(2, 3))` (returns True, short-circuits)

::: moniker range="> azure-devops-2019"
### replace
* Returns a new string in which all instances of a string in the current instance are replaced with another string
* Min parameters: 3. Max parameters: 3
* `replace(a, b, c)`: returns a, with all instances of b replaced by c
* Example: `replace('https://www.tinfoilsecurity.com/saml/consume','https://www.tinfoilsecurity.com','http://server')` (returns `http://server/saml/consume`)
::: moniker-end

::: moniker range=">= azure-devops"

### split
* Splits a string into substrings based on the specified delimiting characters 
* Min parameters: 2. Max parameters: 2
* The first parameter is the string to split
* The second parameter is the delimiting characters
* Returns an array of substrings. The array includes empty strings when the delimiting characters appear consecutively or at the end of the string
* Example: 
  ```yml
  variables:
  - name: environments
    value: prod1,prod2 
  steps:  
    - ${{ each env in split(variables.environments, ',')}}:
      - script: ./deploy.sh --environment ${{ env }}
  ```
* Example of using split() with replace():
  ```yml
  parameters:
  - name: resourceIds
    type: object
    default:
    - /subscriptions/mysubscription/resourceGroups/myResourceGroup/providers/Microsoft.Network/loadBalancers/kubernetes-internal
    - /subscriptions/mysubscription02/resourceGroups/myResourceGroup02/providers/Microsoft.Network/loadBalancers/kubernetes
  - name: environments
    type: object
    default: 
    - prod1
    - prod2

  trigger:
  - main
    
  steps:
  - ${{ each env in parameters.environments }}:
    - ${{ each resourceId in parameters.resourceIds }}:
        - script: echo ${{ replace(split(resourceId, '/')[8], '-', '_') }}_${{ env }}
  ```

::: moniker-end

### startsWith
* Evaluates `True` if left parameter string starts with right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison
* Example: `startsWith('ABCDE', 'AB')` (returns True)

::: moniker range="> azure-devops-2019"
### upper
* Converts a string or variable value to all uppercase characters
* Min parameters: 1. Max parameters 1
* Returns the uppercase equivalent of a string
* Example: `upper('bah')` returns `BAH`
::: moniker-end


### xor
* Evaluates `True` if exactly one parameter is `True`
* Min parameters: 2. Max parameters: 2
* Casts parameters to Boolean for evaluation
* Example: `xor(True, False)` (returns True)


<h2 id="job-status-functions">Job status check functions</h2>

You can use the following status check functions as expressions in conditions, but not in variable definitions.

<h3 id="always">always</h3>

* Always evaluates to <code>True</code> (even when canceled). Note: A critical failure may still prevent a task from running. For example, if getting sources failed.

### canceled
* Evaluates to `True` if the pipeline was canceled.

### failed
* For a step, equivalent to `eq(variables['Agent.JobStatus'], 'Failed')`.
* For a job:
  * With no arguments, evaluates to `True` only if any previous job in the dependency graph failed.
  * With job names as arguments, evaluates to `True` only if any of those jobs failed.

### succeeded
* For a step, equivalent to `in(variables['Agent.JobStatus'], 'Succeeded', 'SucceededWithIssues')`
* Use with `dependsOn` when working with jobs and you want to evaluate whether a previous job was successful. Jobs are designed to run in parallel while stages run sequentially. 
* For a job:
  * With no arguments, evaluates to `True` only if all previous jobs in the dependency graph succeeded or partially succeeded.
  * With job names as arguments, evaluates to `True` if all of those jobs succeeded or partially succeeded.
  * Evaluates to `False` if the pipeline is canceled.

### succeededOrFailed
* For a step, equivalent to `in(variables['Agent.JobStatus'], 'Succeeded', 'SucceededWithIssues', 'Failed')`
* For a job:
  * With no arguments, evaluates to `True` regardless of whether any jobs in the dependency graph succeeded or failed.
  * With job names as arguments, evaluates to `True` whether any of those jobs succeeded or failed.
  * You may want to use `not(canceled())` instead when there are previous skipped jobs in the dependency graph. 

  > This is like `always()`, except it will evaluate `False` when the pipeline is canceled.

## Conditional insertion

::: moniker range=">=azure-devops-2022"
You can use `if`, `elseif`, and `else` clauses to conditionally assign variable values or set inputs for tasks. You can also conditionally run a step when a condition is met. 
::: moniker-end

::: moniker range="< azure-devops-2022"
You can use `if`  to conditionally assign variable values or set inputs for tasks. You can also conditionally run a step when a condition is met. 

The `elseif` and `else` clauses are are available starting with Azure DevOps 2022 and are not available for Azure DevOps Server 2020 and earlier versions of Azure DevOps.

::: moniker-end

Conditionals only work when using template syntax. Learn more about [variable syntax](variables.md#understand-variable-syntax). 

For templates, you can use conditional insertion when adding a sequence or mapping. Learn more about [conditional insertion in templates](templates.md).

### Conditionally assign a variable
```yml
variables:
  ${{ if eq(variables['Build.SourceBranchName'], 'main') }}: # only works if you have a main branch
    stageName: prod

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: echo ${{variables.stageName}}
```

::: moniker range=">=azure-devops-2022"

### Conditionally set a task input
```yml
pool:
  vmImage: 'ubuntu-latest'

steps:
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '$(Pipeline.Workspace)'
    ${{ if eq(variables['Build.SourceBranchName'], 'main') }}:
      artifact: 'prod'
    ${{ else }}:
      artifact: 'dev'
    publishLocation: 'pipeline'
```

### Conditionally run a step

If there is no variable set, or the value of `foo` does not match the `if` conditions, the `else` statement will run. Here the value of `foo` returns true in the `elseif` condition. 

```yaml
variables:
  - name: foo
    value: contoso # triggers elseif condition

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: echo "start"
- ${{ if eq(variables.foo, 'adaptum') }}:
  - script: echo "this is adaptum"
- ${{ elseif eq(variables.foo, 'contoso') }}: # true
  - script: echo "this is contoso" 
- ${{ else }}:
  - script: echo "the value is not adaptum or contoso"
```
::: moniker-end

::: moniker range=">=azure-devops-2020"

## Each keyword

You can use the `each` keyword to loop through parameters with the object type. 

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
- ${{ each fruit in parameters.listOfFruits }} :
  - ${{ each fruitColor in fruit.colors}} :
    - script: echo ${{ fruit.fruitName}} ${{ fruitColor }}
``` 

## Dependencies

Expressions can use the dependencies context to reference previous jobs or stages. You can use dependencies to:

* Reference the job status of a previous job
* Reference the stage status of a previous stage
* Reference output variables in the previous job in the same stage
* Reference output variables in the previous stage in a stage
* Reference output variables in a job in a previous stage in the following stage

The context is called `dependencies` for jobs and stages and works much like variables.
Inside a job, if you refer to an output variable from a job in another stage, the context is called `stageDependencies`.

If you experience issues with output variables having quote characters (`'` or `"`) in them, see [this troubleshooting guide](../troubleshooting/troubleshooting.md#variables-having--single-quote-appended).

### Stage to stage dependencies
Structurally, the `dependencies` object is a map of job and stage names to `results` and `outputs`.
Expressed as JSON, it would look like:

```json
"dependencies": {
  "<STAGE_NAME>" : {
    "result": "Succeeded|SucceededWithIssues|Skipped|Failed|Canceled",
    "outputs": {
        "jobName.stepName.variableName": "value"
    }
  },
  "...": {
    // another stage
  }
}
```

Use this form of `dependencies` to map in variables or check conditions at a stage level.
In this example, Stage B runs whether Stage A is successful or skipped.

> [!NOTE]
> The following examples use standard pipeline syntax. If you're using deployment pipelines, both variable and conditional variable syntax will differ. For information about the specific syntax to use, see [Deployment jobs](deployment-jobs.md).

```yaml
stages:
- stage: A
  condition: false
  jobs:
  - job: A1
    steps:
    - script: echo Job A1
- stage: B
  condition: in(dependencies.A.result, 'Succeeded', 'SucceededWithIssues', 'Skipped')
  jobs:
  - job: B1
    steps:
    - script: echo Job B1
```

Stages can also use output variables from another stage.
In this example, Stage B depends on a variable in Stage A.

```yaml
stages:
- stage: A
  jobs:
  - job: A1
    steps:
     - bash: echo "##vso[task.setvariable variable=shouldrun;isOutput=true]true"
     # or on Windows:
     # - script: echo ##vso[task.setvariable variable=shouldrun;isOutput=true]true
       name: printvar

- stage: B
  condition: and(succeeded(), eq(dependencies.A.outputs['A1.printvar.shouldrun'], 'true'))
  dependsOn: A
  jobs:
  - job: B1
    steps:
    - script: echo hello from Stage B
```

> [!NOTE]
> By default, each stage in a pipeline depends on the one just before it in the YAML file.
> If you need to refer to a stage that isn't immediately prior to the current one, you can override this automatic default by adding a `dependsOn` section to the stage.

### Job to job dependencies within one stage
At the job level within a single stage, the `dependencies` data doesn't contain stage-level information.

```json
"dependencies": {
  "<JOB_NAME>": {
    "result": "Succeeded|SucceededWithIssues|Skipped|Failed|Canceled",
    "outputs": {
      "stepName.variableName": "value1"
    }
  },
  "...": {
    // another job
  }
}
```

In this example, Job A will always be skipped and Job B will run.
Job C will run, since all of its dependencies either succeed or are skipped.

```yaml
jobs:
- job: a
  condition: false
  steps:
  - script: echo Job A
- job: b
  steps:
  - script: echo Job B
- job: c
  dependsOn:
  - a
  - b
  condition: |
    and
    (
      in(dependencies.a.result, 'Succeeded', 'SucceededWithIssues', 'Skipped'),
      in(dependencies.b.result, 'Succeeded', 'SucceededWithIssues', 'Skipped')
    )
  steps:
  - script: echo Job C
```

In this example, Job B depends on an output variable from Job A.

```yaml
jobs:
- job: A
  steps:
  - bash: echo "##vso[task.setvariable variable=shouldrun;isOutput=true]true"
  # or on Windows:
  # - script: echo ##vso[task.setvariable variable=shouldrun;isOutput=true]true
    name: printvar

- job: B
  condition: and(succeeded(), eq(dependencies.A.outputs['printvar.shouldrun'], 'true'))
  dependsOn: A
  steps:
  - script: echo hello from B
```

::: moniker-end
::: moniker range=">=azure-devops-2020"

### Job to job dependencies across stages

At the job level, you can also reference outputs from a job in a previous stage.
This requires using the `stageDependencies` context.

```json
"stageDependencies": {
  "<STAGE_NAME>" : {
    "<JOB_NAME>": {
      "result": "Succeeded|SucceededWithIssues|Skipped|Failed|Canceled",
      "outputs": {
          "stepName.variableName": "value"
      }
    },
    "...": {
      // another job
    }
  },
  "...": {
    // another stage
  }
}
```

In this example, job B1 will run if job A1 is skipped.
Job B2 will check the value of the output variable from job A1 to determine whether it should run.

```yaml
trigger: none

pool:
  vmImage: 'ubuntu-latest'

stages:
- stage: A
  jobs:
  - job: A1
    steps:
     - bash: echo "##vso[task.setvariable variable=shouldrun;isOutput=true]true"
     # or on Windows:
     # - script: echo ##vso[task.setvariable variable=shouldrun;isOutput=true]true
       name: printvar

- stage: B
  dependsOn: A
  jobs:
  - job: B1
    condition: in(stageDependencies.A.A1.result, 'Skipped') # change condition to `Succeeded and stage will be skipped`
    steps:
    - script: echo hello from Job B1
  - job: B2
    condition: eq(stageDependencies.A.A1.outputs['printvar.shouldrun'], 'true')
    steps:
     - script: echo hello from Job B2

```
::: moniker-end

::: moniker range=">=azure-devops-2020"

If a job depends on a variable defined by a deployment job in a different stage, then the syntax is different. In the following example, the job `run_tests` runs if the `build_job` deployment job set `runTests` to `true`. Notice that the key used for the `outputs` dictionary is `build_job.setRunTests.runTests`.

```yml
stages:
- stage: build
  jobs:
  - deployment: build_job
    environment:
      name: Production
    strategy:
      runOnce:
        deploy:
          steps:
          - task: PowerShell@2
            name: setRunTests
            inputs:
              targetType: inline
              pwsh: true
              script: |
                $runTests = "true"
                echo "setting runTests: $runTests"
                echo "##vso[task.setvariable variable=runTests;isOutput=true]$runTests"

- stage: test
  dependsOn:
  - 'build'
  jobs:  
    - job: run_tests
      condition: eq(stageDependencies.build.build_job.outputs['build_job.setRunTests.runTests'], 'true')
      steps:
        ...
```

::: moniker-end

::: moniker range=">=azure-devops-2020"

### Stage depending on job output

If no changes are required after a build, you might want to skip a stage in a pipeline under certain conditions. An example is when you're using Terraform Plan, and you want to trigger approval and apply only when the plan contains changes.

When you use this condition on a stage, you must use the `dependencies` variable, not `stageDependencies`.

The following example is a simple script that sets a variable (use your actual information from Terraform Plan) in a step in a stage, and then invokes the second stage only if the variable has a specific value.

```yaml
stages:
- stage: plan_dev
  jobs:
  - job: terraform_plan_dev
    steps:
    - bash: echo '##vso[task.setvariable variable=terraform_plan_exitcode;isOutput=true]2'
      name: terraform_plan
- stage: apply_dev
  dependsOn: plan_dev
  condition: eq(dependencies.plan_dev.outputs['terraform_plan_dev.terraform_plan.terraform_plan_exitcode'], '2')
  jobs:
  - job: part_b
    steps:
    - bash: echo "BA"
```

If a stage depends on a variable defined by a deployment job in a different stage, then the syntax is different. In the following example, the stage `test` depends on the deployment `build_job` setting `shouldTest` to `true`. Notice that in the `condition` of the `test` stage, `build_job` appears twice.

```yml
stages:
- stage: build
  jobs:
  - deployment: build_job
    environment:
      name: Production
    strategy:
      runOnce:
        deploy:
          steps:
          - task: PowerShell@2
            name: setRunTests
            inputs:
              targetType: inline
              pwsh: true
              script: |
                $runTests = "true"
                echo "setting runTests: $runTests"
                echo "##vso[task.setvariable variable=runTests;isOutput=true]$runTests"

- stage: test
  dependsOn:
  - 'build'
  condition: eq(dependencies.build.outputs['build_job.build_job.setRunTests.runTests'], 'true')
  jobs:
    ...
```

In the example above, the condition references an environment and not an environment resource. To reference an environment resource, you'll need to add the environment resource name to the dependencies condition. In the following example, condition references an environment virtual machine resource named `vmtest`. 

```yml
stages:
- stage: build
  jobs:
  - deployment: build_job
    environment:
      name: vmtest
      resourceName: winVM2
      resourceType: VirtualMachine
    strategy:
      runOnce:
        deploy:
          steps:
          - task: PowerShell@2
            name: setRunTests
            inputs:
              targetType: inline
              pwsh: true
              script: |
                $runTests = "true"
                echo "setting runTests: $runTests"
                echo "##vso[task.setvariable variable=runTests;isOutput=true]$runTests"

- stage: test
  dependsOn:
  - 'build'
  condition: eq(dependencies.build.outputs['build_job.Deploy_winVM2.setRunTests.runTests']
, 'true')
  jobs:
    ...
```

::: moniker-end

## Filtered arrays

When operating on a collection of items, you can use the `*` syntax to apply a filtered array. A filtered array returns all objects/elements regardless their names.

As an example, consider an array of objects named `foo`. We want to get an array of the values of the `id` property in each object in our array.

```json
[
    { "id": 1, "a": "avalue1"},
    { "id": 2, "a": "avalue2"},
    { "id": 3, "a": "avalue3"}
]
```

We could do the following:

`foo.*.id`

This tells the system to operate on `foo` as a filtered array and then select the `id` property.

This would return:

```json
[ 1, 2, 3 ]
```

## Type casting

Values in an expression may be converted from one type to another as the expression gets evaluated.
When an expression is evaluated, the parameters are coalesced to the relevant data type and then turned back into strings.

For example, in this YAML, the values `True` and `False` are converted  to `1` and `0` when the expression is evaluated.
The function `lt()` returns `True` when the left parameter is less than the right parameter.

```yaml
variables:
  firstEval: $[lt(False, True)] # 0 vs. 1, True
  secondEval: $[lt(True, False)] # 1 vs. 0, False

steps:
- script: echo $(firstEval)
- script: echo $(secondEval)
```


In this example, the values `variables.emptyString` and the empty string both evaluate as empty strings.
The function `coalesce()` evaluates the parameters in order, and returns the first value that does not equal null or empty-string.


```yaml
variables:
  coalesceLiteral: $[coalesce(variables.emptyString, '', 'literal value')]

steps:
- script: echo $(coalesceLiteral) # outputs literal value
```

Detailed conversion rules are listed further below.

| From / To   | Boolean | Null    | Number  | String  | Version |
| ----------- | ------- | ------- | ------- | ------- | ------- |
| **Boolean** | -       | -       | Yes     | Yes     | -       |
| **Null**    | Yes     | -       | Yes     | Yes     | -       |
| **Number**  | Yes     | -       | -       | Yes     | Partial |
| **String**  | Yes     | Partial | Partial | -       | Partial |
| **Version** | Yes     | -       | -       | Yes     | -       |

### Boolean

To number:
* `False` &rarr; `0`
* `True` &rarr; `1`

To string:
* `False` &rarr; `'False'`
* `True` &rarr; `'True'`

### Null

* To Boolean: `False`
* To number: `0`
* To string: `''` (the empty string)

### Number

* To Boolean: `0` &rarr; `False`, any other number &rarr; `True`
* To version: Must be greater than zero and must contain a non-zero decimal. Must be less than [Int32.MaxValue](/dotnet/api/system.int32.maxvalue) (decimal component also).
* To string:
Converts the number to a string with no thousands separator and no decimal separator.

### String

* To Boolean: `''` (the empty string) &rarr; `False`, any other string &rarr; `True`
* To null: `''` (the empty string) &rarr; `Null`, any other string not convertible
* To number: `''` (the empty string) &rarr; 0, otherwise, runs C#'s `Int32.TryParse` using [InvariantCulture](/dotnet/api/system.globalization.cultureinfo.invariantculture) and the following rules: AllowDecimalPoint | AllowLeadingSign | AllowLeadingWhite | AllowThousands | AllowTrailingWhite. If `TryParse` fails, then it's not convertible.
* To version:
runs C#'s `Version.TryParse`. Must contain Major and Minor component at minimum. If `TryParse` fails, then it's not convertible.

### Version

* To Boolean: `True`
* To string: Major.Minor or Major.Minor.Build or Major.Minor.Build.Revision.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### I want to do something that is not supported by expressions. What options do I have for extending Pipelines functionality?

You can customize your Pipeline with a script that includes an expression. For example, this snippet takes the `BUILD_BUILDNUMBER` variable and splits it with Bash. This script outputs two new variables, `$MAJOR_RUN` and `$MINOR_RUN`, for the major and minor run numbers.
The two variables are then used to create two pipeline variables, `$major` and `$minor` with [task.setvariable](../scripts/logging-commands.md#task-commands). These variables are available to downstream steps. To share variables across pipelines see [Variable groups](../../pipelines/library/variable-groups.md).

```yaml
steps:
- bash: |
    MAJOR_RUN=$(echo $BUILD_BUILDNUMBER | cut -d '.' -f1)
    echo "This is the major run number: $MAJOR_RUN"
    echo "##vso[task.setvariable variable=major]$MAJOR_RUN"

    MINOR_RUN=$(echo $BUILD_BUILDNUMBER | cut -d '.' -f2)
    echo "This is the minor run number: $MINOR_RUN"
    echo "##vso[task.setvariable variable=minor]$MINOR_RUN"

- bash: echo "My pipeline variable for major run is $(major)"
- bash: echo "My pipeline variable for minor run is $(minor)"
```

<!-- ENDSECTION -->
