---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 5/11/2020
ms.topic: include
---

### Pipelines YAML CD features now generally available

We’re excited to announce the general availability of the Azure Pipelines YAML CD features. We now offer a unified YAML experience so you can configure each of your pipelines to do CI, CD, or CI and CD together. YAML CD features introduces several new advanced features that are available for all organizations using multi-stage YAML pipelines. Some of the highlights include:

- [Multi-stage YAML pipelines (for CI and CD)](https://docs.microsoft.com/azure/devops/pipelines/process/stages?view=azure-devops&tabs=yaml)
- [Approvals and checks on resources](https://docs.microsoft.com/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass)
- [Environments](https://docs.microsoft.com/azure/devops/pipelines/process/environments?view=azure-devops) and [deployment strategies](https://docs.microsoft.com/azure/devops/pipelines/process/deployment-jobs?view=azure-devops#deployment-strategies)
- [Kubernetes](https://docs.microsoft.com/azure/devops/pipelines/process/environments-kubernetes?view=azure-devops) and [Virtual Machine](https://docs.microsoft.com/azure/devops/pipelines/process/environments-virtual-machines?view=azure-devops) resources in environment
- [Review apps for collaboration](https://docs.microsoft.com/azure/devops/pipelines/process/environments-kubernetes?view=azure-devops#setup-review-app)
- [Refreshed UX for service connections](https://docs.microsoft.com/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml)
- [Resources in YAML pipelines](https://docs.microsoft.com/azure/devops/pipelines/process/resources?view=azure-devops&tabs=schema)

If you’re ready to start building, check out the [documentation](https://docs.microsoft.com/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema%2Cparameter-schema)&nbsp;or [blog](https://devblogs.microsoft.com/devops/announcing-general-availability-of-azure-pipelines-yaml-cd)&nbsp;for building multi-stage CI/CD pipelines.

### Service connections new UI as default experience

In this sprint, we are making the new service connections UI the default experience and the old service connections UI will no longer be available. For the past six months, we have provided a new UI to service connections as a preview feature. Based on feedback we received from the customers, we added various features and are now ready to make it the mainstream experience for all users.

New service connections UI is built on modern design standards and it comes with various critical features to support multi-stage YAML CD pipelines such as approvals, authorizations, and cross-project sharing.

![Service connections new UI.](../../media/169-pipelines-3-0.png)

Learn more about service connections [here](https://aka.ms/SCLearnMore).

### Role-based access for service connections

In this sprint, we have added role-based access for service connections. Previously, service connection security could only be managed through pre-defined Azure DevOps groups such as Endpoint administrators and Endpoint Creators.

As part of this work, we have introduced the new roles of Reader, User, Creator and Administrator. You can set these roles via the service connections page in your project and these are inherited by the individual connections. And in each service connection you have the option to turn inheritance on or off and override the roles in the scope of the service connection.

![Role-based access for service connections.](../../media/169-pipelines-0-0.png)

Learn more about service connections security [here](https://aka.ms/SCLearnMore).

### Showing associated CD pipelines info in CI pipelines

Also in this sprint we have added support to the CD YAML pipelines details where the CI pipelines are referred to as pipeline resources. In your CI pipeline run view, you will now see a new 'Associated pipelines' tab where you can find all the pipeline runs that consume your pipeline and artifacts from it.

![Showing associated CD pipelines info in CI pipelines.](../../media/169-pipelines-5-0.png)

### Cross-project sharing of service connections is now public

In this sprint we are enabling support for service connection sharing across projects. For the past three months, this feature has been in private preview and many customers have provided valuable feedback on the feature.

Thank you for your support. You can now share your service connections with your projects safely and securely.

![Cross-project sharing of service connections.](../../media/169-pipelines-4-0.png)

Learn more about service connections sharing [here](https://aka.ms/SCLearnMore).

### Pipeline resource version picker in the create run dialogue

In this sprint, as part of multi-stage CD YAML pipelines, we have added the ability to manually pick up pipeline resource versions in the create run dialogue. If you consume a [pipeline as a resource](https://docs.microsoft.com/azure/devops/pipelines/process/resources?view=azure-devops&tabs=schema#resources-pipelines) in another pipeline, you can now pick the version of that pipeline when creating a run.

![Pipeline resource version picker.](../../media/169-pipelines-2-0.png)
