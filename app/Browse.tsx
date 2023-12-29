import { CoreContent } from "pliny/utils/contentlayer"
import { Blog } from "contentlayer/generated"
import Row from '../components/Row'

interface Props {
    posts: CoreContent<Blog>[]
}

const Browse = ({posts}: Props) => {
    let recentStories: CoreContent<Blog>[] = [];
    let romanceStories: CoreContent<Blog>[] = [];
    let tragicStories: CoreContent<Blog>[] = [];
    let forbiddenStories: CoreContent<Blog>[] = [];
    
    posts.map((post) => {
        const postDate = new Date(post.date)
        if (Date.now() - (5 * 1000 * 60 * 60 * 24) < postDate.valueOf()) {
            recentStories.push(post)
        };
        
        post.tags.filter((tag) => tag === 'romance') ? romanceStories.push(post) : null;
        post.tags.filter((tag) => tag === 'tragic') ? tragicStories.push(post) : null;
        post.tags.filter((tag) => tag === 'forbidden') ? romanceStories.push(post) : null;
    })


  /* const { loading } = useAuth()
  const showModal = useRecoilValue(modalState)

  if (loading) return null */

  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`} 
      /* ${
        showModal && '!h-screen overflow-hidden'
      } */
    >
{/*       <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

{/*       <Header /> */}
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <section className="md:space-y-24">
          <Row title="New Releases" stories={recentStories} />
{/*           <Row title="Top Rated" movies={topRated} /> */}
          <Row title="Romance Stories" stories={romanceStories} />
          {/* Add a "My List" Row for Saved Stories */}
          <Row title="Tragic Stories" stories={tragicStories} />
          <Row title="Forbidden Stories" stories={forbiddenStories} />
        </section>
      </main>
      {/* {showModal && <Modal />} */}
    </div>
  )
}

export default Browse;

/* export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
} */