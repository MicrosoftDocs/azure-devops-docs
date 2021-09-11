---
title: Gradle build and release task
ms.custom: seodec18
description: Gradle build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: B34A3A3D-C239-4036-AB3C-663FDDCD63C4
ms.author: vijayma
author: vijayma
ms.date: 03/03/2020
monikerRange: '>= tfs-2015'
---

# Gradle task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to build using a Gradle wrapper script.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/GradleV2.md)]

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
      <td><code>wrapperScript</code><br/>Gradle Wrapper</td>
      <td>
         <p>(Required) The location in the repository of the gradlew wrapper used for the build. For agents on Windows (including Microsoft-hosted agents), you must use the <code>gradlew.bat</code> wrapper. Agents on Linux or macOS can use the <code>gradlew</code> shell script.</p>
         <p>See <a href="https://docs.gradle.org/current/userguide/gradle_wrapper.html" data-raw-source="[The Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html)">The Gradle Wrapper</a>.</p><br/>Default value: gradlew<br/>Argument aliases: <code>gradleWrapperFile</code>
      </td>
   </tr>
   <tr>
      <td><code>options</code><br/>Options</td>
      <td>
         <p>(Optional) Specify any command line options you want to pass to the Gradle wrapper.</p>
         <p>See <a href="https://docs.gradle.org/current/userguide/gradle_command_line.html" data-raw-source="[Gradle Command Line](https://docs.gradle.org/current/userguide/gradle_command_line.html)">Gradle Command Line</a>.</p>
      </td>
   </tr>
   <tr>
      <td><code>tasks</code><br/>Tasks</td>
      <td>
         <p>(Required) The task(s) for Gradle to execute. A list of task names should be separated by spaces and can be taken from <code>gradlew tasks</code> issued from a command prompt. </p>
         <p>See <a href="https://docs.gradle.org/current/userguide/tutorial_using_tasks.html" data-raw-source="[Gradle Build Script Basics](https://docs.gradle.org/current/userguide/tutorial_using_tasks.html)">Gradle Build Script Basics</a>.</p><br/>Default value: build
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">JUnit Test Results</th>
   </tr>
   <tr>
      <td><code>publishJUnitResults</code><br/>Publish to Azure Pipelines</td>
      <td>(Required) Select this option to publish JUnit Test results produced by the Gradle build to Azure Pipelines/TFS.</td><br/>Default value: true
   </tr>
   <tr>
      <td><code>testResultsFiles</code><br/>Test results files</td>
      <td>(Required) Test results files path.  Wildcards can be used.  For example, <code><em>*/TEST-</em>.xml</code> for all xml files whose name starts with TEST-.&quot;<br/>Default value: **/TEST-*.xml</td>
   </tr>
   <tr>
      <td><code>testRunTitle</code><br/>Test run title</td>
      <td>(Optional) Assign a title for the JUnit test case results for this build.</td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Code Coverage</th>
   </tr>
   <tr>
      <td><code>codeCoverageTool</code><br/>Code coverage tool</td>
      <td>(Optional) Choose a code coverage tool to determine the code that is covered by the test cases for the build.<br/>Default value: None<br/>Argument aliases: <code>codeCoverageToolOption</code></td>
   </tr>
   <tr>
      <td><code>classFilesDirectories</code><br/>Class files directories</td>
      <td>(Required) Comma-separated list of directories containing class files and archive files (JAR, WAR, etc.). Code coverage is reported for class files in these directories. Normally, classes under `build/classes/main` are searched, which is the default class directory for Gradle builds<br/>Default value: build/classes/main/<br/>Argument aliases: <code>codeCoverageClassFilesDirectories</code></td>
   </tr>
   <tr>
      <td><code>classFilter</code><br/>Class inclusion/exclusion filters</td>
      <td>(Optional) Comma-separated list of filters to include or exclude classes from collecting code coverage. For example: +:com.*,+:org.*,-:my.app*.*."<br/>Argument aliases: <code>codeCoverageClassFilter</code></td>
   </tr>
   <tr>
      <td><code>failIfCoverageEmpty</code><br/>Fail when code coverage results are missing</td>
      <td>(Optional) Fail the build if code coverage did not produce any results to publish<br/>Default value: false<br/>Argument aliases: <code>codeCoverageFailIfEmpty</code></td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Advanced</th>
   </tr>
   <tr>
      <td><code>cwd</code><br/>Working directory</td>
      <td>(Optional) Working directory in which to run the Gradle build. If not specified, the repository root directory is used</td>
   </tr>
   <tr>
      <td><code>javaHomeSelection</code><br/>Set JAVA_HOME by</td>
      <td>(Required) Sets JAVA_HOME either by selecting a JDK version that will be discovered during builds or by manually entering a JDK path<br/>Default value: JDKVersion<br/>Argument aliases: <code>javaHomeOption</code></td>
   </tr>
   <tr>
      <td><code>jdkVersion</code><br/>JDK version</td>
      <td>(Optional) Will attempt to discover the path to the selected JDK version and set JAVA_HOME accordingly <br/>Argument aliases: <code>jdkDirectory</code></td>
   </tr>
   <tr>
      <td><code>jdkUserInputPath</code><br/>JDK path</td>
      <td>(Required) Sets JAVA_HOME to the given path <br/>Default value: default<br/>Argument aliases: <code>jdkVersionOption</code></td>
   </tr>
   <tr>
      <td><code>jdkArchitecture</code><br/>JDK Architecture</td>
      <td>(Optional) Optionally supply the architecture (x86, x64) of JDK.<br/>Default value: x64 <br/>Argument aliases: <code>jdkArchitectureOption</code></td>
   </tr>
   <tr>
      <td><code>gradleOpts</code><br/>Set GRADLE_OPTS</td>
      <td>(Optional) Sets the GRADLE_OPTS environment variable, which is used to send command-line arguments to start the JVM. The xmx flag specifies the maximum memory available to the JVM.<br/>Default value: -Xmx1024m <br/>Argument aliases: <code>gradleOptions</code></td>
   </tr>
   <th style="text-align: center" colspan="2">Code Analysis</th>
   </tr>
   <tr>
      <td><code>sqAnalysisEnabled</code><br/>Run SonarQube or SonarCloud Analysis</td>
      <td>(Required) This option has changed from version 1 of the <b>Gradle</b> task to use the <a href= "https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarqube">SonarQube</a> and <a href= "https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarcloud">SonarCloud</a> marketplace extensions. Enable this option to run <a href= "http://redirect.sonarsource.com/doc/install-configure-scanner-tfs-ts.html">SonarQube or SonarCloud analysis</a> after executing tasks in the <b>Tasks</b> field. You must also add a <b>Prepare Analysis Configuration</b> task from one of the extensions to the build pipeline before this Gradle task<br/>Default value: false <br/>Argument aliases: <code>sonarQubeRunAnalysis</code>
      </td>
   </tr>
   <tr>
      <td><code>sqGradlePluginVersionChoice</code><br/>SonarQube scanner for Gradle version</td>
      <td>(Required) The SonarQube Gradle plugin version to use. You can declare it in your Gradle configuration file, or specify a version here <br/>Default value: specify
      </td>
   </tr>
   <tr>
      <td><code>sqGradlePluginVersion</code><br/>SonarQube scanner for Gradle plugin version</td>
      <td>(Required) <a href= "https://plugins.gradle.org/plugin/org.sonarqube">Refer</a> for all available versions <br/>Default value: 2.6.1 <br/>Argument aliases: <code>sonarQubeGradlePluginVersion</code>
      </td>
   </tr>
   <tr>
      <td><code>checkstyleAnalysisEnabled</code><br/>Run Checkstyle</td>
      <td>(Optional) Run the Checkstyle tool with the default Sun checks. Results are uploaded as build artifacts. <br/>Default value: false <br/>Argument aliases: <code>checkStyleRunAnalysis</code>
      </td>
   </tr>
   <tr>
      <td><code>findbugsAnalysisEnabled</code><br/>Run FindBugs</td>
      <td>(Optional) Use the FindBugs static analysis tool to look for bugs in the code. Results are uploaded as build artifacts. In Gradle 6.0 this plugin was removed. Use spotbugs plugin instead. <a href="https://docs.gradle.org/current/userguide/upgrading_version_5.html#the_findbugs_plugin_has_been_removed">More info<a/>. <br/>Default value: false <br/>Argument aliases: <code>findBugsRunAnalysis</code>
      </td>
   </tr>
      <tr>
      <td><code>pmdAnalysisEnabled</code><br/>Run PMD</td>
      <td>(Optional) Use the PMD Java static analysis tool to look for bugs in the code. Results are uploaded as build artifacts <br/>Default value: false <br/>Argument aliases: <code>pmdRunAnalysis</code>
      </td>
   </tr>
   <tr>
      <td><code>spotBugsAnalysisEnabled</code><br/>Run Spotbugs</td>
      <td>(Required) Enable this option to run spotBugs. This plugin works with Gradle v5.6 or later. Results are uploaded as build artifacts. <a href="https://spotbugs.readthedocs.io/en/stable/gradle.html#use-spotbugs-gradle-plugin">More info</a>. Please make sure that you are using Gradle 5.6 or later. If you are using an earlier version of Gradle, the plugin may work in an unexpected way or may not work at all. <br/>Default value: false <br/>Argument aliases:         <code>spotBugsAnalysis</code>
      </td>
   </tr>
   <tr>
      <td><code>spotBugsGradlePluginVersionChoice</code><br/>Spotbugs plugin for Gradle version</td>
      <td>(Required) The Spotbugs Gradle plugin version to use. You can declare it in your Gradle configuration file, or specify a version here. <br/>Default value: specify <br/>
      </td>
   </tr>
   <tr>
      <td><code>spotbugsGradlePluginVersion</code><br/>Spotbugs for Gradle plugin version</td>
      <td>(Required) <a href="https://plugins.gradle.org/plugin/com.github.spotbugs">Refer</a> for all available versions.<br/>Default value: 4.7.0 <br/>Argument aliases:         <code>spotbugsGradlePluginVersion</code>
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
   </tr>
