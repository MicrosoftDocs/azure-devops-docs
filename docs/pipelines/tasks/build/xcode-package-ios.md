---
title: Xcode Package iOS build and release task
description: Xcode Package iOS build and release task for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: FF3E5771-481B-4D72-B3D5-ED9B3379E298
ms.manager: douge
ms.author: dastahel
ms.date: 11/13/2017
monikerRange: '>= tfs-2015'
---


# Build: Xcode Package iOS

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/xcode-package-ios.png) Generate an .ipa file from Xcode build output

## Deprecated
**The Xcode Package iOS task has been deprecated.
It is relevant only if you are using Xcode 6.4.
Otherwise, use the latest version of the Xcode task.**

## Demands

xcode

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/XcodePackageiOSV0.0.md)]

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
The SDK you want to use.  Run **xcodebuild -showsdks** to see a list of valid SDK values.
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Path to .app</td>
<td>
Relative path to the built .app file.
The default value is `$(SDK)/$(Configuration)/build.sym/$(Configuration)-$(SDK)`.
Make sure to specify the variable values on the [variables tab](../../build/variables.md).
</td>
</tr>
<tr>
<td>Path to place .ipa</td>
<td>
Relative path where the .ipa will be placed. The directory will be created if it doesn't exist.
The default value is `$(SDK)/$(Configuration)/build.sym/$(Configuration)-$(SDK)/output`.
Make sure to specify the variable values on the [variables tab](../../build/variables.md).
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
