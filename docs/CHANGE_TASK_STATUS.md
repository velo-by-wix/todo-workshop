## Add functionality for changing the task status

The flow of changing the task completed status:

<p padding="40px"><img src="assets/change-task-status-flow.png" alt="Change Task Status Flow" width="25%" height="25%"></p>

**:white_check_mark: Step-by-step directions**

1. Add an [onChange](https://www.wix.com/velo/reference/$w.Checkbox.html#onChange) event for the checkbox inside the repeater and extract the **checked** property of the checkbox.

```
$w('#completedCheckbox').onChange((event) => {
	const checked = event.target.checked
})
```

:warning: You can also add a new event from the [peroperties panel](https://support.wix.com/en/article/velo-working-with-the-properties-panel).

2. In order to update the current task item with the new checkbox status, we need to initialy get the item from the collection. For that, we need to extract the item ID from the [context](https://www.wix.com/velo/reference/$w.Event.html#context) in our [event object](https://www.wix.com/velo/reference/$w.Event.html).

```
const itemId = event.context.itemId
```

3. Now we will use [wix-data.get](https://www.wix.com/velo/reference/wix-data.html#get) function to get the item, and [wix-data.update](https://www.wix.com/velo/reference/wix-data.html#update) function to update it with the new value.

```
const item = await wixData.get('TodoTasks', itemId)
const updatedItem = Object.assign({}, item, { completed: checked })
await wixData.update('TodoTasks', updatedItem)
```

:warning: You will be required to async the onChange event function since wix-data get and update functions are asynchronous.

:exclamation: **Go to preview, change some of the task completed status. Go back to tthe db collection and make sure it is actually changed.**

:fast_forward: Next Module => [Uncompleted Tasks Counter](UNCOMPLETED_TASK_COUNTER.md)
