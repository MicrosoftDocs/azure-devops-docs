---
author: ckanyika
ms.author: ckanyika
ms.date: 3/28/2023
ms.topic: include
---

### REST API support for connecting GitHub repositories (private preview)

The [Azure Boards-GitHub integration](/azure/devops/boards/github/?view=azure-devops&preserve-view=true) has been available for several years now. It enables the linking between GitHub commits, pull requests, and issues to work items in Boards.  However, the current integration is limited to connecting 250 GitHub repositories to a project and there is no API support.

We are happy to announce a limited private preview for those customers who are reaching the limits of the current implementation and would like to add more than 250 GitHub repositories to a project. The preview gets you access to a set of new REST APIs that will allow you to build your own tooling to link up to 2,000 repositories per connection.

These endpoints include:
* List of current connections
* List of connected repositories
* Add and remove repositories

We will provide all the documentation and code samples to help you on-board into the new APIs. If you are interested in participating in the private preview, please [email us directly](mailto:dahellem@microsoft.com). Be sure to include your organization name (dev.azure.com/{organization}).

### Swimlane rules (private preview)

Swimlane rules are similar to style rules, but instead, they allow you to setup conditions on your Kanban board to automatically move work items into specific lanes. For example, you might want to setup a lane for each person on your team. When you assign the work item, it will be placed into that lane.

> [!div class="mx-imgBorder"]
> ![Gif to demo editing of shareable picklist fields.](../../media/219-boards-01.gif "gif to demo editing of shareable picklist fields")

The feature is one of the top voted items in the work item space and we are excited to finally bring it to customers. 

We are taking a limited number of requests to be added to a private preview to help us ensure it is ready for production. If you are interested in getting early access to the feature, [send us an email](mailto:%20dahellem@microsoft.com). Please include the name of your organization (dev.azure.com/{organization}).

[Community suggestion ticket](https://developercommunity.visualstudio.com/t/swimlanes-rules/365710)

> [!NOTE]
> This feature will only be available with the [**New Boards Hubs** preview](https://devblogs.microsoft.com/devops/new-boards-hub-public-preview/).