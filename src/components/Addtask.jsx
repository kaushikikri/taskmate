export default function Addtask({ tasklist, setTasklist, task, setTask }) {

    function handleTask(e) {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updatedtask = tasklist.map((todo) =>
                (todo.id === task.id ? { id: todo.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo)
            )
            setTasklist(updatedtask);
            setTask({});
        }

        else {
            const date = new Date();
            const newtask = {
                id: date.getTime(),
                name: e.target.addtask.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist, newtask]);
            setTask({});
        }

    }
    return (
        <section className="add-task">

            <form className="flex" onSubmit={handleTask}>

                <input type="text" name="add-task" id="addtask"
                    value={task.name || ""}
                    placeholder="add task" autoComplete="off" maxLength={30}
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                    required />


                <button type="submit" className="primary-btn">{task.id ? "Update" : "Add"}</button>

            </form>

        </section>
    )
}
