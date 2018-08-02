---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Service Connections Overview | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Overview of service connections API
ms.ContentId: 77294d8c-ba71-4755-85d4-27a97d8809ce
---

# Overview

[!INCLUDE [API_version](../_data/version3-preview1.md)]

* [Service Connection Types](./endpoint-types.md)
* [Service Connections](./endpoints.md)

## Permissions on service connections

### Service connections level

Each endpoint that is created will have two groups associated with it.

* __Endpoint Administrators__ have full access to the endpoint
* __Endpoint Readers__ will be able to view the endpoint and make queries 

## Project level

At project level, __Endpoint Creators__ are able to create new endpoints and __Endpoint Administrators__ are able to manage any endpoints.

The creator of the endpoint is automatically added to the __Endpoint Administrators__ group of that endpoint so that the creator can manage it.
