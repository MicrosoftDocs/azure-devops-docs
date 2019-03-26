---
title: Expressions
ms.custom: seodec18
description: Learn about how you can write custom conditions for running your task in Azure Pipelines or Team Foundation Server (TFS).
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 4df37b09-67a8-418e-a0e8-c17d001f0ab3
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 03/25/2019
monikerRange: '>= tfs-2017'
---

# Expressions

**Azure Pipelines | TFS 2018 | TFS 2017.3** 

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Expressions let you describe decisions the system should make, such as whether to run a step or the value of a variable.
The most common use of expressions is in [conditions](conditions.md) to determine whether a job or step should run.
Expressions are typically a nested set of functions evaluated from the innermost function out.

## Types

### Boolean
`True` and `False`

### Null
Null is a special type that's returned from a dictionary miss only, e.g. (`variables['noSuch']`).

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

## Variables

Depending on the execution context, different variables are available.
For instance, in a condition on a pipeline, [Build](../build/variables.md) or [Release](../release/variables.md) variables are available.

You may access variables using one of two syntaxes:

* Index syntax: `variables['MyVar']`
* Property dereference syntax: `variables.MyVar`.

In order to use property dereference syntax, the property name must:
- Start with `a-Z` or `_`
- Be followed by `a-Z` `0-9` or `_`

## Functions

Expressions may include functions. These functions are always available.
Depending on context, other functions may be available as well.

### and
* Evaluates `True` if all parameters are `True`
* Min parameters: 2. Max parameters: N
* Casts parameters to Boolean for evaluation
* Short-circuits after first `False`

::: moniker range=">= azure-devops-2019"

### coalesce
* Evaluates the parameters in order, and returns the value that does not equal null or empty-string.
* Min parameters: 2. Max parameters: N

::: moniker-end

### contains
* Evaluates `True` if left parameter String contains right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison

### containsValue
* Evaluates `True` if the left parameter is an array, and any item equals the right parameter. Also evaluates `True` if the left parameter is an object, and the value of any property equals the right parameter.
* Min parameters: 2. Max parameters: 2
* If the left parameter is an array, converts each item to match the type of the right parameter. If the left parameter is an object, converts the value of each property to match the type of the right parameter.  The equality comparison for each specific item evaluates `False` if the conversion fails.
* Ordinal ignore-case comparison for Strings
* Short-circuits after the first match

### endsWith
* Evaluates `True` if left parameter String ends with right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison

### eq
* Evaluates `True` if parameters are equal
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Returns `False` if conversion fails.
* Ordinal ignore-case comparison for Strings

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

### gt
* Evaluates `True` if left parameter is greater than the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings

### in
* Evaluates `True` if left parameter is equal to any right parameter
* Min parameters: 1. Max parameters: N
* Converts right parameters to match type of left parameter. Equality comparison evaluates `False` if conversion fails.
* Ordinal ignore-case comparison for Strings
* Short-circuits after first match

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

### lt
* Evaluates `True` if left parameter is less than the right parameter
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Errors if conversion fails.
* Ordinal ignore-case comparison for Strings

### ne
* Evaluates `True` if parameters are not equal
* Min parameters: 2. Max parameters: 2
* Converts right parameter to match type of left parameter. Returns `True` if conversion fails.
* Ordinal ignore-case comparison for Strings

### not
* Evaluates `True` if parameter is `False`
* Min parameters: 1. Max parameters: 1
* Converts value to Boolean for evaluation

### notIn
* Evaluates `True` if left parameter is not equal to any right parameter
* Min parameters: 1. Max parameters: N
* Converts right parameters to match type of left parameter. Equality comparison evaluates `False` if conversion fails.
* Ordinal ignore-case comparison for Strings
* Short-circuits after first match

### or
* Evaluates `True` if any parameter is `true`
* Min parameters: 2. Max parameters: N
* Casts parameters to Boolean for evaluation
* Short-circuits after first `True`

### startsWith
* Evaluates `true` if left parameter string starts with right parameter
* Min parameters: 2. Max parameters: 2
* Casts parameters to String for evaluation
* Performs ordinal ignore-case comparison

### xor
* Evaluates `True` if exactly one parameter is `True`
* Min parameters: 2. Max parameters: 2
* Casts parameters to Boolean for evaluation

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
