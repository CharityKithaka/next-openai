import Chat from "@/components/Chat";
import {
  dehydrate, HydrationBoundary, QueryClient
} from '@tanstack/react-query';

export default async function ChatPage () {
  const queryClient = new QueryClient ();
  return (
    <HydrationBoundary>
      <Chat />
    </HydrationBoundary>
  )
}
