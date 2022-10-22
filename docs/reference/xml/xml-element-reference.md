---
title: XML element index
titleSuffix: Azure DevOps & TFS
description: Index of XML elements used to customize the work tracking experience for Hosted XML and On-premises XML process models for Team Foundation Server (TFS)
ms.service: azure-devops-boards
ms.custom: process
ms.assetid: f65e3ae0-817a-413e-b5c3-0ebadc3ba944
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '< azure-devops' 
ms.date: 04/04/2017
---

# XML element reference

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

You can customize your project to support specific processes and practices that your team uses, and to design your workflow, work item forms, and data fields. Customization requires modifying one or more XML definition files. Each file corresponds to a work item tracking object. You can look up the syntax structure of each XML element from the topics provided in this section.  

 This illustration shows that you can create or customize eight types of objects. For projects, you can customize categories, work item types, and process configuration. For project collections, you can customize global lists, link types, and work item fields. You can customize global workflow for a project or for a project collection. For a description of these objects and other customization options, see [Agile glossary](../../boards/work-items/agile-glossary.md) and [Customize your work tracking experience](../customize-work.md).  

 ![Work Item Tracking Objects](media/pnt_wit_objects.png "PNT_WIT_Objects")  

By using the index of elements in this topic, you can look up the syntax structure and find examples of how to use each element of the schema type definition for work item tracking. Elements are organized alphabetically and by the following four major groups:  

-   **WITD**: The root element of the definition schema for types of work items.  

-   **FIELD** (Definition): You use this element and its child elements to define a work item field and to specify the rules and conditions that apply to it. See [Modify a field or add a custom field](../add-modify-field.md). To access descriptions for all fields defined within the default process templates, including system fields, see [Index of work item fields](../../boards/work-items/guidance/work-item-field.md).  

