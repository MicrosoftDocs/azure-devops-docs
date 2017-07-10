Team Foundation Server can scale from an Express installation on a laptop 
used by a single person all the way up to a highly available deployment used 
by thousands of people and comprising multiple application tiers behind a 
load balancer, multiple SQL instances using SQL Always On, etc. The 
following recommendations should apply to most TFS deployments, but your 
requirements may vary depending on the usage of your team. For example, if 
you have particularly large Git repositories or Team Foundation Version 
Control branches, you may need higher spec machines that what are listed 
below. Note that all of the machines discussed below could be either 
physical or virtual.

### Single Server deployment

A single machine, with one dual-core processor, 4 GB of RAM, and a fast hard 
disk drive. This configuration should support up to 250 users of core source 
control (TF VC or Git) and work item tracking functionality. Extensive use of 
automated build, test, or release would likely cause performance issues. Use 
of search or reporting features would not be recommended with this configuration.

Scaling a single server up can enable it to handle a larger number of users; 
increased use of automated build, test, or release; and/or use of search or 
reporting features. For example, increasing RAM to 8 GB should enable
a single server deployment to scale up to 500 users.

For evaluation or personal use, you can use a a basic configuration with as
little as 1 GB of RAM, but clearly this would not be recommended for a 
production server used by more than one person.

### Multi Server deployments

Scaling beyond 500 users; enabling extensive use of automated build, test, or release; 
enabling use of Code Search; enabling use of reporting features; or enabling SharePoint 
integration typically requires expanding to a multiple server deployment.
 
For a team of more than 500 users, consider:

- An application tier with one dual-core processor, 8 GB of memory, and a 
fast hard disk drive.
- A data tier with one quad-core processor, 8 GB of memory, and high
performance storage such as an SSD.

For a team of more than 2,000 users, consider:

- An application tier with one quad-core processor, 16 GB or more of memory, 
and a fast hard disk drive.
- A data tier with two or more quad-core processors, 16 GB or more of memory, 
and very high performance storage (SSD, high performance SAN, etc.).

If you plan to extensively use build, test, or release automation, we 
recommend using higher spec application and data tiers to avoid performance 
issues. For example, a team of 250 might use a multiple server deployment 
that is more in line with the recommendations for a team of 500-2,000 users. We also 
recommend that you keep an eye on your automated processes to ensure that 
they are efficient – for example, retrieve data from source control 
incrementally during builds whenever possible, rather than fully refreshing 
on each build. NOTE: except for very small teams with extremely limited usage 
of these features we do not recommend installing build, test, or release 
agents on your TFS application tiers.

If you plan to use Code Search, we typically recommend setting up a separate server for it. 
For more details, see 
[hardware requirements for Code Search](../../search/code/administration.md#hardware-recommendations).

If you plan to use reporting features, we recommend setting up a separate 
server for your warehouse database and Analysis Services cube or using a 
higher spec data tier.

If you plan to use SharePoint integration, we recommend setting up a separate 
server for your SharePoint instance or using a higher spec application tier. 

If you want to guarantee high availability, you should consider multiple 
application tiers behind a load balancer and multiple SQL instances with your 
TFS DBs in an Always On availability group.