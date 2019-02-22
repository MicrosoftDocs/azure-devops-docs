---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Tracking Samples | REST API Reference for Team Foundation Server
description: Samples for work item tracking using the REST APIs and .Net Libraries for Team Foundation Server. 
ms.assetid: 94639057-d0b4-472e-952d-182efcc165fa
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/24/2016
---

# Projects and teams samples

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

## Getting Started

If this is your first time using the REST APIs or .NET libraries, check out the [getting started sample](../../get-started/rest/samples.md) first. 

All sample source code is located at [our GitHub repo](https://github.com/Microsoft/vsts-restapi-samplecode).

> Are there scenarios or samples that you would like us to provide? If so make a new suggestion on our [github project](https://github.com/Microsoft/vsts-restapi-samplecode/issues/new).

## REST API Samples

### Get Teams

Get a list of teams for a given project.

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

...

public class WebApiTeams 
{
    public WebApiTeam[] value { get; set; }
    public int count { get; set; }
}

public class WebApiTeam
{
    public string id { get; set; }
    public string name { get; set; }
    public string url { get; set; }
    public string description { get; set; }
    public string identityUrl { get; set; }
}

public void GetTeams()
{   
    string _personalAccessToken = "your personal access token";
    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
    string _project = "My project name";
      
    //use the httpclient        
    using (var client = new HttpClient())
    {
        //set our headers
        client.BaseAddress = new Uri("https://accountname.visualstudio.com/");
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

        //send the request and content
        HttpResponseMessage response = client.GetAsync("_apis/projects/" + _project + "/teams?api-version=2.2").Result;
        
        if (response.IsSuccessStatusCode)
        {
            WebApiTeams teams = response.Content.ReadAsAsync<WebApiTeams>().Result;       
        }             
    }
}

```

### Get Team

Get a specific team by project name or project id.

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

...

public class WebApiTeam
{
    public string id { get; set; }
    public string name { get; set; }
    public string url { get; set; }
    public string description { get; set; }
    public string identityUrl { get; set; }
}

public void GetTeam()
{   
    string _personalAccessToken = "your personal access token";
    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
    string _project = "My project name";
    string _team = "My team";
      
    //use the httpclient        
    using (var client = new HttpClient())
    {
        //set our headers
        client.BaseAddress = new Uri("https://accountname.visualstudio.com/");
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

        //send the request and content
        HttpResponseMessage response = client.GetAsync("_apis/projects/" + _project + "/teams/" + _team + "?api-version=2.2").Result;
        
        if (response.IsSuccessStatusCode)
        {
            WebApiTeam team = response.Content.ReadAsAsync<WebApiTeam>().Result;       
        }             
    }
}

```

### Get Team Members

Get a list of members for a given team.

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

...

public class Members
{
    public Member[] value { get; set; }
    public int count { get; set; }
}

public class Member
{
    public string id { get; set; }
    public string displayName { get; set; }
    public string uniqueName { get; set; }
    public string url { get; set; }
    public string imageUrl { get; set; }
}

public void GetTeamMembers()
{   
    string _personalAccessToken = "your personal access token";
    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
    string _project = "My project name";
    string _team = "My team";
      
    //use the httpclient        
    using (var client = new HttpClient())
    {
        //set our headers
        client.BaseAddress = new Uri("https://accountname.visualstudio.com/");
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

        //send the request and content
        HttpResponseMessage response = client.GetAsync("_apis/projects/" + _project + "/teams/" + _team + "/members?api-version=2.2").Result;
        
        if (response.IsSuccessStatusCode)
        {
            Members members = response.Content.ReadAsAsync<Members>().Result;       
        }             
    }
}

```

### Create New Team

Create a new team in a project.

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

....

public class WebApiTeam
{
    public string id { get; set; }
    public string name { get; set; }
    public string url { get; set; }
    public string description { get; set; }
    public string identityUrl { get; set; }
}

public void CreateTeam()
{   
    string _personalAccessToken = "your personal access token";
    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
    string _project = "My project name"; 

    //create a team object to save
    Object teamData = new { name = "My new team" };

    using (var client = new HttpClient())
    {
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

        // serialize the fields array into a json string         
        var patchValue = new StringContent(JsonConvert.SerializeObject(teamData), Encoding.UTF8, "application/json"); // mediaType needs to be application/json-patch+json for a patch call
        var method = new HttpMethod("POST");

        var request = new HttpRequestMessage(method, "https://accountname.visualstudio.com/_apis/projects/" + _project + "/teams?api-version=2.2") { Content = patchValue };
        var response = client.SendAsync(request).Result;

        if (response.IsSuccessStatusCode)
        {
            WebApiTeam teamResponse = response.Content.ReadAsAsync<WebApiTeam>().Result;            
        }
    }
}

```

### Update Existing Team

Update an existing team.

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

....

public class WebApiTeam
{
    public string id { get; set; }
    public string name { get; set; }
    public string url { get; set; }
    public string description { get; set; }
    public string identityUrl { get; set; }
}

public void UpdateTeam()
{   
    string _personalAccessToken = "your personal access token";
    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
    
    string _project = "My project name"; 
    string _team = "My team";

    //create a team object to save
    Object teamData = new { name = "My updated team", description = "my teams awesome description" };

    using (var client = new HttpClient())
    {
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

        // serialize the fields array into a json string         
        var patchValue = new StringContent(JsonConvert.SerializeObject(team), Encoding.UTF8, "application/json"); // mediaType needs to be application/json-patch+json for a patch call
        var method = new HttpMethod("PATCH");

        var request = new HttpRequestMessage(method, "https://accountname.visualstudio.com/_apis/projects/" + _project + "/teams/" + _team + "?api-version=2.2") { Content = patchValue };
        var response = client.SendAsync(request).Result;

        if (response.IsSuccessStatusCode)
        {
            WebApiTeam teamResponse = response.Content.ReadAsAsync<WebApiTeam>().Result;     
        }  
    }    
}

```

### Delete Team

Delete a team from a project.

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

....

public void DeleteTeam()
{   
    string _personalAccessToken = "your personal access token";
    string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));
    string _project = "My project name"; 
    string _team = "My team";

    using (var client = new HttpClient())
    {
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

        var method = new HttpMethod("DELETE");

        var request = new HttpRequestMessage(method, "https://accountname.visualstudio.com/_apis/projects/" + _project + "/teams/" + _team + "?api-version=2.2");
        var response = client.SendAsync(request).Result;        
    }
}

```

## .NET Client Libraries Samples

### Get Teams

Get a list of teams for a given project.

```cs
using Microsoft.TeamFoundation.Core.WebApi;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

...

public GetTeams()
{
    //create uri and VssBasicCredential variables
    Uri _uri = new Uri("https://accountname.visualstudio.com");
    string _personalAccessToken = "your personal access token";    
    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
   
    string _project = "My project name";
    
    using (TeamHttpClient teamHttpClient = new TeamHttpClient(_uri, _credentials))
    {
        IEnumerable<WebApiTeam> results = teamHttpClient.GetTeamsAsync(_project).Result;     
    }
}

```

### Get Team

Get a specific team by project name or project id.

```cs
using Microsoft.TeamFoundation.Core.WebApi;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

...

public GetTeam()
{
    //create uri and VssBasicCredential variables
    Uri _uri = new Uri("https://accountname.visualstudio.com");
    string _personalAccessToken = "your personal access token";    
    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
    
    string _project = "My project name";
    string _team = "My team";
    
    using (TeamHttpClient teamHttpClient = new TeamHttpClient(_uri, _credentials))
    {
        WebApiTeam result = teamHttpClient.GetTeamAsync(_project, _team).Result;     
    }
}

```

### Get Team Members

Get a list of members for a given team.

```cs
using Microsoft.TeamFoundation.Core.WebApi;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

...

public GetTeamMembers()
{
    //create uri and VssBasicCredential variables
    Uri _uri = new Uri("https://accountname.visualstudio.com");
    string _personalAccessToken = "your personal access token";    
    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);    
    
    string _project = "My project name";
    string _team = "My team"

    using (TeamHttpClient teamHttpClient = new TeamHttpClient(_uri, _credentials))
    {
        IEnumerable<IdentityRef> results = teamHttpClient.GetTeamMembersAsync(_project, _team).Result;               
    }
}

```

### Create New Team

Create a new team in a project.

```cs
using Microsoft.TeamFoundation.Core.WebApi;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

...

public CreateTeam()
{
    //create uri and VssBasicCredential variables
    Uri _uri = new Uri("https://accountname.visualstudio.com");
    string _personalAccessToken = "your personal access token";    
    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
    
    string _project = "My project name";
  
    WebApiTeam teamData = new WebApiTeam()
    {
        Name = "My new team"
    };

   using (TeamHttpClient teamHttpClient = new TeamHttpClient(_uri, _credentials))
    {
        WebApiTeam result = teamHttpClient.CreateTeamAsync(teamData, _project).Result;
    }
}

```


### Update Existing Team

Update an existing team.

```cs
using Microsoft.TeamFoundation.Core.WebApi;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

...

public UpdateTeam()
{
    //create uri and VssBasicCredential variables
    Uri _uri = new Uri("https://accountname.visualstudio.com");
    string _personalAccessToken = "your personal access token";    
    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
    
    string _project = "My project name";
    string _team = "My team";
  
    WebApiTeam teamData = new WebApiTeam()
    {
        Name = "My updated team",
        Description = "my awesome team description"
    };

    using (TeamHttpClient teamHttpClient = new TeamHttpClient(_uri, _credentials))
    {
        WebApiTeam result = teamHttpClient.UpdateTeamAsync(teamData, _project, _team).Result;
    }
}

```

### Delete Team

Delete a team from a project.

```cs
using Microsoft.TeamFoundation.Core.WebApi;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

...

public DeleteTeam()
{
    //create uri and VssBasicCredential variables
    Uri _uri = new Uri("https://accountname.visualstudio.com");
    string _personalAccessToken = "your personal access token";    
    VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);
    
    string _project = "My project name";
    string _team = "My team";  

    using (TeamHttpClient teamHttpClient = new TeamHttpClient(_uri, _credentials))
    {
        WebApiTeam result = teamHttpClient.DeleteTeamAsync(_project, _team).SyncResult();
    }
}

```

> Are there scenarios or samples that you would like us to provide? If so make a new suggestion on our [github project](https://github.com/Microsoft/vsts-restapi-samplecode/issues/new).

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Where can I get the source code for the code samples?

A: See the [https://github.com/Microsoft/vsts-restapi-samplecode](https://github.com/Microsoft/vsts-restapi-samplecode).

#### Q: Where can I find more information on the .NET libraries?

A: Yes, see the [overview of client libraries](../../get-started/client-libraries/dotnet.md)


<!-- ENDSECTION --> 



