import { FaCalendar } from 'react-icons/fa';
import { BiSolidUser } from 'react-icons/bi';
import moment from 'moment/moment';
import Link from 'next/link';
import { baseURL } from '@/utils/api';

function VideoCard({ video }) {
  const { type, title, createdAt, userId, _id } = video;
  const videoPath = video?.video?.path;
  const videoId = video?.youtube?.url;

  return (
    <div className="max-w-sm bg-white overflow-hidden">
      <div className="relative">
        {type === 'cloud' ? (
          <video
            style={{ width: '100%' }}
            controls
            src={`${baseURL}/files/get-video/${videoPath}`}
          >
            <track
              kind="captions"
              src=""
              srcLang="en"
              label="English captions"
            />
          </video>
        ) : (
          <div
            className="w-[400px] h-[225px] md:max-w-[300px] sm:max-w-[330px] lg:max-w-[400px]"
            dangerouslySetInnerHTML={{
              __html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }}
          />
        )}
      </div>
      <div className="py-3">
        <div className="flex justify-between mb-2">
          <div className="flex items-center text-[#234579]">
            <FaCalendar className="h-5 w-3" />
            <span className="ml-1 text-sm font-semibold">
              {moment(createdAt).format('DD MMMM YYYY')}
            </span>
          </div>
          <div className="flex items-center text-[#234579]">
            <BiSolidUser className="h-5 w-5" />
            <span className="ml-1 text-sm font-semibold">
              {userId && `${userId?.firstName} ${userId?.lastName}`}
            </span>
          </div>
        </div>
        <Link href={`/video-detail/${_id}`} className="hover:text-[#234579]">
          <h2 className="text-[15px] text-[#40454B] font-semibold hover:text-[#234579]">
            {title}
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;

// import { FaCalendar } from 'react-icons/fa';
// import { BiSolidUser } from 'react-icons/bi';
// import moment from 'moment/moment';
// import Link from 'next/link';
// import { baseURL } from '@/utils/api';

// function VideoCard({
//   type,
//   title,
//   date,
//   author,
//   videoId,
//   videoPath,
//   createdAt,
//   description,
//   userId,
//   _id
// }) {
//   return (
//     <div className="max-w-sm bg-white  overflow-hidden">
//       <div className="relative">
//         {type === 'cloud' ? (
//           <video
//             style={{ width: '100%' }}
//             controls
//             src={`${baseURL}/files/get-video/${videoPath}`}
//           >
//             <track
//               kind="captions"
//               src=""
//               srcLang="en"
//               label="English captions"
//             />
//           </video>
//         ) : (
//           <div
//             style={{ width: '400px', height: '225px' }}
//             dangerouslySetInnerHTML={{
//               __html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//             }}
//           />
//         )}
//       </div>
//       <div className="py-3">
//         <div className="flex justify-between mb-2">
//           <div className="flex items-center text-[#234579]">
//             <FaCalendar className="h-5 w-3" />
//             <span className="ml-1  text-sm font-semibold ">
//               {moment(createdAt).format('DD MMMM YYYY')}
//             </span>
//           </div>
//           <div className="flex items-center text-[#234579]">
//             <BiSolidUser className="h-5 w-5" />
//             {userId && `${userId?.firstName} ${userId?.lastName}`}
//             <span className="ml-1 text-sm font-semibold">{author}</span>
//           </div>
//         </div>
//         <Link href={`/video-detail/${_id}`} className="hover:text-[#234579]">
//           <h2 className="text-[15px] text-[#40454B] font-semibold hover:text-[#234579]">
//             {title}
//           </h2>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default VideoCard;
