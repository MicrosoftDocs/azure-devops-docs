---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Types | REST API Reference for Team Foundation Server
description: Work with work item types programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: C58D078F-9310-4BE9-95A5-715CB70370FD
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item types

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work item types
<a name="getalistofworkitemtypes" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workItemTypes?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:---------------------------
| URL
| instance      | string    | TFS server name ({server:port}).
| project 		| string 	| Name or ID of a project that contains the work item types
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/workItemTypes?api-version=1.0
```

#### Sample response

```json
{
  "count": 14,
  "value": [
    {
      "name": "Task",
      "description": "Tracks work that needs to be done.",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control FieldName=\"System.Reason\" Type=\"FieldControl\" Label=\"Reason\" LabelPosition=\"Left\" ReadOnly=\"True\" /><Control FieldName=\"Microsoft.VSTS.CMMI.Blocked\" Type=\"FieldControl\" Label=\"Blocked\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Details\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Scheduling.RemainingWork\" Type=\"FieldControl\" Label=\"Remaining Work\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Common.BacklogPriority\" Type=\"FieldControl\" Label=\"Backlog Priority\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Common.Activity\" Type=\"FieldControl\" Label=\"Activity\" LabelPosition=\"Left\" /><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group><Column PercentWidth=\"50\"><TabGroup><Tab Label=\"Description\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab></TabGroup></Column><Column PercentWidth=\"50\"><TabGroup Margin=\"(5,0,0,0)\"><Tab Label=\"History\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" Label=\"\" LabelPosition=\"Top\" Name=\"GeneralLinks\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" Label=\"\" LabelPosition=\"Top\" /></Tab></TabGroup></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Scheduling.RemainingWork",
          "name": "Remaining Work",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.RemainingWork"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.BacklogPriority",
          "name": "Backlog Priority",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.BacklogPriority"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.Activity",
          "name": "Activity",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Activity"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        },
        {
          "referenceName": "Microsoft.VSTS.CMMI.Blocked",
          "name": "Blocked",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CMMI.Blocked"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        }
      ],
      "transitions": {
        "In Progress": [
          {
            "to": "In Progress"
          },
          {
            "to": "Removed"
          },
          {
            "to": "Done",
            "actions": [
              "Microsoft.VSTS.Actions.Checkin"
            ]
          },
          {
            "to": "To Do",
            "actions": [
              "Microsoft.VSTS.Actions.StopWork"
            ]
          }
        ],
        "To Do": [
          {
            "to": "To Do"
          },
          {
            "to": "Removed"
          },
          {
            "to": "Done",
            "actions": [
              "Microsoft.VSTS.Actions.Checkin"
            ]
          },
          {
            "to": "In Progress",
            "actions": [
              "Microsoft.VSTS.Actions.StartWork"
            ]
          }
        ],
        "Done": [
          {
            "to": "Done"
          },
          {
            "to": "In Progress"
          },
          {
            "to": "To Do"
          }
        ],
        "Removed": [
          {
            "to": "Removed"
          },
          {
            "to": "To Do"
          }
        ],
        "": [
          {
            "to": "To Do"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
    },
    {
      "name": "Bug",
      "description": "Describes a divergence between required and actual behavior, and tracks the work done to correct the defect and verify the correction.",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control FieldName=\"System.Reason\" Type=\"FieldControl\" Label=\"Reason\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Details\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Scheduling.Effort\" Type=\"FieldControl\" Label=\"Effort\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Common.Severity\" Type=\"FieldControl\" Label=\"Severity\" LabelPosition=\"Left\" /><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group><Column PercentWidth=\"50\"><TabGroup><Tab Label=\"Steps to Reproduce\"><Control FieldName=\"Microsoft.VSTS.TCM.ReproSteps\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" MinimumSize=\"(100,200)\" Dock=\"Fill\" /></Tab><Tab Label=\"System\"><Group Label=\"Build\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Build.FoundIn\" Type=\"FieldControl\" Label=\"Found in Build\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Build.IntegrationBuild\" Type=\"FieldControl\" Label=\"Integrated in Build\" LabelPosition=\"Left\" /></Column></Group><Control FieldName=\"Microsoft.VSTS.TCM.SystemInfo\" Type=\"HtmlFieldControl\" Label=\"System Info\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Test Cases\"><Control Type=\"LinksControl\" Name=\"TestedBy\" Label=\"\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /></LinkColumns><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"Microsoft.VSTS.Common.TestedBy\" FilterOn=\"forwardname\" /></WorkItemLinkFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Test Case\" /></WorkItemTypeFilters></LinksControlOptions></Control></Tab><Tab Label=\"Tasks\"><Control Type=\"LinksControl\" Label=\"\" LabelPosition=\"Top\" Name=\"TaskLinks\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /></LinkColumns><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"System.LinkTypes.Hierarchy\" FilterOn=\"forwardname\" /></WorkItemLinkFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Task\" /></WorkItemTypeFilters></LinksControlOptions></Control></Tab></TabGroup></Column><Column PercentWidth=\"50\"><TabGroup Margin=\"(5,0,0,0)\"><Tab Label=\"Acceptance Criteria\"><Control FieldName=\"Microsoft.VSTS.Common.AcceptanceCriteria\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" MinimumSize=\"(100,200)\" /></Tab><Tab Label=\"History\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" LabelPosition=\"Top\" /></Tab></TabGroup></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.SystemInfo",
          "name": "System Info",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.SystemInfo"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.ReproSteps",
          "name": "Repro Steps",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.ReproSteps"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.BacklogPriority",
          "name": "Backlog Priority",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.BacklogPriority"
        },
        {
          "referenceName": "Microsoft.VSTS.Scheduling.Effort",
          "name": "Effort",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.Effort"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.AcceptanceCriteria",
          "name": "Acceptance Criteria",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.AcceptanceCriteria"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.Severity",
          "name": "Severity",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Severity"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.FoundIn",
          "name": "Found In",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.FoundIn"
        }
      ],
      "transitions": {
        "Approved": [
          {
            "to": "Approved"
          },
          {
            "to": "Committed"
          },
          {
            "to": "New"
          },
          {
            "to": "Removed"
          },
          {
            "to": "Done"
          }
        ],
        "New": [
          {
            "to": "New"
          },
          {
            "to": "Committed"
          },
          {
            "to": "Approved"
          },
          {
            "to": "Removed"
          },
          {
            "to": "Done"
          }
        ],
        "Done": [
          {
            "to": "Done"
          },
          {
            "to": "Committed"
          },
          {
            "to": "Approved"
          },
          {
            "to": "New"
          }
        ],
        "Committed": [
          {
            "to": "Committed"
          },
          {
            "to": "Approved"
          },
          {
            "to": "New"
          },
          {
            "to": "Done"
          }
        ],
        "Removed": [
          {
            "to": "Removed"
          },
          {
            "to": "New"
          }
        ],
        "": [
          {
            "to": "New"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Bug"
    },
    {
      "name": "Code Review Request",
      "description": "Represents the master work item for a code review. Child work items should be created of the type Code Review Response.",
      "xmlForm": "<FORM><Layout HideControlBorders=\"true\"><Group><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.Title\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(5,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Information\"><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.AssignedTo\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" EmptyText=\"&lt;No one&gt;\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.CodeReview.ContextType\" Label=\"Associated Context Type\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.CodeReview.Context\" Label=\"Associated Context\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.CodeReview.ContextOwner\" Label=\"Associated Context Owner\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Classification\"><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"WorkItemClassificationControl\" FieldName=\"System.AreaPath\" Label=\"&amp;Area\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"WorkItemClassificationControl\" FieldName=\"System.IterationPath\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group Margin=\"(5,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.State\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.Reason\" Label=\"Reason\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"System Info\"><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.CreatedBy\" Label=\"Created By\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.CreatedDate\" Label=\"Created Date\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.ChangedBy\" Label=\"Updated By\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.ChangedDate\" Label=\"Updated Date\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.Common.ClosedBy\" Label=\"Closed By\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.Common.ClosedDate\" Label=\"Closed Date\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.CodeReview.ClosedStatus\" Label=\"Closed Status\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.CodeReview.ClosingComment\" Label=\"Closing Comment\" LabelPosition=\"Left\" /></Column></Group></Column></Group><TabGroup><Tab Label=\"Details\"><Group><Column PercentWidth=\"50\"><Control ReadOnly=\"True\" Type=\"HtmlFieldControl\" FieldName=\"System.Description\" Label=\"Description\" LabelPosition=\"Top\" Dock=\"Fill\" /></Column><Column PercentWidth=\"50\"><Control ReadOnly=\"True\" Type=\"WorkItemLogControl\" FieldName=\"System.History\" Label=\"Histor&amp;y\" LabelPosition=\"Top\" Dock=\"Fill\" /></Column></Group></Tab><Tab Label=\"Links\"><Control ReadOnly=\"True\" Type=\"LinksControl\" Name=\"ChildLinks\" Label=\"Requests\" LabelPosition=\"Top\"><LinksControlOptions><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"System.LinkTypes.Hierarchy\" /></WorkItemLinkFilters><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Code Review Response\" /></WorkItemTypeFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><LinkColumns><LinkColumn RefName=\"System.ID\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn RefName=\"Microsoft.VSTS.Common.ClosedBy\" /><LinkColumn RefName=\"Microsoft.VSTS.CodeReview.ClosedStatus\" /><LinkColumn RefName=\"Microsoft.VSTS.Common.ClosedDate\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns></LinksControlOptions></Control></Tab></TabGroup></Layout></FORM>",
      "fieldInstances": [
        {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedBy",
          "name": "Closed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedBy"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.ClosingComment",
          "name": "Closing Comment",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ClosingComment"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.ContextCode",
          "name": "Associated Context Code",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ContextCode"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.ContextType",
          "name": "Associated Context Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ContextType"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.Context",
          "name": "Associated Context",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.Context"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.ContextOwner",
          "name": "Associated Context Owner",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ContextOwner"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.ClosedStatusCode",
          "name": "Closed Status Code",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ClosedStatusCode"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.ClosedStatus",
          "name": "Closed Status",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ClosedStatus"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.StateCode",
          "name": "State Code",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.StateCode"
        }
      ],
      "transitions": {
        "Requested": [
          {
            "to": "Requested"
          },
          {
            "to": "Closed",
            "actions": [
              "Microsoft.VSTS.Actions.Checkin",
              "Microsoft.VSTS.CodeReview.Abandon"
            ]
          }
        ],
        "": [
          {
            "to": "Requested"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Code%20Review%20Request"
    },
    {
      "name": "Code Review Response",
      "description": "This is a child work item that should be parented to a Code Review Request work item. It is assigned to the reviewer and contains the current state of the review for this reviewer.",
      "xmlForm": "<FORM><Layout HideControlBorders=\"true\"><Group><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.Title\" EmptyText=\"&lt;Enter title here&gt;\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.AssignedTo\" ControlFontSize=\"large\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" EmptyText=\"&lt;No one&gt;\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.Common.ReviewedBy\" Label=\"Reviewed By\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(5,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.State\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.Reason\" Label=\"Reason\" LabelPosition=\"Left\" /></Column></Group><Group Label=\"Classification\"><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"WorkItemClassificationControl\" FieldName=\"System.AreaPath\" Label=\"&amp;Area\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"WorkItemClassificationControl\" FieldName=\"System.IterationPath\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"System Info\"><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.CreatedBy\" Label=\"Created By\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.CreatedDate\" Label=\"Created Date\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.ChangedBy\" Label=\"Updated By\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"System.ChangedDate\" Label=\"Updated Date\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.CodeReview.AcceptedBy\" Label=\"Accepted By\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.CodeReview.AcceptedDate\" Label=\"Accepted Date\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.Common.ClosedBy\" Label=\"Closed By\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.Common.ClosedDate\" Label=\"Closed Date\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.CodeReview.ClosedStatus\" Label=\"Closed Status\" LabelPosition=\"Left\" /><Control ReadOnly=\"True\" Type=\"FieldControl\" FieldName=\"Microsoft.VSTS.CodeReview.ClosingComment\" Label=\"Closing Comment\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group Margin=\"(5,0,0,0)\"><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" Type=\"WorkItemLogControl\" FieldName=\"System.History\" Label=\"Histor&amp;y\" LabelPosition=\"Top\" Dock=\"Fill\" /></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.AcceptedDate",
          "name": "Accepted Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.AcceptedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.AcceptedBy",
          "name": "Accepted By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.AcceptedBy"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedBy",
          "name": "Closed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedBy"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ReviewedBy",
          "name": "Reviewed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ReviewedBy"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.ClosingComment",
          "name": "Closing Comment",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ClosingComment"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.ClosedStatusCode",
          "name": "Closed Status Code",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ClosedStatusCode"
        },
        {
          "referenceName": "Microsoft.VSTS.CodeReview.ClosedStatus",
          "name": "Closed Status",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ClosedStatus"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.StateCode",
          "name": "State Code",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.StateCode"
        }
      ],
      "transitions": {
        "Requested": [
          {
            "to": "Requested"
          },
          {
            "to": "Accepted",
            "actions": [
              "Microsoft.VSTS.CodeReview.Accept"
            ]
          },
          {
            "to": "Closed",
            "actions": [
              "Microsoft.VSTS.CodeReview.Decline",
              "Microsoft.VSTS.CodeReview.Remove"
            ]
          }
        ],
        "Accepted": [
          {
            "to": "Accepted"
          },
          {
            "to": "Closed",
            "actions": [
              "Microsoft.VSTS.CodeReview.Complete",
              "Microsoft.VSTS.CodeReview.Decline",
              "Microsoft.VSTS.CodeReview.Remove"
            ]
          }
        ],
        "Closed": [
          {
            "to": "Closed"
          },
          {
            "to": "Requested",
            "actions": [
              "Microsoft.VSTS.CodeReview.Reassign"
            ]
          }
        ],
        "": [
          {
            "to": "Requested"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Code%20Review%20Response"
    },
    {
      "name": "Feature",
      "description": "Tracks a feature that will be released with the product",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control FieldName=\"System.Reason\" Type=\"FieldControl\" Label=\"Reason\" LabelPosition=\"Left\" ReadOnly=\"True\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Details\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Common.Priority\" Type=\"FieldControl\" Label=\"Priority\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Common.BusinessValue\" Type=\"FieldControl\" Label=\"Business Value\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Scheduling.TargetDate\" Type=\"DateTimeControl\" Label=\"Target Date\" LabelPosition=\"Left\" /><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group><Column PercentWidth=\"50\"><TabGroup><Tab Label=\"Description\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Implementation\"><Control Type=\"LinksControl\" Name=\"Hierarchy\" Label=\"\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /></LinkColumns><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"System.LinkTypes.Hierarchy\" FilterOn=\"forwardname\" /></WorkItemLinkFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Product Backlog Item\" /></WorkItemTypeFilters></LinksControlOptions></Control></Tab></TabGroup></Column><Column PercentWidth=\"50\"><TabGroup Margin=\"(5,0,0,0)\"><Tab Label=\"Acceptance Criteria\"><Control FieldName=\"Microsoft.VSTS.Common.AcceptanceCriteria\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"History\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" Label=\"\" LabelPosition=\"Top\" /></Tab></TabGroup></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "helpText": "The iteration within which this feature will be implemented",
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "helpText": "The area of the product with which this feature is associated",
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "helpText": "What the user will be able to do when this is implemented",
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "helpText": "New = New work not yet activated; Active = work remains to be done; Resolved = awaiting acceptance tests; Closed = acceptance tests passed",
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "helpText": "The reason why the feature is in its current state",
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "helpText": "The person currently owning the feature",
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "helpText": "Description or acceptance criteria for this feature to be considered complete",
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "helpText": "Discussion thread plus automatic record of changes",
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.BacklogPriority",
          "name": "Backlog Priority",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.BacklogPriority"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.StateChangeDate",
          "name": "State Change Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.StateChangeDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ActivatedDate",
          "name": "Activated Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ActivatedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ActivatedBy",
          "name": "Activated By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ActivatedBy"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedBy",
          "name": "Closed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedBy"
        },
        {
          "helpText": "Priority for completing the feature, based on business goals",
          "referenceName": "Microsoft.VSTS.Common.Priority",
          "name": "Priority",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
        },
        {
          "helpText": "The target date for completing the feature",
          "referenceName": "Microsoft.VSTS.Scheduling.TargetDate",
          "name": "Target Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.TargetDate"
        },
        {
          "helpText": "The business value for the customer when the feature is released",
          "referenceName": "Microsoft.VSTS.Common.BusinessValue",
          "name": "Business Value",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.BusinessValue"
        },
        {
          "helpText": "The build in which the feature was fixed",
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.AcceptanceCriteria",
          "name": "Acceptance Criteria",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.AcceptanceCriteria"
        }
      ],
      "transitions": {
        "Removed": [
          {
            "to": "Removed"
          },
          {
            "to": "New"
          }
        ],
        "Done": [
          {
            "to": "Done"
          },
          {
            "to": "New"
          },
          {
            "to": "In Progress"
          }
        ],
        "In Progress": [
          {
            "to": "In Progress"
          },
          {
            "to": "New"
          },
          {
            "to": "Removed"
          },
          {
            "to": "Done"
          }
        ],
        "": [
          {
            "to": "New"
          }
        ],
        "New": [
          {
            "to": "New"
          },
          {
            "to": "Removed"
          },
          {
            "to": "Done"
          },
          {
            "to": "In Progress"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feature"
    },
    {
      "name": "Feedback Request",
      "description": "Represents the master work item for a feedback session. Child work items should be created of the type Feedback Response.",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(0,0,0,5)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group><Column PercentWidth=\"70\"><TabGroup><Tab Label=\"Details\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"Description\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Application\"><Group><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Feedback.ApplicationType\" Type=\"FieldControl\" Label=\"Type\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Feedback.ApplicationStartInformation\" Type=\"FieldControl\" Label=\"Start Information\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Feedback.ApplicationLaunchInstructions\" Type=\"HtmlFieldControl\" Label=\"Launch Instructions\" LabelPosition=\"Left\" Dock=\"Fill\" /></Column></Group></Tab><Tab Label=\"All Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.ID\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"History\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"Histor&amp;y\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab></TabGroup></Column><Column PercentWidth=\"30\"><Group Margin=\"(5,0,0,0)\"><Column PercentWidth=\"100\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" EmptyText=\"&lt;No one&gt;\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /></Column></Group><Group Label=\"Classification\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group></Column></Group></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "helpText": "The iteration within which this feedback was requested",
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "helpText": "The area of the product with which this feedback request is associated",
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "helpText": "One line summary of the feedback being requested",
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "helpText": "Current status of the feedback request",
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "helpText": "The reason why the feedback request is in its current state",
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "helpText": "The person requesting feedback",
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "helpText": "Guidance on what areas of the product that feedback should be scoped to",
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "helpText": "Discussion thread plus automatic record of changes",
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedBy",
          "name": "Closed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedBy"
        },
        {
          "helpText": "The type of application on which to give feedback",
          "referenceName": "Microsoft.VSTS.Feedback.ApplicationType",
          "name": "Application Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Feedback.ApplicationType"
        },
        {
          "helpText": "The path to execute the application",
          "referenceName": "Microsoft.VSTS.Feedback.ApplicationStartInformation",
          "name": "Application Start Information",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Feedback.ApplicationStartInformation"
        },
        {
          "helpText": "Instructions to launch the specified application",
          "referenceName": "Microsoft.VSTS.Feedback.ApplicationLaunchInstructions",
          "name": "Application Launch Instructions",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Feedback.ApplicationLaunchInstructions"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        }
      ],
      "transitions": {
        "Closed": [
          {
            "to": "Closed"
          },
          {
            "to": "Active"
          }
        ],
        "": [
          {
            "to": "Active"
          }
        ],
        "Active": [
          {
            "to": "Active"
          },
          {
            "to": "Closed"
          },
          {
            "to": "Removed"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feedback%20Request"
    },
    {
      "name": "Feedback Response",
      "description": "This is a child work item that should be parented to a Feedback Request work item. It is assigned to the reviewer and contains the current state of the review for this reviewer.",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(0,0,0,5)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group><Column PercentWidth=\"70\"><TabGroup><Tab Label=\"Notes\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"Stakeholder Comments\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Stories\"><Control Type=\"LinksControl\" Name=\"ChildLinks\" Label=\"Backlog items related to this feedback\" LabelPosition=\"Top\"><LinksControlOptions><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"System.LinkTypes.Related\" /></WorkItemLinkFilters><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Product Backlog Item\" /><Filter WorkItemType=\"Bug\" /></WorkItemTypeFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.CreatedBy\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns></LinksControlOptions></Control></Tab><Tab Label=\"System Info\"><Control FieldName=\"Microsoft.VSTS.TCM.SystemInfo\" Type=\"HtmlFieldControl\" Label=\"System Info\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"All Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.ID\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" Label=\"Attachments\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"History\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"Histor&amp;y\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab></TabGroup></Column><Column PercentWidth=\"30\"><Group Margin=\"(5,0,0,0)\"><Column PercentWidth=\"100\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control ReadOnly=\"True\" FieldName=\"System.CreatedBy\" Type=\"FieldControl\" Label=\"Created By\" LabelPosition=\"Left\" /><Control FieldName=\"System.AssignedTo\" EmptyText=\"&lt;No one&gt;\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Common.Rating\" Type=\"FieldControl\" Label=\"Rating\" LabelPosition=\"Left\" /></Column></Group><Group Label=\"Classification\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group></Column></Group></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "helpText": "The iteration within which this feedback response was requested",
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "helpText": "The area of the product with which this feedback response is associated",
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "helpText": "One line summary of the feedback response",
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "helpText": "Current status of the feedback response",
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "helpText": "The reason why the feedback response is in its current state",
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "helpText": "Person responsible for next set of actions on the feedback",
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "helpText": "Feedback response from the stakeholder",
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "helpText": "Discussion thread plus automatic record of changes",
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedBy",
          "name": "Closed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedBy"
        },
        {
          "helpText": "Overall rating provided as part of feedback response",
          "referenceName": "Microsoft.VSTS.Common.Rating",
          "name": "Rating",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Rating"
        },
        {
          "helpText": "Test context, provided automatically by test infrastructure",
          "referenceName": "Microsoft.VSTS.TCM.SystemInfo",
          "name": "System Info",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.SystemInfo"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        }
      ],
      "transitions": {
        "": [
          {
            "to": "Active"
          }
        ],
        "Active": [
          {
            "to": "Active"
          },
          {
            "to": "Closed"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feedback%20Response"
    },
    {
      "name": "Impediment",
      "description": "Tracks an obstacle to progress.",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control FieldName=\"System.Reason\" Type=\"FieldControl\" Label=\"Reason\" LabelPosition=\"Left\" ReadOnly=\"True\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Details\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Common.Priority\" Type=\"FieldControl\" Label=\"Priority\" LabelPosition=\"Left\" /><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group><Column PercentWidth=\"50\"><TabGroup><Tab Label=\"Description\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Resolution\"><Control FieldName=\"Microsoft.VSTS.Common.Resolution\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab></TabGroup></Column><Column PercentWidth=\"50\"><TabGroup Margin=\"(5,0,0,0)\"><Tab Label=\"History\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" Name=\"IssueLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" LabelPosition=\"Top\" /></Tab></TabGroup></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.Resolution",
          "name": "Resolution",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Resolution"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.Priority",
          "name": "Priority",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
        }
      ],
      "transitions": {
        "": [
          {
            "to": "Open"
          }
        ],
        "Open": [
          {
            "to": "Open"
          },
          {
            "to": "Closed"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Impediment"
    },
    {
      "name": "Product Backlog Item",
      "description": "Tracks an activity the user will be able to perform with the product.",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control FieldName=\"System.Reason\" Type=\"FieldControl\" Label=\"Reason\" LabelPosition=\"Left\" ReadOnly=\"True\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Details\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Scheduling.Effort\" Type=\"FieldControl\" Label=\"Effort\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Common.BusinessValue\" Type=\"FieldControl\" Label=\"Business Value\" LabelPosition=\"Left\" /><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group><Column PercentWidth=\"50\"><TabGroup><Tab Label=\"Description\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Storyboards\"><Control Type=\"LinksControl\" Name=\"StoryboardsControl\"><LinksControlOptions><WorkItemLinkFilters FilterType=\"excludeAll\" /><ExternalLinkFilters FilterType=\"include\"><Filter LinkType=\"Storyboard\" /></ExternalLinkFilters><LinkColumns><LinkColumn RefName=\"System.Title\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns></LinksControlOptions></Control></Tab><Tab Label=\"Test Cases\"><Control Type=\"LinksControl\" Label=\"\" LabelPosition=\"Top\" Name=\"TestedBy\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /></LinkColumns><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"Microsoft.VSTS.Common.TestedBy\" FilterOn=\"forwardname\" /></WorkItemLinkFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Test Case\" /></WorkItemTypeFilters></LinksControlOptions></Control></Tab><Tab Label=\"Tasks\"><Control Type=\"LinksControl\" Name=\"Hierarchy\" Label=\"\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /></LinkColumns><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"System.LinkTypes.Hierarchy\" FilterOn=\"forwardname\" /></WorkItemLinkFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Task\" /></WorkItemTypeFilters></LinksControlOptions></Control></Tab></TabGroup></Column><Column PercentWidth=\"50\"><TabGroup Margin=\"(5,0,0,0)\"><Tab Label=\"Acceptance Criteria\"><Control FieldName=\"Microsoft.VSTS.Common.AcceptanceCriteria\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"History\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" Label=\"\" LabelPosition=\"Top\" /></Tab></TabGroup></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.BacklogPriority",
          "name": "Backlog Priority",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.BacklogPriority"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.BusinessValue",
          "name": "Business Value",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.BusinessValue"
        },
        {
          "referenceName": "Microsoft.VSTS.Scheduling.Effort",
          "name": "Effort",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.Effort"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.AcceptanceCriteria",
          "name": "Acceptance Criteria",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.AcceptanceCriteria"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        }
      ],
      "transitions": {
        "Approved": [
          {
            "to": "Approved"
          },
          {
            "to": "Committed"
          },
          {
            "to": "New"
          },
          {
            "to": "Removed"
          },
          {
            "to": "Done"
          }
        ],
        "New": [
          {
            "to": "New"
          },
          {
            "to": "Committed"
          },
          {
            "to": "Approved"
          },
          {
            "to": "Removed"
          },
          {
            "to": "Done"
          }
        ],
        "Done": [
          {
            "to": "Done"
          },
          {
            "to": "Committed"
          },
          {
            "to": "Approved"
          },
          {
            "to": "New"
          }
        ],
        "Committed": [
          {
            "to": "Committed"
          },
          {
            "to": "Approved"
          },
          {
            "to": "New"
          },
          {
            "to": "Done"
          }
        ],
        "Removed": [
          {
            "to": "Removed"
          },
          {
            "to": "New"
          }
        ],
        "": [
          {
            "to": "New"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
    },
    {
      "name": "Shared Steps",
      "description": "Server-side data for reusable set of test steps.",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Common.Priority\" Type=\"FieldControl\" Label=\"Priority\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Classification\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /></Column></Group></Column></Group><TabGroup><Tab Label=\"Steps\"><Control FieldName=\"Microsoft.VSTS.TCM.Steps\" Type=\"TestStepsControl\" LabelPosition=\"Top\" Dock=\"Fill\"><CustomControlOptions /></Control></Tab><Tab Label=\"Summary\"><Group><Column PercentWidth=\"50\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"Description\" LabelPosition=\"Top\" /></Column><Column PercentWidth=\"50\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"Histor&amp;y\" LabelPosition=\"Top\" /></Column></Group></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" LabelPosition=\"Top\" /></Tab></TabGroup></Layout></FORM>",
      "fieldInstances": [
        {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.Issue",
          "name": "Issue",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Issue"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.StateChangeDate",
          "name": "State Change Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.StateChangeDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ActivatedDate",
          "name": "Activated Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ActivatedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ActivatedBy",
          "name": "Activated By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ActivatedBy"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedBy",
          "name": "Closed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedBy"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.Priority",
          "name": "Priority",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.Steps",
          "name": "Steps",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.Steps"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.Parameters",
          "name": "Parameters",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.Parameters"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        }
      ],
      "transitions": {
        "Closed": [
          {
            "to": "Closed"
          },
          {
            "to": "Active"
          }
        ],
        "": [
          {
            "to": "Active"
          }
        ],
        "Active": [
          {
            "to": "Active"
          },
          {
            "to": "Closed"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Shared%20Steps"
    },
    {
      "name": "Test Case",
      "description": "Server-side data for a set of steps to be tested.",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Common.Priority\" Type=\"FieldControl\" Label=\"Priority\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Details\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.TCM.AutomationStatus\" Type=\"FieldControl\" Label=\"Automation status\" LabelPosition=\"Left\" /><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /></Column></Group></Column></Group><TabGroup Margin=\"(0,10,0,0)\"><Tab Label=\"Steps\"><Control FieldName=\"Microsoft.VSTS.TCM.Steps\" Type=\"TestStepsControl\" LabelPosition=\"Top\" Dock=\"Fill\"><CustomControlOptions /></Control></Tab><Tab Label=\"Summary\"><Group><Column PercentWidth=\"50\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"Description\" LabelPosition=\"Top\" Dock=\"Fill\" /></Column><Column PercentWidth=\"50\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"Histor&amp;y\" LabelPosition=\"Top\" Dock=\"Fill\" /></Column></Group></Tab><Tab Label=\"Tested Backlog Items\"><Control Type=\"LinksControl\" Name=\"Tested\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /></LinkColumns><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"Microsoft.VSTS.Common.TestedBy\" FilterOn=\"reversename\" /></WorkItemLinkFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Bug\" /><Filter WorkItemType=\"Product Backlog Item\" /></WorkItemTypeFilters></LinksControlOptions></Control></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" LabelPosition=\"Top\" /></Tab><Tab Label=\"Associated Automation\"><Control Type=\"AssociatedAutomationControl\" LabelPosition=\"Top\" Dock=\"Fill\"><CustomControlOptions /></Control></Tab></TabGroup></Layout></FORM>",
      "fieldInstances": [
        {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.StateChangeDate",
          "name": "State Change Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.StateChangeDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ActivatedDate",
          "name": "Activated Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ActivatedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ActivatedBy",
          "name": "Activated By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ActivatedBy"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedDate",
          "name": "Closed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.ClosedBy",
          "name": "Closed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedBy"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.Priority",
          "name": "Priority",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.Steps",
          "name": "Steps",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.Steps"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.AutomatedTestName",
          "name": "Automated Test Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomatedTestName"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.AutomatedTestStorage",
          "name": "Automated Test Storage",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomatedTestStorage"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.AutomatedTestId",
          "name": "Automated Test Id",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomatedTestId"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.AutomatedTestType",
          "name": "Automated Test Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomatedTestType"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.Parameters",
          "name": "Parameters",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.Parameters"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.LocalDataSource",
          "name": "Local Data Source",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.LocalDataSource"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.AutomationStatus",
          "name": "Automation status",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomationStatus"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        }
      ],
      "transitions": {
        "Closed": [
          {
            "to": "Closed"
          },
          {
            "to": "Ready"
          },
          {
            "to": "Design"
          }
        ],
        "Design": [
          {
            "to": "Design"
          },
          {
            "to": "Ready"
          },
          {
            "to": "Closed"
          }
        ],
        "Ready": [
          {
            "to": "Ready"
          },
          {
            "to": "Closed"
          },
          {
            "to": "Design"
          }
        ],
        "": [
          {
            "to": "Design"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Case"
    },
    {
      "name": "Shared Parameter",
      "description": "Server-side data for reusable set of parameters.",
      "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Classification\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /></Column></Group></Column></Group><TabGroup><Tab Label=\"Summary\"><Group><Column PercentWidth=\"50\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"Description\" LabelPosition=\"Top\" /></Column><Column PercentWidth=\"50\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"Histor&amp;y\" LabelPosition=\"Top\" /></Column></Group></Tab><Tab Label=\"Referenced Test Cases\"><Control Type=\"LinksControl\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"Microsoft.VSTS.TestCase.SharedParameterReferencedBy\" FilterOn=\"forwardname\" /></WorkItemLinkFilters><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Test Case\" /></WorkItemTypeFilters><ExternalLinkFilters FilterType=\"excludeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"All Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.ID\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" LabelPosition=\"Top\" /></Tab></TabGroup></Layout></FORM>",
      "fieldInstances": [
        {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "referenceName": "Microsoft.VSTS.Common.StateChangeDate",
          "name": "State Change Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.StateChangeDate"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.Parameters",
          "name": "Parameters",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.Parameters"
        },
        {
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        }
      ],
      "transitions": {
        "Active": [
          {
            "to": "Active"
          },
          {
            "to": "Inactive"
          }
        ],
        "Inactive": [
          {
            "to": "Inactive"
          },
          {
            "to": "Active"
          }
        ],
        "": [
          {
            "to": "Active"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Shared%20Parameter"
    },
    {
      "name": "Test Plan",
      "description": "Tracks test activities for a specific milestone or release.",
      "xmlForm": "<FORM><Layout HideControlBorders=\"true\" HideReadOnlyEmptyFields=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" LabelPosition=\"Top\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"33\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"33\"><Group Label=\"Details\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"33\"><Group Label=\"Timelines\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Scheduling.StartDate\" Type=\"DateTimeControl\" Label=\"Start Date\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Scheduling.FinishDate\" Type=\"DateTimeControl\" Label=\"Finish Date\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group><Column PercentWidth=\"50\"><TabGroup Margin=\"(5,0,0,0)\"><Tab Label=\"Summary\"><Group><Column PercentWidth=\"50\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"Description\" LabelPosition=\"Top\" Dock=\"Fill\" /></Column><Column PercentWidth=\"50\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"Histor&amp;y\" LabelPosition=\"Top\" Dock=\"Fill\" /></Column></Group></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" LabelPosition=\"Top\" /></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab></TabGroup></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "helpText": "The iteration within which this test plan will execute.",
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "helpText": "The area of the product associated with this test plan.",
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "helpText": "Short description of the test plan.",
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "helpText": "Workflow status.  Active = tests in this test plan must be run; Inactive = tests in this test plan no longer need to be run",
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "helpText": "Reason for the current test plan state.",
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "helpText": "The person currently owning this test plan.",
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "helpText": "Purpose of this test plan",
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "helpText": "Discussion thread plus automatic record of changes",
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "helpText": "The start date to run the tests in this test plan.",
          "referenceName": "Microsoft.VSTS.Scheduling.StartDate",
          "name": "Start Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.StartDate"
        },
        {
          "helpText": "The completion date for running all the tests in this test plan.",
          "referenceName": "Microsoft.VSTS.Scheduling.FinishDate",
          "name": "Finish Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.FinishDate"
        },
        {
          "helpText": "The build on which the test plan was executed",
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        }
      ],
      "transitions": {
        "Active": [
          {
            "to": "Active"
          },
          {
            "to": "Inactive"
          }
        ],
        "Inactive": [
          {
            "to": "Inactive"
          },
          {
            "to": "Active"
          }
        ],
        "": [
          {
            "to": "Active"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Plan"
    },
    {
      "name": "Test Suite",
      "description": "Tracks test activities for a specific feature, requirement, or user story.",
      "xmlForm": "<FORM><Layout HideControlBorders=\"true\" HideReadOnlyEmptyFields=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" LabelPosition=\"Top\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Details\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.TCM.TestSuiteType\" Type=\"FieldControl\" Label=\"Test Suite Type\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group><Column PercentWidth=\"100\"><TabGroup Margin=\"(5,0,0,0)\"><Tab Label=\"Summary\"><Group><Column PercentWidth=\"50\"><Control FieldName=\"System.Description\" Type=\"HtmlFieldControl\" Label=\"Description\" LabelPosition=\"Top\" Dock=\"Fill\" /></Column><Column PercentWidth=\"50\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"Histor&amp;y\" LabelPosition=\"Top\" Dock=\"Fill\" /></Column></Group></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" LabelPosition=\"Top\" /></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab></TabGroup></Column></Group></Layout></FORM>",
      "fieldInstances": [
        {
          "helpText": "The iteration for this test suite.",
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
        },
        {
          "referenceName": "System.IterationId",
          "name": "Iteration ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
        },
        {
          "referenceName": "System.ExternalLinkCount",
          "name": "External Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
        },
        {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        {
          "referenceName": "System.HyperLinkCount",
          "name": "Hyperlink Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
        },
        {
          "referenceName": "System.AttachedFileCount",
          "name": "Attached File Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
        },
        {
          "referenceName": "System.NodeName",
          "name": "Node Name",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
        },
        {
          "helpText": "The area of the product associated with this test suite.",
          "referenceName": "System.AreaPath",
          "name": "Area Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
        },
        {
          "referenceName": "System.RevisedDate",
          "name": "Revised Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
        },
        {
          "referenceName": "System.ChangedDate",
          "name": "Changed Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
        },
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.AreaId",
          "name": "Area ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
        },
        {
          "referenceName": "System.AuthorizedAs",
          "name": "Authorized As",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
        },
        {
          "helpText": "Short description of the test suite.",
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "helpText": "The workflow state of the test suite.",
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        {
          "referenceName": "System.AuthorizedDate",
          "name": "Authorized Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
        },
        {
          "referenceName": "System.Watermark",
          "name": "Watermark",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
        },
        {
          "referenceName": "System.Rev",
          "name": "Rev",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
        },
        {
          "referenceName": "System.ChangedBy",
          "name": "Changed By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
        },
        {
          "helpText": "The reason why  the current test suite is in the current state.",
          "referenceName": "System.Reason",
          "name": "Reason",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
        },
        {
          "helpText": "The person currently assigned to the test suite.",
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
        },
        {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        {
          "referenceName": "System.CreatedDate",
          "name": "Created Date",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
        },
        {
          "referenceName": "System.CreatedBy",
          "name": "Created By",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
        },
        {
          "helpText": "Purpose of this test suite",
          "referenceName": "System.Description",
          "name": "Description",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
        },
        {
          "helpText": "Discussion thread plus automatic record of changes",
          "referenceName": "System.History",
          "name": "History",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
        },
        {
          "referenceName": "System.BISLinks",
          "name": "BIS Links",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
        },
        {
          "referenceName": "System.RelatedLinkCount",
          "name": "Related Link Count",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
        },
        {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
        },
        {
          "helpText": "The build on which the test suite was executed",
          "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
          "name": "Integration Build",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.TestSuiteTypeId",
          "name": "Test Suite Type Id",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.TestSuiteTypeId"
        },
        {
          "helpText": "Specifies the category of the test suite.",
          "referenceName": "Microsoft.VSTS.TCM.TestSuiteType",
          "name": "Test Suite Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.TestSuiteType"
        },
        {
          "referenceName": "Microsoft.VSTS.TCM.QueryText",
          "name": "Query Text",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.QueryText"
        },
        {
          "helpText": "Captures the test suite audit trail.",
          "referenceName": "Microsoft.VSTS.TCM.TestSuiteAudit",
          "name": "Test Suite Audit",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.TestSuiteAudit"
        }
      ],
      "transitions": {
        "In Progress": [
          {
            "to": "In Progress"
          },
          {
            "to": "Completed"
          },
          {
            "to": "In Planning"
          }
        ],
        "In Planning": [
          {
            "to": "In Planning"
          },
          {
            "to": "Completed"
          },
          {
            "to": "In Progress"
          }
        ],
        "Completed": [
          {
            "to": "Completed"
          },
          {
            "to": "In Progress"
          },
          {
            "to": "In Planning"
          }
        ],
        "": [
          {
            "to": "In Progress"
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Suite"
    }
  ]
}
```


## Get a work item type
<a name="getaworkitemtype" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workItemTypes/{name}?api-version={version}
```

| Property | Type   | Description |
|:---------|:-------|:---------------------------
| URL
| instance | string	| TFS server name ({server:port}).
| project  | string | Name or ID of a project that contains the work item types
| name 	   | string | Name of the work item type
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/workItemTypes/Bug?api-version=1.0
```

#### Sample response

```json
{
  "name": "Bug",
  "description": "Describes a divergence between required and actual behavior, and tracks the work done to correct the defect and verify the correction.",
  "xmlForm": "<FORM><Layout HideReadOnlyEmptyFields=\"true\" HideControlBorders=\"true\"><Group Margin=\"(4,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.Title\" Type=\"FieldControl\" ControlFontSize=\"large\" EmptyText=\"&lt;Enter title here&gt;\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"100\"><Control FieldName=\"System.IterationPath\" Type=\"WorkItemClassificationControl\" Label=\"Ite&amp;ration\" LabelPosition=\"Left\" /></Column></Group><Group Margin=\"(10,0,0,0)\"><Column PercentWidth=\"50\"><Group Label=\"Status\"><Column PercentWidth=\"100\"><Control FieldName=\"System.AssignedTo\" Type=\"FieldControl\" Label=\"Assi&amp;gned To\" LabelPosition=\"Left\" /><Control FieldName=\"System.State\" Type=\"FieldControl\" Label=\"Stat&amp;e\" LabelPosition=\"Left\" /><Control FieldName=\"System.Reason\" Type=\"FieldControl\" Label=\"Reason\" LabelPosition=\"Left\" /></Column></Group></Column><Column PercentWidth=\"50\"><Group Label=\"Details\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Scheduling.Effort\" Type=\"FieldControl\" Label=\"Effort\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Common.Severity\" Type=\"FieldControl\" Label=\"Severity\" LabelPosition=\"Left\" /><Control FieldName=\"System.AreaPath\" Type=\"WorkItemClassificationControl\" Label=\"&amp;Area\" LabelPosition=\"Left\" /></Column></Group></Column></Group><Group><Column PercentWidth=\"50\"><TabGroup><Tab Label=\"Steps to Reproduce\"><Control FieldName=\"Microsoft.VSTS.TCM.ReproSteps\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" MinimumSize=\"(100,200)\" Dock=\"Fill\" /></Tab><Tab Label=\"System\"><Group Label=\"Build\"><Column PercentWidth=\"100\"><Control FieldName=\"Microsoft.VSTS.Build.FoundIn\" Type=\"FieldControl\" Label=\"Found in Build\" LabelPosition=\"Left\" /><Control FieldName=\"Microsoft.VSTS.Build.IntegrationBuild\" Type=\"FieldControl\" Label=\"Integrated in Build\" LabelPosition=\"Left\" /></Column></Group><Control FieldName=\"Microsoft.VSTS.TCM.SystemInfo\" Type=\"HtmlFieldControl\" Label=\"System Info\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Test Cases\"><Control Type=\"LinksControl\" Name=\"TestedBy\" Label=\"\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /></LinkColumns><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"Microsoft.VSTS.Common.TestedBy\" FilterOn=\"forwardname\" /></WorkItemLinkFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Test Case\" /></WorkItemTypeFilters></LinksControlOptions></Control></Tab><Tab Label=\"Tasks\"><Control Type=\"LinksControl\" Label=\"\" LabelPosition=\"Top\" Name=\"TaskLinks\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /></LinkColumns><WorkItemLinkFilters FilterType=\"include\"><Filter LinkType=\"System.LinkTypes.Hierarchy\" FilterOn=\"forwardname\" /></WorkItemLinkFilters><ExternalLinkFilters FilterType=\"excludeAll\" /><WorkItemTypeFilters FilterType=\"include\"><Filter WorkItemType=\"Task\" /></WorkItemTypeFilters></LinksControlOptions></Control></Tab></TabGroup></Column><Column PercentWidth=\"50\"><TabGroup Margin=\"(5,0,0,0)\"><Tab Label=\"Acceptance Criteria\"><Control FieldName=\"Microsoft.VSTS.Common.AcceptanceCriteria\" Type=\"HtmlFieldControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" MinimumSize=\"(100,200)\" /></Tab><Tab Label=\"History\"><Control FieldName=\"System.History\" Type=\"WorkItemLogControl\" Label=\"\" LabelPosition=\"Top\" Dock=\"Fill\" /></Tab><Tab Label=\"Links\"><Control Type=\"LinksControl\" Name=\"GeneralLinks\" LabelPosition=\"Top\"><LinksControlOptions><LinkColumns><LinkColumn RefName=\"System.Id\" /><LinkColumn RefName=\"System.WorkItemType\" /><LinkColumn RefName=\"System.Title\" /><LinkColumn RefName=\"System.AssignedTo\" /><LinkColumn RefName=\"System.State\" /><LinkColumn LinkAttribute=\"System.Links.Comment\" /></LinkColumns><WorkItemLinkFilters FilterType=\"includeAll\" /><ExternalLinkFilters FilterType=\"includeAll\" /><WorkItemTypeFilters FilterType=\"includeAll\" /></LinksControlOptions></Control></Tab><Tab Label=\"Attachments\"><Control Type=\"AttachmentsControl\" LabelPosition=\"Top\" /></Tab></TabGroup></Column></Group></Layout></FORM>",
  "fieldInstances": [
    {
      "referenceName": "System.IterationPath",
      "name": "Iteration Path",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
    },
    {
      "referenceName": "System.IterationId",
      "name": "Iteration ID",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
    },
    {
      "referenceName": "System.ExternalLinkCount",
      "name": "External Link Count",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
    },
    {
      "referenceName": "System.TeamProject",
      "name": "Team Project",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
    },
    {
      "referenceName": "System.HyperLinkCount",
      "name": "Hyperlink Count",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
    },
    {
      "referenceName": "System.AttachedFileCount",
      "name": "Attached File Count",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
    },
    {
      "referenceName": "System.NodeName",
      "name": "Node Name",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
    },
    {
      "referenceName": "System.AreaPath",
      "name": "Area Path",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
    },
    {
      "referenceName": "System.RevisedDate",
      "name": "Revised Date",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
    },
    {
      "referenceName": "System.ChangedDate",
      "name": "Changed Date",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
    },
    {
      "referenceName": "System.Id",
      "name": "ID",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
    },
    {
      "referenceName": "System.AreaId",
      "name": "Area ID",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
    },
    {
      "referenceName": "System.AuthorizedAs",
      "name": "Authorized As",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
    },
    {
      "referenceName": "System.Title",
      "name": "Title",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
    },
    {
      "referenceName": "System.State",
      "name": "State",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
    },
    {
      "referenceName": "System.AuthorizedDate",
      "name": "Authorized Date",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
    },
    {
      "referenceName": "System.Watermark",
      "name": "Watermark",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
    },
    {
      "referenceName": "System.Rev",
      "name": "Rev",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
    },
    {
      "referenceName": "System.ChangedBy",
      "name": "Changed By",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
    },
    {
      "referenceName": "System.Reason",
      "name": "Reason",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
    },
    {
      "referenceName": "System.AssignedTo",
      "name": "Assigned To",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
    },
    {
      "referenceName": "System.WorkItemType",
      "name": "Work Item Type",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
    },
    {
      "referenceName": "System.CreatedDate",
      "name": "Created Date",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
    },
    {
      "referenceName": "System.CreatedBy",
      "name": "Created By",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
    },
    {
      "referenceName": "System.Description",
      "name": "Description",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
    },
    {
      "referenceName": "System.History",
      "name": "History",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
    },
    {
      "referenceName": "System.BISLinks",
      "name": "BIS Links",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
    },
    {
      "referenceName": "System.RelatedLinkCount",
      "name": "Related Link Count",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
    },
    {
      "referenceName": "System.Tags",
      "name": "Tags",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
    },
    {
      "referenceName": "Microsoft.VSTS.TCM.SystemInfo",
      "name": "System Info",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.SystemInfo"
    },
    {
      "referenceName": "Microsoft.VSTS.Common.ClosedDate",
      "name": "Closed Date",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
    },
    {
      "referenceName": "Microsoft.VSTS.TCM.ReproSteps",
      "name": "Repro Steps",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.ReproSteps"
    },
    {
      "referenceName": "Microsoft.VSTS.Common.BacklogPriority",
      "name": "Backlog Priority",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.BacklogPriority"
    },
    {
      "referenceName": "Microsoft.VSTS.Scheduling.Effort",
      "name": "Effort",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.Effort"
    },
    {
      "referenceName": "Microsoft.VSTS.Common.AcceptanceCriteria",
      "name": "Acceptance Criteria",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.AcceptanceCriteria"
    },
    {
      "referenceName": "Microsoft.VSTS.Common.Severity",
      "name": "Severity",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Severity"
    },
    {
      "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
      "name": "Integration Build",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
    },
    {
      "referenceName": "Microsoft.VSTS.Build.FoundIn",
      "name": "Found In",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.FoundIn"
    }
  ],
  "transitions": {
    "Approved": [
      {
        "to": "Approved"
      },
      {
        "to": "Committed"
      },
      {
        "to": "New"
      },
      {
        "to": "Removed"
      },
      {
        "to": "Done"
      }
    ],
    "New": [
      {
        "to": "New"
      },
      {
        "to": "Committed"
      },
      {
        "to": "Approved"
      },
      {
        "to": "Removed"
      },
      {
        "to": "Done"
      }
    ],
    "Done": [
      {
        "to": "Done"
      },
      {
        "to": "Committed"
      },
      {
        "to": "Approved"
      },
      {
        "to": "New"
      }
    ],
    "Committed": [
      {
        "to": "Committed"
      },
      {
        "to": "Approved"
      },
      {
        "to": "New"
      },
      {
        "to": "Done"
      }
    ],
    "Removed": [
      {
        "to": "Removed"
      },
      {
        "to": "New"
      }
    ],
    "": [
      {
        "to": "New"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Bug"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Bug"
}
```

