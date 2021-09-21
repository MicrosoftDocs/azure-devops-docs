---
title: All WITD XML elements reference
titleSuffix: Azure DevOps & TFS
description: Index to XML syntax elements and main attributes for work item tracking for Team Foundation Server 
ms.technology: devops-agile
ms.custom: process
ms.assetid: d125917c-9e67-49e6-8274-8b169e76639a
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '< azure-devops'
ms.date: 02/14/2017
---

# All WITD XML elements reference

[!INCLUDE [temp](../../includes/customization-phase-0-and-1-plus-version-header.md)] 

You can customize an existing work item type (WIT) or create a WIT to meet your project tracking requirements. A WIT defines the fields, rules, and workflow states and transitions for an item of work that will be tracked for a project, such as a bug, requirement, or risk. You [create a project](../../organizations/projects/create-project.md) either in Azure DevOps Services or an on-premises Team Foundation Server (TFS).  

 The root element in each definition of a WIT is the `WITD` element, which must have only one `WORKITEMTYPE` element defined. The name of each WIT must be unique in a project, and each type name must be no more than 128 Unicode characters long.  

 To customize or create a WIT definition, you modify the type definition XML file. WITs are scoped to a project within a project collection.  

<a name="SyntaxStructure"></a> 

##  WITD syntax structure  

 The following example shows the high-level structure of a WIT definition.  

> [!div class="tabbedCodeSnippets"]
> ```XML 
> <witd:WITD application="Work item type editor" version="1.0" xmlns:witd="http://schemas.microsoft.com/VisualStudio/2008/workitemtracking/typedef">  
>        <WORKITEMTYPE name="bug" refname="Microsoft.VSTS.WorkItemTypes.Bug">  
>           <DESCRIPTION> Describes a divergence between required and actual behavior, and tracks the work done to correct the defect and verify the correction.</DESCRIPTION>  
>           <GLOBALLISTS> . . . </GLOBALLISTS>  
>           <FIELDS> . . . </FIELDS>  
>           <WORKFLOW> . . . </WORKFLOW>  
>           <FORM> . . . </FORM>  
>        </WORKITEMTYPE>  
> </witd:WITD>  
> ```  

<a name="ChildElements"></a> 

## WITD child elements  

The structural elements used in the previous example are described in the following table:  


