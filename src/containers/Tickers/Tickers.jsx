import * as React from 'react';
import { useState, useEffect } from 'react';
import { getTickers, getExchanges } from '../../api/actions/marketstack'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Tickers = () => {
    const [tickers, setTickers] = useState([]);
    const [exchanges, setExchanges] = useState([]);
    const [selectedExchanges, setSelectedExchanges] = useState([]);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    if (searchParams.get('exchange')) {
        setSelectedExchanges(searchParams.get('exchange'));
    }
    
    useEffect(() => {
        (async () => {
            const response = await getExchanges();
            setExchanges(response);
        })()
    }, []);

    useEffect(() => {
        (async () => {
            const response = await getTickers(exchanges);
            setTickers(response);
        })()
    }, []);

    const onClickEod = (symbols) => {
        navigate('/eod?symbols=' + symbols);
    }
    
    const tickersElement = tickers.map((ticker) => (
        <>  
            <br />
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                        <Typography variant="h5" component="div">
                            {ticker.name}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                            {ticker.symbol}
                        </Typography>
                        <Typography variant="body2">
                            Exchange:
                            <br />
                            {ticker.stock_exchange.name}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" onClick={() => onClickEod(ticker.symbol)}>Browse EOD stocks</Button>
                        </CardActions>
                    </React.Fragment>
                </Card>
            <br />
        </>
    ));

    const exchangeElements = exchanges.map((ec) => {
        <MenuItem value={ec.mic}>{ec.name}</MenuItem>
    });
    const handleChange = (event) => {
        setSelectedExchanges([...selectedExchanges, event.target.value]);
        (async () => {
            console.log('selectedExchanges', selectedExchanges)
            const response = await getTickers(selectedExchanges);
            setTickers(response);
        })()
    };
    return (
        <>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Exchange</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={exchanges}
                    label="Exchange"
                    onChange={handleChange}
                    multiple
                >
                {exchanges.map((ec) => (
                    <MenuItem
                    key={ec.mic}
                    value={ec.name}
                    >
                    {ec.name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </Box>
        
        {tickersElement}</>
    )
}

export default Tickers