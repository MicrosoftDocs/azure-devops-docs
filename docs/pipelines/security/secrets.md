---
title: Secrets in pipelines
description: Learn about best practices for protecting secrets in Azure Pipelines.
ms.date: 09/10/2025
monikerRange: "<=azure-devops"
#customer intent: As an Azure Pipelines user, I want to understand best practices for using secrets in Azure Pipelines so I can limit and control access to secrets in pipelines.

ms.topic: article
---

# Secrets in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article provides best practices for protecting secrets in Azure Pipelines. A secret is anything that you want to tightly control access to, such as API keys, passwords, certificates, or cryptographic keys. Azure Pipelines doesn't generate secret values, but you might need to add secrets to pipelines to store sensitive data like API keys.

[!INCLUDE [security-prerequisites](includes/security-prerequisites.md)]

## Use another method

Secrets present inherent security risks, so it's best not to use them at all. Instead of managing secrets in variables or exposing them in your pipeline configuration, see if your pipeline can use one of these other methods to do a task.

- Set up [service connections](../library/service-endpoints.md) to securely connect to Azure or other services like GitHub or Docker. For more information, see [Connect to Azure with an Azure Resource Manager service connection](../library/connect-to-azure.md).
- Use [managed identities](/entra/identity/managed-identities-azure-resources/managed-identities-status) to let your applications and services authenticate with Azure services without using explicit credentials.
- Use the [Azure CLI task](/azure/devops/pipelines/tasks/reference/azure-cli-v2) with the `addSpnToEnvironment` option in your pipeline to access service principal details without explicitly passing secrets.

For more information, see [Use service principals and managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md).

## Use secret variables

Never store sensitive values as plain text in an *azure-pipelines.yml* file. You can use secret variables for private information like passwords, IDs, and other identifying data you don't want exposed. Secret variables are encrypted, so you can use them in pipelines without exposing their values.

- It's best to securely manage secret variables in [Azure Key Vault](/azure/key-vault/). You can also set secret variables in the pipeline definition UI or in a variable group.
- Don't use a logging command to set a secret variable, because anyone who can access your pipeline can also see the secret.
- Never echo secrets as output, and don't pass secrets on the command line. Instead, it's best to map your secrets into environment variables.
- When you create a secret, follow [variable naming guidelines](../process/variables.md#variable-naming-restrictions), and make sure your secret name doesn't disclose sensitive information.

To learn more about setting secrets in variables, see [Set secret variables](../process/set-secret-variables.md).

### Limit access to secret variables

To limit access to secrets in Azure DevOps, follow one of these practices:

- Store your secrets in [Azure Key Vault](/azure/key-vault/general/overview). By using Azure Key Vault, you can use Azure role-based access control to limit access to a secret or group of secrets.
- Set secret variables in the pipeline UI. These variables are scoped to the pipeline where they're set, so are visible only to users of that pipeline.
- Set secrets in [variable groups](../library/variable-groups.md). Variable groups follow the [library security](../library/index.md#library-security) model, so you can control who can access or create items.

## Don't write secrets to logs

Azure Pipelines attempts to scrub secrets from logs wherever possible, but isn't foolproof. Avoid echoing secrets to the console, using them in command line parameters, or logging them to files.

Be cautious when you use Azure CLI commands that output sensitive information. Use the [None output format](https://aka.ms/clisecrets), and if you need to retrieve a secret from an Azure CLI call, [retrieve security information from a secret variable](/cli/azure/format-output-azure-cli#retrieve-security-information-at-a-later-time).

## Don't use structured data as secrets

Avoid using structured data formats like JSON, XML, or YAML to encapsulate secret values, including control characters such as carriage return `\r` and line feed `\n`. Instead, create individual secrets for each sensitive value. This approach ensures better redaction accuracy and minimizes the risk of inadvertently exposing sensitive data.

## Audit secret use

To audit how your pipelines use secrets, follow these best practices:

- Examine the source code of the repository that hosts the pipeline. To ensure secrets are handled correctly, check all tasks the pipeline uses. Verify that secrets aren't inadvertently sent to unintended hosts or explicitly printed to log output.

- After testing valid and invalid inputs, view the run logs for your pipeline. Ensure that secrets are properly redacted and not exposed. Sometimes, errors in commands or tools might inadvertently leak secrets into error logs. While Azure Pipelines attempts to scrub secrets from logs, manual review is still essential.

## Audit and rotate secrets

To audit and rotate secrets, follow these best practices:

- Periodically review the secrets registered in your pipelines. Confirm that they're still necessary and remove any that are no longer needed. This practice helps reduce clutter and potential security risks.
- Ensure proper configuration and secure handling of service connection secrets.
- Keep [personal access token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) duration short and choose the minimal permissions needed.
- Regularly rotate secrets to minimize the amount of time that a compromised secret could be exploited. Changing secrets periodically enhances security.

## Use YAML templates 

Instead of including inline scripts with secret parameters directly in your pipeline YAML, use [templates](templates.md). This approach enhances security by abstracting sensitive information away from the main pipeline.

To implement this approach, create a separate YAML file for your script and store that script in a separate, secure repository. You can then reference the template and pass a secret variable from Azure Key Vault, a variable group, or the pipeline UI in your YAML as a parameter. For more information about using templates, see the [Template usage reference](../process/templates.md).

## Limit secrets with branch policies and variable group permissions

To ensure that secrets are accessible only to a certain repository branch, you can use a combination of branch policies, variable group permissions, and conditional job insertion.

Enforce [build validation policies](../../repos/git/branch-policies.md#build-validation) that allow builds only from a certain branch. Then use [variable group permissions](../library/variable-groups.md) to ensure that only authorized pipelines can access the secrets stored in your variable group. Finally, use a condition in your pipeline to ensure that only a push to the designated branch can reference the variable group.

```yaml
jobs:
- job: ExampleJob
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
  pool:
    vmImage: 'ubuntu-latest'
  steps:
  - script: echo "This runs only for the main branch"
    displayName: 'Conditional Step'
  variables:
  - group: your-variable-group-name
```

## Related content

- [Best practices for protecting secrets](/azure/security/fundamentals/secrets-best-practices)
- [Architecture strategies for protecting application secrets](/azure/well-architected/security/design-storage-keys)
- [Azure DevOps security overview](../../organizations/security/security-overview.md)
