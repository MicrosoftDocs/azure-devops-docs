---
title: IProcessTemplates.AddUpdateTemplate method 
titleSuffix: Azure DevOps & TFS 
description: Syntax and usage for the IProcessTemplates.AddUpdateTemplate method to add or update a process template when working with Azure DevOps Services or Team Foundation Server (TFS)  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: d99e9d10-9629-4782-9c2c-3b5fdf2550a6
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 08/04/2016
---


# IProcessTemplates.AddUpdateTemplate method (String, String, String, String, String)

**Azure DevOps Services | TFS 2018 | TFS 2017 | TFS 2015 | [Previous versions](/previous-versions/visualstudio/visual-studio-2013/bb137716(v=vs.120))**



Add or update a process template with the given properties.  


**Namespace**:  [Microsoft.TeamFoundation.Server](https://msdn.microsoft.com/library/microsoft.teamfoundation.server(v=vs.120).aspx)  
**Assembly**:  Microsoft.TeamFoundation.Client (in Microsoft.TeamFoundation.Client.dll)


## Syntax

<table>
<tr>
<td width="75px"> 
<h4>C#</h4>
</td>
<td width="250px">
<code>void AddUpdateTemplate(</code><br/><code>string name,</code><br/><code>string description,</code><br/><code>string metadata,</code><br/><code>string state,</code><br/><code>string zipFileName</code><br/><code>)</code>
</td>
</tr>

<tr>
<td> 
<h4>C++</h4>
</td>
<td>
<code>void AddUpdateTemplate(</code><br/><code>String^ name,</code><br/><code>String^ description,</code><br/><code>String^ metadata,</code><br/><code>String^ state,</code><br/><code>String^ zipFileName</code><br/><code>)</code>
</td>
</tr>

<tr>
<td> 
<h4>F#</h4>
</td>
<td>
<code>abstract AddUpdateTemplate :</code><br/><code>name:string *</code><br/><code>description:string *</code><br/><code>metadata:string *</code><br/><code>state:string *</code><br/><code>zipFileName:string -&gt; unit</code>
</td>
</tr>

<tr>
<td> 
<h4>VB</h4>
</td>
<td>
<code>&#39;Sub AddUpdateTemplate (</code><br/><code>name As String,</code><br/><code>description As String,</code><br/><code>metadata As String,</code><br/><code>state As String,</code><br/><code>zipFileName As String</code><br/><code>)</code>
</td>
</tr>
</table>


## Parameters

*name*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/library/system.string.aspx)  
&#160;&#160;&#160;&#160;&#160;This value is no longer used and will be ignored  

*description*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/library/system.string.aspx)  
&#160;&#160;&#160;&#160;&#160;This value is no longer used and will be ignored  

*metadata*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/library/system.string.aspx)  
&#160;&#160;&#160;&#160;&#160;This value is no longer used and will be ignored  

*state*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/library/system.string.aspx)  
&#160;&#160;&#160;&#160;&#160;This value is no longer used and will be ignored  

*zipFileName*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/library/system.string.aspx)  
&#160;&#160;&#160;&#160;&#160;The name of the zip file that contains the process template resources  


## Remarks


**Change in API Behavior for TFS 2015**

API values for the name, description and metadata arguments are now overridden by the process template data specified in the *zipFileName*. This change was required to avoid conflicts between the ZIP file contents and parameters passed through the API.

These properties are defined in the [ProcessTemplate.xml file](https://msdn.microsoft.com/library/aa395261.aspx).

```xml
<?xml version="1.0" encoding="utf-8"?>  
<ProcessTemplate>    
  <metadata>   
    <name>Agile</name>   
    <description>This template is flexible and will work great for most teams using Agile planning methods, including those practicing Scrum.</description>  
    <version type="ADCC42AB-9882-485E-A3ED-7678F01F66BC" major="14" minor="1" />    
    <plugins>    
      . . .   
   </plugins>    
  </metadata>   
  <groups>   
```

## Related articles

[IProcessTemplates Interface](https://msdn.microsoft.com/library/microsoft.teamfoundation.server.iprocesstemplates.aspx)  
[Microsoft.TeamFoundation.Server Namespace](https://msdn.microsoft.com/library/microsoft.teamfoundation.server.aspx)
