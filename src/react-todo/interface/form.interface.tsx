interface FormProps {}
interface FormState {
  ticketId: number,
  name: string,
  description?: string,
  priority?: number,
  type?: string,
  status: string,
}

export type { FormProps, FormState };