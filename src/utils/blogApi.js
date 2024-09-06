import Contentful from './Contentful';
import { setCacheData, isCacheKey, getCacheData } from './nodeCache';

export const getLatestPost = async (skip, limit) => {
  try {
    const blogs = await Contentful.getBlogs(skip, limit);
    return blogs;
  } catch (error) {
    return error?.message ? error.message : error;
  }
};

export const getfeaturedPost = async (skip, limit, searchQuery) => {
  try {
    let featuredPostData;
    const isKey = isCacheKey('featuredPost');
    if (isKey) {
      featuredPostData = getCacheData('featuredPost');
    } else {
      featuredPostData = await Contentful.getBlogs(skip, limit, searchQuery);
      setCacheData('featuredPost', featuredPostData, 86400);
    }
    return featuredPostData;
  } catch (error) {
    return error?.message ? error.message : error;
  }
};

export const getCategoriesPost = async (skip, limit, searchQuery) => {
  try {
    let featuredPostData;
    const isKey = isCacheKey('categoriesPost');
    if (isKey) {
      featuredPostData = getCacheData('categorisPost');
    } else {
      featuredPostData = await Contentful.getBlogs(skip, limit, searchQuery);
      setCacheData('categoriesPost', featuredPostData, 86400);
    }
    return featuredPostData;
  } catch (error) {
    return error?.message ? error.message : error;
  }
};

export const getArchivedPost = async (skip, limit, searchQuery) => {
  try {
    let archivedPostData;
    const isKey = isCacheKey('archivedPost');
    if (isKey) {
      archivedPostData = getCacheData('archivedPost');
    } else {
      archivedPostData = await Contentful.getarchivedBlogs(
        skip,
        limit,
        searchQuery
      );
      setCacheData('archivedPost', archivedPostData, 86400);
    }
    return archivedPostData;
  } catch (error) {
    return error?.message ? error.message : error;
  }
};

export const getPopularPost = async (skip, limit, searchQuery) => {
  try {
    let popularPostData;
    const isKey = isCacheKey('popularPost');
    if (isKey) {
      popularPostData = getCacheData('popularPost');
    } else {
      popularPostData = await Contentful.getBlogs(skip, limit, searchQuery);
      setCacheData('popularPost', popularPostData, 86400);
    }
    return popularPostData;
  } catch (error) {
    return error?.message ? error.message : error;
  }
};

export const getPostCount = async () => {
  try {
    const count = await Contentful.getBlogsCount();
    return count;
  } catch (error) {
    return error?.message ? error.message : error;
  }
};
