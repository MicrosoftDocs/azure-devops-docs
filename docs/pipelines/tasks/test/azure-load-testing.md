---
title: Azure Load Testing task
description: Runs an Apache JMeter test in Azure Load Testing.
ms.topic: reference
ms.author: nicktrog
author: ntrogh
ms.date: 02/16/2022
monikerRange: '>= tfs-2015'
---

# Azure Load Testing task

Use this task to run an Apache JMeter script by using Azure Load Testing Preview. Azure Load Testing is a fully managed load testing service that enables you to generate high-scale load.

> [!IMPORTANT]
> Azure Load Testing is currently in preview. For legal terms that apply to Azure features that are in beta, in preview, or otherwise not yet released into general availability, see the [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/).

## Demands

The agent must have the following capability:

* Azure PowerShell

> [!IMPORTANT]
> This task is part of the Azure Load Testing marketplace extension. For more information on installing and using this task, see [Identify performance regressions with Azure Load Testing Preview and Azure Pipelines](/azure/load-testing/tutorial-cicd-azure-pipelines).

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/azure-load-testing-v1.md)]

::: moniker-end

## Arguments

| Parameter                    | Comments                                                                    |
|------------------------------|-----------------------------------------------------------------------------|
| **Azure subscription**       | Required. Azure subscription or Azure Resource Manager service connection.  |
| **Load test file**           | Required. Path to the load test YAML configuration file, relative from the repo root. <BR>See [Test configuration YAML reference](/azure/load-testing/reference-test-config-yaml).   |
| **Load test resource group** | Required. The resource group that contains the Azure Load Testing resource. |
| **Load test resource name**  | Required. Name of an existing Azure Load Testing resource.                  |
| **Secrets**                  | Optional. Array of JSON objects that consist of the name and value for each secret. The name should match the secret name used in the Apache JMeter test script. |
| **Env**                      | Optional. Array of JSON objects that consist of the name and value for each environment variable. The name should match the variable name used in the Apache JMeter test script. |

Succeeds if the load test finishes successfully and all [test pass/fail criteria](/azure/load-testing/how-to-define-test-criteria) pass.

## Next steps

For more information about using this task, see the Azure Load Testing documentation article [Continuous regression testing with Azure Pipelines](/azure/load-testing/tutorial-cicd-azure-pipelines).
