---
title: Maven build and release task
ms.custom: seodec18
description: Maven build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: A5B82F26-1053-47E4-B264-6E01B37C215F
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Maven task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to build your Java code.

## Demands

The build agent must have the following capability:

 * Maven

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/MavenV3.md)]
::: moniker-end

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Maven POM file </td>
<td><p>Relative path from the repo root to the Maven POM .xml file.</p>
<p>See [Introduction to the POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html).</p></td>
</tr>
<tr>
<td>Options</td>
<td>Specify any Maven options you want to use.</td>
</tr>
<tr>
<td>Goal(s)</td>
<td><p>In most cases, set this to ```package``` to compile your code and package it into a .war file. If you leave this argument blank, the build will fail.</p>
<p>See [Introduction to the Maven build lifecycle](http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html).</p></td>
</tr>
<tr>
<th style="text-align: center" colspan="2">JUnit Test Results</th>
</tr>
<tr>
<td>Publish to Azure Pipelines/TFS </td>
<td>Select this option to publish JUnit Test results produced by the Maven build to Azure Pipelines/TFS.</td>
</tr>
<tr>
<td>Test Results Files</td>
<td>Test results files path.  Wildcards can be used.  For example, ```**/TEST-*.xml``` for all xml files whose name starts with TEST-."</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>JDK Version</td>
<td>Will attempt to discover the path to the selected JDK version and set JAVA_HOME accordingly.</td>
</tr>
<tr>
<td>JDK Architecture</td>
<td>Optionally supply the architecture (x86, x64) of JDK.</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Code Analysis</th>
</tr>
<tr>
<td>Run SonarQube Analysis</td>
<td>Select if you want to run a SonarQube analysis.
See [The Maven build task now simplifies SonarQube analysis](https://blogs.msdn.microsoft.com/visualstudioalm/2015/10/08/the-maven-build-task-now-simplifies-sonarqube-analysis/).
</td>
</tr>
<tr>
<td>Run PMD Analysis</td>
<td>Select if you want to perform a [PMD static analysis](https://pmd.github.io/).
A build result page for each .pom file is shown on the **Artifacts** tab of the completed build.
See [The Maven build task now supports PMD analysis out of the box](https://blogs.msdn.microsoft.com/visualstudioalm/2016/06/15/the-maven-build-task-now-supports-pmd-analysis-out-of-the-box/).
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example

[Build and Deploy your Java application to an Azure Web App](../../apps/java/build-maven.md)


## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
