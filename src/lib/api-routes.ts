export const API_ROUTES = {
  SESSIONS: "/api/sessions",
  SESSION: (id: string) => `/api/sessions/${id}`,
  SESSION_MESSAGES: (id: string) => `/api/sessions/${id}/messages`,
} as const
