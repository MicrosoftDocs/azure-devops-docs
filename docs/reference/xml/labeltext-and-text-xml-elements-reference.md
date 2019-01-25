---
title: LabelText and Text XML elements reference 
titleSuffix: Azure DevOps & TFS
description: Adds a standalone label or informational text to a work item form by using the LabelText element
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 6ff20e50-cef6-4278-96c4-9fd69f7e2d3a
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 02/14/2017
---

# LabelText and Text XML elements reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

You can add a standalone label or informational text to a work item form by using the `LabelText` element. The label is not associated with any work item field. Optionally, you can add a hyperlink to some or all of the text.  
  
To add elements to a form, you modify a work item type. See [Modify or add a custom work item type](../add-modify-wit.md).  
  
The `LabelText` element is a child element of the `Control` element.  
  
 
## Syntax  
  
> [!div class="tabbedCodeSnippets"]
```XML
<LabelText>  
   <Text>  
      <Link OpenInNewWindow="true | false" UrlPath="URLLinkWithParameters">  
         <Param index="IndexValue " value="ParamValue " type ="Original | Current"/>  
      </Link>  
      LabelText  
   </Text>  
</LabelText>  
```  
  
## Attributes and elements  
 The following sections describe attributes, child elements, and parent elements.  
  
### Child elements and attributes  
  
|Element|Description|  
|-------------|-----------------|  
|`LabelText`|Required `Control` element when `type="LabelControl"`.<br /> Container element for a standalone label or informational text. <br /><br /> This element overwrites the value specified by the `Label` attribute specified by the `Control` element.|  
|`Text`|Required `LabelText` element.<br /><br /> Container element for the information or label to appear on the work item form. If the `Link` element is specified within the label, the portion of the text within the element is hyperlinked. If the `Link` element is not specified, the text is rendered without a hyperlink.<br /><br /> Different parts of the label text can be hyperlinked with different URLs. Multiple text element values can be specified in a series.<br /> <br /><br /> If the `Text` element is not specified, then the `Control` element `Label` attribute text appears on the work item form.|  
|`Link`|Optional `Text` element.<br /><br /> Container element for the hyperlink to be applied to a field or standalone label that appears on the work item form. The element type is `HyperLinkType`. **Note:**  You must specify the `Label` attribute in a `Control` element when you specify a child `Link` element. <br /> For more information, see [Link and Param](link-param-xml-elements-reference.md).|  
  
### Parent elements  
  
|Element|Description|  
|-------------|-----------------|  
|[Control](control-xml-element-reference.md)|Required. Defines a field, text, hyperlink, or other control element to appear on the work item form.|  
  
## Remarks  
You can combine plain and hyperlinked text by adding multiple `Text`elements in a `LabelText` element.  
  
The `LabelText` element is only recognized by clients that are running Visual Studio 2015 or later comparable editions or versions. You specify the `Label` attribute in a `Control` element. For clients that are running Visual Studio 2015 or later comparable editions or versions, the text provided by the `LabelText` element appears in the work item form. For clients that are running earlier versions, the text specified by the `Control` element `Label` attribute appears in the work item form.  
  
### Example: Standalone label  
  
The following example adds the plain text "Enter details about how to reproduce the bug in the space below:" to a work item form.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<Control Type="LabelControl" Label=" Enter details about how to reproduce the bug in the space below:">  
      <LabelText>  
      <Text>Enter details about how to reproduce the bug in the space below:  
      </Text>  
      </LabelText>  
</Control>  
```  
  
### Example: Standalone Label with Hyperlink  

The following example adds a hyperlink which is labeled "How do I use this work item?" to a work item form.   
  
> [!div class="tabbedCodeSnippets"]
```XML 
<Control Type="LabelControl" Label="How do I use this work item?">  
      <LabelText>  
      <Text>  
      <Link UrlRoot="http://www.live.com"></Link>  
      How do I use this work item?  
      </Text>  
      </LabelText>  
</Control>  
```  
  
### Example: Hyperlink Applied to Portions of Text  
  
The following example adds a two-part label to a work item form. The first part, "Iteration Path", is associated with a hyperlink. The second part, "(must be 3 levels deep)" appears on the work item form as plain text.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<Control Type="FieldControl" FieldName="System.IterationPath" LabelPosition="Left">  
      <LabelText>  
      <Text>  
         <Link UrlRoot="@WssSiteUrl/render.aspx?wit=bug&topic=Iteration">  
         </Link>  
      Iteration Path  
      </Text>  
      <Text> (must be 3 levels deep)</Text>  
      </LabelText>  
</Control>  
```  

## Related articles  
- [Specify work item form controls](specify-work-item-form-controls.md)