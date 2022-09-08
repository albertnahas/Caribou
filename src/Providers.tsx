import { FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import CssBaseline from "@mui/material/CssBaseline"

const queryClient = new QueryClient()

export const Providers: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      {children}
    </QueryClientProvider>
  )
}

interface Props {
  children: JSX.Element
}
