import { Container, Typography } from '@mui/material';
import productsData from '../data/data.json';
 
interface ContactInfo {
    heading: string;
    text: string;
    email: string;
}

const Contact = () => {

    const { contact }: { contact: ContactInfo } = productsData;
    return (
        <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Typography variant="h4" align="center" gutterBottom>{contact.heading}</Typography>
            <Typography variant="body1" align="center" paragraph>
            {contact.text}
            </Typography>
            <Typography variant="h6" align="center">{contact.email}</Typography>
        </Container> 
    )
}

export default Contact