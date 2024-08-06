---
author: ckanyika
ms.author: ckanyika
ms.date: 8/13/2024
ms.topic: include
---

### Advanced Security meter usage API now returns user identities

To better help you estimate your Advanced Security users, the Meter Usage estimate APIs for Advanced Security will now return the user's Azure DevOps identity, including their display name, CUID, email identifier and identity descriptor. This is available at the organization, project, and repository level. To use this new endpoint, the syntax is similar to the existing meter usage API endpoints, appending `/details` to the endpoint: 

- At the organization level: GET 
- At the project level: GET 
- At the repository level: GET 