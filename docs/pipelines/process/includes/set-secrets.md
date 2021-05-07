---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---

To set secrets in the web interface, follow these steps:

1. Go to the **Pipelines** page, select the appropriate pipeline, and then select **Edit**.
1. Locate the **Variables** for this pipeline.
1. Add or update the variable.
1. Select the ![Secret](../media/variables/secret-variable-icon.png) lock icon to store the variable in an encrypted manner.
1. Save the pipeline.

Secret variables are encrypted at rest with a 2048-bit RSA key.
Secrets are available on the agent for tasks and scripts to use. Be careful about who has access to alter your pipeline.

> [!IMPORTANT]
> We make an effort to mask secrets from appearing in Azure Pipelines output, but you still need to take precautions. Never echo secrets as output.
> Some operating systems log command line arguments. Never pass secrets on the command line.
> Instead, we suggest that you map your secrets into environment variables.
> 
> We never mask substrings of secrets. If, for example, "abc123" is set as a secret, "abc" isn't masked from the logs.
> This is to avoid masking secrets at too granular of a level, making the logs unreadable.
> For this reason, secrets should not contain structured data. If, for example, "{ "foo": "bar" }" is set as a secret,
> "bar" isn't masked from the logs.

Unlike a normal variable, they are not automatically decrypted into environment variables for scripts. You need to explicitly map secret variables.
