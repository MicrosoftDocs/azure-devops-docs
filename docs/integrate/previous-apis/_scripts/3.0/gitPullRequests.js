var apiwriter = require('apiwriter');

exports.getContext = function () {
    var reviewer1 = '3b5f0c34-4aec-4bf4-8708-1d36f0dbc468'; /* christie church on fabrikam-fiber-inc */
    var reviewer2 = '19d9411e-9a34-45bb-b985-d24d9d87c0c9'; /* johnny mcleaod */

    //used when running locally, must be updated if someone else runs it or if I redeploy(tfat)
    if (process.env.cfgUserName.indexOf('joscol') !== -1) {
        reviewer1 = 'b335b0d4-578f-4944-b94c-a45216eb1a1a'; //JC
        reviewer2 = '24281983-2530-4a9c-aeb7-88d60d57acfd'; //EJ
    }

    return {
        pullRequestId: null,
        autoCompletePullRequestId: null,
        autoCompletePRArtifactId: null,
        witTask: 1,  //TODO? create a work item
        witRelIndex: null,
        repositoryId: null,
        repoFriendlyName: null,
        projectId: null,
        projectName: null,
        autoCompleteBranchName: 'refs/heads/npaulk/known_issues',
        autoCompleteBranchHead: null,
        devBranchName: 'refs/heads/npaulk/my_work',
        devBranchHead: null,
        targetBranchName: 'refs/heads/new_feature',
        targetBranchHead: null,
        masterBranchName: 'refs/heads/master',
        masterBranchObjectId: null,
        initialReviewerId: reviewer1,
        initialReviewerUserName: 'fabrikamfiber1@hotmail.com',
        initialReviewerPassword: process.env.cfgPassword,
        additionalReviewerId: reviewer2,
        iterationId: 0,
        previousIteration: 0,
        threadId: 0,
        commentId: 0,
        top: null,
        skip: null
    };
};

function sleep(time) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
}

