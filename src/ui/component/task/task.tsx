/* eslint-disable max-lines-per-function */
import { fetchTasks } from '@/api/tasks'
import type { TaskType } from '@/lib/definition'
import React, { useCallback, useEffect, useState, type FC } from 'react'

type TaskItemProps = {
  id: number
  text: string
  completed: boolean
  onDelete: (taskId: number) => void
  onCompleted: (taskId: number) => void
}
const TaskItem: FC<TaskItemProps> = ({ id, text, completed, onDelete, onCompleted }) => {
  const handleDelete = useCallback(() => onDelete(id), [id, onDelete])
  const handleCompleted = useCallback(() => onCompleted(id), [id, onCompleted])

  return (
    <li>
      <input onChange={handleCompleted} type="checkbox" />
      <span>{text}</span>
      <button onClick={handleDelete}>Delete Task</button>
      {completed && <p>hoss</p>}
    </li>
  )
}

const Task: FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [value, setValue] = useState('')

  useEffect(() => {
    fetchTasks()
      .then(res => setTasks(res))
      .catch(err => console.error(err))
  }, [])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  )

  const handleTaskCompleted = useCallback(
    (taskId: number) =>
      setTasks(
        tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : { ...task }
        )
      ),
    [tasks]
  )

  const handleAddTask = useCallback(() => {
    setTasks(prevState => [
      ...prevState,
      {
        id: Date.now(),
        text: value || 'hoss',
        completed: false
      }
    ]),
      setValue('')
  }, [value])

  const handleDeleteTask = useCallback(
    (taskId: number) => setTasks(tasks.filter(t => t.id !== taskId)),
    [tasks]
  )

  return (
    <div className="todo-container">
      <div className="todo-container-form">
        <input onChange={handleInputChange} placeholder="Ajouter task" type="text" value={value} />
        <button onClick={handleAddTask}>Ajouter Task</button>
      </div>
      <ul>
        {tasks.length > 0 &&
          tasks.map(task => (
            <TaskItem
              key={task.id}
              onCompleted={handleTaskCompleted}
              onDelete={handleDeleteTask}
              {...task}
            />
          ))}
      </ul>
    </div>
  )
}

export default Task
