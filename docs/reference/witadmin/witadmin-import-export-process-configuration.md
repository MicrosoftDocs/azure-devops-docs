---
title: Import or export process configuration  
titleSuffix: TFS
description: Modify the display of the Agile planning tool pages that you view through the web portal for Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 95fd448f-d702-4399-b9c2-d61cdce33c02
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '<= azure-devops-2019'
ms.date: 03/20/2018
---


# Import and export process configuration

[!INCLUDE [temp](../../_shared/customization-witadmin-plus-version-header.md)]

You customize the process configuration to modify the display of the web portal Agile tools. A few additional tools require that you map workflow states to metastate mappings.  
  
> [!NOTE]  
> If you receive error message TF400917, an invalid configuration has occurred. Re-import the process configuration file to your project using **witadmin importprocessconfig**. You'll get the messages you need to resolve the error.  
  
To manage the process configuration for a project, use the **witadmin** command line tool to export and import the process configuration XML definition file. To learn about process configuration, see [ProcessConfiguration](../xml/process-configuration-xml-element.md).   
-   **exportprocessconfig**:  Exports the process configuration definition to an XML file or the Command Prompt window.    
-   **importprocessconfig**:  Imports the process configuration definition XML file.  
  
[!INCLUDE [temp](../../_shared/witadmin-run-tool.md)]

[!INCLUDE [temp](../../_shared/process-editor.md)]
 

## Prerequisites  

- To export process configuration definitions, you must be a valid user of the project or collection.    
- To import process configuration definitions, you must be a member of the following security groups: **Team Foundation Administrators** or **Project Administrators**.  
  
For more information, see [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md).  
  
## Syntax  
  
