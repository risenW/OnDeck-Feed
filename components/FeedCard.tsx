import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import _ from 'lodash';
import { useEffect, useRef, useState } from "react";
import UserCard from './UserCard'
import AnnouncementCard from './AnnouncementCard'
import ProjectCard from './ProjectCard'
import Card from './Card'
import { FeedQueryData, FeedQueryVars } from '../lib/types'
import { FEED_QUERY } from '../lib/apollo_queries'

type Props = {
  fellowship: "founders" | "angels" | "writers" | "all"
}

export default function FeedCard({ fellowship }: Props) {
  const observerRef = useRef(null)
  const [buttonRef, setButtonRef] = useState(null);
  const { data, error, loading, fetchMore } = useQuery<FeedQueryData, FeedQueryVars>(
    FEED_QUERY,
    {
      variables: { limit: 2, offset: 0, fellowship },
    }
  )

  useEffect(() => {
    const options = {
      root: document.querySelector("#list"),
      threshold: 0.1,
    };
    observerRef.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.click();
      }
    }, options);
  }, []);

  useEffect(() => {
    if (buttonRef) {
      observerRef.current.observe(document.querySelector("#buttonLoadMore"));
    }
  }, [buttonRef]);

  if (!data || loading || error) {
    return <div>Loading...</div>
  }

  const feeds = [...data.feed.announcements, ...data.feed.users, ...data.feed.projects]

  return (
    <div id="list">
      <Card>
        <Columns>
          {feeds?.map((feed, i) => {
            const key = feed.__typename
            switch (key) {
              case "User":
                return <ColumnStart key={i}><UserCard user={feed} /></ColumnStart>
              case "Project":
                return <ColumnStart key={i}><ProjectCard project={feed} /></ColumnStart>
              case "Announcement":
                return <ColumnStart key={i}><AnnouncementCard announcement={feed} /></ColumnStart>
              default:
                return ""
            }
          })}
        </Columns>
        <button
          ref={setButtonRef}
          id="buttonLoadMore"
          disabled={!data.feed.pageInfo.hasNextPage}
          onClick={() => fetchMore({
            variables: {
              offset: data.feed.pageInfo.endOffset,
              limit: 2
            },
          })}
        ></button>
      </Card>
    </div>
  )
}


const Columns = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 21rem;
`

const ColumnStart = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 14rem;
`
