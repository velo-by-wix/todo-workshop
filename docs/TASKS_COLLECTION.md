## Create a database collection for tasks

In this module, we will create a database collection that will store the application tasks.

Let's create a collection by the name **TodoTasks** with the fields:

- **Title** of type text
- **Completed** of type boolean

<table>
    <thead>
        <tr>
            <th colspan=2>TodoTasks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Title</td>
            <td>text</td>
        </tr>
        <tr>
            <td>Completed</td>
            <td>Boolean</td>
        </tr>
    </tbody>
</table>

<br>**:white_check_mark: Step-by-step directions**

1. Hover **Dev Mode** on the top bar.
2. Click **Turn on Dev Mode** to enable Corvid. <p padding="40px"><img src="assets/dev-mode-on.png" alt="Enable Dev Mode" width="50%" height="50%"></p>
3. On the **Site Structure** panel in the left side of the editor, under the **Database** section, click on the **Add new collection** link. <p padding="40px"><img src="assets/add-collection.png" alt="Add Collection" width="30%" height="30%"></p>
4. Click **Start Creating** >> **Create Collection**
5. Create a collection with the name **TodoTasks**.
6. A **Title** field will be created by default. <br>Add another field by clicking <img src="assets/field-add.png" alt="Field Add" width="3%" height="3%"> and add the Completed field of type boolean and click **Add**. <p padding="40px"><img src="assets/completed-field.png" alt="Add Field" width="20%" height="20%"></p>
7. Add two records to your new collection and set one completed status to true. <p padding="40px"><img src="assets/collection.png" alt="Collection" width="40%" height="40%"><p>

:exclamation: **We created a new database collection. In te next module we will present it's data in our web application.**

:fast_forward: Next Module => [Present the tasks on the page](PRESENTING_THE_TASKS.md)
