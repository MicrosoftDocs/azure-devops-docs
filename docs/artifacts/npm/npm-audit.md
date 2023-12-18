---
title: Enhance Project Security with npm audit
description: Use npm audit to scan and fix package vulnerabilities
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 09/18/2023
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Use npm audit to detect and fix package vulnerabilities

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

The *npm audit* command performs a thorough scan of your project, identifying potential security vulnerabilities and generating a detailed report that highlights any issues found. Conducting security audits is a vital step in recognizing and resolving vulnerabilities within the project's dependencies. The *npm audit fix* command automatically addresses the detected vulnerabilities, updating insecure package versions to the latest secure releases.
Addressing these vulnerabilities is crucial for preventing potential problems like data loss, service disruptions, and unauthorized access to sensitive information.

>[!WARNING]
> Executing *npm audit* will transmit the names of all packages specified in your *package.json* to the public registry.

## Run npm audit from your pipeline

Azure Pipelines does not currently offer support for npm audit. If you try to use the standard *npm audit* command in your pipeline, it will result in failure and display the message: *Unexpected end of JSON input while parsing....* You must execute the *npm audit* with the --registry argument, and pass your feed's source URL.

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline, and then select **Edit** to modify your pipeline.

1. From your pipeline definition, select the `+` sign to add a new task.

1. Search for the **npm** task, and then select **Add** to add it to your pipeline.

1. Enter a **Display name** for your task and choose **Custom** from the **Command** dropdown menu.

1. Paste your custom command into the **Command and arguments** text box:

    1. Use the following command exclusively for scanning package vulnerabilities:
    
       ```Command
       audit --registry=<FEED_SOURCE_URL>
       ```

    1. To both scan and attempt to upgrade to non-vulnerable package versions, use the following command::
    
    ```Command
    audit fix --registry=<FEED_SOURCE_URL> --package-lock-only
    ```

    :::image type="content" source="./media/npm-audit-classic-pipeline.png" alt-text="A screenshot showing the npm audit task in a classic pipeline.":::

# [YAML](#tab/yaml)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline, and then select **Edit** to modify your pipeline.

1. Add the following task to your yaml pipeline to scan for package vulnerabilities:

    ```yaml
    steps:
    - task: Npm@1
      displayName: 'npm audit'
      inputs:
        command: custom
        customCommand: 'audit --registry=<FEED_SOURCE_URL>'
    ```

1. You can also scan and simultaneously upgrade to non-vulnerable package versions as follows
    ```yaml
    steps:
    - task: Npm@1
      displayName: 'npm audit & fix'
      inputs:
        command: custom
        customCommand: 'audit fix --registry=<FEED_SOURCE_URL> --package-lock-only'
    ```

* * *

## Run npm audit on your development environment 

To perform an npm audit locally on your development environment and optionally attempt to upgrade to non-vulnerable package versions, follow these steps:

1. Open a command prompt window, and navigate to the root directory of your project where your *package.json* file is located.

1. Run the following command to generate the *package-lock.json* file. This command analyzes your *package.json* file, installs the required dependencies, and generates the *package-lock.json* file.

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

Here's an example of the output you might see in your command prompt window after running the npm audit command:

:::image type="content" source="./media/npm-audit-report.png" alt-text="A screenshot of a local npm audit security report.":::

## Related articles

- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md).
- [Use Npm scopes in Azure Artifacts](./scopes.md).
- [Delete and recover packages](../how-to/delete-and-recover-packages.md).
