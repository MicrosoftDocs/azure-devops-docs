---
title: Resolve errors received when configuring features for TFS
titleSuffix: TFS 
description: Occurs when definitions in the project conflict with definitions in the process templates uploaded to your project collection.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: abab1c67-6aa8-494b-86ee-3bc97c650429
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 12/19/2017
---


# Resolve errors received when configuring features

<b>TFS 2017 | TFS 2015 | TFS 2013</b> 


You may be able to resolve errors and warnings that the [Configure Features](../configure-features-after-upgrade.md) wizard displays. These problems occur because definitions in the project conflict with definitions in the process templates uploaded to your project collection. You should change the process template to resolve the error and rerun the wizard. Or, you can change your project and then rerun the wizard.    

> [!IMPORTANT]  
>This topic applies only to projects defined on an on-premises Team Foundation Server (TFS). 

  
##Required permissions 
  
-   To download and upload process templates, you must be a member of the **Project Collection Administrators** group. If security permissions are set explicitly, your **Manage process template** permission for the project collection must be set to **Allow**.  
  
-   To run the **witadmin** command-line tool, you must be a member of one of the following groups: **Team Foundation Administrators**, **Project Collection Administrators**, or **Project Administrators** for the project.  
  
 For more information, see [Add administrators, set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md).  

