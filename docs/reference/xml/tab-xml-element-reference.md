---
title: Tab XML element reference 
titleSuffix: TFS
description: Uses to cluster a group of fields or to support one or more special controls.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: fe932d65-20d4-46ab-aca0-f4a8423929b4
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 02/14/2017
---

# Tab XML element reference

[!INCLUDE [temp](../../_shared/version-tfs-2013-2015.md)]

> [!IMPORTANT]  
>This topic applies to project customization for the On-premises XML process model and the old work item form. For the Hosted XML process model and TFS 2017 and later versions that use the new work item form, see [WebLayout and Control elements](weblayout-xml-elements.md). For the Inheritance process model, see [Customize a process](../../organizations/settings/work/customize-process.md).
>
>For an overview of process models, see [Customize your work tracking experience](../customize-work.md).    


You use the **Tab** element to cluster a group of fields or to support one or more special controls, such as the controls that link work items, display the work item history, or to attach files.  
  
## Syntax  

> [!div class="tabbedCodeSnippets"]
```XML
<Tab Label="LabelText" Padding="(left, top, right, bottom)" Margin="(left, top, right, bottom)">
   <Group> . . . </Group>
   <Control> . . . </Control>
   <TabGroup> . . . </TabGroup>
   <Splitter> . . . </Splitter>
</Tab>  
```  
  
## Attributes and elements  
 The following sections describe attributes, child elements, and parent elements.  
  
### Attributes  
  
|Attribute|Description|  
|---------------|-----------------|  
|`Label`|Required `TabType` attribute.<br /><br /> The label for a set of grouped elements.|  
|`Padding`|Optional `TabType` attribute.<br /><br /> The amount of space in pixels around the inside border of the control.|  
|`Margin`|Optional `TabType` attribute.<br /><br /> The amount of space in pixels around the outside border of the control.|  
  
### Child elements  
  
|Element|Description|  
|-------------|-----------------|  
|[Group](all-form-xml-elements-reference.md)|Optional. Defines a group of elements to display together on the form.|  
|[Control](control-xml-element-reference.md)|Optional. Defines a field that is to appear on the form.|  
|[TabGroup](all-form-xml-elements-reference.md)|Optional. Contains one or more `Tab` elements.|  
|[Splitter](all-form-xml-elements-reference.md)|Optional. Defines a splitter and its orientation on the form between sibling form elements.|  
  
### Parent elements  
  
|Element|Description|  
|-------------|-----------------|  
|[TabGroup](all-form-xml-elements-reference.md)|Optional. Contains one or more `Tab` elements.|  
  
## Remarks  
 `Tab` is a required child element of `TabGroup`.  
  
## Example  
  
> [!div class="tabbedCodeSnippets"]
```XML
<FORM>  
   <Layout>  
        . . .   
      <TabGroup>  
         <Tab Label="Planning">  
            <Group Label="Status" Padding="(0,0,0,3)">  
               <Column PercentWidth="100">  
                  <Control FieldName="Microsoft.DevDiv.Importance" Type="FieldControl" Label="Importance" LabelPosition="Left" />  
                  <Control FieldName="Microsoft.DevDiv.Commitment" Type="FieldControl" Label="Commitment / Confidence" LabelPosition="Left" />  
                    . . .  
               </Column>  
            </Group>  
         </Tab>  
         <Tab Label="Description">  
            <Group>  
               <Column PercentWidth="100">  
                  <Control FieldName="System.Description" Type="HtmlFieldControl" Label="Value Proposition Description" LabelPosition="Top" />  
               </Column >  
            </Group>  
         </Tab>  
 . . .                
      </TabGroup>  
   </Layout>  
</FORM>  
```  
  
  
## Related articles

- [Control](control-xml-element-reference.md)   
- [Specify work item form controls](specify-work-item-form-controls.md)   
- [Design the work item form](design-work-item-form.md)
- [All FORM elements](all-form-xml-elements-reference.md)   