#### Q: Which versions of Visual Studio can I use with Azure DevOps?

A: You can use:

* Visual Studio 2017
* Visual Studio 2015
* Visual Studio 2013
* Visual Studio 2012
* Visual Studio 2010, 
which requires [Service Pack 1](https://www.microsoft.com/download/details.aspx?id=29082) 
and [KB2662296](http://support.microsoft.com/kb/2662296)
* Visual Studio 2008 SP1, which requires a [GDR update](http://support.microsoft.com/kb/2673642)

To connect to Azure DevOps with Visual Studio 2008 through Visual Studio 2012:

1.	Start Visual Studio.
2.	From the **Team** menu or Team Explorer, 
go to **Connect to Team Foundation Server** > **Select Team Projects** > **Servers**.
3.	Add your organization ({yourorganization}.visualstudio.com).
4.	Select your project and finish connecting.

If you get connection errors, try choosing HTTPS as your protocol.

To connect to Azure DevOps with Visual Studio 2015 and later, 
learn [how to connect to team projects](/azure/devops/organizations/projects/connect-to-projects). 
