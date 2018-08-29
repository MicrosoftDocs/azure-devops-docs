---
title: Why Use Azure Pipelines?
titleSuffix: Azure DevOps Services
description: Determine how Azure Pipelines can improve your coding environment and code delivery.
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: douge
ms.date: 07/06/2018
monikerRange: '>= tfs-2015'
---

# Why Use Azure Pipelines?

Azure Pipelines is the quickest, easiest, and safest way to automate building your projects and making them available to users.

There are two main parts of Pipelines: **Continuous Integration (CI)** and **Continuous Delivery (CD)**.

## Why you should use Continuous Integration (CI) and Continuous Delivery (CD) pipelines in software development

**Continous Integration (CI)**: CI is the practice used by development teams to simplify the testing and building of code. CI helps to catch bugs or problems early in the development cycle, which makes them easier and faster to fix. Automated tests and builds are run as part of the CI process, which can be run on a set schedule, whenever code is pushed, or both. Items known as "artifacts" are produced from CI systems and used by the **Continuous Delivery** release pipelines to drive automatic deployments.

**Continuous Delivery (CD)**: CD is a process by which code is built, tested, and deployed to one or more test and production stages. Deploying and testing in multiple stages helps drive quality. **Continuous Integration** systems produce the deployable artifacts, including infrastructure and apps, automated release pipelines consume these artifacts to release new versions and fixes to existing systems. Monitoring and alerting systems run constantly to drive visibility into the entire CD process and to ensure errors are caught often and early.
<br>
| Continuous Integration (CI)                    |  Continuous Delivery (CD)                      |
| -----------------------------------------------|------------------------------------------------|
| Increase code coverage                         | Automatically deploy code to production        |
| Build faster by splitting test and build runs  | Ensure deployment targets have latest code     |
| Automatically ensure you don't ship broken code| Use tested code from CI process
| Run tests continually                          |

## Why use Azure Pipelines for CI and CD

There are plenty of reasons to use Azure Pipelines for your CI/CD solution:

* Works with any language or platform
* Deploy to different types of targets at the same time
* Best integration experience for deploying to Azure
* Build on Windows, Linux, or Mac machines
* Great integration for GitHub
* Great offer for open source projects


