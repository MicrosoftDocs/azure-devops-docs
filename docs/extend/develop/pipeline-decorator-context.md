---
title: Pipeline decorator context
description: Contextual data available to pipeline decorators
ms.topic: reference
ms.technology: devops-cicd
ms.assetid: fe3e1e94-0415-400a-9b2d-7eeadb6101fc
ms.date: 07/20/2021
monikerRange: 'azure-devops'
---

# Pipeline decorator expression context

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

[Pipeline decorators](add-pipeline-decorator.md) have access to context about the pipeline in which they run.
As a pipeline decorator author, you can use this context to make decisions about the decorator's behavior. The information available in context is different for pipelines and for release.
Also, decorators run after task names are resolved to task GUIDs.
When your decorator wants to reference a task, it should use the GUID rather than the name or keyword.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Resources

Pipeline resources are available on the `resources` object.

### Repositories

Currently, there's only one key: `repositories`.
`repositories` is a map from repo ID to information about the repository.

In a designer build, the primary repo alias is `__designer_repo`.
In a YAML pipeline, the primary repo is called `self`.
In a release pipeline, repositories aren't available.
[Release artifact variables](../../pipelines/release/variables.md?tabs=batch) are available.

For example, to print the name of the `self` repo in a YAML pipeline:
```
steps:
- script: echo ${{ resources.repositories['self'].name }}
```

Repositories contain these properties:

```javascript
resources['repositories']['self'] =
{
	"alias": "self",
	"id": "<repo guid>",
	"type": "Git",
	"version": "<commit hash>",
	"name": "<repo name>",
	"project": "<project guid>",
	"defaultBranch": "<default ref of repo, like 'refs/heads/main'>",
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
- ${{ if not(containsValue(job.steps.*.task.id, 'f3ab91e7-bed6-436a-b651-399a66fe6c2a')) }}:
  - script: echo conditionally inserted
```

### Variables

[Pipeline variables](../../pipelines/process/variables.md) are also available.

For instance, if the pipeline had a variable called `myVar`, its value would be available to the decorator as `variables['myVar']`.

For example, to give a decorator an opt-out, we could look for a variable.
Pipeline authors who wish to opt out of the decorator can set this variable, and the decorator won't be injected.
If the variable isn't present, then the decorator is injected as usual.

#### my-decorator.yml
```yaml
- ${{ if ne(variables['skipInjecting'], 'true') }}:
  - script: echo Injected the decorator
```

Then, in a pipeline in the organization, the author can request the decorator not to inject itself.

#### pipeline-with-opt-out.yml
```yaml
variables:
  skipInjecting: true
steps:
- script: echo This is the only step. No decorator is added.
```

## Task names and GUIDs

Decorators run after tasks have already been turned into GUIDs.
Consider the following YAML:

```yaml
steps:
- checkout: self
- bash: echo This is the Bash task
- task: PowerShell@2
  inputs:
    targetType: inline
    script: Write-Host This is the PowerShell task
```

Each of those steps maps to a task.
Each task has a unique GUID.
Task names and keywords map to task GUIDs before decorators run.
If a decorator wants to check for the existence of another task, it must search by task GUID rather than by name or keyword.

For normal tasks (which you specify with the `task` keyword), you can look at the task's `task.json` to determine its GUID.
For special keywords like `checkout` and `bash` in the previous example, you can use the following GUIDs:

| Keyword      | GUID                                   | Task Name |
|--------------|----------------------------------------|-----------|
| `checkout`   | `6D15AF64-176C-496D-B583-FD2AE21D4DF4` | n/a, see note below |
| `bash`       | `6C731C3C-3C68-459A-A5C9-BDE6E6595B5B` | Bash |
| `script`     | `D9BAFED4-0B18-4F58-968D-86655B4D2CE9` | CmdLine |
| `powershell` | `E213FF0F-5D5C-4791-802D-52EA3E7BE1F1` | PowerShell |
| `pwsh`       | `E213FF0F-5D5C-4791-802D-52EA3E7BE1F1` | PowerShell |
| `publish`    | `ECDC45F6-832D-4AD9-B52B-EE49E94659BE` | PublishPipelineArtifact |
| `download`   | `61F2A582-95AE-4948-B34D-A1B3C4F6A737` | DownloadPipelineArtifact |

After resolving task names and keywords, the previous YAML becomes:

```yaml
steps:
- task: 6D15AF64-176C-496D-B583-FD2AE21D4DF4@1
  inputs:
    repository: self
- task: 6C731C3C-3C68-459A-A5C9-BDE6E6595B5B@3
  inputs:
    targetType: inline
    script: echo This is the Bash task
- task: E213FF0F-5D5C-4791-802D-52EA3E7BE1F1@2
  inputs:
    targetType: inline
    script: Write-Host This is the PowerShell task
```

> [!TIP]
> Each of these GUIDs can be found in the `task.json` for the corresponding [in-box task](https://github.com/microsoft/azure-pipelines-tasks).
> The only exception is `checkout`, which is a native capability of the agent.
> Its GUID is built into the Azure Pipelines service and agent.
