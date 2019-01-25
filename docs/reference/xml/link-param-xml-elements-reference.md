---
title: Link and Param XML elements reference
titleSuffix: Azure DevOps & TFS 
description: Adds a hyperlink to a field or a standalone label on a work item form by using the Link element, Team Foundation Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 6651e599-52d4-4edc-87cf-264d64befbac
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.date: 04/05/2017
---

# Link and Param XML elements reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

You can add a hyperlink to a field or a standalone label on a work item form by using the `Link` element. You use the `Link` element in the following instances to:  
  
-   Add a hyperlink to a field label   
-   Add a hyperlink to a standalone label or portions of informational text   
-   Specify the URL for content to be displayed within a work item form  
  
To add elements to a form, you modify the definition for a work item type. See [Modify or add a custom work item type](../add-modify-wit.md).  
  
The `Link` element is either a child element of the `Control` element, or a child element of the `WebpageControlTarget` or `WebpageControlOptions` elements. For more information about these elements, see [Control](control-xml-element-reference.md) and [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md).  
  
 
## Syntax  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Link URLRoot="URLRoot" URLPath ="URLPathWithParameters">  
      <Param Index="IndexValue " Value="ParamValue " Type ="Original | Current"/>  
</Link>  
```  
  
## Attributes and elements  
 The following sections describe attributes, child elements, and parent elements.  
  
### Child elements and attributes  
  
|Element|Attribute|Description|  
|-------------|---------------|-----------------|  
|`Link`|  |Optional `Control` element when `type="FieldControl"`.<br /> Optional `LabelText` element.<br />Optional `Text` element.<br /> Optional `WebpageControlOptions` element.<br />Container element for defining a hyperlink or URL. |  
|  |`UrlRoot`|Required `Link` attribute.<br /> Specifies the protocol and the server name of the URL to which the label links. Supported protocols are HTTP, HTTPS and MAILTO.<br /> You can either hardcode the specified server name , or you can use one of the following macros and optionally append additional address information to a macro: **Note:**  Each macro links to the URL that is defined and enabled for the project of the work item form for which the `Link` element is defined. If any of the resources are not provisioned or enabled for the project, a "page not found" error will appear. <br />-   `@PortalPage`: The URL of the SharePoint site for the current project (for example, http://*serverName*/sites/*collectionName/TeamProjectName*).<br />-   `@ProcessGuidance`: The URL of the SharePoint site for the process guidance for a project.<br />-   `@ReportManagerUrl`: The URL of the server that hosts Report Manager for the current project. This provides a link to the folder view for the reports (for example, `http://serverName/Reports/Pages/Folder.aspx?ItemPath=/*collectionName/teamProjectName*`).<br />-   `@ReportServiceSiteUrl`: The URL of the server that hosts SQL Server Reporting Services for the current project plus the base path for the project (for example, http://*serverName*/Reports/Pages/reportservice.asmx?ItemPath=/*collectionName/teamProjectName*).<br /> To determine the hardcoded value for the first two macros, you can open the project portal settings for a project. For more information, see [Configure or redirect process guidance](../../report/sharepoint-dashboards/configure-or-redirect-process-guidance.md). |  
|  |`UrlPath`|Optional `Link` attribute.<br /> Specifies a URL path for the hyperlink. You use this attribute to specify variable parameters that are determined at run time.  |  
|`Param`|  |Optional `Link` element. Required when `UrlPath` is specified.<br /> Specifies a value to be used to determine the URL of the hyperlink when `UrlPath` is specified.<br />  |  
|  |`Index`|Required `Param` attribute.<br /> Specifies the index of the parameter where the value must be formatted into the URL string. It is not required to order the Index values sequentially; however, they must match the number of the index in the `URLPath` string. The first index number should be 0.|  
|  |`Value`|Required `Param` attribute.<br /> Specifies the number associated with the value for a URL path for the hyperlink.<br /> Specifies a value that must be formatted into the `URLPath` string. Values must be valid reference names of fields used in the work item type definition.<br /> The `@Me` variable is supported. It is replaced with the name of the current team member that is viewing the work item form. Value entries are not case sensitive<br />|  
|  |`Type`|Optional `Param` attribute.<br /> Specifies that the original value of the field must be used for the parameter. <br /> Valid values are as follows:<br /> -   `Original`: Specifies to use the original parameter value to determine the URL path.<br />-   `Current`: Specifies to use the current parameter value to determine the URL path.<br /> If this attribute is not specified, the current value of the field is used as a parameter|  
  
