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

[!INCLUDE [note-new-ui](includes/note-new-ui.md)] 


## Copy/clone test plans 



# [Browser](#tab/browser)



# [TCM CLI](#tab/tcm-cli)


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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>
- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>
- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>
- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>
- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>
- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>
- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>
- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>
- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
|**/teamproject**:`project`|Required. The name of the team project that contains the test plan that you want to import your automated tests into.| 
|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, or you're using basic authentication, or you're not connected to a domain.|


*** 


## Copy/clone test cases 

# [Browser](#tab/browser)



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
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>
- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>
- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
|**/teamproject**:`project`|Required. The name of the team project that contains the test plan that you want to import your automated tests into.|
|**/storage**:`path|Specifies the path and name of the test assembly that contains your automated tests that you want to import.|
|**/maxpriority**:`priority`|Optional. Specifies which tests to import based on the maximum priority of the test method. For example, if the parameter is /maxpriority:1, only tests with a priority attribute for the test method less than or equal to 1 are imported as test cases from the assembly.|
|**/minpriority**:`priority`|Optional. Specifies which tests to import based on the minimum priority of the test method. For example, if the parameter is /minpriority:2, only tests with a priority attribute for the test method equal or greater than 2 are imported as test cases from the assembly.|
|**/category**:`filter`|Optional. Specifies which tests to import based on the category of each test method in the test assembly. You can use this parameter together with /syncsuite to import tests with a certain category into a specific test suite.<br/>
For more information about test categories see Defining Test Categories to Group Your Tests.|
|**/syncsuite**:`id`|Optional. Specifies the suite ID for the test suite in your test plan to which you want to add the test cases that you import. This suite cannot be a dynamic suite or a query-based suite. If you specify a test suite to synchronize to update tests that have already been added, the tests that are not imported are removed from the test suite but not from the test plan itself.<br/>
<br/>
To determine the suite id for the test suite that you want to use, you can use the following command to list the test suites in your team project:<br/>
<br/>
`tcm suites /list`<br/>
<br/>
For more information about this command, see tcm: Listing test plans, test suites, test configurations, and environments.|
|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, or you're using basic authentication, or you're not connected to a domain.|


**Example**

To be completed. 

*** 


##  Next step

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)


## Related articles

- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Repeat a test with different data](repeat-test-with-different-data.md)
- [Test objects and terms](test-objects-overview.md) 
- [FAQs for manual testing](reference-qa.md#testcases)


