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

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

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
|`failOnStderr`<br/>Fail on standard error|(Optional) When this input is set to `true`, the task will fail if any errors are written to stderr. <br/>Default value: `false`|
|`bashEnvValue`<br/>Set value for `BASH_ENV` environment variable|(Optional) If the related input is specified, the value will be used as the path of a startup file that will be executed before running the script. If the environment variable `BASH_ENV` has already been defined, the task will override this variable only for the current task. You can find more details [here](https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html).<br/>Default value: empty string|
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

On macOS or Linux, the example above is equivalent to:

```YAML
steps:
- script: echo $MYSECRET
  env:
    MYSECRET: $(Foo)
```

The Bash task will find the first Bash implementation on your system.
Running `which bash` on Linux/macOS or `where bash` on Windows will give you an idea of which one it will select.

### Info about Bash startup files

The Bash task invokes the Bash as a non-interactive, non-login shell. When Bash is started non-interactively, to run a shell script, the Bash looks for the variable `BASH_ENV` in the environment, unfolds its value if it appears there, and uses the value as the name of a file to read and execute.

There are several options for defining the `BASH_ENV` environment variable in a pipeline. Firstly, it's possible to set the `BASH_ENV` environment variable as a pipeline variable. In this case, each instance of the Bash task will try to unfold the value of the `BASH_ENV` variable and use its value.

```YAML
variables:
  BASH_ENV: "~/.profile"

steps:
- task: Bash@3
  inputs:
    targetType: 'inline'
    script: env
```

Another option is to set `BASH_ENV` for one particular instance of the Bash task, there are two ways how this can be done:

The first way is to use the `bashEnvValue` task input, see an example for reference:

```YAML
steps:
- task: Bash@3
  inputs:
    targetType: 'inline'
    script: env
    bashEnvValue: '~/.profile'
```

Another way is to set the `BASH_ENV` variable as an environment variable for the pipeline task via the `env` keyword, for example:

```YAML
- task: Bash@3
  inputs:
    targetType: 'inline'
    script: env
  env:
    BASH_ENV: '~/.profile'
```

> [!NOTE]
> Note that if the `bashEnvValue` input is defined in the Bash task, the pipeline task will override the value of the `BASH_ENV` variable with the value from the `bashEnvValue` input in a case when the `BASH_ENV` environment variable was already defined in the environment.

::: moniker range=">= azure-devops-2019"

Bash scripts checked into the repo should be set executable (`chmod +x`).
Otherwise, the task will show a warning and `source` the file instead.

::: moniker-end

## Open-source

This task is open-source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
