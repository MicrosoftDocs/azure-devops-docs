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


# Sign up for a free VSTS organization and invite others to join your team

**VSTS**
 
Sign up for a VSTS organization to upload and share code in a free unlimited private 
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

0.	Enter a name for your organization. The name you enter cannot contain spaces or special characters (such as / \ [ ] : | < > + = ; ? or &#42;), cannot end in a period or comma, must be less than 256 characters, and must be unique within the VSTS namespace. 

	To manage your code, choose Git or Team Foundation Version Control.

	<img src="../organizations/accounts/_img/sign-up-visual-studio-team-services/create-team-services-organization.png" alt="Name your VSTS organization, choose your version control" style="border: 1px solid #C3C3C3;" />

	Choose Git for distributed source control and TFVC for centralized source control. To learn more, review [Git](../repos/git/overview.md) 
	or [Team Foundation Version Control](../repos/tfvc/overview.md).

0.	(Optional) Click **Change details** to change default assignments. Otherwise, click **Continue** to confirm to initiate your organization creation.

	<img src="../organizations/accounts/_img/sign-up-visual-studio-team-services/check-organization-location-standard.png" alt="Rename team project, change organization location, or select another process" style="border: 2px solid #C3C3C3;" />

	To change default assignments, use this guidance:

	- **Project name**: You can specify your team project name. The name you enter cannot contain spaces or special characters (such as / : \ ~ & % ; @ ' " ? < > | # $ &#42; } { , + = [ ], cannot begin with an underscore or begin or end with a period, and must be 64 characters or less.
   - **Organize work using**: The default work tracking process is set to **Agile**. If you want to work with Scrum or CMMI processes, then select those now.  You can't change the process after the team project is created. (To learn more, see [Choose process](../work/work-items/guidance/choose-process.md). 
   - **Host your projects in**: You can choose between [several locations for where you want your data hosted](https://www.microsoft.com/en-us/trustcenter/privacy/vsts-location).
 
	<img src="_img/sign-up/change-details.png" alt="Choose details for your VSTS organization" style="border: 2px solid #C3C3C3;" />

0.	By default, VSTS creates your first team project as "MyFirstProject". After VSTS creates your organization and team project, 
you can invite others to join your project, add code, start planning and tracking using work items, or rename your team project. 

	<img src="../organizations/accounts/_img/_shared/team-project-created.png" alt="Add code or work items" style="border: 2px solid #C3C3C3;" />

	Congratulations, you're now a VSTS organization owner! 

	To sign in to your organization at any time, go to ```https://{yourorganization}.visualstudio.com```.

<a id="invite-others" />

## Invite others to join your team 

You provide others access to your organization by adding their email address. 

0. Choose the ![](../_img/icons/gear-icon.png) Settings icon, and then choose the **Organization Settings** option
 
	![Open Organization Settings](_img/sign-up/open-organization-settings.png)

0. Choose **Users** to open **Manage users**. Choose **Add new users** to open the dialog. 

	![Open Add new users dialog](_img/sign-up/add-new-users.png)

0. Fill out the form. 
 
	![Web portal, organization admin context, Add new users dialog](_img/invite-users-add-user-dialog.png)  

	- **Users**: Enter the email address (Microsoft account address) for the user organization. You can add several email addresses by separating them with a semicolon (;). Note that the email addresses display in red when they are accepted.  
		> [!NOTE]   
		> You must add email addresses for 
		> ["personal" Microsoft accounts](https://www.microsoft.com/account) 
		> unless you plan to use [Azure Active Directory (Azure AD)](https://azure.microsoft.com/documentation/articles/active-directory-whatis/). 
		> to authenticates users and control organization access.  
		> If your users don't have Microsoft accounts, 
		> have them [sign up](https://signup.live.com/).  
	- **Access level**: Leave the Access level at **Basic** for those users who will contribute to the code base. To learn more, see [About access levels](../organizations/security/access-levels.md). 
	- **Add to projects**: Select the project that you named in the previous procedure. 
	- **VSTS Groups**: Leave this entry at Project Contributors, the default security group for people who will contribute to your project. To learn more, see [Default permissions and access assignments](../organizations/security/permissions-access.md). 

0. When done, choose **Add** to complete your invitation. 

## Next steps  
 
> [!div class="nextstepaction"]
> [Add code to your Git repository](code-with-git.md) 
> or 
> [Plan and track work](plan-track-work.md) 

For more information on managing users and organization access, see [Add organization users for VSTS](../organizations/accounts/add-organization-users-from-user-hub.md).
 
