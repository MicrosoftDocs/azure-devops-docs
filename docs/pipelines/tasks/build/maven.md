---
title: Maven build and release task
ms.custom: seodec18
description: Maven build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: A5B82F26-1053-47E4-B264-6E01B37C215F
ms.author: vijayma
author: vijayma
ms.date: 09/21/2021
monikerRange: '>= tfs-2015'
---


# Maven task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to build your Java code.

## Demands

The build agent must have the following capability:

 * Maven

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/MavenV3.md)]

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
      <td><code>mavenPOMFile</code><br/>Maven POM file</td>
      <td>(Required) Relative path from the repository root to the Maven POM file. See <a href="http://maven.apache.org/guides/introduction/introduction-to-the-pom.html" data-raw-source="[Introduction to the POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)">Introduction to the POM</a>.<br/>Default value: pom.xml <br/>Argument aliases: <code>mavenPomFile</code></td>
   </tr>
   <tr>
      <td><code>goals</code><br/>Goal(s)</td>
      <td>(Optional) In most cases, set this to <code>package</code> to compile your code and package it into a .war file. If you leave this argument blank, the build will fail. See <a href="http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html" data-raw-source="[Introduction to the Maven build lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)">Introduction to the Maven build lifecycle</a>.<br/>Default value: package</td>
   </tr>
   <tr>
      <td><code>options</code><br/>Options</td>
      <td>(Optional) Specify any Maven command-line options you want to use.</td>
   </tr>
   <tr>
      <td><code>publishJUnitResults</code><br/>Publish to Azure Pipelines</td>
      <td>(Required) Select this option to publish JUnit test results produced by the Maven build to Azure Pipelines. Each test results file matching <code>Test Results Files</code> will be published as a test run in Azure Pipelines. <br/>Default value: true</td>
   </tr>
   <tr>
      <td><code>testResultsFiles</code><br/>Test results files</td>
      <td>
         (Required) Specify the path and pattern of test results files to publish. Wildcards can be used (<a href="/azure/devops/pipelines/tasks/file-matching-patterns" data-raw-source="[more information](../file-matching-patterns.md)">more information</a>). For example, <code><em>*/TEST-</em>.xml</code> for all XML files whose name starts with <code>TEST-</code>. If no root path is specified, files are matched beneath the default working directory, the value of which is available in the variable: $(System.DefaultWorkingDirectory). <br/> For example, a value of &#39;
         <strong>
            /TEST-
            <em>
               .xml&#39; will actually result in matching files from &#39;$(System.DefaultWorkingDirectory)/
         </strong>
         /TEST-<em>.xml&#39;. 
         <br/>Default value: **/surefire-reports/TEST-*.xml
      </td>
   </tr>
    <tr>
       <td><code>testRunTitle</code><br/>Test run title</td>
       <td>(Optional) Provide a name for the test run.</td>
    </tr>
   <tr>
      <td><code>allowBrokenSymbolicLinks</code><br/>Test results files</td>
      <td>
         (Optional) Set false to fail build when the task meets broken symbolic links during publishing tests. It has an effect only if <code>publishJUnitResults</code> is set <code>
         true</code>
         <br/>Default value: true<br/>
         Argument aliases: <code>allowBrokenSymlink</code></td>
      </td>
   </tr>
    <tr>
       <td><code>codeCoverageTool</code><br/>Code coverage tool</td>
       <td>(Optional) Select the code coverage tool. Enabling code coverage inserts the <code>clean</code> goal into the Maven goals list when Maven runs.<br/>Default value: None <br/>Argument aliases: <code>codeCoverageToolOption</code></td>
    </tr>
    <tr>
       <td><code>classFilter</code><br/>Class inclusion/exclusion filters</td>
       <td>(Optional) Comma-separated list of filters to include or exclude classes from collecting code coverage. For example: +:com.</em>,+:org.<em>,-:my.app</em>.<br/>Argument aliases: <code>codeCoverageClassFilter</code></td>
    </tr>
    <tr>
       <td><code>classFilesDirectories</code><br/>Class files directories</td>
       <td>(Optional) This field is required for a multi-module project. Specify a comma-separated list of relative paths from the Maven POM file to directories containing class files and archive files (JAR, WAR, etc.). Code coverage is reported for class files in these directories. <br/>For example: target/classes,target/testClasses.<br/>Argument aliases: <code>codeCoverageClassFilesDirectories</code></td>
    </tr>
    <tr>
       <td><code>srcDirectories</code><br/>Source files directories</td>
       <td>(Optional) This field is required for a multi-module project. Specify a comma-separated list of relative paths from the Maven POM file to source code directories. Code coverage reports will use these to highlight source code. <br/>For example: src/java,src/Test. <br/>Argument aliases: <code>codeCoverageSourceDirectories</code></td>
    </tr> 
    <tr>
       <td><code>failIfCoverageEmpty</code><br/>Fail when code coverage results are missing</td>
       <td>(Optional) Fail the build if code coverage did not produce any results to publish. <br/>Default value: false <br/>Argument aliases: <code>codeCoverageFailIfEmpty</code></td>
    </tr>
    <tr>
       <td><code>javaHomeSelection</code><br/>Set JAVA_HOME by</td>
       <td>(Required) Sets JAVA_HOME either by selecting a JDK version that will be discovered during builds or by manually entering a JDK path. Please note that if you already have java installed on agent machine - you can specify it by setting up 'javaHomeOption' as 'path', and 'jdkDirectory' - as a path to jdk installed directory. <br/>Default value: JDKVersion <br/>Argument aliases: <code>javaHomeOption</code></td>
    </tr>
    <tr>
       <td><code>jdkVersion</code><br/>JDK version</td>
       <td>(Optional) Will attempt to discover the path to the selected JDK version and set JAVA_HOME accordingly.<br/><strong>Note:</strong> If running on an agent not hosted by Microsoft, and the requested Java version is not the one indicated by the JAVA_HOME variable set on the agent machine, the task will rely on the variable <code>JAVA_HOME_&lt;version&gt;_&lt;arch&gt;</code> (e.g. <code>JAVA_HOME_8_X64</code>), to locate the necessary JDK. Ensure this variable is set on self-hosted agents for any version and architecture of the JDK that may be requested by this parameter and/or by <code>jdkArchitecture</code>.<br/>Default value: default <br/>Argument aliases: <code>jdkVersionOption</code></td>
    </tr>
    <tr>
       <td><code>jdkUserInputPath</code><br/>JDK path</td>
       <td>(Required) Sets JAVA_HOME to the given path. <br/>Argument aliases: <code>jdkDirectory</code></td>
    </tr>
    <tr>
       <td><code>jdkArchitecture</code><br/>JDK architecture</td>
       <td>(Optional) Optionally supply the architecture (x86, x64) of the JDK. <br/><strong>Note:</strong> If running on an agent not hosted by Microsoft, and the requested Java architecture is not the one indicated by the JAVA_HOME variable set on the agent machine, the task will rely on the variable <code>JAVA_HOME_&lt;version&gt;_&lt;arch&gt;</code> (e.g. <code>JAVA_HOME_8_X64</code>), to locate the necessary JDK. Ensure this variable is set on self-hosted agents for any version and architecture of the JDK that may be requested by this parameter and/or by <code>jdkVersion</code>.<br/>Default value: x64 <br/>Argument aliases: <code>jdkArchitectureOption</code></td>
    </tr>
    <tr>
       <td><code>mavenVersionSelection</code><br/>Maven version</td>
       <td>(Required) Uses either the default Maven version or the version in the specified custom path. <br/>Default value: Default <br/>Argument aliases: <code>mavenVersionOption</code></td>
    </tr>
    <tr>
       <td><code>mavenPath</code><br/>Maven path</td>
       <td>(Required) Supply the custom path to the Maven installation (e.g., /usr/share/maven). <br/>Argument aliases: <code>mavenDirectory</code></td>
    </tr>
    <tr>
       <td><code>mavenSetM2Home</code><br/>Set M2_HOME variable</td>
       <td>(Required) Sets the M2_HOME variable to a custom Maven installation path. <br/>Default value: false</td>
    </tr>
    <tr>
       <td><code>mavenOpts</code><br/>Set MAVEN_OPTS to</td>
       <td>(Optional) Sets the MAVEN_OPTS environment variable, which is used to send command-line arguments to start the JVM. The -Xmx flag specifies the maximum memory available to the JVM. <br/>Default value: -Xmx1024m <br/>Argument aliases: <code>mavenOptions</code></td>
    </tr>
    <tr>
       <td><code>mavenFeedAuthenticate</code><br/>Authenticate built-in Maven feeds</td>
       <td>(Required) Automatically authenticate Maven feeds from Azure Artifacts. If built-in Maven feeds are not in use, deselect this option for faster builds. <br/>Default value: false <br/>Argument aliases: <code>mavenAuthenticateFeed</code></td>
    </tr>
    <tr>
       <td><code>skipEffectivePom</code><br/>Skip generating effective POM while authenticating built-in feeds</td>
       <td>(Required) Authenticate built-in Maven feeds using the POM only, allowing parent POMs in Azure Artifacts/Azure DevOps Server [Package Management] feeds. <br/>Default value: false <br/>Argument aliases: <code>effectivePomSkip</code></td>
    </tr>
    <tr>
       <td><code>sqAnalysisEnabled</code><br/>Run SonarQube or SonarCloud analysis</td>
       <td>(Required) This option has changed from version 1 of the Maven task to use the <a href="https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarqube" data-raw-source="[SonarQube](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarqube)">SonarQube</a> and <a href="https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarcloud" data-raw-source="[SonarCloud](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarcloud)">SonarCloud</a> marketplace extensions.  Enable this option to run <a href="http://redirect.sonarsource.com/doc/install-configure-scanner-tfs-ts.html" data-raw-source="[SonarQube or SonarCloud analysis](https://redirect.sonarsource.com/doc/install-configure-scanner-tfs-ts.html)">SonarQube or SonarCloud analysis</a> after executing goals in the <strong>Goals</strong> field. The <strong>install</strong> or <strong>package</strong> goal should run first. You must also add a <strong>Prepare Analysis Configuration</strong> task from one of the extensions to the build pipeline before this Maven task. <br/>Default value: false <br/>Argument aliases: <code>sonarQubeRunAnalysis</code></td>
    </tr>
    <tr>
       <td><code>sqMavenPluginVersionChoice</code><>SonarQube scanner for Maven version</td>
       <td>(Required) The SonarQube Maven plugin version to use. You can use latest version, or rely on the version in your pom.xml. <br/>Default value: latest</td>
    </tr>
    <tr>
       <td><code>checkstyleAnalysisEnabled</code><br/>Run Checkstyle</td>
       <td>(Optional) Run the Checkstyle tool with the default Sun checks. Results are uploaded as build artifacts. <br/>Default value: false <br/>Argument aliases: <code>checkStyleRunAnalysis</code></td>
    </tr>
    <tr>
       <td><code>pmdAnalysisEnabled</code><br/>Run PMD</td>
       <td>(Optional) Use the PMD static analysis tool to look for bugs in the code. Results are uploaded as build artifacts. <br/>Default value: false <br/>Argument aliases: <code>pmdRunAnalysis</code></td>
    </tr>
    <tr>
       <td><code>findbugsAnalysisEnabled</code><br/>Run FindBugs</td>
       <td>(Optional) Use the FindBugs static analysis tool to look for bugs in the code. Results are uploaded as build artifacts. <br/>Default value: false <br/>Argument aliases: <code>findBugsRunAnalysis</code></td>
    </tr>
    <tr>
       <th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
    </tr>
</table>

>[!IMPORTANT]
>When using the `-q` option in your MAVEN_OPTS, an effective pom won't be generated correctly and Azure Artifacts feeds may not be able to be authenticated. 

## Example

[Build and Deploy your Java application to an Azure Web App](../../ecosystems/java.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->

## Related articles

- [Maven authenticate](../package/maven-authenticate.md)
- [Build Java apps](../../ecosystems/java.md)