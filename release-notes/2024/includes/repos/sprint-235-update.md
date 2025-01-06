---
author: ckanyika
ms.author: ckanyika
ms.date: 2/29/2024
ms.topic: include
---

### SSH-RSA deprecation

Azure Repos provides two methods for users to access a git repository in Azure Repos – HTTPS and SSH. To use SSH, you need to create a key pair using one of the supported encryption methods. In the past, we’ve been supporting only SSH-RSA and we’ve asked users to enable the SSH-RSA [here](/azure/devops/repos/git/use-ssh-keys-to-authenticate#q-ssh-cannot-establish-a-connection-what-should-i-do). 

With this update, we're announcing the deprecation of SSH-RSA as a supported encryption method for connecting to Azure Repos using SSH. You can see more details in the [End of SSH-RSA support for Azure Repos](https://devblogs.microsoft.com/devops/ssh-rsa-deprecation/) blog post.

