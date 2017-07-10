#### Which builds should I use? 

If you are new to Team Foundation Server (TFS) and Visual Studio Team Services, you should use this new system. Most customers with experience using TFS and XAML builds will also get better outcomes by using the new system. 

The new builds are web- and script-based, and highly customizable. They leave behind many of the problems and limitations of the XAML builds. For example, this new system embraces the diverse set of domain-specific languages (DSLs) that developers used to build the code on their dev machines. We expect this will reduce the chances of running into the "builds fine on my machine but not on the CI server" problem.

If you have heavily customized XAML builds and custom activities, you can continue using those builds until you are ready to port your business logic into scripts that can run in the new builds.

