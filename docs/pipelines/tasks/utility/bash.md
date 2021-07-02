---
title: Bash task
description: Run a Bash script on macOS, Linux, or Windows
ms.topic: reference
ms.assetid: 6C731C3C-3C68-459A-A5C9-BDE6E6595B5B
ms.custom: seodec18
ms.date: 06/09/2020
monikerRange: 'azure-devops'
---

# Bash task

**Azure Pipelines**

Use this task to run a Bash script on macOS, Linux, or Windows. 

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/BashV3.md)]

The Bash task also has a shortcut syntax in YAML:

```yaml
- bash: # script path or inline
  workingDirectory: #
  displayName: #
  failOnStderr: #
  env:  # mapping of environment variables to add
```

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`targetType`<br/>Type|(Optional) Target script type: File Path or Inline <br/>Default value: `filePath`|
|`filePath`<br/>Script Path|(Required) Path of the script to execute. Must be a fully qualified path or relative to $(System.DefaultWorkingDirectory).|
|`arguments`<br/>Arguments|(Optional) Arguments passed to the Bash script.|
|`script`<br/>Script|(Required, if Type is inline) Contents of the script <br/>Default value: `"# Write your commands here\n\necho 'Hello world'\n"`|
|`workingDirectory`<br/>Working Directory| (Optional) Specify the working directory in which you want to run the command. If you leave it empty, the working directory is [$(Build.SourcesDirectory)](../../build/variables.md)|
|`failOnStderr`<br/>Fail on standard error|(Optional) If this is true, this task will fail if any errors are written to stderr. <br/>Default value: `false`|
|`noProfile`<br/>Don't load the system-wide startup/initialization files|(Optional) Don't load the system-wide startup file **`/etc/profile`** or any of the personal initialization files|
|`noRc`<br/>Don't read the ~/.bashrc file|(Optional) If this is true, the task will not process **`.bashrc`** from the user's home directory.<br/>Default value: `true`|
|`env`<br/>Environment variables| (Optional) A list of additional items to map into the process's environment.<br/>For example, secret variables are not automatically mapped. If you have a secret variable called **`Foo`**, you can map it in like this:

```YAML
steps:
- task: Bash@3
  inputs:
    targetType: 'inline'
    script: echo $MYSECRET
  env:
    MYSECRET: $(Foo)
```

This is equivalent to:

```YAML
steps:
- script: echo $MYSECRET
  env:
    MYSECRET: $(Foo)
```

The Bash task will find the first Bash implementation on your system.
Running `which bash` on Linux/macOS or `where bash` on Windows will give you an idea of which one it'll select.

::: moniker range=">= azure-devops-2019"

Bash scripts checked into the repo should be set executable (`chmod +x`).
Otherwise, the task will show a warning and `source` the file instead.

::: moniker-end

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
