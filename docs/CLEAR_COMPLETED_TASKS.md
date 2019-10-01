## Clear Completed Tasks

In this module, we will remove all the completed tasks when clicking the **Clear Completed** button and approving the deletion in the confirmation lightbox.

HOME page:

<p padding="40px"><img src="assets/clear-completed.png" alt="Clear Completed" width="40%" height="40%"></p>

Lightbox:

<p padding="40px"><img src="assets/confirmation-lightbox.png" alt="Confirmation Lightbox" width="28%" height="28%"></p>

**:bulb: New concepts**

- [WixWindow](https://www.wix.com/corvid/reference/wix-window.html) - Contains functionality that pertains to the current browser window.
- [WixWindow.lightbox](https://www.wix.com/corvid/reference/wix-window.lightbox.html) - API for use in a lightbox front-end code.

**:white_check_mark: Step-by-step directions**

1. Import wixWindow module in the top of the HOME page.

```
import wixWindow from 'wix-window';
```

2. Add a button click event to the **Clear Completed** button.

```
$w('#clearCompletedButton').onClick(async () => {
	// event code here
})
```

3. Call [wixWindow.openLightbox](https://www.wix.com/corvid/reference/wix-window.html#openLightbox) function with the lightbox name **Clear Confirmation**.

```
await wixWindow.openLightbox('Clear Confirmation')
```

4. Go to the lightbox front-end code and import the wixWindow module in the top of the page.

```
import wixWindow from 'wix-window';
```

5. Add button.onClick events to the approve and reject buttons.

```
$w('#approveBtn').onClick(() => {})
$w('#rejectBtn').onClick(() => {})
```

6. Call [wixWIndow.lightbox.close](https://www.wix.com/corvid/reference/wix-window.lightbox.html#close) function with the desired boolean value accoding to the user choice:

```
$w('#approveBtn').onClick(() => {
	wixWindow.lightbox.close(true)
})

$w('#rejectBtn').onClick(() => {
	wixWindow.lightbox.close(false)
})
```

7. Go back to the HOME page and get the value we returned from the lightbox.

```
const shouldClearTasks = await wixWindow.openLightbox('Clear Confirmation')
```

8. If the lightbox returned **true**, we will get all the completed tasks ID's using wixData query. Then, delete all this tasks from the collection using the [wixData.bulkRemove](https://www.wix.com/corvid/reference/wix-data.html#bulkRemove) function.

```
if (shouldClearTasks) {
	const queryResult = await wixData.query('TodoTasks').eq('completed', true).find()
	const completedTasksIds = queryResult.items.map((task) => task._id)
	await wixData.bulkRemove('TodoTasks', completedTasksIds)
}
```

9. Don't forget to call the [dataset.refresh](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#refresh) function to see the new list of tasks.

```
await $w('#dataset1').refresh()
```

:exclamation: **Go to preview, clear your completed tasks and make sure it works!**

:fast_forward: Next Module => [JavaScript Web Modules](JS_WEB_MODULES.md)
