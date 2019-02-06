---
title: VSS/References/SDK.Interfaces ContributionType API | Extensions for Azure DevOps Services
description: A contribution type, given by a json schema
ms.assetid: 0d52efa3-ec43-6dd7-1da8-2f0024d31aff
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# ContributionType

Defined in vss.d.ts


A contribution type, given by a json schema 

### Members

* `description`: string. 

* `id`: string. 

* `indexed`: boolean. Controls whether or not contributions of this type have the type indexed for queries. This allows clients to find all extensions that have a contribution of this type.  NOTE: Only TrustedPartners are allowed to specify indexed contribution types.

* `name`: string. Friendly name of the contribution/type

* `properties`: {[key: string]: [ContributionPropertyDescription](../../../VSS/References/SDK_Interfaces/ContributionPropertyDescription.md)}. Describes the allowed properties for this contribution type

