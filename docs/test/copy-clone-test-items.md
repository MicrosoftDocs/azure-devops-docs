---
title: Copy or clone test plans, test suites, test cases, or other test items
titleSuffix: Azure Test Plans  
description: Learn how to copy or clone test plans, test suites, and test cases in Azure Test Plans.  
ms.service: azure-devops-test-plans
ms.custom: cross-project, UpdateFrequency3
ms.author: jeom
author: raviLiftr
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 03/12/2024
---


# Copy or clone test plans, test suites, and test cases 

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

Several tools support copy, clone, or import operations of test items such as test plans, test suites, and test cases. Test cases describe the steps to take to run a test and validate a feature implementation or bug fix. Test suites group test cases, and optionally other test suites, into a particular order. Test plans define a collection of test suites to run for a particular iteration or release.  
 
Each test case is designed to confirm a specific behavior. Test cases might belong to one or more test suites, however test suites can belong to one and only one test plan.  

In general, you should create a test plan for every major project milestone. Copy, clone, or import operations of test items support the following scenarios. 
- Define a test plan for a new sprint or release based on an existing test plan
- Import test suites from one test plan to another test plan within the same or different project  
- Copy test cases for use in different test suites and test plans
- Share test objects across projects
- Move test objects from one project to another, possibly to support consolidating projects into a single project
  
For more information, see [Overview of test objects and terms](test-objects-overview.md).  

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

[!INCLUDE [prerequisites-tcm](includes/prerequisites-tcm.md)] 
 
## Supported copy, clone, and import tools  

Depending on the Azure DevOps version you use, you can use the clients or tools listed in the following table to copy, clone, or import test plans, test suites, or test cases.  

