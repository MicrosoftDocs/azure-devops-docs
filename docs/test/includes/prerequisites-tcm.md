---
ms.technology:  devops-test
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 07/13/2021
---


## Work with the TCM command line tool 

To exercise the TCM command line tool, you must have the following in place: 

- Installed Visual Studio 2017 Professional. You access TCM from the command prompt and the following directories: 
	`%programfiles(x86)%\Microsoft Visual Studio\2017\Professional\Common7\IDE`  
	`%programfiles(x86)%\Microsoft Visual Studio\2017\Enterprise\Common7\IDE` 

- To copy/clone, import, or export test objects, you must be granted one of the following access levels: **Advanced**, **Basic + Test Plans**, or **Visual Studio subscription**  which supports access to Test Plans. 
- To copy or clone test plans, test suites, or test cases or import test objects, you must have [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access level or have one of the following **Visual Studio subscriptions**:

	- [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/)
	- [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)
	- [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/)

- To copy/clone, import, or export test objects, you must be a valid member of the project(s) you will access. 
- To add or edit test-related artifacts, you must have the following permissions: 
	-  To add or modify test plans, test suites, test cases, or other test-based work item types, you must have **Edit work items in this node** permission set to **Allow** under the corresponding **Area Path**. 
	- To modify test plan properties such as build and test settings, you must have **Manage test plans** permission set to **Allow** under the corresponding **Area Path**.  
	- To create and delete test suites, add, and remove test cases from test suites, change test configurations associated with test suites, and modify a test suite hierarchy (move a test suite), you must have **Manage test suites** permission set to **Allow** under the corresponding **Area Path**. 

To learn more, see [Manual test access and permissions](../manual-test-permissions.md). 


