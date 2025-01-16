---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: v-catherbund
author: cebundyh
ms.date: 01/15/2025
---

## Agent directory structure


When pipeline jobs are run on agents, a directory structure is created to store the source code, binaries, and artifacts. 

The agent's home directory is the directory where the agent is installed. The directory is typically located:

- **Microsoft-hosted agents:** `C:\agents\<agent version>` on Windows and `/home/vsts/agents/<agent version>` on Linux. 
- **Self-hosted agents:** `C:\agent` on Windows and `/home/vsts/agent` on Linux.

The agent's work directory contains the workspace where the source and jobs output is stored. The work directory is usually located:

- **Microsoft-hosted agent:** `C:\a` on Windows and`/home/vsts/work` on Linux. 
- **Self-hosted agent:** `C:\agent\_work` on Windows and `/home/agent/_work` on Linux.

The work directory structure for Microsoft-hosted agents is as follows:

    - /work directory
        - /1 build directory/pipeline workspace
            - /s source/working directory
            - /b binaries directory
            - /a artifacts staging directory
            - /TestResults Test results directory

| Directory | Description | Examples | Predefined variables |
|-----------|-------------|----------|------------|
|Agent home directory| The directory where the agent is installed. | **Microsoft-hosted agent:** <br> &nbsp;&nbsp;&nbsp;`C:\agents\3.248.0`<br> &nbsp;&nbsp;&nbsp;`/home/vsts/agents/3.248.0`<br> **Self-hosted agent:**<br> &nbsp;&nbsp;&nbsp;`C:\agent`<br> &nbsp;&nbsp;&nbsp;`home/agent` | `Agent.HomeDirectory` |
|Work directory| Where the agent stores the source code, binaries, and artifacts. | **Microsoft-hosted agent:** <br> &nbsp;&nbsp;&nbsp;`C:\a`<br> &nbsp;&nbsp;&nbsp;`/home/vsts/work`<br> **Self-hosted agent:**<br> &nbsp;&nbsp;&nbsp;`C:\agent\_work`<br> &nbsp;&nbsp;&nbsp;`/home/agent/_work` | `Agent.WorkFolder`<br> `Agent.RootDirectory` <br> `System.WorkFolder`|
|Build directory | Where the pipeline job runs. | **Microsoft-hosted agent:** <br> &nbsp;&nbsp;&nbsp;`C:\a\1`<br> &nbsp;&nbsp;&nbsp;`/home/vsts/work/1`<br> **Self-hosted agent:**<br> &nbsp;&nbsp;&nbsp;`C:\agent\_work\1`<br> &nbsp;&nbsp;&nbsp;`/home/agent/_work/1` | `Agent.BuildDirectory`<br> `Pipeline.Workspace`|
| `s` - Source/working directory | This directory contains the source code that is checked out from the repository. | **Microsoft-hosted agent:** <br> &nbsp;&nbsp;&nbsp;`C:\a\1\s`<br> &nbsp;&nbsp;&nbsp;`/home/vsts/work/1/s`<br> **Self-hosted agent:**<br> &nbsp;&nbsp;&nbsp;`C:\agent\_work\1\s`<br> &nbsp;&nbsp;&nbsp;`/home/agent/_work/1/s` | `Build.SourcesDirectory` <br>`Build.RepositoryLocalPath`<br>`System.DefaultWorkingDirectory`|
| `b` - Binaries directory | Contains the build outputs. | **Microsoft-hosted agent:** <br> &nbsp;&nbsp;&nbsp;`C:\a\1\b`<br> &nbsp;&nbsp;&nbsp;`/home/vsts/work/1/b`<br> **Self-hosted agent:**<br> &nbsp;&nbsp;&nbsp;`C:\agent\_work\1\b`<br> &nbsp;&nbsp;&nbsp;`/home/agent/_work/1/b` | `Build.BinariesDirectory`|
| `a` - Artifacts staging directory | Contains the build artifacts. Is cleaned between runs on self-hosted agents. | **Microsoft-hosted agent:** <br> &nbsp;&nbsp;&nbsp;`C:\a\1\a`<br> &nbsp;&nbsp;&nbsp;`/home/vsts/work/1/a`<br> **Self-hosted agent:**<br> &nbsp;&nbsp;&nbsp;`C:\agent\_work\1\a`<br> &nbsp;&nbsp;&nbsp;`/home/agent/_work/1/a` | `Build.StagingDirectory`<br>`Build.ArtifactStagingDirectory` <br>`System.ArtifactsDirectory`|
| TestResults directory | Contains the test results. Is cleaned between runs on self-hosted agents.| **Microsoft-hosted agent:** <br> &nbsp;&nbsp;&nbsp;`C:\a\1\TestResults`<br> &nbsp;&nbsp;&nbsp;`/home/vsts/work/1/TestResults`<br> **Self-hosted agent:**<br> &nbsp;&nbsp;&nbsp;`C:\agent\_work\1\TestResults`<br> &nbsp;&nbsp;&nbsp;`/home/agent/_work/1/TestResults` | `Common.TestResultsDirectory`|

