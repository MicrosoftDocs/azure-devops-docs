---
title: Release Views | REST API Reference for VSTS
description: Work with release views programmatically using the REST APIs for VSTS .
ms.assetid: AED5CC40-4B11-447E-BAE6-D9806687736E
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.date: 10/10/2016
---

# Release views

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get release views

```httprequest
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| feed      | string  | Name or ID of the feed.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/fabrikam/views?api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": "3d80c2b2-aa5a-4e10-bca9-4775c6e37b04",
      "name": "Prerelease",
      "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/3d80c2b2-aa5a-4e10-bca9-4775c6e37b04",
      "type": "release",
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/3d80c2b2-aa5a-4e10-bca9-4775c6e37b04"
        },
        "feed": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40"
        },
        "packages": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40@3d80c2b2-aa5a-4e10-bca9-4775c6e37b04/Packages"
        }
      }
    },
    {
      "id": "e7d6aa9e-27e6-4e42-b65e-9cb4781628a9",
      "name": "Release",
      "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/e7d6aa9e-27e6-4e42-b65e-9cb4781628a9",
      "type": "release",
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/e7d6aa9e-27e6-4e42-b65e-9cb4781628a9"
        },
        "feed": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40"
        },
        "packages": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40@e7d6aa9e-27e6-4e42-b65e-9cb4781628a9/Packages"
        }
      }
    }
  ]
}
```


## Get a release view

```httprequest
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views/{view}?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| feed        | string | Name or ID of the feed.
| view        | string | Name or ID of the release view.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/fabrikam/views/Alpha?api-version=3.0-preview
```

#### Sample response

```json
{
  "id": "b0024744-d616-41f3-af01-34eb4d33efe5",
  "name": "Alpha",
  "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/b0024744-d616-41f3-af01-34eb4d33efe5",
  "type": "release",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/b0024744-d616-41f3-af01-34eb4d33efe5"
    },
    "feed": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40"
    },
    "packages": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40@b0024744-d616-41f3-af01-34eb4d33efe5/Packages"
    }
  }
}
```



## Create a release view
Release view names are limited to 64 characters and can only contain alphanumeric characters.

```httprequest
POST https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| feed        | string | Name or ID of the feed.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string | Name of the release view to be created.
| type        | string | Type of the release view to be created, currently only "release" views are supported.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/packaging/feeds/fabrikam/views?api-version=3.0-preview
```
```json
{
  "name": "Alpha",
  "type": "release"
}
```

#### Sample response

```json
{
  "id": "b0024744-d616-41f3-af01-34eb4d33efe5",
  "name": "Alpha",
  "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/b0024744-d616-41f3-af01-34eb4d33efe5",
  "type": "release",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/b0024744-d616-41f3-af01-34eb4d33efe5"
    },
    "feed": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40"
    },
    "packages": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40@b0024744-d616-41f3-af01-34eb4d33efe5/Packages"
    }
  }
}
```


## Update a release view

```httprequest
PATCH https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views/{view}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| feed        | string | Name or ID of feed to be updated.
| view        | string | Name or ID of the release view to be updated.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string | Updated name of the release view.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/packaging/feeds/fabrikam/views/Alpha?api-version=3.0-preview
```
```json
{
  "name": "Beta"
}
```

#### Sample response

```json
{
  "id": "b0024744-d616-41f3-af01-34eb4d33efe5",
  "name": "Beta",
  "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/b0024744-d616-41f3-af01-34eb4d33efe5",
  "type": "release",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40/Views/b0024744-d616-41f3-af01-34eb4d33efe5"
    },
    "feed": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40"
    },
    "packages": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/8c2a4e66-9205-4a9b-8bd1-16799a65fb40@b0024744-d616-41f3-af01-34eb4d33efe5/Packages"
    }
  }
}
```


## Delete a release view

```httprequest
DELETE https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views/{view}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| feed        | string | Name or ID of the feed to be deleted.
| view        | string | Name or ID of the release view to be deleted.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/packaging/feeds/fabrikam/views/Beta?api-version=3.0-preview
```

