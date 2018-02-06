---
title: Connect Power BI  | VSTS
description: Get started using Power BI to analyze data collected for team projects hosted on Visual Studio Team Services (VSTS) 
ms.technology: vs-devops-reporting
ms.prod: vs-devops-alm
ms.assetid: 2915605A-E3F1-4FE0-ACA5-7A4D734DB679
ms.reviewer: stansw
ms.manager: douge
ms.author: kaelli
ms.date: 11/13/2017
---

# Connect to VSTS with Power BI Content Pack

**VSTS**

You can gain insight and analyze the progress and quality of your project by connecting Power BI to the data collected and stored for VSTS. 

[!INCLUDE [temp](../_shared/content-pack-deprecation.md)]

## Authorize Power BI to access your account data
Your first step requires you to authorize Power BI to access your VSTS account. Choose between one of these two connection scenarios when connecting to Power BI:

- **Scenario #1:**  You use the same Azure Active Directory (AAD) account to log in to VSTS and Power BI.

- **Scenario #2:**  You use an MSA (Microsoft account/LiveID) to log in to VSTS or you use different AAD credentials to log into VSTS than you use to log into Power BI.


## Scenario #1: Log in using AAD

1. Open a web browser and go to [http://powerbi.com](http://powerbi.microsoft.com/).

2. Click **Sign In** in the upper right corner to log in to Power BI.

3. In the lower left corner, click **Get Data**.

	>[!NOTE]  
	>If you don't have a Power BI account you can create one by entering your email address and click **Use it free**. 

4. Click **Get** under **Services** on the Get Data page.

	![get-data-final.png](_img/get-data-final.png)

5. Select the VSTS connector and click **Connect**.

	![VSTS connector](_img/connect-to-vs-team-services-choose.png)

6. Enter the names of the account and team whose data you want to connect to and click **Next**.

	> [!IMPORTANT]  
	> For the **Account**, do not include  **visualstudio.com** (if the account is "corpx.visualstudio.com" just enter "corpx").  
	
	![Enter the account and project(s)](_img/connect-to-vs-team-services.png)  

	> [!NOTE]  
	> Wildcards are supported for the **Project** name. You can enter "&#42;" for every project in the account or, if you had projects with these names <i>"Test1", "Test2", "Test3", "App1", "App2"</i> and enter "Test&#42;" Power BI will retrieve data for the projects Test1, Test2 and Test3. However, you cannot enter something like "T&#42;st". 

7. The next step specifies the authentication method. Only oAuth2 is supported. Click **Sign In** to continue.

	![Login to VS VSTS with oAuth2](_img/connect-to-vs-team-services-auth.png)  

	> [!IMPORTANT]  
	> You won't be able to connect if your account administrator disabled third party application access via OAuth. When enabled, it appears as follows on the **Administration&gt;Control panel&gt;Settings page**:  
	>
	> ![Third-party oAuth enabled](_img/Screen5.png)  <br/><br/>

	> Contact your account administrator to determine if it needs to be enabled.  

8. Successful authorization displays the following authorization dialog which allows Power BI to retrieve data from your account. Scroll down to the bottom and click **Accept**.

	![VS VSTS Authorization page](_img/Screen6.png)  

9. Once Power BI is authorized, data will begin to load and you'll be presented with a loading screen until the data is complete. Depending on how much data there is, it may take a few minutes to as long as 30 minutes to complete the data load.

	At this point you can close your browser and come back to Power BI later. Power BI data refreshes every 24 hours by default. If you have a paid Power BI account, you can refresh the data as frequently as every hour.

## Scenario #2: Log in when you use different credentials for VSTS and Power BI  

If you are using a Microsoft Account or different AAD credentials than you use for Power BI, you will need to supply those credentials to VSTS to get access to the data. This can happen in one of two ways. Either, the connect experience will prompt you for the credentials or, if you access VSTS often, your browser may have your most recent credentials cached. If the cached credentials match the account you are connecting to, it will work seamlessly, however, this caching can be confusing if the last account/username you used isn't the one you need to enable Power BI to access the VSTS data. This can lead to Access Denied errors. If you are getting access denied errors without any prompt for credentials, then you should use In Private in IE or Incognito in Chrome to bypass the cache.

If your cached credentials work, you won't get prompted. If you don't have cached credentials, then you will be prompted to login to VSTS. If you are using a Microsoft account enter your credentials on the right hand side of the dialog. If you are using AAD credentials, click the **Sign in with your work or school account** link on the left hand side of the dialog.

![VSTS Login page](_img/Screen7.png)

>[!IMPORTANT]  
>There is a situation that can occur where Power BI will still try to use your cached credentials even though they are different than the credentials you used when logging onto Power BI. In this case, the VSTS Authorize dialog will still be displayed however, you'll be logged on as the wrong user. To correct this situation, do the following: <br/>  
> - Click **Sign out** in the Authorize application page  
> - Close the page and click **Sign In** again on the Power BI Configure VSTS dialog  
> - You will then be prompted to enter your VSTS credentials and everything will work as normal.  


## Related notes

To get started using Power BI and the Analytics service, make sure you have [permissions required to access the Analytics service](../analytics/analytics-security.md) and then review the [knowledge base of articles](https://support.powerbi.com/).

To understand the default reports available, see [Create reports with data from using Power BI for VSTS](report-on-vso-with-power-bi-vs.md).


