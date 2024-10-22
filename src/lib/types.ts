export interface Session {
  id: string
  title: string
  date: string
  duration: string
  progress: "Not Started" | "In Progress" | "Completed"
  lastMessage?: string
}
