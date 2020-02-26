---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/14/2020
---

On your VM, open an **Administrator: Windows PowerShell** console. Install IIS:

```PowerShell
# Install IIS
Install-WindowsFeature Web-Server,Web-Asp-Net45,NET-Framework-Features
```
