## Present the tasks on the page

In our HOME page, we have a repeater element that each of it's items contains a checkbox and a text element.

<p padding="40px"><img src="assets/repeater.png" alt="Repeater" width="80%" height="80%"></p>

We will present the tasks from our collection on the repeater element without writing any code, using a feature called **Data Connection**.

**:white_check_mark: Step-by-step directions**

1. Add a [dataset](https://www.wix.com/corvid/reference/wix-dataset.html) element by clicking the <img src="assets/element-add.png" alt="Element Add" width="3%" height="3%"> sign in the left side of the page. Then click **Database** >> **Dataset**. <p padding="40px"><img src="assets/add-dataset.png" alt="Add dataset" width="40%" height="40%"></p>
2. Go to the dataset settings by clicking <img src="assets/dataset-settings-btn.png" alt="Dataset Settings Button" width="8%" height="8%">.
3. Set the collection to **TodoTasks**. <br>Set the mode to **Read & Write**. <p padding="40px"><img src="assets/dataset-settings.png" alt="Add dataset" width="30%" height="30%"></p>
4. Connect the repeater to the dataset by clicking the repeater connect button <img src="assets/connect-btn.png" alt="Connect Button" width="3%" height="3%"> and then connecting all the elements as follows: <p padding="40px"><img src="assets/repeater-connect-panel.png" alt="Repeater Connect Panel" width="40%" height="40%"></p>

:warning: In order to achieve this desired settings, you will need to set the connection of each element in a different connection panel.

5. Click the **Preview** button on the right side of the top panel.
6. See the mock data from the collection.
7. Horray!! Now let's continue to the next stage.

:exclamation: **Go to preview, see the tasks from your db collection. Next step is to allow adding a new task from the UI.**

:fast_forward: Next Module => [Add functionality for adding a new task](ADD_NEW_TASK.md)