```  
witadmin exportprocessconfig /collection:CollectionURL /p:ProjectName [/f:FileName] [/e:encoding]    
witadmin importprocessconfig /collection:CollectionURL [/p:ProjectName] /f:FileName [/e:encoding] [/v]  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`CollectionURLx`|Specifies the URI of the project collection. For example:<br /><br /> **On-premises TFS format:  http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If no virtual directory is used, then the format for the URI is the following: **http**://*ServerName:Port/CollectionName*.|  
|**/p**:`ProjectName`|Required. Specifies the project for which you want to export or import the process configuration. This project must be defined in the collection that you specified by using the /collection parameter. You do not need to specify a project when you specify the `/v` switch.|  
|**/f**:`FileName`|The path and the name of the XML definition file for the process configuration to export or import.<br /><br /> **Note:** If the client computer is running Windows Vista, you might not have permissions to certain folders. If you try to export the global list to a location where you do not have permissions, the registry virtualization technology automatically redirects the exported file and saves it to the virtual store. For more information, see the following pages on the Microsoft website: [Registry Virtualization](http://go.microsoft.com/fwlink/?LinkId=92325) and [Common file and registry virtualization issues in Windows Vista](http://go.microsoft.com/fwlink/?LinkId=92323). To avoid this redirection, you can export the file to a location where you have permissions.|  
|**/e**:`Encoding`|Optional. The name of a .NET Framework 2.0 encoding format. The specified encoding will be used to export or import the XML data. For example, `/e utf-7` specifies Unicode (UTF-7) encoding. If you omit this parameter, **witadmin** attempts to detect the encoding and uses UTF-8 if detection fails.|  
|**/v**|Optional. Validates the XML that defines the process configuration but does not import the definition file.|  
|**/?** or **help**|Displays help about the command in the Command Prompt window.|  
  
## Remarks  
 Installing the latest version of TFS upgrades existing projects. If you are updating an upgraded project, see [Configure features after an upgrade](../configure-features-after-upgrade.md).  
  
 If you encounter problems accessing existing test plans or test suites after an upgrade, see [Manual updates to support test management](../xml/update-a-team-project-manually-to-support-test-management.md).  
  
## Examples  

The following values apply in each example:  
  
-   URL for the collection: http://AdventureWorksServer:8080/tfs/DefaultCollection    
-   Project: Contoso   
-   Port number for the server website: 8080  

<a name="quick_add"></a>   

### To add a field to the quick add panel  

You can add fields for any quick add panel. For example, the following example adds **Business Value** to the product backlog panel.  
  
![Backlog panel with Business Value field added](_img/alm_upg_addpanel.png "ALM_UPG_AddPanel")  
  
The panel only displays fields that are included in the `FIELDS` section of the WIT definition for the WIT selected. For example, if you select the bug WIT, then only Title displays, as Business Value isn't defined for bugs. To add another WIT to the panel, you add it to the Requirements Category. See [Add a work item type to a backlog and board](../add-wits-to-backlogs-and-boards.md).  
  
1.  If you don't have administrative permissions for your project, [get them](../../organizations/security/set-project-collection-level-permissions.md).  
  
2.  Open a Command Prompt window according to the instructions provided in [How to run the witadmin command-line tool](#run-witadmin-tool). For example:   
  
	```
	cd %programfiles(x86)%\Microsoft Visual Studio\2017\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer
	```    

3.  Export the process configuration file.  
  
    ```  
    witadmin exportprocessconfig /collection:CollectionURL /p:ProjectName /f:"DirectoryPath\ProcessConfiguration.xml"  
    ``` 
 
	An example of a *CollectionURL* is http://MyServer:8080/tfs/TeamProjectCollectionName.  
  
4.  Add the field reference name to the `AddPanel` section.  
  
     For example, the following syntax adds the **Priority** element to the panel.  
  
    ```xml
    <AddPanel>  
       <Fields>  
          <Field refname="System.Title" />  
          <Field refname="Microsoft.VSTS.Common.BusinessValue" />  
       </Fields>  
    </AddPanel>  
    ```  
  
     > [!TIP]    
    > -  You can look up the reference name for a field using this [index](../../boards/work-items/guidance/work-item-field.md).    
    > -  Add all required fields for work item types defined for the Requirements Category. That way, you avoid having to open the work item form to fill them in when you add backlog items through the panel.  
  
5.  Import the process configuration file.  
  
    ```  
    witadmin importprocessconfig /collection:CollectionURL /p:ProjectName /f:"DirectoryPath\ProcessConfiguration.xml"  
    ```  
  
6.  Refresh your backlog page to view the updated panel.  
  
<a name="test_manager"></a> 

### Update metastate mappings to support Test Manager  

 If you customize the `WORKFLOW` section of the test plan or test suite, you must map the states to metastates.  
  
 In the following example, the test plan workflow has been updated to use the Design, Testing, and Signed Off states. To support backward compatibility, the `TestPlanWorkItems` is added to the `ProjectProcessConfiguration` section of the process configuration definition.  


**Workflow**

> [!div class="tabbedCodeSnippets"]
```XML
<WORKFLOW>
      <STATES>
        <STATE value="Design" />
        <STATE value="Testing" />
        <STATE value="Signed Off" />
      </STATES>
      <TRANSITIONS>
        <TRANSITION from="" to="Design">
          <REASONS>
            <DEFAULTREASON value="New test plan" />
          </REASONS>
        </TRANSITION>
     <TRANSITION from="Design" to="Testing">
          <REASONS>
            <DEFAULTREASON value="Authoring complete" />
          </REASONS>
        </TRANSITION>        
     <TRANSITION from="Testing" to="Signed Off">
          <REASONS>
            <DEFAULTREASON value="Signed Off testing" />
          </REASONS>
        </TRANSITION>
        <TRANSITION from="Signed Off" to="Design">
          <REASONS>
            <DEFAULTREASON value="Reactivating to authoring phase" />
          </REASONS>
        </TRANSITION>
        <TRANSITION from="Signed Off" to="Testing">
          <REASONS>
            <DEFAULTREASON value="Reactivating to run tests" />
          </REASONS>
        </TRANSITION>
        <TRANSITION from="Testing" to="Design">
          <REASONS>
            <DEFAULTREASON value="Back to authoring" />
          </REASONS>
        </TRANSITION>
      </TRANSITIONS>
    </WORKFLOW>
```
  
**Metastate mappings**

> [!div class="tabbedCodeSnippets"]
```XML
<TestPlanWorkItems category="Microsoft.TestPlanCategory" pluralName="Test Plans" singularName="Test Plan">
    <States>
      <State type="InProgress" value="Design" />
      <State type="InProgress" value="Testing" />
      <State type="Complete" value="Signed Off" />
    </States>
  </TestPlanWorkItems>
