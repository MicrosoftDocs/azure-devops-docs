---
title: Using secrets in Azure Pipelines
description: Learn best practices for using secrets in Azure Pipelines.
ms.date: 01/26/2023
monikerRange: '> azure-devops-2019'
---

# Using secrets

Sensitive values should never be stored as plaintext in an Azure Pipelines **.yml** file.

This article provides best practices on using secrets in Azure Pipelines.

## Use secret variables

Secret variables are encrypted variables that you can use in pipelines without exposing their value. Secret variables can be used for private information like passwords, IDs, and other identifying data that you wouldn't want to have exposed in a pipeline. You can also link secrets from Azure Key Vault. For more information, see [Set secret variables](../process/set-secret-variables.md).

## Don't write secrets to logs

Azure Pipelines attempts to scrub secrets from logs wherever possible. This filtering is on a best-effort basis and can't catch every way that secrets can be leaked. Avoid echoing secrets to the console, using them in command line parameters, or logging them to files.

## Don't use structured data as secrets

Structured data can cause secret redaction within logs to fail, because redaction largely relies on finding an exact match for the specific secret value. For example, do not use a blob of JSON, XML, or YAML (or similar) to encapsulate a secret value, as this significantly reduces the probability the secrets will be properly redacted. Instead, create individual secrets for each sensitive value.

## Audit how secrets are handled

Audit how secrets are used, to help ensure they’re being handled as expected. You can do this by reviewing the source code of the repository executing the workflow, and checking any actions used in the workflow. For example, check that they’re not sent to unintended hosts, or explicitly being printed to log output.

View the run logs for your pipeline after testing valid/invalid inputs, and check that secrets are properly redacted, or not shown. It's not always obvious how a command or tool you're invoking will emit errors, and secrets might subsequently end up in error logs. Azure Pipelines attempts to scrub secrets from logs wherever possible. This filtering is on a best-effort basis and can't catch every way that secrets can be leaked. As a result, it is good practice to manually review the pipeline logs after testing valid and invalid inputs.

## Audit and rotate secrets

Periodically review the registered secrets used by your pipelines to confirm they are still required, and remove those that are no longer needed.

Periodically rotate secrets to reduce the window of time during which a compromised secret is valid.

Secrets used by pipelines can include:

* [Personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)
* [Secret variables](../process/set-secret-variables.md)
* [Azure Key Vault secrets](/azure/key-vault/)
* [Service connections](../library/service-endpoints.md)

