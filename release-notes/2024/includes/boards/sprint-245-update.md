---
author: ckanyika
ms.author: ckanyika
ms.date: 9/25/2024
ms.topic: include
---

### AB# links on GitHub pull requests

As part of our ongoing enhancements to the Azure Boards + GitHub integration, we've introduced a feature that improves the experience with AB# links. With this update, your AB# links now appear directly in the Development section of GitHub pull requests. This allows you to view linked work items without needing to navigate through descriptions or comments, providing easier and more efficient access to AB# links.

> [!div class="mx-imgBorder"]
> ![Screenshot of GitHub pull requests.](../../media/245-boards-01.png "Screenshot of GitHub pull requests.")

These links will only be available when you use AB# in the pull the request description. They won't show up if you link directly from the pull request from the work item. Removing the AB# link from the description will also remove it from the Development control.

### REST API Support for Connecting GitHub Repositories

We are excited to announce a set of REST API endpoints for customers who want to automate the addition and removal of GitHub repositories for an Azure DevOps project. Additionally, we have raised the limit from 500 to 2,000 repositories per connection when using these REST endpoints.

These endpoints include:

* [Listing current connections](https://learn.microsoft.com/en-us/rest/api/azure/devops/wit/github-connections/get-github-connections?view=azure-devops-rest-7.2&tabs=HTTP)
* [Listing connected repositories](https://learn.microsoft.com/en-us/rest/api/azure/devops/wit/github-connections/get-github-connection-repositories?view=azure-devops-rest-7.2&tabs=HTTP)
* [Adding and removing repositories](https://learn.microsoft.com/en-us/rest/api/azure/devops/wit/github-connections/update?view=azure-devops-rest-7.2&tabs=HTTP)

We have also [provided sample code](https://github.com/danhellem/github-boards-connection-sample) to help you get started.

### Permanently delete attachments

Simply removing an attachment from a work item might not be enough, especially if the file is flagged as malicious. The link to the file could still be shared across multiple work items, comments, or even external channels, leaving it accessible for download. As part of our security improvements, we've introduced a new feature that allows users with "Permanently delete work items" permissions to permanently delete work item attachments.

> [!div class="mx-imgBorder"]
> ![Screenshot of permanently delete work item attachments.](../../media/245-boards-02.png "Screenshot of permanently delete work item attachments.")

This action can be performed from the **Attachments** tab on the work item form, under a new section called "Deleted Attachments." This section will only be visible to users with the appropriate permission for permanently deleting work items.

Once an attachment is permanently deleted, all associated links will return a "File attachment does not exist" error.

> [!NOTE]
> This feature is only available in the New Boards Hub.