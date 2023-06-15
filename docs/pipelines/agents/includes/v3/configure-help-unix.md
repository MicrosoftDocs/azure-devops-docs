---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 06/13/2023
---

## Unattended config

The agent can be set up from a script with no human intervention.
You must pass `--unattended` and the answers to all questions.

::: moniker range="> tfs-2018"

[!INCLUDE [unattend](./unattended-config.md)]

::: moniker-end

`./config.sh --help` always lists the latest required and optional responses.

## Diagnostics

If you're having trouble with your self-hosted agent, you can try running diagnostics.
After configuring the agent:

```bash
./run.sh --diagnostics
```

This will run through a diagnostic suite that may help you troubleshoot the problem.
The diagnostics feature is available starting with agent version 2.165.0.

:::moniker range=">azure-devops-2022"

## Network diagnostics for self-hosted agents

Set the value of `Agent.Diagnostic` to `true` to collect additional logs that can be used for troubleshooting network issues for self-hosted agents. For more information, see [Network diagnostics for self-hosted agents](../../../troubleshooting/review-logs.md#network-diagnostics-for-self-hosted-agents).

:::moniker-end

## Help on other options

To learn about other options:

```bash
./config.sh --help
```

The help provides information on authentication alternatives and unattended configuration.
