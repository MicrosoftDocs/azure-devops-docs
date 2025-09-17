---
title: Mobile app signing
description: See how to sign a mobile app during continuous integration (CI) builds with Azure Pipelines.
ms.topic: conceptual
ms.assetid: 1b9de1a8-0749-40af-87e8-857fb86cf0ae
ms.reviewer: dastahel
ms.date: 09/17/2025
monikerRange: '<= azure-devops'
ms.custom: sfi-image-nochange
#customer intent: As a mobile app developer, I want to understand app signing in Azure Pipelines so I can configure my pipelines or agents to sign and provision my mobile apps during builds.
---

# Mobile app signing

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article describes how Azure Pipelines securely manages certificates and profiles for signing and provisioning mobile apps. To sign and provision a mobile app, pipelines must provide signing certificates for Android or Apple operating systems, and [provisioning profiles](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/Introduction/Introduction.html#//apple_ref/doc/uid/TP40013839) for Apple.

<a name="android"></a>
## Android app signing

The following process signs an Android app while keeping the signing certificate secure.

### Get the keystore file

Follow the [Android documentation](https://developer.android.com/studio/publish/app-signing.html#generate-key) to generate a keystore file and its corresponding key. The keystore file contains the signing certificate.

In Azure Pipelines **Libraries** > **Secure files**, select **+ Secure file** and upload the keystore file to the [secure files library](../../library/secure-files.md). During upload, the keystore is encrypted and securely stored.

### Add the signing task to the pipeline

# [YAML](#tab/yaml)

In the YAML pipeline for an Android app, set the following `keystore-password`, `key-alias`, and `key-password` variables. Alternatively, you can set the variables using the pipeline **Variables** UI.

```yaml
variables:
  keystore-password: <keystore file password>
  key-alias: <key alias for the signing certificater>
  key-password: <password for the key associated with the alias>
```

Add the [AndroidSigning@3](/azure/devops/pipelines/tasks/reference/android-signing-v3) task to the pipeline after the build step. In the `AndroidSigning@3` task:

- `<apkFiles>` is the required path and name of the APK files to sign. The default value is `**/*.apk`.
- `<apksign>` must be `true`, which is the default.
- `<apksignerKeystoreFile>` is the name of your uploaded keystore file in the secure files library.
- `<apksignerKeystorePassword>` is the password to the unencrypted keystore file.
- `<apksignerKeystoreAlias>` is the key alias for the signing certificate.
- `<apksignerKeyPassword>` is the password for the key associated with the specified alias.

```yaml
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

Either create your pipeline from the **Android** build template, or if you already have a build pipeline, make sure the [Android signing](/azure/devops/pipelines/tasks/reference/android-signing-v3) task is present after the build task.

On the pipeline **Variables** tab, add the following variables:

- *keystore-password*: Password to the unencrypted keystore file. Select the **lock** icon to secure the password and obscure it in logs.
- *key-alias*: Key alias for the signing certificate you generated.
- *key-password*: Password for the key associated with the specified alias. Be sure to select the **lock** icon.

In the **Android signing** task settings under **Signing Options**:

- Select the **Sign the APK** check box, and then select your keystore file from the **Keystore file** dropdown.
- In the **Keystore password**, **Alias**, and **Key password** fields, reference the corresponding *$(\<keystore-password>)*, *$(\<key-alias>)*, and *$(\<key-password>)* variables you created.

---

Any build agent can now securely sign the app without any certificate management on the build machine itself.

<a name="apple"></a>
## Apple iOS, macOS, tvOS, or watchOS app signing

To sign and provision an Apple app, the Xcode build needs access to the P12 signing certificate and one or more provisioning profiles.

### Get the P12 signing certificate

Export your development or distribution signing certificate to a *.p12* file by using either Xcode or the Keychain Access app on macOS. To export using Xcode:

1. Go to **Xcode** > **Preferences** > **Accounts**.
1. In the left column, select your Apple ID.
1. On the right side, select your personal or team account and select **Manage Certificates**.
1. Ctrl+Select the certificate you want to export, and select **Export certificate** from the menu.

   ![Screenshot of exporting a certificate using Xcode.](media/secure-certs/secure-certs.png)

1. Enter the certificate name, a location to save the file, and a password to secure the certificate.

To export using the Keychain Access app on macOS or to generate a signing certificate on Windows, use the procedure described in [iOS Signing](https://github.com/phonegap/phonegap-docs/blob/master/docs/4-phonegap-build/3-signing/2-ios.html.md).

- In Azure Pipelines **Libraries** > **Secure files**, select **+ Secure file** and upload the P12 file to the Azure Pipelines [secure files library](../../library/secure-files.md). During upload, the certificate is encrypted and securely stored.

- In the **Variables** UI for the app's build pipeline, add a variable named *P12password* with the certificate password as the value. Select the **lock** icon to secure the password and obscure it in logs.

### Get the provisioning profile

If the app doesn't use automatic signing, download the app provisioning profile from the Apple Developer portal. For more information, see [Edit, download, or delete provisioning profiles](https://developer.apple.com/help/account/provisioning-profiles/edit-download-or-delete-profiles/).

You can also use Xcode to access provisioning profiles that are installed on your Mac. In Xcode, go to **Xcode** > **Preferences** > **Accounts**. Select your Apple ID and your team, and then select **Download Manual Profiles**.

In Azure Pipelines, upload the provisioning profile to the [secure files library](../../library/secure-files.md). During upload, the file is encrypted and securely stored.

### Add signing and provisioning tasks to the pipeline

You need at least one agent machine to run an Azure Pipelines build or release pipeline. You can use [Microsoft-hosted agents](../../agents/hosted.md) or set up [self-hosted agents](../../agents/agents.md#self-hosted-agents). For more information, see [Azure Pipelines agents](../../agents/agents.md).

For Apple app signing and provisioning, you can either install the required certificate and profiles during each build, or preinstall the certificate and profiles on the macOS build agent.

#### Install the certificate and profile during each build

If you don't have enduring access to the build agent, for example when you use [Microsoft-hosted agents](../../agents/hosted.md), you can install the certificate and profile during each build. The pipeline installs the P12 certificate and provisioning profile at the beginning of each build and removes them when the build completes.

# [YAML](#tab/yaml)

In the YAML build pipeline for the app, add the [InstallAppleCertificate@2](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) task before the [Xcode@5](/azure/devops/pipelines/tasks/reference/xcode-v5) task. In the code, replace `<secure-file.p12>` with the name of the uploaded *.p12* file. For `certPwd`, use the secure `P12password` variable you created.

```yaml
- task: InstallAppleCertificate@2
    inputs:
      certSecureFile: '<secure-file.p12>'
      certPwd: '$(<P12password>)'
```

Also add the [InstallAppleProvisioningProfile@1](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task to the pipeline before the [Xcode@5](/azure/devops/pipelines/tasks/reference/xcode-v5) task. Replace `<secure-file.mobileprovision>` with the name of the provisioning profile file.

```yaml
- task: InstallAppleProvisioningProfile@1
    inputs:
      provProfileSecureFile: '<secure-file.mobileprovision>'
```

>[!NOTE]
>In the `InstallAppleCertificate@2` and `InstallAppleProvisioningProfile@1` tasks, the `removeProfile` parameter defaults to `true`, which removes the certificate and profile after each build.

# [Classic](#tab/classic)

In the Xcode build pipeline, add the [Install Apple certificate](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) task to the build before the [Xcode build](/azure/devops/pipelines/tasks/reference/xcode-v5) task. Apply the following **Install Apple certificate** task settings:

- In the **Certificate (P12)** field, select the uploaded certificate from the **Certificate (P12)** dropdown.
- In the **Certificate (P12) password** field, reference the *$(P12password)* variable you created.

Also add the [Install Apple provisioning profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task to the build before the [Xcode build](/azure/devops/pipelines/tasks/reference/xcode-v5) task. Apply the following **Install Apple provisioning profile** task settings:

- Under **Provisioning profile location**, select **Secure Files** from the dropdown list.
- Under **Provisioning profile**, select the uploaded file from the dropdown list.
- Select the **Remove profile after build** check box to remove the provisioning profile from the agent machine after the build.

---

Any build agent can now securely sign the app without needing any certificate or profile management on the build machine itself.

#### Preinstall the certificate and profile on a macOS build agent

Alternatively, you can preinstall the signing certificate and provisioning profiles on [self-hosted](../../agents/agents.md#self-hosted-agents) macOS build agents for continued use by builds. Use this method only when you trust the people and processes that have access to the macOS keychain on the agent machines.

**Add the keychain password variable to the pipeline**

Add a new variable to the build pipeline named *KEYCHAIN_PWD*. Set the value as the default macOS keychain password, which is normally the password for the user that starts the agent. Select the **lock** icon to secure this password.

**Install the P12 certificate on the agent**

To install the P12 certificate in the default keychain, run the following command from a macOS Terminal window on the agent machine. Replace `<certificate.p12>` with the P12 file path and name, and replace `<password>` with the P12 file's encryption password.

```
sudo security import <certificate.p12> -P <password>
```

**Install the provisioning profile on the agent**

Find the full name of your signing identity by entering `security find-identity -v -p codesigning` in a macOS Terminal window. You see a list of signing identities in the form `iPhone Developer/Distribution: Developer Name (ID)`. If an identity is invalid, you see something like `(CSSMERR_TP_CERT_REVOKED)` after the identity.

To install the provisioning profile on the agent, run the following command from the macOS Terminal window. Replace `<profile>` with the path to the provisioning profile file. Replace `<UUID>` with the provisioning profile UUID, which is the provisioning profile filename without the `.mobileprovision` extension.

```
sudo cp <profile> ~/Library/MobileDevice/Provisioning Profiles/<UUID>.mobileprovision
```

**Add signing and provisioning tasks that use the default keychain**

# [YAML](#tab/yaml)

In the YAML build pipeline, add the [InstallAppleCertificate@2](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) task before the [Xcode@5](/azure/devops/pipelines/tasks/reference/xcode-v5) task. In the code, set the following values:

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

Also add the [InstallAppleProvisioningProfile@1](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task before the [Xcode@5](/azure/devops/pipelines/tasks/reference/xcode-v5) task. In the code:

- Set `provProfileSecureFile` to the name of the provisioning profile file.
- Set `removeProfile` to `false` to retain the profile between builds.

```yaml
- task: InstallAppleProvisioningProfile@1
    inputs:
      provProfileSecureFile: '<secure-file.mobileprovision>'
      removeProfile: false
```

# [Classic](#tab/classic)

Add the [Install Apple Certificate](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) task to the build pipeline before the [Xcode build](/azure/devops/pipelines/tasks/reference/xcode-v5) task. Apply the following **Install Apple Certificate** task settings:

- In the **Certificate (P12)** field, select the uploaded certificate from the **Certificate (P12)** dropdown.
- In the **Certificate (P12) password** field, reference the *$(P12password)* variable.
- Under **Advanced**, set **Keychain** to **Default Keychain**, and under **Keychain password**, reference the *$(KEYCHAIN_PWD)* variable.
- Deselect the **Delete certificate from keychain** check box to keep the certificate on the agent machine after the build.

Also add the [Install Apple Provisioning Profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task to the build before the Xcode task. Apply the following **Install Apple Provisioning Profile** task settings:

- Under **Provisioning profile location**, select **Secure Files** from the dropdown list.
- Under **Provisioning profile**, select your uploaded file from the dropdown list.
- Deselect the **Remove profile after build** check box to keep the provisioning profile on the agent machine after the build.

---

The macOS build agent can now securely sign and provision the app for all builds without needing further certificate or profile management.

### Configure the Xcode build task to reference the secure files

The [Xcode build (Xcode@5)](/azure/devops/pipelines/tasks/reference/xcode-v5) task refers to the `signingIdentity` and the `provisioningProfileUuid` by using variables. These variables are automatically set for the selected certificate and provisioning profile by the preceding [Install Apple certificate](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) and [Install Apple provisioning profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) tasks.

# [YAML](#tab/yaml)

Add the following code to the pipeline [Xcode build (Xcode@5)](/azure/devops/pipelines/tasks/reference/xcode-v5) task:

```yaml
- task: Xcode@5
  inputs:
    signingOption: 'manual'
    signingIdentity: '$(APPLE_CERTIFICATE_SIGNING_IDENTITY)'
    provisioningProfileUuid: '$(APPLE_PROV_PROFILE_UUID)'
```

# [Classic](#tab/classic)

Configure the following settings for the **Xcode build** task:

- Under **Signing style**, select **Manual signing** from the dropdown list.
- Under **Signing identity**, enter *$(APPLE_CERTIFICATE_SIGNING_IDENTITY)*. 
- Under **Provisioning profile UUID**, enter *$(APPLE_PROV_PROFILE_UUID)*.

---

The pipeline build agent now securely signs and provisions your app without further certificate or profile management on the build machine or in the build pipeline.

## Related content

- [Build, test, and deploy Android apps](../../ecosystems/android.md)
- [Build, test, and deploy Xcode apps](../../ecosystems/xcode.md)
- [Azure Pipelines agents](../../agents/agents.md)
- [Create and manage agent pools](../../agents/pools-queues.md)
- [Define variables](../../process/variables.md)
