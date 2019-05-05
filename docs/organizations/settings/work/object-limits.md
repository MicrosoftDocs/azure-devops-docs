---
title: Work tracking object limits
titleSuffix: Azure DevOps Services
description: Limits placed on the number of objects that can be specified for the Inheritance and Hosted XML process models for Azure DevOps Services
ms-custom: inherited-process
ms.technology: devops-agile
ms.prod: devops
ms.assetid: E5FABB7C-ECA8-4FA5-9488-4AD78C60869A
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: 'azure-devops'
ms.date: 06/02/2017
---

# Work tracking object limits

[!INCLUDE [temp](../../../boards/_shared/version-vsts-only.md)]

When customizing the work item types (WITs) defined in the Inheritance or Hosted XML process models, be aware of the limits placed on objects defined in this topic. To learn about process models, see [Customize your work tracking experience](../../../reference/customize-work.md).

## Inheritance and Hosted XML process models

Below you find maximum number of objects in the Inheritance and Hosted XML process models.

| Object                                              | Inheritance | Hosted XML |
| --------------------------------------------------- | ----------: | ---------: |
| Work item types defined for a process               |          64 |         64 |
| Fields defined for an organization                  |        8192 |       8192 |
| Fields defined for a process                        |        1024 |       1024 |
| Fields defined for a work item type                 |        1024 |       1024 |
| Picklists defined for an organization or collection |        1024 |          - |
| Picklist items defined for a list                   |        2048 |       2048 |
| Picklist item character length                      |         256 |          - |
| Workflow states defined for a work item type        |          32 |         16 |
| Rules defined for a work item type                  |        1024 |       1024 |
| Portfolio backlog levels defined for a process      |           5 |          5 |
| Categories defined for a process                    |           - |         32 |
| Global lists defined for a process                  |           - |        256 |
| List items defined within a global list             |           - |       1024 |
| Work item attachment size                           |       60 MB |      60 MB |

For additional restrictions and conformance requirements of the Hosted XML process model, see [Customize a process when using Hosted XML](../../../organizations/settings/work/import-process/customize-process.md).

> [!NOTE]  
> For the Hosted XML process model, you can define an approximate total of 10K items for all global lists specified across all WITs.

## Work items

- A long text field can contain 1M characters.
- You can't assign more than 100 tags to a work item.
- You can't add more than 1,000 links to a work item.
- You can't add more than 100 attachments to a work item.
- You can't add an attachment size larger than 60MB to a work item.

## Related articles

- [Customize your work tracking experience](../../../reference/customize-work.md)
- [Customize a process when using Hosted XML](import-process/customize-process.md)
- [Create an Inheritance process](manage-process.md)
