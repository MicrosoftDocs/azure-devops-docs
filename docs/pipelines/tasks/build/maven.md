---
title: Maven build and release task
ms.custom: seodec18
description: Maven build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: A5B82F26-1053-47E4-B264-6E01B37C215F
ms.manager: jillfra
ms.author: dastahel
author: davidstaheli
ms.date: 07/05/2019
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

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Maven POM file</td><td>(Required) Relative path from the repository root to the Maven POM file. See <a href="http://maven.apache.org/guides/introduction/introduction-to-the-pom.html" data-raw-source="[Introduction to the POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html)">Introduction to the POM</a>.</td></tr>
<tr><td>Goal(s)</td><td>In most cases, set this to <code>package</code> to compile your code and package it into a .war file. If you leave this argument blank, the build will fail. See <a href="http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html" data-raw-source="[Introduction to the Maven build lifecycle](http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)">Introduction to the Maven build lifecycle</a>.</td></tr>
<tr><td>Options</td><td>(Optional) Specify any Maven command-line options you want to use.</td></tr>
<tr><td>Publish to Azure Pipelines</td><td>(Required) Select this option to publish JUnit test results produced by the Maven build to Azure Pipelines. Each test results file matching <code>Test Results Files</code> will be published as a test run in Azure Pipelines.</td></tr>
<tr><td>Test results files</td><td>(Required) Specify the path and pattern of test results files to publish. Wildcards can be used (<a href="https://go.microsoft.com/fwlink/?linkid=856077" data-raw-source="[more information](https://go.microsoft.com/fwlink/?linkid=856077)">more information</a>). For example, <code><em>*/TEST-</em>.xml</code> for all XML files whose name starts with <code>TEST-</code>. If no root path is specified, files are matched beneath the default working directory, the value of which is available in the variable: $(System.DefaultWorkingDirectory).  For example, a value of &#39;<strong>/TEST-<em>.xml&#39; will actually result in matching files from &#39;$(System.DefaultWorkingDirectory)/</strong>/TEST-<em>.xml&#39;.</td></tr>
<tr><td>Test run title</td><td>(Optional) Provide a name for the test run.</td></tr>
<tr><td>Code coverage tool</td><td>(Optional) Select the code coverage tool. Enabling code coverage inserts the <code>clean</code> goal into the Maven goals list when Maven runs.</td></tr>
<tr><td>Class inclusion/exclusion filters</td><td>(Optional) Comma-separated list of filters to include or exclude classes from collecting code coverage. For example: +:com.</em>,+:org.<em>,-:my.app</em>.<em>.</td></tr>
<tr><td>Class files directories</td><td>(Optional) This field is required for a multi-module project. Specify a comma-separated list of relative paths from the Maven POM file to directories containing class files and archive files (JAR, WAR, etc.). Code coverage is reported for class files in these directories. For example: target/classes,target/testClasses.</td></tr>
<tr><td>Source files directories</td><td>(Optional) This field is required for a multi-module project. Specify a comma-separated list of relative paths from the Maven POM file to source code directories. Code coverage reports will use these to highlight source code. For example: src/java,src/Test.</td></tr>
<tr><td>Fail when code coverage results are missing</td><td>(Optional) Fail the build if code coverage did not produce any results to publish.</td></tr>
<tr><td>Set JAVA_HOME by</td><td>(Required) Sets JAVA_HOME either by selecting a JDK version that will be discovered during builds or by manually entering a JDK path.</td></tr>
<tr><td>JDK version</td><td>(Optional) Will attempt to discover the path to the selected JDK version and set JAVA_HOME accordingly.</td></tr>
<tr><td>JDK path</td><td>(Required) Sets JAVA_HOME to the given path.</td></tr>
<tr><td>JDK architecture</td><td>(Optional) Optionally supply the architecture (x86, x64) of the JDK.</td></tr>
<tr><td>Maven version</td><td>(Required) Uses either the default Maven version or the version in the specified custom path.</td></tr>
<tr><td>Maven path</td><td>(Required) Supply the custom path to the Maven installation (e.g., /usr/share/maven).</td></tr>
<tr><td>Set M2_HOME variable</td><td>(Required) Sets the M2_HOME variable to a custom Maven installation path.</td></tr>
<tr><td>Set MAVEN_OPTS to</td><td>(Optional) Sets the MAVEN_OPTS environment variable, which is used to send command-line arguments to start the JVM. The -Xmx flag specifies the maximum memory available to the JVM.</td></tr>
<tr><td>Authenticate built-in Maven feeds</td><td>(Required) Automatically authenticate Maven feeds from Azure Artifacts. If built-in Maven feeds are not in use, deselect this option for faster builds.</td></tr>
<tr><td>Skip generating effective POM while authenticating built-in feeds</td><td>(Required) Authenticate built-in Maven feeds using the POM only, allowing parent POMs in Azure Artifacts/Azure DevOps Server [Package Management] feeds.</td></tr>
<tr><td>Run SonarQube or SonarCloud analysis</td><td>(Required) This option has changed from version 1 of the **Maven</em></em> task to use the <a href="https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarqube" data-raw-source="[SonarQube](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarqube)">SonarQube</a> and <a href="https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarcloud" data-raw-source="[SonarCloud](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarcloud)">SonarCloud</a> marketplace extensions.  Enable this option to run <a href="http://redirect.sonarsource.com/doc/install-configure-scanner-tfs-ts.html" data-raw-source="[SonarQube or SonarCloud analysis](http://redirect.sonarsource.com/doc/install-configure-scanner-tfs-ts.html)">SonarQube or SonarCloud analysis</a> after executing goals in the <strong>Goals</strong> field. The <strong>install</strong> or <strong>package</strong> goal should run first. You must also add a <strong>Prepare Analysis Configuration</strong> task from one of the extensions to the build pipeline before this Maven task.</td></tr>
<tr><td>SonarQube scanner for Maven version</td><td>(Required) The SonarQube Maven plugin version to use. You can use latest version, or rely on the version in your pom.xml.</td></tr>
<tr><td>Run Checkstyle</td><td>(Optional) Run the Checkstyle tool with the default Sun checks. Results are uploaded as build artifacts.</td></tr>
<tr><td>Run PMD</td><td>(Optional) Use the PMD static analysis tool to look for bugs in the code. Results are uploaded as build artifacts.</td></tr>
<tr><td>Run FindBugs</td><td>(Optional) Use the FindBugs static analysis tool to look for bugs in the code. Results are uploaded as build artifacts.</td></tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

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
