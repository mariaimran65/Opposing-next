import HomeView from '@/views/homepage';
import PageSEO from '@/components/pageSEO';

function Home() {
  return (
    <>
      <PageSEO pageKey="homepage" />
      <HomeView />
    </>
  );
}

export default Home;
