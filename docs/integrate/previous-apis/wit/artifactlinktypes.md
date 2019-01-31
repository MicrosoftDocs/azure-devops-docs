---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work item tracking artifact link types | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 04/20/2017
---

# Work item tracking artifact link types

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-2-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

<a name="ArtifactLinkTypes"></a>

## Get work item tracking artifact links
Get the list of work item tracking outbound artifact link types. ArtifactUris are either hyperlinks or in the format vstfs:///{toolType}/{artifactType}/{artifactId} 

```no-highlight
GET https://{instance}/_apis/wit/artifactlinktypes?api-version={version}
```

#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/artifactlinktypes?api-version=3.2-preview
```

#### Sample response

```json
{
  "count": 16,
  "value": [
    {
      "toolType": "Git",
      "artifactType": "Branch",
      "linkType": "Branch"
    },
    {
      "toolType": "Build",
      "artifactType": "Build",
      "linkType": "Build"
    },
    {
      "toolType": "VersionControl",
      "artifactType": "Changeset",
      "linkType": "Fixed in Changeset"
    },
    {
      "toolType": "Git",
      "artifactType": "Commit",
      "linkType": "Fixed in Commit"
    },
    {
      "toolType": "Build",
      "artifactType": "Build",
      "linkType": "Found in build"
    },
    {
      "toolType": "Build",
      "artifactType": "Build",
      "linkType": "Integrated in build"
    },
    {
      "toolType": "ArchitectureTools",
      "artifactType": "ModelLink",
      "linkType": "Model Link"
    },
    {
      "toolType": "Git",
      "artifactType": "PullRequestId",
      "linkType": "Pull Request"
    },
    {
      "toolType": "WorkItemTracking",
      "artifactType": "Workitem",
      "linkType": "Related Workitem"
    },
    {
      "toolType": "TestManagement",
      "artifactType": "TcmResultAttachment",
      "linkType": "Result Attachment"
    },
    {
      "toolType": "VersionControl",
      "artifactType": "LatestItemVersion",
      "linkType": "Source Code File"
    },
    {
      "toolType": "Requirements",
      "artifactType": "Storyboard",
      "linkType": "Storyboard"
    },
    {
      "toolType": "Git",
      "artifactType": "Tag",
      "linkType": "Tag"
    },
    {
      "toolType": "TestManagement",
      "artifactType": "TcmTest",
      "linkType": "Test"
    },
    {
      "toolType": "TestManagement",
      "artifactType": "TcmResult",
      "linkType": "Test Result"
    },
    {
      "toolType": "WorkItemTracking",
      "artifactType": "Hyperlink",
      "linkType": "Workitem Hyperlink"
    }
  ]
}
```
