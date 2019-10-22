---
title: Xcode Package iOS build and release task
ms.custom: seodec18
description: Xcode Package iOS build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: FF3E5771-481B-4D72-B3D5-ED9B3379E298
ms.manager: mijacobs
ms.author: dastahel
author: davidstaheli
ms.date: 11/13/2017
monikerRange: '>= tfs-2015'
---


# Xcode Package iOS task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to generate an .ipa file from Xcode build output.

## Deprecated
**The Xcode Package iOS task has been deprecated.
It is relevant only if you are using Xcode 6.4.
Otherwise, use the latest version of the Xcode task.**

## Demands

xcode

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/XcodePackageiOSV0.md)]

::: moniker-end

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Name of .app</td>
<td>
Name of the .app file, which is sometimes different from the .ipa file.
</td>
</tr>
<tr>
<td>Name of .ipa</td>
<td>
Name of the .ipa file, which is sometimes different from the .app file.
</td>
</tr>
<tr>
<td>Provisioning Profile Name</td>
<td>
Name of the provisioning profile to use when signing.
</td>
</tr>
<tr>
<td>SDK</td>
<td>
The SDK you want to use.  Run <strong>xcodebuild -showsdks</strong> to see a list of valid SDK values.
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Path to .app</td>
<td>
Relative path to the built .app file.
The default value is <code>$(SDK)/$(Configuration)/build.sym/$(Configuration)-$(SDK)</code>.
Make sure to specify the variable values on the <a href="../../build/variables.md" data-raw-source="[variables tab](../../build/variables.md)">variables tab</a>.
</td>
</tr>
<tr>
<td>Path to place .ipa</td>
<td>
Relative path where the .ipa will be placed. The directory will be created if it doesn&#39;t exist.
The default value is <code>$(SDK)/$(Configuration)/build.sym/$(Configuration)-$(SDK)/output</code>.
Make sure to specify the variable values on the <a href="../../build/variables.md" data-raw-source="[variables tab](../../build/variables.md)">variables tab</a>.
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../_shared/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
