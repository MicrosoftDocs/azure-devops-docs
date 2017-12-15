---
title: Simple, Secure CI App Signing
description: Simple, Secure CI App Signing Using VSTS or Team Foundation Services 2015
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: ed39a1b4-bce0-416e-b3a2-253b21722b02
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
---

# Sign your Xcode app

**VSTS | TFS 2017 Update 2**

> **Notice**: Apple's WWDR certificate expired on Feb 14th and as a result you may experience signing failures if you have not updated the cert and **removed the old one**. Follow the steps outlined by Apple under [What should I do if Xcode doesn’t recognize my distribution certificate?](https://developer.apple.com/support/certificates/expiration/) to resolve the problem. Note that this also affects development certs despite the title.

When developing an app for iOS or Android either natively or using a cross-platform solution like Cordova you will eventually need to tackle the problem of managing signing certificates and (in the case of iOS) [Mobile Provisioning Profiles](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/Introduction/Introduction.html#//apple_ref/doc/uid/TP40013839). This article will highlight some features to help you manage and secure them for your app.

> **Troubleshooting Tip**: When building on a Mac (Xcode native, Cordova iOS, Xamarin iOS) you should either setup the agent as a launch agent (./svc.sh install agent) or run it as an interactive process (node agent/vsoagent.js).

This article currently covers:

- [Using a certificate and mobile provisioning file in your iOS or Xcode build](#iosfile)
- [Using installed signing identities and mobile provisioning profiles in your iOS or Xcode build](#iosinstall)
- [Building Android native and Cordova Android projects](#android)

<a name="iosfile"></a>
## Using a Certificate and Mobile Provisioning File in Your iOS or Xcode Build

1. After creating your development and/or distribution signing certificate, export it to a .p12 file using either Keychain Access or Xcode
  1. To export using Xcode, first go to Xcode &gt; Preferences... &gt; Accounts and select your Apple Developer account
  2. Click "View Details..." and then right click on the Signing Identity you wish to export, and click "Export..."
  3. Enter a filename and password. Take note of the password as we will need this later.

      ![Xcode Export Cert](_img/secure-certs/secure-certs-1.png)
  Alternatively you can follow a similar process using the "Keychain Access" app on macOS or even generate a signing certificate on Windows. Use the procedure [described in this article](http://docs.build.phonegap.com/en_US/signing_signing-ios.md.html#_windows_users) if you would prefer to head this direction instead.  

2. Next, get a copy of the provisioning profile you want to use.

  1. You can simply go to the Apple Developer portal and download your mobile provisioning profile from there but you can also use Xcode to access one installed on your machine.
  2. First go to the same screen you used to get the .p12 file above
  3. Next, right click the provisioning profile you want and select "Show in Finder"
  4. Copy the file highlighted to another location and it a descriptive filename
      ![Xcode Show in Finder](_img/secure-certs/secure-certs-2.png)

3. At this point you can opt to add these two files directly to source control or add an extra layer of security by encrypting them first. **See the next section for details on this step.**

4. Next, go to VSO / TFS and open up your Xcode or Cordova build definition and go to the **Variables** tab. Here we will enter password for the .p12 file:
  - **P12_PWD**: Password to the unencrypted .p12 file. *Be sure to click the "lock" icon.* This will secure your password and obscure it in all logs.
	![Xcode Build settings](_img/secure-certs/secure-certs-10.png)

5. Finally, we'll update our Xcode Build or Cordova Build step with references to these two files. The build step will automatically determine the correct "signing identity" based on the contents of the .p12, create a temporary keychain with the .p12 in it and use that exclusively for this build, install the mobile provisioning profile, determine the correct UUID based on the contents of the .mobileprovision profile, and then clean everything up afterwards.

    Enter the following values under the **Signing & Provisioning** category for the Xcode Build task or the **iOS** category in the Cordova Build task:

    - **Override Using**: File Contents
    - **P12 Certificate File**: Path to the .p12 file in the repository
    - **P12 Password**: $(P12_PWD)
    - **Provisioning Profile File**: Path to the .mobileprovision file in the repository
    - **Remove Profile After Build**: Checked if you want the mobileprovision profile to be removed from the system after the build. Only check this if you will have one agent on the system running this build as it is installed in a global location.

      ![Xcode Build settings](_img/secure-certs/secure-certs-11.png)

You are now all set! Any build agent that is running will now be able to build your app without any cert management on the build machine itself!!  Simply repeat the process of adding different certificates and provisioning profiles to your source repo to enable separate dev, beta (ad hoc), and distribution build.

In the next section we'll cover how to add another layer of security by encrypting these files.

### Optional: Using an Encrypted .p12 and .mobileprovision File
You can add an extra layer of security by to your project by encrypting your .p12 and .mobileprovision files so that only those that have been given the appropriate credentials have permissions to use them. The "Decrypt File" task makes this easy to setup in your build task.

1. First, encrypt your files.
  0. Open the Terminal app on your Mac
  0. Change to the folder containing your .p12 file and .mobileprovision file.
  0. Type the following:
    ```
    openssl des3 -in iphonedeveloper.p12 -out iphonedeveloper.p12.enc
    ```
    substituting des3 for any encryption cypher you'd like to use and the appropriate input and output file names.
  0. Enter a passphrase to encrypt the certificate when prompted and note this down as we will use it later.

2. Next, add these two files to source control (the encrypted .p12 and .mobileprovision files). This is secure particularly if you are using a private repository since a malicious user would need access to the repository, the encryption passphrase, and the P12 passphrase to be able to use your information without permission. Remove any unencrypted copies if present.

3. Now we'll set up our build definition to decrypt the files at build time.

  1. Open up your Xcode or Cordova build definition and go to the **Variables** tab and enter the following:
     - **P12**: Path to your encrypted .p12 file in source control.
     - **P12_PWD**: Password to the unencrypted .p12 file. *Be sure to click the "lock" icon.* This will secure your password and obscure it in all logs.
     - **MOB_PROV**: Path to your encrypted mobile provisioning profile.
     - **ENC_PWD**: The passphrase you used to encrypt the .p12 and .mobileprovision files. If you used two different passphrase you'll need two variables.  Again, *be sure to click the "lock" icon.*
      ![Variables](_img/secure-certs/secure-certs-3.png)

  2. Under the **Build** tab in your build definition, add two **Decrypt File (OpenSSL)** steps from the **Utility** category and move these to the top of your build definition.

  3. Now, enter the proper information using the variables we created above to decrypt the two files to a static filename.
     - **Cypher**: The cypher you specified while encrypting. (Ex: des3)
     - **Encrypted File**: $(P12) for one step and $(MOB_PROV) for the other
     - **Passphrase**: $(ENC_PWD)
     - **Decrypted File Path**: _build.p12 for one step and _build.mobileprovision for the other
      ![Decrypt File settings](_img/secure-certs/secure-certs-4.png)

4. Finally, we'll just update the Xcode Build step we setup before to reference the decrypted files.

    - **Override Using**: File Contents
    - **P12 Certificate File**: _build.p12
    - **P12 Password**: $(P12_PWD)
    - **Provisioning Profile File**: _build.mobileprovision
    - **Remove Profile After Build**: Checked if you want the mobileprovision profile to be removed from the system after the build. Only check this if you will have one agent on the system running this build as it is installed in a global location.
      ![Xcode Build settings](_img/secure-certs/secure-certs-5.png)

 You are now all set! Any build agent that is running will now be able to securely build your app without any cert management on the build machine itself!!  Simply repeat the process of adding different certificates and provisioning profiles to your source repo to enable separate dev, beta (ad hoc), and distribution build.

<a name="iosinstall"></a>
## Using Installed Signing Identities and Mobile Provisioning Profiles in Your iOS or Xcode Build
If you would prefer to simply use a signing identitry and provisioning profile you have installed on your Mac, you may do this as well and there are some features that can help deal with common pitfalls.

While you can just allow the build to attempt to auto-match or use identities and profiles in your Xcode project, you can follow these steps to override the project get very specific about the exact identity you want to use.

Follow these steps:

0. Determine the full name of the identity and the UUID of the Mobile Provisioning Profile you wish to use.
  1. Find the full name of your signing identity by opening the Terminal app and type the following:
    ```
    security find-identity -v -p codesigning
    ```
    and you will see a list of signing identities in the form "iPhone Developer/Distribution: Developer Name (ID)". If the identity is invalid you will see something like (CSSMERR_TP_CERT_REVOKED) after the identity.

  2. Take note of the identity you want to use including the ID as this string is truely unique.

  3. Next, find the UUID for the Mobile Provisioning Profile you want to use by following these steps.

     1. Open Xcode and go to Xcode &gt; Preferences... &gt; Accounts and select your Apple Developer account

     2. Click "View Details..." and right click the provisioning profile you want and select "Show in Finder"
      ![Xcode Show in Finder](_img/secure-certs/secure-certs-2.png)

  4. The name of the file that is highlighted is the UUID of your provisioning profile.

0. Now we'll update our Xcode Build or Cordova Build step with references to these two identifiers. Enter the following values under the **Signing & Provisioning** category for the Xcode Build task or the **iOS** category in the Cordova Build task:

    - **Override Using**: Identifiers
    - **Signing Identntiy**: Full signing identity you found using the security command above
    - **Provisioning Profile UUID**: UUID of the provisioning profile from the filename above


0. Next, if you are running the agent as a launch agent, you will need to set up the build to unlock the default keychain.

  1. Go to the **Variables** tab and enter the following:

     - **KEYCHAIN_PWD**: Password to your default keychain. This is normally the password for the user that is starting the agent. *Be sure to click the "lock" icon.*


  2. Update the Xcode Build step to unlock the keychain entering the following values under the **Signing & Provisioning** category for the Xcode Build task or the **iOS** category in the Cordova Build task:

     - **Unlock Default Keychain**: Checked
     - **Default Keychain Password**: $(KEYCHAIN_PWD)

<a name="android"></a>
## Building Android Native and Cordova Android Projects
Managing Android signing is relatively simple. For native builds using Ant or Gradle, the [Android documentation](http://developer.android.com/tools/publishing/app-signing.html) on the topic largely covers what you need to know to generate and use a keystore file containing your signing cert.

However, here are a few additional tips that can help you get your app up and running quickly while still keeping your signing key secure.

Follow these steps:

0. **Windows only**: You may need to install openssl.exe. If you have the [Git command line tools](http://www.git-scm.com/downloads) installed, openssl may already be in your path (Ex: C:\Program Files (x86)\Git\bin). If not, install the command line tools or download a binary distribution of OpenSSL for Windows from [one of the community mirrors](http://go.microsoft.com/fwlink/?LinkID=627128) and it to your path. This will also need to be done on any Windows machines running a build agent.

0. Now we'll encrypt the keystore for your app.
    0. Open the Terminal app on Mac or a command prompt on Windows and go to where your keystore is located.
    0. Type the following:
    ```
    openssl des3 -in release.keystore -out release.keystore.enc
    ``` substituting des3 for any encryption cypher you'd like to use and the appropriate input and output file names.
    0. Enter a passphrase to encrypt the certificate when prompted and note this down as we will use it later.


0. Next, add the encrypted keystore to source control. This is secure particularly if you are using a private repository since a malicious user would need access to the repository, the encryption passphrase, the keystore password, and the alias password to be able to use your information without permission.

0. Finally we'll update your build definition to decrypt and use the keystore.

    0. Open up your Android or Cordova build definition and go to the **Variables** tab. Here we will enter the following:
     - **KEYSTORE**: Path to your encrypted keystore file in source control.
     - **KEYSTORE_PWD**: Password to the unencrypted keystore file. *Be sure to click the "lock" icon.* This will secure your password and obscure it in all logs.
     - **KEY**: The key alias for the signing certificate you generated.
     - **KEY_PWD**: The password for the key associated with the specified alias. *Again, Be sure to click the "lock" icon.*
     - **ENC_PWD**: The passphrase you used to encrypt the keystore file. *Be sure to click the "lock" icon.*    

      ![Android build vars](_img/secure-certs/secure-certs-8.png)

    0. Under the **Build** tab in your build definition, add a **Decrypt File (OpenSSL)** steps from the **Utility** category and move this to the top of your build definition.

0. Now, enter the proper information using the variables we created above to decrypt the two files to a static filename.

    - **Cypher**: The cypher you specified while encrypting. (Ex: des3)
    - **Encrypted File**: $(KEYSTORE)
    - **Passphrase**: $(ENC_PWD)
    - **Decrypted File Path**: _build.keystore

      ![Decrypt keystore settings](_img/secure-certs/secure-certs-9.png)

0. Finally, updating the actual build step to use these values you entered is simple regardless of your build system.

    1. If you are using the **Gradle, Ant, or Maven** build tasks, you can add the following under **Options**:

      ```
      -Pkey.store=_build.keystore -Pkey.store.password=$(KEYSTORE_PWD) -Pkey.alias=$(KEY) -Pkey.alias.password=$(KEY_PWD)
      ```     
      ![Gradle Build settings](_img/secure-certs/secure-certs-6.png)

    2. If you are using the **Cordova Build** or **Android Signing** tasks, you can add the following under **Android** or **Jarsign Options** respectively:

      - **Keystore File**: _build.keystore
      - **Keystore Password**: $(KEYSTORE_PWD)
      - **Key Alias**: $(KEY)
      - **KEY Password**:$(KEY_PWD)

      ![Cordova Android Build settings](_img/secure-certs/secure-certs-7.png)

You are now all set! Any build agent that is running will now be able to securely build your app without any cert management on the build machine itself!!  

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
