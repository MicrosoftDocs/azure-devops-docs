---
title: Manage work item fields using witadmin
titleSuffix: Azure DevOps  
description: List or delete fields, or change a field attribute defined on Azure DevOps
ms.service: azure-devops-boards
ms.custom: witadmin
ms.assetid: 445d9c20-2e7d-420b-9bdc-2448e8883cd6
ms.topic: reference
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 08/07/2025
---

# Manage work item fields

[!INCLUDE [version-lt-eq-azure-devops-plus-witadmin](../../includes/version-lt-eq-azure-devops-plus-witadmin.md)]

The **witadmin** command-line tool provides powerful capabilities for managing work item fields in your project collection. Whether you need to rename fields, adjust data types, or configure synchronization with identity providers, these commands give you granular control over your work tracking experience.

> [!IMPORTANT]
> The **witadmin** tool is primarily designed for Azure DevOps Server (on-premises) environments using the On-premises XML process model. For Azure DevOps Services, we recommend using the [inherited process model](../../organizations/settings/work/inheritance-process-model.md) through the web interface to customize work item fields.

## What you can do with witadmin field commands

Use the following **witadmin** commands to manage fields across all work item types and projects in your collection:

-  **`changefield`**: Modify field attributes that apply collection-wide, including:
    -  **Data type conversion** between `PlainText` and `HTML` formats
    > [!IMPORTANT]  
    >  When you upgrade Azure DevOps Server, the **Description** field (System.Description) automatically converts from `PlainText` to `HTML`. Use the `changefield` command to revert this if needed.
    -  **Friendly names** displayed in work item queries (might differ from form labels)
    -  **Reporting attributes** for data warehouse integration
    -  **Identity synchronization** with Microsoft Entra ID or Active Directory
-   **`deletefield`**: Remove unused fields from your collection
-   **`listfields`**: View field attributes and usage across projects

> [!TIP]
> - To add global fields in On-premises XML environments, modify the [global workflow file](../../reference/xml/global-workflow-xml-element-reference.md) and import it to your collection.
> - The `witadmin indexfield` command is deprecated. Field indexing occurs automatically.

[!INCLUDE [temp](../../includes/witadmin-run-tool.md)] 
  
For an overview of the fields defined within a default process template, see [Work item field index](../../boards/work-items/guidance/work-item-field.md).  
  
[!INCLUDE [temp](../../includes/process-editor.md)]

## Prerequisites  

| Task | Required Permissions |
|------|---------------------|
| **List fields** | **View project-level information** permission set to **Allow** for the project in the collection |
| **Delete or rename fields** | Member of the **Project Collection Administrators** security group |
| **Change field attributes** | Member of the **Project Collection Administrators** security group |

For more information, see [Change project collection-level permissions](../../organizations/security/change-organization-collection-level-permissions.md).

> [!NOTE]  
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server. To open an elevated Command Prompt window, choose **Start**, open the **Command Prompt** shortcut menu, and then choose **Run as Administrator**.  
  
## Syntax  

Use the following command syntax patterns to manage work item fields with the witadmin tool:

```  
witadmin changefield /collection:CollectionURL /n:RefName   [/name:NewName]    [/syncnamechanges:true | false]   [/reportingname:ReportingName]    [/reportingrefname:ReportingRefName]   [/reportingtype:Type]   [/reportingformula:Formula]   [/type:PlainText | HTML]   [/noprompt]  

witadmin deletefield /collection:CollectionURL /n:RefName [/noprompt]  
  
witadmin listfields /collection:CollectionURL /n:RefName [/unused]  
```

### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------| 
|`/collection`:`CollectionURL`|Specifies the URI of the project collection. For example:<br /><br /> **On-premises format:** `http://ServerName:Port/VirtualDirectoryName/CollectionName`<br /> If no virtual directory is used, then use the following format: `http://ServerName:Port/CollectionName`.|   
|`/n:RefName`<br />`/n:Name`|The reference name of a work item type field.|  
|`/name:NewName`|Specifies the new name for the field.|  
|`/syncnamechanges`|Specifies to use the work item field to store names and to update as changes are made in Microsoft Entra ID, Active Directory, or a workgroup. This option is valid only when a field with the data type of String is specified for the `typename`.<br /><br /> Specify `true` to enable synchronization for the data field. Specify `false` to disable synchronization for the data field.|  
|`/reportingname:ReportingName`|Specifies the name of the field in the data warehouse to be used for reporting.|  
|`/reportingrefname:ReportingRefName`|Specifies the reference name of the field in the data warehouse to be used for reporting.|  
|`/reportingtype:Type`|Specifies how the field is used in the warehouse for reporting. The following values are valid:<br /><br /> -   `dimension:` Used for the Integer, String, or DateTime fields.<br />-   `detail:` Used for the Integer, Double, String, or DateTime fields.<br />-   `measure:` Used for the Integer and Double fields. The default aggregation type is sum. You can specify another aggregation type by using the **formula** parameter.<br />-  `none:` Used to disable reportability on the field.<br /><br /> For more information, see [About work item fields and attributes](../../boards/work-items/work-item-fields.md).|  
|`/reportingformula:Formula`|Specifies the aggregation formula to be used when the field is reported as a `measure`. The only supported formula is `sum`.|  
|`/type:HTML` &#124; `PlainText`|Specifies to convert the contents of the field from `PlainText` to `HTML` or from `HTML` to `PlainText`. You can specify this option only for fields whose type assignment is `PlainText` or `HTML`. See [FIELD (Definition) element reference](/previous-versions/azure/devops/reference/xml/field-definition-element-reference).|  
|`/unused`|Lists all fields that aren't used by any project defined in the project collection.|  
|`/noprompt`|Disables prompt for confirmation.|  
|`/?` or `help`|Displays help about the command in the Command Prompt window.|  

### Synchronizing person names with Microsoft Entra ID and Active Directory  

Configure custom person-name fields to automatically update when user names change in your identity provider.

#### When to enable synchronization

**Custom fields only**: You must manually enable synchronization for any custom work item fields used to assign person names.

**System fields**: All built-in person-name fields automatically have synchronization enabled:
- `System.AssignedTo`
- `System.ChangedBy` 
- `System.CreatedBy`

#### Identity provider support

| Environment | Identity Provider |
|-------------|-------------------|
| **Azure DevOps Services** | Microsoft Entra ID |
| **Azure DevOps Server** | Active Directory or workgroup |

#### How synchronization works

| State | Behavior |
|-------|----------|
| **Before enabling** | Field shows static text strings |
| **After enabling** | Field displays current user name from identity provider |
| **When names change** | Fields with `syncnamechanges=true` automatically update |

#### Group name restrictions

When you enable the `syncnamechanges` attribute on a String field, it accepts valid user names but **doesn't allow group names** if any of these conditions apply:

- **`VALIDUSER` rule** specified across all work item types
- **`VALIDUSER` rule** specified for a specific work item type  
- **`ALLOWEDVALUES` rule** specified with filter criteria that excludes groups

#### Configuration scope

> [!IMPORTANT]
> You must enable synchronization for each field in each project collection that contains the custom fields.

For more information, see:
- [Assignments and workflow fields](../../boards/queries/query-by-workflow-changes.md)
- [All FIELD elements](/previous-versions/azure/devops/reference/xml/field-definition-element-reference).  

### Attributes that you can change for each work item type  

You change the following attributes or values defined for a field by changing the work item type definition in which the field appears:  

