---
title: Conditional expressions | VSTS or Team Foundation Server
description: Learn about how you can write custom conditions for running your task in VSTS or Microsoft Team Foundation Server (TFS).
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: C79149CC-6E0D-4A39-B8D1-EB36C8D3AB89
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 03/22/2017
monikerRange: '>= tfs-2017'
---


# Specify conditions

**VSTS | TFS 2018 | TFS 2017.3** 

Inside the **Control Options** of each task, and in the **Additional options** for a phase in a release definition,
you can specify the conditions under which the task or phase will run:

[!INCLUDE [include](_shared/task-run-built-in-conditions.md)]
* Custom conditions

## Enable a custom condition

If the built-in conditions don't meet your needs, then you can specify **custom conditions**.

::: moniker range="= tfs-2017"

> In TFS 2017.3, custom task conditions are available in the user interface only for Build pipelines. You can use the Release [REST APIs](../../integrate/index.md) to establish custom conditions for Release pipelines.

::: moniker-end
 
Express the condition as a nested set of functions. The agent evaluates the innermost function and works its way out. The final result is a boolean value that determines if the task is run or not. Details on syntax are described below.

Do any of your conditions make it possible for the task to run even after the build is canceled by a user? If so, then specify a reasonable value for **Build job cancel timeout in minutes** [in the options](../build/options.md) so that these kinds of tasks have enough time to complete after the user clicks **Cancel**.

## Examples

### Run for the master branch, if succeeding

```
and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/master'))
```

### Run if the branch is not master, if succeeding

```
and(succeeded(), ne(variables['Build.SourceBranch'], 'refs/heads/master'))
```

### Run for user topic branches, if succeeding

```
and(succeeded(), startsWith(variables['Build.SourceBranch'], 'refs/heads/users/'))
```

### Run for continuous integration (CI) builds if succeeding

```
and(succeeded(), in(variables['Build.Reason'], 'IndividualCI', 'BatchedCI'))
```

### Run if the build is run by a branch policy for a pull request, if failing

```
and(failed(), eq(variables['Build.Reason'], 'PullRequest'))
```

### Run if the build is scheduled, even if failing, even if canceled

```
and(always(), eq(variables['Build.Reason'], 'Schedule'))
```

> **Release.Artifacts.{artifact-alias}.SourceBranch** is equivalent to **Build.SourceBranch**.

## Types

### Boolean
`true` or `false` (ordinal case insensitive)

### Null
Null is a special type that is returned from a dictionary miss only, e.g. (`variables['noSuch']`). There is no keyword for null, but you can test for it by using the implicit type casting described below.

### Number
Starts with `-` `.` or `0-9`. Cannot contain `,`.

### String
Must be single-quoted. For example: `'this is a string'`.

To express a literal single-quote, escape it with a single quote. For example: `'It''s OK if they''re using contractions.'`.

### Version
A version number with up to four segments. Must start with a number and contain two or three period (`.`) characters. For example: `1.2.3.4`.

## Type Casting

### Conversion chart
Detailed conversion rules are listed further below.

|          |             | To          |             |             |             |             |
| -------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
|          |             | **Boolean** | **Null**    | **Number**  | **String**  | **Version** |
| **From** | **Boolean** | -           | -           | Yes         | Yes         | -           |
|          | **Null**    | Yes         | -           | Yes         | Yes         | -           |
|          | **Number**  | Yes         | -           | -           | Yes         | Partial     |
|          | **String**  | Yes         | Partial     | Partial     | -           | Partial     |
|          | **Version** | Yes         | -           | -           | Yes         | -           |

### Boolean to Number

False =\> 0
 
True =\> 1

### Boolean to String

False =\> 'False'

True =\> 'True'

### Null to Boolean

=\> False

### Null to Number

=\> 0

### Null to String

=\> Empty string

### Number to Boolean

0 =\> False

Otherwise =\> True

### Number to Version

