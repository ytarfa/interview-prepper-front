import { SessionsList } from "@/components/sessions/sessions-list"
import { SessionsService } from "@/lib/sessions-service"

async function SessionsContainer() {
  const sessionsService = new SessionsService()
  const sessions = await sessionsService.getSessions()
  return <SessionsList initialSessions={sessions} />
}

export default function SessionsPage() {
  return <SessionsContainer />
}