-  **Name** that displays on the work item form. See [WebLayout and Control elements](/previous-versions/azure/devops/reference/xml/weblayout-xml-elements) or [Control XML element reference](/previous-versions/azure/devops/reference/xml/control-xml-element-reference?view=tfs-2015&preserve-view=true).   
-  **Help text**. See [Rules and rule evaluation](../../organizations/settings/work/rule-reference.md).    
-  **Allowed values** or items within a pick list or drop-down menu. See [ALLOWEDVALUES, SUGGESTEDVALUES, and PROHIBITEDVALUES XML elements](/previous-versions/azure/devops/reference//xml/define-pick-lists).  

## Examples  

Unless otherwise specified, the following values apply in each example:  

-  URI for the project collection: http://AdventureWorksServer:8080/tfs/DefaultCollection    
-  Work item field name: AdventureWorks.Field    
-  Default encoding: UTF-8  

### List fields  

Use `witadmin listfields` to see the set of fields in use, to select one to add to a work item type. Also, you can list the attribute assignments defined for a specific field and determine which fields are used by which projects.  

### View the attributes of a work item field  

Enter the following command to list the attributes defined for a specified field, such as `Microsoft.VSTS.Common.Issue`.  

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

Enter the following command to list all fields defined for a project collection.  

```  
witadmin listfields /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection  
```  

Field information for all the fields for the named project collection appears. See [Index of work item fields](../../boards/work-items/guidance/work-item-field.md).  

### List fields that aren't being used  

Enter the following command to list the fields that are no longer being used in the project collection by any work item type.  

```
witadmin listfields /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /unused  
```

Field and attribute information appears for each field that isn't being used, as shown in this example.  

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

You can change the friendly name of a work item field to meet the naming conventions that your team uses. The new name is applied to all work item types that reference the changed field in all projects in the project collection. The friendly name displays when you define filter criteria in a work item query. The name that appears on a work item form might be different than the friendly name defined for the field.  
  
#### To rename a work item field  
  
1.  Enter the following command to rename the friendly name assigned to `Microsoft.VSTS.Common.Rank` to **Important Rank**.  
  
    ```  
    witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:Microsoft.VSTS.Common.Rank /name:"Important Rank"  
    ```  
  
2.  At the confirmation prompt, enter `y` and then select **ENTER**. Wait until you receive the following message:  
  
     **Field renamed.**  
  
#### To verify changes imported to a single project  
  
1.  In Team Explorer, choose ![Refresh](media/icon_refreshnode.png "Icon_refreshNode") **Refresh**.  
  
     The latest updates are downloaded from the server, which include the changes that you just made to the field name. Wait several seconds for the refresh to finish.  
  
2.  Choose **New Query** to create a query.  
  
3.  In the Query Editor, choose the **Click here to add a clause** link to add a row, select the blank **Field** cell, and in the cell, enter `Rank`. The following message that appears above the results list. This message indicates that the Rank can't be found.  
  
     **Run the query to see the query results.**  TF51005: The query references a field that doesn't exist. The error is caused by `<\<Rank>>`.  
  
4.  Delete the value **Rank** from the **Field** cell, and enter `Important Rank` into the cell.  
  
5.  Select **<>** in the **Operator** cell, and enter `1` into the **Value** cell.  
  
6.  On the **Query** toolbar, choose ![Run Query](media/icon_runquery.png "Icon_runQuery")**Run**.  
  
7.  Open the shortcut menu for any row in the results and select **Column Options**. Scroll down in the **Available columns** list. Notice that the **Rank** field is no longer present but the **Important Rank** field is present.  
  
8.  Select **Important Rank** in the **Available columns** box, and then choose the **>** button (add selected columns). Choose **OK**.  
  
     Notice that the friendly name for Microsoft.VSTS.Common. Rank is renamed from **Rank** to **Important Rank** throughout the query builder and results list.  
  
9. Close the query. Choose **No** when you're prompted to save the query.  
  
10. Create a new Task work item. Choose the **New Work Items** link, and then choose **Task**.  
  
     This work item is created from the work item type that you changed and imported.  
  
11. Notice, in the **Status** box, that the label for the renamed field **Rank** didn't change. The field labels on the work item forms are scoped to the parent project and are independent of the server-wide field name specified.  
  
    > [!NOTE]  
    > For more information about how to change field labels on work item forms, see [Control XML element reference](/previous-versions/azure/devops/reference/xml/control-xml-element-reference?view=tfs-2015&preserve-view=true).  
  
12. Close the new Task and choose **No** when you're prompted to save the work item.  
  
### Change the report as value for a field  

The following command specifies the ability to report the type of the DateTime field AdventureWorks.CreatedOn to dimension. This field's data enters the warehouse and Analysis Services databases so that it can be used to filter reports.  
  
```  
witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:AdventureWorks.CreatedOn /reportingtype:dimension  
```  
  
 The following command specifies the ability to report the type of the Double field AdventureWorks.Field to measure. All measures aggregate by sum.  
  
```  
witadmin reportfield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:AdventureWorks.Field /reportingtype:measure  
```  
  
### Enable synchronization of a custom person-name field  

 The following command enables synchronization for the work item field AW.CustomerName defined for Collection1 on the AdventureWorksServer.  
  
#### Verify the data type of the field that you want to convert  
  
Verify the data type assigned to the field, such as MyCompany.CustomerName, that you want to synchronize by entering the following command:  

```  
witadmin listfields /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:MyCompany.CustomerName  
```

#### Enable synchronization  
  
1.  To enable synchronization for a person-named field, type the following command, substituting your data for the arguments that are shown here:  
  
    ```  
    witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:MyCompany.CustomerName /syncnamechanges:true  
    ```  
  
2.  The following confirmation prompt appears:  
  
     **This will change properties for field {0} on the Azure DevOps Server. Do you want to continue?**  
  
3.  Enter `0` to confirm that you want to change the field, or `1` to cancel the request.  
  
     If the change request succeeds, the following confirmation message appears:  
  
     **The field was updated.**  
  
     If the change request fails, an error message appears. The most common mistakes that can be made are trying to change a system reference field, or trying to change a field of a data type other than String. These operations aren't supported.  

### Delete a field  

Before you delete a field, verify that the field isn't in use. If the field is in use, you must first remove the field from the work item types that use it before deleting it from the project collection. The following command deletes the field `AdventureWorks.Field` from *Collection1*:  
  
```  
witadmin deletefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:AdventureWorks.Field  
```  
  
#### Verify a field isn't in use  
  
1.  Enter the following command, specifying the reference name for the work item field, such as `MyCompany.MyProcess.MyField`.  
  
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
  
2.  If the **Use** field indicates that the field is in use, then you must delete it from each work item type for each project that is listed. For example, the `Microsoft.VSTS.TCM.SystemInfo` field indicates that it's being used by the Bug and Code Defect work item types for four projects: Arroyo, Desert, Palm, and Springs.  
  
    ```  
    Field: Microsoft.VSTS.TCM.SystemInfo  
    Name: System Info  
    Type: Html  
    Reportable As: None  
    Use: Arroyo (Bug), Desert (Bug), Palm (Bug), Springs (Bug, Code Defect)  
    Indexed: False  
    ```  
  
     Before you can delete this field, you must remove it from each of the work item types listed for each project for which it's defined. To remove the field, you modify the definition for the work item type by deleting the `FIELD` and `Control` elements that contain the field reference name. See [Import, export, and manage work item types](witadmin-import-export-manage-wits.md), [FIELD (Definition) element reference](/previous-versions/azure/devops/reference/xml/field-definition-element-reference), and [Control](/previous-versions/azure/devops/reference/xml/control-xml-element-reference?view=tfs-2015&preserve-view=true).  
  
#### Delete a field from a project collection  
  
Enter the following command to delete the `MyCompany.MyProcess.MyField` field, and then choose Enter.  
  
```  
witadmin deletefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:RefName  
```  

Enter **y** at the confirmation prompt to complete this step.  

  
## Related articles 

-  [Customizing your work tracking experience](../customize-work.md)   
-  [Work item field index](../../boards/work-items/guidance/work-item-field.md)   
-  [witAdmin: Customize and manage objects for tracking work](witadmin-customize-and-manage-objects-for-tracking-work.md)
