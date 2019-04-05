---
title: Explore the OData metadata for the Analytics service 
titleSuffix: Azure DevOps  
description: Understand the entity model OData metadata defined for the Analytics service in Azure DevOps  
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: angurusw
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= azure-devops-2019'
ms.date: 04/05/2019
---

# Explore the Analytics OData metadata

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

Understanding the metadata associated with the entity model for the Analytics service is a pre-requisite for programmatically querying the [Data model for the Analytics Service](data-model-analytics-service.md). OData metadata  is a machine readable description of the entity model designed to enable client consumption. 

[!INCLUDE [temp](../_shared/analytics-preview.md)]

In this article you'll learn how to:
>[!div class="checklist"]

>* Query the metadata on a specific project
>* Query the metadata on an organization
>* Identify the keys, properties, and navigational properties associated with an Entity
>* Identify the capabilities of the Analytics OData endpoint

<a id="query-metadata" />

## How to query the service for metadata

Analytics exposes the [entity model](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part3-csdl/odata-v4.0-errata03-os-part3-csdl-complete.html#_Toc453752500) at the metadata URL, formed by appending $metadata to the service root URL. Analytics provides service roots for a [project or an entire  organization in Azure DevOps](account-scoped-queries.md).

### Query for metadata on a specific project

You construct the service root URL for a project as shown:

::: moniker range="azure-devops"

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata
``` 

::: moniker-end

[!INCLUDE [temp](../_shared/api-versioning.md)]

::: moniker range="azure-devops-2019"

> [!div class="tabbedCodeSnippets"]
```OData
https://{servername}:{port}/tfs/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata
```

> [!NOTE]
> The examples shown in this document are based on a Azure DevOps Services URL, you will need to substitute in your Azure DevOps Server URL

::: moniker-end

<a id="metadata-response" />

## Interpret the metadata response

The core components of the metadata response are EntityType and EntityContainer.

> [!div class="tabbedCodeSnippets"]
```XML
<?xml version="1.0" encoding="UTF-8"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">
    <edmx:DataServices>
        <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="Microsoft.VisualStudio.Services.Analytics.Model">
           <EntityType Name="Entity Name"/>
        </Schema>
        <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="Default">
           <EntityContainer Name="Container"/>
        </Schema>
    </edmx:DataServices>
</edmx:Edmx>
```

## EntityTypes

EntityTypes define each of the Entities in the model including properties and relationships. 

> [!div class="tabbedCodeSnippets"]
```XML
<EntityType Name="Project">
   <Key>
      <PropertyRef Name="ProjectSK"/>
   </Key>
   <Property Name="ProjectSK" Nullable="false" Type="Edm.Guid"/>
   <Property Name="ProjectId" Nullable="false" Type="Edm.Guid">
      <Annotation String="Project Id" Term="Display.DisplayName"/>
   </Property>
   <Property Name="ProjectName" Nullable="false" Type="Edm.String">
      <Annotation String="Project Name" Term="Display.DisplayName"/>
   </Property>
   <NavigationProperty Name="Areas" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Area)"/>
   <NavigationProperty Name="Iterations" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Iteration)"/>
   <NavigationProperty Name="Teams" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Team)"/>
</EntityType>
```

### Keys

Keys define the Entity properties available for use as a Navigational Property.

> [!div class="tabbedCodeSnippets"]
```XML
<Key>
   <PropertyRef Name="ProjectSK"/>
</Key>
```

### Properties

The set of Entity properties available for query. Annotations represent additional details about a given property. 

Any property of Analytics that should be visible to end users is annotated with a DisplayName.

> [!div class="tabbedCodeSnippets"]
```XML
<Property Name="ProjectSK" Nullable="false" Type="Edm.Guid"/>
<Property Name="ProjectId" Nullable="false" Type="Edm.Guid">
   <Annotation String="Project Id" Term="Display.DisplayName"/>
</Property>
<Property Name="ProjectName" Nullable="false" Type="Edm.String">
   <Annotation String="Project Name" Term="Display.DisplayName"/>
