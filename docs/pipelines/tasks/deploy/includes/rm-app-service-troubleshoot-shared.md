---
author: ninallam
ms.prod: devops
ms.technology: devops-cicd-tasks
ms.topic: include
ms.date: 12/10/2019
ms.manager: mijacobs
ms.author: ninallam
---

### Error: Could not fetch access token for Azure. Verify if the Service Principal used is valid and not expired.

The task uses the service principal in the service connection to authenticate with Azure. If the service principal has expired or does not have permissions to the App Service, the task fails with the specified error. Verify validity of the service principal used and that it is present in the app registration. For more details, see 
   [Use Role-Based Access Control to manage access to your Azure subscription resources](/azure/role-based-access-control/role-assignments-portal).
   [This blog post](https://devblogs.microsoft.com/devops/automating-azure-resource-group-deployment-using-a-service-principal-in-visual-studio-online-buildrelease-management/)
   also contains more information about using service principal authentication.

### SSL error

To use a certificate in App Service, the certificate must be signed by a trusted certificate authority. If your web app gives you certificate validation errors, you're probably using a self-signed certificate. Set a variable named VSTS_ARM_REST_IGNORE_SSL_ERRORS to the value true in the build or release pipeline to resolve the error.

### A release hangs for long time and then fails

This may be because there is insufficient capacity on your App Service Plan. To resolve this, you can scale up the App Service instance to increase available CPU, RAM, and disk space or try with a different App Service plan.

### 5xx Error Codes

If you are seeing a 5xx error, then [check the status of your Azure service](https://status.azure.com/status).


