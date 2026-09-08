---
title: Use personal access tokens
titleSuffix: Azure DevOps
ms.custom: ai-video-demo, pat-reduction, copilot-scenario-highlight, support-driven-update
ai-usage: ai-assisted
description: Create, manage, rotate, and audit personal access tokens (PATs) in Azure DevOps. Apply security best practices for PAT lifecycle management.
ms.subservice: azure-devops-security
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 09/04/2026
monikerRange: '<= azure-devops'
---

# Use personal access tokens

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A personal access token (PAT) acts as an alternative password for authenticating into Azure DevOps.
This PAT identifies you and determines your accessibility and scope of access.
Treat PATs with the same level of caution as passwords.

> [!CAUTION]
> Avoid using PATs when a more secure authentication method is available.
> PATs carry inherent security risks because they're long-lived credentials that can be leaked, stolen, or misused.
> Use [Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md), managed identities, or service principals instead whenever possible.

When you use Microsoft tools, your Microsoft account or Microsoft Entra ID is recognized and supported.
If you use tools that don't support Microsoft Entra accounts, or if you prefer not to share your primary credentials, consider using PATs as an alternative authentication method.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions** |Permission to access and modify your user settings where PATs are managed. <br>- Go to your profile and select **User settings** > **Personal access tokens**. If the page lists your PATs and provides options to manage them, you have the necessary permissions.<br>- Go to your project and select **Project settings** > **Permissions**. Find your user account in the list and check the permissions that are assigned to you. Review permissions related to managing tokens or user settings.<br>- If your [organization has policies in place](manage-pats-with-policies-for-administrators.md), an administrator might need to grant you specific permissions or add you to an allow list to create and manage PATs.<br>- PATs are connected to the user account that minted the token. Depending on the tasks the PAT performs, you might need more permissions yourself.|
|**Access levels** |At least Basic access.|
|**Tasks**|*Use PATs only when necessary and always rotate them regularly.* See the section [Best practices for using PATs](#best-practices-for-using-pats).|

## Create a PAT

:::moniker range="< azure-devops"
> [!NOTE]
> The following steps and screenshots reflect Azure DevOps Services. The Azure DevOps Server experience might vary slightly.
:::moniker-end

::: moniker range="azure-devops"

1. Sign in to your organization (`https://dev.azure.com/{Your_Organization}`).
  
1. From your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

   :::image type="content" source="media/pats/select-personal-access-tokens.png" alt-text="Screenshot shows Personal access tokens option in user settings.":::

1. Select **+ New Token**.

   :::image type="content" source="media/pats/select-new-token.png" alt-text="Screenshot shows New Token button on the Personal access tokens page.":::

1. Name your token, select the organization where you want to use the token, and then set your token to automatically expire after a set number of days.

   :::image type="content" source="media/pats/create-new-pat.png" alt-text="Screenshot shows Create a new personal access token dialog with name, organization, and expiration fields.":::

1. Select the [scopes](../../integrate/get-started/authentication/oauth.md#available-scopes)
   for this token to authorize *your specific tasks*.

      For example, to create a token for a [build and release agent](../../pipelines/agents/agents.md) to authenticate to Azure DevOps, set the token's scope to **Agent Pools (Read & manage)**. To read audit log events and manage or delete streams, select **Read Audit Log**, and then select **Create**.

   :::image type="content" source="media/pats/select-pat-scopes-preview.png" alt-text="Screenshot shows scope selection options for a PAT.":::

   Your administrator might [restrict you from creating full-scoped PATs or limit you to packaging-scope PATs only](manage-pats-with-policies-for-administrators.md).
   Contact your admin to get on the allow list if you need access to more scopes.
   Some scopes, such as `vso.governance`, might not be available in the user interface (UI) if they're not for widespread public use.

1. When you finish, copy the token and store it in a secure location. For your security, it doesn't display again.

   :::image type="content" source="media/pats/copy-token-to-clipboard.png" alt-text="Screenshot shows Copy token to clipboard button with the generated PAT value.":::

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps Server web portal (`https://{server}/{collection}` or `http://{server}:{port}/tfs/{collection}`).
1. From your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

   :::image type="content" source="media/pats/select-personal-access-tokens.png" alt-text="Screenshot shows Personal access tokens option in user settings.":::

1. Select **+ New Token**.

   :::image type="content" source="media/pats/select-new-token.png" alt-text="Screenshot shows New Token button on the Personal access tokens page.":::

1. Name your token, select the organization where you want to use the token, and then set your token to automatically expire after a set number of days.

   :::image type="content" source="media/pats/create-new-pat.png" alt-text="Screenshot shows Create a new personal access token dialog with name, organization, and expiration fields.":::

1. Select the [scopes](../../integrate/get-started/authentication/oauth.md#available-scopes)
   for this token to authorize *your specific tasks*.

      For example, to create a token for a [build and release agent](../../pipelines/agents/agents.md) to authenticate to Azure DevOps, set the token's scope to **Agent Pools (Read & manage)**. To read audit log events and manage or delete streams, select **Read Audit Log**, and then select **Create**.

   :::image type="content" source="media/pats/select-pat-scopes-preview.png" alt-text="Screenshot shows scope selection options for a PAT.":::

   Your administrator might [restrict you from creating full-scoped PATs or limit you to packaging-scope PATs only](manage-pats-with-policies-for-administrators.md).
   Contact your admin to get on the allow list if you need access to more scopes.
   Some scopes, such as `vso.governance`, might not be available in the user interface (UI) if they're not for widespread public use.

1. When you finish, copy the token and store it in a secure location. For your security, it doesn't display again.

   :::image type="content" source="media/pats/copy-token-to-clipboard.png" alt-text="Screenshot shows Copy token to clipboard button with the generated PAT value.":::

::: moniker-end

You can use your PAT anywhere that your user credentials are required for authentication in Azure DevOps. Remember:

- Treat a PAT with the same caution as your password, and keep it confidential. *Don't share PATs.*
- For organizations backed by Microsoft Entra ID, sign in with your new PAT within 90 days or it becomes inactive.
  For more information, see [User sign-in frequency for conditional access](/azure/active-directory/conditional-access/howto-conditional-access-session-lifetime).

### Notifications

During a PAT's lifespan, users receive two notifications: one when the PAT is created and another before it expires.

After you create a PAT, you might receive a notification similar to the following example.
This notification serves as confirmation that your PAT was successfully added to your organization.

   :::image type="content" source="media/use-personal-access-tokens-to-authenticate/pat-creation.png" alt-text="Screenshot shows PAT created notification email.":::

An expiration notification email is sent before the token expires.
If your administrator [removed your ability to create PATs in the organization](manage-pats-with-policies-for-administrators.md), the email indicates that you can no longer regenerate PATs.
Reach out to your [project collection administrator](../security/look-up-project-collection-administrators.md) to be included in an allow list for continued PAT creation permissions in that organization.

::: moniker range=" < azure-devops"

For more information, see [Configure an SMTP server and customize email for alerts and feedback requests](/azure/devops/server/admin/setup-customize-alerts).

::: moniker-end

#### Unexpected notification

If you receive an unexpected PAT notification, it might mean that an administrator or tool created a PAT for you.
Here are some examples:

- A token named `git: https://dev.azure.com/{yourorganization} on YourMachine` is created when you connect to an Azure DevOps Git repo through git.exe.
- A token named `Service Hooks: Azure App Service: Deploy web app` is created when you or an administrator sets up an Azure App Service web app deployment.
- A token named `WebAppLoadTestCDIntToken` is created when web load testing is set up as part of a pipeline by you or an administrator.
- A token named `Microsoft Teams Integration` is created when a Microsoft Teams Integration Messaging Extension is set up.

If you think the situation is serious:

- [Revoke the PAT](admin-revoke-user-pats.md) (and change your password) if you suspect that it exists in error.
- Check with your administrator if you're a Microsoft Entra user to see if an unknown source or location accessed your organization.
- Review the FAQ on [accidental PAT check-ins to public GitHub repositories](#q-what-happens-if-i-accidentally-check-my-pat-into-a-public-repository-on-github).

## Use a PAT

Your PAT serves as your digital identity, much like a password.
Use PATs as a quick way to do one-time requests or prototype an application locally.
Use a PAT in your code to authenticate [REST API](/rest/api/azure/devops) requests and automate workflows by including the PAT in the authorization header of your request.

After your app code is working, switch to [Microsoft Entra OAuth to acquire tokens for your app's users](../../integrate/get-started/authentication/entra-oauth.md) or a [service principal or managed identity to acquire tokens as an application](../../integrate/get-started/authentication/service-principal-managed-identity.md).
Don't keep running apps or scripts with PATs long term.
You can use Microsoft Entra tokens anywhere that a PAT is used.

Consider [acquiring a Microsoft Entra token through the Azure CLI](../../cli/entra-tokens.md) for unplanned requests.

### [Windows](#tab/Windows/)

To provide the PAT through an HTTP header, first convert it to a `Base64` string.
Then, provide it as an HTTP header in the following format:

```cs

Authorization: Basic BASE64_USERNAME_PAT_STRING
```

### [Linux/macOS](#tab/Linux/)

The following sample gets a list of builds by using curl:

```curl

curl -u :{PAT} https://dev.azure.com/{organization}/_apis/build-release/builds
```

* * *

## Modify a PAT

To modify a PAT, use the following steps:

- Regenerate a PAT to create a new token and invalidate the previous token.
- Extend a PAT to increase its validity period.
- Change the [scope](../../integrate/get-started/authentication/oauth.md#available-scopes) of a PAT to change its permissions.

1. From your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

1. Select the token that you want to modify, and then select **Edit**.

   :::image type="content" source="media/pats/select-edit-pat-current-view.png" alt-text="Screenshot shows Edit button highlighted for a PAT entry.":::

1. Edit the token name, token expiration, or the scope of access associated with the token, and then select **Save**.

   :::image type="content" source="media/pats/modify-pat.png" alt-text="Screenshot shows Edit dialog for a PAT with name, expiration, and scope fields.":::

## Revoke a PAT

Revoke a PAT at any time for these and other reasons:

- **Security breach**: Revoke a PAT immediately if you suspect it was compromised, leaked, or exposed in logs or public repositories.
- **No longer needed**: Revoke a PAT when the project, service, or integration for which you created it is finished.
- **Policy compliance**: Revoke a PAT to enforce security policies, compliance requirements, or organizational token rotation schedules.
- **User changes**: Revoke a PAT when a team member leaves the organization or changes roles and no longer needs access.
- **Scope reduction**: Revoke and re-create a PAT with reduced permissions when you need to limit its access capabilities.
- **Regular maintenance**: Revoke a PAT as part of routine security hygiene and token lifecycle management.

To revoke a PAT, follow these steps:

1. On your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

1. Under **Security**, select **Personal access tokens**. Select the token for which you want to revoke access, and then select **Revoke**.

   :::image type="content" source="media/pats/revoke-personal-access-tokens-preview.png" alt-text="Screenshot shows Revoke option for a selected token on the Personal access tokens page.":::

1. In the **Confirmation** dialog, select **Revoke**.

   :::image type="content" source="media/pats/revoke-token-confirmation-dialog-preview.png" alt-text="Screenshot shows Confirmation dialog to revoke a PAT.":::

## What happens when a PAT expires or is revoked

When a PAT expires or is revoked, any service or tool using that PAT immediately loses authentication to Azure DevOps. Understanding the impact helps you plan rotation and prevent service disruptions.

### Service impact by scenario

| Scenario | Behavior | Error message | Timeline |
|----------|----------|---------------|----------|
| **Git operations (clone, push, pull)** | Authentication fails; operations blocked | `fatal: Authentication failed for '<url>'` or `401 Unauthorized` | Immediate |
| **Azure Pipelines CI/CD** | Build or release job fails at authentication step | `Error: Personal access token (PAT) is invalid or expired` | Next pipeline run |
| **REST API calls** | All API requests fail; integration halts | `401 Unauthorized` or `TF400813: Resource not available for anonymous access` | Immediate |
| **Azure Artifacts (NuGet, npm, Maven)** | Package restore or publish fails | `401 Unauthorized` or `Credentials could not be authenticated` | Immediate |
| **Git Credential Manager** | Requires re-authentication | User prompted to sign in again | Next authentication attempt |
| **Scripts & automation tools** | Execution fails with authentication error | Tool-specific error (varies by tool) | Immediate |

### Impact timeline

1. **At expiration time (specified date):**
   - PAT becomes inactive automatically
   - All active connections drop
   - New authentication attempts fail

1. **In the hours after expiration:**
   - Scheduled jobs (pipelines, deployments) fail on next execution
   - Interactive users might not notice until they attempt the next operation

1. **After revocation (immediate):**
   - All active sessions terminate
   - All new requests using that PAT are rejected

### Proactive prevention strategies

To avoid service disruptions, follow these practices:

- **Regenerate early**: Create a new PAT **at least seven days before expiration**, then test and update all integrations before the old one expires.
- **Automate monitoring**: Use the [PAT Lifecycle Management APIs](#pat-lifecycle-management-apis) to programmatically check expiration dates.
- **Stagger PAT lifespans**: Don't let all your PATs expire on the same day. Rotate them quarterly on different schedules.
- **Document PAT usage**: Maintain a list of where each PAT is used (pipeline, script, integration) so you can update them during rotation.

### If a PAT expires unexpectedly

If you experience authentication failures, here's how to recover:

1. **Identify the issue**: Check if the PAT expired by reviewing your **Personal access tokens** page in user settings, or ask your admin to check the audit log.
1. **Create a replacement**: Generate a new PAT if your permissions allow (see [Create a PAT](#create-a-pat)).
1. **Update all integrations**: Replace the old PAT with the new one in:
   - Git configuration files (`.git/config`)
   - Pipeline YAML files
   - Build agents
   - Scripts and integrations
   - Environment variables
1. **Test connectivity**: Run a test operation (for example, `git clone`, API call) to verify the new PAT works.
1. **Revoke the old PAT**: Remove it from your account to reduce security risk.

### For on-premises scenarios

On Azure DevOps Server, PAT expiration behavior is the same, but the impact is local to your server and connected services.

---

## PAT rotation and renewal strategy

Regularly rotating your PATs reduces the risk of compromised credentials and helps you comply with organizational security policies.

### Why rotate PATs?

- **Breach mitigation**: If a PAT is leaked, compromised, or stolen, limiting its lifetime reduces the exposure window.
- **Compliance**: Many security standards (SOC 2, ISO 27001, HIPAA) require regular credential rotation.
- **Hygiene**: Removes unused or forgotten tokens from your organization.
- **Auditability**: Frequent rotation creates clear audit trails of credential changes.

### Recommended rotation cadence

Enforce short-lived PATs and establish a rotation strategy based on PAT type and risk profile:

- **Personal PATs:** Rotate every 90 days (quarterly minimum).
- **Service account PATs:** Rotate every 90 days with automated renewal where possible to prevent service disruptions.
- **Privileged or high-scope PATs** (for example, used for critical infrastructure): Rotate every 30 days for increased security.
- **Offboarding:** Immediately revoke PATs when a team member undergoes any of the following status changes:
  - Termination or departure
  - Transfer to a different team or organization
  - Leave of absence
  - Role change or responsibility shift

### Long-term strategy: Migrate from PATs to stronger authentication

Microsoft recommends reducing PAT usage in favor of stronger, more auditable authentication methods. Where possible, migrate to:

- **Microsoft Entra tokens** — Time-limited, refresh-capable, auditable through Entra ID
- **Managed identities** — For Azure-hosted services (App Service, Functions, Container Apps)
- **Service principals** — For cross-tenant or non-Azure scenarios
- **OAuth 2.0 with Microsoft Entra** — For browser-based integrations and third-party apps

**Benefits of migration:**
- **Reduced attack surface**: Eliminates long-lived static credentials
- **Better auditability**: Native Entra ID audit logs track every authentication
- **Automated lifecycle**: Tokens expire by default; no manual rotation required
- **Conditional Access support**: Apply organization-wide security policies

For details on authentication alternatives, see [Microsoft Entra authentication](../../integrate/get-started/authentication/entra.md) and [Service principals and managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md).

### Rotation workflow

Follow these steps to rotate a PAT without disrupting services:

#### Step 1: Create the new PAT
1. From your home page, open user settings and select **Personal access tokens**.
1. Select **+ New Token**.
1. Enter the **same name** as the old token (for easy tracking).
1. Set expiration to **90 days** from today.
1. Select the **exact same scopes** as the old token.
1. Select **Create** and copy the new token immediately (it doesn't display again).

#### Step 2: Test the new PAT
Before retiring the old PAT, validate that the new one works:
```bash
# For Git (replace with your URL and new PAT)
git clone https://<user>:<new-pat>@dev.azure.com/<org>/<project>/_git/<repo>

# For REST API
curl -u :<new-pat> https://dev.azure.com/<org>/_apis/projects
```

#### Step 3: Update all integrations
For each service or tool using the old PAT:

| Integration | Update Method |
|-------------|--|
| **Git credential** | Update `.git/config` or Git Credential Manager |
| **Pipeline YAML** | Update service connection or variable reference |
| **Script/tool** | Update config file or environment variable |
| **Azure Artifacts** | Update `nuget.config`, `.npmrc`, or credential provider |
| **Build agent** | Update agent configuration via web UI |

Example: Updating a pipeline variable
```yaml
# Before
- script: npm install
  env:
    NPM_TOKEN: $(old-pat-variable)

# After
- script: npm install
  env:
    NPM_TOKEN: $(new-pat-variable)
```

#### Step 4: Verify functionality
After updating each integration, test it:
- Run a pipeline job.
- Execute a script manually.
- Attempt a Git operation.
- Check API calls.

#### Step 5: Revoke the old PAT
Once all integrations are updated and tested, revoke the old PAT:
1. From your home page, open user settings and select **Personal access tokens**.
1. Select the old PAT.
1. Select **Revoke** and confirm.

### Rotation scenario: Offboarding a team member

When a team member leaves:

1. **Immediate action (day of departure)**:
   - Admin revokes all of their PATs from **Organization Settings > Security > Personal access tokens**
   - Admin checks audit log for any PATs created by this user
   - Any service using their PAT breaks immediately (expected)

1. **Within 1 week**:
   - Teams using that person's PAT should rotate to a shared service account or new PAT
   - Update all scripts, pipelines, and integrations

1. **Ongoing**:
   - Review audit logs weekly for orphaned PATs

### Automating rotation with the PAT Lifecycle Management API

For large-scale deployments, rotate PATs programmatically:

```python
import requests
from datetime import datetime, timedelta

# 1. Get PAT metadata (using Entra token)
org_url = "https://dev.azure.com/myorg"
entra_token = "YOUR_ENTRA_TOKEN"

response = requests.get(
    f"{org_url}/_apis/tokens/pats",
    headers={"Authorization": f"Bearer {entra_token}"},
    params={"api-version": "7.1-preview.1"}
)
pats = response.json()["value"]

# 2. Find PATs expiring in 7 days
expiring_soon = [
    pat for pat in pats 
    if (datetime.fromisoformat(pat["expiresOn"].replace("Z", "+00:00")) 
        - datetime.now().astimezone()).days <= 7
]

# 3. Create new PATs for expiring ones
for old_pat in expiring_soon:
    new_pat_payload = {
        "displayName": old_pat["displayName"],
        "scope": old_pat["scope"],
        "targetAccounts": old_pat["targetAccounts"],
        "validFrom": datetime.now().isoformat(),
        "validTo": (datetime.now() + timedelta(days=90)).isoformat(),
    }
    
    # Create new PAT
    new_response = requests.post(
        f"{org_url}/_apis/tokens/pats",
        json=new_pat_payload,
        headers={"Authorization": f"Bearer {entra_token}"},
        params={"api-version": "7.1-preview.1"}
    )
    new_pat = new_response.json()
    print(f"Created new PAT: {new_pat['patToken']} (save securely)")
    
    # TODO: Update integrations with new PAT
    # TODO: Test new PAT
    # TODO: Revoke old PAT after verification

print(f"\nRotated {len(expiring_soon)} PATs")
```

---

## Audit trail: Tracking PAT creation and revocation

Organization administrators and security teams should monitor PAT activity for compliance, troubleshooting, and threat detection.

### Where to find PAT audit logs

::: moniker range="azure-devops"

1. Go to your organization: `https://dev.azure.com/<org>`
1. Select **Organization settings**.
1. Select **Audit log**.
1. Use filters to find PAT events.

::: moniker-end

::: moniker range="< azure-devops"

1. Go to your Azure DevOps Server collection.
1. Select **Collection Settings**.
1. Select **Audit log**.
1. Use filters to find PAT events.

::: moniker-end

### Filtering for PAT events

In the audit log, filter for PAT-related activities:

| Event Type | Description | Indicates |
|-----------|---|---|
| `PatCreated` | A new PAT was created | New credential issued |
| `PatModified` | A PAT's scope or expiration changed | Credential updated or refreshed |
| `PatRegenerated` | An existing PAT was regenerated (rotated) | Old token invalidated, new one issued |
| `PatRevoked` | A PAT was revoked | Credential invalidated (immediate effect) |
| `PatInactiveRevoked` | A PAT was auto-revoked for inactivity | Stale credential removed |

### Reading audit log entries

Each audit log entry contains:
- **Timestamp**: When the action occurred
- **User**: Who performed the action (or "System" for auto-revocation)
- **Event**: Type of PAT action
- **Details**: Affected PAT ID, scope, organization (if available)
- **IP Address**: Source of the action (for threat investigation)

### Audit log retention

- **Azure DevOps Services**: Audit logs retained for **90 days** by default (admins can configure this setting)
- **Azure DevOps Server**: Retention policy varies by your SQL Server configuration (typically 1–2 years)

### Example: Investigating an orphaned PAT

Suppose you find an old PAT that's still active but shouldn't be:

1. **Note the PAT ID** from your active tokens list.
1. **Search the audit log** for `PatCreated` events with that ID.
1. **Review the creation entry**: Who created it, when, what organization.
1. **Check for usage**: If `PatModified` or `PatRegenerated` events exist, the token was in active use.
1. **Check for revocation**: If no `PatRevoked` event, the PAT is still valid.
1. **Take action**: Revoke the PAT if it's no longer needed, or notify the owner to rotate it.

### Best practices for audit monitoring

- **Review PAT events monthly**: Identify orphaned or suspicious tokens.
- **Set alerts**: If your organization uses Azure Monitor, alert on `PatCreated` or `PatRevoked` events.
- **Comply with retention policies**: Export and archive audit logs per your compliance requirements.
- **Track by user**: Monitor which users create the most PATs (may indicate risky practices).
- **Investigate anomalies**: 
  - Unexpected `PatCreated` events outside business hours.
  - Multiple `PatRevoked` events for the same user (possible account breach).
  - `PatCreated` from unusual IP addresses.

### Programmatic access to audit logs (REST API)

Admins can query the audit log via REST API:

```bash
# List recent audit log events (last 10)
curl -u :<entra-token> \
  "https://dev.azure.com/<org>/_apis/audit/auditlog?api-version=7.1-preview.1" \
  | jq '.value[] | select(.eventType | contains("Pat"))'
```

---

## Organizational PAT expiration policies

Organization administrators can enforce minimum PAT lifespans and restrict token creation to prevent overly broad access. These policies ensure compliance with security standards and reduce the risk of long-lived compromised credentials.

::: moniker range="azure-devops"

1. Go to **Organization Settings** > **Policies** (or **Security** > **Personal access tokens**).
1. Select settings for:
   - **Full-scoped PAT restrictions**: Restrict users from creating tokens with full access to the organization.
   - **Global PAT restrictions**: Restrict users from creating tokens that access multiple organizations.
   - **Token lifetime restrictions**: Set maximum PAT lifetime (for example, no tokens lasting more than 90 days).

::: moniker-end

For more information, see [Manage PATs with policies for administrators](manage-pats-with-policies-for-administrators.md).

---

## PAT Lifecycle Management APIs

The [PAT Lifecycle Management APIs](/rest/api/azure/devops/tokens) can help when maintaining large volumes of tokens through the UI becomes unsustainable.
Managing PAT rotation programmatically also opens the opportunity to rotate PATs regularly and shorten their default lifespans.
You can configure the [sample Python app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) with your Microsoft Entra tenant and Azure DevOps organization.

Some things to note about these APIs:

- [Microsoft Entra access tokens](../../integrate/get-started/authentication/entra.md) are required to access this API. Use a stronger form of authentication when you mint new tokens.
- Only users or apps that use an "on-behalf-of user" flow can generate PATs. Apps that use "on-behalf-of application" flows or authentication flows that don't issue Microsoft Entra access tokens aren't valid for use with this API. As such, [service principals or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) can't create or manage PATs.
- Previously, the PAT Lifecycle Management APIs supported only the `user_impersonation` scope, but now the `vso.pats` scope is available and is the recommended scope to use with these APIs. Downscope all apps that previously relied on `user_impersonation` to call these APIs.

### Using the Azure CLI for PAT management

The `az devops` CLI provides commands to manage PATs without writing custom scripts. For the complete CLI reference, see [Azure DevOps CLI](/cli/azure/devops?view=azure-cli-latest&preserve-view=true) and [log in via PAT](../../cli/log-in-via-pat.md).

```bash
# List all your PATs
az devops user list

# Create a new PAT with limited scope
az devops token list \
  --organization https://dev.azure.com/myorg \
  --user <user-id>

# Example: Using az devops commands in a rotation script
# Sign in with Entra token (recommended)
az login --use-device-code

# List organization members (for bulk admin operations)
az devops security group membership list \
  --organization https://dev.azure.com/myorg \
  --group-id <admin-group-id>
```


### Using the REST API for automated rotation

For large-scale PAT management, use REST API endpoints.

```bash
# List all PATs for a user (requires Entra token)
curl -X GET \
  -H "Authorization: Bearer <entra-token>" \
  "https://dev.azure.com/<org>/_apis/tokens/pats?api-version=7.1-preview.1"

# Create a new PAT
curl -X POST \
  -H "Authorization: Bearer <entra-token>" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "CI/CD PAT",
    "scope": "vso.build vso.release_manage vso.code_write",
    "validTo": "2026-10-07T00:00:00.000Z"
  }' \
  "https://dev.azure.com/<org>/_apis/tokens/pats?api-version=7.1-preview.1"

# Revoke a PAT by ID
curl -X DELETE \
  -H "Authorization: Bearer <entra-token>" \
  "https://dev.azure.com/<org>/_apis/tokens/pats/<pat-id>?api-version=7.1-preview.1"
```

## PAT format

PAT strings use a specific format designed to improve secret detection in the [leaked PAT detection tooling](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically-tenant-policy) and [partner offerings](../../repos/security/github-advanced-security-secret-scanning.md).
The format includes identifiable bits that improve the false positive detection rate and enable faster mitigation of detected leaks.

- Tokens are *84* characters long, with 52 characters being randomized data, which improves overall entropy. Tokens are resistant to brute force attacks.
- Tokens issued by Azure DevOps include a fixed `AZDO` signature at positions 76-80.

If you integrate with PATs and have PAT validation built in, ensure your validation code accommodates the 84-character token length.

## Best practices for using PATs

### Consider alternatives

- Acquire a Microsoft Entra token through the [Azure CLI](../../cli/entra-tokens.md) for unplanned requests instead of minting a longer-lived PAT.
- Use credential managers like [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) or [Azure Artifacts Credential Manager](https://github.com/microsoft/artifacts-credprovider) to simplify credential management, with authentication set to `oauth` or Microsoft Entra tokens.

### Create PATs

- Don't put personal data in the PAT name. Don't rename the PAT name to include some or all of the actual PAT token.
- Avoid creating global PATs unless necessary across all organizations.
- Use a different token per flow or use case.
- Select only the minimum scopes required for each PAT. Grant the least privilege necessary for your specific task. Create separate PATs with limited scopes for different workflows instead of using a single, broad-scoped token. If your PAT needs read-only permissions, don't provide write permissions until necessary.
- Keep PAT lifespans short.

### Manage PATs

- *Don't share your PATs!*
- *Store your PATs in a secure key management solution*, like [Azure Key Vault](/azure/key-vault/general/overview).
- Regularly rotate or regenerate your PATs through the UI or by using PAT Lifecycle Management APIs.
- Revoke PATs when they're no longer needed.

### For admins

- Tenant admins should set [policies to restrict](manage-pats-with-policies-for-administrators.md):
  - Global PAT creation (require org-scoped tokens)
  - Full-scoped PAT creation (require limited scopes)
  - Long-lived PAT duration (enforce 30–90 day maximum lifespans)
- Tenant admins can [revoke PATs for their organization users](admin-revoke-user-pats.md) if the PAT is compromised.
- Organization admins should [restrict PAT creation in an organization](manage-pats-with-policies-for-administrators.md) and, where possible, migrate services to Microsoft Entra authentication instead of PATs.

### Admin audit walkthrough: Managing all PATs in your organization

Organization administrators can audit and manage all PATs across the entire organization to enforce security policies and identify risky tokens.

#### Step 1: Access the organization PAT management page

::: moniker range="azure-devops"

1. Go to **Organization Settings** > **Security** > **Personal access tokens**.
1. By default, the page displays your own PATs.
1. Select **All PATs** from the dropdown to view tokens across all users.

::: moniker-end

::: moniker range="< azure-devops"

1. Go to **Collection Settings** > **Security** > **Personal access tokens**.
1. Select **All PATs** to view all tokens in the collection.

::: moniker-end

#### Step 2: Filter and identify high-risk tokens

Review the following token characteristics:
- **Long-lived tokens** (expiration > 90 days): Candidates for rotation or revocation.
- **Full-scoped tokens** (scope = all): Highest security risk; enforce policies to restrict.
- **Global tokens** (access multiple organizations): Avoid these tokens; consider org-scoped alternatives.
- **Stale tokens** (no recent activity): Safe to revoke.
- **Tokens created outside business hours**: Potential security incident.

#### Step 3: Review the audit log for PAT events

1. Go to **Organization Settings** > **Audit log**.
1. Filter by event type:
   - `PatCreated` — Find when tokens were issued.
   - `PatRevoked` — Track when tokens were disabled.
   - `PatRegenerated` — Monitor rotation activity.
1. Export audit logs for compliance reporting (90-day retention).

#### Step 4: Revoke compromised or unused tokens

If you find a compromised or unnecessary PAT:

1. Go to **Organization Settings** > **Security** > **Personal access tokens**.
1. Select **All PATs**.
1. Select the PAT you want to revoke.
1. Select **Revoke** and confirm.
1. Notify the token owner to create a replacement PAT if needed.

#### Step 5: Enforce organizational policies

1. Go to **Organization Settings** > **Policies**.
1. Configure:
   - **Restrict full-scoped PAT creation** — Require scoped tokens.
   - **Restrict global PAT creation** — Require org-scoped tokens.
   - **Set maximum PAT lifetime** — Example: no token can exceed 90 days.
1. Document your policy in your security handbook or wiki.

#### Example: Bulk revocation for offboarding

When a user leaves your organization, revoke all their PATs:

1. Go to **Organization Settings** > **Security** > **Personal access tokens** > **All PATs**.
2. Filter by the departing user's name or email.
3. Select all their PATs.
4. Select **Revoke** (bulk action) and confirm.

You immediately revoke all their PATs, so no service can use those credentials.

## FAQs

### Q. Why can't I edit or regenerate a PAT scoped to a single organization?

A. Sign in to the organization where your PAT is scoped. You can view your PATs when you're signed in to any organization in the same Microsoft Entra ID by changing the *Access scope* filter. You can edit only organization-scoped tokens when you're signed in to the specific organization.

### Q. What happens to a PAT if a user account is disabled?

A. When a user’s account is disabled or the user is removed from the organization, their PATs can no longer be used to access organization resources because the user is no longer authorized. PATs aren't automatically deleted or revoked.

If the user’s access is restored or they're added back to the organization, any existing PATs that aren't expired or revoked work again with the permissions available to the user. The user also continues to see these PATs on their personal access tokens page.

### Q. Can I use PATs with all Azure DevOps REST APIs?

A. No. You can use PATs with most Azure DevOps REST APIs, but [organizations and profiles](/rest/api/azure/devops/) and the PAT Management Lifecycle APIs support only [Microsoft Entra tokens](../../integrate/get-started/authentication/entra-oauth.md).

### Q. What happens if I accidentally check my PAT into a public repository on GitHub?

A. Azure DevOps scans for leaked PATs in public GitHub repositories.
When detected, Azure DevOps notifies the token owner and logs the event in your [audit log](../audit/azure-devops-auditing.md#review-audit-log).
Unless disabled, leaked PATs are automatically revoked.
For more information, see [Revoke leaked PATs automatically](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically-tenant-policy).

### Q. Can I use a personal access token as an API key to publish NuGet packages to an Azure Artifacts feed by using the dotnet or nuget.exe command line?

A. No. Azure Artifacts doesn't support passing a PAT as an API key.
When you use a local development environment, install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) to authenticate with Azure Artifacts.
For more information, see the following examples: [dotnet](../../artifacts/nuget/dotnet-exe.md) and [NuGet.exe](../../artifacts/nuget/publish.md).
If you want to publish your packages by using Azure Pipelines, use the [NuGet Authenticate](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) task to authenticate with your feed.
For more information, see the example in [Publish NuGet packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md).

### Q. Why did my PAT stop working?

A. PAT authentication requires you to regularly sign in to Azure DevOps by using the full authentication flow.
Signing in once every 30 days is sufficient for many users, but you might need to sign in more frequently depending on your Microsoft Entra configuration.
If your PAT stops working, first try signing in to your organization and completing the full authentication prompt.
If your PAT still doesn't work, check if it expired.

For Azure DevOps Server, enabling [IIS Basic Authentication](/iis/configuration/system.webserver/security/authentication/basicauthentication) invalidates PAT usage.
Keep IIS Basic Authentication turned off.

### Q. How do I create access tokens that aren't tied to a specific user?

A. PATs are always associated with the user identity that created them.
To use tokens not tied to a specific user, use Microsoft Entra tokens issued by an [application service principal or managed identity](../../integrate/get-started/authentication/service-principal-managed-identity.md).
For pipelines, use [service connections](../../pipelines/library/service-endpoints.md) to authenticate without user-specific credentials.
Learn more about [reducing PAT usage across Azure DevOps](https://devblogs.microsoft.com/devops/reducing-pat-usage-across-azure-devops/).

### Q. How can I regenerate or rotate PATs through the API? I saw that option in the UI, but I don't see a similar method in the API.

A. The **Regenerate** functionality in the UI actually performs several actions, which you can replicate through an API.

To rotate your PAT, follow these steps:

1. Retrieve PAT metadata by using a **GET** call.
1. Create a new PAT by using a **POST** call with the old PAT ID.
1. Revoke the old PAT by using a **DELETE** call.

### Q. How long does an expired, revoked, or inactive PAT remain visible in the Azure DevOps token list?

A. You can't use or regenerate PATs that are expired or revoked.
The display keeps these inactive tokens visible for several months after expiration or revocation before it automatically removes them.

### Q. Why do I see a "Need admin approval" message when I try to use a Microsoft Entra app to call the PAT Lifecycle Management APIs?

A. Your tenant's security policies require admin consent before applications can access organization resources.
Contact your tenant administrator.

<a id="use-ai-assistance"></a>

## Use AI to manage personal access tokens

If you configure the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md), you can use AI assistants to manage and review your personal access tokens by using natural language prompts. The MCP Server provides your AI assistant with secure access to your Azure DevOps data, so you can list tokens, check expiration dates, and review token scopes without navigating through the web interface.

### Example prompts for managing personal access tokens

| Task | Example prompt |
|------|----------------|
| Create a least-privilege token | `Help me create a PAT for <organization-name> that only has read access to work items and code in the <project-name> project, valid for 30 days` |
| Rotate expiring tokens | `Show me all my PATs in <organization-name> expiring in the next 14 days, their scopes, and what I need to update when I regenerate them` |
| Audit my token hygiene | `List all my active PATs in <organization-name>, when each was last used, and flag any that have broader scopes than necessary` |
| Troubleshoot authentication failures | `My PAT stopped working for Git push to <repo-name> in <project-name> - help me check if it expired, has the right scope, or if a policy is blocking it` |
| Find tokens to replace with Entra auth | `Show me which of my PATs in <organization-name> are used for interactive scenarios that could switch to Microsoft Entra authentication instead` |
| Set up a CI/CD service connection | `What's the minimum PAT scope needed for an Azure Pipelines service connection to <organization-name> that runs builds and deploys releases?` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for reviewing and auditing your PATs, including identifying tokens that need rotation or have excessive scopes.
> - To avoid using stale or cached data from previous queries, add to your prompt, `Do not use previously fetched data`.

## Related content

- [Access Azure DevOps with Microsoft Entra workload identity](../../pipelines/library/add-devops-entra-service-connection.md)
- [Revoke user PATs (for admins)](admin-revoke-user-pats.md)
- [Authenticate with Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md)
