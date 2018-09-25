---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Items | REST API Reference for Team Foundation Server
description: Work with Git items (files and folders) programmatically using the REST APIs for Team Foundation Server.
ms.assetid: B9F8F05A-1852-49CE-8B3E-75A30D41487A
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git items
[!INCLUDE [API_version](../_data/version.md)]

Items are the files, folders, and submodules in a repository.
Files are [blobs](./blobs.md) in the API and folders are [trees](./trees.md).
If the repository contains [submodules](https://git-scm.com/docs/git-submodule), they will appear as [commits](./commits.md).

![Items are blobs and trees](./_img/git-items.png)

There are [code samples](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/repos/git/ItemsSample.cs) available for this endpoint.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Types of data

This API does content negotiation based on the `Accept` header you send.

| `Accept` header value      | API behavior
|:---------------------------|:------------
| `application/zip`          | Returns zipped contents of the item requested
| `application/json`         | Returns metadata about the item
| `text/plain` or other      | Return contents of the item requested; ignores requests for recursion

## Get a file
<a name="afile" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/items?api-version={version}&scopePath={filePath}[&includeContentMetadata={bool}&lastProcessedChange={bool}]
```

| Parameter              | Type    | Default | Notes
|:-----------------------|:--------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance               | string  |         | [VS Team Services account](../../get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](/azure/devops/integrate/get-started/rest/basics) ({server:port}).
| project                | string  |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository             | string  |         | ID or name of the [repository](./repositories.md).
| Query
| api-version            | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| scopePath              | string  | /       | Path to the item in the repository. `/WebSite/WebSite/Views/Home/_Home.cshtml`
| includeContentMetadata | bool    | false   | Use `true` to include additional metadata about the item content, like the file type.
| latestProcessedChange  | bool    | false   | `true` gets the [commit](./commits.md) that contains the previous change to the retrieved version of the item. Of course, the root item ("/") has no commits associated with it, so there will not be a commit returned with the root item.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### Stream a file
<a name="streamafile" />

When you get an item that is a file, the response is a stream (`application/octet-stream`) that contains the contents of the file. You can also get a [specific version](#getaspecificversion) of an item. 

####Sample request
```no-highlight
GET http://fabrikam-fiber-inc:8080/DefaultCollection/Fabrikam-Fiber-Git/_apis/repos/git/repositories/Fabrikam-Fiber-Git/items?scopePath=/WebSite/WebSite/Views/Home/_Home.cshtml&api-version=1.0
```
####Sample response

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
#####Status code: 200

### Zip a folder
<a name="zipafolder" />

Set `scopePath` to the folder that you want to get in a zipped format and include the request header `Accept: application/zip`.

####Sample request
```http
Accept: application/zip
```
```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/items?api-version={version}&scopePath={folderPath}
```

You can get a .zip file that contains the contents of a [specific version](#getaspecificversion) of folder, too.

## Get item metadata for

### A file

Set the accept header to `application/json` to get the metadata for a file, or for a [specific version](#getaspecificversion) of a file.

####Sample request

```http
Accept: application/json
```
```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/items?api-version={version}&scopepath=/mywebsite/mywebsite/views/home/_home.cshtml
```

####Response
The objectId in the metadata is the SHA1 hash of the item.

#####Status code: 200
```json
{
  "count": 1,
  "value": [
    {
      "objectId": "61a86fdaa79e5c6f5fb6e4026508489feb6ed92c",
      "gitObjectType": "blob",
      "commitId": "03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "path": "/MyWebSite/MyWebSite/Views/Home/_Home.cshtml"
    }
  ]
}
```
### A folder
<a name="afolder" />

When you get an item that is a folder, the default response is the metadata (`application/json`).
You can get the metadata for a [specific version](#getaspecificversion) of a folder, too.

[!code-REST [GET__git_repositories__repositoryId__items_scopePath-_folderPath__json](./_data/items/GET__git_repositories__repositoryId__items_scopePath-_folderPath_.json)]

### A folder and its children
<a name="afolderanditschildren" />

Use `recursionLevel` (and an appropriate `Accept` header) to include the contents of the folder in the response.
You can get the contents of a [specific version](#getaspecificversion) of the folder, too.

[!code-REST [GET__git_repositories__repositoryId__items_scopePath-_folderPath__recursionLevel-Full_includeContentMetadata-true_json](./_data/items/GET__git_repositories__repositoryId__items_scopePath-_folderPath__recursionLevel-Full_includeContentMetadata-true.json)]

### Multiple items
To get more than one item in a single batch, specify the path of each item in an array of item descriptors in the post body.
You can specify the [version](#getaspecificversion) and [recursion level](#mutlipleitems) for each item, too.

[!code-REST [POST__git_repositories__repositoryId__itemsBatch_json](./_data/items/POST__git_repositories__repositoryId__itemsBatch.json)]

## Get a specific version
<a name="getaspecificversion" />

You can indicate which version to get when you get a file, zip a folder, or get item metadata.

| Parameter      | Type                                       | Default
|:---------------|:-------------------------------------------|:---------|
| URL
| versionType    | enum { branch, commit, tag }               | branch
| version        | string                                     | master
| versionOptions | enum { firstParent, previousChange, None } | None
| Query
| api-version    | string                                     | [Version](../../concepts/rest-api-versioning.md) of the API to use.

Use the `versionType` and `version` parameters together.
For example, to get an item from "mybranch", use `versionType=branch&version=mybranch`.

| If `versionType` is... | `Version` is interpreted as...
|:-----------------------|:--------------------------------
| Branch                 | The name of a branch.
| Tag                    | The name of a tag.
| Commit                 | The ID of a commit.

You can also modify the version with the `versionOptions` parameter.

| Value          | Effect
|:---------------|:----------------------------------------------------------------------------------------------------------------------------
| firstParent    | The parent branch to the version specified by the `versionType` and `version` parameters.
| previousChange | The last version of the item that was changed prior to the version specified by the `versionType` and `version` parameters.
| None           | No modification to the version specified by the `versionType` and `version` parameters.

When you specify a version with [recursion](#afolderanditschildren), the version is applied to the item and its children.