</table>

## Example

[Build your Java app with Gradle](../../ecosystems/java.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

### How do I generate a wrapper from my Gradle project?

The Gradle wrapper allows the build agent to download and configure the exact Gradle environment that is 
   checked into the repository without having any software configuration on the build agent itself other than the 
   JVM.

1. Create the Gradle wrapper by issuing the following command from the root project directory where your 
   build.gradle resides:

   `jamal@fabrikam> gradle wrapper`

2. Upload your Gradle wrapper to your remote repository.

   There is a binary artifact that is generated by the gradle wrapper ( located at `gradle/wrapper/gradle-wrapper.jar` ).
   This binary file is small and doesn't require updating. If you need to change the Gradle 
   configuration run on the build agent, you update the `gradle-wrapper.properties`.

   The repository should look something like this:

```
|-- gradle/
    `-- wrapper/
        `-- gradle-wrapper.jar
        `-- gradle-wrapper.properties
|-- src/
|-- .gitignore
|-- build.gradle
|-- gradlew
|-- gradlew.bat
```
### How do I fix timeouts when downloading dependencies?

To fix errors such as `Read timed out` when downloading dependencies, users of Gradle 4.3+ can change the timeout 
   by adding to `Options` `-Dhttp.socketTimeout=60000 -Dhttp.connectionTimeout=60000`.  This increases  the timeout 
   from 10 seconds to 1 minute.

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../includes/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
