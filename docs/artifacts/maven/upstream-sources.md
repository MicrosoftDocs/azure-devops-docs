---
title: Use packages from Maven Central
description: How to use packages from upstreams
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 12/15/2021
monikerRange: '=azure-devops'
---

# Use packages from Maven Central

**Azure DevOps Services | Azure DevOps Server 2019 | Azure DevOps Server 2020**

With upstream sources, you can use both private packages you've created and public packages from Maven Central. When you enable upstream sources in your feed, Azure Artifacts will save a copy of any packages you install from Maven central.

> [!NOTE]
> Maven snapshots are not supported in upstream sources.

## Enable Maven Central as an upstream
To use Maven Central as an upstream source, either create a new feed or edit an existing feed.

### On a new feed

1. [Create a new feed](../index.yml). Ensure you leave the "Use packages from public sources through this feed" radio button selected.

### On an existing feed

1. Edit your feed. Select the **gear icon** in the top right of the page to open feed settings.
2. Select the **Upstream sources** pivot.
3. Select **Add upstream source** in the CommandBar.
4. Select **Select a feed URL** and select **Maven Central (https://repo.maven.apache.org/maven2/)**. If you like, customize the upstream name.
5. Select **Add**.

## Filter to saved packages

You can see the packages you have saved in your feed by selecting the appropriate Source filter.

![Viewing your cached packages](media/view-cached-packages.png)