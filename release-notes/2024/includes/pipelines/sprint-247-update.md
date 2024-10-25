---
author: ckanyika
ms.author: ckanyika
ms.date: 10/31/2024
ms.topic: include
---

### Newly created Azure Service Connections create App registrations with new naming convention

Currently, a Service Connection is named `<azure devops org>-<azure devops project>-<azure subscription id>`. This makes it difficult to correlate App registrations to service connections apart that target the same Azure subscription. To make it easy to distinguish App registrations, the name of the app registration will include the id of the service connection: `<azure devops org>-<azure devops project>-<service connection id>`.

The id of a service connection can be found on the service connection details page:


