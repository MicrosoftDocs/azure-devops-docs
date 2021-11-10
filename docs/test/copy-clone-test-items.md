---
title: Copy or clone test plans, test suites, test cases, or other test items
titleSuffix: Azure Test Plans  
description: Learn how to copy or clone test plans, test suites, test cases in Azure Test Plans.  
ms.technology: devops-test
ms.author: kaelli
author: KathrynEE 
ms.topic: tutorial
monikerRange: '>= tfs-2015'
ms.date: 11/04/2021
---


# Copy or clone test plans, test suites, and test cases 

[!INCLUDE [version-header](includes/version-header.md)] 

*You can copy various test items&mdash;such as, test plans, test suites, and test cases&mdash; using features supported for all work items or using specific features supported by Azure Test Plans.*

In general, you should create a test plan for every major project milestone. Each test plan is comprised of one or more test suites, which are collections of test cases and, optionally, other test suites. Test cases are designed to validate a work item, such as a feature implementation or bug fix. Each test case is designed to confirm a specific behavior. Test cases may belong to one or more test suites, however test suites can belong to one and only one test plan.  

Copying, cloning, or importing existing test objects supports the following scenarios: 
- Define a test plan for a new sprint or release based on an existing test plan
- Copy a test plan from one project to another project  
- Share test objects across projects
- Move test objects from one project to another, possibly to support consolidating projects into a single project
- Copy test cases 

For an overview of test objects and terminology, see [Test objects and terms](test-objects-overview.md).  


## Clients/tools that support copy, clone, or import  

