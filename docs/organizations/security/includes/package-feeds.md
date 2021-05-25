---
ms.topic: include
---

::: moniker range=">= azure-devops-2020"

Feeds have four permission roles: Readers, Collaborators, Contributors, and Owners. Owners can add user accounts or security groups to any role.

| Permission | Reader | Collaborator | Contributor | Owner |
| ---------- | ------ | ------------ | ----------- | ----- |
| List, install, and restore packages           | ✔️ | ✔️ | ✔️ | ✔️ |
| Push packages                                 |          |          | ✔️ | ✔️ |
| Unlist/deprecate packages                     |          |          | ✔️ | ✔️ |
| Delete/unpublish package                      |          |          |          | ✔️ |
| Promote a package to a view                   |          |          | ✔️ | ✔️ |
| Add/remove upstream sources                   |          |          |          | ✔️ |
| Save packages from upstream sources           |          | ✔️ | ✔️ | ✔️ |
| Edit feed permissions                         |          |          |          | ✔️ |

By default, the Project Collection Build Service is a Contributor and your project team is a Reader.

> [!NOTE]
> To access a feed in a different organization, a user must be given access to the project hosting that feed.

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops-2020"

Feeds have three permission roles: Readers, Contributors, and Owners. Owners can add user accounts or security groups -to any role.


| Permission | Reader | Contributor | Owner |
| ---------- | ------ | ----------- | ----- |
| List and restore/install packages             | ✔️ | ✔️ | ✔️ |
| Push packages                                 |          | ✔️| ✔️ |
| Unlist/deprecate packages                     |          | ✔️ | ✔️ |
| Delete/unpublish package                      |          |          | ✔️ |
| Edit feed permissions                         |          |          | ✔️ | 
| [Rename and delete feed](/azure/devops/artifacts/index)        |          |          | ✔️ |


By default, the Project Collection Build Service is a Contributor and your project team is a Reader.

> [!NOTE]
> To access a feed in a different organization, a user must be given access to the project hosting that feed.

::: moniker-end
