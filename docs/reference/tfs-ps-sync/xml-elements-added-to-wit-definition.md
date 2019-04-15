---
title: XML elements added to the definition for the work item type
titleSuffix: TFS
description: Show the XML elements added to the definition for the work item type when using Team Foundation Server & Project Server integration
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 7f58b123-18df-4382-895e-01f7c9e366f8
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---


# XML elements added to the definition for the work item type
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> You can manually update the definition of a work item type to support synchronization between Visual Studio Team Foundation Server and Microsoft Project Server. On occasion, a problem can occur when you map a work item type and Team Foundation Server does not add the required XML elements to the type definition. This problem can occur when the work item type does not include a `TabGroup` element, or changes to the type prohibit the addition of the necessary elements. In these situations, you can, as this topic describes, manually add the necessary elements to the type definition. These elements specify the fields and form controls that support the addition of the **Project Server** tab to the work item form, as the following illustration shows. For more information, see [Project Server fields that support data synchronization](project-server-fields-added-to-tfs.md).  
  
 ![Project Server Tab default fields](_img/pstfs_projectservertab.png "PSTFS_ProjectServerTab")  
  
<a name="manually_update"></a>   
##  To manually update a type definition to display project server fields  
 To manually add the **Project Server** tab to a work item type, perform the following sequence of steps:  
  
1.  Export the type definition.  
  
2.  Add the required `FIELD` elements to the `FIELDS` section of the type definition.  
  
3.  Add the `Tab` elements to the `FORM` section and within the `TabGroup` element.  
  
4.  Import the type definition.  
  
 For more information, see [Export and import work item types](../witadmin/witadmin-import-export-manage-wits.md).   
  
   
##  <a name="fields"></a> Elements to add to the FIELDS section  
 Add the following syntax to the `FIELDS` section of the type definition. For more information, see [Modify a field or add a custom field](../add-modify-field.md).  
  
> [!div class="tabbedCodeSnippets"]
```XML
<FIELD name="Project Server Submit" refname="Microsoft.Sync.ProjSrv.Submit" type="String">  
   <HELPTEXT>Toggle to set whether the work item updates are sent to Project Server</HELPTEXT>  
</FIELD>  
<FIELD name="Project Server Enterprise Project" refname="Microsoft.Sync.ProjSrv.ProjectName" type="String">  
   <HELPTEXT>Name of the enterprise project plan in Project Server</HELPTEXT>  
</FIELD>  
<FIELD name="Project Server Is Linked" refname="Microsoft.Sync.ProjSrv.IsLinkedToProjSrv" type="String">  
   <HELPTEXT>Indicates whether the work item is linked to Project Server</HELPTEXT>  
</FIELD>  
<FIELD name="Project Server Last Submitted Date" refname="Microsoft.Sync.ProjSrv.LastSubmittedDate" type="DateTime">  
   <HELPTEXT>Date of the most recent submission to Project Server</HELPTEXT>  
</FIELD>  
<FIELD name="Project Server Last Submit Status" refname="Microsoft.Sync.ProjSrv.LastSubmitStatus" type="String">  
   <HELPTEXT>Status of success or failure for the most recent submission to Project Server</HELPTEXT>  
</FIELD>  
<FIELD name="Project Server Last Reviewed Date" refname="Microsoft.Sync.ProjSrv.LastReviewedDate" type="DateTime">  
   <HELPTEXT>Date of the most recent approval by the project manager</HELPTEXT>  
</FIELD>  
<FIELD name="Project Server Last Review Status" refname="Microsoft.Sync.ProjSrv.LastReviewStatus" type="String">  
   <HELPTEXT>State of the most recent approval by the project manager</HELPTEXT>  
</FIELD>  
<FIELD name="Project Server Completed Work" refname="Mirror.Microsoft.VSTS.Scheduling.CompletedWork" type="Double" />  
<FIELD name="Project Server Remaining Work" refname="Mirror.Microsoft.VSTS.Scheduling.RemainingWork" type="Double" />  
<FIELD name="Project Server Original Estimate" refname="Mirror.Microsoft.VSTS.Scheduling.OriginalEstimate" type="Double" />  
<FIELD name="Project Server Health" refname="Mirror.Microsoft.VSTS.Common.Health" type="String" />  
```  
  
