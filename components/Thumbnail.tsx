import Image from 'next/image'
/* import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom' */

import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

interface Props {
  story: CoreContent<Blog>
}

function Thumbnail({ story }: Props) {
/*   const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState) */
    let imgSrc = "";

  if (story.images?.length > 0) {
    imgSrc = story.images[0];
  } else {
    imgSrc = '/static/images/ocean.jpeg'
  }

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
/*       onClick={() => {
        setCurrentMovie(story)
        setShowModal(true)
      }} */
    >
      <Image
        src={imgSrc}
        className="rounded-sm object-cover md:rounded"
        alt=""
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail