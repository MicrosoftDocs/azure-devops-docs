---
title: Custom fields for test runs and test results
description: Store custom data against the test runs and test results
ms.assetid: 606679F2-1604-40EA-A720-63CDDA93DD76
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: how-to
ms.author: bjanousek
author: bjanousek
ms.date: 06/26/2024
monikerRange: '= azure-devops'
---

# Custom fields

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Using the custom fields allows [storing the custom data](#store-custom-data) against the test run and/or test result.
There can be up to 100 custom fields defined for a single Azure DevOps project.
Project administrator can [manage (add/delete) the set of the custom fields](#managing-custom-fields).

<a name="managing-custom-fields"></a>

## Managing the custom fields

There are two ways to manage the custom fields - either via [REST API](/rest/api/azure/devops/testresults/extensionfields)
or project administrator can do that through the **Project settings** while choosing **Test management** under **Pipelines**.
On that page new custom field can be added by clicking on the **+ Add new** button.
:::image type="content" source="./media/custom-fields/test-management-settings.png" alt-text="Screenshot of project settings with the test management settings selected and the button to add a new custom field marked by red rectangle.":::

Choose **+ Add new** to add a new custom field. Each custom field must have a name, type configured, and indicate what type of artifact it applies to.

:::image type="content" source="./media/custom-fields/add-custom-field.png" alt-text="Screenshot of a dialog used to add a new custom field.":::

The name of custom field cannot be longer than 50 characters (spaces, numbers, and special characters are not allowed) and must be unique in the project.
The names are case insensitive, so you cannot have one custom field named "Test" and the other one named "test".
Type can be one of the following:
-	Bit
-	DateTime
-	Int
-	Float
-	String
-	Guid

The existing custom fields can either be edited (only name can be changed) or removed. 

> [!NOTE]
> After removing the custom field, you cannot use its name for about a day.
> The background process that is removing the deleted custom fields permanently is run ones a day.

<a name="store-custom-data"></a>

## Storing custom data into custom fields

You can store your custom data into the configured custom fields either as part of the test run/result creation or after the test run/result was created.
Both can be done using REST API for now. In the future we will allow the custom data to be picked up from the test results file.
To get the values stored in these custom fields for the existing test run/result, user need to use the REST API.
For the moment we do not display the custom fields and values stored in these on the Azure DevOps UI (we will be adding that ability in the future).

When you’re creating test run and/or result via REST API and want to store custom data to existing custom field, then the best option for you is to send the custom data as part of the test run and/or result creation.
To create a test run call [REST API Runs - Create](/rest/api/azure/devops/test/runs/create) and to create test result call [REST API Results - Add](/rest/api/azure/devops/test/results/add).

When the test run and/or result is not created via REST API but by other means, then you must first find the identification of the test run or result for which you want to set (or update)
the custom data in the custom fields and the call [REST API Runs - Update](/rest/api/azure/devops/test/runs/update) for the test run
and [REST API Results - Update](/rest/api/azure/devops/test/results/update) for the test result.

To retrieve the custom data from the custom fields stored previously against the test run and/or result, you must first find the identification of the test run or result.
Then you can call [REST API Runs - Query](/rest/api/azure/devops/test/runs/query) for the test run
and [REST API Results - Get](/rest/api/azure/devops/test/results/get) for the test result.

The custom data for the custom fields are sent or received in an array.
Each item of that array contains two properties "fieldname" and "value" and you can see an example of that [here](/rest/api/azure/devops/test/results/get#customtestfield).
The value is object of the type that matches the type configured for the custom field.
To understand the type of the custom field you may want to use [REST API](/rest/api/azure/devops/testresults/extensionfields/query) that provides array of the custom fields.
For each field you can find there its ID, name, type and scope. You may also hardcode the type if you know what the type of the custom field of given name is.
