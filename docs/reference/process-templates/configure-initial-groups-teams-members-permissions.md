---
title: Configure initial security settings 
titleSuffix: Azure DevOps & TFS
description: Configure the initial security settings for a project using the plug-in file
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 518b3c00-0587-45fe-8cbb-43f6a2760ea0
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 09/08/2017
---

# Configure initial groups, teams, members, and permissions

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

By using the plug-in file for Groups and Permissions, you can configure the initial security settings for a project. You accomplish this by defining tasks that create security groups, nest groups, define groups as teams, configure initial team settings, assign members to groups, and allow or deny specific permissions to each group. In addition to performing these tasks, you can specify the initial security settings for collection-level, project-level, and project-classification areas.  
  
 Microsoft process templates assign several permissions to default groups. You can modify these assignments by customizing the plug-in file for Groups and Permissions. For more information about this plug-in, see [Define groups, teams, and permissions](define-groups-teams-permissions-plug-in.md).  
  
 For information about how to configure the initial security settings for a project's functional areas, such as Team Foundation Build, Team Foundation version control, and Visual Studio Lab Management, see [Control access to functional areas](control-access-to-functional-areas.md).  
  
 For information about how to customize types of work items to allow or deny access to groups or users, see [Apply a field rule](../xml/apply-rule-work-item-field.md).  

 For more information about how to administer users and groups and control access for Visual Studio Application Lifecycle Management (ALM), see [Set up groups for use in TFS deployments](/azure/devops/server/admin/setup-ad-groups).  
  
<a name="ElementsGroups"></a> 
##  Define and assign permissions to groups  
 You can use the **group** and **member** elements to specify a new security group in Team Foundation Server and add members to that group. You can use the group **permission** element to assign permissions to a group and to members of that group. You must encapsulate each of these elements within their corresponding container elements: **groups**, **permissions**, and **members**. You use the following the syntax structure for each of these elements:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<group name="Group Name" description="Description of Group"></group>  
