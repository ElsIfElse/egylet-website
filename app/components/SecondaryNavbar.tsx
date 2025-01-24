'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';
import { useUpdateRedirectState } from '../zustandStores/updateRedirectState';
import { checkAdmin } from '../utils/CheckAdmin';
import { useEffect,useState } from 'react';
import revalidateMainPage from '../utils/revalidateMain';
import { Divider } from '@mui/material';


export default function SecondaryNavbar({toggleAdminLogin}:{toggleAdminLogin: () => void}): React.JSX.Element{


        
    const [open, setOpen] = useState(false);
    const isAdmin = useUpdateRedirectState((state) => state.isAdmin);
    const setIsAdmin = useUpdateRedirectState((state) => state.setIsadmin);

    useEffect(()=>{
        if(checkAdmin()){
            setIsAdmin(true)
        }
        
    },[setIsAdmin])


  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const router = useRouter();

  const DrawerList = (
    <Box sx={{ width: 250,backgroundColor: '#3e4d39',border:0, outline:0, padding:0 }} role="menubar" onClick={toggleDrawer(false)}>
      <List sx={{border:0, outline:0, padding:0,backgroundColor: '#3e4d39',}}>
        <ListItem>
            <ListItemButton>
              <ListItemText  onClick={()=>router.push("/")} style={{fontFamily:"SourcePro"}} sx={{color:'#7f8430',fontFamily:"SourcePro"}} primary={"Főoldal"} />
            </ListItemButton>
          </ListItem>
          <Divider sx={{borderColor:'black'}} variant='fullWidth'  />
          <ListItem>
            <ListItemButton>
              <ListItemText onClick={()=>router.push("/players")}  sx={{color:'#7f8430',fontFamily:"SourcePro"}} primary={"Játékosok"} />
            </ListItemButton>
          </ListItem>
          <Divider sx={{borderColor:'black'}} variant='fullWidth'  />
          <ListItem>
            <ListItemButton>
              <ListItemText onClick={()=>router.push("/about")} sx={{color:'#7f8430',fontFamily:"SourcePro"}} primary={"Rólunk"} />
            </ListItemButton>
          </ListItem>
          <Divider sx={{borderColor:'black'}} variant='fullWidth'  />
          <ListItem>
            <ListItemButton>
              <ListItemText onClick={()=>toggleAdminLogin()} sx={{color:'#7f8430',fontFamily:"SourcePro"}} primary={"Admin Pass"} />
            </ListItemButton>
          </ListItem>
          {isAdmin &&
          <ListItem>
            <ListItemButton>
              <ListItemText onClick={()=>router.push("/createCharacter")} primary={"Karakter Készítés"} />
            </ListItemButton>
          </ListItem> }
          {isAdmin &&           
          <ListItem>
            <ListItemButton>
              <ListItemText onClick={()=>revalidateMainPage()} primary={"Refresh DB"} />
            </ListItemButton>
          </ListItem> }
      </List>
    </Box>
  );

  return (
    <div>
      <Button style={{color:'#7f8430',backgroundColor:'#3e4d39',padding:3, fontFamily:"SourcePro"}} onClick={toggleDrawer(true)}>| | |</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
