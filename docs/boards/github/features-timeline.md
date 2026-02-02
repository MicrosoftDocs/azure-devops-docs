---
title: Features timeline and roadmap
description: Learn about upcoming and recently released features for Azure Boards integration with GitHub.
ms.date: 01/21/2026
ms.topic: overview
#Customer intent: As a developer or project manager, I want to stay informed about new and upcoming Azure Boards integration features with GitHub to plan my project workflows and take advantage of the latest capabilities.
---

# Integration with GitHub features timeline and roadmap

## Roadmap

The following section describes new features that are in development for our Azure Boards integration with GitHub.

 - **Custom Agents for Coding Agent**: When using the Coding Agent from a work item, users will be able to select from a set of custom agents.

 - **Remote MCP Server**: We are introducing a hosted, remote MCP Server that exposes a limited set of tools from the local Azure DevOps MCP Server. This initial release will focus on core platform capabilities and the most commonly used work item tools, allowing customers to integrate with Azure DevOps without running or managing a local MCP Server.

 - **Limit Increase**: The current limit of GitHub repositories that can be connected to a single Azure Boards project will be increased from 1,000 to 2,000 repositories, providing greater flexibility for larger organizations and complex GitHub integrations.


## Delivered Features

### GitHub Copilot Coding Agent for Azure Boards

The GitHub Copilot integration for Azure Boards enables teams to move more seamlessly from planning to implementation by generating code changes directly from Azure Boards work items. 

From a work item, developers can invoke Copilot, select a target GitHub repository and branch, and create a draft pull request that remains linked to the original work item, providing end-to-end traceability from work tracking to code.

