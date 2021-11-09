---
title: Copy or clone test plans, test suites, test cases, or other test items
titleSuffix: Azure Test Plans  
description: Learn how to copy or clone test plans, test suites, test cases in Azure Test Plans.  
ms.technology: devops-test
ms.author: kaelli
author: KathrynEE 
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 11/04/2021
---


# Copy or clone test plans, test suites, test cases, and other test items 

[!INCLUDE [version-header](includes/version-header.md)] 

You can copy various test items&mdash;such as, test plans, test suites, and test cases&mdash; using features supported for all work items or using specific features supported by Azure Test Plans. Copying existing test objects supports the following scenarios:

Problems trying to solve: 
- Copy/clone a test plan within a project
- Clone test plans while working across sprints or releases
- Share test objects across projects
- Move test objects from one project to another, possibly to support consolidating projects into a single project
- [REST API](/rest/api/azure/devops/test/test-plans/list)


> [!TIP] 
> Don't copy test cases when what you really want to do is test with [different configurations](test-different-configurations.md) or [different data](repeat-test-with-different-data.md). 


You can use the following methods to copy or clone test objects: 


Copy test plans
Export test cases to CSV 
Export (Test Suite) 

- **Copy test plans**: Supports copy or clone of a Test Plan within a project
- **Import test suites**: Reuse test suites which are created already and import them into the current test suite/test plan using Import Test cases
- **Copy/clone test cases**: Copy or clone a test case across test suites, test plans, or projects

- **Import/Export test plans from/to CSV files**: Export existing test cases to an Excel CSV file, make changes to the CSV file, and then import the file. There are many other use cases of this functionality. New test plans page – Azure Test Plans

[test objects](test-objects-overview.md) 
 

|Test object | Copy/Clone work item | 

- **View linked items**: View the bugs, test suites, or requirements linked to a test case

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

[!INCLUDE [prerequisites-define](includes/prerequisites-tcm.md)] 

[!INCLUDE [note-new-ui](includes/note-new-ui.md)] 


## Copy/clone test plans  

We recommend creating a new Test Plan per sprint/release. When doing so, generally you can copy the Test Plan for the prior cycle and with few changes the copied test plan is ready for the new cycle. 

# [Browser](#tab/browser)


::: moniker range=">= azure-devops-2020"

1. Open **Test Plans>Test plans**, and choose the test plan you want to copy from the **Mine** or **All** page.  Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions**, and choose the **Copy test plan** menu option. This option lets you copy or clone test plans within a project. 

	:::image type="content" source="media/copy-clone/copy-test-plan-menu-selection.png" alt-text="Test Plan More Actions menu, copy test plan option.":::

