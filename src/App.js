import { useEffect, useState } from 'react';
import Header from './components/Header';
import Addtask from './components/Addtask';
import Showtask from './components/Showtask';
import './App.css';

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "greyish");
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []); 
  const [task, setTask] = useState({});  //for task to be updated

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist])

  useEffect(() => {
    // below two will work if we will remove our very first div of this page 
    // document.documentElement.removeAttribute("class");
    // document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <div className={theme}>
      <div className="App">
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <Addtask
            tasklist={tasklist}
            setTasklist={setTasklist}
            task={task}
            setTask={setTask}
          />
          <Showtask
            tasklist={tasklist}
            setTasklist={setTasklist}
            task={task}
            setTask={setTask}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
