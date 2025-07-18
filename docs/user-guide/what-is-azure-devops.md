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
ms.date: 07/17/2025
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

*Example scenario: A product team planning a mobile app feature creates user stories for "user login," tracks bugs found during development, and uses sprint boards to monitor progress during two-week iterations.*

[**Azure Repos**](../repos/get-started/what-is-repos.md): Host unlimited private Git repositories or use Team Foundation Version Control (TFVC) for source code management. Features include branch policies, pull requests with code reviews, conflict resolution, and integration with popular IDEs and editors.

*Example scenario: Development team members create feature branches for new functionality, submit pull requests for code review, and use branch policies to ensure all code is reviewed and tested before merging to the main branch.*

[**Azure Pipelines**](../pipelines/get-started/what-is-azure-pipelines.md): Build, test, and deploy applications with CI/CD pipelines that work with any language, platform, and cloud. Supports Docker containers, Kubernetes, and deployments to Azure, AWS, Google Cloud, or on-premises. Includes parallel jobs, deployment gates, and release approvals.

*Example scenario: Every code commit triggers an automated pipeline that builds a .NET web application, runs unit tests, creates a Docker container, and deploys to staging environment for testing before production release.*

[**Azure Test Plans**](../test/overview.md): Plan, execute, and track testing with manual test cases, exploratory testing sessions, and automated test integration. Create test suites, track test results, capture screenshots and videos, and generate detailed test reports.

*Example scenario: QA team creates test cases for user registration flow, executes manual tests on different browsers, captures screenshots of issues, and links test results to user stories for traceability.*

[**Azure Artifacts**](../artifacts/start-using-azure-artifacts.md): Create, host, and share packages like NuGet, npm, Maven, Python, and Universal packages with your team and organization. Integrate with build pipelines, manage package versions, and control access with upstream sources and retention policies.

*Example scenario: Development team creates a shared authentication library, publishes it as a NuGet package to Azure Artifacts, and references it across multiple projects while controlling access to internal packages.*

:::column-end:::
:::row-end:::

### How Azure DevOps services work together

The following diagram shows how Azure DevOps services integrate throughout the development lifecycle:

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

Azure DevOps provides a powerful dashboard interface that allows you to create a personalized view of your project data and workflows. Here's how you can make the most of the Dashboards feature:

- **Add, configure, and manage dashboards**: Create multiple dashboards to reflect different aspects of your project. You can customize each dashboard by adding and arranging various widgets that display project data in real time.
- **Configure widgets**: Enhance your dashboards with widgets that provide insights into your project. Choose from a wide range of widgets to display information such as build status, test results, and work item queries.
- **Navigate quickly**: Use dashboards as a central hub for navigating to various areas of your project. Set up links and shortcuts that allow you to access important sections of Azure DevOps with just a selection.
- **Use extensibility points**: Use Azure DevOps extensibility points to further customize your dashboards. You can add new capabilities by integrating non-Microsoft services or creating your own extensions.

For more information, see the [Dashboards documentation](../report/dashboards/dashboards.md).

:::image type="content" source="media/dashboard-overview.png" alt-text="Screenshot of the Dashboards landing page showing Agile Lead Time, Future Spring, New Work Item, Work in Progress, and Team Velocity." lightbox="media/dashboard-overview.png":::

## Azure Boards

In the dynamic world of software development, efficient information sharing and meticulous tracking of work, tasks, issues, and code defects are essential. Developers commonly work with tools like Microsoft Excel, Microsoft Project, and various bug tracking systems. The recent adoption of Agile methodologies revolutionizes planning and development processes.

Azure Boards provides several Agile tools designed to help streamline planning and tracking across your projects:

- **Work item management**: Seamlessly add and update various work items to keep your project organized and on track.
- **Queries and charts**: Define custom queries for work items and generate insightful status and trend charts to visualize progress.
- **Backlog handling**: Efficiently manage your product backlog and ensure priorities are clear and actionable.
- **Sprint planning**: Utilize sprint backlogs to plan and execute sprints with precision and align your team's efforts with project goals.
- **Task board utilization**: Review and update sprint tasks through interactive task boards that reflect real-time changes.
- **Workflow visualization**: Monitor your project workflow and update statuses by using intuitive boards that provide a clear view of the development pipeline.
- **Portfolio management**: Organize your work hierarchically, group user stories under features and features under epics, and maintain a structured overview.
- **Scrum meetings**: Use task boards during daily Scrum meetings to assess completed, remaining, or blocked work, and foster a collaborative and responsive team environment.

Azure Boards supports various work item types, where each is associated with a specific set of fields that can be updated as progress is made. These work types give you a tailored approach to tracking different aspects of your project.

**Agile support**: Whether you're practicing Scrum, Kanban, or Scrumban, Azure Boards offers backlogs and boards to facilitate these methodologies, empowering your team to deliver results effectively.

Project managers and developers can share information and track progress by using the comprehensive backlogs and boards. Azure Boards provides a complete picture of your project status, which enables teams to monitor trends and make informed decisions.

For an in-depth understanding of how backlogs, boards, and plans can transform your project management experience, see [What is Azure Boards?](../boards/get-started/what-is-azure-boards.md)

:::image type="content" source="media/boards-backlogs.png" alt-text="Screenshot of the Azure Boards backlogs page showing many cards, including New Items, Active Items, and Items to Analyze." lightbox="media/boards-backlogs.png":::

## Azure Repos

Source or version control systems are pivotal for developers who need to collaborate seamlessly on codebases and maintain a comprehensive history of changes. These systems are indispensable for projects that involve multiple developers and ensure consistency and coordination throughout the development process.

:::image type="content" source="media/repos-github.png" alt-text="Screenshot of the Azure Repos landing page showing the 'main' branch in the repo with folders and a README file." lightbox="media/repos-github.png":::

Azure DevOps supports two primary types of source control to suit diverse project needs: [Git](../repos/git/index.yml) and [Team Foundation Version Control (TFVC)](../repos/tfvc/index.yml).

### Git

Git is a version control system where each developer has a local copy of the entire repository. This approach allows for offline work and easy branching and merging. Git is the default choice for new projects and is recommended for its flexibility and robustness.

> [!NOTE]
> Git in Azure DevOps is standard Git. You can use Visual Studio with third-party Git services. You can also use third-party Git clients with Azure DevOps Server.

You can do the following tasks with Azure Repos for Git:

- **Review files**: Examine the details and history of changes made to each file within your repository.
- **Download and edit files**: Obtain a local copy of files from the repository and make necessary modifications.
- **Manage commits**: Keep track of commits pushed to the repository and ensure a clear history of code changes.
- **Use pull requests**: Participate in the collaborative code review process by creating, approving, commenting on, and completing pull requests.
- **Use Git tags**: Organize and mark specific points in your repository's history by using Git tags for easy reference.

### TFVC

Team Foundation Version Control (TFVC) is a centralized version control system that simplifies code management. Developers work with a single version of each file on their local machines, while the server retains the full history of changes, providing a single source of truth.

TFVC includes the following key features:

- **Single version workflow**: Each developer's machine holds the current version of files. This approach reduces complexity and ensures consistency across the team.
- **Server-side history**: All historical data including changes and versions are securely stored on the server, which preserves the integrity of your project's evolution.
- **Path-based branching**: Branches are created and managed on the server by using a path-based approach. This approach allows for clear organization and straightforward merging processes.

### Development environment integration

Azure DevOps integrates with popular development environments and supports multi-platform development:

- **Cross-platform support**: Build applications for Android, iOS, Linux, macOS, and Windows
- **IDE integration**: Works seamlessly with Android Studio, Eclipse, IntelliJ, Visual Studio, Visual Studio Code, and Xcode
- **Language support**: Supports .NET, Java, Node.js, Python, PHP, Ruby, and many other programming languages
- **Client flexibility**: Use Git or TFVC with your preferred development tools and workflows

## Azure Pipelines

Achieving rapid and reliable software releases is a hallmark of modern development practices. Azure Pipelines stands at the forefront of this endeavor by automating the build, test, and release processes.

- **Automated builds**: Set up your Azure Pipelines to trigger automated builds upon code check-ins and ensure every change is promptly integrated and verified.
- **Test integration**: Incorporate test runs post-build to validate changes, maintain high code quality, and detect issues early.
- **Release pipelines**: Manage the deployment of your software builds across various environments, from staging to production, with Azure Pipelines' robust release management capabilities.

Azure Pipelines includes the following features:

- **Continuous integration (CI)**: Implement CI to automatically merge code changes into a central repository, followed by automated builds and tests.
- **Continuous delivery (CD)**: Ensure that your software can be reliably released at any time with CD practices, streamlining the path from development to production.
- **Build automation**: Customize your build process with defined steps and triggers, creating a consistent and repeatable build environment.
- **Release management**: Oversee simultaneous releases with configurable release pipelines that mirror your development lifecycle, from development environments to production.
- **Deployment automation**: Automate the deployment process, reducing manual efforts and the potential for errors.
- **Approval workflows**: Integrate approval workflows to validate successful deployments, adding a layer of verification before promoting builds.
- **Release tracking**: Monitor your releases as they progress through different environments, gaining visibility into the deployment pipeline.

For a detailed guide on implementing continuous integration and delivery with Azure Pipelines, see [What is Azure Pipelines?](../pipelines/get-started/what-is-azure-pipelines.md)

:::image type="content" source="media/pipelines-landing-page.png" alt-text="Screenshot of the Azure Pipelines landing page showing the list of recently run pipelines." lightbox="media/pipelines-landing-page.png":::

## Azure Test Plans

Azure Test Plans is a comprehensive service designed to facilitate the creation, management, and execution of various testing methodologies, including manual, exploratory, and automated tests.

Azure Test Plans includes the following key features:

- **Workflow customization**: Tailor your testing workflow with customizable test plans, suites, and cases, and help ensure alignment with your project's needs.
- **Traceability**: Achieve end-to-end traceability and link requirements directly to test cases and bugs with requirement-based test suites.
- **Test selection**: Utilize query-based test suites for criteria-based test selection and streamline the testing process.
- **User-friendly interface**: Benefit from an Excel-like grid interface and simplify the creation and management of test cases.
- **Reusable elements**: Enhance efficiency with reusable test steps and shared parameters, and promote consistency across tests.
- **Collaboration**: Share test plans, suites, and cases with stakeholders for review and feedback, and foster a collaborative testing environment.
- **Cross-platform execution**: Execute tests directly from your browser on any platform, which offers flexibility and convenience.
- **Activity monitoring**: Monitor testing activities with real-time charts, and gain visibility into test progress and outcomes.

For a detailed exploration of how Azure Test Plans can streamline your testing processes, see the [Azure Test Plans documentation](../test/index.yml).

:::image type="content" source="media/test-plans-vert.png" alt-text="Screenshot of the Test Plans landing page showing a vertical layout of test suites and test cases in the test plan." lightbox="media/test-plans-vert.png":::

## Azure Artifacts

[**Azure Artifacts**](../artifacts/start-using-azure-artifacts.md) enables you to create, host, and share packages like NuGet, npm, Maven, Python, and Universal packages with your team and organization. Integrate with build pipelines, manage package versions, and control access with upstream sources and retention policies.

Azure Artifacts supports comprehensive package management scenarios:

- **Multiple package types**: Host NuGet, npm, Maven, Python, and Universal packages in a single feed
- **Upstream sources**: Connect to public repositories like nuget.org, npmjs.com, and Maven Central while maintaining security
- **Package versioning**: Manage package versions with semantic versioning and retention policies
- **Access control**: Control who can view, contribute to, and administer your feeds with granular permissions
- **Build integration**: Automatically publish packages from your build pipelines and consume them in downstream builds
- **Code search**: Find code across your repositories using powerful search capabilities with support for filtering by path, file extension, and code type

## Collaboration services

Azure DevOps enhances team collaboration through the following services designed to streamline communication and project tracking:

- [**Team dashboards**](../report/dashboards/dashboards.md): Create and customize dashboards to provide your team with real-time visibility into project metrics and progress.
- [**Project wiki**](../project/wiki/manage-wikis.md): Document your project details, guidelines, and knowledge base in a centralized, easily accessible wiki.
- [**Work item discussions**](../boards/work-items/work-item-fields.md): Facilitate conversations directly within work item forms and enable contextual and timely communication.
- **Traceability links**: Establish links between [work items](../boards/backlogs/add-link.md), [commits](../repos/git/commits.md), [pull requests](../repos/git/pull-requests.md), and more, and help ensure comprehensive traceability across your project.
- [**Alerts and notifications**](../organizations/notifications/about-notifications.md): Set up personalized alerts and change notifications to keep team members informed about project updates and changes.
- **Feedback management**: Streamline the process of [requesting](../test/request-stakeholder-feedback.md), [providing](provide-feedback.md), and managing feedback to continuously improve project outcomes.
- [**Analytics**](../report/powerbi/analytics-security.md) and [**Reporting**](../report/powerbi/access-analytics-power-bi.md): Use the analytics service and Power BI reporting for insights into project performance and make data-driven decisions.

