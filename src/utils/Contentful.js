import { createClient } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { getPlaiceholder } from 'plaiceholder';

const spaceId = '2aze3ysrv2d1';
const accessToken = '0Tx6jqRaA9gOymNZuASo3nhOKu9JtHPKP1KFCI1dKkQ';

const renderOptions = {
  renderNode: {
    'embedded-asset-block': (node) =>
      `<img
        src="https://${node.data.target.fields?.file.url}"
        width="${node.data.target.fields?.file.details.image.width}"
        alt="${node.data.target.fields?.description}"
      />`
  }
};

export default class Contentful {
  static client = createClient({
    space: spaceId,
    accessToken
  });

  static async getBlog(slug) {
    const response = await this.client.getEntries({
      content_type: 'blogPost',
      'fields.slug[match]': slug
    });
    const blogs = await this.parseAllBlogPostEntries(response, true);
    return blogs?.length ? blogs[0] : null;
  }

  static async getDoc(slug) {
    const response = await this.client.getEntries({
      content_type: 'docPost',
      'fields.slug[match]': slug
    });
    const docs = await this.parseDocPostEntries(response, true);
    return docs?.length ? docs[0] : null;
  }
  // Get all blogs for detail blog page

  static async getAllBlogs() {
    const response = await this.client.getEntries({
      content_type: 'blogPost'
    });

    return this.parseAllBlogPostEntries(response, true);
  }

  static async getBlogs(skip = 0, limit = 5, searchQuery = {}) {
    const response = await this.client.getEntries({
      content_type: 'blogPost',
      ...searchQuery,
      order: '-sys.createdAt',
      skip,
      limit
    });
    return this.parseBlogPostEntries(response, false);
  }

  static async getarchivedBlogs(skip = 0, limit = 5, searchQuery = {}) {
    const response = await this.client.getEntries({
      content_type: 'blogPost',
      ...searchQuery,
      order: 'sys.createdAt',
      skip,
      limit
    });
    return this.parseBlogPostEntries(response);
  }

  static async getBlogsCount() {
    const response = await this.client.getEntries({
      content_type: 'blogPost',
      limit: 1
    });
    return response.total;
  }

  static async getDocs() {
    const response = await this.client.getEntries({
      content_type: 'docPost'
    });
    return this.parseDocPostEntries(response);
  }

  static async parseAllBlogPostEntries(entries, includeBody = false) {
    const parsedEntries = (await this.client.parseEntries(entries)).items;
    const promises = parsedEntries
      .map(async ({ sys, fields }) => {
        const coverImage = `https:${fields.coverImage.fields.file.url}`;
        // const coverImagePlaceholder = (
        //   await getPlaiceholder(coverImage, { size: 10 })
        // )?.base64;

        const body = documentToHtmlString(fields.body, renderOptions);

        return {
          id: sys.id,
          heading: fields.heading,
          subHeading: fields.subHeading || null,
          title: fields.title || fields.heading,
          author: fields.author || null,
          coverImage,
          // coverImagePlaceholder,
          slug: fields.slug,
          ...(includeBody && { body }),
          readingTime: Math.max(
            Math.round(body.replace(/(<([^>]+)>)/gi, '').length / 1400),
            1
          ),
          tags: fields?.tags || null,
          publishedDate: fields.publishedDate,
          updatedDate: fields.updatedDate || null,
          metaDes: fields.metaDescription || null,
          ...(includeBody && {
            bloqFaq: [
              ...(fields?.question1
                ? [
                    {
                      questionName: fields?.question1,
                      acceptedAnswerText: fields?.answer1
                    }
                  ]
                : []),
              ...(fields?.question2
                ? [
                    {
                      questionName: fields?.question2,
                      acceptedAnswerText: fields?.answer2
                    }
                  ]
                : []),
              ...(fields?.question3
                ? [
                    {
                      questionName: fields?.question3,
                      acceptedAnswerText: fields?.answer3
                    }
                  ]
                : []),
              ...(fields?.question4
                ? [
                    {
                      questionName: fields?.question4,
                      acceptedAnswerText: fields?.answer4
                    }
                  ]
                : []),
              ...(fields?.question5
                ? [
                    {
                      questionName: fields?.question5,
                      acceptedAnswerText: fields?.answer5
                    }
                  ]
                : [])
            ]
          })
        };
      })
      .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

    return Promise.all(promises);
  }

  static async parseBlogPostEntries(entries, includeBody = false) {
    const { items, total, skip, limit } = await this.client.parseEntries(
      entries
    );
    const promises = items.map(async ({ sys, fields }) => {
      const coverImage = `https:${fields.coverImage.fields.file.url}`;
      // const coverImagePlaceholder = (
      //   await getPlaiceholder(coverImage, { size: 10 })
      // )?.base64;

      const body = documentToHtmlString(fields.body, renderOptions);
      return {
        id: sys.id,
        heading: fields.heading,
        subHeading: fields.subHeading || null,
        author: fields.author || null,
        coverImage,
        slug: fields.slug,
        ...(includeBody && { body }),
        readingTime: Math.max(
          Math.round(body.replace(/(<([^>]+)>)/gi, '').length / 1400),
          1
        ),
        tags: fields?.tags || null,
        publishedDate: fields.publishedDate,
        updatedDate: fields.updatedDate || null,
        metaDes: fields.metaDescription || null,
        ...(fields.popular && { popular: fields.popular }),
        ...(fields.featured && { featured: fields.featured }),
        ...(includeBody && {
          bloqFaq: [
            {
              questionName: fields?.question1,
              acceptedAnswerText: fields?.answer1
            },
            {
              questionName: fields?.question2,
              acceptedAnswerText: fields?.answer2
            },
            {
              questionName: fields?.question3,
              acceptedAnswerText: fields?.answer3
            },
            ...(fields?.question4
              ? [
                  {
                    questionName: fields?.question4,
                    acceptedAnswerText: fields?.answer4
                  }
                ]
              : []),
            ...(fields?.question5
              ? [
                  {
                    questionName: fields?.question5,
                    acceptedAnswerText: fields?.answer5
                  }
                ]
              : [])
          ]
        })
      };
    });
    const data = await Promise.all(promises);

    return { data, total, skip, limit };
  }

  static async parseDocPostEntries(entries, includeBody = false) {
    const parsedEntries = (await this.client.parseEntries(entries)).items;
    return parsedEntries.map(({ sys, fields }) => {
      const body = documentToHtmlString(fields.body, renderOptions);
      return {
        id: sys.id,
        heading: fields.heading,
        subHeading: fields.subHeading || null,
        slug: fields.slug,
        ...(includeBody && { body }),
        tags: [],
        publishedDate: fields.publishedDate,
        updatedDate: fields.updatedDate || null
      };
    });
  }
}
