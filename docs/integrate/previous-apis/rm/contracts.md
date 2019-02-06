---
title: Release API Contracts | VSTS
ms.assetid: 9889e558-78df-e571-6884-75fdfd014546
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
generated: true
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 06-01-2017
---

# Release API Contracts

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]



<a id="AgentArtifactDefinition"></a>

## AgentArtifactDefinition

| Field        | Type
| :----------- | :--------
| <code>alias</code> | string
| <code>artifactType</code> | [AgentArtifactType](#AgentArtifactType)
| <code>details</code> | string
| <code>name</code> | string
| <code>version</code> | string



<a id="AgentArtifactType"></a>

## AgentArtifactType

| Enum Value   | Notes
| :----------- | :----------
| xamlBuild |
| build |
| jenkins |
| fileShare |
| nuget |
| tfsOnPrem |
| gitHub |
| tFGit |
| externalTfsBuild |
| custom |
| tfvc |



<a id="AgentBasedDeployPhase"></a>

## AgentBasedDeployPhase

Extends: [DeployPhase](#DeployPhase)

| Field        | Type
| :----------- | :--------
| <code>deploymentInput</code> | [AgentDeploymentInput](#AgentDeploymentInput)



<a id="AgentDeploymentInput"></a>

## AgentDeploymentInput

Extends: [DeploymentInput](#DeploymentInput)

| Field        | Type
| :----------- | :--------
| <code>imageId</code> | int32
| <code>parallelExecution</code> | [ExecutionInput](#ExecutionInput)



<a id="ApprovalOptions"></a>

## ApprovalOptions

| Field        | Type
| :----------- | :--------
| <code>autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped</code> | boolean
| <code>enforceIdentityRevalidation</code> | boolean
| <code>releaseCreatorCanBeApprover</code> | boolean
| <code>requiredApproverCount</code> | int32
| <code>timeoutInMinutes</code> | int32



<a id="ApprovalStatus"></a>

## ApprovalStatus

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| pending |
| approved |
| rejected |
| reassigned |
| canceled |
| skipped |



<a id="ApprovalType"></a>

## ApprovalType

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| preDeploy |
| postDeploy |
| all |



<a id="Artifact"></a>

## Artifact

| Field        | Type
| :----------- | :--------
| <code>alias</code> | string
| <code>definitionReference</code> | dictionary (string, [ArtifactSourceReference](#ArtifactSourceReference))
| <code>isPrimary</code> | boolean
| <code>sourceId</code> | string
| <code>type</code> | string



<a id="ArtifactContributionDefinition"></a>

## ArtifactContributionDefinition

| Field        | Type
| :----------- | :--------
| <code>artifactType</code> | string
| <code>artifactTypeStreamMapping</code> | dictionary (string, string)
| <code>browsableArtifactTypeMapping</code> | dictionary (string, string)
| <code>dataSourceBindings</code> | array ([DataSourceBinding](#DataSourceBinding))
| <code>displayName</code> | string
| <code>downloadTaskId</code> | string
| <code>endpointTypeId</code> | string
| <code>inputDescriptors</code> | array ([InputDescriptor](#InputDescriptor))
| <code>name</code> | string
| <code>uniqueSourceIdentifier</code> | string



<a id="ArtifactFilter"></a>

## ArtifactFilter

| Field        | Type
| :----------- | :--------
| <code>sourceBranch</code> | string
| <code>tags</code> | array (string)



<a id="ArtifactInstanceData"></a>

## ArtifactInstanceData

| Field        | Type
| :----------- | :--------
| <code>accountName</code> | string
| <code>authenticationToken</code> | string
| <code>tfsUrl</code> | string
| <code>version</code> | string



<a id="ArtifactMetadata"></a>

## ArtifactMetadata

| Field        | Type
| :----------- | :--------
| <code>alias</code> | string
| <code>instanceReference</code> | [BuildVersion](#BuildVersion)



<a id="ArtifactProvider"></a>

## ArtifactProvider

| Field        | Type
| :----------- | :--------
| <code>id</code> | int32
| <code>name</code> | string
| <code>sourceUri</code> | string
| <code>version</code> | string



<a id="ArtifactSourceId"></a>

## ArtifactSourceId

| Field        | Type
| :----------- | :--------
| <code>artifactTypeId</code> | string
| <code>sourceIdInputs</code> | array ([SourceIdInput](#SourceIdInput))



<a id="ArtifactSourceIdsQueryResult"></a>

## ArtifactSourceIdsQueryResult

| Field        | Type
| :----------- | :--------
| <code>artifactSourceIds</code> | array ([ArtifactSourceId](#ArtifactSourceId))



<a id="ArtifactSourceReference"></a>

## ArtifactSourceReference

| Field        | Type
| :----------- | :--------
| <code>id</code> | string
| <code>name</code> | string



<a id="ArtifactSourceTrigger"></a>

## ArtifactSourceTrigger

Extends: [ReleaseTriggerBase](#ReleaseTriggerBase)

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>artifactAlias</code> | string | Artifact source alias for Artifact Source trigger type
| <code>triggerConditions</code> | array ([ArtifactFilter](#ArtifactFilter)) |



<a id="ArtifactTypeDefinition"></a>

## ArtifactTypeDefinition

| Field        | Type
| :----------- | :--------
| <code>displayName</code> | string
| <code>inputDescriptors</code> | array ([InputDescriptor](#InputDescriptor))
| <code>name</code> | string
| <code>uniqueSourceIdentifier</code> | string



<a id="ArtifactVersion"></a>

## ArtifactVersion

| Field        | Type
| :----------- | :--------
| <code>alias</code> | string
| <code>defaultVersion</code> | [BuildVersion](#BuildVersion)
| <code>errorMessage</code> | string
| <code>sourceId</code> | string
| <code>versions</code> | array ([BuildVersion](#BuildVersion))



<a id="ArtifactVersionQueryResult"></a>

## ArtifactVersionQueryResult

| Field        | Type
| :----------- | :--------
| <code>artifactVersions</code> | array ([ArtifactVersion](#ArtifactVersion))



<a id="AuditAction"></a>

## AuditAction

| Enum Value   | Notes
| :----------- | :----------
| add |
| update |
| delete |



<a id="AuthorizationHeaderFor"></a>

## AuthorizationHeaderFor

| Enum Value   | Notes
| :----------- | :----------
| revalidateApproverIdentity |
| onBehalfOf |



<a id="AutoTriggerIssue"></a>

## AutoTriggerIssue

| Field        | Type
| :----------- | :--------
| <code>issue</code> | [Issue](#Issue)
| <code>issueSource</code> | [IssueSource](#IssueSource)
| <code>project</code> | [ProjectReference](#ProjectReference)
| <code>releaseDefinitionReference</code> | [ReleaseDefinitionShallowReference](#ReleaseDefinitionShallowReference)
| <code>releaseTriggerType</code> | [ReleaseTriggerType](#ReleaseTriggerType)



<a id="AzureKeyVaultVariableGroupProviderData"></a>

## AzureKeyVaultVariableGroupProviderData

Extends: [VariableGroupProviderData](#VariableGroupProviderData)

| Field        | Type
| :----------- | :--------
| <code>lastRefreshedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>serviceEndpointId</code> | GUID
| <code>vault</code> | string



<a id="AzureKeyVaultVariableValue"></a>

## AzureKeyVaultVariableValue

Extends: [VariableValue](#VariableValue)

| Field        | Type
| :----------- | :--------
| <code>contentType</code> | string
| <code>enabled</code> | boolean
| <code>expires</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)



<a id="BaseDeploymentInput"></a>

## BaseDeploymentInput

| Field        | Type
| :----------- | :--------
| <code>overrideInputs</code> | dictionary (string, string)
| <code>shareOutputVariables</code> | boolean



<a id="BuildVersion"></a>

## BuildVersion

| Field        | Type
| :----------- | :--------
| <code>id</code> | string
| <code>name</code> | string
| <code>sourceBranch</code> | string
| <code>sourceRepositoryId</code> | string
| <code>sourceRepositoryType</code> | string
| <code>sourceVersion</code> | string



<a id="Change"></a>

## Change
Represents a change associated with a build.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>author</code> | [IdentityRef](#IdentityRef) | The author of the change.
| <code>changeType</code> | string | The type of change. "commit", "changeset", etc.
| <code>displayUri</code> | string | The location of a user-friendly representation of the resource.
| <code>id</code> | string | Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.
| <code>location</code> | string | The location of the full representation of the resource.
| <code>message</code> | string | A description of the change. This might be a commit message or changeset description.
| <code>timestamp</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx) | A timestamp for the change.



<a id="Condition"></a>

## Condition

| Field        | Type
| :----------- | :--------
| <code>conditionType</code> | [ConditionType](#ConditionType)
| <code>name</code> | string
| <code>value</code> | string



<a id="ConditionType"></a>

## ConditionType

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| event |
| environmentState |
| artifact |



<a id="ConfigurationVariableValue"></a>

## ConfigurationVariableValue

| Field        | Type
| :----------- | :--------
| <code>isSecret</code> | boolean
| <code>value</code> | string



<a id="Consumer"></a>

## Consumer

| Field        | Type
| :----------- | :--------
| <code>consumerId</code> | int32
| <code>consumerName</code> | string



<a id="ContinuousDeploymentAppServicePlanConfiguration"></a>

## ContinuousDeploymentAppServicePlanConfiguration

| Field        | Type
| :----------- | :--------
| <code>appServicePlan</code> | string
| <code>appServicePlanName</code> | string
| <code>appServicePricingTier</code> | string



<a id="ContinuousDeploymentSetupData"></a>

## ContinuousDeploymentSetupData

| Field        | Type
| :----------- | :--------
| <code>branch</code> | string
| <code>environmentName</code> | string
| <code>projectId</code> | string
| <code>repoId</code> | string
| <code>resourceGroup</code> | string
| <code>slotConfiguration</code> | [ContinuousDeploymentSlotConfiguration](#ContinuousDeploymentSlotConfiguration)
| <code>sourceConfiguration</code> | [ContinuousDeploymentSourceConfiguration](#ContinuousDeploymentSourceConfiguration)
| <code>subscriptionId</code> | string
| <code>subscriptionName</code> | string
| <code>tenantId</code> | string
| <code>testWebAppConfiguration</code> | [ContinuousDeploymentTestWebAppConfiguration](#ContinuousDeploymentTestWebAppConfiguration)
| <code>webAppName</code> | string
| <code>webAppProjectType</code> | [ContinuousDeploymentWebAppProjectType](#ContinuousDeploymentWebAppProjectType)



<a id="ContinuousDeploymentSlotConfiguration"></a>

## ContinuousDeploymentSlotConfiguration

| Field        | Type
| :----------- | :--------
| <code>slotName</code> | string
| <code>webAppLocation</code> | string



<a id="ContinuousDeploymentSourceConfiguration"></a>

## ContinuousDeploymentSourceConfiguration

| Field        | Type
| :----------- | :--------
| <code>branch</code> | string
| <code>sourceRepository</code> | [SourceRepository](#SourceRepository)



<a id="ContinuousDeploymentTestWebAppConfiguration"></a>

## ContinuousDeploymentTestWebAppConfiguration

| Field        | Type
| :----------- | :--------
| <code>appServicePlanConfiguration</code> | [ContinuousDeploymentAppServicePlanConfiguration](#ContinuousDeploymentAppServicePlanConfiguration)
| <code>environmentName</code> | string
| <code>testWebAppLocation</code> | string
| <code>testWebAppName</code> | string



<a id="ContinuousDeploymentTriggerIssue"></a>

## ContinuousDeploymentTriggerIssue

Extends: [AutoTriggerIssue](#AutoTriggerIssue)

| Field        | Type
| :----------- | :--------
| <code>artifactType</code> | string
| <code>artifactVersionId</code> | string
| <code>sourceId</code> | string



<a id="ContinuousDeploymentWebAppProjectType"></a>

## ContinuousDeploymentWebAppProjectType

| Enum Value   | Notes
| :----------- | :----------
| aspNetWap |
| aspNetCore |
| nodeJSWithGulp |
| nodeJSWithGrunt |



<a id="ControlOptions"></a>

## ControlOptions

| Field        | Type
| :----------- | :--------
| <code>alwaysRun</code> | boolean
| <code>continueOnError</code> | boolean
| <code>enabled</code> | boolean



<a id="DataSourceBinding"></a>

## DataSourceBinding

| Field        | Type
| :----------- | :--------
| <code>dataSourceName</code> | string
| <code>endpointId</code> | string
| <code>endpointUrl</code> | string
| <code>parameters</code> | dictionary (string, string)
| <code>resultSelector</code> | string
| <code>resultTemplate</code> | string
| <code>target</code> | string



<a id="DataSourceBindingBase"></a>

## DataSourceBindingBase

| Field        | Type
| :----------- | :--------
| <code>dataSourceName</code> | string
| <code>endpointId</code> | string
| <code>endpointUrl</code> | string
| <code>parameters</code> | dictionary (string, string)
| <code>resultSelector</code> | string
| <code>resultTemplate</code> | string
| <code>target</code> | string



<a id="DefinitionEnvironmentReference"></a>

## DefinitionEnvironmentReference

| Field        | Type
| :----------- | :--------
| <code>definitionEnvironmentId</code> | int32
| <code>definitionEnvironmentName</code> | string
| <code>releaseDefinitionId</code> | int32
| <code>releaseDefinitionName</code> | string



<a id="Demand"></a>

## Demand

| Field        | Type
| :----------- | :--------
| <code>name</code> | string
| <code>value</code> | string



<a id="Deployment"></a>

## Deployment

| Field        | Type
| :----------- | :--------
| <code>_links</code> | [ReferenceLinks](#ReferenceLinks)
| <code>attempt</code> | int32
| <code>conditions</code> | array ([Condition](#Condition))
| <code>definitionEnvironmentId</code> | int32
| <code>deploymentStatus</code> | [DeploymentStatus](#DeploymentStatus)
| <code>id</code> | int32
| <code>lastModifiedBy</code> | [IdentityRef](#IdentityRef)
| <code>lastModifiedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>operationStatus</code> | [DeploymentOperationStatus](#DeploymentOperationStatus)
| <code>postDeployApprovals</code> | array ([ReleaseApproval](#ReleaseApproval))
| <code>preDeployApprovals</code> | array ([ReleaseApproval](#ReleaseApproval))
| <code>queuedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>reason</code> | [DeploymentReason](#DeploymentReason)
| <code>release</code> | [ReleaseReference](#ReleaseReference)
| <code>releaseDefinition</code> | [ReleaseDefinitionShallowReference](#ReleaseDefinitionShallowReference)
| <code>releaseEnvironment</code> | [ReleaseEnvironmentShallowReference](#ReleaseEnvironmentShallowReference)
| <code>requestedBy</code> | [IdentityRef](#IdentityRef)
| <code>requestedFor</code> | [IdentityRef](#IdentityRef)
| <code>scheduledDeploymentTime</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>startedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)



<a id="DeploymentApprovalCompletedEvent"></a>

## DeploymentApprovalCompletedEvent

| Field        | Type
| :----------- | :--------
| <code>approval</code> | [ReleaseApproval](#ReleaseApproval)
| <code>project</code> | [ProjectReference](#ProjectReference)
| <code>release</code> | [Release](#Release)



<a id="DeploymentApprovalPendingEvent"></a>

## DeploymentApprovalPendingEvent

| Field        | Type
| :----------- | :--------
| <code>approval</code> | [ReleaseApproval](#ReleaseApproval)
| <code>approvalOptions</code> | [ApprovalOptions](#ApprovalOptions)
| <code>completedApprovals</code> | array ([ReleaseApproval](#ReleaseApproval))
| <code>data</code> | dictionary (string, object)
| <code>deployment</code> | [Deployment](#Deployment)
| <code>isMultipleRankApproval</code> | boolean
| <code>pendingApprovals</code> | array ([ReleaseApproval](#ReleaseApproval))
| <code>project</code> | [ProjectReference](#ProjectReference)
| <code>release</code> | [Release](#Release)



<a id="DeploymentAttempt"></a>

## DeploymentAttempt

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>attempt</code> | int32 |
| <code>deploymentId</code> | int32 |
| <code>errorLog</code> | string | Error log to show any unexpected error that occurred during executing deploy step
| <code>hasStarted</code> | boolean | The time at which the deployment started, and null if it has not been deployed yet
| <code>id</code> | int32 |
| <code>job</code> | [ReleaseTask](#ReleaseTask) |
| <code>lastModifiedBy</code> | [IdentityRef](#IdentityRef) |
| <code>lastModifiedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx) |
| <code>operationStatus</code> | [DeploymentOperationStatus](#DeploymentOperationStatus) |
| <code>queuedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx) |
| <code>reason</code> | [DeploymentReason](#DeploymentReason) |
| <code>releaseDeployPhases</code> | array ([ReleaseDeployPhase](#ReleaseDeployPhase)) |
| <code>requestedBy</code> | [IdentityRef](#IdentityRef) |
| <code>requestedFor</code> | [IdentityRef](#IdentityRef) |
| <code>runPlanId</code> | GUID |
| <code>status</code> | [DeploymentStatus](#DeploymentStatus) |
| <code>tasks</code> | array ([ReleaseTask](#ReleaseTask)) |



<a id="DeploymentAuthorizationInfo"></a>

## DeploymentAuthorizationInfo

| Field        | Type
| :----------- | :--------
| <code>authorizationHeaderFor</code> | [AuthorizationHeaderFor](#AuthorizationHeaderFor)
| <code>resources</code> | array (string)
| <code>tenantId</code> | string
| <code>vstsAccessTokenKey</code> | string



<a id="DeploymentAuthorizationOwner"></a>

## DeploymentAuthorizationOwner

| Enum Value   | Notes
| :----------- | :----------
| automatic |
| deploymentSubmitter |
| firstPreDeploymentApprover |



<a id="DeploymentCompletedEvent"></a>

## DeploymentCompletedEvent

| Field        | Type
| :----------- | :--------
| <code>comment</code> | string
| <code>data</code> | dictionary (string, object)
| <code>deployment</code> | [Deployment](#Deployment)
| <code>environment</code> | [ReleaseEnvironment](#ReleaseEnvironment)
| <code>project</code> | [ProjectReference](#ProjectReference)



<a id="DeploymentExpands"></a>

## DeploymentExpands

| Enum Value   | Notes
| :----------- | :----------
| all |
| deploymentOnly |
| approvals |
| artifacts |



<a id="DeploymentInput"></a>

## DeploymentInput

Extends: [BaseDeploymentInput](#BaseDeploymentInput)

| Field        | Type
| :----------- | :--------
| <code>demands</code> | array ([Demand](#Demand))
| <code>enableAccessToken</code> | boolean
| <code>queueId</code> | int32
| <code>skipArtifactsDownload</code> | boolean
| <code>timeoutInMinutes</code> | int32



<a id="DeploymentJob"></a>

## DeploymentJob

| Field        | Type
| :----------- | :--------
| <code>job</code> | [ReleaseTask](#ReleaseTask)
| <code>tasks</code> | array ([ReleaseTask](#ReleaseTask))



<a id="DeploymentManualInterventionPendingEvent"></a>

## DeploymentManualInterventionPendingEvent

| Field        | Type
| :----------- | :--------
| <code>deployment</code> | [Deployment](#Deployment)
| <code>emailRecipients</code> | array (GUID)
| <code>environmentOwner</code> | [IdentityRef](#IdentityRef)
| <code>manualIntervention</code> | [ManualIntervention](#ManualIntervention)
| <code>project</code> | [ProjectReference](#ProjectReference)
| <code>release</code> | [Release](#Release)



<a id="DeploymentOperationStatus"></a>

## DeploymentOperationStatus

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| queued |
| scheduled |
| pending |
| approved |
| rejected |
| deferred |
| queuedForAgent |
| phaseInProgress |
| phaseSucceeded |
| phasePartiallySucceeded |
| phaseFailed |
| canceled |
| phaseCanceled |
| manualInterventionPending |
| queuedForPipeline |
| all |



<a id="DeploymentQueryParameters"></a>

## DeploymentQueryParameters

| Field        | Type
| :----------- | :--------
| <code>artifactSourceId</code> | string
| <code>artifactTypeId</code> | string
| <code>artifactVersions</code> | array (string)
| <code>deploymentStatus</code> | [DeploymentStatus](#DeploymentStatus)
| <code>environments</code> | array ([DefinitionEnvironmentReference](#DefinitionEnvironmentReference))
| <code>expands</code> | [DeploymentExpands](#DeploymentExpands)
| <code>isDeleted</code> | boolean
| <code>latestDeploymentsOnly</code> | boolean
| <code>maxDeploymentsPerEnvironment</code> | int32
| <code>maxModifiedTime</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>minModifiedTime</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>operationStatus</code> | [DeploymentOperationStatus](#DeploymentOperationStatus)
| <code>queryOrder</code> | [ReleaseQueryOrder](#ReleaseQueryOrder)



<a id="DeploymentReason"></a>

## DeploymentReason

| Enum Value   | Notes
| :----------- | :----------
| none |
| manual |
| automated |
| scheduled |



<a id="DeploymentStartedEvent"></a>

## DeploymentStartedEvent

| Field        | Type
| :----------- | :--------
| <code>environment</code> | [ReleaseEnvironment](#ReleaseEnvironment)
| <code>project</code> | [ProjectReference](#ProjectReference)
| <code>release</code> | [Release](#Release)



<a id="DeploymentStatus"></a>

## DeploymentStatus

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| notDeployed |
| inProgress |
| succeeded |
| partiallySucceeded |
| failed |
| all |



<a id="DeployPhase"></a>

## DeployPhase

| Field        | Type
| :----------- | :--------
| <code>name</code> | string
| <code>phaseType</code> | [DeployPhaseTypes](#DeployPhaseTypes)
| <code>rank</code> | int32
| <code>workflowTasks</code> | array ([WorkflowTask](#WorkflowTask))



<a id="DeployPhaseStatus"></a>

## DeployPhaseStatus

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| notStarted |
| inProgress |
| partiallySucceeded |
| succeeded |
| failed |
| canceled |
| skipped |



<a id="DeployPhaseTypes"></a>

## DeployPhaseTypes

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| agentBasedDeployment |
| runOnServer |
| machineGroupBasedDeployment |



<a id="EmailRecipients"></a>

## EmailRecipients

| Field        | Type
| :----------- | :--------
| <code>emailAddresses</code> | array (string)
| <code>tfsIds</code> | array (GUID)



<a id="EnvironmentExecutionPolicy"></a>

## EnvironmentExecutionPolicy
Defines policy on environment queuing at Release Management side queue. We will send to Environment Runner [creating pre-deploy and other steps] only when the policies mentioned are satisfied.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>concurrencyCount</code> | int32 | This policy decides, how many environments would be with Environment Runner.
| <code>queueDepthCount</code> | int32 | Queue depth in the EnvironmentQueue table, this table keeps the environment entries till Environment Runner is free [as per it's policy] to take another environment for running.



<a id="EnvironmentOptions"></a>

## EnvironmentOptions

| Field        | Type
| :----------- | :--------
| <code>emailNotificationType</code> | string
| <code>emailRecipients</code> | string
| <code>enableAccessToken</code> | boolean
| <code>publishDeploymentStatus</code> | boolean
| <code>skipArtifactsDownload</code> | boolean
| <code>timeoutInMinutes</code> | int32



<a id="EnvironmentRetentionPolicy"></a>

## EnvironmentRetentionPolicy

| Field        | Type
| :----------- | :--------
| <code>daysToKeep</code> | int32
| <code>releasesToKeep</code> | int32
| <code>retainBuild</code> | boolean



<a id="EnvironmentStatus"></a>

## EnvironmentStatus

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| notStarted |
| inProgress |
| succeeded |
| canceled |
| rejected |
| queued |
| scheduled |
| partiallySucceeded |



<a id="ExecutionInput"></a>

## ExecutionInput

| Field        | Type
| :----------- | :--------
| <code>parallelExecutionType</code> | [ParallelExecutionTypes](#ParallelExecutionTypes)



<a id="FavoriteItem"></a>

## FavoriteItem
Class to represent favorite entry


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>data</code> | string | Application specific data for the entry
| <code>id</code> | GUID | Unique Id of the entry
| <code>name</code> | string | Display text for favorite entry
| <code>type</code> | string | Application specific favorite entry type. Empty or Null represents that Favorite item is a Folder



<a id="Folder"></a>

## Folder

| Field        | Type
| :----------- | :--------
| <code>createdBy</code> | [IdentityRef](#IdentityRef)
| <code>createdOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>description</code> | string
| <code>lastChangedBy</code> | [IdentityRef](#IdentityRef)
| <code>lastChangedDate</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>path</code> | string



<a id="FolderPathQueryOrder"></a>

## FolderPathQueryOrder

| Enum Value   | Notes
| :----------- | :----------
| none | No order
| ascending | Order by folder name and path ascending.
| descending | Order by folder name and path descending.



<a id="IdentityRef"></a>

## IdentityRef

| Field        | Type
| :----------- | :--------
| <code>directoryAlias</code> | string
| <code>displayName</code> | string
| <code>id</code> | string
| <code>imageUrl</code> | string
| <code>inactive</code> | boolean
| <code>isAadIdentity</code> | boolean
| <code>isContainer</code> | boolean
| <code>profileUrl</code> | string
| <code>uniqueName</code> | string
| <code>url</code> | string



<a id="InputDataType"></a>

## InputDataType
Enumerates data types that are supported as subscription input values.


| Enum Value   | Notes
| :----------- | :----------
| none | No data type is specified.
| string | Represents a textual value.
| number | Represents a numeric value.
| boolean | Represents a value of true or false.
| guid | Represents a Guid.
| uri | Represents a URI.



<a id="InputDescriptor"></a>

## InputDescriptor
Describes an input for subscriptions.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>dependencyInputIds</code> | array (string) | The ids of all inputs that the value of this input is dependent on.
| <code>description</code> | string | Description of what this input is used for
| <code>groupName</code> | string | The group localized name to which this input belongs and can be shown as a header for the container that will include all the inputs in the group.
| <code>hasDynamicValueInformation</code> | boolean | If true, the value information for this input is dynamic and should be fetched when the value of dependency inputs change.
| <code>id</code> | string | Identifier for the subscription input
| <code>inputMode</code> | [InputMode](#InputMode) | Mode in which the value of this input should be entered
| <code>isConfidential</code> | boolean | Gets whether this input is confidential, such as for a password or application key
| <code>name</code> | string | Localized name which can be shown as a label for the subscription input
| <code>properties</code> | dictionary (string, object) | Custom properties for the input which can be used by the service provider
| <code>type</code> | string | Underlying data type for the input value. When this value is specified, InputMode, Validation and Values are optional.
| <code>useInDefaultDescription</code> | boolean | Gets whether this input is included in the default generated action description.
| <code>validation</code> | [InputValidation](#InputValidation) | Information to use to validate this input's value
| <code>valueHint</code> | string | A hint for input value. It can be used in the UI as the input placeholder.
| <code>values</code> | [InputValues](#InputValues) | Information about possible values for this input



<a id="InputMode"></a>

## InputMode
Mode in which a subscription input should be entered (in a UI)


| Enum Value   | Notes
| :----------- | :----------
| none | This input should not be shown in the UI
| textBox | An input text box should be shown
| passwordBox | An password input box should be shown
| combo | A select/combo control should be shown
| radioButtons | Radio buttons should be shown
| checkBox | Checkbox should be shown(for true/false values)
| textArea | A multi-line text area should be shown



<a id="InputValidation"></a>

## InputValidation
Describes what values are valid for a subscription input


| Field        | Type
| :----------- | :--------
| <code>dataType</code> | [InputDataType](#InputDataType)
| <code>isRequired</code> | boolean
| <code>maxLength</code> | int32
| <code>maxValue</code> | decimal
| <code>minLength</code> | int32
| <code>minValue</code> | decimal
| <code>pattern</code> | string
| <code>patternMismatchErrorMessage</code> | string



<a id="InputValue"></a>

## InputValue
Information about a single value for an input


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>data</code> | dictionary (string, object) | Any other data about this input
| <code>displayValue</code> | string | The text to show for the display of this value
| <code>value</code> | string | The value to store for this input



<a id="InputValues"></a>

## InputValues
Information about the possible/allowed values for a given subscription input


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>defaultValue</code> | string | The default value to use for this input
| <code>error</code> | [InputValuesError](#InputValuesError) | Errors encountered while computing dynamic values.
| <code>inputId</code> | string | The id of the input
| <code>isDisabled</code> | boolean | Should this input be disabled
| <code>isLimitedToPossibleValues</code> | boolean | Should the value be restricted to one of the values in the PossibleValues (True) or are the values in PossibleValues just a suggestion (False)
| <code>isReadOnly</code> | boolean | Should this input be made read-only
| <code>possibleValues</code> | array ([InputValue](#InputValue)) | Possible values that this input can take



<a id="InputValuesError"></a>

## InputValuesError
Error information related to a subscription input value.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>message</code> | string | The error message.



<a id="InputValuesQuery"></a>

## InputValuesQuery

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>currentValues</code> | dictionary (string, string) |
| <code>inputValues</code> | array ([InputValues](#InputValues)) | The input values to return on input, and the result from the consumer on output.
| <code>resource</code> | object | Subscription containing information about the publisher/consumer and the current input values



<a id="Issue"></a>

## Issue

| Field        | Type
| :----------- | :--------
| <code>issueType</code> | string
| <code>message</code> | string



<a id="IssueSource"></a>

## IssueSource

| Enum Value   | Notes
| :----------- | :----------
| none |
| user |
| system |



<a id="MachineGroupBasedDeployPhase"></a>

## MachineGroupBasedDeployPhase

Extends: [DeployPhase](#DeployPhase)

| Field        | Type
| :----------- | :--------
| <code>deploymentInput</code> | [MachineGroupDeploymentInput](#MachineGroupDeploymentInput)



<a id="MachineGroupDeploymentInput"></a>

## MachineGroupDeploymentInput

Extends: [DeploymentInput](#DeploymentInput)

| Field        | Type
| :----------- | :--------
| <code>deploymentHealthOption</code> | string
| <code>healthPercent</code> | int32
| <code>tags</code> | array (string)



<a id="MailMessage"></a>

## MailMessage

| Field        | Type
| :----------- | :--------
| <code>body</code> | string
| <code>cC</code> | [EmailRecipients](#EmailRecipients)
| <code>inReplyTo</code> | string
| <code>messageId</code> | string
| <code>replyBy</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>replyTo</code> | [EmailRecipients](#EmailRecipients)
| <code>sections</code> | array ([MailSectionType](#MailSectionType))
| <code>senderType</code> | [SenderType](#SenderType)
| <code>subject</code> | string
| <code>to</code> | [EmailRecipients](#EmailRecipients)



<a id="MailSectionType"></a>

## MailSectionType

| Enum Value   | Notes
| :----------- | :----------
| details |
| environments |
| issues |
| testResults |
| workItems |
| releaseInfo |



<a id="ManualIntervention"></a>

## ManualIntervention

| Field        | Type
| :----------- | :--------
| <code>approver</code> | [IdentityRef](#IdentityRef)
| <code>comments</code> | string
| <code>createdOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>id</code> | int32
| <code>instructions</code> | string
| <code>modifiedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>name</code> | string
| <code>release</code> | [ReleaseShallowReference](#ReleaseShallowReference)
| <code>releaseDefinition</code> | [ReleaseDefinitionShallowReference](#ReleaseDefinitionShallowReference)
| <code>releaseEnvironment</code> | [ReleaseEnvironmentShallowReference](#ReleaseEnvironmentShallowReference)
| <code>status</code> | [ManualInterventionStatus](#ManualInterventionStatus)
| <code>taskInstanceId</code> | GUID
| <code>url</code> | string



<a id="ManualInterventionStatus"></a>

## ManualInterventionStatus

| Enum Value   | Notes
| :----------- | :----------
| unknown |
| pending |
| rejected |
| approved |
| canceled |



<a id="ManualInterventionUpdateMetadata"></a>

## ManualInterventionUpdateMetadata

| Field        | Type
| :----------- | :--------
| <code>comment</code> | string
| <code>status</code> | [ManualInterventionStatus](#ManualInterventionStatus)



<a id="MappingDetails"></a>

## MappingDetails

| Field        | Type
| :----------- | :--------
| <code>mappings</code> | dictionary (string, [InputValue](#InputValue))



<a id="Metric"></a>

## Metric

| Field        | Type
| :----------- | :--------
| <code>name</code> | string
| <code>value</code> | int32



<a id="MultiConfigInput"></a>

## MultiConfigInput

Extends: [ParallelExecutionInputBase](#ParallelExecutionInputBase)

| Field        | Type
| :----------- | :--------
| <code>multipliers</code> | string



<a id="MultiMachineInput"></a>

## MultiMachineInput

Extends: [ParallelExecutionInputBase](#ParallelExecutionInputBase)



<a id="ParallelExecutionInputBase"></a>

## ParallelExecutionInputBase

Extends: [ExecutionInput](#ExecutionInput)

| Field        | Type
| :----------- | :--------
| <code>continueOnError</code> | boolean
| <code>maxNumberOfAgents</code> | int32



<a id="ParallelExecutionTypes"></a>

## ParallelExecutionTypes

| Enum Value   | Notes
| :----------- | :----------
| none |
| multiConfiguration |
| multiMachine |



<a id="ProcessParameters"></a>

## ProcessParameters

| Field        | Type
| :----------- | :--------
| <code>dataSourceBindings</code> | array ([DataSourceBindingBase](#DataSourceBindingBase))
| <code>inputs</code> | array ([TaskInputDefinitionBase](#TaskInputDefinitionBase))
| <code>sourceDefinitions</code> | array ([TaskSourceDefinitionBase](#TaskSourceDefinitionBase))



<a id="ProjectReference"></a>

## ProjectReference

| Field        | Type
| :----------- | :--------
| <code>id</code> | GUID
| <code>name</code> | string



<a id="PropertiesCollection"></a>

## PropertiesCollection

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>count</code> | int32 | Implements ICollection&lt;KeyValuePair&lt;String,Object&gt;&gt;.Count/&gt;
| <code>item</code> | object |
| <code>keys</code> | array (string) |
| <code>values</code> | array (string) |



<a id="PropertySelector"></a>

## PropertySelector

| Field        | Type
| :----------- | :--------
| <code>properties</code> | array (string)
| <code>selectorType</code> | [PropertySelectorType](#PropertySelectorType)



<a id="PropertySelectorType"></a>

## PropertySelectorType

| Enum Value   | Notes
| :----------- | :----------
| inclusion |
| exclusion |



<a id="QueuedReleaseData"></a>

## QueuedReleaseData

| Field        | Type
| :----------- | :--------
| <code>projectId</code> | GUID
| <code>queuePosition</code> | int32
| <code>releaseId</code> | int32



<a id="RealtimeReleaseEvent"></a>

## RealtimeReleaseEvent

| Field        | Type
| :----------- | :--------
| <code>projectId</code> | GUID
| <code>releaseId</code> | int32



<a id="ReferenceLinks"></a>

## ReferenceLinks
The class to represent a collection of REST reference links.  Example: { self: { href: "http://localhost:8080/tfs/DefaultCollection/_apis/wit/workItems/1" } }


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>links</code> | dictionary (string, object) | The readonly view of the links.  Because Reference links are readonly, we only want to expose them as read only.



<a id="Release"></a>

## Release

| Field        | Type
| :----------- | :--------
| <code>_links</code> | [ReferenceLinks](#ReferenceLinks)
| <code>artifacts</code> | array ([Artifact](#Artifact))
| <code>comment</code> | string
| <code>createdBy</code> | [IdentityRef](#IdentityRef)
| <code>createdOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>definitionSnapshotRevision</code> | int32
| <code>description</code> | string
| <code>environments</code> | array ([ReleaseEnvironment](#ReleaseEnvironment))
| <code>id</code> | int32
| <code>keepForever</code> | boolean
| <code>logsContainerUrl</code> | string
| <code>modifiedBy</code> | [IdentityRef](#IdentityRef)
| <code>modifiedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>name</code> | string
| <code>poolName</code> | string
| <code>projectReference</code> | [ProjectReference](#ProjectReference)
| <code>properties</code> | [PropertiesCollection](#PropertiesCollection)
| <code>reason</code> | [ReleaseReason](#ReleaseReason)
| <code>releaseDefinition</code> | [ReleaseDefinitionShallowReference](#ReleaseDefinitionShallowReference)
| <code>releaseNameFormat</code> | string
| <code>status</code> | [ReleaseStatus](#ReleaseStatus)
| <code>tags</code> | array (string)
| <code>url</code> | string
| <code>variableGroups</code> | array ([VariableGroup](#VariableGroup))
| <code>variables</code> | dictionary (string, [ConfigurationVariableValue](#ConfigurationVariableValue))



<a id="ReleaseAbandonedEvent"></a>

## ReleaseAbandonedEvent

| Field        | Type
| :----------- | :--------
| <code>project</code> | [ProjectReference](#ProjectReference)
| <code>release</code> | [Release](#Release)



<a id="ReleaseApproval"></a>

## ReleaseApproval

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>approvalType</code> | [ApprovalType](#ApprovalType) | Gets or sets the type of approval.
| <code>approvedBy</code> | [IdentityRef](#IdentityRef) | Gets the identity who approved.
| <code>approver</code> | [IdentityRef](#IdentityRef) | Gets or sets the identity who should approve.
| <code>attempt</code> | int32 | Gets attempt which specifies as which deployment attempt it belongs.
| <code>comments</code> | string | Gets or sets comments for approval.
| <code>createdOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx) | Gets date on which it got created.
| <code>history</code> | array ([ReleaseApprovalHistory](#ReleaseApprovalHistory)) | Gets history which specifies all approvals associated with this approval.
| <code>id</code> | int32 | Gets the unique identifier of this field.
| <code>isAutomated</code> | boolean | Gets or sets as approval is automated or not.
| <code>modifiedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx) | Gets date on which it got modified.
| <code>rank</code> | int32 | Gets or sets rank which specifies the order of the approval. e.g. Same rank denotes parallel approval.
| <code>release</code> | [ReleaseShallowReference](#ReleaseShallowReference) | Gets releaseReference which specifies the reference of the release to which this approval is associated.
| <code>releaseDefinition</code> | [ReleaseDefinitionShallowReference](#ReleaseDefinitionShallowReference) | Gets releaseDefinitionReference which specifies the reference of the release definition to which this approval is associated.
| <code>releaseEnvironment</code> | [ReleaseEnvironmentShallowReference](#ReleaseEnvironmentShallowReference) | Gets releaseEnvironmentReference which specifies the reference of the release environment to which this approval is associated.
| <code>revision</code> | int32 | Gets the revision number.
| <code>status</code> | [ApprovalStatus](#ApprovalStatus) | Gets or sets the status of the approval.
| <code>trialNumber</code> | int32 |
| <code>url</code> | string | Gets url to access the approval.



<a id="ReleaseApprovalHistory"></a>

## ReleaseApprovalHistory

| Field        | Type
| :----------- | :--------
| <code>approver</code> | [IdentityRef](#IdentityRef)
| <code>changedBy</code> | [IdentityRef](#IdentityRef)
| <code>comments</code> | string
| <code>createdOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>modifiedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>revision</code> | int32



<a id="ReleaseApprovalPendingEvent"></a>

## ReleaseApprovalPendingEvent

| Field        | Type
| :----------- | :--------
| <code>approval</code> | [ReleaseApproval](#ReleaseApproval)
| <code>approvalOptions</code> | [ApprovalOptions](#ApprovalOptions)
| <code>completedApprovals</code> | array ([ReleaseApproval](#ReleaseApproval))
| <code>definitionName</code> | string
| <code>deployment</code> | [Deployment](#Deployment)
| <code>environmentId</code> | int32
| <code>environmentName</code> | string
| <code>environments</code> | array ([ReleaseEnvironment](#ReleaseEnvironment))
| <code>isMultipleRankApproval</code> | boolean
| <code>pendingApprovals</code> | array ([ReleaseApproval](#ReleaseApproval))
| <code>releaseCreator</code> | string
| <code>releaseName</code> | string
| <code>title</code> | string
| <code>webAccessUri</code> | string



<a id="ReleaseArtifact"></a>

## ReleaseArtifact

| Field        | Type
| :----------- | :--------
| <code>artifactProvider</code> | [ArtifactProvider](#ArtifactProvider)
| <code>artifactType</code> | string
| <code>definitionData</code> | string
| <code>definitionId</code> | int32
| <code>description</code> | string
| <code>id</code> | int32
| <code>name</code> | string
| <code>releaseId</code> | int32



<a id="ReleaseCondition"></a>

## ReleaseCondition

Extends: [Condition](#Condition)

| Field        | Type
| :----------- | :--------
| <code>result</code> | boolean



<a id="ReleaseCreatedEvent"></a>

## ReleaseCreatedEvent

| Field        | Type
| :----------- | :--------
| <code>project</code> | [ProjectReference](#ProjectReference)
| <code>release</code> | [Release](#Release)



<a id="ReleaseDefinition"></a>

## ReleaseDefinition

| Field        | Type
| :----------- | :--------
| <code>_links</code> | [ReferenceLinks](#ReferenceLinks)
| <code>artifacts</code> | array ([Artifact](#Artifact))
| <code>comment</code> | string
| <code>createdBy</code> | [IdentityRef](#IdentityRef)
| <code>createdOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>description</code> | string
| <code>environments</code> | array ([ReleaseDefinitionEnvironment](#ReleaseDefinitionEnvironment))
| <code>id</code> | int32
| <code>lastRelease</code> | [ReleaseReference](#ReleaseReference)
| <code>modifiedBy</code> | [IdentityRef](#IdentityRef)
| <code>modifiedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>name</code> | string
| <code>path</code> | string
| <code>properties</code> | [PropertiesCollection](#PropertiesCollection)
| <code>releaseNameFormat</code> | string
| <code>retentionPolicy</code> | [RetentionPolicy](#RetentionPolicy)
| <code>revision</code> | int32
| <code>source</code> | [ReleaseDefinitionSource](#ReleaseDefinitionSource)
| <code>tags</code> | array (string)
| <code>triggers</code> | array ([ReleaseTriggerBase](#ReleaseTriggerBase))
| <code>url</code> | string
| <code>variableGroups</code> | array (int32)
| <code>variables</code> | dictionary (string, [ConfigurationVariableValue](#ConfigurationVariableValue))



<a id="ReleaseDefinitionApprovals"></a>

## ReleaseDefinitionApprovals

| Field        | Type
| :----------- | :--------
| <code>approvalOptions</code> | [ApprovalOptions](#ApprovalOptions)
| <code>approvals</code> | array ([ReleaseDefinitionApprovalStep](#ReleaseDefinitionApprovalStep))



<a id="ReleaseDefinitionApprovalStep"></a>

## ReleaseDefinitionApprovalStep

Extends: [ReleaseDefinitionEnvironmentStep](#ReleaseDefinitionEnvironmentStep)

| Field        | Type
| :----------- | :--------
| <code>approver</code> | [IdentityRef](#IdentityRef)
| <code>isAutomated</code> | boolean
| <code>isNotificationOn</code> | boolean
| <code>rank</code> | int32



<a id="ReleaseDefinitionDeployStep"></a>

## ReleaseDefinitionDeployStep

Extends: [ReleaseDefinitionEnvironmentStep](#ReleaseDefinitionEnvironmentStep)

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>tasks</code> | array ([WorkflowTask](#WorkflowTask)) | The list of steps for this definition.



<a id="ReleaseDefinitionEnvironment"></a>

## ReleaseDefinitionEnvironment

| Field        | Type
| :----------- | :--------
| <code>conditions</code> | array ([Condition](#Condition))
| <code>demands</code> | array ([Demand](#Demand))
| <code>deployPhases</code> | array ([DeployPhase](#DeployPhase))
| <code>deployStep</code> | [ReleaseDefinitionDeployStep](#ReleaseDefinitionDeployStep)
| <code>environmentOptions</code> | [EnvironmentOptions](#EnvironmentOptions)
| <code>executionPolicy</code> | [EnvironmentExecutionPolicy](#EnvironmentExecutionPolicy)
| <code>id</code> | int32
| <code>name</code> | string
| <code>owner</code> | [IdentityRef](#IdentityRef)
| <code>postDeployApprovals</code> | [ReleaseDefinitionApprovals](#ReleaseDefinitionApprovals)
| <code>preDeployApprovals</code> | [ReleaseDefinitionApprovals](#ReleaseDefinitionApprovals)
| <code>processParameters</code> | [ProcessParameters](#ProcessParameters)
| <code>properties</code> | [PropertiesCollection](#PropertiesCollection)
| <code>queueId</code> | int32
| <code>rank</code> | int32
| <code>retentionPolicy</code> | [EnvironmentRetentionPolicy](#EnvironmentRetentionPolicy)
| <code>runOptions</code> | dictionary (string, string)
| <code>schedules</code> | array ([ReleaseSchedule](#ReleaseSchedule))
| <code>variables</code> | dictionary (string, [ConfigurationVariableValue](#ConfigurationVariableValue))



<a id="ReleaseDefinitionEnvironmentStep"></a>

## ReleaseDefinitionEnvironmentStep

| Field        | Type
| :----------- | :--------
| <code>id</code> | int32



<a id="ReleaseDefinitionEnvironmentSummary"></a>

## ReleaseDefinitionEnvironmentSummary

| Field        | Type
| :----------- | :--------
| <code>id</code> | int32
| <code>lastReleases</code> | array ([ReleaseShallowReference](#ReleaseShallowReference))
| <code>name</code> | string



<a id="ReleaseDefinitionEnvironmentTemplate"></a>

## ReleaseDefinitionEnvironmentTemplate

| Field        | Type
| :----------- | :--------
| <code>canDelete</code> | boolean
| <code>category</code> | string
| <code>description</code> | string
| <code>environment</code> | [ReleaseDefinitionEnvironment](#ReleaseDefinitionEnvironment)
| <code>iconTaskId</code> | GUID
| <code>iconUri</code> | string
| <code>id</code> | GUID
| <code>name</code> | string



<a id="ReleaseDefinitionExpands"></a>

## ReleaseDefinitionExpands

| Enum Value   | Notes
| :----------- | :----------
| none |
| environments |
| artifacts |
| triggers |
| variables |
| tags |



<a id="ReleaseDefinitionQueryOrder"></a>

## ReleaseDefinitionQueryOrder

| Enum Value   | Notes
| :----------- | :----------
| idAscending |
| idDescending |
| nameAscending |
| nameDescending |



<a id="ReleaseDefinitionRevision"></a>

## ReleaseDefinitionRevision

| Field        | Type
| :----------- | :--------
| <code>changedBy</code> | [IdentityRef](#IdentityRef)
| <code>changedDate</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>changeType</code> | [AuditAction](#AuditAction)
| <code>comment</code> | string
| <code>definitionId</code> | int32
| <code>definitionUrl</code> | string
| <code>revision</code> | int32



<a id="ReleaseDefinitionShallowReference"></a>

## ReleaseDefinitionShallowReference

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>_links</code> | [ReferenceLinks](#ReferenceLinks) | Gets or set the links to related resources, APIs, and views for the release definition.
| <code>id</code> | int32 | Gets the unique identifier of release definition.
| <code>name</code> | string | Gets the name of the release definition.
| <code>url</code> | string | Gets the REST API url to access the release definition.



<a id="ReleaseDefinitionSource"></a>

## ReleaseDefinitionSource

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| restApi |
| userInterface |
| ibiza |
| portalExtensionApi |



<a id="ReleaseDefinitionSummary"></a>

## ReleaseDefinitionSummary

| Field        | Type
| :----------- | :--------
| <code>environments</code> | array ([ReleaseDefinitionEnvironmentSummary](#ReleaseDefinitionEnvironmentSummary))
| <code>releaseDefinition</code> | [ReleaseDefinitionShallowReference](#ReleaseDefinitionShallowReference)
| <code>releases</code> | array ([Release](#Release))



<a id="ReleaseDeployPhase"></a>

## ReleaseDeployPhase

| Field        | Type
| :----------- | :--------
| <code>deploymentJobs</code> | array ([DeploymentJob](#DeploymentJob))
| <code>errorLog</code> | string
| <code>id</code> | int32
| <code>manualInterventions</code> | array ([ManualIntervention](#ManualIntervention))
| <code>phaseType</code> | [DeployPhaseTypes](#DeployPhaseTypes)
| <code>rank</code> | int32
| <code>runPlanId</code> | GUID
| <code>status</code> | [DeployPhaseStatus](#DeployPhaseStatus)



<a id="ReleaseEnvironment"></a>

## ReleaseEnvironment

| Field        | Type
| :----------- | :--------
| <code>conditions</code> | array ([ReleaseCondition](#ReleaseCondition))
| <code>createdOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>definitionEnvironmentId</code> | int32
| <code>demands</code> | array ([Demand](#Demand))
| <code>deployPhasesSnapshot</code> | array ([DeployPhase](#DeployPhase))
| <code>deploySteps</code> | array ([DeploymentAttempt](#DeploymentAttempt))
| <code>environmentOptions</code> | [EnvironmentOptions](#EnvironmentOptions)
| <code>id</code> | int32
| <code>modifiedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>name</code> | string
| <code>nextScheduledUtcTime</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>owner</code> | [IdentityRef](#IdentityRef)
| <code>postApprovalsSnapshot</code> | [ReleaseDefinitionApprovals](#ReleaseDefinitionApprovals)
| <code>postDeployApprovals</code> | array ([ReleaseApproval](#ReleaseApproval))
| <code>preApprovalsSnapshot</code> | [ReleaseDefinitionApprovals](#ReleaseDefinitionApprovals)
| <code>preDeployApprovals</code> | array ([ReleaseApproval](#ReleaseApproval))
| <code>processParameters</code> | [ProcessParameters](#ProcessParameters)
| <code>queueId</code> | int32
| <code>rank</code> | int32
| <code>release</code> | [ReleaseShallowReference](#ReleaseShallowReference)
| <code>releaseCreatedBy</code> | [IdentityRef](#IdentityRef)
| <code>releaseDefinition</code> | [ReleaseDefinitionShallowReference](#ReleaseDefinitionShallowReference)
| <code>releaseDescription</code> | string
| <code>releaseId</code> | int32
| <code>scheduledDeploymentTime</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>schedules</code> | array ([ReleaseSchedule](#ReleaseSchedule))
| <code>status</code> | [EnvironmentStatus](#EnvironmentStatus)
| <code>timeToDeploy</code> | double
| <code>triggerReason</code> | string
| <code>variables</code> | dictionary (string, [ConfigurationVariableValue](#ConfigurationVariableValue))
| <code>workflowTasks</code> | array ([WorkflowTask](#WorkflowTask))



<a id="ReleaseEnvironmentCompletedEvent"></a>

## ReleaseEnvironmentCompletedEvent

| Field        | Type
| :----------- | :--------
| <code>createdByName</code> | string
| <code>definitionId</code> | int32
| <code>definitionName</code> | string
| <code>environment</code> | [ReleaseEnvironment](#ReleaseEnvironment)
| <code>environmentId</code> | int32
| <code>projectName</code> | string
| <code>reason</code> | [DeploymentReason](#DeploymentReason)
| <code>releaseCreatedBy</code> | [IdentityRef](#IdentityRef)
| <code>releaseLogsUri</code> | string
| <code>releaseName</code> | string
| <code>status</code> | string
| <code>title</code> | string
| <code>webAccessUri</code> | string



<a id="ReleaseEnvironmentShallowReference"></a>

## ReleaseEnvironmentShallowReference

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>_links</code> | [ReferenceLinks](#ReferenceLinks) | Gets the links to related resources, APIs, and views for the release environment.
| <code>id</code> | int32 | Gets the unique identifier of release environment.
| <code>name</code> | string | Gets the name of the release environment.
| <code>url</code> | string | Gets the REST API url to access the release environment.



<a id="ReleaseEnvironmentUpdateMetadata"></a>

## ReleaseEnvironmentUpdateMetadata

| Field        | Type
| :----------- | :--------
| <code>comment</code> | string
| <code>scheduledDeploymentTime</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>status</code> | [EnvironmentStatus](#EnvironmentStatus)



<a id="ReleaseExpands"></a>

## ReleaseExpands

| Enum Value   | Notes
| :----------- | :----------
| none |
| environments |
| artifacts |
| approvals |
| manualInterventions |
| variables |
| tags |



<a id="ReleaseQueryOrder"></a>

## ReleaseQueryOrder

| Enum Value   | Notes
| :----------- | :----------
| descending |
| ascending |



<a id="ReleaseReason"></a>

## ReleaseReason

| Enum Value   | Notes
| :----------- | :----------
| none |
| manual |
| continuousIntegration |
| schedule |
| individualCI |
| batchedCI |



<a id="ReleaseReference"></a>

## ReleaseReference

| Field        | Type
| :----------- | :--------
| <code>_links</code> | [ReferenceLinks](#ReferenceLinks)
| <code>artifacts</code> | array ([Artifact](#Artifact))
| <code>createdBy</code> | [IdentityRef](#IdentityRef)
| <code>createdOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>description</code> | string
| <code>id</code> | int32
| <code>modifiedBy</code> | [IdentityRef](#IdentityRef)
| <code>name</code> | string
| <code>reason</code> | [ReleaseReason](#ReleaseReason)
| <code>releaseDefinition</code> | [ReleaseDefinitionShallowReference](#ReleaseDefinitionShallowReference)
| <code>url</code> | string
| <code>webAccessUri</code> | string



<a id="ReleaseRevision"></a>

## ReleaseRevision

| Field        | Type
| :----------- | :--------
| <code>changedBy</code> | [IdentityRef](#IdentityRef)
| <code>changedDate</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>changeDetails</code> | string
| <code>changeType</code> | string
| <code>comment</code> | string
| <code>definitionSnapshotRevision</code> | int32
| <code>releaseId</code> | int32



<a id="ReleaseSchedule"></a>

## ReleaseSchedule

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>daysToRelease</code> | [ScheduleDays](#ScheduleDays) | Days of the week to release
| <code>jobId</code> | GUID | Team Foundation Job Definition Job Id
| <code>startHours</code> | int32 | Local time zone hour to start
| <code>startMinutes</code> | int32 | Local time zone minute to start
| <code>timeZoneId</code> | string | Time zone Id of release schedule, such as 'UTC'



<a id="ReleaseSettings"></a>

## ReleaseSettings

| Field        | Type
| :----------- | :--------
| <code>retentionSettings</code> | [RetentionSettings](#RetentionSettings)



<a id="ReleaseShallowReference"></a>

## ReleaseShallowReference

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>_links</code> | [ReferenceLinks](#ReferenceLinks) | Gets the links to related resources, APIs, and views for the release.
| <code>id</code> | int32 | Gets the unique identifier of release.
| <code>name</code> | string | Gets the name of the release.
| <code>url</code> | string | Gets the REST API url to access the release.



<a id="ReleaseStartMetadata"></a>

## ReleaseStartMetadata

| Field        | Type
| :----------- | :--------
| <code>artifacts</code> | array ([ArtifactMetadata](#ArtifactMetadata))
| <code>definitionId</code> | int32
| <code>description</code> | string
| <code>isDraft</code> | boolean
| <code>manualEnvironments</code> | array (string)
| <code>properties</code> | [PropertiesCollection](#PropertiesCollection)
| <code>reason</code> | [ReleaseReason](#ReleaseReason)



<a id="ReleaseStatus"></a>

## ReleaseStatus

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| draft |
| active |
| abandoned |



<a id="ReleaseTask"></a>

## ReleaseTask

| Field        | Type
| :----------- | :--------
| <code>agentName</code> | string
| <code>dateEnded</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>dateStarted</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>finishTime</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>id</code> | int32
| <code>issues</code> | array ([Issue](#Issue))
| <code>lineCount</code> | int64
| <code>logUrl</code> | string
| <code>name</code> | string
| <code>rank</code> | int32
| <code>startTime</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>status</code> | [TaskStatus](#TaskStatus)
| <code>task</code> | [WorkflowTaskReference](#WorkflowTaskReference)
| <code>timelineRecordId</code> | GUID



<a id="ReleaseTaskLogUpdatedEvent"></a>

## ReleaseTaskLogUpdatedEvent

Extends: [RealtimeReleaseEvent](#RealtimeReleaseEvent)

| Field        | Type
| :----------- | :--------
| <code>environmentId</code> | int32
| <code>lines</code> | array (string)
| <code>timelineRecordId</code> | GUID



<a id="ReleaseTasksUpdatedEvent"></a>

## ReleaseTasksUpdatedEvent

Extends: [RealtimeReleaseEvent](#RealtimeReleaseEvent)

| Field        | Type
| :----------- | :--------
| <code>environmentId</code> | int32
| <code>job</code> | [ReleaseTask](#ReleaseTask)
| <code>releaseDeployPhaseId</code> | int32
| <code>releaseStepId</code> | int32
| <code>tasks</code> | array ([ReleaseTask](#ReleaseTask))



<a id="ReleaseTriggerBase"></a>

## ReleaseTriggerBase

| Field        | Type
| :----------- | :--------
| <code>triggerType</code> | [ReleaseTriggerType](#ReleaseTriggerType)



<a id="ReleaseTriggerType"></a>

## ReleaseTriggerType

| Enum Value   | Notes
| :----------- | :----------
| undefined |
| artifactSource |
| schedule |
| sourceRepo |



<a id="ReleaseUpdatedEvent"></a>

## ReleaseUpdatedEvent

Extends: [RealtimeReleaseEvent](#RealtimeReleaseEvent)

| Field        | Type
| :----------- | :--------
| <code>release</code> | [Release](#Release)



<a id="ReleaseUpdateMetadata"></a>

## ReleaseUpdateMetadata

| Field        | Type
| :----------- | :--------
| <code>comment</code> | string
| <code>keepForever</code> | boolean
| <code>manualEnvironments</code> | array (string)
| <code>status</code> | [ReleaseStatus](#ReleaseStatus)



<a id="ReleaseWorkItemRef"></a>

## ReleaseWorkItemRef

| Field        | Type
| :----------- | :--------
| <code>id</code> | string
| <code>url</code> | string



<a id="RetentionPolicy"></a>

## RetentionPolicy

| Field        | Type
| :----------- | :--------
| <code>daysToKeep</code> | int32



<a id="RetentionSettings"></a>

## RetentionSettings

| Field        | Type
| :----------- | :--------
| <code>daysToKeepDeletedReleases</code> | int32
| <code>defaultEnvironmentRetentionPolicy</code> | [EnvironmentRetentionPolicy](#EnvironmentRetentionPolicy)
| <code>maximumEnvironmentRetentionPolicy</code> | [EnvironmentRetentionPolicy](#EnvironmentRetentionPolicy)



<a id="RunOnServerDeployPhase"></a>

## RunOnServerDeployPhase

Extends: [DeployPhase](#DeployPhase)



<a id="ScheduleDays"></a>

## ScheduleDays

| Enum Value   | Notes
| :----------- | :----------
| none |
| monday |
| tuesday |
| wednesday |
| thursday |
| friday |
| saturday |
| sunday |
| all |



<a id="ScheduledReleaseTrigger"></a>

## ScheduledReleaseTrigger

Extends: [ReleaseTriggerBase](#ReleaseTriggerBase)

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>schedule</code> | [ReleaseSchedule](#ReleaseSchedule) | Release schedule for Scheduled Release trigger type



<a id="SenderType"></a>

## SenderType

| Enum Value   | Notes
| :----------- | :----------
| serviceAccount |
| requestingUser |



<a id="SourceIdInput"></a>

## SourceIdInput

| Field        | Type
| :----------- | :--------
| <code>id</code> | string
| <code>name</code> | string



<a id="SourceRepository"></a>

## SourceRepository

| Field        | Type
| :----------- | :--------
| <code>endpointIdentifier</code> | GUID
| <code>identifier</code> | string
| <code>repositoryType</code> | [SourceRepositoryType](#SourceRepositoryType)



<a id="SourceRepositoryType"></a>

## SourceRepositoryType

| Enum Value   | Notes
| :----------- | :----------
| invalid |
| vstsGit |
| gitHub |



<a id="SourceRepoTrigger"></a>

## SourceRepoTrigger

Extends: [ReleaseTriggerBase](#ReleaseTriggerBase)

| Field        | Type
| :----------- | :--------
| <code>alias</code> | string
| <code>branchFilters</code> | array (string)



<a id="SummaryMailSection"></a>

## SummaryMailSection

| Field        | Type
| :----------- | :--------
| <code>htmlContent</code> | string
| <code>rank</code> | int32
| <code>sectionType</code> | [MailSectionType](#MailSectionType)
| <code>title</code> | string



<a id="TaskInputDefinitionBase"></a>

## TaskInputDefinitionBase

| Field        | Type
| :----------- | :--------
| <code>defaultValue</code> | string
| <code>groupName</code> | string
| <code>helpMarkDown</code> | string
| <code>label</code> | string
| <code>name</code> | string
| <code>options</code> | dictionary (string, string)
| <code>properties</code> | dictionary (string, string)
| <code>required</code> | boolean
| <code>type</code> | string
| <code>visibleRule</code> | string



<a id="TaskOrchestrationPlanGroupReference"></a>

## TaskOrchestrationPlanGroupReference

| Field        | Type
| :----------- | :--------
| <code>planGroup</code> | string
| <code>projectId</code> | GUID



<a id="TaskOrchestrationPlanGroupsStartedEvent"></a>

## TaskOrchestrationPlanGroupsStartedEvent

| Field        | Type
| :----------- | :--------
| <code>planGroups</code> | array ([TaskOrchestrationPlanGroupReference](#TaskOrchestrationPlanGroupReference))



<a id="TaskSourceDefinitionBase"></a>

## TaskSourceDefinitionBase

| Field        | Type
| :----------- | :--------
| <code>authKey</code> | string
| <code>endpoint</code> | string
| <code>keySelector</code> | string
| <code>selector</code> | string
| <code>target</code> | string



<a id="TaskStatus"></a>

## TaskStatus

| Enum Value   | Notes
| :----------- | :----------
| unknown |
| pending |
| inProgress |
| success |
| failure |
| canceled |
| skipped |
| succeeded |
| failed |
| partiallySucceeded |



<a id="TimeZone"></a>

## TimeZone

| Field        | Type
| :----------- | :--------
| <code>displayName</code> | string
| <code>id</code> | string



<a id="TimeZoneList"></a>

## TimeZoneList

| Field        | Type
| :----------- | :--------
| <code>utcTimeZone</code> | [TimeZone](#TimeZone)
| <code>validTimeZones</code> | array ([TimeZone](#TimeZone))



<a id="VariableGroup"></a>

## VariableGroup

| Field        | Type
| :----------- | :--------
| <code>createdBy</code> | [IdentityRef](#IdentityRef)
| <code>createdOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>description</code> | string
| <code>id</code> | int32
| <code>modifiedBy</code> | [IdentityRef](#IdentityRef)
| <code>modifiedOn</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>name</code> | string
| <code>providerData</code> | [VariableGroupProviderData](#VariableGroupProviderData)
| <code>type</code> | string
| <code>variables</code> | dictionary (string, [VariableValue](#VariableValue))



<a id="VariableGroupActionFilter"></a>

## VariableGroupActionFilter

| Enum Value   | Notes
| :----------- | :----------
| none |
| manage |
| use |



<a id="VariableGroupProviderData"></a>

## VariableGroupProviderData



<a id="VariableValue"></a>

## VariableValue

| Field        | Type
| :----------- | :--------
| <code>isSecret</code> | boolean
| <code>value</code> | string



<a id="VssJsonCollectionWrapper&lt;T&gt;"></a>

## VssJsonCollectionWrapper&lt;T&gt;
This class is used to serialized collections as a single JSON object on the wire, to avoid serializing JSON arrays directly to the client, which can be a security hole


Extends: [VssJsonCollectionWrapperBase](#VssJsonCollectionWrapperBase)

| Field        | Type
| :----------- | :--------
| <code>value</code> | T



<a id="VssJsonCollectionWrapperBase"></a>

## VssJsonCollectionWrapperBase

| Field        | Type
| :----------- | :--------
| <code>count</code> | int32



<a id="WorkflowTask"></a>

## WorkflowTask

| Field        | Type
| :----------- | :--------
| <code>alwaysRun</code> | boolean
| <code>continueOnError</code> | boolean
| <code>definitionType</code> | string
| <code>enabled</code> | boolean
| <code>inputs</code> | dictionary (string, string)
| <code>name</code> | string
| <code>overrideInputs</code> | dictionary (string, string)
| <code>taskId</code> | GUID
| <code>timeoutInMinutes</code> | int32
| <code>version</code> | string



<a id="WorkflowTaskReference"></a>

## WorkflowTaskReference

| Field        | Type
| :----------- | :--------
| <code>id</code> | GUID
| <code>name</code> | string
| <code>version</code> | string