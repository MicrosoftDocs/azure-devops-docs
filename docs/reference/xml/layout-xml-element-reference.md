---
title: Layout XML element reference
titleSuffix: TFS 
description: Use the Layout element to define how the elements on the work item form appear in Team Foundation Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 8898c116-62f8-416f-af33-90c389a038bb
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013 <= tfs-2015'
ms.date: 02/14/2017
---

# Layout XML element reference

**TFS 2015 | TFS 2013**

> [!IMPORTANT]  
>This topic applies to project customization for the On-premises XML process model and the old work item form. For the Hosted XML process model and TFS 2017 and later versions that use the new work item form, see [WebLayout and Control elements](weblayout-xml-elements.md). For the Inheritance process model, see [Customize a process](../../organizations/settings/work/customize-process.md).
>
>For an overview of process models, see [Customize your work tracking experience](../customize-work.md).   


You can use the `Layout` element to define how the elements on the work item form appear. You can define more than one layout to support different clients, such as the Windows client for Visual Studio or the web portal layout.  
  
To add elements to a form, you modify the definition for a work item type. See [Modify or add a custom work item type](../add-modify-wit.md).  
  
The **Layout** element is a required child element of the **FORM** element. For more information about how to use the **Layout** element, see [Design the work item form](design-work-item-form.md).  
   
## Syntax  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<Layout Target="ClientName" MinimumSize="(width,height)" Padding="(left, top, right, bottom)"   
Margin="(left, top, right, bottom)" ControlSpacing="distance" LabelSpacing="distance" HideControlBorders="True | False" HideReadOnlyEmptyFields="True | False">  
       <Group> . . . </Group>  
       <Control> . . . </Control>  
       <TabGroup> . . . </TabGroup>  
       <Splitter> . . . </Splitter>  
</Layout >  
```  
  
## Attributes and elements  
 The following sections describe attributes, child elements, and parent elements.  
  
### Attributes  
  
|Attribute|Description|  
|---------------|-----------------|  
|`Target`|Optional `Layout` attribute.<br /> Specifies the name of the client to which the layout applies. The type is xs:string. Specify one of the following strings:<br /> -   `WinForms`: Applies the form to Team Explorer and Team Explorer Everywhere.<br />-   `Web`: Applies the form to the web portal.|  
|`MinimumSize`|Optional `Layout` attribute.<br /> Specifies the minimum size in pixels for the form. The syntax is specified in (*width, height*). The attribute type is `SizeType`.<br />Pattern value: ^\\(\d+\\,\d+\\)$<br /> Pattern value example: (100,100)|  
|`Padding`|Optional `Layout` attribute.<br />Specifies the amount of space in pixels around the inside border of the form. The attribute type is `SizeType`.<br /> Pattern value: ^\\(\d+\\,\d+\\,\d+\\,\d+\\)$<br />Pattern value example: (2,0,2,0)|  
|`Margin`|Optional `Layout` attribute.<br />Specifies the amount of space in pixels around the outside border of the form. The attribute type is `SizeType`.<br /> Pattern value: ^\\(\d+\\,\d+\\,\d+\\,\d+\\)$<br /> Pattern value example: (2,0,2,0)|  
|`ControlSpacing`|Optional `Layout` attribute.<br />Specifies the vertical offset of controls defined in the form.|  
|`LabelSpacing`|Optional `Layout` attribute.<br />Specifies the number of pixels between the label and the edit region of the control.|  
|`HideControlBorders`|Optional `Layout` attribute.<br />Specify a value of `True` to hide control borders, and `False` to display control borders.|  
|`HideReadOnlyEmptyFields`|Optional `Layout` attribute.<br />Specify a value of `True` to hide read-only and empty fields, and `False` to display these fields.|  
  
### Child elements  
  
|Element|Description|  
|-------------|-----------------|  
|[Group](all-form-xml-elements-reference.md)|Optional. Defines a group of elements to display together on the form.|  
|[Control](control-xml-element-reference.md)|Optional. Defines a work item field, text, hyperlink, or other control element to display in a work item form.|  
|[TabGroup](all-form-xml-elements-reference.md)|Optional. Contains one or more `Tab` elements.|  
|[Splitter](all-form-xml-elements-reference.md)|Optional. Defines a splitter and its orientation on the form between sibling form elements.|  
  
### Parent elements  
  
|Element|Description|  
|-------------|-----------------|  
|[FORM](all-form-xml-elements-reference.md)|Required. Contains the `Layout` element that defines how the elements on the work item type form are displayed.|  
  
## Remarks  
 The `Layout` element is a required child element of `FORM`. The `Layout` element specifies a choice, and at least one of the child elements must be defined: `Group`, `Control`, `TabGroup`, or `Splitter`. You can define more than one child element.  
  
## Example  
  
> [!div class="tabbedCodeSnippets"]
```XML
<FORM>  
   <Layout>  
      <Group>  
          <Column PercentWidth="36">  
            <Group>  
            <Control FieldName="System.Title" Type="FieldControl" Label="Title" LabelPosition="Left" />  
            <Control FieldName="System.AreaPath" Type="WorkItemClassificationControl" Label="Area" LabelPosition="Left" />  
            <Control FieldName="Microsoft.VSTS.Common.ProductUnit" Type="FieldControl" Label="Product Unit" LabelPosition="Left" />  
            <Control FieldName="Microsoft.DevDiv.BusinessUnit" Type="FieldControl" Label="Business Unit" LabelPosition="Left" />  
            </Group>  
          </Column>  
          <Column PercentWidth="33">  
            <Group>  
            <Control FieldName="Microsoft.DevDiv.SubTitle" Type="FieldControl" Label="Sub Title" LabelPosition="Left" />  
            <Control FieldName="System.IterationPath" Type="WorkItemClassificationControl" Label="Iteration" LabelPosition="Left" />  
            <Control FieldName="Microsoft.DevDiv.Other" Type="FieldControl" Label="Other" LabelPosition="Left" />  
            </Group>  
          </Column>  
          <Column PercentWidth="31">  
            <Group>  
            <Control FieldName="Microsoft.DevDiv.Type" Type="FieldControl" Label="Type" LabelPosition="Left" />  
            <Control FieldName="System.AssignedTo" Type="FieldControl" Label="Assigned To" LabelPosition="Left" />  
            <Control FieldName="System.State" Type="FieldControl" Label="State" LabelPosition="Left" />  
            </Group>  
          </Column>  
      </Group>  
. . .  
   </Layout>  
</FORM>  
```  
  
  
## Related articles
-  [Control](control-xml-element-reference.md)   
-  [Specify work item form controls](specify-work-item-form-controls.md)   
-  [All FORM elements](all-form-xml-elements-reference.md)   
-  [Design the work item form](design-work-item-form.md)