import { Typography } from "@mui/material"

const Header = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Typography variant="h3" color="primary" fontWeight="bold">Little buggs</Typography>
        <Typography variant="h4" color="secondary">Stylish iPhone Cases</Typography>
        <Typography variant="body1" color="secondary">Protect your iPhone with our premium quality cases</Typography>
      </div>
    )
}

export default Header