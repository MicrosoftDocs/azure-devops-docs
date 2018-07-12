---
title: IProcessTemplates.AddUpdateTemplate method 
titleSuffix: VSTS & TFS 
description: Syntax and usage for the IProcessTemplates.AddUpdateTemplate method to add or update a process template when working with Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: d99e9d10-9629-4782-9c2c-3b5fdf2550a6
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 08/04/2016
---


# IProcessTemplates.AddUpdateTemplate method (String, String, String, String, String)

**VSTS | TFS 2017 | TFS 2015 | [Previous versions](https://msdn.microsoft.com/library/microsoft.teamfoundation.server.iprocesstemplates.addupdatetemplate%28v=vs.120%29.aspx)**



Add or update a process template with the given properties.  


**Namespace**:  [Microsoft.TeamFoundation.Server](https://msdn.microsoft.com/en-us/library/microsoft.teamfoundation.server(v=vs.120).aspx)  
**Assembly**:  Microsoft.TeamFoundation.Client (in Microsoft.TeamFoundation.Client.dll)


## Syntax

<table>
<tr>
<td width="75px"> 
<h4>C#</h4>
</td>
<td width="250px">
```
void AddUpdateTemplate( ```<br/>``` 
	string name,  ```<br/>```  
	string description,  ```<br/>```  
	string metadata,  ```<br/>```  
	string state,  ```<br/>``` 
	string zipFileName ```<br/>``` 
)
```
</td>
</tr>

<tr>
<td> 
<h4>C++</h4>
</td>
<td>
```void AddUpdateTemplate(```<br/>``` 
	String^ name,```<br/>``` 
	String^ description,```<br/>``` 
	String^ metadata,```<br/>``` 
	String^ state,```<br/>``` 
	String^ zipFileName```<br/>``` 
)```
</td>
</tr>

<tr>
<td> 
<h4>F#</h4>
</td>
<td>
```
abstract AddUpdateTemplate : ```<br/>``` 
        name:string * ```<br/>``` 
        description:string * ```<br/>``` 
        metadata:string * ```<br/>``` 
        state:string * ```<br/>``` 
        zipFileName:string -> unit ```
</td>
</tr>

<tr>
<td> 
<h4>VB</h4>
</td>
<td>
```'Sub AddUpdateTemplate (```<br/>``` 
	name As String,```<br/>``` 
	description As String,```<br/>``` 
	metadata As String,```<br/>``` 
	state As String,```<br/>``` 
	zipFileName As String```<br/>``` 
)```
</td>
</tr>
</table>


## Parameters

*name*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/en-us/library/system.string.aspx)  
&#160;&#160;&#160;&#160;&#160;This value is no longer used and will be ignored  

*description*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/en-us/library/system.string.aspx)  
&#160;&#160;&#160;&#160;&#160;This value is no longer used and will be ignored  

*metadata*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/en-us/library/system.string.aspx)  
&#160;&#160;&#160;&#160;&#160;This value is no longer used and will be ignored  

*state*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/en-us/library/system.string.aspx)  
&#160;&#160;&#160;&#160;&#160;This value is no longer used and will be ignored  

*zipFileName*

&#160;&#160;&#160;&#160;&#160;Type: [System.String](https://msdn.microsoft.com/en-us/library/system.string.aspx)  
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
