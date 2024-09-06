import FaqSEO from '../FaqSeo';

function FaqsPageSeo({ faqPageContent }) {
  return (
    <>
      <FaqSEO data={faqPageContent.general} />
      <FaqSEO data={faqPageContent.campaign} />
      <FaqSEO data={faqPageContent.email} />
      <FaqSEO data={faqPageContent.warmup} />
      <FaqSEO data={faqPageContent.ep} />
    </>
  );
}

export default FaqsPageSeo;
