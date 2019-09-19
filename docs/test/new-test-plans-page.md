---
title: New test plans page   
description: New Test Plans page
ms.assetid: FFBBD2F9-C1C5-4273-916A-28834B794CC3
ms.prod: devops
ms.technology: devops-test
ms.topic: reference
ms.manager: jillfra
ms.author: harishkragarwal
author: harishkragarwal
ms.date: 07/01/2019
monikerRange: '>= azure-devops'
---
# New Test Plans page

[!INCLUDE [version-header-devops-services](_shared/version-header-devops-services.md)]

A new Test Plans Page (Test Plans*) for your planned testing needs is available for all Azure DevOps Services organizations. The new page provides you with streamlined views to help you focus on the task at hand - be it test planning, authoring or execution. It is also clutter-free and consistent with the rest of Azure DevOps offering. We hope that you find it easy and intuitive to use.

This new page is in public preview and has been made default for all Test Plans users starting about October 2019. The new page has most of the capabilities from the prior page and provides few fresh capabilities too. Additional capabilities will be added every 3 weeks. See list on what's coming [next](#journey). The prior Test Plans page can still be accessed for some more time until we ensure that the new page has all of its capabilities. We highly recommend leveraging the new page and [sharing your feedback](#feedback) with us. However, if you absolutely need to leverage the prior page then enable it using the following steps:

1. Sign-in into your Azure DevOps Services organization
2. Click on your Avatar on the top right and navigate to "Preview Features"
3. Disable the 'New Test Plans Page' feature and navigate to Test Plans > Test Plans in your project of choice.
![test plans preview](_img/new-test-plans-page/enable-preview-feature.png)

> Any action performed in either page will reflect on the other too since their backend store is the same.

## Help me understand the new page

The new Test Plans page has 5 sections:
1. **Test Plan segment**: Use this to locate, favourite, edit, copy or clone a test plan.
2. **Test Suites tree**: Use this to add, manage, export or order test suites. Leverage this to also assign configurations and perform user acceptance testing.
3. **Define tab**: Collate, add and manage test cases in a test suite of choice via this tab.
4. **Execute tab**: Assign and execute tests via this tab or locate a test result to drill into.
5. **Chart tab**: Track test execution and status via charts which can also be pinned to dashboards.

![test plans sneek peek](_img/new-test-plans-page/new-test-plans-page.png)

> The Define tab and certain operations are only available to users with 'Basic + Test Plans' access level or equivalent. Everything else should be exercisable by a user with 'Basic' access level.

Define tab lets you collate, add and manage test cases for a test suite. Whereas the execute tab is for assigning test points and executing them. **What is a test point?** Test cases by themselves are not executable. When you add a test case to a test suite then test point(s) are generated. A test point is a unique combination of test case, test suite, configuration, and tester. Example: if you have a test case as "Test login functionality" and you add 2 configurations to it as Edge and Chrome then this results in 2 test points. Now these test points can be executed. On execution, test results are generated. Through the test results view (execution history) you can see all executions of a test point. The latest execution for the test point is what you see in the execute tab. <br>
Hence, test cases are reusable entities. By including them in a test plan or suite, test points are generated. By executing test points, you determine the quality of the product or service being developed.

## New capabilities
We recommend creating a new Test Plan per sprint/release. When doing so, generally the Test Plan for the prior cycle can be copied over and with few changes the copied test plan is ready for the new cycle. To make this process easy, we have enabled a 'Copy test plan' capability on the new page. By leveraging it you can copy or clone test plans. Its backing REST API is covered [here](https://docs.microsoft.com/rest/api/azure/devops/testplan/test%20plan%20clone/clone%20test%20plan?view=azure-devops-rest-5.1) and the API lets you copy/clone a test plan across projects too.<br>
For more guidelines on Test Plans usage, refer [here](https://blogs.msdn.microsoft.com/visualstudioalmrangers/2015/07/22/test-planning-and-management-guide-updated/).

![test plans page](_img/new-test-plans-page/copy-test-plan.png)

<a name="journey"></a>
## Journey

**With the New Test Plans page, you can perform the following tasks:**

- Test Plan segment:
    - Locate & favourite
    - Edit test plan 
    - Copy or clone a test plan (**new**)
    - Settings to associate build and release pipelines
- Test suites tree:
    - Create and manage suites (static, requirement or query based)
    - Assign configurations
    - Order suites
    - User acceptance testing
- Define tab:
    - Create and add new test cases
    - Grid to add, edit and manage test cases
    - Add existing test cases
    - Manage test cases
    - Filtering
    - Order tests cases
    - See linked items: test suites and plans
    - Column options & sorting on columns	
- Execute Tab:
    - Execute test points against a web or desktop application 
    - Bulk execution or mark outcome
    - Assign test points
    - Filtering    
    - View test results
    - 'Run with options' to leverage Microsoft Test Manager for execution
    - Ability to edit test case
    - Column options & sorting on columns
- Charts
    - Existing charts capabilities

**Capabilities from the following list will be added every 3 weeks:**

- Test suites tree:
	- Import (i.e. copy) suite from another test plan
	- Show all test cases and points from child suites
	- Export
	- Drag and drop test cases across suites
- Define tab	
	- See linked items: requirements and bugs
- General:
	- Performance improvements
	- Enable [current extensibility points](https://docs.microsoft.com/azure/devops/extend/reference/targets/overview?view=azure-devops)

<a name="feedback"></a>
## Provide feedback
Reach us at devops_tools@microsoft.com to share your thoughts on the new page. In the process, share screenshots as appropriate.
