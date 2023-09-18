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

# [YAML](#tab/yaml)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline, and then select **Edit** to modify your pipeline.

1. Add the following task to your yaml pipeline to run npm audit and scan for security vulnerabilities.

    ```yaml
    steps:
    - task: Npm@1
      displayName: 'npm audit'
      inputs:
        command: custom
        customCommand: 'audit --registry=https://registry.npmjs.org/'
    ```

1. You can also simultaneously scan and upgrade to non-vulnerable package versions, as follows:

    ```yaml
    steps:
    - task: Npm@1
      displayName: 'npm audit & fix'
      inputs:
        command: custom
        customCommand: 'audit fix --registry=https://registry.npmjs.org/ --package-lock-only'
    ```

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline, and then select **Edit** to modify your pipeline.

1. From your pipeline definition, select the `+` sign to add a task to your agent job.

1. Search for the **npm** task, and then select **Add** to add it to your agent job.

1. Provide a **Display name** for your task, and select **custom** from the **Command** dropdown menu.

1. Paste your custom command into the **Command and arguments** text box:

    1. Use the following command to solely scan for security vulnerabilities:
    
    ```Command
    audit --registry=https://registry.npmjs.org/
    ```

    1. If you wish to both scan and attempt to upgrade to non-vulnerable package versions, use the following command::
    
    ```Command
    audit fix --registry=https://registry.npmjs.org/ --package-lock-only
    ```
---

## Run npm audit on your development environment 

To perform an npm audit locally on your development environment and optionally attempt to upgrade to non-vulnerable package versions, follow these steps:

1. Open a command prompt window, and navigate to the root directory of your project where your *package.json* file is located.

1. Run the following command to generate the *package-lock.json* file. This command will analyze your *package.json* file, install the required dependencies, and generate the *package-lock.json* file.

    ```Command
    npm i --package-lock-only
    ```

1. Run the `npm audit` command to scan your project for security vulnerabilities and provide a report.

    ```Command
    npm audit --registry=https://registry.npmjs.org/
    ```

1. If you also want to attempt to upgrade to non-vulnerable package versions, use the following command instead:

    ```Command
    audit fix --registry=https://registry.npmjs.org/ --package-lock-only
    ```

## Related articles

- [npm quickstart](../get-started-npm.md).
- [Publish npm packages with Azure Pipelines](../../pipelines/artifacts/npm.md).
- [Artifacts storage consumption](../artifact-storage.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md).
