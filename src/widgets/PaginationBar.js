import React from 'react';
import Link from 'next/link';

import { formatNumber } from '../utils/FormatNumber';

function PaginatedLink(props) {
  let display = props.children;
  if (props.addLink) {
    display = (
      <Link
        href={props.linkTo === 1 ? '/blog' : `/blog/page/${props.linkTo}`}
        type="button"
        className="inactive-page text-[18px]"
      >
        {display}
      </Link>
    );
  }
  return <li>{display}</li>;
}

function NumLink(props) {
  const { pageNum, linkNum } = props;
  return (
    <PaginatedLink addLink={pageNum !== linkNum} linkTo={linkNum}>
      {formatNumber(linkNum)}
    </PaginatedLink>
  );
}
function PrevLink(props) {
  const { pageNum } = props;
  return (
    <PaginatedLink addLink={pageNum > 1} linkTo={pageNum - 1}>
      <div className="inactive-page text-[18px]"> Previous Page</div>
    </PaginatedLink>
  );
}

function NextLink(props) {
  const { pageNum, totalPages } = props;
  return (
    <PaginatedLink addLink={pageNum < totalPages} linkTo={pageNum + 1}>
      <div className="inactive-page text-[18px]">Next Page</div>
    </PaginatedLink>
  );
}

function ProductListingNavigation(props) {
  const { pageNum, totalPages } = props;

  function getNumLinks() {
    const numLinks = [];
    numLinks.push(<NumLink key={0} linkNum={1} {...props} />);
    if (totalPages > 1) {
      let start = pageNum - 1;
      if (start < 2) {
        start = 2;
      } else if (start >= 4 && pageNum === totalPages) {
        start -= 2;
      } else if (
        start >= 3 &&
        (pageNum + 1 === totalPages || pageNum === totalPages)
      ) {
        start--;
      }
      let end = pageNum + 1;
      if (end < 4) {
        end = 4;
      }
      if (end > totalPages) {
        end = totalPages;
      }

      if (start > 2) {
        numLinks.push(
          <li className="list-dots" key={-1}>
            ...
          </li>
        );
      }
      for (let inc = start; inc <= end; inc++) {
        numLinks.push(<NumLink key={2 * inc} linkNum={inc} {...props} />);
      }
      if (end < totalPages - 1) {
        numLinks.push(
          <li className="list-dots" key={-2}>
            ...
          </li>
        );
      }
      if (end < totalPages) {
        numLinks.push(<NumLink key={-3} linkNum={totalPages} {...props} />);
      }
    }
    return numLinks;
  }

  if (pageNum <= 0 || pageNum > totalPages || !totalPages) {
    return null;
  }
  return (
    <div className="customPagination mt-3 mb-2">
      <ul className="text-[18px]">
        <PrevLink {...props} />
        {getNumLinks()}
        <NextLink {...props} />
      </ul>
    </div>
  );
}

export default ProductListingNavigation;
