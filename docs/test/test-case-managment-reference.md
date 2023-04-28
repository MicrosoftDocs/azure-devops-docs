---
title: Test case management commands (tcm.exe) 
titleSuffix: Azure DevOps  
description: Learn which commands you can use to manage Azure Test Plans
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: reference
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 01/18/2022
---



# Test case management commands (tcm.exe)  

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

You can perform several tasks to list, view, copy/clone or run tests using the **tcm.exe** command-line tool. Most commands are supported for both on-premises and hosted Azure DevOps. 

## Work with the TCM command-line tool 

To exercise the TCM command-line tool, you must have the following in place: 

- Installed Visual Studio 2017 Professional or earlier version. You access **tcm.exe** from the command prompt and the following directories: 
	`%programfiles(x86)%\Microsoft Visual Studio\2017\Professional\Common7\IDE`  
	`%programfiles(x86)%\Microsoft Visual Studio\2017\Enterprise\Common7\IDE` 
	`%programfiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE`

- To run a **tcm.exe** command, specify the `/collection` and `/teamproject` parameters, and `/login` as needed.   

	| Parameter | Description |  
	|----------|------------|  
	|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection. The format for the URI is as follows:<br/>- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`|
	|**/teamproject**:`project`|Required. The name of the project that contains the test objects you want to clone or import automated tests into.|
	|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if you're using basic authentication, you're not connected to a domain, or your Windows credentials don't have the appropriate permissions. |

- You must be a valid member of the project you want to access and have the required permissions based on the commands you run. To learn more, see [Manual test access and permissions](manual-test-permissions.md). 
 
## TCM commands

The following table provides links to articles that describe how to exercise the corresponding **tcm.exe** command. Most commands are supported on both Azure DevOps Server, all versions, and Azure DevOps Services.  



---
:::row:::
   :::column span="2":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   [tcm configs](test-different-configurations.md):Lists test configurations
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [`tcm fieldmapping`](/previous-versions/azure/devops/reference/witadmin/tcm-customize-manage-test-experience): Imports or exports an XML file for defining the resolution types, bug type, and failure types.   
   ::: moniker range=">= azure-devops-2020"
   > [!NOTE]  
   > You can only exercise this command on collections that use the Online XML process model. For Azure DevOps Server 2020 and later versions that use the Inherited process model, import of XML files aren't supported. 
   ::: moniker-end
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [`tcm plans`](copy-clone-test-items.md#clone-test-plan): List or clone test plans.
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [`tcm run`](run-automated-tests-from-test-hub.md): Creates, deletes, lists, aborts, publishes, exports, or runs a group of tests. Also supports [importing automated tests into a test plan](copy-clone-test-items.md#import-test-cases).
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [`tcm suites`](copy-clone-test-items.md#clone-test-suite): List or clone test suites. 
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [`tcm testenvironments`](test-different-configurations.md): View and list test environments.
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [`tcm testcase`](copy-clone-test-items.md#import-test-cases): Import test cases from a specified assembly or a test file 
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;&nbsp;✔️
   :::column-end:::
:::row-end:::
---
 
 

## Related articles

- [Copy or clone test plans, test suites, and test cases](copy-clone-test-items.md)
- [Associate automated tests with test cases](associate-automated-test-with-test-case.md) 
- [Cross-service integration and collaboration overview](../cross-service/cross-service-overview.md)
 