---
ms.topic: include
---

To set secrets in the web interface, follow these steps:

- Navigate to **Pipelines** page, select the appropriate pipeline, and then select **Edit**.
- Locate the **Variables** for this pipeline.
- Add or update the variable.
- Select the ![Secret](../_img/variables/secret-variable-icon.png) lock icon to store the variable in an encrypted manner.
- Save the pipeline.

Secret variables are encrypted at rest with a 2048-bit RSA key.
Secrets are available on the agent for tasks and scripts to use **(so be careful about who has access to alter your pipeline)**.

> [!IMPORTANT]
> We make an effort to mask secrets from appearing in Azure Pipelines output, but it's not foolproof. **Never echo secrets as output.**
> Some operating systems log command line arguments. **Never pass secrets on the command line.**
> Instead, we suggest that you map your secrets into environment variables.

Unlike a normal variable, they are not automatically decrypted into environment variables for scripts.
You can explicitly map them in, though.
