---
title: Load Testing with Visual Studio and VSTS
description: About Load Testing, overview of capabilities and features
ms.assetid: EE700B72-6DE1-4561-BE43-50AB0842FD1F
ms.prod: devops
ms.technology: devops-test
ms.topic: overview
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Load testing scenarios and capabilities

**Visual Studio 2017 | Visual Studio 2015 | VSTS | [Previous version](https://msdn.microsoft.com/library/dn250793%28v=vs.120%29.aspx)**

![Cloud-based Load Testing](_img/performance-testing/IC838830.png)

Load test your app with hundreds of thousands of users using 
[Visual Studio Team Services (VSTS)](http://go.microsoft.com/fwlink/?LinkId=307137&clcid=0x409&wt.mc_id=o~msft~vscom~getstarted-hero~dn906133&campaign=o~msft~vscom~getstarted-hero~dn906133&scenario=test).

## Comprehensive testing capabilities

* Load test web sites, apps, and APIs.

*  Author tests using [Visual Studio](run-performance-tests-app-before-release.md), 
    [Azure](app-service-web-app-performance-test.md), and
    [VSTS](get-started-simple-cloud-load-test.md).

*  Quickly create load tests by specifying a [website](get-started-simple-cloud-load-test.md), referencing a 
    [JMeter test](get-started-jmeter-test.md) file, or
    [recording and replaying your actions](record-and-replay-cloud-load-tests.md).

*  Run tests or customize them using [powerful tools in Visual Studio](run-performance-tests-app-before-release.md).

*  You can even use existing unit or functional tests to generate load.

![Comprehensive testing capabilities](_img/performance-testing/load-test-menu.png)

## Cloud scalable

* Scale to hundreds of thousands of concurrent users, and generate hundreds of thousands of connections in minutes.

* Cloud-based load testing leveraging the power of Azure is like having a whole performance lab at your fingertips.

* Of course you can [run your load test from on-premises agents](https://docs.microsoft.com/visualstudio/test/lab-management/using-a-lab-environment-for-your-application-lifecycle) too!<p />

![Cloud scalable](_img/performance-testing/IC778490.png)

## Generate load from multiple regions worldwide

* Run tests from one of many global Azure datacenter locations to minimize latency
  and simulate users' real-world conditions.

![Generate load from multiple regions worldwide](_img/performance-testing/IC778317.png)

## Deep analysis with rich diagnostics

* Includes trace and exception logging.

* View app performance with [real-time charts and graphs](performance-reports.md).

* Go even further with [Application Insights](get-performance-data-for-load-tests.md), 
  and correlate test results with server diagnostics.

![Deep analysis with rich diagnostics](_img/performance-testing/IC778315.png)

## Free allocation and flexible low-cost pricing

* Pricing is per virtual user minute (VUM) - a measure 
  of how long your test is and how many users the test simulates.

* You get a generous allocation of virtual user minutes free each month.
  See the [VSTS Pricing](https://www.visualstudio.com/team-services/pricing/) page.
  
## More information

* [Get started with load testing](getting-started-with-performance-testing.md)

* [Run URL-based load tests with VSTS](get-started-simple-cloud-load-test.md)

* [Run Apache JMeter load tests with VSTS](get-started-jmeter-test.md)

* [Performance test your Azure web app under load](app-service-web-app-performance-test.md)

* [Pricing for VSTS features](https://www.visualstudio.com/team-services/pricing/)

If you prefer to run your tests in a local environment rather than in the cloud, see
[Load test with Visual Studio](https://docs.microsoft.com/visualstudio/test/quickstart-create-a-load-test-project).

> See also [Manual and exploratory testing](../index.md), [Continuous testing](../../pipelines/test/index.md), [Unit testing](https://docs.microsoft.com/en-gb/visualstudio/test/unit-test-your-code).

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
