---
ms.topic: include
---


## Post-upgrade customizations to make manually 

The upgrade makes a best-effort attempt to reconcile the system process and the customizations made to the Hosted XML process. After you upgrade, you'll want to review the inherited process and reapply customizations manually. 

- [Create a test project](/vsts/organizations/settings/work/upgrade-hosted-to-inherited#verify): Use to verify the customizations preserved or reapplied to a process
- [Update the default value for any field](/vsts/work/customize/process/customize-process-field): define any default values you had previously defined
- [Workflow states](/vsts/work/customize/process/customize-process-workflow): verify the mapping of states to workflow state categories 
- [Custom rules](/vsts/work/customize/process/custom-rules): You can recreate select rules as needed. Note, however, there is not a one-to-one mapping of rules defined in a Hosted XML process model and those for an inherited process. Specifically:   
	- Some rules are already defined in the system process or auto-generated (e.g. certain system fields such as Changed By, Change Date, Closed By, Closed Date)  
	- Some rules are now specified as field attributes (default, required)  
- [Disable work item types](/vsts/work/customize/process/customize-process-wit#enable-or-disable-a-custom-wit)
- [Hide inherited fields or controls](/vsts/work/customize/process/customize-process-field#show-hide-or-remove-a-field)
- [Custom controls](/vsts/work/customize/process/custom-controls-process): verify that custom controls are applied as expected; disable or hide unwanted [groups or page extensions](/vsts/work/customize/process/custom-controls-process#group-level-and-page-level-contributions).