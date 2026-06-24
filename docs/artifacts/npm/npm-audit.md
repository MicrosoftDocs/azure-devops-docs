---
title: Enhance project security with npm audit
description: Use npm audit to scan and fix package vulnerabilities
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 05/22/2026
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Use npm audit to detect and fix package vulnerabilities

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

The *npm audit* command performs a thorough scan of your project, identifying potential security vulnerabilities and generating a detailed report that highlights any issues found. Conducting security audits is a vital step in recognizing and resolving vulnerabilities within the project's dependencies. The *npm audit fix* command automatically addresses the detected vulnerabilities, updating insecure package versions to the latest secure releases.
Addressing these vulnerabilities is crucial for preventing potential problems like data loss, service disruptions, and unauthorized access to sensitive information.

>[!WARNING]
> Executing *npm audit* will transmit the names of all packages specified in your *package.json* to the public registry.

> [!IMPORTANT]
> *npm audit* reports known vulnerability advisories. It might not detect malicious packages or active supply-chain attacks.
>
> For command behavior, options, and troubleshooting, see the official [npm audit documentation](https://docs.npmjs.com/cli/v11/commands/npm-audit). Azure Artifacts doesn't add audit-specific behavior because npm handles the audit operation and results.

## Run npm audit locally 

`npm audit` can be executed locally without needing to authenticate with your feed. This allows you to scan your project for vulnerabilities and receive a detailed report on the detected security issues and their severity.

If you want to fix the detected vulnerabilities, you can run `npm audit fix`, but you must be authenticated with your feed in order to do so. This command updates insecure package versions to the latest secure releases available.

When you run npm audit fix, it not only updates the local project's *package.json* and *package-lock.json* but also syncs these changes with the associated Azure Artifacts feed. The newly secured versions of the packages will be automatically available in your feed.

This synchronization ensures that other projects sharing the same feed will also benefit from these updates. It helps maintain a consistent and secure set of package versions across all projects.

1. Run the following command in your project directory to perform an npm audit:

    ```Command
    npm audit
    ```

1. If you want to attempt to upgrade to non-vulnerable package versions, make sure you're [connected to your feed](npmrc.md#connect-to-a-feed) first, then run the following command in your project directory:

    ```Command
    npm audit fix
    ```

After running *npm audit fix*, make sure to conduct a thorough testing on your application to confirm that the updates didn't introduce any breaking changes. If a fix requires a major version update, it's recommended to review the package's release notes for any potential breaking changes. Keep in mind that while a private package with public vulnerable dependencies receives vulnerability alerts, it won't receive fixes through *npm audit fix*.

> [!NOTE]
> *npm audit* automatically runs with each execution of *npm install*, but it only works for public packages. 

## Run npm audit from your pipeline

Azure Pipelines doesn't currently support *npm audit*. If you try using the regular *npm audit* command in your pipeline, it will fail. Instead, execute *npm audit* with the *--registry* argument and provide your feed's source URL.

> [!IMPORTANT]
> Follow these best practices when you run npm commands in pipelines: limit the secrets available to the job, use least-privilege service connections and tokens, and lock dependency versions with lockfiles.
> If your packages don't require install scripts to build or run, also consider disabling npm lifecycle scripts during install by setting `ignore-scripts=true` in an *.npmrc* file or by using `--ignore-scripts`. See [npm audit](https://docs.npmjs.com/cli/v11/commands/npm-audit) for more details.

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline, and then select **Edit** to modify it.

1. From your pipeline definition, select the `+` sign to add a new task.

1. Search for the **npm** task, and then select **Add** to add it to your pipeline.

1. Enter a **Display name** for your task, and select **custom** from the **Command** dropdown menu.

1. Paste your custom command into the **Command and arguments** text box:

    1. Use the following command to perform an npm audit and scan for package vulnerabilities. Replace the placeholder with your feed's source URL:
    
       ```Command
       audit --registry=<FEED_SOURCE_URL>
       ```

    1. If you want to attempt to upgrade to non-vulnerable package versions, use the following command. Replace the placeholder with your feed's source URL:
    
    ```Command
    audit fix --registry=<FEED_SOURCE_URL>
    ```

    :::image type="content" source="./media/npm-audit-classic-pipeline.png" alt-text="A screenshot showing the npm audit task in a classic pipeline.":::

# [YAML](#tab/yaml)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline, and then select **Edit** to modify it.

1. Add the following task to your yaml pipeline to perform an npm audit and scan for package vulnerabilities:

    ```yaml
    steps:
    - task: Npm@1
      displayName: 'npm audit'
      inputs:
        command: custom
        customCommand: 'audit --registry=<FEED_SOURCE_URL>'
    ```

1. If you want to upgrade to non-vulnerable package versions, add the following task to your yaml pipeline:

    ```yaml
    steps:
    - task: Npm@1
      displayName: 'npm audit & fix'
      inputs:
        command: custom
        customCommand: 'audit fix --registry=<FEED_SOURCE_URL>'
    ```

* * *

## Related articles

- [Use packages from npmjs.com](./upstream-sources.md)
- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use Npm scopes in Azure Artifacts](./scopes.md)
