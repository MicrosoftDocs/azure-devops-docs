#### Q:	Why don't I see the Azure DevOps Services organizations that I own after I sign in to my Visual Studio profile on visualstudio.com?

A: Your list of organizations are associated with the identity that you use to sign in to Azure DevOps Services. 

If you're asked to choose between your personal Microsoft account or your work or school account when you sign in, you might have selected the wrong identity. 

<img src="_img/sign-in-picker.png" alt="Choose work or school account, or personal Microsoft account" style="border: 1px solid #CCCCCC">

Try to sign out completely from Azure DevOps Services, then sign in again and select your other identity.

Closing your browser doesn't always sign you out completely from Azure DevOps Services. Here's how you can sign out completely:

1. Close all browsers, including browsers that aren't running Azure DevOps Services.

1. Open a private or incognito browsing session. 

1. Go to this URL: `http://aka.ms/vssignout`.

   You see the message "Sign out in progress." After you sign out, you're redirected to the Visual Studio page @visualstudio.microsoft.com. 

   > [!Tip]
   > If the sign-out page takes more than a minute to sign you out, close the browser and continue.

1. Sign in to Azure DevOps Services again. Select your other identity.
