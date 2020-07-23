---
ms.topic: include
---


## Post-upgrade customizations to make manually 

The upgrade makes a best-effort attempt to reconcile the system process and the customizations made to the Hosted XML process. After you upgrade, you'll want to review the inherited process and reapply customizations manually. 

- [Create a test project](/azure/devops/organizations/settings/work/upgrade-hosted-to-inherited#verify): Use to verify the customizations preserved or reapplied to a process
- [Update the default value for any field](/azure/devops/organizations/settings/work/customize-process-field): define any default values you had previously defined
- [Workflow states](/azure/devops/organizations/settings/work/customize-process-workflow): verify the mapping of states to workflow state categories 
- [Custom rules](/azure/devops/organizations/settings/work/custom-rules): You can recreate select rules as needed. Note, however, there is not a one-to-one mapping of rules defined in a Hosted XML process model and those for an inherited process. Specifically:   
	- Some rules are already defined in the system process or auto-generated (e.g. certain system fields such as Changed By, Change Date, Closed By, Closed Date)  
	- Some rules are now specified as field attributes (default, required)  
- [Disable work item types](/azure/devops/organizations/settings/work/customize-process-work-item-type#enable-disable)
- [Hide inherited fields or controls](/azure/devops/organizations/settings/work/customize-process-field#show-hide-or-remove-a-field)
- [Custom controls](/azure/devops/organizations/settings/work/custom-controls-process): verify that custom controls are applied as expected; disable or hide unwanted [groups or page extensions](/azure/devops/organizations/settings/work/custom-controls-process#group-level-and-page-level-contributions).