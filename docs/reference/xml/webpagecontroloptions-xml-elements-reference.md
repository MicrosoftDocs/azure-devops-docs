---
title: WebpageControlOptions XML elements reference 
titleSuffix: Azure DevOps & TFS
description: Syntax and usage for the WebpageControlOptions to display content defined for a Web page or within a CDATA tag on a work item form.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: affebf93-892c-4bce-9ad0-cbdc98410d61
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 04/05/2017
---

# WebpageControlOptions XML elements reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

You can display content defined for a Web page or within a CDATA tag on a work item form by using the `WebpageControlOptions` element. You can include either the **Link** or the **Content** child elements to specify either a URL or HTML for the content to appear in the form.  
  
To add elements to a form, you modify a work item type. See [Modify or add a custom work item type](../add-modify-wit.md).  
  
The `WebpageControlOptions` element is a child element of the **CONTROL** element.  
  

## Syntax  
  
> [!div class="tabbedCodeSnippets"]
```XML
<WebpageControlOptions AllowScript="true | false" ReloadOnParamChange="true | false" >  
      <Link UrlRoot="UrlRoot" UrlPath="UrlPathWithParameters">  
      <Param Index="IndexValue " Value="Param Value " Type="Original | Current" />  
      </Link>  
      <Content>  
      <![CDATA[Contents of HTML]]>  
      </Content>  
</WebpageControlOptions>  
```  
  
## Attributes and elements  
 The following sections describe attributes, child elements, and parent elements.  
  
### Child elements and attributes  
  
|Element|Attribute|Description|  
|-------------|---------------|-----------------|  
|`WebpageControlOptions`|  |Optional `Control` element when `type="WebpageControl"`.<br /> Container element for defining a URL whose contents will be rendered in the work item form.<br /> Optional `Link` element. Required when `UrlPath` is specified.<br /> Specifies a value to be used to determine the URL of the hyperlink when `UrlPath` is specified.|  
|  |`AllowScript`|Optional `WebpageControlOptions` attribute.<br /> Specifies whether JavaScript within the Web page is allowed to run (`true`) or not (`false`). The attribute type is `xs:boolean`.<br /> All other settings such as ActiveX are based on the Internet Explorer settings defined for the client.|  
|  |`ReloadOnParamChange`|Optional `WebpageControlOptions` attribute.<br /> Specifies whether to reload (`true`) the contents of the Web page when a parameter in the work item form is changed (`true`) or not (`false`). The attribute type is `xs:boolean`.<br /> The default value is `true`.|  
|`Link`|  |Optional `WebpageControlOptions` element. This element is mutually exclusive with the `Content` element.<br /> Specifies the URL for the Web page to be rendered in the work item form.<br /> For more information, see [Link and Param](link-param-xml-elements-reference.md).|  
|`Content`|  |Optional `WebpageControlOptions` element.<br /><br /> This element is mutually exclusive with the `Link` element.<br /> Specifies the HTML content that is to be rendered by the Web page control. The content is specified within a CDATA tag. For example:<br /><br /> `<![CDATA[Click here for detailed <b><a href="http://www.microsoft.com">Process Guidance</a></b>]]>`<br /> The element type is `xs:string`. **Note:**  The HTML content is not validated prior to rendering it in the work item form.|  
  
### Parent Elements  
  
|Element|Description|  
|-------------|-----------------|  
|[Control](control-xml-element-reference.md)|Required parent element. Defines a field, text, hyperlink, or other control element to appear on the work item form.|  
|[Text](labeltext-and-text-xml-elements-reference.md)|Optional `LabelText` element.<br /> Container element for the information or label to appear on the work item form.<br /> For more information, see [LabelText and Text](labeltext-and-text-xml-elements-reference.md).|  
  
## Remarks  
The `Link` and `Content` elements are mutually exclusive.  
  
The `AllowScript` and `ReloadOnParamChange` attributes are not allowed when you use the `Content` element.  
  
When the Web page control is configured to display raw HTML, all scripting is disabled. Any hyperlinks in the content that are clicked are opened in the Visual Studio Web browser if the work item form is shown in  Visual Studio or in Internet Explorer.  
Several toolbar buttons are added to the work item form for a tab that contains `WebpageControl`. These options include the following functions:  
  
-   Back and forward navigation   
-   Stop content loading and refresh content   
-   Return to content home page   
-   Open the content in a new window or in an external browser  
  
In addition, if the Web page to be loaded contains untrusted content, then the icon is blocked and the blocked icon appears.  

The `WebpageControlOptions` element is only recognized by clients that are running the latest version of Team Explorer. For previous versions, a red area is displayed and a message appears indicating that the control could not be found. For more information, see [Provide help text, hyperlinks, or web content](provide-help-text-hyperlinks-web-content-form.md).  
  
### Example  
The following example shows how to load a work item form with HTML defined in a CDATA tag.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Control Type="WebpageControl">
   <WebpageControlOptions>
      <Content>
         <![CDATA[Click here for detailed <b><a href="http://www.microsoft.com">Process Guidance</a></b>]]>
      </Content>
   </WebpageControlOptions>
```
  
## Related articles
-  [Specify work item form controls](specify-work-item-form-controls.md)   
-  [Provide help text, hyperlinks, or web content](provide-help-text-hyperlinks-web-content-form.md)   
-  [Design the work item form](design-work-item-form.md)