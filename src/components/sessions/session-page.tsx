"use client"
import { ChevronLeft, ChevronRight, Send } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"

export const SessionPage = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      content:
        "Hello! I'm your interview prep assistant. What role are you preparing for?",
      isBot: true,
    },
    {
      id: 2,
      content: "I'm preparing for a frontend developer position",
      isBot: false,
    },
  ])

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex-none p-4 border-b'>
        <h1 className='text-2xl font-bold'>Frontend Developer Interview</h1>
      </div>

      <div className='flex-1 flex overflow-hidden'>
        {/* Chat Section */}
        <div
          className={`flex flex-col ${
            showInfo ? "w-1/2" : "w-full"
          } transition-all duration-300`}
        >
          {/* Messages Area */}
          <div className='flex-1 overflow-y-auto p-4'>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                } mb-4`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className='flex-none p-4 border-t'>
            <div className='flex gap-2'>
              <Input placeholder='Type your message...' className='flex-1' />
              <Button>
                <Send className='w-4 h-4' />
              </Button>
            </div>
          </div>
        </div>

        {/* Toggle Info Button */}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className='flex-none p-2 hover:bg-secondary'
        >
          {showInfo ? (
            <ChevronRight className='w-4 h-4' />
          ) : (
            <ChevronLeft className='w-4 h-4' />
          )}
        </button>

        {/* Info Panel */}
        {showInfo && (
          <div className='w-1/2 border-l p-4 overflow-y-auto'>
            <Card>
              <CardContent className='p-6'>
                <h2 className='text-xl font-semibold mb-4'>
                  Interview Information
                </h2>
                <div className='space-y-4'>
                  <div>
                    <h3 className='font-medium mb-2'>Topics Covered</h3>
                    <ul className='list-disc pl-4'>
                      <li>React fundamentals</li>
                      <li>State management</li>
                      <li>Performance optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='font-medium mb-2'>Progress</h3>
                    <div className='w-full bg-secondary rounded-full h-2'>
                      <div className='bg-primary h-2 rounded-full w-1/3'></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
