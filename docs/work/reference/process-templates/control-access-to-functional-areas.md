---
title: Control access to functional areas | Team Services & TFS
description: Configure the initial security settings for the following functional areas for a team project - Team Foundation Server (TFS)
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.topic: reference
ms.assetid: 6c967b40-4842-41db-9350-bb3320f3e57c
ms.author: kaelli
ms.manager: douge
ms.date: 02/24/2017
---

# Control access to functional areas

[!INCLUDE [temp](../../_shared/dev15-version-header-process-template.md)]

You can configure the initial security settings for the following functional areas for a team project: 
- Work item queries
- Team Foundation version control (TFVC) 
- Team Foundation Build
- Visual Studio Lab Management. 
 
The default process templates assign several permissions to default security groups. You can modify these assignments by customizing the plug-in file for the corresponding functional area.  
  
For information about how to configure initial security groups, see [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md). For information about how to administer users and groups, see [Set up groups for use in TFS](../../../setup-admin/tfs/admin/setup-ad-groups.md).  
  
<a name="ElementsFunctionalArea"></a> 
##Assign permissions to functional areas  
 You can use the functional **permission** element to allow or deny permissions for functional areas to a security group in Team Foundation Server, a Windows group, or a Windows identity. You use this element in the plug-in files for work item tracking, Team Foundation version control, Team Foundation Build, and Lab Management. You must encapsulate the permission element within its corresponding container: the **permissions** element. You use the following syntax structure for the functional **permission** element:  
  
