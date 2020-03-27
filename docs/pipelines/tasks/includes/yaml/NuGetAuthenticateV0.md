---
ms.topic: include
ms.date: 08/27/2019
author: steved0x
ms.author: sdanie
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Authenticate nuget.exe, dotnet, and MSBuild with Azure Artifacts and optionally other repositories
- task: NuGetAuthenticate@0
  #inputs:
    #nuGetServiceConnections: MyOtherOrganizationFeed, MyExternalPackageRepository # Optional
    #forceReinstallCredentialProvider: false # Optional
```
