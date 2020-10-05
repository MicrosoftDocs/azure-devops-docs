---
title: End-to-end traceability
titleSuffix: Azure DevOps
description: Learn about the tools and features that support traceability from requirements to deployment    
ms.technology: devops-agile 
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 10/05/2020
---



# End-to-end traceability 

[!INCLUDE [temp](../includes/version-vsts-only.md)]


Become familiar with the essential concepts to manage projects using Agile tools. Gain an overview of Azure DevOps tools and features to manage requirements. This article maps Agile requirements management tasks by project managers to the tools Azure DevOps supports. More detailed information is provided under [Related articles](#related-articles).   

When we demo traceability to customers, the main demo we show is 
- Create a work item
- Create a branch from the work item
- Make a change in the branch, create a pull request
- Validate the pull request using a build
- Merge the pull request, build the master branch
- Deploy it to production and in all of this show how every artifact is linked to the other. For instance, the production deployment shows the work items and commits, the work item shows which build it was part of, etc.   



> [!NOTE]
> *Your journey to end-to-end traceability is all about tracking where work originates right through to delivery (and back through the customer feedback loop). To be able to do this you first have to start by understanding where you're at.*  
> *Traceability in software engineering is the ability to trace work items across the development lifecycle. It's used to keep track of what's going on in the development lifecycle — and show what's happened. Achieving regulatory compliance is a common purpose for traceability in software engineering.*

While commiting the code changes you should associate the work item
After commiting the CI Build will trigger. Post that in that work item, there will be link reference to the Build
And when this build is deployed to any of the release environments, it will be displayed under. You can check this new feature introduced in Azure DevOps here
But if you want all this information in a table, in one single view. You have to use Azure DevOps REST APIs to build a customer report to get all the data in one place.


## Drive development from requirements

## Run tests from requirements 


> [!NOTE]
> *Test traceability is the ability to link a test to a set of requirements and confidently verify that the application works as expected.*

<a id="related-articles" />

## Link requirements to deployments


## Requirements Traceability Matrix

> [!NOTE]
> *The Requirements Traceability Matrix (RTM) is a document that links requirements throughout the validation process. The purpose of the Requirements Traceability Matrix is to ensure that all requirements defined for a system are tested in the test protocols.* 


## Requirements traceability reports 

Requirements traceability reports 

## Related articles 

To learn more about any of the concepts introduced in this article, refer to the following articles. 

#### Industry articles

- [The Key To Managing Risk During Agile](https://clearbridgemobile.com/how-to-manage-software-development-risks-in-an-agile-environment/)
- [Risk Management in an Agile Lifecycle](https://www.agilealliance.org/wp-content/uploads/2016/01/Agile-Risk-Management-Agile-2012.pdf)
 


#### Traceability

- [Drive Git development from a work item](../boards/backlogs/connect-work-items-to-git-dev-ops.md)
- [Requirements traceability](../pipelines/test/requirements-traceability.md) 
- [Requirements tracking sample report](../report/powerbi/sample-stories-overview.md)
- [Requirements tracking rollup sample report](../report/powerbi/sample-stories-overview-rollup.md)
- [Link work items to deployments](../boards/work-items/work-item-deployments-control.md)

<!--- 
  

--> 