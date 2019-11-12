| Category | Scope | Name | Description |
| -------- | ----- | ---- | ----------- |
| **Agent Pools** | `vso.agentpools` | Agent Pools (read) | Grants the ability to view tasks, pools, queues, agents, and currently running or recently completed jobs for agents. |
| | `vso.agentpools_manage` | Agent Pools (read, manage) | Grants the ability to manage pools, queues, and agents. |
| **Build** | `vso.build` | Build (read) | Grants the ability to access build artifacts, including build results, definitions, and requests, and the ability to receive notifications about build events via service hooks. |
| | `vso.build_execute` | Build (read and execute) | Grants the ability to access build artifacts, including build results, definitions, and requests, and the ability to queue a build, update build properties, and the ability to receive notifications about build events via service hooks. |
| **Code** | `vso.code` | Code (read) | Grants the ability to read source code and metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to search code and get notified about version control events via service hooks. |
| | `vso.code_write` | Code (read and write) | Grants the ability to read, update, and delete source code, access metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to create and manage pull requests and code reviews and to receive notifications about version control events via service hooks. |
| | `vso.code_manage` | Code (read, write, and manage) | Grants the ability to read, update, and delete source code, access metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to create and manage code repositories, create and manage pull requests and code reviews, and to receive notifications about version control events via service hooks. |
| | `vso.code_full` | Code (full) | Grants full access to source code, metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to create and manage code repositories, create and manage pull requests and code reviews, and to receive notifications about version control events via service hooks. Also includes limited support for Client OM APIs. |
| | `vso.code_status` | Code (status) | Grants the ability to read and write commit and pull request status. |
| **Entitlements** | `vso.entitlements` | Entitlements (Read) | Provides read only access to licensing entitlements endpoint to get account entitlements. |
| | `vso.memberentitlementmanagement` | MemberEntitlement Management (read) | Grants the ability to read users, their licenses as well as projects and extensions they can access. |
| | `vso.memberentitlementmanagement_write` | MemberEntitlement Management (write) | Grants the ability to manage users, their licenses as well as projects and extensions they can access. |
| **Extensions** | `vso.extension` | Extensions (read) | Grants the ability to read installed extensions. |
| | `vso.extension_manage` | Extensions (read and manage) | Grants the ability to install, uninstall, and perform other administrative actions on installed extensions. |
| | `vso.extension.data` | Extension data (read) | Grants the ability to read data (settings and documents) stored by installed extensions. |
| | `vso.extension.data_write` | Extension data (read and write) | Grants the ability to read and write data (settings and documents) stored by installed extensions. |
| **Graph & identity** | `vso.graph` | Graph (read) | Grants the ability to read user, group, scope, and group membership information. |
| | `vso.graph_manage` | Graph (manage) | Grants the ability to read user, group, scope and group membership information, and to add users, groups, and manage group memberships. |
| | `vso.identity` | Identity (read) | Grants the ability to read identities and groups. |
| | `vso.identity_manage` | Identity (manage) | Grants the ability to read, write, and manage identities and groups. |
| **Load Test** | `vso.loadtest` | Load test (read) | Grants the ability to read your load test runs, test results, and APM artifacts. |
| | `vso.loadtest_write` | Load test (read and write) | Grants the ability to create and update load test runs, and read metadata including test results and APM artifacts. |
| **Machine Group** | `vso.machinegroup_manage` | Deployment group (read, manage) | Provides ability to manage deployment group and agent pools. |
| **Marketplace** | `vso.gallery` | Marketplace | Grants read access to public and private items and publishers. |
| | `vso.gallery_acquire` | Marketplace (acquire) | Grants read access and the ability to acquire items. |
| | `vso.gallery_publish` | Marketplace (publish) | Grants read access and the ability to upload, update, and share items. |
| | `vso.gallery_manage` | Marketplace (manage) | Grants read access and the ability to publish and manage items and publishers. |
| **Notifications** | `vso.notification` | Notifications (read) | Provides read access to subscriptions and event metadata, including filterable field values. |
| | `vso.notification_write` | Notifications (write) | Provides read and write access to subscriptions and read access to event metadata, including filterable field values. |
| | `vso.notification_manage` | Notifications (manage) | Provides read, write, and management access to subscriptions and read access to event metadata, including filterable field values. |
| | `vso.notification_diagnostics` | Notifications (diagnostics) | Provides access to notification-related diagnostic logs and provides the ability to enable diagnostics for individual subscriptions. |
| **Packaging** | `vso.packaging` | Packaging (read) | Grants the ability to read feeds and packages. |
| | `vso.packaging_write` | Packaging (read and write) | Grants the ability to create and read feeds and packages. |
| | `vso.packaging_manage` | Packaging (read, write, and manage) | Grants the ability to create, read, update, and delete feeds and packages. |
| **Project and Team** | `vso.project` | Project and team (read) | Grants the ability to read projects and teams. |
| | `vso.project_write` | Project and team (read and write) | Grants the ability to read and update projects and teams. |
| | `vso.project_manage` | Project and team (read, write and manage) | Grants the ability to create, read, update, and delete projects and teams. |
| **Release** | `vso.release` | Release (read) | Grants the ability to read release artifacts, including releases, release definitions and release environment. |
| | `vso.release_execute` | Release (read, write and execute) | Grants the ability to read and update release artifacts, including releases, release definitions and release environment, and the ability to queue a new release. |
| | `vso.release_manage` | Release (read, write, execute and manage) | Grants the ability to read, update, and delete release artifacts, including releases, release definitions and release environment, and the ability to queue and approve a new release. |
| **Security** | `vso.security_manage` | Security (manage) | Grants the ability to read, write, and manage security permissions. |
| **Service Connections** | `vso.serviceendpoint` | Service Endpoints (read) | Grants the ability to read service endpoints. |
| | `vso.serviceendpoint_query` | Service Endpoints (read and query) | Grants the ability to read and query service endpoints. |
| | `vso.serviceendpoint_manage` | Service Endpoints (read, query and manage) | Grants the ability to read, query, and manage service endpoints. |
| **Symbols** | `vso.symbols` | Symbols (read) | Grants the ability to read symbols. |
| | `vso.symbols_write` | Symbols (read and write) | Grants the ability to read and write symbols. |
| | `vso.symbols_manage` | Symbols (read, write and manage) | Grants the ability to read, write, and manage symbols. |
| **Task Groups** | `vso.taskgroups_read` | Task Groups (read) | Grants the ability to read task groups. |
| | `vso.taskgroups_write` | Task Groups (read, create) | Grants the ability to read and create task groups. |
| | `vso.taskgroups_manage` | Task Groups (read, create and manage) | Grants the ability to read, create and manage taskgroups. |
| **Team Dashboard** | `vso.dashboards` | Team dashboards (read) | Grants the ability to read team dashboard information. |
| | `vso.dashboards_manage` | Team dashboards (manage) | Grants the ability to manage team dashboard information. |
| **Test Management** | `vso.test` | Test management (read) | Grants the ability to read test plans, cases, results and other test management related artifacts. |
| | `vso.test_write` | Test management (read and write) | Grants the ability to read, create, and update test plans, cases, results and other test management related artifacts. |
| **Tokens** | `vso.tokens` | Delegated Authorization Tokens | Grants the ability to manage delegated authorization tokens to users. |
| | `vso.tokenadministration` | Token Administration | Grants the ability to manage (view and revoke) existing tokens to organization administrators. |
| **User Profile** | `vso.profile` | User profile (read) | Grants the ability to read your profile, accounts, collections, projects, teams, and other top-level organizational artifacts. |
| | `vso.profile_write` | User profile (write) | Grants the ability to write to your profile. |
| **Variable Groups** | `vso.variablegroups_read` | Variable Groups (read) | Grants the ability to read variable groups. |
| | `vso.variablegroups_write` | Variable Groups (read, create) | Grants the ability to read and create variable groups. |
| | `vso.variablegroups_manage` | Variable Groups (read, create and manage) | Grants the ability to read, create and manage variable groups. |
| **Wiki** | `vso.wiki` | Wiki (read) | Grants the ability to read wikis, wiki pages and wiki attachments. Also grants the ability to search wiki pages. |
| | `vso.wiki_write` | Wiki (read and write) | Grants the ability to read, create and updates wikis, wiki pages and wiki attachments. |
| **Work Items** | `vso.work` | Work items (read) | Grants the ability to read work items, queries, boards, area and iterations paths, and other work item tracking related metadata. Also grants the ability to execute queries, search work items and to receive notifications about work item events via service hooks. |
| | `vso.work_write` | Work items (read and write) | Grants the ability to read, create, and update work items and queries, update board metadata, read area and iterations paths other work item tracking related metadata, execute queries, and to receive notifications about work item events via service hooks. |
| | `vso.work_full` | Work items (full) | Grants full access to work items, queries, backlogs, plans, and work item tracking metadata. Also provides the ability to receive notifications about work item events via service hooks. |

