---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 2/11/2022
ms.topic: include
---
### Improvements to strengthen security in Azure DevOps

Azure DevOps will now respond to upstream security events in Azure AD (e.g., password changes) faster. As a result users may be asked to re-authenticate after a security event to continue using the service. For web flows, users may be prompted to re-authenticate and have to fulfil the required conditional access policies (e.g., Multi-factor auth, IP fencing etc.) as mandated by their company administrators.

Non-interactive flows (e.g., tools) using personal access tokens may stop working with a '401 unauthorized' response after a security event (e.g. password change). The user whose personal access tokens (PAT) are used for non-interactive access may need to re-authenticate to have their personal access tokens (PAT) working again.