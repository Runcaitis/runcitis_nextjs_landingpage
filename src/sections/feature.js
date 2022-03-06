/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Ātri',
    text:
      'Mēs spējam palīdzēt jums 10h laikā.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Profesionāli',
    text:
      'Mēs esam profesionāli un neizplatīsim jūsu informāciju.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Godīgi',
    text:
      'Mēs pret visiem mūsu partneriem izturamies ar cieņu.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Droši',
    text:
      'Mūsu atbalsta komanda ar jums ir gatava sazināties jebkurā situācijā.',
  },
];

export default function Feature() {
  return (
  <section sx={{variant:'section.feature'}}>
      <Container>
        <SectionHeader
        slogan="Labākie tajā ko daram"
        title="Daudz vērtīgu spēju"
        />
        <Grid sx={styles.grid}>{data.map((item) => (
          <FeatureCard
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}</Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
