---
title: Define link controls, restrict link relationships 
titleSuffix: TFS
description: Controls and restrict the link relationships that the team members can view and make from that control to include only links to other features - Team Foundation Server (TFS) 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 994c90ad-e61c-41ca-ae78-96fdb59c7312
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 02/14/2017
---

# Define link controls to restrict link relationships

<b>TFS 2017 | TFS 2015 | TFS 2013</b>

> [!IMPORTANT]  
>This topic applies to project customization for the On-premises XML process model. For the Hosted XML process model, see [LinksControlOptions XML elements](linkscontroloptions-xml-elements.md). (Customizing the link controls isn't a supported feature For the Inheritance process model.)  
>
>For an overview of process models, see [Customize your work tracking experience](../customize-work.md).  

You can control which work items link to each other by customizing the work form. Specifically, you can control the types of links and work items that users can view and add in a links control. For example, you may want to add a tab to your form that helps you manage dependent features. On that tab, you can add the links control and restrict the link relationships that team members can view and make from that control to include only links to other features.  
  
You use the `Control` element `LinksControl``Type` attribute to enable users to create link relationships between work items and other objects in the Team Foundation database. You can then use the `LinksControlOptions` child elements to define the options for controlling what links team members can add to a work item and to what work item types or objects they can link. Also, you can define the default columns that you want to appear for the list of links in that control.  
  
For a summary of the link restrictions that are defined within the process templates, see:
- For TFS 2017 and later versions, see [LinksControlOptions XML elements (Web form)](linkscontroloptions-xml-elements.md) 
- For TFS 2015 and earlier versions, see [LinksControlOptions XML elements (Client and web, TFS 2015)](linkscontroloptions-elements.md). 
 
  
<a name="LinksControl"></a> 
## Specify the LinksControl  
 You use the `LinksControl` option to enable users to add, view, and manage link relationships in a work item form. By using this control, you can open, edit, add, and remove links.  
  
 You can customize a form so that one tab displays only parent and child links and another tab displays all other link types. In the following example, a tab that is labeled "All Links" is created that team members can use to add all link types. Also, the default columns that appear for the links display are ID, Work Item Type, Title, Assigned To, State, and the Link Comment field.  
 
**Links control** 
 
 ![Example of links control added to a work item form](_img/wit_ss_linkscontrol.png "WIT_SS_LinksControl")  
 
  
```xml
<Tab Label="All Links">  
      <Control Type="LinksControl" Name="All" >  
      <LinksControlOptions>  
         <LinkColumns>  
               <LinkColumn RefName="System.ID" />  
               <LinkColumn RefName="System.WorkItemType" />  
               <LinkColumn RefName="System.Title" />  
               <LinkColumn RefName="System.AssignedTo" />  
               <LinkColumn RefName="System.State" />  
               <LinkColumn LinkAttribute="System.Links.Comment" />  
         </LinkColumns>  
      </LinksControlOptions>  
      </Control>  
</Tab>  
```   
  
<a name="ControllingLinks"></a> 
## Control link relationships  
When you add a link control to a work item form, you can specify filters that restrict the types of links and work items that team members can add when they use the control. The following table describes the optional child elements that control link relationships.  
  
|Element|Description|  
|-------------|-----------------|  
|`WorkItemLinkFilters`|Restricts the types of links that can be used to link to work items.|  
|`ExternalLinkFilters`|Restricts the types of links that can be used to link to an object that is not a work item type, such as a changeset, hyperlink, or version control item.|  
|`WorkItemTypeFilters`|Restricts the types of work items to which a user can link, and the projects in which those work items are defined.|  
|`Filter`|Specifies the link types or work item types that you want to include or exclude.|  
    
  
##  <a name="WILinks"></a> Restricting Link Relationships to Work Items  
 You use the `WorkItemLinkFilters` and the `Filter` child elements to define which link types the links control should include or exclude. You use this element to restrict the types of links that can be selected by the links control to form relationships to work items that are defined in the same project. The syntax for these elements is as follows.  
  
```xml
<WorkItemLinkFilters FilterType="include | exclude | includeAll | excludeAll">  
      <Filter LinkType="linkTypeRefName" FilterOn="reversename | forwardname" />  
</WorkItemLinkFilters>  
```  
  
|Attribute|Description|  
|---------------|-----------------|  
|`FilterType`|Required `WorkItemLinkFilters` attribute.<br /><br /> Defines the method that is used to filter the set of link types that is provided in the set of `Filter` elements. You can use the following valid values:<br /><br /> -   `exclude`: Use to prevent the creation of links from those link types that are listed in the `Filter` elements.<br />-   `excludeAll`: Use to disallow all link types.<br />-   `include`: Use to allow only those link types that are listed in the `Filter` elements.<br />-   `includeAll`: Use to allow the creation of links from all link types.|  
|`LinkType`|Required `Filter` attribute.<br /><br /> Specifies the reference name for a type of link. For more information, see [LinksControlOptions](linkscontroloptions-xml-elements.md).|  
|`FilterOn`|Optional `Filter` attribute.<br /><br /> Specifies the type of filter to apply to the link type. You can use the following valid values:<br /><br /> -   `forwardname`: Use to filter on the forward name that is defined for a type of link.<br />-   `reversename`: Use to filter on the reverse name that is defined for a type of link.<br /><br /> If unspecified, both the forward and reverse names are used to filter the link type. If the link type topology is Network, the forward and reverse names are the same. For more information, see [LinksControlOptions](linkscontroloptions-xml-elements.md).|  
  
 **Example: Excluding Two Work Item Link Types**  
  
 You can define a links control that allows link relationships for all link types except a custom requirement link type and the system hierarchy link type by using the following code example.  
  
```xml
<Control Type="LinksControl" Name="UniqueName">  
      <LinksControlOptions>  
      <WorkItemLinkFilters FilterType="exclude">  
         <Filter LinkType="MyLinks.LinkTypes.Requirement" />   
         <Filter LinkType="System.LinkTypes.Hierarchy" />   
      </WorkItemLinkFilters>  
      <ExternalLinkFilters FilterType="excludeAll" />   
      </LinksControlOptions>  
. . .  
</Control>  
```   
  
<a name="NonWILinks"></a> 
## Restrict link relationships to external objects (not work items)   
 You use the `ExternalLinkFilters` and the `Filter` child elements to define which link types to items that are external to the project the links control should include or exclude. These objects correspond to changesets, hyperlinks, commits, and other objects. The syntax for these elements is as follows.  
  
```xml
<ExternalLinkFilters FilterType="include | exclude | includeAll | excludeAll">  
      <Filter LinkType="externalLinkName" />  
</ExternalLinkFilters>  
```  
  
|Attribute|Description|  
|---------------|-----------------|  
|`FilterType`|Optional `ExternalLinkFilters` attribute.<br /><br /> Defines the method that is used to filter the set of link types that are provided in the set of `Filter` elements. You can use the following valid values:<br /><br /> -   `exclude`: Use to disallow the creation of links from those link types that are listed in the `Filter` elements.<br />-   `excludeAll`: Use to disallow all link types.<br />-   `include`: Use to allow only those link types that are listed in the `Filter` elements.<br />-   `includeAll`: Use to allow the creation of links from all link types.<br /><br /> If unspecified, all links to external work items are excluded.|  
|`LinkType`|Required `Filter` attribute.<br /><br /> Specifies the reference name for a type of link to exclude or include. You can specify the following link types:<br /><br /> -   Fixed in Changeset<br />-   Result Attachment<br />-   Source Code File<br />-   Test Result<br />-   Workitem Hyperlink|  
  
 **Example: Exclude All Non-Work Item Links**  
  
 The following example defines a links control that includes all link types to work items, such as related and parent/child, but excludes link types to non-work items, such as changesets, hyperlinks, and test results.  
  
```xml
<Control Type="LinksControl" Name="UniqueName">  
      <LinksControlOptions>  
      <WorkItemLinkFilters FilterType="includeAll" />   
      <ExternalLinkFilters FilterType="excludeAll" />   
      </LinksControlOptions>  
</Control>  
```  
  
 The following example defines a link control that allows users to specify only the changeset link type and link only to changesets.  
  
```xml
<Control Type="LinksControl" Name="UniqueName">  
      <LinksControlOptions>  
      <WorkItemLinkFilters FilterType="excludeAll"/>  
      <ExternalLinkFilters FilterType="include" />   
         <Filter LinkType="Fixed in Changeset" />  
      </ExternalLinkFilters>   
 </LinksControlOptions>  
. . .  
</Control>  
  
```   
  
##  <a name="WorkItemTypes"></a> Restricting Link Relationships to Types of Work Items  
 You use the `WorkItemTypeFilters` and `Filter` child elements to restrict the types of work items to which a links control can link. You can restrict link relationships to the project or by work item type. The syntax for these elements is as follows.  
  
```xml
<WorkItemTypeFilters Scope=" project | all" FilterType=" include | exclude | includeAll" >  
      <Filter WorkItemType="workItemTypeReferenceName" />  
</WorkItemTypeFilters>  
```  
  
|Attribute|Description|  
|---------------|-----------------|  
|`Scope`|Optional `WorkItemTypeFilters` attribute.<br /><br /> Defines the scope of the filter that is applied to the set of work item types that is provided in the set of `Filter` elements. You can use the following valid values:<br /><br /> -   `all`: Use to allow the creation of links to all work item types that are specified in the `Filter` elements.<br />-   `project`: Use to allow the creation of links only to those work item types that are defined for the current project.<br /><br /> If unspecified, links to all work item types are allowed.|  
|`FilterType`|Required `WorkItemTypeFilters` attribute.<br /><br /> Defines the method that is used to filter the set of link types that is provided in the set of `Filter` elements. You can use the following valid values:<br /><br /> -   `exclude`: Use to disallow the work item types that are listed in the `Filter` elements.<br />-   `excludeAll`: Use to disallow all work item types.<br />-   `include`: Use to allow the work item types that are listed in the `Filter` elements.<br />-   `includeAll`: Use to allow all work item types.|  
|`WorkItemType`|Required `Filter` attribute.<br /><br /> Specifies the reference name for a work item type.|  
  
 **Example: Limiting Link Relations to Task Work Items**  
  
 The following example defines a links control that allows only hierarchical relationships to be formed to tasks that are defined in the project.  
  
```xml
<Control Type="LinksControl" Name="UniqueName">  
      <LinksControlOptions>  
      <WorkItemLinkFilters FilterType="include">  
         <Filter LinkType="System.LinkTypes.Hierarchy" />  
      </WorkItemLinkFilters>  
      <ExternalLinkFilters FilterType="excludeAll"/>  
      <WorkItemTypeFilters Scope ="project" FilterType="include" />  
         <Filter WorkItemType="Task" />  
      </WorkItemTypeFilters>   
      </LinksControlOptions>  
. . .  
</Control>  
  
```    
  
##  <a name="DefaultColumns"></a> Specifying the Default Columns to Display  
 You use the `LinkColumns` and `LinkColumn` child elements to specify the default columns to display in the links control. You can specify either the reference name for a work item field or a link attribute. The syntax for these elements is as follows.  
  
```xml
<LinkColumns>  
      <LinkColumn RefName="reference name" | LinkAttribute=" link attribute name" />  
</LinkColumns>  
```  
  
 The order in which the elements are listed defines the order in which the column fields are displayed in the work item form. For a list of reference names and link attributes, see [Work item field index](../../boards/work-items/guidance/work-item-field.md). The following syntax defines the display of four columns: ID, State, Title, and the link attribute Comment.  
  
```xml
<Control Type="LinksControl">  
. . .  
      <LinksControlOptions>  
      <LinkColumns>  
         <LinkColumn RefName="System.ID" />  
         <LinkColumn RefName="System.State" />  
         <LinkColumn RefName="System.Title" />  
         <LinkColumn LinkAttribute="System.Links.Comment" />  
      </LinkColumns>  
      </LinksControlOptions>  
</Control>  
  
```    
  
## Related articles 
-  [Link controls, restrictions, and fields](../../boards/queries/linking-attachments.md)   
-  [LinksControlOptions XML element reference](linkscontroloptions-xml-elements.md)    
