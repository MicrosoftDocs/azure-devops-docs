---
title: Migrate custom obsolete check-in policy
titleSuffix: Azure Repos
description: How to migrate custom obsolete check-in policy
ms.assetid:
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 03/27/2025
monikerRange: 'azure-devops'
ms.subservice: azure-devops-repos-tfvc
---
# Migrate custom check-in policy
> [!WARNING]
> To use the provided migration method you must not remove the old implementations of the policies prior to following this guide.

1.	To migrate your custom policies, you should first create a new class with the same methods but inheriting `CheckinPolicyBase` class (`IPolicyCompatibilityJson` for `IPolicyCompatibility`) instead of `PolicyBase`.
      Examples:
      
Obsolete:
```
    [Serializable]
    public class Simple : PolicyBase
    {
       public override string Description => "SimplePolicyDescription";
       ...
    }
```

Updated:
```
    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        public override string Description => "SimplePolicyDescription";
        ...
    }
```
2.	If `GetBinaryFormatter` was overridden, then also implement `GetJsonSerializerSettings` with same logic for serialization. It is also important for your JsonSerializerSettings to have `TypeNameHandling` equal to `Object`.
      Example:

Obsolete:
```
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
Updated:
```
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

For extensions for Visual Studio of version 16 and below you will require further code even if BinaryFormatter was not overwritten before.

JsonSerializerSettings for extensions of older versions of Visual Studio:
```
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
3. Be aware that private properties that were serialized before will be skipped in new policies type. Be sure to add `[JsonProperty]` for them to be saved into database.
Example:
``` 
    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        [JsonProperty]
        private List<String> pathFilters;
        ...
    }
```

4. Instead of the old methods like `GetCheckinPoliciesForServerPaths`/`GetCheckinPolicies`/`SetCheckinPolicies` new ones were introduced: `GetCheckinClientPoliciesForServerPaths`/`GetCheckinClientPolicies`/`SetCheckinClientPolicies` accordingly.
For example, default behavior right now for the `LoadPolicies` method in the package is to use new policies if they are created/available and obsolete ones in case they are absent.
> [!NOTE]
> Further auto-migration can be used only for your custom policies since standard Visual Studio policies do not support it.
> If you are not planning to use the migration method provided by NuGet package, further instructions can be omitted and obsolete policies can be removed, you are done, congratulations!

5. For your obsolete policy add `IPolicyMigration` (This interface marked as deprecated only to show that it will be removed as unnecessary together with `PolicyBase` and `IPolicyCompatibility`).
> [!WARNING]
> Obsolete policies that don’t inherit this interface will be **skipped** during migration and **not** saved as new policies.

6.	Implement `ToNewPolicyType` from the mentioned interface. It should return the instance of the newly created policy class that is based on currently modified policy.
      Example:
```
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
7.	Call `MigrateFromOldPolicies` method.


You are done, congratulations!
