---
title: Protecting secrets in Azure Pipelines
description: Learn best practices for protecting secrets in Azure Pipelines.
ms.date: 11/10/2023
monikerRange: '> azure-devops-2019'
---

# Protecting secrets in Azure Pipelines

This article provides best practices on protecting secrets in Azure Pipelines. A secret is anything that you want to tightly control access to, such as API keys, passwords, certificates, or cryptographic keys.

Azure Pipelines doesn't generate secret values. However, you might need to add a secret to a pipeline to store sensitive data like an API key. To learn more about setting secret variables, see [Set secret variables](../process/set-secret-variables.md).

## Don't use secrets if another method is available

The best method to protect a secret is not to have a secret in the first place. Check to see if your pipeline can use a different method than using a secret to perform a task. 

* Use service connections. For example, if you are targeting Azure or another service that uses a service connection, you should use the service connection instead of managing secrets in variables. For more information, see [Manage service connections](../library/service-endpoints.md) and [Connect to Microsoft Azure with an ARM service connection](../library/connect-to-azure.md).
* Prefer managed identities instead of using secrets.
  * [Azure services that can use managed identities to access other services](/entra/identity/managed-identities-azure-resources/managed-identities-status)
  * [What are managed identities for Azure resources?](/entra/identity/managed-identities-azure-resources/overview)
  * If you are using the [Azure CLI task](/azure/devops/pipelines/tasks/reference/azure-cli-v2), you can use the `addSpnToEnvironment` setting to access service principal details in script.
  * [Use service principals & managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md)

## Use secret variables

Sensitive values should never be stored as plaintext in an Azure Pipelines **.yml** file. 

Secret variables can be used for private information like passwords, IDs, and other identifying data that you wouldn't want exposed in a pipeline. The recommended way to [set secret variables](../process/set-secret-variables.md) is with Azure Key Vault. You can also set secret variables in the UI or in a variable group. Using a logging command to set a secret variable is not recommended. When you set a secret with a logging command, anyone who can access your pipeline will be able to also see the secret. 

Secret variables are encrypted and can be used in pipelines without exposing their values. Although their values aren't exposed, never echo secrets as output and don't pass secrets on the command line. Instead, we suggest that you map your secrets into environment variables.

When you create a secret, follow [variable naming guidelines](../process/variables.md#variable-naming-restrictions) and make sure that your secret name does not disclose sensitive information. 

### Limit access to secret variables

To limit access to secrets in Azure DevOps, you can:
 
 - Store your secrets in [Azure Key Vault](/azure/key-vault/). With Azure Key Vault, you can then use Azure's role-based access control model to limit access to a secret or group of secrets. 
 - Set secret variables in the UI for a pipeline. Secret variables set in the pipeline settings UI for a pipeline are scoped to the pipeline where they are set. So, you can have secrets that only visible to users with access to that pipeline. 
 - Set secrets in a variable group. Variable groups follow the [library security model](../library/index.md#library-security). You can control who can define new items in a library, and who can use an existing item.

## Don't write secrets to logs

Azure Pipelines attempts to scrub secrets from logs wherever possible. This filtering is on a best-effort basis and can't catch every way that secrets can be leaked. Avoid echoing secrets to the console, using them in command line parameters, or logging them to files. For example, some Azure CLI commands output information you must protect. If you call Azure CLI from your pipeline, use the [None output format](https://aka.ms/clisecrets), and if you need to retrieve a secret from an Azure CLI call, [Use none output format and retrieve security information to a secret variable](/cli/azure/format-output-azure-cli#use-none-and-retrieve-security-information-at-a-later-time).

## Don't use structured data as secrets

Structured data can cause secret redaction within logs to fail, because redaction largely relies on finding an exact match for the specific secret value. For example, don't use a blob of JSON, XML, or YAML (or similar) to encapsulate a secret value, including control characters such as carriage return (`\r`) and line feed (`\n`), as this significantly reduces the probability the secrets are properly redacted. Instead, create individual secrets for each sensitive value.

## Audit how secrets are handled

Audit how secrets are used, to help ensure they’re being handled as expected. You can do this by reviewing the source code of the repository hosting the pipeline, and checking any tasks used in the pipeline. For example, check that they’re not sent to unintended hosts, or explicitly being printed to log output.

View the run logs for your pipeline after testing valid/invalid inputs, and check that secrets are properly redacted, or not shown. It's not always obvious how a command or tool you're invoking will emit errors, and secrets might later end up in error logs. Azure Pipelines attempts to scrub secrets from logs wherever possible. This filtering is on a best-effort basis and can't catch every way that secrets can be leaked. As a result, it's good practice to manually review the pipeline logs after testing valid and invalid inputs.

## Audit and rotate secrets

Periodically review the registered secrets used by your pipelines to confirm they're still required, and remove those that are no longer needed.

Periodically rotate secrets to reduce the window of time during which a compromised secret is valid.

Types of secrets used by pipelines can include:

* [Personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)
  * [Security best practices - Choose the right authentication method](../../organizations/security/security-best-practices.md#choose-the-right-authentication-method)
  * [Manage personal access tokens (PATs) using REST API](../../organizations/accounts/manage-personal-access-tokens-via-api.md)
* [Secret variables](../process/set-secret-variables.md)
* [Azure Key Vault secrets](/azure/key-vault/general/overview)
* [Service connections](../library/service-endpoints.md)

## Next steps

* [Best practices for protecting Azure secrets](/azure/security/fundamentals/secrets-best-practices)
* [Key and secret management considerations in Azure](/azure/well-architected/security/design-storage-keys)
* [Azure DevOps security best practices](../../organizations/security/security-best-practices.md)
