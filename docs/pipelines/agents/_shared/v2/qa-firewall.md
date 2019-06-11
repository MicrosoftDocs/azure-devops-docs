---
ms.topic: include
---

### I'm running a firewall and my code is in Azure Repos. What URLs does the agent need to communicate with?

If you're running an agent in a secure network behind a firewall, make sure the agent can initiate communication with the following URLs and IP addresses.

#### For organizations using the `*.visualstudio.com` domain:

```
https://login.microsoftonline.com
https://app.vssps.visualstudio.com 
https://{organization_name}.visualstudio.com
https://{organization_name}.vsrm.visualstudio.com
https://{organization_name}.pkgs.visualstudio.com
https://{organization_name}.vssps.visualstudio.com
```

#### For organizations using the `dev.azure.com` domain:

```
https://dev.azure.com
https://*.dev.azure.com
https://login.microsoftonline.com
https://management.core.windows.net
```

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