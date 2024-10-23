import { Session } from "./types"

export class SessionsService {
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.INTERVIEW_PREPPER_API_URL || ""
  }

  // Get all sessions
  async getSessions(): Promise<Session[]> {
    try {
      const response = await fetch(`${this.baseUrl}/sessions`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error("Error fetching sessions:", error)
      throw error
    }
  }

  // Get a single session by ID
  async getSession(id: string): Promise<Session> {
    try {
      const response = await fetch(`${this.baseUrl}/sessions/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error fetching session ${id}:`, error)
      throw error
    }
  }

  // Create
  async createSession(): Promise<Session> {
    try {
      const response = await fetch(`${this.baseUrl}/sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error("Error creating session:", error)
      throw error
    }
  }
}

// Export a default instance
export const sessionsService = new SessionsService()
