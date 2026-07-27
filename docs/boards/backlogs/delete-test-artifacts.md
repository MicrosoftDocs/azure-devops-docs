---
title: Delete test plans, test cases, and other test artifacts in Azure Boards
titleSuffix: Azure Boards
description: Learn how to delete test plans, test cases, test results, & other test artifacts in Azure Boards.
ms.service: azure-boards
ms.custom: copilot-scenario-highlight
ms.author: chcomley
author: chcomley
ms.topic: how-to
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 07/20/2026
---

# Delete test artifacts in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

<a id="delete-test"> </a> 

Test artifacts such as test plans, test suites, and test cases are all work items in Azure DevOps. Deleting them is permanent in Azure DevOps Server but recoverable in Azure DevOps Services. Understanding the deletion process and recovery options helps you delete safely.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Understand deletion behavior

Deletion behavior differs between Azure DevOps Services and Azure DevOps Server. Understanding how each platform handles deletion and what recovery options are available helps you delete with confidence.

:::moniker range="=azure-devops"

### Azure DevOps Services deletion model

Azure DevOps Services supports a soft-deletion model. When you delete test plans or test suites, they enter a 14-day recovery window before permanent deletion.

### What happens when you delete test artifacts

1. **Remove from TCM data store**
    - The deleted test artifact is removed from the Test Case Management (TCM) data store.
    - The underlying work item associated with the test artifact is deleted.

1. **Delete child items**
    - A background job initiates the deletion of all child items from both the TCM data store and the underlying work items.
    - This process might take a few minutes, depending on the number of artifacts being deleted.

1. **Soft-deletion**
    - All information in both the work item tracking data store and the TCM data store is placed into soft-delete status, and you can restore it within 14 days.

1. **Permanent deletion**
    - You can't reactivate or restore deleted data under any circumstances.

To restore a deleted test plan or test suite during the 14 day soft-delete phase:

1. Run the List API to GET the [Test Plan](/rest/api/azure/devops/testplan/test-plan-recycle-bin/list)/[Test Suite](/rest/api/azure/devops/testplan/test-suite-recycle-bin-operations/get-deleted-test-suites-for-plan) you intend to restore.
1. If the List API returns a response with the test plan or test suite to restore, run the PATCH API for [Test Plan](/rest/api/azure/devops/testplan/test-plan-recycle-bin/restore-deleted-test-plan)/[Test Suite](/rest/api/azure/devops/testplan/test-suite-recycle-bin-operations/restore-deleted-test-suite) to restore them.
1. If the List API doesn't return the test plan or test suite you want to restore, it's permanently deleted from the system and can't be restored.

### Restore a deleted test plan or suite

<a id="restore-deleted-artifacts"></a>

During the 14-day soft-delete phase, you can restore deleted test plans and suites:

1. Run the List API to GET the [Test Plan](/rest/api/azure/devops/testplan/test-plan-recycle-bin/list)/[Test Suite](/rest/api/azure/devops/testplan/test-suite-recycle-bin-operations/get-deleted-test-suites-for-plan) you want to restore.
1. If the List API returns a response with the test plan or suite to restore, run the PATCH API for [Test Plan](/rest/api/azure/devops/testplan/test-plan-recycle-bin/restore-deleted-test-plan)/[Test Suite](/rest/api/azure/devops/testplan/test-suite-recycle-bin-operations/restore-deleted-test-suite) to restore them.
1. If the List API doesn't return the test plan or suite you want to restore, it's permanently deleted and can't be recovered.

### Important limitations

* After deletion, test plans and test suites are in a soft-delete state for 14 days. After this period, they're permanently deleted and can't be restored.
* When you restore a test plan or suite, all child artifacts (test suites, test cases) are also restored.
* Restoring test runs associated with test plans and suites isn't supported.
* Test cases deleted through APIs or non-portal methods are permanently deleted and can't be restored.

:::moniker-end

:::moniker range="<azure-devops"

### Azure DevOps Server deletion model

> [!IMPORTANT]
> **Permanent and Irreversible Deletion:** Azure DevOps Server only supports permanent deletion of test artifacts, including test plans, test suites, test cases, shared steps, and shared parameters. Deleted artifacts can't be restored, and all associated child items, such as test results, are also removed. Additionally, bulk deletion of test artifacts isn't supported.
> 
> **Back up any necessary information before deleting test artifacts, as this action can't be undone.**

### What happens when you delete test artifacts

1. **Remove from TCM data store:**
    - The deleted test artifact is removed from the Test Case Management (TCM) data store.
    - The underlying work item associated with the test artifact is deleted.

1. **Delete child items:**
    - A background job initiates the deletion of all child items from both the TCM data store and the underlying work items.
    - This process might take a few minutes, depending on the number of artifacts being deleted.

