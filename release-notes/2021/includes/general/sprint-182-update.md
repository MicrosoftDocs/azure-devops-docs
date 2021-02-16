---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 02/04/2021
ms.topic: include
---

### Limit user visibility and collaboration to specific projects

In this sprint, we're releasing a public preview feature to enable organization administrators in Azure DevOps to restrict users from seeing and collaborating with users in different projects. This feature will bring another level of isolation and access control to projects. We can't wait for you to get in and try it for yourselves. Your early feedback will help us improve the experience.

By default, users added to an organization can view all organization metadata and settings. This includes viewing the list of users in the organization, list of projects, billing details, usage data, and anything that's accessible through the organization settings. Additionally, users can use the various people-picker to search for, view, select, and tag all other organization members, even if these users are not in the same project.

To restrict select users from this information, you can enable the **Limit user visibility** for your organization's projects from the preview feature. Once enabled, users or groups added to the **Project-Scoped Users** group will have two limitations: Hidden organization settings and limited people-picker search and tagging.


### Hidden Organization Settings

Users added to the "**Project-Scoped Users**" group are restricted from accessing the **Organization Settings** pages, except for **Overview** and Projects, and are restricted to only viewing data from projects where they belong.

### Limited people-picker search and tagging

Using the various people pickers in the product, users and groups added to the "**Project-Scoped Users**" group will only be able to search for, view, select, and tag members who are also members of that same project.

> [Important notice]
> Note that the current restrictions are on the user interface only; users will still be able to use the REST APIs to produce or construe the restricted data.

**Feedback**

Please [email us](mailto:parsa.zand@microsoft.com) directly with any questions, comments or issues you may have. We take your input seriously and read every bit of feedback. We’re very excited for you all to try this out and let us know what you think! 
