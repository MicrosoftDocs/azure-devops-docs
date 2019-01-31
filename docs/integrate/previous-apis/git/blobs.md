---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Blobs | REST API Reference for Team Foundation Server
description: Work with Git blobs programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 681BE5A9-6228-4A4B-AD90-0E79277394B9
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git blobs

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Blobs are files in the Git repository.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a blob

When you get an blob, by default the response is a stream (`application/octet-stream`) that contains the contents of the file.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/blobs/{objectId}?api-version={version}[&download={bool}&fileName={string}]
```

| Parameter  | Type    | Default   | Notes
|:-----------|:--------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string  |           | TFS server name ({server:port}).
| project    | string  |           | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string  |           | ID of the [repository](./repositories.md).
| objectId   | string  |           | SHA1 hash of the file. You can get the objectId of a file by [getting its metadata](./items.md#afile).
| Query
| api-version| string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $format    | enum    | Accept header | Options: ```json```, ```zip```, ```text```, ```octetstream```. If not set, defaults to the MIME type set in the Accept header.
| download   | bool    | false     | If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is ```zip```
| fileName   | string  | object ID | Provide a fileName to use for a download.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### The metadata

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/blobs/61a86fdaa79e5c6f5fb6e4026508489feb6ed92c?api-version=1.0
```

#### Sample response

```json
{
  "objectId": "61a86fdaa79e5c6f5fb6e4026508489feb6ed92c",
  "size": 1486,
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/blobs/61a86fdaa79e5c6f5fb6e4026508489feb6ed92c",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/blobs/61a86fdaa79e5c6f5fb6e4026508489feb6ed92c"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249"
    }
  }
}
```


###In a stream

####Sample request
```no-highlight
GET https://fabrikam.VisualStudio.com/DefaultCollection/_apis/repos/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/blobs/f5dd7df5872eae8c39c9491f67d856dafd609683?api-version=1.0&$format=octetstream
```

####Sample response
```html
<div class="jumbotron">
    <h1>ASP.NET</h1>
    <p class="lead">ASP.NET is a free web framework for building great Web sites and Web applications using HTML, CSS, and JavaScript.</p>
    <p><a href="http://asp.net" class="btn btn-primary btn-large">Learn more &raquo;</a></p>
</div>
<div class="row">
    <div class="col-md-4">
        <h2>Getting started</h2>
        <p>
            ASP.NET Single Page Application (SPA) helps you build applications that include significant client-side interactions using HTML, CSS, and JavaScript.
            It's now easier than ever before to getting started writing highly interactive web applications.
        </p>
        <p><a class="btn btn-default" href="http://go.microsoft.com/fwlink/?LinkId=273732">Learn more &raquo;</a></p>
    </div>
    <div class="col-md-4">
        <h2>Get more libraries</h2>
        <p>NuGet is a free Visual Studio extension that makes it easy to add, remove, and update libraries and tools in Visual Studio projects.</p>
        <p><a class="btn btn-default" href="http://go.microsoft.com/fwlink/?LinkId=301866">Learn more &raquo;</a></p>
    </div>
    <div class="col-md-4">
        <h2>Web Hosting</h2>
        <p>You can easily find a web hosting company that offers the right mix of features and price for your applications.</p>
        <p><a class="btn btn-default" href="http://go.microsoft.com/fwlink/?LinkId=301867">Learn more &raquo;</a></p>
    </div>
</div>
```
#####Status code: 200


### In a downloadable .zip file

```no-highlight
GET https://fabrikam.VisualStudio.com/DefaultCollection/_apis/repos/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/blobs/f5dd7df5872eae8c39c9491f67d856dafd609683?api-version=1.0&download=true&$format=zip&filename=myfiles.zip
```

