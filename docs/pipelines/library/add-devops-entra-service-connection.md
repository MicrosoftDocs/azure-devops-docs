---
title: Access Azure DevOps with Entra workload identity
description: Learn how to create an Azure DevOps service connection using Entra federated credentials to enable PAT-free pipelines.
ms.topic: how-to 
ms.date: 12/12/2025
#customer intent: As an Azure DevOps administrator, I want to create an Azure DevOps service connection using federated credentials so that my pipelines can access Azure DevOps resources without using Personal Access Tokens (PATs).
---

# Access Azure DevOps with Entra workload identity

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

An **Azure DevOps service connection** allows your pipelines to authenticate to Azure DevOps itself using [Entra workload identities](/entra/workload-id/workload-identities-overview). Workload identities such as service principals and managed identities [are used to access Azure DevOps](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity) instead of Personal Access Tokens (PATs). The Azure DevOps service connection uses [workload identity federation](/entra/workload-id/workload-identity-federation) to authenticate pipeline jobs. Workload identity federation is a zero-secret authentication method that eliminates the need to manage and rotate secrets like PATs.

### Benefits

- **PAT-free authentication**: Eliminate the need to create, store, and rotate [Personal Access Tokens](/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate)
- **Least privilege**: Use per-pipeline permissions instead of shared [build service account permissions](/azure/devops/pipelines/process/access-tokens)
- **Improved security**: Use Entra federated credentials with automatic token rotation
- **Cross-organization access**: Access Azure DevOps resources in different organizations using a single service connection
- **Audit trail**: All authentication attempts are logged in Azure DevOps audit logs

## Supported scenarios

Use the Azure DevOps service connection in the following scenarios:

- **Repository resources**: Check out code from repositories in different Azure DevOps organizations
- **Artifact feeds**: Access Artifacts feeds (NuGet, npm, Maven, Python, Cargo, Conda) across organizations without PATs
- **REST API calls**: Authenticate to Azure DevOps REST APIs from inline scripts
- **Extension publishing**: Publish extensions to Visual Studio Marketplace

## Prerequisites

Before you create an Azure DevOps service connection, you need:

- An Azure DevOps organization
- An Entra service principal or managed identity to use for authentication
- Appropriate permissions in both the source and target Azure DevOps organizations (if accessing resources across organizations)
- The service principal must be [added as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) to the target organization

## Create a service connection within the same organization

If your service principal is in the same Azure DevOps organization where you want to create the service connection, follow these steps:

### Step 1: Add the service principal to your organization

1. In your Azure DevOps organization, go to **Organization Settings** > **Users**.

1. Select **Add users**.

1. Enter the service principal details:
   - **Name**: The service principal name or object ID
   - **Access level**: Select the appropriate access level, such as **Contributor**

1. Assign the service principal to the project where you'll create the service connection.

1. Select **Add** to confirm.

### Step 2: Create the service connection

1. In your Azure DevOps project, go to **Project Settings** > **Service connections**.

1. Select **New service connection**.

1. Choose **Azure DevOps** as the service connection type.

1. Complete the form:
   - **Identity**: Select the service principal you added in Step 1
   - **Service connection name**: Enter a descriptive name for the connection (for example, `my-azdo-connection`)
   - **Description** (optional): Add details about the connection's purpose

1. Select **Save** to create the service connection.

## Create a service connection for cross-organization access

To access resources in a different Azure DevOps organization:

1. Follow the same steps as above, but select **Different organization** when creating the service connection.

1. Enter the name of the target Azure DevOps organization.

1. The service principal must also be [added as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) in the target organization.

## Use the service connection in your pipeline

### Checkout repositories from different organizations

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

### Reference template from different organization

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

The AzureCLI@3 task uses the [Azure DevOps CLI](/azure/devops/cli), which is pre-installed on our [Microsoft-hosted agents](/azure/devops/pipelines/agents/hosted). On your self-hosted agents, the [Azure CLI](/cli/azure/install-azure-cli) is required with azure-devops extension. If the azure-devops extension is not installed, the AzureCLI@3 task will install it at run time.  

## Security best practices

- **Minimal permissions**: Assign the service principal only the permissions it needs for your specific pipeline tasks.
- **Audit access**: Regularly review audit logs to monitor service connection usage.
- **Scope usage**: Use separate service connections for different projects or organizations to limit the prevent sharing permissions unnecessarily.

## Troubleshooting

### Service connection creation fails

- Verify that you added the service principal [as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) to your organization.
- Check that you have the appropriate permissions to create service connections.
- Ensure the service principal has the [required access level](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-3-configure-permissions) in the organization.

### Pipeline fails to authenticate

- Verify that the service connection name in your pipeline YAML matches the name you created.
- Confirm that the service principal has appropriate permissions for the resources you're accessing.
- Check Azure DevOps audit logs for authentication failures.
- Refer to [frequently asked questions for service principals and managed identities](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#frequently-asked-questions)
- For Entra AADSTS status codes, review the list of [error messages](/azure/devops/pipelines/release/troubleshoot-workload-identity#error-messages)

### Cross-organization access not working

- Ensure the service principal is added [as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) in both organizations.
- Verify that the target organization name is correctly spelled in the service connection configuration.
- Confirm that the service principal has the required permissions in the target organization.

### Common error messages

| Message | Meaning & mitigation |
|---------|----------------------|
| _ERROR: TF401444: Please sign-in at least once as 72f988bf-86f1-41af-91ab-2d7cd011db47\72f988bf-86f1-41af-91ab-2d7cd011db47\115c3ab3-943b-4e0c-96ed-1a1763fbaa44 in a web browser to enable access to the service._ | Verify that you added the service principal [as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) to your organization. |
| _The Managed Identity / Service Principal `<sp/msi name>` does not have access to Azure DevOps organization `<org>`. Please make sure the identity has been added to the organization. See https://aka.ms/azdosc#prerequisites_  | Verify that you added the service principal [as a user](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity#step-2-add-the-identity-to-azure-devops) to your organization. |
| _You don't have permission to the selected identity. Service connection is saved as draft. To complete the configuration, contact the owner of the identity to create a federated credential in the Azure portal using the Issuer and Subject Identifier below._ | The logged-in user does not have sufficient permissions to create federated credentials. Follow the instructions displayed to create federated credentials directly on the identity. |
| _VS800075: The project with id 'vstfs:///Classification/TeamProject/00000000-0000-00000000-000000000000' does not exist, or you do not have permission to access it._  | The service connection identity is not added to the project. Navigate to service connection details page > 'View access in the current organization' > 'Member of' > Select a group to add the identity to, e.g. the `Readers` group. Alternatively, navigate to Organization Settings > Users > The identity used for the service connection > Manage access > select the project(s) the identity needs to access. |

## Next steps

- [Use service connections in your pipeline](service-endpoints.md)
- [Manage service connections](service-endpoints.md#manage-service-connections)
- [Learn about workload identity federation](/entra/workload-id/workload-identities-overview)

