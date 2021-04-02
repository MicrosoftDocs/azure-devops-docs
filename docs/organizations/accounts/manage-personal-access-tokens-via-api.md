`---
title: Manage personal access tokens via API
titleSuffix: Azure DevOps
description: Users can utilize the PAT lifecycle management API to get, create, update, and revoke their personal access tokens (PATs).
ms.technology: devops-security
ms.topic: conceptual
ms.author: caosadci
author: catherineosadciw
ms.reviewer: wonga
ms.date: 12/30/2020
monikerRange: 'azure-devops'
---

# Manage personal access tokens (PATs) via API
[!INCLUDE [temp](../../includes/version-vsts-only.md)]

When dealing with a large set of personal access tokens (PATs), it may become cumbersome to manage the maintenance of these tokens via UI alone.

With the PAT Lifecycle Management API, it is far easier to manage the PATs associated with your organizations via automated processes. This rich set of APIs enable you to better manage the PATs you own, offering you functionality such as creating new personal access tokens with a desired scope and duration, renewing existing personal access tokens, or expiring existing personal access tokens.

> [!IMPORTANT]
> In order to use the API, you must authenticate with an AAD token. Learn more on how to do this in the [authentication section below](#api-authentication).

To see the full list of available endpoints, [view the API reference here](https://docs.microsoft.com/rest/api/azure/devops/tokens/pats).


## API authentication

### Authenticating with AAD Tokens

Unlike other Azure Devops Services APIs, users must provide an [Azure Active Directory (AAD) access token](https://docs.microsoft.com/azure/active-directory/develop/access-tokens) to use this API instead of a PAT token. AAD tokens are a safer authentication mechanism than using PATs and given this API’s ability to create and revoke PATs, we want to ensure that such powerful functionality is available to properly authorized users only.

The Microsoft Authentication Library (MSAL) includes multiple compliant authentication flows that you can leverage within your application for acquiring and refreshing AAD tokens. A complete list of MSAL flows can be found under Microsoft Authentication Library “authentication flows” documentation. A guide to choosing the right authentication method for your application can be found under Choosing the right authentication method for Azure DevOps.


> [!IMPORTANT]
> "On-behalf-of application" solutions (such as the “client credential” flow) and any authentication flow that does not issue an AAD access token is not valid for use with this API.  If multi-factor authentication is enabled in your AAD tenant, you must definitely use the MSAL “authorization code” flow.  

To use the MSAL library to automatically acquire and refresh AAD access tokens, you must: 
1. [Have an AAD tenant with an active Azure subscription](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) 
2. [Register an application in their AAD tenant](https://docs.microsoft.com/azure/active-directory/develop/quickstart-register-app) 
3. [Add Azure DevOps permissions to the application](https://docs.microsoft.com/azure/active-directory/develop/quickstart-configure-app-access-web-apis) 

> [!CAUTION]
> Having an AAD tenant with an active Azure subscription is a prerequisite for using this API.

Once you have an application with a working authentication flow for handling AAD tokens, you can then use these tokens to make calls to the PAT Lifecycle Management API. In the following section, we show you how one might create an application that authenticates a user using an AAD access token with the MSAL library and makes use of our PAT Lifecycle Management API. 

Follow either one of the two examples below to get started:
* [Clone our sample Python Flask app](#clone-our-python-flask-web-app) and configure it with your tenant and ADO organization
* [Generate a sample application in the Azure Portal](#generate-a-quickstart-azure-portal-application) for your language/framework of choice and update the application to point towards the PAT Lifcycle Management API

#### Clone our Python Flask web app

We have provided you with a [sample Python Flask web application for this API that you can download on GitHub](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) and configure to use with your AAD tenant and Azure DevOps organization. The sample application uses the MSAL authentication code flow to acquire an AAD access token.  

> [!IMPORTANT]
> We recommend getting started with the sample Python Flask web application on GitHub, but if you prefer to use a different language or application type, use the [Quickstart option](#generate-a-quickstart-azure-portal-application) below to recreate an equivalent test application.

Once you have cloned the sample app, follow the instructions in the repo’s README to understand how to register an application in your AAD tenant, configure the sample to use your AAD tenant, and run your cloned app.

#### Generate a Quickstart Azure Portal application

Alternatively, you can automatically generate a sample application with the necessary MSAL code, as well as a client secret required at login, using the **Quickstart** option on the registered application's page in [Azure Portal](https://portal.azure.com/). The Quickstart test application follows the authorization code flow, but does so with a Microsoft Graph API endpoint. Users will need to update the application's configuration to point to the endpoint for the PAT Lifecycle Management API.

To use application Quickstart, follow the documentation under **Quickstarts** for your application type on the [Azure Active Directory Develop documentation homepage](https://docs.microsoft.com/azure/active-directory/develop/).


###### Example: Get started with a Python Flask Quickstart application
1. Once you've registered your application in an AAD tenant with an active Azure subscription, in the[Azure Portal](https://portal.azure.com/), navigate to your registered application under **Azure Active Directory** -> **App Registrations**.
   
   ![Open "Azure Active Directory" -> "App Registrations"](./media/manage-personal-access-tokens-via-api/step1-aad-app-registrations.png)

2. Select your application and navigate to **API Permissions**.
   
   ![Select your application and navigate to "API Permissions"](./media/manage-personal-access-tokens-via-api/step2-api-permissions.png)

3. Select **Add a permission** and select **Azure DevOps** -> check **user_impersonation** -> select **Add permissions** .
   
   ![Add the "Azure DevOps" -> "user_impersonation" permission](./media/manage-personal-access-tokens-via-api/step3-add-ado-permissions.png)

4. Select **Quickstart** from the left navigation panel.
   
5. Select your application type: for Python Flask, select **Web application**.

    ![Select the "Web application" type](./media/manage-personal-access-tokens-via-api/step5-select-app-type.png)

6. Select your application platform.
   
    ![Select the "Python" application platform](./media/manage-personal-access-tokens-via-api/step6-select-app-platform.png)

7. Make sure you've met the necessary prerequisites, then allow Azure Portal to make the necessary changes to configure your application.  The **reply URL** will be the redirect URL that was set at application creation + “/getAToken”.
   
    ![Allow the Azure Portal to make the necessary changes to configure your application](./media/manage-personal-access-tokens-via-api/step7-allow-portal-configuration.png)

8. Download the Quickstart application and extract the files.

    ![Download the Quickstart application and extract the files](./media/manage-personal-access-tokens-via-api/step8-download-and-extract.png)

9.  Install the application requirements and run the application to ensure you have all necessary dependencies.  Note that the application is initially configured to hit an endpoint in the Microsoft Graph API; users can change this to the PAT lifecycle management API by following the additional configuration instructions below. 
    
    ![Install the application requirements and run the application to ensure you have all necessary dependencies](./media/manage-personal-access-tokens-via-api/step9-install-and-run.png)


##### Configure a Quickstart application
Once the user has downloaded and installed the Quickstart application, it will be configured to use a test API endpoint from Microsoft Graph. We will need to modify the generated configuration file to have it call the PAT Lifecycle Management API instead.


> [!TIP]
> We use collection and organization interchangeably in these docs. If a configuration variable needs a collection name, please replace it with your organization name.


To do so, we need to do a few things:
1. Update the **ENDPOINT** configuration variable to our desired endpoint, which is `https://vssps.dev.azure.com/{YOUR_COLLECTION_NAME_HERE}/_apis/Tokens/Pats?api-version=6.1-preview`  for the PAT Lifecycle Management APIs
2. Update the **SCOPE** configuration variable to **"499b84ac-1321-427f-aa17-267ca6975798/.default"** to refer to the Azure DevOps resource and all of its scopes.

