---
author: vijayma
ms.author: vijayma
ms.date: 10/19/2022
ms.topic: include
msservice: azure-devops-repos
ms.subservice: azure-devops-repos-git
---

The **Cryptographic network provider** setting corresponds to the `git config http.sslBackend` command. This setting is only available at the global scope.

From the **Git** menu, choose **Git > Settings** and then select the **Git Global Settings** view. That view contains the **Cryptographic network provider** option for the current user.

:::image type="content" source="../media/git-config/visual-studio-2019/git-experience/network-provider-setting.png" alt-text="Screenshot of the Cryptographic network provider setting with OpenSSL selected in Visual Studio." lightbox="../media/git-config/visual-studio-2019/git-experience/network-provider-setting-lrg.png":::

Valid values are:

- `OpenSSL`: use [OpenSSL](https://www.openssl.org/) for TLS and SSL protocols.
- `Secure Channel`: use [Secure Channel](/windows/win32/secauthn/secure-channel) for TLS and SSL protocols. Secure Channel is the native Windows solution that contains a set of security protocols that provide identity authentication and secure, private communication through encryption.
- `Unset` (default): if this setting is unset, the Cryptographic network provider defaults to OpenSSL.
