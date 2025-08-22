---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 08/22/2025
---

### Do I need an agent to run pipelines?

Yes, you need at least one [agent](../agents/agents.md) to run your build or release pipeline.

### How can I troubleshoot problems?

See [Troubleshoot pipeline runs](../troubleshooting/troubleshooting.md).

### How can I fix not being able to select a default agent pool or queue my pipeline run?

See [Create and manage agent pools](../agents/pools-queues.md).

### How can I fix ny NuGet push task failing with "Error: unable to get local issuer certificate"?

You can fix this issue by adding a trusted root certificate. Either add the `NODE_EXTRA_CA_CERTS=file` environment variable to your build agent, or add the `NODE.EXTRA.CA.CERTS=file` task variable in your pipeline.

For more details about this variable, see [NODE_EXTRA_CA_CERTS=file](https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file) in the Node.js documentation. For instructions on setting a variable in your pipeline, see [Set variables in a pipeline](../process/variables.md#set-variables-in-pipeline).
