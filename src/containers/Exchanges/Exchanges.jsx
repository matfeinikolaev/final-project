import * as React from 'react';
import { useState, useEffect } from 'react';
import { getExchanges } from '../../api/actions/marketstack'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router'

const Exchanges = () => {
    const [exchanges, setExchanges] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const response = await getExchanges()
            setExchanges(response)
        })()
    }, [])

    const onClickTickers = (ec) => {
        navigate('/tickers?exchange=' + ec)
    }

    const exchangesElement = exchanges.map((ec) => (
        <>  
            <br />
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {ec.acronym}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {ec.name}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                            {ec.mic}
                        </Typography>
                        <Typography variant="body2">
                            Country:
                            <br />
                            {ec.country_code}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" onClick={() => onClickTickers(ec.mic)}>Browse Tickers</Button>
                        </CardActions>
                    </React.Fragment>
                </Card>
            <br />
        </>
    ));

    return (
        <>{exchangesElement}</>
    )
}

export default Exchanges