To create a publisher using the TFS Cross Platform Command Line Interface, simply run the following command, replacing each argument with the necessary value.

<pre>tfx extension publisher create</pre>

> [!NOTE]
> The `Publisher name` must match the publisher property in your extension manifest.

#### Example

<pre>C:\tfs-cli>tfx extension publisher create 
Copyright Microsoft Corporation
> Publisher name: Fabrikam
> Display name: Fabrikam, Inc.
> Description: Fabrikam's main publisher

=== Completed operation: create publisher ===
 - Name: Fabrikam
 - Display Name: Fabrikam, Inc.
 - Description: Fabrikam's main publisher</pre>
