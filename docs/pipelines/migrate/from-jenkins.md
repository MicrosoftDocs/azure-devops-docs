---
title: Migrate from Jenkins to Azure Pipelines
titleSuffix: Azure Pipelines
description: How to migrate from Jenkins to Azure Pipelines
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: ethomson
author: ethomson
ms.date: 02/07/2019
monikerRange: 'azure-devops'
---

# Migrate from Jenkins to Azure Pipelines

Jenkins has traditionally been installed by enterprises in their own data
centers and managed in an on-premises fashion, though a number of providers
offer managed Jenkins hosting.

Azure Pipelines, on the other hand, is a cloud native continuous integration
pipeline, providing the management of build and release pipelines and build
agent virtual machines hosted in the cloud.

However, Azure Pipelines offers a fully on-premises option as well with
[Azure DevOps Server](https://azure.microsoft.com/services/devops/server/), for those customers who have compliance or
security concerns that require them to keep their code and build within
the enterprise data center.

In addition, Azure Pipelines supports a hybrid cloud and on-premises model,
where Azure Pipelines manages the build and release orchestration and
enabling build agents both in the cloud and installed on-premises, for
customers with custom needs and dependencies for some build agents but
who are looking to move most workloads to the cloud.

This document provides a guide to translate a Jenkins pipeline configuration
to Azure Pipelines, information about moving container-based builds and
selecting build agents, mapping environment variables, and how to handle
success and failures of the build pipeline.

## Configuration

You'll find a familiar transition from a Jenkins declarative pipeline into
an Azure Pipelines YAML configuration. The two are conceptually similar,
supporting "configuration as code" and allowing you to check your configuration
in to your version control system. Unlike Jenkins, however, Azure Pipelines
uses the industry-standard [YAML to configure the build
pipeline](../yaml-schema.md).

Despite the language difference, however, the concepts between Jenkins and
Azure Pipelines and the way they're configured are similar. A Jenkinsfile
lists one or more _stages_ of the build process, each of which contains one
or more _steps_ that are performed in order. For example, a "build" stage
may run a task to install build-time dependencies, then perform a compilation
step. While a "test" stage may invoke the test harness against the binaries
that were produced in the build stage.

For example:

**Jenkinsfile**

```
pipeline {
    agent none
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
```

This translates easily to an Azure Pipelines YAML configuration, with
a _job_ corresponding to each stage, and steps to perform in each job:

**azure-pipelines.yml**

``` yaml
jobs:
- job: Build
  steps:
  - script: npm install
  - script: npm run build
- job: Test
  steps:
  - script: npm test
```

### Visual Configuration

If you are not using a Jenkins declarative pipeline with a Jenkinsfile,
and are instead using the graphical interface to define your build configuration,
then you may be more comfortable with the
classic editor
in Azure Pipelines.

## Container-Based Builds

Using containers in your build pipeline allows you to build and test within
a docker image that has the exact dependencies that your pipeline needs,
already configured. It saves you from having to include a build step that
installs additional software or configures the environment. Both Jenkins
and Azure Pipelines support container-based builds.

In addition, both Jenkins and Azure Pipelines allow you to share the build
directory on the host agent to the container volume using the `-v` flag to
docker. This allows you to chain multiple build jobs together that can use
the same sources and write to the same output directory. This is especially
useful when you use many different technologies in your stack; you may want
to build your backend using a .NET Core container and your frontend with a
TypeScript container.

For example, to run a build in an Ubuntu 14.04 ("Trusty") container, then
run tests in an Ubuntu 16.04 ("Xenial") container:

**Jenkinsfile**

```
pipeline {
    agent none
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'ubuntu:trusty'
                    args '-v $HOME:/build -w /build'
                }
            }
            steps {
                sh 'make'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'ubuntu:xenial'
                    args '-v $HOME:/build -w /build'
                }
            }
            steps {
                sh 'make test'
            }
        }
    }
}
```

Azure Pipelines provides [container
jobs](../process/container-phases.md)
to enable you to run your build within a container:

**azure-pipelines.yml**

``` yaml
resources:
  containers:
  - container: trusty
    image: ubuntu:trusty
  - container: xenial
    image: ubuntu:xenial

jobs:
- job: build
  container: trusty
  steps:
  - script: make
- job: test
  dependsOn: build
  container: xenial
  steps:
  - script: make test
```

In addition, Azure Pipelines provides a [docker
task](../tasks/build/docker.md)
that allows you to run, build, or push an image.

## Agent Selection

Jenkins offers build agent selection using the `agent` option to ensure
that your build pipeline - or a particular stage of the pipeline - runs
on a particular build agent machine. Similarly, Azure Pipelines offers a
number of options to configure where your build environment runs.

### Hosted Agent Selection

Azure Pipelines offers cloud hosted build agents for Linux, Windows, and
macOS builds. To select the build environment, you can use the
[`vmimage`](../agents/hosted.md#use-a-microsoft-hosted-agent)
keyword. For example, to select a macOS build:

``` yaml
pool:
  vmimage: macOS-10.13
```

Additionally, you can specify a `container` and specify a docker image
for finer grained control over how your build is run.

### On-Premises Agent Selection

If you host your build agents on-premises, then you can define the
[build agent "capabilities"](../agents/agents.md#capabilities)
based on the architecture of the machine or the software that you've installed
on it. For example, if you've set up an on-premises build agent with the
`java` capabilities, then you can ensure that your job runs on it using the
`demands` keyword:

``` yaml
pool:
  demands: java
```

## Environment Variables

In Jenkins, you typically define environment variables for the entire
pipeline. For example, to set two environment variables, `CONFIGURATION=debug`
and `PLATFORM=x86`:

**Jenkinsfile**

```
pipeline {
    environment {
        CONFIGURATION = 'debug'
        PLATFORM      = 'x64'
    }
}
```

Similarly, in Azure Pipelines you can configure variables that are used
both within the YAML configuration and are set as environment variables
during job execution:

**azure-pipelines.yml**

``` yaml
variables:
  configuration: debug
  platform: x64
```

Additionally, in Azure Pipelines you can define variables that are set
only for the duration of a particular job:

**azure-pipelines.yml**

``` yaml
jobs:
- job: debug build
  variables:
    configuration: debug
  steps:
  - script: ./build.sh $(configuration)
- job: release build
  variables:
    configuration: release
  steps:
  - script: ./build.sh $(configuration)
```

## Predefined Variables

Both Jenkins and Azure Pipelines set a [number of environment
variables](../build/variables.md)
to allow you to inspect and interact with the execution environment of the
continuous integration system.

| Description | Jenkins | Azure Pipelines |
|-------------|---------|-----------------|
| A unique numeric identifier for the current build invocation. | `BUILD_NUMBER` | `BUILD_BUILDNUMBER` |
| A unique identifier (not necessarily numeric) for the current build invocation. | `BUILD_ID` | `BUILD_BUILDID` |
| The URL that displays the build logs. | `BUILD_URL` |  This is not set as an environment variable in Azure Pipelines but can be derived from other variables.<sup>1</sup> |
| The name of the machine that the current build is running on. | `NODE_NAME` | `AGENT_NAME` |
| The name of this project or build definition. | `JOB_NAME` | `RELEASE_DEFINITIONNAME` |
| A string for identification of the build; the build number is a good unique identifier. | `BUILD_TAG` | `BUILD_BUILDNUMBER` |
| A URL for the host executing the build. | `JENKINS_URL` | `SYSTEM_TEAMFOUNDATIONCOLLECTIONURI` |
| A unique identifier for the build executor or build agent that is currently running. | `EXECUTOR_NUMBER` | `AGENT_NAME` |
| The location of the checked out sources. | `WORKSPACE` | `BUILD_SOURCESDIRECTORY` |
| The Git Commit ID corresponding to the version of software being built. | `GIT_COMMIT` | `BUILD_SOURCEVERSION` |
| Path to the Git repository on GitHub, Azure Repos or another repository provider. | `GIT_URL` | `BUILD_REPOSITORY_URI` |
| The Git branch being built. | `GIT_BRANCH` | `BUILD_SOURCEBRANCH` |

<sup>1</sup> To derive the URL that displays the build logs in Azure Pipelines, combine the following environment variables in this format:
```
${SYSTEM_TEAMFOUNDATIONCOLLECTIONURI}/${SYSTEM_TEAMPROJECT}/_build/results?buildId=${BUILD_BUILDID}
```

## Success and Failure Handling

Jenkins allows you to run commands when the build has finished, using the
`post` section of the pipeline. You can specify commands that run when the
build succeeds (using the `success` section), when the build fails (using
the `failure` section) or always (using the `always` section). For example:

**Jenkinsfile**

```
post {
    always {
        echo "The build has finished"
    }
    success {
        echo "The build succeeded"
    }
    failure {
        echo "The build failed"
    }
}
```

Similarly, Azure Pipelines has a rich conditional execution framework that
allows you to run a job, or steps of a job, based on a number of conditions
including pipeline success or failure.

To emulate the simple Jenkins `post`-build conditionals, you can define jobs
that run based on the `always()`, `succeeded()` or `failed()` conditions:

**azure-pipelines.yml**

``` yaml
jobs:
- job: always
  steps:
  - script: echo "The build has finished"
    condition: always()

- job: success
  steps:
  - script: echo "The build succeeded"
    condition: succeeded()

- job: failed
  steps:
  - script: echo "The build failed"
    condition: failed()
```

In addition, you can combine [other conditions](../process/conditions.md),
like the ability to run a task based on the success or failure of an individual
task, environment variables, or the execution environment, to build a rich
execution pipeline.
