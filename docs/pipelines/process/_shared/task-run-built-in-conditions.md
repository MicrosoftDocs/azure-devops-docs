---
ms.topic: include
---

* Only when all previous dependencies have succeeded; default if unspecified in a yaml definition

* Even if a previous dependency has failed, unless the run was canceled; specify `succeededOrFailed()` in yaml definition

* Even if a previous dependency has failed, even if the run was canceled; specify `always()` in yaml definition

* Only when a previous dependency has failed; specify `failed()` in yaml definition
