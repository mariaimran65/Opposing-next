export default function matchPath({ path, end = true }, pathname) {
  path = stripTrailingSlashes(path);
  pathname = stripTrailingSlashes(pathname);

  const areEqual = path === pathname;
  if (areEqual || end) return areEqual;

  const beginning = pathname.slice(0, pathname.lastIndexOf('/'));
  return beginning === path;
}

function stripTrailingSlashes(str) {
  if (str.startsWith('/')) str = str.slice(1);
  if (str.endsWith('/')) str = str.slice(0, str.length - 1);
  return str;
}
