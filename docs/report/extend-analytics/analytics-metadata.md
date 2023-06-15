---
title: OData metadata for Analytics 
titleSuffix: Azure DevOps  
description: Learn about the entity model OData metadata defined for Analytics in Azure DevOps.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '>= azure-devops-2019'
ms.date: 11/08/2022
---

# Analytics OData metadata

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Understanding the metadata associated with the entity model for Analytics is a prerequisite for programmatically querying the [Data model for Analytics](data-model-analytics-service.md). OData metadata is a machine-readable description of the entity model designed to enable client consumption. 

> [!NOTE]
> *"The Open Data Protocol (OData) is a data access protocol built on core protocols like HTTP and commonly accepted methodologies like REST for the web. There are various kinds of libraries and tools can be used to consume OData services."* - [OData Organization Basic Tutorial](https://www.odata.org/getting-started/basic-tutorial/).


In this article you'll learn how to:
> [!div class="checklist"]
> * Query the metadata on a specific project
> * Query the metadata on an organization
> * Identify the keys, properties, and navigational properties associated with an Entity
> * Identify the capabilities of the Analytics OData endpoint

For detailed descriptions for all OData elements, see [OData model](/odata/concepts/data-model). For information on querying the metadata, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md).


[!INCLUDE [temp](../includes/analytics-preview.md)]

## Entity sets and entity types

Entities are the core identity types in a data model. Entity sets are named collections of entities. For example, `Projects` is an entity set containing `Project` entities. An entity can be a member of at most one entity set.


`EntitySets` and `EntityTypes` define each of the entities in the Analytics model including properties and relationships. Entity types define the named properties and relationships of an entity. Entity types may derive by single inheritance from other entity types. The key of an entity type is formed from a subset of its primitive properties. 

The following example shows the metadata associated with the `Project` entity type.  

> [!div class="tabbedCodeSnippets"]
> ```XML
> <EntityType Name="Project">
>   <Key>
>     <PropertyRef Name="ProjectSK"/>
>   </Key>
>   <Property Name="ProjectSK" Type="Edm.Guid" Nullable="false"/>
>   <Property Name="ProjectId" Type="Edm.Guid" Nullable="false">
>     <Annotation Term="Display.DisplayName" String="Project Id"/>
>   </Property>
>   <Property Name="ProjectName" Type="Edm.String" Nullable="false">
>     <Annotation Term="Display.DisplayName" String="Project Name"/>
>   </Property>
>   <Property Name="AnalyticsUpdatedDate" Type="Edm.DateTimeOffset"/>
>   <Property Name="ProjectVisibility" Type="Microsoft.VisualStudio.Services.Analytics.Model.ProjectVisibility">
>     <Annotation Term="Display.DisplayName" String="Project Visibility"/>
>   </Property>
>   <NavigationProperty Name="Areas" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Area)"/>
>   <NavigationProperty Name="Iterations" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Iteration)"/>
>   <NavigationProperty Name="Teams" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Team)"/>
> </EntityType>
> ```

### Keys

`Keys` define the Entity properties available for use as a Navigational Property.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <Key>
>    <PropertyRef Name="ProjectSK"/>
> </Key>
> ```

### Properties

The set of `Entity properties available for query. Annotations represent other details about a given property. 

Any property of Analytics that should be visible to end users is annotated with a `DisplayName`.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <Property Name="ProjectSK" Nullable="false" Type="Edm.Guid"/>
> <Property Name="ProjectId" Nullable="false" Type="Edm.Guid">
>    <Annotation String="Project Id" Term="Display.DisplayName"/>
> </Property>
> <Property Name="ProjectName" Nullable="false" Type="Edm.String">
>    <Annotation String="Project Name" Term="Display.DisplayName"/>
> </Property>
> ```

ReferenceName is another common annotation used to define the system identifier for a specific property.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <Property Name="State" Type="Edm.String">
>    <Annotation String="State" Term="Display.DisplayName"/>
>    <Annotation String="System.State" Term="Ref.ReferenceName"/>
> </Property>
> ```

### Navigational properties

Querying an individual Entity is useful. Eventually, you'll probably want to filter or expand details of another Entity. To do so, you need to understand how to use the [Navigational Properties](data-model-analytics-service.md) of the Entity model. 

A `NavigationaProperty` with a collection type represents a many-to-many relationship in the model.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <NavigationProperty Name="Teams" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Team)"/>
> ```

`ReferentialConstraints` tie navigational properties to a specific key of an entity, representing a many-to-one relationship in the model.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <NavigationProperty Name="Project" Type="Microsoft.VisualStudio.Services.Analytics.Model.Project">
>    <ReferentialConstraint ReferencedProperty="ProjectSK" Property="ProjectSK"/>
> </NavigationProperty>
> ```