> [![Screenshot for create draft PR from work item.](/azure/devops/release-notes/2026/media/268-boards-01.png "Screenshot for create draft PR from work item..")](/azure/devops/release-notes/2026/media/268-boards-01.png#lightbox)


#### Azure DevOps local MCP Server

The **local MCP Server for Azure DevOps** provides enhanced login and authorization, new and refined tools, and introduces "domains" to help scope tools and manage client limits. 

The Azure DevOps MCP Server acts as a bridge between AI assistants like GitHub Copilot and Azure DevOps, allowing users to securely access and interact with work items, wikis, test plans, and more within their own environment. 

Visit the [Azure DevOps MCP Server repository](https://github.com/microsoft/azure-devops-mcp) for installation instructions, examples, and contribution guidelines.

#### Bug fixes improving GitHub integration and security

This sprint, we resolved several critical bugs to improve the security and reliability of Azure Boards GitHub integrations:

*   Fixed multiple issues related to access token handling, including inability to revoke tokens, use of over-permissive scopes, and lack of token verification
*   Addressed privilege escalation vulnerabilities in both the GitHub connection and branch creation flows    
*   Removed persistent storage of GitHub PATs after disconnection to prevent unintended access    
*   Eliminated use of wildcard origins in CORS configuration to enforce stricter security controls    
*   Improved secret management by rotating GitHub client secrets and stopping global sharing across organizations    
*   Enhanced logging and auditability when removing service connections    
*   Resolved potential information leaks caused by misconfigured webhooks

#### GitHub Integration: Pull Request Mentions

You can now use `!` mentions to reference and discuss GitHub pull requests directly from any large text field or comment.  

> [!div class="mx-imgBorder"]
> ![Gif to github pull request mentions.](/azure/devops/release-notes/2025/media/256-boards-02.gif "gif to github pull request mentions.")

#### GitHub Integration: State Transition Support

We expanded support for linking GitHub pull requests to Azure Boards work items. Previously, only the `Fixes AB#{ID}` keyword was supported. With this update, you can now use `{State or Category} AB#{ID}` to automatically transition work items to the desired state on merge.

If the GitHub pull request description includes a state name (for example, `Validate AB#1234`), the linked work item's state is updated as a result. If the state name is not recognized, we check if it matches a state category (like `Resolved`). If it does, the work item is transitioned to the first available state within that category. 

> [!div class="mx-imgBorder"]
> [![Screenshot of validate work item.](/azure/devops/release-notes/2025/media/255-boards-01.png "Screenshot of validate work item")](/azure/devops/release-notes/2025/media/255-boards-01.png#lightbox)

If no matching state or category is found, the keyword is ignored and the state on the work item is not updated.
    
Finally, the `Fixes AB#{ID}` keyword continues to work as expected, defaulting to the "Closed" state value.

#### GitHub Integration: Improvements linking to commits, branches and pull requests

We are continuously improving the Boards + GitHub integration to close usability gaps and align with the experience you are familiar with in Azure Repos.

With this update, we introduced several improvements to streamline how branches, pull requests, and commits are linked to work items:

* When a GitHub branch is linked to a work item, any associated pull requests will now be automatically linked. No need to manually use AB#.

* Once a pull request is merged, the merge commit will be automatically linked to the work item.

* If the branch is deleted after the pull request is merged, the branch link will be automatically removed from the work item.

These improvements make it easier to track your development progress and maintain clean, up-to-date work item associations.


> [!div class="mx-imgBorder"]
> ![Gif to github boards integration improvements.](/azure/devops/release-notes/2025/media/254-boards-01b.gif "gif to github boards integration improvements")

#### GitHub Integration: Show build status for YAML pipelines

We are committed to achieving feature parity between YAML and Classic Pipelines. One key missing feature was the ability to provide an "Integrated in build" link when your repository is hosted in GitHub. With our latest release, we addressed this gap by adding an option in YAML pipeline settings for you to check:

> [!div class="mx-imgBorder"]
> [![Screenshot of automatically link work items.](/azure/devops/release-notes/2025/media/254-boards-01.png "Screenshot of automatically link work items")](/azure/devops/release-notes/2025/media/254-boards-01.png#lightbox)

Once the build is complete, the corresponding link will automatically appear on the associated work items, improving the overall traceability story.

> [!div class="mx-imgBorder"]
> [![Screenshot of integrated in build.](/azure/devops/release-notes/2025/media/254-boards-02.png "Screenshot of integrated in build")](/azure/devops/release-notes/2025/media/254-boards-02.png#lightbox)

#### GitHub Integration: Linking the Merge Commit

We now automatically link the merge commit to its corresponding work item when a pull request is completed.

#### Increase limit of connected GitHub repositories

Over the past several months, we enhanced both the user experience and scalability of connecting your GitHub repositories to an Azure DevOps project. In this sprint, we raised the maximum limit from 500 to 1,000 repositories, giving you even greater capacity to manage your projects.

#### GitHub pull request insights

We enhanced the integration between GitHub pull requests and Azure Boards. In addition to showing open and closed statuses, you can now see if a pull request is in draft mode, needs review, and Checks status. All without needing to open the pull request.

> [!div class="mx-imgBorder"]
> ![Gif to demo enhanced GitHub pull request insights.](/azure/devops/release-notes/2024/media/246-boards-01.gif "gif to enhanced GitHub pull request insights")

To enable this feature, make sure you go the Boards App in GitHub to accept the requested updated permissions for read and write access to Checks.

> [!div class="mx-imgBorder"]
> [![Screenshot of updated permissions.](/azure/devops/release-notes/2024/media/246-boards-01.png "Screenshot of updated permissions")](/azure/devops/release-notes/2024/media/246-boards-01.png#lightbox)

#### Connect to GitHub repository search improvements

Connecting an Azure DevOps project to a GitHub organization is now optimized, especially for those with thousands of repositories. The search and selection experience eliminates the risk of timeout errors and makes the connection process smoother and more efficient. 

> [!div class="mx-imgBorder"]
> ![Screenshot of add GitHub repositories.](/azure/devops/release-notes/2024/media/242-boards-01.png "Screenshot of add github repositories.")

#### Create GitHub branch from work item

Now, you can create a GitHub branch directly from a work item within Azure DevOps. The "New GitHub Branch" link is available whenever a [GitHub connection is configured](/azure/devops/boards/github/connect-to-github) for your project. This link is available in all work item context menus, including the work item form, card, backlog, and queries.
To create a new branch, enter the branch name and select the desired repository and base branch.

> [!div class="mx-imgBorder"]
> ![Gif to demo create GitHub branch from work item.](/azure/devops/release-notes/2024/media/242-boards-01.gif "gif to create GitHub branch from work item")

#### Add link to GitHub commit or pull request 

Link work items to GitHub by searching and selecting the desired repository, then drill down to find and link to the specific pull request or commit. You no longer need multiple window changes and copy/paste (although you still have that option).

> [!div class="mx-imgBorder"]
> ![Gif to demo Add link improvements.](/azure/devops/release-notes/2024/media/237-boards-01.gif "gif to Add link improvements")

#### AB# links on GitHub pull requests

As part of our ongoing enhancements to the Azure Boards + GitHub integration, we are previewing a feature that improves experience with AB# links. With this update, your AB# links now appear directly in the Development section of the GitHub pull request. This means you can view the linked work items without the need to navigate through description or comments, providing easier access to those AB# links.

> [!div class="mx-imgBorder"]
> ![Screenshots of AB# links.](/azure/devops/release-notes/2024/media/237-boards-01.png "Screenshots of AB# links.")

These links are only available when you use AB# in the pull request description. They do not appear if you link directly from the pull request from the work item. Removing the AB# link from the description also removes it from the Development control.