> [!NOTE]  
>  If you encounter problems while performing the following procedures, you might find solutions in one of the TFS forums: [Work Item Tracking](http://go.microsoft.com/fwlink/?LinkId=248070) and [Process Templates](http://go.microsoft.com/fwlink/?LinkId=248071).  
 
  
##  <a name="errors"></a> Resolve errors reported by the Configure Features wizard  
 You can resolve an error by modifying the process template used to configure the new features, or by modifying your project. After you've corrected the error, rerun the wizard.  
  
###  <a name="process_template"></a> Resolve errors by modifying a process template  
 You modify a process template by performing these steps:  
  
1.  Download the process template from Team Foundation Server. See [Download the latest process template](../../boards/work-items/guidance/manage-process-templates.md).  
  
2.  Modify a definition file for a work item type (WIT), categories, or process configuration. See [Customize your work tracking experience](../customize-work.md).  
  
3.  Upload the process template to Team Foundation Server. See [Upload, download, and delete process templates](../../boards/work-items/guidance/manage-process-templates.md).  
  
 See also [Update a customized process template to access new features](../update-customized-process-template.md).  
  
###  <a name="team_project"></a> Resolve errors by modifying your project or project collection  
 To resolve an error or warning, you may choose to modify the project or project collection using the **witadmin** command. See [witAdmin: Customize and manage objects for tracking work](../witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md).  
  
 You can export a type definition, make changes to field definitions, and then import the type definition as needed. See [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md).  
  
###  <a name="issues"></a> Issues and resolutions  
 To resolve the errors listed in the following table, take the corresponding corrective actions, either to the process template or the project, and then re-run the wizard.  
  
|Error|Issue|Process template resolution|Project resolution|  
|-----------|-----------|---------------------------------|-----------------------------|  
|**TF400613: The work item type '{1}' specified in category '{0}' does not exist**.|A required WIT is missing from your project because it was renamed, was removed, or was not added. Either rename the specified WIT definition, or import the missing WIT from the latest version of the process templates installed with the TFS upgrade.|Change the WIT defined in the specified category to specify an existing WIT.|To rename a WIT, use `witadmin renamewitd`. To add a missing WIT, locate it in the latest process template, and import it using `witadmin importwitd`. See [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md).|  
|**TF400614: Category '{0}' does not exist**.|A required category is missing from the categories definition file in the process template that was selected to update your project. Add the missing category.|Add the missing category to the process template. See [Use categories to group work item types](use-categories-to-group-work-item-types.md).|Add the missing category to the project using `witadmin importcategories`. See [Import and export categories](../witadmin/witadmin-import-export-categories.md)|  
|**TF400617: The type of field '{0}' in work item type '{1}' conflicts with the type of the existing field**.|The data type of the field defined in the WIT being added does not match the data type defined in the project collection. Correct the assignment in the WIT definition and then rerun the wizard. **Note:**  The upgrade Visual Studio Team Foundation Server 2012 changes the **Description** field (System.Description) from a field type of plain text to HTML, in order to support text formatting and insertion of images and hyperlinks. In the latest version of Team Foundation Server, you can switch the data type between `PlainText` and `HTML`.|Download the process template, open the type definition, locate the `FIELD` assignment, modify the `type` attribute to match that defined for the collection, and then, upload the process template. See [FIELD (Definition) element reference](field-definition-element-reference.md), **Tip:**  To determine the type assigned to a field, run `witadmin listfields`.|Use **witadmin changefield** and specify the `type` attribute. See [Manage work item fields](../witadmin/manage-work-item-fields.md). **Note:**  You can change the type definition for the project collection only when the type is `PlainText` or `HTML`.|  
|**TF400618: The reporting type of field '{0}' in work item type '{1}' conflicts with the reporting type of the existing field**.|A reporting attribute assigned to a field in a WIT definition does not match the attribute defined in the project collection.|Download the process template, open the type definition, locate the `FIELD` assignment and modify the `reportable` attribute to match that defined for the collection. Then, upload the process template. See [FIELD (Definition) element reference](field-definition-element-reference.md),|Use `witadmin changefield` and specify the `reportingtype` attribute. See [Manage work item fields](../witadmin/manage-work-item-fields.md).|  
|**TF400619: The**  `SyncNameChanges`  **of field '{0}' in work item type '{1}' conflicts with the SyncNameChanges  of the existing field**.|The `syncnamechanges` attribute assigned to a field in a WIT definition does not match the attribute defined in the project collection. This attribute specifies whether to update a person name field when that name changes in Active Directory.|Download the process template, open the type definition, locate the `FIELD` assignment, modify it to match the definition in the collection, and then, upload the process template. See [FIELD (Definition) element reference](field-definition-element-reference.md).|Use **witadmin changefield** command and specify the `/syncnamechanges` parameter. See [Manage work item fields](../witadmin/manage-work-item-fields.md).|  
|**TF400620: The friendly name of field '{0}' in work item type '{1}' conflicts with the friendly name of an existing field**.|The friendly name assigned to a field in a WIT definition must match that defined in the project collection.|Download the process template, open the type definition, locate the `FIELD` assignment, and modify it to match that defined for the collection. Then, upload the process template.|To change the friendly name for the project collection, use **witadmin changefield** command and specify the `/name` parameter. See [Manage work item fields](../witadmin/manage-work-item-fields.md).|  
|**TF400621: The reference name of field '{0}' in work item type '{1}' is already in use by a link type**.|Each reference name assigned to fields and link types must be unique within a project collection.|If the link type is active and in use linking work items, download the process template, open the type definition, locate the `FIELD` assignment, and modify the `refname` assignment to match that defined for the collection. Then, upload the process template. **Tip:**  To determine if a link type is in use, create a direct links query, and then filter for all work items that are linked to another work item using that link type.|If the link type is not active nor in use linking work items within the project collection, delete it. You can use **witadmin deletelinktype** to delete a link type. See [Manage link types](../witadmin/manage-link-types.md).|  
|**TF400624: The friendly name of category '{0}' conflicts with category '{1}'**.|You must assign a unique reference name and friendly name to each category of a project. You can resolve this error by renaming the existing category '{1}' either in the process template or in your project.|Download the process template, modify the categories file to rename the category, and then upload the process template. See [Use categories to group work item types](use-categories-to-group-work-item-types.md).|Export the category file using `witadmin exportcategories`, modify the friendly name assigned to category '{1}', and import the file. See [Import and export categories](../witadmin/witadmin-import-export-categories.md).|  
|**TF400654: Unable to configure Planning Tools**.|A mapping defined in the ProcessConfiguration file specifies a field or state that does not exist in the WIT defined for the project.<br /><br /> For example, if ProcessConfiguration contains a column mapping for a field that's not defined for any WIT within the corresponding category, then you'll receive this error.|Download the process template, modify the ProcessConfiguration file to correct the mapping, and then upload the process template. See [Process configuration](process-configuration-xml-element.md). |Export the WIT using `witadmin exportwitd`, add the missing field or state, and then import the WIT. See [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md).|  
  
 To learn more, see the following topics:  
  
-   [Overview of process template files](../process-templates/overview-process-template-files.md)    
-   [About work item fields and attributes](../../boards/work-items/work-item-fields.md)   
-   [Change the workflow](change-workflow-wit.md)    
-   [Add or modify work item fields to support reporting](add-or-modify-work-item-fields-to-support-reporting.md)  
  
##  <a name="warnings"></a> Resolve warnings reported by the Configure Features wizard  
 To resolve the warnings listed in the following table, follow the resolution steps, and then re-run the wizard.  
  
|Warning|Issue|Resolution|  
|-------------|-----------|----------------|  
|**TF400609: Cannot add the action '{0}' to the work item type '{1}' because the state '{2}' does not exist.**|A required `STATE` is missing.|See [Resolve errors adding an ACTION statement to a work item type](#resolve_action).|  
|**TF400610: Cannot add the action '{0}' to the work item type '{1}' because the transition from state '{2}' to '{3}' does not exist.**|A required `TRANSITION` statement is missing.|See [Resolve errors adding an ACTION statement to a work item type](#resolve_action).|  
|**Storyboarding: Unable to insert tab to work item type '{1}' in category '{2}'.**|The `TabGroup` element is missing in the type definition.|See [Add the Storyboard links control](#storyboard).|  
  
<a name="resolve_action"></a> 
### Resolve warnings about adding an ACTION statement to a work item type  
 To support the My Work feature, the Configure Features wizard inserts two `ACTION` statements into the workflow transition section of the definition for task WITs. If either the states or the transitions for moving from a new to an active state, or from an active to a new state are missing, you will receive a warning.  
  
 To resolve the warnings, review the workflow for the indicated WIT. As needed, modify the workflow to match the workflow states and transitions that are defined for the latest version of the process template installed on the upgraded TFS that matches the one used to create your project. Then, rerun the wizard. For projects based on the Agile process template, see [Update the workflow for agile projects](update-the-workflow-for-agile-team-projects.md).  
  
 To learn more, see the following topics:  
  
-   [Export and import work item types](../witadmin/witadmin-import-export-manage-wits.md)    
-   [Change the workflow](change-workflow-wit.md)    
-   [Download the latest process template](../../boards/work-items/guidance/manage-process-templates.md)   
-   [Support bug update status using My Work](support-bug-update-status-using-my-work.md)  
  
###  <a name="storyboard"></a> Add the Storyboard links control tab  
 With the addition of [Storyboarding](../../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md), you can now link work items to storyboards. To do this, you add the **Storyboard** links control tab to the definition of the WIT. If the Configure Features wizard didn't or wasn't able to add the tab, then you can add it manually. In the latest versions of the process templates installed on the upgraded TFS, the **Storyboard** links control tab appears on all backlog WITs, such as Product Backlog, User Story, and Requirement.  
  
> [!NOTE]  
> The Configure Features wizard cannot add the **Storyboard** links control tab if the `TabGroup` element is missing from the work item `FORM` section. The following procedure adds just the **Storyboard** tab. If you want to add the standard set of tabs for your backlog WIT, see the type definition in the latest version of the process template for your project. See [Download the latest process template](../../boards/work-items/guidance/manage-process-templates.md).  
  
[!INCLUDE [temp](../../_shared/witadmin-run-tool-example.md)] 
  
0.  Export the type definition file for the backlog item by substituting your data for the arguments shown:  
  
    ```  
    witadmin exportwitd  /collection:CollectionURL /p:"ProjectName" /n:"TypeName" /f:"DirectoryPath\FileName.xml"  
  
    Where:  
          CollectionURL specifies the URL of the project collection  
          ProjectName specifies the name of your project defined within the collection  
          TypeName specifies the name of your backlog item, for example User Story or Product Backlog Item.  
  
    Use the following format for CollectionURL:      http://ServerName:Port/VirtualDirectoryName/CollectionName  
    For example: http://srvalm:8080/tfs/DefaultCollection.  
  
    ```  
  
0.  Open the file using a text editor, such as Notepad.  
  
0.  Add this code snippet just before the `</Layout>` end-tag of your backlog type:  
  
	> [!div class="tabbedCodeSnippets"]
	```XML  
    <TabGroup>  
    <Tab Label="Storyboards">   
          <Control Name="StoryboardsControl" Type="LinksControl">   
          <LinksControlOptions>   
             <WorkItemLinkFilters FilterType="excludeAll" />   
             <ExternalLinkFilters FilterType="include">   
                   <Filter LinkType="Storyboard" />   
             </ExternalLinkFilters>   
             <LinkColumns>   
                   <LinkColumn RefName="System.Title" />   
                   <LinkColumn LinkAttribute="System.Links.Comment" />   
             </LinkColumns>   
          </LinksControlOptions>   
          </Control>   
    </Tab>   
    </TabGroup>  
    ```  
  
0.  Save and close the file.  
  
0.  Import the type definition file by typing this command, substituting your data for the arguments that are shown:  
  
    ```  
    witadmin importwitd /collection:CollectionURL /p:"ProjectName" /f:"DirectoryPath\FileName.xml"  
    ```  
  
0.  Verify that the tab shows up in the backlog item.  
  
## Related articles

-  [Update a customized process template to access new features](../update-customized-process-template.md)