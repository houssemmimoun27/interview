export type CategoryType = {
  id: number
  name: string
  children: CategoryType[]
  count?: number
}


export type TaskType = {
  id: number
  text: string
  completed: boolean
}