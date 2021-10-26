---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/13/2020
---

### Do I need an agent?

You need at least one [agent](../agents/agents.md) to run your build or release.

### I'm having problems. How can I troubleshoot them?

See [Troubleshoot Build and Release](../troubleshooting/troubleshooting.md).

### I can't select a default agent pool and I can't queue my build or release. How do I fix this?

See [Agent pools](../agents/pools-queues.md).

### My NuGet push task is failing with the following error: "Error: unable to get local issuer certificate". How can I fix this?

This can be fixed by adding a trusted root certificate. You can either add the `NODE_EXTRA_CA_CERTS=file` environment variable to your build agent, or you can add the `NODE.EXTRA.CA.CERTS=file` task variable in your pipeline. See [Node.js documentation](https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file) for more details about this variable. See [Set variables in a pipeline](../process/variables.md#set-variables-in-pipeline) for instructions on setting a variable in your pipeline.
