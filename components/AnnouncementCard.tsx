import styled from 'styled-components'
import Card from './Card'
import Markdown from './Markdown'
import { Announcements } from '../lib/types'

type Props = {
  announcement: Announcements;
}

export default function AnnouncementCard({ announcement }: Props) {
  return (
    <Card>
      <Columns>
        <ColumnRight>
          <p>Fellowship: {announcement.fellowship}</p>
          <h2>{announcement.title}</h2>
          <Markdown>{announcement.body}</Markdown>
        </ColumnRight>
        <ColumnTag>
          <p>Events</p>
        </ColumnTag>
      </Columns>
    </Card>
  )
}

const ColumnTag = styled.p`
  flex-direction: row;
  color: red
`

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 21rem;
`

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 7rem;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 1.5rem;
`

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 14rem;
`
