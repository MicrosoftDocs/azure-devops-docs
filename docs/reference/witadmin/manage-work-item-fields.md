---
title: Manage work item fields using witadmin
titleSuffix: TFS  
description: Change an attribute for a work item field defined for a project in Team Foundation Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 445d9c20-2e7d-420b-9bdc-2448e8883cd6
ms.topic: reference
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops-2019'
ms.date: 03/20/2018
---

# Manage work item fields

[!INCLUDE [temp](../../_shared/customization-witadmin-plus-version-header.md)]

You can manage the fields defined for work item types (WITs) that are defined for a project collection (On-premises XML) by using the following **witadmin** commands. If you want to add a global field (valid for On-premises XML) you can do so by [modifying the global workflow file](../xml/global-workflow-xml-element-reference.md) and [importing it to the collection](witadmin-import-export-global-workflow.md).  
  
-   **changefield**: Changes one or more attributes of a field. When you change one of the following attributes, you change it for all work item types and projects within the project collection:   
    -   **Data type** for `PlainText` or `HTML` fields.    
        > [!IMPORTANT]  
        >  When you upgrade Team Foundation Server from an earlier version to the current version, the type assignment for the **Description** (System.Description) field is automatically converted from `PlainText` to `HTML`. With the `changefield` command, you can restore the content of this field to display plain text.  
  
    -   **Friendly name** that displays in the work item query. This name may differ from that displayed on the work item form.    
    -   **Reporting attributes** which includes the name of the field as it appears in a report, the reference report name, and the reporting type.  
    -   **Synchronization** with Active Directory - you can enable/disable synchronization of person name fields.   
-   **deletefield**: Deletes the specified field.    
-   **indexfield**: Turns indexing on or off for the specified field. When you enable indexing for a field, you may increase the performance of finding work items whose queries specify that field. If you add a custom field that you use in many of your work item queries, you may want to enable indexing for that field.   
-   **listfields**: Lists the attributes for all fields or a specified field.
  
[!INCLUDE [temp](../../_shared/witadmin-run-tool.md)] 
  
For an overview of the fields defined within a default process template, see [Work item field index](../../boards/work-items/guidance/work-item-field.md).  
  
[!INCLUDE [temp](../../_shared/process-editor.md)]


## Prerequisites  
  
-  To list fields, you must have your **View project-level information** permission for the project in the collection set to **Allow**.    
-   To delete or rename fields or change an attribute of a field, you must be a member of the **Team Foundation Administrators** security group or the **Project Collection Administrators** security group.  
  
For more information, see [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md).  
  
