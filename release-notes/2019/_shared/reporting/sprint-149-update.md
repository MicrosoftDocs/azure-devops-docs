---
ms.topic: include
---

### Analytics services OData version change for test entity sets

The Analytics service in Azure DevOps consists of entity sets that you can directly query from a supported browser using OData. The service provides a versioned OData API that you can add to the _odata element.

With this update we are migrating the test entity sets to version 3.0-preview. If you are using the OData 2.0-preview version endpoint, you will have to change to version 3.0-preview to prevent breaking changes.

The following list includes the entity sets that will be migrated to version 3.0-preview:

* TestRuns
* TestResults
* Tests
* Builds
* Branches
* Releases
* ReleaseEnvironments
* TestResultsDaily
* ReleasePipelines
* ReleaseStages
* BuildPipelines

For more information on using the OData endpoint with the Analytics service see the documentation [here](https://docs.microsoft.com/azure/devops/report/extend-analytics/odata-api-version?view=azure-devops).