<TestSuiteWorkItems category="Microsoft.TestSuiteCategory" pluralName="Test Suites" singularName="Test Suite">
    <States>
      <State type="Proposed" value="In Planning" />
      <State type="InProgress" value="In Progress" />
      <State type="Complete" value="Completed" />
    </States>
  </TestSuiteWorkItems>
```

If you modify the test suite workflow, then you have to make a similar update if you want to map new states. You would add it within a `TestSuiteWorkItems` section.  See [ProcessConfiguration](../xml/process-configuration-xml-element.md).  
  
## Related articles
- [Configure features after an upgrade](../configure-features-after-upgrade.md) 
- [Control XML element reference](../xml/control-xml-element-reference.md)  
- [Change the work item form layout](../xml/change-work-item-form-layout.md)   
- [Edit a WIT definition to add web content to a work item form](..//xml/edit-wit-definition-add-web-content-form.md)


## Q & A  
  
### Q: What customizations can I make and still use the Configure Features Wizard to update my project after a TFS upgrade?  

**A:** You can customize the quick add panel. The [Configure Features Wizard](../configure-features-after-upgrade.md) will update your projects and you'll get access to the latest features.  
  
Other changes might require you to perform some manual operations when updating your project. To learn about which customizations you can safely make and which you should avoid, see [Customize the work tracking experience: Before you customize, understand the maintenance and upgrade implications](../customize-work.md).  
  
### Q: When do I need to map workflow states to metastates?  

**A:** When you add or remove workflow states to the following WITs, you should consider updating the process configuration to add or remove corresponding metastate mappings.  
  
- **WITs that belong to the Requirement Category or Task Category**: Metastate mappings support the display of the Agile planning tools.  
  
- **WITs that belong to the Bug Category**: Metastate mappings to support **My Work** tool (Agile and CMMI-based projects).  
  
- **Test Plan and Test Suite**: Updates to the workflow of these WITs must be mapped only when you support team members connecting to TFS from a version of Test Manager that is based on Visual Studio 2013.2 or earlier version.  
  
	Update the metastate mappings if you receive an **Application detected an unexpected fault** error when you connect to your project.  
  
	![Application fault error message after TFS upgrade](_img/alm_upg_testcenterfaulterror.png "ALM_UPG_TestCenterFaultError")  
  
### How do I resolve process configuration errors?  

**A:**  When you make one of the following changes to a project, you'll need to update the definitions for the WIT, categories, or process configuration. To avoid errors, always make your changes in this order: (1) WITs, (2) categories, and (3) process configuration.

<table><tr><th><p>Customization</p></th><th><p>Update or verify the WIT definition</p></th><th scope="col"><p>Update or verify the process configuration definition</p></th>
</tr>
<tbody valign="top">
<tr><td><p>Add a WIT to the Requirements Category </p><p>(A WIT can belong to the Requirements Category or the Task Category, but not both.)</p></td><td data-th="Update or verify the WIT definition"><p>To include the following fields: </p><ul class="unordered"><li><p>Backlog Priority (Scrum) or Stack Rank (Agile or CMMI) </p><p>(must match the field value assigned to type=Order in the process configuration file)</p></li><li><p>Effort (Scrum), Story Points (Agile), or Size (CMMI)</p><p>(must match the field value assigned to `type=Effort` in the process configuration file)</p></li><li><p>Area path or the field value assigned to `type=Team` in the process configuration file </p></li>
<li><p>All fields that are included in the `AddPanel` section of the process configuration file (fields must be defined within the `FIELDS` section but don't have to be included within the `FORM` section.</p></li>
</ul>
</td><td data-th="Update or verify the process configuration definition"><p>To contain the necessary metastate mappings: </p><ul class="unordered"><li><p>Map the start of each workflow state to `type="Proposed"` </p></li><li><p>Map each intermediate workflow state you want to have show up on the Kanban board to `type="InProgress"` </p></li><li><p>Map the end of each workflow state to `type="Complete"` </p><p>You can have only one State mapped to  `type="Complete"`</p></li></ul><p>To contain an entry to define the color codes associated with the WIT. For example: </p>
<code>&lt;WorkItemColor primary="FF009CCC" secondary="FFD6ECF2"  
name="Product Backlog Item" /&gt;</code></td></tr>
<tr><td data-th="Customization"><p>Change the workflow of a WIT in the Requirements Category</p></td><td data-th="Update or verify the WIT definition"><p>N/A</p></td><td data-th="Update or verify the process configuration definition"><p>To contain the necessary metastate mappings as described above for adding a WIT to the Requirements Category. </p></td></tr><tr><td data-th="Customization"><p>Add a WIT to the Task Category</p></td><td data-th="Update or verify the WIT definition"><p>To include the following fields:</p><ul class="unordered"><li><p>Backlog Priority (Scrum) or Stack Rank (Agile or CMMI)</p></li><li><p>Activity (Scrum or Agile) or Discipline (CMMI) </p><p>(must match the field value assigned to `type=Activity` in the process configuration file)</p></li><li><p>Remaining Work</p><p>(must match the field value assigned to `type=RemainingWork` in the process configuration file)</p></li><li><p>Area path or the field value assigned to `type=Team` in the process configuration file </p></li><li><p>(Optional) Original Work and Completed Work (Agile and CMMI only) </p></li></ul></td><td data-th="Update or verify the process configuration definition"><p>To contain the necessary metastate mappings: </p><ul class="unordered"><li><p>Map the start of each workflow state to type="Proposed" </p></li><li><p>Map each intermediate workflow state that you want to have show up on the task board to `type="InProgress"` </p></li><li><p>Map the end of each workflow state to `type="Complete`" </p><p>You can have only one State mapped to `type="Complete"`</p></li></ul><p>To contain an entry to define the color codes associated with the WIT. For example: </p>
<code>&lt;WorkItemColor primary="FFF2CB1D" secondary="FFF6F5D2"  
name="Task" /&gt;</code></td></tr><tr><td data-th="Customization"><p>Change the workflow of a WIT in the Task Category</p></td><td data-th="Update or verify the WIT definition"><p>N/A</p></td><td data-th="Update or verify the process configuration definition"><p>To contain the necessary metastate mappings as described above for adding a WIT to the Task Category. </p></td></tr><tr><td data-th="Customization"><p>Add a WIT to the Bug Category (Agile and CMMI only)</p><p>Change the workflow of a WIT in the Bug Category (Agile and CMMI only)</p></td><td data-th="Update or verify the WIT definition"><p>N/A</p></td><td data-th="Update or verify the process configuration definition"><p>To contain the necessary metastate mappings: </p><ul class="unordered"><li><p>Map the start of each workflow state to  `type="Proposed"`</p></li><li><p>Map each intermediate workflow state you want to have show up for My Work to `type="InProgress"`</p></li><li><p>Map the end of each workflow state  type="Complete"</p><p>You can have only one State mapped to `type="Complete"`</p></li></ul><p>To learn more, see [Support bug update status using My Work](../xml/support-bug-update-status-using-my-work.md)</a>.</p></td></tr><tr><td><p>Remove a WIT from the Requirements Category or Task Category</p></td><td><p>N/A</p></td>
<td><p>To remove any metastate mappings that are only associated with that WIT</p></td></tr><tr><td data-th="Customization"><p>Remove a WIT from a project</p></td><td data-th="Update or verify the WIT definition"><p>To remove the WIT from the categories file.</p></td>
<td><p>To remove any metastate mappings that are only associated with the WIT that you removed and the `WorkItemColor` element that defines the color codes for the WIT you removed.</p></td></tr>
</tbody>
</table>

 
### Q: Do you want to work with two or more portfolio backlogs?  

**A:** The default experience supports one level of portfolio backlog. You can add up to five levels as described in [Add portfolio backlogs to Agile tools](../add-portfolio-backlogs.md).  
  
### Q: Do you want to add or change the WITs that appear on your task board or product backlog?  

**A:** If you've added a custom WIT and want to add that to either the backlog or task board, you can. You just can't have them appear in both places. Learn how by reading [Add work item types to backlogs and boards](../add-wits-to-backlogs-and-boards.md).  

