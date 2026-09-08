---
ms.topic: include
---
##  Limitations

- For new test cases, the state must belong to the `Proposed` state category for your process. For existing test cases, the state must be the current state or a valid next state defined by the workflow.
- The test case title **length** must not exceed **128** characters. 
- There's a **limit of 20 MB** on JSON objects created during import and export. If the import fails, try the operation with small subset of the test cases.
- The user performing the import must have permissions on the area and iteration paths for test plan and test suite they're planning to import or export.
- **Copy** and **Import** operations fail if the related link count exceeds 1000 for the test case.