These collaboration services are integral to maintaining a cohesive and informed team capable of responding swiftly to project demands and opportunities.

## Service hooks

Service hooks in Azure DevOps empower you to automate and streamline interactions with other services, and respond swiftly to events within your projects. For instance, you can configure service hooks to send immediate push notifications to your team's devices if a build process encounters an error.

Utilize service hooks in the following ways:

- **Custom apps integration**: Integrate service hooks with your custom applications to initiate actions automatically, enhance efficiency, and improve project responsiveness.
- **Service targets**: Designate various services as targets for your service hooks and allow for a wide range of automated responses to project events.

For a comprehensive list of services that can be integrated with Azure DevOps by using service hooks, and to explore other apps and services that complement Azure DevOps, see the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops). To stay updated on the newest services supported by service hooks, see the [Integrate with service hooks](../service-hooks/overview.md) documentation.

## Azure cloud-hosted services

Azure offers a robust array of cloud-hosted services that are essential for the development and deployment of applications. These services can be utilized independently or with Azure DevOps to create a seamless workflow.

Key benefits of Azure cloud-hosted services include:

- **Comprehensive support**: Azure services provide the infrastructure and platform support necessary for the entire application lifecycle.
- **Integration with Azure DevOps**: You can combine these services with Azure DevOps for an integrated experience that covers source control, CI/CD, and more.

To explore the full range of services, features, and suites that integrate seamlessly with your development process, see the [Azure products](https://azure.microsoft.com/products/) directory.

## Administrative services

Managing a collaborative software development environment is a streamlined process with Azure DevOps. You can access various features and tasks that are tailored for administration. These tools are designed to facilitate the oversight of your projects and teams effectively.

Accessible administration is provided in the following ways:

- **Web portal management**: Perform most administrative tasks conveniently through the Azure DevOps web portal and ensure you have control at your fingertips.
- **Comprehensive settings**: Access detailed settings for users, teams, projects, and organizations. This approach allows for granular management of your development environment.

For a deeper understanding of the administrative capabilities available to you, including how to configure and manage various levels of settings, see [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md).

## Additional features

Beyond the core services, Azure DevOps provides:

- **[Wiki](../project/wiki/about-readme-wiki.md)**: Document projects and share knowledge in a centralized location  
- **[Analytics and reporting](../report/powerbi/analytics-security.md)**: Generate insights and reports using built-in analytics and Power BI integration
- **[Notifications](../organizations/notifications/about-notifications.md)**: Stay informed with customizable alerts for work items, builds, releases, and code changes

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
- Multi-platform support for .NET, Java, Node.js, Python, and more
- Deploy to Azure, AWS, GCP, or on-premises environments
- Release management with approval gates and deployment strategies
- **Cross-platform builds**: Build applications for any platform including Android, iOS, Linux, macOS, and Windows
- **Multi-environment deployment**: Automate deployments across development, staging, and production environments
- **Approval workflows**: Implement gates and approvals to ensure quality before production releases
- **Parallel processing**: Run multiple build agents simultaneously to speed up your CI/CD process

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

- **Free for small teams**: Up to 5 users get access to all basic features
- **Pay-as-you-grow**: Add users with Basic or Basic + Test Plans licenses as needed
- **Unlimited stakeholders**: Free access for unlimited stakeholders to view dashboards and work items

## Azure DevOps Server

Azure DevOps Server is available for organizations that need to keep their data on-premises or require specific customizations not available in the cloud service. It includes the same core services as Azure DevOps Services but requires your own infrastructure and maintenance.

For more information about Azure DevOps Server, see [Install Azure DevOps Server](/azure/devops/server/install/single-server).

## Getting started

Ready to start with Azure DevOps? Here are your next steps:

1. **[Create a free organization](sign-up-invite-teammates.md)** - Set up your Azure DevOps Services organization
2. **[Create your first project](../organizations/projects/create-project.md)** - Start organizing your work
3. **[Invite team members](../organizations/accounts/add-organization-users.md)** - Add your teammates to collaborate
4. **[Import or create repositories](../repos/git/creatingrepo.md)** - Get your code into Azure Repos
5. **[Set up your first pipeline](../pipelines/create-first-pipeline.md)** - Automate builds and deployments

## Learn more

- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Tools and clients for Azure DevOps](tools.md)
- [Software development roles in Azure DevOps](roles.md)