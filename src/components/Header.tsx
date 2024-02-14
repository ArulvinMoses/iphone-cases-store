import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Header() {
  return (
    <AppBar 
        position="static" 
        style={{
            color:"#ffffff", 
            background: '#ffffff', 
            boxShadow: '0px 2px 4px -1px #efe9e9'
        }}>
        <Container>
            <Toolbar>
                <div style={{ flexGrow: 1 }}>
                <img 
                    alt="Logo" 
                    src={'images/1.png'} 
                    style={{ 
                        height: 40, 
                        marginRight: 10 
                    }} />
                </div>
                <Button 
                    variant="contained" 
                    style={{background: '#262626', borderRadius: '20px', boxShadow: 'none'}}
                    startIcon={
                        <WhatsAppIcon 
                        style={{
                            color: 'rgb(255 255 255)', 
                            background: "#1de11d",
                            borderRadius: '50%'
                        }}/>
                    }>
                        Enquire    
                </Button>
            </Toolbar>
        </Container>
    </AppBar>
  );
}

export default Header;