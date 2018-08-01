---
title: Create a VSTS organization with a Microsoft account or a work account
description: Create your VSTS organization with a personal Microsoft account or a work/school account
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: e2eacd25-e6be-4294-b1da-5529195f30d0
ms.topic: quickstart
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 07/26/2017
monikerRange: 'vsts'
---
# Create your VSTS organization with a personal Microsoft account or a work/school account

**VSTS**

Sign up for a [VSTS](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs) 
organization to upload and share code in free unlimited private 
Git repositories or Team Foundation Version Control. 
Then connect your favorite development tool like Eclipse, Xcode, 
Visual Studio, IntelliJ, or Android Studio to work on apps anytime, anywhere. 
VSTS offers integrated, enterprise Agile tools for DevOps, 
so your team can build often, test early, and ship faster.

> Want to set up an on-premises server? 
> [Get Team Foundation Server here](https://visualstudio.microsoft.com/products/tfs-overview-vs), 
> or learn [how to install and set up Team Foundation Server](/tfs/server/install/get-started). 

[What users can join for free?  What do they get in VSTS?](faq-create-organization.md#free-users)

<a name="how-sign-up"></a>

##	What do I need to sign up for a VSTS organization?

*	To use only Microsoft accounts 
	with your VSTS organization, complete the following steps, ignoring the Azure Active Directory (Azure Active Directory) call outs. 

	Don't have a Microsoft account?  You can create a Microsoft account 
	when you sign up for VSTS.

	Use your Microsoft account if you don't need to authenticate users 
	for an organization with [Azure Active Directory](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis). 
	All users must sign in with Microsoft accounts to your VSTS organization.

*	Alternatively, to authenticate users and control organization access through your 
	Azure Active Directory, complete the following steps, while paying attention to the Azure Active Directory call outs.

	Use your work or school account to **automatically connect** your VSTS organization to your Azure Active Directory. 
	All users must be members in that directory to get access to your VSTS organization, or you must use 
	[Azure Active Directory business-to-business (B2B) collaboration capabilities](https://docs.microsoft.com/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b) to 
	add users from other organizations.

	You'll need a work or school account that's managed by your Azure Active Directory. 
	If you use Azure or Office 365, you might have this already.  If you don't, learn how to 
	[sign up for Azure as an organization](/azure/active-directory/fundamentals/sign-up-organization).

	To use existing on-premises identities with VSTS, learn how to 
	[use Azure Active Directory Connect for integrating on-premises directories with Azure Active Directory](/azure/active-directory/connect/active-directory-aadconnect).


## How does Azure Active Directory control access to VSTS?

VSTS authenticates users through your Azure Active Directory 
so that only users who are members in that directory can get access to your VSTS organization. 
When you remove users from that directory, 
they can't access your organization anymore. Only specific 
[Azure Active Directory administrators](https://docs.microsoft.com/azure/active-directory/users-groups-roles/directory-assign-admin-roles) 
can manage users in your directory, so administrators control who can get access to your VSTS organization.

Without Azure Active Directory, you're solely responsible for controlling 
VSTS organization access. And all users must sign in with Microsoft accounts. 
[What are other differences?](faq-create-organization.md#SignInOrganizationDifferences)


<a name="SignIn"></a>

## Create your organization and sign up for VSTS

1.	Go to [VSTS](https://go.microsoft.com/fwlink/?LinkId=307137).  Enter the email address for your Microsoft account, or for Azure Active Directory use your work or school account.

	**Microsoft account**: If you're a Visual Studio subscriber and get VSTS as a benefit, use the Microsoft account associated with your subscription. 

	**Azure Active Directory**: Your sign-in page might look different, based on the work or school account that you used.

	![Enter your email address](_img/_shared/sign-in.png)

	Got [browser problems?](faq-create-organization.md#browser-problems)

0.	Enter your email address for your Microsoft account. Then enter your password to finish signing in.  If you are not 
using **Azure Active Directory**, and you don't have a Microsoft account, you can create a Microsoft account at this time.

	![Enter password for your Microsoft account](_img/_shared/sign-in-msa2.png)
	
	**Azure Active Directory**: Enter your password for your work or school account.
	
	![Enter your password for your work or school account](_img/_shared/sign-in-aad.png)

	[Why am I asked to choose between my work or school account and my personal account?](faq-create-organization.md#ChooseOrgAcctMSAcct)

0.	Name your VSTS organization. To manage your code, choose Git or Team Foundation Version Control.

	![Name your organization, choose your version control](_img/sign-up-visual-studio-team-services/create-team-services-organization-directory.png)

	Learn which version control ([Git](../../repos/git/overview.md) or [Team Foundation Version Control](../../repos/tfvc/overview.md)) 
	works best for you.

0.	Confirm your organization's location, and if you're using **Azure Active Directory**, confirm the **directory** 
that you're connecting to your VSTS organization. 

	![Rename project, change organization location, or select another process](_img/sign-up-visual-studio-team-services/check-organization-location-standard.png)
	
	**Azure Active Directory**:
	
	![Rename project, change organization location, or select another process](_img/sign-up-visual-studio-team-services/change-organization-directory.png)

	**Microsoft account and Azure Active Directory**: VSTS creates your first project as "MyFirstProject" 
	and uses Agile as your default work item process to organize your work. 
	Choose **Change details** to 
	[rename your project, change the organization location, or select another process, like Scrum](faq-create-organization.md#organization-location).
	
	**Azure Active Directory**: After you create your account, only members of
	the directory shown here can get access to your VSTS organization, or you must use 
	[Azure Active Directory business-to-business (B2B) collaboration capabilities](https://docs.microsoft.com/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b) to 
	add users from other organizations.  If you belong to multiple directories, check that you want
	to connect this directory to your VSTS organization.  Changing the directory now is easier than [changing the
	directory later](faq-create-organization.md#ChangeDirectory).

0.	After VSTS creates your organization and project, add code, work items, or more users.

    ![Add code or work items](_img/_shared/project-created.png)
	Congratulations, you're now a VSTS organization owner! 

	To sign in to your VSTS organization at any time, go to ```https://{yourorganization}.visualstudio.com```.

	> [!NOTE]
	> If you activated your Visual Studio subscription with a Microsoft account, and your subscription includes VSTS
	> as a benefit, learn [how to add your work or school account](../../billing/link-msdn-subscription-to-organizational-account-vs.md) to your
	> subscription so you can use your subscriber benefits in VSTS.

## Try this next

> [!div class="nextstepaction"]
> [Manage users and access](add-organization-users-from-user-hub.md)

*	Add code to Git or Team Foundation version control

	*	Git with [Eclipse](/vsts/java/download-eclipse-plug-in), 
	[Xcode](../../repos/git/share-your-code-in-git-xcode.md), 
	[Android Studio](/vsts/java/download-android-studio-plug-in), 
	[IntelliJ](/vsts/java/download-intellij-plug-in), 
	[Visual Studio](../../repos/git/share-your-code-in-git-vs-2017.md), or 
	[Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol)

	*	TFVC using [Eclipse](/vsts/java/download-eclipse-plug-in), 
	[Xcode](../../repos/tfvc/share-your-code-in-tfvc-xcode.md), 
	[Visual Studio](../../repos/tfvc/use-visual-studio-git.md), or 
	[Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol)

*	[Create your backlog](../../work/backlogs/create-your-backlog.md), 
	[manage your process](../../organizations/settings/work/manage-process.md), 
	or [customize your process](../../organizations/settings/work/customize-process.md)


