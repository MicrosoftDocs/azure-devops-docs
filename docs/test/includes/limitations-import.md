---
ms.topic: include
---
##  Limitations

- The test case state column must be in **Design** state.
- The test case title **length** must not exceed **128** characters. 
- There is a **limit of 20 MB** on JSON objects which get created during import and export. If the import fails, try the operation with small subset of the test cases.
- The user performing the import must have permission on area and iteration paths for test plan and test suite which they are planning to import or export.
- **Copy** and **Import** operations fail if the related link count exceeds 1000 for the test case.