2. Specify the name of the new test plan, and select an **Area Path** and **Iteration Path** for the plan.  

	:::image type="content" source="media/copy-clone/copy-test-plan-dialog.png" alt-text="Copy test plan dialog":::

	Choose the radio-button to either **Reference** existing test cases or to **Duplicate** referenced test cases by cloning them. If you duplicate existing test cases, the copied test cases will be assigned the **Area Path** and **Iteration Path** specified for the copy test plan. 

	To learn more about area and iteration paths, see [About area and iteration (sprint) paths](..//organizations/settings/about-areas-iterations.md).

3. The page refreshes to display the newly copied test plan. 

	:::image type="content" source="media/copy-clone/copied-test-plan.png" alt-text="Copied test plan, browser view":::

<!-- Document labeling that occurs, pick up of work item IDs --> 

::: moniker-end

::: moniker range="< azure-devops-2020"

> [!NOTE] 
> This feature isn't supported through the web portal for Azure DevOps Server 2019 and earlier versions. The feature to copy test plans requires Azure DevOps Server 2020 or later version. 

::: moniker-end

# [TCM CLI](#tab/tcm-cli)

You can use the TCM command-line tool to clone a test plan to the same or different project, and to track the status of the clone operation.

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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
|**/teamproject**:`project`|Required. The name of the team project that contains the test plan that you want to import your automated tests into.|  
|**/storage**: path|Specifies the path and name of the test assembly that contains your automated tests that you want to import.|


**Example**

To be completed. 

```tcm 
tcm plans /clone
          /status:cloneoperationid
          /collection:teamprojectcollectionurl /teamproject:project
          [/login:username,[password]]
```


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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
|**/teamproject**:`project`|Required. The name of the team project where you executed the clone operation. | 
|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, or you're using basic authentication, or you're not connected to a domain.|



**Example**

To be completed. 

*** 

## Copy/clone test suites 

You can use the xxx or TCM to clone a test suite. Note the following: 

- When you clone a test suite, the new suite will contain the copies of all test cases in the source suite. However, it will not retain any historical data like the previous test runs, related bugs, old results.
- Shared steps are also cloned and created in the destination project.
- You can't clone the test cases from and to the same test plan, even into a different suite. To accomplish this scenario, you must first move the test cases to a different, temporary test plan. Then, use the temporary test plan as the source plan and clone the test cases back to the source test plan by putting the ID into the destination test plan place. Shared steps present in the test cases will also be duplicated in this process. 
 
In order to use the same test cases in different suites and plans, copy and paste test cases using the Grid view. (XLink to be provided) 

# [Browser](#tab/browser)

::: moniker range=">= azure-devops-2020"

::: moniker-end

::: moniker range="< azure-devops-2020"

> [!NOTE] 
> This feature isn't supported through the web portal for Azure DevOps Server 2019 and earlier versions. The feature to copy test plans requires Azure DevOps Server 2020 or later version. 

::: moniker-end

# [TCM CLI](#tab/tcm-cli)


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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
|**/teamproject**:`project`|Required. The name of the team project that contains the test plan that you want to import your automated tests into.| 
|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, or you're using basic authentication, or you're not connected to a domain.|



**Example**

To be done. 

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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
|**/teamproject**:`project`|Required. The name of the team project that contains the test plan that you want to import your automated tests into.| 
|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, or you're using basic authentication, or you're not connected to a domain.|


*** 


## Copy/clone test cases 


# [Browser](#tab/browser)


::: moniker range=">= azure-devops-2020"

You can copy test cases from within a project or another project in the organization or collection to a designated test plan and test suite. You have the option to copy all links and attachments at the same time. 

1. Open **Test Plans>Test plans**, choose the Test Plan that contains the test case(s) you want to copy from the **Mine** or **All** page.  Next, choose the Test Suite that contains the test case(s) you want to copy. From the **Define** page, select the check box for all test cases you want to copy. 
2.  Choose  :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions**, and choose the **Copy test case** menu option.   

	:::image type="content" source="media/copy-clone/copy-test-cases-menu-selection.png.png" alt-text="Test Cases More Actions menu, copy test cases option.":::

2. From the **Copy test case(s)** dialog, choose the Project if copying test cases from a different project. Next, select the test plan and test suite to copy the test cases to.  

	:::image type="content" source="media/copy-clone/copy-test-cases-dialog.png" alt-text="Copy test cases dialog":::

	Optionally select the check boxes for **Include existing links** and **Include existing attachments**. When done, choose **Create**.

	Depending on the number and complexity of the test cases selected, the copy operation will be performed in the backgroun. Once completed, you'll receive a message that the operation has completed and a link to the test suite where the test cases have been copied to.   

<!-- Document labeling that occurs, pick up of work item IDs --> 

::: moniker-end

::: moniker range="< azure-devops-2020"

From the Internet Explorer, Edge, or Chrome browsers, you can copy test cases from the Grid view for one test plan and test suite to another test plan and test suite. 

::: moniker-end

# [TCM CLI](#tab/tcm-cli)

To  

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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
|**/teamproject**:`project`|Required. The name of the team project that contains the test plan that you want to import your automated tests into.|
|**/storage**:`path|Specifies the path and name of the test assembly that contains your automated tests that you want to import.|
|**/maxpriority**:`priority`|Optional. Specifies which tests to import based on the maximum priority of the test method. For example, if the parameter is `/maxpriority:1`, only tests with a priority attribute for the test method less than or equal to 1 are imported as test cases from the assembly.|
|**/minpriority**:`priority`|Optional. Specifies which tests to import based on the minimum priority of the test method. For example, if the parameter is `/minpriority:2`, only tests with a priority attribute for the test method equal or greater than 2 are imported as test cases from the assembly.|
|**/category**:`filter`|Optional. Specifies which tests to import based on the category of each test method in the test assembly. You can use this parameter together with `/syncsuite` to import tests with a certain category into a specific test suite.<br/>
For more information about test categories see Defining Test Categories to Group Your Tests.|
|**/syncsuite**:`id`|Optional. Specifies the suite ID for the test suite in your test plan to which you want to add the test cases that you import. This suite cannot be a dynamic suite or a query-based suite. If you specify a test suite to synchronize to update tests that have already been added, the tests that are not imported are removed from the test suite but not from the test plan itself.<br/><br/>To determine the suite id for the test suite that you want to use, you can use the following command to list the test suites in your team project:`tcm suites /list`. |
|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, or you're using basic authentication, or you're not connected to a domain.|


**Example**

To be completed. 

*** 

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
- [FAQs for manual testing](reference-qa.md#testcases)


