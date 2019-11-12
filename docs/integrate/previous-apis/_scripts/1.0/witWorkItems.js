var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis

//PreReq: There must be a project called "Fabrikam-Fiber-Git"
//PreReq: There must be a user called Johnnie McCloud (if not change line 270)

Array.prototype.unique = function () {
    var u = {}, a = [];
    for (var i = 0, l = this.length; i < l; ++i) {
        if (u.hasOwnProperty(this[i])) {
            continue;
        }
        a.push(this[i]);
        u[this[i]] = 1;
    }
    return a;
};

parseColumns = function (columns) {
    var columnNames = new Array();
    for (var i = 0; i < columns.length; i++) {
        columnNames.push(columns[i].referenceName);
    }
    return columnNames.join();
}

parseIds = function (workItemRelations) {
    var ids = new Array();
    for (var i = 0; i < workItemRelations.length; i++) {
        ids.push(workItemRelations[i].target.id);
    }
    return ids.unique().join();
}

exports.getContext = function() {
    return {
        projectName: "Fabrikam-Fiber-Git",
        attachmentUrl: null,
        PBIId: null,
        PBIUrl: null,
        taskId: null,
        taskUrl: null,
        task2Id: null,
        task2Url: null,
        task3Id: null,
        queryId: null,
        rootAreaId: null,
        ids: null,
        columns: "System.Id,System.Title,System.WorkItemType,Microsoft.VSTS.Scheduling.RemainingWork",
        asof: null,
    };
};