:::row:::
   :::column span="1":::
   **Element**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **WITD**

   :::column-end:::
   :::column span="1":::
   The complete WIT definition is wrapped by the tag **WITD**. You can use any name for the application name. The version identifies the WIT schema that may change from one release to the next. Use "1.0".

   ```
   <witd:WITD application="Work item type editor" version="1.0" >  
      <WORKITEMTYPE>   
      . . .  
   </WORKITEMTYPE>  
   </witd:WITD>
   ```
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **WORKITEMTYPE**

   :::column-end:::
   :::column span="1":::
   Names of WITs must be unique in a specific project. At run time, you use the name specified by this element. For example, the name can appear as a menu option. In this case, a user could choose **Bug** on the **New Work Item** menu. 

   ```
   <WORKITEMTYPE name="WorkItemTypeName" refname="WITReferenceName" >  
      <DESCRIPTION>Text</DESCRIPTION>  
      <GLOBALLISTS> . . .</GLOBALLISTS>  
      <FIELDS> . . . </FIELDS>  
      <WORKFLOW> . . . </WORKFLOW>  
      <FORM> . . .</FORM>  
   </WORKITEMTYPE>
   ```
   Friendly name (*name*): Appears in the drop-down menus of work item queries. The friendly name must be unique across all WIT names that are defined within a project.  Specify a name no longer than 128 Unicode characters that uses alphanumeric, underscore, and hyphen characters.  

   Reference name (*refname*): Specify a name no longer than 70 Unicode characters that uses alphanumeric, underscore, and hyphen characters. The reference name must contain at least one period (.), but no period can appear at the start or end of a name. Also, the reference name cannot start with a number or an underscore, and it cannot have multiple consecutive hyphens, such as (--).  
   
   Do not specify a name that overlaps with the reserved System. *XXX* and Microsoft. *XXX* namespaces. 

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **DESCRIPTION**

   :::column-end:::
   :::column span="1":::
   Specifies a string that describes the type of work item that you are defining. The description should help any user who is customizing the WIT.

   > [!NOTE]:
   > You can view the description only in the XML definition. You cannot view the description anywhere in the user interface, and it has no relationship to the field **System.Definition**.
   
   ```
   <DESCRIPTION> DescriptionOfWorkItemType</DESCRIPTION>
   ```
   You specify a string of text that describes the type of work item that you are defining. 

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **GLOBALLISTS**
   :::column-end:::
   :::column span="1":::
   Contains the global list definitions that are used by the WIT. You use global lists to share pick lists among multiple WITs defined for a project collection. [Define global lists](define-global-lists.md) to support cross-group collaboration and ease of maintenance. 

   ```
   <GLOBALLIST name="globalListName">   
   <LISTITEM> . . . </LISTITEM>  
   </GLOBALLIST>  
   ```
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **FIELDS**

   :::column-end:::
   :::column span="1":::
   Defines the fields used to track data for the WIT. Within the **FIELDS** element, you [define all the fields](field-definition-element-reference.md) that you want to use to track data. This includes fields that you will use to run queries and generate reports. 

   ```
   <FIELDS>   
      <FIELD> . . . </FIELD>  
   </FIELDS>
   ```
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **FORM**
   :::column-end:::
   :::column span="1":::
   Specifies the  [design of the work item form](design-work-item-form.md) by defining the fields and controls that appear on the form and in what order.

   **For TFS 2015 and earlier versions**, the **FORM** element contains **Layout**, **Control**, **Group**, **TAB**, **TabGroup**, **Splitter**, and other elements. 

   ```
   <FORM>   
   <Layout> . . . </Layout>  
   </FORM>  
   ```
   **For the Hosted XML and On-premises XML (TFS 2017 and later versions) process models**, the **FORM** element contains **WebLayout**, **Control**, **SystemControls**, **Section**, **Page**,  and other elements. 

   ```
   <WebLayout> 
         <Page>  
             <Section>  
                 <Group>  
                     <Control> . . . </Control>
                     <Control> . . . </Control>
                 </Group>
             </Section>
         </Page>
   . . .
   </WebLayout>
   ```
   > [!IMPORTANT]: 
   > For the Hosted XML and On-premises XML process models (TFS 2017 and later versions), see [WebLayout and Control elements](weblayout-xml-elements.md). 
   
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **WORKFLOW**
   :::column-end:::
   :::column span="1":::
   Defines the workflow elements that help track the work item status as it moves from a new state to closed or done. This element contains the set of **STATE** and **TRANSITION** elements that define the workflow. The workflow is a set of valid transitions from one state to another and the specific conditions associated with each transition.

   ```
   <WORKFLOW>  
         <STATES> . . . </STATES>  
         <TRANSITIONS> . . . </TRANSITIONS>  
   </WORKFLOW>  
   ```
   :::column-end:::
:::row-end:::


<a name="PredefinedWITs"></a> 

## Process template work item types  

Upon installing or upgrading an instance of an on-premises TFS, the [default process templates](../../boards/work-items/guidance/choose-process.md) are downloaded to the following directory:  

**For TFS 2017**: 
```  
%programfiles%/TFS 15.0/Tools/Deploy/ProcessTemplateManagerFiles/1033
```  

**For TFS 2015**: 
```  
%programfiles%/TFS 14.0/Tools/Deploy/ProcessTemplateManagerFiles/1033
```  

WIT definition files are stored in the WorkItem Tracking\TypeDefinitions folder.  

To learn how to create or customize a WIT, see [Modify or add a custom work item type](../add-modify-wit.md).  

## Related articles 

-  [Customize the work tracking experience](../customize-work.md)  
-  [witAdmin: Customize and manage objects for tracking work](../witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)  
-  [Naming restrictions, Work item tracking objects](../../organizations/settings/naming-restrictions.md)