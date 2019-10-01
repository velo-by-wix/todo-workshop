## Tasks Filter

In this module, we will add a filter for our tasks by the tasks completed status.

<p padding="40px"><img src="assets/tasks-filter.png" alt="Tasks Filter" width="40%" height="40%"></p>

**:bulb: New concepts**
- [WixDataFilter](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html) - Provides functionality for filtering a query.

**:white_check_mark: Step-by-step directions**

1. Add a [radioButtonGroup.onChange](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html#onChange) event for the filter [radio group](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html) element.

```
$w('#filterRadioGroup').onChange(() => {
	// event code here
})
```

2. Get the filter value from the [radioButtonGroup.value](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html#value) getter.

```
const filterValue = $w('#filterRadioGroup').value
```

3. Create the filter using the [eq](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#eq) condition.

```
let filter
switch (filterValue) {
    case 'Completed':
        filter = wixData.filter().eq('completed', true)
        break;
    case 'Active':
        filter = wixData.filter().eq('completed', false)
        break;
    case 'All Tasks':
        filter = wixData.filter()
        break;
}

```

4. Pass the filter to the [dataset.setFilter](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#setFilter) function.

```
await $w('#dataset1').setFilter(filter)
```

5. Extract to async functiton => filterTasks.

```
async function filterTasks() {
	const filterValue = $w('#filterRadioGroup').value

	let filter
	switch (filterValue) {
	case 'Completed':
		filter = wixData.filter().eq('completed', true)
		break;
	case 'Active':
		filter = wixData.filter().eq('completed', false)
		break;
	case 'All Tasks':
		filter = wixData.filter()
		break;
	}

	await $w('#dataset1').setFilter(filter)
}
```

6. Call filterTasks() in

- Radio button group onChange event
- The end of addNewTask function
- The end of changing the task status in checkbox onChange event

:warning: You can use Promise.all() in order to execute the two async functions in the same time.

```
await Promise.all([updateActiveTaskCount(), filterTasks()])
```

:exclamation: **Go to preview, make sure the tasks are filtered according to the desired filter.**

:fast_forward: Next Module => [Clear Completed Tasks](CLEAR_COMPLETED_TASKS.md)
