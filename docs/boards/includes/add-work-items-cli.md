---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 07/09/2020
---

::: moniker range=">= azure-devops-2020"  

You can add a new work item with the [az boards work-item create](/cli/azure/boards/work-item#ext-azure-devops-az-boards-work-item-create) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md). 

```azurecli
az boards work-item create --title
                           --type
                           [--area]
                           [--assigned-to]
                           [--description]
                           [--discussion]
                           [--fields]
                           [--iteration]
                           [--open]
                           [--org]
                           [--project]
                           [--reason]
```

#### Parameters

- **title**: Title of the work item.
- **type**: Type of work item (for example, *Bug*).

#### Optional parameters

- **area**: Area the work item is assigned to (for example, *Demos*).
- **assigned-to**: Name of the person the work item is assigned-to (for example, *fabrikam*).
- **description**: Description of the work item.
- **discussion**: Comment to add to a discussion in a work item.
- **fields**: Space separated `field=value` pairs for custom fields you would like to set.
- **iteration**: Iteration path of the work item (for example, *DemosIteration 1*).
- **open**: Open the work item in the default web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **reason**: Reason for the state of the work item.

#### Example

The following command creates a bug titled "Fix issue". It assigns the bug to the user contoso@contoso.com and shows the results in table format.

```azurecli
az boards work-item create --title "Fix issue" --type bug --assigned-to contoso@contoso.com --output table

ID    Type    Title      Assigned To          State
----  ------  ---------  -------------------  -------
864   Bug     Fix issue  contoso@contoso.com  New
```

::: moniker-end