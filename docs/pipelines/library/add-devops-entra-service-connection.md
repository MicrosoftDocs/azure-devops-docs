---
title: Access Azure DevOps with Microsoft Entra workload identity
description: Learn how to create an Azure DevOps service connection using Microsoft Entra federated credentials to enable PAT-free pipelines.
ms.topic: how-to 
ms.date: 03/23/2026
#customer intent: As an Azure DevOps administrator, I want to create an Azure DevOps service connection using federated credentials so that my pipelines can access Azure DevOps resources without using Personal Access Tokens (PATs).
---

# Access Azure DevOps with Microsoft Entra workload identity


[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

An **Azure DevOps service connection** lets your pipelines authenticate to Azure DevOps without Personal Access Tokens (PATs) by using [Microsoft Entra workload identities](/entra/workload-id/workload-identities-overview). Service principals and managed identities [access Azure DevOps](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity) through [workload identity federation](/entra/workload-id/workload-identity-federation), a zero-secret method that eliminates the need to manage and rotate secrets.

## Benefits

- **PAT-free authentication**: Eliminate the need to create, store, and rotate [Personal Access Tokens](/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate).
- **Least privilege**: Use per-pipeline permissions instead of shared [build service account permissions](/azure/devops/pipelines/process/access-tokens).
- **Improved security**: Use Entra federated credentials with automatic token rotation.
- **Cross-organization access**: Access Azure DevOps resources in different organizations by using a single service connection.
- **Audit trail**: All authentication attempts are logged in Azure DevOps audit logs.

## Supported scenarios

The Azure DevOps service connection supports these scenarios:

- **Repository resources**: Check out code from repositories in different Azure DevOps organizations.
- **Artifact feeds**: Access Azure Artifacts feeds (NuGet, npm, Maven, Python, Cargo, Conda) across organizations without PATs.
- **REST API calls**: Authenticate to Azure DevOps REST APIs from inline scripts.
- **Extension publishing**: Publish extensions to Visual Studio Marketplace.

## Prerequisites

To create an Azure DevOps service connection, you need:

- An Azure DevOps organization
- An [Entra service principal or managed identity](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity) to use for authentication, added to the organization and assigned a **Basic** license at minimum.
- An [Entra service principal or managed identity](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity) used for authentication should have required permission to the project(s) it will access resources in i.e. added to the **Readers** group or granted access to specific resources
- **Creator** or **Administrator** role for service connections in the Azure DevOps project where you create the service connection. By default, members of the **Endpoint Creators** group have the Creator role. For more information, see [Set service connection security](/azure/devops/pipelines/policies/permissions#set-service-connection-security-in-azure-pipelines).
- If accessing resources across organizations, the service principal must be [added as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) to each target organization

## Step 1: Create a service connection within the same organization

If your service principal is in the same Azure DevOps organization as the service connection:

### Add the service principal to your organization

1. In your Azure DevOps organization, go to **Organization Settings** > **Users**.

1. Select **Add users**.

1. Enter the service principal details:
   - **Name**: The service principal name or object ID
   - **Access level**: Select the appropriate access level. Use **Basic** for standard access, or **Early Adopter** if you need access to preview features.

1. Assign the service principal to the project where you'll create the service connection.

1. Select **Add** to confirm.

## Step 2: Create the service connection

1. In your Azure DevOps project, go to **Project Settings** > **Service connections**.

1. Select **New service connection**.

1. Select **Azure DevOps** as the service connection type.

1. Complete the form:
   - **Identity**: Select the service principal you added to your organization
   - **Service connection name**: Enter a descriptive name for the connection (for example, `my-azdo-connection`)
   - **Description** (optional): Add details about the connection's purpose

1. Select **Save** to create the service connection.

### Create a service connection for cross-organization access

To access resources in a different Azure DevOps organization joined to the same Entra ID tenant:

1. Follow the steps in [Create a service connection within the same organization](#step-1-create-a-service-connection-within-the-same-organization), but select **Different organization** when creating the service connection.

1. Enter the name of the target Azure DevOps organization.

1. You must also [add the service principal as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) in the target organization.

## Use the service connection in your pipeline

### Check out repositories from different organizations

```yaml
pool:
  vmImage: 'ubuntu-latest'

resources:
  repositories:
  - repository: external-repo
    type: git
    endpoint: my-azdo-connection
    name: 'external-org/external-project/external-repo'
    ref: 'refs/heads/main'

steps:
- checkout: self
- checkout: external-repo
```

### Reference a template from a different organization

```yaml
resources:
  repositories:
    - repository: templates 
      type: git
      endpoint: my-azdo-connection
      name: 'external-org/external-project/external-repo'
      ref: "refs/heads/main"    
      
steps:
- template: azdosc-template.yml@templates
```

### Access artifact feeds

Use the service connection with artifact authentication tasks:

```yaml
- task: NuGetAuthenticate@1
  inputs:
    nuGetServiceConnections: 'my-azdo-connection'

- task: DotNetCoreCLI@2
  inputs:
    command: 'restore'
    projects: '**/*.csproj'
```

### Call Azure DevOps from script

```yaml
- task: AzureCLI@3
  displayName: Secret-less
  inputs:
    connectionType: 'azureDevOps'
    azureDevOpsServiceConnection: 'my-azdo-connection'
    scriptType: 'pscore'
    scriptLocation: 'inlineScript'
    inlineScript: |
      az rest --method get `
              --url "https://status.dev.azure.com/_apis/status/health?api-version=7.1-preview.1" `
              --resource 499b84ac-1321-427f-aa17-267ca6975798 `
              --query "sort_by(services[?id=='Pipelines'].geographies | [], &name)" `
              -o table

      az devops configure -l

      az devops project list --query "value[].{Name:name, Id:id}" `
                            -o table

      az pipelines pool list --query "[].{Id:id, Name:name}" `
                            -o table

- task: AzureCLI@3
  displayName: Use Entra access token
  inputs:
    connectionType: 'azureDevOps'
    azureDevOpsServiceConnection: 'my-azdo-connection'
    scriptType: 'pscore'
    scriptLocation: 'inlineScript'
    inlineScript: |
      # Get access token for Azure DevOps
      $token = az account get-access-token --resource "499b84ac-1321-427f-aa17-267ca6975798" `
                                           --query "accessToken" `
                                           --output tsv
      
      # Use token in REST API call
      $headers = @{
        Authorization = "Bearer $token"
        "Content-Type" = "application/json"
      }
      
      $body = @{
        name = "Test Build"
      } | ConvertTo-Json
      
      Invoke-RestMethod -Uri "$(System.CollectionUri)_apis/build/definitions?api-version=7.1" `
                        -Method POST `
                        -Headers $headers `
                        -Body $body
```

The AzureCLI@3 task uses the [Azure DevOps CLI](/azure/devops/cli), which is preinstalled on [Microsoft-hosted agents](/azure/devops/pipelines/agents/hosted). On self-hosted agents, you need the [Azure CLI](/cli/azure/install-azure-cli) with the `azure-devops` extension. If the `azure-devops` extension isn't installed, the AzureCLI@3 task installs it at run time.  

## Security best practices

- **Minimal permissions**: Assign the service principal only the permissions it needs for your specific pipeline tasks.
- **Audit access**: Regularly review audit logs to monitor service connection usage.
- **Scope usage**: Use separate service connections for different projects or organizations to limit shared permissions.

## Troubleshooting

> [!TIP]
> For better security, assign the service principal only the permissions it needs, review audit logs regularly, and use separate service connections for different projects or organizations.

### Service connection creation fails

**Cause:** The service principal isn't added to your organization, or you lack the required permissions.

**Fix:**

- Check that you added the service principal [as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) to your organization.
- Check that you have the appropriate permissions to create service connections.
- Make sure the service principal has the [required access level](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-3-configure-permissions) in the organization.

### Pipeline fails to authenticate

**Cause:** The service connection name doesn't match the YAML reference, or the service principal lacks permissions for the target resources.

**Fix:**

- Check that the service connection name in your pipeline YAML matches the name you created.
- Check that the service principal has appropriate permissions for the resources you're accessing.
- Check Azure DevOps audit logs for authentication failures.
- Refer to [frequently asked questions for service principals and managed identities](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#frequently-asked-questions).
- For Microsoft Entra AADSTS status codes, review the list of [error messages](/azure/devops/pipelines/release/troubleshoot-workload-identity#error-messages).

### Cross-organization access not working

**Cause:** You didn't add the service principal as a user in both organizations, or you misspelled the target organization name.

**Fix:**

- Add the service principal [as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) in both organizations.
- Check that the target organization name is spelled correctly in the service connection configuration.
- Check that the service principal has the required permissions in the target organization.

### Common error messages

| Message | Meaning & mitigation |
|---------|----------------------|
| _ERROR: TF401444: Please sign-in at least once as 72f988bf-86f1-41af-91ab-2d7cd011db47\72f988bf-86f1-41af-91ab-2d7cd011db47\115c3ab3-943b-4e0c-96ed-1a1763fbaa44 in a web browser to enable access to the service._ | Check that you added the service principal [as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) to your organization. |
| _The Managed Identity / Service Principal `<sp/msi name>` does not have access to Azure DevOps organization `<org>`. Please make sure the identity has been added to the organization. See https://aka.ms/azdosc#prerequisites_  | Add the service principal [as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) to the target organization and assign it to the required project. |
| _You don't have permission to the selected identity. Service connection is saved as draft. To complete the configuration, contact the owner of the identity to create a federated credential in the Azure portal using the Issuer and Subject Identifier below._ | The signed-in user doesn't have sufficient permissions to create federated credentials. Follow the instructions displayed to create federated credentials directly on the identity. |
| _VS800075: The project with id 'vstfs:///Classification/TeamProject/00000000-0000-00000000-000000000000' does not exist, or you do not have permission to access it._  | The service connection identity isn't added to the project. Go to service connection details page > **View access in the current organization** > **Member of** > Select a group to add the identity to, for example, the `Readers` group. Alternatively, go to **Organization Settings** > **Users** > The identity used for the service connection > **Manage access** > select the projects the identity needs to access. |
| _AADSTS70052: The identity must be a managed identity, a single tenant app, or a service account_ | Multitenant app registrations that have `signInAudience: AzureADMultipleOrgs` are not supported the Azure DevOps service connection. |

For more error messages see [](/azure/devops/pipelines/release/troubleshoot-workload-identity)

## Next steps

- [Use service connections in your pipeline](service-endpoints.md).
- [Manage service connections](service-endpoints.md#manage-service-connections).
- [Learn about workload identity federation](/entra/workload-id/workload-identities-overview).

