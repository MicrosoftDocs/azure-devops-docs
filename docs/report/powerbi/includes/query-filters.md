---
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 09/21/2021
---

## Query filters

To determine available query filters, query the metadata as described in [Explore the Analytics OData metadata](../extend-analytics/analytics-metadata.md). You can filter your queries using any of the **NavigationProperty** **Names** listed under an **EntityType**. 

For example, the OData metadata for the **EntityType Name="TestPoint"** is as shown below for **v4-preview**.  You can add filters based on any of the listed **Property Name** values. 

> [!div class="tabbedCodeSnippets"]
```XML
> 			<EntityType Name="TestPoint">
> 				<Key>
> 					<PropertyRef Name="TestPointSK"/>
> 				</Key>
> 				<Property Name="LastResultState" Type="Microsoft.VisualStudio.Services.Analytics.Model.TestResultState">
> 					<Annotation Term="Display.DisplayName" String="Last Result State"/>
> 				</Property>
> 				<Property Name="LastResultOutcome" Type="Microsoft.VisualStudio.Services.Analytics.Model.TestOutcome">
> 					<Annotation Term="Display.DisplayName" String="Test Result Outcome"/>
> 				</Property>
> 				<Property Name="ChangedDate" Type="Edm.DateTimeOffset">
> 					<Annotation Term="Display.DisplayName" String="Changed Date"/>
> 				</Property>
> 				<Property Name="ChangedDateSK" Type="Edm.Int32"/>
> 				<Property Name="TestPointSK" Type="Edm.Int32" Nullable="false"/>
> 				<Property Name="AnalyticsUpdatedDate" Type="Edm.DateTimeOffset"/>
> 				<Property Name="ProjectSK" Type="Edm.Guid"/>
> 				<Property Name="TestSuiteSK" Type="Edm.Int32"/>
> 				<Property Name="TestPlanId" Type="Edm.Int32">
> 					<Annotation Term="Display.DisplayName" String="Test Plan Id"/>
> 				</Property>
> 				<Property Name="TestSuiteId" Type="Edm.Int32">
> 					<Annotation Term="Display.DisplayName" String="Test Suite Id"/>
> 				</Property>
> 				<Property Name="TestPointId" Type="Edm.Int32">
> 					<Annotation Term="Display.DisplayName" String="Test Point Id"/>
> 				</Property>
> 				<Property Name="TestConfigurationSK" Type="Edm.Int32"/>
> 				<Property Name="TestConfigurationId" Type="Edm.Int32">
> 					<Annotation Term="Display.DisplayName" String="Test Configuration Id"/>
> 				</Property>
> 				<Property Name="TestCaseId" Type="Edm.Int32">
> 					<Annotation Term="Display.DisplayName" String="Test Case Id"/>
> 				</Property>
> 				<Property Name="TesterUserSK" Type="Edm.Guid"/>
> 				<Property Name="AssignedToUserSK" Type="Edm.Guid"/>
> 				<Property Name="Priority" Type="Edm.Int32">
> 					<Annotation Term="Display.DisplayName" String="Priority"/>
> 				</Property>
> 				<Property Name="AutomationStatus" Type="Edm.String">
> 					<Annotation Term="Display.DisplayName" String="Automation Status"/>
> 				</Property>
> 				<NavigationProperty Name="ChangedOn" Type="Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
> 					<ReferentialConstraint Property="ChangedDateSK" ReferencedProperty="DateSK"/>
> 				</NavigationProperty>
> 				<NavigationProperty Name="Project" Type="Microsoft.VisualStudio.Services.Analytics.Model.Project">
> 					<ReferentialConstraint Property="ProjectSK" ReferencedProperty="ProjectSK"/>
> 					<Annotation Term="Display.DisplayName" String="Project"/>
> 				</NavigationProperty>
> 				<NavigationProperty Name="TestSuite" Type="Microsoft.VisualStudio.Services.Analytics.Model.TestSuite">
> 					<ReferentialConstraint Property="TestSuiteSK" ReferencedProperty="TestSuiteSK"/>
> 					<Annotation Term="Display.DisplayName" String="Test Suite"/>
> 				</NavigationProperty>
> 				<NavigationProperty Name="TestConfiguration" Type="Microsoft.VisualStudio.Services.Analytics.Model.TestConfiguration">
> 					<ReferentialConstraint Property="TestConfigurationSK" ReferencedProperty="TestConfigurationSK"/>
> 					<Annotation Term="Display.DisplayName" String="Test Configuration"/>
> 				</NavigationProperty>
> 				<NavigationProperty Name="TestCase" Type="Microsoft.VisualStudio.Services.Analytics.Model.WorkItem">
> 					<ReferentialConstraint Property="TestCaseId" ReferencedProperty="WorkItemId"/>
> 					<Annotation Term="Display.DisplayName" String="Test Case Work Item"/>
> 				</NavigationProperty>
> 				<NavigationProperty Name="Tester" Type="Microsoft.VisualStudio.Services.Analytics.Model.User">
> 					<ReferentialConstraint Property="TesterUserSK" ReferencedProperty="UserSK"/>
> 					<Annotation Term="Display.DisplayName" String="Tester User Name"/>
> 				</NavigationProperty>
> 				<NavigationProperty Name="AssignedTo" Type="Microsoft.VisualStudio.Services.Analytics.Model.User">
> 					<ReferentialConstraint Property="AssignedToUserSK" ReferencedProperty="UserSK"/>
> 					<Annotation Term="Display.DisplayName" String="Assigned To"/>
> 				</NavigationProperty>
> 			</EntityType>
> ```


