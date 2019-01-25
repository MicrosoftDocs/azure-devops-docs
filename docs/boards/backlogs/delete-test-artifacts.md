---
title: Delete test plans, test cases, test results, & other test artifacts
titleSuffix: Azure Boards  
description: How to delete test plans, test cases, test results, & other test artifacts in Azure DevOps Services & TFS 
ms.custom: seodec18
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 306929CA-DB58-45E3-AD45-B774901789D3  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2017'
ms.date: 12/04/2018
---

# Delete test artifacts  

**Azure Boards | Azure Test Plans | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**  

<a id="delete-test"> </a> 

While test artifacts such as test plans, test suites, test cases, and so on are types of work items, the method for deleting them differs from deleting non-test work items. 

> [!IMPORTANT]  
> We only support permanent deletion of test artifacts such as test plans, test suites, test cases, shared steps and shared parameters. Deleted test artifacts won't appear in the recycle bin and cannot be restored. Deletion of test artifacts not only deletes the selected test artifact but also all its associated child items such as child test suites, test points across all configurations, testers (the underlying test case work item doesn't get deleted), test results history, and other associated history.

When you delete test artifacts, the following actions occur:

1.	Removes the deleted test artifact from the test case management (TCM) data store and deletes the underlying work item
2.	Runs a job to delete all the child items both from the TCM side and the underlying work items. This action may take time (up to a few minutes) depending on the number of artifacts to be deleted. 
3.	Causes all information in the work item tracking data store and TCM data store to be deleted and cannot be reactivated nor restored. 


## Prerequisites

- You must be a member of the Project Administrators group or have the [**Delete test artifacts** permission set to **Allow**](../../organizations/security/set-permissions-access-work-tracking.md#delete-test-permissions). 
- You must also have your [access level set to Advanced](../../organizations/security/change-access-levels.md), which provides access to the full Test feature set. Users with Basic access and with permissions to permanently delete work items and manage test artifacts can only delete orphaned test cases. That is, they can delete test cases created from **Work** that aren't linked to any test plans or test suites. 

To delete test artifacts, the following restrictions and operations apply:  
- Users with Basic access and with permissions to permanently delete work items and manage test artifacts can only delete orphaned test cases. That is, they can delete test cases created from **Work** that aren't linked to any test plans or test suites.  
- When you delete a test plan, test suite, test case, shared steps, or shared parameters, you not only permanently delete them, you also delete all associated test artifacts such as test results.  
- You can't bulk delete test artifacts. If test artifacts are part of a bulk selection to be deleted, all other work items except the test artifact(s) will get deleted.

::: moniker range="tfs-2017" 
> [!NOTE]   
> The permanently delete feature of test artifacts is available for TFS 2017.1 and later versions. 
::: moniker-end

<a id="test-experience"></a>
## Work item types that support the test experience  
The following image illustrates the set of work item types that support the test experience and work with Microsoft Test Manager. These work item types are linked together using the link types shown. 

  ![Test management work item types](../work-items/guidance/_img/ALM_PT_WITS_TestExperience.png)

From the web portal or Microsoft Test Manager, you can view which test cases are defined for a test suite, 
and which test suites are defined for a test plan. 
However, these objects aren't connected to each other through link types. For definitions of each field used in these work item types, see [Query based on build and test integration fields](../queries/build-test-integration.md).


## Delete a test case

1. To delete a test case, open it from the web portal and choose the** Permanently delete** option from the actions menu. (Bulk deletion is not supported from a query results page.)     
 
	![Delete a test case and associated test artifacts from the web form](_img/move-change-delete/delete-test-artifacts-form.png)  

	> [!NOTE] 
	>You'll only see the **Permanently delete** option if you have the necessary permissions and access. 

2. Confirm you want to actually delete the item.  
  
	![Confirm delete of test artifacts](_img/move-change-delete/perm-delete-test-artifacts-dialog.png)  
 
3. You can also delete test plans and test suites directly from **Test**. 

	![Delete test plans and artifacts from Test pages](_img/move-change-delete/delete-test-plans.png)  

4.	To delete shared steps and shared parameters you need to first manually remove all references to them before you can delete them. 
	
	![Delete shared steps from form](_img/delete-test-shared-steps-remove-link.png)  

## Related articles   

- [Create a test plan](../../test/create-a-test-plan.md)
- [Control how long to keep test results](../../test/how-long-to-keep-test-results.md) 
- [Set permissions and access for work tracking, Manage test artifacts](../../organizations/security/set-permissions-access-work-tracking.md#manage-test-artifacts)

