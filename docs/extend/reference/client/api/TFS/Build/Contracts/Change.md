---
title: TFS/Build/Contracts Change API | Extensions for Azure DevOps Services
description: Represents a change associated with a build.
ms.assetid: ce66a017-4343-3e06-3d07-21f20bb6f36d
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# Change

Module path: `TFS/Build/Contracts`


### Members

* `author`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). The author of the change.

* `displayUri`: string. The location of a user-friendly representation of the resource.

* `id`: string. Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.

* `location`: string. The location of the full representation of the resource.

* `message`: string. A description of the change. This might be a commit message or changeset description.

* `messageTruncated`: boolean. Indicates whether the message was truncated

* `timestamp`: Date. A timestamp for the change.

* `type`: string. The type of change. &quot;commit&quot;, &quot;changeset&quot;, etc.

