/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import Logis from 'assets/logis.png'
import Logo from 'components/logo';

export default function FirstPost() {
    return(
        <Container sx={styles.container}>
    <Logo layout="responsive" sx={styles.logo} src={Logis}/>

    <h1  sx={styles.h1}>Mēs diemžēl vēl nēesam sākuši strādāt</h1>
        </Container>
    )
    
  }
  const styles = {
 h1:{
    
  textAlign: 'center',
    
    
  
 },
   logo:{
  
    
   },
    container: {
      
        display: 'flex',
    alignItems: 'center',
   
        
      
      },
      
};