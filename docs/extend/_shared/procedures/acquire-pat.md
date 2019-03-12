1. Sign in to your organization 
(```https:dev.azure.com/{organization}```).

0.	From your home page, open your profile. 
Go to your security details.

	<img alt="Go to Azure DevOps Services home, open your profile, go to Security" src="/azure/devops/extend/_shared/procedures/_img/create-pat/my-profile.png" style="border: 1px solid #CCCCCC" />
 
0. Under **Security**, go to **Personal access tokens**, 
then choose **Add**.

   <img alt="Add personal access token" src="/azure/devops/extend/_shared/procedures/_img/create-pat/add-personal-access-token.png" style="border: 1px solid #CCCCCC" />
 
0. Add a description for your token, 
then select an expiration timeframe for your token.

0. In the **Accounts** list, 
select **All accessible accounts**. 
This is required because the Visual Studio Marketplace 
publishing APIs work outside the context of an organization.

0. Select the **Marketplace (publish)** scope. 
This will limit the token to only being able 
to publish extensions to the Visual Studio Marketplace.

   <img alt="Marketplace scope" src="/azure/devops/extend/_shared/procedures/_img/create-pat/marketplace-scope.png" style="border: 1px solid #CCCCCC" />
       
0. Finish creating your token. 
    
0. Copy your generated personal access token. 
Make sure to keep it secret.

   <img alt="Copy personal access token" src="/azure/devops/extend/_shared/procedures/_img/create-pat/copy-pat.png" style="border: 1px solid #CCCCCC" />
   