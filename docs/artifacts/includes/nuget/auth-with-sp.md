## Authenticate NuGet Feed with Service Principal

To authenticate with a service principal, set the [ARTIFACTS_CREDENTIALPROVIDER_FEED_ENDPOINTS](https://github.com/microsoft/artifacts-credprovider/blob/master/README.md#environment-variables) environment variable as shown below, specifying your feed URL, the service principal's application (client) ID, and the path to your service principal certificate:
    - **PowerShell**:
    
        ```PowerShell
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

    - **Bash**:
    
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

