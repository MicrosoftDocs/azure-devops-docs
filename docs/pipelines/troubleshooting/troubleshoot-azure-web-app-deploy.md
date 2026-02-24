---
title: Troubleshoot Azure Web App deployment tasks
description: Resolve common errors with Azure Web App and App Service deployment tasks in Azure Pipelines, including ZIP deploy, network connectivity, SSL, Web Deploy, and package issues.
ms.service: azure-devops-pipelines
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
ms.date: 02/23/2026
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
---

# Troubleshoot Azure Web App deployment tasks

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article helps you resolve common errors that occur when you use the [Azure Web App (`AzureWebApp@1`)](/azure/devops/pipelines/tasks/reference/azure-web-app-v1) or [Azure App Service Deploy (`AzureRmWebAppDeployment@4`)](/azure/devops/pipelines/tasks/reference/azure-rm-web-app-deployment-v4) tasks in Azure Pipelines.

This is a troubleshooting article. To learn more about App Service deployments, see [Deploy to Azure App Service by using Azure Pipelines](/azure/app-service/deploy-azure-pipelines), which covers `AzureWebApp@1` and advanced scenarios with `AzureRmWebAppDeployment@4`. For container-based deployments, see [Deploy a custom container to App Service using Azure Pipelines](/azure/app-service/deploy-container-azure-pipelines), which includes `AzureRmWebAppDeployment@4` examples.

