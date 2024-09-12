---
title: OData API versioning
titleSuffix: Azure DevOps 
description: Learn how Analytics for Azure DevOps manages changes to the OData API.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ai-usage: ai-assisted
monikerRange: '>= azure-devops-2019'
ms.date: 09/12/2024
---

# OData API versioning


[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Analytics for Azure DevOps offers a versioned OData API compatible with clients designed for specific versions. Each version might include enhancements and non-breaking changes, while breaking changes get introduced in future versions.

The API version follows the `_odata` element in the request path and can be one of the supported versions: **v1.0**, **v2.0**, **v3.0-preview**, or **v4.0-preview**.

::: moniker range="azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata
> ``` 

::: moniker-end

::: moniker range=" < azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://{servername}:{port}/tfs/{CollectionName}/{ProjectName}/_odata/{version}/$metadata
> ```

::: moniker-end

[!INCLUDE [temp](../includes/analytics-preview.md)]


## Differences between versions

**v1.0 and v2.0:** These are the **released** versions of the OData API. They are stable and do not include breaking changes. v2.0 includes enhancements and additional functionality compared to v1.0.

**v3.0-preview and v4.0-preview:** These are **preview** versions, which means they may include breaking changes and are not guaranteed to have the same features in the final release. They offer early access to new features and improvements that are not yet available in the released versions.

### Why choose a specific version?

- **Stability:** If you need a stable and reliable API without breaking changes, you should choose one of the released versions (v1.0 or v2.0).
- **New features:** If you want to take advantage of the latest features and improvements, you might opt for one of the preview versions (v3.0-preview or v4.0-preview). However, be aware that these versions might include breaking changes and are subject to change.
- **Compatibility:** Ensure that the version you choose is compatible with your existing clients and systems. The API version follows the `_odata` element in the request path and can be one of the supported versions: v1.0, v2.0, v3.0-preview, or v4.0-preview.

## Entity sets supported in each version

For information on which EntitySets are supported with each API version, see [Data model for Analytics, Entities](data-model-analytics-service.md#entities). 

## Version lifecycle

Each version of the OData API goes through the following three phases during its lifecycle. 

### 1. Preview phase

We combine and release all breaking changes together in future versions of the API. To make this functionality available as early as possible, we release new versions in **preview** mode. Breaking changes are still possible while a version is in preview mode, and there's no guarantee that what is included in a preview version will be included in the released version. The preview of a version remains available for a minimum of six weeks after its release.

### 2. Released

Once a preview version matures and is ready for release, it becomes available without the **-preview** suffix. Released versions don't include breaking changes, although the data model might still expand with additional functionality. We support released versions for a minimum of 12 months.

### 3. Deprecated

Deprecated versions are no longer supported, and requests to these versions aren't fulfilled. If you attempt to request a deprecated or unsupported version, you receive an HTTP 410 response code and a message such as:

> *The {version} OData endpoint for Analytics is not supported. Information on the latest recommended version is available here: https://go.microsoft.com/fwlink/?linkid=856818*
 
## Breaking vs non-breaking changes

The data model exposed by Analytics defines the contract between the service and its clients. According to the OData specification, clients must be tolerant of additive changes to the data model. Breaking changes get introduced in future versions. For more information, see [OData Version 4.0 Part 5: Versioning](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752208).

> [!NOTE]  
> The system doesn't version any custom work item fields. The system doesn't version any custom work item fields. Removing or changing the types of work items or custom fields can cause breaking changes to your model. All work items and their revisions reflect the current custom field configuration.

### Example of non-breaking changes

Consider a scenario where a new `UserType` property is added to the `User` entity. For example, the metadata for **v1.0** version is shown in the following syntax. 


> [!div class="tabbedCodeSnippets"]
> ```XML
> <EntityType Name="User">
>     <Key>
>         <PropertyRef Name="UserSK"/>
>     </Key>
>     <Property Name="UserSK" Type="Edm.Guid" Nullable="false"/>
>     <Property Name="UserId" Type="Edm.Guid">
>         <Annotation Term="Display.DisplayName" String="User Id"/>
>     </Property>
>     <Property Name="UserName" Type="Edm.String">
>         <Annotation Term="Display.DisplayName" String="User Name"/>
>     </Property>
>     <Property Name="UserEmail" Type="Edm.String">
>         <Annotation Term="Display.DisplayName" String="User Email"/>
>     </Property>
>     <!-- New User Type property -->
>     <Property Name="UserType" Type="Edm.Int32">
>         <Annotation Term="Display.DisplayName" String="User Type"/>
>     </Property>
>     <!-- New User Type property -->
> </EntityType>
> ```

In the **v4.0-preview** version, the metadata is augmented with additive changes. These changes can also be made available in previous versions.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <EntityType Name="User">
>   <Key>
>     <PropertyRef Name="UserSK"/>
>   </Key>
>   <Property Name="UserSK" Type="Edm.Guid" Nullable="false"/>
>   <Property Name="UserId" Type="Edm.Guid">
>     <Annotation Term="Display.DisplayName" String="User Id"/>
>   </Property>
>   <Property Name="UserName" Type="Edm.String">
>     <Annotation Term="Display.DisplayName" String="User Name"/>
>     <Annotation Term="Microsoft.VisualStudio.Services.Analytics.IsPersonallyIdentifiableInformation" Bool="true"/>
>   </Property>
>   <Property Name="UserEmail" Type="Edm.String">
>     <Annotation Term="Display.DisplayName" String="User Email"/>
>     <Annotation Term="Microsoft.VisualStudio.Services.Analytics.IsPersonallyIdentifiableInformation" Bool="true"/>
>   </Property>
>   <Property Name="AnalyticsUpdatedDate" Type="Edm.DateTimeOffset"/>
>   <Property Name="GitHubUserId" Type="Edm.String">
>     <Annotation Term="Display.DisplayName" String="GitHub User Id"/>
>   </Property>
>   <Property Name="UserType" Type="Microsoft.VisualStudio.Services.Analytics.Model.UserType">
>     <Annotation Term="Display.DisplayName" String="User Type"/>
>   </Property>
> </EntityType>
> ```

### Example of breaking changes

Consider a scenario where we revert to the original structure of the `User` entity, resulting in the removal of a previously available feature.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <EntityType Name="User">
>     <Key>
>         <PropertyRef Name="UserSK"/>
>     </Key>
>     <Property Name="UserSK" Type="Edm.Guid" Nullable="false"/>
>     <Property Name="UserId" Type="Edm.Guid" Nullable="false">
>         <Annotation Term="Display.DisplayName" String="User Id"/>
>     </Property>
>     <Property Name="UserName" Type="Edm.String">
>         <Annotation Term="Display.DisplayName" String="User Name"/>
>     </Property>
>     <Property Name="UserEmail" Type="Edm.String">
>         <Annotation Term="Display.DisplayName" String="User Email"/>
>     </Property>
>     <!-- User Type property has been removed -->
> </EntityType>
> ```

Since removal of the `UserType` field is a breaking change, the field isn't removed until version **v2.0** of the API. Version **v1.0** of the data model continues to include the `UserType` field.

## Related articles

- [Data model for Analytics](data-model-analytics-service.md)
- [OData Version 4.0 Part 5: Versioning](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752208)
