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
    		var baseUrl = "https://app.vssps.visualstudio.com/_apis/";

			// Get the current user's ID
			using(var request = new HttpRequestMessage(HttpMethod.Get, baseUrl + "profile/profiles/me") 
            {
				request.Headers.Add("Authorization", "Bearer {token}");
				request.Headers.Add("Accept", "application/json;api-version=1.0");

				using(var response = await client.SendAsync(request)) 
                {
					var content = await response.Content.ReadAsStringAsync();
					var profileId = JObject.Parse(content)["id"];

					Console.WriteLine("Current user ID is: {0}", profileId);

					using(var accountsRequest = new HttpRequestMessage(HttpMethod.Get, baseUrl + "accounts?memberId=" + profileId) 
                    {
						accountsRequest.Headers.Add("Authorization", "Bearer {token}");
						accountsRequest.Headers.Add("Accept", "application/json;api-version=1.0");

						using(var accountsResponse = await client.SendAsync(accountsRequest)) 
                        {
							var content = await response.Content.ReadAsStringAsync();
							var accounts = JObject.Parse(content)["value"];
							
                            foreach(dynamic account in accounts) 
                            {
								Console.WriteLine("Account \"{0}\"", account.id);
							}
						}
					}
				}
			}
		}
    }
}