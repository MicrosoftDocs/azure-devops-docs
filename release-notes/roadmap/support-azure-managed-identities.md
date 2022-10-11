---
title: Support Azure Managed Identities and Service Principals
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Support Azure Managed Identities and Service Principals
hide_comments: true
---

# Support Azure Managed Identities and Service Principals

We are working on enabling applications to use managed identities and service principals to integrate with Azure DevOps through REST APIs and client libraries. 

This highly requested feature offers our customers a more secure alternative to personal access tokens (PATs), which can be more easily leaked and may require time-consuming maintenance to regularly rotate. Managed identities, in particular, offer the ability for applications on Azure resources to obtain Azure AD tokens without needing to manage any credentials at all. 

Furthermore, this form of authentication allows an application to perform actions on behalf of itself, instead of on behalf of a user, as PATs do. This ensures that teams can better manage their services collectively, instead of relying on any one individual to provide a token for authentication.

We are currently in private preview. If you are interested in participating as part of the preview, please share your answer to these questions to [Angel Wong](mailto:wonga@microsoft.com).

1. What company/organization are you a part of?
2. Could you please provide a brief description of the tools/services you use today that need to authenticate against ADO? What authentication mechanism(s) are you using today? 
3. Do you currently use Managed Identities to authenticate against any other Azure Resources?  
4. What would you do with Managed Identity(s) if you could use them to authenticate against ADO? What does that workflow look like?
5. Can you provide a list of what APIs you might be using? See the [ADO REST API documentation](https://learn.microsoft.com/rest/api/azure/devops/?view=azure-devops-rest-7.1) for help.
6. What kind of scopes would be useful for you in helping your MI accomplish what it needs to do? See [this list of ADO OAuth scopes](https://learn.microsoft.com/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops#scopes), as a jumping off point.
7. Is there anything else that might be helpful for us to know about your Managed Identity user scenario?
8. What is the name of your Azure DevOps organization(s) that you would like this feature enabled for?

---

A few important milestones are available here:

**Important Milestones (last updated 10/11/22):**

* **September 2022:** Internal testing for select Microsoft customers with approved use cases.
* **October 2022:** Private Preview for Microsoft-only parties. Email [Angel Wong](mailto:wonga@microsoft.com) with the survey questions below completed.
* **FY23Q1 (TBC):** Public Preview to all internal and external customers
* **TBD:** Managed Identities and Service Principal support GA
