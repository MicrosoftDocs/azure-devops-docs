---
author: ckanyika
ms.author: ckanyika
ms.date: 3/20/2024
ms.topic: include
---

### Personal access token (PAT) APIs to return maximum allowed lifespan upon receiving date past allowed range

When creating and updating personal access tokens (PATs) through the PAT management APIs, you may provide a "validTo" date for when the newly created or updated PAT should expire. If the ["Enforce maximum personal access token lifespan"](/azure/devops/organizations/accounts/manage-pats-with-policies-for-administrators?view=azure-devops#set-maximum-lifespan-for-new-pats) policy has been enabled and the provided "validTo" date is past the maximum allowed lifespan, we return back a PAT with the maximum allowed lifespan instead of an error.

Previously, we returned a PatLifespanPolicyViolation error if the "validTo" date was past the maximum allowed lifespan. This change allows apps and tools relying on these APIs to better handle PAT creation and update errors when the "maximum personal access token lifespan" policy is enabled.