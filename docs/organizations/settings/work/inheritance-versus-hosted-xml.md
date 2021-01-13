---
title: Inherited process model versus the Hosted XML process model
titleSuffix: Azure DevOps Services
description: Differences between Inheritance and Hosted XML
ms.custom: inherited-process
ms.technology: devops-agile
ms.assetid:
ms.author: dahellem
author: danhellem
ms.topic: conceptual
monikerRange: "azure-devops"
ms.date: 4/01/2020
---

# Differences between Inheritance and Hosted XML

[!INCLUDE [temp](../../../boards/includes/version-vsts-plus-azdevserver-2019.md)]

If you are currently on Hosted XML and looking to move your process to Inherited, here is a comparison chart of the differences you can expect between the two customization models.

| Item                                 | Inherited                                                                                                      | Hosted XML                    |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Process administration               | Web ui and REST API                                                                                            | XML and import through web ui |
| Process security                     | Supported                                                                                                      | Collection admin only         |
| Custom work item types               | Supported                                                                                                      | Supported                     |
| Custom fields                        | Supported                                                                                                      | Supported                     |
| Custom lists                         | Supported                                                                                                      | Supported                     |
| Global lists                         | Shared picklist                                                                                                | Supported                     |
| Cascading picklists                  | [With extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.cascading-picklists-extension) | Supported                     |
| Custom values in system fields       | Supported                                                                                                      | Supported                     |
| Custom reason field values & rules   | Supported with work around                                                                                     | Supported                     |
| Custom states                        | Supported                                                                                                      | Supported                     |
| Custom rules                         | Supported                                                                                                      | Supported                     |
| for / not rules                      | Not supported                                                                                                  | Not supported                 |
| Disable system rules                 | Not supported                                                                                                  | Supported (not recommended)   |
| Customize layout                     | Supported                                                                                                      | Supported                     |
| Portfolio backlog levels              | Supported                                                                                                      | Supported                     |
| Move projects to a different process | Supported                                                                                                      | Not supported                 |
| Clone process                        | Supported                                                                                                      | Not supported                 |
| Disable process                      | Supported                                                                                                      | Supported                     |
| REST API                             | Supported                                                                                                      | Not supported                 |
| Work item extensions                 | Supported                                                                                                      | Supported                     |

## Related articles

- [About process customization and inherited processes](./inheritance-process-model.md)

## Next steps

- [Clone a Hosted process to an inheritance process](./upgrade-hosted-to-inherited.md)
- [Change a projects from Hosted XML to an inherited process](./change-process-from-hosted-to-inherited.md)