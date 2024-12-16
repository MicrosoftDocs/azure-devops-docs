---
title: Auditing events available for Azure DevOps
titleSuffix: Azure DevOps 
description: Learn which events are available through Azure DevOps Auditing.  
ms.subservice: azure-devops-audit
ms.assetid: 9F1D0A0F-02D5-4E06-A5EC-C220472A0F66
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '= azure-devops'
ms.date: 11/22/2024
---

# Auditing events list

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

> [!NOTE]
> Auditing is still in public preview.

The following tables describe the type of events (or actions) that are available for auditing through the Azure DevOps Auditing feature.

[!INCLUDE [important-backed-by-azure-active-directory](includes/important-backed-by-azure-active-directory.md)]

* Identify the *Product Area* for any given event. Refer to the full list in the [Area table](#areas).
* Determine the *Category* field of an event to understand the type of action performed. See the list of possible action types in the [Categories table](#categories).
* Find the list of all possible actions grouped by *Product Area* in the [Actions section](#actions).

> [!NOTE]
> We try our best to keep adding new actions regularly. If you'd like to see an event that isn't currently in the following tables, consider sharing that with us in the [Developer Community](https://developercommunity.visualstudio.com/search?space=21). 

## Areas

| Area                       | Description |
|----------------------------|-------------|
| [Artifacts events](#artifacts-events)    | Create, modify permissions, and delete feed views and both organization-scoped and project-scoped feeds. |
| [AuditLog events](#auditlog-events)      | View and download audit logs. Access, create, modify, enable, disable, and delete audit streams. |
| [Billing events](#billing-events)        | Add, change, or remove Azure Subscriptions. Modify billing quantities for Pipelines, Artifacts, and Cloud Load Test usage.  |
| [Extension events](#extension-events)    | Install, modify, enable, disable, and uninstall extensions for Extensions Marketplace.           |
| [Git licensing events](#git-licensing-events)                | Create, modify, enable, disable, fork, delete, and undelete Git repositories in Azure Repos. Bypass PR policies. Change branch policies.   |
| [Group events](#group-events)            | Create groups and modify group memberships.          |
| [Library events](#library-events)        | Create, modify, delete, and track usage of service connections, variable groups, secure files, and agent pools in Azure Pipelines. |
| [Licensing events](#licensing-events)    | Assign, modify, and remove licensing. Create, modify, and delete group licensing rules.           |
| [Organization events](#organization-events)| Create and modify Azure DevOps organization. Link and unlink to Microsoft Entra organizations. |
| [OrganizationPolicy events](#organizationpolicy-events) | Add, modify, or remove organization policies.           |
| [Pipelines events](#pipelines-events)          | Create, modify, delete, and track usage of checks including approvals on protected resources in Azure Pipelines (YAML only). |
| [Policy events](#policy-events)          |  Create, modify, and delete policies for a Git repository in Azure Repos.       |
| [Process events](#process-events)        | Create, modify, and delete attributes for processes (portfolio backlogs, controls, fields, groups, lists, pages, processes, rules, states, control settings, work items, etc.) in Azure Boards.           |
| [Project events](#project-events)        | Create, modify, change visibility of, delete, and restore projects in Azure Boards. Create, modify, and delete Area paths. |
| [Release events](#release-events)        | Create, modify, and delete releases and release pipelines in Azure Pipelines. Track deployments and deployment approvals.      |
| [Security events](#security-events)    | Create, modify, and delete Pipelines in Azure Pipelines. Authorize and unauthorize resource for projects and pipelines. Modify pipeline retention settings. Retain and unretain pipeline runs. |
| [Token events](#token-events)            | Create, modify, revoke, and delete Personal Access Tokens (PATs) or SSH Keys. Track public repository discovery and system revocations of PATs. Token access events aren't currently logged. |

## Categories

|Category   |Description |
|-----------|------------|
|Access     | Viewed or opened artifacts in an organization.        |
|Create     | Newly created artifacts in an organization.        |
|Delete     | Deleted or removed artifacts from an organization.        |
|Execute    | Completed processes done within an organization. |
|Modify     | Changed artifacts, such as a state or property change, made in an organization.        |
|Rename     | Name changes done on artifacts in an organization.        |

## Actions

> [!NOTE]
> Want to find out what actions your organization logs? Be sure to check out the [Audit Log Query API](/rest/api/azure/devops/audit/audit-log/query): `https://auditservice.dev.azure.com/{YOUR_ORGANIZATION}/_apis/audit/actions`, replacing {YOUR_ORGANIZATION} with the name of your organization. This API returns a list of all audit events your organization could emit.

### Artifacts events

|                             Action                                 |                             Description                      |
|--------------------------------------------------------------------|--------------------------------------------------------------|
| `Artifacts.Feed.Project.Create`                                    | Created feed {FeedName} in project {ProjectId}.                                   |
| `Artifacts.Feed.Org.Create`                                        | Created organization feed {FeedName}.                                                                              |
| `Artifacts.Feed.Project.Modify`                                    | Modified feed {FeedName} in project {ProjectId}- {FeedChanges}.                     |
| `Artifacts.Feed.Org.Modify`                                        | Modified organization feed {FeedName}- {FeedChanges}.                        |
| `Artifacts.Feed.Project.SoftDelete`                                | Moved feed {FeedName} to the Feed Recycle Bin in project {ProjectId}.                                  |
| `Artifacts.Feed.Org.SoftDelete`                                    | Moved organization feed {FeedName} to the Feed Recycle Bin.                             |
| `Artifacts.Feed.Project.HardDelete`                                | Permanently deleted feed {FeedName} in project {ProjectId}.                           |
| `Artifacts.Feed.Org.HardDelete`                                    | Permanently deleted organization feed {FeedName}.                      |
| `Artifacts.Feed.Project.Modify.Permissions`                        | Permissions for {DisplayName} were set to {Role} for feed {FeedName} in project {ProjectId}.                       |    
| `Artifacts.Feed.Org.Modify.Permissions`                            | Permissions for {DisplayName} were set to {Role} for organization feed {FeedName}.                  |
| `Artifacts.Feed.Project.Permissions.Deletion`                      | Permissions for feed {FeedName} in project {ProjectId} were removed for {DisplayName}.         |
| `Artifacts.Feed.Org.Permissions.Deletion`                          | Permissions for organization feed {FeedName} were removed for {DisplayName}.    |
| `Artifacts.Feed.Project.FeedView.Create`                           | Created feed view {FeedViewName} in feed {FeedName} in project {ProjectId}.                     |
| `Artifacts.Feed.Org.FeedView.Create`                               | Created feed view {FeedViewName} in organization feed {FeedName}.               |
| `Artifacts.Feed.Project.FeedView.Modify`                           | Modified feed view {FeedViewName} in feed {FeedName} in project {ProjectId}- {FeedViewChanges}.               |
| `Artifacts.Feed.Org.FeedView.Modify`                               | Modified feed view {FeedViewName} in organization feed {FeedName}- {FeedViewChanges}.         |
| `Artifacts.Feed.Project.FeedView.HardDelete`                       | Permanently deleted feed view {FeedViewName} in feed {FeedName} in project {ProjectId}.             |
| `Artifacts.Feed.Org.FeedView.HardDelete`                           | Permanently deleted feed view {FeedViewName} in organization feed {FeedName}.       |

### AuditLog events

| Action | Description |
|--------|-------------|
| `AuditLog.AccessLog` | Accessed the audit log. |
| `AuditLog.DownloadLog` | Downloaded a {Format} copy of the audit log. |
| `AuditLog.StreamCreated` | Stream for {ConsumerType:consumerType} was set up to send auditing events to {displayName}. |
| `AuditLog.StreamDeleted` | Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was deleted. |
| `AuditLog.StreamDisabledBySystem` | Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was disabled by the system. |
| `AuditLog.StreamDisabledByUser` | Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was disabled. |
| `AuditLog.StreamEnabled` | Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was enabled. |
| `AuditLog.StreamModified` | Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was modified. |
| `AuditLog.StreamRead` | Accessed auditing streams. |
| `AuditLog.TestStream` | {ResolveIdentity:ActorId} initiated a {StreamConsumerType} stream connection test from {OrganizationName} in Azure DevOps. |

### Billing events

| Action | Description |
|--------|-------------|
| `Billing.BillingModeUpdate` | User billing configuration changed to '{BillingMode}' for subscription {SubscriptionGuid}. |
| `Billing.LimitUpdate` | {MeterName} usage limit changed from {PreviousLimitNumber} to {LimitNumber}. |
| `Billing.PurchaseUpdate` | {MeterName} quantity changed from {PreviousPurchaseNumber} to {PurchaseNumber}. |
| `Billing.SubscriptionLink` | Billing relationship set up to {NewSubscriptionGuid}. |
| `Billing.SubscriptionUnlink` | Billing relationship removed from {PreviousSubscriptionGuid}. |
| `Billing.SubscriptionUpdate` | Billing relationship changed from {PreviousSubscriptionGuid} to {NewSubscriptionGuid}. |

### Extension events

| Action | Description |
|--------|-------------|
| `Extension.Disabled` | Extension "{ExtensionName}" from publisher "{PublisherName}" was disabled. |
| `Extension.Enabled` | Extension "{ExtensionName}" from publisher "{PublisherName}" was enabled. |
| `Extension.Installed` | Extension "{ExtensionName}" from publisher "{PublisherName}" was installed - Version "{Version}". |
| `Extension.Uninstalled` | Extension "{ExtensionName}" from publisher "{PublisherName}" was uninstalled. |
| `Extension.VersionUpdated` | Extension "{ExtensionName}" from publisher "{PublisherName}" was updated from version "{FromVersion}" to version "{Version}". |

### Git licensing events

| Action | Description |
|--------|-------------|
| `Git.RefUpdatePoliciesBypassed` | Policies on "{FriendlyName}" were bypassed in Git repository "{RepoName}" in project {ResolveProjectId:ProjectId}. |
| `Git.RepositoryCreated` | Created Git repository "{RepoName}" in project {ResolveProjectId:ProjectId}. |
| `Git.RepositoryDefaultBranchChanged` | Default branch of Git repository "{RepoName}" was changed to "{DefaultBranch}" in project {ResolveProjectId:ProjectId}. |
| `Git.RepositoryDeleted` | Git repository "{RepoName}" was deleted from project {ResolveProjectId:ProjectId}. |
| `Git.RepositoryDestroyed` | Git repository "{RepoName}" was destroyed in project {ResolveProjectId:ProjectId}. |
| `Git.RepositoryDisabled` | Git repository "{RepoName}" was disabled in project {ResolveProjectId:ProjectId}. |
| `Git.RepositoryEnabled` | Git repository "{RepoName}" was enabled in project {ResolveProjectId:ProjectId}. |
| `Git.RepositoryForked` | Git repository "{RepoName}" in project {ResolveProjectId:ProjectId} was forked from "{ParentRepoName}" in project "{ParentProjectName}". |
| `Git.RepositoryRenamed` | Git repository "{PreviousRepoName}" was renamed to "{RepoName}" in project {ResolveProjectId:ProjectId}. |
| `Git.RepositoryUndeleted` | Git repository "{RepoName}" was undeleted in project {ResolveProjectId:ProjectId}. |

### Group events

| Action | Description |
|--------|-------------|
| `Group.CreateGroups` | {GroupName} group was created. |
| `Group.UpdateGroupMembership.Add` | {ResolveIdentity:MemberId} was added as a member of group {ResolveIdentity:GroupId}. |
| `Group.UpdateGroupMembership.Remove` | {ResolveIdentity:MemberId} was removed as a member of group {ResolveIdentity:GroupId}. |
| `Group.UpdateGroups.Delete` | {ResolveIdentity:GroupId} group was deleted. |
| `Group.UpdateGroups.Modify` | {ResolveIdentity:GroupId} group information was updated. |

### Library events

| Action | Description |
|--------|-------------|
| `Library.AgentAdded` | Added agent {AgentName} to pool {AgentPoolName}. |
| `Library.AgentDeleted` | Removed agent {AgentName} from pool {AgentPoolName}. |
| `Library.AgentPoolCreated` | Created agent pool {AgentPoolName}. |
| `Library.AgentPoolDeleted` | Deleted agent pool {AgentPoolName}. |
| `Library.AgentsDeleted` | Removed multiple agents from pool {AgentPoolName}. |
| `Library.ServiceConnectionCreated` | Created Service Connection "{ConnectionName}" of type {ConnectionType}. |
| `Library.ServiceConnectionCreatedForMultipleProjects` | Created Service Connection "{ConnectionName}" of type {ConnectionType} for multiple projects. |
| `Library.ServiceConnectionDeleted` | Deleted Service Connection "{ConnectionName}" of type {ConnectionType} from project {ResolveProjectId:ProjectId}. |
| `Library.ServiceConnectionDeletedFromMultipleProjects` | Deleted Service Connection "{ConnectionName}" of type {ConnectionType} from multiple projects. |
| `Library.ServiceConnectionForProjectModified` | Modified Service Connection "{ConnectionName}" in project {ResolveProjectId:ProjectId}. |
| `Library.ServiceConnectionModified` | Modified Service Connection "{ConnectionName}" of type {ConnectionType}. |
| `Library.ServiceConnectionPropertyChanged` | One or more properties of Service Connection "{ConnectionName}" of type {ConnectionType} were changed: IsDisabled = {IsDisabled}. |
| `Library.ServiceConnectionShared` | Shared Service Connection "{ConnectionName}" of type {ConnectionType} with project {ResolveProjectId:ProjectId}. |
| `Library.ServiceConnectionSharedWithMultipleProjects` | Shared Service Connection "{ConnectionName}" of type {ConnectionType} with multiple projects. |
| `Library.VariableGroupCreated` | Created Variable Group "{VariableGroupName}" in project {ResolveProjectId:ProjectId}. |
| `Library.VariableGroupCreatedForProjects` | Created Variable Group "{VariableGroupName}" for multiple projects. |
| `Library.VariableGroupDeleted` | Deleted Variable Group "{VariableGroupName}" in project {ResolveProjectId:ProjectId}. |
| `Library.VariableGroupDeletedFromProjects` | Deleted Variable Group "{VariableGroupName}" from multiple projects. |
| `Library.VariableGroupModified` | Modified Variable Group "{VariableGroupName}" in project {ResolveProjectId:ProjectId}. |
| `Library.VariableGroupModifiedForProjects` | Modified Variable Group "{VariableGroupName}" for multiple projects. |

### Licensing events

| Action | Description |
|--------|-------------|
| `Licensing.Assigned` | {AccessLevel} access level assigned to "{ResolveIdentity:UserIdentifier}" {Optional:Reason}. |
| `Licensing.GroupRuleCreated` | New group rule for the "{ResolveIdentity:GroupIdentifier}" group assigning the {AccessLevel} access level was added to the organization. |
| `Licensing.GroupRuleDeleted` | Group rule for the "{ResolveIdentity:GroupIdentifier}" group assigning the {AccessLevel} access level was removed. |
| `Licensing.GroupRuleModified` | Group rule access level modified from {PreviousAccessLevel} to {AccessLevel} for "{ResolveIdentity:GroupIdentifier}" group. |
| `Licensing.Modified` | Access level modified from {PreviousAccessLevel} to {AccessLevel} for "{ResolveIdentity:UserIdentifier}" {Optional:Reason}. |
| `Licensing.Removed` | {AccessLevel} access level removed from "{ResolveIdentity:UserIdentifier}". |

### Organization events

| Action | Description |
|--------|-------------|
| `Organization.Create` | Organization {OrganizationName} was created in {PreferredRegion} region. |
| `Organization.LinkToAAD` | Organization {OrganizationName} was linked to Microsoft Entra tenant {AADTenant}. |
| `Organization.UnlinkFromAAD` | Organization {OrganizationName} was unlinked from Microsoft Entra tenant. |
| `Organization.Update.Delete` | Organization {OrganizationName} was deleted. |
| `Organization.Update.ForceUpdateOwner` | Organization owner was changed from {OldOwnerName} to {NewOwnerName}. Reason specified by actor "{ForceUpdateReason}". |
| `Organization.Update.Owner` | Organization owner was changed from {OldOwnerName} to {NewOwnerName}. |
| `Organization.Update.Rename` | Organization {OldOrganizationName} was renamed to {NewOrganizationName}. |
| `Organization.Update.Restore` | Organization {OrganizationName} was restored successfully. |

### OrganizationPolicy events

| Action | Description |
|--------|-------------|
| `OrganizationPolicy.EnforcePolicyAdded` | Enforced policy {EnforcePolicyName} was added. |
| `OrganizationPolicy.EnforcePolicyRemoved` | Enforced policy {EnforcePolicyName} was removed. |
| `OrganizationPolicy.PolicyValueUpdated` | Policy {PolicyName} was changed to {PolicyValue}. |

### Pipelines events

| Action | Description |
|--------|-------------|
| `Pipelines.DeploymentJobCompleted` | Deployment for run "{RunName}" on pipeline "{PipelineName}" to environment "{EnvironmentName}" {DeploymentResult}. |
| `Pipelines.PipelineCreated` | Created pipeline "{PipelineName}" in project {ResolveProjectId:ProjectId}. |
| `Pipelines.PipelineDeleted` | Deleted pipeline "{PipelineName}" in project {ResolveProjectId:ProjectId}. |
| `Pipelines.PipelineModified` | Modified pipeline "{PipelineName}" in project {ResolveProjectId:ProjectId}. |
| `Pipelines.PipelineRetentionSettingChanged` | Pipelines retention "{SettingName}" changed from {OldValue} to {NewValue} in {ProjectName} project. |
| `Pipelines.ResourceAuthorizedForPipeline` | Successfully authorized {ResourceType} resource {ResourceId} for pipeline ID {PipelineId}. |
| `Pipelines.ResourceAuthorizedForProject` | Successfully authorized {ResourceType} resource {ResourceId} for the project. |
| `Pipelines.ResourceNotAuthorizedForPipeline` | Didn't authorize {ResourceType} resource {ResourceId} for pipeline ID {PipelineId}. The resource doesn't exist or the user doesn't have permission. |
| `Pipelines.ResourceNotAuthorizedForProject` | Didn't authorize {ResourceType} resource {ResourceId} for the project. The resource doesn't exist or the user doesn't have permission. |
| `Pipelines.ResourceUnauthorizedForPipeline` | Successfully unauthorized {ResourceType} resource {ResourceId} for pipeline ID {PipelineId}. |
| `Pipelines.ResourceUnauthorizedForProject` | Successfully unauthorized {ResourceType} resource {ResourceId} for the project. |
| `Pipelines.RunRetained` | Pipeline run "{RunName}" in project {ResolveProjectId:ProjectId} granted lease ID {RetentionLeaseId} to {RetentionOwnerId}. |
| `Pipelines.RunUnretained` | Pipeline run "{RunName}" in project {ResolveProjectId:ProjectId} no longer retained. |
| `Pipelines.ProjectSettings` | Pipelines setting "{SettingName}" changed from "{OldValue}" to "{NewValue}" in "{ProjectName}" project. |
| `Pipelines.OAuthConfigurationCreated` | Created OAuth configuration '{ConfigName}' for '{SourceType}'. |
| `Pipelines.OAuthConfigurationDeleted` | Updated OAuth configuration '{ConfigName}' for '{SourceType}'. |
| `Pipelines.OAuthConfigurationUpdated` | Deleted OAuth configuration '{ConfigName}' for '{SourceType}'. |
| `Pipelines.OrganizationSettings` | Pipelines setting "{SettingName}" changed from "{OldValue}" to "{NewValue}" at organization level. |

### Policy events

| Action | Description |
|--------|-------------|
| `Policy.PolicyConfigCreated` | Created {PolicyTypeDisplayName} policy in project {ResolveProjectId:ProjectId}. |
| `Policy.PolicyConfigModified` | Modified {PolicyTypeDisplayName} policy in project {ResolveProjectId:ProjectId}. |
| `Policy.PolicyConfigRemoved` | Removed {PolicyTypeDisplayName} policy in project {ResolveProjectId:ProjectId}. |

### Process events

| Action | Description |
|--------|-------------|
| `Process.Behavior.Add` | Work item type "{WorkItemTypeReferenceName}" created and portfolio backlog "{BehaviorName}" created. |
| `Process.Behavior.Create` | Portfolio backlog "{BehaviorName}" created for process "{ProcessName}". |
| `Process.Behavior.Delete` | Portfolio backlog "{BehaviorName}" deleted for process "{ProcessName}". |
| `Process.Behavior.Edit` | Portfolio backlog "{BehaviorName}" edited for process "{ProcessName}". |
| `Process.Behavior.Remove` | Portfolio backlog "{BehaviorReferenceName}" removed from work item type. |
| `Process.Behavior.Update` | Portfolio backlog "{BehaviorName}" changed for {WorkItemTypeReferenceName}. |
| `Process.Control.Create` | Control "{ControlLabel}" created for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.Control.CreateWithoutLabel` | Control created for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.Control.Delete` | A control was deleted for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.Control.Update` | Control "{ControlLabel}" updated for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.Field.Add` | Field "{FieldReferenceName}" created on work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.Field.Create` | Field "{FieldName}" created for process "{ProcessName}". |
| `Process.Field.Delete` | Field "{FieldReferenceName}" deleted. |
| `Process.Field.Edit` | Field "{FieldName}" edited for process "{ProcessName}". |
| `Process.Field.Remove` | Field "{FieldReferenceName}" removed from work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.Field.Update` | Field "{FieldReferenceName}" updated in work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.Group.Add` | New group "{GroupLabel}" added to {WorkItemTypeReferenceName} in process "{ProcessName}". |
| `Process.Group.Update` | Group "{GroupLabel}" updated for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.List.Create` | The picklist "{PicklistName}" was created. |
| `Process.List.Delete` | The picklist "{PicklistName}" was deleted. |
| `Process.List.ListAddValue` | Picklist value {PicklistValue} was added. |
| `Process.List.ListRemoveValue` | Picklist value {PicklistValue} was removed. |
| `Process.List.Update` | The picklist "{PicklistName}" was updated. |
| `Process.Page.Add` | Page "{PageName}" added to work item type "{WorkItemTypeReferenceName}". |
| `Process.Page.Delete` | Page "{PageName}" deleted from work item type "{WorkItemTypeReferenceName}". |
| `Process.Page.Update` | Page "{PageName}" updated for work item type "{WorkItemTypeReferenceName}". |
| `Process.Process.CloneXmlToInherited` | The process "{ParentProcessName}" was cloned to an inherited process called "{TargetProcessName}". |
| `Process.Process.Delete` | Process "{ProcessName}" was set as deleted. |
| `Process.Process.Edit` | Process with the name "{OldProcessName}" was modified, and has the following name {NewProcessInformation}. |
| `Process.Process.EditWithoutNewInformation` | Process with the name "{OldProcessName}" was modified. |
| `Process.Process.Import` | New process "{ProcessName}" was imported. |
| `Process.Process.MigrateXmlToInherited` | Process for project "{ProjectName}" was changed from "{OldProcess}" to "{NewProcess}". |
| `Process.Rule.Add` | Rule "{RuleName}" added to "{WorkItemReferenceName}" for process "{ProcessName}". |
| `Process.Rule.Delete` | Rule "{RuleName}" deleted from "{WorkItemTypeReferenceName}" for process "{ProcessName}". |
| `Process.Rule.Update` | Rule "{RuleName}" updated in "{WorkItemTypeReferenceName}" for process "{ProcessName}". |
| `Process.State.Create` | State "{StateName}" added to "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.State.Delete` | State "{StateName}" deleted from "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.State.Update` | State "{StateName}" updated in "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| `Process.SystemControl.Update` | SystemControl "{ControlId}" updated in "{WorkItemTypeReferenceName}" for process "{ProcessName}". |
| `Process.WorkItemType.Create` | New work item type "{WorkItemTypeName}" created for process "{ProcessName}". |
| `Process.WorkItemType.Delete` | Work item type "{WorkItemTypeReferenceName}" deleted from process "{ProcessName}". |
| `Process.WorkItemType.Update` | Work item type "{WorkItemTypeReferenceName}" updated for process "{ProcessName}". |

### Project events

| Action | Description |
|--------|-------------|
| `Project.AreaPath.Create` | Area path "{Path}" was created. |
| `Project.AreaPath.Delete` | Area path "{Path}" was deleted. |
| `Project.AreaPath.Update` | Area path "{Path}" was updated. |
| `Project.Create` | Project {ProjectName} was created successfully. |
| `Project.CreateCompleted` | Project {ProjectName} was created successfully. |
| `Project.CreateFailed` | Project {ProjectName} failed to be created. |
| `Project.CreateQueued` | Project {ProjectName} creation was started. |
| `Project.DeleteCompleted` | Project {ProjectName} was {ProjectDeleteType} deleted successfully. |
| `Project.DeleteFailed` | Project {ProjectName} failed to be deleted. |
| `Project.DeleteQueued` | Project {ProjectName} deletion was started. |
| `Project.HardDeleteCompleted` | {PreviousProjectName} project was hard deleted successfully. |
| `Project.HardDeleteFailed` | {PreviousProjectName} project failed to be deleted. |
| `Project.HardDeleteQueued` | {PreviousProjectName} project deletion was started. |
| `Project.RestoreCompleted` | Project {ResolveProjectId:ProjectId} was restored successfully. |
| `Project.RestoreQueued` | Project {ResolveProjectId:ProjectId} restore was started. |
| `Project.SoftDeleteCompleted` | {PreviousProjectName} project was soft deleted successfully. |
| `Project.SoftDeleteFailed` | {PreviousProjectName} project failed to be deleted. |
| `Project.SoftDeleteQueued` | {PreviousProjectName} project deletion was started. |
| `Project.UpdateRenameCompleted` | Rename for project {PreviousProjectName} to {ProjectName} was successful. |
| `Project.UpdateRenameQueued` | Rename for project {PreviousProjectName} to {ProjectName} was started. |
| `Project.UpdateVisibilityCompleted` | Project {ResolveProjectId:ProjectId} visibility change from {PreviousProjectVisibility} to {ProjectVisibility} was successful. |
| `Project.UpdateVisibilityQueued` | Project {ResolveProjectId:ProjectId} visibility change from {PreviousProjectVisibility} to {ProjectVisibility} was started. |

### Release events

| Action | Description |
|--------|-------------|
| `Release.ApprovalCompleted` | {ApprovalType} approval for deployment of release "{ReleaseName}" to stage "{StageName}" was {ApprovalResult} in Project {ResolveProjectId:ProjectId}. |
| `Release.ApprovalsCompleted` | Multiple {ApprovalType} approvals for deployment of release "{ReleaseName}" have been {ApprovalResult} in Project {ResolveProjectId:ProjectId}. |
| `Release.DeploymentCompleted` | Deployment of release "{ReleaseName}" on pipeline "{PipelineName}" to "{StageName}" in Project {ResolveProjectId:ProjectId} was {DeploymentResult}. |
| `Release.DeploymentsCompleted` | Deployments of multiple stages of release "{ReleaseName}" on pipeline "{PipelineName}" were {DeploymentResult} in Project {ResolveProjectId:ProjectId}. |
| `Release.ReleaseCreated` | Created release "{ReleaseName}" of Release Pipeline "{PipelineName}" in Project {ResolveProjectId:ProjectId}. |
| `Release.ReleaseDeleted` | Deleted release "{ReleaseName}" of Release Pipeline "{PipelineName}" in Project {ResolveProjectId:ProjectId}. |
| `Release.ReleasePipelineCreated` | Release Pipeline "{PipelineName}" created in Project {ResolveProjectId:ProjectId}. |
| `Release.ReleasePipelineDeleted` | Release Pipeline "{PipelineName}" deleted in Project {ResolveProjectId:ProjectId}. |
| `Release.ReleasePipelineModified` | Release Pipeline "{PipelineName}" modified in Project {ResolveProjectId:ProjectId}. |

### Security events

| Action | Description |
|--------|-------------|
| `Security.ModifyAccessControlLists` | Permission "{NamespaceName}\{ChangedPermission}" was set to {PermissionModifiedTo} for {ResolveIdentity:SubjectDescriptor}. |
| `Security.ModifyPermission` | Permission "{NamespaceName}\{ChangedPermission}" was set to {PermissionModifiedTo} for {ResolveIdentity:SubjectDescriptor}. |
| `Security.RemoveAccessControlLists` | All access control lists were removed on namespace {NamespaceName} on tokens {Tokens}. |
| `Security.RemoveAllAccessControlLists` | {ResolveIdentity:ActorId} removed all Access Control Lists. |
| `Security.RemoveIdentityACEs` | {ResolveIdentity:ActorId} removed an identity ACE. |
| `Security.RemovePermission` | All permissions were removed for {ResolveIdentity:Identities} on namespace {NamespaceName} and token {Token}. |
| `Security.ResetAccessControlLists` | {ResolveIdentity:ActorId} reset an access control list. |
| `Security.ResetPermission` | All permissions for the namespace {NamespaceName} on {ResolveIdentity:SubjectDescriptor} were reset back to default. |

### Token events

| Action | Description |
|--------|-------------|
| `Token.PatCreateEvent` | Personal Access Token "{DisplayName}" was created. |
| `Token.PatExpiredEvent` | Personal Access Token "{DisplayName}" expired. |
| `Token.PatPublicDiscoveryEvent` | Personal Access Token "{DisplayName}" associated with user "{OwnerName}" was discovered in a public repository. |
| `Token.PatRevokeEvent` | Personal Access Token "{DisplayName}" was revoked. |
| `Token.PatSystemRevokeEvent` | Personal Access Token "{DisplayName}" associated with user "{OwnerName}" was revoked by the system. |
| `Token.PatUpdateEvent` | Personal Access Token "{DisplayName}" was updated. |
| `Token.SshCreateEvent` | SSH Key "{DisplayName}" was created. |
| `Token.SshRevokeEvent` | SSH Key "{DisplayName}" was revoked. |
| `Token.SshUpdateEvent` | SSH Key "{DisplayName}" was updated. |

## Related articles
- [Review audit log](azure-devops-auditing.md#review-audit-log)
- [Export audit events](azure-devops-auditing.md#export-audit-events)
- [Set up an audit stream](auditing-streaming.md)
