---
ms.topic: include
ms.date: 04/04/2022
---

::: moniker range=">= azure-devops-2020"

Feeds have four permission roles: **Feed Reader**, **Feed and Upstream Reader (Collaborator)**, **Feed Publisher (Contributor)**, and **Feed Owner**. Feed Owners can add user accounts or security groups to any role.


| Permission | Feed Reader | Feed and Upstream Reader (Collaborator) | Feed Publisher (Contributor) | Feed Owner |
| ------------------------------------ | --- | --- | --- | --- |
| List packages in the feed            | ✔️ | ✔️ | ✔️ | ✔️ |
| Download/install/restore packages    | ✔️ | ✔️ | ✔️ | ✔️ |
| Save packages from upstream sources  |     | ✔️ | ✔️ | ✔️ |
| Publish packages                     |     |     | ✔️ | ✔️ |
| Promote packages to a view           |     |     | ✔️ | ✔️ |
| Deprecate/unlist/yank packages       |     |     | ✔️ | ✔️ |
| Delete/unpublish packages            |     |     |     | ✔️ |
| Add/remove upstream sources          |     |     |     | ✔️ |
| Allow external package versions      |     |     |     | ✔️ |
| Edit feed settings and permissions   |     |     |     | ✔️ |

By default, the Project Collection Build Service is a Contributor and your project team is a Reader.

> [!NOTE]
> In Azure Artifacts, feeds may be scoped to a single project or to the entire organization.
> To access a project-scoped feed, a user must also have access to the project containing that feed.

::: moniker-end

::: moniker range="< azure-devops-2020"

Feeds have three permission roles: Readers, Contributors, and Owners. Owners can add user accounts or security groups -to any role.


| Permission | Reader | Contributor | Owner |
| ------------------------------------------------------ | --- | --- | --- |
| List and restore/install packages                      | ✔️ | ✔️ | ✔️ |
| Push packages                                          |     | ✔️ | ✔️ |
| Unlist/deprecate packages                              |     | ✔️ | ✔️ |
| Delete/unpublish package                               |     |    | ✔️ |
| Edit feed permissions                                  |     |    | ✔️ | 
| [Rename and delete feed](../../../artifacts/index.yml) |     |    | ✔️ |

By default, the Project Collection Build Service is a Contributor and your project team is a Reader.

> [!NOTE]
> In Azure Artifacts, feeds may be scoped to a single project or to the entire organization.
> To access a project-scoped feed, a user must also have access to the project containing that feed.

::: moniker-end
