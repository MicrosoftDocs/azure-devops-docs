---
title: Ant build and release task
ms.custom: seodec18
description: Learn how to build with Apache Ant for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: EDC23F42-D73B-479C-9626-4C9D6E09B57B
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# Ant task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to build with Apache Ant.

## Demands

The build agent must have the following capability:

 * Apache Ant

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/ANTV1.md)]
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
<td>Ant Build File</td>
<td><p>Relative path from the repository root to the Ant build file.</p>
<p>For more information about build files, see [Using Apache Ant](http://ant.apache.org/manual/using.html#buildfile).</p></td>
</tr>
<tr>
<td>Options</td>
<td><p>Options that you want to pass to the Ant command line.</p>
<p>You can provide your own properties (for example, ```-DmyProperty=myPropertyValue```) and also use built-in variables (for example, ```-DcollectionId=$(system.collectionId)```).  Alternatively, the built-in variables are already set as environment variables during the build and can be passed directly (for example, ```-DcollectionIdAsEnvVar=%SYSTEM_COLLECTIONID%```).</p>
<p>See [Running Apache Ant](http://ant.apache.org/manual/running.html#options).</p></td>
</tr>
<tr>
<td>Target(s)</td>
<td><p>Target(s) for Ant to execute for this build. </p>
<p>See [Using Apache Ant Targets](http://ant.apache.org/manual/targets.html#targets).</p></td>
</tr>
<tr>
<th style="text-align: center" colspan="2">JUnit Test Results</th>
</tr>
<tr>
<td>Publish to Azure Pipelines/TFS </td>
<td>Select this option to publish JUnit test results produced by the Ant build to Azure Pipelines or your on-premises Team Foundation Server. Each test result file that matches Test Results Files is published as a test run.</td>
</tr>
<tr>
<td>Test Results Files</td>
<td>Test results files path.  Wildcards can be used.  For example, ```**/TEST-*.xml``` for all xml files whose name starts with TEST-."</td>
</tr>
<tr>
<td>Test Run Title</td>
<td>Assign a title for the JUnit test case results for this build.</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Code Coverage</th>
</tr>
<tr>
<td>Code Coverage Tool</td>
<td><p>Select the code coverage tool you want to use.</p>
<p>If you are using the [Microsoft-hosted agents](../../agents/hosted.md), then the tools are set up for you. If you are using on-premises [Windows agent](../../agents/v2-windows.md), then if you select:</p>
<ul>
<li>JaCoCo, make sure jacocoant.jar is available in lib folder of Ant installation. See [JaCoCo](http://www.eclemma.org/jacoco/trunk/doc/ant.html).</li>
<li>Cobertura, set up an environment variable COBERTURA_HOME pointing to the Cobertura .jar files location. See [Cobertura](https://github.com/cobertura/cobertura/wiki/Ant-Task-Reference).</li>
</ul>
<p>After you select one of these tools, the following arguments appear.</p>
</td>
</tr><tr><td>Class Files Directories</td>
<td><p>Specify a comma-separated list of relative paths from the Ant build file to the directories that contain your .class files, archive files (such as .jar and .war). Code coverage is reported for class files present in the directories. Directories and archives are searched recursively for class files. For example: target/classes,target/testClasses.</p></td></tr>
<tr><td>Class Inclusion/Exclusion Filters</td>
<td><p>Specify a comma-separated list of filters to include or exclude classes from collecting code coverage. For example: ```+:com.,+:org.,-:my.app.```</p></td>
</tr>
<tr><td>Source Files Directories</td>
<td><p>Specify a comma-separated list of relative paths from the Ant build file to your source directories. Code coverage reports will use these paths to highlight source code. For example: src/java,src/Test.</p></td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Set ANT_HOME Path</td>
<td>If set, overrides any existing ANT_HOME environment variable with the given path.</td>
</tr>
<tr>
<td>Set JAVA_HOME by JDK Version</td>
<td>Choose which JDK level will be used to run Ant. Will attempt to find JDK version and assign JAVA_HOME before running Ant.</td>
</tr>
<tr>
<td>Set JAVA_HOME by Path</td>
<td>Directory on build agent where the JDK is located.</td>
</tr>
<tr>
<td>JDK Architecture</td>
<td>Optionally supply the architecture (x86, x64) of the JDK.</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
