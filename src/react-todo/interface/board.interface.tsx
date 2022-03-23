interface Board {
  name: string,
  type: string,
  description: string,
}

interface BoardProps {
  ticketData: Board[]
}
interface BoardState {}


export type {BoardProps, BoardState};