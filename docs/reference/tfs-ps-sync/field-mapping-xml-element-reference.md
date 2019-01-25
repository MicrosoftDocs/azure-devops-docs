---
title: Field mapping XML element reference for TFS-Project Server integration
titleSuffix: TFS
description: Customize the field mappings to define which fields to keep synchronized when using Team Foundation Server & Project Server integration
ms.prod: devops
ms.technology: devops-agile 
ms.assetid: dfd7bc62-dd68-4412-a86d-5f82c3ad9af3
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---


# Field mapping XML element reference for TFS-Project Server integration

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> By customizing the field mappings, you can define which fields in Visual Studio Team Foundation Server (TFS) and Microsoft Project Server should be kept synchronized and which fields are updated in the status queue for Project Server and in Team Foundation.  
  
> [!NOTE]
>  The field mappings for integration of TFS with Project Server are distinct from the mapping file for Microsoft Project. For information about the latter file, see [Customize the Microsoft Project field mapping file](https://msdn.microsoft.com/library/ms404686.aspx).  
  
 You maintain one set of field mappings for each project collection that hosts projects that you want to synchronize with Project Server. To retrieve the field mappings, you can download them to a file from the collection. After you modify the file, you can upload it to the collection, and the changes will apply to all projects that are defined for that collection. For more information about how to download or upload field mappings, see [Customize the field mapping](customize-field-mapping-tfs-project-server.md).  
  
 
  
##  <a name="requiredfields"></a> Required Fields  
 The following fields must be mapped to support data synchronization. If you have customized the fields that are used to schedule work, you must customize the field mappings to reference the fields that you use.  
  
-   System.Title must be mapped to pjTaskName.  
  
-   System.AssignedTo must be mapped to pjResourceNames.  
  
-   The field that you use to track the start of work in Team Foundation must be mapped to pjTaskStart. By default, this field is Microsoft.VSTS.Scheduling.StartDate.  
  
-   The field that you use to track completed work in Team Foundation must be mapped to pjTaskFinish. By default, this field is Microsoft.VSTS.Scheduling.FinishDate.  
  
##  <a name="defaultfields"></a> Default Fields That Are Mapped  
 For each TFS field, you can specify two mappings. In the first mapping, you specify the field in Project that the field in TFS updates in the status queue. In the second mapping, you specify the field in Project that updates the field in TFS. In addition, you can specify whether the TFS field appears on the work item form and how updates are made to reference and mirrored fields.  
  
 By default, all Project fields that are mapped are also mirrored, which means that their values are stored in TFS.  
  
> [!IMPORTANT]
>  In most configurations, you should not remove the default field mappings because the synchronization process requires them. For example, do not remove the default mappings if your enterprise project plan maps to a project that was created from a process template that is based on either the Microsoft Solutions Framework (MSF) for Agile Software Development or the Capability Maturity Model Integration (CMMI) Process Improvement.  
>   
>  However, if your plan maps to a project that was created using the Visual Studio Scrum process template, you may need to remove some of the default mappings. If your project collection contains only projects that were created using the Scrum template, you may receive an error when you configure the two server products. For best results, add Completed Work (Microsoft.VSTS.Scheduling.CompletedWork) and Original Estimate (Microsoft.VSTS.Scheduling.OriginalEstimate) to the work items that you intend to map. Also, you will need to remove the `<EMPTY />` workflow statements from the task type definition. For more information, see [Required Changes to Make When Mapping to a Team Project That Was Created From the Scrum Process Template](customize-field-mapping-tfs-project-server.md).  
  
 The following table describes the default mappings that are assigned to fields in Team Foundation. You can specify how you want reference and mirror fields to be updated. You can set `OnConflict` to `PSWins` to overwrite the value in Team Foundation with the value from Project Server. If you leave the `OnConflict` attribute unspecified, the fields maintain different values. For more information, review the [Field Elements and Attributes](#feandattributes) table later in this topic.  
  
 For more information about mirrored fields and the synchronization process, see [Understand how updates to specific fields are managed](understand-how-updates-to-specific-fields-managed.md).  
  
|Team Foundation field|Project field|Display field on Project Server tab of work item form (`displayTfsField`)|Display mirrored field on Project Server tab of work item form (`displayTfsMirror`)|Field updates (`OnConflict`)|  
|---------------------------------------------------------------------|-------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------|  
|Title|Task Name|No|No|The value in Project Server replaces the value in Team Foundation.|  
|Assigned To|Resources|No|No|The value in Project Server replaces the value in Team Foundation.|  
|Remaining Work|Resource Remaining Work (Status Queue)<br /><br /> Task Remaining Work (Project Server)|Yes|Yes|Each value is maintained.|  
|Completed Work|Resource Actual Work (Status Queue)<br /><br /> Task Actual Work (Project Server)|Yes|Yes|Each value is maintained.|  
|Original Estimate|Baseline Work|No|Yes|The value in Project Server replaces the value in Team Foundation.|  
|Start Date|Resource Start (Status Queue)<br /><br /> Task Start (Project Server)|No|No|The value in Project Server replaces the value in Team Foundation.|  
|End Date|Resource Finish (Status Queue)<br /><br /> Task Finish (Project Server)|No|No|The value in Project Server replaces the value in Team Foundation.|  
  
 You can display more Project fields on the **Project Server** tab of a work item form in Team Foundation if you add them to the field mappings. For more information about this tab, see [Project Server fields that support data synchronization](project-server-fields-added-to-tfs.md).  
  
##  <a name="elements"></a> Mapping Elements and Attributes  
 You use a `field` element to specify a reference field in Team Foundation to synchronize. All `field` elements are contained in the `mappingFile`, `persistables`, and `Microsoft.TeamFoundation.Sync.Mapping.Impls.FieldMapping` container elements.  
  
> [!IMPORTANT]
>  When you map a field from TFS to Project Server, make sure that you match the data types of those fields. Otherwise, the following error might appear when you try to upload the field mappings:  
>   
>  **Index (zero based) must be greater than or equal to zero and less than the size of the argument list**.  
>   
>  For more information, see [Restrictions on mapping fields](restrictions-mapping-ps-fields.md).  
  
 The following example shows the nesting structure of XML elements. To view the default mappings, see [Default Mapping File](#default_file) later in this topic.  
  
```xml
<mappingFile>  
&nbsp;&nbsp;&nbsp;<persistables>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Microsoft.TeamFoundation.Sync.Mapping.Impls.FieldMapping>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<field tfsName="System.Title" tfsMirrorName="Mirror.System.Title" displayTfsField="false" displayTfsMirror="false" onConflict="PSWin">  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<tfsToTarget>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<target provider="ProjectServerStatusQueue" name="pjTaskName" />  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tfsToTarget>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<targetToTfs>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<target provider="ProjectServerPublished" name="pjTaskName" />  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</targetToTfs>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</targetToTfs>  
      </field>  
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;. . .  
  
    </Microsoft.TeamFoundation.Sync.Mapping.Impls.FieldMapping>  
  </persistables>  
</mappingFile>  
  
```  
  
### Field Element Syntax  
 The following syntax defines the attributes of the `field` element:  
  
```xml
<field tfsName="FieldName" tfsMirrorName="FieldMirrorName" displayTfsField="true | false" displayTfsMirror=" true | false" onConflict="PSWin">  
```  
  
### Target Element Syntax  
 The following syntax defines the attributes of the `target` element:  
  
```xml
<target provider="ProviderName" name="ProjectFieldName" />  
```  
  
 To determine the field name, prefix the concatenated friendly name with "pj". For example, the field name for Status Manager is pjStatusManager, and the field name for Custom 01 is pjCustom01.  
  
###  <a name="feandattributes"></a> Field Elements and Attributes  
 The following table describes the subelements and attributes of the `field` element. You map a Team Foundation field to a Project resource field whose value you want to update during status synchronization. You map a Team Foundation field to a Project task field whose value will update Team Foundation Server during publish synchronization. Also, the units of fields that you map must conform to established criteria. For more information, see [Restrictions on mapping fields](restrictions-mapping-ps-fields.md).  
  
|Element|Attribute|Description|  
|-------------|---------------|-----------------|  
|`field`||Specifies the field in Team Foundation to be mapped and how the field should be mapped.|  
||`tfsName`|Specifies the reference name of the field in Team Foundation to synchronize. You must specify a field that is defined in the project collection. You can list all fields in a collection by running the **witadmin listfields** command. For more information, see [Manage work item fields](../../reference/witadmin/manage-work-item-fields.md)
).|  
||`tfsMirrorName`|Required. Specifies the reference name under which to store the value of the Project Server field in Team Foundation Server. You can prefix the reference name with "Mirror." For example, you can specify Mirror.System.Title for System.Title. **Note:**  Mirror fields that you specify are created automatically. You do not have to add mirror fields to the type definition of a work item.|  
||`displayTfsField`|Optional. By default, this attribute is set to **true**. If this attribute is set to **true**, the field appears on the **Project Server** tab of the work item form in Team Foundation. If this attribute is set to `false`, the field does not appear on the form. By default, only the Completed Work and Remaining Work fields appear on the form.|  
||`displayTfsMirror`|Optional. By default, this attribute is set to **true**. If this attribute is set to **true**, the field appears on the **Project Server** tab of the work item form in Team Foundation. If this attribute is set to `false`, the field does not appear on the form.|  
||`onConflict`|Optional. Specifies how the synchronization engine updates the reference field. The only valid value is `PSWin`.<br /><br /> When this attribute is set to `PSWin`, the value of the reference field is updated when the current value that is published from Project Server differs from the value in the mirror.<br /><br /> If you do not define this attribute, you indicate that two sets of books should be maintained. In other words, the value in Project can differ from the value in Team Foundation. By default, the values in Project always replace the values of the Title, Assigned To, Start Date, and End Date fields. By default, only the Completed Work and Remaining Work fields are maintained with two sets of books. For more information, see [Updates to Fields that Contain Hours](understand-how-updates-to-specific-fields-managed.md#updates_hours).|  
|`tfsToTarget`||Specifies the name of the field in Project that Team Foundation will update.|  
|`target`||Specifies the target to receive updates from Team Foundation.|  
||`provider`|Specifies the name of the update provider. For `tfsToTarget`, the only valid value is `ProjectServerStatusQueue`.|  
||`name`|Specifies the name of the Project field that will be updated with the value in Team Foundation. You can map only built-in or enterprise custom fields in Project Server. For a list of available fields, see [Restrictions on mapping fields](restrictions-mapping-ps-fields.md).|  
|`targetToTfs`||Specifies the field mapping to synchronize updates in Project Server with Team Foundation Server.|  
|`target`||Specifies the target to receive updates from Project Server.|  
||`provider`|Specifies the name of the update provider. For `targetToTfs`, the only valid value is `ProjectServerPublished`.|  
||`name`|Specifies the name of the field in Project that will update the field in Team Foundation. You can map only built-in or enterprise custom fields. For a list of available fields, see [Restrictions on mapping fields](restrictions-mapping-ps-fields.md).|  
|`transforms`||Optional. Container element for the `transform` element.|  
|`transform`|`transformType`|Specifies the type of transform to apply to the field. You can only specify the `transformType` for a `targetToTfs` and only for numeric field types. The only valid value is `ClearValueIfParent`.<br /><br /> When the synchronization engine detects a hierarchy under a work item that is synchronized with Project Server, it performs a roll-up for the work and assignments to send to Project Server. However, with the `transformType` set to `ClearValueIfParent`, the synchronization engine clears the work fields on the parent work item in Team Foundation Server to avoid incorrect data in standard Team Foundation Server reports.|  
  
##  <a name="default_file"></a> Default Mappings  
 The following code lists the default field mappings that are defined when you run the `TfsAdmin ProjectServer /UploadFieldMappings` command and specify the `/useDefaultFieldMappings` option. You can download these mappings to a file and then add elements to it or modify the attributes of the listed fields.  
  
 For a list of all fields that are added to a type of work item when you add that type to participate in data synchronization, see [Project Server fields that support data synchronization](project-server-fields-added-to-tfs.md).  
  
```xml
<mappingFile>  
  <persistables>  
    <Microsoft.TeamFoundation.Sync.Mapping.Impls.FieldMapping>  
      <field tfsName="System.Title" tfsMirrorName="Mirror.System.Title" displayTfsField="false" displayTfsMirror="false" onConflict="PSWin">  
        <tfsToTarget>  
          <target provider="ProjectServerStatusQueue" name="pjTaskName" />  
        </tfsToTarget>  
        <targetToTfs>  
          <target provider="ProjectServerPublished" name="pjTaskName" />  
        </targetToTfs>  
      </field>  
      <field tfsName="System.AssignedTo" tfsMirrorName="Mirror.System.AssignedTo" displayTfsField="false" displayTfsMirror="false" onConflict="PSWin">  
        <tfsToTarget>  
          <target provider="ProjectServerStatusQueue" name="pjTaskResourceNames" />  
        </tfsToTarget>  
        <targetToTfs>  
          <target provider="ProjectServerPublished" name="pjTaskResourceNames" />  
        </targetToTfs>  
      </field>  
      <field tfsName="Microsoft.VSTS.Scheduling.CompletedWork" tfsMirrorName="Mirror.Microsoft.VSTS.Scheduling.CompletedWork" displayTfsField="true" displayTfsMirror="true">  
        <tfsToTarget>  
          <target provider="ProjectServerStatusQueue" name="pjResourceActualWork" />  
        </tfsToTarget>  
        <targetToTfs>  
          <target provider="ProjectServerPublished" name="pjTaskActualWork" />  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<transforms>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<transform transformType="clearValueIfParent">  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</transforms>  
        </targetToTfs>  
      </field>  
      <field tfsName="Microsoft.VSTS.Scheduling.RemainingWork" tfsMirrorName="Mirror.Microsoft.VSTS.Scheduling.RemainingWork" displayTfsField="true" displayTfsMirror="true">  
        <tfsToTarget>  
          <target provider="ProjectServerStatusQueue" name="pjResourceRemainingWork" />  
        </tfsToTarget>  
        <targetToTfs>  
          <target provider="ProjectServerPublished" name="pjTaskRemainingWork" />  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<transforms>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<transform transformType="clearValueIfParent">  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</transforms>  
        </targetToTfs>  
      </field>  
      <field tfsName="Microsoft.VSTS.Scheduling.OriginalEstimate" tfsMirrorName="Mirror.Microsoft.VSTS.Scheduling.OriginalEstimate" displayTfsField="false" displayTfsMirror="true" onConflict="PSWin">  
        <targetToTfs>  
          <target provider="ProjectServerPublished" name="pjTaskBaselineWork" />  
        </targetToTfs>  
      </field>  
      <field tfsName="Microsoft.VSTS.Scheduling.StartDate" tfsMirrorName="Mirror.Microsoft.VSTS.Scheduling.StartDate" displayTfsField="false" displayTfsMirror="false" onConflict="PSWin">  
        <tfsToTarget>  
          <target provider="ProjectServerStatusQueue" name="pjResourceStart" />  
        </tfsToTarget>  
        <targetToTfs>  
          <target provider="ProjectServerPublished" name="pjTaskStart" />  
        </targetToTfs>  
      </field>  
      <field tfsName="Microsoft.VSTS.Scheduling.FinishDate" tfsMirrorName="Mirror.Microsoft.VSTS.Scheduling.FinishDate" displayTfsField="false" displayTfsMirror="false" onConflict="PSWin">  
        <tfsToTarget>  
          <target provider="ProjectServerStatusQueue" name="pjResourceFinish" />  
        </tfsToTarget>  
        <targetToTfs>  
          <target provider="ProjectServerPublished" name="pjTaskFinish" />  
        </targetToTfs>  
      </field>  
    </Microsoft.TeamFoundation.Sync.Mapping.Impls.FieldMapping>  
  </persistables>  
</mappingFile>  
```  
  
## Related articles  
 [Restrictions on mapping fields](restrictions-mapping-ps-fields.md)   
 [Project Server fields that support data synchronization](project-server-fields-added-to-tfs.md)   
 [Upload or download field mappings](manage-field-mappings.md)   
 [Customize the field mapping](customize-field-mapping-tfs-project-server.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)