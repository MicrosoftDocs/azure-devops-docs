---
ms.topic: include
---

### How do I configure the agent to bypass a web proxy and connect to VSTS?

If you want the agent to bypass your proxy and connect to VSTS directly, then you should configure your web proxy to enable the agent to access the following URLs:

* `https://management.core.windows.net`

* `*.visualstudio.com`

* `https://login.microsoftonline.com`

* `https://app.vsspsext.visualstudio.com`

> [!NOTE]
> This procedure enables the agent to bypass a web proxy. Your build definition and scripts must still handle bypassing your web proxy for each task and tool you run in your build. 
>
> For example, if you are using a NuGet task, you must configure your web proxy to support bypassing the URL for the server that hosts the NuGet feed you're using.


