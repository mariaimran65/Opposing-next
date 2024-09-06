import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import NextImage from '../NextImage';
import browsebg from '../../../public/assets/browserbg.jpg';
import Container from '@/layouts/Container';
import { httpClient } from '@/utils/api';
import BrowsePartsCard from '../cards/BrowsePartsCard';
import Loading from '../Loading';

function PartsPage() {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 9;
  const offset = currentPage * videosPerPage;
  const videoSlice = parts.slice(offset, offset + videosPerPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const fetchParts = async () => {
    try {
      setLoading(true);
      const response = await httpClient.get(`parts/guest`);
      setParts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  let token = null;

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }
  useEffect(() => {
    const queryString = new URLSearchParams();

    if (token) {
      fetchParts(false, queryString.toString());
    } else {
      fetchParts(true, queryString.toString());
    }
  }, []);
  return (
    <>
      <div className="relative h-[440px]">
        <div className="absolute inset-0 z-0">
          <NextImage
            src={browsebg}
            alt="Browse Vehicle Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30  z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Container>
            <div className="flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-6xl font-bold">PARTS FOR SALE</h1>
              <p className="mt-4 text-2xl">Discover the Perfect Ride</p>
              <button className="mt-8 px-8 py-2 text-[#234579] bg-white border-2 border-[#234579] font-semibold rounded-full hover:bg-[#234579] hover:text-white">
                List a Part
              </button>
            </div>
          </Container>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3   my-10">
            {parts.map((parts, index) => (
              <BrowsePartsCard
                key={index}
                thumbnail={parts?.partImagesId?.images[0]}
                title={`${parts.year} ${parts.make} ${parts.model}`}
                price={parts.price}
                id={parts.id}
                location={parts.location}
                noOfImage={parts?.partImagesId?.images?.length}
                number={parts.phone}
                drivenMile={parts.drivenMile}
                condition={parts?.condition}
              />
            ))}
            {videoSlice.length <= 0 && <h2>No Result</h2>}
          </div>

          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            pageCount={Math.ceil(parts.length / videosPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="pagination flex justify-end space-x-1 py-4 mb-10"
            activeClassName="active"
          />
        </Container>
      )}
    </>
  );
}

export default PartsPage;
