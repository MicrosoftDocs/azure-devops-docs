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


### Update Package Version REST API now available for Maven packages

You can now use the Azure Artifacts &quot;Update Package Version&quot; REST API to update Maven package versions. Previously, you could use the REST API to update package versions for NuGet, Maven, npm, and Universal Packages, but not Maven packages.

To update Maven packages, use the HTTP PATCH command as follows.

PATCH [https://pkgs.dev.azure.com/{organization}/{project?}/\_apis/packaging/feeds/{feedId}/maven/groups/{groupId}/artifacts/{artifactId}/versions/{packageVersion}?api-version=5.1-preview.1](https://nam06.safelinks.protection.outlook.com/?url=https://pkgs.dev.azure.com/%257Borganization%257D/%257Bproject%257D/_apis/packaging/feeds/%257BfeedId%257D/maven/packages/%257BpackageName%257D/versions/%257BpackageVersion%257D?api-version%3D5.1-preview.1&amp;data=02%7C01%7CHelen.Huang%40microsoft.com%7C598e6128e81e40ed5c6008d84094d5fb%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637330355271044422&amp;sdata=d8Ia87P0GANE3ptVrEWaWgA2r82AiU2xD9x6hpwbjFc%3D&amp;reserved=0)

You can set the following:

**URI Parameters**

| **Name** | **In** | **Required** | **Type** | **Description** |
| --- | --- | --- | --- | --- | --- |
| artifactId | path | TRUE | string | Artifact ID of the package. |
| feed | path | TRUE | string | Name or ID of the feed. |
| groupId | path | TRUE | string | Group ID of the package. |
| organization | path | TRUE | string | The name of the Azure DevOps organization. |
| version | path | TRUE | string | Version of the package. |
| project | path || string | Project ID or project name |
| api-version | query | TRUE | string | Version of the API to use. This should be set to &#39;5.1-preview.1&#39; to use this version of the api. |
|


**Request Body**

| **Name** | **Type** | **Description** |
| --- | --- | --- | --- |
| views | [JsonPatchOperation](https://docs.microsoft.com/rest/api/azure/devops/artifactspackagetypes/python/update%20package%20version?view=azure-devops-rest-5.1#jsonpatchoperation) | The view to which the package version will be added |
|

For more information, please refer to the [REST API documentation](https://docs.microsoft.com/rest/api/azure/devops/artifactspackagetypes/maven?view=azure-devops-rest-5.1) as it gets updated.



