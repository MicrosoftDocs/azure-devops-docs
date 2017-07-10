var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        projectName: "Fabrikam",
        textFile: "textAsFileAttachment.txt",
        binaryFile: "imageAsFileAttachment.png"
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(false);
    
    apiwriter.postJson('/test/runs',
    		function (context, result) {
    		    return {
    		        "name": "Fabrikam Fiber test run ",
    		        "isAutomated": "true"
    		    }
    		}
    ,
    function (context, result) {
        context.newRunId = result.responseBody.id;
    }
    );

    //Add test results
    apiwriter.postJson('/test/runs/{newRunId}/results',
			function (context, result) {
			    return [
			                {
			                    "testCaseTitle": "VerifyWebsiteTheme",
			                    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteTheme",
			                    "testCasePriority": 1,
			                    "outcome": "Passed"
			                },
			                {
			                    "testCaseTitle": "VerifyWebsiteLinks",
			                    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteLinks",
			                    "testCasePriority": 2,
			                    "outcome": "Failed"
			                }
			    ]
			},
            function (context, result) {
                context.result1 = result.responseBody.value[0].id;
                context.result2 = result.responseBody.value[1].id;
            }
            );


    var imgBase64 = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABlSURBVDhP7cxBCsAgDERR739pG/CnGJI0FopQ8O2cjNP6R85QbeNQU7wT1dkijaQ3vkZoWElaoTeJojW01cYh0jwfgiFBV/lEjOZtacijN/nLkOBHhIaVDgn+Wdycp6FXzlCl9wt0Y0cAzHo/zgAAAABJRU5ErkJggg==";
    
    // Upload binary file as test run attachment
    apiwriter.postJson('/test/runs/{newRunId}/attachments',
        function (context, result) {
            return {
                "stream": imgBase64,
                "fileName": context.binaryFile,
                "comment": "Test attachment upload",
                "attachmentType": "GeneralAttachment"
            }
        }
    );
    
    var textBase64 = "VXNlciB0ZXh0IGNvbnRlbnQgdG8gdXBsb2FkLg==";

    // Upload text file as test result attachment
    apiwriter.postJson('/test/runs/{newRunId}/results/{result1}/attachments',
        function (context, result) {
            return {
                "stream": textBase64,
                "fileName": context.textFile,
                "comment": "Test attachment upload",
                "attachmentType": "GeneralAttachment"
            }
        }
    );

    apiwriter.setEnableWrite(true);

    //Get attachments for a run
    apiwriter.getJson('/test/runs/{newRunId}/attachments',
        function (context, result) {
        }
    );

    //Get attachments for a result
    apiwriter.getJson('/test/runs/{newRunId}/results/{result1}/attachments',
        function (context, result) {
        }
    );
};
