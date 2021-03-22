---
title: YAML Schema parsing spec
description: YAML Schema parsing spec
ms.author: sdanie
author: steved0x
ms.date: 08/18/2020
monikerRange: 'azure-devops'
---

# YAML Schema parsing spec

This spec describes the types in the JSON file used to validate a pipeline in the pipeline editor.

## JSON file overview

The source-of-truth yml document that describes the schema is in the Azure DevOps repo [here](https://dev.azure.com/mseng/AzureDevOps/_git/AzureDevOps?path=%2FDistributedTask%2FClient%2FPipelines.Yaml%2FYaml%2Fschema.yml&version=GBmaster&_a=contents).  

That document is used to build a schema document that can be downloaded on a per-organization basis using a URL with the following format:  

https://dev.azure.com/fabrikam-tailspin/_apis/distributedtask/yamlschema?api-version=5.1 

This schema contains the current representation of the integral Azure Pipelines YAML syntax, as well as the syntax for all of the tasks installed into this organization. This spec is concerned with the integral pipeline definitions described by the schema, and not the tasks.

This schema has the following format:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://github.com/Microsoft/azure-pipelines-vscode/blob/master/local-schema.json",
  "$comment": "v1.147.0",
  "title": "Pipeline schema",
  "description": "A pipeline definition",
  "oneOf": [
    { "$ref": "#/definitions/pipeline" },
    {
      "type": "string",
      "pattern": "^$"
    }
  ],
  "definitions": {
    ...
   }
}
```

Our information is in the `definitions` block:

```json
  "definitions": {
    "string": { "type": "string" },
    "sequence": {
      "type": "array",
      "items": { "$ref": "#/definitions/any" }
    },
    "mapping": {
      "type": "object",
      "additionalProperties": true
    },
    ...
```

There are many definitions in the `definitions` block, and not all represent pipeline definitions. For example, the root `.yml` schema has a concept of inheritance, and the base types are represented in the JSON schema, but not used. To determine the relevant scope of definitions, we can start with the `pipeline` definition, and as we parse all of its dependencies, we can build up the valid list of useful definitions.

```json
  "definitions": {
    ...
    "pipeline": {
    ... and all dependencies
    }
```

## Schema types

The pipeline definition contains the following representations.

### Array

```json
"schedules": {
    "type": "array",
    "items": { "$ref": "#/definitions/schedule" }
```

* `type` - required, always `array` for this type
* `items` - required, a reference to the definition for this type

### String

```json
"referenceName": {
    "type": "string",
    "pattern": "^[_A-Za-z0-9]*$"
}
```

* `type` - required, always `string` for this type
* `pattern` - optional, the regular expression defining allowed values for this item
* `description` - optional, a description of this item
* `ignoreCase` - optional, TBD (example `"ignoreCase": "value"`)

### Object

```json
"schedule": {
    "type": "object",
    "properties": {
    "cron": { "$ref": "#/definitions/nonEmptyString" },
    "displayName": { "$ref": "#/definitions/string" },
    "branches": { "$ref": "#/definitions/includeExcludeFilters" },
    "batch": { "$ref": "#/definitions/boolean" },
    "always": { "$ref": "#/definitions/boolean" }
    },
    "additionalProperties": false,
    "firstProperty": [ "cron" ]
}
```

* `type` - required, always `object` for this type
* `properties` - required, the properties for this type, see [Object properties](#object-properties).
* `additionalProperties` - required, when true, this type has additional allowed properties that are validated by the Pipelines runtime, but are not validated in the editor, and are therefore not in the schema. There are only 11 (or 13) of these, we can retrieve it from the source code and store in a sidecar format. Example, [repositoryResource](https://dev.azure.com/mseng/AzureDevOps/_git/AzureDevOps?path=%2FDistributedTask%2FClient%2FWebApi%2FPipelines%2FRepositoryResource.cs&_a=contents&version=GBmaster) and its `type` and `ref` properties. Unsure why these aren't in the schema?
* `firstProperty` - optional, an array (with only 1 entry) containing the name of the required property that must be first when this definition is used in a YAML pipeline.
* `required` - optional, an array of property names which are required when using the definition
* `deprecationMessage` - optional, a string with a deprecation message and a suggested alternative

There is one special type of object with no properties, as part of the `step` definition, this is the only special case. The link here will go to the root index of the tasks reference.

```json
"step": {
    "anyOf": [
    {
        "type": "object",
        "$ref": "#/definitions/task"
    },
    ...
```


#### Object properties

```json
"properties": {
    "phases": {
        "description": "Phases which make up the pipeline",
        "deprecationMessage": "This option is deprecated, use `jobs` instead",
        "doNotSuggest": true,
        "$ref": "#/definitions/phases"
    },
    "name": {
        "description": "Pipeline name",
        "$ref": "#/definitions/string_allowExpressions"
    },
    "trigger": {
        "description": "Continuous integration triggers",
        "$ref": "#/definitions/trigger"
    },
    "parameters": {
        "description": "Pipeline template parameters",
        "$ref": "#/definitions/pipelineTemplateParameters"
    },
    "pr": {
        "description": "Pull request triggers",
        "$ref": "#/definitions/pr"
    },
    "schedules": { "$ref": "#/definitions/schedules" },
    "resources": {
        "description": "Containers and repositories used in the build",
        "$ref": "#/definitions/resources"
    },
    "variables": {
        "description": "Variables for this pipeline",
        "$ref": "#/definitions/variables"
    }
}
```

Each property has the following properties:

* `$ref` - required, the definition for this property type
* `description` - optional, a description of this property
* `deprecationMessage` - optional, deprecation message and suggested alternative
* `doNotSuggest: true` - tell the editor intellisense not to suggest this deprecated property

If an object definition has a `deprecationMessage`, do not document that definition.

### Complex object/anyOf

A complex object has an `anyOf` array as its single property. The items in the `anyOf` array map to one of the other standard definition types.

```json
    "trigger": {
      "anyOf": [
        {
          "type": "string",
          "pattern": "^none$"
        },
        {
          "type": "array",
          "items": { "$ref": "#/definitions/branchFilter" }
        },
        {
          "type": "object",
          "properties": {
            "batch": {
              "description": "Whether to batch changes per branch",
              "$ref": "#/definitions/boolean"
            },
            "branches": { "$ref": "#/definitions/includeExcludeFilters" },
            "paths": { "$ref": "#/definitions/includeExcludeFilters" },
            "tags": { "$ref": "#/definitions/includeExcludeFilters" }
          },
          "additionalProperties": false
        }
      ]
    }
```

Each of these `anyOf` items is treated like an overload, and are named like this:

* `object` - the overload name is the property list, like `trigger{batch, branches, paths, tags}`
* `array` - the overload name is the array type, like `trigger:[branchFilter]`
* `string` - the overload name is `trigger{string}`

If one of the `anyOf` objects has a property with a `deprecationMessage`, do not document that overload.
* If there is only a single item without a `deprecationMessage`, document as a simple type
* If every item has a `deprecationMessage`, do not document the type. (Doubt we have any of these).

## Automation vs hand-editing

For the first phase of this project, we are automating:

* The filenames for the definitions (definition name)
* The properties table (and overloads table for complex types)
* The definition hierarchy

We are using hand-authored content for:

* Definition summaries (initial sentence/content)
* YAML definition block
* Examples
* Remarks
* See also

Future automation:

* Generate the YAML syntax block. Since we have these for most types already, we will have to see if there is enough churn to warrant implementing this

### Versioning/monikers

Right now, the hand-edited content has monikers. Vijay thinks that this API:

`https://dev.azure.com/fabrikam-tailspin/_apis/distributedtask/yamlschema?api-version=5.1 `

May be available for on-premises (after all the editor had to have this) with possibly a different `api-version`, but I don't have those notes. Several previous versions are documented [here](https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1)

```json
6.1
6.0
5.1
5.0
4.1
```

This one works! For 2020-RTW
```
http://2020-rtw/DefaultCollection/_apis/distributedtask/yamlschema
```
Possibly one of these versions?

If this doesn't work (or even if it does) how to segment the previous versions?

1 approach could be to split the current topics, and then use those versions for the previous versions of the monikers? And use the automation/new approach to keep the new versions up to date?

## Parsing order

Initialize a list of definitions and add a single entry to the definition: `pipeline`.

Iterate this list, and for each definition in the list, read it, and add any referenced definition names to the list if they aren't already present.

This list is the list of relevant definitions to be included in the documentation.


Start by reading the `pipeline` definition, which is an `anyOf` complex object

## Parser object model and readers

Define an object model that represents the types described in the previous section. Add properties to support the different parts of the generated markdown.

Provide a way to read in the object from:

* The Json schema
  * This provides the initial structure and content (initial structure may require single-use helper files such as mapping definition name to friendly name)
  * On subsequent runs, it will show what changes have been made to the schema
* From the markdown files themselves
  * This provide the current structure and can be compared with the version loaded from the Json schema
  * Goal: the markdown file itself can be the sidecar file, and provide a way for customers to submit PRs and make changes

Example: Scheduled trigger

```json
"schedule": {
    "type": "object",
    "properties": {
    "cron": { "$ref": "#/definitions/nonEmptyString" },
    "displayName": { "$ref": "#/definitions/string" },
    "branches": { "$ref": "#/definitions/includeExcludeFilters" },
    "batch": { "$ref": "#/definitions/boolean" },
    "always": { "$ref": "#/definitions/boolean" }
    },
    "additionalProperties": false,
    "firstProperty": [ "cron" ]
}
```

```markdown
# Scheduled trigger



```

## Examples of mapping YAML schema json elements to markdown

### Definition referencing other definitions

This is the json schema for validating a scheduled trigger in a pipeline. The `schedule` type is referenced as the type for the `schedules` array, which is defined as the type for the `schedules` property in a pipeline.

```json
"schedules": {
    "type": "array",
    "items": { "$ref": "#/definitions/schedule" }
},
"schedule": {
    "type": "object",
    "properties": {
    "cron": { "$ref": "#/definitions/nonEmptyString" },
    "displayName": { "$ref": "#/definitions/string" },
    "branches": { "$ref": "#/definitions/includeExcludeFilters" },
    "batch": { "$ref": "#/definitions/boolean" },
    "always": { "$ref": "#/definitions/boolean" }
    },
    "additionalProperties": false,
    "firstProperty": [ "cron" ]
}
```

An example of this type in a pipeline:

```yml
schedules:
- cron: "0 0 * * *"
  displayName: Daily midnight build
  branches:
    include:
    - master
    - releases/*
    exclude:
    - releases/ancient/*
- cron: "0 12 * * 0"
  displayName: Weekly Sunday build
  branches:
    include:
    - releases/*
  always: true
```

The current hand-authored YAML representation of this definition is:

```yml
schedules:
- cron: string # cron syntax defining a schedule
  displayName: string # friendly name given to a specific schedule
  branches:
    include: [ string ] # which branches the schedule applies to
    exclude: [ string ] # which branches to exclude from the schedule
  batch: boolean # ?? I just noticed this in the schema, doesn't really seem to match - batch changes if true; start a new build for every push if false (default)
  always: boolean # whether to always run the pipeline or only if there have been source code changes since the last successful scheduled run. The default is false.
```

We could provide this type of representation programmatically, currently the json schema provides information that would allow us to provide this:

```yml
schedules:
- cron: string # required as first property
  displayName: string
  branches:
    include: [ string ] # branch name or prefix matching the pattern ^[^\\/~\\^\\: \\[\\]\\\\]+(\\/[^\\/~\\^\\: \\[\\]\\\\]+)*$
    exclude: [ string ] # branch name or prefix matching the pattern ^[^\\/~\\^\\: \\[\\]\\\\]+(\\/[^\\/~\\^\\: \\[\\]\\\\]+)*$
  batch: boolean
  always: boolean
```

:::row:::
    :::column:::
        **Property**
    :::column-end:::
    :::column span="3":::
        **Description**
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `cron`
    :::column-end:::
    :::column span="3":::
        string - required as first property
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `displayName`
    :::column-end:::
    :::column span="3":::
        string
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `branches`
    :::column-end:::
    :::column span="3":::
        Link to `includeExcludeFilters`
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `batch`
    :::column-end:::
    :::column span="3":::
        boolean
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `always`
    :::column-end:::
    :::column span="3":::
        boolean
    :::column-end:::
:::row-end:::

Consider if we were able to add the following descriptions into the json schema. 

```json
"schedules": {
    "type": "array",
    "description": "",
    "items": { "$ref": "#/definitions/schedule" }
},
"schedule": {
    "type": "object",
    "properties": {
    "cron": { 
        "$ref": "#/definitions/nonEmptyString",
        "description": "cron syntax defining a schedule" },
    "displayName": {  
        "$ref": "#/definitions/string" ,
        "description": "friendly name given to a specific schedule" },
    "branches": {  
        "$ref": "#/definitions/includeExcludeFilters" ,
        "description": "branch filters to specify on which branches to run the pipeline" },
    "batch": {  
        "$ref": "#/definitions/boolean" ,
        "description": "whether to start a new run if there is a current scheduled run in-progress, false by default" },
    "always": {  
        "$ref": "#/definitions/boolean" ,
        "description": "whether to always run the pipeline or only if there have been source code changes since the last successful scheduled run, false by default" }
    },
    "additionalProperties": false,
    "firstProperty": [ "cron" ]
}
```
With this json we could generate the following syntax block:

```yml
schedules:
- cron: string # cron syntax defining a schedule - required as first property
  displayName: string # friendly name given to a specific schedule
  branches: # branch filters to specify on which branches to run the pipeline
    include: [ string ] # branch name or prefix matching the pattern ^[^\\/~\\^\\: \\[\\]\\\\]+(\\/[^\\/~\\^\\: \\[\\]\\\\]+)*$
    exclude: [ string ] # branch name or prefix matching the pattern ^[^\\/~\\^\\: \\[\\]\\\\]+(\\/[^\\/~\\^\\: \\[\\]\\\\]+)*$
  batch: boolean # whether to start a new run if there is a current scheduled run in-progress, false by default
  always: boolean # whether to always run the pipeline or only if there have been source code changes since the last successful scheduled run, false by default
```

:::row:::
    :::column:::
        **Property**
    :::column-end:::
    :::column span="3":::
        **Description**
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `cron`
    :::column-end:::
    :::column span="3":::
        string - cron syntax defining a schedule - required as first property
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `displayName`
    :::column-end:::
    :::column span="3":::
        string - friendly name given to a specific schedule
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `branches`
    :::column-end:::
    :::column span="3":::
        branch filters to specify on which branches to run the pipeline - link to `includeExcludeFilters`
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `batch`
    :::column-end:::
    :::column span="3":::
        boolean - whether to start a new run if there is a current scheduled run in-progress, false by default
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        `always`
    :::column-end:::
    :::column span="3":::
        boolean - whether to always run the pipeline or only if there have been source code changes since the last successful scheduled run, false by default
    :::column-end:::
:::row-end:::

In the json schema, description is typically used at the property level, but there are examples at root definition level.

### Example with descriptions in properties

```json
    "jobWorkspace": {
      "type": "object",
      "properties": {
        "clean": {
          "description": "Which parts of the workspace should be scorched before fetching",
          "enum": [ "outputs", "resources", "all" ],
          "$ref": "#/definitions/string"
        }
      },
      "additionalProperties": false
    },
```
### Description at root object level

```json
    "pool": {
      "description": "Pool details",
      "anyOf": [...]

    "matrixProperties": {
      "type": "object",
      "description": "Variable-value pair to pass in this matrix instance",
      "additionalProperties": true
    },
```



The json schema referenced several types:
- `nonEmptyString` - required string
- `string` - string
- `includeExcludeFilters` - this has two properties (`include` and `exclude`) that reference `branchFilterArray` (which is an array and not an object like the other types) which is an array of `string` that must match the pattern `^[^\\/~\\^\\: \\[\\]\\\\]+(\\/[^\\/~\\^\\: \\[\\]\\\\]+)*$` and has the description `branch name or prefix filter`
- `boolean`

For integral types like string and boolean, we can include that in the generated documentation block and not link out to that definition.

For types like `includeExcludeFilters`, I believe we can include them if tere is not too many levels of redirection, TBD.

```yml
include:
- main
- feature/*
exclude:
- releases/archive/*
```

```json
"includeExcludeFilters": {
    "type": "object",
    "properties": {
    "include": { "$ref": "#/definitions/branchFilterArray" },
    "exclude": { "$ref": "#/definitions/branchFilterArray" }
    },
    "additionalProperties": false
},
"branchFilterArray": {
    "type": "array",
    "items": { "$ref": "#/definitions/branchFilter" }
},
"branchFilter": {
    "type": "string",
    "description": "branch name or prefix filter",
    "pattern": "^[^\\/~\\^\\: \\[\\]\\\\]+(\\/[^\\/~\\^\\: \\[\\]\\\\]+)*$"
}

```

