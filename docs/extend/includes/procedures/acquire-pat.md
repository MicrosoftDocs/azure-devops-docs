1. Sign in to your organization 
(```https:dev.azure.com/{organization}```).

2. From your home page, open the user settings icon, and then select **Profile**.

   :::image type="content" source="../../media/user-profile-select-profile.png" alt-text="Select Profile after selecting the user settings icon":::
 
3. Under **Security**, select **Personal access tokens**, and then select **New Token**.

   :::image type="content" source="../../media/create-new-personal-access-token.png" alt-text="Create your new personal access token":::

4. Complete the form:
   - Name your token
   - Select **All accessible organizations**, which is the only value that works when publishing via CLI. If you select only one organization, it results in an error, even if the PAT is valid 
   - Select an expiration time frame for your token. This is required because the Visual Studio Marketplace publishing APIs work outside of the context of an organization
   - Set the scope of access associated with this token. Be sure to select the **Marketplace (publish)** scope. This scope limits the token to only being able 
   to publish extensions to the Marketplace.
   - Select **Create**
 
   :::image type="content" source="../../media/create-pat-final-steps.png" alt-text="..":::
    
5. Copy your generated personal access token. Make sure to keep it secret.

   :::image type="content" source="../../media/copy-new-token-to-clipboard.png" alt-text="Copy your token and keep it a secret":::
   