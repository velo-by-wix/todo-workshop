import wixData from 'wix-data';
import wixWindow from 'wix-window';
import { getActiveTaskCount, removeCompletedTasks } from 'backend/taskOperations'

$w.onReady(async function () {
	await updateActiveTaskCount()
	const addNewTask = async () => {
		const taskTitle = $w('#taskInput').value

		if (taskTitle.trim() === '') {
			return
		}

		const newTask = {
			title: taskTitle,
			completed: false
		}

		await wixData.insert('TodoTasks', newTask)
		await $w('#dataset1').refresh()
		$w('#taskInput').value = ''
		await Promise.all([updateActiveTaskCount(), filterTasks()])
	}
	$w('#addTaskButton').onClick(async () => {
		await addNewTask()
	})

	$w('#taskInput').onKeyPress(async event => {
		const { key } = event
		if (key === 'Enter') {
			await addNewTask()
		}
	})

	$w('#completedCheckbox').onChange(async (event) => {
		const checked = event.target.checked
		const itemId = event.context.itemId

		const item = await wixData.get('TodoTasks', itemId)
		const updatedItem = Object.assign({}, item, { completed: checked })
		await wixData.update('TodoTasks', updatedItem)
		await Promise.all([updateActiveTaskCount(), filterTasks()])
	})

	$w('#filterRadioGroup').onChange(async () => {
		await filterTasks()
	})

	$w('#clearCompletedButton').onClick(async () => {
		const shouldClearTasks = await wixWindow.openLightbox('Clear Confirmation')

		if (shouldClearTasks) {
			await removeCompletedTasks()
			await $w('#dataset1').refresh()
		}
	})
});

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

async function updateActiveTaskCount() {
	const activeTaskCount = await getActiveTaskCount()

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