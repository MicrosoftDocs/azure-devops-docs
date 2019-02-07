---
title: XML element index
titleSuffix: Azure DevOps & TFS
description: Index of XML elements used to customize the work tracking experience for Hosted XML and On-premises XML process models for Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: f65e3ae0-817a-413e-b5c3-0ebadc3ba944
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 04/04/2017
---

# XML element reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can customize your project to support specific processes and practices that your team uses, and to design your workflow, work item forms, and data fields. Customization requires modifying one or more XML definition files. Each file corresponds to a work item tracking object. You can look up the syntax structure of each XML element from the topics provided in this section.  
  
 This illustration shows that you can create or customize eight types of objects. For projects, you can customize categories, work item types, and process configuration. For project collections, you can customize global lists, link types, and work item fields. You can customize global workflow for a project or for a project collection. For a description of these objects and other customization options, see [Agile glossary](../../boards/work-items/agile-glossary.md) and [Customize your work tracking experience](../customize-work.md).  
  
 ![Work Item Tracking Objects](_img/pnt_wit_objects.png "PNT_WIT_Objects")  
  
By using the index of elements in this topic, you can look up the syntax structure and find examples of how to use each element of the schema type definition for work item tracking. Elements are organized alphabetically and by the following four major groups:  
  
-   **WITD**: The root element of the definition schema for types of work items.  
  
-   **FIELD** (Definition): You use this element and its child elements to define a work item field and to specify the rules and conditions that apply to it. See [Modify a field or add a custom field](../add-modify-field.md). To access descriptions for all fields defined within the default process templates, including system fields, see [Index of work item fields](../../boards/work-items/guidance/work-item-field.md).  
  
-   **WORKFLOW**: You use this element and its child elements to define the states, transitions, and reasons that compose the workflow of a type of work item. In addition to the following elements, you can use most of the elements listed under [FIELD](#index_b) to reference a field and apply conditions to it when a user changes its state. For more information, see [Change the workflow](change-workflow-wit.md).  
  
    > [!NOTE]  
    >Changes you make to the workflow can affect the operation of the Agile planning tools, the backlog and task board pages, and other tools. You might need to customize the process configuration. See [Process configuration](process-configuration-xml-element.md).  
  
-   **FORM**: You use this element and its child elements to specify the fields that appear on the work item form and the layout or design of the form. For more information, see [Design the work item form](design-work-item-form.md).  



<a name="index_witd"></a> 
##   Index of WITD XML elements  

 The following table provides an index to the reference topics for all child elements of the parent container element. Also, you can access the topic that provides detailed information and examples for each child element.  

> [!NOTE]    
> The new form elements (**FORM-WebLayout**) and its corresponding features are available from the web portal for TFS 2017 and later versions. To learn more about the new for, see [enable the new form](../process/new-work-item-experience.md)<br/> 
> - For users of Azure DevOps Services working with [hosted XML customization](../../organizations/settings/work/import-process/import-process.md), an admin is required to [enable the new form](../manage-new-form-rollout.md).<br/>
> - For TFS 2017 users, the new form is automatically available when you add projects to a new collection. For existing projects, an admin is required to [enable the new form](../process/new-work-item-experience.md).<br/>
> - For TFS 2015 users, the new form isn't available. Use the (**FORM-Layout**) elements to customize your WIT definitions. You must [upgrade to TFS 2017 or later version](https://visualstudio.microsoft.com/downloads) to access the new form.  


<table>
<tr>
<td>
<h3>WITD</h3>
- [DESCRIPTION](all-witd-xml-elements-reference.md)  
- [FIELDS](field-definition-element-reference.md) (Definition)  
- [FORM](all-form-xml-elements-reference.md)  
- [GLOBALISTS](define-global-lists.md)  
- [WITD](all-witd-xml-elements-reference.md)  
- [WORKFLOW](all-workflow-xml-elements-reference.md)  
- [WORKITEMTYPE](all-witd-xml-elements-reference.md) 
 
<h3 style="margin-bottom:8px">WORKFLOW</h3>
- [ACTION](automate-field-assignments-state-transition-reason.md)     
- [ACTIONS](automate-field-assignments-state-transition-reason.md)     
- [DEFAULTREASON](all-workflow-xml-elements-reference.md)     
- [FIELD (Workflow)](field-workflow-element-reference.md)     
- [FIELDS (Workflow)](define-default-copy-value-field.md)     
- [REASON](all-workflow-xml-elements-reference.md)     
- [REASONS](all-workflow-xml-elements-reference.md)     
- [STATE](all-workflow-xml-elements-reference.md)     
- [STATES](all-workflow-xml-elements-reference.md)     
- [TRANSITION](transition-xml-element.md)     
- [TRANSITIONS](all-workflow-xml-elements-reference.md)     
- [WORKFLOW](all-workflow-xml-elements-reference.md) 
</td>
<td>

<a name="index_b"></a> 
<h3 style="margin-bottom:8px">FIELD</h3>
- [ALLOWEDVALUES](define-pick-lists.md)  
- [ALLOWEXISTINGVALUE](define-pick-lists.md)  
- [CANNOTLOSEVALUE](apply-rule-work-item-field.md)  
- [COPY](define-default-copy-value-field.md)  
- [DEFAULT](define-default-copy-value-field.md)  
- [EMPTY](apply-rule-work-item-field.md)  
- [FIELD (Definition)](field-definition-element-reference.md)   
- [FROZEN](apply-rule-work-item-field.md)   
- [HELPTEXT](provide-help-text-hyperlinks-web-content-form.md)   
- [GLOBALISTS](define-global-lists.md)     
- [LISTITEM (Global Lists)](define-global-lists.md)     
- [LISTITEM (Pick Lists)](define-pick-lists.md)     
- [MATCH](apply-pattern-matching-to-string-field.md)     
- [NOTSAMEAS](apply-rule-work-item-field.md)     
- [PROHIBITEDVALUES](define-pick-lists.md)     
- [READONLY](apply-rule-work-item-field.md)     
- [REQUIRED](apply-rule-work-item-field.md)     
- [SERVERDEFAULT](define-default-copy-value-field.md)     
- [SUGGESTEDVALUES](define-pick-lists.md)     
- [VALIDUSER](apply-rule-work-item-field.md)     
- [WHEN](assign-conditional-based-values-and-rules.md)     
- [WHENNOT](assign-conditional-based-values-and-rules.md)     
- [WHENCHANGED](assign-conditional-based-values-and-rules.md)     
- [WHENNOTCHANGED](assign-conditional-based-values-and-rules.md)
</td>
<td> 
<h3 style="margin-bottom:8px">FORM-Layout</h3>
- [Column](all-form-xml-elements-reference.md)     
- [Content](webpagecontroloptions-xml-elements-reference.md)     
- [Control](control-xml-element-reference.md)     
- [ExternalLinkFilters](linkscontroloptions-elements.md)     
- [Filter](linkscontroloptions-elements.md)     
- [FORM](all-form-xml-elements-reference.md)     
- [Group](all-form-xml-elements-reference.md)     
- [LabelText](labeltext-and-text-xml-elements-reference.md)     
- [Layout](layout-xml-element-reference.md)     
- [Link (Label Text)](labeltext-and-text-xml-elements-reference.md)     
- [Link (Hyperlink)](link-param-xml-elements-reference.md)     
- [Link (Web page)](webpagecontroloptions-xml-elements-reference.md)     
- [LinkColumn](linkscontroloptions-elements.md)     
- [LinkColumns](linkscontroloptions-elements.md)     
- [LinksControlOptions](linkscontroloptions-elements.md)     
- [Param](link-param-xml-elements-reference.md)     
- [Splitter](all-form-xml-elements-reference.md)     
- [Tab](tab-xml-element-reference.md)     
- [TabGroup](all-form-xml-elements-reference.md)     
- [Text](labeltext-and-text-xml-elements-reference.md)      
- [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md)  
- [WorkItemLinkFilters](linkscontroloptions-elements.md)     
- [WorkItemTypeFilters](linkscontroloptions-elements.md)      
</td>
<td>
<h3 style="margin-bottom:8px">FORM-WebLayout</h3>
- [Column](linkscontroloptions-xml-elements.md)   
- [Columns](linkscontroloptions-xml-elements.md)   
- [Content](webpagecontroloptions-xml-elements-reference.md)
- [Control](weblayout-xml-elements.md)  
- [ControlContribution](weblayout-xml-elements.md)  
- [ExternalLinkFilter](linkscontroloptions-xml-elements.md)    
- [ExternalLinkFilters](apply-rule-work-item-field.md)  
- [Extension](weblayout-xml-elements.md)    
- [Extensions](weblayout-xml-elements.md)    
- [Filter](linkscontroloptions-elements.md)    
- [FORM](weblayout-xml-elements.md)   
- [Group](weblayout-xml-elements.md)   
- [GroupContribution](weblayout-xml-elements.md)   
- [Input](weblayout-xml-elements.md)    
- [Inputs](weblayout-xml-elements.md)    
- [LabelText](labeltext-and-text-xml-elements-reference.md)    
- [Layout](layout-xml-element-reference.md)    
- [Link (Hyperlink)](link-param-xml-elements-reference.md)    
- [Link (Label Text)](labeltext-and-text-xml-elements-reference.md)    
- [Link (Web page)](webpagecontroloptions-xml-elements-reference.md)    
- [LinkColumn](linkscontroloptions-elements.md)    
- [LinkColumns](linkscontroloptions-elements.md)    
- [LinkFilters](linkscontroloptions-xml-elements.md)   
- [LinksControlOptions](linkscontroloptions-elements.md)    
- [ListViewOptions](linkscontroloptions-xml-elements.md)   
- [Page](weblayout-xml-elements.md)    
- [PageContribution](weblayout-xml-elements.md)  
- [Param](link-param-xml-elements-reference.md)   
- [Section](weblayout-xml-elements.md)  
- [SystemControls](weblayout-xml-elements.md)     
- [Text](labeltext-and-text-xml-elements-reference.md)      
- [WebLayout](weblayout-xml-elements.md)  
- [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md)      
- [WorkItemLinkFilter](linkscontroloptions-xml-elements.md)   
- [WorkItemLinkFilters](linkscontroloptions-elements.md)    
- [WorkItemTypeFilters](linkscontroloptions-elements.md)    
</td>
</tr>
</table>
  
<a name="index_objects"></a> 

## Index of other work tracking object XML elements    

The following table provides an index to the reference topics for the elements used to define  categories, global lists, link types, and process configuration.  

<table>
<tr>
<td>
<h3>[Categories](categories-xml-element-reference.md)</h3>
- CATEGORIES    
- CATEGORY   
- DEFAULTWORKITEMTYPE  
- WORKITEMTYPE  

<h3 style="margin-bottom:8px">[Global lists](define-global-lists.md)</h3>
- GLOBALLISTS     
- GLOBALLIST   
- LISTITEM   

<h3 style="margin-bottom:8px">[Link types](link-type-element-reference.md)</h3>
- LinkTypes    
- LinkType    
</td>
<td>
<h3 style="margin-bottom:8px">[ProcessConfiguration](process-configuration-xml-element.md)</h3>
- AddPanel  
- BugWorkItems  
- Column  
- Columns  
- DayOfWeek  
- FeedbackRequestWorkItems  
- FeedbackResponseWorkItems  
- Field  
- Fields  
- PortfolioBacklog   
- PortfolioBacklogs  
- ProjectProcessConfiguration  
- Properties    
- Property   
- RequirementBacklog     
- State  
- States  
- TaskBacklog  
- TestPlanWorkItems  
- TestSuiteWorkItems  
- TypeField  
- TypeFields  
- TypeFieldValue  
- TypeFieldValues  
- Weekends  
- WorkItemColor  
- WorkItemColors  
</td>
</tr>
</table> 

<!---
##  Objects used to track work  

For descriptions of the 


|Object|Description||  
|------------|-----------------|-|  
|**Category**|[Use categories to group work item types](use-categories-to-group-work-item-types.md)<br /><br /> A category defines a group of work item types that track similar items of work but are referred to by different names. You can group one or more work item types in the same project into a category. You define categories to support running queries, generating reports, and setting default work item types in specific instances. You use the **In Group** operator to find work items that belong to a category. For more information, see [Track](../../boards/queries/query-operators-variables.md).||  
|**Field**|[Modify a field or add a custom field](../add-modify-field.md)<br /><br /> A field defines a type of data that is used to track work.  You use work item fields to track data for a work item type, to define the filter criteria for queries, and to generate reports. You must define each data element that is not built in, that the process template does not provide, and that you want to track, use to define the workflow, or appear on the form for a work item type. You define a data element using the **FIELD** element.<br /><br /> Each field is defined by one or more attributes, which include what type of data it can contain, whether it is used in reporting, and whether it is indexed. You can also specify optional elements that restrict, auto-populate, or specify conditions for the values to which users can set the field by using a work item form.<br /><br /> You can add a field, remove it, or customize how you use it to track data.||  
|**Global list**|[GLOBALLIST XML element reference](define-global-lists.md)<br /><br /> A global list defines a list of values, when is known as a pick list, that you can use across work item types to control the value or values to which users can set a field in a work item. You use global lists to quickly update the contents of pick lists that are used for many types of work items.<br /><br /> You can define global lists within a type of work item type, but this practice is not recommended because the definition of the work item type will overwrite changes that are defined elsewhere if that definition is imported. A best practice is to define and import global lists through a definition file for global lists or global workflow.||  
|**Global workflow**|[Customize global workflow](customize-global-workflow.md)<br /><br /> A global workflow defines fields and global lists that are available to all types of work items for either a project or a collection.||  
|**Link type**|[Define a custom link type](link-type-element-reference.md)<br /><br /> A link type defines the rules and restrictions that control the relationships that users can make between work items. In addition to the built-in types of links, you can create link types to support your project-tracking requirements. Before you start to create links between work items, you should analyze how you might use links to plan your project and track the status of work items.||  
|**Process configuration**|[Process configuration](process-configuration-xml-element.md)<br /><br /> Process configuration elements control the layout and functions of the backlog and task board Agile tools provided with the web portal.<br /><br /> If your project was created using a process template other than those provided by Visual Studio ALM or you have customized the type definitions for work items, you may need to customize the definition files that support process configuration. Also, if you have customized or added types of work items and want to use those fields, then you will want to determine how to modify the process configuration elements to match other objects that you have customized.||  
|**Work item type**|[Modify or add a custom work item type](../add-modify-wit.md)<br /><br /> A type of work item defines an object, such as a bug, a requirement, or a risk, that is used to track work for a project. A work item type defines the fields, workflow, and form for tracking work.||

-->

## Related articles   
- [Customize your work tracking experience](../customize-work.md) 
- [All FIELD XML elements](all-field-xml-elements-reference.md)
- [All FORM XML elements](all-form-xml-elements-reference.md)
- [All WITD elements](all-witd-xml-elements-reference.md)
- [All WORKFLOW XML elements](all-workflow-xml-elements-reference.md) 
- [witAdmin: Customize objects for tracking work](../witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)
