---
title: Cross-platform scripting
description: Patterns for safe cross-platform scripting
ms.topic: conceptual
ms.assetid: 96b7da24-617e-4a58-b65f-040c374e60e2
ms.date: 09/12/2025
monikerRange: '<= azure-devops'
#customer intent: As an Azure Pipelines user, I want to understand how cross-platform scripting works so I can easily support different build platforms in my pipelines.
---

# Cross-platform scripting

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines can run pipelines on Linux, macOS, and Windows machines. If you use cross-platform development technologies like .NET Core, Node.js, or Python, these cross-platform build capabilities bring both benefits and challenges. For example, most pipelines include one or more scripts to run during the build process, but script syntax often differs over platforms.

This article explains how you can use cross-platform scripting to support different platforms. You can use an Azure Pipelines `script` step to ease writing cross-platform scripts. You can also use [conditions](../process/conditions.md) to target scripts to specific platforms.

## Script step

The [script](../get-started/key-pipeline-concepts.md#scripts) keyword is a shortcut for the [command line task](/azure/devops/pipelines/tasks/reference/cmd-line-v2), which runs Bash on Linux and macOS or cmd.exe on Windows.

You can use `script` to easily pass arguments to a cross-platform tool. The `script` step runs in each platform's native script interpreter, Bash on macOS and Linux or cmd.exe on Windows. The following example uses a `script` step to call `npm` with a set of arguments.

#### [YAML](#tab/yaml/)
```yaml
steps:
- script: |
    npm install
    npm test
```

#### [Classic](#tab/classic/)
1. Add a **Command Line** task to your pipeline.

1. Replace the body of the script with:
   ```
   npm install
   npm test
   ```

---

## Environment variables

Command line, PowerShell, and Bash resolve [environment variables](../process/variables.md#environment-variables) differently. To access a system-provided value like PATH, you must use a different syntax per platform.

Azure Pipelines uses [macro syntax](../process/variables.md#macro-syntax-variables) as a cross-platform way to refer to variables at runtime. Variables with macro syntax get processed before a task executes during runtime. The variable expands before the platform shell encounters it.

To use macro syntax in a pipeline, surround the variable name as follows: `$(<variable name>)`. The following cross-platform example script echoes the ID of the pipeline.

#### [YAML](#tab/yaml/)
```yaml
steps:
- script: echo This is pipeline $(System.DefinitionId)
```

This syntax also works for variables you define within the pipeline.

```yaml
variables:
  Example: 'myValue'

steps:
- script: echo The value passed in is $(Example)
```

#### [Classic](#tab/classic/)
1. Add a **Command Line** task to your pipeline.

1. Replace the body of the script with:
   ```
   echo This is pipeline $(System.DefinitionId)
   ```

---

## Bash task

If you need more complex scripts, consider writing them in Bash and using the [Bash task](/azure/devops/pipelines/tasks/reference/bash-v3) in your pipeline. Most macOS and Linux agents use Bash as a shell, and Windows agents can use Git Bash or [Windows Subsystem for Linux](/windows/wsl/about) Bash. [Microsoft-hosted agents](../agents/hosted.md) have Bash preinstalled by default.

The following example runs a Bash task that helps make a decision about whether to trigger a build.

#### [YAML](#tab/yaml/)
```yaml
trigger:
    batch: true
    branches:
        include:
        - main
steps:
- bash: |
    echo "Hello world from $AGENT_NAME running on $AGENT_OS"
    case $BUILD_REASON in
            "Manual") echo "$BUILD_REQUESTEDFOR manually queued the build." ;;
            "IndividualCI") echo "This is a CI build for $BUILD_REQUESTEDFOR." ;;
            "BatchedCI") echo "This is a batched CI build for $BUILD_REQUESTEDFOR." ;;
        *) $BUILD_REASON ;;
    esac
  displayName: Hello world
```

#### [Classic](#tab/classic/)
1. Add a **Bash** task to your pipeline.
1. For  **Type**, select **Inline**.
1. Replace the body of the script with:
   ```bash
   if [ -n "$SYSTEM_PULLREQUEST_PULLREQUESTNUMBER" ]; then
    echo This is for pull request $SYSTEM_PULLREQUEST_PULLREQUESTNUMBER
   else
    echo This is not a pull request build. The trigger was $BUILD_REASON
   fi
   ```

---

>[!NOTE]
>PowerShell is also an option for scripts. The [pwsh](/azure/devops/pipelines/yaml-schema/steps-pwsh) shortcut runs PowerShell 7.x on macOS, Linux, or Windows. Agents must have PowerShell 7.x installed. [Microsoft-hosted agents](../agents/hosted.md) have PowerShell 7.x installed by default.

## Platform-based switching

Platform-specific scripting to duplicate pipeline logic causes extra work and increased error risk. But if you can't avoid platform-specific scripting, you can use [conditions](../process/conditions.md) to detect what platform you're on.

For example, to get the IP address of the build agent, you must use `ifconfig` on macOS, `ip addr` on Ubuntu Linux, and the `Get-NetIPAddress` cmdlet on Windows PowerShell. The following pipeline gets that information from agents on different platforms by using conditions.

#### [YAML](#tab/yaml/)
```yaml
steps:
# Linux
- bash: |
    export IPADDR=$(ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/')
    echo "##vso[task.setvariable variable=IP_ADDR]$IPADDR"
  condition: eq( variables['Agent.OS'], 'Linux' )
  displayName: Get IP on Linux
# macOS
- bash: |
    export IPADDR=$(ifconfig | grep 'en0' -A3 | grep inet | tail -n1 | awk '{print $2}')
    echo "##vso[task.setvariable variable=IP_ADDR]$IPADDR"
  condition: eq( variables['Agent.OS'], 'Darwin' )
  displayName: Get IP on macOS
# Windows
- powershell: |
    Set-Variable -Name IPADDR -Value ((Get-NetIPAddress | ?{ $_.AddressFamily -eq "IPv4" -and !($_.IPAddress -match "169") -and !($_.IPaddress -match "127") } | Select-Object -First 1).IPAddress)
    Write-Host "##vso[task.setvariable variable=IP_ADDR]$IPADDR"
  condition: eq( variables['Agent.OS'], 'Windows_NT' )
  displayName: Get IP on Windows

# use the value
- script: |
    echo The IP address is $(IP_ADDR)
```

#### [Classic](#tab/classic/)

Add the Linux script:

1. Add a **Bash** task to your pipeline.
1. In the configuration, set the **Type** to **Inline**.
1. Replace the body of the script with:
   ```bash
   export IPADDR=$(ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/')
   echo ##vso[task.setvariable variable=IP_ADDR]$IPADDR
   ```
1. Expand **Control Options**, select **Custom conditions** for **Run this task**, and in the **Custom condition** field, enter `eq( variables['Agent.OS'], 'Linux' )`.

Add the macOS script:

1. Repeat the preceding steps, but for the body of the script, enter:
   ```bash
   export IPADDR=$(ifconfig | grep 'en0' -A3 | tail -n1 | awk '{print $2}')
   echo ##vso[task.setvariable variable=IP_ADDR]$IPADDR
   ```
1. Expand **Control Options**, select **Custom conditions** for **Run this task**, and in the **Custom condition** field, enter `eq( variables['Agent.OS'], 'Darwin' )`.

Add the Windows script:

1. Add a **PowerShell** task to your pipeline.
1. Set the **Type** to **Inline**.
1. Replace the body of the script with:
   ```powershell
   Set-Variable -Name IPADDR -Value (Get-NetIPAddress | ?{ $_.AddressFamily -eq "IPv4" -and !($_.IPAddress -match "169") -and !($_.IPaddress -match "127") }).IPAddress
   Write-Host ##vso[task.setvariable variable=IP_ADDR]$env:IPADDR
   ```
1. Expand **Control Options**, select **Custom conditions** for **Run this task**, and in the **Custom condition** field, enter `eq( variables['Agent.OS'], 'Windows_NT' )`.

Add a task that uses the `IPADDR` value.

1. Add a **Command line** task to your pipeline.
1. Replace the body of the task with:
   ```
   echo The IP address is $(IP_ADDR)
   ```

---
