---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Cloud Load Test Types | REST API Reference for Visual Studio Team Services 
description: Work with Cloud Load Test programmatically using the REST APIs for Visual Studio Team Services .
ms.assetid: 8415ad80-dfa7-4a4a-82d3-a013433ad5e9
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Load test types
[!INCLUDE [API_version](../_data/version.md)]

Types used in the Cloud Load Test APIs. Note that some of the objects have shallow variants. The shallow forms of the objects are usually returned by the list APIs and are embedded as reference in other object types. For example, Test Run has a reference to Test Drop shallow variant.

### Application Configuration
| Field Name | Type | Description |
|:-----------|:-----|:----------------|
| type | enum { 'ApplicationInsights' } | The type of the APM plugin used to provide the application specific counter samples |
| isEnabled | bool | True if application results collection is enabled for this account |
| maxComponentsAllowedForCollection | integer | Maximum number of application components allowed for collection per load test run |
| maxCountersAllowed | integer | Maximum number of counters allowed for collection per load test run |
| actionUriLink | Url | Helper link url |
| autPortalLink | Url | Link to the APM portal |

### Application Component
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| type | enum { 'ApplicationInsights' } | The type of the APM plugin used to provide the application specific counter samples |
| applicationId | string | Unique identifier of the application component |
| name | string | The Name of the application component |
| description | string | The description of the application component
| path | string | Path identifier of the application component |
| pathSeperator | string | Path separator character used in counter paths |
| version | string | Version string of the form {Major}.{Minor} |

### Application Counter
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| id | string | Unique identifier of the application counter |
| applicationId | string | Unique identifier of the application component |
| path | string | Path identifier of the application counter |
| name | string | The Name of the application counter |
| description | string | The description of the application counter |
| isDefault | bool | Specifies if the counter samples are collected by default |

### Test Run
<a name="testrun" />

| Field Name | Type | Description |
|:----------|:-----|:----------------|
| **Shallow**
| id | string | The unique identifier of the test run |
| accountId | string | The account ID of the account |
| name | string | User provided test run name including the extension, e.g., StormBing.loadtest |
| runNumber | integer | Rolling number of the run, scoped to the run name |
| state | string | State of the test run e.g., Pending |
| createdBy | [User](#user) | Details of the user who created the test run |
| createdDate | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Default format is ISO 8601 e.g., 2013-11-18T10:22:23.7576345Z, |
| finishedDate | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Default format is ISO 8601 e.g., 2013-11-18T10:22:23.7576345Z, |
| runSpecificDetails | [RunDetails](#testrundetails) | Run specific details |
| url | string | The url to the detailed test run. |
| **Details**
| description | string | User provided description of the test run e.g., null, |
| queuedDate | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Default format is ISO 8601 e.g., 2013-11-18T10:22:23.7576345Z, |
| startedDate | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Default format is ISO 8601 e.g., 2013-11-18T10:22:23.7576345Z, |
| warmUpStartedDate | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Default format is ISO 8601 e.g., 2013-11-18T10:22:23.7576345Z, |
| executionStartedDate | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Default format is ISO 8601 e.g., 2013-11-18T10:22:23.7576345Z, |
| executionFinishedDate | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Default format is ISO 8601 e.g., 2013-11-18T10:22:23.7576345Z, |
| chargeable | bool | If the test run is chargeable, e.g., false |
| subState | string  | Substate, a fire-grained state, of the test run e.g., ValidatingTestRun |
| testSettings | [TestSettings](#testsettings) | Test settings used for this run |
| testDrop | [TestDrop](./test-drops.md) | Shallow reference to the Test Drop |
| loadGenerationGeoLocations | Array | Array of [LoadGenerationGeoLocations](#loadGenerationGeoLocations) |
| startedBy | [User](#user) | Details of the user who started the test run |
| stoppedBy | [User](#user) | Details of the user who stopped the test run |
| testMessages | [Test Run Message](#testrunmessage) | List of important notification messages in the test run |
| abortMessage | string | The message associated with the abrupt termination of the test run |
| stopped | bool | Is the test is still being run |

### Test Drop
<a name="testdrop" />
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| id | string | The unique identifier of the test drop. |
| testRunId | string | The test run using this test drop. |
| createdDate | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Default format is ISO 8601 e.g., 2013-11-18T10:22:23.7576345Z, |
| dropType | string | The test drop type. Current support is limited to "TestServiceBlobDrop" |
| accessData | [Test Drop Access Key](#testdropaccesskey) | Test drop blob access details |

### Test Drop Access Key
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| sasKey | string | The Azure Storage shared access signature (SAS) key |
| dropContainerUrl | Url| The base URL of the test drop blob storage |

### Test Run Details
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| duration | integer | Duration of the run in seconds. e.g., 3600 indicates one hour long load test run. |
| warmUpDuration | integer | Warm up duration of the run in seconds. e.g., 300 indicates five minutes of warm up. |
| virtualUserCount | integer | Number of virtual users in the load test run. |
| coreCount | integer | Number of machine cores to be used for the load test run. This is used as a hint. |
| samplingInterval | integer | Sampling interval in seconds. e.g., 30 directs that counters should be collected every 30 seconds. |

### Key Performance Indicator
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| groupName | string | The display name of the group, usually a set of key performance indicators, e.g., Performance or Throughput |
| counterInstances | [Counter Instance](#counterinstance) | List of counter instances in the group in the test run |

### Counter Instance
<a name="counterinstance" />
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| account Id | integer | The identifier of the counter instance |
| machineName | string | The logical machine name of the counter source, e.g., ELSCONTROLLER or Agent03 |
| categoryName | string | The category of the counter, which is used to visually arrange them as a tree, e.g, LoadTest:Scenario  |
| counterName | string | Display name of the counter, e.g, User Load |
| counterUnits | string | Display units of the counter, e.g., sec or vusers |
| account Name | string | Display name of the counter instance, e.g., _Total_ |
| cumulativeValue | float | The aggregate value of the counter instance |

### Counter Sample
<a name="countersample" />
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| account Id | integer | The identifier of the [Counter Instance](#counterinstance) |
| intervalNumber | integer | The logical interval number during the test run. These start at zero and increment every sampling interval |
| intervalEndTime | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | The actual end time of the interval in UTC |
| rawValue | float | The raw value of the counter sample at this interval |
| baseValue | float | The base value of the counter sample at this interval |
| computedValue | float | The computed value of the counter sample at this interval |
| counterFrequency | integer | The sampling frequency for this counter instance, in Ticks |
| systemFrequency | integer | The sampling frequency for the system counters, in Ticks |
| counterType | string | The closest matching type of this counter instance according to Windows performance counters taxonomy |
| timeStamp | integer | The near exact timestamp when this counter instance is sampled, in Ticks |

### Test Settings
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| cleanupCommand | string | Batch script to execute after the test run |
| setupCommand | string | Batch script to execute before the test run |
| hostProcessPlatform | string | The target platform for the test run, as understood by the test execution engine |

### User
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| id | string | Unique identifier of the user as provided by the Identity service |
| displayName | string | Display name of the user |
| uniqueName | string | Unique name of the user when available, e.g., email or alias |
| url | string | URL to the user identity |

### Test Run Message
<a name="testrunmessage" />
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| messageId | string | e.g., 5085405b-0b8f-4f80-af1b-1aeca629decd, |
| testRunId | string | e.g., 854a7b79-efd3-4e48-b6b2-6b99b1adc731, |
| agentId | string | e.g., agent01 |
| messageType | string | e.g., info, warning, critical |
| messageSource | string | Source of the message. Few well-known sources include: validation, execution, apm, and other. |
| logTime | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Default format is ISO 8601 e.g., 2013-11-18T10:22:26.1022012Z |
| message | string | e.g., This run was requested by 'Normal Paulk' using the Team Foundation Service Account 'Fabrikam-Fiber' |

### Test Result
<a name="testresult" />
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| resultsUrl | Url | Url to the archived test results, if available. |
| counterGroups | Array | Array of [Counter Group](#countergroup) |

### Counter Group
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| groupName | string | Name of the group. |
| url | url | Url to query counter instances belonging to this group. |

### Load Generation Geo Locations
| Field Name | Type | Description |
|:----------|:-----|:----------------|
| location | string | [Azure region](https://azure.microsoft.com/en-us/regions/#overview) |
| percentage | integer | The percentage of the load being generated from the Azure region |

