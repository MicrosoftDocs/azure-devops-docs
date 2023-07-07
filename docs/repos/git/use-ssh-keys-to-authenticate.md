---
title: Use SSH key authentication
titleSuffix: Azure Repos
description: Learn how to authenticate to Azure Repos Git repositories with SSH keys.
ms.assetid: 2f89b7e9-3d10-4293-a277-30e26cae54c5
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 06/21/2023
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Use SSH key authentication

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can connect to your Git repos through SSH on macOS, Linux, or Windows to securely connect with HTTPS authentication.

> [!IMPORTANT]
> SSH URLs have changed, but old SSH URLs continue to work. If you've already set up SSH, update your remote URLs to the new format:
>
> Up to date SSH URLs start with `ssh.dev.azure.com`. The previous URLs use `vs-ssh.visualstudio.com`.
>
> - Verify which remotes are using SSH. Run `git remote -v` in your shell or use a GUI client instead.
> - Visit your repository on the web and select **Clone**.
> - Select **SSH** and copy the new SSH URL.
> - In your shell run `git remote set-url <remote name> <new SSH URL>` for each remote of a repository you wish to update. Alternatively, use a GUI client to update the remote URLs.

## How SSH key authentication works

SSH public key authentication works with an asymmetric pair of generated encryption keys. The _public_ key is shared with Azure DevOps and used to verify the initial ssh connection. The _private_ key is kept safe and secure on your system.

## Set up SSH key authentication

The following steps cover configuration of SSH key authentication on the following platforms using the command line (also called `shell`):

