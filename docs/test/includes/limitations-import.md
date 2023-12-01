---
title: limitations with the import functionality with test
description: limitations with the import functionality with test
ms.topic: reference
ms.date: 11/29/2023
monikerRange: 'azure-devops'
---

* Test case state column should be in Design state, other states are not supported with the import.
* Test case title length should not be greater than 128 characters. 
* There is a limit of 20 MB on JSON object which gets created during import and export, so try to import and export with small subset of the test cases.
* Ensure that the user has permission on area and iteration paths for test plan and test suite which they are planning to import or export. [Read more about the permissions for test plan and suites mentioned in the prerequisites section](../create-a-test-plan.md#prerequisites).
* Copy and Import operations may fail if the related link count exceed 1000 for the test case, this limit cannot be increased. Review the test cases and reduce the number of links.
