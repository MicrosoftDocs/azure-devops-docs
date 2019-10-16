---
title: Python Pip Authenticate
ms.custom: seodec18
description: Sets up authentication with pip so you can perform pip commands in your pipeline. 
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: phwilson
author: chasewilson
ms.date: 08/02/2019
monikerRange: 'azure-devops'
---

# Package: Python Pip Authenticate

**Version 1.\* | [Other versions](#versions)**

**Azure Pipelines**

Provides authentication for the `pip` client that can be used to install Python distributions.

> [!NOTE]
> The Python Pip Authenticate task in Azure Pipelines is currently in public preview.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/PipAuthenticateV1.md)]

::: moniker-end

## Arguments

| Argument                                                                                           | Description                                                         |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `artifactFeeds`<br/>My feeds (select below)                                                        | (Optional) Comma-separated list of Azure Artifacts feed names to authenticate with pip. |
| `pythonDownloadServiceConnections`<br/>Feeds from external organizations                           | (Optional) Comma-separated list of <a href="~/pipelines/library/service-endpoints.md#sep-python-download" data-raw-source="[pip service connection](~/pipelines/library/service-endpoints.md#sep-python-download)">pip service connection</a> names from external organizations to authenticate with pip. |
| `onlyAddExtraIndex`<br/>Don't set primary index URL                                                | (Optional) Boolean value, if set to 'true' will force pip to get distributions from official python registry first. By default, it's `false`  |
| [!INCLUDE [temp](../_shared/control-options-arguments.md)] |

## Examples

### Download python distributions from Azure Artifacts feeds without consulting official python registry

In this example, we are setting authentication for downloading from a private Azure Artifacts feed. The authenticate task create environment variables `PIP_INDEX_URL` and `PIP_EXTRA_INDEX_URL` which contain auth credentials required to download the distributions. 'HelloTestPackage' has to be present in either 'myTestFeed1' or 'myTestFeed2', otherwise install will hard fail.

```YAML
- task: PipAuthenticate@1
  displayName: 'Pip Authenticate'
  inputs:
    # Provide list of feed names which you want to authenticate
    artifactFeeds: myTestFeed1, myTestFeed2

# Use command line tool to 'pip install'.
- script: |
   pip install HelloTestPackage
```

### Download python distributions from Azure Artifacts feeds consulting official python registry first

In this example, we are setting authentication for downloading from private Azure Artifacts feed but [pypi](https://pypi.org) is consulted first. The authenticate task creates an environment variable `PIP_EXTRA_INDEX_URL` which contain auth credentials required to download the distributions. 'HelloTestPackage' will be downloaded from the authenticated feeds only if it's not present in [pypi](https://pypi.org).

```YAML
- task: PipAuthenticate@1
  displayName: 'Pip Authenticate'
  inputs:
    # Provide list of feed names which you want to authenticate
    artifactFeeds: myTestFeed1, myTestFeed2
    # Setting this variable to "true" will force pip to get distributions from official python registry first and fallback to feeds mentioned above if distributions are not found there.
    onlyAddExtraIndex: true

# Use command line tool to 'pip install'.
- script: |
   pip install HelloTestPackage
```

### Download python distributions from other private python servers

In this example, we are setting authentication for downloading from a external python distribution server. Create a <a href="~/pipelines/library/service-endpoints.md#sep-python-download" data-raw-source="[pip service connection](~/pipelines/library/service-endpoints.md#sep-python-download)">pip service connection</a> entry for the external service. The authenticate task uses the service connection to create an environment variable `PIP_INDEX_URL` which contain auth credentials required to download the distributions. 'HelloTestPackage' has to be present in 'pypitest' service connection, otherwise install will fail. If you want [pypi](https://pypi.org) to be consulted first, set `onlyAddExtraIndex` to `true`.

```YAML
- task: PipAuthenticate@1
  displayName: 'Pip Authenticate'
  inputs:
    # In this case, name of the service connection is "pypitest". 
    pythonDownloadServiceConnections: pypitest

# Use command line tool to 'pip install'.
- script: |
   pip install HelloTestPackage
```

<a name="versions" />

## Task versions

### Task: Pip Authenticate

| Task version                                | Azure Pipelines          | TFS                                           |
|---------------------------------------------|--------------------------|-----------------------------------------------|
| 1.*                                         | Available                | Not supported                                 |
| [0.*](./prev-versions/pip-authenticate-0.md)| Available                | Not supported                                 |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### When in my pipeline should I run this task?

This task must run before you use pip to download python distributions to an authenticated package source such as Azure Artifacts. There are no other ordering requirements. Multiple invocation of this task will not stack credentials. Every run of the task will erase any previously stored credentials.

### My agent is behind a web proxy. Will PipAuthenticate set up pip to use my proxy?

No. While this task itself will work behind a web proxy <a href="~/pipelines/agents/proxy.md" data-raw-source="[secret variable](~/pipelines/agents/proxy.md)">your agent has been configured to use</a>, it does not configure pip to use the proxy.

To do so, you can either:
* Set the environment variable `http_proxy`, `https_proxy` and optionally `no_proxy` to your proxy settings. See [Pip official guidelines](https://pip.pypa.io/en/stable/user_guide/#using-a-proxy-server) for details. Note that these are commonly used variables which other non-Python tools (e.g. curl) may also use.
  >**Caution:**
  >The `http_proxy` and `no_proxy` variables are case-sensitive on Linux and Mac operating systems and must be lowercase. Attempting to use an Azure Pipelines variable to set the environment variable will not work, as it will be converted to uppercase. Instead, set the environment variables on the self-hosted agent's machine and restart the agent.
* Add the proxy settings to the [pip config file](https://pip.pypa.io/en/stable/user_guide/#config-file) file using `proxy` key.
* Use the `--proxy` command-line option to specify proxy in the form `[user:passwd@]proxy.server:port`.
