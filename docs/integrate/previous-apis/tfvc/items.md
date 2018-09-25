---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: TFVC Items | REST API Reference for Team Foundation Server
description: Work with TFVC items programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 35C86B30-7BAA-45C8-B9A3-CFA560B1CDA7
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Version control items
[!INCLUDE [API_version](../_data/version.md)]

Items are the files and folders in Team Foundation version control.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a file
<a name="getafile" />

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/items/{path}?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| path      | string  | Path to the file in TFVC. `$/Fabrikam-Fiber-TFVC/WebSite/WebSite/Views/Home/_Home.cshtml`
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

When you specify the path of file in the URL, the response contains the contents of the file. You can also get a [specific version](#getaspecificversion) of an item. 

###Using path as query parameter
The path can be specified as a query parameter as well.  
This format should be used for certain files (like web.config) that are not accessible by using the path as part of the URL due to the default ASP .NET protection. 

####Request
```
GET http://fabrikam-fiber-inc:8080/DefaultCollection/_apis/tfvc/items?path=$/Fabrikam-Fiber-TFVC/WebSite/WebSite/web.config&api-version={version}
```
####Response
#####Status code: 200
```
<?xml version="1.0"?>
<configuration>
    <system.web>
      <compilation debug="true" targetFramework="4.5.2" />
      <httpRuntime targetFramework="4.5.2" />
    </system.web>
</configuration>
```

####Request
```
GET http://fabrikam-fiber-inc:8080/DefaultCollection/_apis/tfvc/items/$/Fabrikam-Fiber-TFVC/WebSite/WebSite/Views/Home/_Home.cshtml?api-version={version}
```
####Response
#####Status code: 200
```
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

## Get item metadata for

### A file

Specify the path to the file using the `scopePath` parameter to get the metadata for that file, or for a [specific version](#getaspecificversion) of the file.

####Sample request

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/items?scopePath=/$/Fabrikam-Fiber-inc/AuthSample/AuthSample.sln?api-version={version}
```

####Response
#####Status code: 200
```json
{
  "count": 1,
  "value": [
    {
      "version": 5,
      "changeDate": "2014-03-19T17:23:59.697Z",
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample/AuthSample.sln"
    }
  ]
}
```
### A folder

[!code-REST [GET__tfvc_items_scopePath-_folder__json](./_data/items/GET__tfvc_items_scopePath-_folder_.json)]

You can get the metadata for a [specific version](#getaspecificversion) of a folder, too.

### A folder and its children
<a name="afolderanditschildren" />

Use `recursionLevel` to include the contents of the folder in the response. You can get the contents of a [specific version](#getaspecificversion) of the folder, too.

[!code-REST [GET__tfvc_items_scopePath-_folder__recursionLevel-_recursionLevel__json](./_data/items/GET__tfvc_items_scopePath-_folder__recursionLevel-_recursionLevel_.json)]

### Multiple items
To get more than one item in a single batch, specify the path of each item in an array of item descriptors in the post body. You can specify the [version](#getaspecificversion) and [recursion level](#mutlipleitems) for each item, too.

[!code-REST [POST__tfvc_itemBatch_json](./_data/items/POST__tfvc_itembatch.json)]

## Get a specific version
<a name="getaspecificversion" />

You can indicate which version to get when you get a file, zip a folder, or get item metadata.

| Parameter      | Type                                                                  | Default
|:---------------|:----------------------------------------------------------------------|:---------
| versionType    | enum { Branch, Changeset, Shelveset, Change, Date, MergeSource, Latest} | Branch
| version        | string                                                                | master
| versionOptions | enum { None, Previous, UseRename }                                    | None

Use the `versionType` and `version` parameters together.
For example, to get an item from "mybranch", use `versionType=branch&version=mybranch`.

| If `versionType` is... | `Version` is interpreted as...
|:-----------------------|:--------------------------------
| Changeset              | ID of a changeset.
| Shelveset              | ID of a shelveset.
| Change                 | ID of a change.
| Date                   | At this time.
| MergeSource            | ID of the changeset that is the source of the merge.
| Latest                 | n/a

You can also modify the version with the `versionOptions` parameter.

| Value          | Effect
|:---------------|:----------------------------------------------------------------------------------------------------------------------------
| UseRename      | 
| Previous       | The last version of the item that was changed prior to the version specified by the `versionType` and `version` parameters.
| None           | No modification to the version specified by the `versionType` and `version` parameters.

When you specify a version with [recursion](#afolderanditschildren), the version is applied to the item and its children.

