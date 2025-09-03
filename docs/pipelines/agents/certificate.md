---
title: Run an Agent with a Self-Signed Certificate
description: Learn how to run the build and release an agent with a self-signed certificate for Azure Pipelines and Azure DevOps Server.
ms.topic: conceptual
ms.assetid: 09E36E4D-D94B-4F5B-BE4D-9E7B4E7B68E2
ms.reviewer: chrispat
ms.date: 08/05/2025
monikerRange: '< azure-devops'
---

# Run an agent with a self-signed certificate

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

This article explains how you can run a self-hosted agent with a self-signed certificate for Azure Pipelines and Azure DevOps Server.

## Work with an SSL server certificate

```
Enter server URL > https://corp.tfs.com/tfs
Enter authentication type (press enter for Integrated) >
Connecting to server ...
An error occurred while sending the request.
```

The agent diagnostic log shows:

```
[2017-11-06 20:55:33Z ERR  AgentServer] System.Net.Http.HttpRequestException: An error occurred while sending the request. ---> System.Net.Http.WinHttpException: A security error occurred
```

The previous security error might indicate that the build machine doesn't trust the server certificate that you used on your Azure Devops Server host machine. Make sure that you install your self-signed SSL server certificate into the OS certificate store.

```
Windows: Windows certificate store
Linux: OpenSSL certificate store
macOS: OpenSSL certificate store for agent version 2.124.0 or below
       Keychain for agent version 2.125.0 or above
```

You can easily verify whether the certificate is installed correctly by running a few commands. You should be good as long as the SSL handshake finishes correctly (even if you get a 401 for the request).

```
Windows: PowerShell Invoke-WebRequest -Uri https://corp.tfs.com/tfs -UseDefaultCredentials 
Linux: curl -v https://corp.tfs.com/tfs 
macOS: curl -v https://corp.tfs.com/tfs (agent version 2.124.0 or below, curl needs to be built for OpenSSL)
       curl -v https://corp.tfs.com/tfs (agent version 2.125.0 or above, curl needs to be built for Secure Transport)
```

