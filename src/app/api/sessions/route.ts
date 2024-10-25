import { Session } from "@/lib/types"
import { NextResponse } from "next/server"

const fetchSessionsFromDatabase = async (): Promise<Session[]> => {
  const response = await fetch(
    `${process.env.INTERVIEW_PREPPER_API_URL}/sessions`
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

const createSessionInDatabase = async (): Promise<Session> => {
  const response = await fetch(
    `${process.env.INTERVIEW_PREPPER_API_URL}/sessions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

export async function GET() {
  try {
    const sessions: Session[] = await fetchSessionsFromDatabase()
    return NextResponse.json(sessions)
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch sessions: ${error}` },
      { status: 500 }
    )
  }
}

export async function POST() {
  try {
    const newSession: Session = await createSessionInDatabase()
    return NextResponse.json(newSession, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to create session: ${error}` },
      { status: 500 }
    )
  }
}
