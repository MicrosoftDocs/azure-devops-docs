---
title: VSS/References/VSS.SDK.Interfaces IExtensionInitializationOptions API | Extensions for Azure DevOps Services
description: Options for the extension&#x27;s initialization method
ms.assetid: 0fa9821c-ca82-1bb3-9801-d859845925fd
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

# IExtensionInitializationOptions

Defined in vss.d.ts


Options for the extension&#x27;s initialization method 

### Members

* `explicitNotifyLoaded`: boolean. Optional. Set to true if the extension will explicitly call notifyLoadSucceeded or notifyLoadFailed
itself to indicate that the extension is done loading (stops UI loading indicator in the host).
If false (the default) the extension is considered ready as soon as init is called.

* `usePlatformScripts`: boolean. Optional. Set to true if the extension is going to consume any VSS script libraries.
For example, controls, REST clients, services, etc.
This pulls in the script loader and configuration data from the host frame so that
&#x27;require&#x27; statements can be used to load Azure DevOps Services modules. A call to VSS.require will
effectively turn this option on, even if not specified in the VSS.init handshake.

* `usePlatformStyles`: boolean. Optional. Set to true if the extension desires to use VSS platform CSS styles. If not explicitly set,
the default value is the value of &#x27;usePlatformScripts&#x27;.

* `moduleLoaderConfig`: [ModuleLoaderConfiguration](../../../VSS/References/SDK_Interfaces/ModuleLoaderConfiguration.md). Optional. Extension-specific AMD module loader configuration. This configuration
will be merged with the Azure DevOps Services-specific configuration.

* `extensionReusedCallback`: (contribution: [Contribution](../../../VSS/References/SDK_Interfaces/Contribution.md)): void. Optional. Optional callback method that gets invoked when this extension frame is reused by another contribution
which shares the same URI of the contribution that originally caused this extension frame to be loaded.

