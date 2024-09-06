import NextImage from '../NextImage';
import logo from '../../../public/assets/logo.png';

function RecentVideos() {
  const videos = [
    {
      thumbnail: 'https://www.youtube.com/watch?v=0NJd3L8KmfU',
      title: 'LA Roadster Show Weekend, 2024! Join the Party!',
      date: '29/06/2024',
      description:
        "In this episode it is the party before the show at this year's LA Roadster Show. Join us at the So-Cal Speed...",
      views: '2.3K',
      likes: '103',
      comments: '6',
      duration: '15:26'
    }
    // Add more videos as needed
  ];

  return (
    <div className="p-4 w-[350px]">
      <h2 className="text-[33px] font-bold mb-4 text-[#40454B]">
        RECENT VIDEOS
      </h2>

      <div className="flex items-center mb-4  bg-[#FAFAFA] rounded-t-md w-full p-4">
        <div>
          <div className="flex items-center justify-center">
            <NextImage
              src={logo}
              alt="Channel Logo"
              className=" w-12 h-12 rounded-full mr-4 "
            />
          </div>
          <h3 className="font-bold text-[20px] flex justify-center items-center">
            Opposing Cylinders
          </h3>
          <p className="text-[12px] font-semibold">
            6.6K Subscribers • 380 Videos • 1.6M Views
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-red-600 text-white px-2 py-1 rounded mt-1">
              YouTube 6K
            </button>
          </div>
        </div>
      </div>
      {videos.map((video, index) => (
        <div key={index} className="mb-4">
          <div className="relative">
            <NextImage
              src={video.thumbnail}
              alt={video.title}
              className="rounded-md w-full"
              width={40}
              height={40}
            />
            <span className="absolute bottom-2 text-[12px] right-2 bg-black text-white text-xs px-1 py-0.5 rounded">
              {video.duration}
            </span>
          </div>
          <h4 className="font-bold text-[14px] mt-2">{video.title}</h4>
          <p className="text-[12px] font-semibold text-gray-500">
            {video.date}
          </p>
          <p className="font-bold text-[13px]">{video.description}</p>
          <div className="flex text-sm text-gray-500 mt-1">
            <span className="mr-4 text-[12px] font-bold">
              {video.views} Views
            </span>
            <span className="text-[12px] font-bold bottom-2">.</span>
            <span className="mr-4 text-[12px] font-bold">
              {video.likes} Likes
            </span>
            <span className="text-[12px] font-bold">
              {video.comments} Comments
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentVideos;
