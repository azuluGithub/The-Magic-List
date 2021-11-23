//npm package
import { useState, useEffect } from 'react';

//local imports
import './App.css';
import TaskCard from './components/cards/task_cards/TaskCard';
import Header from './components/header/Header';
import NavBar from './components/nav_bar/NavBar';

/**
 * #THE MAIN PAGE OF THIS APP
 * #KEY ELEMENTS:
 *        => draggable attr, onDragStart
 *        => onDragOver, onDrop
 */

const App = () => {
  const [ tasks, setTasks ] = useState([]);
  /**
   * TASKS SET FOR TEST PURPOSES
   */
  useEffect(() => {
    setTasks([
      { name: 'study react', status: 'current'},
      { name: 'do algorithms', status: 'complete'},
      { name: 'study node JS', status: 'complete'},
      { name: 'learn python', status: 'current'}
    ])
  }, []);

  
  /**
  * #DELETE TASK
  */
   const handleDelete = (name) => {
    const filtered = tasks.filter((task) => {
        return task.name !== name;
    });
    setTasks(filtered);
  }

  /**
   * SET TASK TO RESPECTIVE CONTAINERS [STATUS]
   */
  const statusObj = { current: [], complete: [] };

  tasks.forEach((task) => {
    statusObj[task.status].push(<TaskCard 
                                    key={task.name} 
                                    task={task} 
                                    tasks={tasks} 
                                    setTasks={setTasks} 
                                    handleDelete={handleDelete}
                                />)
  })

  /**
    * #onDragOver: SHOWs WHERE THE FILE MUST BE DROPPED
    */
  const dragOver = e => {
    e.preventDefault();
  }

  /**
    * #onDrop: GET DATA THAS WAS TRANSFERED
    * #UPDATE STATUS OF TRANSFERED TASK TO COMPLETE
    * #SET UPDATED TASKS TO STATE
    */
   const drop = (e, status) => {
    e.preventDefault();
    const name = e.dataTransfer.getData('name');

    const updated = tasks.map((task) => {
      if (task.name === name) {
        task.status = status;
      }
      return task;
    });
    
    setTasks(updated);
  }


  return (
    <div className="app">
      <NavBar tasks={tasks} setTasks={setTasks}/>
      <Header tasks={tasks}/>
      <div className="app-section">
        <div className="app-section-wrappers">
          <h2 className="app-section-title">Current</h2>
          <div className='app-tasks-container' onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e, 'current')}>
            { statusObj.current }
          </div>
        </div>
        <div className="app-section-wrappers">
          <h2 className="app-section-title">Complete</h2>
          <div className='app-tasks-container' onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e, 'complete')}>
            { statusObj.complete }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
