---
author: ckanyika
ms.author: ckanyika
ms.date: 9/4/2024
ms.topic: include
---

### Permanently delete attachments

Removing an attachment from a work item may not be sufficient if the file is considered malicious. This is because the link to that file could be shared across multiple work items, in comments, or even externally, making it still accessible for download. As part of our security improvements initiative, we've added the ability for collection administrators to permanently delete work item attachments.

This can be done through attachments tab on the work item form.

### REST API Support for Connecting GitHub Repositories

We are excited to announce a set of REST API endpoints for customers who want to automate the addition and removal of GitHub repositories for an Azure DevOps project. Additionally, we have raised the limit from 500 to 2,000 repositories per connection when using these REST endpoints.

These endpoints include:

Listing current connections
Listing connected repositories
Adding and removing repositories
We have also [provided sample code](https://github.com/danhellem/github-boards-connection-sample) to help you get started.

