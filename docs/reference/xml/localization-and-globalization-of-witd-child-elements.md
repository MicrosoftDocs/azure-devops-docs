---
title: Localization and globalization of WITD child elements 
titleSuffix: TFS
description: Understand how to change some parts of the work item type definition so that they appear in your native language - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 85408917-99ad-4153-8377-661801c85b14
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 01/20/2017
---


# Localization and globalization of WITD child elements

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

You can change some parts of the work item type definition so that they appear in your native language.  
  
 When you design a work item, keep in mind that work item settings reside on the server for the project collection and do not recognize the language preferences of team members.  
  
 The following table summarizes what elements can and cannot be localized. Any element that is not explicitly listed in the following table cannot be localized.  
  
|**Examples of elements that can be localized**|**Element attributes that you can localize**|  
|----------------------------------------------------|--------------------------------------------------|  
|`<WORKITEMTYPE name="bug">`|The name of the work item type. Must be 1 to 255 Unicode characters.|  
|`<DESCRIPTION>Work item descriptive text here</DESCRIPTION>`|The work item type description. Supports entry of a text string that can contain more than 255 Unicode characters.|  
|`<FIELD refname="System.Title" name="Title" type="String">`|The name of the work item field. Must be 1 to 128 Unicode characters long.<br /><br /> The name that you specify for a field is used in all Team Foundation clients. Field names are also used by team members to create work item type queries.<br /><br /> The field reference name and type are not localizable.|  
|`<HELPTEXT>This is a work item for bugs</HELPTEXT>`|The Help text for work item fields. Supports entry of a text string that can contain more than 255 Unicode characters.<br /><br /> You can define custom text strings for each work item type within each project.|  
|`<LISTITEM value="My Value">`|The string text for the `value` attribute that appears in a pick list or global list.|  
|`<STATE value="Active" />`<br /><br /> `<STATE value="Complete" />`<br /><br /> `<TRANSITION from="Active" to="Complete">`<br /><br /> `<REASON value="No Plans to Fix"/>`|The `value` attribute that specifies the name for the `STATE` and `REASON` elements. Must be 1 to 255 Unicode characters.|  
|`<GROUP Label="label text"`<br /><br /> `<Tab Label="label text">`<br /><br /> `<CONTROL FieldName="Found In Build" Label="Found In">`|The `Label` attribute specified by a `GROUP`, `TAB`, or `CONTROL` element. Label text appears on work item forms. Must be 1 to 80 Unicode characters when specified.<br /><br /> The `Label` attribute is optional except for the `TAB` element.<br /><br /> You can customize the name of a field by specifying the `Label` for a field that appears on a work item form by using the `CONTROL` element.|  
  
## Related articles  
- [All WITD XML elements reference](all-witd-xml-elements-reference.md)
- [Customize your work tracking experience](../customize-work.md) 