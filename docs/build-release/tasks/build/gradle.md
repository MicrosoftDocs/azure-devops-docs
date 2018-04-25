---
title: Gradle build and release task
description: Gradle build and release task for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: B34A3A3D-C239-4036-AB3C-663FDDCD63C4
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Build: Gradle 
 
[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/gradle.png) Build using a Gradle wrapper script


## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Gradle Wrapper</td>
<td><p>The location in the repository of the gradlew wrapper used for the build. For agents on Windows (including hosted agents), you must use the `gradlew.bat` wrapper. Agents on Linux or macOS can use the `gradlew` shell script.</p>
<p>See [The Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html).</p></td>
</tr>
<tr>
<td>Options</td>
<td><p>Specify any command line options you want to pass to the Gradle wrapper.</p>
<p>See [Gradle Command Line](https://docs.gradle.org/current/userguide/gradle_command_line.html).</p></td>
</tr>
<tr>
<td>Tasks</td>
<td><p>The task(s) for Gradle to execute. A list of tasks can be taken from `gradlew tasks` issued from a command prompt. </p>
<p>See [Gradle Build Script Basics](https://docs.gradle.org/current/userguide/tutorial_using_tasks.html).</p></td>
</tr>
<tr>
<th style="text-align: center" colspan="2">JUnit Test Results</th>
</tr>
<tr>
<td>Publish to VSTS/TFS </td>
<td>Select this option to publish JUnit Test results produced by the Gradle build to VSTS/TFS.</td>
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
<td>Choose a code coverage tool to determine the code that is covered by the test cases for the build.</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Working Directory</td>
<td>Directory on the build agent where the Gradle wrapper will be invoked from. Defaults to the repository root.</td>
</tr>
<tr>
<td>Set JAVA_HOME by JDK Version</td>
<td>Choose which JDK level to run Gradle with. Will attempt to find JDK version and assign JAVA_HOME before running Gradle.</td>
</tr>
<tr>
<td>Set JAVA_HOME by Path</td>
<td>Directory on build agent where JDK is located.</td>
</tr>
<tr>
<td>JDK Architecture</td>
<td>Optionally supply the architecture (x86, x64) of JDK.</td>
</tr>
<th style="text-align: center" colspan="2">Code Analysis</th>
</tr>
<tr>
<td>Run SonarQube Analysis</td>
<td>Select if you want to run a SonarQube analysis.
See [The Gradle build task now supports SonarQube analysis](https://blogs.msdn.microsoft.com/visualstudioalm/2016/06/15/the-gradle-build-task-now-supports-sonarqube-analysis/).
</td>
</tr>
<tr>
<td>Run PMD Analysis</td>
<td>Select if you want to perform a [PMD static analysis](https://pmd.github.io/).
A build result page for each project is shown on the **Artifacts** tab of the completed build.
See [Gradle build task now also supports PMD analysis](https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/29/gradle-build-task-now-also-supports-pmd-analysis/).
</td>
</tr>
<tr>
<td>Run Checkstyle Analysis</td>
<td>Select if you want to perform a [Checkstyle static analysis](http://checkstyle.sourceforge.net)
The build summary reports the number of issues found by Checkstyle. Detailed issue logs are available under the build Artifact tab of the build summary.
If the Checkstyle analysis is customized, the task only attempts to find the reports and produce a summary.
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: Gradle@2
  inputs:
#   gradleWrapperFile: gradlew
    options:
#   tasks: build
    workingDirectory:
#   publishJUnitResults: true
#   testResultsFiles: **/build/test-results/TEST-*.xml
    testRunTitle:
#   codeCoverageToolOption: None # None (default), Cobertura, JaCoCo
#   codeCoverageClassFilesDirectories: build/classes/main/
    codeCoverageClassFilter:
#   codeCoverageFailIfEmpty: false
#   javaHomeOption: JDKVersion # JDKVersion (default), Path
#   jdkVersionOption: default # default (default), 1.9, 1.8, 1.7, 1.6
    jdkDirectory:
#   jdkArchitectureOption: x64 # x86, x64 (default)
#   gradleOptions: -Xmx1024m
#   sonarQubeRunAnalysis: false
#   sqGradlePluginVersionChoice: specify # specify (default), build
#   sonarQubeGradlePluginVersion: 2.6.1
#   checkStyleRunAnalysis: false
#   findBugsRunAnalysis: false
#   pmdRunAnalysis: false
```

::: moniker-end

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

### How do I generate a wrapper from my Gradle project?

The Gradle wrapper allows the build agent to download and configure the exact Gradle environment that is 
   checked into the repoistory without having any software configuration on the build agent itself other than the 
   JVM.

0. Create the Gradle wrapper by issuing the following command from the root project directory where your 
build.gradle resides:

  `jamal@fabrikam> gradle wrapper`

0. Upload your Gradle wrapper to your remote repository.
   
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
### How do I build an Android project?

[Android Build](android-build.md)

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
