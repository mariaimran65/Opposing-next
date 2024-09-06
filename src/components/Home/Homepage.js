import LandingPage from '@/layouts/LandingPage';
// import FaqSEO from '../FaqSeo';
// import { faqContentHomePage } from '@/constants/faqSeoContent';
import MainImage from './MainImage';
import FindCar from './FindCar';
import HeroPage from './HeroPage';
import SoldPage from './SoldPage';
import ListYourVehicles from './ListYourVehicles';
import PremiumListesCards from './PremiumListesCards';

function HomePage() {
  return (
    <LandingPage>
      {/* <FaqSEO data={faqContentHomePage} /> */}
      <MainImage />
      <FindCar />
      <HeroPage />
      <SoldPage />
      <ListYourVehicles />
      <PremiumListesCards />
    </LandingPage>
  );
}

export default HomePage;
