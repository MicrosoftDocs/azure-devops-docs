---
title: VSS/References/VSS.SDK.Interfaces IXDMChannel API | Extensions for Azure DevOps Services
description: Interface for a single XDM channel
ms.assetid: b0808b49-1647-8473-4190-53444ce711ec
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

# IXDMChannel

Defined in vss.d.ts


Interface for a single XDM channel 

### Members

* `invokeRemoteMethod`: (methodName: string, instanceId: string, params: any[], instanceContextData: Object): IPromise&lt;T&gt;. Invoke a method via RPC. Lookup the registered object on the remote end of the channel and invoke the specified method.

* `getRemoteObjectProxy`: (instanceId: string, contextData: Object): IPromise&lt;T&gt;. Get a proxied object that represents the object registered with the given instance ID on the remote side of this channel.

* `getObjectRegistry`: (): [IXDMObjectRegistry](../../../VSS/References/VSS_SDK_Interfaces/IXDMObjectRegistry.md). Get the object registry to handle messages from this specific channel.
Upon receiving a message, this channel registry will be used first, then
the global registry will be used if no handler is found here.