If you can't successfully install the certificate into your machine's certificate store for various reasons (like you don't have the correct permissions or you are on a customized Linux machine), the agent version 2.125.0 or above has the ability to ignore an SSL server certificate validation error.

> [!IMPORTANT]
>
> We don't recommend that you ignore SSL server certificate validation errors. It isn't secure. We highly recommend that you install the certificate into your machine certificate store.

Pass `--sslskipcertvalidation` during agent configuration:

```
./config.cmd/sh --sslskipcertvalidation
```

> [!NOTE]
>
> To use the `--sslskipcertvalidation` flag on Linux and macOS, the `libcurl` library on your Linux or macOS machine must be built with OpenSSL. Learn more about the [`libcurl` library](https://github.com/dotnet/corefx/issues/9728).

### Problem: Git get sources command fails with an SSL certificate (Windows agent only)

We ship command-line Git as part of the Windows agent and use this copy of Git for all Git-related operations. When you have a self-signed SSL certificate for your on-premises Azure DevOps Server machine, configure the shipped Git to allow the self-signed SSL certificate.

There are two ways to solve this problem:

1. Set the following `git config` at a global level by the agent's run as user.

   ```bash
   git config --global http."https://tfs.com/".sslCAInfo certificate.pem
   ```

   > [!NOTE]
   >
   > Setting a system-level `git config` isn't reliable on Windows. The system `.gitconfig` file is stored with the copy of Git we packaged. The packaged Git is replaced every time the agent is upgraded to a new version.

2. Enable git to use `SChannel` during configuration when you're using a 2.129.0 or later version agent. Pass `--gituseschannel` during agent configuration.

   ```
   ./config.cmd --gituseschannel
   ```

   > [!NOTE]
   >
   > Git `SChannel` has more restrictive requirements for your self-signed certificate. A self-signed certificate that generates by an Internet Information Services (IIS) or PowerShell command might not be compatible with `SChannel`.

## Work with an SSL client certificate

IIS has an SSL setting that requires that all incoming requests to Azure DevOps Server must present a client certificate and the regular credential.

When that IIS SSL setting is enabled, you need to use version 2.125.0 or newer and take the following extra steps in order to configure the build machine against your Azure DevOps Server.

1. Prepare all required certificate information:

- A certificate authority (CA) certificate in `.pem` format: This file should contain the public key and signature of the CA certificate. You need to put the root CA certificate and all your intermediate CA certificates into one `.pem` file.  
- A client certificate in `.pem` format: This file should contain the public key and signature of the client certificate.
- A client certificate private key in `.pem` format: This file should contain only the private key of the client certificate.  
- A client certificate archive package in `.pfx` format: This file should contain the signature, public key, and private key of the client certificate.
- Password: Use `SAME` password to protect the client certificate private key and the client certificate archive package, because they both have the client certificate's private key.

2. Install a CA certificate into the machine certificate store:

- Linux: OpenSSL certificate store
- macOS: System or User Keychain
- Windows: Windows certificate store

3. Pass `--sslcacert`, `--sslclientcert`, `--sslclientcertkey`. `--sslclientcertarchive`, and `--sslclientcertpassword` during agent configuration.

   ```
   .\config.cmd/sh --sslcacert ca.pem --sslclientcert clientcert.pem --sslclientcertkey clientcert-key-pass.pem --sslclientcertarchive clientcert-archive.pfx --sslclientcertpassword "mypassword"
   ```

   Your client certificate private key password is securely stored on each platform.  

   ```
   Linux: Encrypted with a symmetric key based on the machine ID
   macOS: macOS Keychain
   Windows: Windows Credential Store
   ```

## Verify root certificate authority trust

The build agent uses Node.js, which relies on its own certificate store, which is derived from Mozilla's trusted root certificates. The Node.js certificate authority store must trust any root certificate that you use for secure communication. Otherwise, you might receive the following errors after you update a certificate on the Azure DevOps Server machine:

- "unable to get local issuer certificate"
- "SELF_SIGNED_CERT_IN_CHAIN"
- "unable to verify the first certificate"

You can use the `tls.rootCertificates` array to verify trusted root CAs that you use to verify TLS/SSL connections.  

```bash
# Sample script to extract Node.js root certificates using Node.js.  
node -e ' 
const tls = require("tls"); 
console.log(tls.rootCertificates.join("\n")); 
' > "$ROOT_CERTS_FILE" 
```

To configure Node.js to trust a certificate:

The `NODE_EXTRA_CA_CERTS` environment variable, introduced in Node v7.3.0, allows you to specify a file that contains one or more CA certificates that Node trusts (in addition to the default bundle). `NODE_EXTRA_CA_CERTS` appends to the trust store.

1. Export the certificate in PEM format: On your server or CA, export the root (and any intermediate, if needed) certificates as a PEM-encoded file. This format is a text file with `-----BEGIN CERTIFICATE-----` and Base64 data. Make sure that you use Base64-encoded PEM, and not DER. (On Windows, .CER files can be either; you can rename to .pem to avoid confusion. The file can actually have any extension, but .pem or .crt is standard.) 

   If you have multiple internal CAs (a chain), you can concatenate them into one file. Node reads all certificates in that file.

1. Make the PEM available on the build agent by placing it into a known path (for example `C:\certs\CorpRootCA.pem or /etc/ssl/certs/CorpRootCA.pem`).

1. Set an OS environment variable `NODE_EXTRA_CA_CERTS` that points to the PEM file. For example, you can use PowerShell on Windows:

```
[Environment]::SetEnvironmentVariable("NODE_EXTRA_CA_CERTS", "C:\certs\CorpRootCA.pem", "Machine")
```

## Related content

Learn more about [agent client certificate support](https://github.com/Microsoft/azure-pipelines-agent/blob/master/docs/design/clientcert.md).
