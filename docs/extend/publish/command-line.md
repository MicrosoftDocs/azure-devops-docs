---
ms.subservice: azure-devops-ecosystem
title: Publishing and packaging an extension from the Command Line
description: How to package and publish your Azure DevOps or Team Foundation Server (TFS) extension from the command line.
ms.assetid: 7adcb1a2-1894-4751-8bed-7c04d084b5cf
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 11/15/2021
---

# Publish from the command line

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use the Cross-platform CLI for Azure DevOps (tfx-cli) to publish your extension to the Visual Studio Marketplace.

For more information, see the overview of [publish, install, and share](./overview.md).

### Prerequisites

Get the TFX CLI from Node Package Manager and generate a Microsoft Entra token or a personal access token (PAT). Also, if you haven't already, set up a Publisher in the Gallery.

### Acquire the Cross-platform CLI for Azure DevOps

[!INCLUDE [Control](../includes/procedures/acquire-tfx-cli.md)]

### Publish with a Microsoft Entra token as a service principal

It is also possible to publish an extension as a [service principal](../../integrate/get-started/authentication/service-principal-managed-identity.md).

1. Add the service principal as a member to a publisher account. You can get the service principal's ID through the REST API by logging in via the az cli and querying the service principal's profile. This can be done with the following commands:

# [Bash](#tab/bash)

```azurecli-interactive
az login --service-principal --username <appId> --password <password> --tenant <tenant-id>
# 499b84ac-1321-427f-aa17-267ca6975798 specifies azure devops as a resource
az rest -u https://app.vssps.visualstudio.com/_apis/profile/profiles/me --resource 499b84ac-1321-427f-aa17-267ca6975798
```
# [PowerShell](#tab/powershell)

```azurecli-interactive
# Variable block
$tenantId = "<tenant-id>"
$appId = "<appId>"
$password = "<password>"
$resource = "499b84ac-1321-427f-aa17-267ca6975798" # specifies azure devops
$url = "https://app.vssps.visualstudio.com/_apis/profile/profiles/me"

Connect-AzAccount -ServicePrincipal -Tenant $tenantId -ApplicationId $appId -Credential (New-Object System.Management.Automation.PSCredential($appId, (ConvertTo-SecureString $password -AsPlainText -Force)))

$accessToken = (Get-AzAccessToken -ResourceUrl $resource).Token
$response = Invoke-RestMethod -Uri $url -Headers @{Authorization = "Bearer $accessToken"}
$response
```
Then, you can [add the service principal as a member](/visualstudio/extensibility/walkthrough-publishing-a-visual-studio-extension#add-additional-users-to-manage-your-publisher-account) to the publisher using the ID from the previous step.

2. Publish an extension via [TFX CLI](/azure/devops/extend/publish/command-line) using a service principal. Execute the following [TFX CLI](https://github.com/microsoft/tfs-cli/blob/master/docs/extensions.md) command to use its access token:
```
tfx extension publish --publisher my-publisher --vsix my-publisher.my-extension-1.0.0.vsix --auth-type pat -t <ENTRA_TOKEN>
```

### Publish with a personal access token

[!INCLUDE [Control](../includes/procedures/acquire-pat.md)]

Once TFX CLI is installed and you have your token, you can use the tool to package and publish your extension.

1. Open a command prompt to the root directory of your extension.
1. Run the following command to publish your extension. When prompted, enter your token to authenticate. 

```Command
tfx extension publish --publisher <YOUR_PUBLISHER_ID> --manifest-js <YOUR_EXTENSION_MANIFEST> --share-with <ACCOUNT_NAME>
```

## Potential Errors

You may receive the following error if your extension has already been published:

```
Failed Request: Internal Server Error(500) - Version number must increase each time an extension is published. Extension: fabrikam.my-extension  Current version: 0.1.9  Updated version: 0.1.9
```

You can add the `--rev-version` flag to automatically increment the *patch* version of your extension. This also saves the new version to your manifest.

> [!NOTE]
> All options available for `create` are available for the `publish` command.

#### Example

```
C:\vso-team-calendar>tfx extension publish --publisher publishFabrikam --manifest-js fabrikam.config.js --share-with fabrikam --rev-version
Copyright Microsoft Corporation
> Personal access token:
Checking if this extension is already published
It is, update the extension
Waiting for server to validate extension package...
Sharing extension with fabrikam.

=== Completed operation: publish extension ===
 - Packaging: C:\vso-team-calendar\fabrikam.team-calendar-0.2.6.vsix
 - Publishing: success
 - Sharing: shared with fabrikam
```
