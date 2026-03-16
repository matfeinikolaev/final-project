import * as React from 'react';
import { useState, useEffect } from 'react';
import { getEOD } from '../../api/actions/marketstack'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom';

const EOD = () => {
    const [eod, setEod] = useState([]);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const symbols = searchParams.get('symbols');

    useEffect(() => {
        (async () => {
            const response = await getEOD(symbols)
            setEod(response)
        })()
    }, [])

    const onClick = (stock) => {
        console.log(stock)
    }

    const eodElements = eod.map((stock) => (
        <>  
            <br />
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                            <Typography variant="body2">
                                Open:
                                <br />
                                {stock.open}
                            </Typography>
                            <Typography variant="body2">
                                High:
                                <br />
                                {stock.high}
                            </Typography>
                            <Typography variant="body2">
                                Low:
                                <br />
                                {stock.low}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => onClick(stock)}>Save</Button>
                        </CardActions>
                    </React.Fragment>
                </Card>
            <br />
        </>
    ));

    return (
        <>{eodElements}</>
    )
}

export default EOD;