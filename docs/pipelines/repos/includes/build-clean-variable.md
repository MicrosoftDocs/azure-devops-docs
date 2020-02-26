---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/13/2020
---

If you want the Clean switch described above to work differently, then on the **Variables** tab, define the `Build.Clean` variable and set its value to:

* `all` if you want to delete `$(Agent.BuildDirectory)`, which is the entire working folder that contains the sources folder, binaries folder, artifacts folder, and so on.

* `source` if you want to delete `$(Build.SourcesDirectory)`.

* `binary` If you want to delete `$(Build.BinariesDirectory)`.
