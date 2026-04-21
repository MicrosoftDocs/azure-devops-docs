---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 11/25/2025
ms.topic: include
---

### Group rules now apply to existing users

Group rules now automatically apply to both new and existing users without requiring removal of direct license assignments. If a user has a lower access level (e.g., Stakeholder) and belongs to a group with a higher access level (e.g., Basic), they’ll be upgraded. Users with higher direct assignments (e.g., Basic + Test Plans) will keep their existing license.

### Azure subscription required for new organizations

New Azure DevOps organizations now require an active Azure subscription. No changes to existing organizations or free tier limits. [Learn more about creating an organization](https://aka.ms/createorgwithsubscription).