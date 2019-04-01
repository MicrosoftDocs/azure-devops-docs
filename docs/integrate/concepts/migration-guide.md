---
title: WIT Client OM to REST Migration Guide
titleSuffix: Azure DevOps Services
description: Migration guide to help you migrate your code from using WIT Client OM to REST based APIs
ms.technology: devops-collab
ms.prod: devops
ms.topic: conceptual
ms.assetid: 30272A34-2CE1-41B3-BA7A-815D69309CBE
ms.manager: jillfra
ms.author: kaelli
author: danhellem
ms.date: 03/28/2019
monikerRange: "azure-devops"
---

<!--- Supports FWLINK: http://go.microsoft.com/fwlink/?LinkId=692096 -->

# Migration guide

[!INCLUDE [version](../../_shared/version-vsts-only.md)]

This guide is to help you migrate your .NET code from using [WIT Client OM](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient) to our REST based [.Net Client Libraries](dotnet-client-libraries.md). Below is table of the common work item tracking scenarios with links back to its respected API documentation.

View the [Azure Devops WIT Client OM Migration Guide](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide) repo for all the sample code covered in these scenarios.

## Common scenarios

| Scenario                                          | WIT Client OM                                                                                                                                                                                         | REST based                                                                                                                            |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Get list of work items                            | [WorkItemStore.Query](/previous-versions/visualstudio/visual-studio-2013/bb140399%28v%3dvs.120%29)                                                                                                    | [Work Items - List](/rest/api/azure/devops/wit/work%20items/list?view=azure-devops-rest-5.0)                                          |
| Get single work item                              | [WorkItemStore.GetWorkItem](/previous-versions/visualstudio/visual-studio-2013/bb140391%28v%3dvs.120%29)                                                                                              | [Work Items - Get Work Item](/rest/api/azure/devops/wit/work%20items/get%20work%20item?view=azure-devops-rest-5.0)                    |
| Create new work item                              | [WorkItem](</previous-versions/visualstudio/visual-studio-2013/bb179831(v%3dvs.120)>)                                                                                                                 | [Work Items - Create](/rest/api/azure/devops/wit/work%20items/create?view=azure-devops-rest-5.0)                                      |
| Update existing work item                         | [WorkItem.Fields](</previous-versions/visualstudio/visual-studio-2013/bb164805(v%3dvs.120)>)                                                                                                          | [Work Items - Update - Update a field](/rest/api/azure/devops/wit/work%20items/update?view=azure-devops-rest-5.0#update_a_field)      |
| Validate a work item                              | [WorkItem.IsValid()](</previous-versions/visualstudio/visual-studio-2013/bb140421(v%3dvs.120)>),<br/>[WorkItem.Validate()](</previous-versions/visualstudio/visual-studio-2013/bb140427(v%3dvs.120)>) | [Work Items - Update - Validate only](/rest/api/azure/devops/wit/work%20items/update?view=azure-devops-rest-5.0#validate_only_update) |
| Create a link to an existing work item            | [WorkItem.WorkItemLinks.Add](</previous-versions/visualstudio/visual-studio-2013/bb140132(v%3dvs.120)>)                                                                                               | [Work Item - Update - Add a link](/rest/api/azure/devops/wit/work%20items/update?view=azure-devops-rest-5.0#add_a_link)               |
| Add a comment                                     | [WorkItem.History](</previous-versions/visualstudio/visual-studio-2013/bb164807(v%3dvs.120)>)                                                                                                         | [Work Item - Update - Update a field](/rest/api/azure/devops/wit/work%20items/update?view=azure-devops-rest-5.0#update_a_field)       |
| Create a hyperlink                                | [WorkItem.Links.Add()](/previous-versions/visualstudio/visual-studio-2013/bb140133%28v%3dvs.120%29)                                                                                                   | [Work Item - Update - Add a hyperlink](/rest/api/azure/devops/wit/work%20items/update?view=azure-devops-rest-5.0#add_a_hyperlink)     |
| Add an attachment                                 | [WorkItem.Attachments.Add()](/previous-versions/visualstudio/visual-studio-2013/bb164795%28v%3dvs.120%29)                                                                                             | [Work Item - Update - Add an attachment](/rest/api/azure/devops/wit/work%20items/update?view=azure-devops-rest-5.0#add_an_attachment) |
| Query work items using WIQL                       | [WorkItemStore.Query()](/previous-versions/visualstudio/visual-studio-2013/bb140399%28v%3dvs.120%29)                                                                                                  | [Wiql - Query by Wiql](/rest/api/azure/devops/wit/wiql/query%20by%20wiql?view=azure-devops-rest-5.0)                                  |
| Run an existing query to get a list of work items | [WorkItemStore.Query()](/previous-versions/visualstudio/visual-studio-2013/bb140399%28v%3dvs.120%29)                                                                                                  | [Wiql - Query by Id](/rest/api/azure/devops/wit/wiql/query%20by%20id?view=azure-devops-rest-5.0)                                      |
| Get list of work item types for your project      | [Category.WorkItemTypes](/previous-versions/visualstudio/visual-studio-2013/ff733906%28v%3dvs.120%29)                                                                                                 | [Work Item Types - List](/rest/api/azure/devops/wit/work%20item%20types/list?view=azure-devops-rest-5.1)                              |
| Get work item type details                        | [Category.WorkItemTypes](/previous-versions/visualstudio/visual-studio-2013/ff733906%28v%3dvs.120%29)                                                                                                 | [Work Item Types - Get](/rest/api/azure/devops/wit/work%20item%20types/get?view=azure-devops-rest-5.0)                                |
| Get list of fields for a work item type           | [WorkItemType.FieldDefinitions](/previous-versions/visualstudio/visual-studio-2013/bb164788%28v%3dvs.120%29)                                                                                          | [Work Item Types Field - List](/rest/api/azure/devops/wit/work%20item%20types%20field/list?view=azure-devops-rest-5.0)                |
| Get field details                                 | [WorkItemType.FieldDefinitions](/previous-versions/visualstudio/visual-studio-2013/bb164788%28v%3dvs.120%29)                                                                                          | [Work Item Types Field - Get](/rest/api/azure/devops/wit/work%20item%20types%20field/get?view=azure-devops-rest-5.0)                  |

## Resources

- [Migration guide with code samples](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide)
- [Work Item Tracking REST API documentation](/rest/api/azure/devops/wit?view=azure-devops-rest-5.0)

## Support

Looking for a help on a scenario that we missed? If so, please create a new issue on the [migration guide](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide) project and we will add the scenario directly into the repo.
