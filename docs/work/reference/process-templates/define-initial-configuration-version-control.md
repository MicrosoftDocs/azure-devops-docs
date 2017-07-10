---
title: Define the initial configuration of Team Foundation version control | Team Services & TFS
description: Use the plug-in for version control to configure the team project's initial security permissions, check-out policies, and check-in notes - Team Foundation Server (TFS)
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.topic: reference
ms.assetid: a7dff64f-4bb7-4083-bcf5-12d70e4915ea
ms.manager: douge
ms.author: kaelli
ms.date: 02/24/2017
---

# Define the initial configuration of Team Foundation version control

[!INCLUDE [temp](../../_shared/dev15-version-header-process-template.md)]

By using the plug-in for version control, you can configure a team project's initial security permissions, check-out policies, and check-in notes.  
  
 In the XML file, you specify one or more tasks and their dependencies. Generally, you need only one task to configure settings for version control. For an example of a task that specifies these settings, see the VersionControl.xml file that is defined for the default process templates.  
  
The names of the file, the folder, and the plug-in for the default process templates are as follows:  
    
**File name**: VersionControl.xml  
**Folder name**: Version Control  
**Plug-in name**: Microsoft.ProjectCreationWizard.VersionControl    
  
> [!NOTE]  
>  You can change the name of the XML file and the folder name but not the name of the plug-in. The system doesn't include a mechanism for the deployment of client-side plug-ins, policies, or other modifications. If you want to deploy this kind of functionality, you must use your own distribution and installation program.  
  
##  <a name="Exclusive"></a> Exclusive Check Out  
 You can control whether multiple people can check out a file at the same time by specifying the **exclusive_checkout** element.  
  
```  
<exclusive_checkout required=""/>  
```  
  
 If the **required** attribute is set to **true**, only one person can check out a file at a time. If this attribute set to **false**, multiple people can check out a file at the same time, and they must reconcile changes when they check in the file.  
  
 The following example shows how to require exclusive check-out:  
  
```  
<exclusive_checkout required="true"/>  
```  
  
##  <a name="Latest"></a> Get Latest on Check Out  
 You use the **get_latest_on_checkout** element to configure the default behavior when a user checks out a file for a team project.  
  
```  
<get_latest_on_checkout required=""/>  
```  
  
 If the **required** attribute is set to **true**, the most recent version of an item, or tip, is downloaded every time that a user checks it out. This behavior resembles the check-out behavior in Visual SourceSafe.  
  
 If the **required** attribute is set to **false**, the check-out operation will check out the local version in your workspace. By default, this attribute is set to false.  
  
 The following example shows how to specify that the default check-out behavior is to get the most recent version of an item when a user checks it out.  
  
```  
<get_latest_on_checkout required="true"/>  
```  
  
##  <a name="Notes"></a> Check-in Notes  
 The developer provides check-in notes when he or she checks in code. These notes describe whether the code changes are related to team processes and, if they are, how. For example, a check-in note can indicate whether the change was made because of a security review, and the note can include details about the changes relative to the security review.  
  
 You use the following syntax for a checkin_note element  
  
```  
<checkin_note label="" required="" order=""/>  
```  
  
 The following table describes the attributes of the checkin_note element.  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|label|The label that describes the check-in note. The label appears in the **Pending Check-ins** dialog box when a user checks in a change.|  
|required|Specifies whether the check-in note is required to have a value. If this attribute is set to true, the check-in note must have a value. If this attribute is set to false, a value is optional.|  
|order|Specifies an ordinal number to indicate in what order to display the check-in notes. This attribute is optional.|  
  
The following example shows how to create an additional check-in note labeled "Documentation Impact" which isn't required to have a value.  
  
```  
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
  
## Related notes  
-  [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md)   
-  [Code](../../../git/overview.md)