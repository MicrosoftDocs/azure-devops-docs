---
title: Run cloud-based load tests on your own machines
description: Run cloud-based load tests by using your own subscription and machines using Azure DevOps and TFS
ms.assetid: FF61D623-7947-4769-B310-B3F477584BA2
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Run cloud-based load tests using your own machines

[!INCLUDE [version-header-devops-services](../_shared/version-header-devops-services.md)] 

[!INCLUDE [loadtest-deprecated-include](../_shared/loadtest-deprecated-include.md)]

When you run a cloud-based load test, the Cloud Load Test (CLT) service automatically provisions
the necessary machines (load agents) to generate the load on your application.
After the load test run has completed, these resources are removed. However, you can run
load tests using your own machines, such as virtual machines in Azure provisioned in your own subscription,
or other virtual or physical machines located on-premises.
This topic shows two primary scenarios where such a configuration may be useful.

## Terminology

* **Auto-provisioned machines**. These are load-generating machines that are automatically provisioned
  by the CLT service when a load test run request is received, and are also automatically removed when the
  load test run has completed execution. When these machines are used, you are charged
  [VUMs](reference-qa.md#VUM) as applicable for your load test run.
* **Self-provisioned machines**. These are load-generating machines that you provision yourself (in your Azure
  subscription or on-premises). These machines can be configured to register themselves against your Azure DevOps subscription
  and then they can run a cloud-based load test. This scenario is the focus of this topic.
* **Cloud load agent**. This is the agent that works with the CLT service. This agent will be installed when
  you use self-provisioned machines, and must be configured for your Azure DevOps subscription. Once configured, it can then
  be used for running a load test. The cloud-load agent is NOT the same as the Test Controller and Test Agent
  combination that you may have used previously for running load tests or automated tests.

## Scenarios

* **More control over agent machines**. Sometimes you may need more control over the agent machines; for example,
  to install custom software used during a load test run. Simple configuration is easily achieved using
  deployment items and setup scripts on auto-provisioned agents. However, if you are installing some bulky software
  or doing some time-consuming operation as part of the setup, you may want to do that only once and reuse the machines
  over and over again. In addition, using your own machines means that you can set up and remove the agents only when
  required, as opposed to the auto-provisioned agents that are removed automatically after a test run, 
* **Testing private apps and apps behind the firewall**. The basic requirement of the cloud load testing service is
  that the application endpoint is public or reachable from the cloud. Often this is not the case. The app that you
  want to load test may be on-premises behind the firewall, or in a private VNet in Azure. Or you may be developing
  new features that will only become publicly accessible when it's released. In this case, you need to provision agents
  in the same network as your app (so that they can reach the app) and have them work with the CLT service so that you
  can easily load test your app.

## Solutions

* **Use machines located on-premises**. You can provision as many machines as you need on-premises and run a PowerShell
  script that installs the cloud load agents and configures these machines against your Azure DevOps subscription. For more details
  and to obtain the PowerShell script, see
  [Testing private and intranet apps using cloud-based load testing](clt-behind-firewall.md).
  The agents communicate with the CLT service only using HTTP(S), so you don't need to open any other ports.
* **Use virtual machines in Azure**. While you can certainly adopt the same approach as above by provisioning the machines
  and then running the PowerShell script to install and configure the load agents, a simpler approach is to use Azure Resource
  Manager (ARM) templates. You specify just a few inputs such as your Azure DevOps subscription, a PAT token for authentication, and the
  number of agent machines you need. The machines are provisioned in your Azure subscription and you have complete
  control over them. Two ARM templates are available in the
  [Azure quick-start templates repository](https://github.com/Azure/azure-quickstart-templates) on GitHub:
  * [A simple template with a dynamic IP option](https://github.com/Azure/azure-quickstart-templates/tree/master/101-vsts-cloudloadtest-rig).
    This template provisions the number of machines you specify and assigns
    them dynamic IP addresses. In this configuration, the application will still need to be publicly reachable. You can
    install any software you may need after the machines are provisioned and are ready, or you can customize the ARM template
    to install the necessary software as part of the provisioning process.
  * [A simple template with a static IP option](https://github.com/Azure/azure-quickstart-templates/tree/master/101-vsts-cloudloadtest-rig).
    This template provisions the number of machines you specify and assigns
    them static IP addresses. The machines receive the same addresses even after you shut down and restart them later.
    In this configuration, you can allow traffic from these known IP addresses through the firewall to reach an application
    behind it. The agents communicate with the CLT service using only HTTP(S), so you don't need to open any other ports.
  * [A VNet-based ARM template](https://github.com/Azure/azure-quickstart-templates/tree/master/201-vsts-cloudloadtest-rig-existing-vnet).
    This template provisions the number of machines you specify in a specific VNet that you
    have already set up in Azure. This VNet will be where your private app is hosted, and so the load agents have a line-of-sight
    to reach your app.

For more information about using the ARM templates, see [Test private and intranet applications using cloud-based load testing](clt-behind-firewall.md).

## Comparison with Test Controllers and Test Agents

If you have previously used Visual Studio load testing (rather than cloud load testing), you will have used
[Test Controllers and Test Agents (TC/TA)](/visualstudio/test/configure-test-agents-and-controllers-for-load-tests)
to run load tests. The differences between these and cloud load test agents are:

* The cloud load agent does not need a controller. The CLT service acts as a lightweight controller instead.
* The cloud load agent when running on self-provisioned machines uses the CLT service to store results and
  benefits from ongoing enhancements to the CLT service (such as viewing the load test report in a browser).
  The Test Controller and Test Agent combination uses SQL Server to store results.
* The cloud load agent uses HTTP(S) to communicate with the CLT service, and is quite resilient to network issues
  whereas the communication between Test Controller and Test Agent uses .NET remoting - which can be susceptible
  to network issues. The Test Agent also generates much more network traffic than the cloud-load agent.

## FAQ

### Q: How do I run JMeter tests using the self-provisioned option?

**A**: The cloud load agent is designed to also run JMeter tests. Use of self-provisioned agents for JMeter load tests
instead of the default auto-provisioned agent is under development.

### Q: What is the cost of using self-provisioned agents? Will I be charged VUMs?

**A**: No. If you use self-provisioned agents on-premises, you bear the hardware cost.
If you use self-provisioned agents in Azure, the machines will be provisioned in your
Azure subscription and you will be charged based on the number of machines and the
duration for which these VMs are running. CLT will not levy any [VUM](reference-qa.md#VUM) charges.

### Q: Can I use the self-provisioned option when running load tests in a CI pipeline?

**A**: Yes. You can use the existing Azure Resource Group tasks from the build and release
catalog with either of the ARM templates to provision, start, and stop machines. The CLT
tasks let you specify whether to use the auto-provisioned agents or self-provisioned agents.
A build template to help with this configuration is under development.

### Q: How do I automate the process of provisioning machines and shutting them down?

**A**: You can do this with using a build pipeline. In this context, think of the build
(CI pipeline) as an automation orchestrator rather than a system that does build.
A build template to help with this configuration is under development.

## See also

* [FAQs for load testing](reference-qa.md#jmeter-tests)
* [Load test with Visual Studio](getting-started-with-performance-testing.md) 
* [Load test with Azure DevOps](get-started-simple-cloud-load-test.md) 
* [Load test with Azure portal](app-service-web-app-performance-test.md) 
* [Tutorial: Run load tests before release](run-performance-tests-app-before-release.md) 
* [Analyze load test results using the Load Test Analyzer](/visualstudio/test/analyze-load-test-results-using-the-load-test-analyzer)

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
