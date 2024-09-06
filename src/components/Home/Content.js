import GoCustomerToolContent from './GoCustomerToolContent';

function Content({ activeData }) {
  return (
    <GoCustomerToolContent
      icon={activeData.icon}
      iconAltText={activeData.iconAltText}
      heading={activeData.heading}
      text={activeData.text}
      video={activeData.video}
      link={activeData.link}
      image={activeData.image}
      hasImage={activeData.hasImage}
    />
  );
}

export default Content;
