---
title: Practical DevOps
titleSuffix: Azure DevOps Services & TFS
description: Automated QA and release management
ms.prod: devops
ms.technology: devops-dev-manager
ms.article: get-started-article
ms.assetid: 65946fe7-1369-43d6-beb6-791be2f85593
ms.manager: douge
ms.author: kraigb
author: kraigb
ms.topic: reference
ms.date: 10/25/2018
monikerRange: '>= tfs-2013'
---

# QA and release management

The happy phrase, "Ship it," declares that whatever software you're producing, such as mobile apps and their associated back-end services, is now ready for deployment to customers or, as it's said, "into production." But how, exactly, does software get to that point? From the previous article, Build produces the artifacts that feed into the release pipeline. That bundle of artifacts, called the "release," is what then undergoes any number of QA tests and other processes on its journey to production. The bulk of DevOps activities, in fact, involve the deployment of a release into any number of environments where certain tests can be run, and shepherding that release along to the next stage of the pipeline.

A release process potentially involves a large number of different tests that don't necessarily run simultaneously, and which might also require different machines and devices. It might also involve direct approvals by human beings who eat lunch and leave their desks for evenings and weekends. As a result, the time it takes for a release to get through the entire pipeline could easily be a matter of days. Meanwhile, your dev team continues to work their backlog for subsequent releases, committing code to the source repository, thus triggering more builds that produce artifacts that feed into the appropriate pipeline.

Managing the flow of all these artifacts through multiple pipelines can easily become a complex and demanding task, which is why *release management* is an essential part of Azure DevOps.

On the surface, release management looks mostly like administrative support, and thus might not be as technically interesting as other parts of the DevOps stack. But like everything else in DevOps, release management plays a role in the continuous validation of performance:

_**Release management is fundamentally a practice that begins as a list of steps you can perform manually to validate that the artifacts from the Build/CI stage are ready to deploy to subsequent environments.**_

Once you have those steps clearly defined&mdash;when to deploy artifacts to a particular environment, which tests to run, and the criteria for moving the artifacts to the next stage&mdash;you can then use tools to incrementally automate those steps.

In many ways, managing a release is a lot like setting up an automated build, except that the result of release management is the *deployment* of build artifacts to places where the right people can get at them. Ultimately, deployment is how the value contained in your source code is actually delivered to your customers, which is, of course, the whole point of the software development process!

## Environments, pipelines, and managing complexity

In the diagram we've been using in this series of articles, release management is everything that happens after a successful build that lead up to deployment to production.

![QA steps follow build](media/04-pipeline-01-basic.png)

Although the diagram shows only two QA stages&mdash;one internal and one external&mdash;there can really be any number of stages. This is because different forms of testing require deployment into specific environments where those tests can be carried out.

An *environment* is simply a particular configuration of hardware, software and data that's suitable for the desired testing or usage scenarios. Here are a few that are commonly discussed in the context of DevOps:

- Machines that are capable of doing unit tests, integration tests, and UI tests are typically part of an automated test environment, usually using mock data, test services, and servers configured for different load and stress tests.
- A similarly configured manual test environment is generally where a dedicated test team does its work.
- A staging environment is used for deploying apps and services for full-scale pre-production tests (such as upgrade tests), and includes deployment to alpha- and beta-test customers. This environment might draw upon live data and services in a read-only manner, or use staging versions to fully simulate live activity. This is also where you can test your crash and telemetry reporting systems and make sure they're generating the data you want.
- Your public production environment, finally, uses live public data and services, of course, and is where you collect the live telemetry data that will ultimately feed into subsequent releases.

You can, of course, define whatever environments you want according to your validation needs. 

Whatever the case, how build artifacts travel through these stages and environments&mdash;and what tests are applied where&mdash;is again what defines a release pipeline, and you can have any number of different routes in operation for different purposes. With mobile apps and back-end services, you'll have multiple deployment targets all along the way&mdash;different emulators or device farms, staging servers and so on. You might also have releases go through only part of the pipeline just for testing purposes.

## What is a Release?

The term "release management" clearly implies that a "release" is being managed in some way. A release is a specific bundle of build artifacts you intend to move through a series of validations and deploy to one or more environments. Those artifacts (along with other information and metadata) always travel through the pipeline as a unit, regardless of any subsequent changes to the source repository and the builds they might trigger, because every set of build artifacts is unique and stamped with a full version number like 1.2.8.12, where the last number is the build. Such versioning buys you complete end-to-end auditing, which is the ability to trace everything that happens within the release pipeline back to the exact build, and thus to an exact set of changes in the source repository.

In DevOps parlance, then, "starting a release" means feeding a worthy unit of build artifacts into the release pipeline. The Figure below illustrates what the process might look like: Using the project backlog for communication, the team applies a series of validation checks, irrespective of automation, that either reject the release or allow it to proceed to the next stage, eventually to reach production.

As noted before, you can certainly have any number of testing and staging environments, and even multiple production environments. Because a release process can take considerable time, you might choose to deploy to production only once a week or once a month. In the meantime, you'll still want to run other releases through some part of the pipeline, perhaps deploying to beta testers each week to get feedback for each monthly production release. You'll probably also want daily builds to go to the test manager, and likely want every build to go through a series of quick, automated tests to provide ongoing feedback to the dev team. In short, the frequency of releases can change as you go up and down the diagram above.

Thus, release management is something that can start simple and grow from there. The simplest form of this practice, in fact, is something you've likely done already: You build an app package, deploy it to a device (staging), and play with the app to make sure it works as expected. Then you upload the package to a store, hit "Publish"&mdash;and presto! You've just done a manual release process to put your app into production.

## Continuous deployment as a culture

As explained earlier, all DevOps processes begin with being completely clear about what needs to happen at every stage along the release pipeline, automated or not. You should be able to describe all your processes in a simple document, such that every step could be done manually. Then you're ready to apply automation to reduce costs, improve reliability and consistency, and increase frequency of testing and deployment.

A primary goal within DevOps is to have every new release of an app or service&mdash;including releases with only minor changes&mdash;flow as quickly as possible from the source repository to customers. A completely automated flow is called *continuous deployment* or CD, which goes hand-in-hand with continuous integration (CI): every commit to your repository triggers a new CI build, and every successful build&mdash;which produces a new bundle of artifacts with a specific version number&mdash;triggers a new automated release process. That release process then carries out all the necessary validations before deploying that bundle to production. CD, in short, means continually delivering value to your customers at the lowest cost, with minimal (if any) human intervention along the release pipeline.

Realize, however, that although CD optimizes the release pipeline between the Build/CI stage and deployment to production, it still requires vigilant effort by people to make it work:

- Your team needs strong code-review processes to prevent poor code from being committed to the repository to begin with.
- Your team must have high confidence that automated tests&mdash;which people create&mdash;are catching most defects and preventing them from reaching customers.
- Because no suite of tests is perfect, some defects will get through to production, so your team must actively monitor crash reports, telemetry and direct customer feedback in your production environment.
- Your team must be committed to quickly triaging and prioritizing issues and feeding them into the dev backlog so that corrections quickly get into subsequent releases.
- Issues also identify gaps in your code-review process and test coverage, thus driving improvements in both.

_**In short, continuous deployment isn't just a matter of automating your release pipeline: continuous deployment a culture of using feedback to constantly improve how you're delivering value to customers.**_

As an example, the documentation for Microsoft Azure, found on docs.microsoft.com/azure, is managed within an open source repository on GitHub, github.com/MicrosoftDocs/azure-docs. There's a full CI/CD system in place such that any changes accepted into the repository through pull requests quickly get out to production. Pull requests, however, are first run through a set of automated tools to catch problems like typos, broken links, and other detectable problems. If any tests fail, the author makes changes and resubmits. If the tests pass, the author then reviews the results on a staging server, and goes back to make any necessary changes. If the content is good to go, the author signs off. If the changes are small, they're merged automatically; more substantial changes (including any images) go to a dedicated reviewer. If that reviewer approves, changes are merged; otherwise the reviewer inform the author of the required changes.

## Azure Pipelines

TODO

> [!div class="nextstepaction"]
> [Monitoring tools](azure-devops-guide-for-managers-09-monitoring.md)
