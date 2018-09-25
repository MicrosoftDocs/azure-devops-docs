---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Reporting Work Item Revisions | REST API Reference for Team Foundation Server
description: Report on work item revisions programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 4BE2F320-EF74-11E4-B774-1AF21D5D46B0
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item revisions
[!INCLUDE [API_version](../_data/version2-2.md)]

This API provides access to all work item revisions in your project or collection and allows you to build a warehouse.

The response of the API contains a batch of work item revisions ("values"), a URL to the next batch of work item revisions ("nextLink") and a boolean that tells you whether you have read all currently available work item revisions ("isLastBatch").

> The results of this API are impacted when using Move Work Item and/or Change Work Item Type features in conjunction with "project" in the url and/or "types" in the query string.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- Project-scoped requests will only return work item revisions from the specified project.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- Types-scoped requests will only return work item revisions of the specified type(s).

The workflow for building your warehouse is as follows:
  1. Make a request to the API without providing a continuationToken parameter
  2. Process the work item revisions returned by the API
  3. Persist "nextLink" and check "isLastBatch"
     * If "isLastBatch" is true, pause for a period of time (varies depending on your target latency)
  4. Make the next request using the URL from "nextLink"
  5. Go to step 2

## Sample Projects
[C# Example](https://github.com/sferg-msft/vsts-wit-reporting-example)

## Get a batch of work item revisions

```no-highlight
GET https://{instance}/DefaultCollection/[{project}/]_apis/wit/reporting/workItemRevisions?[continuationToken={string}]&[fields={string}]&[types={string}]&[includeIdentityRef={boolean}]&api-version={string}
```

| Property           | Type     | Description
|:-------------------|:---------|:----------------------------
| URL
| instance           | string   | TFS server name ({server:port}).
| project            | string   | Filters the results to work items in the specified project. The project can be specified by name or ID.
| Query
| continuationToken  | string   | Specifies the continuationToken to start the batch from. Omit this parameter to get the first batch of revisions.
| fields             | string   | A comma-separated list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
| types              | string   | A comma-separated list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
| includeIdentityRef | boolean  | Return an identity reference instead of a string value for identity fields.
| includeDeleted     | boolean  | Include deleted work items in the results.
| includeTagRef      | boolean  | Return a tag reference instead of a string value for the System.Tags field.
| includeLatestOnly  | boolean  | Return only the latest revision of work items.  
| startDateTime      | datetime | Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'continuationToken' parameter.
| $expand            | enum { fields, none } | Fields will return all fields.  Cannot be used in conjunction with the 'fields' parameter.
| api-version        | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### Example: get the first batch of work item revisions

[!code-REST [GET__wit_reporting_workItemRevisions__json](./_data/reportingWorkItemRevisions/GET__wit_reporting_workItemRevisions.json)]

### Example: get a batch of work item revisions with identity references

[!code-REST [GET__wit_reporting_workItemRevisions_includeIdentityRef-true_watermark-794](./_data/reportingWorkItemRevisions/GET__wit_reporting_workItemRevisions_includeIdentityRef-true_watermark-794.json)]

## Get a batch of work item revisions with a POST

This request may be used if your list of fields is large enough that it may run the URL over the length limit

```no-highlight
POST https://{instance}/DefaultCollection/[{project}/]_apis/wit/reporting/workItemRevisions?[continuationToken={string}]&api-version={string}
```
```http
Content-type: Application/json
```
```json
{
	"types": [ string ],
	"fields": [ string ],
	"includeIdentityRef": [ boolean ]
}
```

| Property           | Type             | Description 
|:-------------------|:-----------------|:----------------------------
| URL
| instance           | string           | TFS server name ({server:port}).
| project            | string           | Filters the results to work items in the specified project.
| Query
| continuationToken  | string           | Specifies the continuationToken to start the batch from. Omit this parameter to get the first batch of revisions.
| startDateTime      | datetime         | Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'continuationToken' parameter.
| $expand            | enum { fields, none } | Fields will return all fields.  Cannot be used in conjunction with the 'fields' parameter.
| api-version        | string           | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| fields             | array of strings | Fields to return in work item revisions. Omit this parameter to get all reportable fields.
| types              | array of strings | Types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
| includeIdentityRef | boolean          | Return an identity reference instead of a string value for identity fields.
| includeDeleted     | boolean  | Include deleted work items in the results.
| includeTagRef      | boolean  | Return a tag reference instead of a string value for the System.Tags field.
| includeLatestOnly  | boolean  | Return only the latest revision of work items.  

[!code-REST [POST__wit_reporting_workItemRevisions_watermark-794.json](./_data/reportingWorkItemRevisions/POST__wit_reporting_workItemRevisions_watermark-794.json)]
