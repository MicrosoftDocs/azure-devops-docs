---
title: Auditing events available for Azure DevOps
titleSuffix: Azure DevOps 
description: Learn which events are available through Azure DevOps Auditing.  
ms.subservice: azure-devops-audit
ms.assetid: 9F1D0A0F-02D5-4E06-A5EC-C220472A0F66
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '= azure-devops'
ms.date: 08/03/2022
---

# Auditing events list

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

> [!NOTE]
> Auditing is still in public preview.

The following tables describe the type of events (or actions) that are available for auditing through the Azure DevOps Auditing feature.

[!INCLUDE [important-backed-by-azure-active-directory](includes/important-backed-by-azure-active-directory.md)]

* Any given event belongs to a specific *Product Area*. The full list of areas is in the [Area table](#areas).
* An event has a *Category* field that reflects the type of action performed during the event. The list of possible action types is in the [Categories table](#categories).
* The list of all possible actions is grouped by *Product Area* and can be found in the [Actions section](#actions).

> [!NOTE]
> We try our best to keep adding new actions regularly. If you'd like to see an event that isn't currently in the following tables, consider sharing that with us in the [Developer Community](https://developercommunity.visualstudio.com/search?space=21). 

## Areas

| Area                       | Description |
|----------------------------|-------------|
| [Auditing](#auditing)      | View and download audit logs. Access, create, modify, enable, disable, and delete audit streams. |
| [Billing](#billing)        | Add, change, or remove Azure Subscriptions. Modify billing quantities for Pipelines, Artifacts, and Cloud Load Test usage.  |
| [Checks](#checks)          | Create, modify, delete, and track usage of checks including approvals on protected resources in Azure Pipelines (YAML only). |
| [Extension](#extension)    | Install, modify, enable, disable, and uninstall extensions for Extensions Marketplace.           |
| [Git](#git)                | Create, modify, enable, disable, fork, delete and undelete Git repositories in Azure Repos. Bypass PR policies. Change branch policies.   |
| [Group](#group)            | Create groups and modify group memberships.          |
| [Library](#library)        | Create, modify, delete, and track usage of service connections, variable groups, secure files, and agent pools in Azure Pipelines. |
| [Licensing](#licensing)    | Assign, modify, and remove licensing. Create, modify, and delete group licensing rules.           |
| [Organization](#organization)| Create and modify Azure DevOps organization. Link and unlink to Azure Active Directory organizations. |
| [OrganizationPolicy](#organizationpolicy) | Add, modify, or remove organization policies.           |
| [Permissions](#permissions)| Modify or remove permissions and access control lists for users and groups throughout an Azure DevOps organization.           |
| [Pipelines](#pipelines)    | Create, modify, and delete Pipelines in Azure Pipelines. Authorize and unauthorize resource for projects and pipelines. Modify pipeline retention settings. Retain and unretain pipeline runs. |
| [Policy](#policy)          |  Create, modify, and delete policies for a Git repository in Azure Repos.       |
| [Process](#process)        | Create, modify, and delete attributes for processes (portfolio backlogs, controls, fields, groups, lists, pages, processes, rules, states, control settings, work items, etc.) in Azure Boards.           |
| [Project](#project)        | Create, modify, change visibility of, delete, and restore projects in Azure Boards. Create, modify, and delete Area paths. |
| [Release](#release)        | Create, modify, and delete releases and release pipelines in Azure Pipelines. Track deployments and deployment approvals.      |
| [Token](#token)            | Create, modify, revoke, and delete Personal Access Tokens (PATs) or SSH Keys. Track public repository discovery and system revocations of PATs. Token access events aren't currently logged. |

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

### Auditing

| ActionId	| Category |	Details |
|-----------|----------|----------|
|AuditLog.AccessLog |	Access |	Accessed the audit log |
|AuditLog.DownloadLog |	Access |	Downloaded a {Format} copy of the audit log |
|AuditLog.StreamCreated |	Create |	Stream for {ConsumerType:consumerType} was set up to send auditing events to {displayName}. |
|AuditLog.StreamDeleted	| Remove |	Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was deleted. |
|AuditLog.StreamDisabledBySystem	| Modify |	Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was disabled by the system. |
|AuditLog.StreamDisabledByUser	| Modify	| Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was disabled. |
|AuditLog.StreamEnabled |	Modify | Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was enabled. |
|AuditLog.StreamModified | Modify |	Stream for {ConsumerType:consumerType} to send auditing data to {displayName} was modified.|
|AuditLog.StreamRead	| Access	| Accessed auditing streams. |
|AuditLog.TestStream | Create |	{ResolveIdentity:ActorId} initiated a {StreamConsumerType} stream connection test from {OrganizationName} in Azure DevOps.|

### Billing
| ActionId	| Category |	Details |
|-----------|----------|----------|
| Billing.BillingModeUpdate	| Modify |	User billing configuration changed to '{BillingMode}' for subscription {SubscriptionGuid} |
| Billing.LimitUpdate |	Modify |	{MeterName} usage limit changed from {PreviousLimitNumber} to {LimitNumber} |
| Billing.PurchaseUpdate |	Modify  |	{MeterName} quantity changed from {PreviousPurchaseNumber} to {PurchaseNumber}. |
| Billing.SubscriptionLink |	Create |	Billing relationship set up to {NewSubscriptionGuid} |
| Billing.SubscriptionUnlink |	Remove |	Billing relationship removed from {PreviousSubscriptionGuid} |
| Billing.SubscriptionUpdate |	Modify |	Billing relationship changed from {PreviousSubscriptionGuid} to {NewSubscriptionGuid} |

### Checks
| ActionId |	Category |	Details |
|----------|-----------|----------|
| CheckConfiguration.Created |	Create |	{Type} check has been added to {ResourceType} {ResourceName} |
| CheckConfiguration.Deleted |	Remove |	{Type} check has been removed from {ResourceType} {ResourceName} |
| CheckConfiguration.Updated |	Modify |	{Type} check has been updated for {ResourceType} {ResourceName} |
| CheckSuite.Completed |	Execute	| Checks on stage {StageName} of run #{RunName} of pipeline {PipelineName} in Project {ResolveProjectId:ProjectId} have been {CheckSuiteStatus} |

### Extension
| ActionId |	Category |	Details |
|----------|-----------|----------|
| Extension.Disabled	| Modify |	Extension "{ExtensionName}" from publisher "{PublisherName}" was disabled |
| Extension.Enabled |	Modify |	Extension "{ExtensionName}" from publisher "{PublisherName}" was enabled |
| Extension.Installed |	Create |	Extension "{ExtensionName}" from publisher "{PublisherName}" was installed - Version "{Version}" |
| Extension.Uninstalled	| Remove |	Extension "{ExtensionName}" from publisher "{PublisherName}" was uninstalled |
| Extension.VersionUpdated |	Modify |	Extension "{ExtensionName}" from publisher "{PublisherName}" has been updated from version "{FromVersion}" to version "{Version}" |

### Git
| ActionId |	Category |	Details |
|----------|-----------|----------|
| Git.RefUpdatePoliciesBypassed	| Modify |	Policies on "{FriendlyName}" were bypassed in Git repository "{RepoName}" in project {ResolveProjectId:ProjectId} |
| Git.RepositoryCreated	| Create |	Created Git repository "{RepoName}" in project {ResolveProjectId:ProjectId} |
| Git.RepositoryDefaultBranchChanged | Modify |	Default branch of Git repository "{RepoName}" was changed to "{DefaultBranch}" in project {ResolveProjectId:ProjectId} |
| Git.RepositoryDeleted |	Remove |	Git repository "{RepoName}" was deleted from project {ResolveProjectId:ProjectId} |
| Git.RepositoryDestroyed	| Remove |	Git repository "{RepoName}" was destroyed in project {ResolveProjectId:ProjectId} |
| Git.RepositoryDisabled |	Modify |	Git repository "{RepoName}" was disabled in project {ResolveProjectId:ProjectId} |
| Git.RepositoryEnabled |	Modify |	Git repository "{RepoName}" was enabled in project {ResolveProjectId:ProjectId} |
| Git.RepositoryForked |	Create |	Git repository "{RepoName}" in project {ResolveProjectId:ProjectId} was forked from "{ParentRepoName}" in project "{ParentProjectName}" |
| Git.RepositoryRenamed	| Modify |	Git repository "{PreviousRepoName}" was renamed to "{RepoName}" in project {ResolveProjectId:ProjectId} |
| Git.RepositoryUndeleted	| Create |	Git repository "{RepoName}" was undeleted in project {ResolveProjectId:ProjectId} |

### Group
| ActionId |	Category |	Details |
|----------|-----------|----------|
| Group.CreateGroups |	Create |	{GroupName} group was created |
| Group.UpdateGroupMembership |	Modify |  |
| Group.UpdateGroupMembership.Add	| Modify	| {ResolveIdentity:MemberId} was added as a member of group {ResolveIdentity:GroupId} |
| Group.UpdateGroupMembership.Remove |	Modify |	{ResolveIdentity:MemberId} was removed as a member of group {ResolveIdentity:GroupId} |
| Group.UpdateGroups.Delete |	Remove |	{ResolveIdentity:GroupId} group was deleted |
| Group.UpdateGroups.Modify |	Modify |	{ResolveIdentity:GroupId} group information was updated |

### Library
| ActionId |	Category |	Details |
|----------|-----------|----------|
| Library.AgentAdded | Modify |	Added agent {AgentName} to pool {AgentPoolName}. |
| Library.AgentDeleted |	Modify |	Removed agent {AgentName} from pool {AgentPoolName}. |
| Library.AgentPoolCreated | Create |	Created agent pool {AgentPoolName}. |
| Library.AgentPoolDeleted | Remove |	Deleted agent pool {AgentPoolName}. |
| Library.AgentsDeleted	| Modify |	Removed multiple agents from pool {AgentPoolName}. |
| Library.ServiceConnectionCreated |	Create |	Created Service Connection "{ConnectionName}" of type {ConnectionType}. |
| Library.ServiceConnectionDeleted |	Remove |	Deleted Service Connection "{ConnectionName}" of type {ConnectionType} from project {ResolveProjectId:ProjectId}. |
| Library.ServiceConnectionDeletedFromMultipleProjects	| Remove |	Deleted Service Connection "{ConnectionName}" of type {ConnectionType} from multiple Projects. |
| Library.ServiceConnectionExecuted	| Execute |	Service Connection "{ConnectionName}" of type {ConnectionType} executed in project {ResolveProjectId:ProjectId}. |
| Library.ServiceConnectionForProjectModified |	Modify |	Modified Service Connection "{ConnectionName}" in project {ResolveProjectId:ProjectId}. |
| Library.ServiceConnectionModified |	Modify |	Modified Service Connection "{ConnectionName}" of type {ConnectionType}. |
| Library.ServiceConnectionShared |	Modify | Shared Service Connection "{ConnectionName}" of type {ConnectionType} with project {ResolveProjectId:ProjectId}. |
| Library.ServiceConnectionSharedWithMultipleProjects	| Modify |	Shared Service Connection "{ConnectionName}" of type {ConnectionType} with multiple projects. |
| Library.VariableGroupCreated |	Create |	Created Variable Group "{VariableGroupName}" in project {ResolveProjectId:ProjectId}. |
| Library.VariableGroupCreatedForProjects	| Create |	Created Variable Group "{VariableGroupName}" for multiple projects. |
| Library.VariableGroupDeleted |	Remove |	Deleted Variable Group "{VariableGroupName}" in project {ResolveProjectId:ProjectId}. |
| Library.VariableGroupDeletedFromProjects |	Remove |	Deleted Variable Group "{VariableGroupName}" from multiple projects. |
| Library.VariableGroupModified	| Modify |	Modified Variable Group "{VariableGroupName}" in project {ResolveProjectId:ProjectId}. |
| Library.VariableGroupModifiedForProjects |	Modify |	Modified Variable Group "{VariableGroupName}" for multiple projects. |

### Licensing
| ActionId |	Category |	Details |
|----------|-----------|----------|
| Licensing.Assigned	| Create |	{AccessLevel} access level assigned to "{ResolveIdentity:UserIdentifier}" {Optional:Reason} |
| Licensing.GroupRuleCreated |	Create |	New group rule for the "{ResolveIdentity:GroupIdentifier}" group assigning the {AccessLevel} access level was added to the organization|
| Licensing.GroupRuleDeleted |	Remove |	Group rule for the "{ResolveIdentity:GroupIdentifier}" group assigning the {AccessLevel} access level was removed |
| Licensing.GroupRuleModified |	Modify |	Group rule access level modified from for the {PreviousAccessLevel} to {AccessLevel} for "{ResolveIdentity:GroupIdentifier}" group |
| Licensing.Modified |	Modify |	Access level modified from {PreviousAccessLevel} to {AccessLevel} for "{ResolveIdentity:UserIdentifier}" {Optional:Reason} |
| Licensing.Removed |	Remove |	{AccessLevel} access level removed from "{ResolveIdentity:UserIdentifier}" |

### Organization
| ActionId | Category |	Details |
|----------|----------|---------|
| Organization.Create	| Create |	Organization {OrganizationName} was created in {PreferredRegion} region |
| Organization.LinkToAAD |	Modify |	Organization {OrganizationName} was linked to Azure Active Directory tenant {AADTenant} |
| Organization.UnlinkFromAAD |	Modify |	Organization {OrganizationName} was unlinked from Azure Active Directory tenant |
| Organization.Update.Delete |	Modify |	Organization {OrganizationName} was deleted |
| Organization.Update.ForceUpdateOwner |	Modify |	Organization owner was changed from {OldOwnerName} to {NewOwnerName}. Reason specified by actor "{ForceUpdateReason}" |
| Organization.Update.Owner |	Modify |	Organization owner was changed from {OldOwnerName} to {NewOwnerName} |
| Organization.Update.Rename |	Modify |	Organization {OldOrganizationName} was renamed to {NewOrganizationName} |
| Organization.Update.Restore |	Modify |	Organization {OrganizationName} was restored successfully |

### OrganizationPolicy
| ActionId |	Category |	Details |
|----------|-----------|----------|
| OrganizationPolicy.EnforcePolicyAdded	| Create |	Enforced policy {EnforcePolicyName} was added |
| OrganizationPolicy.EnforcePolicyRemoved	| Remove |	Enforced policy {EnforcePolicyName} was removed |
| OrganizationPolicy.PolicyValueUpdated	| Modify |	Policy {PolicyName} was changed to {PolicyValue} |

### Permissions
| ActionId	| Category |	Details |
|-----------|----------|----------|
| Security.ModifyAccessControlLists |	Modify | Permission "{NamespaceName}\{ChangedPermission}" was set to {PermissionModifiedTo} for {ResolveIdentity:SubjectDescriptor} |
| Security.ModifyPermission	| Modify	| Permission "{NamespaceName}\{ChangedPermission}" was set to {PermissionModifiedTo} for {ResolveIdentity:SubjectDescriptor} |
| Security.RemoveAccessControlLists |	Remove |	All access control lists were removed on namespace {NamespaceName} on token(s) {Tokens} |
| Security.RemoveAllAccessControlLists |	Remove |	{ResolveIdentity:ActorId} removed all Access Control Lists |
| Security.RemoveIdentityACEs |	Remove |	{ResolveIdentity:ActorId} removed an identity ACE |
| Security.RemovePermission |	Remove |	All permissions were removed for {ResolveIdentity:Identities} on namespace {NamespaceName} and token {Token} |
| Security.ResetAccessControlLists |	Modify |	{ResolveIdentity:ActorId} reset an access control list |
| Security.ResetPermission |	Modify |	All permissions for the namespace {NamespaceName} on {ResolveIdentity:SubjectDescriptor} were reset back to default |

### Pipelines
| ActionId | Category |	Details |
|----------|----------|---------|
| Pipelines.DeploymentJobCompleted |	Execute |	Deployment for run "{RunName}" on pipeline "{PipelineName}" to environment "{EnvironmentName}" {DeploymentResult} |
| Pipelines.PipelineCreated |	Create |	Created pipeline "{PipelineName}" in project {ResolveProjectId:ProjectId} |
| Pipelines.PipelineDeleted |	Remove |	Deleted pipeline "{PipelineName}" in project {ResolveProjectId:ProjectId} |
| Pipelines.PipelineModified	| Modify |	Modified pipeline "{PipelineName}" in project {ResolveProjectId:ProjectId} |
| Pipelines.PipelineRetentionSettingChanged |	Modify |	Pipelines retention "{SettingName}" changed from {OldValue} to {NewValue} in {ProjectName} project |
| Pipelines.ResourceAuthorizedForPipeline	| Modify |	Successfully authorized {ResourceType} resource {ResourceId} for pipeline id {PipelineId} |
| Pipelines.ResourceAuthorizedForProject	| Modify |	Successfully authorized {ResourceType} resource {ResourceId} for the project |
| Pipelines.ResourceNotAuthorizedForPipeline |	Modify |	Didn't authorize {ResourceType} resource {ResourceId} for pipeline id {PipelineId}. The resource doesn't exist or the user doesn't have permission |
| Pipelines.ResourceNotAuthorizedForProject	| Modify |	Didn't authorize {ResourceType} resource {ResourceId} for the project. The resource doesn't exist or the user doesn't have permission |
| Pipelines.ResourceUnauthorizedForPipeline	| Modify |	Successfully unauthorized {ResourceType} resource {ResourceId} for pipeline id {PipelineId} |
| Pipelines.ResourceUnauthorizedForProject	| Modify |	Successfully unauthorized {ResourceType} resource {ResourceId} for the project |
| Pipelines.RunRetained	| Modify |	Pipeline run "{RunName}" in project {ResolveProjectId:ProjectId} granted lease id {RetentionLeaseId} to {RetentionOwnerId} |
| Pipelines.RunUnretained	 | Modify |	Pipeline run "{RunName}" in project {ResolveProjectId:ProjectId} no longer retained |
| Pipelines.ProjectSettings |	Modify |	Pipelines setting "{SettingName}" changed from "{OldValue}" to "{NewValue}" in "{ProjectName}" project. |
| Pipelines.OrganizationSettings |	Modify |	Pipelines setting "{SettingName}" changed from "{OldValue}" to "{NewValue}" at organization level. |

### Policy
| ActionId	| Category |	Details |
|-----------|----------|----------|
| Policy.PolicyConfigCreated	| Create |	Created {PolicyTypeDisplayName} policy in project {ResolveProjectId:ProjectId} |
| Policy.PolicyConfigModified	 | Modify	| Modified {PolicyTypeDisplayName} policy in project {ResolveProjectId:ProjectId} |
| Policy.PolicyConfigRemoved	| Remove |	Removed {PolicyTypeDisplayName} policy in project {ResolveProjectId:ProjectId} |

### Process
| ActionId |	Category |	Details |
|----------|-----------|----------|
| Process.Behavior.Add |	Create |	Work item type "{WorkItemTypeReferenceName}" created and portfolio backlog "{BehaviorName}" created. |
| Process.Behavior.Create	| Create |	Portfolio backlog "{BehaviorName}" created for process "{ProcessName}". |
| Process.Behavior.Delete	| Remove |	Portfolio backlog "{BehaviorName}" deleted for process "{ProcessName}". |
| Process.Behavior.Edit	| Modify | Portfolio backlog "{BehaviorName}" edited for process "{ProcessName}". |
| Process.Behavior.Remove |	Remove |	Portfolio backlog "{BehaviorReferenceName}" removed from work item type. |
| Process.Behavior.Update	| Modify	| Portfolio backlog "{BehaviorName}" changed for {WorkItemTypeReferenceName}. |
| Process.Control.Create |	Create	| Control "{ControlLabel}" created for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.Control.CreateWithoutLabel |	Create |	Control created for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.Control.Delete	| Remove |	A control was deleted for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.Control.Update	| Modify |	Control "{ControlLabel}" updated for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.Control.UpdateWithoutLabel	| Modify |	Control updated for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.Field.Add |	Create |	Field "{FieldReferenceName}" created on work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.Field.Create |	Create |	Field "{FieldName}" created for process "{ProcessName}". |
| Process.Field.Delete |	Remove |	Field "{FieldReferenceName}" deleted. |
| Process.Field.Edit |	Modify |	Field "{FieldName}" edited for process "{ProcessName}". |
| Process.Field.Remove |	Remove |	Field "{FieldReferenceName}" removed from work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.Field.Update |	Modify |	Field "{FieldReferenceName}" updated in work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.Group.Add	| Create |	New group "{GroupLabel}" added to {WorkItemTypeReferenceName} in process "{ProcessName}". |
| Process.Group.Update |	Modify |	Group "{GroupLabel}" updated for work item type "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.List.Create	| Modify |	The picklist "{PicklistName}" was created. |
| Process.List.Delete	| Remove |	The picklist "{PicklistName}" was deleted. |
| Process.List.ListAddValue |	Modify |	Picklist value {PicklistValue} was added. |
| Process.List.ListRemoveValue| Remove |	Picklist value {PicklistValue} was removed. |
| Process.List.Update	| Modify |	The picklist "{PicklistName}" was updated. |
| Process.Page.Add	| Create |	Page "{PageName}" added to work item type "{WorkItemTypeReferenceName}". |
| Process.Page.Delete	| Remove |	Page "{PageName}" deleted from work item type "{WorkItemTypeReferenceName}". |
| Process.Page.Update	| Modify |	Page "{PageName}" updated for work item type "{WorkItemTypeReferenceName}". |
| Process.Process.CloneXmlToInherited |	Create |	The process "{ParentProcessName}" has been cloned to an inherited process called "{TargetProcessName}". |
| Process.Process.Create |	Create |	Created inherited process "{ProcessName}". |
| Process.Process.Delete |	Remove |	Process "{ProcessName}" has been set as deleted. |
| Process.Process.Edit |	Modify |	Process with the name "{OldProcessName}" has been modified, and has the following name {NewProcessInformation}. |
| Process.Process.EditWithoutNewInformation |	Modify |	Process with the name "{OldProcessName}" has been modified. |
| Process.Process.Import |	Create |	New process "{ProcessName}" has been imported. |
| Process.Process.MigrateXmlToInherited |	Modify |	Process for project "{ProjectName}" was changed from "{OldProcess}" to "{NewProcess}". |
| Process.Rule.Add |	Create |	Rule "{RuleName}" added to "{WorkItemReferenceName}" for process "{ProcessName}". |
| Process.Rule.Delete |	Remove |	Rule "{RuleName}" deleted from "{WorkItemTypeReferenceName}" for process "{ProcessName}". |
| Process.Rule.Update |	Modify |	Rule "{RuleName}" updated in "{WorkItemTypeReferenceName}" for process "{ProcessName}". |
| Process.State.Create |	Create |	State "{StateName}" added to "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.State.Delete |	Remove |	State "{StateName}" deleted from "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.State.Update |	Modify |	State "{StateName}" updated in "{WorkItemTypeReferenceName}" in process "{ProcessName}". |
| Process.SystemControl.Delete |	Remove |	SystemControl "{ControlId}" deleted in "{WorkItemTypeReferenceName}" for process "{ProcessName}". |
| Process.SystemControl.Update |	Modify |	SystemControl "{ControlId}" updated in "{WorkItemTypeReferenceName}" for process "{ProcessName}". |
| Process.WorkItemType.Create |	Create |	New work item type "{WorkItemTypeName}" created for process "{ProcessName}". |
| Process.WorkItemType.Delete |	Remove |	Work item type "{WorkItemTypeReferenceName}" deleted from process "{ProcessName}". |
| Process.WorkItemType.Update |	Modify |	Work item type "{WorkItemTypeReferenceName}" updated for process "{ProcessName}". |

### Project
| ActionId |	Category |	Details |
|----------|-----------|----------|
| Project.AreaPath.Create	| Create |	Area path "{Path}" has been created. |
| Project.AreaPath.Delete |	Remove |	Area path "{Path}" has been deleted. |
| Project.AreaPath.Update |	Modify |	Area path "{Path}" has been updated. |
| Project.Create |	Create |	Project {ProjectName} was created successfully |
| Project.CreateCompleted |	Create |	Project {ProjectName} was created successfully |
| Project.CreateFailed |	Create |	Project {ProjectName} failed to be created |
| Project.CreateQueued |	Create |	Project {ProjectName} creation was started |
| Project.DeleteCompleted	| Remove |	Project {ProjectName} was {ProjectDeleteType} deleted successfully |
| Project.DeleteFailed |	Remove |	Project {ProjectName} failed to be deleted |
| Project.DeleteQueued |	Remove |	Project {ProjectName} deletion was started |
| Project.HardDeleteCompleted |	Remove |	{PreviousProjectName} project was hard deleted successfully |
| Project.HardDeleteFailed |	Remove |	{PreviousProjectName} project failed to be deleted |
| Project.HardDeleteQueued |	Remove |	{PreviousProjectName} project deletion was started |
| Project.RestoreCompleted |	Modify |	Project {ResolveProjectId:ProjectId} was restored successfully |
| Project.RestoreQueued |	Modify |	Project {ResolveProjectId:ProjectId} restore was started |
| Project.SoftDeleteCompleted |	Remove |	{PreviousProjectName} project was soft deleted successfully |
| Project.SoftDeleteFailed |	Remove |	{PreviousProjectName} project failed to be deleted |
| Project.SoftDeleteQueued |	Remove |	{PreviousProjectName} project deletion was started |
| Project.UpdateRenameCompleted |	Modify |	Rename for project {PreviousProjectName} to {ProjectName} was successful |
| Project.UpdateRenameQueued |	Modify |	Rename for project {PreviousProjectName} to {ProjectName} was started |
| Project.UpdateVisibilityCompleted |	Modify |	Project {ResolveProjectId:ProjectId} visibility change from {PreviousProjectVisibility} to {ProjectVisibility} was successful |
| Project.UpdateVisibilityQueued |	Modify |	Project {ResolveProjectId:ProjectId} visibility change from {PreviousProjectVisibility} to {ProjectVisibility} was started |

### Release
| ActionId |	Category |	Details |
|----------|-----------|----------|
| Release.ApprovalCompleted |	Modify |	{ApprovalType} approval for deployment of release "{ReleaseName}" to stage "{StageName}" has been {ApprovalResult} in Project {ResolveProjectId:ProjectId} |
| Release.ApprovalsCompleted |	Modify	| Multiple {ApprovalType} approvals for deployment of release "{ReleaseName}" have been {ApprovalResult} in Project {ResolveProjectId:ProjectId}|
| Release.DeploymentCompleted	| Execute	| Deployment of release "{ReleaseName}" on pipeline "{PipelineName}" to "{StageName}" in Project {ResolveProjectId:ProjectId} was {DeploymentResult}|
| Release.DeploymentsCompleted	| Execute	| Deployments of multiple stages of release "{ReleaseName}" on pipeline "{PipelineName}" were {DeploymentResult} in Project {ResolveProjectId:ProjectId}|
| Release.ReleaseCreated	| Create	| Created release "{releaseName}" of Release Pipeline "{PipelineName}" in Project {ResolveProjectId:ProjectId}|
| Release.ReleaseDeleted	| Remove	| Deleted release "{ReleaseName}" of Release Pipeline "{PipelineName}" in Project {ResolveProjectId:ProjectId}|
| Release.ReleasePipelineCreated	| Create	| Release Pipeline "{PipelineName}" created in Project {ResolveProjectId:ProjectId}|
| Release.ReleasePipelineDeleted	| Remove	| Release Pipeline "{PipelineName}" deleted in Project {ResolveProjectId:ProjectId}|
| Release.ReleasePipelineModified	| Modify	| Release Pipeline "{PipelineName}" modified in Project {ResolveProjectId:ProjectId}|

### Token
| ActionId |	Category |	Details |
|----------|-----------|----------|
| Token.PatCreateEvent	| Create | Personal Access Token "{DisplayName}" was created. |
| Token.PatExpiredEvent	| Modify | Personal Access Token "{DisplayName}" expired. |
| Token.PatPublicDiscoveryEvent | Access Personal Access Token "{DisplayName}" associated with user "{OwnerName}" was discovered in a public repository. |
| Token.PatRevokeEvent	| Remove	| Personal Access Token "{DisplayName}" was revoked. |
| Token.PatSystemRevokeEvent	| Remove |	Personal Access Token "{DisplayName}" associated with user "{OwnerName}" was revoked by the system. |
| Token.PatUpdateEvent	| Modify	| Personal Access Token "{DisplayName}" was updated. |
| Token.SshCreateEvent	| Create	| SSH Key "{DisplayName}" was created. |
| Token.SshRevokeEvent	| Remove	| SSH Key "{DisplayName}" was revoked. |
| Token.SshUpdateEvent	| Modify	| SSH Key "{DisplayName}" was updated. |


## Related articles
- [Review audit log](azure-devops-auditing.md#review-audit-log)
- [Export audit events](azure-devops-auditing.md#export-auditing-events)
- [Set up an audit stream](auditing-streaming.md)
