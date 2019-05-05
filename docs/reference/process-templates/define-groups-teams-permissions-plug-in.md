---
title: Define groups, teams, and permissions 
titleSuffix: TFS
description: Customize the Groups and Permission plug-in to preconfigure groups, teams, and user permissions
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 322a80cc-0396-43d7-8be3-63d5cce058d3
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013 <= azure-devops-2019'
ms.date: 09/08/2017
---

# Define groups, teams, and permissions using the Groups and Permissions Plug-in

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can define security groups to control access to functional areas within a project. In addition to the [default security groups](../../organizations/security/permissions.md), you can configure a project's initial groups, group members, and security permissions by customizing the Groups and Permissions plug-in. With this plug-in, you can define groups, teams, add groups and users as members to groups, and grant permissions to the groups.  
  
This topic describes the syntax structure of the **groups**, **iterationPath**, **members**, **permissions**, and **teamsettings** elements that are used in the file for the Groups and Permissions plug-in. For more information about how to use these elements, see [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md).  
  
<a name="name"></a> 
##Name and location of Groups plug-in  
The Groups and Permission plug-in is defined by the GroupsandPermissions.xml plug-in file, which must conform to the schema definition that is defined in the Gss.xsd file.   
  
The file, folder, and plug-in names are:
  
**File name**: GroupsandPermissions.xml   
**Folder name**: Groups and Permissions   
**Plug-in name**:| Microsoft.ProjectCreationWizard.Groups   
  
> [!NOTE]  
>  You can change the names of the XML file and the folder but not the plug-in. TFS doesn't include a mechanism for the deployment of client-side plug-ins, policies, or other modifications. If you want to deploy this kind of functionality, you must use your own distribution and installation program.  
  
 In the Groups and Permissions plug-in, you specify one or more tasks and their dependencies within the `taskXml` element. Generally, you specify one task per security group to create for your process. For more information about how to specify tasks, see [Define the tasks to process a plug-in](define-tasks-to-process-a-plug-in.md).  
  
<a name="groups"></a> 
##Define groups  
 You use the **group** element to specify a new security group in Team Foundation Server.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<group name="GroupName" description="GroupDescription"></group>  
```  
  
The following example shows how to create a group that is named Reader:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<task id="GroupCreation1"   
      name="Create Groups and Permissions"   
      plugin="Microsoft.ProjectCreationWizard.Groups"   
      completionMessage="Groups and Permissions created.">  
   <taskXml>  
      <groups>  
         <group name="Readers"  
                description="A group for users who have read access across the project">  
            <permissions>  
               <!-- permissions -->  
            </permissions>  
         </group>  
      </groups>  
   </taskXml>  
</task>  
```  
  
<a name="members"></a> 
##Define members  
 You use the **member** element to assign a group as a member of a security group in Team Foundation Server.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<member name="MemberName" ></member>  
```  
  
> [!NOTE]  
>  A group that is a team (**isTeam="true"**) can't be a member of a group. Also, the **permissions** container element must precede the **members** container element.  
  
 The following example shows how to add TestGroup1 as a member of TestGroup2.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<task id="GroupCreation1"   
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
      </groups>  
    </taskXml>  
</task>  
```  
  
<a name="team_settings"></a> 
##Define teams and team settings  
 Within the default Groups and Permissions plug-in file, the `@defaultTeam` macro creates the default team at the root area path. You can change this structure by including additional area paths within the Classification plug-in file. By using the **teamsettings** element, you can pre-configure the iterations assigned to a team. The plug-in uses the following code snippet. In this example, three iterations are defined for the default team.  
  
> [!IMPORTANT]
>  You must assign iteration paths that correspond to paths defined in the Classification plug-in file. See [Define initial areas, iterations, and Project mapping file](define-classification-plug-in.md).  
  
> [!div class="tabbedCodeSnippets"]
```XML
<group name="@defaultTeam">  
      <permissions>  
      <permission name="GENERIC_READ" class="PROJECT" allow="true" />  
      </permissions>  
      <members>  
      <member name="@creator"/>  
      </members>  
      <teamSettings areaPath="Area">  
      <iterationPaths backlogPath="Iteration">  
         <iterationPath path="Iteration 1" />  
         <iterationPath path="Iteration 2" />  
         <iterationPath path="Iteration 3" />  
      </iterationPaths>  
      </teamSettings>  
</group>  
```  
  
 You can also define additional teams within a project. You do this by defining a group and assigning the `isTeam` attribute to `true`. The following example shows how to define a team and its permissions, members, and initial sprint assignments. Specify the default team settings for a project.  
  
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
         <iterationPath path="Iteration 1" />  
         <iterationPath path="Iteration 2" />  
         <iterationPath path="Iteration 3" />  
      </iterationPaths>  
      </teamSettings>  
