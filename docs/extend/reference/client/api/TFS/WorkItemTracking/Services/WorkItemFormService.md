---
title: TFS/WorkItemTracking/Services Work Item Form Service API | Extensions for Azure DevOps Services
description: Host service for interacting with the currently active work item form (work item currently displayed in the UI).
ms.assetid: 49bc7312-2aee-433d-9336-394b6c426051
ms.prod: devops
ms.technology: devops-ecosystem
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

[!INCLUDE [styleoverrides](../../../_data/style-overrides.md)]

# Work Item Form Service

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]

The work item form service allows you to interact with the currently active work item form. You can use the service to get or update the work item data that is currently displayed in the work item form UI from your extension. Service functions Will throw an error when there is no open work item.

See [Work Item Tracking REST APIs](../RestClient/WorkItemTrackingHttpClient2_2.md), if you want to interact with work items that are not in view.

## Example

```js
	// Get work item form service
    VSS.require(["TFS/WorkItemTracking/Services"], function(workItemServices) {
        workItemServices.WorkItemFormService.getService().then(function (workItemFormSvc) {
            if(workItemFormSvc.hasActiveWorkItem()) {
                console.log("Active work item is available.");
            }
            else {
                console.log("Active work item is NOT available.");
            }
        });
    });
```

See a [full example](https://github.com/Microsoft/vsts-extension-samples/blob/master/work-item-form/workItemGroup.html) in the `work-item-form` sample extension found in the vsts-extension-samples repository.

## Methods

* [hasActiveWorkItem()](#method_hasActiveWorkItem)
* [getId()](#method_getId)
* [getRevision()](#method_getRevision)
* [getFields()](#method_getFields)
* [getFieldValue()](#method_getFieldValue)
* [getFieldValues()](#method_getFieldValues)
* [setFieldValue()](#method_setFieldValue)
* [setFieldValues()](#method_setFieldValues)
* [getAllowedFieldValues()](#method_getAllowedFieldValues)
* [isDirty()](#method_isDirty)
* [isNew()](#method_isNew)
* [isValid()](#method_isValid)
* [getInvalidFields()](#method_getInvalidFields)
* [addWorkItemRelations()](#method_addWorkItemRelations)
* [removeWorkItemRelations()](#method_removeWorkItemRelations)
* [getWorkItemRelations()](#method_getWorkItemRelations)
* [getWorkItemResourceUrl()](#method_getWorkItemResourceUrl)
* [getWorkItemRelationTypes()](#method_getWorkItemRelationTypes)
* [save()](#method_save)
* [refresh()](#method_refresh)
* [reset()](#method_reset)
* [setError()](#method_setError)
* [clearError()](#method_clearError)

<a name="method_hasActiveWorkItem"></a>
###hasActiveWorkItem()

Returns true if active work item is available.

#### Syntax
<pre class='syntax'>
 IPromise&lt;boolean&gt; <b>hasActiveWorkItem</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;boolean&gt;. A promise that returns a boolean value indicates whether the active work item is available.

<a name="method_getId"></a>
###getId()

Gets the id of active work item.

#### Syntax
<pre class='syntax'>
 IPromise&lt;number&gt; <b>getId</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;number&gt;. A promise that returns the active work item id.

<a name="method_getRevision"></a>
###getRevision()

Gets the active work item's latest revision.

#### Syntax
<pre class='syntax'>
 IPromise&lt;number&gt; <b>getRevision</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;number&gt;. A promise that returns the active work item's latest revision id.

<a name="method_getFields"></a>
###getFields()

Gets the active work item fields.

#### Syntax
<pre class='syntax'>
 IPromise&lt;WorkItemField[]&gt; <b>getFields</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[WorkItemField](../Contracts/WorkItemField.md)[]&gt;. A promise that returns an array of work item field.

<a name="method_getFieldValue"></a>
###getFieldValue()

Gets field value of active work item.

#### Syntax
<pre class='syntax'>
 IPromise&lt;Object&gt; <b>getFieldValue</b>(fieldReferenceName, returnOriginalValue)
</pre>

#### Parameters

* `fieldReferenceName`: string. Field reference name.
* `returnOriginalValue`: boolean. Optional. If false, gets the unsaved field values. Default is false.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;Object&gt;. A promise that returns the value of the work item field.

<a name="method_getFieldValues"></a>
###getFieldValues()

Gets field values of active work item.

#### Syntax
<pre class='syntax'>
 IPromise&lt;IDictionaryStringTo&lt;Object&gt;&gt; <b>getFieldValues</b>(fieldReferenceNames, returnOriginalValue)
</pre>

#### Parameters

* `fieldReferenceNames`: string[]. An array of field reference names.
* `returnOriginalValue`: boolean. Optional. If false, gets unsaved field values. Default is false.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;IDictionaryStringTo&lt;Object&gt;&gt;. A promise that returns a dictionary of work item field values (refName to values pairs).

<a name="method_setFieldValue"></a>
###setFieldValue()

Sets field value of active work item.

#### Syntax
<pre class='syntax'>
 IPromise&lt;boolean&gt; <b>setFieldValue</b>(fieldReferenceName, value)
</pre>

#### Parameters

* `fieldReferenceName`: string. Field reference name.
* `value`: Object. Field value.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;boolean&gt;. A promise that returns a boolean value indicates whether the function completed successfully.

<a name="method_setFieldValues"></a>
###setFieldValues()

Sets field values of the work item.

#### Syntax
<pre class='syntax'>
 IPromise&lt;IDictionaryStringTo&lt;boolean&gt;&gt; <b>setFieldValues</b>(fields)
</pre>

#### Parameters

* `fields`: IDictionaryStringTo<Object>. A dictionary of field reference name/value.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;IDictionaryStringTo&lt;boolean&gt;&gt;. A promise that returns a dictionary of field value update results (refName to results pairs).

<a name="method_getAllowedFieldValues"></a>
###getAllowedFieldValues()

Gets the allowed values for the field on active work item.

#### Syntax
<pre class='syntax'>
 IPromise&lt;Object[]&gt; <b>getAllowedFieldValues</b>(fieldReferenceName)
</pre>

#### Parameters

* `fieldReferenceName`: string. Field reference name.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;Object[]&gt;. A promise that returns an array of allowed values.

<a name="method_isDirty"></a>
###isDirty()

Returns true if active work item is dirty.

#### Syntax
<pre class='syntax'>
 IPromise&lt;boolean&gt; <b>isDirty</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;boolean&gt;. A promise that returns a boolean value indicates whether the active work item is dirty.

<a name="method_isNew"></a>
###isNew()

Returns true if active work item is new.

#### Syntax
<pre class='syntax'>
 IPromise&lt;boolean&gt; <b>isNew</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;boolean&gt;. A promise that returns a boolean value indicates whether the active work item is new.

<a name="method_isValid"></a>
###isValid()

Returns true if active work item fields are all valid.

#### Syntax
<pre class='syntax'>
 IPromise&lt;boolean&gt; <b>isValid</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;boolean&gt;. A promise that returns a boolean value indicates whether all field values are valid.

<a name="method_getInvalidFields"></a>
###getInvalidFields()

Gets invalid fields who are in an invalid state according to the work item rules. These fields need to be changed before the work item can be saved.

#### Syntax
<pre class='syntax'>
 IPromise&lt;WorkItemField[]&gt; <b>getInvalidFields</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[WorkItemField](../Contracts/WorkItemField.md)[]&gt;. A promise that returns an array of invalid work item fields.

<a name="method_addWorkItemRelations"></a>
###addWorkItemRelations()

Adds links of another work items or artifacts (e.g. commits, hyperlinks) to the work item.
Attachment is currently not supported by this function. Please see [Work Item Tracking REST APIs](../RestClient/WorkItemTrackingHttpClient2_2.md) for alternatives of updating work item attachments.

#### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>addWorkItemRelations</b>(workItemRelations)
</pre>

#### Parameters

* `workItemRelations`: [WorkItemRelation](../Contracts/WorkItemRelation.md)[]. Work item links to add.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;. An empty promise.

<a name="method_removeWorkItemRelations"></a>
###removeWorkItemRelations()

Removes links to another work items or artifacts (e.g. commits, hyperlinks) from the work item.
Attachment is currently not supported by this function. Please see [Work Item Tracking REST APIs](../RestClient/WorkItemTrackingHttpClient2_2.md) for alternatives of updating work item attachments.

#### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>removeWorkItemRelations</b>(workItemRelations)
</pre>

#### Parameters

* `workItemRelations`: [WorkItemRelation](../Contracts/WorkItemRelation.md)[]. Work item links to remove.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;. An empty promise.

<a name="method_getWorkItemRelations"></a>
###getWorkItemRelations()

Returns an array of the work item's links to another work items or artifacts (e.g. commits, hyperlinks).
Attachment is currently not supported by this function. Please see [Work Item Tracking REST APIs](../RestClient/WorkItemTrackingHttpClient2_2.md) for alternatives of updating work item attachments.

#### Syntax
<pre class='syntax'>
 IPromise&lt;WorkItemRelation[]&gt; <b>getWorkItemRelations</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[WorkItemRelation](../Contracts/WorkItemRelation.md)[]&gt;. A promise that returns an array of work item relations of active work item.

<a name="method_getWorkItemResourceUrl"></a>
###getWorkItemResourceUrl()

Returns the REST url of the specified work item resource.

#### Syntax
<pre class='syntax'>
 IPromise&lt;string&gt; <b>getWorkItemResourceUrl</b>(workItemId)
</pre>

#### Parameters

* `workItemId`: number. The id of the work item that the resource url is requested for.

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string&gt;. A promise that returns the REST url of the specified work item resource.

<a name="method_getWorkItemRelationTypes"></a>
###getWorkItemRelationTypes()

Returns an array of work item relation types.

#### Syntax
<pre class='syntax'>
 IPromise&lt;WorkItemRelationType[]&gt; <b>getWorkItemRelationTypes</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[WorkItemRelationType](../Contracts/WorkItemRelationType.md)[]&gt;. A promise that returns an array of work item relation types.

<a name="method_save"></a>
###save()

Saves the work item.

#### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>save</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;. A promise that is resolved after the work item save succeeds, and rejected if the work item save fails or if the work item form has errors.

<a name="method_refresh"></a>
###refresh()

Refresh the workitem. Will prompt user for confirmation if the work item is dirty.

#### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>refresh</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;.

<a name="method_reset"></a>
###reset()

Reset the work item. Revert all work item changes if the user confirms.

#### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>reset</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;.

<a name="method_setError"></a>
###setError()

Sets a specified error on the work item form and marks the work item as invalid.

#### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>setError</b>(errorMessage)
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;.

<a name="method_clearError"></a>
###clearError()

Clears the error set by setError method and marks the work item as valid if there are no other errors on the form.

#### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>clearError</b>()
</pre>

#### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;.
