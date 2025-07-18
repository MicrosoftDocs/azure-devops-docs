---
title: What is Azure DevOps?
titleSuffix: Azure DevOps
ms.custom: engagement-fy23, UpdateFrequency3
ms.topic: overview
description: Learn about Azure DevOps Services - an integrated platform for planning, coding, building, testing, and deploying applications.
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/18/2025
ms.update-cycle: 1095-days
#customer intent: As a developer, I want to understand Azure DevOps so I can plan, code, collaborate, and ship my applications.
---

# What is Azure DevOps?

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure DevOps is a cloud-based platform that provides integrated tools for software development teams. It includes everything you need to plan work, collaborate on code, build applications, test functionality, and deploy to production.

Azure DevOps offers a spectrum of service models to accommodate the unique needs of every team. The free access version helps small teams get started quickly, while the versatile subscription and pay-per-use plans support comprehensive project management.

**Key characteristics:**

- **End-to-end project management**: Azure DevOps stands as a cohesive suite of services designed to support the complete lifecycle of your software projects. It encompasses everything from initial planning and development, through rigorous testing, to final deployment.

- **Client/server model delivery**: Azure DevOps operates on a client/server model, offering flexibility in how you interact with its services. The web interface provides a convenient way to utilize most services and is compatible with all major browsers. Additionally, certain services like source control, build pipelines, and work tracking offer client-based management options for enhanced control.

- **Flexible and scalable service options**: Azure DevOps caters to teams of all sizes by offering a range of service options. For small teams, many services are complimentary, ensuring that you have access to robust project management tools without any initial investment. For larger teams or more advanced needs, services are accessible through a subscription model or on a pay-per-use basis.

## Core services

Azure DevOps includes the following integrated services:

:::row:::
:::column span="1":::  

:::image type="content" source="media/left-navigation.png" alt-text="Screenshot of services listed in Azure DevOps navigation.":::

:::column-end:::
:::column span="2":::

[**Azure Boards**](../boards/get-started/what-is-azure-boards.md): Plan and track work using Agile tools, Kanban boards, backlogs, and dashboards. Create work items like user stories, bugs, and tasks. Use sprint planning, burndown charts, and velocity tracking. Customize workflows and work item types to match your team's process.

> **Example scenario:** A product team planning a mobile app feature creates user stories for "user sign-in," tracks bugs found during development, and uses sprint boards to monitor progress during two-week iterations.

[**Azure Repos**](../repos/get-started/what-is-repos.md): Host unlimited private Git repositories or use Team Foundation Version Control (TFVC) for source code management. Features include branch policies, pull requests with code reviews, conflict resolution, and integration with popular IDEs and editors.

> **Example scenario:** Development team members create feature branches for new functionality, submit pull requests for code review, and use branch policies to ensure all code is reviewed and tested before merging to the main branch.

[**Azure Pipelines**](../pipelines/get-started/what-is-azure-pipelines.md): Build, test, and deploy applications with CI/CD pipelines that work with any language, platform, and cloud. Supports Docker containers, Kubernetes, and deployments to Azure, AWS, Google Cloud, or on-premises. Includes parallel jobs, deployment gates, and release approvals.

> **Example scenario:** Every code commit triggers an automated pipeline that builds a .NET web application, runs unit tests, creates a Docker container, and deploys to staging environment for testing before production release.

[**Azure Test Plans**](../test/overview.md): Plan, execute, and track testing with manual test cases, exploratory testing sessions, and automated test integration. Create test suites, track test results, capture screenshots and videos, and generate detailed test reports.

> **Example scenario:** QA team creates test cases for user registration flow, executes manual tests on different browsers, captures screenshots of issues, and links test results to user stories for traceability.

[**Azure Artifacts**](../artifacts/start-using-azure-artifacts.md): Create, host, and share packages like NuGet, npm, Maven, Python, and Universal packages with your team and organization. Integrate with build pipelines, manage package versions, and control access with upstream sources and retention policies.

> **Example scenario:** Development team creates a shared authentication library, publishes it as a NuGet package to Azure Artifacts, and references it across multiple projects while controlling access to internal packages.

:::column-end:::
:::row-end:::

### How Azure DevOps services work together

The following diagram shows how the services integrate throughout the development lifecycle:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Azure Boards  │    │   Azure Repos   │    │ Azure Pipelines │
│                 │    │                 │    │                 │
│ • Plan features │────│ • Store code    │────│ • Build apps    │
│ • Track bugs    │    │ • Code reviews  │    │ • Run tests     │
│ • Manage sprints│    │ • Branch policies│   │ • Deploy code   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Azure Test Plans│    │ Azure Artifacts │    │   Dashboards    │
│                 │    │                 │    │                 │
│ • Test planning │    │ • Package feeds │    │ • Project views │
│ • Manual testing│◄───│ • Version control│───►│ • Team metrics  │
│ • Test reporting│    │ • Dependency mgmt│   │ • Build status  │
└─────────────────┘    └─────────────────┘    └─────────────────┘

Flow: Plan → Code → Build → Test → Deploy → Monitor → Repeat
```

**Typical workflow:**
1. **Plan** work items in Azure Boards
2. **Code** features in Azure Repos with pull requests
3. **Build** and package with Azure Pipelines and Azure Artifacts
4. **Test** manually and automatically using Azure Test Plans
5. **Deploy** through Azure Pipelines to various environments
6. **Monitor** progress and metrics via Dashboards
7. **Iterate** based on feedback and new requirements

For more information, see [Tools and clients that connect to Azure DevOps](tools.md).

## Dashboards

Azure DevOps provides customizable dashboards that display real-time project data and workflows. Create personalized views to monitor your team's progress and performance.

**Key capabilities:**

- **Multiple dashboards**: Create and customize dashboards with widgets showing build status, test results, and work item queries
- **Quick navigation**: Use dashboards as a central hub to access different areas of your project
- **Extensibility**: Integrate non-Microsoft services or create custom extensions to extend functionality

For more information, see the [Dashboards documentation](../report/dashboards/dashboards.md).

:::image type="content" source="media/dashboard-overview.png" alt-text="Screenshot of the Dashboards landing page showing Agile Lead Time, Future Spring, New Work Item, Work in Progress, and Team Velocity." lightbox="media/dashboard-overview.png":::

## Azure Boards

Modern software development requires efficient work tracking and collaboration across teams. Azure Boards provides Agile tools that streamline planning and tracking throughout your development lifecycle.

**Key capabilities:**

- **Work item management**: Create and update user stories, bugs, tasks, and features
- **Queries and charts**: Build custom queries and generate status charts to visualize progress
- **Backlog management**: Prioritize work and maintain clear, actionable backlogs
- **Sprint planning**: Plan iterations and track sprint progress with velocity metrics
- **Task boards**: Update work status through interactive Kanban boards
- **Portfolio management**: Organize work hierarchically from epics to tasks
- **Scrum support**: Facilitate daily standups and sprint reviews with real-time boards

Azure Boards supports multiple work item types, each with customizable fields that track progress through your development process. Whether you practice Scrum, Kanban, or Scrumban, Azure Boards provides the backlogs and boards to support your methodology.

Teams get complete visibility into project status, enabling data-driven decisions and trend monitoring through comprehensive dashboards and reporting.

For detailed information, see [What is Azure Boards?](../boards/get-started/what-is-azure-boards.md)

:::image type="content" source="media/boards-backlogs.png" alt-text="Screenshot of the Azure Boards backlogs page showing many cards, including New Items, Active Items, and Items to Analyze." lightbox="media/boards-backlogs.png":::

## Azure Repos

Azure Repos provides source control systems that enable seamless collaboration on codebases while maintaining complete change history. These repos are essential for multi-developer projects, ensuring consistency and coordination throughout development.

:::image type="content" source="media/repos-github.png" alt-text="Screenshot of the Azure Repos landing page showing the 'main' branch in the repo with folders and a README file." lightbox="media/repos-github.png":::

Azure DevOps supports two source control options: [Git](../repos/git/index.yml) and [Team Foundation Version Control (TFVC)](../repos/tfvc/index.yml).

### Git

Git provides distributed version control with local repository copies for each developer, enabling offline work and flexible branching. Git is the default choice for new projects.

> [!NOTE]
> Git in Azure DevOps is standard Git. You can use Visual Studio with non-Microsoft Git services. You can also use non-Microsoft Git clients with Azure DevOps Server.

**Key capabilities:**

- **Review files**: Examine file details and change history
- **Download and edit files**: Get local copies and make modifications
- **Manage commits**: Track commits and maintain clear change history
- **Use pull requests**: Create, review, and complete collaborative code reviews
- **Use Git tags**: Mark specific points in repository history

### TFVC

Team Foundation Version Control (TFVC) provides centralized version control with server-side history management. Developers work with single file versions locally while the server maintains complete change history.

**Key features:**

- **Single version workflow**: Developers work with current file versions, reducing complexity
- **Server-side history**: All changes and versions stored securely on the server
- **Path-based branching**: Server-managed branches with clear organization

### Development environment integration

Azure DevOps supports multi-platform development with extensive tool integration:

- **Cross-platform support**: Build for Android, iOS, Linux, macOS, and Windows
- **IDE integration**: Works with Android Studio, Eclipse, IntelliJ, Visual Studio, VS Code, and Xcode
- **Language support**: Supports .NET, Java, Node.js, Python, PHP, Ruby, and more
- **Client flexibility**: Use Git or TFVC with your preferred development tools

## Azure Pipelines

Azure Pipelines automates build, test, and release processes to enable rapid and reliable software delivery.

**Core capabilities:**

- **Automated builds**: Trigger builds on code commits with automatic integration and verification
- **Test integration**: Run tests after builds to validate changes and detect issues early
- **Release pipelines**: Deploy builds across environments from staging to production

**Key features:**

- **Continuous integration (CI)**: Automatically build and test code changes
- **Continuous delivery (CD)**: Streamline reliable releases from development to production
- **Build automation**: Customize build processes with defined steps and triggers
- **Release management**: Configure multi-environment deployment pipelines
- **Deployment automation**: Reduce manual effort and deployment errors
- **Approval workflows**: Add verification layers before promoting builds
- **Release tracking**: Monitor deployments across environments

For detailed information, see [What is Azure Pipelines?](../pipelines/get-started/what-is-azure-pipelines.md)

:::image type="content" source="media/pipelines-landing-page.png" alt-text="Screenshot of the Azure Pipelines landing page showing the list of recently run pipelines." lightbox="media/pipelines-landing-page.png":::

## Azure Test Plans

Azure Test Plans enables comprehensive testing through manual, exploratory, and automated test management.

**Key capabilities:**

- **Workflow customization**: Create customizable test plans, suites, and cases aligned with project needs
- **Traceability**: Link requirements directly to test cases and bugs for end-to-end tracking
- **Test selection**: Use query-based test suites for criteria-based test selection
- **User-friendly interface**: Manage test cases through an Excel-like grid interface
- **Reusable elements**: Share test steps and parameters across tests for consistency
- **Collaboration**: Share test plans with stakeholders for review and feedback
- **Cross-platform execution**: Execute tests from any browser on any platform
- **Activity monitoring**: Track testing progress with real-time charts and reporting

For detailed information, see the [Azure Test Plans documentation](../test/index.yml).

:::image type="content" source="media/test-plans-vert.png" alt-text="Screenshot of the Test Plans landing page showing a vertical layout of test suites and test cases in the test plan." lightbox="media/test-plans-vert.png":::

## Azure Artifacts

Azure Artifacts enables package management for NuGet, npm, Maven, Python, and Universal packages. Integrate with build pipelines, manage versions, and control access with upstream sources and retention policies.

**Key capabilities:**

- **Multiple package types**: Host all major package types in a single feed
- **Upstream sources**: Connect to public repositories while maintaining security
- **Package versioning**: Manage versions with semantic versioning and retention policies
- **Access control**: Control feed permissions with granular access management
- **Build integration**: Automatically publish and consume packages in build pipelines
- **Code search**: Search repositories with filtering by path, file extension, and code type

## Collaboration services

Azure DevOps enhances team collaboration through the following services designed to streamline communication and project tracking:

- [**Project wiki**](../project/wiki/manage-wikis.md): Document your project details, guidelines, and knowledge base in a centralized, easily accessible wiki.
- [**Work item discussions**](../boards/work-items/work-item-fields.md): Facilitate conversations directly within work item forms and enable contextual and timely communication.
- **Traceability links**: Establish links between [work items](../boards/backlogs/add-link.md), [commits](../repos/git/commits.md), [pull requests](../repos/git/pull-requests.md), and more, and help ensure comprehensive traceability across your project.
- [**Alerts and notifications**](../organizations/notifications/about-notifications.md): Set up personalized alerts and change notifications to keep team members informed about project updates and changes.
- **Feedback management**: Streamline the process of [requesting](../test/request-stakeholder-feedback.md), [providing](provide-feedback.md), and managing feedback to continuously improve project outcomes.
- [**Analytics**](../report/powerbi/analytics-security.md) and [**Reporting**](../report/powerbi/access-analytics-power-bi.md): Use the analytics service and Power BI reporting for insights into project performance and make data-driven decisions.

These collaboration services are integral to maintaining a cohesive and informed team capable of responding swiftly to project demands and opportunities.

## Service hooks

Service hooks automate interactions with external services and respond to project events. Configure hooks to send notifications, trigger actions, or integrate with non-Microsoft tools when builds fail, code is committed, or work items change.

**Key capabilities:**

- **Custom apps integration**: Trigger automated actions in your applications based on Azure DevOps events
- **Service targets**: Connect to various external services for automated responses to project events

For available integrations, see the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops). For more information, see [Integrate with service hooks](../service-hooks/overview.md).

## Azure cloud-hosted services

Azure provides cloud services for application development and deployment that work independently or integrate with Azure DevOps for seamless workflows.

**Key benefits:**

- **Comprehensive support**: Full infrastructure and platform support for the entire application lifecycle
- **Integration with Azure DevOps**: Combined services create an integrated development experience

For the complete service catalog, see [Azure products](https://azure.microsoft.com/products/).

## Administrative services

Azure DevOps provides streamlined administration tools for managing projects and teams effectively.

**Key capabilities:**

- **Web portal management**: Perform administrative tasks through the Azure DevOps web portal
- **Comprehensive settings**: Configure detailed settings for users, teams, projects, and organizations with granular control

For more information, see [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md).

## Key capabilities

### Project management
- Track user stories, features, bugs, and tasks
- Plan sprints and releases using Agile methodologies
- Monitor progress with burndown charts and velocity tracking
- Customize work item types and workflows

### Source control
- Host unlimited private Git repositories
- Support for Git workflows including branching, merging, and pull requests
- Code review capabilities with comments and approval policies
- Integration with GitHub and other Git providers

### Build and deployment
- Continuous integration with automated builds triggered by code changes
- Multi-platform support for .NET, Java, Node.js, Python, Android, iOS, Linux, macOS, and Windows
- Deploy to Azure, AWS, GCP, or on-premises environments
- Multi-environment deployment across development, staging, and production
- Release management with approval gates and deployment strategies
- Parallel processing with multiple build agents for faster CI/CD

### Testing and quality
- Manual test case management and execution
- Automated testing integration in build pipelines
- Code coverage and test reporting
- Security scanning and compliance checks  

## Why choose Azure DevOps Services?

Azure DevOps Services offers several advantages for development teams:

- **Quick setup**: Start using Azure DevOps immediately without infrastructure setup or maintenance
- **Automatic updates**: Get the latest features and security updates without manual intervention  
- **Global scale**: Built on Azure's global infrastructure with 99.9% SLA
- **Security**: Enterprise-grade security with Microsoft Entra ID integration, compliance certifications, and data protection
- **Integration**: Works with GitHub, Visual Studio, VS Code, and hundreds of extensions from the marketplace
- **Flexibility**: Support for any development stack, language, or platform
- **Collaboration**: Remove barriers between teams and encourage collaboration across the entire development lifecycle

### Pricing and access

- **Free for small teams**: Up to five users get access to all basic features
- **Pay-as-you-grow**: Add users with Basic or Basic + Test Plans licenses as needed
- **Unlimited stakeholders**: Free access for unlimited stakeholders to view dashboards and work items

## Azure DevOps Server

Azure DevOps Server is available for organizations that need to keep their data on-premises or require specific customizations not available in the cloud service. It includes the same core services as Azure DevOps Services but requires your own infrastructure and maintenance.

For more information about Azure DevOps Server, see [Install Azure DevOps Server](/azure/devops/server/install/single-server).

## Getting started

Ready to get started with Azure DevOps? Here are your next steps:

1. **[Create a free organization](sign-up-invite-teammates.md)** - Set up your Azure DevOps Services organization
2. **[Create your first project](../organizations/projects/create-project.md)** - Start organizing your work
3. **[Invite team members](../organizations/accounts/add-organization-users.md)** - Add your teammates to collaborate
4. **[Import or create repositories](../repos/git/creatingrepo.md)** - Get your code into Azure Repos
5. **[Set up your first pipeline](../pipelines/create-first-pipeline.md)** - Automate builds and deployments

## Related content

- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Tools and clients for Azure DevOps](tools.md)
- [Software development roles in Azure DevOps](roles.md)
