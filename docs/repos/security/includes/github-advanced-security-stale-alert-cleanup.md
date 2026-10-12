---
title: Automatic cleanup of alerts from stale pipeline configurations
description: Understand how pipeline activity affects code scanning and dependency scanning alert visibility.
ms.topic: include
ms.author: laurajiang
author: laurajjiang
ms.date: 10/10/2026
---

Automatic cleanup hides old scanning results when their pipeline configurations stop running. **It doesn't hide an alert simply because the alert or its branch is more than 90 days old.** This behavior applies to code scanning and dependency scanning alerts.

#### What makes a configuration stale?

Cleanup uses the most recent completion time of the pipeline phase associated with a scanning configuration. A phase becomes stale when that completion time is more than 90 days ago, by default.

Advanced Security marks the pipeline phase record as inactive but retains its results. Then, the alert view hides an alert only when **all latest results associated with that alert come from stale configurations**. If any of those results comes from an active configuration, the alert can still appear.

| Date or activity | Used for the 90-day cleanup? |
|---|---|
| When the alert was first detected | No |
| When the alert was last detected | No |
| When the branch was last scanned | Not independently. Cleanup tracks the associated pipeline phase, which can be shared across branches. |
| The associated pipeline phase's most recent completion time | Yes |

#### Why can an old branch detection remain visible or reappear?

**Different branches can share the same pipeline phase activity record.** When that phase runs again on another branch, Advanced Security updates its completion time and reactivates the associated configurations. As a result, older detections on a branch that hasn't run recently can remain visible or reappear.

For example, consider this sequence:

1. A pipeline phase detects a vulnerability on `develop`.
2. That phase doesn't run on any branch for more than 90 days. After cleanup marks it inactive, Advanced Security hides the alert if it has no latest results from other active configurations.
3. The same phase runs on `feature/update-build`. Advanced Security reactivates its associated configurations, so the older `develop` detection can appear again.

The run on `feature/update-build` doesn't scan `develop`. It changes the shared pipeline phase's activity status, which controls whether Advanced Security shows the older result.

For this reason, an alert can appear with an old first-seen or last-seen date. Those dates describe the detection on the branch, not the pipeline phase's activity status. Reactivating the configuration doesn't make the older result a new detection or require its original first-seen date to change.

#### What should you check?

When an old detection remains visible, review runs of the same pipeline phase across branches, not just the branch shown in the alert. To check whether the vulnerability still exists on that branch, run scanning on that branch.

> [!IMPORTANT]
> Automatic cleanup hides results. It doesn't fix the vulnerability or dismiss the alert. If the associated configuration becomes active again, previously hidden open alerts can return as open alerts.
