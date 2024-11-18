---
author: gloridelmorales
ms.author: glmorale
ms.date: 09/28/2021
ms.topic: include
---
### Improved tenant switch requests reliability

Azure DevOps allows project collection administrators (PCAs) the ability to [switch organization connections](/azure/devops/organizations/accounts/change-azure-ad-connection?view=azure-devops&preserve-view=true) from one Azure AD directory to another within the Organization Settings section. Previously, customers may have experienced timeouts when trying to trigger a tenant switch, especially when the organization size was large. In such a case, a request may time out even if the job has already begun or even completed behind-the-scenes.

The newly implemented changes to the feature improve the reliability of tenant switch by running the switch task asynchronously. Even if the UI request times out or disconnects, the switch task will continue, assuring that the data will be consistently updated.