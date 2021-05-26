---
title: Cross-origin resource sharing (CORS) with Azure DevOps REST APIs
description: Learn about using CORS with Azure DevOps REST APIs
ms.assetid: d7e3c119-5678-40e6-9c11-55a57c171278
ms.technology: devops-ecosystem
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 08/04/2016
---

# Cross-origin resource sharing (CORS)

[!INCLUDE [version-all](../../includes/version-vsts-only.md)]

Azure DevOps supports cross-origin resource sharing (CORS). CORS enables JavaScript code served from a domain other than `dev.azure.com/*` to make Ajax requests to Azure DevOps Services REST APIs. For this to work, each request must provide credentials (personal access tokens and OAuth access tokens are both supported options). Example:

```js
    $( document ).ready(function() {
        $.ajax({
            url: 'https://dev.azure.com/fabrikam/_apis/projects?api-version=1.0',
            dataType: 'json',
            headers: {
                'Authorization': 'Basic ' + btoa("" + ":" + myPatToken)
            }
        }).done(function( results ) {
            console.log( results.value[0].id + " " + results.value[0].name );
        });
    });
```

(replace `myPatToken` with a personal access token) 