The below example will show you how we did this configuration for the Quickstart Python Flask application we just generated through the Azure Portal in the previous section.

Make sure you follow instructions to secure your client secret, which is initially inserted in plain-text into the application configuration file. As a best practice, remove the plain-text variable from the configuration file and use an environment variable or Azure KeyVault to secure their application's secret. 

Alternatively, users can choose to use a certificate instead of a client secret; this is the recommended option if the application will eventually be used in production. The instructions for using a certificate can be found in the final step of the Quickstart application set up.


> [!CAUTION] 
> Never leave a plain-text client secret in production application code.


###### Example: Configure a Python Flask Quickstart application for the PAT lifecycle management API
1. Once you've downloaded your Quickstart application, installed its dependencies, and tested that it runs in your environment, open the `app_config.py` file in your editor of choice.  The file should resemble the following code snippet; for clarity, comments referencing the default Microsoft Graph API configuration have been removed: 

    ```python
    import os

    CLIENT_ID = "YOUR_CLIENT_ID_HERE" 
    # Application (client) ID of app registration

    CLIENT_SECRET = "YOUR_CLIENT_SECRET_HERE" 
    # Placeholder - for use ONLY during testing.
    # In a production app, we recommend you use a more secure method of storing your secret,
    # like Azure Key Vault. Or, use an environment variable as described in Flask's documentation:
    # https://flask.palletsprojects.com/en/1.1.x/config/#configuring-from-environment-variables
    # CLIENT_SECRET = os.getenv("CLIENT_SECRET")
    # if not CLIENT_SECRET:
    #     raise ValueError("Need to define CLIENT_SECRET environment variable")

    AUTHORITY = "https://login.microsoftonline.com/YOUR_AAD_TENANT_ID_HERE"  # For multi-tenant app
    # AUTHORITY = "https://login.microsoftonline.com/Enter_the_Tenant_Name_Here"

    REDIRECT_PATH = "/getAToken"  
    # Used for forming an absolute URL to your redirect URI.
    # The absolute URL must match the redirect URI you set
    # in the app's registration in the Azure portal.

    ENDPOINT = 'https://graph.microsoft.com/v1.0/users'  

    SCOPE = ["User.ReadBasic.All"]

    SESSION_TYPE = "filesystem"  
    # Specifies the token cache should be stored in server-side session
    ```

