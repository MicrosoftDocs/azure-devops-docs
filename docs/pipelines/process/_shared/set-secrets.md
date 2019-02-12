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
They are automatically masked out of any log output from the pipeline.
Unlike a normal variable, they are not automatically decrypted into environment variables for scripts.
You can explicitly map them in, though.