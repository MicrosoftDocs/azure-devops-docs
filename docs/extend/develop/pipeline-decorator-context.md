---
title: Pipeline decorator context
description: Contextual data available to pipeline decorators
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: fe3e1e94-0415-400a-9b2d-7eeadb6101fc
ms.manager: jillfra
ms.author: stfrance
author: stephenmichaelf
ms.date: 03/01/2019
monikerRange: '>= azure-devops'
---

# Pipeline decorator expression context

[Pipeline decorators](add-pipeline-decorator.md) have access to context about the pipeline in which they run.
As a pipeline decorator author, you can use this context to make decisions about the decorator's behavior.

## Resources

Pipeline resources are available on the `resources` object.

### Repositories

Currently, there is only one key: `repositories`.
`repositories` is a map from repo ID to information about the repository.

In a designer build, the primary repo alias is `__designer_repo`.
In a YAML pipeline, the primary repo is called `self`.

For example, to print the name of the `self` repo in a YAML pipeline:
```
steps:
- script: echo ${{ resources.repositories['self'].name }}
```

Repositories contain the following properties:

```javascript
resources['repositories']['sef'] =
{
	"alias": "self",
	"id": "<repo guid>",
	"type": "Git",
	"version": "<commit hash>",
	"name": "<repo name>",
	"project": "<project guid>",
	"defaultBranch": "<default ref of repo, like 'refs/heads/master'>",
	"ref": "<current pipeline ref, like 'refs/heads/topic'>",
	"versionInfo": {
		"author": "<author of tip commit>",
		"message": "<commit message of tip commit>"
	},
	"checkoutOptions": {}
}
```


#### Job

Job details are available on the `job` object.

The data looks similar to:

```javascript
job = 
{
	"steps": [
		{
			"environment": null,
			"inputs": {
				"script": "echo hi"
			},
			"type": "Task",
			"task": {
				"id": "d9bafed4-0b18-4f58-968d-86655b4d2ce9",
				"name": "CmdLine",
				"version": "2.146.1"
			},
			"condition": null,
			"continueOnError": false,
			"timeoutInMinutes": 0,
			"id": "5c09f0b5-9bc3-401f-8cfb-09c716403f48",
			"name": "CmdLine",
			"displayName": "CmdLine",
			"enabled": true
		}
	]
}
```

For instance, to conditionally add a task only if it doesn't already exist:

```yaml
- ${{ if not(containsValue(job.steps.*.task.id, 'f3ab91e7-bed6-436a-b651-399a66fe6c2a')) }}
  - script: echo conditionally inserted
```

### Variables

[Pipeline variables](../../pipelines/process/variables.md) are also available.

For instance, if the pipeline had a variable called `myVar`, its value would be available to the decorator as `variables['myVar']`.

For example, to give a decorator an opt-out, we could look for a variable.
Pipeline authors who wished to opt out of the decorator would set this variable, and the decorator would not be injected.
If the variable isn't present, then the decorator would be injected as usual.

#### my-decorator.yml
```yaml
- ${{ if ne(variables['skipInjecting'], 'true') }}
  - script: echo Injected the decorator
```

Then, in a pipeline in the organization, the author can request that the decorator not be injected.

#### pipeline-with-opt-out.yml
```yaml
variables:
  skipInjecting: true
steps:
- script: echo This will be the only step. No decorator will be added.
```