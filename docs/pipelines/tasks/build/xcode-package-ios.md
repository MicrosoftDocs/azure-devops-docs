---
title: Xcode Package iOS build and release task
ms.custom: seodec18
description: Xcode Package iOS build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: FF3E5771-481B-4D72-B3D5-ED9B3379E298
ms.author: vijayma
author: vijayma
ms.date: 11/13/2017
monikerRange: '<= azure-devops'
---


# Xcode Package iOS task

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Use this task to generate an .ipa file from Xcode build output.

## Deprecated
**The Xcode Package iOS task has been deprecated.
It is relevant only if you are using Xcode 6.4.
Otherwise, use the latest version of the Xcode task.**

## Demands

xcode

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/XcodePackageiOSV0.md)]

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
</table>

### Advanced options

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
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
</table>

### [Task control options](../../process/tasks.md#controloptions)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
