---
title: OData API versioning
titleSuffix: Azure DevOps 
description: Learn how Analytics for Azure DevOps manages changes to the OData API.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 06/28/2022
---

# OData API versioning


[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

As the Analytics service matures, we're dedicated to providing consistency and reliability to our users. As such, Analytics for Azure DevOps provides a versioned OData API that is compatible with clients designed for those versions. Each version may be enhanced with more functionality and non-breaking changes. Incompatible or breaking changes will be rolled into future versions of the API.

The API version follows the _odata element in the request path and has value as one of our supported versions: **v1.0**, **v2.0**, **v3.0-preview**, or **v4.0-preview**.

::: moniker range="azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata
> ``` 

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://{servername}:{port}/tfs/{CollectionName}/{ProjectName}/_odata/{version}/$metadata
> ```

::: moniker-end

[!INCLUDE [temp](../includes/analytics-preview.md)]


## Preview versions

- **v3.0-preview** 
- **v4.0-preview** 

## Released versions

- **v1.0**
- **v2.0**

## Entity sets supported in each version

For information on which EntitySets are supported with each API version, see [Data model for Analytics, Entities](data-model-analytics-service.md#entities). 


## Version lifecycle

Each version of the OData API will go through three phases during its lifecycle. 

### Preview

All breaking changes will be combined and released together in future versions of the API. To make this functionality available as early as possible, well release new versions in **preview** mode. Breaking changes are still possible while a version is in preview mode. Also, there's no guarantee that what is included in a preview version will be included in a released version.

The preview of a version will be available for a minimum of six weeks after it's released.

### Released

Once a preview version matures enough for release, it will be made available without the **-preview** suffix. No breaking changes will be introduced to released versions, but the data model may still grow with additive functionality. Released versions will be supported for a minimum of 12 months. 

### Deprecated

Deprecated versions are no longer supported. Requests made to a deprecated version won't be fulfilled. If you attempt to request a deprecated or unsupported version, you'll receive an HTTP 410 response code and a message like:

> *The {version} OData endpoint for Analytics is not supported. Information on the latest recommended version is available here: https://go.microsoft.com/fwlink/?linkid=856818*
 
## Breaking vs non-breaking changes

The data model exposed by Analytics defines the contract between the service and its clients. The OData spec requires that clients be tolerant of additive changes to the data model. Breaking changes will be introduced in future versions. For more information, see 
[OData Version 4.0 Part 5: Versioning](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752208)

> [!NOTE]  
> The system doesn't version any custom work item fields. Also, it's possible to cause breaking changes to your model by removing, or changing the types of work items or custom fields. All work items, and their revisions, will reflect the current custom field configuration.

### Example of non-breaking changes

Consider a scenario where a new `UserType` property is added to the `User` entity. For example, the metadata for **v1.0** version is as shown in the following syntax. 


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

For **v4.0-preview** version, the metadata has been augmented. Changes are additive and can be made available in previous versions.

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

Now consider a scenario where we revert to the original structure of the User entity, causing the removal of a previously available feature.


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

Since removal of the `UserType` field is a breaking change, the field won't be removed until version **v2.0** of the API. Version **v1.0** of the data model continues to include the `UserType` field.


## Related articles

- [Data model for Analytics](data-model-analytics-service.md)
- [OData Version 4.0 Part 5: Versioning](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752208)
