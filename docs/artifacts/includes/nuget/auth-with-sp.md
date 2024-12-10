---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: wonga
author: wonga
ms.date: 12/10/2024
---

## Authenticate NuGet Feed with Service Principal

To authenticate with a service principal, set the [ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS](https://github.com/microsoft/artifacts-credprovider/blob/master/README.md#environment-variables) environment variable as shown below, specifying your feed URL, the service principal's application (client) ID, and the path to your service principal certificate:



#### [Windows](#tab/Windows/)

In PowerShell, enter the following code.

```powershell
$env:ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS = @'
{
    "endpointCredentials": [
    {
        "endpoint": "<FEED_URL>",
        "clientId": "<SERVICE_PRINCIPAL_APPLICATION_(CLIENT)_ID>",
        "clientCertificateFilePath": "<SERVICE_PRINCIPAL_CERTIFICATE_PATH>"
    }
]
}
'@
```

#### [Linux/macOS](#tab/Linux/)

In Bash, enter the following code.

```bash
export ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS='{
    "endpointCredentials": [
        {
            "endpoint": "<FEED_URL>",
            "clientId": "<SERVICE_PRINCIPAL_APPLICATION_(CLIENT)_ID>",
            "clientCertificateFilePath": "<SERVICE_PRINCIPAL_CERTIFICATE_PATH>"
        }
    ]
}'
```
