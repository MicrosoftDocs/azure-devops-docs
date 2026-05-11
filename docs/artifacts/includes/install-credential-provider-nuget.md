---
ms.topic: include
ms.service: azure-devops-artifacts
ms.manager: wiwagn
ms.author: rabououn
author: ramiMSFT
ms.date: 05/07/2026
---

The Azure Artifacts Credential Provider enables secure authentication to your Azure Artifacts feeds. To use it with nuget.exe, you must first add it to NuGet’s plugin search path. For details, see [Plugin Installation and discovery](https://github.com/NuGet/Home/wiki/NuGet-cross-plat-authentication-plugin#plugin-installation-and-discovery). Once the plugin is added, follow the installation steps for your operating system below:

#### [Windows](#tab/windows/)

Use one of the following methods to install the Azure Artifacts Credential Provider:

### Manual installation

1. Download the latest [Microsoft.NetFx48.NuGet.CredentialProvider.zip](https://github.com/Microsoft/artifacts-credprovider/releases) release.

1. Extract the zip file.

1. Copy the `netfx` folder from the extracted archive to `%UserProfile%/.nuget/plugins/`. The `netfx` folder is required for nuget.exe compatibility.

### Install using the helper script

Alternatively, you can use the automated helper script for a streamlined installation. Ensure you have [PowerShell 5.1 or later](/powershell/scripting/install/installing-powershell), and then run:

```powershell
iex "& { $(irm https://aka.ms/install-artifacts-credprovider.ps1) } -AddNetfx"
```

See the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider?tab=readme-ov-file#azure-artifacts-credential-provider) repository for more details.

#### [Linux/Mac](#tab/linuxMac/)

Make sure you have setup the [Prerequisites](https://github.com/microsoft/artifacts-credprovider?tab=readme-ov-file#for-linux-self-contained-installs), then use one of the following methods to install the Azure Artifacts Credential Provider:

### Manual installation

1. Download the latest [Microsoft.NetFx48.NuGet.CredentialProvider.tar.gz](https://github.com/Microsoft/artifacts-credprovider/releases) release.

1. Extract the tar file.

1. Copy the `netfx` folder from the extracted archive to `$HOME/.nuget/plugins`. The `netfx` folder supports MSBuild scenarios.

### Install using the helper script

The helper script provides an automated installation of the netcore version. If you need both netcore and netfx binaries for scenarios like mono MSBuild, use the manual installation method above instead.

1. Download the [Install Credential Provider](https://github.com/microsoft/artifacts-credprovider/blob/master/helpers/installcredprovider.sh) helper script.

1. Run one of the following commands:
    - Using wget:
    
        ```bash
        wget -qO- https://aka.ms/install-artifacts-credprovider.sh | bash
        ```
    
    - Using curl:
    
        ```bash
        sh -c "$(curl -fsSL https://aka.ms/install-artifacts-credprovider.sh)"
        ```

See the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider?tab=readme-ov-file#azure-artifacts-credential-provider) repository for more details.

* * *