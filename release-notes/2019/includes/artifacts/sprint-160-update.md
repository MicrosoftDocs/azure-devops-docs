---
ms.topic: include
---

### Updated Connect to feed experience

The Connect to feed dialog is the entryway to using Azure Artifacts; it contains information on how to configure clients and repositories to push and pull packages from feeds in Azure DevOps. We've updated the dialog to add detailed set-up information and expanded the tools we give instructions for.

### Public feeds are now generally available with upstream support

The public preview of public feeds has received great adoption and feedback. In this update, we extended additional features to general availability. Now, you can set a public feed as an upstream source from a private feed. You can keep your config files simple by being able to upstream both to and from private and project-scoped feeds.

### Create project-scoped feeds from the portal

When we released public feeds, we also released [project-scoped feeds](/azure/devops/artifacts/concepts/feeds?view=azure-devops&preserve-view=true). Until now, project-scoped feeds could be created via REST APIs or by creating a public feed and then turning the project private. Now, you can create project-scoped feeds directly in the portal from any project if you have the required permissions. You can also see which feeds are project and which are organization-scoped in the feed picker.