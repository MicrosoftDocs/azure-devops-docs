var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        projectName: null,
        scope: "WorkitemTracking.Queries",
        myQueriesGuid: null,
        queryId: null,
        snapshotConfig: null,
        pivotConfig: null,
        trendConfig: null,
        snapshotChartId: null,
        trendChartId: null,
        pivotChartId: null
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(false);

    // Get the current project
    apiwriter.getJson('/projects',
        function (context, result) {
            context.projectName = result.responseBody.value[10].name; //Should be project 0
        }
    );

    apiwriter.getJson('/wit/{projectName}/queries',
        function (context, result) {
            context.myQueriesGuid = result.responseBody.value[0].id;
        }
    );

    // Create a query
    apiwriter.postJson('/wit/{projectName}/queries',
        function (context, result) {
            return {
                "name": "Active tasks",
                "parentId": context.myQueriesGuid,
                "wiql": "Select [System.Id], [System.Title], [System.State], [System.AssignedTo], [Microsoft.Azure DevOps Services.Scheduling.RemainingWork] From WorkItems Where [System.WorkItemType] = 'Task' AND ([System.State] = 'Active' OR [System.State] = 'In Progress') order by [Microsoft.Azure DevOps Services.Common.Priority] asc, [System.CreatedDate] desc"
            }
        },
        function (context, result) {
            context.queryId = result.responseBody.id;
        }
    );

    apiwriter.setEnableWrite(true);

    apiwriter.getJson('/Reporting/DataServiceCapabilities/{scope}')

    // Create a snapshot bar chart
    apiwriter.postJson('/Reporting/ChartConfiguration',
        function (context, result) {
            return {
                "scope": context.scope,
                "groupKey": context.queryId,
                "title": "Bar by state",
                "chartType": "BarChart",
                "transformOptions": {
                    "filter": context.queryId,
                    "groupBy": "System.State",
                    "orderBy": {
                        "direction": "ascending",
                        "propertyName": "value"
                    },
                    "measure": {
                        "aggregation": "count",
                        "propertyName": ""
                    },
                },
                "userColors": null
            }
        },
        function (context, result) {
            context.snapshotConfig = result.responseBody.chartConfiguration;
            context.snapshotChartId = result.responseBody.chartConfiguration.chartId;
        }
    );

    // Create a snapshot pivot table
    apiwriter.postJson('/Reporting/ChartConfiguration',
        function (context, result) {
            return {
                "scope": context.scope,
                "groupKey": context.queryId,
                "title": "Pivot by state and assigned to",
                "chartType": "PivotTable",
                "transformOptions": {
                    "filter": context.queryId,
                    "groupBy": "System.State",
                    "series": "System.AssignedTo",
                    "orderBy": {
                        "direction": "ascending",
                        "propertyName": "value"
                    },
                    "measure": {
                        "aggregation": "count",
                        "propertyName": ""
                    },
                },
                "userColors": null
            }
        },
        function (context, result) {
            context.pivotConfig = result.responseBody.chartConfiguration;
            context.pivotChartId = result.responseBody.chartConfiguration.chartId;
        }
    );

    // Create a trend stack area chart
    apiwriter.postJson('/Reporting/ChartConfiguration',
        function (context, result) {
            return {
                "scope": context.scope,
                "groupKey": context.queryId,
                "title": "Remaining work over time",
                "chartType": "StackAreaChart",
                "transformOptions": {
                    "filter": context.queryId,
                    "groupBy": "System.State",
                    "historyRange": "last7Days",
                    "orderBy": {
                        "direction": "descending",
                        "propertyName": "value"
                    },
                    "measure": {
                        "aggregation": "sum",
                        "propertyName": "Microsoft.Azure DevOps Services.Scheduling.RemainingWork"
                    },
                },
                "userColors": null
            }
        },
        function (context, result) {
            context.trendConfig = result.responseBody.chartConfiguration;
            context.trendChartId = result.responseBody.chartConfiguration.chartId;
        }
    );

    apiwriter.getJson('/Reporting/ChartConfiguration/{snapshotChartId}');

    apiwriter.putJson('/Reporting/ChartConfiguration/{snapshotChartId}',
        function (context, result) {
            context.snapshotConfig.userColors = [{ "value": "In Progress", "backgroundColor": "#005F31" }];
            return context.snapshotConfig;
        }
    );

    // Enumerate all existing ChartConfigurations
    apiwriter.getJson('/Reporting/ChartConfiguration?scope={scope}&groupkey={queryId}');

    apiwriter.postJson('/Reporting/TransformQuery',
        function (context, result) {
            context.snapshotConfig.transformOptions.filterContext = { project: context.projectName };
            return [context.snapshotConfig.transformOptions];
        }
    );
    
    apiwriter.postJson('/Reporting/TransformQuery',
        function (context, result) {
            context.trendConfig.transformOptions.filterContext = { project: context.projectName };
            return [context.trendConfig.transformOptions];
        }
    );

    apiwriter.postJson('/Reporting/TransformQuery',
        function (context, result) {
            context.pivotConfig.transformOptions.filterContext = { project: context.projectName };
            return [context.pivotConfig.transformOptions];
        }
    );

    // Cleanup
    apiwriter.deleteJson('/Reporting/ChartConfiguration/{pivotChartId}', null);
    apiwriter.deleteJson('/Reporting/ChartConfiguration/{snapshotChartId}', null);
    apiwriter.deleteJson('/Reporting/ChartConfiguration/{trendChartId}', null);
    apiwriter.deleteJson('/wit/{projectName}/queries/{queryId}', null);
};
