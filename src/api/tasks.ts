import tasks from '@/data/tasks.json'
import type { TaskType } from '@/lib/definition'

export const fetchTasks = async (): Promise<TaskType[]> =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(tasks), 1000)
    } catch (err) {
      reject(err)
      console.error(err)
    }
  })
