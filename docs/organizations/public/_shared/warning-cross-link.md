---
ms.topic: include
---


In Azure DevOps, you can link objects that exist in different projects defined in the same organization. For example, you can link a bug in Project A to a pull request in Project B. If links exist between a public and a private project, details about the linked artifact in the private project are visible within the public project.


The link types used to construct these links&mdash;as illustrated in the following image&mdash;are: Branch, Build, Changeset, Commit, Found in build, Integrated in build, Pull Request, and Versioned Item.

![Cross project link types](/../../boards/queries/_img/link-tracking-artifact-to-artifact-link-types.png)

Five kinds of cross-project links expose content from the private project.

| Link type            | Exposed content         |
|----------------------|-------------------------|
| TFVC                 | Project name, file name |
| Git branch           | Branch name             |
| Wiki page            | File name               |
| Pull request mention | Pull request title      |
| Work item            | Work item title         |

If a work item is moved from a private project into a public project, it has details about the private project stored in its history.

<!-- TODO: link to /accounts/invite-outside-users.md when it lands -->
When you invite someone to become a member of a project, that person gains access to additional resources and details about the account. Specifically, they have access to the following information.

| Area             | Additional details a member receives                     |
|------------------|----------------------------------------------------------|
| Identities       | List of all members added to the organization            |
| Identities       | Contact information included in email address for each user |
| Settings         | Read-only view of all account and project settings       |
| Process metadata | All picklist values in all projects in the account      |