2. Update the client ID or client secret to your application with your app registration’s client ID and client secret. When in production, make sure to secure the client secret, either by using an environment variable, Azure KeyVault, or by switching to a certificate.

    ```python
    CLIENT_ID = "YOUR_CLIENT_ID_HERE" 
    # Application (client) ID of app registration

    CLIENT_SECRET = "YOUR_CLIENT_SECRET_HERE" 
    # Placeholder - for use ONLY during testing.
    # In a production app, we recommend you use a more secure method of storing your secret.
    ```


3. Change the `ENDPOINT` variable to the desired Azure DevOps collection URL and API endpoint, e.g. for a collection named "testCollection":  

    ```python
    # Fill in the url to the user's ADO collection + the PAT lifecycle management API endpoint here

    ENDPOINT = 'https://vssps.dev.azure.com/{YOUR_COLLECTION_NAME_HERE}/_apis/Tokens/Pats?api-version=6.1-preview'
    ```

    For a collection named "testCollection", this endpoint would be:
    ```python
    ENDPOINT = 'https://vssps.dev.azure.com/testCollection/_apis/Tokens/Pats?api-version=6.1-preview'
    ```


4. Change the `SCOPE` variable to reference the Azure DevOps API resource; the character string is the resource ID for the Azure DevOps API, and the “.default” scope refers to all scopes for that resource ID. 

    ```python
    SCOPE = ["499b84ac-1321-427f-aa17-267ca6975798/.default"]
    ```

5. If your application is configured for a specific tenant (rather than the multi-tenant configuration), use the alternate value for the `AUTHORITY` variable, adding the specific tenant name in "Enter_the_Tenant_Name_Here".

    ```python
    # For single-tenant app:
    AUTHORITY = "https://login.microsoftonline.com/YOUR_AAD_TENANT_ID_HERE"  # 

    # For multi-tenant app:
    AUTHORITY = "https://login.microsoftonline.com/Enter_the_Tenant_Name_Here"
    ```


6. Verify that the final `app_config.py` file matches the following, with your CLIENT_ID, tenant ID, and desired collection URL.  You should also ensure that the CLIENT_SECRET has been moved to an environment variable, Azure KeyVault, or swapped with a certificate for your registered application:

    ```python
    import os

    CLIENT_ID = "YOUR_CLIENT_ID_HERE" 
    # Application (client) ID of app registration

    # Note that the CLIENT_SECRET has been removed and moved to an environment variable or Azure KeyVault

    AUTHORITY = "https://login.microsoftonline.com/YOUR_AAD_TENANT_ID_HERE"  # For multi-tenant app
    # AUTHORITY = "https://login.microsoftonline.com/Enter_the_Tenant_Name_Here"

    REDIRECT_PATH = "/getAToken"  
    # Used for forming an absolute URL to your redirect URI.
    # The absolute URL must match the redirect URI you set in the app's registration in the Azure portal.

    ENDPOINT = 'https://vssps.dev.azure.com/testCollection/_apis/Tokens/Pats?api-version=6.1-preview' 
    # Used to configure user's collection URL and the desired API endpoint

    SCOPE = ["499b84ac-1321-427f-aa17-267ca6975798/.default"]
    # Means "All scopes for the Azure DevOps API resource"

    SESSION_TYPE = "filesystem"  
    # Specifies the token cache should be stored in server-side session
    ```

