---
title: Work Items | REST API Reference for Team Foundation Server
description: Work with work items programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 2762B459-BD46-493C-998F-A14EE1DA4C94
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Work items
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

The Work Items API is used to create, update, or delete work items in Team Services and Team Foundation Server. There are multiple different 
work item types (bug, task, etc.) that can be accessed.

#### Common Tasks
This API is often used in combination with other work item tracking APIs for many end-to-end scenarios, check out the 
[work item tracking common tasks](./overview.md#common-tasks) to see popular use cases. 

## C# and .NET Samples

<div name="row">
    <div class ="col-sm-1 col-md-1 col-lg-1" style="padding:10px;">
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px; min-height:109px;">
            <div class="index-button" style="padding-top:25px; text-align:center">
                <a href="./samples.md#create-bug">
                    <h5>Create a bug</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:109px;">
            <div class="index-button" style="padding-top:20px; text-align:center">
                <a href="./samples.md#migrating-work-items">
                    <h5>Migrating work items</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:109px;">
            <div class="index-button" style="padding-top:25px; text-align:center">
                <a href="./samples.md#update-bug">
                    <h5>Update a bug</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:109px;">
            <div class="index-button" style="padding-top:7px; text-align:center">
                <a href="./samples.md#add-comment-to-bug">
                    <h5>Add a comment to a bug</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:109px;">
            <div class="index-button" style="padding-top:7px; text-align:center">
                <a href="./samples.md#change-bug-to-a-user-story">
                    <h5>Change a bug to a user story</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-1 col-lg-1" style="padding:10px;">
    </div>
</div>

<div style="clear:both"></div>

For all of the work items samples, check out the [samples page](./samples.md).

##	Get a list of work items

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems?api-version={version}&ids={string}[&fields={string}&asOf={DateTime}&$expand={enum{relations}&ErrorPolicy={string}]
```

| Parameter         | Type 	                                                            | Default | Notes
|:------------------|:------------------------------------------------------------------|:--------|:-------------------------------------------------------------------
| URL
| instance          | string                                                            |         | TFS server name ({server:port}).
| Query
| api-version       | string                                                            |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| ids				| string                                                            |         | A comma-separated list of up to 200 IDs of the work items to get.
| fields	    	| string                                                            |         | A comma-separated list of up to 100 fields to get with each work item.<br/>If not specified, all fields with values are returned. Calculated fields such as Attached File Count must be specifically queried for using this parameter.
| asOf				| [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) |         | Gets the work items as they existed at this time.
| $expand			| enum { all, relations, none }										| none    | Gets work item relationships (work item links, hyperlinks, file attachments, etc.).
| ErrorPolicy		| string { throw, omit }                                            | throw   | Determines if the call will throw an error when encountering a work item (default behavior) that doesn't exist or simply omit it.

###	By IDs
<a name="byids" />

[!code-REST [GET__wit_workitems_ids-_ids__json](./_data/workitems/GET__wit_WorkItems_ids-_ids_.json)]

### Sample code

* [C# (GetWorkItemsByIDs method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L20)


###	With specific fields
<a name="withspecificfields" />

[!code-REST [GET__wit_workitems_ids-_ids__fields-_columns__json](./_data/workitems/GET__wit_WorkItems_ids-_ids__fields-_columns_.json)]

#### Sample code

* [C# (GetWorkItemsWithSpecificFields method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L38)


###	As of a date
<a name="asofdate" />

[!code-REST [GET__wit_workitems_ids-_ids__fields-_columns__asOf-_asof__json](./_data/workitems/GET__wit_WorkItems_ids-_ids__fields-_columns__asOf-_asof_.json)]

#### Sample code

* [C# (GetWorkItemsAsOfDate method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L67)


###  With links and attachments
<a name="withlinksandattachments" />

[!code-REST [GET__wit_workitems_ids-_ids___expand-relations_json](./_data/workitems/GET__wit_WorkItems_ids-_ids___expand-all.json)]

#### Sample code

* [C# (GetWorkItemsWithLinksAndAttachments method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L98)


##	Get a work item
<a name="getaworkitem" />

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}?api-version={version}[&$expand={enum{relations}]
```

| Parameter         | Type 	                                                            | Default | Notes
|:------------------|:------------------------------------------------------------------|:--------|:-------------------------------------------------------------------
| URL
| instance          | string                                                            |         | TFS server name ({server:port}).
| id				| string                                                            |         | ID of the work item to retrieve.
| Query
| api-version       | string                                                            |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $expand			| enum { all, relations, none }										| none    | Gets work item relationships (work item links, hyperlinks and file attachments).

[!code-REST [GET__wit_workitems__PBIId__json](./_data/workitems/GET__wit_workitems__PBIId_.json)]

#### Sample code

* [C# (GetWorkItemsByID method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L122)

<a name="getaworkitemwithlinksandattachments" />
###  With links and attachments

[!code-REST [GET__wit_workitems__PBIId___expand-all_json](./_data/workitems/GET__wit_workitems__PBIId___expand-relations.json)]

###  Fully expanded
<a name="fullyexpanded" />

[!code-REST [GET__wit_workitems__PBIId___expand-all_json](./_data/workitems/GET__wit_workitems__PBIId___expand-all.json)]

#### Sample code

* [C# (GetWorkItemFullyExpanded method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L140)


##  Get default values
<a name="getdefaultvalues" />

Get the default values that will be filled in automatically when you create a new work item of a specific type.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workitems/${workItemTypeName}?api-version={version}
```

| Parameter         | Type 		| Notes
|:------------------|:----------|:-------------------------------------------------------------------
| URL
| instance          | string	| TFS server name ({server:port}).
| project			| string	| Name or ID of a [project](../tfs/projects.md) where the work item type is defined.
| workItemTypeName	| string    | Name of the [work item type](./work-item-types.md).
| Query
| api-version       | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_workitems__Task_json](./_data/workitems/GET__wit_workitems__Task.json)]

#### Sample code

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

...

public void GetDefaultValues()
{
    string _personalAccessToken = "your personal access token";
    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));

    //use the httpclient
    using (var client = new HttpClient())
    {
        //set our headers
        client.BaseAddress = new Uri("https://accountname.visualstudio.com/");
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

        //send the request and content
        HttpResponseMessage response = client.GetAsync("Fabrikam-Fiber-Git/_apis/wit/workitems/$Task?api-version=2.2").Result;

        if (response.IsSuccessStatusCode)
        {
            var result = response.Content.ReadAsStringAsync().Result;
        }
    }
}

```

##	Create a work item
<a name="create-work-item" />

When you create a work item, you can provide values for any of the work item fields.

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/wit/workitems/${workItemTypeName}?api-version={version}
```
```http
Content-Type: application/json-patch+json
```
```json
[
	{
		"op": "add",
		"path": { string }
		"value": { string or int, depending on the field }
	},
	{
		"op": "add",
		"path": "/relations/-",
		"value":
		{
			"rel": { string },
			"url": { string },
			"attributes":
			{
				{ name/value pairs }
			}
		}
	}
]
```

| Parameter         | Type 	                                |  Notes
|:------------------|:--------------------------------------|:-------------------------------------------------------------------
| URL
| instance          | string                                | TFS server name ({server:port}).
| project			| string								| Name or ID of a [project](../tfs/projects.md) where the work item should be created.
| workItemTypeName	| string                                | Name of the [work item type](./work-item-types.md).
| Query
| api-version       | string                                | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body - field
| op				| enum { add, replace, test }           | The operation to perform on the field.<br/>You can use add or replace to set the value of a field when you create a work item.<br/>Use test to verify that the value is valid without actually saving the work item.
| path				| string                                | Path to the value you want to add, replace, remove, or test.<br/>For a field, use "/fields/{reference name}".
| value             | string or int, depending on the field | New value to set.
| Body - relation
| op				| enum { add, replace, remove, test }   | The operation to perform on the relation.<br/>Use test to verify that the relation is valid without actually saving the work item.
| path				| string                                | Path to the value you want to add, replace, remove, or test.<br/>For a specific relation, use "relations/Id".<br/>For all relations, use "/relations/-".
| value.rel			| string								| Type of the relationship. Examples include, work-item/hierarchy-forward, changeset, or attachment.<br/>Get the list of relations that a work item type supports using [relation types](./relation-types.md).
| value.url			| string								| URL of the item you are relating to the current work item.
| value.attributes	| array of name/value pairs				| Additional attributes of the relationship (e.g. comment, isLocked, etc.)

If any of the new field values or relations are not valid, the work item will not be created.

[!code-REST [PATCH__wit_workitems__Task_json](./_data/workitems/PATCH__wit_workitems__Task.json)]

#### Sample code

* [C# (CreateWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L66)

<a name="withaworkitemlink" />
### With a work item link

[!code-REST [PATCH__wit_workitems__Task2_json](./_data/workitems/PATCH__wit_workitems__Task2.json)]

#### Sample code

* [C# (CreateAndLinkToWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L198)
* [C# (ByPassRulesOnCreate method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L271)

##	Update work items
<a name="updateworkitems" />

```no-highlight
PATCH https://{instance}/DefaultCollection/_apis/wit/workitems/{id}?api-version={version}
```
```http
Content-Type: application/json-patch+json
```
```json
[
	{
		"op": "add",
		"path": { string }
		"value": { string or int, depending on the field }
	},
	{
		"op": "add",
		"path": "/relations/-",
		"value":
		{
			"rel": { string },
			"url": { string },
			"attributes":
			{
				{ name/value pairs }
			}
		}
	}
]
```

| Parameter         | Type 	                                |  Notes
|:------------------|:--------------------------------------|:-------------------------------------------------------------------
| URL
| instance          | string                                | TFS server name ({server:port}).
| id				| string                               	| ID of the work item to retrieve.
| Query
| api-version       | string                                | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body - field
| op				| enum { add, replace, remove, test }   | The operation to perform on the field. <br/>You can use add or replace to set the value of a field.<br/>Use remove to clear the value of the field.<br/>Use test to verify that the value is valid without actually saving the work item.
| path				| string                                | Path to the value you want to add, replace, remove, or test.<br/>For a field, use "/fields/{reference name}".
| value             | string or int, depending on the field | New value to set.
| Body - relation
| op				| enum { add, replace, remove, test }   | The operation to perform on the relation.<br/>Use test to verify that the relation is valid without actually saving the work item.
| path				| string                                | Path to the value you want to add, replace, remove, or test.<br/>For a specific relation, use "relations/Id".<br/>For all relations, use "/relations/-".
| value.rel			| string								| Type of the relationship. Examples include, work-item/hierarchy-forward, changeset, or attachment.<br/>Get the list of relations that a work item type supports using [relation types](./relation-types.md).
| value.url			| string								| URL of the item you are relating to the current work item.
| value.attributes	| array of name/value pairs				| Additional attributes of the relationship (e.g. comment, isLocked, etc.)

If any of the new field values or relations are not valid, or if the work item has been saved by someone else since the revision was retrieved, the work item will not be updated.

### Update a field
<a name="updateafield" />

[!code-REST [PATCH__wit_workitems__taskId__json](./_data/workitems/PATCH__wit_workitems__taskId_.json)]

#### Sample code

* [C# (ChangeFieldValue method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L316)

### Move work item
<a name="moveworkitem" />

> **API Availability**: Team Services only (not TFS)

In order to move a work item, we need to update 3 fields (System.TeamProject, System.AreaPath and System.IterationPath). The below example shows that a work item was moved to a destination project (Fabrikam-Scrum). 

[!code-REST [PATCH__wit_workitems__taskId__json](./_data/witChangeProjectAndType/PATCH__wit_workitems__bug1Id_.json)]

#### Sample code

* [C# (MoveToAnotherProject method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L356)


### Change work item type
<a name="changeworkitemtype" />

> **API Availability**: Team Services only (not TFS)

In order to change a work item type, we need to update the System.WorkItemType field as well as any required fields on the target work item type. In the sample request below a Bug work item was converted to a Task.

[!code-REST [PATCH__wit_workitems__taskId__json](./_data/witChangeProjectAndType/PATCH__wit_workitems__bug1Id_2.json)]

#### Sample code

* [C# (ChangeType method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L398)

### Add a tag
<a name="addatag" />

[!code-REST [PATCH__wit_workitems__taskId_9_json](./_data/workitems/PATCH__wit_workitems__taskId_9.json)]

#### Sample code

* [C# (AddTags method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L429)

### Add a link
<a name="addalink" />

[!code-REST [PATCH__wit_workitems__taskId_3_json](./_data/workitems/PATCH__wit_workitems__taskId_3.json)]

#### Sample code

* [C# (LinkToOtherWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L454)

### Update a link
<a name="updatealink" />

[!code-REST [PATCH__wit_workitems__taskId_4_json](./_data/workitems/PATCH__wit_workitems__taskId_4.json)]

#### Sample code

* [C# (UpdateLinkComment method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L487)

### Remove a link
<a name="removealink" />

[!code-REST [PATCH__wit_workitems__taskId_5_json](./_data/workitems/PATCH__wit_workitems__taskId_5.json)]

#### Sample code

* [C# (RemoveLink method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L517)

### Add an attachment
<a name="addanattachment" />

To attach a file to a work item,
[upload the attachment](./attachments.md#uploadanattachment) to the attachment store, then attach it to the work item.

[!code-REST [PATCH__wit_workitems__taskId_6_json](./_data/workitems/PATCH__wit_workitems__taskId_6.json)]

#### Sample code

* [C# (AddAttachment method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L547)

### Remove an attachment
<a name="removeanattachment" />

[!code-REST [PATCH__wit_workitems__taskId_7_json](./_data/workitems/PATCH__wit_workitems__taskId_7.json)]

#### Sample code

* [C# (RemoveAttachment method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L598)

### Add a hyperlink
<a name="addhyperlink" />

[!code-REST [PATCH__wit_workitems__taskId_8_json](./_data/workitems/PATCH__wit_workitems__taskId_8.json)]

#### Sample code

* [C# (UpdateWorkItemAddHyperLink method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L631)

### Make an update bypassing rules
<a name="updatebypassingrules" />

For scenarios, such as migration or synchronization tools, when you want to make changes to a work item that otherwise would be invalid, you may optionally choose to bypass the rules engine on a work item update.  This allows you to modify the work item fields without any restrictions, for example you can assign a work item to a user no longer in the organization.

To modify the System.CreatedBy, System.CreatedDate, System.ChangedBy, or System.ChangedDate fields, you must be a member of the "Project Collection Service Acccounts" group.

NOTE: System.CreatedBy and System.CreatedDate can only be modified using bypass rules on work item creation, i.e. the first revision of a work item.

[!code-REST [PATCH__wit_workitems__taskId__bypassRules-true_json](./_data/workitems/PATCH__wit_workitems__taskId__bypassRules-true.json)]

#### Sample code

* [C# (UpdateWorkItemUsingByPassRules method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L711)

## Delete a work item
<a name="deleteaworkitem" />

[!code-REST [DELETE__wit_workitems__taskID_json](./_data/workitems/DELETE__wit_workitems__taskId_.json)]

#### Sample code

* [C# (DeleteWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemsSample.cs#L732)

