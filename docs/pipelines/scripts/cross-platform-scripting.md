---
title: Cross-platform scripting
ms.custom: seodec18
description: Patterns for safe cross-platform scripting
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 96b7da24-617e-4a58-b65f-040c374e60e2
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 11/29/2018
monikerRange: '>= tfs-2018'
---

# Run cross-platform scripts

[!INCLUDE [version-tfs-2018](../_shared/version-tfs-2018.md)]

With Azure Pipelines and Team Foundation Server (TFS), you can run your builds on macOS, Linux, and Windows.
If you develop on cross-platform technologies such as Node.js and Python, these capabilities bring benefits, and also some challenges.
For example, most pipelines include one or more scripts that you want to run during the build process.
But scripts often don't run the same way on different platforms.
Below are some tips on how to handle this kind of challenge.

## Run cross-platform tools with a script step

Some scripts just pass arguments to a cross-platform tool. For instance, calling
`npm` with a set of arguments can be easily accomplished with a `script` step.
`script` runs in each platform's native script interpreter: Bash on macOS and Linux, CMD on Windows.

# [YAML](#tab/yaml)

```yaml
steps:
- script: |
    npm install
    npm test
```

# [Designer](#tab/designer)

1. Add a **Command Line** task to your pipeline.

1. Replace the body of the script with:
```
npm install
npm test
```

---

## Handle environment variables

Environment variables throw the first wrinkle into writing cross-platform scripts.
Command line, PowerShell, and Bash each have different ways of reading environment variables. 
If you need to access an operating system-provided value like PATH, you'll need different techniques per platform.

However, Azure Pipelines offers a cross-platform way to refer to variables that
it knows about. By surrounding a variable name in `$( )`, it will be expanded
before the platform's shell ever sees it. For instance, if you want to echo out
the ID of the pipeline, the following script is cross-platform friendly:

# [YAML](#tab/yaml)

```yaml
steps:
- script: echo This is pipeline $(System.DefinitionId)
```

This also works for variables you specify in the pipeline.

```yaml
variables:
  Example: 'myValue'

steps:
- script: echo The value passed in is $(Example)
```

# [Designer](#tab/designer)

1. Add a **Command Line** task to your pipeline.

1. Replace the body of the script with:
```
echo This is pipeline $(System.DefinitionId)
```

---

## Consider Bash

If you have more complex scripting needs than the examples shown above, then consider writing them in Bash.
Most macOS and Linux agents have Bash as an available shell, and Windows agents include Git Bash.
::: moniker range="azure-devops"
For Azure Pipelines, the Microsoft-hosted agents always have Bash available.
::: moniker-end

For example, if you need to make a decision based on whether this is a pull
request build:

# [YAML](#tab/yaml)

```yaml
trigger:
    batch: true
    branches:
        include:
        - master
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

# [Designer](#tab/designer)

1. Add a **Bash** task to your pipeline.

1. For the **Type**, select Inline.

1. Replace the body of the script with:
```bash
if [ -n "$SYSTEM_PULLREQUEST_PULLREQUESTNUMBER" ]; then
    echo This is for pull request $SYSTEM_PULLREQUEST_PULLREQUESTNUMBER
else
    echo This is not a pull request build. The trigger was $BUILD_REASON
fi
```

---

## Switch based on platform

In general we recommend that you avoid platform-specific scripts to avoid problems such as duplication of your pipeline logic. Duplication causes extra work and extra risk of bugs.
However, if there's no way to avoid platform-specific scripting, then you can use a `condition` to detect what platform you're on. 

For example, suppose that for some reason you need the IP address of the build
agent. 
On Windows, `ipconfig` gets that information. 
On macOS, it's `ifconfig`.
And on Ubuntu Linux, it's `ip addr`.

Set up the below pipeline, then try running it against agents on different platforms.

# [YAML](#tab/yaml)

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
    export IPADDR=$(ifconfig | grep 'en0' -A3 | tail -n1 | awk '{print $2}')
    echo "##vso[task.setvariable variable=IP_ADDR]$IPADDR"
  condition: eq( variables['Agent.OS'], 'Darwin' )
  displayName: Get IP on macOS
# Windows
- powershell: |
    Set-Variable -Name IPADDR -Value ((Get-NetIPAddress | ?{ $_.AddressFamily -eq "IPv4" -and !($_.IPAddress -match "169") -and !($_.IPaddress -match "127") } | Select-Object -First 1).IPAddress)
    Write-Host "##vso[task.setvariable variable=IP_ADDR]$IPADDR"
  condition: eq( variables['Agent.OS'], 'Windows_NT' )
  displayName: Get IP on Windows

# now we use the value, no matter where we got it
- script: |
    echo The IP address is $(IP_ADDR)
```

# [Designer](#tab/designer)

First, add a Linux script.

1. Add a **Bash** task to your pipeline.

1. Set the **Type** to Inline.

1. Replace the body of the script with:
```bash
export IPADDR=$(ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/')
echo ##vso[task.setvariable variable=IP_ADDR]$IPADDR
```

1. Change the value of **Run this task** to "Custom conditions".

1. In the **Custom condition** field which appears, enter "eq( variables['Agent.OS'], 'Linux' )".

Next, add a macOS script.

1. Repeat the above steps, but for the body of the script, enter:
```bash
export IPADDR=$(ifconfig | grep 'en0' -A3 | tail -n1 | awk '{print $2}')
echo ##vso[task.setvariable variable=IP_ADDR]$IPADDR
```

1. For the **Custom condition**, enter "eq( variables['Agent.OS'], 'Darwin' )".

Next, add a Windows script.

1. Add a **PowerShell** task to your pipeline.

1. Set the **Type** to Inline.

1. Replace the body of the script with:
```powershell
Set-Variable -Name IPADDR -Value (Get-NetIPAddress | ?{ $_.AddressFamily -eq "IPv4" -and !($_.IPAddress -match "169") -and !($_.IPaddress -match "127") }).IPAddress
Write-Host ##vso[task.setvariable variable=IP_ADDR]$env:IPADDR
```

1. Change the value of **Run this task** to "Custom conditions".

1. In the **Custom condition** field which appears, enter "eq( variables['Agent.OS'], 'Windows_NT' )".

Finally, add a task which uses the value, no matter how we got it.

1. Add a **Command line** task to your pipeline.

1. Replace the body of the task with:
```
echo The IP address is $(IP_ADDR)
```

---
