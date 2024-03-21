---
author: ckanyika
ms.author: ckanyika
ms.date: 3/21/2024
ms.topic: include
---

### Personal access token (PAT) APIs to return maximum allowed lifespan 

When managing personal access tokens (PATs) through the PAT management APIs, a ***"validTo"*** expiration date can be specified for newly created or updated PATs.  If the ["Enforce maximum personal access token lifespan"](/azure/devops/organizations/accounts/manage-pats-with-policies-for-administrators?view=azure-devops#set-maximum-lifespan-for-new-pats) policy is enabled and the specified ***"validTo"*** date exceeds the policy's maximum lifespan limit, the system now automatically adjusts and issues a PAT with the maximum permitted lifespan, rather than producing an error.

Previously, going over the maximum allowed lifespan would cause a _PatLifespanPolicyViolation_ error. This change helps apps and tools that use these APIs handle PAT creation and update errors better when the "maximum personal access token lifespan" policy is enabled.