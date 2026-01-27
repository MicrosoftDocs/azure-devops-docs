### Why can't I sign in after I select "personal Microsoft account" or "work or school account"?

If your sign-in address is shared by both your personal Microsoft account and your work or school account, but the selected identity doesn't have access, you can't sign in. Although both identities use the same sign-in address, they're separate and have different profiles, security settings, and permissions.

To resolve this issue, sign out completely from Azure DevOps and sign in again with your other identity. Closing your browser might not sign you out completely, so complete the following steps:

1. Close all browsers, including browsers that aren't running Azure DevOps.

2. Open a private or incognito browsing session.

3. Go to `https://aka.ms/vssignout`.

   The message "Sign out in progress" appears. After sign out completes, the browser redirects you to the Azure DevOps webpage.

   > [!TIP]
   > If the sign-out page takes longer than a minute, close the browser and try again.

4. Sign in to Azure DevOps and select your other identity.
