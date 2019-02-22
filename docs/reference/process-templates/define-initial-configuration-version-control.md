---
title: Define Git or TFVC initial configuration 
titleSuffix: Azure DevOps & TFS
description: Configure the initial security permissions, check-out policies, and check-in notes for TFVC or Git 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: a7dff64f-4bb7-4083-bcf5-12d70e4915ea
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013 <= tfs-2017' 
ms.date: 10/11/2017
---


# Define the initial configuration of Git and TFVC

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

> [!NOTE]  
>  For TFS 2017.3 and later versions, you create projects from the web 
>  portal, which ignores this plug-in. Instead, default permissions are set for 
>  project-level and collection-level security groups. After you create a project, 
>  you can manage [TFVC check-in policies](../../repos/tfvc/add-check-policies.md) or 
>  [permissions](../../organizations/security/set-git-tfvc-repository-permissions.md) from the web portal.  


By using the plug-in for version control, you can configure a project's initial security permissions, check-out policies, and check-in notes.  
  
 In the XML file, you specify one or more tasks and their dependencies. Generally, you need only one task to configure settings for version control. For an example of a task that specifies these settings, see the VersionControl.xml file that is defined for the default process templates.  
  
The names of the file, the folder, and the plug-in for the default process templates are as follows:  
    
**File name**: VersionControl.xml  
**Folder name**: Version Control  
**Plug-in name**: Microsoft.ProjectCreationWizard.VersionControl    
 
You can change the name of the XML file and the folder name but not the name of the plug-in. The system doesn't include a mechanism for the deployment of client-side plug-ins, policies, or other modifications. If you want to deploy this kind of functionality, you must use your own distribution and installation program.  
 
  
  
 
##  <a name="Exclusive"></a> Exclusive Check Out  
 You can control whether multiple people can check out a file at the same time by specifying the **exclusive_checkout** element.  


> [!div class="tabbedCodeSnippets"]
```XML  
<exclusive_checkout required=""/>  
```  
  
 If the **required** attribute is set to **true**, only one person can check out a file at a time. If this attribute set to **false**, multiple people can check out a file at the same time, and they must reconcile changes when they check in the file.  
  
 The following example shows how to require exclusive check-out:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<exclusive_checkout required="true"/>  
```  
  
##  <a name="Latest"></a> Get Latest on Check Out  
 You use the **get_latest_on_checkout** element to configure the default behavior when a user checks out a file for a project.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<get_latest_on_checkout required=""/>  
```  
  
 If the **required** attribute is set to **true**, the most recent version of an item, or tip, is downloaded every time that a user checks it out. This behavior resembles the check-out behavior in Visual SourceSafe.  
  
 If the **required** attribute is set to **false**, the check-out operation will check out the local version in your workspace. By default, this attribute is set to false.  
  
 The following example shows how to specify that the default check-out behavior is to get the most recent version of an item when a user checks it out.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<get_latest_on_checkout required="true"/>  
```  
  
##  <a name="Notes"></a> Check-in Notes  
 The developer provides check-in notes when he or she checks in code. These notes describe whether the code changes are related to team processes and, if they are, how. For example, a check-in note can indicate whether the change was made because of a security review, and the note can include details about the changes relative to the security review.  
  
 You use the following syntax for a checkin_note element  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<checkin_note label="" required="" order=""/>  
```  
  
 The following table describes the attributes of the checkin_note element.  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|label|The label that describes the check-in note. The label appears in the **Pending Check-ins** dialog box when a user checks in a change.|  
|required|Specifies whether the check-in note is required to have a value. If this attribute is set to true, the check-in note must have a value. If this attribute is set to false, a value is optional.|  
|order|Specifies an ordinal number to indicate in what order to display the check-in notes. This attribute is optional.|  
  
The following example shows how to create an additional check-in note labeled "Documentation Impact" which isn't required to have a value.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<taskXml>  
   <checkin_note label="Code Reviewer" required="false" order="1"/>  
   <checkin_note label="Security Reviewer" required="false" order="2"/>  
   <checkin_note label="Performance Reviewer" required="false" order="3"/>   
   <checkin_note label="Documentation Impact" required="false"/>  
</taskXml>  
```  
  
<a name="Permissions"></a> 
##  Permissions    
Version control has a specific set of permissions that you can configure for a process template. By specifying permissions, you define what actions security groups and individuals can perform on items that are under version control. For more information, see [Control access to functional areas](control-access-to-functional-areas.md).  
  
The default assignments for TFVC and GIt permissions made to all default process templates are as shown. You can set these permissions after you create the project from the web UI, see [Set repository permissions for Git or TFVC](../../organizations/security/set-git-tfvc-repository-permissions.md).

 
> [!div class="tabbedCodeSnippets"]
```XML
<?xml version="1.0" encoding="utf-8"?>
<tasks>
  <task id="VersionControlTask" name="Create Version Control area" plugin="Microsoft.ProjectCreationWizard.VersionControl" completionMessage="Version control Task completed.">
    <dependencies />
    <taskXml>
      <permission allow="Read, PendChange, Checkin, Label, Lock, ReviseOther, UnlockOther, UndoOther, LabelOther, AdminProjectRights, CheckinOther, Merge, ManageBranch" identity="[$$PROJECTNAME$$]\$$PROJECTADMINGROUP$$" />
      <permission allow="Read, PendChange, Checkin, Label, Lock, Merge" identity="[$$PROJECTNAME$$]\Contributors" />
      <permission allow="Read, PendChange, Checkin, Label, Lock, Merge" identity="[$$PROJECTNAME$$]\Build Administrators" />
      <permission allow="Read" identity="[$$PROJECTNAME$$]\Readers" />
      <exclusive_checkout required="false" />
      <get_latest_on_checkout required="false" />
      <git>
        <permission allow="GenericRead, GenericContribute, Administer, CreateBranch, CreateTag, ManageNote" identity="[$$PROJECTNAME$$]\$$PROJECTADMINGROUP$$" />
        <permission allow="GenericRead, GenericContribute, CreateBranch, CreateTag, ManageNote" identity="[$$PROJECTNAME$$]\Contributors" />
        <permission allow="GenericRead, GenericContribute, CreateBranch, CreateTag, ManageNote" identity="[$$PROJECTNAME$$]\Build Administrators" />
        <permission allow="GenericRead" identity="[$$PROJECTNAME$$]\Readers" />        
      </git>
    </taskXml>
  </task>
</tasks> 
```  


## Related articles  
-  [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md)   
-  [Code](../../repos/git/overview.md)