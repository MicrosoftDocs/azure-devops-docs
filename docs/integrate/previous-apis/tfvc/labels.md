---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: TFVC Labels | REST API Reference for Team Foundation Server
description: Work with TFVC labels programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 6E87D313-19A9-4271-AB5B-4B4CA1ADA9BA
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Labels
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get list of labels

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/labels?api-version={version}[&name={srtring}&owner={string}&itemLabelFilter={string}&$top={int}&$skip={int}]
```

| Parameter       | Type   | Default | Notes
|:----------------|:-------|:--------|:------
| URL
| instance        | string |         | TFS server name ({server:port}).
| Query
| api-version     | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| name            | string |         | Name of the label.<br/>Wildcards are supported.
| owner           | string |         | Display name, unique name, or ID of the label owner.
| itemLabelFilter | string |         | Path of item that has these labels.
| $top            | int    | 100     | Maximum number of labels to return.
| $skip           | int    | 0       | Number of labels to skip.

[!code-REST [GET__tfvc_labels_json](./_data/labels/GET__tfvc_labels.json)]

### By name
[!code-REST [GET__tfvc_labels_name-_name__json](./_data/labels/GET__tfvc_labels_name-_name_.json)]

### By person
[!code-REST [GET__tfvc_labels_owner-_person__json](./_data/labels/GET__tfvc_labels_owner-_person_.json)]

### By item
[!code-REST [GET__tfvc_labels_itemLabelFilter-_item__json](./_data/labels/GET__tfvc_labels_itemLabelFilter-_item_.json)]

### A page at a time
[!code-REST [GET__tfvc_labels__skip-_skip___top-_top__json](./_data/labels/GET__tfvc_labels__skip-_skip___top-_top_.json)]

## Get label
Retrieves details for a label. A list of items under this label can be included by setting maxItemCount to a positive integer. 

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/labels/{labelId}?api-version={version}[&maxItemCount={int}]
```

| Parameter    | Type   | Default | Notes
|:-------------|:-------|:--------|:------
| URL
| instance     | string |         | TFS server name ({server:port}).
| labelId      | int    |         | ID of label.
| Query
| api-version  | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| maxItemCount | int    | 0       | Maximum number of labeled items to return.

[!code-REST [GET__tfvc_labels__labelId__json](./_data/labels/GET__tfvc_labels__labelId_.json)]

### With items

[!code-REST [GET__tfvc_labels__labelId__maxItemCount-100_json](./_data/labels/GET__tfvc_labels__labelId__maxItemCount-100.json)]

## Get list of labelled items

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/labels/{labelId}/items?api-version={version}[&$top={int}&$skip={int}]
```

| Parameter    | Type   | Default | Notes
|:-------------|:-------|:--------|:------
| URL
| instance     | string |         | TFS server name ({server:port}).
| labelId      | int    |         | ID of the label.
| Query
| Query
| api-version  | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top         | int    | 100     |  Maximum number of items to return.
| $skip        | int    | 0       |  Number of items to skip.

[!code-REST [GET__tfvc_labels__labelId__items_json](./_data/labels/GET__tfvc_labels__labelId__items.json)]

### A page at a time

[!code-REST [GET__tfvc_labels__labelId__items__top-_top___skip-_skip__json](./_data/labels/GET__tfvc_labels__labelId__items__top-_top___skip-_skip_.json)]

