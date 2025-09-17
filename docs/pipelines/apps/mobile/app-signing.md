---
title: Mobile app signing
description: See how to sign a mobile app during continuous integration (CI) with Azure Pipelines.
ms.topic: conceptual
ms.assetid: 1b9de1a8-0749-40af-87e8-857fb86cf0ae
ms.reviewer: dastahel
ms.date: 09/16/2025
monikerRange: '<= azure-devops'
ms.custom: sfi-image-nochange
---

# Mobile app signing

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article describes how Azure Pipelines securely manages certificates and profiles for signing and provisioning mobile apps. To sign and provision a mobile app for Android or Apple operating systems, you need to manage signing certificates and Apple [provisioning profiles](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/Introduction/Introduction.html#//apple_ref/doc/uid/TP40013839).

<a name="android"></a>
## Android app signing

The following process signs your Android app while keeping your signing certificate secure.

### Upload the keystore file

Follow the [Android documentation](https://developer.android.com/studio/publish/app-signing.html#generate-key) to generate a keystore file and its corresponding key. The keystore file contains your signing certificate.

In Azure Pipelines **Libraries** > **Secure files**, select **+ Secure file** and upload your keystore file to the [secure files library](../../library/secure-files.md). During upload, your keystore is encrypted and securely stored.

### Add the signing task to the pipeline

# [YAML](#tab/yaml)

You add the [AndroidSigning@3](/azure/devops/pipelines/tasks/reference/android-signing-v3) task to your YAML pipeline after the step that builds your app. In the `AndroidSigning@3` task:

- `<apkFiles>` is required and is the path and names of the APK files to be signed. The default is `**/*.apk`.
- `<apksign>` must be `true`, which is the default.
- `<keystore-file>` is the name of your uploaded keystore file in the secure files library.
- `<apksignerKeystorePassword>` is the password to the unencrypted keystore file.
- `<apksignerKeystoreAlias>` is the key alias for the signing certificate.
- `<apksignerKeyPassword>` is the password for the key associated with the specified alias.

You can set and use the following variables in the YAML pipeline, or you can set the variables using the **Variables** tab in the Azure Pipelines UI and refer to them in the YAML.

```yaml
variables:
  keystore-password: <keystore file password>
  key-alias: <key alias for the signing certificater>
  key-password: <password for the key associated with the alias>

steps:
- task: AndroidSigning@3
  displayName: 'Signing and aligning APK file(s) **/*.apk'
  inputs:
    apkFiles: '**/*.apk'
    apksign: true
    apksignerKeystoreFile: <keystore-filename.keystore>
    apksignerKeystorePassword: $(keystore-password)
    apksignerKeystoreAlias: $(key-alias)
    apksignerKeyPassword: $(key-password)
```

# [Classic](#tab/classic)

You either create your pipeline from the Android build template, or if you already have a build pipeline, make sure it runs the [Android signing](/azure/devops/pipelines/tasks/reference/android-signing-v3) task after the task that builds your app.

In the Android signing task settings:

- Select the **Sign the APK** check box under **Signing Options**.
- Select the **Settings** icon next to the **Keystore file** field, and then select the uploaded keystore file from the **Keystore file** dropdown.

On the pipeline **Variables** tab, add the following variables:

- **keystore-password**: Password to the unencrypted keystore file. Select the **lock** icon to secure your password and obscure it in logs.
- **key-alias**: The key alias for the signing certificate you generated.
- **key-password**: Password for the key associated with the specified alias. Be sure to select the **lock** icon.

On the pipeline **Tasks** tab, select the Android signing task and reference the names of your newly created variables in the **Signing Options** as `$(<keystore-password>)`, `$(<key-alias>)`, and `$(<key-password>)`.
---

Any build agent can now securely sign your app without any certificate management on the build machine itself.

<a name="apple"></a>
## Apple iOS, macOS, tvOS, or watchOS app signing

To sign and provision your app, your Xcode build needs access to your P12 signing certificate and one or more provisioning profiles.

### Get your P12 signing certificate

You can export your development or distribution signing certificate to a *.p12* file by using either Xcode or the Keychain Access app on macOS. To export using Xcode:

1. Go to **Xcode** > **Preferences** > **Accounts**.
1. In the left column, select your Apple ID.
1. On the right side, select your personal or team account and select **Manage Certificates**.
1. Ctrl+Select the certificate you want to export and select **Export certificate** from the menu.

   ![Screenshot of exporting a certificate using Xcode.](media/secure-certs/secure-certs.png)

1. Enter the certificate name, location to save the file, and a password to secure the certificate.

To export using the Keychain Access app on macOS or to generate a signing certificate on Windows, use the procedure described in [iOS Signing](https://github.com/phonegap/phonegap-docs/blob/master/docs/4-phonegap-build/3-signing/2-ios.html.md).

Upload the P12 file to the Azure Pipelines [secure files library](../../library/secure-files.md). During upload, your certificate is encrypted and securely stored.

In the **Variables** UI for your pipeline, add a variable named **P12password** with your certificate password as the value. Select the **lock** icon to secure your password and obscure it in logs.

### Get your provisioning profile

If your app doesn't use automatic signing, you can download your app provisioning profile from the Apple Developer portal. For more information, see [Edit, download, or delete provisioning profiles](https://developer.apple.com/help/account/manage-profiles/edit-download-or-delete-profiles/).

You can also use Xcode to access provisioning profiles that are installed on your Mac. In Xcode, go to **Xcode** > **Preferences** > **Accounts**. Select your Apple ID and your team, and then select **Download Manual Profiles**.

In Azure Pipelines, upload the provisioning profile to the [secure files library](../../library/secure-files.md). During upload, your file is encrypted and securely stored.

### Add the signing and provisioning tasks to the pipeline

You need at least one agent machine to run an Azure Pipelines build or release. You can use a [Microsoft-hosted Linux, macOS, or Windows agent](../../agents/hosted.md), or set up your own [self-hosted agent](../../agents/agents.md#self-hosted-agents). For more information, see [Azure Pipelines agents](../../agents/agents.md).

To sign and provision your app, you can either install the certificate and profile during each build, or preinstall the files on your macOS agent.

#### Install the certificate and profile during each build

If you don't have enduring access to the build agent, for example when you use [hosted agents], you can install the certificate and profile during each build. The pipeline installs the P12 certificate and provisioning profile at the beginning of each build and removes them when the build completes.

# [YAML](#tab/yaml)

Add the [InstallAppleCertificate@2](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) task to your YAML pipeline before the Xcode task. In the code, replace `<secure-file.p12>` with the name of your uploaded *.p12* file. For `certPwd`, use the variable you created for the secure `P12password`.

```yaml
- task: InstallAppleCertificate@2
    inputs:
      certSecureFile: '<secure-file.p12>'
      certPwd: '$(<P12password>)'
```

Also add the [InstallAppleProvisioningProfile@1](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task to your YAML before the Xcode task. Replace `<secure-file.mobileprovision>` with the name of your provisioning profile file.

```yaml
- task: InstallAppleProvisioningProfile@1
    inputs:
      provProfileSecureFile: '<secure-file.mobileprovision>'
```

>[!NOTE]
>In the `InstallAppleCertificate@2` and `InstallAppleProvisioningProfile@1` tasks, the `removeProfile` parameter defaults to `true`, which removes the certificate and profile after each build.

# [Classic](#tab/classic)

Add the [Install Apple Certificate](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) task to your build before the Xcode task. In the **Install Apple Certificate** task settings:

- Next to the **Certificate (P12)** field, select your uploaded certificate from the **Certificate (P12)** dropdown.
- In the **Certificate (P12) password** field, reference the *$(P12password)* variable you created.

Also add the [Install Apple Provisioning Profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task to your build before the Xcode task. In the **Install Apple Provisioning Profile** task settings:

- For the **Provisioning profile location** option, choose **Secure Files**, and select your uploaded file in the **Provisioning profile** dropdown.
- Select the checkbox labeled **Remove profile after build** to remove the provisioning profile from the agent machine after the build.

---

Any build agent can now securely sign your app without any certificate or profile management on the build machine itself.

#### Preinstall the certificate and profile on a macOS build agent

You can also preinstall the signing certificate and provisioning profiles on self-hosted macOS build agents for continued use by builds. Use this method only when you trust the people and processes that have access to the macOS keychain on the agent machines.

**Preinstall the P12 certificate**

Add a new variable to your pipeline named **KEYCHAIN_PWD**. Set the value as the default keychain password, which is normally the password for the user that starts the agent. Select the **lock** icon to secure this password.

To install the P12 certificate in the default keychain, run the following command from a macOS Terminal window on the build agent. Replace `<certificate.p12>` with your P12 file path and name, and replace `<password>` with your P12 file's encryption password.

```
sudo security import <certificate.p12> -P <password>
```

**Preinstall the provisioning profile**

Find the full name of your signing identity by opening a macOS Terminal window and entering `security find-identity -v -p codesigning`. You see a list of signing identities in the form `iPhone Developer/Distribution: Developer Name (ID)`. If an identity is invalid, you see something like `(CSSMERR_TP_CERT_REVOKED)` after the identity.

To install the provisioning profile on the agent machine, run the following command from a macOS Terminal window. Replace `<profile>` with the path to your provisioning profile file. Replace `<UUID>` with the provisioning profile UUID, which is the provisioning profile filename without the `.mobileprovision` extension.

```
sudo cp <profile> ~/Library/MobileDevice/Provisioning Profiles/<UUID>.mobileprovision
```

**Add signing and provisioning tasks that use the default keychain**

# [YAML](#tab/yaml)

Add the [InstallAppleCertificate@2](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) task to your YAML pipeline before the Xcode task. In the code, set the following values:

- `certSecureFile`: The name of your uploaded *.p12* file.
- `certPwd`: The variable for the secure `P12password`.
- `signingIdentity`: The full name of your signing identity.
- `keychain`: `default` to allow access to the default keychain.
- `keychainPassword`: The `KEYCHAIN_PWD` variable.
- `deleteCert`: `false` to retain the certificate between builds.

```yaml
- task: InstallAppleCertificate@2
  inputs:
    certSecureFile: '<secure-file.p12>'
    certPwd: '$(P12password)'
    signingIdentity: <full-signing-identity>
    keychain: default
    keychainPassword: `$(KEYCHAIN_PWD)
    deleteCert: false
```

Also add the [InstallAppleProvisioningProfile@1](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task. In the code:

- Set `provProfileSecureFile` to the name of your provisioning profile file.
- Set `removeProfile` to `false` to retain the profile between builds.

```yaml
- task: InstallAppleProvisioningProfile@1
    inputs:
      provProfileSecureFile: '<secure-file.mobileprovision>'
      removeProfile: false
```

# [Classic](#tab/classic)

Add the [Install Apple Certificate](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) task to your build before the Xcode task. In the **Install Apple Certificate** task settings:

- Next to the **Certificate (P12)** field, select your uploaded certificate from the **Certificate (P12)** dropdown.
- In the **Certificate (P12) password** field, reference the *$(P12password)* variable.
- Under **Advanced**, set **Keychain** to **Default Keychain**, and set **Keychain password** to the keychain password variable.
- Deselect the **Delete certificate from keychain** check box to keep the certificate on the agent machine after the build.

Also add the [Install Apple Provisioning Profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task to your build before the Xcode task. In the **Install Apple Provisioning Profile** task settings:

- For the **Provisioning profile location** option, choose **Secure Files**, and select your uploaded file in the **Provisioning profile** dropdown.
- Deselect the **Remove profile after build** check box to keep the provisioning profile on the agent machine after the build.

---

The macOS build agent can now securely sign and provision your app for all builds without further certificate or profile management.

### Reference the secure files in the Xcode build task

To use the secure certificate and profile in your pipelines, configure the following settings in your Xcode build task.

The secure files references in the build tasks use variables for the `signingIdentity` and the `provisioningProfileUuid`. These variables are automatically set by the **Install Apple Certificate** and **Install Apple Provisioning Profile** tasks for the certificate and provisioning profile you selected.

# [YAML](#tab/yaml)

```yaml
- task: Xcode@5
  inputs:
    signingOption: 'manual'
    signingIdentity: '$(APPLE_CERTIFICATE_SIGNING_IDENTITY)'
    provisioningProfileUuid: '$(APPLE_PROV_PROFILE_UUID)'
```

# [Classic](#tab/classic)

In the **Xcode** task settings:

- For the **Signing style** option, choose **Manual signing**.
- In the **Signing identity** field, enter `$(APPLE_CERTIFICATE_SIGNING_IDENTITY)`. 
- In the **Provisioning profile UUID** field, enter `$(APPLE_PROV_PROFILE_UUID)`.

---

The pipeline build agent now securely signs and provisions your app without further certificate or profile management on the build machine or in the build pipeline.

## Related content

- [Build, test, and deploy Android apps](../../ecosystems/android.md)
- [Build, test, and deploy Xcode apps](../../ecosystems/xcode.md)
- [Azure Pipelines agents](../../agents/agents.md)
- [Create and manage agent pools](../../agents/pools-queues.md)
- [Define variables](../../process/variables.md)