### Parent elements  
  
|Element|Description|  
|-------------|-----------------|  
|[Control](control-xml-element-reference.md)|Required. Defines a field, text, hyperlink, or other control element to appear on the work item form.|  
|[LabelText](labeltext-and-text-xml-elements-reference.md)|Optional `Control` element.<br />Container element for a label to appear on the work item form.|  
|[Text](labeltext-and-text-xml-elements-reference.md)|Optional `LabelText` element.<br /> Container element for the information or label to appear on the work item form.|  
|[WebpageControlOptions](control-xml-element-reference.md)|Optional `Control` element.<br /> Container element that specifies the options for the Web page control.<br />For more information, see [Provide help text, hyperlinks, or web content on a work item form](provide-help-text-hyperlinks-web-content-form.md).|  
  


## Remarks  
The default behavior of the `Link` element is to open the hyperlink in the work item form or Web page. If the hyperlink is authored to open in a new window (target="_blank"), then an external browser is opened.  
  
You can combine plain and hyperlinked text by adding multiple `Text` elements in a `LabelText` element.  
  
The `LabelText` element is only recognized by clients that are running the latest version of Team Explorer. Therefore, you must specify the `Label` attribute in a `Control` element when you specify a child `Link` element. For clients that are running the latest version of Team Explorer, the text provided by the a `LabelText` element appears in the work item form. For clients that are running previous versions of Team Explorer, the text specified by the `Control` element `Label` attribute appears in the work item form.  
  
> [!IMPORTANT]  
> You can insert a **Link** element within **Layout** section (old web form) or the  **WebLayout** section (new web form), except not within the **SystemControls** section. The **SystemControls** section renders the form header and is restricted to specific rules as described in [WebLayout and Control elements](weblayout-xml-elements.md). 

### Example: Specify a hyperlink with parameters  
  
The following example shows how you can define a hyperlink, such as `http://ServerName/sites/CollectionName/ProjectName/render.aspx?wit=bug&amp;topic=Iteration` that links to the process guidance for the Iteration topic.  

The name of the project is derived from the value assigned to the System.Project field.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Link UrlRoot="http://serverName" UrlPath="sites/{0}/render.aspx?wit=bug&amp;topic=Iteration">
   <Param Index="0" Value="System.Project" />
</Link>
```

### Example: Add a hyperlink to a standalone label  
The following example shows how you can assign a hyperlink to the text "work item guidance" on a work item form.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Control type="LabelControl">
   <LabelText> 
      <Text>
         <Link UrlRoot="http://www.msn.com" />
      work item guidance
      </Text>
   </LabelText> 
</Control>
```

### Example: Add a hyperlink to a field  
 
The following example shows how you can add a hyperlink to the label for a field on a work item form.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Control Type="FieldControl" FieldName="Microsoft.VSTS.CMMI.UserAcceptanceTest" LabelPosition="Left" Label="This text comes from the Label attribute:">
   <LabelText>
      <Text>
         <Link UrlRoot="http://www.live.com/" />
         This text comes from the inner Label Text
      </Text>
   </LabelText>
</Control>
```

  
## Related articles  
-  [Specify work item form controls](specify-work-item-form-controls.md)   
-  [Design the work item form](design-work-item-form.md)
-  [Provide help text, hyperlinks, or web content on a work item form](provide-help-text-hyperlinks-web-content-form.md)