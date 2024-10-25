import { Session } from "@/lib/types"
import { NextRequest, NextResponse } from "next/server"

const fetchSessionFromDatabase = async (id: string): Promise<Session> => {
  const response = await fetch(
    `${process.env.INTERVIEW_PREPPER_API_URL}/sessions/${id}`
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params
    const session = await fetchSessionFromDatabase(id)
    return NextResponse.json(session)
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch session: ${error}` },
      { status: 500 }
    )
  }
}
