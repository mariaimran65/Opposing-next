import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import NextImage from '../NextImage';
import viedoBg from '../../../public/assets/video-img.jpg';
import Container from '@/layouts/Container';
import VideoCard from '../cards/VideoCard';
import { httpClient } from '../../utils/api';

function VideoPageMain() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 20;

  const fetchVideos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await httpClient.get(
        !token ? 'files/videos/guest' : 'files/videos'
      );
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * videosPerPage;
  const videoSlice = videos.slice(offset, offset + videosPerPage);

  return (
    <>
      <div className="relative h-[330px]">
        <div className="absolute inset-0 z-0">
          <NextImage
            src={viedoBg}
            alt="Browse Vehicle Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Container>
            <div className="flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-6xl font-bold">VIDEOS</h1>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-10 justify-items-center">
          {videoSlice.map((item, index) => (
            <VideoCard key={index} video={item} />
          ))}
        </div>

        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          pageCount={Math.ceil(videos.length / videosPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination flex justify-end space-x-1 py-4 mb-10"
          activeClassName="active"
        />
      </Container>
    </>
  );
}

export default VideoPageMain;

// import React from 'react';
// import NextImage from '../NextImage';
// import viedoBg from '../../../public/assets/video-img.jpg';
// import Container from '@/layouts/Container';
// import VideoCard from '../cards/VideoCard';

// function VideoPageMain() {
//   return (
//     <>
//       <div className="relative h-[330px]">
//         <div className="absolute inset-0 z-0">
//           <NextImage
//             src={viedoBg}
//             alt="Browse Vehicle Background"
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//           />
//         </div>
//         <div className="absolute inset-0 bg-black bg-opacity-30  z-10" />
//         <div className="absolute inset-0 flex items-center justify-center z-20">
//           <Container>
//             <div className="flex flex-col items-center justify-center text-white text-center">
//               <h1 className="text-6xl font-bold">VIDEOS</h1>
//             </div>
//           </Container>
//         </div>
//       </div>
//       <Container>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 my-10">
//           <VideoCard
//             title="LA Roadster Show, 2024 Part 4 Finale"
//             date="10 July 2024"
//             author="Opposing Cylinders"
//             videoId="v=lRqESCroS9Y"
//             description="LA Roadster Show, 2024 Part 4 Finale"
//           />
//           <VideoCard
//             title="LA Roadster Show, 2024 Part 4 Finale"
//             date="10 July 2024"
//             author="Opposing Cylinders"
//             videoId="v=lRqESCroS9Y"
//             description="LA Roadster Show, 2024 Part 4 Finale"
//           />
//           <VideoCard
//             title="LA Roadster Show, 2024 Part 4 Finale"
//             date="10 July 2024"
//             author="Opposing Cylinders"
//             videoId="v=lRqESCroS9Y"
//             description="LA Roadster Show, 2024 Part 4 Finale"
//           />
//           <VideoCard
//             title="LA Roadster Show, 2024 Part 4 Finale"
//             date="10 July 2024"
//             author="Opposing Cylinders"
//             videoId="v=lRqESCroS9Y"
//             description="LA Roadster Show, 2024 Part 4 Finale"
//           />
//           <VideoCard
//             title="LA Roadster Show, 2024 Part 4 Finale"
//             date="10 July 2024"
//             author="Opposing Cylinders"
//             videoId="v=lRqESCroS9Y"
//             description="LA Roadster Show, 2024 Part 4 Finale"
//           />
//           <VideoCard
//             title="LA Roadster Show, 2024 Part 4 Finale"
//             date="10 July 2024"
//             author="Opposing Cylinders"
//             videoId="v=lRqESCroS9Y"
//             description="LA Roadster Show, 2024 Part 4 Finale"
//           />
//         </div>
//       </Container>
//     </>
//   );
// }

// export default VideoPageMain;
