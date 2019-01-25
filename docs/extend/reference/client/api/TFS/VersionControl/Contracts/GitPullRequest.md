---
title: TFS/VersionControl/Contracts GitPullRequest API | Extensions for Azure DevOps Services
ms.assetid: 7d0200ed-37a8-aeea-3c2e-c033091ade71
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitPullRequest

Module path: `TFS/VersionControl/Contracts`


### Members

* `_links`: any. 

* `closedDate`: Date. 

* `codeReviewId`: number. 

* `commits`: [GitCommitRef](../../../TFS/VersionControl/Contracts/GitCommitRef.md)[]. 

* `completionOptions`: [GitPullRequestCompletionOptions](../../../TFS/VersionControl/Contracts/GitPullRequestCompletionOptions.md). 

* `completionQueueTime`: Date. 

* `createdBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `creationDate`: Date. 

* `description`: string. 

* `lastMergeCommit`: [GitCommitRef](../../../TFS/VersionControl/Contracts/GitCommitRef.md). 

* `lastMergeSourceCommit`: [GitCommitRef](../../../TFS/VersionControl/Contracts/GitCommitRef.md). 

* `lastMergeTargetCommit`: [GitCommitRef](../../../TFS/VersionControl/Contracts/GitCommitRef.md). 

* `mergeId`: string. 

* `mergeStatus`: [PullRequestAsyncStatus](../../../TFS/VersionControl/Contracts/PullRequestAsyncStatus.md). 

* `pullRequestId`: number. 

* `remoteUrl`: string. 

* `repository`: [GitRepository](../../../TFS/VersionControl/Contracts/GitRepository.md). 

* `reviewers`: [IdentityRefWithVote](../../../TFS/VersionControl/Contracts/IdentityRefWithVote.md)[]. 

* `sourceRefName`: string. 

* `status`: [PullRequestStatus](../../../TFS/VersionControl/Contracts/PullRequestStatus.md). 

* `targetRefName`: string. 

* `title`: string. 

* `upgraded`: boolean. 

* `url`: string. 

* `workItemRefs`: [VSS_Common_Contracts.ResourceRef](../../../VSS/WebApi/Contracts/ResourceRef.md)[]. 