</Property>
```

ReferenceName is another common annotation used to define the system identifier for a specific property.

> [!div class="tabbedCodeSnippets"]
```XML
<Property Name="State" Type="Edm.String">
   <Annotation String="State" Term="Display.DisplayName"/>
   <Annotation String="System.State" Term="Ref.ReferenceName"/>
</Property>
```

### Navigational properties

Querying an individual Entity is useful, but eventually you will want to be able to filter or expand details of another Entity. To do this, you need to understand how to use the [Navigational Properties](data-model-analytics-service.md) of the Entity model. 

A Navigational Property with a Collection type represents a many to many relationship in the model.

> [!div class="tabbedCodeSnippets"]
```XML
<NavigationProperty Name="Teams" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Team)"/>
```

ReferentialConstraints tie Navigational Properties to a specific key of an Entity, representing a many to one relationship in the model.

> [!div class="tabbedCodeSnippets"]
```XML
<NavigationProperty Name="Project" Type="Microsoft.VisualStudio.Services.Analytics.Model.Project">
   <ReferentialConstraint ReferencedProperty="ProjectSK" Property="ProjectSK"/>
</NavigationProperty>
```

## Containers (OData capabilities)

### EntitySets

EntitySets represents a collection of entities and associated Navigational Property Bindings and Annotations.

> [!div class="tabbedCodeSnippets"]
```XML
<EntitySet Name="Projects" EntityType="Microsoft.VisualStudio.Services.Analytics.Model.Project">
   <NavigationPropertyBinding Target="Teams" Path="Teams"/>
   <Annotation String="Projects" Term="Org.OData.Display.V1.DisplayName"/>
</EntitySet>
```

### Capabilities

Capabilities and Aggregation annotations define the set of [functions](./odata-supported-features.md) understood by the Analytics OData endpoint.

> [!div class="tabbedCodeSnippets"]
```XML
<Annotation Term="Org.OData.Capabilities.V1.FilterFunctions">
   <Collection>
      <String>contains</String>
      <String>endswith</String>
      <String>startswith</String>
      <String>length</String>
      <String>indexof</String>
      <String>substring</String>
      <String>tolower</String>
      <String>toupper</String>
      <String>trim</String>
      <String>concat</String>
      <String>year</String>
      <String>month</String>
      <String>day</String>
      <String>hour</String>
      <String>minute</String>
      <String>second</String>
      <String>fractionalseconds</String>
      <String>round</String>
      <String>floor</String>
      <String>ceiling</String>
      <String>date</String>
      <String>time</String>
      <String>isof</String>
      <String>cast</String>
   </Collection>
</Annotation>
```

> [!div class="tabbedCodeSnippets"]
```XML
<Annotation Term="Org.OData.Aggregation.V1.ApplySupported">
   <Record>
      <PropertyValue Property="Transformations">
         <Collection>
            <String>aggregate</String>
            <String>filter</String>
            <String>groupby</String>
         </Collection>
      </PropertyValue>
   </Record>
</Annotation>
```

> [!div class="tabbedCodeSnippets"]
```XML
<Annotation Term="Org.OData.Capabilities.V1.BatchSupportType" Bool="true"/>
<Annotation Term="Org.OData.Capabilities.V1.BatchSupportType">
   <Record>
      <PropertyValue Property="Supported" Bool="true"/>
      <PropertyValue Property="ContinueOnErrorSupported" Bool="false"/>
      <PropertyValue Property="ReferencesInRequestBodiesSupported" Bool="false"/>
      <PropertyValue Property="ReferencesAcrossChangeSetsSupported" Bool="false"/>
      <PropertyValue Property="EtagReferencesSupported" Bool="false"/>
   </Record>
</Annotation>
```


## Try this next

> [!div class="nextstepaction"]
> [Data model for the Analytics Service](data-model-analytics-service.md)


## Related articles

- [Data model for the Analytics Service](data-model-analytics-service.md)
- [Organization and project-scoped queries](account-scoped-queries.md).
- [OData Version 4.0. Part 3: Common Schema Definition Language (CSDL) Plus Errata 03, Entity Model Wrapper](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part3-csdl/odata-v4.0-errata03-os-part3-csdl-complete.html#_Toc453752500) 
