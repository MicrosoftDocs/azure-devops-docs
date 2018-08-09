#### Q:	Why can't I sign in after I select either "personal Microsoft account" or "work or school account"?

A:	This happens when your sign-in address is shared by your personal Microsoft account and by your work account or school account, but your selected identity doesn't have access. Although both identities have the same sign-in address, they're still separate identities with different profiles, security settings, and permissions.

Try signing out completely from VSTS by completing the following steps. Just closing your browser might not sign you out completely from VSTS. Then, sign in again to VSTS, and select your other identity:

1.	Close all browsers, including browsers that aren't running VSTS.

1.	Open a private or incognito browsing session. 

1.	Go to this URL: http://aka.ms/vssignout

	You'll see a message that says, "Sign out in progress." After you sign out, you're redirected to the Visual Studio @visualstudio.microsoft.com webpage. 

	> [!TIP]
	> If the sign-out page takes more than a minute to sign you out, close the browser and continue.

1.	Sign in to VSTS again. Select your other identity.
