---
author: gloridelmorales
ms.author: glmorale
ms.date: 8/11/2025
ms.topic: include
---

### Only organizations with existing public projects can create new ones

Starting this sprint, only organizations that already have the [Allow public projects policy](/azure/devops/organizations/projects/make-project-public?view=azure-devops#1-enable-anonymous-access-to-projects) enabled can continue using it. The policy does not change for existing customers. 

Microsoft recommends using [GitHub](https://github.com/) for all your public project needs.

### Azure DevOps login flow no longer relies on Azure Resource Manager audience

We've removed a dependency on the Azure Resource Manager (ARM) resource (https://management.azure.com) when logging in or refreshing Entra access tokens used to access Azure DevOps. The ARM resource is often associated with the Azure portal (https://portal.azure.com), and admins may want to restrict which users in their tenant can access the portal through Conditional Access policy (CAP) enforcement.

Due to Azure DevOps previous reliance on ARM, admins had to permit all Azure DevOps users to bypass the ARM CAPs in order to use Azure DevOps. This is no longer necessary as we've removed the ARM resource audience requirement during signin and refresh token flows. 

There remain a couple of notable exceptions  — the following ​user groups may need continued access to ARM:

1. Billing admins need access to ARM to setup billing and access subscriptions
2. Service Connection creators require continued access to ARM for ARM role assignment and updates to MSIs