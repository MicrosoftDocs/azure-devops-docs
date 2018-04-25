---
ms.topic: include
---

#### VSTS

Choose **PAT**, and then paste the [PAT token you created](#permissions) into the command prompt window.

> [!NOTE]
> When using PAT as the authentication method, the PAT token is used only for the initial configuration of the agent. Learn more at [Communication with VSTS or TFS](../../../../concepts/agents/agents.md).

#### TFS

> [!IMPORTANT]
> 
> Make sure your server is [configured to support the authentication method](../../configure-tfs-authentication.md) you want to use. 
  
When you configure your agent to connect to TFS, you've got the following options:

* **Alternate** Connect to TFS using Basic authentication. After you select Alternate you'll be prompted for your credentials.

* **Integrated** Not supported on macOS or Linux.

* **Negotiate** (Default) Connect to TFS as a user other than the signed-in user via a Windows authentication scheme such as NTLM or Kerberos. After you select Negotiate you'll be prompted for credentials.

* **PAT** Supported only on VSTS and TFS 2017 and newer. After you choose PAT, paste the [PAT token you created](#permissions) into the command prompt window.

> [!NOTE]
> When using PAT as the authentication method, the PAT token is used only for the initial configuration of the agent on newer versions of TFS. Learn more at [Communication with VSTS or TFS](../../../../concepts/agents/agents.md).