-   **WORKFLOW**: You use this element and its child elements to define the states, transitions, and reasons that compose the workflow of a type of work item. In addition to the following elements, you can use most of the elements listed under [FIELD](#index_b) to reference a field and apply conditions to it when a user changes its state. For more information, see [Change the workflow](change-workflow-wit.md).  

    > [!NOTE]  
    >Changes you make to the workflow can affect the operation of the Agile planning tools, the backlog and task board pages, and other tools. You might need to customize the process configuration. See [Process configuration](process-configuration-xml-element.md).  

-   **FORM**: You use this element and its child elements to specify the fields that appear on the work item form and the layout or design of the form. For more information, see [Design the work item form](/previous-versions/azure/devops/reference/xml/design-work-item-form?view=tfs-2017&preserve-view=true).  



<a name="index_witd"></a> 
##   Index of WITD XML elements  

 The following table provides an index to the reference topics for all child elements of the parent container element. Also, you can access the topic that provides detailed information and examples for each child element.  

> [!NOTE]    
> The new form elements (**FORM-WebLayout**) and its corresponding features are available from the web portal for TFS 2017 and later versions. To learn more about the new for, see [enable the new form](../process/new-work-item-experience.md)<br/> 
> - For users of Azure DevOps Services working with [hosted XML customization](../../organizations/settings/work/import-process/import-process.md), an admin is required to [enable the new form](/previous-versions/azure/devops/reference/manage-new-form-rollout?view=tfs-2015&preserve-view=true).<br/>
> - For TFS 2017 users, the new form is automatically available when you add projects to a new collection. For existing projects, an admin is required to [enable the new form](../process/new-work-item-experience.md).<br/>
> - For TFS 2015 users, the new form isn't available. Use the (**FORM-Layout**) elements to customize your WIT definitions. You must [upgrade to TFS 2017 or later version](https://visualstudio.microsoft.com/downloads) to access the new form.  


:::row:::
   :::column span="1":::
   
   ### WITD  

   - [DESCRIPTION](all-witd-xml-elements-reference.md)  
   - [FIELDS](field-definition-element-reference.md) (Definition)  
   - [FORM](all-form-xml-elements-reference.md)  
   - [GLOBALISTS](define-global-lists.md)  
   - [WITD](all-witd-xml-elements-reference.md)  
   - [WORKFLOW](all-workflow-xml-elements-reference.md)  
   - [WORKITEMTYPE](all-witd-xml-elements-reference.md) 

   ### WORKFLOW  

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
   :::column-end:::
   :::column span="1":::
   
   <a name="index_b"></a>

   ### FIELD   

   - [ALLOWEDVALUES](define-pick-lists.md)  
   - [ALLOWEXISTINGVALUE](define-pick-lists.md)  
   - [CANNOTLOSEVALUE](../../organizations/settings/work/rule-reference.md)  
   - [COPY](define-default-copy-value-field.md)  
   - [DEFAULT](define-default-copy-value-field.md)  
   - [EMPTY](../../organizations/settings/work/rule-reference.md)  
   - [FIELD (Definition)](field-definition-element-reference.md)  
   - [FROZEN](../../organizations/settings/work/rule-reference.md)  
   - [HELPTEXT](provide-help-text-hyperlinks-web-content-form.md)  
   - [GLOBALISTS](define-global-lists.md)  
   - [LISTITEM (Global Lists)](define-global-lists.md)  
   - [LISTITEM (Pick Lists)](define-pick-lists.md)  
   - [MATCH](apply-pattern-matching-to-string-field.md)  
   - [NOTSAMEAS](../../organizations/settings/work/rule-reference.md)  
   - [PROHIBITEDVALUES](define-pick-lists.md)  
   - [READONLY](../../organizations/settings/work/rule-reference.md)  
   - [REQUIRED](../../organizations/settings/work/rule-reference.md)  
   - [SERVERDEFAULT](define-default-copy-value-field.md)  
   - [SUGGESTEDVALUES](define-pick-lists.md)  
   - [VALIDUSER](../../organizations/settings/work/rule-reference.md)  
   - [WHEN](assign-conditional-based-values-and-rules.md)  
   - [WHENNOT](assign-conditional-based-values-and-rules.md)  
   - [WHENCHANGED](assign-conditional-based-values-and-rules.md)  
   - [WHENNOTCHANGED](assign-conditional-based-values-and-rules.md)
   :::column-end:::
   :::column span="1":::
    
   ### FORM-Layout   

   - [Column](all-form-xml-elements-reference.md)  
   - [Content](webpagecontroloptions-xml-elements-reference.md)  
   - [Control](/previous-versions/azure/devops/reference/xml/control-xml-element-reference?view=tfs-2015&preserve-view=true)  
   - [ExternalLinkFilters](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [Filter](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [FORM](all-form-xml-elements-reference.md)  
   - [Group](all-form-xml-elements-reference.md)  
   - [LabelText](labeltext-and-text-xml-elements-reference.md)  
   - [Layout](/previous-versions/azure/devops/reference/xml/layout-xml-element-reference?view=tfs-2015&preserve-view=true)  
   - [Link (Label Text)](labeltext-and-text-xml-elements-reference.md)  
   - [Link (Hyperlink)](link-param-xml-elements-reference.md)  
   - [Link (Web page)](webpagecontroloptions-xml-elements-reference.md)  
   - [LinkColumn](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [LinkColumns](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [LinksControlOptions](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [Param](link-param-xml-elements-reference.md)  
   - [Splitter](all-form-xml-elements-reference.md)  
   - [Tab](/previous-versions/azure/devops/reference/xml/tab-xml-element-reference?view=tfs-2015&preserve-view=true)  
   - [TabGroup](all-form-xml-elements-reference.md)  
   - [Text](labeltext-and-text-xml-elements-reference.md)  
   - [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md)  
   - [WorkItemLinkFilters](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [WorkItemTypeFilters](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   :::column-end:::
   :::column span="1":::
   
   ### FORM-WebLayout   

   - [Column](linkscontroloptions-xml-elements.md)  
   - [Columns](linkscontroloptions-xml-elements.md)  
   - [Content](webpagecontroloptions-xml-elements-reference.md)
   - [Control](weblayout-xml-elements.md)  
   - [ControlContribution](weblayout-xml-elements.md)  
   - [ExternalLinkFilter](linkscontroloptions-xml-elements.md)  
   - [ExternalLinkFilters](../../organizations/settings/work/rule-reference.md)  
   - [Extension](weblayout-xml-elements.md)  - [Extensions](weblayout-xml-elements.md)  
   - [Filter](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [FORM](weblayout-xml-elements.md)  
   - [Group](weblayout-xml-elements.md)  
   - [GroupContribution](weblayout-xml-elements.md)  
   - [Input](weblayout-xml-elements.md)  
   - [Inputs](weblayout-xml-elements.md)  
   - [LabelText](labeltext-and-text-xml-elements-reference.md)  
   - [Layout](/previous-versions/azure/devops/reference/xml/layout-xml-element-reference?view=tfs-2015&preserve-view=true)  
   - [Link (Hyperlink)](link-param-xml-elements-reference.md)  
   - [Link (Label Text)](labeltext-and-text-xml-elements-reference.md)  
   - [Link (Web page)](webpagecontroloptions-xml-elements-reference.md)  
   - [LinkColumn](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [LinkColumns](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [LinkFilters](linkscontroloptions-xml-elements.md)  
   - [LinksControlOptions](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
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
   - [WorkItemLinkFilters](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   - [WorkItemTypeFilters](/previous-versions/azure/devops/reference/xml/linkscontroloptions-elements?view=tfs-2017&preserve-view=true)  
   :::column-end:::
:::row-end:::


<a name="index_objects"></a> 

## Index of other work tracking object XML elements    

The following table provides an index to the reference topics for the elements used to define  categories, global lists, link types, and process configuration.  

:::row:::
   :::column span="1":::
   
   ### [Categories](categories-xml-element-reference.md)  

   - CATEGORIES  
   - CATEGORY  
   - DEFAULTWORKITEMTYPE  
   - WORKITEMTYPE  
   
   ### [Global lists](define-global-lists.md)   

   - GLOBALLISTS  
   - GLOBALLIST  
   - LISTITEM  
   
   ### [Link types](link-type-element-reference.md)   

   - LinkTypes  
   - LinkType  
   :::column-end:::
   :::column span="1":::
   
   ### [ProcessConfiguration](process-configuration-xml-element.md)   
   
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
   :::column-end:::
:::row-end:::

<!---
##  Objects used to track work  

For descriptions of the 


|Object|Description||  
|------------|-----------------|-|  
|**Category**|[Use categories to group work item types](use-categories-to-group-work-item-types.md)<br /><br /> A category defines a group of work item types that track similar items of work but are referred to by different names. You can group one or more work item types in the same project into a category. You define categories to support running queries, generating reports, and setting default work item types in specific instances. You use the **In Group** operator to find work items that belong to a category. For more information, see [Track](../../boards/queries/query-operators-variables.md).||  
|**Field**|[Modify a field or add a custom field](../add-modify-field.md)<br /><br /> A field defines a type of data that is used to track work.  You use work item fields to track data for a work item type, to define the filter criteria for queries, and to generate reports. You must define each data element that is not built-in, that the process template does not provide, and that you want to track, use to define the workflow, or appear on the form for a work item type. You define a data element using the **FIELD** element.<br /><br /> Each field is defined by one or more attributes, which include what type of data it can contain, whether it is used in reporting, and whether it is indexed. You can also specify optional elements that restrict, auto-populate, or specify conditions for the values to which users can set the field by using a work item form.<br /><br /> You can add a field, remove it, or customize how you use it to track data.||  
|**Global list**|[GLOBALLIST XML element reference](define-global-lists.md)<br /><br /> A global list defines a list of values, when is known as a pick list, that you can use across work item types to control the value or values to which users can set a field in a work item. You use global lists to quickly update the contents of pick lists that are used for many types of work items.<br /><br /> You can define global lists within a type of work item type, but this practice is not recommended because the definition of the work item type will overwrite changes that are defined elsewhere if that definition is imported. A best practice is to define and import global lists through a definition file for global lists or global workflow.||  
|**Global workflow**|[Customize global workflow](customize-global-workflow.md)<br /><br /> A global workflow defines fields and global lists that are available to all types of work items for either a project or a collection.||  
|**Link type**|[Define a custom link type](link-type-element-reference.md)<br /><br /> A link type defines the rules and restrictions that control the relationships that users can make between work items. In addition to the built-in types of links, you can create link types to support your project-tracking requirements. Before you start to create links between work items, you should analyze how you might use links to plan your project and track the status of work items.||  
|**Process configuration**|[Process configuration](process-configuration-xml-element.md)<br /><br /> Process configuration elements control the layout and functions of the backlog and task board Agile tools provided with the web portal.<br /><br /> If your project was created using a process template other than those provided by Azure DevOps or you have customized the type definitions for work items, you may need to customize the definition files that support process configuration. Also, if you have customized or added types of work items and want to use those fields, then you will want to determine how to modify the process configuration elements to match other objects that you have customized.||  
|**Work item type**|[Modify or add a custom work item type](../add-modify-wit.md)<br /><br /> A type of work item defines an object, such as a bug, a requirement, or a risk, that is used to track work for a project. A work item type defines the fields, workflow, and form for tracking work.||

-->

## Related articles  

- [Customize your work tracking experience](../customize-work.md) 
- [All FIELD XML elements](all-field-xml-elements-reference.md)
- [All FORM XML elements](all-form-xml-elements-reference.md)
- [All WITD elements](all-witd-xml-elements-reference.md)
- [All WORKFLOW XML elements](all-workflow-xml-elements-reference.md) 
- [witAdmin: Customize objects for tracking work](../witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)
