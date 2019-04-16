---
title: Control access to functional areas
titleSuffix: Azure DevOps & TFS
description: Configure the initial security settings for the following functional areas for a project in Team Foundation Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 6c967b40-4842-41db-9350-bb3320f3e57c
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 09/08/2017
---

# Control access to functional areas

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can configure the initial security settings for the following functional areas for a project: 
- Work item queries
- Team Foundation version control (TFVC) 
- Team Foundation Build
- Visual Studio Lab Management. 
 
The default process templates assign several permissions to default security groups. You can modify these assignments by customizing the plug-in file for the corresponding functional area.  

For information about how to configure initial security groups, see [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md). For information about how to administer users and groups, see [Set up groups for use in TFS](/azure/devops/server/admin/setup-ad-groups).  
  
<a name="ElementsFunctionalArea"></a> 
##Assign permissions to functional areas  
 You can use the functional **permission** element to allow or deny permissions for functional areas to a security group in Team Foundation Server, a Windows group, or a Windows identity. You use this element in the plug-in files for work item tracking, Team Foundation version control, Team Foundation Build, and Lab Management. You must encapsulate the permission element within its corresponding container: the **permissions** element. You use the following syntax structure for the functional **permission** element:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<permission allow="PermissionName" identity="GroupName"/>  
<permission deny="PermissionName" identity="GroupName"/>  
<permission allow="PermissionName" deny="PermissionName" identity="GroupName"/>  
```  

The following example shows how to grant permissions to allow the **Contributors** group to view builds and build definitions and to queue builds and edit build quality.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
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
  
> [!div class="tabbedCodeSnippets"]
```XML 
<Permission allow="Read, Contribute, Delete, ManagePermissions, FullControl" identity="="[$$PROJECTNAME$$]\$$PROJECTADMINGROUP$$" />   
```  
  
> [!NOTE]  
>  After the project is created, you can set permissions by right-clicking a query folder or query. For details, see [Set permissions on queries](../../boards/queries/set-query-permissions.md).  
  
  
<a name="VersionControl"></a> 
##  Assign TFVC permissions 
You can assign permissions that control access to source code files and folders by changing the plug-in file for version control. Version control permissions are specific to source code files and folders. You can grant access to users and groups in Windows or TFS default groups.  
  
You assign these permissions by using the functional **permission** element, as the following example shows:  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<permission allow="Read, PendChange, Checkin, Label, Lock, Merge" identity="[$$PROJECTNAME$$]\@@Contributors@@" />  
```  
 
  
<a name="Build"></a> 
##  Assign Build permissions    
You can assign permissions that control access to build activities by changing the Build plug-in file. You can grant access to users and groups in Windows and groups in Team Foundation Server. For information about the format to use when you specify groups, see [Group macros and default groups](configure-initial-groups-teams-members-permissions.md#group-macros).  
  
 You assign these permissions by using the functional **permission** element, as the following example shows:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Permission allow="ViewBuildDefinition, QueueBuilds, ViewBuilds, EditBuildQuality" identity="[$$PROJECTNAME$$]\@@Contributors@@" />  
```  
   
  
> [!NOTE]  
>  The **Override check-in validation by build** permission should be assigned only to service accounts for build services and to build administrators who are responsible for the quality of the code. For more information, see [Perform a gated check-in](../../repos/tfvc/check-folder-controlled-by-gated-check-build-process.md).  
  
  
<a name="LabManagement"></a> 
##Assign Lab Management permissions

You can control access to activities in Lab Management by changing the Lab plug-in file. Permissions for Lab Management are specific to virtual machines, environments, and other resources. You can grant access to users and groups in Windows and TFS groups. You assign these permissions by using the functional **permission** element, as the following example shows:  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<permission allow="Read, Create, Write, Edit, Start, Stop, ManageSnapshots, Pause" identity="[$$PROJECTNAME$$]\@@Contributors@@" />  
```  

 
  
## Related articles
- [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md)   
- [Add administrators, set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md)
- [Configure Lab Management with TFSLabConfig, Permissions](/azure/devops/server/ref/command-line/tfslabconfig-cmd#permissions)

 