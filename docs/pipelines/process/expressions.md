---
title: Expressions
ms.custom: seodec18
description: Learn about how you can use expressions in Azure Pipelines or Team Foundation Server (TFS).
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 4df37b09-67a8-418e-a0e8-c17d001f0ab3
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 08/06/2019
monikerRange: '>= tfs-2017'
---

# Expressions

**Azure Pipelines | TFS 2018 | TFS 2017.3** 

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

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
Compile-time expressions can be used anywhere; runtime expressions are more limited.

```yaml
# Two examples of expressions used to define variables
# The first one, a, is evaluated when the YAML file is parsed into a plan.
# The second one, b, is evaluated at run time. 
# Note the syntax ${{}} for parse time and $[] for runtime expressions.
variables:
  a: ${{ <expression> }}
  b: $[ <expression> ]
```

The difference between these syntaxes is primarily what context is available.
In a parse time expression, you have access to `parameters` and statically-defined `variables`.
In a runtime expression, you have access to more `variables` but no parameters.

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
Null is a special literal expression that's returned from a dictionary miss, e.g. (`variables['noSuch']`).

### Number
Starts with '-', '.', or '0' through '9'.

### String
Must be single-quoted. For example: `'this is a string'`.

To express a literal single-quote, escape it with a single quote.
For example: `'It''s OK if they''re using contractions.'`.

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
* If the left parameter is an array, converts each item to match the type of the right parameter. If the left parameter is an object, converts the value of each property to match the type of the right parameter.  The equality comparison for each specific item evaluates `False` if the conversion fails.
* Ordinal ignore-case comparison for Strings
* Short-circuits after the first match

> [!NOTE]
> There is no literal syntax in a YAML pipeline for specifying an array.
> This function is of limited use in general pipelines.
> It's intended for use in the [pipeline decorator context](../../extend/develop/pipeline-decorator-context.md) with system-provided arrays such as the list of steps.

::: moniker range=">= azure-devops-2019"

### counter
* This function can only be used in an expression that defines a variable. It cannot be used as part of a condition for a step, job, or stage.
* Evaluates a number that is incremented with each run of a pipeline.
* Parameters: 2. `prefix` and `seed`.
* Prefix is a string expression. A separate value of counter is tracked for each unique value of prefix
* Seed is the starting value of the counter

You can create a counter that is automatically incremented by one in each execution of your pipeline. When you define a counter, you provide a `prefix` and a `seed`. Here is an example that demonstrates this.

```yaml
variables:
  major: 1
  # define b as a counter with the prefix as variable a, and seed as 100.
  minor: $[counter(variables['major'], 100)]

steps:
    - bash: echo $(minor)
```

The value of `minor` in the above example in the first run of the pipeline will be 100. In the second run it will be 101, provided the value of `major` is still 1.

If you edit the YAML file, and update the value of the variable `major` to be 2, then in the next run of the pipeline, the value of `minor` will be 100. Subsequent runs will increment the counter to 101, 102, 103, ...

Later, if you edit the YAML file, and set the value of `major` back to 1, then the value of the counter resumes where it left off for that prefix. In this example, it resumes at 102.

Here is another example of setting a variable to act as a counter that starts at 100, gets incremented by 1 for every run, and gets reset to 100 every day.

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
* Evaluates the trailing parameters and inserts them into the leading parameter string.
* Min parameters: 1. Max parameters: N
* Example: `format('Hello {0} {1}', 'John', 'Doe')`
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

::: moniker-end

### le
* Evaluates `True` if left parameter is less than or equal to the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings
* Example: `le(2, 2)` (returns True)

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
* Evaluates `True` if any parameter is `true`
* Min parameters: 2. Max parameters: N
* Casts parameters to Boolean for evaluation
* Short-circuits after first `True`
* Example: `or(eq(1, 1), eq(2, 3))` (returns True, short-circuits)

### startsWith
* Evaluates `true` if left parameter string starts with right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison
* Example: `startsWith('ABCDE', 'AB')` (returns True)

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
* For a job:
  * With no arguments, evaluates to `True` only if all previous jobs in the dependency graph succeeded or partially succeeded.
  * With job names as arguments, evaluates to `True` if all of those jobs succeeded or partially succeeded.

