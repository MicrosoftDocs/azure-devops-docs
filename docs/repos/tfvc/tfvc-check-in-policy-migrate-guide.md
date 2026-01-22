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

The guidance below explains how to migrate your obsolete policies, so your development workflows continue without interruption. See [TFVC policy updates](https://devblogs.microsoft.com/devops/tfvc-policies-storage-updates/#phase-iii-%E2%80%93-full-disabling-(~-january-2026)) for further details.

----------------------------------------------------

## Required code changes

### Step 1: Replace `PolicyBase` with `CheckinPolicyBase`
To migrate your custom policies, first create a new class with the same methods but inheriting `CheckinPolicyBase` class (`IPolicyCompatibilityJson` for `IPolicyCompatibility`) instead of `PolicyBase`.
   
- **Example:**
   
   **Obsolete: `PolicyBase`**
   ```csharp
    [Serializable]
    public class Simple : PolicyBase
    {
       public override string Description => "SimplePolicyDescription";
       ...
    }
   ```

   **Updated: `CheckinPolicyBase`**
   ```csharp
    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        public override string Description => "SimplePolicyDescription";
        ...
    }
      ```
### Step 2: If `GetBinaryFormatter` was overridden
Also implement `GetJsonSerializerSettings` using the same serialization logic. Configure `JsonSerializerSettings` with `TypeNameHandling` set to `Objects`.
   
- **Example:**

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

### Step 3: Extensions targeting Visual Studio version 16 or earlier
If your extensions are targeting Visual Studio version 16 or earlier, there are additional changes required. This change is required even if `BinaryFormatter` wasn't previously overridden, see below example.

- **Example**
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
### Step 4: Private properties 
Private properties that were previously serialized are skipped in the new policy type. Add `[JsonProperty]` to ensure they're saved to the database.
   
- **Example:**
   ```csharp
    [Serializable]
    public class SimpleNew : CheckinPolicyBase
    {
        [JsonProperty]
        private List<String> pathFilters;
        ...
    }
   ```


### Step 5: Replace legacy policy-loading APIs
Legacy methods such as `GetCheckinPoliciesForServerPaths`/`GetCheckinPolicies`/`SetCheckinPolicies` are now obsolete.
To migrate, use the package's `GetCheckinClientPoliciesForServerPaths`/`GetCheckinClientPolicies`/`SetCheckinClientPolicies` accordingly.

----------------------------------

## Using predefined methods to migrate policies
   > [!NOTE]
   > Automatic policy migration is supported **only for custom policies**, as standard Visual Studio policies don't support this capability.
   > If you don't plan to use the migration method provided by NuGet package, no further steps are required.

To remove obsolete custom policies via code, follow further steps in this guide.

1. Add migration interface to policies
Add the `IPolicyMigration` interface for each obsolete custom policy.
- This interface is marked as deprecated, only to signalize that it also will be removed in future together with `PolicyBase` / `IPolicyCompatibility`.

    > [!WARNING]
    > Obsolete policies that don’t inherit this interface are **skipped** during migration and will **not** be saved as new policies.

2. Implement the `ToNewPolicyType` method on the obsolete policy
This method must:
1. Return an instance of the new policy class
2. Populate the new instance using values from the obsolete policy

  - **Example:**
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
      
3. Call `MigrateFromOldPolicies` method

## Removing existing obsolete policies
  > [!WARNING]
  > This part of the guide is a **workaround** to remove existing obsolete policies when server fully (read and write operations) disables them and before Visual Studio team implements UI solution.

1. Create an empty C# project

2. Add dependency to [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/latest).

3. Connect to your project using `ExtendedClient` package. You can do it several ways. Here's example for one of them.

- **Example:**
   ```csharp
    var collectionUri = "{UrlToYourCollection}";
    var currentProjectName = "{YourProjectName}";
    using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri)))
    {
        ... // Further code here
    }
   ```

4. Connect to the TFVC service and set obsolete checking policies to null.
- **Example:**
   ```csharp
    var versionControlServer = tpc.GetService<VersionControlServer>();
    TeamProject teamProject = versionControlServer.GetTeamProject(currentProjectName);
    teamProject.SetCheckinPolicies(null);
   ```

5. Run the application.
