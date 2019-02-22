---
title: Project API Contracts | VSTS
ms.assetid: 9889e558-78df-e571-6884-75fdfd014546
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
generated: true
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 05/15/2017
---

# Project API Contracts

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]



<a id="JsonPatchDocument"></a>

## JsonPatchDocument
The JSON model for JSON Patch Operations


Extends: array ([JsonPatchOperation](#JsonPatchOperation))



<a id="JsonPatchOperation"></a>

## JsonPatchOperation
The JSON model for a JSON Patch operation


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>from</code> | string | The path to copy from for the Move/Copy operation.
| <code>op</code> | [Operation](#Operation) | The patch operation
| <code>path</code> | string | The path for the operation
| <code>value</code> | object | The value for the operation. This is either a primitive or a JToken.



<a id="Operation"></a>

## Operation

| Enum Value   | Notes
| :----------- | :----------
| add |
| remove |
| replace |
| move |
| copy |
| test |



<a id="ProjectProperty"></a>

## ProjectProperty

| Field        | Type
| :----------- | :--------
| <code>name</code> | string
| <code>value</code> | object



<a id="VssJsonCollectionWrapper&lt;T&gt;"></a>

## VssJsonCollectionWrapper&lt;T&gt;
This class is used to serialized collections as a single JSON object on the wire, to avoid serializing JSON arrays directly to the client, which can be a security hole


Extends: [VssJsonCollectionWrapperBase](#VssJsonCollectionWrapperBase)

| Field        | Type
| :----------- | :--------
| <code>value</code> | T



<a id="VssJsonCollectionWrapperBase"></a>

## VssJsonCollectionWrapperBase

| Field        | Type
| :----------- | :--------
| <code>count</code> | int32