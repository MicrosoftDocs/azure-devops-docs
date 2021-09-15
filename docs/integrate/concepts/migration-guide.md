---
title: WIT Client OM to REST Migration Guide
titleSuffix: Azure DevOps Services
description: Migration guide to help you migrate your code from using WIT Client OM to REST based APIs
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.assetid: 30272A34-2CE1-41B3-BA7A-815D69309CBE
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 03/28/2019
---

<!--- Supports FWLINK: https://go.microsoft.com/fwlink/?LinkId=692096 -->

# Migration guide

[!INCLUDE [version](../../includes/version-vsts-only.md)]

This guide provides information to help migrate your .NET code from using [WIT Client OM](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient) to our REST-based [.NET Client Libraries](dotnet-client-libraries.md). The following table lists common work tracking scenarios with links to their respected API documentation.

For sample code covered in these scenarios, see the [GitHub Azure DevOps WIT Client OM Migration Guide](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide).

## Common scenarios

| Scenario                                          | WIT Client OM                                                                                                                                                                                         | REST based                                                                                                                            |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Get list of work items                            | [WorkItemStore.Query](/previous-versions/visualstudio/visual-studio-2013/bb140399%28v%3dvs.120%29)                                                                                                    | [Work Items - List](/rest/api/azure/devops/wit/work-items/list)                                          |
| Get single work item                              | [WorkItemStore.GetWorkItem](/previous-versions/visualstudio/visual-studio-2013/bb140391%28v%3dvs.120%29)                                                                                              | [Work Items - Get Work Item](/rest/api/azure/devops/wit/work-items/get-work-item)                    |
| Create new work item                              | [WorkItem](</previous-versions/visualstudio/visual-studio-2013/bb179831(v%3dvs.120)>)                                                                                                                 | [Work Items - Create](/rest/api/azure/devops/wit/work-items/create)                                      |
| Update existing work item                         | [WorkItem.Fields](</previous-versions/visualstudio/visual-studio-2013/bb164805(v%3dvs.120)>)                                                                                                          | [Work Items - Update - Update a field](/rest/api/azure/devops/wit/work-items/update#update-a-field)      |
| Validate a work item                              | [WorkItem.IsValid()](</previous-versions/visualstudio/visual-studio-2013/bb140421(v%3dvs.120)>),<br/>[WorkItem.Validate()](</previous-versions/visualstudio/visual-studio-2013/bb140427(v%3dvs.120)>) | [Work Items - Update - Validate only](/rest/api/azure/devops/wit/work-items/update#validate-only-update) |
| Create a link to an existing work item            | [WorkItem.WorkItemLinks.Add](</previous-versions/visualstudio/visual-studio-2013/bb140132(v%3dvs.120)>)                                                                                               | [Work Item - Update - Add a link](/rest/api/azure/devops/wit/work-items/update#add-a-link)               |
| Add a comment                                     | [WorkItem.History](</previous-versions/visualstudio/visual-studio-2013/bb164807(v%3dvs.120)>)                                                                                                         | [Work Item - Update - Update a field](/rest/api/azure/devops/wit/work-items/update#update-a-field)       |
| Create a hyperlink                                | [WorkItem.Links.Add()](/previous-versions/visualstudio/visual-studio-2013/bb140133%28v%3dvs.120%29)                                                                                                   | [Work Item - Update - Add a hyperlink](/rest/api/azure/devops/wit/work-items/update#add-a-hyperlink)     |
| Add an attachment                                 | [WorkItem.Attachments.Add()](/previous-versions/visualstudio/visual-studio-2013/bb164795%28v%3dvs.120%29)                                                                                             | [Work Item - Update - Add an attachment](/rest/api/azure/devops/wit/work-items/update#add-an-attachment) |
| Query work items using WIQL                       | [WorkItemStore.Query()](/previous-versions/visualstudio/visual-studio-2013/bb140399%28v%3dvs.120%29)                                                                                                  | [Wiql - Query by Wiql](/rest/api/azure/devops/wit/wiql/query%20by%20wiql?view=azure-devops-rest-6.0&preserve-view=true)                                  |
| Run an existing query to get a list of work items | [WorkItemStore.Query()](/previous-versions/visualstudio/visual-studio-2013/bb140399%28v%3dvs.120%29)                                           | [Wiql - Query by ID](/rest/api/azure/devops/wit/wiql/query%20by%20id?view=azure-devops-rest-6.0&preserve-view=true)                                      |
| Get list of work item types for your project      | [Category.WorkItemTypes](/previous-versions/visualstudio/visual-studio-2013/ff733906%28v%3dvs.120%29)                                                                                                 | [Work Item Types - List](/rest/api/azure/devops/wit/work%20item%20types/list?view=azure-devops-rest-5.1&preserve-view=true)                              |
| Get work item type details                        | [Category.WorkItemTypes](/previous-versions/visualstudio/visual-studio-2013/ff733906%28v%3dvs.120%29)                                                                                                 | [Work Item Types - Get](/rest/api/azure/devops/wit/work-item-types/get)                                |
| Get list of fields for a work item type           | [WorkItemType.FieldDefinitions](/previous-versions/visualstudio/visual-studio-2013/bb164788%28v%3dvs.120%29)                                                                                          | [Work Item Types Field - List](/rest/api/azure/devops/wit/work-item-types-field/list)                |
| Get field details                                 | [WorkItemType.FieldDefinitions](/previous-versions/visualstudio/visual-studio-2013/bb164788%28v%3dvs.120%29)                                                                                          | [Work Item Types Field - Get](/rest/api/azure/devops/wit/work-item-types-field/get)                  |

## Resources

- [Migrate data from Azure DevOps Server to Azure DevOps Services](../../migrate/migration-overview.md)
- [Migration guide with code samples](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide)
- [Work Item Tracking REST API documentation](/rest/api/azure/devops/wit/?preserve-view=true&view=azure-devops-rest-6.0)

## Support

Looking for a help on a scenario that we missed? If so, create a new issue on the [migration guide](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide) project and we'll add the scenario to the repo.
