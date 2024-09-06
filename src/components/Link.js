import PropTypes from 'prop-types';
import NextLink from 'next/link';

Link.propTypes = {
  href: PropTypes.string,
  prefetch: PropTypes.bool,
  children: PropTypes.node
};

export default function Link({ href, prefetch, children }) {
  return (
    <NextLink href={href} prefetch={prefetch}>
      <a>{children}</a>
    </NextLink>
  );
}
