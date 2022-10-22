---
author: gloridelmorales
ms.author: glmorale
ms.date: 3/1/2022
ms.topic: include
---
### Improvements to strengthen security in Azure DevOps

Azure DevOps will now respond to upstream security events in Azure AD (e.g., password changes) faster. As a result users may be asked to re-authenticate after a security event to continue using the service. For web flows, users may be prompted to re-authenticate and have to fulfil the required conditional access policies (e.g., Multi-factor auth, IP fencing etc.) as mandated by their company administrators.

### Changes to third-party applications access

Perviously, organizations had the "Third-party application access via OAuth" policy enabled by default. Moving forward, this policy will be disabled by default for all new organizations and Project Collection Administrators must explicitly enable this policy. For all existing organizations, the setting will remain the same. 