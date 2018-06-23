---
ms.topic: include
---

### Decide which user you'll use

Decide which user account you're going to use to register the agent.

#### Authenticate with a personal access token (PAT) to VSTS or TFS 2017 or newer

1. Sign in with the user account you plan to use in either your VSTS account (```https://{your-account}.visualstudio.com```)
or your Team Foundation Server web portal (```https://{your-server}:8080/tfs/```).

1.  From your home page, open your profile. Go to your security details.

 ![test](../../../../git/_shared/_img/my-profile-team-services.png)

1. Create a personal access token.

 ![test](../../../../git/_shared/_img/add-personal-access-token.png)

1. For the scope select **Agent Pools (read, manage)** and make sure all the other boxes are cleared.
   If it's a [deployment group](../../../release/deployment-groups/index.md) agent, for the scope select **Deployment group (read, manage)** and make sure all the other boxes are cleared.

1. Copy the token. You'll use this token when you configure the agent.

#### Authenticate as a user of TFS 2017 or newer

You can use either a domain user or a local Windows user on each of your TFS application tiers.


#### Authenticate as a user of TFS 2015

(Applies only to macOS and Linux.) We recommend that you create a local Windows user on each of your TFS application tiers and dedicate that user for the purpose of deploying build agents.



### Confirm the user has permission

Make sure the user account that you're going to use has permission to register the agent.

> Is the user you plan to use is a VSTS account owner or a TFS server administrator? If so, then skip these steps. Otherwise you might see a message like this: _Sorry, we couldn't add the identity. Please try a different identity._

<ol>
<li>Open a browser and navigate to the _Agent pools_ tab for your VSTS account or TFS server:

[!INCLUDE [include](../../_shared/agent-pools-tab.md)]</li>

<li>Click the pool on the left side of the page and then click **Roles**.</li>

<li>If the user account you're going to use is not shown, then get an administrator to add it. The administrator can be an agent pool administrator, a [VSTS account owner](../../../../organizations/accounts/faq-add-delete-users.md#find-owner), or a [TFS server administrator](/tfs/server/admin/add-administrator-tfs).
If it's a [deployment group](../../../release/deployment-groups/index.md) agent, the administrator can be an deployment group administrator, a [VSTS account owner](../../../../organizations/accounts/faq-add-delete-users.md#find-owner), or a [TFS server administrator](/tfs/server/admin/add-administrator-tfs).
You can add a user to the deployment group administrator role in the **Security** tab on the **Deployment Groups** page of the **Build &amp; Release** hub.</li>
</ol>

**Q:** I'm concerned about security. How is this account used? **A:** [Agent communication](../../agents.md#communication).
