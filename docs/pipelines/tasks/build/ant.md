---
title: Ant build and release task
ms.custom: seodec18
description: Learn how to build with Apache Ant for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: EDC23F42-D73B-479C-9626-4C9D6E09B57B
ms.author: vijayma
author: vijayma
ms.date: 12/17/2019
monikerRange: '>= tfs-2015'
---

# Ant task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to build with Apache Ant.

## Demands

The build agent must have the following capability:

 * Apache Ant

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/ANTV1.md)]

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
   <td><code>antBuildFile</code><br/>Ant build file</td>
   <td>(Required) Relative path from the repository root to the Ant build file.<br/>
      For more information about build files, see <a href="http://ant.apache.org/manual/using.html#buildfile" data-raw-source="[Using Apache Ant](https://ant.apache.org/manual/using.html#buildfile)">Using Apache Ant</a><br/>Default value: build.xml<br/>Argument aliases: <code>buildFile</code>
   </td>
</tr>
<tr>
   <td><code>options</code><br/>Options</td>
   <td>
      (Optional) Options that you want to pass to the Ant command line.
      You can provide your own properties (for example, <code>-DmyProperty=myPropertyValue</code>) and also use built-in variables (for example, <code>-DcollectionId=$(system.collectionId)</code>).  Alternatively, the built-in variables are already set as environment variables during the build and can be passed directly (for example, <code>-DcollectionIdAsEnvVar=%SYSTEM_COLLECTIONID%</code>).
      <p>See <a href="http://ant.apache.org/manual/running.html#options" data-raw-source="[Running Apache Ant](https://ant.apache.org/manual/running.html#options)">Running Apache Ant</a>.</p>
   </td>
</tr>
<tr>
   <td><code>targets</code><br/>Target(s)</td>
   <td>
      (Optional) Target(s) for Ant to execute for this build.
      <p>See <a href="http://ant.apache.org/manual/targets.html#targets" data-raw-source="[Using Apache Ant Targets](https://ant.apache.org/manual/targets.html#targets)">Using Apache Ant Targets</a>.</p>
   </td>
</tr>
<tr>
   <th style="text-align: center" colspan="2">JUnit Test Results</th>
</tr>
<tr>
   <td><code>publishJUnitResults</code><br/>Publish to Azure Pipelines</td>
   <td>(Required) Select this option to publish JUnit test results produced by the Ant build to Azure Pipelines or your on-premises Team Foundation Server. Each test result file that matches Test Results Files is published as a test run.<br/>Default value: true</td>
</tr>
<tr>
   <td><code>testResultsFiles</code><br/>Test Results Files</td>
   <td>(Required) Test results files path.  Wildcards can be used.  For example, <code><em>*/TEST-</em>.xml</code> for all xml files whose name starts with TEST-.&quot;<br/>Default value: **/TEST-*.xml</td>
</tr>
<tr>
   <td><code>testRunTitle</code><br/>Test Run Title</td>
   <td>(Optional) Assign a title for the JUnit test case results for this build.</td>
</tr>
<tr>
   <th style="text-align: center" colspan="2">Code Coverage</th>
</tr>
<tr>
   <td><code>codeCoverageTool</code><br/>Code Coverage Tool</td>
   <td>
      <p>(Optional) Select the code coverage tool you want to use.</p>
      <p>If you are using the <a href="../../agents/hosted.md" data-raw-source="[Microsoft-hosted agents](../../agents/hosted.md)">Microsoft-hosted agents</a>, then the tools are set up for you. If you are using on-premises <a href="../../agents/v2-windows.md" data-raw-source="[Windows agent](../../agents/v2-windows.md)">Windows agent</a>, then if you select:</p>
      <ul>
         <li>JaCoCo, make sure jacocoant.jar is available in lib folder of Ant installation. See <a href="http://www.eclemma.org/jacoco/trunk/doc/ant.html" data-raw-source="[JaCoCo](https://www.eclemma.org/jacoco/trunk/doc/ant.html)">JaCoCo</a>.</li>
         <li>Cobertura, set up an environment variable COBERTURA_HOME pointing to the Cobertura .jar files location. See <a href="https://github.com/cobertura/cobertura/wiki/Ant-Task-Reference" data-raw-source="[Cobertura](https://github.com/cobertura/cobertura/wiki/Ant-Task-Reference)">Cobertura</a>.</li>
      </ul>
      <p>After you select one of these tools, the following arguments appear.</p>
      <br/>Default value: None<br/>Argument aliases: <code>codeCoverageToolOptions</code>
   </td>
</tr>
<tr>
   <td><code>classFilesDirectories</code><br/>Class Files Directories</td>
   <td>
      <p>(Required) Specify a comma-separated list of relative paths from the Ant build file to the directories that contain your .class files, archive files (such as .jar and .war). Code coverage is reported for class files present in the directories. Directories and archives are searched recursively for class files. <br/>For example: target/classes,target/testClasses.</p>
      <br/>Default value: .
      <br/>Argument aliases: <code>codeCoverageClassFilesDirectories</code>
   </td>
</tr>
<tr>
   <td><code>classFilter</code><br/>Class Inclusion/Exclusion Filters</td>
   <td>
      <p>(Optional) Specify a comma-separated list of filters to include or exclude classes from collecting code coverage. For example: <code>+:com.,+:org.,-:my.app.</code></p>
      <br/>Argument aliases: <code>codeCoverageClassFilter</code>
   </td>
</tr>
<tr>
   <td><code>srcDirectories</code><br/>Source Files Directories</td>
   <td>
      <p>(Optional) Specify a comma-separated list of relative paths from the Ant build file to your source directories. Code coverage reports will use these paths to highlight source code. For example: src/java,src/Test.</p>
      <br/>Argument aliases: <code>codeCoverageSourceDirectories</code>
   </td>
</tr>
<tr>
   <td><code>failIfCoverageEmpty</code><br/>Fail when code coverage results are missing</td>
   <td>
      <p>(Optional) Fail the build if code coverage did not produce any results to publish</p>
      <br/>Default value: false
      <br/>Argument aliases: <code>codeCoverageFailIfEmpty</code>
   </td>
</tr>
<tr>
   <th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
   <td><code>antHomeUserInputPath</code><br/>Set ANT_HOME Path</td>
   <td>(Optional) If set, overrides any existing ANT_HOME environment variable with the given path.
   <br/>Argument aliases: <code>antHomeDirectory</code></td>
</tr>
<tr>
   <td><code>javaHomeSelection</code><br/>Set JAVA_HOME by</td>
   <td>(Required) Sets JAVA_HOME either by selecting a JDK version that will be discovered during builds or by manually entering a JDK path.
   <br/>Default value: JDKVersion<br/>Argument aliases: <code>javaHomeOption</code></td>
</tr>
<tr>
   <td><code>jdkVersion</code><br/>JDK version</td>
   <td>(Optional) Will attempt to discover the path to the selected JDK version and set JAVA_HOME accordingly.
   <br/>Default value: default<br/>Argument aliases:
   <code>jdkVersionOption</code></td>
</tr>
<tr>
   <td><code>jdkUserInputPath</code><br/>JDK Path</td>
   <td>(Required) Sets JAVA_HOME to the given path
   <br/>Argument aliases: <code>jdkUserInputDirectory</code></td>
</tr>
<tr>
   <td><code>jdkArchitecture</code><br/>JDK Architecture</td>
   <td>(Optional) Optionally supply the architecture (x86, x64) of the JDK.
   <br/>Default value: x64<br/>Argument aliases:
   <code>jdkArchitectureOption</code></td>
</tr>
<tr>
   <th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../includes/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
