import React, { useMemo } from 'react';
import Layout from '@app/layouts/MainLayout';
import useTranslation from 'next-translate/useTranslation';
import Header from '@app/components/Header';
import HelloWorld from '@app/components/HelloWorld';
import Navbar from '@app/components/Navbar';
import HeroBanner from '../components/HeroBanner';

function Index(): JSX.Element {
  // const { t } = useTranslation();
  // const title = useMemo(() => t('home:title'), [t]);
  // const description = useMemo(() => t('home:description'), [t]);
  const headerFirst = 'About' ;
  const headerSecond = 'We love to make great things, things that matter.';
  const headerThird = 'Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.';

  return (
    <body>
      <Header headerFirst={headerFirst} headerSecond={headerSecond} headerThird={headerThird}>
      <Navbar/>
      </Header>
      <HeroBanner></HeroBanner>
    </body>
  );
}

export default Index;
