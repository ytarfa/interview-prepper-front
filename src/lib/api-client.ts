import { API_ROUTES } from "./api-routes"
import { Session } from "./types"

class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message)
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new APIError(response.status, await response.text())
  }
  return response.json()
}

export const api = {
  async getSessions(): Promise<Session[]> {
    const response = await fetch(API_ROUTES.SESSIONS)
    return handleResponse<Session[]>(response)
  },

  async getSession(id: string): Promise<Session> {
    const response = await fetch(API_ROUTES.SESSION(id))
    return handleResponse<Session>(response)
  },

  async createSession(): Promise<Session> {
    const response = await fetch(API_ROUTES.SESSIONS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    return handleResponse<Session>(response)
  },

  async updateSession(id: string, data: Partial<Session>): Promise<Session> {
    const response = await fetch(API_ROUTES.SESSION(id), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    return handleResponse<Session>(response)
  },
}
