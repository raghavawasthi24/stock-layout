import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F2F2F2",
    color: 'black',
    padding:'10px 12px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
 
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Payments() {
  return (
    <div className="bg-[#FAFAFA] flex flex-col gap-8 p-4">
      <div>
        <p>Overview</p>
        <p></p>
      </div>

      <div className="flex justify-between gap-[20px]">
        <div className="p-4 bg-white w-full">
          <p className="text-[#4D4D4D] text-sm">Online orders</p>
          <p className="text-3xl">231</p>
        </div>
        <div className="p-4 bg-white w-full">
          <p className="text-[#4D4D4D] text-sm">Amount received</p>
          <p className="text-3xl">₹23,92,312.19</p>
        </div>
      </div>

      <div>Transactions | This Month</div>

      <div className="bg-white p-3">
        <div>
          <div className="border h-fit flex w-64">
            <IconButton type="button" sx={{}} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{}}
              placeholder="Search by order ID..."
              inputProps={{ "aria-label": "search google maps" }}
            />
          </div>
          <div></div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow sx={{padding:"10px"}}>
                  <StyledTableCell>Order ID</StyledTableCell>
                  <StyledTableCell align="right">Order Date</StyledTableCell>
                  <StyledTableCell align="right">Order Amount</StyledTableCell>
                  <StyledTableCell align="right">
                    Transaction fees
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
