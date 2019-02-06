---
title: WorkItem.Open method 
titleSuffix: Azure DevOps & TFS 
description: Syntax and usage for the Open method to open a work item for modification when working with Azure DevOps Services or Team Foundation Server (TFS)  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 38195423-A9B7-4C5B-8FA2-F9DA5C97DB1F
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.date: 08/04/2016
---


# WorkItem.Open Method

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Opens a work item for modification. This method is [rate limited](../../integrate/concepts/rate-limits.md) for Azure DevOps Services. For better performance and to work around the rate limits, use [PartialOpen](partialopen.md).

**Namespace:**  [Microsoft.TeamFoundation.WorkItemTracking.Client](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client%28v=vs.120%29.aspx)  
**Assembly:**  Microsoft.TeamFoundation.WorkItemTracking.Client (in Microsoft.TeamFoundation.WorkItemTracking.Client.dll)

## Syntax

<table>
<tr>
<td width="75px"> 
<h4>C#</h4>
</td>
<td>
```public void Open()```
</td>
</tr>

<tr>
<td> 
<h4>C++</h4>
</td>
<td>
```public:```<br/>
```void Open()```
</td>
</tr>

<tr>
<td> 
<h4>F#</h4>
</td>
<td>
```member Open : unit -> unit```
</td>
</tr>

<tr>
<td> 
<h4>JScript</h4>
</td>
<td>
```public void Open()```
</td>
</tr>

<tr>
<td> 
<h4>VB</h4>
</td>
<td>
```'Declaration```<br/>
```Public Sub Open```
</td>
</tr>
</table>


<!---
<a data-toggle="collapse" href="#expando-agent-pools">C# ▼</a>
<div class="collapse" id="expando-queues"> 
```public void PartialOpen()```
</div>

<a data-toggle="collapse" href="#expando-agent-pools">C++ ▼</a>
<div class="collapse" id="expando-queues"> 
```public:  
void Open()```
</div>


<a data-toggle="collapse" href="#expando-agent-pools">F# ▼</a>
<div class="collapse" id="expando-queues"> 
```member Open : unit -> unit```
</div>


<a data-toggle="collapse" href="#expando-agent-pools">JScript ▼</a>
<div class="collapse" id="expando-queues"> 
```public function Open()```
</div>

<a data-toggle="collapse" href="#expando-agent-pools">VB ▼</a>
<div class="collapse" id="expando-queues"> 
```'Declaration
Public Sub Open```
</div>
--->
 

## Remarks

This method should be used only if you require historical data, attachments, links or other non-field data. If you want to work only with the latest revision of the work item, use the [PartialOpen](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.workitem.partialopen%28v=vs.120%29.aspx) method.

Using Open requires a round trip to the server for each work item and consumes local resources to store revision history and non-field data.

This method does nothing if [IsOpen](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.workitem.isopen%28v=vs.120%29.aspx) or [IsNew](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.workitem.isnew%28v=vs.120%29.aspx) are true.

## .NET Framework Security

- Full trust for the immediate caller. This member cannot be used by partially trusted code. For more information, see [Using Libraries from Partially Trusted Code](https://msdn.microsoft.com/library/8skskf63%28v=vs.120%29.aspx).

## Related articles

- [WorkItem Class](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.workitem%28v=vs.120%29.aspx)  
- [Microsoft.TeamFoundation.WorkItemTracking.Client Namespace](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client%28v=vs.120%29.aspx)  
