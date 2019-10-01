## Present the tasks on the page

On the HOME page, we have a repeater element. Each repeater item contains a checkbox and a text element.

<p padding="40px"><img src="assets/repeater.png" alt="Repeater" width="80%" height="80%"></p>

We'll present the tasks from our collection in the repeater element without writing any code. To do this, we'll use a **dataset**. 

**:white_check_mark: Step-by-step instructions**

1. Add a [dataset](https://www.wix.com/corvid/reference/wix-dataset.html) by clicking the <img src="assets/element-add.png" alt="Element Add" width="3%" height="3%"> from the vertical menu on the left side of the page. Then click **Database** >> **Dataset**. <p padding="40px"><img src="assets/add-dataset.png" alt="Add dataset" width="40%" height="40%"></p>
2. Click <img src="assets/dataset-settings-btn.png" alt="Dataset Settings Button" width="8%" height="8%"> to access the Dataset Settings.
3. Set the collection to **TodoTasks**. <br>Set the mode to **Read & Write**. <p padding="40px"><img src="assets/dataset-settings.png" alt="Add dataset" width="30%" height="30%"></p>
4. Connect the repeater to the dataset by clicking the repeater's Connect button <img src="assets/connect-btn.png" alt="Connect Button" width="3%" height="3%">. Then connect the other elements. When they're connected, the Connect Repeater panel will look like this: <p padding="40px"><img src="assets/repeater-connect-panel.png" alt="Repeater Connect Panel" width="40%" height="40%"></p>

:warning: To achieve these settings, you'll need to connect the text element and checkbox element from different Connect panels.  

5. Click the **Preview** button on the right side of the top bar menu to see the mock data from the collection.

Hooray! Now let's continue to the next stage: adding a new task from the UI.

:fast_forward: Next Module => [Add functionality for adding a new task](ADD_NEW_TASK.md)
