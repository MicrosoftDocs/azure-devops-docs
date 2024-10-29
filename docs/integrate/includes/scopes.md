| Category | Scope | Name | Description | Inherits From |
| -------- | ----- | ---- | ----------- | --------------|
| **Advanced Security** | `vso.advsec` | AdvancedSecurity (read) | Grants the ability to read alerts, result instances, analysis result instances. |
| | `vso.advsec_write` | AdvancedSecurity (read and write) |Grants the ability to upload analyses in sarif | `vso.advsec` |
| | `vso.advsec_manage` | AdvancedSecurity (read, write, and manage) |Grants the ability to upload analyses in sarif | `vso.advsec_write` |
| **Agent Pools** | `vso.agentpools` | Agent Pools (read) | Grants the ability to view tasks, pools, queues, agents, and currently running or recently completed jobs for agents. |
| | `vso.agentpools_manage` | Agent Pools (read, manage) | Grants the ability to manage pools, queues, and agents. | `vso.agentpools` |
| | `vso.environment_manage` | Environment (read, manage) | Grants the ability to manage pools, queues, agents, and environments. | `vso.agentpools_manage` |
| **Analytics** | `vso.analytics` | Analytics (read) | Grants the ability to query analytics data. |
| **Auditing** | `vso.auditlog` | Audit Log (read) | Grants the ability to read the auditing log to users. |
| | `vso.auditstreams_manage` | Audit Streams (read) | Grants the ability to manage auditing streams to users. | `vso.auditlog` |
| **Build** | `vso.build` | Build (read) | Grants the ability to access build artifacts, including build results, definitions, and requests, and the ability to receive notifications about build events via service hooks. | `vso.hooks_write` |
| | `vso.build_execute` | Build (read and execute) | Grants the ability to access build artifacts, including build results, definitions, and requests, and the ability to queue a build, update build properties, and the ability to receive notifications about build events via service hooks. | `vso.build` |
| **Code** | `vso.code` | Code (read) | Grants the ability to read source code and metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to search code and get notified about version control events via service hooks. | `vso.hooks_write` |
| | `vso.code_write` | Code (read and write) | Grants the ability to read, update, and delete source code, access metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to create and manage pull requests and code reviews and to receive notifications about version control events via service hooks. | `vso.code` |
| | `vso.code_manage` | Code (read, write, and manage) | Grants the ability to read, update, and delete source code, access metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to create and manage code repositories, create and manage pull requests and code reviews, and to receive notifications about version control events via service hooks. | `vso.code_write` |
| | `vso.code_full` | Code (full) | Grants full access to source code, metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to create and manage code repositories, create and manage pull requests and code reviews, and to receive notifications about version control events via service hooks. Also includes limited support for Client OM APIs. | `vso.code_manage` |
| | `vso.code_status` | Code (status) | Grants the ability to read and write commit and pull request status. |
| **Connected Server** | `vso.connected_server` | Connected Server | Grants the ability to access endpoints needed from an on-prem connected server. |
| **Entitlements** | `vso.entitlements` | Entitlements (Read) | Provides read only access to licensing entitlements endpoint to get account entitlements. |
| | `vso.memberentitlementmanagement` | MemberEntitlement Management (read) | Grants the ability to read users, their licenses as well as projects and extensions they can access. |
| | `vso.memberentitlementmanagement_write` | MemberEntitlement Management (write) | Grants the ability to manage users, their licenses as well as projects and extensions they can access. |  `vso.memberentitlementmanagement` |
| **Extensions** | `vso.extension` | Extensions (read) | Grants the ability to read installed extensions. | `vso.profile` |
| | `vso.extension_manage` | Extensions (read and manage) | Grants the ability to install, uninstall, and perform other administrative actions on installed extensions. | `vso.extension` |
| | `vso.extension.data` | Extension data (read) | Grants the ability to read data (settings and documents) stored by installed extensions. | `vso.profile` |
| | `vso.extension.data_write` | Extension data (read and write) | Grants the ability to read and write data (settings and documents) stored by installed extensions. | `vso.extension.data` |
| **Github Connections** | `vso.githubconnections` | GitHub Connections (read) | Grants the ability to read GitHub connections and GitHub repositories data. |
| | `vso.githubconnections_manage` | GitHub Connections (read and manage) | Grants the ability to read and manage GitHub connections and GitHub repositories data | `vso.githubconnections` |
| **Graph & identity** | `vso.graph` | Graph (read) | Grants the ability to read user, group, scope, and group membership information. |
| | `vso.graph_manage` | Graph (manage) | Grants the ability to read user, group, scope and group membership information, and to add users, groups, and manage group memberships. | `vso.graph` |
| | `vso.identity` | Identity (read) | Grants the ability to read identities and groups. |
| | `vso.identity_manage` | Identity (manage) | Grants the ability to read, write, and manage identities and groups. | `vso.identity` |
| **Machine Group** | `vso.machinegroup_manage` | Deployment group (read, manage) | Provides ability to manage deployment group and agent pools. | `vso.agentpools_manage ` |
| **Marketplace** | `vso.gallery` | Marketplace | Grants read access to public and private items and publishers. | `vso.profile` |
| | `vso.gallery_acquire` | Marketplace (acquire) | Grants read access and the ability to acquire items. | `vso.gallery` |
| | `vso.gallery_publish` | Marketplace (publish) | Grants read access and the ability to upload, update, and share items. | `vso.gallery` |
| | `vso.gallery_manage` | Marketplace (manage) | Grants read access and the ability to publish and manage items and publishers. | `vso.gallery_publish` |
| **Notifications** | `vso.notification` | Notifications (read) | Provides read access to subscriptions and event metadata, including filterable field values. | `vso.profile` |
| | `vso.notification_write` | Notifications (write) | Provides read and write access to subscriptions and read access to event metadata, including filterable field values. | `vso.notification` |
| | `vso.notification_manage` | Notifications (manage) | Provides read, write, and management access to subscriptions and read access to event metadata, including filterable field values. | `vso.notification_write` |
| | `vso.notification_diagnostics` | Notifications (diagnostics) | Provides access to notification-related diagnostic logs and provides the ability to enable diagnostics for individual subscriptions. | `vso.notification` |
| **Packaging** | `vso.packaging` | Packaging (read) | Grants the ability to read feeds and packages. | `vso.profile` |
| | `vso.packaging_write` | Packaging (read and write) | Grants the ability to create and read feeds and packages. | `vso.packaging` |
| | `vso.packaging_manage` | Packaging (read, write, and manage) | Grants the ability to create, read, update, and delete feeds and packages. | `vso.packaging_write` |
| **Pipeline Resources** | `vso.pipelineresources_use` | Pipeline Resources (use) | Grants the ability to approve a pipeline's request to use a protected resource: agent pool, environment, queue, repository, secure files, service connection, and variable group. |
| | `vso.pipelineresources_manage` | Pipeline Resources (use and manage) | Grants the ability to manage a protected resource or a pipeline's request to use a protected resource: agent pool, environment, queue, repository, secure files, service connection, and variable group. | `vso.pipelineresources_manage` |
| **Project and Team** | `vso.project` | Project and team (read) | Grants the ability to read projects and teams. |
| | `vso.project_write` | Project and team (read and write) | Grants the ability to read and update projects and teams. | `vso.project` |
| | `vso.project_manage` | Project and team (read, write and manage) | Grants the ability to create, read, update, and delete projects and teams. | `vso.project_write` |
| **Release** | `vso.release` | Release (read) | Grants the ability to read release artifacts, including releases, release definitions and release environment. | `vso.profile` |
| | `vso.release_execute` | Release (read, write and execute) | Grants the ability to read and update release artifacts, including releases, release definitions and release environment, and the ability to queue a new release. | `vso.release` | 
| | `vso.release_manage` | Release (read, write, execute and manage) | Grants the ability to read, update, and delete release artifacts, including releases, release definitions and release environment, and the ability to queue and approve a new release. | `vso.release_manage` |
| **Secure Files** | `vso.securefiles_read` | Secure Files (read) | Grants the ability to read secure files. |
| | `vso.securefiles_write` | Secure Files (read, create) | Grants the ability to read and create secure files. | `vso.securefiles_read` |
| | `vso.securefiles_manage` | Secure Files (read, create, and manage) | Grants the ability to read, create, and manage secure files. | `vso.securefiles_write` |
| **Security** | `vso.security_manage` | Security (manage) | Grants the ability to read, write, and manage security permissions. |
| **Service Connections** | `vso.serviceendpoint` | Service Endpoints (read) | Grants the ability to read service endpoints. | `vso.profile` |
| | `vso.serviceendpoint_query` | Service Endpoints (read and query) | Grants the ability to read and query service endpoints. | `vso.serviceendpoint` |
| | `vso.serviceendpoint_manage` | Service Endpoints (read, query and manage) | Grants the ability to read, query, and manage service endpoints. | `vso.serviceendpoint_query` |
| **Service Hooks** | `vso.hooks` | Service hooks (read) | Grants the ability to read service hook subscriptions and metadata, including supported events, consumers, and actions. (No longer public.) | `vso.profile` |
| | `vso.hooks_write` | Service hooks (read and write) | Grants the ability to create and update service hook subscriptions and read metadata, including supported events, consumers, and actions. (No longer public.) | `vso.hooks` |
| | `vso.hooks_interact` | Service hooks (interact) | Grants the ability to interact and perform actions on events received via service hooks. (No longer public.) | `vso.profile` |
| **Settings** | `vso.settings` | Settings (read) | Grants the ability to read settings. |
| | `vso.settings_write` | Settings (read and write) | Grants the ability to create and read settings. |
| **Symbols** | `vso.symbols` | Symbols (read) | Grants the ability to read symbols. | `vso.profile` |
| | `vso.symbols_write` | Symbols (read and write) | Grants the ability to read and write symbols. | `vso.symbols` |
| | `vso.symbols_manage` | Symbols (read, write and manage) | Grants the ability to read, write, and manage symbols. | `vso.symbols_write` |
| **Task Groups** | `vso.taskgroups_read` | Task Groups (read) | Grants the ability to read task groups. |
| | `vso.taskgroups_write` | Task Groups (read, create) | Grants the ability to read and create task groups. | `vso.taskgroups_read` |
| | `vso.taskgroups_manage` | Task Groups (read, create and manage) | Grants the ability to read, create and manage taskgroups. | `vso.taskgroups_write` |
| **Team Dashboard** | `vso.dashboards` | Team dashboards (read) | Grants the ability to read team dashboard information. |
| | `vso.dashboards_manage` | Team dashboards (manage) | Grants the ability to manage team dashboard information. | `vso.dashboards` |
| **Test Management** | `vso.test` | Test management (read) | Grants the ability to read test plans, cases, results and other test management related artifacts. | `vso.profile` |
| | `vso.test_write` | Test management (read and write) | Grants the ability to read, create, and update test plans, cases, results and other test management related artifacts. | `vso.test` |
| **Threads** | `vso.threads_full` | PR threads | Grants the ability to read and write to pull request comment threads. |
| **Tokens** | `vso.tokens` | Delegated Authorization Tokens | Grants the ability to manage delegated authorization tokens to users. |
| | `vso.tokenadministration` | Token Administration | Grants the ability to manage (view and revoke) existing tokens to organization administrators. |
| **User Profile** | `vso.profile` | User profile (read) | Grants the ability to read your profile, accounts, collections, projects, teams, and other top-level organizational artifacts. |
| | `vso.profile_write` | User profile (write) | Grants the ability to write to your profile. | `vso.profile` |
| **Variable Groups** | `vso.variablegroups_read` | Variable Groups (read) | Grants the ability to read variable groups. |
| | `vso.variablegroups_write` | Variable Groups (read, create) | Grants the ability to read and create variable groups. | `vso.variablegroups_read` |
| | `vso.variablegroups_manage` | Variable Groups (read, create and manage) | Grants the ability to read, create and manage variable groups. | `vso.variablegroups_write` |
| **Wiki** | `vso.wiki` | Wiki (read) | Grants the ability to read wikis, wiki pages and wiki attachments. Also grants the ability to search wiki pages. |
| | `vso.wiki_write` | Wiki (read and write) | Grants the ability to read, create and updates wikis, wiki pages and wiki attachments. | `vso.wiki` |
| **Work Items** | `vso.work` | Work items (read) | Grants the ability to read work items, queries, boards, area and iterations paths, and other work item tracking related metadata. Also grants the ability to execute queries, search work items and to receive notifications about work item events via service hooks. | `vso.hooks_write` |
| | `vso.work_write` | Work items (read and write) | Grants the ability to read, create, and update work items and queries, update board metadata, read area and iterations paths other work item tracking related metadata, execute queries, and to receive notifications about work item events via service hooks. | `vso.work` |
| | `vso.work_full` | Work items (full) | Grants full access to work items, queries, backlogs, plans, and work item tracking metadata. Also provides the ability to receive notifications about work item events via service hooks. | `vso.work_write` |
| **User Impersonation** | `user_impersonation` | User Impersonation | Have full access to Visual Studio Team Services REST APIs. **Request and/or consent this scope with caution as it is very powerful!** |

