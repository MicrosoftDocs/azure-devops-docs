---
title: Continuous testing with VSTS and Team Foundation Server
description: Use continuous testing in VSTS and Team Foundation Server to ensures your app still works after every check-in and build, enabling you to find problems earlier. 
ms.assetid: 574CD62B-38DA-4015-9E15-36673C489D36
ms.prod: devops
ms.technology: devops-cicd
ms.topic: overview 
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Continuous testing scenarios and capabilities

**VSTS | TFS 2018 | TFS 2017 | TFS 2015 | [Previous version](https://msdn.microsoft.com/library/ee702477%28v=vs.120%29.aspx)**

Whether your app is on-premises or in the cloud, 
you can automate build-deploy-test workflows and 
choose the technologies and frameworks, then test 
your changes continuously in a fast, scalable, and 
efficient manner. 

![Test with VSTS and Team Foundation Server](_img/continuous-testing/test-types.png)

<a name="maintain-quality"></a>
## Maintain quality and find problems as you develop

Continuous testing with Visual Studio Team Services (VSTS)
or Team Foundation Server (TFS) ensures your app still 
works after every check-in and build, enabling you 
to find problems earlier by running tests 
automatically with each build.

<iframe width="640" height="360" src="//channel9.msdn.com/Series/Test-Tools-in-Visual-Studio/Unit-Testing-from-a-CI-Build-with-Visual-Studio-Team-Services/player" frameborder="0" allowfullscreen="true"></iframe><p />

* [Run unit tests with your builds](getting-started-with-continuous-testing.md)
* [Get started with Selenium testing](continuous-test-selenium.md)
* [Testing with unified agents and phases](test-with-unified-agent-and-phases.md)
* [Learn more about test tasks](../tasks/index.md#test)
* [An end-to-end example of continuous testing](example-continuous-testing.md)
* [Run automated tests from test plans in the Test hub](run-automated-tests-from-test-hub.md)
* [Speed up testing with Test Impact Analysis](test-impact-analysis.md)
* [Run tests in parallel](run-tests-in-parallel.md)

<a name="test-frameworks"></a>
## Any test type and any test framework

Choose the test technologies and frameworks you prefer to use.
 
<iframe width="640" height="360" src="//channel9.msdn.com/Series/Test-Tools-in-Visual-Studio/Testing-Java-Applications-with-Visual-Studio-Team-Services/player" frameborder="0" allowfullscreen="true"></iframe><p />

* [Get started with Selenium testing](continuous-test-selenium.md)
* [Get started with Java testing](continuous-test-java.md)
* [Use Maven to build your Java app](../tasks/build/maven.md)
* [Unit testing framework plug-ins for Visual Studio](http://go.microsoft.com/fwlink/?LinkID=246630) 

<a name="analytics-reporting"></a>
## Rich analytics and reporting

When your build is done, review your test results 
to start resolving the problems you find.
Rich and actionable build-on-build reports 
let you instantly see if your builds are getting 
healthier. But it's not just about speed - detailed and 
customizable test results measure the quality of 
your app.

![Build results showing rich test results](_img/continuous-testing/BuildSummary.png)

* [Review continuous test results after a build](review-continuous-test-results-after-build.md)
* [Get started with continuous testing](getting-started-with-continuous-testing.md)
* [Get Test Impact Analysis reports](test-impact-analysis.md)

> See also [Manual and exploratory testing](../../test/index.md), [Load and performance testing](../../test/load-test/index.md), [Unit testing](https://docs.microsoft.com/visualstudio/test/developer-testing-scenarios).

[!INCLUDE [help-and-support-footer](_shared/help-and-support-footer.md)] 
