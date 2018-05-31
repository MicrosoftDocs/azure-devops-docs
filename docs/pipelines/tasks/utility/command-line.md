---
title: Command line | VSTS or Team Foundation Server
description: Learn all about how you can execute tools from a command prompt when building code in VSTS and Team Foundation Server (TFS).
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 72C7D4F4-E626-42FF-BCA8-24D58D9A960F
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Utility: Command line

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

[//]: # (What happens on cross-platform agent?)

![](_img/command-line.png) Run a program from the command prompt.

## Demands

None

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/CmdLineV2.2.md)]

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
<td>Tool</td>
<td><p>Specify the tool you want to run.</p>
<p>If you are using an on-premises agent, in most cases you should configure the machine so that the tool is on the PATH enviornment variable. But if you know the location of the tool, you can specify a fully qualified path.</p>

<!-- We have this in tooltip help: "Note: You can use **$(agent.builddirectory)**\\\\... if you want the path relative to repo." What's the use case for this. Trying to run something in another repo? -->

</td>
</tr>
<tr>
<td>Arguments</td>
<td>Specify arguments to pass to the tool.</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Working folder</td>
<td>Specify the working directory in which you want to run the command. If you leave it empty, the working directory is [$(Build.SourcesDirectory)](../../build/variables.md).</td>
</tr>
<tr>
<td>Fail on standard error</td>
<td>Select this check box if you want the build to fail if errors are written to the StandardError stream.</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example

On the Build tab of a build definition, add these tasks:

<table>
   <tr>
      <td>![](_img/command-line.png)<br/>**Utility: Command Line**
      </td>
<td>
<p>Get the date.</p>
<ul>
<li>Tool: ```date```</li>
 <li>Arguments: ```/t```</li>
</ul>
      </td>
</tr>
   
        <tr>
      <td>![](_img/command-line.png)<br/>**Utility: Command Line**</td>
      
<td>
<p>Display the operating system version.</p>
<ul>
<li>Tool: ```ver```</li>
 </ul>
</td>
        </tr>

   
        <tr>
      <td>![](_img/command-line.png)<br/>**Utility: Command Line**</td>
      
<td>
<p>Display the environment variables.</p>
<ul>
<li>Tool: ```set```</li>
</ul>
</td>
        </tr>

   
        <tr>
      <td>![](_img/command-line.png)<br/>**Utility: Command Line**</td>
      
<td>
<p>Display all files in all the folders created by the build definition.</p>
<ul>
<li>Tool: ```dir```</li>
 <li>Arguments: ```/s```</li>
<li>Advanced, Working folder: ```$(Agent.BuildDirectory)```</li>
</ul>
</td>
        </tr>

</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn Windows commands?

[An A-Z Index of the Windows CMD  command line](http://ss64.com/nt/)


[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
