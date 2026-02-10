---
title: Migrate Custom Check-in Policies
titleSuffix: Azure Repos
description: Learn how to migrate custom TFVC check-in policies from one class to anotherPolicyBase to CheckinPolicyBase class.
ms.assetid:
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 01/19/2026
monikerRange: 'azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Migrate check-in policies

Here's how to migrate your custom check-in policies in Team Foundation Version Control (TFVC). You can update code, you can use a predefined method for further automigration, and you can use a workaround to remove obsolete policies.

> [!IMPORTANT]
> Don't delete your existing policies before completing the migration steps. Complete the migration steps first.

## Code updates

To migrate your custom policies:

1. Create a new class with the same methods, but inheriting the `CheckinPolicyBase` class (`IPolicyCompatibilityJson` for `IPolicyCompatibility`) instead of the `PolicyBase` class.  
For example, change:

   ```csharp
    [Serializable]
    public class Simple : PolicyBase
    {
       public override string Description => "SimplePolicyDescription";
       ...
    }
   ```

   To:

   ```csharp
    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        public override string Description => "SimplePolicyDescription";
        ...
    }
   ```

1. If `GetBinaryFormatter` was overridden, also implement `GetJsonSerializerSettings`. Use the same serialization logic. Configure `JsonSerializerSettings`, with `TypeNameHandling` set to `Objects`.
   For example, change:

   ```csharp
    [Serializable]
    public class Simple : PolicyBase
    {
        public override BinaryFormatter GetBinaryFormatter()
        {
            BinaryFormatter formatter = new BinaryFormatter();
            formatter.Binder = new SimpleBinder();
            return formatter;
        }
        ...
    }
   ```

   To:

   ```csharp
    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        public override JsonSerializerSettings GetJsonSerializerSettings()
        {
            return new JsonSerializerSettings()
            {
                SerializationBinder = new SimpleNewSerializationBinder(),
                TypeNameHandling = TypeNameHandling.Objects
            };
        }
        ...
    }
   ```

   For extensions that target Visual Studio version 16 and earlier, the following extra code is required, even if `BinaryFormatter` wasn't previously overridden.

   ```csharp
    public class CheckinSerializationBinder : ISerializationBinder
    {
        public void BindToName(Type serializedType, out string assemblyName, out string typeName)
        {
            Assembly assembly = serializedType.Assembly;
            assemblyName = assembly.FullName;
            typeName = serializedType.FullName;
        }

        public Type BindToType(string assemblyName, string typeName)
        {
            throw new NotImplementedException();
        }
    }

    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        public override JsonSerializerSettings GetJsonSerializerSettings()
        {
            return new JsonSerializerSettings()
            {
                SerializationBinder = new CheckinSerializationBinder(),
                TypeNameHandling = TypeNameHandling.Objects
            };
        }
        ...
    }
   ```

1. In the new policy type, skip private properties that were previously serialized. Add `[JsonProperty]` to ensure they're saved to the database.

   For example:

   ```csharp
    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        [JsonProperty]
        private List<String> pathFilters;
        ...
    }
   ```

1. Replace legacy policy-loading APIs.

   For example, the following legacy methods are obsolete: `GetCheckinPoliciesForServerPaths`, `GetCheckinPolicies`, and `SetCheckinPolicies`. Use the following methods from the package, accordingly: `GetCheckinClientPoliciesForServerPaths`, `GetCheckinClientPolicies`, and `SetCheckinClientPolicies`.  
   Automatic policy migration is supported only for custom policies. Built-in Visual Studio policies support the new policy model and migration.

## Use a predefined method to migrate policies on server

Further automigration is available only for custom policies. Standard Visual Studio policies don't support this capability. If you don't plan to use the migration method provided by a NuGet package, you can skip this section, and proceed to the next section in this article.

1. Add the `IPolicyMigration` interface for each obsolete custom policy. This interface is marked as deprecated only to indicate that its status is similar to `PolicyBase` and `IPolicyCompatibility`.

    > [!IMPORTANT]
    > Obsolete policies that don’t inherit this interface are skipped during migration. They're not saved as new policies.

1. Implement the `ToNewPolicyType` method on the obsolete policy. This method must:
   - Return an instance of the new policy class.
   - Populate the new instance with values from the obsolete policy.

   For example:

   ```csharp
    [Serializable]
    public class Simple : PolicyBase, IPolicyMigration
    {
        ...
        public CheckinPolicyBase ToNewPolicyType()
        {
            return new SimpleNew();
        }
    }
   ```

1. Call the `MigrateFromOldPolicies` method.

## Remove existing obsolete policies

The following steps are a way to remove existing obsolete policies when the server fully disables them, including read and write operations.

1. Create an empty C# project.

1. Add a dependency to [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/latest).

1. Connect to your project by using the `ExtendedClient` package. For example:

   ```csharp
    var collectionUri = "{UrlToYourCollection}";
    var currentProjectName = "{YourProjectName}";
    using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri)))
    {
        ... // Further code here
    }
   ```

1. Connect to the TFVC service and set obsolete checking policies to null. For example:

   ```csharp
    var versionControlServer = tpc.GetService<VersionControlServer>();
    TeamProject teamProject = versionControlServer.GetTeamProject(currentProjectName);
    teamProject.SetCheckinPolicies(null);
   ```

1. Run the application.
