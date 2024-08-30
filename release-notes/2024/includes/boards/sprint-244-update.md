---
author: ckanyika
ms.author: ckanyika
ms.date: 9/4/2024
ms.topic: include
---

### Cut and paste images

TBD 

### Area and iteration level fields

Area and iteration level fields have long been a valuable part of the product, allowing users to query or display results based on the specific levels at which they are defined:

*(Root) Level 1 / Level 2 / Level 3 / etc.* 

Previously, these fields were only accessible to a select few organizations. We are pleased to announce that area and iteration level fields will now be available to all Azure DevOps organizations. These fields can be used in queries and displayed as backlog columns. However, please note that they are not supported in settings such as style rules, swim lane rules, card fields, and delivery plan fields.

This feature is only available in the [New Boards Hub preview](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-202-update#new-boards-hubs-now-available-in-public-preview).


### REST API Support for Connecting GitHub Repositories

We are excited to announce a set of REST API endpoints for customers who want to automate the addition and removal of GitHub repositories for an Azure DevOps project. Additionally, we have raised the limit from 500 to 2,000 repositories per connection when using these REST endpoints.

These endpoints include:

* Listing current connections
* Listing connected repositories
* Adding and removing repositories

We have also [provided sample code](https://github.com/danhellem/github-boards-connection-sample) to help you get started.

