## Add functionality for adding a new task

The flow of adding a new task:

<p><img src="assets/add-new-task-flow.png" alt="Add New Task Flow"></p>

We will now start writing our home page frontend code in the Velo integrated IDE.

**:bulb: New concepts**

- [$w](https://www.wix.com/velo/reference/$w.html#$w) - Selects and returns elements from a page.
- [WixData](https://www.wix.com/velo/reference/wix-data.html) - Functionality for working with data in collections.
- Event handlers for [Button.onClick](https://www.wix.com/velo/reference/$w.Button.html#onClick) and [TextInput.onKeypress](https://www.wix.com/velo/reference/$w/textinput/onkeypress).

**:white_check_mark: Step-by-step directions**

1. Let's add some useful imports and variables to the HOME page. We'll use these along with other imports later so it's useful to add them now.

```js
import wixData from 'wix-data';

const TODO_COLLECTION = 'TodoTasks'
const TODO_DATASET = '#dataset1';
```

2. Now create a function to handle adding a new task

```js
// Handle adding a new task
async function addNewTask() {
    const taskTitle = $w('#taskInput').value;
	$w('#taskInput').value = "";

    if (taskTitle.trim() === '') {
        return;
    }

    const newTask = {
        title: taskTitle,
        completed: false
    }

    await wixData.insert(TODO_COLLECTION, newTask);
    $w(TODO_DATASET).refresh();
}
```

This function will do several things:
- Gets the text entered into the `#taskInput` element.
- Immediately clears the element to indicate to the user that the item was submitted, and make it clear for the next entry.
- Checks to make sure the task entered is not empty.
- Prepares a `newTask` and `insert()` it into the `TODO_COLLECTION`.
- `refresh()` the `TODO_DATASET` so it can display the new item inserted into the `TODO_COLLECTION`.

3. We'll want to call this function on two different events. One when someone clicks our `#addTaskButton` and the other when they hit enter while their typing cursor is inside the `#taskInput` element.

```js
    // Event handlers for adding a task
    $w('#addTaskButton').onClick(addNewTask);

    $w('#taskInput').onKeyPress(async (event) => {
        if (event.key === 'Enter') addNewTask();
    });
```

:exclamation: **Go to preview, Add a new task, make sure it is being shown in the repeater.**

:fast_forward: Next Module => [Add functionality for changing the task status](CHANGE_TASK_STATUS.md)
