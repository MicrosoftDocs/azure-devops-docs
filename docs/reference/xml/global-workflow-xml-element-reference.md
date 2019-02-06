---
title: Global Workflow XML element reference 
titleSuffix: TFS
description: Syntax and usage of the global workflow elements to define data fields and global lists to be shared across several projects  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 9e96bf19-6ba8-4686-91e3-b4aa2a57f6ac
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013 <= azure-devops-2019'
ms.date: 09/10/2017
---

# Global workflow XML element reference

[!INCLUDE [temp](../../_shared/version-header-tfs-only.md)]

> [!IMPORTANT]  
> This topic applies to project customization for On-premises XML process models. The Inheritance and Hosted XML process models don't support global workflow. For an overview of process models, see [Customize your work tracking experience](../customize-work.md). 


By using global workflow, you can minimize the work that is required to define and update work item fields and global lists that many types of work items and projects share. With global workflow, you can define and update fields and global lists that apply to all types of work items in a project or a project collection.  
  
 If you want only to manage global lists for a collection, see [GLOBALLIST XML element reference](define-global-lists.md).  

<a name="GLOBAL"></a>
  
##   Global workflow syntax structure  
 You define the global workflow by using the `GLOBALWORKFLOW` element, which supports **FIELDS** (Definition) or **GLOBALLISTS** elements as children, but not both.  
  
 **Specify FIELDS**:  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<?xml version="1.0" encoding="utf-8"?>  
<GLOBALWORKFLOW>  
      <FIELDS>   
      <FIELD> . . . </FIELD>  
      </FIELDS>  
</GLOBALWORKFLOW>  
```  
  
 **Specify GLOBALLISTS**:  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<?xml version="1.0" encoding="utf-8"?>  
<GLOBALWORKFLOW>  
      <GLOBALLISTS>   
      <GLOBALLIST> . . . </GLOBALLIST>  
      </GLOBALLISTS>  
</GLOBALWORKFLOW>  
```  
  
<a name="FIELD"></a> 
##  FIELD (Definition) element  
 You use the following syntax to define the data fields within a global workflow. This syntax shows the **FIELD** (Definition) element format and all optional child elements. For more information, see [FIELD (Definition) element reference](field-definition-element-reference.md) and [All FIELD elements](all-field-xml-elements-reference.md).  
  
> [!NOTE]
>  You cannot specify the **HELPTEXT** element for a field that you define in a global workflow.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<FIELD name="fieldDisplayName" refname="fieldReferenceName" type="String | Integer | Double | DateTime | PlainText | HTML | History | TreePath | GUID "  
syncnamechanges="true | false" reportingname="reportingDisplayName" reportingrefname="reportingReferenceName"  
reportable="Dimension | Detail | Measure" formula="avg" >  
      <ALLOWEDVALUES> . . . </ALLOWEDVALUES>  
      <ALLOWEXISTINGVALUE />  
      <CANNOTLOSEVALUE />  
      <COPY />  
      <DEFAULT />  
      <EMPTY />  
      <FROZEN />      <MATCH />  
      <NOTSAMEAS />  
      <PROHIBITEDVALUES /> . . . </PROHIBITEDVALUES>  
      <READONLY />  
      <REQUIRED />  
      <SERVERDEFAULT />  
      <SUGGESTEDVALUES /> . . . </SUGGESTEDVALUES>  
      <VALIDUSER />  
      <WHEN>> . . . </WHEN>  
      <WHENNOT> . . . </WHENNOT>  
      <WHENCHANGED> . . . </WHENCHANGED>  
      <WHENNOTCHANGED> . . . </WHENNOTCHANGED>  
</FIELD>  
```  
  
 
 <a name="LISTElements"></a>  
##  GLOBALLIST and LISTITEM Child Elements  
 The following table describes the **GLOBALLIST** and **LISTITEM** elements. You specify these elements as child elements of the `GLOBALWORKFLOW` element. You can use these elements to enumerate a list of values that appears to the user as a pick list or a drop-down menu of items. For more information, see [ALLOWEDVALUES, SUGGESTEDVALUES, and PROHIBITEDVALUES XML elements](define-pick-lists.md).  
  
|Element|Description and Syntax|  
|-------------|----------------------------|  
|**GLOBALIST**|Defines a set of **LISTITEM** elements that are stored for a project collection or a project.<br /><br /> *globalListName*: A string of text that contains between 1 and 255 characters.<br /><br /> `<GLOBALLIST name="` *globalListName* `">`<br /><br /> `<LISTITEM> . . . </LISTITEM>`<br /><br /> `</GLOBALLIST>`<br /><br /> **GLOBALLIST** is a required child element of the **GLOBALLISTS** element.|  
|**LISTITEM**|Defines a valid value that appears in the list.<br /><br /> `<LISTITEM value="` *listName* `" />`<br /><br /> **LISTITEM** is a required child element of **GLOBALLIST**.|  
  
## Related articles  
-  [FIELD (Definition) element reference](field-definition-element-reference.md)   
-  [Customize your work tracking experience](../customize-work.md)  