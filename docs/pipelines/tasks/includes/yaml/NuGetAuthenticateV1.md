---
ms.topic: include
ms.date: 08/27/2019
author: steved0x
ms.author: sdanie
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Authenticate nuget.exe, dotnet, and MSBuild with Azure Artifacts and optionally other repositories
- task: NuGetAuthenticate@1
  #inputs:
    #nuGetServiceConnections: MyOtherOrganizationFeed, MyExternalPackageRepository # Optional
    #forceReinstallCredentialProvider: false # Optional
```
