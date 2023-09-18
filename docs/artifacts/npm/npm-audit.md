---
title: Enhance Project Security with npm audit
description: Use npm audit to scan for security vulnerabilities
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 09/18/2023
monikerRange: 'azure-devops'
---

# Use npm audit to detect package vulnerabilities

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

The npm audit command conducts a comprehensive scan of your project to detect potential security vulnerabilities. It then generates a detailed report highlighting any identified issues. Performing security audits is a crucial step in identifying and addressing vulnerabilities within the project's dependencies. Addressing these vulnerabilities can help prevent issues such as data loss, service disruptions, and unauthorized access to sensitive information.

Azure Pipelines does not support npm audit, if you attempt to use the regular npm audit command in your pipeline, it will fail with the following message: *Unexpected end of JSON input while parsing...*. As a workaround, you can run npm audit with the registry argument `--registry=https://registry.npmjs.org/`. This will route it straight to the public registry.

>[!WARNING]
> Running npm audit will send the names of all packages listed in your *package.json* to the public registry.

## Run npm audit from your pipeline

Select the YAML or the classic tab to learn how to run npm audit from you Pipeline.

# [YAML](#tab/yaml)

Add the following task to your yaml pipeline to only scan for security vulnerabilities.

```yaml
steps:
- task: Npm@1
  displayName: 'npm audit'
  inputs:
    command: custom
    customCommand: 'audit --registry=https://registry.npmjs.org/'
```

Instead of only scanning, to scan and also attempt to upgrade to non-vulnerable package versions:

```yaml
steps:
- task: Npm@1
  displayName: 'npm audit fix'
  inputs:
    command: custom
    customCommand: 'npm audit fix --registry=https://registry.npmjs.org/ --package-lock-only'
```

- **command**: the npm command to run.
- **customCommand**: Required when command == custom.

# [Classic](#tab/classic)

1. From your pipeline definition, select the `+` sign to add a task to your agent job.

    :::image type="content" source="media/add-new-task.png" alt-text="Screenshot showing how to add a new task to the agent job":::

1. Search for the **npm** task. Select **Add** to add it to your agent job.

1. Fill out the required fields as follows:

    1. To only scan for security vulnerabilities use this command:
    
    ```Command
    audit --registry=https://registry.npmjs.org/
    ```

    1. To also attempt to upgrade to non-vulnerable package versions:
    
    ```Command
    audit fix --registry=https://registry.npmjs.org/ --package-lock-only
    ```

:::image type="content" source="media/npm-audit-task.png" alt-text="Screenshot showing the npm custom task to run npm audit":::

---

## Run npm audit on your development machine

To run npm audit locally, run the following command in a command prompt window:

```Command
npm audit --registry=https://registry.npmjs.org/
```

To also attempt to upgrade to non-vulnerable package versions:

```Command
audit fix --registry=https://registry.npmjs.org/ --package-lock-only
```

## Related articles

- [npm quickstart](../get-started-npm.md).
- [Publish npm packages with Azure Pipelines](../../pipelines/artifacts/npm.md).
- [Artifacts storage consumption](../artifact-storage.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md).
