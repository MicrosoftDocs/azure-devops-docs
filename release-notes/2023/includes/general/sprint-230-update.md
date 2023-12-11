---
author: ckanyika
ms.author: ckanyika
ms.date: 11/16/2023
ms.topic: include
---


### New version of the Azure DevOps Web Extension SDK

With this update we are releasing a new version of the Azure DevOps Web Extension SDK. The client SDK enables web extensions to communicate to the host frame. It can be used to:
* Notify the host that the extension is loaded or has errors
* Get basic contextual information about the current page (current user, host and extension information)
* Get theme information
* Obtain an authorization token to use in REST calls back to Azure DevOps
* Get remote services offered by the host frame

You can find a full API reference in the [azure-devops-extension-sdk package documentation](/javascript/api/azure-devops-extension-sdk/).
This new version provides support for the following modules:
- **ES Module Support:**
 SDK now supports ES (ECMAScript) modules in addition to the existing AMD (Asynchronous Module Definition) modules. You can now import SDK using the ES module syntax, which provides performance improvements and reduces the application size.

- **Backward Compatibility for AMD Modules:** Existing support for AMD modules remains intact. If your project is using AMD modules, you can continue to use them as before without any changes.

**How to use:**

For ES modules, you can import our modules using the import statement:

```
import * as SDK from 'azure-devops-extension-sdk';
// Use the module here
```
 
If you're using AMD modules, you can continue to import SDK using the `require` function:
```
require(['azure-devops-extension-sdk'], function(SDK) {

  // Use the module here
});
```
