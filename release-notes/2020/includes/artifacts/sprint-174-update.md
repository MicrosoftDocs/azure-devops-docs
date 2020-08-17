---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 08/19/2020
ms.topic: include
---

### Same-organization upstreams for Universal Packages

Now you can configure your Azure Artifacts feeds to automatically download Universal Packages from upstream sources on demand.

Previously, you could configure upstream sources on your feed for NuGet, Python, Maven, and npm packages, but not for Universal Packages. This was due to a difference in the storage technology used for Universal Packages, which support much large packages than other supported package types.

You can now configure upstream sources for Universal Packages in the same way as for other package types; open your feed settings, click **Upstream sources** -> **Add upstream source** -> and choose the source type that is right for you. You will see Universal Packages (UPack) as a new option in the next view (see image below). For more information, please see the upstream sources configuration [documentation](https://docs.microsoft.com/azure/devops/artifacts/how-to/set-up-upstream-sources?view=azure-devops#:~:text=Add%20an%20Azure%20Artifacts%20feed%20in%20your%20organization,dialog%20where%20you%20can%20choose%20Add%20upstream%20source.).

<img src="../../media/174-artifacts-1-0.png" width="600" alt="upack">

Note that Universal Packages in upstream sources are only supported between feeds in the same DevOps Organization. We have work this upcoming to add this functionality for use with feeds on other organizations associated with your AAD.
