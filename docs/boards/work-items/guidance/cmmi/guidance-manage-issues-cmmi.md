---
title: Manage issue work items within your project plan
titleSuffix: Azure Boards
description: Learn how to use the issue work item to help you to track problems with the project plan and its activities and tasks. 
ms.service: azure-devops-boards
ms.assetid: 4f90afe9-9748-42e9-9117-e98ee6543417
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 11/07/2017
---

# Manage issue work items in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../../../includes/version-lt-eq-azure-devops.md)]

You can use the issue work item to help you track problems with the project plan and its activities and tasks. Issues aren't to be confused with bugs. The bug work item type is provided to track problems with the code and specific failing tests. The issue work item type is provided to help you track all other problems with the project. Some examples are ambiguity in the requirements, unavailability of personnel or other resources, problems with environments, other project risks that are occurring, and, in general, anything that puts successful delivery of the project at risk.  
  
 What makes issues different is that they represent unplanned activities. Issue resolution isn't normal project work. So, it must be tracked and given special attention. Use issue work items to track these project problems. Then, use the reporting and queries helps to develop a core capability to manage and resolve issues quickly and effectively.  
  
##  <a name="Create"></a> Create an issue work item  
 When an issue occurs, create an issue work item, describe the problem, and describe suggested resolutions, if any are known. The issue work items for the project create a significant body of evidence for a Standard CMMI Appraisal Method for Process Improvement (SCAMPI) appraisal. For more information about CMMI, see Background to [Background to CMMI](guidance-background-to-cmmi.md).  
  
 The work item form for an issue stores data in the fields and tabs that appear in the following illustrations:  
  
 ![CMMI Issue work item form](media/procguid_cmmi_wform.png "ProcGuid_CMMI_Wform")  
  
##  <a name="Review"></a> Review the issues  
 The open issues on the project should be reviewed regularly.  
  
 To view the issues, run the Open Issues query that is provided with the template. Sort the issues by status using "proposed" to triage any new issues.  
  
##  <a name="Analyze"></a> Analyze issues  
 Each new issue should be analyzed for both its symptoms and root cause. A plan of corrective action should be made to address the symptoms or (preferably) the root cause. Record the plan on the Corrective Action tab of the issue.  The decision to work around the issue or try to fix the root cause should reflect the project risks. These decisions should be documented in the issue work item. They'll provide evidence for a SCAMPI appraisal and demonstrate a level of capability at risk management that is important for level 3 appraisal.  
  
 Working around symptoms is a lower-maturity behavior that shows a level of capability that is adequate for a CMMI model level 2 or 3 appraisal. Root cause analysis and resolution imply that the organization intends that the issue shouldn't recur. This expectation is a higher-maturity behavior. It demonstrates a level of capability in issue resolution and process improvement that is typical of an organization that achieves a level 4 or 5 appraisal.  
  
 Record the action plan, and then break the work into task work items, linked to the issue work item as children. Tasks should be assigned to individual team members for resolution. Each task should be created together with a task type of "corrective action."  
  
 ![CMMI Task work item form](media/procguid_cmmi_wtask.png "ProcGuid_CMMI_WTask")  
  
##  <a name="Verify"></a> Verify Resolved Issues  
 During your regular review of open issues, it's a good idea to review issues that have been marked as resolved. If a consensus accepts the documented resolution, mark the issue as "closed," and set its reason to "resolved." Use the open issues query, and filter for state equals "resolved."  
  
##  <a name="Resolution"></a> Review issues for resolution  
 After all tasks under an issue have been completed, the stakeholders should decide whether the issue has been resolved.  
  
 Open the issue work item and any blocked work items. You can refer to the Corrective Actions tab to view the original plan for action and what action was taken. You can also see the task work items that are associated with the issue by displaying the All Links tab for the Child links. Has the corrective action successfully unblocked the work items and resolved the issue? If not, rework the corrective actions, and reassign them to team members. Was the corrective action completed promptly? Was an unexpected external (or special cause) event and impact on the schedule critical path avoided? Are the project commitments safe, or must they be renegotiated? Record all this detail in the work item. This detail generates valuable evidence for a CMMI appraisal.  
  
 If the stakeholders are satisfied that the issue has been resolved successfully, mark the issue as "resolved." It can then be formally closed.  
  
 If the issue hasn't been successfully resolved, rework the corrective action tasks, and assign them to suitable personnel for resolution. Reconsider the priority of the issue, and consider raising it to speed up resolution and to avoid delay.  
  
## More resources  
 For more information about SCAMPI appraisals, see the following Web page: [Software Engineering Institute](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=9247).  
  
## Related articles
 [Fields that track bugs, issues, and risks (CMMI)](guidance-bugs-issues-risks-field-reference-cmmi.md)