<permission name="PermissionName" class="ClassName" allow="True | False"/>  
<member name="MemberName"></member>  
```  
  
The following table describes the attributes for the **group**, **member**, and group **permission** elements. You use these elements only in the Groups and Permissions plug-in file.  
  
|**Element**|**Attribute**|**Description**|  
|-----------------|-------------------|---------------------|  
|**group**|**name**|Specifies the name of the group that you are creating.|  
||**isTeam**|Indicates if the group is a team (**true**) or not (`false`).|  
||**description**|Describes the purpose of the group to other users.|  
|**member**|**name**|Specifies the name of a group that you are adding as a member of another group. You can create groups and pre-populate them with any of the following types of members:<br /><br /> <ul><li>Default groups that are defined in Team Foundation Server</li><li>Project groups that have been previously created in the GroupsandPermissions.xml file (for example, [$$PROJECTNAME$$]\Contributors)</li><li>Groups and users who are defined in Active Directory, which you specify by using the following format:<br /><br /> <ul><li>DOMAIN\USERNAME</li><li>DOMAIN\GROUPNAME</li></ul></li></ul><br /> For information about the format to use when you specify default groups, see [Group macros and default groups](#group-macros) later in this topic.<br /><br /> The **permissions** container element must precede the **members** container element.|  
|**permission**|**name**|Identifies which permission is being applied. For a list of the supported permissions, see the following sections later in this topic:<br /><br /> -   [Assign collection-level permissions](#CollectionLevel)<br />-   [Assign project-level permissions](#Project)<br />-   [Assign permissions to control area paths](#AreaPaths)<br />-   [Assign permissions to control iteration paths](#IterationPaths)<br /><br /> The **permissions** container element must precede the **members** container element.|  
||**class**|Identifies the class, or area, where the group permission is granted. The following values are valid:<br /><br /> -   **NAMESPACE**: Specifies collection-level permissions.<br />-   **PROJECT**: Specifies project-level permissions.<br />-   **CSS_NODE**: Specifies permissions for viewing and managing area paths for a project.<br />-   **ITERATION_NODE**: Specifies permissions for viewing and managing iteration paths for a project.<br />-|  
||**allow**|Uses a **true** or **false** value to indicate whether the permission is allowed or denied.|  
||**path**|Identifies the node of the area path or iteration path where the permission is being applied. This attribute is valid only when **class** is set to CSS_NODE or ITERATION_NODE.|  
  
<a name="group-macros"></a> 
##Group macros and default groups  
 The following table lists the macros that you can use to specify a default group that is defined in Team Foundation Server.  
  
> [!NOTE]
>  You can specify the macros in the following table only in the plug-in for Groups and Permissions. You cannot specify these macros when you assign permissions by using the plug-ins for build, version control, or lab management.  
  
|Default groups|Macro|  
|--------------------|-----------|  
|Project Collection Administrators|[SERVER]\\$$PROJECTCOLLECTIONADMINGROUP$$<br /><br /> [SERVER]\\$$TEAMFOUNDATIONADMINGROUP$$<br /><br /> $$COLLECTIONADMINGROUP$$|  
|Project Collection Service Accounts|[SERVER]\\$$PROJECTCOLLECTIONSERVICESGROUP$$|  
|Project Collection Build Service Accounts|[SERVER]\\$$PROJECTCOLLECTIONBUILDSERVICESGROUP$$<br /><br /> $$COLLECTIONBUILDSERVICESGROUP$$|  
|Project Collection Build Administrators|[SERVER]\\$$PROJECTCOLLECTIONBUILDADMINSGROUP$$<br /><br /> $$COLLECTIONBUILDADMINISTRATORSGROUP$$|  
|Project Administrators|$$PROJECTADMINGROUP$$<br /><br /> [$$PROJECTNAME$$]\\$$PROJECTADMINGROUP$$<br /><br /> [$$PROJECTNAME$$]\Builders|  
|Project creator|$$CREATOR_OWNER$$<br /><br /> @creator|  
|Default team|@defaultTeam|  
  
<a name="NestingGroups"></a> 
###Example: Nest groups and assign members to groups  
 The following example shows how to configure groups that are named TestGroup1, TestGroup2, and TestGroup3. In this example, you add TestGroup1 as a member of TestGroup2. For this code to be valid, you must define TestGroup1 before you define TestGroup2.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<task id="GroupCreation1">   
    <taskXml>  
      <groups>  
        <group name="TestGroup1" description="Test group 1.  Contains no members out of the box.">  
          <permissions>  
            <permission name="GENERIC_READ" class="PROJECT" allow="true" />  
          </permissions>  
        </group>  
        <group name="TestGroup2" description="Test group 2.  Contains TestGroup1 and Project Administrators.">  
          <permissions>  
            <permission name="GENERIC_READ" class="PROJECT" allow="true" />  
          </permissions>  
          <members>  
            <member name="TestGroup1" />  
            <member name="$$PROJECTADMINGROUP$$" />  
          </members>  
        </group>  
        <group name="TestGroup3" description="Test group 3. Contains DOMAIN\USER, DOMAIN\GROUP, Project Administrators, and Project Collection Build Service Accounts.">  
          <permissions>  
            <permission name="GENERIC_READ" class="PROJECT" allow="true" />  
          </permissions>  
          <members>  
            <member name="DOMAIN\USER" />  
            <member name="DOMAIN\GROUP" />  
            <member name="[$$PROJECTNAME$$]\$$PROJECTADMINGROUP$$" />  
            <member name="[SERVER]\$$PROJECTCOLLECTIONBUILDSERVICESGROUP$$" />  
          </members>  
        </group>  
      </groups>  
    </taskXml>  
</task>  
```  
  
<a name="team"></a> 
##Define a team  
 In addition to creating groups, you can assign a group as a team. Creating a project also creates a default team. If you have several teams that want to organize their work separately from the other teams, then you can either define these teams within the Groups and Permissions plug-in file, or you can configure them after you create the project. See [Add another team](../../organizations/settings/add-teams.md).  
  
 The following example shows how to configure a group as a team. In this example, you specify the group, Dream Team, as a team and add the project creator as a member of the team. Whatever iteration paths that you specify for the team must be defined in the Classifications plug-in file. See [Define initial areas, iterations, and Project mapping file](define-classification-plug-in.md).  
  
> [!div class="tabbedCodeSnippets"]
```XML
<group name="Dream Team" isTeam="true" description="Next generation work">  
      <permissions>  
      <permission name="GENERIC_READ" class="PROJECT" allow="true" />  
      </permissions>  
      <members>  
      <member name="@creator"/>  
      </members>  
      <teamSettings areaPath="Area">  
      <iterationPaths backlogPath="Iteration">  
         <iterationPath path="Release 1\Sprint 1" />  
         <iterationPath path="Release 1\Sprint 2" />  
         <iterationPath path="Release 1\Sprint 3" />  
         <iterationPath path="Release 1\Sprint 4" />  
         <iterationPath path="Release 1\Sprint 5" />  
         <iterationPath path="Release 1\Sprint 6" />  
      </iterationPaths>  
      </teamSettings>  
</group>  
```  
  
<a name="CollectionLevel"></a> 
##  Assign collection-level permissions  
You can assign collection-level permissions by using the group **permission** element and the NAMESPACE class. These permissions control access to resources that are available across projects. You can set collection-level permissions for only the following categories of users:  
  
-   Collection-level users and groups, such as Project Collection Administrators    
-   Project-level groups that have been added to the collection level on your server that is running Team Foundation    
-   Custom groups that you create and add to the collection level  
  
