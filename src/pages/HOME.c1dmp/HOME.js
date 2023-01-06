import wixData from 'wix-data';
import wixWindow from 'wix-window';

import { authentication } from 'wix-members';
import { getQuote } from "backend/motivation.jsw";

const TODO_COLLECTION = 'TodoTasks'
const TODO_DATASET = '#dataset1';

$w.onReady(async function () {
    // Event handlers for adding a task
    $w('#addTaskButton').onClick(addNewTask);

    $w('#taskInput').onKeyPress(async (event) => {
        const { key } = event;

        if (key === 'Enter') addNewTask();
    });

    // Event handler for updating dataset filter
    $w('#filterRadioGroup').onChange((event) => setDatasetFilter(event.target.value));

    // Event handler for when a todo's completed status is changed
    $w('#completedSwitch').onChange(async (event) => {
        await handleSwitchChange(event);

        getIncompleteTodoCount();

        $w(TODO_DATASET).refresh();
    });

    // Event handler for when a user wants to clear completed tasks
    $w('#clearCompletedButton').onClick(async () => {
        let confirmed = await wixWindow.openLightbox('Clear Confirmation');

        if (confirmed) {
            clearCompletedTasks();
        }
    })

    // Setup the page/init on both page render and login
    // Login doesn't trigger a new page render
    authentication.onLogin(init)
    init();
});

// Initialize the page with data that we need
// but don't get through the dataset
async function init() {
    getIncompleteTodoCount();
    if (wixWindow.rendering.env === 'browser') {
        $w('#tagline').text = await getQuote();
        $w('#tagline').show("float");
    }
}

// Handle adding a new task
async function addNewTask() {
    const taskTitle = $w('#taskInput').value;
    if (taskTitle.trim() === '') {
        return;
    }

    const newTask = {
        title: taskTitle,
        completed: false
    }

    $w('#taskInput').disable();

    await wixData.insert(TODO_COLLECTION, newTask);
    $w(TODO_DATASET).refresh();

    $w('#taskInput').value = "";
    $w('#taskInput').enable();
}

// Update the collection when a todo's completed status is changed
async function handleSwitchChange(event) {
    const $item = $w.at(event.context);
    const _id = event.context.itemId;
    const title = $item('#taskText').text;
    const checked = $item('#completedSwitch').checked;

    let updatedItem = {
        _id,
        title,
        completed: checked
    }

    return wixData.update(TODO_COLLECTION, updatedItem);
}

// Get the count of TODOs that are not marked completed
function getIncompleteTodoCount() {
    wixData
        .query(TODO_COLLECTION)
        .eq('completed', false)
        .count({ consistentRead: true }) // Count from primary database, changes may not have propagated by the time we count()
        .then((result) => {
            $w('#activeTasksCount').text = `${result} items left`;
            $w('#activeTasksCount').show("float");
        })
        .catch(() => {
            $w('#activeTasksCount').hide();
        })
}

// Filter the dataset based on the filter value selected
function setDatasetFilter(filterValue) {
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

// 
async function clearCompletedTasks() {
    let completed = await wixData.query(TODO_COLLECTION)
        .eq('completed', true)
        .find()
    let toRemove = completed.items.map(i => i._id);
    await wixData.bulkRemove(TODO_COLLECTION, toRemove);

    $w('#dataset1').refresh();
}