---
title: VSS/Common/Contracts/System.Data SqlDbType API | Extensions for Azure DevOps Services
description: Specifies SQL Server-specific data type of a field, property, for use in a System.Data.SqlClient.SqlParameter.
ms.assetid: 32e64e0a-65fb-56dd-512c-0de496068625
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# SqlDbType

Module path: `VSS/Common/Contracts/System.Data`

### Values

* `BigInt` A 64-bit signed integer.

* `Binary` Array of type Byte. A fixed-length stream of binary data ranging between 1 and 8,000 bytes.

* `Bit` Boolean. An unsigned numeric value that can be 0, 1, or null.

* `Char` String. A fixed-length stream of non-Unicode characters ranging between 1 and 8,000 characters.

* `DateTime` DateTime. Date and time data ranging in value from January 1, 1753 to December 31, 9999 to an accuracy of 3.33 milliseconds.

* `Decimal` Decimal. A fixed precision and scale numeric value between -10 38 -1 and 10 38 -1.

* `Float` Double. A floating point number within the range of -1.79E +308 through 1.79E +308.

* `Image` Array of type Byte. A variable-length stream of binary data ranging from 0 to 2 31 -1 (or 2,147,483,647) bytes.

* `Int` Int32. A 32-bit signed integer.

* `Money` Decimal. A currency value ranging from -2 63 (or -9,223,372,036,854,775,808) to 2 63 -1 (or +9,223,372,036,854,775,807) with an accuracy to a ten-thousandth of a currency unit.

* `NChar` String. A fixed-length stream of Unicode characters ranging between 1 and 4,000 characters.

* `NText` String. A variable-length stream of Unicode data with a maximum length of 2 30 - 1 (or 1,073,741,823) characters.

* `NVarChar` String. A variable-length stream of Unicode characters ranging between 1 and 4,000 characters. Implicit conversion fails if the string is greater than 4,000 characters. Explicitly set the object when working with strings longer than 4,000 characters. Use System.Data.SqlDbType.NVarChar when the database column is nvarchar(max).

* `Real` Single. A floating point number within the range of -3.40E +38 through 3.40E +38.

* `UniqueIdentifier` Guid. A globally unique identifier (or GUID).

* `SmallDateTime` DateTime. Date and time data ranging in value from January 1, 1900 to June 6, 2079 to an accuracy of one minute.

* `SmallInt` Int16. A 16-bit signed integer.

* `SmallMoney` Decimal. A currency value ranging from -214,748.3648 to +214,748.3647 with an accuracy to a ten-thousandth of a currency unit.

* `Text` String. A variable-length stream of non-Unicode data with a maximum length of 2 31 -1 (or 2,147,483,647) characters.

* `Timestamp` Array of type System.Byte. Automatically generated binary numbers, which are guaranteed to be unique within a database. timestamp is used typically as a mechanism for version-stamping table rows. The storage size is 8 bytes.

* `TinyInt` Byte. An 8-bit unsigned integer.

* `VarBinary` Array of type Byte. A variable-length stream of binary data ranging between 1 and 8,000 bytes. Implicit conversion fails if the byte array is greater than 8,000 bytes. Explicitly set the object when working with byte arrays larger than 8,000 bytes.

* `VarChar` String. A variable-length stream of non-Unicode characters ranging between 1 and 8,000 characters. Use System.Data.SqlDbType.VarChar when the database column is varchar(max).

* `Variant` Object. A special data type that can contain numeric, string, binary, or date data as well as the SQL Server values Empty and Null, which is assumed if no other type is declared.

* `Xml` An XML value. Obtain the XML as a string using the System.Data.SqlClient.SqlDataReader.GetValue(System.Int32) method or System.Data.SqlTypes.SqlXml.Value property, or as an System.Xml.XmlReader by calling the System.Data.SqlTypes.SqlXml.CreateReader method.

* `Udt` A SQL Server user-defined type (UDT).

* `Structured` A special data type for specifying structured data contained in table-valued parameters.

* `Date` Date data ranging in value from January 1,1 AD through December 31, 9999 AD.

* `Time` Time data based on a 24-hour clock. Time value range is 00:00:00 through 23:59:59.9999999 with an accuracy of 100 nanoseconds. Corresponds to a SQL Server time value.

* `DateTime2` Date and time data. Date value range is from January 1,1 AD through December 31, 9999 AD. Time value range is 00:00:00 through 23:59:59.9999999 with an accuracy of 100 nanoseconds.

* `DateTimeOffset` Date and time data with time zone awareness. Date value range is from January 1,1 AD through December 31, 9999 AD. Time value range is 00:00:00 through 23:59:59.9999999 with an accuracy of 100 nanoseconds. Time zone value range is -14:00 through +14:00.

