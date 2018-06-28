---
title: Sign up and invite teammates
titleSuffix: VSTS   
description: Quickstart guide to signing up and inviting others to join a team project in Visual Studio Team Services 
ms.technology: devops-new-user 
ms.prod: devops
ms.topic: quickstart
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 07/14/2017
monikerRange: 'vsts'
---


# Sign up for a free VSTS account and invite others to join your team

**VSTS**
 
Sign up for a VSTS 
account to upload and share code in a free unlimited private 
Git repository. You can then connect to your favorite development tool like Eclipse, Xcode, 
Visual Studio, IntelliJ, or Android Studio to work on apps anytime, anywhere. 

<a name="MicrosoftAccount"></a>

## Sign up with a personal Microsoft account

0.	Right-click the sign-up link, [VSTS](https://go.microsoft.com/fwlink/?LinkId=307137&clcid=0x409), and enter 
your email address for your Microsoft account. 

	If you're a Visual Studio subscriber 
	and get VSTS as a benefit, 
	use the Microsoft account associated with your subscription. 

	<img src="../organizations/accounts/_img/_shared/sign-in.png" alt="Enter your email address" style="border: 2px solid #C3C3C3;" />

0.	On the Microsoft account sign-in page, 
enter your email address for your Microsoft account. 
Then enter your password, and finish signing in.

	<img src="../organizations/accounts/_img/_shared/sign-in-msa2.png" alt="Enter password for your Microsoft account" style="border: 2px solid #C3C3C3;" />

	If you don't have a Microsoft account, 
	you can create a Microsoft account at this time. 

0.	Enter a name for your account. The name you enter cannot contain spaces or special characters (such as / \ [ ] : | < > + = ; ? or &#42;), cannot end in a period or comma, must be less than 256 characters, and must be unique within the VSTS namespace. 

	To manage your code, choose Git or Team Foundation Version Control.

	<img src="../organizations/accounts/_img/sign-up-visual-studio-team-services/create-team-services-organization.png" alt="Name your VSTS account, choose your version control" style="border: 1px solid #C3C3C3;" />

	Choose Git for distributed source control and TFVC for centralized source control. To learn more, review [Git](../git/overview.md) 
	or [Team Foundation Version Control](../tfvc/overview.md).

0.	(Optional) Click **Change details** to change default assignments. Otherwise, click **Continue** to confirm to initiate your account creation.

	<img src="../organizations/accounts/_img/sign-up-visual-studio-team-services/check-organization-location-standard.png" alt="Rename team project, change account location, or select another process" style="border: 2px solid #C3C3C3;" />

	To change default assignments, use this guidance:

	- **Project name**: You can specify your team project name. The name you enter cannot contain spaces or special characters (such as / : \ ~ & % ; @ ' " ? < > | # $ &#42; } { , + = [ ], cannot begin with an underscore or begin or end with a period, and must be 64 characters or less.
   - **Organize work using**: The default work tracking process is set to **Agile**. If you want to work with Scrum or CMMI processes, then select those now.  You can't change the process after the team project is created. (To learn more, see [Choose process](../work/work-items/guidance/choose-process.md). 
   - **Host your projects in**: You can choose between [several locations for where you want your data hosted](https://www.microsoft.com/en-us/trustcenter/privacy/vsts-location).
 
	<img src="_img/sign-up/change-details.png" alt="Choose details for your VSTS account" style="border: 2px solid #C3C3C3;" />

0.	By default, VSTS creates your first team project as "MyFirstProject". After VSTS creates your account and team project, 
you can invite others to join your project, add code, start planning and tracking using work items, or rename your team project. 

	<img src="../organizations/accounts/_img/_shared/team-project-created.png" alt="Add code or work items" style="border: 2px solid #C3C3C3;" />

	Congratulations, you're now a VSTS account owner! 

	To sign in to your account at any time, go to ```https://{youraccount}.visualstudio.com```.

<a id="invite-others" />

## Invite others to join your team 

You provide others access to your account by adding their email address. 

0. Turn on **Streamlined User Management** for your account. 

	> [!NOTE] 
	> **Streamlined User Management** is in preview. Turning it on now shows you how to enable preview features, and also provides you access to the enhanced user interface for managing users. 

	a. From your user account menu (you'll see a letter or an image of your profile), click the **Preview features** option.   
	<!--- <img src="_img/invite-users-open-preview-features.png" alt="Click on your user account menu, choose Preview Features" style="border: 2px solid #C3C3C3;" /> -->
	<img src="../_shared/_img/preview-features-open.png" alt="Open Preview Features" style="border: 2px solid #C3C3C3;" /> 

	b. In the first drop-down menu, choose the option for all accounts. 

	<img src="../project/navigation/_img/preview-features-admin-s117.png" alt="Preview features options for the account" style="border: 1px solid #CCCCCC;" /> 

	>[!TIP]  
	>If you don't see the user/account menu option, then you aren't an account administrator. 

	c. Enable the **Streamlined User Management** option. 

	<img src="_img/sign-up-invite-users-streamline-user-mngment.png" alt="Enable streamline user management" style="border: 1px solid #CCCCCC;" /> 

	Click the close icon (![close-icon](../_img/icons/close-icon.png) to close the preview features dialog window. 

0. Click ![gear icon](../_img/icons/gear-icon.png), the gear Settings icon, and choose the **Account Settings** option
 
	![Open Account Settings](_img/sign-up/open-account-settings.png)

0. Then, click **Users** to open the Manage users page. Click **Add new users** to open the dialog. 

	![Open Add new users dialog](_img/sign-up/add-new-users.png)

0. Fill out the form. 
 
	<img src="_img/invite-users-add-user-dialog.png" alt="Web portal, account admin context, Add new users dialog" style="border: 2px solid #C3C3C3;" />   

	- **Users**: Enter the email address (Microsoft account address) for the user account. You can add several email addresses by separating them with a semicolon (;). Note that the email addresses display in red when they are accepted.  
		> [!NOTE]   
		> You must add email addresses for 
		> ["personal" Microsoft accounts](https://www.microsoft.com/account) 
		> unless you plan to use [Azure Active Directory (Azure AD)](https://azure.microsoft.com/documentation/articles/active-directory-whatis/). 
		> to authenticates users and control account access.  
		> If your users don't have Microsoft accounts, 
		> have them [sign up](https://signup.live.com/).  
	- **Access level**: Leave the Access level at **Basic** for those users who will contribute to the code base. To learn more, see [About access levels](../organizations/security/access-levels.md). 
	- **Add to projects**: Select the project that you named in the previous procedure. 
	- **VSTS Groups**: Leave this entry at Project Contributors, the default security group for people who will contribute to your project. To learn more, see [Default permissions and access assignments](../organizations/security/permissions-access.md). 

0. When done, click **Add** to complete your invitation. 

## Next steps  
 
> [!div class="nextstepaction"]
> [Add code to your Git repository](code-with-git.md) 
> or 
> [Plan and track work](plan-track-work.md) 

For more information on managing users and account access, see [Add account users for VSTS](../organizations/accounts/add-account-users-from-user-hub.md).
 