exports.submitRequests = function() {
    apiwriter.setEnableWrite(false);
    
    // Get the areas
    apiwriter.getJson('/wit/classificationNodes/areas',
        function (context, result) {
            context.rootAreaId = result.responseBody.id;
        }
    );
    
    // Create new area
    apiwriter.postJson('/wit/classificationNodes/areas',
        function (context, result) {
            return {
                "name": "Web"
            }
        }
    );

    // Create the first work item
    apiwriter.patchJsonEx('/wit/workitems/$Product Backlog Item',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.Title",
                        "value": "Customer can sign in using their Microsoft Account"
                    },
                    {
                        "op": "add",
                        "path": "/fields/Microsoft.VSTS.Scheduling.Effort",
                        "value": 8
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.Description",
                        "value": "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/en-us/library/live/hh826547.aspx"
                    }
            ];
        },
        function (context, options) {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function (context, result) {
            context.PBIId = result.responseBody.id;
            context.PBIUrl = result.responseBody.url;
        }
    );

    // Upload an attachment
    apiwriter.postJsonEx('/wit/attachments?fileName=Spec.txt',
        "User text content to upload",
        collectionScopeUrl,
        function (context, result) {
            context.attachmentUrl = result.responseBody.url
        },
        true
    );

    apiwriter.setEnableWrite(true);

    // Get a specific work item
    apiwriter.getJsonEx('/wit/workitems/{PBIId}', collectionScopeUrl);

    // Get a specific work item expanded 
    apiwriter.getJsonEx('/wit/workitems/{PBIId}?$expand=all', collectionScopeUrl);
	
    // Get a specific work item type stub
    apiwriter.getJson('/wit/workitems/$Task');
    
    // Create a super simple work item with required fields only
    apiwriter.patchJsonEx('/wit/workitems/$Task',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.Title",
                        "value": "JavaScript implementation for Microsoft Account"
                    }
            ]
        },
        function (context, options) {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function(context, result) {
            context.task3Id = result.responseBody.id;
        }
    );

    // Create a work item with links
    apiwriter.patchJsonEx('/wit/workitems/$Task',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.Title",
                        "value": "JavaScript implementation for Microsoft Account"
                    },
                    {
                        "op": "add",
                        "path": "/fields/Microsoft.VSTS.Scheduling.RemainingWork",
                        "value": 4
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.Description",
                        "value": "Follow the code samples from MSDN"
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.History",
                        "value": "Jim has the most context around this."
                    },
                    {
                        "op": "add",
                        "path": "/relations/-",
                        "value": {
                            "rel": "System.LinkTypes.Hierarchy-Reverse", //"work-item/hierarchy-reverse",
                            "url": context.PBIUrl,
                            "attributes": {
                                "comment": "decomposition of work"
                            }
                        }
                    }
                ]
        },
        function(context, options)
        {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function(context, result) {
            context.taskId = result.responseBody.id;
            context.taskUrl = result.responseBody.url;
        }
    );

    apiwriter.setEnableWrite(false);

    //Create a new task to add
    apiwriter.patchJsonEx('/wit/workitems/$Task',
        function(context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.Title",
                        "value": "Unit Testing for MSA login"
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.Description",
                        "value": "We need to ensure we have coverage to prevent regressions"
                    },
                    {
                        "op": "add",
                        "path": "/fields/Microsoft.VSTS.Scheduling.RemainingWork",
                        "value": 3
                    },
                    {
                        "op": "add",
                        "path": "/relations/-",
                        "value": {
                            "rel": "System.LinkTypes.Hierarchy-Reverse",
                            "url": context.PBIUrl,
                            "title": "decomposition of work"
                        }
                    }
                ]
        },
        function(context, options)
        {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function(context, result) {
            context.task2Id = result.responseBody.id;
            context.task2Url = result.responseBody.url;
            context.ids = context.PBIId + ',' + context.taskId + ',' + context.task2Id;
            context.asof = result.responseBody.fields["System.CreatedDate"];
        }
    );

    // Create a query
    apiwriter.postJson('/wit/queries/My Queries',
        function (context, result) {
            return {
                "name": "All Work",
                "wiql": "Select [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State] From WorkItemLinks WHERE (Source.[System.TeamProject] = @project and Source.[System.State] <> 'Removed') and ([System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward') and (Target.[System.WorkItemType] <> '') mode(Recursive)"
            }
        },
        function (context, result) {
            context.queryId = result.responseBody.id;
        }
    );
    
    apiwriter.setEnableWrite(true);

    // Update a field of the task
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function(context, result) {
            return [
                    {
                        "op": "test",
                        "path": "/rev",
                        "value": 1
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.AreaPath",
                        "value": context.projectName + "\\Web"
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.History",
                        "value": "Moving to the right area path"
                    }
                ]
        },
        collectionScopePatchUrl
    );

    // Update a field and add a link to the task
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function(context, result) {
            return [
                    {
                        "op": "test",
                        "path": "/rev",
                        "value": 2
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.AssignedTo",
                        "value": "Johnnie McLeod"
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.History",
                        "value": "Johnnie is going to take this work over."
                    },
                    {
                        "op": "add",
                        "path": "/relations/-",
                        "value": {
                            "rel": "System.LinkTypes.Related", 
                            "url": context.task2Url,
                            "attributes": {
                                "comment": "adding another task"
                            }
                        }
                    }
                ]
        },
        collectionScopePatchUrl
    );

    // Add a link
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function (context, result) {
            return [
                    {
                        "op": "test",
                        "path": "/rev",
                        "value": 3
                    },
                    {
                        "op": "add",
                        "path": "/relations/-",
                        "value": {
                            "rel": "System.LinkTypes.Dependency-forward", 
                            "url": context.task2Url,
                            "attributes": {
                                "comment": "Making a new link for the dependency"
                            }
                        }
                    }
                ]
        },
        collectionScopePatchUrl
    );

    // Update a link
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function (context, result) {
            return [
                    {
                        "op": "test",
                        "path": "/rev",
                        "value": 3
                    },
                    {
                        "op": "replace",
                        "path": "/relations/2/attributes/comment",
                        "value": "Adding traceability to dependencies"
                    }
                ]
        },
        collectionScopePatchUrl
    );

    // Remove a link
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function (context, result) {
            return [
                    {
                        "op": "test",
                        "path": "/rev",
                        "value": 3
                    },
                    {
                        "op": "remove",
                        "path": "/relations/2"
                    }
                ]
        },
        collectionScopePatchUrl
    );

    // Add an attachment
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function (context, result) {
            return [
                    {
                        "op": "test",
                        "path": "/rev",
                        "value": 3
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.History",
                        "value": "Adding the necessary spec"
                    },
                    {
                        "op": "add",
                        "path": "/relations/-",
                        "value": {
                            "rel": "AttachedFile",
                            "url": context.attachmentUrl, 
                            "attributes": {
                                "comment":"Spec for the work"
                            }
                        }
                    }
                ]
        },
        collectionScopePatchUrl
    );

    // Remove an attachment
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function (context, result) {
            return [
                    {
                        "op": "test",
                        "path": "/rev",
                        "value": 4
                    },
                    {
                        "op": "remove",
                        "path": "/relations/2"
                    }
                ]
        },
        collectionScopePatchUrl
    );

    // Add a hyperlink
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function (context, result) {
            return [
                    {
                        "op": "test",
                        "path": "/rev",
                        "value": 5
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.History",
                        "value": "Linking to a blog article for context"
                    },
                    {
                        "op": "add",
                        "path": "/relations/-",
                        "value": {
                            "rel": "Hyperlink",
                            "url": "http://blogs.msdn.com/b/bharry/archive/2014/05/12/a-new-api-for-visual-studio-online.aspx"
                        }
                    }
            ]
        },
        collectionScopePatchUrl
    );

    // Tag a workitem
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function (context, result) {
            return [
                    {
                        "op": "test",
                        "path": "/rev",
                        "value": 6
                    },
                    {
                        "op": "add",
                        "path": "/fields/System.Tags",
                        "value": "Tag1; Tag2"
                    }
            ]
        },
        collectionScopePatchUrl
    );
    
    // Change work item bypassing rules
    apiwriter.patchJsonEx('/wit/workitems/{taskId}?bypassRules=true',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.AssignedTo",
                        "value": "Invalid Value"
                    }
            ]
        },
        collectionScopePatchUrl
    );

    // Get multiple work items
    apiwriter.getJsonEx('/wit/workitems?ids={ids}', collectionScopeUrl);
    apiwriter.getJsonEx('/wit/workitems?ids={ids}&fields={columns}', collectionScopeUrl);
    apiwriter.getJsonEx('/wit/workitems?ids={ids}&fields={columns}&asOf={asof}', collectionScopeUrl);
    apiwriter.getJsonEx('/wit/workitems?ids={ids}&$expand=all', collectionScopeUrl);

    // get the update collection for the work item
    apiwriter.getJsonEx('/wit/workitems/{taskId}/updates', collectionScopeUrl);

    // get a page of updates for the work item
    apiwriter.getJsonEx('/wit/workitems/{taskId}/updates?$skip=1&$top=2', collectionScopeUrl);

    // get the second update
    apiwriter.getJsonEx('/wit/workitems/{taskId}/updates/2', collectionScopeUrl);

    // get the last update of links
    apiwriter.getJsonEx('/wit/workitems/{taskId}/updates/4', collectionScopeUrl);
    
    // get all revisions of the work item
    apiwriter.getJsonEx('/wit/workitems/{taskId}/revisions', collectionScopeUrl);
    
    // get a page of revisions for the work item
    apiwriter.getJsonEx('/wit/workitems/{taskId}/revisions?$skip=1&$top=2', collectionScopeUrl);

    // get a revision of the work item
    apiwriter.getJsonEx('/wit/workitems/{taskId}/revisions/2', collectionScopeUrl);
    
    // get an expanded revision of the work item
    apiwriter.getJsonEx('/wit/workitems/{taskId}/revisions/2?$expand=all', collectionScopeUrl);

    // get all discussion history of the work item
    apiwriter.getJsonEx('/wit/workitems/{taskId}/history', collectionScopeUrl);

    // get a page of discussion history entries for the work item
    apiwriter.getJsonEx('/wit/workitems/{taskId}/history?$skip=1&$top=2', collectionScopeUrl);

    // get a discussion history entry of the work item
    apiwriter.getJsonEx('/wit/workitems/{taskId}/history/2', collectionScopeUrl);

    // Get all work items returned by a (stored) query
    apiwriter.getJson('/wit/wiql/{queryId}');

    // Get all work items filtered by WIQL
    apiwriter.postJson('/wit/wiql',
        function (context, result) {
            return {
                "query": "Select [System.WorkItemType],[System.Title],[System.State],[Microsoft.VSTS.Scheduling.Effort],[System.IterationPath] FROM WorkItemLinks WHERE Source.[System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND Target.[System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND Target.[System.State] IN ('New','Approved','Committed') AND [System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward' ORDER BY [Microsoft.VSTS.Common.BacklogPriority] ASC,[System.Id] ASC MODE (Recursive, ReturnMatchingChildren)"
            }
        }
    );

    // Get results of a flat query
    apiwriter.postJsonEx('/wit/wiql',
        function (context, result) {
            return {
                "query": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Task' AND [State] <> 'Closed' AND [State] <> 'Removed' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc"
            }
        },
        collectionScopeUrl,
        function (context, result) {
            var ids = new Array();
            for (var i = 0; i < result.responseBody.workItems.length; i++) {
                ids.push(result.responseBody.workItems[i].id);
            }
            context.ids = ids.unique().join();
            context.columns = parseColumns(result.responseBody.columns);
            context.asof = result.responseBody.asOf;
        }
    );

    // Get multiple work items
    apiwriter.getJsonEx('/wit/WorkItems?ids={ids}&fields={columns}&asOf={asof}', collectionScopeUrl);

    // Get results of a onehop query
    apiwriter.postJson('/wit/wiql',
        function (context, result) {
            return {
                "query": "SELECT [System.Id], [System.Links.LinkType], [System.WorkItemType], [System.Title], [System.State] FROM WorkItemLinks WHERE ([Source].[System.TeamProject] = @project AND  [Source].[System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory'  AND  [Source].[System.State] <> 'Done') AND ([System.Links.LinkType] <> '') And ([Target].[System.State] <> 'Removed' AND [Target].[System.WorkItemType] NOT IN GROUP 'Microsoft.FeatureCategory') mode(MustContain)"
            }
        },
        function (context, result) {
            context.ids = parseIds(result.responseBody.workItemRelations);
            context.columns = parseColumns(result.responseBody.columns);
            context.asof = result.responseBody.asOf;
        }
    );

    // Get multiple work items
    apiwriter.getJsonEx('/wit/WorkItems?ids={ids}&fields={columns}&asOf={asof}', collectionScopeUrl);

    // Get results of a tree query
    apiwriter.postJson('/wit/wiql',
        function (context, result) {
            return {
                "query": "Select [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State] From WorkItemLinks WHERE (Source.[System.TeamProject] = @project and Source.[System.State] <> 'Removed') and ([System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward') and (Target.[System.WorkItemType] <> '') mode(Recursive)"
            }
        },
        function (context, result) {
            context.ids = parseIds(result.responseBody.workItemRelations);
            context.columns = parseColumns(result.responseBody.columns);
            context.asof = result.responseBody.asOf;
        }
    );

    // Get multiple work items
    apiwriter.getJsonEx('/wit/WorkItems?ids={ids}&fields={columns}&asOf={asof}', collectionScopeUrl);    

    // Close all new work items and delete new queries
    apiwriter.setEnableWrite(false);

    // Update a field of the task
    apiwriter.patchJsonEx('/wit/workitems/{taskId}',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.State",
                        "value": "Removed"
                    }
            ]
        },
        collectionScopePatchUrl
    );

    apiwriter.patchJsonEx('/wit/workitems/{task2Id}',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.State",
                        "value": "Removed"
                    }
            ]
        },
        collectionScopePatchUrl
    );

    apiwriter.patchJsonEx('/wit/workitems/{task3Id}',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.State",
                        "value": "Removed"
                    }
            ]
        },
        collectionScopePatchUrl
    );

    apiwriter.patchJsonEx('/wit/workitems/{PBIId}',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.State",
                        "value": "Removed"
                    }
            ]
        },
        collectionScopePatchUrl
    );

    // Keep it clean!
    apiwriter.deleteJson('/wit/queries/{queryId}', null);
    
    apiwriter.deleteJson('/wit/classificationNodes/areas/Web?$reclassifyId={rootAreaId}', null);
};

collectionScopeUrl = function (context, options) {    
    options.url = url.resolve(options.url + "/", '../../_apis');
};

collectionScopePatchUrl = function (context, options) {
    options.headers["Content-Type"] = "application/json-patch+json";
    collectionScopeUrl(context, options);
}