Depending on the Azure DevOps version you use, you can use the clients or tools listed in the following table to copy/clone or import test plans, test suites, or test cases.  

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
      ✔️ ([Copy](#copy-test-plans-portal))
   :::column-end:::
   :::column span="1":::
      ✔️ ([Import](#import-test-suites-portal))
   :::column-end:::
   :::column span="1":::
       ✔️ ([Bulk export/import](#bulk-import-export))
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
      ✔️ ([Copy and paste](#copy-paste))
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
      ✔️ ([Copy and paste](#copy-paste))
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="1":::
      **Work item form**  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️ ([**Copy*](../boards/backlogs/copy-clone-work-items.md))
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="<= azure-devops-2019"
:::row:::
   :::column span="1":::
      **Microsoft Test Manager**<sup>1</sup>  
      (deprecated) 
   :::column-end:::
   :::column span="1":::
      ✔️ (Clone plan)
   :::column-end:::
   :::column span="1":::
      ✔️ (Copy a test suite)
   :::column-end:::
   :::column span="1":::
      ✔️ (Create copy)
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="1":::
      **TCM CLI** <sup>2</sup>   
   :::column-end:::
   :::column span="1":::
      ✔️ ([Clone](#clone-test-plan))
   :::column-end:::
   :::column span="1":::
      ✔️ ([Clone](#clone-test-suite))
   :::column-end:::
   :::column span="1":::
      ✔️ ([Import](#import-test-cases))
   :::column-end:::
:::row-end:::
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      **REST API** <sup>3</sup>  
   :::column-end:::
   :::column span="1":::
      ✔️ ([Clone](/rest/api/azure/devops/testplan/test-plan-clone/clone-test-plan)) 
   :::column-end:::
   :::column span="1":::
      ✔️ ([Clone](/rest/api/azure/devops/testplan/test-suite-clone/clone-test-suite))
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
::: moniker-end

> [!NOTE]   
> ::: moniker range=">= azure-devops-2020"
> 1. The web portal for Azure Test Plans with significantly updated with the release of Azure DevOps Server 2020. Many new features were added to support copy, clone, import, and export. For an overview, see [Navigate Test Plans](navigate-test-plans.md).
> 1. The Test Case Management (TCM) command-line tool is installed when you install Visual Studio 2017 or earlier versions. Examples provided in this article reflect the options available with the Visual Studio 2017 version. Earlier versions may support fewer options. For details, see [Work with the TCM command-line tool](#work-tcm-cli). 
> 1. REST API commands to support cloning of test plans and test suites was added with version 5.0, corresponding with Azure DevOps 2019. 
> ::: moniker-end
> ::: moniker range="< azure-devops-2020"
> 1. [Microsoft Test Manager (MTM)](/previous-versions/azure/devops/test/mtm/guidance-mtm-usage) was deprecated for use with Azure DevOps Services in January 2020, and isn't supported for Azure DevOps Server 2020 and later versions. The current version of Azure Test Plans supports all features that MTM supported and more. 
> 1. The Test Case Management (TCM) command-line tool is installed when you install Visual Studio 2017 or earlier versions. Examples provided in this article reflect the options available with the Visual Studio 2017 version. Earlier versions may support fewer options. For details, see [Work with the TCM command-line tool](#work-tcm-cli). 
> ::: moniker-end 
 
 
<a name="what-gets-cloned" />

## Understand what gets cloned  
  
When you clone a test suite, the following objects are copied from the source test plan to the destination test plan:  
  
|Test plan object|Copied|Notes|  
|----------------------|------------|-----------|  
|Test case|✔️|Each new test case retains its shared steps.<br /><br /> A link is made between the source and new test cases.<br /><br /> The new test cases do not have test runs, bugs, test results, and build information.|  
|Shared steps referenced by cloned test cases|✔️||  
|Test suite|✔️|The following data is retained:<br /><br /> -   Names and hierarchical structure of the test suites<br />-   Order of the test cases<br />-   Assigned testers<br />-   Configurations|  
|Action Recordings linked from a cloned test case|✔️|  
|Links and Attachments|✔️||  
|Test configuration|✔️|The test configuration is reapplied in the destination test plan.|  
|Test settings|❌ |The test setting for the destination test plan is applied.|  
|Test results|❌||  
|Test runs and exploratory test sessions|❌|Because test runs are applicable only to the source test plan, they are not copied.|  
|Requirements-based suites|❌<br /><br /> Without `/clonerequirements`|Requirements-based test suites are converted to static test suites in the destination test plan. Cloned test cases will be referenced under this static test suite.<br /><br /> Cloned test cases do not include links to their original requirements work items.|  
|Requirements-based suites|❌<br /><br /> with `/clonerequirements`|Copied and linked to a new copy of the requirement work item.|  
|Requirements work items (product backlog items or user stories)|with `/clonerequirements`|Requirements work items that are associated with a cloned requirements-based suite are cloned.|  
|Bug work items<br /><br /> with `/clonerequirements`|with `/clonerequirements`|Cloned in a project that uses the Scrum process template, or any project in which the Bug work item type is in the Requirements work item category.<br /><br /> In other projects, bugs are not cloned.| 


<!--- Information I learned or tips I should provide: 

- The Export function is primarily an email/print summary feature; not used to export test objects and import them elsewhere. 
- While Test plans, test suites, and test cases are related to each other - you can't view the relationship through a Query. Link types aren't used to link test plans, test suites, and test cases. Only shared steps and shared parameters are linked to the test cases. Also, test cases are linked to the user stories/work items that they test. 
- Advantages of using the supported tools for copy/cloning versus the work item form Create a copy tool 

-->
 

Copy test plans
Export test cases to CSV 
Export (Test Suite) 

- **Copy test plans**: Supports copy or clone of a Test Plan within a project
- **Import test suites**: Reuse test suites which are created already and import them into the current test suite/test plan using Import Test cases
- **Copy/clone test cases**: Copy or clone a test case across test suites, test plans, or projects

- **Import/Export test plans from/to CSV files**: Export existing test cases to an Excel CSV file, make changes to the CSV file, and then import the file. There are many other use cases of this functionality. New test plans page – Azure Test Plans


 
- **View linked items**: View the bugs, test suites, or requirements linked to a test case

copy-clone-test-items


[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

[!INCLUDE [prerequisites-define](includes/prerequisites-tcm.md)] 


[!INCLUDE [note-new-ui](includes/note-new-ui.md)] 

## List test plans or test suites 

You often need to know the ID assigned to a test plan or test suite to support copy/clone or import operations. 

# [Browser](#tab/browser)

You can generate a list of test plans or test suites from the **Boards>Queries** page. For example, by setting the **Work Item Type=Test Plan**, you can list all test plans defined for the team project. If you choose the **Query across all projects** checkbox, the query will list all test plans defined for all projects. To learn more about defining queries, see [Define a work item query](../boards/queries/using-queries.md). 

:::image type="content" source="media/copy-clone/query-test-plans.png" alt-text="Screenshot of Query Editor, Query test plans.":::

# [TCM CLI](#tab/tcm-cli)


<a id="list-test-plans" /> 

### List test plans  

Use `tcm plans /list` to determine the **ID** for a test plan.  The **ID** corresponds to the work item ID defined when the test plan was created. 


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
--------- ----------------------------------------------------------------
66        Sprint 1
72        All sprints
77        Sprint 2
86        Hello World Test
```


<a id="list-test-suites" /> 

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

The following command lists the test suites defined for the *Fabrikam Fiber* project hosted in the *fabrikamprime* organization. The **ID** corresponds to the work item ID defined for the test suite. Under the **Name** column, the first entry indicates the test plan that the test suite is defined under. Following the -> (arrow) is the **Title** of the test suite or the **Title** of a parent test suite. For example, test suite *75*, *Sub Suite 01*, is a sub-test suite of *Suite 01* defined for the *All sprints* test plan. 

```tcm 
tcm suites /list /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber" 

Id        Name
--------- ----------------------------------------------------------------
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

## Copy/clone test plans  

We recommend creating a new test plan per sprint or release. When doing so, generally you can clone the Test Plan for the prior cycle and with few changes the copied test plan is ready for the new cycle. 

Cloning is useful when you want to branch your application into two versions. After cloning, tests for the two versions can be changed without affecting each other.

:::image type="content" source="media/copy-clone/clone-test-plan-conceptual.png" alt-text="Conceptual image, clone test plan.":::


# [Browser](#tab/browser)

<a id="copy-test-plans-portal" />


::: moniker range=">= azure-devops-2020"

1. Open **Test Plans>Test plans**, and choose the test plan you want to copy from the **Mine** or **All** page.  Select :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More actions**, and choose the **Copy test plan** menu option. This option lets you copy or clone test plans within a project. 

	:::image type="content" source="media/copy-clone/copy-test-plan-menu-selection.png" alt-text="Test Plan More Actions menu, copy test plan option.":::

2. Specify the name of the new test plan, and select an **Area Path** and **Iteration Path** for the plan.  

	:::image type="content" source="media/copy-clone/copy-test-plan-dialog.png" alt-text="Copy test plan dialog":::

	Choose one or the other radio-buttons based on the following guidance:  
	- **Reference existing test cases**: Choose this option when you plan to merge the two branches eventually. In this case, you'll want to keep the same requirements for functionality that has already been implemented and tested.  
	- **Duplicate existing test cases**: Choose this option when you want to make new user stories or requirements that you will maintain separately. If you plan to diverge into two similar but separate applications, you might want to change the user stories of one without changing the stories of the other. Choosing this option creates an independent set of requirements for the new test cases.  

	If you duplicate existing test cases, the copied test cases will be assigned the **Area Path** and **Iteration Path** specified for the cloned test plan. 

	To learn more about area and iteration paths, see [About area and iteration (sprint) paths](..//organizations/settings/about-areas-iterations.md).

3. The page refreshes to display the newly copied test plan. 

	:::image type="content" source="media/copy-clone/copied-test-plan.png" alt-text="Copied test plan, browser view":::

4. Update any [query-based suites](create-a-test-plan.md) that you copied to use the new area and iteration paths.  

5. Specify a build in the destination test plan if you have cloned automated test cases.



<!-- Document labeling that occurs, pick up of work item IDs --> 

::: moniker-end

::: moniker range="< azure-devops-2020"

> [!NOTE] 
> This feature isn't supported through the web portal for Azure DevOps Server 2019 and earlier versions. The feature to copy test plans requires Azure DevOps Server 2020 or later version. 

::: moniker-end

# [TCM CLI](#tab/tcm-cli)

You can use the TCM command-line tool to clone a test plan to the same or different project, and to track the status of the clone operation.

[List test plans](#list-test-plans) |[Clone a test plan](#clone-test-plan) | [Track test plan clone status](#track-test-plan-clone-status) 


<a id="clone-test-plan" /> 

### Clone a test plan 

Use `tcm plans /clone` to initiate a cloning operation of all test cases from one test suite to a different destination suite within the same project by default. The destination suite must be defined and exist in a different plan. All contained suites and test cases are cloned. The command returns an operation id that you can use to track the status and completion of the clone operation.  

The following options provide support for optional clone operations:  

- `/destinationteamproject`: Clone a suite to a different project. 
- `/destinationworkitemtype`: Specify the work item type to use when cloning the test cases. Specify this option when cloning test cases to a custom work item type. 
- `/overridefield`: Override the values for select fields, such as the  **Area Path** and **Iteration Path** fields, which is required when cloning to a different project.  Or override the value of other fields to distinguish cloned test cases from the original. 
- `/clonerequirements`: Specify this switch to clone a requirement-based suite to a destination requirement-based suite.  
 
```tcm 
tcm plans /clone /sourceplanid:id /destinationplanname:name
          [/overridefield:name=value [/overridefield:name=value ...]]
          [/sourcesuiteids:suiteid1,[suiteid2,...]]
          /collection:teamprojectcollectionurl /teamproject:project
          [/login:username,[password]]
          [/clonerequirements]
          [/clonechildren]
```
The `/clone /sourceplanid /destinationplanname` creates a new plan. If you specify `/sourcesuiteids`, thenthe command initiates a clone operation to clone the test cases to the new plan. The command returns an operation id that can be used to track status and completion of the clone operation.

| Parameter | Description |  
|----------|------------| 
|**/sourceplanid**:`id` | Required. Specifies the ID of the plan to be copied, and the ID of the suite into which the new copy will be added. If you want to copy a whole test plan, use the ID of the suite at the root of the test plan.The ID of a suite is displayed in the details pane when you select it in the test plan. You can also get a list of suites by using `tcm suites /list`. |
|**/destinationplanname**:`name`|Specifies the name of the plan into which the cloned test plan will be copied.  |
|**/overridefield**:`name=value`<br/>**/overridefield**:`name=value`| Optional. Specify to change the value of a field in each cloned work item. Specify multiple occurrences of this parameter to change as many fields as you want. This option is required when you clone a test suite to a different project. |
|**/sourcesuiteids**:`suiteid1,[suiteid2,...`|Optional. Specifies|
**|/clonerequirements |Optional. Specifies|**
|**/clonechildren** |Optional. Specify to clone all child suites of the suites provided.|
|**/clonerequirements** | Optional. Specify this switch to clone a requirement-based suite to a destination requirement-based suite. By default, a requirement-based test suite is cloned to a destination static test suite.  |
|**/storage**:`path`|Specifies the path and name of the test assembly that contains your automated tests that you want to import.|

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

**Example**


```tcm 
tcm plans /list /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber"


/clone /sourceplanid:id /destinationplanname:name
          [/overridefield:name=value [/overridefield:name=value ...]]
          [/sourcesuiteids:suiteid1,[suiteid2,...]]
          /collection:teamprojectcollectionurl /teamproject:project
          [/login:username,[password]]
          [/clonerequirements]
          [/clonechildren]


```


```tcm 
tcm plans /clone
          /status:cloneoperationid
          /collection:teamprojectcollectionurl /teamproject:project
          [/login:username,[password]]
```

<a id="track-test-plan-clone-status" /> 

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
|**/status**:`cloneoperationid`|Required. Specifies the ID of the clone operation returned when `tcm plans /clone` executes.  

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

**Example**

To be completed. 

*** 

## Import or copy/clone test suites 

<a id="import-test-suites-portal" />

When you're creating the test plan for a new sprint, you often want to repeat some of the tests from the previous sprints, to make sure that the functionality you already implemented is still working.

:::image type="content" source="media/copy-clone/copy-test-suite-conceptual.png" alt-text="Conceptual image, copy test suites.":::
 
Note the following: 

- When you import (Web) or clone (TCM) a test suite to a new project, the new suite will contain copies of all test cases in the source suite. However, it will not retain any historical data like the previous test runs, related bugs, old results.
- Shared steps referenced by the test cases are also cloned and created in the destination project.
- You can't clone  test cases from and to the same test plan, even into a different suite. To accomplish this scenario, you must first move the test cases to a different, temporary test plan. Then, use the temporary test plan as the source plan and clone the test cases back to the source test plan by putting the ID into the destination test plan place. Shared steps present in the test cases will also be duplicated in this process. 


::: moniker range=">= azure-devops-2020"

You can use the user interface to import a test suite from one test plan, within the same or different project, to another test plan in the current project. This action essentially copies or clones the test suite, creating a new test suite and duplicating any sub-test suites. The test cases referenced by the test suites are not duplicated, but referenced by the cloned test suites. 
::: moniker-end

::: moniker range=">= tfs-2017"
You can use [MTM](/previous-versions/azure/devops/test/mtm/copying-and-cloning-test-suites-and-test-cases) or TCM to clone a test suite, specifying the target test plan which can be within the same or another project. You can also specify a custom test suite work item type. 
 
::: moniker-end



You can use [`tcm suites /list`](#list-test-suites) to list all test suites defined for a project. 
  
In order to use the same test cases in different suites and plans, copy and paste test cases using the **Grid** view. To learn more, see  (XLink to be provided) 

# [Browser](#tab/browser)

::: moniker range=">= azure-devops-2020"

1. Open **Test Plans>Test plans**, and choose the test plan where you want to import a test suite.  the test suite ... you want to copy from the **Mine** or **All** page.  Select :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More actions**, and choose the **Copy test plan** menu option. This option lets you copy or clone test plans within a project. 

	:::image type="content" source="media/copy-clone/import-test-suites.png" alt-text="Test Suite More Actions menu, Import test suites option.":::

2. In the dialog that opens, choose the project if the test plan resides in a different project. Otherwise, select the test plan and test suite and then choose **Create**.  You can only import one suite from a test plan at a time. 

	:::image type="content" source="media/copy-clone/import-suites-from-test-plan-dialog.png" alt-text="Import suites from a Test Plan dialog":::

3. The following message displays: 

	:::image type="content" source="media/copy-clone/import-suites-message-1.png" alt-text="Import suites initiated message.":::

4. When the import operation completes, you'll see the following message. Choose **Refresh** to refresh your browser. 

	:::image type="content" source="media/copy-clone/import-suites-message-2.png" alt-text="Import suites completed message .":::

	The newly added test suite then displays. 

	:::image type="content" source="media/copy-clone/imported-test-suite-displayed.png" alt-text="Imported test suite displayed.":::
 

::: moniker-end

::: moniker range="< azure-devops-2020"

> [!NOTE] 
> This feature isn't supported through the web portal for Azure DevOps Server 2019 and earlier versions. The feature to import test suites requires Azure DevOps Server 2020 or later version. 

::: moniker-end

# [TCM CLI](#tab/tcm-cli)

You can use the TCM command-line tool to clone a test plan to the same or different project, and to track the status of the clone operation.

[List test suites](#list-test-suites) | [Clone a test suite](#clone-test-suite) | [Track test suite clone status](#track-test-suite-clone-status) 


<a id="clone-test-suite" /> 

### Clone a test suite 

Use `tcm suites /clone` to initiate a cloning operation of all test cases from one test suite to a different destination suite within the same project by default. The destination suite must be defined and exist in a different plan. All contained suites and test cases are cloned. The command returns an operation id that you can use to track the status and completion of the clone operation.  

The following options provide support for optional clone operations:  

- `/destinationteamproject`: Clone a suite to a different project. 
- `/destinationworkitemtype`: Specify the work item type to use when cloning the test cases. Specify this option when cloning test cases to a custom work item type. 
- `/overridefield`: Override the values for select fields, such as the  **Area Path** and **Iteration Path** fields, which is required when cloning to a different project.  Or override the value of other fields to distinguish cloned test cases from the original. 
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
|**/suiteid**:`id`|Specifies the ID of the suite to be copied, and the ID of the suite into which the new copy will be added. If you want to copy a whole test plan, use the ID of the suite at the root of the test plan.The ID of a suite is displayed in the details pane when you select it in the test plan. You can also get a list of suites by using `tcm suites /list`. |
|**/overridefield**:`name=value`<br/>**/overridefield**:`name=value`| Optional. Specify to change the value of a field in each cloned work item. Specify multiple occurrences of this parameter to change as many fields as you want. This option is required when you clone a test suite to a different project. |
|**/destinationsuiteid**:`id`|Specifies the ID of the suite into which the new copy will be added. If you want to copy a whole test plan, use the ID of the suite at the root of the test plan.The ID of a suite is displayed in the details pane when you select it in the test plan.You can also get a list of suites by using tcm suites /list.|
|**/destinationteamproject**:`projectname`|Optional. Specify when you want to clone the test suite to a different project but in the same organization or project collection. You must specify override field values for the **Area Path** and **Iteration Path** fields.|
|**/destinationworkitemtype**:`workitemtype`|Optional.|
|**/clonerequirements** | Optional. Specify this switch to clone a requirement-based suite to a destination requirement-based suite. By default, a requirement-based test suite is cloned to a destination static test suite.  |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

**Example**

The following example illustrates ... 

```tcm 
tcm suites /clone /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber" /destinationteamproject:"Fabrikam Test" /suiteid:33 /destinationsuiteid:45 /overridefield:"Iteration Path"="Fabrikam Test" /overridefield:"Area Path"="Fabrikam Test"
```
tcm suites /list /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber" 


<a id="track-test-suite-clone-status" /> 

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
|**/status**:`cloneoperationid`|Required. Specifies the ID of the clone operation returned when `tcm suites /clone` executes.  

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

*** 

<a id="copy-paste" /> 

## Copy and paste test cases 

> [!TIP] 
> Don't copy test cases when what you really want to do is test with [different configurations](test-different-configurations.md) or [different data](repeat-test-with-different-data.md). 


::: moniker range=">= azure-devops-2020"

You can copy test cases from within a project or another project in the organization or collection to a designated test plan and test suite. You have the option to copy all links and attachments at the same time. 

1. Open **Test Plans>Test plans**, choose the Test Plan that contains the test case(s) you want to copy from the **Mine** or **All** page.  Next, choose the Test Suite that contains the test case(s) you want to copy. From the **Define** page, select the check box for all test cases you want to copy. 
2.  Choose  :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More actions**, and choose the **Copy test case** menu option.   
  
	:::image type="content" source="media/copy-clone/copy-test-cases-menu-selection.png" alt-text="Test Cases More Actions menu, copy test cases option.":::

2. From the **Copy test case(s)** dialog, choose the Project if copying test cases from a different project. Next, select the test plan and test suite to copy the test cases to.  

	:::image type="content" source="media/copy-clone/copy-test-cases-dialog.png" alt-text="Copy test cases dialog":::

	Optionally select the check boxes for **Include existing links** and **Include existing attachments**. When done, choose **Create**.

	Depending on the number and complexity of the test cases selected, the copy operation will be performed in the backgroun. Once completed, you'll receive a message that the operation has completed and a link to the test suite where the test cases have been copied to.   

<!-- Document labeling that occurs, pick up of work item IDs --> 

::: moniker-end

::: moniker range="< azure-devops-2020"

From the Internet Explorer, Edge, or Chrome browsers, you can copy test cases from the **Grid** view for one test plan and test suite to another test plan and test suite. 

1. From the Test Plans>Test plans?Copy and paste test cases in order to use the same tests in different suites and plans. For example, you could have a quick suite that uses a subset of the tests in a more exhaustive suite.

1. Copy a test case with CTRL+C.

1. Select a different suite or plan and paste with CTRL+V.

1. (If you don't select a different suite, nothing happens when you paste, because each suite can only have one reference to any test case.)

1. If you edit the test case in one suite, you'll see the changes when you look at the test case in the other suite.

1. If you delete a test case from a suite, you're only deleting it from that suite. If you delete it from every suite, the test case is still in Team Foundation, and you can find it with a work item query.


::: moniker-end
 

## Bulk import or export test cases 

You can perform a bulk export of test cases from a test suite or bulk import of test cases to a test suite.  

# [Browser](#tab/browser)

::: moniker range=">= azure-devops-2020"

### Export test cases 

1. From **Test Plans>Test plans** choose the test plan with the test suite containing the test cases you want to export. 
 
1. Optional. Choose :::image type="icon" source="media/icons/column-options.png" border="false"::: **Column options** to add fields to include in the download file. 

1. To export all test cases for the test suite, choose **Export test cases to CSV**. 

	:::image type="content" source="media/copy-clone/export-test-cases-test-suite.png" alt-text="Screenshot of Export test cases from the selected test suite.":::

	To export a subset of test cases for the test suite, select the test cases to export, choose :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More options**, and select **Export test case(s) to CSV**. 

	:::image type="content" source="media/copy-clone/export-select-test-cases-test-suite.png" alt-text="Screenshot of selected test cases, Export test cases to CSV.":::

1. The exported CSV file appears in your **Downloads** folder. 

### Import test cases 

1. From **Test Plans>Test plans** choose the test plan with the test suite into which you want to import test cases. 

	:::image type="content" source="media/copy-clone/choose-import-test-cases.png" alt-text="Screenshot of Import test cases to the selected test suite.":::

1. Choose the file to import from the dialog that opens and choose **Import**.

	:::image type="content" source="media/copy-clone/import-test-cases-dialog.png" alt-text="Import Test Cases dialog.":::

1. Choose **Confirm** in the Confirm import dialog that displays. If you specify test cases that are already defined in the test suite, some elements may get over written during import. 


::: moniker-end

::: moniker range="< azure-devops-2020"

> [!NOTE] 
> This feature isn't supported through the web portal for Azure DevOps Server 2019 and earlier versions. The feature to import test suites requires Azure DevOps Server 2020 or later version. 

::: moniker-end

# [TCM CLI](#tab/tcm-cli)

<a id="import-test-cases" />

To import test cases to a test suite, use `tcm testcase /import`.  

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
|**/category**:`filter`|Optional. Specifies which tests to import based on the category of each test method in the test assembly. You can use this parameter together with `/syncsuite` to import tests with a certain category into a specific test suite.<br/> For more information about test categories see [Run unit tests with Test Explorer](/visualstudio/test/run-unit-tests-with-test-explorer).| 
|**/syncsuite**:`id`|Optional. Specifies the suite ID for the test suite in your test plan to which you want to add the test cases that you import. This suite cannot be a dynamic suite or a query-based suite. If you specify a test suite to synchronize to update tests that have already been added, the tests that aren't imported are removed from the test suite but not from the test plan itself.  |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)] 

**Example**

To be completed. 

*** 


::: moniker-end

## REST APIs

You can copy and clone test plans and test suites using the following REST APIs. 
- [Test Plan Clone - Clone Test Plan](/rest/api/azure/devops/testplan/test-plan-clone/clone-test-plan)
- [Test Suite Clone - Clone Test Suite](/rest/api/azure/devops/testplan/test-suite-clone/clone-test-suite)

##  Next step

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)


## Related articles

- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Repeat a test with different data](repeat-test-with-different-data.md)
- [Test objects and terms](test-objects-overview.md) 
- [Create a query based on build and test integration fields](../boards/queries/build-test-integration.md)
- [FAQs for manual testing](reference-qa.md#testcases)

### Microsoft Test Manager (deprecated)
- [Guidance on Microsoft Test Manager usage](/previous-versions/azure/devops/test/mtm/guidance-mtm-usage)
- [Copying and cloning test suites and test cases](/previous-versions/azure/devops/test/mtm/copying-and-cloning-test-suites-and-test-cases)

