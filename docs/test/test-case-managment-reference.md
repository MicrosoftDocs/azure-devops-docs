---
title: Test case management commands (tcm.exe) 
titleSuffix: Azure DevOps  
description: Learn which commands you can use to manage Azure Test Plans
ms.technology: devops-test
ms.topic: reference
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 01/14/2022
---



# Test case management commands (tcm.exe)  

[!INCLUDE [temp](../../includes/customization-witadmin-plus-version-header.md)]

You can change how you track your team's progress by creating and customizing objects that track work items. By using the **witadmin** command-line tool, you can create, delete, import, and export objects such as categories, global lists, global workflow, types of links, and types of work items. You can also delete, list, or change the attributes of work item fields.  

[!INCLUDE [prerequisites-define](includes/prerequisites-tcm.md)] 
 

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
       ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [tcm fieldmapping](../reference/witadmin/tcm-customize-manage-test-experience.md): Imports or exports an XML file for defining the resolution types, bug type, and failure types.  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [tcm plans](copy-clone-test-items.md#clone-test-plan): List or clone test plans.
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [tcm run](run-automated-tests-from-test-hub.md): Creates, deletes, lists, aborts, publishes, exports, or runs a group of tests. 
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [tcm suites](copy-clone-test-items.md#clone-test-suite): List or clone test suites. 
   :::column-end:::
   :::column span="1":::
       ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [tcm testenvironments](test-different-configurations.md): View and list test environments.
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   [tcm testcase](copy-clone-test-items.md#import-test-cases): Import test cases from a specified assembly or a test file 
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
 
 

## Related articles

- [Copy or clone test plans, test suites, and test cases](copy-clone-test-items.md)
- [Associate automated tests with test cases](associate-automated-test-with-test-case.md) 
- [Cross-service integration and collaboration overview](../cross-service/cross-service-overview.md)
 