---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 10/19/2022
---

<!--- project-level permissions for cloud version, old layout ---> 

:::row:::
   :::column span="2":::
   ### Permission (UI)   
   `Namespace permission`  
   :::column-end:::
   :::column span="2":::
  ### Description 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="bypass-rules-permission"></a> Bypass rules on work item updates  
   `Project, BYPASS_RULES`
   :::column-end:::
   :::column span="2":::
   Users with this permission can save a work item that ignores rules, such as [copy, constraint, or conditional rules](../../settings/work/rule-reference.md), defined for the work item type. Scenarios where this is useful are migrations where you don't want to update the by/date fields on import, or when you want to skip the validation of a work item.  
   Rules can be bypassed in one of two ways. The first is through the [Work Items - update REST API](/rest/api/azure/devops/wit/work-items/update) and setting the `bypassRules` parameter to `true`. The second is through the client object model, by initializing in bypassrules mode (initialize `WorkItemStore` with `WorkItemStoreFlags.BypassRules`).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="change-process-team-project-permission"></a> Change process of project  
   `Project, CHANGE_PROCESS`
   :::column-end:::
   :::column span="2":::
   When combined with the 'Edit project-level information' permission, allows users to change the Inheritance process for a project. To learn more, see [Create and manage inherited processes](../../settings/work/manage-process.md).  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="create-tag-definition-permission"></a> Create tag definition  
   `Tagging, Create`
   :::column-end:::
   :::column span="2":::
   [Can add tags to a work item](../../../boards/queries/add-tags-to-work-items.md). By default, all members of the Contributors group have this permission. Also, you can set additional tagging permissions through security management tools. See [Security namespace and permission reference, Tagging](../namespace-reference.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="4":::
   > [!NOTE]   
   > All users granted Stakeholder access can only add existing tags. Even if the **Create tag definition** permission is set to **Allow**, stakeholders can't add tags. This is part of the Stakeholder access settings. To learn more, see [Stakeholder access quick reference](../stakeholder-access.md).
   > Although the **Create tag definition**  permission appears
   > in the security settings at the project-level,
   > tagging permissions are actually collection level permissions that are scoped
   > at the project level when they appear in the user interface.
   > To scope tagging permissions to a single project when using the **TFSSecurity** command,
   > you must provide the GUID for the project as part of the command syntax.
   > Otherwise, your change will apply to the entire collection.
   > Keep this in mind when changing or setting these permissions.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="create-test-runs-permission"></a> Create test runs  
    `Project, PUBLISH_TEST_RESULTS`
   :::column-end:::
   :::column span="2":::
   Can add and remove test results and add or modify test runs. To learn more, see [Control how long to keep test results](../../../test/how-long-to-keep-test-results.md) and [Run manual tests](../../../test/run-manual-tests.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="delete-work-items-in-this-project-permission"></a> 
   Delete and restore work items  
   
   or Delete work items in this project  
   `Project, WORK_ITEM_DELETE`
   :::column-end:::
   :::column span="2":::
   Can [mark work items in the project as deleted](../../../boards/backlogs/remove-delete-work-items.md). The Contributors group has **Delete and restore work items** at the project-level set to **Allow** by default.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="delete-shared-analytic-views-permission"></a> Delete shared Analytics view  
   `AnalyticsViews, Delete`
   :::column-end:::
   :::column span="2":::
   Can delete [Analytics views](../../../report/powerbi/analytics-views-manage.md)
   that have been saved under the Shared area.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="delete-team-project-permission"></a> Delete project  
   `Project, DELETE`
   :::column-end:::
   :::column span="2":::
   Can [delete a project](../../projects/delete-project.md) from an organization or project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="delete-test-runs-permission"></a> Delete test runs  
   `Project, DELETE_TEST_RESULTS`
   :::column-end:::
   :::column span="2":::
   Can delete a test run.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="edit-team-project-level-information-permission"></a>  
   Edit project-level information 
   `Project, MANAGE_PROPERTIES`
   :::column-end:::
   :::column span="2":::
   Can edit project level permissions for users and groups, [project description](../../projects/project-vision-status.md), and [project services visibility](../../settings/set-services.md). Can edit project level permissions for users and groups.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="4":::
   > [!NOTE]   
   > **Edit project-level information** includes the ability to perform the following tasks for the project:
   > - Create and modify areas and iterations
   > - Edit check-in policies
   > - Edit shared work item queries 
   > - Edit project level permission ACLs
   > - Manage process templates 
   > - Customize a project (on-premises only)
   > - Create and modify global lists (on-premises only)
   > - Edit [event subscriptions](#alerts) (email or SOAP) on project level events 
   > - When combined with the **Change process of project** permission, allows users to change the Inheritance process for a project.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="edit-shared-analytic-views-permission"></a> Edit shared Analytics view  
   `AnalyticsViews, Edit` 
   :::column-end:::
   :::column span="2":::
   Can create and modify [shared Analytics views](../../../report/powerbi/analytics-views-manage.md).  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="manage-team-project-property-permission"></a> Manage project properties  
   `Project, MANAGE_SYSTEM_PROPERTIES`
   :::column-end:::
   :::column span="2":::
   Can provide or edit metadata for a project. For example, a user can provide high-level information about the contents of a project. Changing metadata is supported through the [Set project properties REST API](/rest/api/azure/devops/core/projects/set%20project%20properties). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="manage-test-configurations-permission"></a> Manage test configurations  
   `Project, MANAGE_TEST_CONFIGURATIONS`
   :::column-end:::
   :::column span="2":::
   Can create and delete [test configurations](../../../test/test-different-configurations.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="manage-test-environments-permission"></a> Manage test environments  
   `Project, MANAGE_TEST_ENVIRONMENTS`
   :::column-end:::
   :::column span="2":::
   Can create and delete [test environments](../../../test/test-different-configurations.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="move-work-items-out-of-this-project-permission"></a> Move work items out of this project  
   `Project, WORK_ITEM_MOVE`
   :::column-end:::
   :::column span="2":::
   Can [move a work item from one project to another project](../../../boards/backlogs/remove-delete-work-items.md) within the collection. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="permanently-delete-work-items-in-this-project-permission"></a> Permanently delete work items in this project 
   `Project, WORK_ITEM_PERMANENTLY_DELETE`
   :::column-end:::
   :::column span="2":::
   Can [permanently delete work items](../../../boards/backlogs/remove-delete-work-items.md) from this project. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="rename-team-project-permission"></a> Rename project 
   `Project, RENAME`
   :::column-end:::
   :::column span="2":::
   Can [change the name of the project](../../projects/rename-project.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="suppress-notifications-for-work-item-updates-permission"></a> Suppress notifications for work item updates 
   `Project, SUPPRESS_NOTIFICATIONS`
   :::column-end:::
   :::column span="2":::
   Users with this permission can update work items without generating notifications. This is useful when performing migrations of bulk updates by tools and want to skip generating notifications.  
   
   Consider granting this permission to service accounts or users who have been granted the **Bypass rules on work item updates** permission. You can set the `suppressNotifications` parameter to `true` when updating working via [Work Items - update REST API](/rest/api/azure/devops/wit/work-items/update).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="update-project-visibility"></a> Update project visibility  
   `Project, UPDATE_VISIBILITY`
   :::column-end:::
   :::column span="2":::
   Can [change the project visibility](../../projects/make-project-public.md) from private to public or public to private. Applies to Azure DevOps Services only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="view-analytics-permission"></a> View analytics  
   `AnalyticsViews, Read` 
   :::column-end:::
   :::column span="2":::
   Can access data available from the [Analytics service](../../../report/powerbi/what-is-analytics.md). For details, see [Permissions required to access the Analytics service](../../../report/powerbi/analytics-security.md).  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="view-team-project-level-information-permission"></a> View project-level information  
   `Project, GENERIC_READ`
   :::column-end:::
   :::column span="2":::
   Can view project level group membership and permissions.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   <a id="view-test-runs-permission"></a>  View test runs   
   `Project, VIEW_TEST_RESULTS`
   :::column-end:::
   :::column span="2":::
   Can view test plans under the project area path. 
   :::column-end:::
:::row-end:::
