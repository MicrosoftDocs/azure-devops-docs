using Newtonsoft.Json.Linq;
using System.Net.Http;
using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// DO NOT change the name of Program class and the signature of RunAsync() method.
public partial class Program 
{       
	public static async Task RunAsync() 
    {
		// For more info: https://www.visualstudio.com/integrate/api/tfs/projects
    	using(var client = new HttpClient())
        {
    		var baseUrl = "https://dev.azure.com/fabrikam-fiber-inc/_apis/projects";

			// Get the current user's ID
			using(var request = new HttpRequestMessage(HttpMethod.Get, baseUrl) 
            {
				request.Headers.Add("Authorization", "Bearer {token}");
				request.Headers.Add("Accept", "application/json;api-version=1.0");

				using(var response = await client.SendAsync(request)) 
                {
					var content = await response.Content.ReadAsStringAsync();
					var projects = JObject.parse(content)["value"];
					
                    foreach(dynamic project in projects) 
                    {
						using(var projectRequest = new HttpRequestMessage(HttpMethod.Get, baseUrl + "/" + project.id)
						{
  						 	projectRequest.Headers.Add("Authorization", "Bearer {token}");
							projectRequest.Headers.Add("Accept", "application/json;api-version=1.0");
							
							using(var projectResponse = await client.SendAsync(projectRequest)) 
              				  {
									var content = await response.Content.ReadAsStringAsync();
									dynamic projectDetails = JObject.parse(content);
									
									Console.WriteLine("Project ID \"{0}\", name: \"{1}\", source control type: \"{2}\"",
									projectDetails.id,
									projectDetails.name,
									projectDetails.capabilities.versionControl.sourceControlType
									);
							}
						}					
					}												
				}
			}
								
							}
		}
    }