For the format to use when you specify groups, see [Group macros and default groups](#group-macros) earlier in this topic.  

The following example shows how to grant collection-level permissions to the project administrators for a project.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<group name="PROJECTADMINGROUP" description="Members of this group can add, modify, and delete items within the project.">  
   <permissions>  
       <permission name="GENERIC_READ" class="NAMESPACE" allow="true" />  
       <permission name="WORK_ITEM_WRITE" class="NAMESPACE" allow="true" />  
       <permission name="MANAGE_TEMPLATE" class="NAMESPACE" allow="true" />  
       <permission name="MANAGE_TEST_CONTROLLERS" class="NAMESPACE" allow="true" />  
    </permissions>  
</group>  
```  
  
The following table describes the collection-level permissions that you can assign.  
  
> [!NOTE]
>  By default, no collection-level permissions are assigned in the default process templates.  
  
|**Permission**|**Description**|  
|--------------------|---------------------|  
|**DIAGNOSTIC_TRACE**|**Alter trace settings**. Can change the trace settings for gathering more detailed diagnostic information about Web services for Team Foundation Server.|  
|**CREATE_PROJECTS**|**Create new projects**. Can create projects in the project collection.|  
|**GENERIC_WRITE**|**Edit collection-level information**. Can edit collection-level permissions for users and groups in the project collection. Users who have this permission can perform the following tasks:<br /><br /> -   Add, remove, or rename a collection-level application group from the collection in Team Foundation Server. **Note:**      You cannot remove default collection-level groups, such as Project Collection Administrators.<br />-   Add or remove a user or group in Windows user or another application group in Team Foundation Server (at the server level).<br />-   Change collection-level permissions for users and groups.<br /><br /> Additionally, users who have this permission can modify permissions for version control, and they have write access to all files in version control unless their access is explicitly denied by other permissions.|  
|**MANAGE_TEMPLATE**|**Manage process templates**. Can download, create, edit, and upload process templates to the project collection.|  
|**MANAGE_TEST_CONTROLLERS**|**Manage test controllers**. Can register and de-register test controllers for the project collection.|  
|**GENERIC_READ**|**View collection-level information**. Can view membership of collection-level groups and the permissions of those users.|  
  
<a name="Project"></a> 
##Assign project-level permissions  
 You can assign project-level permissions in the Groups and Permissions plug-in file. You assign these permissions by using the group **permission** element and the PROJECT class. These permissions control access to a single project's resources. You can grant access to users and groups in Windows, groups in Team Foundation, and groups that you have previously defined in the Groups and Permissions plug-in file. For the format to use when you specify groups, see [Group macros and default groups](#group-macros) earlier in this topic.  
  
 The following example shows how to grant several permissions to the Contributors group for a project.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<group name="Contributors" description="Members of this group can add, modify, and delete items within the project.">  
   <permissions>  
      <permission name="GENERIC_READ" class="PROJECT" allow="true" />  
      <permission name="DELETE_TEST_RESULTS" class="PROJECT" allow="true" />  
       <permission name="PUBLISH_TEST_RESULTS" class="PROJECT" allow="true" />  
       <permission name="VIEW_TEST_RESULTS" class="PROJECT" allow="true" />  
       <permission name="MANAGE_TEST_ENVIRONMENTS" class="PROJECT" allow="true" />  
      <permission name="MANAGE_TEST_CONFIGURATIONS" class="PROJECT" allow="true" />  
   </permissions>  
</group>  
```  
  
The following table describes the project-level permissions that you can assign and indicates the default assignments that are made in the default process templates.  
  
|**Permission**|**Description**|Readers|Contributors|Build Administrators|  
|--------------------|---------------------|-------------|------------------|--------------------------|  
|**GENERIC_READ**|**View project-level information**. Can view membership of project-level groups and the permissions of those members.|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**VIEW_TEST_RESULTS**|**View test runs**. Can view test plans in this node.|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**MANAGE_TEST_CONFIGURATIONS**|**Manage test configurations**. Can create and delete test configurations for the project.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**MANAGE_TEST_ENVIRONMENTS**|**Manage test environments**. Can create and delete test environments for the project.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**PUBLISH_TEST_RESULTS**|**Create test runs**. Can add and remove test results and add or modify test runs for the project.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**DELETE_TEST_RESULTS**|**Delete test runs**. Can delete a scheduled test for the project.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**DELETE**|**Delete project**. Can delete from Team Foundation Server the project for which the user has this permission.||||  
|**GENERIC_WRITE**|**Edit project-level information**. Can edit project-level permissions for users and groups in Team Foundation Server.||||  
  
<a name="AreaPaths"></a> 
##Assign permissions to control area paths  
 You can assign permissions that control access to area definitions by using the group **permission** element and the CSS_NODE class. These permissions control access to a single project's classification structure. You can grant access to users and groups in Windows, groups in Team Foundation, and groups that you have previously defined in the Groups and Permissions plug-in file. For information about the format to use when you specify groups, see [Group macros and default groups](#group-macros) earlier in this topic.  
  
 The following example shows how to grant several permissions to the Contributors group for a project.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<group name="Contributors" description="Members of this group can add, modify, and delete items within the project.">  
   <permissions>  
      <permission name="GENERIC_READ" class="CSS_NODE" allow="true" />  
      <permission name="WORK_ITEM_READ" class="CSS_NODE" allow="true" />  
      <permission name="WORK_ITEM_WRITE" class="CSS_NODE" allow="true" />  
      <permission name="MANAGE_TEST_PLANS" class="CSS_NODE" allow="true" />  
   </permissions>  
</group>  
```  
  
 The following table describes the permissions that you can assign to control access to the hierarchical structure for the project's area and iteration nodes. The table also indicates the default assignments that are made in the default process templates.  
  
> [!NOTE]
>  Some operations for tracking work items require multiple permissions. For example, you need multiple permissions to delete a node.  
  
|**Permission**|**Description**|Readers|Contributors|Build Administrators|  
|--------------------|---------------------|-------------|------------------|--------------------------|  
|**GENERIC_READ**|**View this node**. Can view the security settings for an area node.|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**WORK_ITEM_READ**|**View work items in this node**. Can view, but not change, work items that are assigned to an area node.|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**WORK_ITEM_WRITE**|**Edit work items in this node**. Can edit work items that are assigned to an area node.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**MANAGE_TEST_PLANS**|**Manage test plans**. Can create and edit test plans that are assigned to an area node. If test plans have not been run, you can also delete them.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**CREATE_CHILDREN**|**Create and order child nodes**. Can create area nodes. Users who have both this permission and the GENERIC_WRITE permission can move or re-order any child area node.||||  
|**DELETE**|**Delete this node**. Can delete area nodes.<br /><br /> Users who have both this permission and the GENERIC_WRITE permission for another node can delete area nodes and reclassify existing work items from the deleted node. If the deleted node has child nodes, those nodes are also deleted.||||  
|**GENERIC_WRITE**|**Edit this node**. Can set permissions for and rename area nodes.||||  
  
<a name="IterationPaths"></a> 
##Assign permissions to control iteration paths  

You assign permissions that control access to iteration paths by using the group **permission** element and the **ITERATION_NODE** class. These permissions control access to the milestone releases or iterations for a single project. You can grant access to users and groups in Windows, default TFS groups, and groups that you have previously defined in the Groups and Permissions plug-in file. For information about the format to use when you specify groups, see [Group macros and default groups](#group-macros) earlier in this topic.  
  
 The following example shows how to grant several permissions to the Contributors group for a project:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<group name="Contributors" description="Members of this group can add, modify, and delete items within the project.">  
   <permissions>  
      <permission name="GENERIC_READ" class="ITERATION_NODE" allow="true" />  
      <permission name="GENERIC_WRITE" class="ITERATION_NODE" allow="true" />  
      <permission name="CREATE_CHILDREN" class="ITERATION_NODE" allow="true" />  
   </permissions>  
</group>  
```  
  
The following table describes the permissions that you can assign to control access to the hierarchical structure for the project's iteration nodes. Because the default process templates do not specify any `ITERATION_NODE` permissions, all team members can create, view, and delete iteration nodes.  
  
> [!NOTE]  
>  Some operations for tracking work items require multiple permissions. For example, you need multiple permissions to delete a node.  
  
|**Permission**|**Description**|  
|--------------------|---------------------|  
|**GENERIC_READ**|**View this node**. Can view the security settings for a node.|  
|**CREATE_CHILDREN**|**Create and order child nodes**. Can create iteration nodes. Users who have both this permission and the GENERIC_WRITE permission can move or re-order any iteration node.|  
|**DELETE**|**Delete this node**. Can delete iteration nodes.<br /><br /> Users who have both this permission and the GENERIC_WRITE permission for another node can delete iteration nodes and reclassify existing work items from the deleted node. If the deleted node has child nodes, those nodes are also deleted.|  
|**GENERIC_WRITE**|**Edit this node**. Can set permissions for iteration nodes and rename nodes.|  
  
## Related articles 
- [Define groups, teams, and permissions](define-groups-teams-permissions-plug-in.md)   
- [Control access to functional areas](control-access-to-functional-areas.md)   
- [Set up groups for use in TFS deployments](/azure/devops/server/admin/setup-ad-groups)   
- [Permission reference](/azure/devops/repos/tfvc/permission-command)
- [Change groups and permissions with TFSSecurity](/azure/devops/server/ref/command-line/tfssecurity-cmd)
- [tf permission Command](../../repos/tfvc/permission-command.md).  
  
