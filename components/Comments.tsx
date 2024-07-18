import { cn } from '@/lib/utils';
import { useIsThreadActive } from '@liveblocks/react-lexical';
import { Composer, Thread } from '@liveblocks/react-ui';
import { useThreads } from '@liveblocks/react/suspense';
import React from 'react'

const ThreadWrapper = ({ thread }: ThreadWrapperProps) => {
  const isActive = useIsThreadActive(thread.id);

  return (
    <Thread 
      thread={thread}
      data-state={isActive ? 'active' : null}
      className={cn('comment-thread border', 
        isActive && '!border-blue-500 shadow-md',
        thread.resolved && 'opacity-40'
      )}
    />
  )
}

const Comments = () => {
  const { threads } = useThreads();

  return (
    <div className="comments-container">
      <Composer className="comment-composer" />

      {threads.map((thread) => (
        <ThreadWrapper key={thread.id} thread={thread} />
      ))}
    </div>
  )
}

export default Comments