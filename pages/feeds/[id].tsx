import { useRouter } from 'next/router'
import AllFeedCard from '../../components/AllFeedCard'
import WriterFeedCard from '../../components/WriterFeedCard'
import FounderAndAngelFeedCard from '../../components/FounderAndAngelFeedCard'

export default function FeedPage() {
    const { query } = useRouter()
    const fellowship = query.id

    if (fellowship == "all") {
        return <AllFeedCard />
    } else if (fellowship == "founders"){
        return <FounderAndAngelFeedCard />
    }else if (fellowship == "writers"){
        return <WriterFeedCard />
    }else{
        return <div>Not Found!</div>
    }

}
