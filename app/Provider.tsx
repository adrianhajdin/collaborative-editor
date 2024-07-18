'use client';

import Loader from '@/components/Loader';
import { getClerkUsers, getDocumentUsers } from '@/lib/actions/user.actions';
import { useUser } from '@clerk/nextjs';
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense';
import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode}) => {
  const { user: clerkUser } = useUser();

  return (
    <LiveblocksProvider 
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds});

        return users;
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const roomUsers = await getDocumentUsers({
          roomId,
          currentUser: clerkUser?.emailAddresses[0].emailAddress!,
          text,
        })

        return roomUsers;
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider