---
title: TFS/DistributedTask/Contracts TaskDefinitionEndpoint API | Extensions for Azure DevOps Services
ms.assetid: f7aca1ca-9898-26b4-c0c0-538a23089553
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TaskDefinitionEndpoint

Module path: `TFS/DistributedTask/Contracts`


### Members

* `connectionId`: string. An ID that identifies a service endpoint to be used for authenticating endpoint requests.

* `keySelector`: string. An Json based keyselector to filter response returned by fetching the endpoint Url.A Json based keyselector must be prefixed with &quot;jsonpath:&quot;. KeySelector can be used to specify the filter to get the keys for the values specified with Selector.  The following keyselector defines an Json for extracting nodes named &#x27;ServiceName&#x27;.  endpoint.KeySelector = &quot;jsonpath://ServiceName&quot;;

* `scope`: string. The scope as understood by Connected Services. Essentially, a project-id for now.

* `selector`: string. An XPath/Json based selector to filter response returned by fetching the endpoint Url. An XPath based selector must be prefixed with the string &quot;xpath:&quot;. A Json based selector must be prefixed with &quot;jsonpath:&quot;.  The following selector defines an XPath for extracting nodes named &#x27;ServiceName&#x27;.  endpoint.Selector = &quot;xpath://ServiceName&quot;;

* `taskId`: string. TaskId that this endpoint belongs to.

* `url`: string. URL to GET.

