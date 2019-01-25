---
title: TFS/WorkItemTracking/Services Work Item Form Navigation Service API | Extensions for Azure DevOps Services
description: Host service for opening the work item form
ms.assetid: 924f89e9-0914-2308-8090-b0543fac0556
ms.prod: devops
ms.technology: devops-ecosystem
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

[!INCLUDE [styleoverrides](../../../_data/style-overrides.md)]

# Work Item Form Navigation Service

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]

The work item form navigation service allows you to open the work item form for a new or existing work item. You can use the service to open a work item form with an initial set of field values pre-populated.

## Example

```js
    VSS.require(["TFS/WorkItemTracking/Services"], function(workItemServices) {
        workItemServices.WorkItemFormNavigationService.getService().then(function (workItemNavSvc) {
            workItemNavSvc.openWorkItem(1);
        });
    });
```

See a [full example](https://github.com/Microsoft/vsts-extension-samples/blob/master/work-item-form/workItemService.html) in the `work-item-form` sample extension found in the vsts-extension-samples repository.

## Methods

* [openWorkItem()](#method_openWorkItem)
* [openNewWorkItem()](#method_openNewWorkItem)

<a name="method_openWorkItem"></a>
###openWorkItem()

Opens the specified work item. The host page will display the work item in a dialog.

#### Syntax
<pre class='syntax'>
 IPromise&lt;WorkItem&gt; <b>openWorkItem</b>(workItemId, openInNewTab)
</pre>

#### Parameters

* `workItemId`: number. The id of the work item to open.
* `openInNewTab`: boolean. Optional. If true, opens the work item in a new tab. Default is false.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[WorkItem](../Contracts/WorkItem.md)&gt;. A promise that returns a work item when the work item dialog is closed. If openInNewTab is true, the promise will return null.

<a name="method_openNewWorkItem"></a>
###openNewWorkItem()

Opens a new work item of the specified type. The host page will display the new work item in a dialog.

#### Syntax
<pre class='syntax'>
 IPromise&lt;WorkItem&gt; <b>openNewWorkItem</b>(workItemTypeName, initialValues)
</pre>

#### Parameters

* `workItemTypeName`: string. The name of the work item type to open.
* `initialValues`: IDictionaryStringTo<Object>. Optional. A dictionary of any initial field values (field reference name to value pairs) to set after opening the new work item.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[WorkItem](../Contracts/WorkItem.md)&gt;. A promise that returns a work item when the work item dialog is closed. If the workitem was not saved before closing the dialog, the promise will return null