### succeededOrFailed
* For a step, equivalent to `in(variables['Agent.JobStatus'], 'Succeeded', 'SucceededWithIssues', 'Failed')`
* For a job:
  * With no arguments, evaluates to `True` regardless of whether any jobs in the dependency graph succeeded or failed.
  * With job names as arguments, evaluates to `True` whether any of those jobs succeeded or failed.

  > This is like `always()`, except it will evaluate `False` when the pipeline is canceled.

## Dependencies

For jobs which depend on other jobs, expressions may also use context about previous jobs in the dependency graph.
The context is called `dependencies` and works much like variables.

Structurally, the `dependencies` object is a map of job names to `results` and `outputs`.
Expressed as JSON, it would look like:

```json
"dependencies": {
  "<JOB_NAME>" : {
    "result": "Succeeded|SucceededWithIssues|Skipped|Failed|Canceled",
    "outputs": { // only variables explicitly made outputs will appear here
      "variable1": "value1",
      "variable2": "value2"
    }
  },
  "...": {
    // another job
  }
}
```

::: moniker range="azure-devops"

For instance, in a YAML pipeline, you could check output variables:

```yaml
jobs:
- job: A
  steps:
  - script: echo "##vso[task.setvariable variable=skipsubsequent;isOutput=true]false"
    name: printvar

- job: B
  condition: and(succeeded(), ne(dependencies.A.outputs['printvar.skipsubsequent'], 'true'))
  dependsOn: A
  steps:
  - script: echo hello from B
```

Or you can check job status. In this example, Job A will always be skipped and Job B will run.
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
  - script: Job C
```
::: moniker-end

## Filtered arrays

When operating on a collection of items you can use the `*` syntax to apply a filtered array. A filtered array returns all objects/elements regardless their names.

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

Values in an expression may be converted from one type to another. Detailed conversion rules are listed further below.

|          |             | To          |             |             |             |             |
| -------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
|          |             | **Boolean** | **Null**    | **Number**  | **String**  | **Version** |
| **From** | **Boolean** | -           | -           | Yes         | Yes         | -           |
|          | **Null**    | Yes         | -           | Yes         | Yes         | -           |
|          | **Number**  | Yes         | -           | -           | Yes         | Partial     |
|          | **String**  | Yes         | Partial     | Partial     | -           | Partial     |
|          | **Version** | Yes         | -           | -           | Yes         | -           |

### Boolean

To number:
* `False` &rarr; `0`
* `True` &rarr; `1`

To string:
* `False` &rarr; `'false'`
* `True` &rarr; `'true'`

### Null

* To Boolean: `False`
* To number: `0`
* To string: `''` (the empty string)

### Number

* To Boolean: `0` &rarr; `False`, any other number &rarr; `True`
* To version: Must be greater than zero and must contain a non-zero decimal. Must be less than [Int32.MaxValue](https://msdn.microsoft.com/library/system.int32.maxvalue%28v=vs.110%29.aspx) (decimal component also).
* To string:
Converts the number to a string with no thousands separator and no decimal separator.

### String

* To Boolean: `''` (the empty string) &rarr; `False`, any other string &rarr; `True`
* To null: `''` (the empty string) &rarr; `Null`, any other string not convertible
* To number: `''` (the empty string) &rarr; 0, otherwise, runs C#'s `Int32.TryParse` using [InvariantCulture](https://msdn.microsoft.com/library/system.globalization.cultureinfo.invariantculture%28v=vs.110%29.aspx) and the following rules: AllowDecimalPoint | AllowLeadingSign | AllowLeadingWhite | AllowThousands | AllowTrailingWhite. If `TryParse` fails, then it's not convertible.
* To version:
runs C#'s `Version.TryParse`. Must contain Major and Minor component at minimum. If `TryParse` fails, then it's not convertible.

### Version

* To Boolean: `True`
* To string: Major.Minor or Major.Minor.Build or Major.Minor.Build.Revision.

