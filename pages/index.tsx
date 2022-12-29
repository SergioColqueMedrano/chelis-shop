import Typography from '@mui/material/Typography';
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts';


const Home: NextPage = () => {
  return (
   <ShopLayout title={'Chelis-Shop - Home'} pageDescription={'Encuentra los mejores productos de Chelis aquí'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
    </ShopLayout>
  )
}

export default Home