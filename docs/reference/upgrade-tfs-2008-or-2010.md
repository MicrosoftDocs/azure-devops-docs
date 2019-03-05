---
title: Upgrade information about TFS 2008 or TFS 2010
titleSuffix: TFS
description: Follow these steps to when you upgrade from TFS 2008 or TFS 2010 to TFS 2015 so that you can configure the new features.
ms.technology: devops-agile
ms.prod: devops
ms.assetid: F52E3DB7-4A62-4BD2-8C6F-CC44CC09464D
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013 <= tfs-2015'
ms.date: 08/04/2016
---

# When upgrading from TFS 2008 or TFS 2010  

<b>TFS 2015</b> 

> [!NOTE]   
> **Feature availability:** This topic applies only to projects hosted on an on-premises Team Foundation Server (TFS). Projects defined on Azure DevOps Services [update automatically with each service upgrade](/azure/devops/release-notes/index).

Each version of Team Foundation Server (TFS) typically introduces one or more changes to work tracking. To gain access to the new features that rely on these changes, your existing projects must be updated. 

The Configure Features wizard is designed to make the update process pain free, however, customized projects may prevent the wizard from being successful.
If you're upgrading from TFS 2008 or TFS 2010, you have some additional steps.  

**Option 1:**

This option is simpler, but will result in more downtime, especially if your TFS databases are very large. It may not work if you have customized your projects heavily.

* [Upgrade your TFS instance to TFS 2012 by downloading the TFS 2012 ISO](http://go.microsoft.com/fwlink?linkid=255990).
* [Run the Configure Features Wizard for TFS 2012 on each project](configure-features-after-upgrade.md).
	You need to do this before you upgrade to TFS 2015 so that you'll be able to use the Configure Features Wizard for TFS 2015.
* [Update a project based on a MSF v4.2 process template](xml/update-a-team-project-v4-dot-2-process-template.md).
* [Upgrade your TFS instance to TFS 2015](/azure/devops/server/upgrade/get-started).
* [Run the Configure Features Wizard for TFS 2015 on each project](configure-features-after-upgrade.md).
	Each project owner can do this when it makes sense. You don't have to configure features for all projects at this time.
* [Perform additional configurations for each project.](additional-configuration-options.md).
	Each project can make these configuration changes when it makes sense, too.
	

**Option 2:**

This option is more work, but it will work with customized projects and it reduces downtime because you don't have to upgrade twice.

* [Upgrade your TFS instance to TFS 2015](/azure/devops/server/upgrade/get-started).
* Manually update each project:
	* [Update a project based on a MSF v4.2 process template](xml/update-a-team-project-v4-dot-2-process-template.md).
	* [Update the Workflow for Agile Team Projects](https://msdn.microsoft.com/library/hh500412.aspx).
	* [Apply updates manually based on the features you want to enable](add-features-manually.md).
* [Perform additional configurations for each project](additional-configuration-options.md).

<a id="earlier-versions">  </a> 

## Updating projects based on earlier versions of MSF process templates 
If you upgrade your TFS instance to TFS 2015 and your existing projects were created with MSF version 5.0 or earlier process templates, you may have to apply a few updates manually. Two specific problems can occur having to do with a missing field or workflow state.  

### Value Area field missing   
The following message reported by the Configure Features wizard indicates that the Value Area field is missing from either the User Story or Requirement WIT definition:  

```
[Error] TF400654: Unable to configure Planning Tools. The following element contains an error: RequirementBacklog/Columns. TF400529: This element defines the columns that appear on the backlog. You must set all values to fields that exist in at least one of the work item types belonging to the category. The following fields do not exist in any of the work item types: Microsoft.VSTS.Common.ValueArea.
```

You can resolve this error by (1) adding the following syntax to the ```FIELDS``` section of the User Story or Requirement definition:  
> [!div class="tabbedCodeSnippets"]
```XML
<FIELD name="Value Area" refname="Microsoft.VSTS.Common.ValueArea" type="String">
   <REQUIRED />
   <ALLOWEDVALUES>
     <LISTITEM value="Architectural" />
     <LISTITEM value="Business" />
   </ALLOWEDVALUES>
   <DEFAULT from="value" value="Business" />
   <HELPTEXT>Business = delivers value to a user or another system; Architectural = work to support other stories or components</HELPTEXT>
</FIELD>
```

and the following syntax to the ```FORM``` section:

> [!div class="tabbedCodeSnippets"]
```XML
<Control FieldName="Microsoft.VSTS.Common.ValueArea" Type="FieldControl" Label="Value area" LabelPosition="Left" />
```

Or (2) removing the following entry from the ProcessConfiguration ```RequirementBacklog``` section: 

> [!div class="tabbedCodeSnippets"]
```XML
<Column refname="Microsoft.VSTS.Common.ValueArea" width="100" />
```

See [Add features using a manual update process](add-features-manually.md) for more information about updating these files manually. 


### New workflow state missing 
The following message reported by the Configure Features wizard indicates that the New workflow state is missing for the Bug WIT definition:  

**[Error] TF400654: Unable to configure Planning Tools.** The following element contains an error: BugWorkItems/BugWorkItems. TF400506: This element defines the states for work items that represent Bugs or Defects. Each state must exist in at least one of the work item types that are defined in: BugWorkItems. The following states do not exist in any of the work item types: New.


To resolve this error, you must add the New workflow state to the Bug definition as described in [Add features using a manual update process](add-features-manually.md). 