3. **Permanent deletion:**
    - The process permanently deletes all information in both the work item tracking data store and the TCM data store.
    - You can't reactivate or restore deleted data under any circumstances.

:::moniker-end

## Prerequisites

| Category | Requirements |
|----------|-------------|
| **Access levels** | [**Basic + Test Plans**](../../organizations/security/access-levels.md) or **Visual Studio Enterprise** to manage or delete test artifacts. Users with **Basic** access can only delete orphaned test cases (test cases not linked to any test plan or suite). |
| **Permissions — test runs** | Member of the **Project Administrators** group, or the project-level [**Delete test runs**](../../organizations/security/change-project-level-permissions.md) permission set to **Allow**. |
| **Permissions — test plans and suites** | Member of the **Project Administrators** group, or the Area Path node-level [**Manage test plans** or **Manage test suites**](../../organizations/security/set-permissions-access-work-tracking.md#manage-test-artifacts) permission set to **Allow**. |

> [!NOTE]
> If you're not a project administrator, you need both the project-level [**Delete test runs**](../../organizations/security/change-project-level-permissions.md) permission and the applicable Area Path node-level permissions.

> [!TIP]
> Not sure if you have the right permissions? See the [Verify deletion permissions](#verify-deletion-permissions) section.

<a id="test-experience"></a>

## Work item types that support the test experience  

The following image illustrates the set of work item types that support the test experience and work with Microsoft Test Manager. These work item types are linked together using the link types shown. 

![Screenshot shows Test management work item types.](../work-items/guidance/media/ALM_PT_WITS_TestExperience.png)

From the web portal or Microsoft Test Manager, you can view which test cases are defined for a test suite, 
and which test suites are defined for a test plan. 
However, these objects aren't connected to each other through link types. For definitions of each field used in these work item types, see [Query based on build and test integration fields](../queries/build-test-integration.md).

## Delete test artifacts

> [!WARNING]
> Deleting test artifacts is permanent and can't be undone. In Azure DevOps Services, you have 14 days to restore deleted Test Plans and Test Suites. In Azure DevOps Server, deletion is immediate and permanent. Verify your selection carefully before confirming deletion.

### Delete a test case

1. Go to the test case you want to delete.
1. Select **Permanently delete** from the actions menu.
1. Confirm the deletion in the dialog that appears.

![Delete a test case and associated test artifacts from the web form.](media/move-change-delete/delete-test-artifacts-form.png)

> [!NOTE]
> The **Permanently delete** option is available only if you have the necessary permissions and access level.

### Delete a test suite

1. Go to the test suite you want to delete.
1. Select **Permanently delete** from the actions menu.
1. Confirm the deletion in the dialog that appears.

:::image type="content" source="media/move-change-delete/perm-delete-test-artifacts-dialog.png" alt-text="Confirm delete of test artifacts dialog.":::

### Delete a test plan

**Option A: Delete from test plan view**

1. Go to the test plan you want to delete.
1. Select **Permanently delete** from the actions menu.
1. Confirm the deletion in the dialog that appears.

**Option B: Delete from Test Plans hub**

::: moniker range="<=azure-devops"
1. Open **Test Plans**.
1. Find the test plan you want to delete in the list.
1. Right-click the test plan (or select the **···** menu icon next to the plan).
1. Select **Delete**.
1. Confirm the deletion.

:::image type="content" source="media/move-change-delete/delete-test-suite-test-plans.png" alt-text="Screenshot of Test Plans page, delete a test plan.":::
::: moniker-end

### Delete shared steps or shared parameters

1. Open the shared step or shared parameter you want to delete.
1. Select **Show references** to view all test cases that link to this item.
1. For each test case, open it and remove the link to the shared step or parameter.
1. After you remove all references, return to the shared step or parameter and select **Permanently delete**.
1. Confirm the deletion.

> [!NOTE]
> If the **Permanently delete** option is disabled, verify that you removed all references. The system blocks deletion of shared steps or parameters that test cases still reference.

![Screenshot shows Delete shared steps from form.](media/delete-test-shared-steps-remove-link.png)  

## Verify deletion permissions

Before you attempt to delete test artifacts, verify that you have the required permissions:

1. Go to **Project settings** > **Permissions**.
1. Search for your user account or team.
1. Verify that the following permissions are set to **Allow**:
   - **Delete test runs** (for deleting test results)
   - **Manage test plans** or **Manage test suites** (for deleting test plans and suites)
1. Check that your access level is **Basic + Test Plans** or higher.
1. If permissions aren't correct, contact your project administrator.

For more information, see [Manage test artifacts permissions](../../organizations/security/set-permissions-access-work-tracking.md#manage-test-artifacts).

## Troubleshoot test artifact deletion

### "Permanently delete" option doesn't appear

**Possible causes:**
- Your access level is lower than **Basic + Test Plans**.
- You don't have the required permissions for this artifact.
- You don't have Area Path permissions for this location.

**Resolution:**
1. Check your access level: Go to **Profile** > **Security** to see your current access level.
1. Verify your permissions: See [Verify deletion permissions](#verify-deletion-permissions).
1. If you're not a project administrator, ask your administrator to assign the required permissions.

### Deletion is slow or times out

**Possible causes:**
- The test artifact has many child items (test cases, test suites, test results).
- A background job is still processing the deletion.
- Network connectivity issues

**Resolution:**
- Large deletions can take several minutes. Allow time for the background job to complete.
- Refresh the page after waiting a few minutes to verify the deletion.
- Check your network connectivity and try again.

### Artifact still appears after deletion (Azure DevOps Services)

**Possible cause:**
- The artifact is in soft-delete state (14-day recovery window).

**Resolution:**
- In Azure DevOps Services, deleted Test Plans and Test Suites remain visible in some views during the 14-day recovery window.
- The artifact is permanently deleted after 14 days.
- To restore the artifact during this window, see [Restore a deleted test plan or suite](#restore-deleted-artifacts) (in the introduction section above).

### Can't delete shared steps or parameters

**Possible cause:**
- The shared step or parameter still has references from test cases.

**Resolution:**
1. Open the shared step or parameter.
1. Select **Show references** to view all linked test cases.
1. Open each test case and remove the link.
1. Try deletion again.

For more information, see [Delete shared steps or shared parameters](#delete-shared-steps-or-shared-parameters) above.

## Delete test artifacts via REST API

You can also delete test artifacts programmatically by using the Azure DevOps REST API. This method is useful for automation, bulk deletion, or integration with CI/CD pipelines.

### Delete a test case

```http
DELETE https://dev.azure.com/{organization}/{project}/_apis/test/testcase/{testCaseId}?api-version=7.1
Authentication: Basic [PAT or OAuth token]
```

### Delete a test suite

```http
DELETE https://dev.azure.com/{organization}/{project}/_apis/test/plans/{planId}/suites/{suiteId}?api-version=7.1
Authentication: Basic [PAT or OAuth token]
```

### Delete a test plan

```http
DELETE https://dev.azure.com/{organization}/{project}/_apis/test/plans/{planId}?api-version=7.1
Authentication: Basic [PAT or OAuth token]
```

> [!NOTE]
> - Replace `{organization}`, `{project}`, `{planId}`, `{suiteId}`, and `{testCaseId}` with actual values.
> - Use API version `7.1` or later. Check [REST API versioning](../../integrate/concepts/rest-api-versioning.md#supported-versions) for current versions.
> - In Azure DevOps Services, you can restore deleted artifacts through the API during the 14-day soft-delete window.
> - In Azure DevOps Server, deletion through the API is permanent.
> - Authenticate by using a [Personal Access Token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) or [OAuth token](../../integrate/get-started/authentication/oauth.md).

For full API details, see the [Test Plan recycle bin API reference](/rest/api/azure/devops/testplan/test-plan-recycle-bin/list).

<a id="use-ai-assistance"></a>

## Use AI to delete test artifacts

If you configure the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md) for your organization, you can use it to find and delete test artifacts at scale by using natural language. This method is especially useful for bulk deletions or complex queries that are difficult to perform manually.

Here are common patterns for natural-language queries:

| Task | Example prompt |
|------|----------------|
| Delete a test plan | `Delete test plan <TestPlanName> in project <Contoso>` |
| Find old test artifacts | `List all test plans in project <Contoso> that aren't updated in the last 6 months` |
| Remove abandoned test suites | `Find all test suites in project <Contoso> that have no test runs in the last 90 days and delete them` |
| Find duplicate test cases | `Identify duplicate test cases in test suite <SuiteName> that have the same title and steps` |
| Bulk delete test cases by tag | `Delete all test cases marked with tag "deprecated" in project <Contoso>` |
| Remove orphaned shared steps | `Find shared steps in project <Contoso> that aren't referenced by any test cases` |
| Verify deletion impact | `Before I delete test plan <TestPlanName>, show me how many test cases, test suites, and test runs are associated with it` |
| Delete old test results | `Delete all test results older than 1 year from test plan <TestPlanName>` |
| Plan artifact cleanup | `What test artifacts in project <Contoso> can I safely delete to clean up the test data` |

> [!NOTE]
> Agent mode and the MCP Server use natural language, so you can adjust these prompts or ask follow-up questions to refine the results. In Azure DevOps Server, test artifact deletion is permanent and can't be restored, so verify your selection carefully.

## Related content   

- [Create a test plan](../../test/create-a-test-plan.md)
- [Control how long to keep test results](../../test/how-long-to-keep-test-results.md) 
- [Set permissions and access for work tracking, Manage test artifacts](../../organizations/security/set-permissions-access-work-tracking.md#manage-test-artifacts)
