---
title: Publish Maven artifacts
description: Learn how to publish Maven artifacts to internal and external feed using Azure Pipelines.
ms.topic: conceptual
ms.date: 11/18/2024
monikerRange: '<= azure-devops'
---

# Publish Maven artifacts with Azure Pipelines (YAML/Classic)

Using Azure Pipelines, you can publish your Maven artifacts to Azure Artifacts feeds in your organization, in other organizations, and to public registries such as nuget.org. This article will guide you through publishing your Maven artifacts using both YAML and Classic pipelines.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- An Azure Artifacts feed. [Create one for free](../../artifacts/get-started-npm.md#create-a-feed).

## Publish packages to your feed

To publish your package to an Azure Artifacts feed, use the Maven task to deploy your artifact to your feed. 

```yml
- task: Maven@3
  inputs:
    mavenPomFile: 'my-app/pom.xml'
    mavenOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.8'
    jdkArchitectureOption: 'x64'
    mavenAuthenticateFeed: true
    publishJUnitResults: false
    testResultsFiles: '**/surefire-reports/TEST-*.xml'
    goals: 'deploy'
```

:::image type="content" source="media/maven-published-to-feed.png" alt-text="A screenshot showing the build artifact published to a feed.":::

## Q&A

#### Q: How to authenticate with MavenAuthenticate?

A: You can use the [MavenAuthenticate](/azure/devops/pipelines/tasks/reference/maven-authenticate-v0) task to authenticate with Maven feeds inside and outside your organization. See the examples below for more details:

- [Authenticate with Maven feeds inside your organization](/azure/devops/pipelines/tasks/reference/maven-authenticate-v0#authenticate-maven-feeds-inside-your-organization)
- [Authenticate with Maven feeds outside your organization](/azure/devops/pipelines/tasks/reference/maven-authenticate-v0#authenticate-maven-feeds-outside-your-organization)

## Related articles

- [Publish npm packages with Azure Pipelines](./npm.md)
- [Release artifacts and artifact sources](../release/artifacts.md)
- [Publish NuGet packages with Azure Pipelines](./nuget.md)