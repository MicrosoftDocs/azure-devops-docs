---
title: Connect to your Git repos with SSH
titleSuffix: Azure Repos
description: Authenticate to Azure Repos Git Repositories with SSH Keys
ms.assetid: 2f89b7e9-3d10-4293-a277-30e26cae54c5
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 09/26/2018
monikerRange: '>= tfs-2015'
---

# Use SSH key authentication
#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 Update 3

Connect to your Git repos through SSH on macOS or Linux, or on Windows when you can't (or don't want to) use the recommended [Git Credential Managers](set-up-credential-managers.md) or
[Personal Access Tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to securely connect using HTTPS authentication.

>[!IMPORTANT]
> SSH URLs have changed, but old SSH URLs will continue to work. If you have already set up SSH, you should update your remote URLs to the new format:
> - Verify which remotes are using SSH by running ```git remote -v ``` in your Git client. 
> - Visit your repository on the web and select the **Clone** button in the upper right.
> - Select **SSH** and copy the new SSH URL.
> - In your Git client, run: ```git remote set-url <remote name, e.g. origin> <new SSH URL>```. Alternatively, in Visual Studio, go to [Repository Settings](git-config.md#remotes), and edit your remotes.

>[!NOTE]
> As of Visual Studio 2017, SSH can be used to connect to Git repos.

## How SSH key authentication works
SSH public key authentication works with a pair of generated encryption keys. The _public_ key is shared and used to encrypt
messages. The _private_ key is kept safe and secure on your system and is used to read messages encrypted with the public key. 

## Set up SSH key authentication

The following steps cover configuration of SSH key authentication on the following platforms:

---
- Linux
- macOS running at least Leopard (10.5)
- Windows systems running  [Git for Windows](http://www.git-scm.com/download/win)   

---

Configure SSH using the command line. `bash` is the common shell on Linux and macOS and the Git for Windows installation adds a shortcut to Git Bash in the Start menu.
Other shell environments will work, but are not covered in this article.

### Step 1: Create your SSH keys

>[!NOTE]
> If you have already created SSH keys on your system, skip this step and go to [configuring SSH keys](use-ssh-keys-to-authenticate.md#configuration).   

The commands here will let you create new default SSH keys, overwriting existing default keys. Before continuing, check your 
`~/.ssh` folder (for example, /home/jamal/.ssh or C:\Users\jamal\\.ssh) and look for the following files:

- _id_rsa_
- _id_rsa.pub_

If these files exist, then you have already created SSH keys. You can overwrite the keys with the following commands, or skip this step and go to [configuring SSH keys](use-ssh-keys-to-authenticate.md#configuration) to reuse these keys.

Create your SSH keys with the `ssh-keygen` command from the `bash` prompt. This will create a 2048-bit RSA key for use with SSH. You can give a passphrase
for your private key when prompted&mdash;this provides another layer of security for your private key. 
If you give a passphrase be sure to [configure the SSH agent](use-ssh-keys-to-authenticate.md#rememberpassphrase) to cache your passphrase so you don't have to enter it every time you connect.

```
$ ssh-keygen -C "jamal@fabrikam.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/jamal/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/jamal/.ssh/id_rsa.
Your public key has been saved in /c/Users/jamal/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:******************************************* jamal@fabrikam.com
The key's randomart image is:
+---[RSA 2048]----+
|+.   +yX*o .     |
|... ..E+*=o      |
|  ..o.=E=.o      |
|   . * =.o .     |
|    . S o o..    |
|       + .oo     |
|        S+.  .   |
|        ..+.+    |
|          o*..   |
+----[SHA256]-----+
```

This produces the two keys needed for SSH authentication: your private key ( _id_rsa_ ) and the public key ( _id_rsa.pub_ ). It is important to never share the contents of your private key. If the private key is
compromised, attackers can use it to trick servers into thinking the connection is coming from you.

<a name="configuration"></a>

### Step 2:  Add the public key to Azure DevOps Services/TFS

Associate the public key generated in the previous step with your user ID.

0.  Open your security settings by browsing to the web portal and selecting your avatar in the upper right of the
user interface. Select **Security** in the menu that appears.

    ![Accessing User Profile in Azure DevOps Services](_img/use-ssh-authentication/ssh_profile_access.png)

0. Select **SSH Public Keys** , then select **Add**.

    ![Accessing Security Configuration in Azure DevOps Services](_img/use-ssh-authentication/ssh_accessing_security_key.png)

0. Copy the contents of the public key (for example, id_rsa.pub) that you generated into the **Key Data** field. 

  >[!IMPORTANT]
  >Avoid adding whitespace or new lines into the **Key Data** field, as they can cause Azure DevOps Services to use an invalid public key. When pasting in the key, a newline often is added at the end. Be sure to remove this newline if it occurs.

    ![Configuring Public Key in Azure DevOps Services](_img/use-ssh-authentication/ssh_key_input.png)

0. Give the key a useful description (this will be displayed on the **SSH public keys** page for your profile) so that you can remember it later. Select **Save** to store the public key. Once saved, you cannot change the key. You can delete the key or create a new entry for another key. There are no restrictions on how many keys you can add to your user profile.
  
<a name="copy-url"></a>

### Step 3: Clone the Git repository with SSH

>[!NOTE]
> To connect with SSH from an existing cloned repo, see [updating your remotes to SSH](use-ssh-keys-to-authenticate.md#migrate).

0. Copy the SSH clone URL from the web portal. In this example the SSL clone URL is for a repo in an organization named **fabrikam-fiber**, as indicated by the first part of the URL after `dev.azure.com`.

   ![Azure Repos SSH Clone URL](_img/use-ssh-authentication/ssh_clone_URL.png)

   [!INCLUDE [project-urls](../../_shared/project-urls.md)]
 
0. Run `git clone` from the command prompt. 

   ```
   git clone git@ssh.dev.azure.com:v3/fabrikam-fiber/FabrikamFiber/FabrikamFiber
   ```

SSH may display the server's SSH fingerprint and ask you to verify it.

For cloud-hosted Azure DevOps Services, where clone URLs contain either `ssh.dev.azure.com` or `vs-ssh.visualstudio.com`, the fingerprint should match one of the following:
* MD5: `97:70:33:82:fd:29:3a:73:39:af:6a:07:ad:f8:80:49` (RSA)
* SHA256: `SHA256:ohD8VZEXGWo6Ez8GSEJQ9WpafgLFsOfLOtGGQCQo6Og` (RSA)
These fingerprints are also listed in the **SSH public keys** page.

For self-hosted instances of Azure DevOps Server, you should verify that the displayed fingerprint matches one of the fingerprints in the **SSH public keys** page.

SSH displays this fingerprint when it connects to an unknown host to protect you from [man-in-the-middle attacks](https://technet.microsoft.com/library/cc959354.aspx).
Once you accept the host's fingerprint, SSH will not prompt you again unless the fingerprint changes. 

```
$ git clone git@ssh.dev.azure.com:v3/fabrikam-fiber/FabrikamFiber/FabrikamFiber
Cloning into 'FabrikamFiber'...
The authenticity of host 'ssh.dev.azure.com (65.52.8.37)' can't be established.
RSA key fingerprint is SHA256:********************************************
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'ssh.dev.azure.com,65.52.8.37' (RSA) to the list of known hosts.
Enter passphrase for key '/c/Users/jamal/.ssh/id_rsa':
remote:
remote:                    vSTs
remote:                  vSTSVSTSv
remote:                vSTSVSTSVST
remote: VSTS         vSTSVSTSVSTSV
remote: VSTSVS     vSTSVSTSV STSVS
remote: VSTSVSTSvsTSVSTSVS   TSVST
remote: VS  tSVSTSVSTSv      STSVS
remote: VS   tSVSTSVST       SVSTS
remote: VS tSVSTSVSTSVSts    VSTSV
remote: VSTSVST    SVSTSVSTs VSTSV
remote: VSTSv        STSVSTSVSTSVS
remote:                VSTSVSTSVST
remote:                  VSTSVSTs
remote:                    VSTs    (TM)
remote:
remote:  Microsoft (R) Visual Studio (R) Team Services
remote:
remote: Found 127 objects to send. (50 ms)
Receiving objects: 100% (127/127), 56.67 KiB | 2.58 MiB/s, done.
Resolving deltas: 100% (15/15), done.
```

When you are asked if you want to continue connecting, type `yes`. Git will clone the repo and set up the `origin` remote to connect with SSH for future Git commands. 

>[!TIP]
> Avoid trouble: Windows users will need to [run a command](use-ssh-keys-to-authenticate.md#rememberpassphrase) to have Git reuse their SSH key passphrase.

## Questions and Troubleshooting

<a name="rememberpassphrase"></a>

### How can I have Git remember the passphrase for my key on Windows?
Run the following command included in Git for Windows to start up the `ssh-agent` process in Powershell or the Windows Command Prompt. `ssh-agent` will cache
your passphrase so you don't have to provide it every time you connect to your repo.

```
start-ssh-agent.cmd
```

If you are using the Bash shell (including Git Bash), start ssh-agent with:

```
eval `ssh-agent`
```

### I use [PuTTY](http://www.putty.org/) as my SSH client and generated my keys with PuTTYgen. Can I use these keys with Azure DevOps Services?

Yes. Load the private key with PuTTYgen, go to **Conversions** menu and select **Export OpenSSH key**. 
Save the private key file and then follow the steps to [set up non-default keys](use-ssh-keys-to-authenticate.md#newkeys).
Copy you public key directly from the PuTTYgen window and paste into the **Key Data** field in your security settings.

### How can I verify that the public key I uploaded is the same key as I have locally?

  You can verify the fingerprint of the public key uploaded with the one displayed in your profile through the following `ssh-keygen` command run against your public key using
  the `bash` command line. You will need to change the path and the public key filename if you are not using the defaults.
  
```
ssh-keygen -l -E md5 -f ~/.ssh/id_rsa.pub
```

You can then compare the MD5 signature to the one in your  profile. This is useful if you have connection problems or have concerns about incorrectly
pasting in the public key into the **Key Data** field when adding the key to Azure DevOps Services.

<a name="migrate"></a>
 
### How can I start using SSH in a repository where I am currently using HTTPS?
 
You'll need to update the `origin` remote in Git to change over from a HTTPS to SSH URL. Once you have the [SSH clone URL](#step-3-clone-the-git-repository-with-ssh), run the following command:

```
git remote set-url origin git@ssh.dev.azure.com:v3/fabrikam-fiber/FabrikamFiber/FabrikamFiber
```

You can now run any Git command that connects to `origin`.

<a name="newkeys"></a>

### I'm using Git LFS with Azure DevOps Services and I get errors when pulling files tracked by Git LFS.

Azure DevOps Services currently doesn't support LFS over SSH. Use HTTPS to connect to repos with Git LFS tracked files.
 
### How can I use a non default key location, i.e. not ~/.ssh/id_rsa and ~/.ssh/id_rsa.pub?

To use keys created with `ssh-keygen` in a different place than the default, you do two things:

0. The keys must be in a folder that only you can read or edit. If the folder has wider permissions, SSH will not use the keys.
0. You must let SSH know the location of the keys. You make SSH aware of keys through the `ssh-add` command, providing the full path to the private key. 

```
ssh-add /home/jamal/.ssh/id_jamal.rsa
```

On Windows, before running `ssh-add`, you will need to run the following command from included in Git for Windows:

```
start-ssh-agent.cmd
```

This command runs in both Powershell and the Command Prompt. If you are using Git Bash, the command you need to use is:

```
eval `ssh-agent`
```

You can find `ssh-add` as part of the Git for Windows distribution and also run it in any shell environment on Windows. 

On macOS and Linux you also must have `ssh-agent` running before running `ssh-add`, but the command environment on these platforms usually 
takes care of starting `ssh-agent` for you.

### What notifications may I receive regarding my SSH keys?

Whenever you register a new SSH Key with Azure DevOps Services, you will receive an email notification informing you that a new SSH key has been added to your account.

![SSH notification example](_img/use-ssh-authentication/ssh_notification.png)

### Q: What do I do if I believe that someone other than me is adding SSH keys on my account?

**A:** If you receive a notification of an SSH key being registered and you did not manually upload it to the service, your credentials may have been compromised. 

The next step would be to investigate whether or not your password has been compromised; changing your password is always a good first step to defend against this attack vector. If you’re an Azure Active Directory user, talk with your administrator to check if your account was used from an unknown source/location.  