6. Rerun the application to test that you can GET all PAT tokens for the requesting user.  Once you've verified this, feel free to modify the contents of `'app.py'` and the `'ms-identity-python-webapp-master\templates'` directory to support sending requests to the rest of the PAT lifecycle management API endpoints.  For an example of a Python Flask Quickstart application that has been modified to support requests to all PAT lifecycle management API endpoints, [see this sample repo on Github](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample).


### Automatically refresh an AAD access token
Once the application is configured and pointing to the correct API endpoint, and the user has acquired an access token, the token can be used for authentication for up to an hour. The MSAL code provided in both the GitHub sample application and the Quickstart will automatically refresh the token once it expires, preventing the user from needing to log in again and acquire a new authorization code. However, users may need to log in again after 90 days once their refresh token expires.


### Explore PAT Lifecycle Management APIs
In the above Github sample application and Quickstart applications, the application has been pre-configured to make requests with the AAD tokens you have acquired. 
To learn more about the individual endpoints themselves and what parameters they accept and what is returned in responses, see the [API Reference docs](https://docs.microsoft.com/rest/api/azure/devops/tokens/pats).


##  FAQ

### Q: Why do I need to authenticate with an AAD token? Why is a PAT Token not enough?
A: With this PAT Lifecycle Management API, we have opened up the ability to create new PATs and revoke existing PATs. In the wrong hands, this API could be used by malicious actors to create multiple entry points into your organization’s ADO resources. By enforcing AAD authentication, we hope to have this powerful API be more secure against this unauthorized usage. 

### Q: Do I need to have an AAD tenant with an active Azure subscription to use this API?
A:  Unfortunately, this API is only available to users that are part of an AAD tenant with an active Azure subscription.

### Q: Can I get an example of this sample application for another language/framework/application type?
A: We love that you want to use the API in your language of choice! We’re looking to add alternative Github samples in other languages in the near future. In the meantime, if you have a request for an example, don’t hesitate to reach out to our [Dev Community](https://developercommunity.visualstudio.com/search?space=21) to see if someone else has an example to share. 

If you have a sample application that you’d like to share to the larger Azure Devops audience, please [let us know](mailto:angelwong@github.com) and we can look into circulating it on these docs more widely!

### Q: What is the difference between this token API and the tokenadmin API?
This [token API](https://docs.microsoft.com/rest/api/azure/devops/tokens/pats) and the [tokenadmin API](https://docs.microsoft.com/rest/api/azure/devops/tokenadmin/?view=azure-devops-rest-6.0), while similar, serve different use cases and audiences: 
* This token API is largely for users who want to manage the PATs that they own in an automated pipeline. This API allows. It gives you the ability to create new tokens and update existing ones.
* The tokenadmin API is meant for organization admins who are looking to retrieve and revoke the OAuth authorizations, including personal access tokens (PATs) and self-describing session tokens, of users in their organizations. 

### Q: How can I regenerate/rotate PATs through the API? I saw that option in the UI, but I don’t see a similar method in the API.
Great question! The “Regenerate” functionality available in the UI actually accomplishes a few actions, which are fully replicable through the API. 

To rotate your PAT, you need to:
1. Understand the metadata of the PAT using a GET call, 
2. Create a new PAT with the old PAT’s metadata using a POST call, 
3. Revoke the old PAT using a DELETE call

We may consider updating the API to include a method for rotating PATs in future versions of the API.




## Next steps
> [!div class="nextstepaction"]
> [Learn about the PAT lifecycle management API endpoints](https://docs.microsoft.com/rest/api/azure/devops/tokens/pats)