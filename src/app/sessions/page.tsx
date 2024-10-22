"use client"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, Clock, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

const InterviewSessionsPage = () => {
  const router = useRouter()
  const sampleSessions = [
    {
      id: 1,
      title: "Frontend Developer Interview",
      date: "2024-10-20",
      duration: "45 mins",
      progress: "Completed",
    },
    {
      id: 2,
      title: "System Design Practice",
      date: "2024-10-21",
      duration: "30 mins",
      progress: "In Progress",
    },
  ]

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-8'>Your Interview Sessions</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {sampleSessions.map((session) => (
          <Card
            key={session.id}
            className='hover:shadow-lg transition-shadow cursor-pointer'
            onClick={() => router.push(`/sessions/${session.id}`)}
          >
            <CardHeader>
              <div className='flex justify-between items-start'>
                <div>
                  <CardTitle className='text-xl mb-2'>
                    {session.title}
                  </CardTitle>
                  <CardDescription>
                    <div className='flex items-center gap-2 mb-1'>
                      <Clock className='w-4 h-4' />
                      <span>{session.duration}</span>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {new Date(session.date).toLocaleDateString()}
                    </div>
                  </CardDescription>
                </div>
                <ArrowRight className='w-5 h-5 text-muted-foreground' />
              </div>
            </CardHeader>
          </Card>
        ))}

        {/* New Session Card */}
        <Card className='hover:shadow-lg transition-shadow cursor-pointer border-2 border-dashed'>
          <CardHeader>
            <div className='flex flex-col items-center justify-center h-full min-h-[150px]'>
              <Plus className='w-8 h-8 mb-2 text-muted-foreground' />
              <CardTitle className='text-xl text-muted-foreground'>
                Start New Session
              </CardTitle>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default InterviewSessionsPage
