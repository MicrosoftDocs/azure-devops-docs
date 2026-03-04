---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 3/05/2026
ms.topic: include
---

### Auto-complete pull requests by default

We’ve added a new repository setting: **Set PRs to auto-complete on creation by default**.

> [![Screenshot of new repository setting.](../../media/270-general-01.png "Screenshot of new repository setting.")](../../media/270-general-01.png#lightbox)

This setting controls the default state of the **Set auto-complete** toggle for newly created pull requests.

When this setting is enabled, every new PR will automatically have Set auto-complete turned on.
When it’s disabled, new PRs will start with Set auto-complete turned off, and authors can choose to enable it manually.

> [![Screenshot of new pull request showing set auto complete.](../../media/270-general-02.png "Screenshot of new pull request showing set auto complete.")](../../media/270-general-02.png#lightbox)

To turn on this setting, go to **Project settings → Repositories → Settings**. You can enable it for the entire project so all repositories use the same configuration, or update it directly within an individual repository’s settings.