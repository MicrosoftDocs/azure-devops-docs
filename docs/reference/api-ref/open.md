---
title: WorkItem.Open method 
titleSuffix: Azure DevOps & TFS 
description: Syntax and usage for the Open method to open a work item for modification when working with Azure DevOps Services or Team Foundation Server (TFS)  
ms.technology: devops-agile
ms.assetid: 38195423-A9B7-4C5B-8FA2-F9DA5C97DB1F
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 08/04/2016
---


# WorkItem.Open Method

[!INCLUDE [temp](../../includes/version-vsts-tfs-all-versions.md)]

Opens a work item for modification. This method is [rate limited](../../integrate/concepts/rate-limits.md) for Azure DevOps Services. For better performance and to work around the rate limits, use [PartialOpen](partialopen.md).

**Namespace:**  [Microsoft.TeamFoundation.WorkItemTracking.Client](/previous-versions/visualstudio/visual-studio-2013/bb141853(v=vs.120))  
**Assembly:**  Microsoft.TeamFoundation.WorkItemTracking.Client (in Microsoft.TeamFoundation.WorkItemTracking.Client.dll)

## Syntax

<table>
<tr>
<td width="75px"> 
<h4>C#</h4>
</td>
<td>
<code>public void Open()</code>
</td>
</tr>
<tr>
<td> 
<h4>C++</h4>
</td>
<td>
<code>public:</code><br/>
<code>void Open()</code>
</td>
</tr>
<tr>
<td> 
<h4>F#</h4>
</td>
<td>
<code>member Open : unit -&gt; unit</code>
</td>
</tr>
<tr>
<td> 
<h4>JScript</h4>
</td>
<td>
<code>public void Open()</code>
</td>
</tr>
<tr>
<td> 
<h4>VB</h4>
</td>
<td>
<code>&#39;Declaration</code><br/>
<code>Public Sub Open</code>
</td>
</tr>
</table>



## Remarks

This method should be used only if you require historical data, attachments, links or other non-field data. If you want to work only with the latest revision of the work item, use the [PartialOpen](/previous-versions/visualstudio/visual-studio-2013/bb140423(v=vs.120)) method.

Using Open requires a round trip to the server for each work item and consumes local resources to store revision history and non-field data.

This method does nothing if [IsOpen](/previous-versions/visualstudio/visual-studio-2013/bb164814(v=vs.120)) or [IsNew](/previous-versions/visualstudio/visual-studio-2013/ff737494(v=vs.120)) are true.

## .NET Framework Security

- Full trust for the immediate caller. This member cannot be used by partially trusted code. For more information, see [Using Libraries from Partially Trusted Code](/dotnet/framework/misc/using-libraries-from-partially-trusted-code).

## Related articles

- [WorkItem Class](/previous-versions/visualstudio/visual-studio-2013/bb179831(v=vs.120))  
- [Microsoft.TeamFoundation.WorkItemTracking.Client Namespace](/previous-versions/visualstudio/visual-studio-2013/bb141853(v=vs.120))