---
title: Use npm audit with Azure Artifacts
description: Use npm audit to scan for security vulnerabilities
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 08/02/2021
monikerRange: 'azure-devops'
---

# Use npm audit

The *npm audit* command scans your project for security vulnerabilities and provides a detailed report of any identified anomaly. Performing security audits is an essential part in identifying and fixing vulnerabilities in the project's dependencies. Fixing these vulnerabilities could prevent things like data loss, service outages, and unauthorized access to sensitive information.

Azure DevOps does not support *npm audit*, if you try to run the default *npm audit* command from your pipeline, the task will fail with the following message: *Unexpected end of JSON input while parsing...*.

As a workaround, you can run *npm audit* with the registry argument `--registry=https://registry.npmjs.org/`. This will route the *npm audit* command directly to the public registry.

>[!WARNING]
> Running *npm audit* will forward all the packages' names from your *package.json* to the public registry.

## Run npm audit from your pipeline

Select the YAML or the classic tab to learn how to run npm audit from you Pipeline.

# [YAML](#tab/yaml)

Add the following task to your yaml pipeline to scan for security vulnerabilities.

```yaml
steps:
- task: Npm@1
  displayName: 'npm audit'
  inputs:
    command: custom
    customCommand: 'audit --registry=https://registry.npmjs.org/'
```

- **command**: the npm command to run.
- **customCommand**: Required when command == custom.

# [Classic](#tab/classic)

1. From your pipeline definition, select the `+` sign to add a task to your agent job.

    :::image type="content" source="media/add-new-task.png" alt-text="Screenshot showing how to add a new task to the agent job":::

1. Search for the **npm** task. Select **Add** to add it to your agent job.

1. Fill out the required fields as follows:

    :::image type="content" source="media/npm-audit-task.png" alt-text="Screenshot showing the npm custom task to run npm audit":::

---

## Run npm audit on your development machine

To run npm audit locally, run the following command in an elevated command prompt window:

```Command
npm audit --registry=https://registry.npmjs.org/
```

## Related articles

- [npm quickstart](../get-started-npm.md).
- [Publish npm packages with Azure Pipelines](../../pipelines/artifacts/npm.md).
- [Artifacts storage consumption](../artifact-storage.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md).
