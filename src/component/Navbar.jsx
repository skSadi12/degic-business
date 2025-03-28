import React, { useState } from 'react';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function HpNavbar() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const menuItems = ['About', 'Services', 'Projects', 'Contacts'];

    return (
        <>
            <AppBar position='static' sx={{ backgroundColor: 'white', color: 'black', padding: '0.5rem' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {isMobile ? (
                        <IconButton color='inherit' onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Typography sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <img src="/logo1.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                        </Typography>
                    )}
                    
                    {!isMobile && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {menuItems.map((item) => (
                                <Button color='inherit' key={item}>{item}</Button>
                            ))}
                            <Button variant="outlined" sx={{
                                backgroundColor: '#2AB6911A',
                                color: '#2AB691',
                                '&:hover': {
                                    backgroundColor: 'blue',
                                    color: 'white',
                                }
                            }}>
                                Sign Up
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                <List>
                  <ListItem>
                  <img src="/logo1.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />

                  </ListItem>
                    {menuItems.map((item) => (
                        <ListItem key={item} onClick={() => setOpen(false)}>
                            <ListItemButton>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem onClick={() => setOpen(false)}>
                        <ListItemButton>
                            <Button variant="outlined" sx={{
                                backgroundColor: '#2AB6911A',
                                color: '#2AB691',
                                '&:hover': {
                                    backgroundColor: 'blue',
                                    color: 'white',
                                }
                            }}>
                                Sign Up
                            </Button>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default HpNavbar;
