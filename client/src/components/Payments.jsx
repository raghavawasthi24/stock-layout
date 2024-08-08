import React, { useEffect, useState } from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Pagination } from "@mui/material";
import { getPayment } from "../actions/payment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F2F2F2",
    color: "black",
    padding: "10px 12px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Payments() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const entriesPerPage = 10; // Number of entries per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPayment();
        console.log(res);
        setData(res.data);
      } catch (error) {
        alert("Couldn't get details!");
      }
    };

    fetchData();
  }, []);

  // Calculate the data to be displayed on the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentData = data.slice(indexOfFirstEntry, indexOfLastEntry);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

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

      <div className="bg-white p-3 flex flex-col items-center gap-3">
        <div className="w-full">
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
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow sx={{ padding: "10px" }}>
                <StyledTableCell>Order ID</StyledTableCell>
                <StyledTableCell align="right">Order Date</StyledTableCell>
                <StyledTableCell align="right">Order Amount</StyledTableCell>
                <StyledTableCell align="right">
                  Transaction fees
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((row) => (
                <TableRow key={row.orderId}>
                  <StyledTableCell component="th" scope="row">
                    {row.orderId}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.orderDate}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.orderAmount}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.transactionFees}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={Math.ceil(data.length / entriesPerPage)} // Calculate the number of pages
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}
