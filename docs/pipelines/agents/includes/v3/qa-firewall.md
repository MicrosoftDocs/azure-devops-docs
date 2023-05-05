---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/12/2020
---

### I'm running a firewall and my code is in Azure Repos. What URLs does the agent need to communicate with?

If you're running an agent in a secure network behind a firewall, make sure the agent can initiate communication with the following URLs and IP addresses.


| Domain URL                                           | Description                                                                            |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `https://{organization_name}.pkgs.visualstudio.com`  | Azure DevOps Packaging API for organizations using the `{organization_name}.visualstudio.com` domain|
| `https://{organization_name}.visualstudio.com`       | For organizations using the `{organization_name}.visualstudio.com` domain              |
| `https://{organization_name}.vsblob.visualstudio.com`| Azure DevOps Telemetry for organizations using the `{organization_name}.visualstudio.com` domain|    
| `https://{organization_name}.vsrm.visualstudio.com`  | Release Management Services for organizations using the `{organization_name}.visualstudio.com` domain|
| `https://{organization_name}.vssps.visualstudio.com` | Azure DevOps Platform Services for organizations using the `{organization_name}.visualstudio.com` domain|
| `https://{organization_name}.vstmr.visualstudio.com` | Azure DevOps Test Management Services for organizations using the `{organization_name}.visualstudio.com` domain|
| `https://*.blob.core.windows.net`                    | Azure Artifacts                                                                        |
| `https://*.dev.azure.com`                            | For organizations using the `dev.azure.com` domain                                     |
| `https://*.vsassets.io`                              | Azure Artifacts via CDN                                                                |
| `https://*.vsblob.visualstudio.com`                  | Azure DevOps Telemetry for organizations using the `dev.azure.com` domain              |
| `https://*.vssps.visualstudio.com`                   | Azure DevOps Platform Services for organizations using the `dev.azure.com` domain      |
| `https://*.vstmr.visualstudio.com`                   | Azure DevOps Test Management Services for organizations using the `dev.azure.com` domain|
| `https://app.vssps.visualstudio.com`                 | For organizations using the `{organization_name}.visualstudio.com` domain              |
| `https://dev.azure.com`                              | For organizations using the `dev.azure.com` domain                                     |
| `https://login.microsoftonline.com`                  | Azure Active Directory sign in                                                         |
| `https://management.core.windows.net`                | Azure Management APIs                                                                 |
| `https://vstsagentpackage.azureedge.net`             | Agent package                                                                          |


To ensure your organization works with any existing firewall or IP restrictions, ensure that `dev.azure.com` and `*dev.azure.com` are open and update your allow-listed IPs to include the following IP addresses, based on your IP version. If you're currently allow-listing the `13.107.6.183` and `13.107.9.183` IP addresses, leave them in place, as you don't need to remove them.

**IPv4 ranges**

* `13.107.6.0/24`
* `13.107.9.0/24`
* `13.107.42.0/24`
* `13.107.43.0/24`

**IPv6 ranges**

* `2620:1ec:4::/48`
* `2620:1ec:a92::/48`
* `2620:1ec:21::/48`
* `2620:1ec:22::/48`

> [!NOTE]
> For more information about allowed addresses, see [Allowed address lists and network connections](../../../../organizations/security/allow-list-ip-url.md).