exports.submitRequests = function() {

    apiwriter.setEnableWrite(false);

    //get the first repository
    apiwriter.getJson('/git/repositories',
        function (context, result) {
            var repoIndex = 0;

            //if you need to select a particular repo, put any filtering code here
            //for example...
            /*var searchIndex;
            for (searchIndex = 0; searchIndex < result.responseBody.count; ++searchIndex) {
                if (result.responseBody.value[searchIndex].project.name == "2016_10_27") {
                    repoIndex = searchIndex;
                }
            }*/

            context.repositoryId = result.responseBody.value[repoIndex].id;
            context.repoFriendlyName = result.responseBody.value[repoIndex].name;
            context.projectId = result.responseBody.value[repoIndex].project.id;
            context.projectName = result.responseBody.value[repoIndex].project.name;
        });

    //delete example pull requests if it already exists  (main one and auto-complete)
    for (var deletePRCount = 0; deletePRCount < 2; ++deletePRCount) {
        apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests?targetRefName={targetBranchName}&status=active',
            function (context, result) {
                if (result.responseBody.count > 0) {
                    context.pullRequestId = result.responseBody.value[0].pullRequestId;
                }
                else {
                    context.pullRequestId = null;
                }
            });

        //There's no way to determine if the PR exists or not because of the way the requests are queued and processed
        //so just blindly attempt to abandon it and if it fails, there's no harm
        apiwriter.patchJsonEx('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}',
            function (context, result) {
                return { "status": 2 }
            },
            function (context, result) {
            }
        );
    }

    //delete the example branches if they already exists
    apiwriter.getJson('/git/repositories/{repositoryId}/{autoCompleteBranchName}',
        function (context, result) {
            if (result.responseBody.count > 0) {
                context.autoCompleteBranchHead = result.responseBody.value[0].objectId;
            }
        });

    //see above
    apiwriter.postJson('/git/repositories/{repositoryId}/refs',
    function (context, result) {
        return [{
            "name": context.autoCompleteBranchName,
            "newObjectId": "0000000000000000000000000000000000000000",
            "oldObjectId": context.autoCompleteBranchHead
        }];
    },
    function (context, result) {
    });

    apiwriter.getJson('/git/repositories/{repositoryId}/{devBranchName}',
        function (context, result) {
            if (result.responseBody.count > 0) {
                context.devBranchHead = result.responseBody.value[0].objectId;
            }
        });

    //see above
    apiwriter.postJson('/git/repositories/{repositoryId}/refs',
    function (context, result) {
        return [{
            "name": context.devBranchName,
            "newObjectId": "0000000000000000000000000000000000000000",
            "oldObjectId": context.devBranchHead
        }];
    },
    function (context, result) {
    });

    apiwriter.getJson('/git/repositories/{repositoryId}/{targetBranchName}',
        function (context, result) {
            if (result.responseBody.count > 0) {
                context.targetBranchHead = result.responseBody.value[0].objectId;
            }
        });

    //see above
    apiwriter.postJson('/git/repositories/{repositoryId}/refs',
    function (context, result) {
        return [{
            "name": context.targetBranchName,
            "newObjectId": "0000000000000000000000000000000000000000",
            "oldObjectId": context.targetBranchHead
        }];
    },
    function (context, result) {
    });

    //get head commit of master
    apiwriter.getJson('/git/repositories/{repositoryId}/{masterBranchName}',
        function (context, result) {
            context.masterBranchObjectId = result.responseBody.value[0].objectId;
        });

    //create auto-complete source branch
    apiwriter.postJson('/git/repositories/{repositoryId}/refs',
    function (context, result) {
        return [{
            "name": context.autoCompleteBranchName,
            "newObjectId": context.masterBranchObjectId,
            "oldObjectId": "0000000000000000000000000000000000000000"
        }];
    },
    function (context, result) {
    });

    //create source branch
    apiwriter.postJson('/git/repositories/{repositoryId}/refs',
    function (context, result) {
        return [{
            "name": context.devBranchName,
            "newObjectId": context.masterBranchObjectId,
            "oldObjectId": "0000000000000000000000000000000000000000"
        }];
    },
    function (context, result) {
    });

    //create target branch
    apiwriter.postJson('/git/repositories/{repositoryId}/refs',
    function (context, result) {
        return [{
            "name": context.targetBranchName,
            "newObjectId": context.masterBranchObjectId,
            "oldObjectId": "0000000000000000000000000000000000000000"
        }];
    },
    function (context, result) {
    });

    //create a file on the auto-complete source branch
    apiwriter.postJson('/git/repositories/{repositoryId}/pushes',
    function (context, result) {
        return {
            "refUpdates": [{
                "name": context.autoCompleteBranchName,
                "oldObjectId": context.masterBranchObjectId
            }],
            "commits": [{
                "comment": "Added known_issues.txt",
                "changes": [{
                    "changeType": "add",
                    "item": {
                        "path": "/known_issues.txt"
                    },
                    "newContent": {
                        "content": "There are no known issues at this time",
                        "contentType": 0
                    }
                }]
            }]
        };
    },
    function (context, result) {
        context.autoCompleteBranchHead = result.responseBody.refUpdates[0].newObjectId;
    });

    //create the auto-complete PR
    apiwriter.postJson('/git/repositories/{repositoryId}/pullRequests',
        function (context, result) {
            return {
                "sourceRefName": context.autoCompleteBranchName, "targetRefName": context.targetBranchName, "title": "Added known issues document",
                "description": "Added known issues document",
                "reviewers": [{ "id": context.initialReviewerId }]
            };
        },
        function (context, result) {
            context.autoCompletePullRequestId = result.responseBody.pullRequestId;
            context.autoCompletePRArtifactId = result.responseBody.artifactId;
        }
    );

    //create a file on the source branch
    apiwriter.postJson('/git/repositories/{repositoryId}/pushes',
    function (context, result) {
        return {
            "refUpdates": [{
                "name": context.devBranchName,
                "oldObjectId": context.masterBranchObjectId
            }],
            "commits": [{
                "comment":"Added new_feature.h",
                "changes": [{
                    "changeType": "add",
                    "item": {
                        "path":"/new_feature.h"
                    },
                    "newContent": {
                        "content":"int new_feature();\n",
                        "contentType":0
                    }
                }]
            }]
        };
    },
    function (context, result) {
        context.devBranchHead = result.responseBody.refUpdates[0].newObjectId;
    });

    //create another file on the source branch
    apiwriter.postJson('/git/repositories/{repositoryId}/pushes',
    function (context, result) {
        return {
            "refUpdates": [{
                "name": context.devBranchName,
                "oldObjectId": context.devBranchHead
            }],
            "commits": [{
                "comment": "Added new_feature.cpp",
                "changes": [{
                    "changeType": "add",
                    "item": {
                        "path": "/new_feature.cpp"
                    },
                    "newContent": {
                        "content": "#include \"new_feature.h\"\n\nint new_feature()\n{\n   return 4;\n}\n",
                        "contentType": 0
                    }
                }]
            }]
        };
    },
    function (context, result) {
        context.devBranchHead = result.responseBody.refUpdates[0].newObjectId;
    });

    // Create a wit task
    /* this is the old way and it doesn't work anymore, for now just assume that 1 is a valid workitem id
    apiwriter.patchJsonEx('/wit/workitems/$Task',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.Title",
                        "value": "Create a document listing all known issues with the product"
                    }
            ]
        },
        function (context, options) {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function (context, result) {
            context.witTask = result.responseBody.id;
        }
    );
    */

    apiwriter.setEnableWrite(true);

    //create a pull request
    apiwriter.postJson('/git/repositories/{repositoryId}/pullRequests',
        function(context, result) {
            return {"sourceRefName": context.devBranchName, "targetRefName": context.targetBranchName, "title": "A new feature",
                    "description": "Adding a new feature", 
                    "reviewers": [ { "id": context.initialReviewerId } ] };
        },
        function(context, result) {
            context.pullRequestId = result.responseBody.pullRequestId;
        }
    );

    //get the list of pull requests in the repo
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests');

    //get the list of pull requests in the project
    apiwriter.getJsonEx('/git/pullRequests',
        function (context, options) {
            options.url = options.url.replace('/_apis', '/' + context.projectName + '/_apis');
        });

    //get the list of pull requests in the account
    apiwriter.getJson('/git/pullRequests');

    //get this PR from the account URL
    apiwriter.getJson('/git/pullRequests/{pullRequestId}');

    //get the list of pull requests by target branch
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests?targetRefName=refs/heads/master');

    //get a detailed pull request
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}');

    //get reviewers
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers');

    // add a reviewer
    apiwriter.putJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{additionalReviewerId}',
       function(context, result) {
            return { "vote": 0 }
        },
        function(context, result) {
        }
    );

    // update a vote
    apiwriter.putJsonEx('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{initialReviewerId}',
       function (context, result) {
           return { "vote": 10 };
       },
        function (context, result) {
        }
    );

    //get a reviewer
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{additionalReviewerId}');

    // delete a reviewer
    apiwriter.deleteJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{additionalReviewerId}', null);

    //edit the file to create a second iteration
    apiwriter.setEnableWrite(false);
    apiwriter.postJson('/git/repositories/{repositoryId}/pushes',
    function (context, result) {
        return {
            "refUpdates": [{
                "name": context.devBranchName,
                "oldObjectId": context.devBranchHead
            }],
            "commits": [{
                "comment": "Updated new_feature.cpp",
                "changes": [{
                    "changeType": "edit",
                    "item": {
                        "path": "/new_feature.cpp"
                    },
                    "newContent": {
                        "content": "#include \"new_feature.h\"\n\nint new_feature()\n{\n   return 5;\n}\n",
                        "contentType": 0
                    }
                }]
            }]
        };
    },
    function (context, result) {
        context.devBranchHead = result.responseBody.refUpdates[0].newObjectId;

        //the server does not create new iterations synchronously with the push
        //wait and hope it's long enough for the iteration to be created
        sleep(5000);
    });

    apiwriter.setEnableWrite(true);

    // get iterations
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations',
        function (context, result) {
            context.iterationId = result.responseBody.value[result.responseBody.count-1].id;
            context.previousIteration = context.iterationId - 1;
        });

    // get an iteration
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}');

    // get an iteration's commits
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/commits');

    // get an iteration's changes
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/changes');

    // get an iteration's changes compared to the previous iteration
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/changes?$compareTo={previousIteration}');

    //create a PR comment
    apiwriter.postJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads',
    function (context, result) {
        return {
            "comments": [{
                "parentCommentId": 0,
                "content": "This new feature looks good!",
                "commentType": 1
            }],
            "properties": {
                "Microsoft.TeamFoundation.Discussion.SupportsMarkdown": { "type": "System.Int32", "value": 1 }
            },
            "status": 1,
        };
    },
    function (context, result) {
    });


    //create a PR comment at a file location
    apiwriter.postJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads',
    function (context, result) {
        return {
            "comments": [{
                "parentCommentId": 0,
                "content": "Should we add a comment about what this value means?",
                "commentType": 1
            }],
            "properties": {
                "Microsoft.TeamFoundation.Discussion.SupportsMarkdown": { "type": "System.Int32", "value": 1 }
            },
            "status": 1,
            "threadContext": {
                "filePath": "/new_feature.cpp",
                "leftFileEnd": null,
                "leftFileStart": null,
                "rightFileEnd": { "line": 5, "offset": 13 },
                "rightFileStart": { "line": 5, "offset": 1 }
            },
            "pullRequestThreadContext": {
                "changeTrackingId": 1,
                "iterationContext": {
                    "firstComparingIteration": 1,
                    "secondComparingIteration": 2
                }
            }
        };
    },
    function (context, result) {
        context.threadId = result.responseBody.id;
    });

    //add a comment
    apiwriter.postJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments',
    function (context, result) {
        return {
            "content": "Good idea",
            "parentCommentId": 1,
            "commentType": 1
        };
    },
    function (context, result) {
        context.commentId = result.responseBody.id;
    });

    // delete a comment
    apiwriter.deleteJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}', null);

    // get the threads
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads');

    // get all the commits for the PR
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/commits');

    //edit the title
    apiwriter.patchJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}',
       function (context, result) {
           return {
               "title": "Updated pull request title"
           };
       });

    //edit the description
    apiwriter.patchJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}',
       function (context, result) {
           return {
               "description": "Updated pull request description"
           };
       });

    //link wit task to auto-complete PR
    apiwriter.patchJsonEx('/wit/workItems/{witTask}',
        function (context, result) {
            return [{
                "op": 0,
                "path": "/relations/-",
                "value": {
                    "attributes": {
                        "name": "Pull Request"
                    },
                    "rel": "ArtifactLink",
                    "url": context.autoCompletePRArtifactId
                }
            }];
        },
        function (context, options) {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function (context, result) {
            //find the newly created wit link and record the index
            for (var searchIndex = 0; searchIndex < result.responseBody.relations.length; ++searchIndex) {
                if ((result.responseBody.relations[searchIndex].rel == "ArtifactLink") &&
                    (result.responseBody.relations[searchIndex].url == context.autoCompletePRArtifactId)) {
                    context.witRelIndex = searchIndex;
                }
            }
        });

    //get linked work items
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{autoCompletePullRequestId}/workitems');

    //delete work item link
    apiwriter.patchJsonEx('/wit/workItems/{witTask}',
        function (context, result) {
            return [{
                "op": 5,
                "path": "/relations/" + context.witRelIndex + "/url",
                "value": context.autoCompletePRArtifactId
            },
            {
                "op": 1,
                "path": "/relations/" + context.witRelIndex
            }];
        },
        function (context, options) {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function (context, result) {
        });

    // set auto-complete
    apiwriter.patchJsonEx('/git/repositories/{repositoryId}/pullRequests/{autoCompletePullRequestId}',
        function (context, result) {
            return {
                "autoCompleteSetBy": {
                    "id": context.initialReviewerId
                },
                "completionOptions": {
                    "deleteSourceBranch": "true",
                    "mergeCommitMessage": "Added known issues document",
                    "squashMerge": "false"
                }
            };
        },
        function (context, result) {
        }
    );

    // approve/complete
    apiwriter.patchJsonEx('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}',
       function(context, result) {
           return {
               "status": "completed",
               "lastMergeSourceCommit": {
                   "commitId": context.devBranchHead
               }
           }
        },
        function(context, result) {
        }
    );

    //get the list of pull requests by status
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests?status=completed');
};

