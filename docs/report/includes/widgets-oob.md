---
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 09/07/2021
---

::: moniker range=">= tfs-2017"

Widgets are annotated as follows: 
::: moniker-end

::: moniker range=">= azure-devops-2019"
- **Analytics**: Widget derives data from [Analytics data](../powerbi/what-is-analytics.md)  
- **Build**: Widget derives data for a selected build pipeline  
- **Project**: indicates you can select the project and team when configuring the widget
- **Release**: Widget derives data for a selected release pipeline  
- **Team**: Widget is scoped to a single team  
- **Teams**: Widget is scoped to one or more teams
- **User**: Widget is scoped to the logged in user account
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
- **Build**: Widget derives data for a selected build pipeline  
- **Release**: Widget derives data for a selected release pipeline  
- **Team**: Widget is scoped to a single team  
- **User**: Widget is scoped to the logged in user account
::: moniker-end


---
:::row:::
   :::column span="1":::
      ::: moniker range=">= azure-devops-2020"
      **Boards**
      - [Assigned to me](../dashboards/widget-catalog.md#assigned-to-me-widget) (User)
      - [Burndown chart](../dashboards/widget-catalog.md#burndown-analytics-widget) (Analytics, Project, Teams)    
      - [Burnup chart](../dashboards/widget-catalog.md#burnup-analytics-widget) (Analytics, Project, Teams)     
      - [Chart for work items](../dashboards/widget-catalog.md#chart-wit-widget)  
      - [Cumulative flow diagram](../dashboards/widget-catalog.md#cfd-widget) (Team)   
      - [Cycle time (Analytics)](../dashboards/widget-catalog.md#cycle-time-widget) (Analytics, Team)  
      - [Lead time (Analytics)](../dashboards/widget-catalog.md#lead-time-widget) (Analytics, Team) 
      - [New Work item](../dashboards/widget-catalog.md#new-work-item-widget)  
      - [Query results](../dashboards/widget-catalog.md#query-results-widget)  
      - [Query tile](../dashboards/widget-catalog.md#query-tile-widget)  
      - [Sprint burndown](../dashboards/widget-catalog.md#sprint-burndown-analytics-widget) (Analytics, Team)  
      - [Sprint burndown - Legacy](../dashboards/widget-catalog.md#sprint-burndown-widget) (Team)   
      - [Sprint capacity](../dashboards/widget-catalog.md#sprint-capacity-widget) (Team) 
      - [Sprint overview](../dashboards/widget-catalog.md#sprint-overview-widget) (Team)   
      - [Velocity](../dashboards/widget-catalog.md#velocity-widget) (Analytics, Team)  
      - [Work links](../dashboards/widget-catalog.md#work-links-widget)  
      ::: moniker-end
      ::: moniker range="azure-devops-2019"
      **Boards**
      - [Assigned to me](../dashboards/widget-catalog.md#assigned-to-me-widget) (User)
      - [Burndown chart](../dashboards/widget-catalog.md#burndown-analytics-widget) (Analytics)    
      - [Burnup chart](../dashboards/widget-catalog.md#burnup-analytics-widget) (Analytics)    
      - [Chart for work items](../dashboards/widget-catalog.md#chart-wit-widget)  
      - [Cumulative flow diagram](../dashboards/widget-catalog.md#cfd-widget)  
      - [Cycle time (Analytics)](../dashboards/widget-catalog.md#cycle-time-widget) (Analytics)    
      - [Lead time (Analytics)](../dashboards/widget-catalog.md#lead-time-widget) (Analytics)   
      - [New Work item](../dashboards/widget-catalog.md#new-work-item-widget)  
      - [Query results](../dashboards/widget-catalog.md#query-results-widget)  
      - [Query tile](../dashboards/widget-catalog.md#query-tile-widget)  
      - [Sprint burndown](../dashboards/widget-catalog.md#sprint-burndown-widget)  
      - [Sprint capacity](../dashboards/widget-catalog.md#sprint-capacity-widget)  
      - [Sprint overview](../dashboards/widget-catalog.md#sprint-overview-widget)  
      - [Velocity](../dashboards/widget-catalog.md#velocity-widget) (Analytics)  
      - [Work links](../dashboards/widget-catalog.md#work-links-widget)  
      ::: moniker-end
      ::: moniker range=">= tfs-2017 <= tfs-2018"
      **Work**
      - [Assigned to me](../dashboards/widget-catalog.md#assigned-to-me-widget) (User)
      - [Chart for work items](../dashboards/widget-catalog.md#chart-wit-widget)  
      - [New Work item](../dashboards/widget-catalog.md#new-work-item-widget)  
      - [Query results](../dashboards/widget-catalog.md#query-results-widget)  
      - [Query tile](../dashboards/widget-catalog.md#query-tile-widget)  
      - [Sprint burndown](../dashboards/widget-catalog.md#sprint-burndown-widget)  
      - [Sprint capacity](../dashboards/widget-catalog.md#sprint-capacity-widget)  
      - [Sprint overview](../dashboards/widget-catalog.md#sprint-overview-widget)  
      - [Work links](../dashboards/widget-catalog.md#work-links-widget)  
      ::: moniker-end
      ---
      ::: moniker range="<= tfs-2018"
      **Repos** 
      - [Code tile](../dashboards/widget-catalog.md#code-tile-widget) (Repository, Branch, Folder)
      - [Pull request](../dashboards/widget-catalog.md#pull-request-widget) (Team, User)
      ::: moniker-end
      ::: moniker range=">= azure-devops-2019"
      **Code** 
      - [Code tile](../dashboards/widget-catalog.md#code-tile-widget) (Repository, Branch, Folder)
      - [Pull request](../dashboards/widget-catalog.md#pull-request-widget) (Team)
      ::: moniker-end
   :::column-end:::
   :::column span="1":::
      ::: moniker range=">= azure-devops-2019"
      **Pipelines**
      - [Build history](../dashboards/widget-catalog.md#build-history-widget) (Build pipeline)
      - [Deployment status](../dashboards/widget-catalog.md#deployment-status-widget) (Build pipeline)
      - [Release pipeline overview](../dashboards/widget-catalog.md#release-definition-widget) (Release pipeline)
      - [Requirements quality](../dashboards/widget-catalog.md#requirements-quality-widget) (Query, Build or Release pipeline)
      ---
      **Test Plans**
      - [Chart for test plans](../dashboards/widget-catalog.md#chart-test-plan-widget)
      - [Test results trend (Advanced)](../dashboards/widget-catalog.md#test-trend-results-advanced) (Analytics, Build or Release pipeline) 
      - [Test results trend](../dashboards/widget-catalog.md#test-trend-results) (Build or Release pipeline)  
      ---
      **Information and links**
      - [Embedded web page](../dashboards/widget-catalog.md#embedded-webpage-widget)  
      - [Markdown](../dashboards/widget-catalog.md#markdown-widget)  
      - [Other links](../dashboards/widget-catalog.md#other-links-widget)  
      - [Team members](../dashboards/widget-catalog.md#team-members-widget) (Team) 
      - [Visual Studio Shortcuts](../dashboards/widget-catalog.md#visual-studio-widget) 
      - [Welcome](../dashboards/widget-catalog.md#how-to-widget) 
      ::: moniker-end
      ::: moniker range=">= tfs-2017 <= tfs-2018"
      **Build & Release**
      - [Build history](../dashboards/widget-catalog.md#build-history-widget) (Build pipeline)
      - [Deployment status](../dashboards/widget-catalog.md#deployment-status-widget) (Build pipeline)
      - [Release pipeline overview](../dashboards/widget-catalog.md#release-definition-widget) (Release pipeline)
      - [Requirements quality](../dashboards/widget-catalog.md#requirements-quality-widget) (Query, Build or Release pipeline)
      ---
      **Test**
      - [Chart for test plans](../dashboards/widget-catalog.md#chart-test-plan-widget)
      - [Test results trend](../dashboards/widget-catalog.md#test-trend-results) (Build or Release pipeline)  
      ::: moniker-end
      ---
      ::: moniker range="tfs-2018"
      **Information and links**
      - [Embedded web page](../dashboards/widget-catalog.md#embedded-webpage-widget)  
      - [Markdown](../dashboards/widget-catalog.md#markdown-widget)  
      - [Other links](../dashboards/widget-catalog.md#other-links-widget-2018)  
      - [Team members](../dashboards/widget-catalog.md#team-members-widget) (Team) 
      - [Visual Studio Shortcuts](../dashboards/widget-catalog.md#visual-studio-widget) 
      - [Welcome](../dashboards/widget-catalog.md#how-to-widget) 
      ::: moniker-end
      ::: moniker range="tfs-2017"
      **Information and links**
      - [Embedded web page](../dashboards/widget-catalog.md#embedded-webpage-widget)  
      - [Markdown](../dashboards/widget-catalog.md#markdown-widget)  
      - [Other links](../dashboards/widget-catalog.md#other-links-widget-2018)  
      - [Team members](../dashboards/widget-catalog.md#team-members-widget) (Team) 
      - [Team room](../dashboards/widget-catalog.md#team-room-widget) (Team) 
      - [Visual Studio Shortcuts](../dashboards/widget-catalog.md#visual-studio-widget) 
      - [Welcome](../dashboards/widget-catalog.md#how-to-widget) 
      ::: moniker-end
   :::column-end:::
:::row-end:::
---
