---
title: Sign up and invite teammates | VSTS  
description: Quickstart guide to signing up and inviting others to join a team project in VSTS 
ms.technology: vs-devops-overview 
ms.prod: vs-devops-alm
ms.topic: get-started-article
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 07/14/2017
---

# Sign up for a free VSTS account and invite others to join your team  
**VSTS**
 
Sign up for a [VSTS](https://www.visualstudio.com/products/visual-studio-team-services-vs) 
account to upload and share code in a free unlimited private 
Git repository. You can then connect to your favorite development tool like Eclipse, Xcode, 
Visual Studio, IntelliJ, or Android Studio to work on apps anytime, anywhere. 


<a name="MicrosoftAccount"></a>
##	Sign up with a personal Microsoft account

0.	Go to [VSTS](https://go.microsoft.com/fwlink/?LinkId=307137&clcid=0x409). 
Enter your email address for your Microsoft account. 

	If you're a Visual Studio subscriber 
	and get VSTS as a benefit, 
	use the Microsoft account associated with your subscription. 

	<img src="../accounts/_img/_shared/sign-in.png" alt="Enter your email address" style="border: 2px solid #C3C3C3;" />

0.	On the Microsoft account sign-in page, 
enter your email address for your Microsoft account. 
Then enter your password, and finish signing in.

	<img src="../accounts/_img/_shared/sign-in-msa2.png" alt="Enter password for your Microsoft account" style="border: 2px solid #C3C3C3;" />

	If you don't have a Microsoft account, 
	you can create a Microsoft account at this time. 

0.	Name your  account. 
To manage your code, choose Git or Team Foundation Version Control.

	<img src="../accounts/_img/sign-up-visual-studio-team-services/create-team-services-account.png" alt="Name your VSTS account, choose your version control" style="border: 2px solid #C3C3C3;" />

	Learn which version control ([Git](../git/overview.md) 
	or [Team Foundation Version Control](../tfvc/overview.md)) 
	works best for you.

0.	Confirm your account's location. 

	<img src="../accounts/_img/sign-up-visual-studio-team-services/check-account-location-standard.png" alt="Rename team project, change account location, or select another process" style="border: 2px solid #C3C3C3;" />
	
	VSTS will create your first team project as "MyFirstProject" 
	and will use Agile as your default work item process to organize your work. 
	Choose **Change details** to 
	rename your team project, change the account location, or select another process, like Scrum.

0.	After VSTS creates your account and team project, 
you can invite others to join your project, add code, or start planning and tracking using work items.

	<img src="../accounts/_img/_shared/team-project-created.png" alt="Add code or work items" style="border: 2px solid #C3C3C3;" />

	Congratulations, you're now a VSTS account owner! 

	To sign in to your account at any time, go to ```https://{youraccount}.visualstudio.com```.

<a id="invite-others" />
## Invite others to join your team 

You provide others access to your account by adding their email address. 

0. Turn on **Streamlined User Management** for your account. 
 
	a. From your user account menu, click the **Preview features** option.   
	<!--- <img src="_img/invite-users-open-preview-features.png" alt="Click on your user account menu, choose Preview Features" style="border: 2px solid #C3C3C3;" /> -->
	<img src="../_shared/_img/preview-features-open.png" alt="Open Preview Features" style="border: 2px solid #C3C3C3;" /> 

	b. In the first drop-down menu, choose the option for all accounts. 

	<img src="../collaborate/_img/preview-features-admin-s117.png" alt="Preview features options for the account" style="border: 1px solid #CCCCCC;" /> 

	>[!TIP]  
	>If you don't see the user/account menu option, then you aren't an account administrator. 

	c. Enable the **Streamlined User Management** option. 

	<img src="_img/sign-up-invite-users-streamline-user-mngment.png" alt="Enable streamline user management" style="border: 1px solid #CCCCCC;" /> 

0. Click the ![gear icon](../_img/icons/gear-icon.png) gear Settings icon, choose the Account Settings option, and then click Users to open the Manage users page. 

	<img src="_img/invite-users-manage-admin-page.png" alt="Web portal, account admin context, Open the manage users page" style="border: 2px solid #C3C3C3;" />  

0. Fill out the form. You can add several email addresses by separating them with a comma. Leave the Access level at Basic for those users who will contribute to the code base. To learn more, see [About access levels](../security/access-levels.md). 
 
	<img src="_img/invite-users-add-user-dialog.png" alt="Web portal, account admin context, Add new users dialog" style="border: 2px solid #C3C3C3;" />   

	> [!NOTE]   
	> You must add email addresses for 
	> ["personal" Microsoft accounts](https://www.microsoft.com/account) 
	> unless you plan to use [Azure Active Directory (Azure AD)](https://azure.microsoft.com/documentation/articles/active-directory-whatis/). 
	> to authenticates users and control account access.  
	> If your users don't have Microsoft accounts, 
	> have them [sign up](https://signup.live.com/).

## Next steps  
 
> [!div class="nextstepaction"]
> [Add code to your Git repository](code-with-git.md) 
> or 
> [Plan and track work](plan-track-work.md) 

For more information on managing users and account access, see [Add account users for VSTS](../accounts/add-account-users-from-user-hub.md).
 