:::row:::
   :::column span="1":::
      **Client/tool**  
   :::column-end:::
   :::column span="1":::
      **Test Plans**
   :::column-end:::
   :::column span="1":::
      **Test Suites**
   :::column-end:::
   :::column span="1":::
      **Test Cases**
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      **Web portal** <sup>1</sup>  
   :::column-end:::
   :::column span="1":::
      ✔️ [Copy](#copy-test-plans-portal)
   :::column-end:::
   :::column span="1":::
      ✔️ [Import](#import-test-suites-portal)
   :::column-end:::
   :::column span="1":::
       ✔️ [Copy](#copy-test-case) 
       ✔️ [Bulk export/import](#bulk-import-export)  
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      **Web portal (Grid)**  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️ [Copy and paste](#copy-paste)
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="1":::
      **Web portal (Grid)**  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️ [Copy and paste](#copy-paste)
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="1":::
      **Work item form**  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️ [Copy](../boards/backlogs/copy-clone-work-items.md)
   :::column-end:::
:::row-end:::
::: moniker range="=azure-devops-2019"
:::row:::
   :::column span="1":::
      **Microsoft Test Manager**<sup>1</sup>  
      (deprecated) 
   :::column-end:::
   :::column span="1":::
      ✔️ [Clone plan](/previous-versions/azure/devops/test/mtm/copying-and-cloning-test-suites-and-test-cases)
   :::column-end:::
   :::column span="1":::
      ✔️ [Copy a test suite](/previous-versions/azure/devops/test/mtm/copying-and-cloning-test-suites-and-test-cases)
   :::column-end:::
   :::column span="1":::
      ✔️ [Create copy](/previous-versions/azure/devops/test/mtm/copying-and-cloning-test-suites-and-test-cases)
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="1":::
      **TCM CLI** <sup>2</sup>   
   :::column-end:::
   :::column span="1":::
      ✔️ [Clone](#clone-test-plan)
   :::column-end:::
   :::column span="1":::
      ✔️ [Clone](#clone-test-suite)
   :::column-end:::
   :::column span="1":::
      ✔️ [Import automated](#import-test-cases)
   :::column-end:::
:::row-end:::
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      **REST API** <sup>3</sup>  
   :::column-end:::
   :::column span="1":::
      ✔️ [Clone](/rest/api/azure/devops/testplan/test-plan-clone/clone-test-plan) 
   :::column-end:::
   :::column span="1":::
      ✔️ [Clone](/rest/api/azure/devops/testplan/test-suite-clone/clone-test-suite)
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
::: moniker-end

> [!NOTE]   
> ::: moniker range=">= azure-devops-2020"
> 1. With the release of Azure DevOps Server 2020, the web portal for Azure Test Plans was significantly updated. Many new features were added to support copy, clone, import, and export. For an overview, see [Navigate Test Plans](navigate-test-plans.md).
> 1. The Test Case Management (TCM) command-line tool is installed when you install Visual Studio 2017 or earlier versions. Examples provided in this article reflect the options available with the Visual Studio 2017 version. Earlier versions may support fewer options. For details, see [Work with the TCM command-line tool](#work-tcm-cli). 
> 1. REST API commands to support cloning of test plans and test suites were added with version 5.0, corresponding with Azure DevOps 2019. 
> ::: moniker-end
> ::: moniker range="< azure-devops-2020"
> 1. [Microsoft Test Manager (MTM)](/previous-versions/azure/devops/test/mtm/guidance-mtm-usage) was deprecated for use with Azure DevOps Services in January 2020, and isn't supported for Azure DevOps Server 2020 and later versions. The current version of Azure Test Plans supports all features that MTM supported and more. 
> 1. The Test Case Management (TCM) command-line tool installs when you install Visual Studio 2017 or earlier versions. Examples provided in this article reflect the options available with the Visual Studio 2017 version. Earlier versions may support fewer options. For more information, see [Work with the TCM command-line tool](#work-tcm-cli). 
> ::: moniker-end 

## List test plans or test suites 

When you perform copy, clone, or import operations related to test plans or test suites, it’s essential to have access to their unique ID. This identifier allows you to precisely target the specific plan or suite you want to work with. By knowing the assigned ID, you can streamline your testing processes and ensure accurate replication or transfer of test-related data. 

# [Browser](#tab/browser)

<a id="query"></a>

Do the following steps to generate a list of test plans, test suites, or other test objects.

1. Select **Boards** > **Queries**, from your project. 
2. Enter the parameter, `Work Item Type=Test Plan` in your query Editor. You can list all test plans defined for the team project. 
3. Enter a check in the **Query across projects** checkbox. 
   The query lists all test plans defined for all projects. For more information, see [Define a work item query](../boards/queries/using-queries.md).
4. **Run** the query. 

> [!TIP]
> While test plans, test suites, and test cases are related to each other, you can't view the relationships through a work item query. Link types don't link test plans, test suites, and test cases. Only shared steps and shared parameters link to test cases. Also, test cases link to user stories or other work items that they test. 

:::image type="content" source="media/copy-clone/query-test-plans.png" alt-text="Screenshot of Query Editor.":::

<a id="work-tcm-cli"></a>

# [TCM CLI](#tab/tcm-cli)

TCM supports listing of test plans and test suites. Lists specify the work ID for each test plan or test suite. This ID is the same as a plan ID or suite ID. 

[List test plans](#list-test-plans) | [List test suites](#list-test-suites)

### List test plans  

Use `tcm plans /list` to determine the **ID** for a test plan. The **ID** corresponds to the work item ID defined when the test plan was created. 

```tcm 
tcm plans /list [/planid:id  |  /querytext:query] /collection:teamprojectcollectionurl
           /teamproject:project [/login:username,[password]]
```

| Parameter | Description |  
|----------|------------| 
|**/querytext**:`query`| Optional. Specifies the query to use to list a subset of test plans.    |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

**Example**

The following command lists the test plans defined for the *Fabrikam Fiber* project hosted in the *fabrikamprime* organization. The **ID** and **Name** corresponds to the work item ID and **Title** defined for the test plan. For example, test plan *86* is titled *Hello World Test*.  

```tcm 
tcm plans /list /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber"

Id        Name
------***----------------------------------------------------------------
66        Sprint 1
72        All sprints
77        Sprint 2
86        Hello World Test
```

### List test suites  

Use `tcm suites /list` to list the test suites with their work item IDs. When no optional parameters are specified, all test suites are listed for the team project.

```tcm 
tcm suites /list [/planid:id  |  /querytext:query] /collection:teamprojectcollectionurl
           /teamproject:project [/login:username,[password]]
```

| Parameter | Description |  
|----------|------------| 
|**/planid**:`id` | Optional. Specifies the ID of the plan to reference the test suites to list.  |
|**/querytext**:`query`| Optional. Specifies the query to use to list a subset of test suites.    |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

**Example**

The following command lists the test suites defined for the *Fabrikam Fiber* project hosted in the *fabrikamprime* organization. The **ID** corresponds to the work item ID defined for the test suite. Under the **Name** column, the first entry indicates the test plan that the test suite is defined under. Following the -> (arrow) is the **Title** of the test suite or the **Title** of a parent test suite. For example, test suite *75*, *Sub Suite 01*, is a subtest suite of *Suite 01* defined for the *All sprints* test plan. 

```tcm 
tcm suites /list /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber" 

Id        Name
------***----------------------------------------------------------------
67        Sprint 1
68        Sprint 1 -> 33 : Change initial view
69        Sprint 1 -> 34 : Welcome back page
70        Sprint 1 -> 43 : Cancel order form
73        All sprints
74        All sprints -> Suite 01
75        All sprints -> Suite 01 -> Sub Suite 01
78        Sprint 2
87        Hello World Test
```

***

<a id="clone-test-plan"></a> 
<a id="copy-test-plans-portal"></a>

## Copy or clone test plans  

When you create a new test plan per sprint or release, a helpful approach is to clone the test plan from the prior cycle. With minimal adjustments, the copied test plan becomes well-suited for the new cycle. This practice streamlines the planning process and ensures consistency across iterations.

Cloning proves especially useful when you need to branch your application into two versions. After cloning, you can modify tests independently for each version without impacting the other. It’s an efficient way to manage testing efforts while maintaining separation between different application variants.

:::image type="content" source="media/copy-clone/clone-test-plan-conceptual.png" alt-text="Conceptual image, clone test plan.":::

# [Browser](#tab/browser)

::: moniker range=">= azure-devops-2020"

1. Select **Test Plans** > **Test plans**, from your project.
2. Choose the test plan you want to copy from the **Mine** or **All** page.  
3. Select :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More actions** > **Copy test plan**. This option lets you copy or clone test plans within a project. 

	:::image type="content" source="media/copy-clone/copy-test-plan-menu-selection.png" alt-text="Screenshot showing Test Plan More Actions menu, copy test plan option.":::

4. Specify the name of the new test plan, and select an **Area Path** and **Iteration Path** for the plan.  

	:::image type="content" source="media/copy-clone/copy-test-plan-dialog.png" alt-text="Screenshot showing Copy test plan dialog.":::

	- Choose one or the other radio-buttons based on the following guidance:  
	   - **Reference existing test cases**: Choose this option when you plan to merge the two branches eventually. In this case, keep the same requirements for functionality that is already implemented and tested.  
	   - **Duplicate existing test cases**: Choose this option when you want to make new test cases maintained separately, note that new test cases will be linked to existing requirements.  

	If you duplicate existing test cases, the copied test cases get assigned the **Area Path** and **Iteration Path** specified for the cloned test plan. 

	For more information, see [About area and iteration (sprint) paths](..//organizations/settings/about-areas-iterations.md).

   The page refreshes to display the newly copied test plan. 

	:::image type="content" source="media/copy-clone/copied-test-plan.png" alt-text="Screenshot showing Copied test plan, browser view.":::

5. Update any [query-based suites](create-a-test-plan.md) that you copied to use the new area and iteration paths.  

6. Specify a build in the destination test plan if you cloned automated test cases.

<!-- Document labeling that occurs, pick up of work item IDs --> 

::: moniker-end

::: moniker range="< azure-devops-2020"

> [!NOTE] 
> This feature isn't supported through the web portal for Azure DevOps Server 2019 and earlier versions. The feature to copy test plans requires Azure DevOps Server 2020 or later. 

::: moniker-end

# [TCM CLI](#tab/tcm-cli)

You can use the TCM command-line tool to clone a test plan to the same or different project, and to track the status of the clone operation.

[List test plans](#list-test-plans) | [Clone a test plan](#clone-test-plan) | [Track test plan clone status](#track-test-plan-clone-status) 

### Clone a test plan 

Use `tcm plans /clone` to initiate a cloning operation of all test cases from one test suite to a different destination suite within the same project. The destination suite must be defined and exist in a different plan. All contained suites and test cases are cloned. The command might return an operation ID that you can use to track the status and completion of the clone operation. When the clone operation completes quickly, no operation ID is returned.   

```tcm 
tcm plans /clone /sourceplanid:id /destinationplanname:name
          [/overridefield:name=value [/overridefield:name=value ...]]
          [/sourcesuiteids:suiteid1,[suiteid2,...]]
          /collection:teamprojectcollectionurl /teamproject:project
          [/login:username,[password]]
          [/clonerequirements]
          [/clonechildren]
```
The `/clone /sourceplanid /destinationplanname` creates a new plan. If you specify `/sourcesuiteids`, the command initiates a clone operation to clone the test cases to the new plan. The command returns an operation ID that can be used to track status and completion of the clone operation.

| Parameter | Description |  
|----------|------------|  
|**/sourceplanid**:`id` | Required. Specifies the ID of the plan to be copied, and the ID of the suite into which the new copy gets added. If you want to copy a whole test plan, use the ID of the suite at the root of the test plan. The ID of a suite is displayed in the details pane when you select it in the test plan. You can also get a list of suites by using `tcm suites /list`. |  
|**/destinationplanname**:`name`|Specifies the name of the plan into which the cloned test plan gets copied.  |
|**/overridefield**:`name=value`<br/>**/overridefield**:`name=value`| Optional. Specify to change the value of a field in each cloned work item. Specify multiple occurrences of this parameter to change as many fields as you want. This option is required when you clone a test suite to a different project. |  
|**/sourcesuiteids**:`suiteid1,[suiteid2,...`|Optional. Specifies source test suites within the test plan to copy. |
|**/clonerequirements** |Optional. Specifies to clone requirements category work items that are attached to requirements-based test suites. If you omit this parameter, requirements-based test suites are converted to static suites. |
|**/clonechildren** |Optional. Specify to clone all child suites of the suites provided.|
|**/clonerequirements** | Optional. Specify this switch to clone a requirement-based suite to a destination requirement-based suite. By default, a requirement-based test suite is cloned to a destination static test suite. Can only specify this option when `/sourcesuiteids` is provided.  |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

**Example**

The following example clones test plan *66* to a new test plan titled *Test plan, Release 3*, which is then assigned the ID *118*. 

```tcm 
tcm plans /clone /sourceplanid:66 /destinationplanname:"Test plan, Release 3" /overridefield:"Iteration Path"="Fabrikam Fiber\Release 3" /overridefield:"Area Path"="Fabrikam Fiber\Web" /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber"
Plan created with ID: 118

Clone operation is complete.

```
 
<a id="track-test-plan-clone-status"></a> 

### Track the status of the test plan clone operation  

Use `tcm plans /clone /status` to retrieve the status of the clone operation made with `tcm suites /clone`. Test suites that contain a large number of test cases can take a considerable time to clone. 


```tcm 
tcm plans /clone
           /status:cloneoperationid
           /collection:teamprojectcollectionurl /teamproject:project
           [/login:username,[password]]
```

| Parameter | Description |  
|----------|------------| 
|**/status**:`cloneoperationid`|Required. Specifies the ID of the clone operation returned when `tcm plans /clone` executes.  |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

***

<a id="import-test-suites-portal"></a>
<a id="clone-test-suite"></a> 

## Import or clone test suites 

When you're creating the test plan for a new sprint, you often want to repeat some of the tests from the previous sprints, to make sure that the functionality you already implemented still works.

:::image type="content" source="media/copy-clone/copy-test-suite-conceptual.png" alt-text="Conceptual image, copy test suites.":::
 
> [!NOTE]
> - When you import (Web) or clone (TCM) a test suite to a new project, the new suite contains copies of all test cases in the source suite. However, it doesn't retain any historical data like the previous test runs, related bugs, old results.
>- Shared steps referenced by the test cases are also cloned and created in the destination project.
>- You can't clone test cases from and to the same test plan, even into a different suite. To accomplish this scenario, you must first move the test cases to a different, temporary test plan. Then, use the temporary test plan as the source plan and clone the test cases back to the source test plan by putting the ID into the destination test plan place. Shared steps present in the test cases are also duplicated in this process. 

::: moniker range=">= azure-devops-2020"

When you're working with Azure Test Plans, you can import a test suite from one test plan into another test plan within the current project. It doesn't matter whether the test plans are within the same project. This process involves copying or cloning the test suite, resulting in the creation of a new test suite. Additionally, any subtest suites also get duplicated. The test cases referenced by the test suites don't duplicate; instead, they get referenced by the cloned test suites.
::: moniker-end

You can use [`tcm suites /list`](#list-test-suites) to list all test suites defined for a project. 
  
To use the same test cases in different suites and plans, copy and paste test cases using the **Grid** view.

# [Browser](#tab/browser)

::: moniker range=">= azure-devops-2020"

1. Select **Test Plans** > **Test plans**.
2. Choose the test plan where you want to import a test suite from the **Mine** or **All** page.
3. Select :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More actions** > **Copy test plan**. This option lets you copy or clone test plans within a project. 

	:::image type="content" source="media/copy-clone/import-test-suites.png" alt-text="Screenshot showing Test Suite More Actions menu, Import test suites option.":::

4. In the opened dialog, select the project if the test plan resides within a different project. Otherwise, enter the Test Plan Name or ID and Test Suite Name or ID. You can also select the name or ID from the dropdown menus.
5. **Create** the import. You can only import one suite from a test plan at a time. 

	:::image type="content" source="media/copy-clone/import-suites-from-test-plan-dialog.png" alt-text="Screenshot showing Import suites from a Test Plan dialog.":::

   The following message displays: 

	:::image type="content" source="media/copy-clone/import-suites-message-1.png" alt-text="Screenshot showing Import suites initiated message.":::

6. When the import operation completes, the following message displays. Select **Refresh** to refresh your browser. 

	:::image type="content" source="media/copy-clone/import-suites-message-2.png" alt-text="Screenshot showing Import suites completed message.":::

	The newly added test suite then displays. 

	:::image type="content" source="media/copy-clone/imported-test-suite-displayed.png" alt-text="Screenshot showing Imported test suite displayed.":::
 
::: moniker-end

::: moniker range="< azure-devops-2020"

> [!NOTE] 
> This feature isn't supported through the web portal for Azure DevOps Server 2019 and earlier versions. The feature to import test suites requires Azure DevOps Server 2020 or later version. 

::: moniker-end

# [TCM CLI](#tab/tcm-cli)

You can use the TCM command-line tool to clone a test plan to the same or different project, and to track the status of the clone operation.

[List test suites](#list-test-suites) | [Clone a test suite](#clone-test-suite) | [Track test suite clone status](#track-test-suite-clone-status) 

### Clone a test suite 

Use `tcm suites /clone` to initiate a cloning operation of all test cases from one test suite to a different destination suite within the same project by default. The destination suite must be defined and exist in a different plan. All contained suites and test cases are cloned. The command returns an operation ID that you can use to track the status and completion of the clone operation.  

The following options provide support for optional clone operations:  

- `/destinationteamproject`: Clone a suite to a different project. 
- `/destinationworkitemtype`: Specify the work item type to use when cloning the test cases. Specify this option when cloning test cases to a custom work item type. 
- `/overridefield`: Override the values for select fields, such as the **Area Path** and **Iteration Path** fields, which is required when cloning to a different project. Or override the value of other fields to distinguish cloned test cases from the original. 
- `/clonerequirements`: Specify this switch to clone a requirement-based suite to a destination requirement-based suite.  
 

```tcm 
tcm suites /clone
           /suiteid:id /destinationsuiteid:id
           [/overridefield:name=value [/overridefield:name=value ...]]
           [/destinationteamproject:projectname]
           [/destinationworkitemtype:workitemtype]
           /collection:teamprojectcollectionurl /teamproject:project
           [/login:username,[password]] [/clonerequirements]
```

| Parameter | Description |  
|----------|------------| 
|**/suiteid**:`id`|Specifies the ID of the suite to be copied, and the ID of the suite into which the new copy gets added. If you want to copy a whole test plan, use the ID of the suite at the root of the test plan. The ID of a suite is displayed in the details pane when you select it in the test plan. You can also get a list of suites by using `tcm suites /list`. |
|**/overridefield**:`name=value`<br/>**/overridefield**:`name=value`| Optional. Specify to change the value of a field in each cloned work item. Specify multiple occurrences of this parameter to change as many fields as you want. This option is required when you clone a test suite to a different project. |
|**/destinationsuiteid**:`id`|Specifies the ID of the suite into which the new copy gets added. If you want to copy a whole test plan, use the ID of the suite at the root of the test plan. The ID of a suite is displayed in the details pane when you select it in the test plan. You can also get a list of suites by using `tcm suites /list`.|
|**/destinationteamproject**:`projectname`|Optional. Specify when you want to clone the test suite to a different project but in the same organization or project collection. When specified, you must specify override field values for the **Area Path** and **Iteration Path** fields.|
|**/destinationworkitemtype**:`workitemtype`|Optional. Specify when you want to clone the test suite to a different work item type in the destination project. |
|**/clonerequirements** | Optional. Specify this switch to clone a requirement-based suite to a destination requirement-based suite. By default, a requirement-based test suite is cloned to a destination static test suite.  |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

**Understand what gets cloned**  
  
When you clone a test suite, the following objects are copied from the source test plan to the destination test plan.
  
|Test plan object| Notes|  
|----------------------|------------|
|Test case| Each new test case retains its shared steps. A link is defined between the source and new test cases. The new test cases don't have test runs, bugs, test results, or build information.|  
|Shared steps | Shared steps referenced by cloned test cases are copied. |  
|Test suite| Test suites that are copied retain the following data: <br</a><br</a>- Names and hierarchical structure of the test suites<br</a>- Order of the test cases<br</a>- Assigned testers<br</a>- Configurations|  
|Recordings | Action recordings linked from a cloned test case are copied.|
|Links and Attachments|All links and attachments get copied for all test items that are copied. |
|Test configuration|The test configuration defined for the source test plan is copied over and applied to the destination test plan.|  

The following test information isn't copied: 

- **Test settings**: The test setting for the source test plan isn't copied. Instead, the test settings for the destination test plan are applied.   
- **Test results and test runs**: No test results are copied. Because test runs are applicable only to the source test plan, they aren't copied.  

When `/clonerequirements` is specified and Requirements-based test suites are copied: 
- The Requirements-based test suites get copied and linked to a new copy of the requirement work item. 
- Requirements work items (product backlog items or user stories) that are associated with a cloned requirements-based suite get cloned. 
- Bug work items get cloned in a project that uses the Scrum process template, or any project in which the Bug work item type is in the Requirements work item category. Otherwise, bugs aren't cloned. 

When `/clonerequirements` in't specified and Requirements-based test suites get copied: 
- Requirements-based test suites convert to static test suites in the destination test plan. 
- Cloned test cases are referenced under the static test suite. 
- Cloned test cases don't include links to their original requirements work items.
 
**Example**

The following example illustrates cloning test suite *97* defined for the *Fabrikam Fiber* project to the *Fabrikam Git* project. Because the test suite contained a query-based suite, a warning message is listed to review and revise the respective query in the source and destination test suites.  

```tcm 
tcm suites /clone /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber" /destinationteamproject:"Fabrikam Git" /suiteid:97 /destinationsuiteid:104 /overridefield:"Iteration Path"="Fabrikam Git" /overridefield:"Area Path"="Fabrikam Git"

Started clone operation with id 4.
Use /status:4 to get progress and completion information of the operation.
Warning: You have cloned the following query based suites as part of this clone operation. You are advised to fix their respective queries in the source and destination suites, after the clone operation completes.
1. Sprint 3 -> Sprint 3 query-based suite
```

<a id="track-test-suite-clone-status"></a> 

### Track the status of the test suite clone operation  

Use `tcm suites /clone /status` to retrieve the status of the clone operation made with `tcm suites /clone`. Test suites that contain a large number of test cases can take a considerable time to clone. 

```tcm 
tcm suites /clone
           /status:cloneoperationid
           /collection:teamprojectcollectionurl /teamproject:project
           [/login:username,[password]]
```

| Parameter | Description |  
|----------|------------| 
|**/status**:`cloneoperationid`|Required. Specifies the ID of the clone operation returned when `tcm suites /clone` executes.  |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

**Example**

```tcm 
tcm suites /clone /status:4 /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber"

Clone operation 4 has succeeded. Summary information:
Started on:           10-Nov-21 5:00:28 PM
Started by:           Jamal Hartnett
Source suite id:      97
Destination suite id: 114
Test cases cloned:    9
Shared steps cloned:  0
Requirements cloned:  0
Completed on:         10-Nov-21 5:00:30 PM
```

***

::: moniker range=">= azure-devops-2020"

<a id="copy-test-case"></a> 

## Copy test case

From the web portal, you can copy test cases from within a project or another project to a test suite, or you can use the **Grid** view to [copy and paste test cases](#copy-paste) from one suite to another. Optionally, you can [bulk import and export test cases](#bulk-import-export). 

> [!TIP] 
> Don't copy test cases when you want to test with [different configurations](test-different-configurations.md) or [different data](repeat-test-with-different-data.md). 

You have the flexibility to copy test cases from either within a project or from another project within the organization or collection. Additionally, you can choose to include all links and attachments during the copying process.

1. Select **Test Plans** > **Test plans**.
2. Choose the Test Plan that contains one or more test cases you want to copy from the **Mine** or **All** page. 
3. Select the Test Suite that contains one or more test cases you want to copy. 
4. From the **Define** page, select the check box for all test cases you want to copy. 

5. Select  :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More actions** > **Copy test case**.   
  
	:::image type="content" source="media/copy-clone/copy-test-cases-menu-selection.png" alt-text="Screenshot showing Test Cases More Actions menu, copy test cases option.":::

6. Choose the Project from the dropdown menu, and then enter the Test Plan Name or ID and Test Suite Name or ID. You can also select the name or ID from the dropdown menus.

	:::image type="content" source="media/copy-clone/copy-test-cases-dialog.png" alt-text="Screenshot showing Copy test cases dialog.":::

7. (Optional) Select the check boxes for **Include existing links** and **Include existing attachments**. 
8. **Create** the copy.

	The background copy operation depends on the quantity and complexity of the selected test cases. After completion, a notification gets sent to you confirming the operation’s success and a link to the test suite where the copied test cases reside.

<!-- Document labeling that occurs, pick up of work item IDs --> 

::: moniker-end

<a id="copy-paste"></a> 

## Copy and paste test case (Grid view)

When you're managing test cases, copying and pasting serve as a valuable technique to reuse the same tests across various suites and plans. For instance, consider a scenario where you have a comprehensive test suite, and you want to create a more focused subset of tests within another suite. The **Define** > **Grid** view provides support for both editing test cases and copying them to different test suites. For more information, see [Create test cases, Use the Grid view to edit test cases](create-test-cases.md#use-the-grid-view-to-edit-test-cases).
 
> [!TIP]  
> Don't copy test cases when you want to test with [different configurations](test-different-configurations.md) or [different data](repeat-test-with-different-data.md). 

From the Internet Explorer, Microsoft Edge, or Chrome browsers, you can copy test cases from the **Grid** view for one test plan and test suite to another test plan and test suite. 

1. From the **Test Plans** > **Test plans** page, choose the test suite containing one or more test cases you want to copy. Within the **Define** tab, select :::image type="icon" source="../extend/media/use-a-control/grid.png" border="false"::: **Grid View**. 

2. Highlight the rows you want to copy, and then enter **CTRL+C**.

	:::image type="content" source="media/copy-clone/copy-paste-test-cases.png" alt-text="Screenshot showing Copy test cases from Grid view.":::

3. Select a different test suite from the same or different plan and paste with **CTRL+V**. If you don't select a different suite, nothing happens when you paste, because each suite can only have one reference to any test case. 

4. Choose :::image type="icon" source="media/icons/save-test-cases.png" border="false"::: **Save test cases**. 

	The new test cases save with new IDs assigned.  

	:::image type="content" source="media/copy-clone/copy-paste-test-cases-saved.png" alt-text="Screenshot showing saved test cases pasted into Grid view.":::

<a id="bulk-import-export"></a> 

::: moniker range=">= azure-devops-2020"

## Bulk import or export test cases 

From the web portal, you can perform a bulk import or export of test cases from/to a test suite. Test cases are defined in a comma-separated values (CSV) file.  
 
### Export test cases 

1. From the **Test Plans** > **Test plans** page, choose the test plan with the test suite containing the test cases you want to export. 
 
1. Optional. Choose :::image type="icon" source="media/icons/column-options.png" border="false"::: **Column options** to add fields to include in the download file. 

1. To export all test cases for the test suite, choose **Export test cases to CSV**. 

	:::image type="content" source="media/copy-clone/export-test-cases-test-suite.png" alt-text="Screenshot of Export test cases from the selected test suite.":::

	To export a subset of test cases for the test suite, select the test cases to export, choose :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More options**, and select **Export test case(s) to CSV**. 

	:::image type="content" source="media/copy-clone/export-select-test-cases-test-suite.png" alt-text="Screenshot of selected test cases, Export test cases to CSV.":::

1. The exported CSV file appears in your **Downloads** folder. 

### Import test cases 

1. From **Test Plans** > **Test plans**, choose the test plan with the test suite into which you want to import test cases. 

	:::image type="content" source="media/copy-clone/choose-import-test-cases.png" alt-text="Screenshot of Import test cases to the selected test suite.":::

2. Choose the file to import from the opened dialog, and then select **Import**.

	:::image type="content" source="media/copy-clone/import-test-cases-dialog.png" alt-text="Screenshot showing Import Test Cases dialog.":::

3. Select **Confirm**. If you specify test cases that are already defined in the test suite, some elements might get over written during import. 

::: moniker-end
 
<a id="import-test-cases"></a>

## Import automated test cases (TCM) 

To import automated test cases to a test suite, use `tcm testcase /import`. You must specify a .dll file for the test assembly that contains your tests. 

```tcm 
tcm testcase /import /collection:teamprojectcollectionurl /teamproject:project
             /storage:path
             [/maxpriority:priority]
             [/minpriority:priority]
             [/category:filter]
             [/syncsuite:id [/include]]
             [/login:username,[password]]
```

| Parameter | Description |  
|----------|------------|  
|**/storage**:`path`|Specifies the path and name of the test assembly that contains your automated tests that you want to import.| 
|**/maxpriority**:`priority`|Optional. Specifies which tests to import based on the maximum priority of the test method. For example, if the parameter is `/maxpriority:1`, only tests with a priority attribute for the test method less than or equal to 1 are imported as test cases from the assembly.| 
|**/minpriority**:`priority`|Optional. Specifies which tests to import based on the minimum priority of the test method. For example, if the parameter is `/minpriority:2`, only tests with a priority attribute for the test method equal or greater than 2 are imported as test cases from the assembly.| 
|**/category**:`filter`|Optional. Specifies which tests to import based on the category of each test method in the test assembly. You can use this parameter together with `/syncsuite` to import tests with a certain category into a specific test suite.<br/> For more information about test categories, see [Run unit tests with Test Explorer](/visualstudio/test/run-unit-tests-with-test-explorer).| 
|**/syncsuite**:`id`|Optional. Specifies the suite ID for the test suite in your test plan to which you want to add the test cases that you import. This suite can't be a dynamic suite or a query-based suite. If you specify a test suite to synchronize to update added tests, the tests that aren't imported are removed from the test suite but not from the test plan itself.  |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

[!INCLUDE [limitations-import](includes/limitations-import.md)]

::: moniker range="=azure-devops-2019"

### Microsoft Test Manager (deprecated)

- [Guidance on Microsoft Test Manager usage](/previous-versions/azure/devops/test/mtm/guidance-mtm-usage)
- [Copying and cloning test suites and test cases](/previous-versions/azure/devops/test/mtm/copying-and-cloning-test-suites-and-test-cases)
::: moniker-end 

::: moniker range=">= azure-devops-2019"

### REST APIs

You can copy and clone test plans and test suites using the following REST APIs. 
- [Test Plan Clone - Clone Test Plan](/rest/api/azure/devops/testplan/test-plan-clone/clone-test-plan)
- [Test Suite Clone - Clone Test Suite](/rest/api/azure/devops/testplan/test-suite-clone/clone-test-suite)
::: moniker-end

##  Next steps

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)

## Related articles

- [Create test plans and test suites](create-a-test-plan.md)
- [Create test cases](create-test-cases.md)
- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Repeat a test with different data](repeat-test-with-different-data.md)
- [Test objects and terms](test-objects-overview.md) 
- [Create a query based on build and test integration fields](../boards/queries/build-test-integration.md) 
- [Customize and manage the test experience](/previous-versions/azure/devops/reference/witadmin/tcm-customize-manage-test-experience) 
