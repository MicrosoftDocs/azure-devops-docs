---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 4/13/2020
ms.topic: include
---
### Auditing events are now available

Azure Artifacts feeds events are now available in the audit
logs. These logs can be accessed from **Organization Settings -&gt; Auditing**.
The following events are now available for feeds:

- Create, delete, or modify an organization or
project-scoped feed
- Create, delete or modify a feed view
- Set or delete a package retention policy on any
given feed
- Permissions changes

    
### npm performance improvements

We have made changes to our core design to improve the way we store and deliver npm packages in Azure Artifacts feeds. This has helped us achieve up to 10-fold reduction in latency for some of the highest used APIs for npm.

    
### Accessibility improvements

We have deployed fixes to address accessibility issues
on our feeds page. The fixes include the following: 

- Create feed experience
- Global feed settings experience
- Connect to feed experience
    