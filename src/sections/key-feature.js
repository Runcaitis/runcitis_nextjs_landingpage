/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import FeatureCard from 'components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Ātrums',
    text:
      'Mēs esam ātri un atrisinam visu ātri. Nevar zināt cik ātri, jo arī gaismas ātrums vēl joprojām nav izmērīts.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Darījumi',
    text:
      'Mēs esam profesionāļi, jo tas ir bizness. Bizness ir dzīve, jo mēs tajā esam katru dienu zini brāl. ',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Paziņas',
    text:
      'Mēs zinam rajonu un kā tajā ir jādzīvo. Mēs pazīstam visus galvenos kapitāla īpašniekus un ar tiem varam sarunāt.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Saziņa',
    text:
      'Sazinamies tikai ar vēstulēm, jo mums ir bail no elektrības. Esam draudzīgi un būsim gatavi sazināties arī personā. ',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant: 'section.keyFeature'}} id="feature">
<Container>
 <SectionHeader
 slogan="Mēs to varam"
 title="Mēs jums palīdzēsim"
 />
 <Grid sx={styles.grid}>
{data.map ((item) =>(
  <FeatureCardColumn
  key={item.id}
  src={item.imgSrc}
  alt={item.altText}
  title={item.title}
  text={item.text}
  />
))}
 </Grid>

</Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
