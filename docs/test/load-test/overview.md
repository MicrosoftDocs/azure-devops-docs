---
title: Load test overview
description: Changes to functionality in Visual Studio and cloud load testing in Azure DevOps
ms.assetid: EE700B72-6DE1-4561-BE43-50AB0842FD1F
ms.prod: devops
ms.technology: devops-test
ms.topic: overview
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 01/18/2019
monikerRange: '> tfs-2018'
---

# Changes to load test functionality in Visual Studio and cloud load testing in Azure DevOps

[!INCLUDE [version-header-devops-services](../_shared/version-header-devops-services.md)] 

Web performance and load test functionality in Visual Studio is deprecated.
Visual Studio 2019 will be the last version of Visual Studio containing web performance and load test features
[(more details)](https://docs.microsoft.com/en-us/visualstudio/releases/2019/release-notes-preview#test-tools).

Cloud load testing (CLT) functionality in Azure DevOps is deprecated.
The changes to cloud load testing functionality in Azure DevOps include all entry points for the load testing service:

1. [Web-based experience for load testing in Azure DevOps](get-started-simple-cloud-load-test.md) (URL-based, HAR file, Apache JMeter and Visual Studio web test).

1. [Running a load test in the cloud using Visual Studio](getting-started-with-performance-testing.md) (both auto-provisioned agents and self-provisioned agents).

1. [Running performance tests using the Azure portal](app-service-web-app-performance-test.md) (performance test in App Services and Application Insights).

1. Running load tests in a CI/CD pipeline using the load testing tasks ([Cloud-based Load Test](../../pipelines/tasks/test/cloud-based-load-test.md) task,
   [Apache JMeter Test](../../pipelines/tasks/test/run-jmeter-load-test.md) task, and [Cloud-based Web Performance Test](../../pipelines/tasks/test/cloud-based-web-performance-test.md) task). 

<a name="timeframe"></a>
## Timeframe 

### On-premises load testing with Visual Studio and Test Controller/Test Agent

Visual Studio 2019 will be the last version of Visual Studio with the web performance and load test capability.
Visual Studio 2019 is also the last release for Test Controller and Test Agent (installed through the 'Agents for Visual Studio SKU')
for setting up a load test rig on-premises.

While no new features will be added, load test in VS 2019 will continue to be supported for any issues that may
arise during the support lifecycle of the product. See [Product Lifecycle and Servicing](https://docs.microsoft.com/en-us/visualstudio/productinfo/vs-servicing-vs). 
 
### Cloud-based load testing service (CLT) availability timeframe for:

1. Existing customers of CLT:

   * For existing Azure DevOps customers using cloud-load testing functionality in the Azure DevOps portal,
     this feature will no longer be available as of March 31, 2020.  

   * For existing Azure customers using the performance test feature in App Services or Application Insights,
     this feature will no longer be available as of March 31, 2020. 

   * For Visual Studio users leveraging cloud-based load testing, this feature will no longer be supported
     as of March 31, 2020. Visual Studio Enterprise customers can, however, continue to run load tests on-premises
     using Test Controller/Test Agent and will be supported for any issues that may arise during the
     [support lifecycle](https://docs.microsoft.com/en-us/visualstudio/productinfo/vs-servicing-vs) of the Visual Studio version.  
 
1. New customers of CLT:

   New Azure DevOps organizations and new Azure subscriptions created after March 31st, 2019
   will not have access to the cloud-based load testing functionality. 

## Alternatives

For customers who prefer to continue using a self-service model for load test and cloud-load testing,
there are a number of free and commercial tools available.

For example, [Apache JMeter](http://jmeter.apache.org) is a free, popular open source tool with a strong community backing.
It supports many different protocols and has rich extensibility that can be leveraged to customize the tool to your needs.
In addition, if you have been using Apache JMeter to run load tests using the cloud-based load testing service,
you will be able to use these load tests with alternatives that support them.

The following table outlines how the concepts in Visual Studio load test map to those in Apache JMeter.

| Visual Studio Load test | Apache JMeter load test |
| --- | --- |
|Load test (.loadtest file) | JMX (.jmx file) |
|Webtest recorder | [HTTP(S) test script recorder](http://jmeter.apache.org/usermanual/component_reference.html) |
|Webtest | [HTTP sampler](http://jmeter.apache.org/usermanual/component_reference.html#HTTP_Request) |
|Unit test | [JUnit sampler](http://jmeter.apache.org/usermanual/junitsampler_tutorial.html) |
|Selenium test | [WebDriver sampler](https://jmeter-plugins.org/wiki/WebDriverTutorial/) |
|Request and test plugins for extensibility | Extensibility using [JMeter plugins](https://jmeter-plugins.org/) |
|Reporting | [Dashboard](http://jmeter.apache.org/usermanual/generating-dashboard.html) |
|Distribution using Test Controller/Test Agent | [Distribution in Apache JMeter](http://jmeter.apache.org/usermanual/jmeter_distributed_testing_step_by_step.html) |

Many commercial services such as [Blazemeter](https://www.blazemeter.com/) support running Apache JMeter tests.
 
If you use code based tests for load testing and .NET is your platform of choice then tools such as
[Neoload](https://www.neotys.com/neoload/overview), [Micro Focus Silk Performer](https://www.microfocus.com/products/silk-portfolio/silk-performer/),
and [Micro Focus Load Runner](https://www.microfocus.com/en-us/products/loadrunner-load-testing/overview) are options to consider.

In addition, extensions from several load test vendors such as [SOASTA](https://marketplace.visualstudio.com/items?itemName=SOASTA.SOASTA-Extension)
(now Akamai CloudTest), [Apica Loadtest](https://marketplace.visualstudio.com/items?itemName=apicasystem.apica-loadtest), and
[Load Impact](https://marketplace.visualstudio.com/items?itemName=julienstroheker.loadimpact) are available in the Azure DevOps and Azure marketplace.


## Download load tests and results

If you are using URL, HAR, or Visual Studio webtest-based load tests, you can download the tests
by using the **Export test to Visual Studio** option and use the test through Visual Studio during the
[timeframe outlined above](#timeframe).

If you are using the cloud-based load testing service and want to access to results of any
existing runs after the service goes offline, you can download the reports:

* If you use Visual Studio load tests, URL-based load tests, or HAR-based load tests, download the reports in Visual Studio Enterprise for offline viewing. 

* If you use Apache JMeter, download the results file (.csv) for offline viewing using the reporters in JMeter.

## Visual Studio web performance test (.webtest file) 

Visual Studio web performance test (.webtest file) is tied to the load test
functionality and is deprecated. Some customers have used .webtest for other purposes
such as running API tests, even though it was not designed for that purpose.
Many API testing alternatives are available in the market. [SOAP UI](https://www.soapui.org/) is a free,
open source alternative to consider, and is also available as a commercial option with additional capabilities.

