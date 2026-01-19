---
title: Migrate custom check-in policies
titleSuffix: Azure Repos
description: Learn how to migrate custom TFVC check-in policies from PolicyBase to CheckinPolicyBase class
ms.assetid:
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 01/19/2026
monikerRange: 'azure-devops'
ms.subservice: azure-devops-repos-tfvc
---
# Migrate custom check-in policies

> [!WARNING]
> To use the provided migration method do **not** remove the old implementations of the policies prior to following this guide.

1. To migrate your custom policies, first create a new class with the same methods but inheriting `CheckinPolicyBase` class (`IPolicyCompatibilityJson` for `IPolicyCompatibility`) instead of `PolicyBase`.
   
   **Examples:**
      
   **Obsolete:**
   ```csharp
    [Serializable]
    public class Simple : PolicyBase
    {
       public override string Description => "SimplePolicyDescription";
       ...
    }
   ```

   **Updated:**
   ```csharp
    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        public override string Description => "SimplePolicyDescription";
        ...
    }
   ```
2. If `GetBinaryFormatter` was overridden, also implement `GetJsonSerializerSettings` using the same serialization logic. Configure `JsonSerializerSettings` with `TypeNameHandling` set to `Objects`.
   
   **Example:**

   **Obsolete:**
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
   
   **Updated:**
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

   For extensions targeting Visual Studio version 16 and earlier, extra code is required even if `BinaryFormatter` wasn't previously overridden.

   **JsonSerializerSettings for extensions targeting older versions of Visual Studio:**
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
3. Private properties that were previously serialized are skipped in the new policy type. Add `[JsonProperty]` to ensure they're saved to the database.
   
   **Example:**
   ```csharp
    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        [JsonProperty]
        private List<String> pathFilters;
        ...
    }
   ```


4. Replace legacy policy-loading APIs

   Legacy methods such as `GetCheckinPoliciesForServerPaths`/`GetCheckinPolicies`/`SetCheckinPolicies` are obsolete. Use the package's `GetCheckinClientPoliciesForServerPaths`/`GetCheckinClientPolicies`/`SetCheckinClientPolicies` accordingly.

   Automatic policy migration is supported **only for custom policies**. Built-in Visual Studio policies support the new policy model and migration.

   > [!NOTE]
   > Further automigration is available only for custom policies, as standard Visual Studio policies don't support this capability.
   > If you don't plan to use migration method provided by NuGet package, further instructions can be omitted and the obsolete policies can be removed. No more steps are required.

5. Add migration interface to policies

   Add the `IPolicyMigration` interface for each obsolete custom policy.
   This interface marked as deprecated only to signalize that it also will be removed in future together with `PolicyBase` / `IPolicyCompatibility`.

    > [!WARNING]
    > Obsolete policies that don’t inherit this interface is **skipped** during migration and **not** saved as new policies.

6. Implement the `ToNewPolicyType` method on the obsolete policy

   This method must:
   - Return an instance of the new policy class
   - Populate the new instance using values from the obsolete policy

   **Example:**
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
7. Call `MigrateFromOldPolicies` method

