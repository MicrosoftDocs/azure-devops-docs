---
ms.technology:  devops-test
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 11/09/2021
---


## Work with the TCM command-line tool 

To exercise the TCM command-line tool, you must have the following in place: 

- Installed Visual Studio 2017 Professional. You access TCM from the command prompt and the following directories: 
	`%programfiles(x86)%\Microsoft Visual Studio\2017\Professional\Common7\IDE`  
	`%programfiles(x86)%\Microsoft Visual Studio\2017\Enterprise\Common7\IDE` 

- To add or import test objects, you must have [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access level or have one of the following **Visual Studio subscriptions**:

	- [Enterprise](https://visualstudio.microsoft.com/vs/enterprise/)
	- [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)
	- [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/)

- You must be a valid member of the project(s) you want to access and have the required permissions based on the commands you run. To learn more, see [Manual test access and permissions](../manual-test-permissions.md). 

- Define the following parameters when you run a TCM command: 

	| Parameter | Description |  
	|----------|------------|  
	|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
	|**/teamproject**:`project`|Required. The name of the team project that contains the test plan that you want to import your automated tests into.|
	|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, or you're using basic authentication, or you're not connected to a domain.|

