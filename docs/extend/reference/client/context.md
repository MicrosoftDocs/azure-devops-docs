---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: Web Context | Extensions for VSTS
description: Context data avaialble in your web extensions 
ms.assetid: b926a050-1e70-4907-8963-e4f2ee9939e5
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Web context

The `core SDK` provides an API for getting context information, for example the current project's ID (if your extension is operating at a project or team level).



### Usage


#### Example

```
{
    "id": "my-extension",
    ...
    "baseUri": "https://{{account.name}}.myservice.com/my-extension/{{project.id}}"
}
```

### Full JSON example

```json
{
    "user": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "name": "Norman Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "uniqueName": "fabrikamfiber16@hotmail.com"
    },
    "team": {
        "id": "a63ff425-76b0-4dac-9b81-b265fb361da4",
        "name": "Quality assurance",
        "userIsMember": true,
        "userIsAdmin": true
    },
    "project": {
        "id": "c501f0f0-9dca-40a3-ac5a-4d2d9a4a1825",
        "name": "Fabrikam-Fiber-Git"
    },
    "collection": {
        "id": "7696cd7b-25fd-4378-b5f2-7c97228ee542",
        "name": "DefaultCollection",
        "uri": "https://fabrikam.visualstudio.com/DefaultCollection/",
        "relativeUri": "/DefaultCollection/"
    },
    "account": {
        "id": "dab4b99d-4317-4b8a-98b8-f02ecaceb5b4",
        "name": "fabrikam",
        "uri": "https://fabrikam.visualstudio.com/",
        "relativeUri": "/"
    },
    "host": {
        "id": "7696cd7b-25fd-4378-b5f2-7c97228ee542",
        "name": "DefaultCollection",
        "uri": "https://fabrikam.visualstudio.com/DefaultCollection/",
        "relativeUri": "/DefaultCollection/",
        "hostType": "projectCollection",
        "scheme": "https",
        "authority": "fabrikam.visualstudio.com"
    }
}
```