> [!TIP]
> Before you troubleshoot, gather debug logs by [enabling verbose logging](review-logs.md) for your pipeline run. You can also collect diagnostic logs from the [Kudu service](https://github.com/projectkudu/kudu/wiki/Diagnostic-Log-Stream) and the **Diagnose and solve problems** feature in the Azure portal for your App Service. Check [Azure DevOps status](https://status.dev.azure.com/) and [Azure status](https://azure.status.microsoft/status) to rule out service outages.

## "JavaScript heap out of memory"

### Symptom

The deployment task fails with the following error:

```
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

### Cause

This error occurs when the task attempts to unzip and rezip a large deployment package, and the operation exceeds the available memory on the agent.
Microsoft-hosted agents have limited resources, which can cause this failure for large packages.

### Resolution

Use the [Azure Web App (`AzureWebApp@1`)](/azure/devops/pipelines/tasks/reference/azure-web-app-v1) task instead of the `AzureRmWebAppDeployment@4` task for App Service deployments.
The `AzureWebApp@1` task handles large packages more efficiently.

For more complicated deployment scenarios that require XML transformation, use the [Azure App Service Deploy (`AzureRmWebAppDeployment@4`)](/azure/devops/pipelines/tasks/reference/azure-rm-web-app-deployment-v4) task with a smaller package, or split transformations into a separate pipeline step.

## "ECONNRESET" during deployment

### Symptom

The deployment task fails with the following error:

```
Encountered a retriable error: ECONNRESET. Message: read ECONNRESET
```

### Cause

A network connection between the pipeline agent and the App Service was reset during deployment.
Common causes include:

- **Microsoft-hosted agents deploying to an App Service Environment (ASE):** The ASE might block incoming connections from agent IP addresses.
- **Self-hosted agents:** A flaky or unstable network connection between the agent and the App Service.

### Resolution

**For Microsoft-hosted agents with ASE:**

Make sure your ASE network security rules allow inbound connections from the Microsoft-hosted agent IP ranges for your geography.
For the list of IP address ranges, see [Allowed IP addresses and domain URLs](/azure/devops/organizations/security/allow-list-ip-url).

**For self-hosted agents:**

- Verify the network connection between your agent and the App Service is stable.
- If the issue persists, create a support ticket with the Azure App Service or Azure Networking team for further investigation.

## "Failed to deploy web package to App Service"

### Symptom

The deployment task fails with one or both of the following errors:

```
[error]Failed to deploy web package to App Service.
Package deployment using ZIP Deploy failed. Refer logs for more details.
```

### Cause

The task uses the Kudu `zipDeploy` API for deployment, and the API returned an error.
This error can occur when App Service can't process the incoming package correctly.

### Resolution

Set the `WEBSITE_RUN_FROM_PACKAGE` app setting to `1` on your App Service:

1. In the Azure portal, go to your App Service.
2. Select **Configuration** > **Application settings**.
3. Add or update the setting `WEBSITE_RUN_FROM_PACKAGE` with a value of `1`.
4. Save the configuration and retry the deployment.

For more information, see [Run your app from a package](/azure/app-service/deploy-run-package).

## "EMFILE: too many open files"

### Symptom

The deployment task fails with one of the following errors:

```
EMFILE: too many open files
```

```
Error: Package deployment using ZIP Deploy failed
```

### Cause

The deployment task opens too many file handles when unzipping a large package, exceeding the operating system's file descriptor limit.

### Resolution

Use one of the following workarounds:

**Option 1: Use the Azure Web App task**

Switch from `AzureRmWebAppDeployment@4` to the [Azure Web App (`AzureWebApp@1`)](/azure/devops/pipelines/tasks/reference/azure-web-app-v1) task, which handles large packages differently.

**Option 2: Extract files before deployment**

Use the [Extract Files task](/azure/devops/pipelines/tasks/reference/extract-files-v1) to unzip the package in a prior step, then deploy the extracted folder.
This approach prevents the deployment task from needing to unzip the package itself.

```yaml
steps:
- task: ExtractFiles@1
  displayName: 'Extract files'
  inputs:
    archiveFilePatterns: '$(InputPackageZipPath)'
    destinationFolder: '$(OutputUnzippedPath)'

- task: AzureRmWebAppDeployment@4
  displayName: 'Azure App Service Deploy'
  inputs:
    azureSubscription: 'Subscription'
    WebAppName: 'app-name'
    package: '$(OutputUnzippedPath)'
```

## "Resource doesn't exist" error

### Symptom

The deployment task fails with the following error:

```
Error: Resource '<ResourceName>' doesn't exist. Resource should exist before deployment.
```

This error can occur with Azure Web App tasks, Azure App Service Deploy tasks, Azure Functions tasks, and ARM template deployment tasks.

### Cause

The task calls Azure APIs that depend on cached resource data.
If the App Service or other Azure resource was recently created — either in the same pipeline, by another tool, or just before the pipeline ran — the cache might not reflect the new resource yet.

### Resolution

Add a delay step in your pipeline before the deployment task to allow the Azure cache to update:

```yaml
steps:
- task: PowerShell@2
  displayName: 'Wait for resource propagation'
  inputs:
    targetType: inline
    script: Start-Sleep -Seconds 60
```

If adding a delay doesn't resolve the error, create a support ticket with the Azure service team for the affected resource type.

## "No package found with specified pattern"

### Symptom

The deployment task fails with an error indicating no package was found matching the specified pattern.

### Cause

The artifact containing the deployment package wasn't published in the build or a previous stage, or it wasn't downloaded in the current job.

### Resolution

- Verify that the build or a previous pipeline stage publishes the package as a [pipeline artifact](/azure/devops/pipelines/artifacts/pipeline-artifacts).
- Confirm that the current job includes a download step for the artifact.
- Check that the file path pattern in the deployment task matches the actual artifact path.

## "Publish using zip deploy option is not supported for MSBuild package type"

### Symptom

The deployment task fails with an error about zip deploy not being supported for MSBuild package types.

### Cause

Web packages created by the MSBuild task (with default arguments) use a nested folder structure that requires Web Deploy for correct deployment.
The zip deploy option can't handle this package structure.

### Resolution

Use the `AzureRmWebAppDeployment@4` task with Web Deploy instead of zip deploy, or restructure your build to produce a folder-based output.
To produce a folder output from MSBuild, add the `/p:PackageAsSingleFile=false` argument to your MSBuild task.

## 5xx error during deployment

### Symptom

The deployment task fails with a `500`, `502`, `503`, or other 5xx HTTP error code.

### Cause

A server-side error occurred on the App Service or its underlying infrastructure.
Common causes include insufficient App Service Plan capacity, an ongoing Azure outage, or the App Service being in a stopped or error state.

### Resolution

- Check [Azure status](https://azure.status.microsoft/en-us/status) for ongoing outages.
- In the Azure portal, verify that the App Service is running and the App Service Plan has sufficient capacity.
- Scale up the App Service Plan to increase CPU, RAM, and disk space, or try a different plan.
- Review the Kudu logs for more details on the server-side error.

## Release hangs then fails or "503 service unavailable"

### Symptom

A deployment runs for an extended period and eventually fails, a `503 Service Unavailable` error occurs, or the deployment history in Kudu logs fails to update.

### Cause

These issues typically occur when the App Service Plan has insufficient capacity to handle the deployment alongside the running application.

### Resolution

- Scale up the App Service instance to increase available CPU, RAM, and disk space.
- Try deploying to a different App Service Plan to rule out resource contention.
- Review the Kudu diagnostic logs from the Azure portal for specific errors.
- For zero-downtime deployments, use [deployment slots](/azure/app-service/deploy-staging-slots) with slot swaps instead of deploying directly to the production slot.

## Network connectivity errors during deployment

### Symptom

The deployment task fails with a network-related error such as:

```
Could not connect to the remote computer ('<AppName>.scm.azurewebsites.net')
```

### Cause

The pipeline agent can't reach the App Service's Kudu endpoint (SCM site) due to firewall rules, proxy configuration, or network restrictions.

### Resolution

Review networking configuration for your agent type:

- **Microsoft-hosted agents:** Ensure your firewall allows connections from the [Microsoft-hosted agent IP ranges](/azure/devops/organizations/security/allow-list-ip-url).
- **Self-hosted agents:** Verify proxy settings and network connectivity. See [Run a self-hosted agent behind a web proxy](../agents/proxy.md).
- **App Service Environment (ASE):** Confirm that the ASE network security group allows inbound connections on the SCM endpoint. See [Networking for an App Service Environment](/azure/app-service/environment/networking).

## "Could not fetch access token for Azure"

### Symptom

The deployment task fails with the following error:

```
Could not fetch access token for Azure. Verify if the Service Principal used is valid and not expired.
```

### Cause

The service principal backing the Azure service connection is expired, disabled, or lacks the required permissions.

### Resolution

Verify the service principal in Microsoft Entra ID and renew the secret or certificate if expired.
For detailed troubleshooting steps, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).

## SSL error in the deployment task

### Symptom

The deployment task fails with an SSL-related error.

### Cause

The App Service has an SSL certificate configuration issue, such as using an untrusted or self-signed certificate.

### Resolution

Ensure the certificate used by App Service is signed by a trusted certificate authority.
For more information, see [Add and manage TLS/SSL certificates in Azure App Service](/azure/app-service/configure-ssl-certificate).

## Web Deploy error codes

### Symptom

When using Web Deploy as the deployment method, the task log shows a Web Deploy error code such as `ERROR_CONNECTION_NOT_FOUND`, `ERROR_DESTINATION_NOT_REACHABLE`, or others.

### Cause

Web Deploy encountered an issue communicating with or deploying to the App Service.

### Resolution

See [Web Deploy error codes](/iis/publish/troubleshooting-web-deploy/web-deploy-error-codes) for a full list of error codes and their resolutions.

## "ERROR_FILE_IN_USE" when deploying .NET apps

### Symptom

The deployment task fails with an `ERROR_FILE_IN_USE` error when deploying a .NET application to App Service on Windows.

### Cause

Application files are locked by the running application process during deployment.

### Resolution

In the `AzureRmWebAppDeployment@4` task, enable the following options:

- **Rename locked files** (`enableMSDeployAppOffline: true`)
- **Take App Offline** (`enableMSDeployRetry: true`)

For zero-downtime deployments, use [deployment slots](/azure/app-service/deploy-staging-slots) with slot swaps.

## App deployed successfully but not working (Windows)

### Symptom

Deployment completes without errors, but the application doesn't respond or returns errors when you browse to it.

### Cause

On Windows App Service, a `web.config` file is required for many application types (such as Node.js or Python).
If the file is missing, IIS can't route requests to your application.

### Resolution

Add a `web.config` file to the root of your application.
For more information, see [Configure a custom container for Azure App Service](/azure/app-service/configure-custom-container) and the framework-specific guidance:

- [Configure a Node.js app for Azure App Service](/azure/app-service/configure-language-nodejs)
- [Configure a Python app for Azure App Service](/azure/app-service/configure-language-python)

## Function App deployment fails with AzureRmWebAppDeployment task

### Symptom

Deploying an Azure Function App using the `AzureRmWebAppDeployment@4` task fails.

### Cause

The `AzureRmWebAppDeployment@4` task is designed for App Service deployments and might not handle Function App-specific requirements correctly.

### Resolution

Use the [Azure Functions (`AzureFunctionApp@1`)](/azure/devops/pipelines/tasks/reference/azure-function-app-v1) task instead, which is designed specifically for Function App deployments.

## Related content

- [Deploy to App Service using Azure Pipelines](/azure/app-service/deploy-azure-pipelines)
- [AzureWebApp@1 - Azure Web App v1 task](/azure/devops/pipelines/tasks/reference/azure-web-app-v1)
- [AzureRmWebAppDeployment@4 - Azure App Service Deploy v4 task](/azure/devops/pipelines/tasks/reference/azure-rm-web-app-deployment-v4)
- [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md)
- [Troubleshoot pipeline runs](troubleshooting.md)
- [Review logs to diagnose pipeline issues](review-logs.md)
