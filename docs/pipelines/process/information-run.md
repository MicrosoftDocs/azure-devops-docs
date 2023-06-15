---
title: Informational runs
description: What are informational runs
ms.topic: reference
ms.assetid: 96a52d0d-5e01-4b30-818d-1893387522cd
ms.author: sandrica
author: silviuandrica
ms.date: 05/31/2022
monikerRange: 'azure-devops'
---

# Informational runs

[!INCLUDE [header](../includes/information-run-include.md)]

## When is an informational run created?

The first step of running a YAML pipeline is to retrieve its source code. When this step fails, the system creates an informational run. These runs are created only if the pipeline's code is in a GitHub or BitBucket repository.

Retrieving a pipeline's YAML code can fail due to: 
- Repository provider experiencing an outage
- Request throttling
- Authentication issues
- Unable to retrieve the content of the pipeline's `.yml` file

A pipeline may run in response to:
- Pushes to branches in its `trigger` branch list
- Creating or updating Pull Requests that target branches in its `pr` branch list
- Scheduled runs
- Webhooks called
- Resource repository updates
- Resource external builds complete
- Resource pipelines complete
- New resource package versions are available
- Resource containers changes

Here's an example of when an informational run is created. Suppose you have a repo in your local BitBucket Server and a pipeline that builds the code in that repo. Assume you scheduled your pipeline to run every day, at 03:00. Now, imagine it's 03:00 and your BitBucket Server is experiencing an outage. Azure DevOps reaches out to your local BitBucket Server to fetch the pipeline's YAML code, but it can't, because of the outage. At this moment, the system creates an informational run, similar to the one shown in the previous screenshot.

Request throttling by the git repository provider is a frequent cause of Azure DevOps Services creating an informational run. Throttling occurs when Azure DevOps makes too many requests to the repository in a short amount of time. These requests can be due to a spike in commit activity, for example. Throttling issues are transitory.

## Next Steps

Learn more about [Triggers](../build/triggers.md) and building your [GitHub](../repos/github.md) or [BitBucket](../repos/bitbucket.md) repositories.