> [!NOTE]  
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the **Command Prompt** shortcut menu, and then choose **Run as Administrator**. For more information, see the Microsoft Web site: [User Access Control](http://go.microsoft.com/fwlink/?LinkId=111235).  
  
## Syntax  
  
```  
witadmin changefield /collection:CollectionURL /n:RefName   [/name:NewName]    [/syncnamechanges:true | false]   [/reportingname:ReportingName]    [/reportingrefname:ReportingRefName]   [/reportingtype:Type]   [/reportingformula:Formula]   [/type:PlainText | HTML]   [/noprompt]  

witadmin deletefield /collection:CollectionURL /n:RefName [/noprompt]  
 
witadmin indexfield /collection:CollectionURL /n:Name /index:on|off   
  
witadmin listfields /collection:CollectionURL /n:RefName [/unused]  
```  
  
### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`CollectionURL`|Specifies the URI of the project collection. For example:<br /><br /> **On-premises TFS format:  http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If no virtual directory is used, then the format for the URI is the following: **http**://*ServerName:Port/CollectionName*.|  
|**/n**:`RefName`<br />**/n**:`Name`|The reference name of a work item type field.|  
|**/index**|Specifies to enable or disable indexing for the specified field. Specify **on** to enable indexing and **off** to disable indexing.|  
|**/name:** `NewName`|Specifies the new name for the field.|  
|**/syncnamechanges**|Specifies to use the work item field to store names and to update as changes are made in Active Directory or a workgroup. This option is valid only when a field with the data type of String is specified for the `typename`.<br /><br /> Specify `true` to enable synchronization for the data field, specify `false` to disable synchronization for the data field.|  
|**/reportingname**:`ReportingName`|Specifies the name of the field in the data warehouse to be used for reporting.|  
|**/reportingrefname**:`ReportingRefName`|Specifies the reference name of the field in the data warehouse to be used for reporting.|  
|**/reportingtype:** `Type`|Specifies how the field is used in the warehouse for reporting. The following values are valid:<br /><br /> -   **dimension:** Used for the Integer, String, or DateTime fields.<br />-   **detail:** Used for the Integer, Double, String, or DateTime fields.<br />-   **measure:** Used for the Integer and Double fields. The default aggregation type is sum. You can specify another aggregation type by using the **formula** parameter.<br />-   **none:** Used to disable reportability on the field.<br /><br /> For more information, see [About work item fields and attributes](../../boards/work-items/work-item-fields.md).|  
|**/reportingformula:** `Formula`|Specifies the aggregation formula to be used when the field is reported as a `measure`. The only supported formula is `sum`.|  
|**/type:** `HTML` &#124; `PlainText`|Specifies to convert the contents of the field from `PlainText` to `HTML` or from `HTML` to `PlainText`. You can specify this option only for fields whose type assignment is `PlainText` or `HTML`. See [FIELD (Definition) element reference](../xml/field-definition-element-reference.md).|  
|**/unused**|Lists all fields that are not used by any project defined in the project collection.|  
|**/noprompt**|Disables prompt for confirmation.|  
|**/? or help**|Displays help about the command in the Command Prompt window.|  
  

### Indexed fields  

A query index is created based on those fields that have indexing enabled. This index improves the response time when running queries that include indexed fields.  
  
By default, the following fields are indexed: Assigned To, Created Date, Changed By, State, Reason, Area ID, Iteration ID, and Work Item Type. If there are other fields that your team frequently uses in their queries, you can add them to the query index.  
  
### Synchronizing person names with Active Directory  

You must manually enable synchronization of any custom work item fields that are used to assign person names that reference Active Directory. You must enable synchronization for each field for each project collection that contains the custom fields.  
  
All system reference fields that show person-names have the attribute `syncnamechanges` set to `true`. Such fields include System.AuthorizedAs, System.AssignedTo, System.ChangedBy and System.CreatedBy.  Synchronization in enabled for each person name field that is defined in one of the default process templates. For more information, see [Assignments and workflow fields](../../boards/queries/query-by-workflow-changes.md).  
  
After synchronization is enabled, the field no longer shows a static string. Instead, the field shows the name associated with a user account. When you change the user name in Active Directory or in Workgroup, a field with `syncnamechanges` set to `true` automatically shows the new name.  
  
When you assign the `syncnamechanges` attribute to a String field, the field always accepts valid user names. However, the field does not allow group names that are stored in Team Foundation Server or in Active Directory if any one of the following conditions is `true`:  
  
- The `VALIDUSER` rule is specified across all work item types    
- The `VALIDUSER` rule is specified for a work item type    
- The `ALLOWEDVALUES` rule is specified for a work item type, and that rule has a filter criteria that excludes groups  
  
 For more information, see [All FIELD elements](../xml/field-definition-element-reference.md).  
  
### Attributes that you can change for each work item type  

You change the following attributes or values defined for a field by changing the work item type definition in which the field appears:  
  
-   **Name** that displays on the work item form. See [WebLayout and Control elements](../xml/weblayout-xml-elements.md) or [Control XML element reference](../xml/control-xml-element-reference.md).   
-   **Help text**. See [Apply a field rule](../xml/apply-rule-work-item-field.md).    
-   **Allowed values** or items within a pick list or drop-down menu. See [ALLOWEDVALUES, SUGGESTEDVALUES, and PROHIBITEDVALUES XML elements](../xml/define-pick-lists.md).  
  
## Examples  

Unless otherwise specified, the following values apply in each example:  
  
-   URI for the project collection: http://AdventureWorksServer:8080/tfs/DefaultCollection    
-   Work item field name: AdventureWorks.Field    
-   Default encoding: UTF-8  
  
### List fields  

Use **witadmin listfields** to see the set of fields in use, to select one to add to a work item type. Also, you can list the attribute assignments defined for a specific field and determine which fields are used by which projects.  
  
### View the attributes of a work item field  

- Enter the following command to list the attributes defined for a specified field, such as Microsoft.VSTS.Common.Issue.  
  
    ```  
    witadmin listfields /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:Microsoft.VSTS.Common.Issue  
    ```  
  
     Field and attribute information appears for the named field, as shown in this example.  
  
    ```  
    Field: Microsoft.VSTS.Common.Issue  
    Name: Issue  
    Type: String  
    Reportable As: dimension  
    Use: Adventure Works (Shared Steps), AW Future (Shared Steps), AW Current (Shared Steps)  
    Indexed: False  
    ```  
  
     The **Use** parameter indicates the name of each project and the work item type where the field is used. For more information about field attributes, see [Index of work item fields](../../boards/work-items/guidance/work-item-field.md).  
  
### List all fields in a project collection  
  
-   Enter the following command to list all fields defined for a project collection.  
  
    ```  
    witadmin listfields /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection  
    ```  
  
     Field information for all the fields for the named project collection appears. See [Index of work item fields](../../boards/work-items/guidance/work-item-field.md).  
  
### List fields that are not being used  
  
- Enter the following command to list the fields that are no longer being used in the project collection by any work item type.  
  
    ```  
    witadmin listfields /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /unused  
    ```  
  
     Field and attribute information appears for each field that is not being used, as shown in this example.  
  
    ```  
    Field: Microsoft.VSTS.CMMI.TaskType  
    Name: Task Type  
    Type: String  
    Reportable As: dimension  
    Use: Not In Use  
    Indexed: False  
  
    Field: Microsoft.VSTSUE.Common.Flag  
    Name: Flag  
    Type: String  
    Reportable As: dimension  
    Use: Not In Use  
    Indexed: False  
  
    Field: Microsoft.VSTSUE.Common.Progress  
    Name: Progress  
    Type: String  
    Reportable As: dimension  
    Use: Not In Use  
    Indexed: False  
    ```  
  
### Rename a field  

You can change the friendly name of a work item field to meet the naming conventions that your team uses. Note that the new name is applied to all work item types that reference the changed field in all projects in the project collection. The friendly name displays when you define filter criteria in a work item query. The name that appears on a work item form may be different than the friendly name defined for the field.  
  
#### To rename a work item field  
  
1.  Enter the following command to rename the friendly name assigned to `Microsoft.VSTS.Common.Rank` to **Important Rank**.  
  
    ```  
    witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:Microsoft.VSTS.Common.Rank /name:"Important Rank"  
    ```  
  
2.  At the confirmation prompt type **y** and then press ENTER. Wait until you receive the following message:  
  
     **Field renamed.**  
  
#### To verify changes imported to a single project  
  
1.  In Team Explorer, choose ![Refresh](_img/icon_refreshnode.png "Icon_refreshNode") **Refresh**.  
  
     The latest updates are downloaded from the server, which include the changes that you just made to the field name. Wait several seconds for the refresh to finish.  
  
2.  Choose **New Query** to create a query.  
  
3.  In the Query Editor, choose the **Click here to add a clause** link to add a row, select the blank **Field** cell, and in the cell, type **Rank**. The following message that appears above the results list. This message indicates that the Rank cannot be found.  
  
     **Run the query to see the query results.**  TF51005: The query references a field that does not exist. The error is caused by <\<Rank>>.  
  
4.  Delete the value **Rank** from the **Field** cell, and type **Important Rank** into the cell.  
  
5.  Select **<>** in the **Operator** cell, and type **1** into the **Value** cell.  
  
6.  On the **Query** toolbar, choose ![Run Query](_img/icon_runquery.png "Icon_runQuery")**Run**.  
  
7.  Open the shortcut menu for any row in the results and select **Column Options**. Scroll down in the **Available columns** list. Notice that the **Rank** field is no longer present but the **Important Rank** field is present.  
  
8.  Select **Important Rank** in the **Available columns** box, and then choose the **>** button (add selected columns). Choose **OK**.  
  
     Notice that the friendly name for Microsoft.VSTS.Common.Rank has been renamed from **Rank** to **Important Rank** throughout the query builder and results list.  
  
9. Close the query. Choose **No** when you are prompted to save the query.  
  
10. Create a new Task work item. Choose the **New Work Items** link, and then choose **Task**.  
  
     This work item is created from the work item type that you changed and imported.  
  
11. Notice, in the **Status** box, that the label for the renamed field, **Rank**, has not changed. This is because the field labels on the work item forms are scoped to the parent project and are independent of the server-wide field name just specified.  
  
    > [!NOTE]  
    > For more information about how to change field labels on work item forms, see [Control XML element reference](../xml/control-xml-element-reference.md).  
  
12. Close the new Task and choose **No** when you are prompted to save the work item.  
  
### Change the report as value for a field  

The following command specifies the ability to report the type of the DateTime field AdventureWorks.CreatedOn to dimension. This field's data enters the warehouse and Analysis Services databases so that it can be used to filter reports.  
  
```  
witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:AdventureWorks.CreatedOn /reportingtype:dimension  
```  
  
 The following command specifies the ability to report the type of the Double field AdventureWorks.Field to measure. All measures are aggregated by sum.  
  
```  
witadmin reportfield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:AdventureWorks.Field /reportingtype:measure  
```  
  
### Enable synchronization of a custom person-name field  
 The following command enables synchronization for the work item field AW.CustomerName defined for Collection1 on the AdventureWorksServer.  
  
#### Verify the data type of the field that you want to convert  
  
1.  Verify the data type assigned to the field, such as MyCompany.CustomerName, that you want to synchronize by entering the following command:  
  
    ```  
    witadmin listfields /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:MyCompany.CustomerName  
    ```  
  
#### Enable synchronization  
  
1.  To enable synchronization for a person-named field, type the following command, substituting your data for the arguments that are shown here:  
  
    ```  
    witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:MyCompany.CustomerName /syncnamechanges:true  
    ```  
  
2.  The following confirmation prompt appears:  
  
     **This will change properties for field {0} on the Team Foundation Server. Do you want to continue?**  
  
3.  Type **0** to confirm that you want to change the field, or **1** to cancel the request.  
  
     If the change request succeeds, the following confirmation message appears:  
  
     **The field was updated.**  
  
     If the change request fails, an error message appears. The most common mistakes that can be made are trying to change a system reference field, or trying to change a field of a data type other than String. These operations are not supported.  
  
### Delete a field  

Before you delete a field, verify that the field is not in use. If the field is in use, you must first remove the field from the work item types that use it prior to deleting it from the project collection. The following command deletes the field AdventureWorks.Field from Collection1:  
  
```  
witadmin deletefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:AdventureWorks.Field  
```  
  
#### Verify a field is not in use  
  
1.  Enter the following command, specifying the reference name for the work item field, such as MyCompany.MyProcess.MyField.  
  
    ```  
    witadmin listfields /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:MyCompany.MyProcess.MyField  
    ```  
  
     In the information displayed for the field, verify that the value for **Use** is "**Not In Use**" as follows in this example.  
  
    ```  
    Field: MyCompany.MyProcess.MyField  
    Name: MyField  
    Type: String  
    Reportable As: dimension  
    Use: Not In Use  
    Indexed: False  
    ```  
  
2.  If the **Use** field indicates that the field is in use, then you must delete it from each work item type for each project that is listed. For example, the Microsoft.VSTS.TCM.SystemInfo field indicates that it is being used by the Bug and Code Defect work item types for four projects: Arroyo, Desert, Palm, and Springs.  
  
    ```  
    Field: Microsoft.VSTS.TCM.SystemInfo  
    Name: System Info  
    Type: Html  
    Reportable As: None  
    Use: Arroyo (Bug), Desert (Bug), Palm (Bug), Springs (Bug, Code Defect)  
    Indexed: False  
    ```  
  
     Before you can delete this field, you must remove it from each of the work item types listed for each project for which it is defined. To remove the field, you modify the definition for the work item type by deleting the `FIELD` and `Control` elements that contain the field reference name. See [Import, export, and manage work item types](witadmin-import-export-manage-wits.md), [FIELD (Definition) element reference](../xml/field-definition-element-reference.md), and [Control](../xml/control-xml-element-reference.md).  
  
#### Delete a field from a project collection  
  
Enter the following command to delete the MyCompany.MyProcess.MyField field, and then choose Enter.  
  
```  
witadmin deletefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:RefName  
```  

Enter **y** at the confirmation prompt to complete this step.  
  
## Q & A  
  
### Q: What customizations can I make and still use the Configure Features Wizard to update my project after a TFS upgrade?  

**A:** You can add custom fields, customize a pick list, and add rules to a field. The [Configure Features Wizard](../configure-features-after-upgrade.md) will update your projects and you'll get access to the latest features.  
  
Changing field attributes is not recommended. To learn about which customizations you can safely make and which you should avoid, see [On-premises XML process model, Maintenance and upgrade implications](../on-premises-xml-process-model.md#before-you-customize).  
  
## Related articles 

-  [Customizing your work tracking experience](../customize-work.md)   
-  [Work item field index](../../boards/work-items/guidance/work-item-field.md)   
-  [witAdmin: Customize and manage objects for tracking work](witadmin-customize-and-manage-objects-for-tracking-work.md)
  