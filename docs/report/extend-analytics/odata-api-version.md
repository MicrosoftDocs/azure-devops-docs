---
title: OData API versioning
titleSuffix: VSTS 
description: How the Analytics service for Visual Studio Team Services manages changes to the OData API  
ms.prod: devops
ms.technology: devops-analytics
ms.assetid:  
ms.reviewer: prprice
ms.manager: douge
ms.author: kaelli
ms.topic: reference
ms.date: 11/13/2017
---

# OData API versioning


[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

As the Analytics Service grows and changes we are dedicated to providing consistency and reliability to our users. Therefore the Analytics Service for Visual Studio Team Services (VSTS) provides a versioned OData API that will remain compatible with clients designed for those versions. Each version may be enhanced with additional functionality and non-breaking changes. Incompatible or breaking changes will be rolled into future versions of the API.

The API version follows the _odata element in the request path and is formatted like **v1.0** or **v1.0-preview**.

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/{version}/$metadata
```

[!INCLUDE [temp](../_shared/analytics-preview.md)]

## Breaking vs non-breaking changes
The data model exposed by the Analytics Service defines the contract between the service and its clients. The OData spec requires that clients be tolerant of additive changes to the data model, so breaking changes will be introduced in future versions. For more information see the OData spec: 
[OData Version 4.0 Part 5: Versioning](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752208)

> [!NOTE]  
> The system doesn't version any custom work item fields. Also, it's possible to cause breaking changes to your model by removing, or changing the types of, custom fields. All work items, and their revisions, will reflect the current custom field configuration.

### Example of non-breaking changes
Consider a scenario where a new UserType property is added to the User entity.

> [!div class="tabbedCodeSnippets"]
```XML
<EntityType Name="User">
    <Key>
        <PropertyRef Name="UserSK"/>
    </Key>
    <Property Name="UserSK" Type="Edm.Guid" Nullable="false"/>
    <Property Name="UserId" Type="Edm.Guid" Nullable="false">
        <Annotation Term="Display.DisplayName" String="User Id"/>
    </Property>
    <Property Name="UserName" Type="Edm.String">
        <Annotation Term="Display.DisplayName" String="User Name"/>
    </Property>
    <Property Name="UserEmail" Type="Edm.String">
        <Annotation Term="Display.DisplayName" String="User Email"/>
    </Property>
    <!-- New User Type property -->
    <Property Name="UserType" Type="Edm.Int32">
        <Annotation Term="Display.DisplayName" String="User Type"/>
    </Property>
    <!-- New User Type property -->
</EntityType>
```
This change is additive and could be made available in the current **v1.0** version.

### Example of breaking changes
Now consider a scenario where we revert to the original structure of the User entity, causing the removal of a previously available feature.


> [!div class="tabbedCodeSnippets"]
```XML
<EntityType Name="User">
    <Key>
        <PropertyRef Name="UserSK"/>
    </Key>
    <Property Name="UserSK" Type="Edm.Guid" Nullable="false"/>
    <Property Name="UserId" Type="Edm.Guid" Nullable="false">
        <Annotation Term="Display.DisplayName" String="User Id"/>
    </Property>
    <Property Name="UserName" Type="Edm.String">
        <Annotation Term="Display.DisplayName" String="User Name"/>
    </Property>
    <Property Name="UserEmail" Type="Edm.String">
        <Annotation Term="Display.DisplayName" String="User Email"/>
    </Property>
    <!-- User Type property has been removed -->
</EntityType>
```

Since removal of the UserType field is a breaking change the field would not be removed until version **v2.0** of the API. **v1.0** of the data model would still include the UserType field.

## Version lifecycle
Each version of the OData API will go through three phases during its lifecycle. 

### 1 - Preview
All breaking changes will be combined and released together in future versions of the API. In order to make this functionality available as early as possible, we will release new versions in **preview** mode. Breaking changes are still possible while a version is in preview mode. Also, there is no guarantee that what is included in a preview version will be included in a released version.

The preview of a version will be available for a minimum of 6 weeks after it is released.

### 2 - Released
Once a preview version matures enough for release it will be made available without the -preview suffix. No breaking changes will be introduced to released versions, but the data model may still grow with additive functionality. Released versions will be supported for a minimum of 12 months. 

### 3 - Deprecated
Deprecated versions are no longer supported, and requests made to them will not be fulfilled. If you attempt to request a deprecated or unsupported version you will receive an HTTP 410 response code and a message like:


> *The {version} OData endpoint for Analytics is not supported. Information on the latest recommended version is available here: https://go.microsoft.com/fwlink/?linkid=856818*



## Preview versions
None

## Supported versions
v1.0

## Related articles
- [OData Version 4.0 Part 5: Versioning](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752208)
