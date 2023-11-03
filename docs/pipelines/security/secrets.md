---
title: Use secrets in Azure Pipelines
description: Learn best practices for using secrets in Azure Pipelines.
ms.date: 01/26/2023
monikerRange: '> azure-devops-2019'
---

# Use secrets securely in Azure Pipelines

This article provides best practices on using secrets in Azure Pipelines. 

Azure DevOps doesn't generate secret values. However, you might need to add a secret to a pipeline to store sensitive data like an API key. To learn more about setting secret variables, see [Set secret variables](../process/set-secret-variables.md). 

## Use secret variables

Sensitive values should never be stored as plaintext in an Azure Pipelines **.yml** file. 

Secret variables can be used for private information like passwords, IDs, and other identifying data that you wouldn't want exposed in a pipeline. The recommended ways to [set secret variables](../process/set-secret-variables.md) are in the UI, in a variable group, and in Azure Key Vault. You can also set secret variables in a script with a logging command but this is not recommended since anyone who can access your pipeline will be able to also see the secret. 

Secret variables are encrypted and can be used in pipelines without exposing their values. Although there values aren't exposed, never echo secrets as output and don't pass secrets on the command line. Instead, we suggest that you map your secrets into environment variables.

When you create a secret, follow [variable naming guidelines](../process/variables.md#variable-naming-restrictions) and make sure that your secret name does not disclose sensitive information. 

### Limit access to secret variables

To limit access to secrets in Azure DevOps, you can:
 
 - Store your secrets in [Azure Key Vault](/azure/key-vault/). With Azure Key Vault, you can then use Azure's role-based access control model to limit access to an secret or group of secrets. 
 - Set secret variables in the UI for a pipeline. Secret variables set in the pipeline settings UI for a pipeline are scoped to the pipeline where they are set. So, you can have secrets that only visible to users with access to that pipeline. 
 - Set secrets in a variable group. Variable groups follow the [library security model](../library/index.md#library-security). You can control who can define new items in a library, and who can use an existing item.

## Don't write secrets to logs

Azure Pipelines attempts to scrub secrets from logs wherever possible. This filtering is on a best-effort basis and can't catch every way that secrets can be leaked. Avoid echoing secrets to the console, using them in command line parameters, or logging them to files. For example, some Azure CLI commands output information you must protect. If you call Azure CLI from your pipeline, use the [None output format](https://aka.ms/clisecrets).

## Don't use structured data as secrets

Structured data can cause secret redaction within logs to fail, because redaction largely relies on finding an exact match for the specific secret value. For example, don't use a blob of JSON, XML, or YAML (or similar) to encapsulate a secret value, as this significantly reduces the probability the secrets are properly redacted. Instead, create individual secrets for each sensitive value.

## Audit how secrets are handled

Audit how secrets are used, to help ensure they’re being handled as expected. You can do this by reviewing the source code of the repository executing the workflow, and checking any actions used in the workflow. For example, check that they’re not sent to unintended hosts, or explicitly being printed to log output.

View the run logs for your pipeline after testing valid/invalid inputs, and check that secrets are properly redacted, or not shown. It's not always obvious how a command or tool you're invoking will emit errors, and secrets might later end up in error logs. Azure Pipelines attempts to scrub secrets from logs wherever possible. This filtering is on a best-effort basis and can't catch every way that secrets can be leaked. As a result, it's good practice to manually review the pipeline logs after testing valid and invalid inputs.


## Audit and rotate secrets

Periodically review the registered secrets used by your pipelines to confirm they're still required, and remove those that are no longer needed.

Periodically rotate secrets to reduce the window of time during which a compromised secret is valid.

Secrets used by pipelines can include:

* [Personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)
* [Secret variables](../process/set-secret-variables.md)
* [Azure Key Vault secrets](/azure/key-vault/)
* [Service connections](../library/service-endpoints.md)

