---
author: ckanyika
ms.author: ckanyika
ms.service: azure-devops
ms.date: 4/2/2025
ms.topic: include
---

### No new Azure DevOps OAuth apps beginning April 2025

As of April 2025, we will no longer accept new registrations of Azure DevOps OAuth apps. This is the first step we’re taking towards our longer-term vision of sunsetting the Azure DevOps OAuth platform. Moving forward, we recommend that all developers that  building applications on Azure DevOps REST APIs use the  [explore the Microsoft Identity platform](https://learn.microsoft.com/entra/identity-platform/v2-overview) and [register a new Entra application](https://learn.microsoft.com/entra/identity-platform/quickstart-register-app?tabs=certificate%2Cexpose-a-web-api) instead.

All existing Azure DevOps OAuth apps will continue working until the official end-of-life date in 2026. Learn more in [our blog post here](https://devblogs.microsoft.com/devops/no-new-azure-devops-oauth-apps-beginning-february-2025/).


### Server Name Indication now mandatory for Azure DevOps Services

Starting from April 23rd, 2025, we will be requiring <a href="https://en.wikipedia.org/wiki/Server_Name_Indication" target="_blank">Server Name Indication (SNI)</a> on all incoming HTTPS connections to Azure DevOps Services.

SNI is an extension to the TLS protocol that allows clients to specify the hostname they are connecting to. All modern browsers and client software support SNI and use it by default, ensuring a seamless transition for most users. In fact, more than 99.995% of the customer traffic reaching our servers is SNI-ready.

However, some client software may be incompatible with SNI due to various factors, such as outdated or misconfigured networking libraries, runtimes, or operating systems. Issues may also arise from proxies or NGFW firewalls. The following tools used with Azure DevOps may be impacted by SNI issues:

*   Git clients
*   IDE plugins and extensions (e.g., Team Explorer Everywhere)
*   Software running on older Java versions which do not support SNI (Java 6 and earlier) or do not have SNI enabled by default (some versions of Java 7 and 8)
*   Old browser versions (see https://caniuse.com/sni)

SNI issues usually manifest by connection errors, such as:

*   ERR_SSL_PROTOCOL_ERROR , ERR_CERT_COMMON_NAME_INVALID
*   javax.net.ssl.SSLHandshakeException, javax.net.ssl.SSLException
*   Could not establish trust relationship for the SSL/TLS secure channel

You can validate the SNI-compatibility of your system by calling the status endpoint of Azure DevOps, which we have configured to require SNI. If this call is successful, it indicates that the host, including its operating system and networking environment, is SNI-compatible. For more detailed instructions on how to test, visit our [blog post](https://devblogs.microsoft.com/devops/sni-mandatory-for-azdo-services/).