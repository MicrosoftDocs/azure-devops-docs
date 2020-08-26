---
title: Other security considerations
description: Additional tips for securing your pipelines.
ms.assetid: 95fe319a-60bd-4b1b-9111-5fd8852f7839
ms.reviewer: macoope
ms.date: 08/26/2020
monikerRange: '> azure-devops-2019'
---

# Other security considerations

There are a handful of other things you should consider when securing pipelines.

## Relying on PATH

Relying on the agent's `PATH` setting is dangerous.
It may not point where you think it does, since a previous script or tool could have altered it.
For security-critical scripts and binaries, always use a fully qualified path to the program.

## Logging of secrets

Azure Pipelines attempts to scrub secrets from logs wherever possible.
This filtering is on a best-effort basis and cannot catch every way that secrets can be leaked.
Avoid echoing secrets to the console, using them in command line parameters, or logging them to files.

## Lock down containers

Containers have a few system-provided volume mounts mapping in the tasks, the workspace, and external components required to communicate with the host agent.
You can mark any or all of these volumes read-only.

```yaml
resources:
  containers:
  - container: example
    image: ubuntu:18.04
    mountReadOnly:
      externals: true
      tasks: true
      tools: true
      work: false  # the default; shown here for completeness
```

Most people should mark the first three read-only and leave `work` as read-write.
If you know you won't write to the work directory in a given job or step, go ahead and make `work` read-only as well.
If you have tasks in your pipeline which self-modify, you may need to leave `tasks` read-write.


## Use the Auditing service

A number of pipeline events are recorded in the Auditing service.
Review the audit log periodically to ensure no malicious changes have slipped past.
Visit `https://dev.azure.com/ORG-NAME/_settings/audit` to get started.

## Next steps

Return to the [overview](overview.md) and make sure you've covered every topic.
