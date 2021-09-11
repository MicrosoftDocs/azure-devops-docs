---
title: Predefined variables
ms.custom: seodec18
description: A comprehensive list of all available predefined variables
ms.topic: conceptual
ms.assetid: 3A1C529F-DF6B-470A-9047-2758644C3D95
ms.author: jukullam
author: juliakm
ms.date: 06/03/2021
monikerRange: '>= tfs-2015'
---

# Use predefined variables

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

[!INCLUDE [temp](../includes/concept-rename-note.md)]

Variables give you a convenient way to get key bits of data into various parts of your pipeline.
This is a list of predefined variables that are available for your use. There may be a few other predefined variables, but they are mostly for internal use.


These variables are automatically set by the system and read-only. (The exceptions are Build.Clean and System.Debug.) 

::: moniker range=">=azure-devops-2020"

In YAML pipelines, you can reference predefined variables as environment variables. For example, the variable `Build.ArtifactStagingDirectory` becomes the variable `BUILD_ARTIFACTSTAGINGDIRECTORY`.

For classic pipelines, you can use [release variables](../release/variables.md) in your deploy tasks to share the common information (e.g. — Environment Name, Resource Group, etc).

::: moniker-end

Learn more about [working with variables](../process/variables.md).

## Build.Clean 

::: moniker range="> tfs-2017"

This is a deprecated variable that modifies how the build agent cleans up source.
To learn how to clean up source, see [Clean the local repo on the agent](../repos/pipeline-options-for-git.md#clean-the-local-repo-on-the-agent).

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

This variable modifies how the build agent cleans up source.
To learn more, see [Clean the local repo on the agent](../repos/pipeline-options-for-git.md#clean-the-local-repo-on-the-agent).

::: moniker-end

<h2 id="systemaccesstoken">System.AccessToken</h2>

`System.AccessToken` is a special variable that carries the security token used by the running build.

# [YAML](#tab/yaml)

In YAML, you must explicitly map `System.AccessToken` into the pipeline using a
variable. You can do this at the step or task level:

```yaml
steps:
  - bash: echo This script could use $SYSTEM_ACCESSTOKEN
    env:
      SYSTEM_ACCESSTOKEN: $(System.AccessToken)
  - powershell: | 
      Write-Host "This is a script that could use $env:SYSTEM_ACCESSTOKEN"
      Write-Host "$env:SYSTEM_ACCESSTOKEN = $(System.AccessToken)"
    env:
      SYSTEM_ACCESSTOKEN: $(System.AccessToken)
```

You can configure the default scope for `System.AccessToken` using [build job authorization scope](../process/access-tokens.md#job-authorization-scope). 

# [Classic](#tab/classic)

You can allow scripts and tasks to access System.AccessToken at the job level.

1. Navigate to the job

1. Under **Additional options**, check the **Allow scripts to access the OAuth token** box.

Checking this box also leaves the credential set in Git so that you can run
pushes and pulls in your scripts.

---

## System.Debug

For more detailed logs to debug pipeline problems, define `System.Debug` and set it to `true`. 


1. Edit your pipeline. 
1. Select **Variables**. 
1. Add a new variable with the name  `System.Debug` and value `true`.

    :::image type="content" source="media/options/system-debug.png" alt-text="Set System Debug to true":::

1. Save the new variable. 


::: moniker range="azure-devops"

[!INCLUDE [include](includes/variables-hosted.md)]

::: moniker-end

::: moniker range="azure-devops-2020"

[!INCLUDE [include](includes/variables-server-2020.md)]

::: moniker-end

::: moniker range="azure-devops-2019"

[!INCLUDE [include](includes/variables-server2019.md)]

::: moniker-end

::: moniker range="tfs-2018"

[!INCLUDE [include](includes/variables-tfs2018.md)]

::: moniker-end

::: moniker range="tfs-2017"

[!INCLUDE [include](includes/variables-tfs2017.md)]

::: moniker-end

::: moniker range="tfs-2015"

[!INCLUDE [include](includes/variables-tfs2015.md)]

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