## Containers (OData capabilities)

### EntitySets

Entities are the core identity types in a data model. Entity sets are named collections of entities. For example, `WorkItems` and `WorkItemRevisions` are `EntitySets` within the `EntityContainer` named `Container`. An entity can be a member of at most one entity set. Entity sets provide the primary entry points into the data model, and represent a collection of entities and associated Navigational property bindings and annotations.

The following syntax indicates the `Projects` entity set data model. For a description of each entity set, see [Data model for Analytics](data-model-analytics-service.md).

> [!div class="tabbedCodeSnippets"]
> ```XML
> <EntitySet Name="Projects" EntityType="Microsoft.VisualStudio.Services.Analytics.Model.Project">
>   <NavigationPropertyBinding Path="Areas" Target="Areas"/>
>   <NavigationPropertyBinding Path="Iterations" Target="Iterations"/>
>   <NavigationPropertyBinding Path="Teams" Target="Teams"/>
>   <Annotation Term="Org.OData.Display.V1.DisplayName" String="Projects"/>
> </EntitySet>
> ```

### Capabilities

Capabilities define the set of [functions](odata-supported-features.md) understood by the Analytics OData endpoint. 
 

> [!div class="tabbedCodeSnippets"]
> ```XML
> <Annotation Term="Org.OData.Capabilities.V1.FilterFunctions">
>    <Collection>
>       <String>contains</String>
>       <String>endswith</String>
>       <String>startswith</String>
>       <String>length</String>
>       <String>indexof</String>
>       <String>substring</String>
>       <String>tolower</String>
>       <String>toupper</String>
>       <String>trim</String>
>       <String>concat</String>
>       <String>year</String>
>       <String>month</String>
>       <String>day</String>
>       <String>hour</String>
>       <String>minute</String>
>       <String>second</String>
>       <String>fractionalseconds</String>
>       <String>round</String>
>       <String>floor</String>
>       <String>ceiling</String>
>       <String>date</String>
>       <String>time</String>
>       <String>isof</String>
>       <String>cast</String>
>    </Collection>
> </Annotation>
> ```
> 
### Aggregations

Aggregation annotations define the set of [transformations](./odata-supported-features.md) understood by the Analytics OData endpoint. 

> [!div class="tabbedCodeSnippets"]
> ```XML
> <Annotation Term="Org.OData.Aggregation.V1.ApplySupported">
>    <Record>
>       <PropertyValue Property="Transformations">
>          <Collection>
>             <String>aggregate</String>
>             <String>filter</String>
>             <String>groupby</String>
>             <String>compute</String>
>             <String>expand</String>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="CustomAggregationMethods ">
>          <Collection>
>            <String>ax.ApproxCountDistinct</String>
>            <String>ax.StandardDeviation</String>
>            <String>ax.StandardDeviationP</String>
>            <String>ax.Variance</String>
>            <String>ax.VarianceP</String>
>          </Collection>
>       </PropertyValue>
>    </Record>
> </Annotation>
> ```
> 
> [!div class="tabbedCodeSnippets"]
> ```XML
> <Annotation Term="Org.OData.Capabilities.V1.BatchSupportType" Bool="true"/>
> <Annotation Term="Org.OData.Capabilities.V1.BatchSupportType">
>    <Record>
>       <PropertyValue Property="Supported" Bool="true"/>
>       <PropertyValue Property="ContinueOnErrorSupported" Bool="false"/>
>       <PropertyValue Property="ReferencesInRequestBodiesSupported" Bool="false"/>
>       <PropertyValue Property="ReferencesAcrossChangeSetsSupported" Bool="false"/>
>       <PropertyValue Property="EtagReferencesSupported" Bool="false"/>
>    </Record>
> </Annotation>
> ```


## Next steps

> [!div class="nextstepaction"]
> [Data model for Analytics](data-model-analytics-service.md)
 


## Related articles

- [Data model for Analytics](data-model-analytics-service.md)
- [Organization and project-scoped queries](account-scoped-queries.md).
- [Data available from Analytics](../powerbi/data-available-in-analytics.md) 
- [Query work tracking data using Analytics](analytics-recipes.md)
- [Entities and properties reference for Azure Boards](../analytics/entity-reference-boards.md)


## Related resources 

- [Wiql to OData Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata)
- [OData Organization Basic Tutorial](https://www.odata.org/getting-started/basic-tutorial/)
- [OData Version 4.0. Part 3: Common Schema Definition Language (CSDL) Plus Errata 03, Entity Model Wrapper](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part3-csdl/odata-v4.0-errata03-os-part3-csdl-complete.html#_Toc453752500) 
