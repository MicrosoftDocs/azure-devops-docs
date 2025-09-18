---
author: ckanyika
ms.author: ckanyika
ms.service: azure-devops
ms.date: 7/3/2024
ms.topic: include
---

### New authentication format for Azure DevOps personal access tokens available

We have made updates to the format of personal access tokens (PATs) issued by Azure DevOps. These changes provide additional security benefits and improve secret detection tooling available through our partner offerings, like [GitHub Advanced Security for Azure DevOps](https://devblogs.microsoft.com/devops/github-advanced-security-for-azure-devops-public-preview-starts-now/). This change in PAT format follows the new format recommended across all Microsoft products. We anticipate that the inclusion of more identifiable bits will improve the false positive detection rate of these secret detection tools and enable us to better mitigate any detected leaks faster.

Notably, the length of our tokens increase from 52 characters to 84 characters, 52 of which will be randomized data. This improves overall entropy of the token generation, enabling us to be more resistant to potential brute forcing attacks. 

You're advised to regenerate all PATs currently in use immediately to benefit from these changes. This can be done on the [Personal access tokens](/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#modify-a-pat&preserve-view=true) page of your User Profile or by using the [Personal Access Token lifecycle management APIs](/azure/devops/organizations/accounts/manage-personal-access-tokens-via-api?view=azure-devops&preserve-view=true). Integrators are also recommended to support both this new token length and the current token length, while you adapt to this new format.
