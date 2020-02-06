---
ms.topic: include
---

### What key formats are supported for the SSH tasks?

The Azure Pipelines SSH tasks use the Node.js `ssh2` package for SSH connections. Ensure that you are using the latest version of the SSH tasks. Older versions may not support the OpenSSH key format.

If you run into an "Unsupported key format" error, then you may need to add the `-m PEM` flag to your `ssh-keygen` command so that the key is in a supported format.