```  
<permission allow="PermissionName" identity="GroupName"/>  
<permission deny="PermissionName" identity="GroupName"/>  
<permission allow="PermissionName" deny="PermissionName" identity="GroupName"/>  
```  
  
 The following table describes the attributes for the functional **permission** element:  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|**allow**|Identifies the permissions that are granted. You specify permissions as comma-delimited text.<br /><br /> For the names of the permissions that have been defined for each functional area, see the following sections later in this topic:<br /><br /> -   [Assign TFVC permissions](#VersionControl)<br />-   [Assign Build permissions](#Build)<br />-   [Assign Lab Management permissions](#LabManagement)|  
|**deny**|Identifies the permissions that are revoked. You specify permissions as comma-delimited text. **Note:**  Denied permissions take precedence over allowed permissions.|  
|**identity**|Specifies the security group in Team Foundation Server, the Windows group, or the Windows identity to which the permissions are applied. For the format to use when you specify groups, see "Default Groups Defined in Team Foundation Server" in [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md).|  
  
 The following example shows how to grant permissions to allow the **Contributors** group to view builds and build definitions and to queue builds and edit build quality.  
  
```  
<taskXml>  
   <permission allow="Read, PendChange, Checkin, Label, Lock" identity="[$$PROJECTNAME$$]\Contributors"/>  
</taskXml>  
```  
  
> [!NOTE]  
>  During runtime, if a permission can't be found for an identity, the permission is searched for in any other groups to which the identity belongs. If the permission cannot be found, the permission is denied by default.  
  
<a name="Queries"></a> 
##  Assign permissions for work item queries  
In the workitems plug-in file, you can assign permissions that control access to team query folders. Query folder permissions are specific to queries and query folders. You can grant access to users and groups in Windows or to default TFS groups.  
  
 You assign these permissions by using the functional **permission** element, as the following example shows:  
  
```  
<Permission allow="Read, Contribute, Delete, ManagePermissions, FullControl" identity="="[$$PROJECTNAME$$]\$$PROJECTADMINGROUP$$" />  
  
```  
  
> [!NOTE]  
>  After the team project is created, you can set permissions by right-clicking a query folder or query. For details, see [Set permissions on queries](../../track/set-query-permissions.md).  
  
The following table describes the permissions that control access to query folders and queries. It also indicates the default assignments that are made in the default process templates. By default, the creators or owners of queries and query folders have full control of managing the queries that they created or own.  
  
|Permission|Description|Readers, Contributors, Builders|Creator Owners, Project Administrator Group, Project Collection Administrators|  
|----------------|-----------------|-------------------------------------|------------------------------------------------------------------------------------|  
|**Read**|**Read**. Can view and run a query or view a query folder and its contents|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Contribute**|**Contribute**. Can view and edit a query or query folder and its contents||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Delete**|**Delete**. Can view, edit, and delete a query or query folder and its contents||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ManagePermissions**|**Manage Permissions**. Can manage permissions for a query or query folder and its contents||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**FullControl**|**Full Control**. Can view, edit, delete, and manage permissions for a query or query folder and its contents||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
  
<a name="VersionControl"></a> 
##  Assign TFVC permissions 
You can assign permissions that control access to source code files and folders by changing the plug-in file for version control. Version control permissions are specific to source code files and folders. You can grant access to users and groups in Windows or TFS default groups.  
  
You assign these permissions by using the functional **permission** element, as the following example shows:  
  
```  
<permission allow="Read, PendChange, Checkin, Label, Lock, Merge" identity="[$$PROJECTNAME$$]\@@Contributors@@" />  
```  
 
The following table describes the permissions that control access to source code files and folders. It also indicates the default assignments that are made in the default process templates.  
  
|**Permission**|**Description**|Readers|Contributors|Builders|Project Administrator Group|  
|--------------------|---------------------|-------------|------------------|--------------|---------------------------------|  
|**Read**|**Read**. Can display the contents of a file or folder.<br /><br /> If a user has **Read** permissions for a folder but not the files that it contains, the user can display the names and properties of those files, but the user cannot open them.|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**PendChange**|**Check out**. Can check out and make a pending change to an item. Examples of pending changes include adding, editing, renaming, deleting, undeleting, branching, and merging a file.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Merge**|**Merge**. Can merge changes into the path for which they have permissions.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Checkin**|**Check in**. Can check in items and revise any committed changeset comments. Pending changes are committed when the user checks in the item.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Label**|**Label**. Can label items.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Lock**|**Lock**. Can lock an item so that other users cannot update it.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ReviseOther**|**Revise another user's changes**. Can change the contents of someone else's changeset comments and check-in notes.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**UnlockOther**|**Unlock another user's changes**. Can remove someone else's lock.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**UndoOther**|**Undo another user's changes**. Can undo someone else's pending changes.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**LabelOther**|**Administer labels**. Can modify someone else's label.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**AdminProjectRights**|**Manage permissions**. Can configure security settings for version control.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**CheckinOther**|**Check in another user's changes**. Can perform a check-in as another user. This permission is required for conversion utilities.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ManageBranch**|**Manage branch**. Users who have this permission for a given path can convert any folder under that path into a branch. Users who have this permission for a branch can also edit its properties, re-parent it, and convert it to a folder.<br /><br /> Users who have this permission can branch this branch only if they also have the **Merge** permission for the target path. Users cannot create branches from a branch for which they do not have the **Manage Branch** permission.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
  
<a name="Build"></a> 
##  Assign Build permissions    
You can assign permissions that control access to build activities by changing the Build plug-in file. You can grant access to users and groups in Windows and groups in Team Foundation Server. For information about the format to use when you specify groups, see [Group macros and default groups ](configure-initial-groups-teams-members-permissions.md#GroupMacros).  
  
 You assign these permissions by using the functional **permission** element, as the following example shows:  
  
```  
<Permission allow="ViewBuildDefinition, QueueBuilds, ViewBuilds, EditBuildQuality" identity="[$$PROJECTNAME$$]\@@Contributors@@" />  
```  
 
  
 The following table describes the permissions that you can assign that control access to the build functions of a team project. The table also indicates the default assignments that are made in the default process templates.  
  
> [!NOTE]  
>  The **Override check-in validation by build** permission should be assigned only to service accounts for build services and to build administrators who are responsible for the quality of the code. For more information, see [Perform a gated check-in](../../../tfvc/check-folder-controlled-by-gated-check-build-process.md).  
  
|**Permission**|**Description**|**Readers**|**Contributors**|**Build Administrators**|**Project Administrators**|**Project Collection Administrators**|  
|--------------------|---------------------|-----------------|----------------------|------------------------------|--------------------------------|-------------------------------------------|  
|**ViewBuildDefinition**|**View build definition**. Can view the build definitions that have been created for the team project.|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ViewBuilds**|**View builds**. Can view the queued and completed builds for this team project.|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**EditBuildQuality**|**Edit build quality**. Can add information about the quality of the build through the interface for Team Foundation Build.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**QueueBuilds**|**Queue builds**. Can add a build to the queue through the interface for Team Foundation Build or at a command prompt.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**DeleteBuildDefinition**|**Delete build definition**. Can delete build definitions.|||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**DeleteBuilds**|**Delete builds**. Can delete a completed build.|||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**DestroyBuilds**|**Destroy builds**. Can permanently delete a completed build.|||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**EditBuildDefinition**|**Edit build definition**. Can create and modify build definitions.|||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ManageBuildQualities**|**Manage build qualities**. Can add or remove build qualities, such as **Ready for Deployment**, **Rejected**, or **Under Investigation**. |||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ManageBuildQueue**|**Manage build queue**. Can cancel, re-prioritize, or postpone queued builds.|||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**RetainIndefinitely**|**Retain indefinitely**. Can mark a build so that it will not be automatically deleted by any applicable retention policy.|||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**StopBuilds**|**Stop builds**. Can stop a build that is in progress.|||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**OverrideBuildCheckInValidation**|**Override check-in validation by build**. Can commit a changeset that affects a gated build definition without triggering the system to shelve and build the changes first. For more information, see [Perform a gated check-in](https://www.visualstudio.com/en-us/docs/tfvc/check-folder-controlled-by-gated-check-build-process).|||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**UpdateBuildInformation**|**Update build information**. Can add information about the quality of a build.<br /><br /> This permission should be assigned only to service accounts.||||||  
  
<a name="LabManagement"></a> 
##Assign Lab Management permissions

You can control access to activities in Lab Management by changing the Lab plug-in file. Permissions for Lab Management are specific to virtual machines, environments, and other resources. You can grant access to users and groups in Windows and TFS groups. You assign these permissions by using the functional **permission** element, as the following example shows:  
  
```  
<permission allow="Read, Create, Write, Edit, Start, Stop, ManageSnapshots, Pause" identity="[$$PROJECTNAME$$]\@@Contributors@@" />  
```  

  
 The following table describes the permissions that you can assign to control access to Visual Studio Lab Management. The table also indicates the default assignments that are made in the default process templates.  
  
|Permission|Description|Readers|Contributors|Project Collection Build Service Accounts group|Team Project Administrators group|Project Collection Administrators group|  
|----------------|-----------------|-------------|------------------|-----------------------------------------------------|---------------------------------------|---------------------------------------------|  
|**Read**|**View lab resources**. Can view information for the various resources for Lab Management, which include collection host groups, project host groups, and environments.|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Create**|**Import virtual machine**. Can import a virtual machine from a Virtual Machine Manager (VMM) library share.<br /><br /> This permission differs from Write because users can create an object in Lab Management but not write anything to the VMM host group or library share.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Write**|**Write environment and virtual Machines**. Can create environments. Users who have this permission for a project library share can store environments and virtual machines.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Edit**|**Edit Environment and Virtual Machines**. Can edit environments and virtual machines. The permission is checked for the object that is being edited.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Start**|**Start**. Can start an environment.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Stop**|**Stop**. Can stop an environment.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Pause**|**Pause**. Can pause an environment.|||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ManageSnapshots**|**Manage snapshots**. Can perform all snapshot management tasks, which include taking a snapshot, reverting to a snapshot, renaming a snapshot, deleting a snapshot, and reading a snapshot.||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Delete**|**Delete environments and virtual machines**. Can delete environments and virtual machines. The permission is checked for the object that is being deleted.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ManageLocation**|**Manage lab locations**. Can edit the locations of resources for Lab Management, which include collection host groups, collection library projects, project host groups, and project library shares.<br /><br /> This permission for collection-level locations (collection host groups and collection library shares) also allows a user to create project-level locations (project host groups and project library shares).||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**DeleteLocation**|**Delete lab locations**. Can delete the locations of resources for Lab Management, which include collection host groups, collection library shares, project host groups, and project library shares.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ManageChildPermissions**|**Manage Child Permissions**. Can change the permissions of all the child objects of Lab Management. For example, if a user has this permission for a team project host group, that user can change permissions for all the environments under that group.||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**ManagePermissions**|**Manage Permissions**. Can modify the permissions for an object of Lab Management. This permission is checked for the object whose permissions are being modified.|||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**EnvironmentOps**|**Environment Operations**. Can start, stop, pause, and manage snapshots, in addition to performing other operations on an environment.||||||  
  
## Related notes
- [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md)   
- [Permission reference](../../../setup-admin/permissions.md)
- [Configure Lab Management with TFSLabConfig, Permissions](../../../setup-admin/tfs/command-line/tfslabconfig-cmd.md#permissions)

 