## Tasks Filter

In this module, we will add a filter so that users can filter their tasks by their task completed status.

<p><img src="assets/tasks-filter.png" alt="Tasks Filter"></p>

**:bulb: New concepts**
- [WixDataFilter](https://www.wix.com/velo/reference/wix-data.WixDataFilter.html): Provides functionality for filtering a Dataset.

**:white_check_mark: Step-by-step directions**

1. Our element that lets us select between various radio buttons is called a `RadioButtonGroup`. If we go and [look at the docs for it](https://www.wix.com/velo/reference/$w/radiobuttongroup/onchange) we'll see that in the event that the element is changed we'll be able to access its new value with `event.target.value`. Here the value will be set to the same text as the label on the selected Radio Button. Knowing these two pieces of information we can write our function to handle filtering:

```js
// Filter the dataset based on the filter value selected
function setDatasetFilter(event) {
    let filterValue = event.target.value;
    let filter;

    switch (filterValue) {
    case 'Completed':
        filter = wixData.filter().eq('completed', true);
        break;
    case 'Active':
        filter = wixData.filter().eq('completed', false);
        break;
    default:
        filter = wixData.filter();
        break;
    }

    $w(TODO_DATASET).setFilter(filter);
}
```

You'll notice `filter` is defined similarly to our `wixData.query()` earlier where we use functions like `eq` to find rows in our Data Collection that match our criteria. However unlike the earlier query we apply the filter slightly differently using [`DataSet.setFilter()`](https://www.wix.com/velo/reference/wix-dataset/dataset/setfilter).


2. Now we'll hook it up with a simple event handler in our `$w.onReady()` like always:

```js
    // Event handler for updating dataset filter
    $w('#filterRadioGroup').onChange(setDatasetFilter);
```

:exclamation: **Go to preview and select a filter. Did it work? Does it update when you add a new task? How about when you set the filter to "Active" and mark a task completed. Does the task get hidden?**

:fast_forward: Next Module => [Clear Completed Tasks](CLEAR_COMPLETED_TASKS.md)
