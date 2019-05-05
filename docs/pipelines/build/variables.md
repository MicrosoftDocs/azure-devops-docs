---
title: Predefined variables
ms.custom: seodec18
description: A comprehensive list of all available predefined variables
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 3A1C529F-DF6B-470A-9047-2758644C3D95
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 07/20/2018
monikerRange: '>= tfs-2015'
---

# Predefined variables

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

Variables give you a convenient way to get key bits of data into various parts of your pipeline.
This is the comprehensive list of predefined variables.

These variables are automatically set by the system and read-only. (The exceptions are Build.Clean and System.Debug.)
Learn more about [working with variables](../process/variables.md).

## Build.Clean 

::: moniker range="> tfs-2017"

This is a deprecated variable that modifies how the build agent cleans up source.
To learn how to clean up source, see [source repositories](repository.md).

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

This variable modifies how the build agent cleans up source.
To learn more, see [source repositories](repository.md).

::: moniker-end

<h2 id="systemaccesstoken">System.AccessToken</h2>

`System.AccessToken` is a special variable that carries the security token used by the running build.

# [YAML](#tab/yaml)

In YAML, you must explicitly map System.AccessToken into the pipeline using a
variable. You can do this at the step or task level:

```yaml
steps:
  - bash: echo This is a script that could use $SYSTEM_ACCESSTOKEN
    env:
      SYSTEM_ACCESSTOKEN: $(System.AccessToken)
  - powershell: Write-Host "This is a script that could use $env:SYSTEM_ACCESSTOKEN"
    env:
      SYSTEM_ACCESSTOKEN: $(System.AccessToken)
```

# [Designer](#tab/designer)

You can allow scripts and tasks to access System.AccessToken at the job level.

1. Navigate to the job

1. Under **Additional options**, check the **Allow scripts to access the OAuth token** box.

Checking this box also leaves the credential set in Git so that you can run
pushes and pulls in your scripts.

---

## System.Debug

For more detailed logs to debug pipeline problems, define `System.Debug` and set it to `true`.

::: moniker range="azure-devops"
[!INCLUDE [include](_shared/variables-vsts.md)]
::: moniker-end

::: moniker range="azure-devops-2019"
[!INCLUDE [include](_shared/variables-server2019.md)]
::: moniker-end

::: moniker range="tfs-2018"
[!INCLUDE [include](_shared/variables-tfs2018.md)]
::: moniker-end

::: moniker range="tfs-2017"
[!INCLUDE [include](_shared/variables-tfs2017.md)]
::: moniker-end

::: moniker range="tfs-2015"
[!INCLUDE [include](_shared/variables-tfs2015.md)]
::: moniker-end

<a name="identity_values"></a>
### How are the identity variables set?

The value depends on what caused the build.

| If the build is triggered... | Then the Build.QueuedBy and Build.QueuedById values are based on... | Then the Build.RequestedFor and Build.RequestedForId values are based on... |
| --- | --- | ---|
| In Git or TFVC by the [Continuous integration (CI) triggers](triggers.md) | The system identity, for example: `[DefaultCollection]\Project Collection Service Accounts` | The person who pushed or checked in the changes. |
| In Git or by a [branch policy build](../../repos/git/branch-policies.md#build-validation). | The system identity, for example: `[DefaultCollection]\Project Collection Service Accounts` | The person who checked in the changes. |
| In TFVC by a [gated check-in trigger](triggers.md) | The person who checked in the changes. | The person who checked in the changes. |
| In Git or TFVC by the [Scheduled triggers](triggers.md) | The system identity, for example: `[DefaultCollection]\Project Collection Service Accounts` | The system identity, for example: `[DefaultCollection]\Project Collection Service Accounts` |
| Because you clicked the **Queue build** button | You | You |
