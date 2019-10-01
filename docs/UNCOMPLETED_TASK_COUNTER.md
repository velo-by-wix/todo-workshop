## Uncompleted Tasks Counter

In this module, we will present the remaining uncompleted tasks counter in the text element above our tasks repeater.

<p padding="40px"><img src="assets/uncompleted-task-counter.png" alt="Uncompleted Task Counter" width="40%" height="40%"></p>

**:bulb: New concepts**
- [WixDataQuery](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html) - Contains functionality for refining a data query.

**:white_check_mark: Step-by-step directions**

1. Add an async function that will update the task counter.

```
async function updateActiveTaskCount() {
	// function code here
}
```

2. Add a query that will use the condition [eq](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#eq) to retrieve the amount of the uncompletted tasks from the collection.

```
async function updateActiveTaskCount() {
	const activeTaskCount = await wixData.query('TodoTasks')
		.eq('completed', false)
		.or(wixData.query('TodoTasks')
			.eq('completed', null))
		.count()
})
```

3. Udate the task counter [text element](https://www.wix.com/corvid/reference/$w.Text.html#text) according to the query result.

```
async function updateActiveTaskCount() {
	// get activeTaskCount here

	let activeTaskText
	switch (activeTaskCount) {
	case 0:
		activeTaskText = 'Completed all tasks'
		break;
	case 1:
		activeTaskText = '1 item left'
		break;
	default:
		activeTaskText = `${activeTaskCount} items left`
		break;
	}

	$w('#activeTasksCount').text = activeTaskText
}
```

4. Call updateActiveTaskCount in:

- The end of addNewTask function
- The begining of \$w.onReady function
- In the end of changing the task status in checkbox onChange event

:exclamation: **Go to preview, play with the completed status of the tasks and make sure the counter is updated.**

:fast_forward: Next Module => [Tasks Filter](TASK_FILTER.md)
