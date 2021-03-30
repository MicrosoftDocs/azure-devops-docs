---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 03/03/2021
ms.topic: include
---

### PAT lifecycle management API (private preview)

We're happy to announce the release of new APIs to manage the lifecycle of Personal Access Tokens (PATs) in Azure DevOps. This rich set of APIs allows your team to simplify the management of the PATs they own, offering them new functionality, such as creating new personal access tokens with a desired scope and duration, and renewing or expiring existing ones.

Today, the primary way for you to manage PATs (Personal Access Tokens) is through the UI or by using a limited set of APIs intended only for Project Collection Administrators. This new API unlocks the ability for organizations to set up automation involving PATs, including setting up build pipelines or interacting with work items.

The PAT lifecycle management API is now available for organizations to use in private preview.

Please <a href="mailto:angelwong@github.com">reach out to us</a> with your use case and your Azure DevOps organization to get access to the API and documentation. We appreciate any feedback you can offer on how this API has helped your organization or can be further improved to meet your needs!


### Token management events now in Audit Logs

Personal Access Tokens (PATs) and SSH Keys enable you and your teammates to authenticate with Azure DevOps in a non-interactive way. Many of you have expressed the need to understand by whom and how these tokens are used in order to prevent malicious activity by unauthorized users. With this release, new events will be added to the Audit Logs whenever these tokens are successfully created, updated, revoked, and/or removed.

To see these new events, head over to the Auditing page through your Organizations’ settings page. For additional information on these new events and all available events in your Audit Logs, please see our [documentation](/azure/devops/organizations/audit/azure-devops-auditing?preserve-view=true&tabs=preview-page&view=azure-devops).

### Limit user visibility and collaboration to specific projects

In this sprint, we're releasing a public preview feature to enable organization administrators in Azure DevOps to restrict users from seeing and collaborating with users in different projects. This feature will bring another level of isolation and access control to projects. Your early feedback will help us improve the experience.

By default, users added to an organization can view all organization metadata and settings. This includes viewing the list of users in the organization, list of projects, billing details, usage data, and anything that's accessible through the organization settings. Additionally, users can use the various people-pickers to search for, view, select, and tag all other organization members, even if these users are not in the same project.

To restrict users from this information, you can enable the **Limit user visibility and collaboration to specific projects** [preview feature for your organization](/azure/devops/project/navigation/preview-features?preserve-view=true&tabs=new-account-enabled&view=azure-devops#enable-features-at-the-organization-level-for-all-users). Once enabled, the **Project-Scoped Users** group, an organization-level security group, will be added to your Azure DevOps organization. Users and groups added to this new group (which can be found by navigating to the Organization Settings -> Permissions) will have two limitations: Hidden organization settings and limited people-picker search and tagging. 

#### Hidden Organization Settings
Users added to the "**Project-Scoped Users**" group are restricted from accessing the **Organization Settings** pages, except for **Overview** and Projects, and are restricted to only viewing data from projects where they belong.

#### Limited people-picker search and tagging
Using the various people pickers in the product, users and groups added to the “Project-Scoped Users” group will only be able to search for, view, select, and tag members who are also members of the project they’re currently in.