- Linux
- macOS
- Windows systems running [Git for Windows](https://www.git-scm.com/download/win)

>[!NOTE]
> As of Visual Studio 2017, SSH can be used to connect to Azure DevOps Git repositories.

> [!TIP]
> On Windows, we recommended the use of [Git Credential Manager](set-up-credential-managers.md) or [Personal Access Tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

### Step 1: Create your SSH keys

>[!NOTE]
> If you've already created RSA SSH keys on your system, skip this step and [configure your SSH keys](use-ssh-keys-to-authenticate.md#configuration).
> To verify this go to your home directory and look into the `.ssh` folder (`%UserProfile%\.ssh\` on Windows or `~/.ssh/` on Linux, macOS, and Windows with Git Bash). If you see two files named `id_rsa` and `id_rsa.pub` respectively continue with [configuring your SSH keys](use-ssh-keys-to-authenticate.md#configuration).

To use key-based authentication, you first need to generate public/private key pairs for your client. **ssh-keygen.exe** is used to generate key files and the algorithms DSA, RSA, ECDSA, or Ed25519 can be specified. If no algorithm is specified, RSA is used.

>[!NOTE]
> The only SSH key type supported by Azure DevOps is _RSA_.

To generate key files using the RSA algorithm, run the following command from a PowerShell or another shell such as `bash` on your client:

```powershell
ssh-keygen
```

The output from the command should display the following output (where `username` is replaced by your username):

```Output
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\username/.ssh/id_rsa):
```

You can press Enter to accept the default, or specify a path and/or filename where you would like your keys to be generated.
At this point, you'll be prompted to use a passphrase to encrypt your private key files. The passphrase can be empty but it's not recommended.
The passphrase works with the key file to provide two-factor authentication.

```Output
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in C:\Users\username/.ssh/id_rsa.
Your public key has been saved in C:\Users\username/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:FHK6WjcUkcfQjdorarzlak1Ob/x7AmqQmmx5ryYYV+8 username@LOCAL-HOSTNAME
The key's randomart image is:
+---[RSA 3072]----+
|      . ** o     |
|       +.o= .    |
|      . o+       |
|      .+. .      |
|     .ooS  .     |
|  . .oo.=.o      |
|   =.= O.= .     |
|  . B BoE + . .  |
|   . *+*o. .o+   |
+----[SHA256]-----+
```

Now you have a public/private rsa key pair in the location specified. The .pub files are public keys, and files without an extension are private keys:

```Output
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        10/11/2022   6:29 PM           2610 id_rsa
-a----        10/11/2022   6:29 PM            578 id_rsa.pub
```

> [!IMPORTANT]
> Never share the contents of your private key. If the private key is compromised, attackers can use it to trick servers into thinking the connection is coming from you. Private key files are the equivalent of a password and should be protected the same way.

<a name="configuration"></a>

::: moniker range=">= azure-devops-2019"

### Step 2: Add the public key to Azure DevOps

Associate the public key generated in the previous step with your user ID.

>[!NOTE]
> You have to repeat this operation for each organisation you have access to and want to use SSH with.

1. Open your security settings by browsing to the web portal and selecting the icon next to the avatar in the upper right of the
   user interface. Select **SSH public keys** in the menu that appears.

   ![Screenshot that shows the SSH public keys menu item and the user avatar selected in Azure DevOps.](media/use-ssh-authentication/select-ssh-public-keys.png)

2. Select **+ New Key**.

   ![Screenshot showing access to Security Configuration in Azure DevOps.](media/use-ssh-authentication/ssh_accessing_security_key.png)

3. Copy the contents of the public key (for example, `id_rsa.pub`) that you generated into the **Public Key Data** field.

   > [!IMPORTANT]
   > Avoid adding whitespace or new lines into the **Key Data** field, as they can cause Azure DevOps to use an invalid public key. When pasting in the key, a newline often is added at the end. Be sure to remove this newline if it occurs.

   ![Screenshot showing configuring a Public Key in Azure DevOps.](media/use-ssh-authentication/ssh_key_input.png)

4. Give the key a useful description (this description is displayed on the **SSH public keys** page for your profile) so that you can remember it later. Select **Save** to store the public key.
   Once saved, you can't change the key. You can delete the key or create a new entry for another key. There are no restrictions on how many keys you can add to your user profile. Also note that SSH keys stored in Azure DevOps expire after one year. If your key expires, you may upload a new key or the same one to continue accessing Azure DevOps via SSH.

5. On the overview page a note is displayed at the top containing the server fingerprints. Make note of them because they will be required when you first connect to Azure DevOps via SSH.

   ![Screenshot of accessing security configuration in Azure DevOps Services.](media/use-ssh-authentication/ssh_accessing_security_key.png)

6. Test the connection by running the following command:

   ```powershell
   ssh -T git@ssh.dev.azure.com
   ```

   If this was the first time connecting you should receive the following output:

   ```Output
   The authenticity of host 'ssh.dev.azure.com (<IP>)' can't be established.
   RSA key fingerprint is SHA256:ohD8VZEXGWo6Ez8GSEJQ9WpafgLFsOfLOtGGQCQo6Og.
   This key is not known by any other names
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

   Compare the given fingerprint with the fingerprints offered on the aforementioned settings page. Proceed only if they match!

   If everything is configured correctly the output should look like this:

   ```Output
   remote: Shell access is not supported.
   ```

   If not, see the section on [Questions and troubleshooting](#questions-and-troubleshooting).

<a name="copy-url"></a>

::: moniker-end

::: moniker range="< azure-devops-2019"

### Step 2: Add the public key to Azure DevOps

Associate the public key generated in the previous step with your user ID.

>[!NOTE]
> You have to repeat this operation for each organisation you have access to and want to use SSH for.

1. Open your security settings by browsing to the web portal and selecting your avatar in the upper right of the
   user interface. Select **Security** in the menu that appears.

   ![Screenshot showing User Profile access in Azure DevOps.](media/use-ssh-authentication/ssh_profile_access.png)

2. Select **+ New Key**.

   ![Screenshot showing Security Configuration in Azure DevOps.](media/use-ssh-authentication/ssh_accessing_security_key.png)

3. Copy the contents of the public key (for example, `id_rsa.pub`) that you generated into the **Public Key Data** field.

   >[!NOTE]
   > You can use the command `$ cat ~/.ssh/id_rsa.pub` to print the contents of the id_rsa.pub file in the terminal, then copy this to your clipboard.
   > If your SSH public key file has a different name than the example code, modify the filename to match your current setup. When you copy your key, don't add any new lines or whitespace.
   > Alternatively, you can locate the hidden .ssh folder, open the file in your favorite text editor, and copy it to your clipboard.

    ![Screenshot showing configuration of a Public Key in Azure DevOps.](media/use-ssh-authentication/ssh_key_input.png)

   >[!IMPORTANT]
   > Don't add whitespace or new lines into the **Key Data** field, as they can cause Azure DevOps to use an invalid public key. When you paste in the key, a new line often gets added at the end. Be sure to remove this new line if it occurs.

4. Give the key a useful description (this description is displayed on the **SSH public keys** page for your profile) so that you can remember it later. Select **Save** to store the public key. Once saved, you can't change the key. You can delete the key or create a new entry for another key. There are no restrictions on how many keys you can add to your user profile.

5. On the overview page a note is displayed at the top containing the server fingerprints. Make note of them because they will be required when you first connect to Azure DevOps with SSH.

   ![Screenshot showing where to locate server fingerprints in Azure DevOps Services.](media/use-ssh-authentication/ssh_accessing_security_key.png)

6. Test the connection by running the following command:

   ```powershell
   ssh -T git@ssh.dev.azure.com
   ```

   If this was the first time connecting you should receive the following output:

   ```Output
   The authenticity of host 'ssh.dev.azure.com (<IP>)' can't be established.
   RSA key fingerprint is SHA256:ohD8VZEXGWo6Ez8GSEJQ9WpafgLFsOfLOtGGQCQo6Og.
   This key is not known by any other names
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

   Compare the given fingerprint with the fingerprints offered on the aforementioned settings page. Proceed only if they match!

   If everything is configured correctly the output should look like this:

   ```Output
   remote: Shell access is not supported.
   ```

   If not, see the section on [Questions and troubleshooting](use-ssh-keys-to-authenticate.md#questions-and-troubleshooting).

<a name="copy-url"></a>

::: moniker-end

### Step 3: Clone the Git repository with SSH

>[!NOTE]
> To use SSH with a repository previously cloned via HTTPS, see [update your remotes to SSH](use-ssh-keys-to-authenticate.md#migrate).

1. Copy the SSH clone URL from the web portal. In this example, the SSH clone URL is for a repo in an organization named **fabrikam-fiber**, as indicated by the first part of the URL after `dev.azure.com`.

   ![Screenshot showing Azure Repos SSH cloned URL](media/use-ssh-authentication/ssh_clone_URL.png)

   [!INCLUDE [project-urls](../../includes/project-urls.md)]

2. Run `git clone` from the command prompt.

   ```bash
   git clone git@ssh.dev.azure.com:v3/fabrikam-fiber/FabrikamFiber/FabrikamFiber
   ```

   You should now be prompted to enter your passphrase for your SSH key before you can continue unless it is managed by an SSH Agent:

   ```Output
   Cloning into 'FabrikamFiber'...
   Enter passphrase for key '/c/Users/username/.ssh/id_rsa':
   remote: Azure Repos
   remote: Found 127 objects to send. (50 ms)
   Receiving objects: 100% (127/127), 56.67 KiB | 2.58 MiB/s, done.
   Resolving deltas: 100% (15/15), done.
   ```

   If you are instead prompted to verify a fingerprint, please read [Step 2: Add the public key to Azure DevOps](use-ssh-keys-to-authenticate.md#step-2-add-the-public-key-to-azure-devops) again. For other problems read the section on [Questions and troubleshooting](use-ssh-keys-to-authenticate.md#questions-and-troubleshooting).

> [!TIP]
> To make the most of SSH it is common to use an SSH Agent to manage your SSH key(s). Setting up an agent is beyond the scope of this article, though.

## Questions and troubleshooting

### Q: SSH cannot establish a connection. What should I do?

**A:** There are multiple different problems that you may experience:

```Output
Unable to negotiate with <IP> port 22: no matching host key type found. Their offer: ssh-rsa
```

Modify your SSH config to downgrade your security settings for Azure DevOps by adding the following to your `~/.ssh/config` (`%UserProfile%\.ssh\config` on Windows) file:

```
Host ssh.dev.azure.com vs-ssh.visualstudio.com
  HostkeyAlgorithms +ssh-rsa
```

> [!IMPORTANT]
> OpenSSH deprecated the `ssh-rsa` public key signature algorithm in [version 8.2](https://www.openssh.com/txt/release-8.2) and disabled it by default in [version 8.8](https://www.openssh.com/txt/release-8.8).

```Output
Unable to negotiate with <IP> port 22: no matching MAC found. Their offer: hmac-sha2-256,hmac-sha2-512
```

Modify your SSH config to downgrade your security settings for Azure DevOps by adding the following to your `~/.ssh/config` (`%UserProfile%\.ssh\config` on Windows) file:

```
Host ssh.dev.azure.com vs-ssh.visualstudio.com
  MACs +hmac-sha2-512,+hmac-sha2-256
```

```Output
Unable to negotiate with <IP> 22: no matching key exchange method found. Their offer: diffie-hellman-group1-sha1,diffie-hellman-group14-sha1,diffie-hellman-group-exchange-sha256
```

Modify your SSH config to downgrade your security settings for Azure DevOps by adding the following to your `~/.ssh/config` (`%UserProfile%\.ssh\config` on Windows) file:

```
Host ssh.dev.azure.com vs-ssh.visualstudio.com
  KexAlgorithms +diffie-hellman-group-exchange-sha256,+diffie-hellman-group14-sha1,+diffie-hellman-group1-sha1
```

> [!IMPORTANT]
> The key exchange algorithm `diffie-hellman-group1-sha1` has been disabled by default in [version 6.9](https://www.openssh.com/txt/release-6.9) of OpenSSH and `diffie-hellman-group14-sha1` in [version 8.2](https://www.openssh.com/txt/release-8.2).

> [!TIP]
> For self-hosted instances of Azure DevOps Server and TFS use the appropriate hostname in the `Host` line instead of `ssh.dev.azure.com vs-ssh.visualstudio.com`.

### Q: How can I have Git remember the passphrase for my key?

**A:** You can use an SSH Agent for that. Linux, macOS, and Windows (starting with [Windows 10 (build 1809)](/windows-server/administration/openssh/openssh_overview) or by using Git for Windows with Git Bash) all ship with an SSH Agent. The SSH Agent can be used to cache your SSH keys for repeated use. Please consult your SSH vendor's manual for details on how to use it.

### Q: I use [PuTTY](https://www.putty.org/) as my SSH client and generated my keys with PuTTYgen. Can I use these keys with Azure DevOps Services?

**A:** Yes. Load the private key with PuTTYgen, go to **Conversions** menu and select **Export OpenSSH key**.
Save the private key file and then follow the steps to [set up non-default keys](use-ssh-keys-to-authenticate.md#newkeys).
Copy your public key directly from the PuTTYgen window and paste into the **Key Data** field in your security settings.

### Q: How can I verify that the public key I uploaded is the same key as my local key?

**A:** You can verify the fingerprint of the public key uploaded with the one displayed in your profile through the following `ssh-keygen` command run against your public key using
  the command line. You'll need to change the path and the public key filename if you aren't using the defaults.

```powershell
ssh-keygen -l -E md5 -f ~/.ssh/id_rsa.pub
```

You can then compare the MD5 signature to the one in your profile. This check is useful if you have connection problems or have concerns about incorrectly
pasting in the public key into the **Key Data** field when adding the key to Azure DevOps.

<a name="migrate"></a>

### Q: How can I start using SSH in a repository where I'm currently using HTTPS?

**A:** You'll need to update the `origin` remote in Git to change over from an HTTPS to SSH URL. Once you have the [SSH clone URL](#step-3-clone-the-git-repository-with-ssh), run the following command:

```
git remote set-url origin <SSH URL to your repository>
```

Git commands accessing the remote called `origin` will now use SSH.

<a name="newkeys"></a>

### Q: I'm using Git LFS with Azure DevOps Services and I get errors when pulling files tracked by Git LFS.

**A:** Azure DevOps Services currently doesn't support LFS over SSH. Use HTTPS to connect to repos with Git LFS tracked files.

<a name="non-default-keys"></a>

### Q: How can I use a non-default key location, that is, not ~/.ssh/id_rsa and ~/.ssh/id_rsa.pub?

**A:** To use a key stored in a different place than the default, perform these two tasks:

1. The keys must be in a folder that only you can read or edit. If the folder has wider permissions, SSH won't use the keys.
2. You must let SSH know the location of the key, e.g. by specifying it as an "Identity" in the SSH config:

   ```
   Host ssh.dev.azure.com
     IdentityFile ~/.ssh/id_rsa_azure
     IdentitiesOnly yes
   ```

The `IdentitiesOnly yes` setting ensures that SSH will not use any other available identity to authenticate. This is particular important if more than one identity is available.

### Q: I have multiple SSH keys. How do I use the correct SSH key for Azure DevOps?

**A:** Generally, if you configure multiple keys for an SSH client and connect to an SSH server, the client can try the keys one at a time until the server accepts one.

However, this doesn't work with Azure DevOps for technical reasons related to the SSH protocol and how our Git SSH URLs are structured. Azure DevOps will blindly accept the first key that the client provides during authentication. If that key is invalid for the requested repository, the request will fail without attempting other available keys due to the following error:

```
remote: Public key authentication failed.
fatal: Could not read from remote repository.
```

For Azure DevOps, you'll need to configure SSH to explicitly use a specific key file. The procedure is the same as when using a key stored in a [non-default location](use-ssh-keys-to-authenticate.md#non-default-keys). Simply tell SSH to use the correct SSH key for the Azure DevOps host.

### Q: How do I use different SSH keys for different organizations on Azure DevOps?

**A:** Azure DevOps will blindly accept the first key that the client provides during authentication. If that key is invalid for the requested repository, the request will fail with the following error:

```
remote: Public key authentication failed.
fatal: Could not read from remote repository.
```

However, you can modify your SSH config to differentiate between different organizations and provide different keys for each. To do this you will need to use host aliases to create separate `Host` sections in your SSH configuration. This is because all hosted Azure DevOps URLs have the same hostname (`ssh.dev.azure.com`), so SSH has no way to distinguish them by default.

```
# The settings in each Host section are applied to any Git SSH remote URL with a
# matching hostname.
# Generally:
# * SSH uses the first matching line for each parameter name, e.g. if there's
#   multiple values for a parameter across multiple matching Host sections
# * "IdentitiesOnly yes" prevents keys cached in ssh-agent from being tried before
#   the IdentityFile values we explicitly set.
# * On Windows, ~/.ssh/your_private_key maps to %USERPROFILE%\.ssh\your_private_key,
#   e.g. C:\Users\<username>\.ssh\your_private_key.

# Imagine that we have the following two SSH URLs:
# * git@ssh.dev.azure.com:v3/Fabrikam/Project1/fab_repo
#   * For this, we want to use `fabrikamkey`, so we'll create `devops_fabrikam` as
#     a Host alias and tell SSH to use `fabrikamkey`.
# * git@ssh.dev.azure.com:v3/Contoso/Project2/con_repo
#   * For this, we want to use `contosokey`, so we'll create `devops_contoso` as
#     a Host alias and tell SSH to use `contosokey`.
#
# To set explicit keys for the two host aliases and to tell SSH to use the correct
# actual hostname, add the next two Host sections:
Host devops_fabrikam
  HostName ssh.dev.azure.com
  IdentityFile ~/.ssh/private_key_for_fabrikam
  IdentitiesOnly yes

Host devops_contoso
  HostName ssh.dev.azure.com
  IdentityFile ~/.ssh/private_key_for_contoso
  IdentitiesOnly yes
```

Afterwards, instead of using the real URLs, tell Git you want to use these URLs for each repository as remote by replacing the hostname in the existing remotes with `devops_fabrikam` and `devops_contoso` respectively. For example `git@ssh.dev.azure.com:v3/Fabrikam/Project1/fab_repo` would become `git@devops_fabrikam:v3/Fabrikam/Project1/fab_repo`.

### Q: What notifications may I receive about my SSH keys?

**A:** Whenever you register a new SSH Key with Azure DevOps Services, you receive an email notification informing you that a new SSH key has been added to your account.

![SSH notification example](media/use-ssh-authentication/ssh_notification.png)

### Q: What do I do if I believe that someone other than me is adding SSH keys on my account?

**A:** If you receive a notification of an SSH key being registered and you didn't manually upload it to the service, your credentials may have been compromised.

The next step would be to investigate whether or not your password has been compromised. Changing your password is always a good first step to defend against this attack vector. If you're an Azure Active Directory user, talk with your administrator to check if your account was used from an unknown source/location.

### Q: What do I do if I'm still prompted for my password and `GIT_SSH_COMMAND="ssh -v" git fetch` shows `no mutual signature algorithm` or `corresponding algo not in PubkeyAcceptedAlgorithms`?

**A:** Some Linux distributions, such as Fedora Linux, have crypto policies that require stronger SSH signature algorithms than Azure DevOps supports (as of January 2021). There's an open [feature request](https://developercommunity.visualstudio.com/idea/365980/support-non-rsa-keys-for-ssh-authentication.html) to add this support.

You can work around the issue by adding the following code to your SSH configuration (`~/.ssh/config`):

```
Host ssh.dev.azure.com vs-ssh.visualstudio.com
  PubkeyAcceptedKeyTypes +ssh-rsa
```

> [!TIP]
> For self-hosted instances of Azure DevOps Server and TFS use the appropriate hostname in the `Host` line instead of `ssh.dev.azure.com vs-ssh.visualstudio.com`.
