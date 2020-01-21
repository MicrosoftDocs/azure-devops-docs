---
ms.topic: include
---

### Resolve Azure Active Directory (Azure AD) disconnected users

With our Sprint 148 update we gave you the ability to connect your organization to an Azure Active Directory from within the Azure DevOps portal. This new simplified experience saved several steps previously required in the Azure portal. However, that new experience left an open gap since you still had to call support to restore access for members who lost access during the connection process. Users lose access when their previous login identity is not found in the newly connected Azure Active Directory. With this release we allow you to restore those disconnected members on your own, saving you a customer support call and increasing your productivity.

There are two steps to restore disconnected members. First, the current identities of those members are mapped to identities in the newly connected Azure AD. Since some disconnected members may not have matching identities in the Azure AD, the second step is to invite those remaining members as guests to the Azure AD. This update provides an interface to take both steps right from the Azure AD settings page in the Azure DevOps portal.

Look for updates in our documentation [here](https://docs.microsoft.com/azure/devops/organizations/accounts/connect-organization-to-azure-ad?view=azure-devops).
