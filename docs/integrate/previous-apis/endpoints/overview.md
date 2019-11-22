---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Service Endpoints Overview | REST API Reference for Team Foundation Server
description: Overview of service endpoints API
ms.ContentId: 77294d8c-ba71-4755-85d4-27a97d8809ce
---

# Overview

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


[!INCLUDE [API_version](../_data/version3-preview1.md)]

* [Service Endpoint Types](./endpoint-types.md)
* [Service Endpoints](./endpoints.md)

## Permissions on service endpoints

### Service endpoints level

Each endpoint that is created will have two groups associated with it.

* __Endpoint Administrators__ have full access to the endpoint
* __Endpoint Readers__ will be able to view the endpoint and make queries 

## Project level

At project level, __Endpoint Creators__ are able to create new endpoints and __Endpoint Administrators__ are able to manage any endpoints.

The creator of the endpoint is automatically added to the __Endpoint Administrators__ group of that endpoint so that the creator can manage it.
