---
title: OData batch support 
titleSuffix: Azure DevOps Services 
description: Guidelines for extension developers who want to learn how to write good OData queries 
ms.prod: devops
ms.technology: devops-analytics
ms.manager: douge
ms.reviewer: prprice
ms.author: kaelli
author: KathrynEE
ms.topic: overview
ms.date: 11/13/2017
---

# OData batch support


[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

Batch requests are part of the OData spec, and the Analytics service for Azure DevOps provides limited support, as a means to submit large requests. For more information about batch operations in OData see section [11.7 Batch Requests](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752313) of the OData spec.

[!INCLUDE [temp](../_shared/analytics-preview.md)]

## The Analytics $batch endpoint
The $batch endpoint is located at ```https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/$batch```. Note that the $batch endpoint is not available with a project scope, but the queries within a batch can contain project scoping.

### Supported $batch operations
The OData spec allows for numerous operations per $batch request, however the Analytics service limits each $batch request to a single query. The Analytics $batch endpoint is also read-only, no change sets may be published to it.

### When to use $batch queries
Use $batch requests when you are in danger of exceeding the browser's limit on URL length. Many modern browsers have these limits and exceeding them can result in undesirable behavior. Using a $batch request allows long queries to be issued against the Analytics service as the OData query is delivered in a POST body. You may use $batch requests for all your queries, though GET requests are slightly faster.

## $batch request example
### Request
URL: ```https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/$batch```  
Content-Type: ```multipart/mixed; boundary=batch_2af9a11e-9dec-4266-a3ab-0db9d10fb55a```  
Request payload:
```
--batch_1af9a11e-9dec-4266-a3ab-0db9d10fb55a
Content-Type: application/http
Content-Transfer-Encoding: binary

GET https://{OrganizationName}.analytics.vsts.me/_odata/{version}/Users?$filter=UserEmail eq 'john.smith@contoso.com'&$select=UserId,UserSK,UserName HTTP/1.1
Accept: application/json

--batch_1af9a11e-9dec-4266-a3ab-0db9d10fb55a
```
### Response
Status code: ```200```  
Response body:  
```
--batchresponse_0cc7749e-dcec-4b5e-9380-eb05859fe733
Content-Type: application/http
Content-Transfer-Encoding: binary

HTTP/1.1 200 OK
Content-Type: application/json; odata.metadata=minimal; odata.streaming=true
OData-Version: 4.0

{"@odata.context":"https://{OrganizationName}.analytics.vsts.me/_odata/{version}/$metadata#Users(UserId,UserSK,UserName)","value":[{"UserId":"04713655-3724-6024-b9a4-f0b1c6202dbc","UserSK":"04713655-3724-6024-b9a4-f0b1c6202dbc","UserName":"John Smith"}]}
--batchresponse_0cc7749e-dcec-4b5e-9380-eb05859fe733--
```
