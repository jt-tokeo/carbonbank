import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react'

/**picto**/
import { Box, Button, IconButton, AppBar, Toolbar, Menu, Container, MenuItem } from '@mui/material';
import picto_Bag_01 from '../../media/picto/picto_bag_01.svg';
import logocarbon from '../../media/img/logo-carbon.png';

const Navs = [
  {
    link: "/",
    title: 'home',
  },
  {
    link: "/whoarewe",
    title: 'whoAreWe'
  },
  {
    link: "/projects",
    title: 'projects'
  },
  {
    link: "/signup",
    title: 'becomeInvestor'
  },
  {
    link: "/MenuCarbonIndividual",
    title: 'buyCredits'
  },
  {
    link: "/api",
    title: "API"
  },
  {
    link: "/contact",
    title: 'contact'
  }

];

function VisitorMenu() {
  let navigation = useNavigate();
  const { t, i18n } = useTranslation();
  const [navigate, setNavigate] = useState({
    left: false
  })
  // const [mobile, setMobile] = useState(false)
  // const [width, setWidth] = useState({
  //   inner : window.innerWidth,
  //   element: document.documentElement.clientWidth,
  //   body: document.body.clientWidth
  // })

  function handleLangChange(event) {
    i18n.changeLanguage(event.target.value);

  }

  // useEffect(() => {
  //   function resize() {
  //     setWidth({
  //       inner : window.innerWidth,
  //       element: document.documentElement.clientWidth,
  //       body: document.body.clientWidth
  //     })
  //   }
  //   window.addEventListener('rezise', resize);
  //   resize();
  //   return() => window.removeEventListener('resize', resize);
  // }, [])
  
  // useEffect(() => {
  //   if (width.inner < 1000 || width.element < 1000 || width.body < 1000) {
  //     setMobile(true)
  //   }else {
  //     setMobile(false)
  //   }
  // }, [width])
  

  const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  const [open, setOpen] = useState('')
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen('');
  };

  // const toggleDrawer = (anchor, open) => (event) => {
  //     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //         return;
  //     }

  //     setNavigate({ ...navigate, [anchor]: open })
  // }

  // if(mobile){
  //   return (
  //     <List>
  //         <ListItem>
  //             <Fragment key='left'>
  //                 <Button color='success' onClick={toggleDrawer('left', true)}>
  //                     Menu
  //                 </Button>
  //                 <SwipeableDrawer
  //                     anchor='left'
  //                     open={navigate.left}
  //                     onClose={toggleDrawer('left', false)}
  //                     onOpen={toggleDrawer('left', true)}
  //                 >
  //                     <Box
  //                         sx={250}
  //                         // role="presentation"
  //                         component="nav"
  //                         aria-label="mailbox folders"
  //                         onClick={toggleDrawer('left', false)}
  //                         onKeyDown={toggleDrawer('left', false)}
  //                     >
  //                         <List>
  //                             {Navs.map((nav, i) => {
  //                                 if (nav.undernav) {
  //                                     return (
  //                                         <>
  //                                             <ListItemButton disabled>
  //                                                 <ListItemText primary={nav.title} />
  //                                             </ListItemButton>
  //                                             {nav.undernav.map((n, index) => (
  //                                                 <List component="div" disablePadding>
  //                                                     <ListItemButton sx={{ pl: 4 }} onClick={() => navigation(n.link)}>
  //                                                         <ListItemText primary={n.title} />
  //                                                     </ListItemButton>
  //                                                 </List>
  //                                             ))}
  //                                         </>
  //                                     )
  //                                 } else {
  //                                     return (
  //                                         <ListItem button key={i} onClick={() => navigation(nav.link)}>
  //                                             <ListItemText primary={nav.title} />
  //                                         </ListItem>
  //                                     )
  //                                 }
  //                             })}
  //                         </List>
  //                     </Box>
  //                 </SwipeableDrawer>
  //             </Fragment>
  //         </ListItem>
  //         <ListItem>
  //             <IconButton size='small' onClick={() => navigation("/basket")}>
  //                 <img src={picto_Bag_01} alt="" />
  //             </IconButton>
  //         </ListItem>
  //         <ListItem>
  //             <Button variant='contained' color='success' onClick={() => navigation("/connection")}>{t('connection')}</Button>
  //         </ListItem>
  //         <ListItem>
  //             <select className="select01" name="lang" value={i18n.language} onChange={handleLangChange}>
  //                 <option className="langEng" value="en">en</option>
  //                 <option className="langFr" value="fr">fr</option>
  //             </select>
  //         </ListItem>
  //     </List>
  // );
  // } else {
    return (
      <AppBar position="static"
      sx={{backgroundColor: 'white'}}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="img"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, height: '5vh'}}
              alt="LOGO"
              src={logocarbon}
            />
  
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {Navs.map((page, i) => {
                if (page.undernav) {
                  return (
                    <div key={i}>
                      <Button
                        aria-controls={open === page.id ? page.id : undefined}
                        aria-haspopup="true"
                        aria-expanded={open === page.id ? 'true' : undefined}
                        sx={{ my: 2, color: 'black', display: 'block', '&:hover': {backgroundColor: '#3ED17D'}, backgroundColor: navigate.class === page.title? '#3ED17D' : null}}
                        onClick={(event) => {handleClick(event);setOpen(page.id)}}
                      >
                        {page.title}
                      </Button>
                      <Menu
                        id={page.id}
                        anchorEl={anchorEl}
                        open={open === page.id? true : false}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        {page.undernav.map((nav, index) => (
                          <MenuItem onClick={() => {handleClose() ; navigation(nav.link); setNavigate({...navigate, class: page.title});}}
                            sx={{'&:hover': {backgroundColor: '#3ED17D'}}}
                            key={index}
                          >{t(nav.title)}</MenuItem> 
                        ))}
                      </Menu>
                    </div>
                  )
                } else {
                  return (
                    <Button
                      key={i}
                      // onClick={handleCloseNavMenu}
                      onClick={() => {navigation(page.link); setNavigate({...navigate, class: page.title});}}
                      sx={{ my: 2, color: 'black', display: 'block', '&:hover': {backgroundColor: '#3ED17D'}, backgroundColor: navigate.class === page.title? '#3ED17D' : null }}
                    >
                      {t(page.title)}
                    </Button>
  
                  )
                }
              })}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
            <IconButton size='small' onClick={() => navigation("/basket")}>
                   <img src={picto_Bag_01} alt="" />
            </IconButton>
             <Button onClick={() => {navigation("/connection"); setNavigate({...navigate, class: 'connection'});}} sx={{ mr: 1, ml: 1, my: 2, color: 'black', '&:hover': {backgroundColor: '#3ED17D'}, backgroundColor: navigate.class === 'connection'? '#3ED17D' : null }}>{t('connection')}</Button>
  
            <select className="select01" name="lang" value={i18n.language} onChange={handleLangChange}>
                    <option className="langEng" value="en">en</option>
                    <option className="langFr" value="fr">fr</option>
                 </select>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  // }

}

export default VisitorMenu;