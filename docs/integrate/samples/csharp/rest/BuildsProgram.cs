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
    	using(var client = new HttpClient())
        {
			var project = "Fabrikam-Fiber-Git";
    		var baseUrl = "https://dev.azure.com/fabrikam-fiber-inc/" + project + "/_apis/build/builds";

			// Get the current user's ID
			using(var request = new HttpRequestMessage(HttpMethod.Get, baseUrl + "?$top=10") 
            {
				request.Headers.Add("Authorization", "Bearer {token}");
				request.Headers.Add("Accept", "application/json;api-version=2.0-preview.2");

				using(var response = await client.SendAsync(request)) 
                {
					var content = await response.Content.ReadAsStringAsync();
					var builds = JObject.parse(content)["value"];
					
                    foreach(dynamic build in builds) 
                    {
						Console.WriteLine("Build \"{0}\", status: \"{1}\", definition: \"{2}\"",
								build.id,
								build.status,
								build.definition.name
						);
					}
				}
			}
		}
    }
}