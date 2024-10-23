export interface Session {
  id: string
  messages: Message[]
}

export interface Message {
  id: string
  content: string
  type: MessageType
}

export enum MessageType {
  User = "user",
  Bot = "bot",
}