<a name="form"></a>   
##  Elements to add to the FORM section  
 To manually add the **Project Server** tab to a work item type, open the type definition file, find the `FORM` section, and then add the following syntax to the `TabGroup` section. For more information, see [Design the work item form](../../reference/xml/design-work-item-form.md).  
  
> [!NOTE]
>  You can assign any label to the `name` attribute for each `Control` element as long as the label is unique within the type definition. You use the `name` attribute when you want the same field to appear in more than one location on the form. Several fields on the **Project Server** tab appear elsewhere on the work item form. For more information, see [Control](../../reference/xml/control-xml-element-reference.md).  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Tab Label="Project Server">  
   <Group>  
      <Column PercentWidth="50">  
         <Group Label="Publish">  
            <Column PercentWidth="100">  
               <Control FieldName="Microsoft.Sync.ProjSrv.Submit" name="SubmitName" Type="FieldControl" Label="&Submit to Project Server:" LabelPosition="Left" />  
               <Control FieldName="Microsoft.Sync.ProjSrv.ProjectName" name="ProjectName" Type="FieldControl" Label="Enterprise &Project:" LabelPosition="Left" />  
            </Column>  
         </Group>  
      </Column>  
      <Column PercentWidth="50">  
         <Group Label="Status">  
            <Column PercentWidth="100">  
               <Control FieldName="Microsoft.Sync.ProjSrv.IsLinkedToProjSrv" name="IsLinkedName" Type="FieldControl" Label="&Linked to Project Server:" LabelPosition="Left" ReadOnly="True" />  
               <Control FieldName="Microsoft.Sync.ProjSrv.LastSubmitStatus" name="LastSubmitName" Type="FieldControl" Label="Last S&ubmit Status:" LabelPosition="Left" ReadOnly="True" />  
               <Control FieldName="Microsoft.Sync.ProjSrv.LastSubmittedDate" name="LastSubmittedName" Type="FieldControl" Label="Last Sub&mitted Date:" LabelPosition="Left" ReadOnly="True" />  
               <Control FieldName="Microsoft.Sync.ProjSrv.LastReviewedDate" name="LastReviewedName" Type="FieldControl" Label="Last Approval Date:" LabelPosition="Left" ReadOnly="True" />  
               <Control FieldName="Microsoft.Sync.ProjSrv.LastReviewStatus" name="LastReviewName" Type="FieldControl" Label="Last Approval Status:" LabelPosition="Left" ReadOnly="True" />  
            </Column>  
         </Group>  
      </Column>  
   </Group>  
   <Group Label="Mapped Fields (Project Plan : Work Item)">  
      <Column PercentWidth="50">  
         <Control FieldName="Mirror.Microsoft.VSTS.Scheduling.CompletedWork" name="CompletedWorkMirrorName" Type="FieldControl" Label="Completed Work" LabelPosition="Left" ReadOnly="True" />  
         <Control FieldName="Mirror.Microsoft.VSTS.Scheduling.RemainingWork" name="RemainingWorkMirrorName" Type="FieldControl" Label="Remaining Work" LabelPosition="Left" ReadOnly="True" />  
       </Column>  
       <Column PercentWidth="50">  
          <Control FieldName="Microsoft.VSTS.Scheduling.CompletedWork" name="CompletedWorkName" Type="FieldControl" />  
          <Control FieldName="Microsoft.VSTS.Scheduling.RemainingWork" name="RemainingWorkName" Type="FieldControl" />  
        </Column>  
    </Group>  
    <Group Label="Mapped Fields (Project Plan)">  
        <Column PercentWidth="100">  
           <Control FieldName="Mirror.Microsoft.VSTS.Scheduling.OriginalEstimate" name="OriginalEstimateMirrorName" Type="FieldControl" Label="Original Estimate" LabelPosition="Left" ReadOnly="True" />  
         </Column>  
   </Group>  
</Tab>  
```  
  
 
## Related articles  
-  [Add or modify a field](../add-modify-field.md)   
-  [Export and import work item types](../witadmin/witadmin-import-export-manage-wits.md)   
-  [Design the work item form](../xml/design-work-item-form.md)   
-  [Customize the field mapping](customize-field-mapping-tfs-project-server.md)