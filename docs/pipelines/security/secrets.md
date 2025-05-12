---
title: Protect secrets in Azure Pipelines
description: Learn best practices for protecting secrets in Azure Pipelines.
ms.date: 07/05/2024
monikerRange: '>= azure-devops-2020'
---

# Protect secrets in Azure Pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article provides best practices on protecting secrets in Azure Pipelines. A secret is anything that you want to tightly control access to, such as API keys, passwords, certificates, or cryptographic keys.

Azure Pipelines doesn't generate secret values. However, you might need to add a secret to a pipeline to store sensitive data like an API key. To learn more about setting secret variables, see [Set secret variables](../process/set-secret-variables.md).

[!INCLUDE [security-prerequisites](includes/security-prerequisites.md)]

## Don't use secrets if another method is available

The best method to protect a secret isn't to have a secret in the first place. Check to see if your pipeline can use a different method than using a secret to perform a task. 

* **Use service connections:** 
  - When you're targeting Azure or other services, use service connections instead of managing secrets in variables.
  - Service connections allow you to securely connect to external services without exposing sensitive information directly in your pipeline configuration.
  - For more information, see [Manage service connections](../library/service-endpoints.md) and [Connect to Microsoft Azure with an Azure Resource Manager service connection](../library/connect-to-azure.md).

- **Use managed identities:**
  - Consider using managed identities instead of handling secrets directly.
  - Managed identities allow your applications and services to authenticate with Azure services without requiring explicit credentials.
  - You can [use managed identities to access other Azure services](/entra/identity/managed-identities-azure-resources/managed-identities-status). 

- **Azure CLI task:**
  - If you're using the [Azure CLI task](/azure/devops/pipelines/tasks/reference/azure-cli-v2), in your pipeline, consider using the `addSpnToEnvironment` setting to access service principal details in script without explicitly passing secrets.

For more information, see [Use service principals & managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md)

## Use secret variables

Never store sensitive values as plaintext in an Azure Pipelines **.yml** file. 

Secret variables can be used for private information like passwords, IDs, and other identifying data that you wouldn't want exposed in a pipeline. We recommend that you [set secret variables](../process/set-secret-variables.md) with Azure Key Vault. You can also set secret variables in the UI or in a variable group. We don't recommend using a logging command to set a secret variable. When you set a secret with a logging command, anyone who can access your pipeline can also see the secret. 

Secret variables are encrypted and can be used in pipelines without exposing their values. Although their values aren't exposed, never echo secrets as output and don't pass secrets on the command line. Instead, we suggest that you map your secrets into environment variables.

When you create a secret, follow [variable naming guidelines](../process/variables.md#variable-naming-restrictions) and make sure that your secret name doesn't disclose sensitive information. 

### Limit access to secret variables

To limit access to secrets in Azure DevOps, follow these best practices:
 
 - Store your secrets in [Azure Key Vault](/azure/key-vault/). With Azure Key Vault, you can then use Azure's role-based access control model to limit access to a secret or group of secrets. 
 - Set secret variables in the UI for a pipeline. Secret variables set in the pipeline settings UI for a pipeline are scoped to the pipeline where they're set. So, you can have secrets that are only visible to users with access to that pipeline. 
 - Set secrets in a variable group. Variable groups follow the [library security model](../library/index.md#library-security). You can control who can define new items in a library, and who can use an existing item.

## Don't write secrets to logs

Azure Pipelines attempts to scrub secrets from logs wherever possible, but it's not foolproof. Avoid echoing secrets to the console, using them in command line parameters, or logging them to files. Be cautious when you use Azure CLI commands that output sensitive information. Use the [`None output format`](https://aka.ms/clisecrets), and if you need to retrieve a secret from an Azure CLI call, [`Use none output format and retrieve security information to a secret variable`](/cli/azure/format-output-azure-cli#use-none-and-retrieve-security-information-at-a-later-time).

## Don't use structured data as secrets

Avoid using structured data formats like JSON, XML, or YAML, to encapsulate secret values, including control characters such as carriage return, `\r`, and line feed,`\n`. Instead, create individual secrets for each sensitive value. This approach ensures better redaction accuracy and minimizes the risk of exposing sensitive data inadvertently.

## Audit how secrets are handled

To audit how secrets are used in Azure Pipelines, follow these best practices:

- **Review source code:** Examine the source code of the repository hosting the pipeline. To ensure secrets get handled correctly, check any tasks used in the pipeline. For instance, verify that secrets aren't inadvertently sent to unintended hosts or explicitly printed to log output.
- **Inspect run logs:** After testing valid and invalid inputs, view the run logs for your pipeline. Ensure that secrets are properly redacted and not exposed. Sometimes, errors in commands or tools might inadvertently leak secrets into error logs. While Azure Pipelines attempts to scrub secrets from logs, manual review is still essential.

## Audit and rotate secrets

To audit and rotate secrets, follow these best practices:

- **Review registered secrets:** Periodically assess the secrets registered in your pipelines. Confirm that they're still necessary, and remove any that are no longer needed, which helps reduce clutter and potential security risks.
- **Rotate secrets:** Regularly rotate secrets to minimize the window of time during which a compromised secret could be exploited. By changing secrets periodically, you enhance security.
- [**Choose the right authentication method**](../../integrate/get-started/authentication/authentication-guidance.md)
  - **Types of secrets used:**
    - **[Personal access tokens (PATs)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md):** These tokens are used for authentication. Follow security best practices when choosing the right authentication method. You can [manage PATs using the REST API](../../organizations/accounts/manage-personal-access-tokens-via-api.md).
    - **[Secret variables](../process/set-secret-variables.md):** Use secret variables to securely store sensitive information like API keys, passwords, or other credentials within your pipeline.
    - **[Azure Key Vault secrets](/azure/key-vault/general/overview):** Use Azure Key Vault to store and manage secrets securely.
    - **[Service connections](../library/service-endpoints.md):** These service connections allow your pipeline to connect to external services (for example, Azure, GitHub, Docker Hub). Ensure proper configuration and secure handling of service connection secrets.

## Use YAML templates 

Instead of including inline scripts with secret parameters directly in your pipeline YAML, use [templates](templates.md). This approach enhances security by abstracting sensitive information away from the main pipeline.

To implement this approach, create a separate YAML file for your script and then store that script in a separate, secure repository. You can then reference the template and pass a secret variable in your YAML as a parameter. The secure variable should come from Azure Key Vault, a variable group, or the pipeline UI. For more information on using templates, see the [Template usage reference](../process/templates.md).

## Limit secrets with branch policies and variable group permissions

To make sure that secrets are tied to the `main` branch and not accessible to random branches, you can use a combination of variable group permissions, conditional job insertion, and branch policies.

With branch policies, you can enforce [build validation policies](../../repos/git/branch-policies.md#build-validation) that only allow builds from the main branch. Then, you can use [variable group permissions](../library/variable-groups.md) to make sure that only authorized pipelines have access the secrets stored in your variable group. Last, you can use a condition in your pipeline to make sure that the variable group can only be referenced by a push to the `main` branch. 

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

## Next steps

> [!div class="nextstepaction"]
> [Best practices for protecting Azure secrets](/azure/security/fundamentals/secrets-best-practices)

## Related articles

- [Key and secret management considerations in Azure](/azure/well-architected/security/design-storage-keys)
- [Azure DevOps security overview](../../organizations/security/security-overview.md)