</group>   
```  
  
<a name="permissions"></a> 
##Define permissions  
You must specify permissions for each group that you create. You use the **permission** element for this purpose.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<permission name="PermissionName" class="ClassName" allow="true | false"/>  
```  
  
 The following example shows how to grant permissions to the Reader security group so that members can view information about a project, but they cannot modify that information.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<group name="Readers" description="A group for users who have read access across the project">  
   <permissions>  
     <permission name="GENERIC_READ" class="PROJECT" allow="true" />  
     <permission name="GENERIC_READ" class="CSS_NODE" allow="true" />  
     <permission name="WORK_ITEM_READ" class="CSS_NODE" allow="true" />  
   </permissions>  
</group>  
```  
  
<a name="elements"></a> 
##Groups element reference  
 The following table describes the elements that you use to define the initial groups and permissions for a project. You specify these elements within a `taskXml` container element in the Groups and Permissions plug-in file. For information about this element, see [Define the tasks to process a plug-in](define-tasks-to-process-a-plug-in.md).  
  
> [!WARNING]
>  The Gss.xsd schema file does not define the `property` or `properties` elements. When you upload the process template, the Process Template Manager validates these elements before storing them.  
>   
>  The `groups` and `group` (Groups and Permission) elements are distinct from the `groups` and `group` (Process Template) elements. For information on the latter pair of elements, see [Process template XML elements reference](process-template-xml-elements-reference.md).  
  
|Element|Description and syntax|  
|-------------|-----------------|  
|**group**|Optional child element of **groups** and **Children**. Defines a group or a team and its permissions and members.<br />`<group name="GroupName" isTeam="true &#124; false" description="GroupDescription">    <permissions> . . . </permissions>    <members> . . . </members> </group>`<br />The following definitions apply for each attribute:<br />- `name`: Required. Specifies the name of the group. The name of the group must be 1 to 255 characters long.<br />- `isTeam`: Optional. Identifies the group as a team, which supports small groups to organize their work within a project.<br />-  `description`: Required when the group is not a team. Specifies a description of the group. The description is displayed within the security pages of Team Web Access.|  
|**groups**|Required child element of **taskXml** for the Groups and Permissions plug-in. Contains the group and permission definitions.<br />`<groups>`<br />      `<group> . . . </group>`<br />`</groups>`|  
|**iterationPath**|Required child element of **iterationPaths**. Specifies a team milestone.<br /> `<iterationPath path="IterationName" />`|  
|**iterationPaths**|Optional child element of **teamsettings**. Specifies team milestones.<br />`<iterationPaths backlogPath="BacklogPathName">`<br />      `. . .`<br />`</iterationPaths>`|  
|**member**|Required child element of **members**. Specifies the name of a group that you are adding as a member of another group. You can create groups and automatically populate them with TFS default groups, previously defined project groups, and groups and users in Active Directory.<br />`<member name="MemberName" >`<br />`</member>`<br />For information about how to specify default groups, see [Group macros and default groups](configure-initial-groups-teams-members-permissions.md#group-macros).|  
|**members**|Optional child element of **group** and specifies the collection of members to add to the group. The **members** container element must follow the **permissions** container element.<br />`<members>`<br />      `<member> . . . </member>`<br />`</members>`|  
|**permission**|Required child element of **permissions**. Specifies the permission to apply to the group.<br />`<permission name="PermissionName" class="ClassName" allow="true &#124; false" />`<br /> Where the following definitions apply for each attribute:<br />- `name`: Required. Specifies the name of the permission. For more information, see the table in [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md) that describes each class and name combination you can specify as a permission.<br />- `class`: Required. Identifies the class, or area, where the group permission is granted. The following values are valid: `NAMESPACE` (collection-level), `PROJECT` (project-level), `CSS_NODE` (area node) and `ITERATION_NODE` (iteration node).<br />- `allow`: Optional. Specifies a true or false value that indicates whether you are allowing the permission.|  
|**permissions**|Required child element of **group** and specifies the collection of permissions to apply to the group. The **permissions** container element must precede the **members** container element.<br />`<permissions>`<br />      `<permission> . . . </permissions>`<br />`</permissions>`|  
|**teamsettings**|Optional child element of **group**. Configures the project as the default team, and optionally specifies team milestones with the **iterationPath** element. <br /> `<teamSettings areaPath="Area">`<br />      `. . .`<br />`</teamSettings>`|  
  
## Related articles
-  [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md)   
-  [Control access to functional areas](control-access-to-functional-areas.md)   
-  [Apply a field rule](../xml/apply-rule-work-item-field.md)
-  [Set up groups for use in TFS deployments](/azure/devops/server/admin/setup-ad-groups)  
-  [Customize a process](customize-process.md)