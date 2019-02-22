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
They're available on the agent for tasks and scripts to use.

> [!NOTE]
> You should never pass secrets on the command line or echo them as output.
> We make an effort to mask secrets from appearing in output, but things like different encoding or splitting across lines can fool the detection logic.
> Also, since the secrets are available on the agent, be careful about who has access to alter your pipeline.

Unlike a normal variable, they are not automatically decrypted into environment variables for scripts.
You can explicitly map them in, though.
