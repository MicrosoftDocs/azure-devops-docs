| Scope | Name        | Description        | Included by |
|:----- | ----------- | ------------------ | ----------- |
| <code>vso.agentpools_manage</code> | Agent Pools (read, manage) | Grants the ability to manage pools, queues, and agents |  |
| <code>vso.agentpools</code> | Agent Pools (read) | Grants the ability to view tasks, pools, queues, agents, and currently running or recently completed jobs for agents | vso.agentpools_manage |
| <code>vso.build</code> | Build (read) | Grants the ability to access build artifacts, including build results, pipelines, and requests, and the ability to receive notifications about build events via service hooks. | vso.build_execute |
| <code>vso.build_execute</code> | Build (read and execute) | Grants the ability to access build artifacts, including build results, pipelines, and requests, and the ability to queue a build, update build properties, and the ability to receive notifications about build events via service hooks. |  |
| <code>vso.chat_write</code> | Team rooms (read and write) | Grants the ability to access rooms and view, post, and update messages. Also grants the ability to receive notifications about new messages via service hooks. | vso.chat_manage |
| <code>vso.chat_manage</code> | Team rooms (read, write, and manage) | Grants the ability to access rooms and view, post, and update messages. Also grants the ability to manage rooms and users and to receive notifications about new messages via service hooks. |  |
| <code>vso.code</code> | Code (read) | Grants the ability to read source code and metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to get notified about version control events via service hooks. | vso.code_write<br>vso.code_manage |
| <code>vso.code_write</code> | Code (read and write) | Grants the ability to read, update, and delete source code, access metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to create and manage pull requests and code reviews and to receive notifications about version control events via service hooks. | vso.code_manage |
| <code>vso.code_status</code> | Code (status) | Grants the ability to read and write commit and pull request status. |  |
| <code>vso.code_manage</code> | Code (read, write, and manage) | Grants the ability to read, update, and delete source code, access metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to create and manage code repositories, create and manage pull requests and code reviews, and to receive notifications about version control events via service hooks. |  |
| <code>vso.dashboards_manage</code> | Team dashboards (manage) | Grants the ability to manage team dashboard information |  |
| <code>vso.dashboards</code> | Team dashboards (read) | Grants the ability to read team dashboard information |  |
| <code>vso.entitlements</code> | Entitlements (Read) | Provides read only access to VSTS licensing entitlements endpoint to get account entitlements. |  |
| <code>vso.extension</code> | Extensions (read) | Grants the ability to read installed extensions. | vso.extension_manage |
| <code>vso.extension_manage</code> | Extensions (read and manage) | Grants the ability to install, uninstall, and perform other administrative actions on installed extensions. |  |
| <code>vso.extension.data</code> | Extension data (read) | Grants the ability to read data (settings and documents) stored by installed extensions. | vso.extension.data_write |
| <code>vso.extension.data_write</code> | Extension data (read and write) | Grants the ability to read and write data (settings and documents) stored by installed extensions. |  |
| <code>vso.gallery</code> | Marketplace | Grants read access to public and private items and publishers. | vso.gallery_publish<br>vso.gallery_manage<br>vso.gallery_acquire |
| <code>vso.gallery_acquire</code> | Marketplace (acquire) | Grants read access and the ability to acquire items. |  |
| <code>vso.gallery_publish</code> | Marketplace (publish) | Grants read access and the ability to upload, update, and share items. | vso.gallery_manage |
| <code>vso.gallery_manage</code> | Marketplace (manage) | Grants read access, the ability to publish and manage items and publishers. |  |
| <code>vso.graph_write</code> | Graph (read and write) | Grants the ability to read user, group, scope, and group membership information, and to add users and groups and manage group memberships. |  |
| <code>vso.graph</code> | Graph (read) | Grants the ability to read users, group, scope, and group membership information. |  |
| <code>vso.identity</code> | Identity (read) | Grants the ability to read identities and groups. |  |
| <code>vso.notification</code> | Notifications (read) | Provides read access to subscriptions and event metadata, including filterable field values. | vso.notification_write<br>vso.notification_manage |
| <code>vso.notification_write</code> | Notifications (write) | Provides read/write access to subscriptions and read access to event metadata, including filterable field values. | vso.notification_manage |
| <code>vso.notification_manage</code> | Notifications (manage) | Provides read, write, and management access to subscriptions and read access to event metadata, including filterable field values. |  |
| <code>vso.packaging</code> | Packaging (read) | Grants the ability to read feeds and packages. | vso.packaging_write<br>vso.packaging_manage |
| <code>vso.packaging_write</code> | Packaging (read and write) | Grants the ability to create and read feeds and packages. | vso.packaging_manage |
| <code>vso.packaging_manage</code> | Packaging (read, write, and manage) | Grants the ability to create, read, update, and delete feeds and packages. |  |
| <code>vso.profile</code> | User profile (read) | Grants the ability to read your profile, accounts, collections, projects, teams, and other top-level organizational artifacts. | vso.extension<br>vso.extension_manage<br>vso.extension.data<br>vso.extension.data_write<br>vso.gallery<br>vso.gallery_acquire<br>vso.gallery_publish<br>vso.gallery_manage<br>vso.notification<br>vso.notification_write<br>vso.notification_manage<br>vso.packaging<br>vso.packaging_write<br>vso.packaging_manage<br>vso.profile_write<br>vso.release<br>vso.release_execute<br>vso.release_manage<br>vso.test<br>vso.test_write |
| <code>vso.profile_write</code> | User profile (write) | Grants the ability to write to your profile. |  |
| <code>vso.project</code> | Project and team (read) | Grants the ability to read projects and teams. | vso.project_write<br>vso.project_manage |
| <code>vso.project_write</code> | Project and team (read and write) | Grants the ability to read and update projects and teams. | vso.project_manage |
| <code>vso.project_manage</code> | Project and team (read, write, and manage) | Grants the ability to create, read, update, and delete projects and teams. |  |
| <code>vso.release</code> | Release (read) | Grants the ability to read release artifacts, including releases, release pipelines and release environment. | vso.release_execute<br>vso.release_manage |
| <code>vso.release_execute</code> | Release (read, write and execute) | Grants the ability to read and update release artifacts, including releases, release pipelines and release envrionment, and the ability to queue a new release. | vso.release_manage |
| <code>vso.release_manage</code> | Release (read, write, execute and manage) | Grants the ability to read, update and delete release artifacts, including releases, release pipelines and release envrionment, and the ability to queue and approve a new release. |  |
| <code>vso.symbols</code> | Symbols (read) | Grants the ability to read symbols. | vso.symbols_write<br>vso.symbols_manage |
| <code>vso.symbols_write</code> | Symbols (read and write) | Grants the ability to read and write symbols. | vso.symbols_manage |
| <code>vso.symbols_manage</code> | Symbols (read, write and manage) | Grants the ability to read, write and manage symbols. | |
| <code>vso.test</code> | Test management (read) | Grants the ability to read test plans, cases, results and other test management related artifacts. | vso.test_write |
| <code>vso.test_write</code> | Test management (read and write) | Grants the ability to read, create, and update test plans, cases, results and other test management related artifacts. |  |
| <code>vso.work</code> | Work items (read) | Grants the ability to read work items, queries, boards, area and iterations paths, and other work item tracking related metadata. Also grants the ability to execute queries and to receive notifications about work item events via service hooks. | vso.work_write |
| <code>vso.work_write</code> | Work items (read and write) | Grants the ability to read, create, and update work items and queries, update board metadata, read area and iterations paths other work item tracking related metadata, execute queries, and to receive notifications about work item events via service hooks. |  |

