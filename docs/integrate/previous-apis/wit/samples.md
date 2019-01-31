---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Tracking Samples | REST API Reference for Team Foundation Server
description: Samples for work item tracking using the REST APIs and .Net Libraries for Team Foundation Server. 
ms.assetid: 6830FA0E-9EA6-4AD3-913D-9E3450315C13
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/24/2016
---

# Work item tracking samples

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

## Getting Started Sample
<a name="gettingstartedsample" />

If this is your first time using the REST API's or .Net Libraries, check out the [getting started sample](../../get-started/rest/samples.md) first. 

All sample source code is located at [our GitHub repo](https://github.com/Microsoft/vsts-restapi-samplecode).

## Create a user story and a child task
<a name="createuserstoryandchildtask" />

You can create multiple work items, including adding links between them, in a single REST API call.  Batching calls like this allows your application to be more performant.

The code below will
1. Create a User story patch document
2. Create a task patch document
3. Post a batch request containing the above patch documents


```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

...

public void CreateAndLinkMultipleWorkItems()
{
    string _personalAccessToken = "your personal access token";
    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));

    Dictionary<string, string> headers = new Dictionary<string, string>() {
        { "Content-Type", "application/json-patch+json" }
    };

    Object[] batchRequests = new Object[2];

    Object[] userStoryPatchDocumentBody = new Object[2];
    userStoryPatchDocumentBody[0] = new { op = "add", path = "/fields/System.Title", value = "Customer can sign in using their Microsoft Account" };
    userStoryPatchDocumentBody[1] = new { op = "add", path = "/id", value = "-1" };

    batchRequests[0] = new WorkItemBatchPost.BatchRequest {
        method = "PATCH",
        uri = "https://accountname.visualstudio.com/fabrikam/_apis/wit/workitems/$User Story?api-version=2.2",
        headers = headers,
        body = userStoryPatchDocumentBody
    };

    Object[] taskPatchDocumentBody = new Object[3];
    taskPatchDocumentBody[0] = new { op = "add", path = "/fields/System.Title", value = "JavaScript implementation for Microsoft Account" };
    taskPatchDocumentBody[1] = new { op = "add", path = "/id", value = "-2" };
    taskPatchDocumentBody[2] = new {
        op = "add",
        path = "/relations/-",
        value = new {
            rel = "System.LinkTypes.Hierarchy-Reverse",
            url = "https://accountname.visualstudio.com/_apis/wit/workitems/-1"
        }
    };

    batchRequests[1] = new WorkItemBatchPost.BatchRequest {
        method = "PATCH",
        uri = "https://accountname.visualstudio.com/fabrikam/_apis/wit/workitems/$Task?api-version=2.2",
        headers = headers,
        body = taskPatchDocumentBody
    };

    using (var client = new HttpClient())
    {
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

        var batchRequest = new StringContent(JsonConvert.SerializeObject(batchRequests), Encoding.UTF8, "application/json");
        var method = new HttpMethod("POST");

        // send the request
        var request = new HttpRequestMessage(method, "https://accountname.visualstudio.com/_apis/wit/$batch?api-version=2.2") { Content = batchRequest };
        var response = client.SendAsync(request).Result;

        if (response.IsSuccessStatusCode)
        {
            var stringResponse = response.Content.ReadAsStringAsync();
        }
    }
}
```

## Query Work Items
<a name="queryworkitems" />

In this example we want execute an existing query to get a list of work items. We assume we already know the query we want to execute. Running a query is a two step process. 

1. Find the query id for a given project and query path (example: Shared Queries/Current Iteration/Open User Stories).
2. Use the query id from step 1 and execute it to get the results. These results only contain a limited reference back to the work items.
3. Use the query result to get the expanded the work items

If you already have the query id, you can skip step 1. The code sample below shows both steps.

>[!div class="tabbedCodeSnippets" cs='C#' cl='.NET Client Library']
>```cs
>using System;
>using System.Net.Http;
>using System.Net.Http.Headers;
>using System.Text;
>using Newtonsoft.Json;
>
>...
>
>//we need create an object so that we can bind the
>//query results and get the query id
>public class QueryResult
>{
>    public string id { get; set; }
>    public string name { get; set; }
>    public string path { get; set; }
>    public string url { get; set; }
>}
>
>public class WorkItemQueryResult
>{
>    public string queryType { get; set; }
>    public string queryResultType { get; set; }
>    public DateTime asOf { get; set; }
>    public Column[] columns { get; set; }
>    public Workitem[] workItems { get; set; }
>}
>
>public class Workitem
>{
>    public int id { get; set; }
>    public string url { get; set; }
>}
>
>public class Column
>{
>    public string referenceName { get; set; }
>    public string name { get; set; }
>    public string url { get; set; }
>}
>
>public void GetWorkItemsByQuery()
>{
>    string _personalAccessToken = "your personal access token";
>    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
>    var project = "fabrikam"
>    var path = "Shared Queries/Current Iteration/Open User Stories"     //path to the query   
>
>    using (var client = new HttpClient())
>    {
>        client.BaseAddress = new Uri("https://account.visualstudio.com");
>        client.DefaultRequestHeaders.Accept.Clear();
>        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
>        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);
>
>        //if you already know the query id, then you can skip this step
>        HttpResponseMessage queryHttpResponseMessage = client.GetAsync(project + "/_apis/wit/queries/" + path + "?api-version=2.2").Result;
>
>        if (queryHttpResponseMessage.IsSuccessStatusCode)
>        {
>            //bind the response content to the queryResult object
>            QueryResult queryResult = queryHttpResponseMessage.Content.ReadAsAsync<QueryResult>().Result;
>            string queryId = queryResult.id;
>
>            //using the queryId in the url, we can execute the query
>            HttpResponseMessage httpResponseMessage = client.GetAsync(project + "/_apis/wit/wiql/" + queryId + "?api-version=2.2").Result;
>
>            if (httpResponseMessage.IsSuccessStatusCode)
>            {
>                WorkItemQueryResult workItemQueryResult = httpResponseMessage.Content.ReadAsAsync<WorkItemQueryResult>().Result;
>
>                //now that we have a bunch of work items, build a list of id's so we can get details
>                var builder = new System.Text.StringBuilder();
>                foreach (var item in workItemQueryResult.workItems)
>                {
>                    builder.Append(item.id.ToString()).Append(",");
>                }
>                        
>                //clean up string of id's
>                string ids = builder.ToString().TrimEnd(new char[] { ',' });
>                        
>                HttpResponseMessage getWorkItemsHttpResponse = client.GetAsync("_apis/wit/workitems?ids=" + ids + "&fields=System.Id,System.Title,System.State&asOf=" + workItemQueryResult.asOf + "&api-version=2.2").Result;
>
>                if (getWorkItemsHttpResponse.IsSuccessStatusCode)
>                {
>                    var result = getWorkItemsHttpResponse.Content.ReadAsStringAsync().Result;                    
>                }                
>            }           
>        }                                  
>    }
>}
>
>```
>```cl
>using System;
>using System.Linq;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
>using Microsoft.VisualStudio.Services.Common;
>
>...
>
>public void GetWorkItemsByQuery()
>{
>    string _personalAccessToken = "your personal access token";
>    Uri _uri = new Uri("https://account.visualstudio.com");
>    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
>
>    string project = "fabrikam";
>    string query = "Shared Queries/Current Iteration/Open User Stories";
>
>    using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(_uri, _credentials))
>    {
>        QueryHierarchyItem queryItem;
>
>        try
>        {
>            //get the query object based on the query name and project
>            queryItem = workItemTrackingHttpClient.GetQueryAsync(project, query).Result;                    
>        }                
>        catch (Exception ex)
>        {
>            //handle the error
>        }             
>               
>        //now we have the query id, so lets execute the query and get the results
>        WorkItemQueryResult workItemQueryResult = workItemTrackingHttpClient.QueryByIdAsync(queryItem.Id).Result;
>
>        //some error handling                
>        if (workItemQueryResult != null)
>        {         
>            //need to get the list of our work item id's and put them into an array
>            List<int> list = new List<int>();
>            foreach (var item in workItemQueryResult.WorkItems)
>            {
>                list.Add(item.Id);
>            }
>            int[] arr = list.ToArray();
>
>            //build a list of the fields we want to see
>            string[] fields = new string[3];
>            fields[0] = "System.Id";
>            fields[1] = "System.Title";
>            fields[2] = "System.State";
>
>            var workItems = workItemTrackingHttpClient.GetWorkItemsAsync(arr, fields, workItemQueryResult.AsOf).Result;
>        }                         
>    }
>}
>
>```

## Query Work Items with WIQL
<a name="queryworkitemswithwiql" />

If you don't know the query you want to execute, you can use the [work item query language (WIQL)](https://msdn.microsoft.com/library/bb130306.aspx) to dynamically create a query in your code.

>[!div class="tabbedCodeSnippets" cs='C#' cl='.NET Client Library']
>```cs
>using System;
>using System.Net.Http;
>using System.Net.Http.Headers;
>using System.Text;
>using Newtonsoft.Json;
>
>...
>
>public void GetWorkItemsByWiql()
>{
>    string _personalAccessToken = "your personal access token";
>    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
>
>    //this is needed because we want to create a project scoped query
>    string project = "fabrikam";
>
>    //create wiql object
>    var wiql = new {
>        query = "Select [State], [Title] " +
>                "From WorkItems " +
>                "Where [Work Item Type] = 'Bug' " +
>                "And [System.TeamProject] = '" + project + "' " +
>                "And [System.State] = 'New' " +
>                "Order By [State] Asc, [Changed Date] Desc"
>    };
>
>    using (var client = new HttpClient())
>    {
>        client.BaseAddress = new Uri("https://account.visualstudio.com");
>        client.DefaultRequestHeaders.Accept.Clear();
>        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
>        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);
>
>        //serialize the wiql object into a json string   
>        var postValue = new StringContent(JsonConvert.SerializeObject(wiql), Encoding.UTF8, "application/json"); //mediaType needs to be application/json for a post call
>
>        var method = new HttpMethod("POST");
>        var httpRequestMessage = new HttpRequestMessage(method, "https://account.visualstudio.com/_apis/wit/wiql?api-version=2.2") { Content = postValue };
>        var httpResponseMessage = client.SendAsync(httpRequestMessage).Result;
>
>        if (httpResponseMessage.IsSuccessStatusCode)
>        {
>            WorkItemQueryResult workItemQueryResult = httpResponseMessage.Content.ReadAsAsync<WorkItemQueryResult>().Result;
>                                     
>            //now that we have a bunch of work items, build a list of id's so we can get details
>            var builder = new System.Text.StringBuilder();
>            foreach (var item in workItemQueryResult.workItems)
>            {
>                builder.Append(item.id.ToString()).Append(",");
>            }
>
>            //clean up string of id's
>            string ids = builder.ToString().TrimEnd(new char[] { ',' });
>
>            HttpResponseMessage getWorkItemsHttpResponse = client.GetAsync("_apis/wit/workitems?ids=" + ids + "&fields=System.Id,System.Title,System.State&asOf=" + workItemQueryResult.asOf + "&api-version=2.2").Result;
>
>            if (getWorkItemsHttpResponse.IsSuccessStatusCode)
>            {
>                var result = getWorkItemsHttpResponse.Content.ReadAsStringAsync().Result;                
>            }                          
>        }                                     
>    }    
>}
>
>```
>```cl
>using System;
>using System.Linq;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
>using Microsoft.VisualStudio.Services.Common;
>
>public void GetWorkItemsByWiql()
>{
>    string _personalAccessToken = "your personal access token";
>    Uri _uri = new Uri("https://account.visualstudio.com");
>    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
>
>    //needed to scope our query to the project
>    string project = "fabrikam";
>
>    //create a wiql object and build our query
>    Wiql wiql = new Wiql() {
>        Query = "Select [State], [Title] " +
>                "From WorkItems " +
>                "Where [Work Item Type] = 'Bug' " +
>                "And [System.TeamProject] = '" + project + "' " +
>                "And [System.State] = 'New' " +
>                "Order By [State] Asc, [Changed Date] Desc"
>    };
>
>    //create instance of work item tracking http client
>    using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(_uri, _credentials))
>    {
>        //execute the query to get the list of work items in the results
>        WorkItemQueryResult workItemQueryResult = workItemTrackingHttpClient.QueryByWiqlAsync(wiql).Result;
>     
>        //some error handling                
>        if (workItemQueryResult != null)
>        {          
>            //need to get the list of our work item id's and put them into an array
>            List<int> list = new List<int>();
>            foreach (var item in workItemQueryResult.WorkItems)
>            {
>                list.Add(item.Id);
>            }
>            int[] arr = list.ToArray();
>
>            //build a list of the fields we want to see
>            string[] fields = new string[3];
>            fields[0] = "System.Id";
>            fields[1] = "System.Title";
>            fields[2] = "System.State";
>
>            var workItems = workItemTrackingHttpClient.GetWorkItemsAsync(arr, fields, workItemQueryResult.AsOf).Result;           
>        }  
>    }
>}
>
>```


## Get List of Work Item fields
<a name="getlistfoworkitemfields" />

To be able to set the values on any fields through the REST APIs, you are going to need to know the ReferenceName of each field. The ReferenceName is not exposed in the web interface, it is only exposed through the [field](./fields.md) REST API endpoint.

>[!div class="tabbedCodeSnippets" cs='C#' cl='.NET Client Library']
>```cs
>using System;
>using System.Net.Http;
>using System.Net.Http.Headers;
>using System.Text;
>using Newtonsoft.Json;
>using System.Collections.Generic;
>
>...
>
>public class WorkItemFields 
>{
>    public int count { get; set; }
>    public WorkItemField[] value { get; set; }
>}
>
>public class WorkItemField
>{
>    public string name { get; set; }
>    public string referenceName { get; set; }
>    public string type { get; set; }
>    public bool readOnly { get; set; }        
>    public string url { get; set; }
>}
>
>public void GetFieldByName()
>{
>    string _personalAccessToken = "your personal access token";
>    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
>    string _fieldName = "Title"; //add name of custom field you want to search for
>
>    client.BaseAddress = new Uri("https://account.visualstudio.com");
>    client.DefaultRequestHeaders.Accept.Clear();
>    client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
>    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);
>
>    HttpResponseMessage response = client.GetAsync("_apis/wit/fields?api-version=2.2").Result;
>
>    if (response.IsSuccessStatusCode)
>    {
>        WorkItemFields result = response.Content.ReadAsAsync<WorkItemFields>().Result;
>        List<WorkItemField> list = new List<WorkItemField>(result.value);
>
>        //search for custom field in list of fields returned
>        var item = list.Find(x => x.name == _fieldName);
>
>        var result = item.referenceName;    
>    }
>}
>
>```
>```cl
>using System;
>using System.Linq;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
>using Microsoft.VisualStudio.Services.Common;
>using System.Collections.Generic;
>
>...
>
>public void GetFieldByName()
>{
>    string _personalAccessToken = "your personal access token";
>    Uri _uri = new Uri("https://account.visualstudio.com");
>    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
>
>    using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(_uri, _credentials))
>    {
>        List<WorkItemField> result = workItemTrackingHttpClient.GetFieldsAsync(null).Result;
>        var item = result.Find(x => x.Name == fieldName);
>
>        if (item != null) {
>            var result =  item.ReferenceName;
>        }
>    }
>}
>
>```

## Create Bug
<a name="samples-createabug" />

Creating a new bug (or any work item) is pretty straight forward. You just need to set the field values and send a JSON-Patch object to the REST endpoint.

You can view the sample REST endpoint [here](./work-items.md#create-work-item)

There are a few things happening in the code sample below:

1. Create an array of objects to set the field values
2. Convert that array to a serialized json object
3. Send that serialized json object to the REST endpoint

>[!div class="tabbedCodeSnippets" cs='C#' cl='.NET Client Library']
>```cs
>using System;
>using System.Net.Http;
>using System.Net.Http.Headers;
>using System.Text;
>using Newtonsoft.Json;
>
>...
>
>public void CreateBug()
>{
>    string _personalAccessToken = "your personal access token";
>    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
>
>    Object[] patchDocument = new Object[4];
>
>    patchDocument[0] = new { op = "add", path = "/fields/System.Title", value = "Authorization Errors" };
>    patchDocument[1] = new { op = "add", path = "/fields/Microsoft.VSTS.TCM.ReproSteps", value = "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx" };
>    patchDocument[2] = new { op = "add", path = "/fields/Microsoft.VSTS.Common.Priority", value = "1" };
>    patchDocument[3] = new { op = "add", path = "/fields/Microsoft.VSTS.Common.Severity", value = "2 - High" };
>
>    //use the httpclient
>    using (var client = new HttpClient())
>    {
>        //set our headers
>        client.DefaultRequestHeaders.Accept.Clear();
>        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
>        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);
>
>        //serialize the fields array into a json string
>        var patchValue = new StringContent(JsonConvert.SerializeObject(patchDocument), Encoding.UTF8, "application/json-patch+json"); 
>
>        var method = new HttpMethod("PATCH");
>        var request = new HttpRequestMessage(method, "https://accountname.visualstudio.com/fabrikam/_apis/wit/workitems/$Bug?api-version=2.2") { Content = patchValue };
>        var response = client.SendAsync(request).Result;
>
>        //if the response is successful, set the result to the workitem object
>        if (response.IsSuccessStatusCode)
>        {
>            var result = response.Content.ReadAsStringAsync().Result;
>        }
>    }
>}
>
>```
>```cl
>using System;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
>using Microsoft.VisualStudio.Services.WebApi.Patch.Json;
>using Microsoft.VisualStudio.Services.WebApi.Patch;
>using Microsoft.VisualStudio.Services.Common;
>
>...
>
>public void CreateBug()
>{
>    string _personalAccessToken = "your personal access token";
>    string _projectName = "fabrikam"
>    Uri _uri = new Uri("https://account.visualstudio.com");
>    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
>
>    JsonPatchDocument patchDocument = new JsonPatchDocument();
>
>    //add fields to your patch document
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/System.Title",
>            Value = "Authorization Errors"
>        }
>    );
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/Microsoft.VSTS.TCM.ReproSteps",
>            Value = "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx"
>        }
>    );
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/Microsoft.VSTS.Common.Priority",
>            Value = "1"
>        }
>    );
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/Microsoft.VSTS.Common.Severity",
>            Value = "2 - High"
>        }
>    );
>
>    //use the workItemTrackingHttpClient
>    using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(_uri, _credentials))
>    {
>        //create a work item
>        WorkItem result = workItemTrackingHttpClient.CreateWorkItemAsync(patchDocument, _projectName, "Bug").Result;
>    }
>}
>
>```


## Migrating work items
<a name="samples-migratingworkitems" />

Often, when migrating work items from another source, organizations want to retain all the original properties of the work item.  For example, you may want to create a bug that retains the original created date and created by values from the system where it originated.  By using the basic REST example above, this is not possible since the Created and Changed date fields are automatically calculated by the system.  Luckily, there is a solution - you may optionally choose to bypass the rules engine on a work item update. This allows you to modify the work item fields without any restrictions. There are some limitations on what's supported:

* To modify the System.CreatedBy or System.ChangedBy fields, you must be a member of the "Project Collection Service Accounts" group.
* Created Date and Created By can ONLY be set on the initial revision
* Changed Date must always be increasing, meaning you can't have a revision

The code is the same as Create Bug. However, we pass the bypassRules=true parameter to the REST endpoint.

>[!div class="tabbedCodeSnippets" cs='C#' cl='.NET Client Library']
>```cs
>using System;
>using System.Net.Http;
>using System.Net.Http.Headers;
>using System.Text;
>using Newtonsoft.Json;
>
>...
>
>public void CreateBugByPassingRules()
>{
>    string _personalAccessToken = "your personal access token";
>    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
>
>    Object[] patchDocument = new Object[6];
>
>    patchDocument[0] = new { op = "add", path = "/fields/System.Title", value = "Imported bug from my other system (rest api)" };
>    patchDocument[1] = new { op = "add", path = "/fields/Microsoft.VSTS.TCM.ReproSteps", value = "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx" };
>    patchDocument[2] = new { op = "add", path = "/fields/System.CreatedBy", value = "Some User" };
>    patchDocument[3] = new { op = "add", path = "/fields/System.ChangedBy", value = "Some User" };
>    patchDocument[4] = new { op = "add", path = "/fields/System.CreatedDate", value = "4/15/2016" };
>    patchDocument[5] = new { op = "add", path = "/fields/System.History", value = "Data imported from source" };
>
>    //use the httpclient
>    using (var client = new HttpClient())
>    {
>        //set our headers
>        client.DefaultRequestHeaders.Accept.Clear();
>        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
>        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);
>
>        //serialize the fields array into a json string
>        var patchValue = new StringContent(JsonConvert.SerializeObject(patchDocument), Encoding.UTF8, "application/json-patch+json"); 
>
>        var method = new HttpMethod("PATCH");
>        var request = new HttpRequestMessage(method, "https://account.visualstudio.com/fabrikam/_apis/wit/workitems/$Bug?bypassRules=true&api-version=2.2") { Content = patchValue };
>        var response = client.SendAsync(request).Result;
>
>        //if the response is successful, set the result to the workitem object
>        if (response.IsSuccessStatusCode)
>        {
>            var result = response.Content.ReadAsStringAsync().Result;
>        }
>    }
>}
>
>```
>```cl
>using System;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
>using Microsoft.VisualStudio.Services.WebApi.Patch.Json;
>using Microsoft.VisualStudio.Services.WebApi.Patch;
>using Microsoft.VisualStudio.Services.Common;
>
>...
>
>public void CreateBugByPassingRules()
>{
>    string _personalAccessToken = "your personal access token";
>    string _projectName = "fabrikam"
>    Uri _uri = new Uri("https://account.visualstudio.com");
>    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
>
>    JsonPatchDocument patchDocument = new JsonPatchDocument();
>
>    //add fields to your patch document
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/System.Title",
>            Value = "Imported bug from my other system (client lib)"
>        }
>    );
>
>    patchDocument.Add(
>      new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/Microsoft.VSTS.TCM.ReproSteps",
>            Value = "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/library/live/hh826547.aspx"
>        }
>    );
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/System.CreatedBy",
>            Value = "Some User"
>        }
>    );
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/System.ChangedBy",
>            Value = "Some User"
>        }
>    );
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/System.CreatedDate",
>            Value = "4/15/2016"
>        }
>    );
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/System.History",
>            Value = "Data imported from source"
>        }
>    );
>
>    //use the workItemTrackingHttpClient
>    using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(_uri, _credentials))
>    {
>        //create a work item
>        WorkItem result = workItemTrackingHttpClient.CreateWorkItemAsync(patchDocument, _projectName, "Bug", null, true).Result;
>    }
>}
>
>```


## Update Bug
<a name="samples-updateabug" />

In this example we are going to update the values of a bug. Before we get started with the code, there are couple of assumptions being made:

1. We already know the id for the bug (work item) that we want to update
2. We know exactly what fields we want to update and values we want to update them to

Later on we will learn how to query for work items and then update them in bulk.

>[!div class="tabbedCodeSnippets" cs='C#' cl='.NET Client Library']
>```cs
>
>using System;
>using System.Net.Http;
>using System.Net.Http.Headers;
>using System.Text;
>using Newtonsoft.Json;
>
>...
>
>public void UpdateBug()
>{
>    string _personalAccessToken = "your personal access token";
>    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
>    string _id = "1234";    //change to id for a specific work item
>
>    Object[] patchDocument = new Object[3];
>
>    //change some values on a few fields
>    patchDocument[0] = new { op = "add", path = "/fields/System.History", value = "Tracking that we changed the priority and severity of this bug to high" };
>    patchDocument[1] = new { op = "add", path = "/fields/Microsoft.VSTS.Common.Priority", value = "1" };
>    patchDocument[2] = new { op = "add", path = "/fields/Microsoft.VSTS.Common.Severity", value = "1 - Critical" };
>
>    using (var client = new HttpClient())
>    {
>        client.DefaultRequestHeaders.Accept.Clear();
>        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
>        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);
>
>        //serialize the fields array into a json string
>        var patchValue = new StringContent(JsonConvert.SerializeObject(patchDocument), Encoding.UTF8, "application/json-patch+json");
>
>        var method = new HttpMethod("PATCH");
>        var request = new HttpRequestMessage(method, "https://accountname.visualstudio.com/_apis/wit/workitems/" + _id + "?api-version=2.2") { Content = patchValue };
>        var response = client.SendAsync(request).Result;
>
>        if (response.IsSuccessStatusCode)
>        {
>            var result = response.Content.ReadAsStringAsync().Result;
>        }
>    }
>}
>
>```
>```cl
>using System;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
>using Microsoft.VisualStudio.Services.WebApi.Patch.Json;
>using Microsoft.VisualStudio.Services.WebApi.Patch;
>using Microsoft.VisualStudio.Services.Common;
>
>...
>
>public void UpdateBug()
>{
>    string _personalAccessToken = "your personal access token";
>    Uri _uri = new Uri("https://account.visualstudio.com");
>    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
>    int _id = 1234;
>
>    //create a JSON-Patch Document and add the fields you want to update
>    JsonPatchDocument patchDocument = new JsonPatchDocument();
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/System.History",
>            Value = "Tracking that we changed the priority and severity of this bug to high"
>        }
>    );
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/Microsoft.VSTS.Common.Priority",
>            Value = "1"
>        }
>    );
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/Microsoft.VSTS.Common.Severity",
>            Value = "1 - Critical"
>        }
>    );
>
>    using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(_uri, _credentials))
>    {
>        WorkItem result = workItemTrackingHttpClient.UpdateWorkItemAsync(patchDocument, _id).Result;
>    }
>}
>
>```


## Add Comment to Bug
<a name="samples-addcommenttobug" />

This sample is very similar to [Update a Bug](#samples-updateabug) example. The difference is, we only need to add a value for the System.History field.

>[!div class="tabbedCodeSnippets" cs='C#' cl='.NET Client Library']
>```cs
>using System;
>using System.Net.Http;
>using System.Net.Http.Headers;
>using System.Text;
>using Newtonsoft.Json;
>
>...
>
>public void AddCommentToBug()
>{
>    string _personalAccessToken = "your personal access token";
>    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
>    string _id = "1234";    //change to id for a specific work item
>
>    Object[] patchDocument = new Object[1];
>
>    //just adding a comment so only need to add the System.History field
>    patchDocument[0] = new { op = "add", path = "/fields/System.History", value = "Adding 'hello world' comment to this bug" };
>
>    using (var client = new HttpClient())
>    {
>        client.DefaultRequestHeaders.Accept.Clear();
>        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
>        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);
>
>        //serialize the fields array into a json string
>        var patchValue = new StringContent(JsonConvert.SerializeObject(patchDocument), Encoding.UTF8, "application/json-patch+json");
>
>        var method = new HttpMethod("PATCH");
>        var request = new HttpRequestMessage(method, "https://account.visualstudio.com/_apis/wit/workitems/" + _id + "?api-version=2.2") { Content = patchValue };
>        var response = client.SendAsync(request).Result;
>
>        if (response.IsSuccessStatusCode)
>        {
>            var result = response.Content.ReadAsStringAsync().Result;
>        }
>    }
>}
>
>```
>```cl
>using System;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
>using Microsoft.VisualStudio.Services.WebApi.Patch.Json;
>using Microsoft.VisualStudio.Services.WebApi.Patch;
>using Microsoft.VisualStudio.Services.Common;
>
>...
>
>public void AddCommentToBug()
>{
>    string _personalAccessToken = "your personal access token";
>    Uri _uri = new Uri("https://account.visualstudio.com");
>    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
>    int _id = 1234      //change to an id for a work item
>
>    //create a JSON-Patch Document and the System.History field with the comment value
>    JsonPatchDocument patchDocument = new JsonPatchDocument();
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/System.History",
>            Value = "Adding 'hello world' comment to this bug"
>        }
>    );
>
>    using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(_uri, _credentials))
>    {
>        WorkItem result = workItemTrackingHttpClient.UpdateWorkItemAsync(patchDocument, _id).Result;
>    }
>}
>
>```


## Change Bug to a User Story
<a name="samples-changebugtouserstory" />

Depending on your workflow, you may want to change the type of a work item. For example, if someone creates a bug but it is really a change request. Instead of creating a new user story, you can change the type from a bug to a user story.

The below example is very similar to the [Update a Bug](#samples-updateabug) example. You just need to set the ```/fields/System.WorkItemType``` field to a User Story.

>[!div class="tabbedCodeSnippets" cs='C#' cl='.NET Client Library']
>```cs
>using System;
>using System.Net.Http;
>using System.Net.Http.Headers;
>using System.Text;
>using Newtonsoft.Json;
>
>...
>
>public void ChangeBugToUserStory()
>{
>    string _personalAccessToken = "your personal access token";
>    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
>    string _id = "1234";    //change to id for a specific work item
>
>    Object[] patchDocument = new Object[1];
>
>    //change some values on a few fields
>    patchDocument[0] = new { op = "add", path = "/fields/System.WorkItemType", value = "User Story" };
>
>    using (var client = new HttpClient())
>    {
>        client.DefaultRequestHeaders.Accept.Clear();
>        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
>        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);
>
>        //serialize the fields array into a json string
>        var patchValue = new StringContent(JsonConvert.SerializeObject(patchDocument), Encoding.UTF8, "application/json-patch+json");
>
>
>        var method = new HttpMethod("PATCH");
>        var request = new HttpRequestMessage(method, "https://accountname.visualstudio.com/_apis/wit/workitems/" + _id + "?api-version=2.2") { Content = patchValue };
>        var response = client.SendAsync(request).Result;
>
>        if (response.IsSuccessStatusCode)
>        {
>            var result = response.Content.ReadAsStringAsync().Result;
>        }
>    }
>}
>
>```
>```cl
>using System;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
>using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
>using Microsoft.VisualStudio.Services.WebApi.Patch.Json;
>using Microsoft.VisualStudio.Services.WebApi.Patch;
>using Microsoft.VisualStudio.Services.Common;
>
>...
>
>public void ChangeBugToUserStory()
>{
>    string _personalAccessToken = "your personal access token";
>    Uri _uri = new Uri("https://account.visualstudio.com");
>    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
>    in _id = 1234;      //change to an id for a work item
>
>    //create a JSON-Patch Document and add the fields you want to update
>    JsonPatchDocument patchDocument = new JsonPatchDocument();
>
>    patchDocument.Add(
>        new JsonPatchOperation() {
>            Operation = Operation.Add,
>            Path = "/fields/System.WorkItemType",
>            Value = "User Story"
>        }
>    );
>
>    using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(_uri, _credentials))
>    {
>        WorkItem result = workItemTrackingHttpClient.UpdateWorkItemAsync(patchDocument, _id).Result;
>    }
>}
>
>```


## FAQ
<a name="faq" />

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Where can I get the source code for the code samples?

A: See the [https://github.com/Microsoft/vsts-restapi-samplecode](https://github.com/Microsoft/vsts-restapi-samplecode).

#### Q: Where can I find more information on the .NET library?

A: Yes, see the [overview of client libraries](../../get-started/client-libraries/dotnet.md)

<!-- ENDSECTION --> 