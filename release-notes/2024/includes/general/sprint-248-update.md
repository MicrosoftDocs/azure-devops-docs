---
author: ckanyika
ms.author: ckanyika
ms.service: azure-devops
ms.date: 11/26/2024
ms.topic: include
---

### "Generate Git Credentials" button has been removed from "Clone Repository" dialogs in Repos and Wiki

We are deactivating the "Generate Git Credentials" button from the "Clone Repository" dialogs in the Repos and Wiki UI to encourage users to move to Microsoft Entra tokens when authenticating these git operations. Previously, clicking this button would generate a new personal access token (PAT) with "vso.code" scope that remains active for 7 days. Each time the button is pressed, a new PAT would be generated resulting in the creation of numerous, unused PATs per user.

> [!div class="mx-imgBorder"]
> [![Screenshot of deactivated Generate Git Credentials button](../../media/248-general-01.png "Screenshot of deactivated Generate Git Credentials button")](../../media/248-general-01.png#lightbox)

Users are recommended to explore using Entra tokens in lieu of PATs when conducting ad-hoc git clone operations for code and wiki repositories. The docs have guidance on how to do so via [command line](https://learn.microsoft.com/azure/devops/repos/git/auth-overview?view=azure-devops) or within the [Git Credential Manager](https://learn.microsoft.com/azure/devops/repos/git/set-up-credential-managers?view=azure-devops) (GCM).

PATs can still be used for git operations, but in order to do so, users must create a PAT with the appropriate "vso.code" scope in their Personal Access Token page themselves. Make sure that such PATs only live for as long as they are needed and revoked after they are not used. As a reminder, in general, PATs ought to be securely stored in a secret management service like Azure Key Vault (AKV) and regularly rotated. 



