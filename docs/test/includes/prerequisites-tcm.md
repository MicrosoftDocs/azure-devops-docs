---
ms.service: azure-devops-test-plans
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 11/09/2021
---

<a id="work-tcm-cli" />

## Work with the TCM command-line tool 

To exercise the TCM command-line tool, you must have the following in place: 

- Installed Visual Studio 2017 Professional or earlier version. You access TCM from the command prompt and the following directories: 
	`%programfiles(x86)%\Microsoft Visual Studio\2017\Professional\Common7\IDE`  
	`%programfiles(x86)%\Microsoft Visual Studio\2017\Enterprise\Common7\IDE` 
	`%programfiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE`

- To run a TCM command, specify the `/collection` and `/teamproject` parameters, and `/login` as needed.   

	| Parameter | Description |  
	|----------|------------|  
	|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection.The format for the URI is as follows:<br/>- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
	|**/teamproject**:`project`|Required. The name of the project that contains the test objects you want to clone or import automated tests into.|
	|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, or you're using basic authentication, or you're not connected to a domain.|

- You must be a valid member of the project(s) you want to access and have the required permissions based on the commands you run. To learn more, see [Manual test access and permissions](../manual-test-permissions.md). 

- To clone or import test objects, you must have been granted the same access levels required to add test plans and test suites as described in [Prerequisites](#prerequisites).  

