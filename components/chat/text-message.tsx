import type { TextMessage } from "@/types/message"

export function TextMessageComponent({ message }: { message: TextMessage }) {
  return <div className="p-2 rounded-lg">{message.content}</div>
}