Must be greater than zero and must contain a non-zero decimal. Must be less than [Int32.MaxValue](https://msdn.microsoft.com/en-us/library/system.int32.maxvalue%28v=vs.110%29.aspx) (decimal component also).

#### Number to String

Converts the number to a string with no thousands separator and no decimal separator.

### String to Boolean

Empty string =\> False

Otherwise =\> True

### String to Null

Empty string =\> Null

Otherwise not convertible

### String to Number

Empty string =\> 0

Otherwise try-parse using [InvariantCulture](https://msdn.microsoft.com/en-us/library/system.globalization.cultureinfo.invariantculture%28v=vs.110%29.aspx)  and the following rules: AllowDecimalPoint | AllowLeadingSign | AllowLeadingWhite | AllowThousands | AllowTrailingWhite. If try-parse fails, then not convertible.

### String to Version

Try-parse. Must contain Major and Minor component at minimum. If try-parse fails, then not convertible.

### Version to Boolean

=\> True

### Version to String

Major.Minor or Major.Minor.Build or Major.Minor.Build.Revision.

## Variables

Alias to reference a build variable. For example:

* Index syntax: `variables['Build.SourceBranch']`

* Property dereference syntax: `variables.Build.SourceBranch`. In order to use this syntax, the property name must:

 - Start with `a-Z` or `_`

 - Be followed by `a-Z` `0-9` or `_`

Some of the more useful predefined variables include:

* `Build.Reason` which you can use to check whether the build was the result of a [build trigger](../build/triggers.md), a [Git PR affected by a branch policy](../../git/branch-policies.md), or a [TFVC gated check-in](../../tfvc/check-folder-controlled-by-gated-check-build-process.md).

* `Build.SourceBranch`

* `Release.Artifacts.{artifact-alias}.SourceBranch`

For details on these and other variables, including predefined variables and their possible values, see [Build variables](../build/variables.md) and [Release variables](../release/variables.md).

## Job status functions

<h3 id="always">always</h3>
* Always evaluates True (even when canceled). Note: A critical failure may still prevent a task from running. For example, if getting sources failed.
* Min parameters: 0. Max parameters: 0

### canceled
* Evaluates True when `eq(variables['Agent.JobStatus'], 'Canceled')`.
* Min parameters: 0. Max parameters: 0

### failed
* Evaluates True when `eq(variables['Agent.JobStatus'], 'Failed')`.
* Min parameters: 0. Max parameters: 0

### succeeded
* Evaluates True when `in(variables['Agent.JobStatus'], 'Succeeded', 'PartiallySucceeded')`
* Min parameters: 0. Max parameters: 0

### succeededOrFailed
* Evaluates True when `in(variables['Agent.JobStatus'], 'Succeeded', 'PartiallySucceeded', 'Failed')`
* Min parameters: 0. Max parameters: 0

## General functions

### and
* Evaluates True if all parameters are True
* Min parameters: 2. Max parameters: N
* Casts parameters to Boolean for evaluation
* Short-circuits after first False

### contains
* Evaluates True if left parameter String contains right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison

### endsWith
* Evaluates True if left parameter String ends with right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison

### eq
* Evaluates True if parameters are equal
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Returns False if conversion fails.
* Ordinal ignore-case comparison for Strings

### ge
* Evaluates True if left parameter is greater than or equal to the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings

### gt
* Evaluates True if left parameter is greater than the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings

### in
* Evaluates True if left parameter is equal to any right parameter
* Min parameters: 1. Max parameters: N
* Converts right parameters to match type of left parameter. Equality comparison evaluates False if conversion fails.
* Ordinal ignore-case comparison for Strings
* Short-circuits after first match

### le
* Evaluates True if left parameter is less than or equal to the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings

### lt
* Evaluates True if left parameter is less than the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings

### ne
* Evaluates True if parameters are not equal
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Returns True if conversion fails.
* Ordinal ignore-case comparison for Strings

### not
* Evaluates True if parameter is False
* Min parameters: 1. Max parameters: 1
* Converts value to Boolean for evaluation

### notIn
* Evaluates True if left parameter is not equal to any right parameter
* Min parameters: 1. Max parameters: N
* Converts right parameters to match type of left parameter. Equality comparison evaluates False if conversion fails.
* Ordinal ignore-case comparison for Strings
* Short-circuits after first match

### or
* Evaluates True if any parameter is true
* Min parameters: 2. Max parameters: N
* Casts parameters to Boolean for evaluation
* Short-circuits after first True

### startsWith
* Evaluates true if left parameter string starts with right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison

### xor
* Evaluates True if exactly one parameter is True
* Min parameters: 2. Max parameters: 2
* Casts parameters to Boolean for evaluation

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### What about string parsing and other operations?

We might add these later. [Vote on user voice](https://visualstudio.uservoice.com/forums/330519-team-services)

### I've got a condition that runs even when build was cancelled. Does this affect a build that I cancelled in the queue?

No. If you cancel a build while it's in the queue, then the entire build is canceled, including tasks like this.

### I've got a task condition that runs even when the deployment was canceled. How do I specify this?

This scenario is not yet supported for release definitions.

<!-- ENDSECTION -->
