import { Container, Grid, Select, Typography, MenuItem } from "@mui/material"
import AppleIcon from '@mui/icons-material/Apple';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import data from '../data/data.json';
import { useState } from "react";

interface Iphones {
    series: number,
    model: string[]
}

interface Colors {
    color: string
}

function Filters() {
    const { iphones, colors }: { iphones: Iphones[], colors: Colors[] } = data;

    const [selectedSeries, setSelectedSeries] = useState<number | "all">("all");

    const selectingSeries = (select: any) => {
        setSelectedSeries(select.series)
    }

    const handleChange = (event:any) => {
        setSelectedSeries(event.target.value);
    };

    return (
        <Container>
            <Grid container rowGap={5}>
                <Grid
                    container
                    spacing={2}
                    columns={10}
                    alignItems="center"
                    justifyContent="center"
                >
                    {iphones.map((iphone) => {
                        return (
                            <Grid
                                container
                                item
                                direction="column"
                                xs={2}
                                alignItems="center"
                                justifyContent="center"
                                onClick={() => selectingSeries(iphone)}
                                style={{
                                    backgroundColor: selectedSeries === iphone.series ? '#383838' : 'transparent',
                                    borderRadius: '5px',
                                    padding: '10px'
                                }}
                            >
                                <Typography
                                    style={{
                                        color: selectedSeries === iphone.series ? '#FFFFFF' : "#6E6E6E",
                                        borderRadius: '5px',
                                        fontSize: selectedSeries === iphone.series ? '24px' : "16px"
                                    }}
                                >
                                    <AppleIcon
                                        style={{
                                            color: selectedSeries === iphone.series ? '#FFFFFF' : "#9A9A9A",
                                            borderRadius: '5px',
                                            fontSize: selectedSeries === iphone.series ? '20px' : "14px"
                                        }}
                                    />
                                    IPhone
                                </Typography>
                                <Typography
                                    style={{
                                        color: selectedSeries === iphone.series ? '#FFFFFF' : "#6E6E6E",
                                        borderRadius: '5px',
                                        fontSize: selectedSeries === iphone.series ? '60px' : "52px"
                                    }}
                                >
                                    {iphone.series}
                                </Typography>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid
                    container
                    rowSpacing={3}
                    spacing={2}
                    columns={12}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid
                        item
                        md={4}
                        alignItems="flex-start"
                    >
                        <Select
                            value={selectedSeries}
                            onChange={(event)=>handleChange(event)}
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: '20px' }}
                        >
                            <MenuItem value="all">All</MenuItem>
                            {iphones.map((iphone) => (
                                <MenuItem key={iphone.series} value={iphone.series}>{iphone.series}</MenuItem>
                            ))}
                        </Select>
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        container
                        direction="row"
                    >
                        {colors.map((data: any) => (
                            <Grid
                                key={data}
                                xs={2}
                                container
                                alignItems="center"
                                justifyContent="center"
                            >
                                <FiberManualRecordIcon
                                    style={{
                                        color: data.color,
                                        fontSize: "25px",
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Filters
