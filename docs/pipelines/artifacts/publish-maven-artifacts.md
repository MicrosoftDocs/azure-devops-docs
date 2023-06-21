---
title: Publish Maven artifacts
description: How to publish Maven artifacts with Azure Pipelines
ms.topic: conceptual
ms.date: 10/24/2022
monikerRange: '<= azure-devops'
---

# Publish Maven artifacts with Azure Pipelines

Using Azure Pipelines, you can publish your Maven packages to Azure Artifacts feeds, public registries, or as a pipeline artifact.

## Set up your project

1. Add the following snippet to the `repositories` and `distributionManagement` sections in your *pom.xml* file. Replace the placeholders with your organization name, project name, and your feed name.

    ```XML
    <repository>
      <id>MavenDemo</id>
      <url>https://pkgs.dev.azure.com/ORGANIZATION-NAME/PROJECT-NAME/_packaging/FEED-NAME/maven/v1</url>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>true</enabled>
      </snapshots>
    </repository>
    ```

1. Configure your *settings.xml* file as follows. Replace the placeholders with your organization name, your project name, and your personal access token.

    ```XML
    <server>
      <id>PROJECT-NAME</id>
      <username>ORGANIZATION-NAME</username>
      <password>PERSONAL-ACCESS-TOKEN</password>
    </server>
    ```

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging read & write** scope and paste it into the `password` tag in your *settings.xml* file.

## Build your code

In this example, we're using the [Maven task](../tasks/build/maven.md) to build the project with Azure Pipelines.

```yml
- task: Maven@3
  inputs:
    mavenPomFile: 'my-app/pom.xml'    // Path to your pom file
    mavenOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.8'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: true
    testResultsFiles: '**/surefire-reports/TEST-*.xml'
    goals: 'package'
```

## Publish packages to your pipeline

The following example illustrates how to publish your artifact to *drop* in your pipeline. Use the [Copy files](../tasks/utility/copy-files.md) task to copy your packages to a target folder, then use [Publish Build Artifacts](../tasks/utility/publish-build-artifacts.md) to publish your build artifacts to Azure Pipelines.

```yml
- task: CopyFiles@2
  inputs:
    Contents: '**'
    TargetFolder: '$(build.artifactstagingdirectory)'
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'
    publishLocation: 'Container'
```

:::image type="content" source="media/published-maven-pipeline.png" alt-text="A screenshot showing the build artifact published to drop in Azure Pipelines.":::

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