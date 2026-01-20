---
author: gloridelmorales
ms.author: glmorale
ms.date: 9/25/2025
ms.topic: include
---

### AzureAppServiceManageV0 versioned extension support (public preview) 

You can now specify App Service extensions as `name@version` (e.g., `PythonExtension@3.9.0`). If a version is specified, that exact version will be installed. If you specify `latest` as the version, the latest available version will be installed (in case it already has the latest version, installation will be skipped). If no version is specified, the extension will only be installed if it is not already present.  
Examples: `MyExtension@1.2.3, OtherExtension@latest, LegacyExtension`.