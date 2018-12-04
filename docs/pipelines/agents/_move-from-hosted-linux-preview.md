---
ms.topic: include
---

The **Hosted Linux Preview** pool has been deprecated since December 1, 2018, and is being removed in waves.
You must move your pipelines to the **Hosted Ubuntu 1604** pool.

### How do I move my builds?

You'll need to change the pool or queue. You might need to also change a few other things.

If you have scripts that assume that they're running as root, then you'll need to change them to use `sudo`.
If your pipeline assumes that its agent is running in a container, then you'll need to remove that assumption.


#### Point at the new pool

# [YAML](#tab/yaml)

Pipelines that use `queue: 'Hosted Linux Preview'` need to be changed to the new `pool` syntax.
`queue` has been split into two focused sections: `pool` and `strategy`.
`pool` specifies which agent pool receives the build.
`strategy` specifies if and how the system should create multiple instances of the jobs you specify.

#### Example: Pool name only

```yaml
# Before
queue: 'Hosted Linux Preview'

# After
pool:
  vmImage: 'ubuntu-16.04'
```

#### Example: Pool name with a matrix

```yaml
# Before
queue: 'Hosted Linux Preview'
matrix:
  entry1:
    var: value1
  entry2:
    var: value2

# After
## The matrix syntax has not changed, but it has moved under a `strategy` keyword
pool:
  vmImage: 'ubuntu-16.04'
strategy:
  matrix:
    entry1:
      var: value1
    entry2:
      var: value2
```

#### Example: Pool name with a matrix and parallelism

```yaml
# Before
queue: 'Hosted Linux Preview'
parallel: 2
matrix:
  entry1:
    var: value1
  entry2:
    var: value2

# After
## The keyword `parallel` has been replaced by `maxParallel` and moved under the strategy node
pool:
  vmImage: 'ubuntu-16.04'
strategy:
  maxParallel: 2
  matrix:
    entry1:
      var: value1
    entry2:
      var: value2
```

# [Designer](#tab/designer)

1. Edit your pipeline.

1. On the **Tasks** tab, choose the **Pipeline** section.

1. From the **Agent pool** drop-down menu, change the pipeline to **Hosted Ubuntu 1604**.

---

#### Remove user assumptions

If you run tools that require root access, then you'll instead need to run them using `sudo`. 
For example, if you have a script like this:

```bash
apt-get update && apt-get install foo
```

Then you'll need to update it to invoke `sudo`:

```bash
sudo apt-get update && sudo apt-get install foo
```

#### Remove container assumptions

*This is not common.*

If your pipeline works with Docker containers, then you may be running commands to account for the agent itself running in a container.
On the **Hosted Ubuntu 1604** pool, the agent no longer runs in a container.
Typically, this means you can remove parameters or even entire commands from your Docker interactions.

### Why is this changing?

The **Hosted Linux Preview** pool ran agents inside a container.
If you weren't aware that the agent was in a container, your pipelines would fail in surprising ways if you tried to operate on containers. 
For example, you could successfully instantiate another container, but because the agent and new containers weren't networked together, you couldn't communicate between them.

The **Hosted Ubuntu 1604** pool uses a more typical model that matches the other hosted pools.
The agent runs on the host VM.
When you start a container from the agent, the host is networked to the container automatically.

### What will happen if I don't move?

On December 1, 2018, your pipelines that attempt to queue for the **Hosted Linux Preview** pool will fail.
