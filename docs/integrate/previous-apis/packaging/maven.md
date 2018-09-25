---
title: Maven | REST API Reference for VSTS
description: Work with Maven packages programmatically using the REST APIs for VSTS.
ms.assetid:
ms.manager: andrusj
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 02/10/2017
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
---
# Maven

[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

## Get version list of the package

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feed                  | string  |           | Name or ID of the feed.
| groupId               | string  |           | Group Id of the package
| artifactId            | string  |           | Artifact Id of the package.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

```no-highlight
GET https://{account}.pkgs.visualstudio.com/_apis/packaging/feeds/{feed}/maven/{groupId}/{artifactId}?api-version={api-version}
```

[!code-REST [GET__packaging_feeds__feedName__maven__groupId__artifactId__ ](./_data/maven/GET__packaging_feeds__feedName__maven__groupId__artifactId__ .json)]

## Get package info

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feed                  | string  |           | Name or ID of the feed.
| groupId               | string  |           | Group Id of the package
| artifactId            | string  |           | Artifact Id of the package.
| version               | string  |           | Version of the package.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

```no-highlight
GET https://{account}.pkgs.visualstudio.com/_apis/packaging/feeds/{feed}/maven/{groupId}/{artifactId}/{version}?api-version={api-version}
```

[!code-REST [GET__packaging_feeds__feedName__maven__groupId__artifactId__version__](./_data/maven/GET__packaging_feeds__feedName__maven__groupId__artifactId__version__.json)]

## Verify package file 

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feed                  | string  |           | Name or ID of the feed.
| groupId               | string  |           | Group Id of the package
| artifactId            | string  |           | Artifact Id of the package.
| version               | string  |           | Version of the package.
| fileName              | string  |           | Name of the file to verify.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

```no-highlight
GET https://{account}.pkgs.visualstudio.com/_apis/packaging/feeds/{feed}/maven/{groupId}/{artifactId}/{version}/{fileName}?api-version={api-version}
```

[!code-REST [GET__packaging_feeds__feedName__maven__groupId__artifactId__version__fileName__](./_data/maven/GET__packaging_feeds__feedName__maven__groupId__artifactId__version__fileName__.json)]

## Get package info with POM metadata

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feed                  | string  |           | Name or ID of the feed.
| groupId               | string  |           | Group Id of the package
| artifactId            | string  |           | Artifact Id of the package.
| version               | string  |           | Version of the package.
| includePom            | bool    |           | Indicates if pom metadata should be included in response or not.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

```no-highlight
GET https://{account}.pkgs.visualstudio.com/_apis/packaging/feeds/{feed}/maven/{groupId}/{artifactId}/{version}?includePom=true&api-version={api-version}
```

[!code-REST [GET__packaging_feeds__feedName__maven__groupId__artifactId__version__fileName__](./_data/maven/GET__packaging_feeds__feedName__maven__groupId__artifactId__version__pom__.json)]
