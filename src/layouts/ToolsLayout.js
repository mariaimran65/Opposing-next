import React from 'react';
import LandingPage from './LandingPage';
import ToolsTabs from '@/components/Tools/ToolsTabs';
import Container from './Container';

function ToolsLayout({ children, tab }) {
  return (
    <LandingPage from="tools">
      <Container>
        <div className="flex flex-col justify-center items-center py-[4rem]">
          <ToolsTabs tab={tab} />
          {children}
        </div>
      </Container>
    </LandingPage>
  );
}

export default ToolsLayout;
