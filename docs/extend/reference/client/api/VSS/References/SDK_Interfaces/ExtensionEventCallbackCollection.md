---
title: VSS/References/SDK.Interfaces ExtensionEventCallbackCollection API | Extensions for Visual Studio Team Services
description: Collection of event callbacks - endpoints called when particular extension events occur.
ms.assetid: 7c547d92-34fc-1a7f-51e5-92288ffde29d
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.topic: conceptual
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# ExtensionEventCallbackCollection

Defined in vss.d.ts


Collection of event callbacks - endpoints called when particular extension events occur. 

### Members

* `postDisable`: [ExtensionEventCallback](../../../VSS/References/SDK_Interfaces/ExtensionEventCallback.md). Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension disable has occurred.

* `postEnable`: [ExtensionEventCallback](../../../VSS/References/SDK_Interfaces/ExtensionEventCallback.md). Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension enable has occurred.

* `postInstall`: [ExtensionEventCallback](../../../VSS/References/SDK_Interfaces/ExtensionEventCallback.md). Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension install has completed.

* `postUninstall`: [ExtensionEventCallback](../../../VSS/References/SDK_Interfaces/ExtensionEventCallback.md). Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension uninstall has occurred.

* `postUpdate`: [ExtensionEventCallback](../../../VSS/References/SDK_Interfaces/ExtensionEventCallback.md). Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension update has occurred.

* `preInstall`: [ExtensionEventCallback](../../../VSS/References/SDK_Interfaces/ExtensionEventCallback.md). Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension install is about to occur.  Response indicates whether to proceed or abort.

* `versionCheck`: [ExtensionEventCallback](../../../VSS/References/SDK_Interfaces/ExtensionEventCallback.md). For multi-version extensions, defines an endpoint that gets called via an OPTIONS request to determine the particular version of the extension to be used

