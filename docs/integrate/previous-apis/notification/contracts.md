---
title: Notification API Contracts | VSTS
ms.assetid: 9889e558-78df-e571-6884-75fdfd014546
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
generated: true
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 04/21/2017
---

# Notification API Contracts

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]



<a id="ArtifactFilter"></a>

## ArtifactFilter

Extends: [BaseSubscriptionFilter](#BaseSubscriptionFilter)

| Field        | Type
| :----------- | :--------
| <code>artifactId</code> | string
| <code>artifactType</code> | string
| <code>artifactUri</code> | string
| <code>type</code> | string



<a id="BaseSubscriptionFilter"></a>

## BaseSubscriptionFilter

| Field        | Type
| :----------- | :--------
| <code>eventType</code> | string
| <code>type</code> | string



<a id="BatchNotificationOperation"></a>

## BatchNotificationOperation

| Field        | Type
| :----------- | :--------
| <code>notificationOperation</code> | [NotificationOperation](#NotificationOperation)
| <code>notificationQueryConditions</code> | array ([NotificationQueryCondition](#NotificationQueryCondition))



<a id="EvaluationOperationStatus"></a>

## EvaluationOperationStatus
Describes the subscription evaluation operation status.


| Enum Value   | Notes
| :----------- | :----------
| notSet | The operation object does not have the status set.
| queued | The operation has been queued.
| inProgress | The operation is in progress.
| cancelled | The operation was cancelled by the user.
| succeeded | The operation completed successfully.
| failed | The operation completed with a failure.
| timedOut | The operation timed out.
| notFound | The operation could not be found.



<a id="EventActor"></a>

## EventActor
Defines an "actor" for an event.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>id</code> | GUID | Required: This is the identity of the user for the specified role.
| <code>role</code> | string | Required: The event specific name of a role.



<a id="EventScope"></a>

## EventScope
Defines a scope for an event.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>id</code> | GUID | Required: This is the identity of the scope for the type.
| <code>type</code> | string | Required: The event specific type of a scope.



<a id="EventsEvaluationResult"></a>

## EventsEvaluationResult
Encapsulates events result properties. It defines the total number of events used and the number of matched events.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>count</code> | int32 | Count of events evaluated.
| <code>matchedCount</code> | int32 | Count of matched events.



<a id="ExpressionFilterClause"></a>

## ExpressionFilterClause
Subscription Filter Clause represents a single clause in a subscription filter e.g. If the subscription has the following criteria "Project Name = [Current Project] AND Assigned To = [Me] it will be represented as two Filter Clauses Clause 1: Index = 1, Logical Operator: NULL  , FieldName = 'Project Name', Operator = '=', Value = '[Current Project]' Clause 2: Index = 2, Logical Operator: 'AND' , FieldName = 'Assigned To' , Operator = '=', Value = '[Me]'


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>fieldName</code> | string |
| <code>index</code> | int32 | The order in which this clause appeared in the filter query
| <code>logicalOperator</code> | string | Logical Operator 'AND', 'OR' or NULL (only for the first clause in the filter)
| <code>operator</code> | string |
| <code>value</code> | string |



<a id="ExpressionFilterGroup"></a>

## ExpressionFilterGroup
Represents a hierarchy of SubscriptionFilterClauses that have been grouped together through either adding a group in the WebUI or using parenthesis in the Subscription condition string


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>end</code> | int32 | The index of the last FilterClause in this group
| <code>level</code> | int32 | Level of the group, since groups can be nested for each nested group the level will increase by 1
| <code>start</code> | int32 | The index of the first FilterClause in this group



<a id="ExpressionFilterModel"></a>

## ExpressionFilterModel

| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>clauses</code> | array ([ExpressionFilterClause](#ExpressionFilterClause)) | Flat list of clauses in this subscription
| <code>groups</code> | array ([ExpressionFilterGroup](#ExpressionFilterGroup)) | Grouping of clauses in the subscription
| <code>maxGroupLevel</code> | int32 | Max depth of the Subscription tree



<a id="FieldInputValues"></a>

## FieldInputValues

Extends: [InputValues](#InputValues)

| Field        | Type
| :----------- | :--------
| <code>operators</code> | array (byte)



<a id="FieldValuesQuery"></a>

## FieldValuesQuery

Extends: [InputValuesQuery](#InputValuesQuery)

| Field        | Type
| :----------- | :--------
| <code>inputValues</code> | array ([FieldInputValues](#FieldInputValues))
| <code>scope</code> | string



<a id="IdentityRef"></a>

## IdentityRef

| Field        | Type
| :----------- | :--------
| <code>displayName</code> | string
| <code>id</code> | string
| <code>imageUrl</code> | string
| <code>inactive</code> | boolean
| <code>isAadIdentity</code> | boolean
| <code>isContainer</code> | boolean
| <code>profileUrl</code> | string
| <code>uniqueName</code> | string
| <code>url</code> | string



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



<a id="ISubscriptionChannel"></a>

## ISubscriptionChannel

| Field        | Type
| :----------- | :--------
| <code>type</code> | string



<a id="ISubscriptionFilter"></a>

## ISubscriptionFilter

| Field        | Type
| :----------- | :--------
| <code>eventType</code> | string
| <code>type</code> | string



<a id="NotificationEventField"></a>

## NotificationEventField
Encapsulates the properties of a filterable field. A filterable field is a field in an event that can used to filter notifications for a certain event type.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>fieldType</code> | [NotificationEventFieldType](#NotificationEventFieldType) | Gets or sets the type of this field.
| <code>id</code> | string | Gets or sets the unique identifier of this field.
| <code>name</code> | string | Gets or sets the name of this field.
| <code>path</code> | string | Gets or sets the path to the field in the event object. This path can be either Json Path or XPath, depending on if the event will be serialized into Json or XML
| <code>supportedScopes</code> | array (string) | Gets or sets the scopes that this field supports. If not specified then the event type scopes apply.



<a id="NotificationEventFieldType"></a>

## NotificationEventFieldType
Encapsulates the properties of a field type. It describes the data type of a field, the operators it support and how to populate it in the UI


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>id</code> | string | Gets or sets the unique identifier of this field type.
| <code>operatorConstraints</code> | array ([OperatorConstraint](#OperatorConstraint)) |
| <code>operators</code> | array (string) | Gets or sets the list of operators that this type supports.
| <code>value</code> | [ValueDefinition](#ValueDefinition) | Gets or sets the value definition of this field like the getValuesMethod and template to display in the UI



<a id="NotificationEventPublisher"></a>

## NotificationEventPublisher
Encapsulates the properties of a notification event publisher.


| Field        | Type
| :----------- | :--------
| <code>id</code> | string
| <code>subscriptionManagementInfo</code> | [SubscriptionManagement](#SubscriptionManagement)
| <code>url</code> | string



<a id="NotificationEventRole"></a>

## NotificationEventRole
Encapsulates the properties of an event role.  An event Role is used for role based subscription for example for a buildCompletedEvent, one role is request by field


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>id</code> | string | Gets or sets an Id for that role, this id is used by the event.
| <code>name</code> | string | Gets or sets the Name for that role, this name is used for UI display.
| <code>supportsGroups</code> | boolean | Gets or sets whether this role can be a group or just an individual user



<a id="NotificationEventType"></a>

## NotificationEventType
Encapsulates the properties of an event type. It defines the fields, that can be used for filtering, for that event type.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>category</code> | [NotificationEventTypeCategory](#NotificationEventTypeCategory) |
| <code>color</code> | string | Gets or sets the color representing this event type. Example: rgb(128,245,211) or #fafafa
| <code>customSubscriptionsAllowed</code> | boolean |
| <code>eventPublisher</code> | [NotificationEventPublisher](#NotificationEventPublisher) |
| <code>fields</code> | dictionary (string, [NotificationEventField](#NotificationEventField)) |
| <code>hasInitiator</code> | boolean |
| <code>icon</code> | string | Gets or sets the icon representing this event type. Can be a URL or a CSS class. Example: css://some-css-class
| <code>id</code> | string | Gets or sets the unique identifier of this event definition.
| <code>name</code> | string | Gets or sets the name of this event definition.
| <code>roles</code> | array ([NotificationEventRole](#NotificationEventRole)) |
| <code>supportedScopes</code> | array (string) | Gets or sets the scopes that this event type supports
| <code>url</code> | string | Gets or sets the rest end point to get this event type details (fields, fields types)



<a id="NotificationEventTypeCategory"></a>

## NotificationEventTypeCategory
Encapsulates the properties of a category. A category will be used by the UI to group event types


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>id</code> | string | Gets or sets the unique identifier of this category.
| <code>name</code> | string | Gets or sets the friendly name of this category.



<a id="NotificationOperation"></a>

## NotificationOperation

| Enum Value   | Notes
| :----------- | :----------
| none |
| suspendUnprocessed |



<a id="NotificationQueryCondition"></a>

## NotificationQueryCondition

| Field        | Type
| :----------- | :--------
| <code>eventInitiator</code> | GUID
| <code>eventType</code> | string
| <code>subscriber</code> | GUID
| <code>subscriptionId</code> | string



<a id="NotificationsEvaluationResult"></a>

## NotificationsEvaluationResult
Encapsulates notifications result properties. It defines the number of notifications and the recipients of notifications.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>count</code> | int32 | Count of generated notifications



<a id="NotificationStatistic"></a>

## NotificationStatistic

| Field        | Type
| :----------- | :--------
| <code>date</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>hitCount</code> | int32
| <code>path</code> | string
| <code>type</code> | [NotificationStatisticType](#NotificationStatisticType)
| <code>user</code> | [IdentityRef](#IdentityRef)



<a id="NotificationStatisticsQuery"></a>

## NotificationStatisticsQuery

| Field        | Type
| :----------- | :--------
| <code>conditions</code> | array ([NotificationStatisticsQueryConditions](#NotificationStatisticsQueryConditions))



<a id="NotificationStatisticsQueryConditions"></a>

## NotificationStatisticsQueryConditions

| Field        | Type
| :----------- | :--------
| <code>date</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx)
| <code>hitCountMinimum</code> | int32
| <code>path</code> | string
| <code>type</code> | [NotificationStatisticType](#NotificationStatisticType)
| <code>user</code> | [IdentityRef](#IdentityRef)



<a id="NotificationStatisticType"></a>

## NotificationStatisticType

| Enum Value   | Notes
| :----------- | :----------
| notificationBySubscription |
| eventsByEventType |
| notificationByEventType |
| eventsByEventTypePerUser |
| notificationByEventTypePerUser |
| events |
| notifications |
| hourlyRangeStart |
| hourlyNotificationBySubscription |
| hourlyEventsByEventTypePerUser |
| hourlyEvents |
| hourlyNotifications |



<a id="NotificationSubscription"></a>

## NotificationSubscription
A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>_links</code> | [ReferenceLinks](#ReferenceLinks) | Links to related resources, APIs, and views for the subscription.
| <code>adminSettings</code> | [SubscriptionAdminSettings](#SubscriptionAdminSettings) | Admin-managed settings for the subscription. Only applies when the subscriber is a group.
| <code>channel</code> | [ISubscriptionChannel](#ISubscriptionChannel) | Channel for delivering notifications triggered by the subscription.
| <code>description</code> | string | Description of the subscription. Typically describes filter criteria which helps identity the subscription.
| <code>filter</code> | [ISubscriptionFilter](#ISubscriptionFilter) | Matching criteria for the subscription.
| <code>flags</code> | [SubscriptionFlags](#SubscriptionFlags) | Read-only indicators that further describe the subscription.
| <code>id</code> | string | Subscription identifier.
| <code>lastModifiedBy</code> | [IdentityRef](#IdentityRef) | User that last modified (or created) the subscription.
| <code>modifiedDate</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx) | Date when the subscription was last modified. If the subscription has not been updated since it was created, this value will indicate when the subscription was created.
| <code>permissions</code> | [SubscriptionPermissions](#SubscriptionPermissions) | The permissions the user have for this subscriptions.
| <code>scope</code> | [SubscriptionScope](#SubscriptionScope) | The container in which events must be published from in order to be matched by the subscription. If empty, the scope is the current host (typically an organization or project collection). For example, a subscription scoped to project A will not produce notifications for events published from project B.
| <code>status</code> | [SubscriptionStatus](#SubscriptionStatus) | Status of the subscription. Typically indicates whether the subscription is enabled or not.
| <code>statusMessage</code> | string | Message that provides more details about the status of the subscription.
| <code>subscriber</code> | [IdentityRef](#IdentityRef) | User or group that will receive notifications for events matching the subscription's filter criteria.
| <code>url</code> | string | REST API URL of the subscription.
| <code>userSettings</code> | [SubscriptionUserSettings](#SubscriptionUserSettings) | User-managed settings for the subscription. Only applies when the subscriber is a group. Typically used to indicate whether the calling user is opted in or out of a group subscription.



<a id="NotificationSubscriptionCreateParameters"></a>

## NotificationSubscriptionCreateParameters
Parameters for creating a new subscription. A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>channel</code> | [ISubscriptionChannel](#ISubscriptionChannel) | Channel for delivering notifications triggered by the new subscription.
| <code>description</code> | string | Brief description for the new subscription. Typically describes filter criteria which helps identity the subscription.
| <code>filter</code> | [ISubscriptionFilter](#ISubscriptionFilter) | Matching criteria for the new subscription.
| <code>scope</code> | [SubscriptionScope](#SubscriptionScope) | The container in which events must be published from in order to be matched by the new subscription. If not specified, defaults to the current host (typically an organization or project collection). For example, a subscription scoped to project A will not produce notifications for events published from project B.
| <code>subscriber</code> | [IdentityRef](#IdentityRef) | User or group that will receive notifications for events matching the subscription's filter criteria. If not specified, defaults to the calling user.



<a id="NotificationSubscriptionTemplate"></a>

## NotificationSubscriptionTemplate

| Field        | Type
| :----------- | :--------
| <code>description</code> | string
| <code>filter</code> | [ISubscriptionFilter](#ISubscriptionFilter)
| <code>id</code> | string
| <code>notificationEventInformation</code> | [NotificationEventType](#NotificationEventType)
| <code>type</code> | [SubscriptionTemplateType](#SubscriptionTemplateType)



<a id="NotificationSubscriptionUpdateParameters"></a>

## NotificationSubscriptionUpdateParameters
Parameters for updating an existing subscription. A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events. Note: only the fields to be updated should be set.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>adminSettings</code> | [SubscriptionAdminSettings](#SubscriptionAdminSettings) | Admin-managed settings for the subscription. Only applies to subscriptions where the subscriber is a group.
| <code>channel</code> | [ISubscriptionChannel](#ISubscriptionChannel) | Channel for delivering notifications triggered by the subscription.
| <code>description</code> | string | Updated description for the subscription. Typically describes filter criteria which helps identity the subscription.
| <code>filter</code> | [ISubscriptionFilter](#ISubscriptionFilter) | Matching criteria for the subscription.
| <code>scope</code> | [SubscriptionScope](#SubscriptionScope) | The container in which events must be published from in order to be matched by the new subscription. If not specified, defaults to the current host (typically the current organization or project collection). For example, a subscription scoped to project A will not produce notifications for events published from project B.
| <code>status</code> | [SubscriptionStatus](#SubscriptionStatus) | Updated status for the subscription. Typically used to enable or disable a subscription.
| <code>statusMessage</code> | string | Optional message that provides more details about the updated status.
| <code>subscriber</code> | [IdentityRef](#IdentityRef) | User or group that will receive notifications for events matching the subscription's filter criteria.
| <code>userSettings</code> | [SubscriptionUserSettings](#SubscriptionUserSettings) | User-managed settings for the subscription. Only applies to subscriptions where the subscriber is a group. Typically used to opt-in or opt-out a user from a group subscription.



<a id="OperatorConstraint"></a>

## OperatorConstraint
Encapsulates the properties of an operator constraint. An operator constraint defines if some operator is available only for specific scope like a project scope.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>operator</code> | string |
| <code>supportedScopes</code> | array (string) | Gets or sets the list of scopes that this type supports.



<a id="ReferenceLinks"></a>

## ReferenceLinks
The class to represent a collection of REST reference links.  Example: { self: { href: "http://localhost:8080/tfs/DefaultCollection/_apis/wit/workItems/1" } }


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>links</code> | dictionary (string, object) | The readonly view of the links.  Because Reference links are readonly, we only want to expose them as read only.



<a id="SubscriptionAdminSettings"></a>

## SubscriptionAdminSettings
Admin-managed settings for a group subscription.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>blockUserOptOut</code> | boolean | If true, members of the group subscribed to the associated subscription cannot opt (choose not to get notified)



<a id="SubscriptionChannelWithAddress"></a>

## SubscriptionChannelWithAddress

| Field        | Type
| :----------- | :--------
| <code>address</code> | string
| <code>type</code> | string
| <code>useCustomAddress</code> | boolean



<a id="SubscriptionEvaluationRequest"></a>

## SubscriptionEvaluationRequest
Encapsulates the properties of a SubscriptionEvaluationRequest. It defines the subscription to be evaluated and time interval for events used in evaluation.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>minEventsCreatedDate</code> | [date-time](http://msdn.microsoft.com/library/az4se3k1.aspx) | The min created date for the events used for matching in UTC. Use all events created since this date
| <code>subscriptionCreateParameters</code> | [NotificationSubscriptionCreateParameters](#NotificationSubscriptionCreateParameters) | User or group that will receive notifications for events matching the subscription's filter criteria. If not specified, defaults to the calling user.



<a id="SubscriptionEvaluationResult"></a>

## SubscriptionEvaluationResult
Encapsulates the subscription evaluation results. It defines the Date Interval that was used, number of events evaluated and events and notifications results


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>evaluationJobStatus</code> | [EvaluationOperationStatus](#EvaluationOperationStatus) | Subscription evaluation job status
| <code>events</code> | [EventsEvaluationResult](#EventsEvaluationResult) | Subscription evaluation events results.
| <code>id</code> | GUID | The requestId which is the subscription evaluation jobId
| <code>notifications</code> | [NotificationsEvaluationResult](#NotificationsEvaluationResult) | Subscription evaluation  notification results.



<a id="SubscriptionEvaluationSettings"></a>

## SubscriptionEvaluationSettings
Encapsulates the subscription evaluation settings needed for the UI


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>enabled</code> | boolean | Indicates whether subscription evaluation before saving is enabled or not
| <code>interval</code> | int32 | Time interval to check on subscription evaluation job in seconds
| <code>threshold</code> | int32 | Threshold on the number of notifications for considering a subscription too noisy
| <code>timeOut</code> | int32 | Time out for the subscription evaluation check in seconds



<a id="SubscriptionFlags"></a>

## SubscriptionFlags
Read-only indicators that further describe the subscription.


| Enum Value   | Notes
| :----------- | :----------
| none | None
| groupSubscription | Subscription's subscriber is a group, not a user
| contributedSubscription | Subscription is contributed and not persisted. This means certain fields of the subscription, like Filter, are read-only.
| canOptOut | A user that is member of the subscription's subscriber group can opt in/out of the subscription.
| teamSubscription | If the subscriber is a group, is it a team.



<a id="SubscriptionManagement"></a>

## SubscriptionManagement
Encapsulates the properties needed to manage subscriptions, opt in and out of subscriptions.


| Field        | Type
| :----------- | :--------
| <code>serviceInstanceType</code> | GUID
| <code>url</code> | string



<a id="SubscriptionPermissions"></a>

## SubscriptionPermissions
The permissions that a user has to a certain subscription


| Enum Value   | Notes
| :----------- | :----------
| none | None
| view | full view of description, filters, etc. Not limited.
| edit | update subscription
| delete | delete subscription



<a id="SubscriptionQuery"></a>

## SubscriptionQuery
Notification subscriptions query input.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>conditions</code> | array ([SubscriptionQueryCondition](#SubscriptionQueryCondition)) | One or more conditions to query on. If more than 2 conditions are specified, the combined results of each condition is returned (i.e. conditions are logically OR'ed).
| <code>queryFlags</code> | [SubscriptionQueryFlags](#SubscriptionQueryFlags) | Flags the refine the types of subscriptions that will be returned from the query.



<a id="SubscriptionQueryCondition"></a>

## SubscriptionQueryCondition
Conditions a subscription must match to qualify for the query result set. Not all fields are required. A subscription must match all conditions specified in order to qualify for the result set.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>filter</code> | [ISubscriptionFilter](#ISubscriptionFilter) | Filter conditions that matching subscriptions must have. Typically only the filter's type and event type are used for matching.
| <code>flags</code> | [SubscriptionFlags](#SubscriptionFlags) | Flags to specify the type of subscriptions to query for.
| <code>scope</code> | string | Scope that matching subscriptions must have.
| <code>subscriberId</code> | GUID | ID of the subscriber (user or group) that matching subscriptions must be subscribed to.
| <code>subscriptionId</code> | string | ID of the subscription to query for.



<a id="SubscriptionQueryFlags"></a>

## SubscriptionQueryFlags
Flags that influence the result set of a subscription query.


| Enum Value   | Notes
| :----------- | :----------
| none |
| includeInvalidSubscriptions | Include subscriptions with invalid subscribers.
| includeDeletedSubscriptions | Include subscriptions marked for deletion.
| includeFilterDetails | Include the full filter details with each subscription.
| alwaysReturnBasicInformation | For a subscription the caller does not have permission to view, return basic (non-confidential) information.



<a id="SubscriptionScope"></a>

## SubscriptionScope
A resource, typically an organization or project, in which events are published from.


Extends: [EventScope](#EventScope)

| Field        | Type
| :----------- | :--------
| <code>name</code> | string



<a id="SubscriptionStatus"></a>

## SubscriptionStatus
Subscription status values. A value greater than or equal to zero indicates the subscription is enabled. A negative value indicates the subscription is disabled.


| Enum Value   | Notes
| :----------- | :----------
| jailedByNotificationsVolume | Subscription is disabled because it generated a high volume of notifications.
| pendingDeletion | Subscription is disabled and will be deleted.
| disabledBySystem | Subscription is disabled service due to failures.
| disabledInactiveIdentity | Subscription is disabled because the identity is no longer active
| disabledMessageQueueNotSupported | Subscription is disabled because message queue is not supported.
| disabledMissingIdentity | Subscription is disabled because its subscriber is unknown.
| disabledInvalidRoleExpression | Subscription is disabled because it has an invalid role expression.
| disabledInvalidPathClause | Subscription is disabled because it has an invalid filter expression.
| disabledAsDuplicateOfDefault | Subscription is disabled because it is a duplicate of a default subscription.
| disabledByAdmin | Subscription is disabled by an administrator, not the subscription's subscriber.
| disabled | Subscription is disabled, typically by the owner of the subscription, and will not produce any notifications.
| enabled | Subscription is active.
| enabledOnProbation | Subscription is active, but is on probation due to failed deliveries or other issues with the subscription.



<a id="SubscriptionTemplateType"></a>

## SubscriptionTemplateType

| Enum Value   | Notes
| :----------- | :----------
| user |
| team |
| both |
| none |



<a id="SubscriptionUserSettings"></a>

## SubscriptionUserSettings
User-managed settings for a group subscription.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>optedOut</code> | boolean | Indicates whether the user will receive notifications for the associated group subscription.



<a id="ValueDefinition"></a>

## ValueDefinition
Encapsulates the properties of a field value definition. It has the information needed to retrieve the list of possible values for a certain field and how to handle that field values in the UI. This information includes what type of object this value represents, which property to use for UI display and which property to use for saving the subscription


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>dataSource</code> | array (object) | Gets or sets the data source.
| <code>endPoint</code> | string | Gets or sets the rest end point.
| <code>resultTemplate</code> | string | Gets or sets the result template.



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



<a id="VssNotificationEvent"></a>

## VssNotificationEvent
This is the type used for firing notifications intended for the subsystem in the Notifications SDK. For components that can't take a dependency on the Notifications SDK directly, they can use ITeamFoundationEventService.PublishNotification and the Notifications SDK ISubscriber implementation will get it.


| Field        | Type      | Notes
| :----------- | :-------- | :----------
| <code>actors</code> | array ([EventActor](#EventActor)) | Optional: A list of actors which are additional identities with corresponding roles that are relevant to the event.
| <code>artifactUris</code> | array (string) | Optional: A list of artifacts referenced or impacted by this event.
| <code>data</code> | object | Required: The event payload.  If Data is a string, it must be in Json or XML format.  Otherwise it must have a serialization format attribute.
| <code>eventType</code> | string | Required: The name of the event.  This event must be registered in the context it is being fired.
| <code>scopes</code> | array ([EventScope](#EventScope)) | Optional: A list of scopes which are relevant to the event.