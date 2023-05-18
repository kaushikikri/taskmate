export default function Showtask({ tasklist, setTasklist, task, setTask }) {

    function handleDelete(id) {
        const newTasklist = tasklist.filter((task) => task.id !== id);
        setTasklist(newTasklist);
    }

    function handleEdit(id) {
           const selectedTask = tasklist.find(task => task.id === id);
           setTask(selectedTask);
    }

    return (
        <section className="show-task">
            <div className="heading">
                <div className="title">Todo <span className="counter">{tasklist.length}</span></div>
                <button className="secondary-btn" onClick={() => setTasklist([])}>Clear All</button>
            </div>
            <div className="tasks">
                <ul>
                    {tasklist.map((task) => (
                        <li key={task.id}>
                            <p>
                                <span className="name">{task.name}</span>
                                <span className="time">{task.time}</span>
                            </p>
                            <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
                            <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
