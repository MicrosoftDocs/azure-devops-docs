---
title: Cross-origin resource sharing (CORS) with VSTS REST APIs
description: Learn about using CORS with VSTS and TFS REST APIs
ms.assetid: d7e3c119-5678-40e6-9c11-55a57c171278
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: douge
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Cross-origin resource sharing (CORS)

VSTS supports CORS. This enables JavaScript code served from a domain other than *.visualstudio.com to make Ajax requests to VSTS REST APIs. For this to work, each request must provide credentials (personal access tokens and OAuth access tokens are both supported options). Example:

```js
    $( document ).ready(function() {
        $.ajax({
            url: 'https://fabrikam.visualstudio.com/defaultcollection/_apis/projects?api-version=1.0',
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