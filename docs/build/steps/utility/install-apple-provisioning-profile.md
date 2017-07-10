---
title: Install Apple Provisioning Profile
description: Install an Apple provisioning profile required to build on a macOS agent
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 0f9f66ca-250e-40fd-9678-309bcd439d5e
ms.manager: dastahel
ms.author: madhurig
ms.date: 05/22/2017
---

# Utility: Install Apple Provisioning Profile

**Team Services**

![](../build/_img/xcode-build.png) Install an Apple provisioning profile required to build on a macOS agent

This task allows installing an Apple provisioning profile that is stored as a [secure file](../../concepts/library/secure-files.md) on the server. You can use this task to install additional provisioning profiles needed to build Apple WatchKit Apps and Extensions. 

## Demands

xcode

## Agent version

2.116.0 or higher is required

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Provisioning Profile</td>
<td>
Select the provisioning profile that was uploaded to `Secure Files` to install on the macOS agent.
</td>
</tr>
<tr>
<td>Remove Profile After Build</td>
<td>
Select to specify that the provisioning profile should be removed from the agent after the build or release is complete.
</td>
</tr>
</table>