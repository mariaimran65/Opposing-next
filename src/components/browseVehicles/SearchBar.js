import React from 'react';
import Container from '@/layouts/Container';

function SearchBar() {
  return (
    <Container>
      <div className="flex justify-center py-16">
        <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Make"
            className="w-1/2 md:w-auto px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Model"
            className="w-1/2
             md:w-auto px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Start year"
            className="w-full md:w-auto px-4 py-2 border rounded-lg"
          />

          <div className="flex justify-end space-x-2">
            <button className="px-5 py-1 bg-white text-[#ff4d4f] text-[14px] border-[1px] border-[#ff4d4f] rounded-lg hover:text-[#ff7875] hover:border-[#ffa39e] transition-all ease-in-out">
              Clear
            </button>
            <button className="px-5 py-1 text-[14px] bg-[#1677FF] text-white rounded-lg hover:bg-[#4096ff]">
              Search
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SearchBar;
