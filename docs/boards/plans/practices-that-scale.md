---
title: Implement Agile practices that scale for working in Azure Boards and Azure DevOps
titleSuffix: Azure Boards
description: Learn about scaling Agile recommended practices for working in Azure Boards and Azure DevOps.   
ms.service: azure-devops-boards
ms.assetid: 46F7A310-B6BD-46FA-88E2-91521BEE3BC4  
ms.author: chcomley
author: chcomley
ms.topic: best-practice
monikerRange: '<= azure-devops'
ms.date: 10/27/2025
ai-usage: ai-assisted
---

# Implement Agile practices that scale

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Enterprise organizations adopt Agile practices for many reasons. Prime among these reasons include:  

- Shorten time-to-market and accelerate product delivery  
- Improve organizational effectiveness to manage changing priorities  
- Enhance software quality and delivery predictability  
- Improve project visibility and reduce project risk  <br/>

As your organization grows, you want to scale your practices to remain agile and meet changing goals. To do that, consider these two guiding principles:   
- **What does success look like** to you, your teams, and your organization? What interests you most: On-time delivery? Product quality? Predictability? Customer satisfaction? 
- **Return to first principles** and return to the principles and shared values enumerated in the [Agile manifesto](https://agilemanifesto.org/principles.html) As noted by [Ken Schwaber](https://kenschwaber.wordpress.com), one of the founders of Scrum:  
    - "Values and principles scale, but practices are context sensitive."  
    - "Keep the values, keep the principles, and think for yourself. A core premise of Agile is that the people doing the work are the people who can best figure out how to do it." 

## Create rhythm and flow 

By adopting a shared cadence and set of periodic communications, you create a constant flow of activity throughout the organization. Practices that help create rhythm and flow within larger organizations include: 

- **Shared cadence**: [Regular sprints and releases](../sprints/define-sprints.md) establish the rhythm of the business. Having all teams work to a shared cadence helps with all coordination and collaboration activities. 
- **Sprint communications**: To keep the organization and all teams informed about the progress and plans of feature teams, each feature team can share a summary of their previous sprint results and current sprint plans through digital channels like Microsoft Teams, Slack, or email.  
- **Sprint demos and videos**: Create quick 2 to 3-minute videos that illustrate new features the team produces. Share links to such videos within sprint communications or team channels.  
- **Showcase meetings**: To inform other teams and ask for feedback about software under development, teams showcase the work they complete. Conduct these meetings at regular intervals throughout the project lifecycle, and open them to all interested parties.  
- **Quality metrics dashboards**: To support insight into product quality and encourage maintaining bug discipline, periodically share quality metrics with the organization. These metrics might include active bugs per feature team, bug trends, test coverage, and defect escape rates.  
- **Coordination meetings and ceremonies**: Hold meetings that coordinate teams at regular intervals or as often as needed to address overlapping goals, dependencies, and risks. Consider implementing Scrum of Scrums or Program Increment (PI) planning sessions.    

## Interact with customers

Engaging customers throughout your product lifecycle is a primary Agile principle. Empower each team to interact directly with customers on the feature sets they own. 

- **Continuous feedback loops**: Build in customer feedback mechanisms. These loops can take many forms: 
    - **Customer voice platforms**: Make it easy for customers to give feedback, add ideas, and vote on next generation features through dedicated portals, community forums, or integrated feedback systems. 
    - **In-product feedback**: Implement in-product feedback buttons and telemetry to gather insights about the product experience and specific features. 
    - **Customer demos and user testing**: Schedule regular demos that ask for feedback from your customers and conduct usability testing sessions to help shape next generation products and keep you on track to build applications your customers want to consume.  
- **Early adopter and beta programs**: Develop programs with the idea that all teams might want to participate at some point. Early adopters gain access to early versions of working software and provide valuable feedback. Often, these programs work by enabling select [feature flags](#feature-flags) for an early adopter list. 
- **Data-driven decisions**: Find ways to instrument your product to obtain useful data and test various hypotheses. Drive toward an experiment-friendly culture that celebrates learning and evidence-based decision making.

## Improve project visibility

The more insight you and your teams have into the goal, vision, and progress of the work being done, the better you can reduce risks and manage dependencies. 

- **Team structure**: No matter how large your organization gets, structuring your organization around small teams of 6 to 9 people scales effectively. Create [vertical, autonomous feature teams](agile-culture.md#horizontal-vs-vertical) grouped under portfolio management areas. 
- **Work breakdown structure**: Breaking down large goals, features, or requirements into smaller ones remains a staple of project management. By breaking down work into similar-sized tasks, teams can make better estimates and identify risks and dependencies.    
- **Consolidated views and dashboards**: Use your online tracking tools to aggregate work and gain knowledge across teams. Build real-time dashboards to show progress, trends, and key performance indicators using Azure DevOps Analytics services.  
- **Experience and design reviews**: Hold these meetings before development begins on a feature to educate leadership on scenarios and priorities, collect feedback, set expectations, and surface any cross-team issues about the feature. 

## Empower a productive workforce 

Specific Agile practices that scale well and lead to happier, engaged, and productive employees include:  

- **Embedded leadership and psychological safety**: Empower teams and leaders within the organization to self-organize and self-manage as much as possible. Team autonomy increases organizational agility and team effectiveness. Ensure teams have the corporate sponsorship needed to succeed and create environments where team members feel safe to express ideas and concerns.  
- **Daily stand-ups**: [Scrum meetings](../sprints/best-practices-scrum.md#daily-scrum-meetings) help keep teams focused on what they need to do daily to maximize their ability to meet their sprint commitments. As organizations grow, they should consider staggering these meetings so that cross-team participation can occur as needed.  
- **[Scrum of scrums](https://www.agilealliance.org/glossary/scrum-of-scrums)**: Representatives from different Agile teams meet regularly to report work completed, next steps, and issues or blocks occurring within their teams. 
- **Team communications and knowledge sharing**: Provide and encourage teams to share their practices and guidance through corporate networks. Common tools include team wikis, Microsoft Teams, Confluence, or Azure DevOps wikis.  
- **Collaboration and code quality**: Encourage informal team-to-team communications and collaboration. Institutionalize practices such as code reviews, design reviews, pair programming, and mob programming. These practices not only increase team collaboration but help develop individual and overall corporate competence.  

## Improve organizational culture

You improve organizational effectiveness by attending to the culture you want to build. Culture changes occur when individuals, teams, and organizations adopt one or more continuous improvement practices. Several scalable Agile practices include: 

- **Retrospectives**: Ask questions such as: "What went well?", "What should we do differently?", and "What should we stop doing?" to help teams reflect on how they can improve their processes and practices. Retrospectives help teams surface what works well and what needs improvement. You can conduct retrospectives anytime and anywhere. However, institutionalizing certain retrospectives at a regular cadence helps establish continuous improvement practices. For example:  
  - **[Sprint retrospectives](../sprints/best-practices-scrum.md#sprint-retrospective-meeting)** help teams identify areas to improve at a regular cadence.   
  - **Release retrospectives** help organizations identify areas to improve communications and internal practices and fuel improvement for the next release.
  - **Operational reviews**: Typically held monthly and include representatives from a whole value stream. Spanning a portfolio of projects and other initiatives and using objective, quantitative data, design these retrospectives to provoke discussions about the dynamics affecting performance between teams. 

    See the [Agile Retrospective Resource Wiki](https://retrospectivewiki.org/index.php?title=Agile_Retrospective_Resource_Wiki) for ideas, tips, and tools for planning and conducting retrospectives. See also the [Marketplace Retrospectives extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives).
- **Improvement tracking board**: Good ideas to improve processes can arise from anyone at any time. Capturing those ideas to discuss and decide how to act on them quickly supports process improvement efforts.  

    A whiteboard provides an easy and visual means to capture ideas. Also, you can create an Improvement tracking team and capture ideas that you track on an electronic [board](../boards/kanban-overview.md).  

- **Institutionalize sharing and learning**: Sharing best practices and communicating ideas helps all teams within an organization grow and improve. Developing a culture of learning supports this and other continuous improvement activities. Consider these ideas: 
  - Internal wikis and knowledge bases  
  - Communities of practice and guilds  
  - Hackathon weeks or innovation time  
  - Internal DevOps and Agile coaching teams to support teams adopting these practices  
  - Regular lunch-and-learn sessions
  - Internal conferences and tech talks
    
    [The Culture Game](https://www.amazon.com/The-Culture-Game-Tools-Manager/dp/0984875301) provides a good resource for Agile managers to help teams adopt Agile practices and share best practices. 

- **Communities of practice**: Support internal common disciplines (for example, site reliability engineers, software architects, UX designers, data scientists, and security specialists)  

## Working software

> *"Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale."*   
> *"Working software is the primary measure of progress."*<br/> - [Agile manifesto](https://agilemanifesto.org/principles.html)   

As the amount of software, features, and complexity increase, you need to adopt practices that help you produce consumable solutions.  
 
<a id="feature-flags"></a>
- **Feature flags and progressive delivery**: Use feature flags to enable or disable access to different features safely. Support turning on features for early adopters to get working feedback. Implement progressive delivery patterns like canary releases and blue-green deployments.  
- **Release trains and continuous delivery**: Provide another type of cadence to deliver one or more features. Feature teams understand the preplanned schedule of pushing out new features and plan accordingly. Release trains can correspond to the same sprint cadence established for the organization or occur at a different cadence. See [Scaled Agile Framework](scaled-agile-framework.md) for how to set up sprints and release trains.  
- **Continuous integration and continuous deployment (CI/CD)**: Adopt automated processes that eliminate manual work and automate the flow of software through test, build, and deploy cycles. Implement comprehensive testing strategies including unit tests, integration tests, and automated acceptance tests.  
- **Inner source and open development**: Bring the value and ethos developed in the Open Source Software community to your internal development teams. Encourage code sharing, documentation, and collaborative development practices across teams.  
- **Cloud-native practices**: Embrace containerization, microservices architectures, and cloud-native deployment patterns to improve scalability and maintainability.

## Modern practices and considerations

As Agile practices have evolved, consider these other modern approaches:

- **DevSecOps integration**: Integrate security practices throughout the development lifecycle rather than treating security as a separate concern.
- **Site reliability engineering (SRE)**: Adopt SRE practices to improve system reliability and reduce operational overhead.
- **Value stream mapping**: Map and optimize the flow of value from idea to customer delivery.
- **OKRs (Objectives and Key Results)**: Use OKRs to align teams around measurable outcomes rather than just outputs.
- **Design thinking**: Incorporate human-centered design approaches to better understand customer needs.

## Related content

Along with the above practices, you can find more guidance around scaling your Agile tools in the following articles: 

- [Agile culture](agile-culture.md)
- [Add teams](../../organizations/settings/add-teams.md) 
- [Portfolio management](portfolio-management.md) 
- [Visibility across teams](visibility-across-teams.md)  
- [Scaling Agile to large teams](/devops/plan/scaling-agile)

### Industry resources
- [Agile manifesto](https://agilemanifesto.org)
- [Agile Alliance](https://www.agilealliance.org/)  
- [Scaled Agile Framework (SAFe)](https://www.scaledagileframework.com/)
- [DevOps Research and Assessment (DORA)](https://www.devops-research.com/)

### Practices that don't scale
- **Estimating large initiatives**: Part of waterfall project methods involved estimating resources and schedules. The larger the initiatives, the less likely these estimates provide any value. As projects grow, risks and unforeseen issues and impediments can arise, invalidating many estimates.   
- **Velocity as a cross-team metric**: While [team velocity](../../report/dashboards/team-velocity.md) can provide a useful metric for gaining insight into how much work each team can complete during a sprint cycle, you can't add team velocities to gain meaningful or useful metrics. Also, using velocity gained from many teams to reliably complete long-range forecasts is problematic. Teams can vary in how they estimate their work, and those variations increase over time.  
- **Top-down prescriptive solutions**: One size doesn't fit all, and one solution typically doesn't fit all teams. Supporting team autonomy means letting teams find their own solutions while providing the necessary frameworks and support.
- **Cargo cult Agile**: Simply adopting Agile ceremonies without understanding their purpose or adapting them to your context often leads to ineffective implementations.
