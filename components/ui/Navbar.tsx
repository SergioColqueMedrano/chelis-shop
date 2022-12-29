import NextLink from 'next/link';

import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from 'next/link';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref>
                <Link href='/'>
                    <Typography variant='h6' component='h1'>Chelis </Typography>
                    <Typography sx={{ ml: 0.5}}>shop</Typography>
                </Link>

            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
