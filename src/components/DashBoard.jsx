import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { IconButton, Typography } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import Chart from './Chart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomPieChart from './CustomPieChart';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'
import CustomBarChart from './CustomBarChart';



const Dashboard = () => {
  const iconSize = 20;

 

  return (

    <div>
      <Grid container spacing={2}>

        {/* First Row */}
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ borderRadius: '12px', padding: '10px', height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: "flex", gap: 2 }}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: '12px',
                height: '25px',
                width: '25px',
                padding: '20px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#1DC4FF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'rotate(45deg)'
              }}
            >
              <PercentOutlinedIcon sx={{ fontSize: iconSize, color: 'white', fontWeight: 'bold', transform: 'rotate(-45deg)' }} />
            </Paper>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ marginTop: 1, fontSize: '17px', }}>82.7%</Typography>
              <Typography sx={{ fontSize: '14px', marginTop: 1, fontWeight: 'bold', color: 'gray' }}>Sales Monthly Goal</Typography>
              <LinearProgress
                variant="determinate"
                value={82.7}
                sx={{ width: '90%', height: '3px', borderRadius: '5px', marginTop: 1, backgroundColor: 'lightgray' }}
              />

              <Typography sx={{ color: "gray", mt: "2px" }}>Yearly Goal</Typography>
            </div>


          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={3} sx={{ borderRadius: '12px', padding: '20px', height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: "flex", gap: 2 }}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: '12px',
                height: '25px',
                width: '25px',
                padding: '20px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#1DC4FF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'rotate(45deg)'
              }}
            >
              <AttachMoneyIcon sx={{ fontSize: iconSize, color: 'white', fontWeight: 'bold', transform: 'rotate(-45deg)' }} />
            </Paper>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ marginTop: 1, fontSize: '17px', }}>82.7%</Typography>
              <Typography sx={{ fontSize: '15px', marginTop: 1, fontWeight: 'bold', color: 'gray' }}>Revenue</Typography>

              <div style={{ display: "flex", fontSize : "20px", marginTop: "4px", color: "#00CC14" }}>
                <FontAwesomeIcon icon={faChartSimple} />
                <FontAwesomeIcon icon={faChartSimple} />
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
            </div>


          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={3} sx={{ borderRadius: '12px', padding: '20px', height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: "flex", gap: 2 }}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: '12px',
                height: '25px',
                width: '25px',
                padding: '20px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#1DC4FF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'rotate(45deg)'
              }}
            >
              <PersonOutlineIcon sx={{ fontSize: iconSize, color: 'white', fontWeight: 'bold', transform: 'rotate(-45deg)' }} />
            </Paper>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ marginTop: 1, fontSize: '17px', }}>1600</Typography>
              <Typography sx={{ fontSize: '15px', marginTop: 1, fontWeight: 'bold', color: 'gray' }}>Customers</Typography>
              <LinearProgress
                variant="determinate"
                value={82.7}
                sx={{ width: '90%', height: '3px', borderRadius: '5px', marginTop: 1, backgroundColor: 'lightgray' }}
              />

              <Typography sx={{ color: "gray", mt: "2px" }}>Yearly Goal</Typography>
            </div>


          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={3} sx={{ borderRadius: '12px', padding: '20px', height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: "flex", gap: 2 }}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: '12px',
                height: '25px',
                width: '25px',
                padding: '20px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#1DC4FF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'rotate(45deg)'
              }}
            >
              <CalendarTodayIcon sx={{ fontSize: iconSize, color: 'white', fontWeight: 'bold', transform: 'rotate(-45deg)' }} />
            </Paper>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ marginTop: 1, fontSize: '17px', }}>$95</Typography>
              <Typography sx={{ fontSize: '15px', marginTop: 1, fontWeight: 'bold', color: 'gray' }}>Yestarday Earnings</Typography>


              <div style={{ display: "flex", fontSize : "20px", marginTop: "4px", color: "#FF8CB6" }}>
                <FontAwesomeIcon icon={faChartSimple} />
                <FontAwesomeIcon icon={faChartSimple} />
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
            </div>


          </Paper>
        </Grid>

      

        <Grid item xs={7}>
          <Paper elevation={3} sx={{ borderRadius: '12px', padding: '20px', height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', gap: 2, flexDirection: "column" }}>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "25px" }}>Sales</Typography>
              <Typography>Last Year <IconButton> <KeyboardArrowDownIcon /></IconButton> </Typography>
            </div>

            <Typography style={{ fontSize: "20px", marginLeft: "auto" }}>
              $9009.20
            </Typography>
            <Chart />
          </Paper>
        </Grid>



        <Grid item xs={5}>
          <Paper elevation={3} sx={{ borderRadius: '12px', padding: '20px', height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', gap: 2 }}>

            <CustomPieChart />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography sx={{ mt: 0, ml: "30px" }}>Last Year <IconButton> <KeyboardArrowDownIcon /></IconButton> </Typography>

              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li>

                    <p style={{ color: "gray" }}><span style={{ display: 'inline-block', width: '15px', height: '15px', borderRadius: '50%', border: '3px solid #000000', marginRight: '5px', position: 'relative', top: '2px' }}></span> Baked Apple Pie </p>
                  </li>
                  <li>

                    <p style={{ color: "gray" }}><span style={{ display: 'inline-block', width: '15px', height: '15px', borderRadius: '50%', border: '3px solid #FBFF00', marginRight: '5px', position: 'relative', top: '2px' }}></span> Baked Apple Pie </p>
                  </li>
                  <li>

                    <p style={{ color: "gray" }}><span style={{ display: 'inline-block', width: '15px', height: '15px', borderRadius: '50%', border: '3px solid #9D00FF', marginRight: '5px', position: 'relative', top: '2px' }}></span> Baked Apple Pie  </p>
                  </li>
                  <li>

                    <p style={{ color: "gray" }}><span style={{ display: 'inline-block', width: '15px', height: '15px', borderRadius: '50%', border: '3px solid #43FF00', marginRight: '5px', position: 'relative', top: '2px' }}></span> Baked Apple Pie </p>
                  </li>
                  <li>

                    <p style={{ color: "gray" }}><span style={{ display: 'inline-block', width: '15px', height: '15px', borderRadius: '50%', border: '3px solid #FF0000', marginRight: '5px', position: 'relative', top: '2px' }}></span> Baked Apple Pie </p>
                  </li>

                </ul>
              </div>
            </div>


          </Paper>
        </Grid>



        {/* Table Section  */}

        <Grid item xs={7}>
          <Paper elevation={3} sx={{ borderRadius: '12px', padding: '20px', height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', gap: 2, flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5">Up Coming Orders</Typography>
              <Typography>Last Year <IconButton> <KeyboardArrowDownIcon /></IconButton> </Typography>
            </div>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow style={{ background: "#8FE1FF33" }}>
                    <TableCell>Customer</TableCell>
                    <TableCell>Date and Time</TableCell>
                    <TableCell>Method</TableCell>
                    <TableCell>Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                 
                  <TableRow>
                    <TableCell><span style={{ display: 'inline-block', width: '18px', height: '18px', borderRadius: '50%', background: '#AD27FF', marginRight: '5px', position: 'relative', top: '2px' }}></span> John Doe</TableCell>
                    <TableCell>2024-02-05 10:00 AM</TableCell>
                    <TableCell>Pickup</TableCell>
                    <TableCell>$100.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><span style={{ display: 'inline-block', width: '18px', height: '18px', borderRadius: '50%', background: '#FF8413', marginRight: '5px', position: 'relative', top: '2px' }}></span>Jane Smith</TableCell>
                    <TableCell>2024-02-06 11:30 AM</TableCell>
                    <TableCell>Pickup</TableCell>
                    <TableCell>$75.50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><span style={{ display: 'inline-block', width: '18px', height: '18px', borderRadius: '50%', background: '#273DFF', marginRight: '5px', position: 'relative', top: '2px' }}></span>Jane Smith</TableCell>
                    <TableCell>2024-02-06 11:30 AM</TableCell>
                    <TableCell>Pickup</TableCell>
                    <TableCell>$75.50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><span style={{ display: 'inline-block', width: '18px', height: '18px', borderRadius: '50%', background: '#AD27FF', marginRight: '5px', position: 'relative', top: '2px' }}></span>Jane Smith</TableCell>
                    <TableCell>2024-02-06 11:30 AM</TableCell>
                    <TableCell>Pickup</TableCell>
                    <TableCell>$75.50</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>



        {/* Bar Graph Section */}
        <Grid item xs={5}>
          <Paper elevation={3} sx={{ borderRadius: '12px', padding: '20px', height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', gap: 2, flexDirection : "column" }}>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5">Store Overview</Typography>
              <Typography>All Stores <IconButton> <KeyboardArrowDownIcon /></IconButton> </Typography>
            </div>


            <div style={{display : "flex", gap : 20}}>

              <div style={{border : "1px solid #d3d3d3", padding  : "10px"}}>
                <Typography sx={{fontWeight : "bold", color : "red"}}>$12,500.23</Typography>
                <Typography>Weekly Over Due</Typography>
              </div>
              <div style={{border : "1px solid #d3d3d3",  padding  : "10px"}}>
              <Typography sx={{fontWeight : "bold", color : "red"}}>$12,500.23</Typography>
                <Typography>Make During this Week</Typography>
              </div>
            </div>

            <CustomBarChart/>

          </Paper>

        </Grid>


      </Grid>
    </div>

  );
}

export default Dashboard;
