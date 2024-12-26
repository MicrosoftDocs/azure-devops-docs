---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: wonga
author: wonga
ms.date: 12/10/2024
---

## Authenticate NuGet Feed with Service Principal

To authenticate with a service principal, you must first install the [Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider). 

Set the [ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS](https://github.com/microsoft/artifacts-credprovider/blob/master/README.md#environment-variables) environment variable as shown below, specifying your feed URL, the service principal's application (client) ID, and the subject name or the file path of your service principal certificate. (Only one is needed between the certificate subject name or file path.)


#### [Windows](#tab/Windows/)

In PowerShell, enter the following code.

```powershell
$env:ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS = @'{
    "endpointCredentials": [
        {
            "endpoint": "<FEED_URL>",
            "clientId": "<SERVICE_PRINCIPAL_APPLICATION_(CLIENT)_ID>",
            "clientCertificateSubjectName": "<SERVICE_PRINCIPAL_CERTIFICATE_NAME>",
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
            "clientCertificateSubjectName": "<SERVICE_PRINCIPAL_CERTIFICATE_NAME>",
            "clientCertificateFilePath": "<SERVICE_PRINCIPAL_CERTIFICATE_PATH>"
        }
    ]
}'
```
