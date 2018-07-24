---
title: Manage conditional access to VSTS
description: Learn how to protect your organization credentials and keep your organization's data safe with multi-factor authentication, security group membership, and more
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 2e3b01ab-b5f5-4e4d-9509-7095246f6fe7
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/06/2017
monikerRange: 'vsts'
---
#	Manage conditional access to VSTS

**VSTS**

Conditional access offers simple ways to help secure resources for VSTS organizations backed by an Azure Active 
Directory (AAD) tenant.  Conditional access policies like multi-factor 
authentication can help protect against the risk of compromised credentials and help keep your organization's data safe. 
For example, in addition to requiring credentials, you can have a policy that only devices connected to a corporate network 
can gain access.  More generally, there are a few requirements and actions you can take for devices in a device 
management system, which is security software used by IT departments to manage devices running various operating systems 
from various locations/networks.

You can require conditions such security group membership, location and network identity, specific OS, enabled device 
in a management system, and so on.

Depending on which conditions the user satisfies, you can require multi-factor authentication, require further checks, 
or block access.

> [!IMPORTANT] 
> VSTS only enforces conditional access policies when a user signs into services with their AAD credentials. 
> Accessing VSTS using personal access tokens (PATs), alternate authentication, OAuth, and SSH keys circumvents 
> conditional access policies.

See [more information and resources](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-conditional-access).


## Enable conditional access for VSTS

You need to use the azure portal to enable conditional access.

See [detailed instructions and requirements](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-conditional-access-azuread-connected-apps).

![azure portal turning on conditional access for VSTS](_img/_shared/azure-conditional-access-738.png)

