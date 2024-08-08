import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-[32px] py-[12px] sticky top-0 border-b-2 bg-white z-9999">
      <div className="flex gap-[12px]">
        <p>Payments</p>
        <p className="text-xs text-[#4D4D4D] flex items-center gap-[6px]">
          <HelpOutlineIcon sx={{ width: "15px" }} />
          How it works
        </p>
      </div>
      <div className="bg-[#F2F2F2] w-96 h-fit">
        <IconButton type="button" sx={{}} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{}}
          placeholder="Search features, tutorials "
          inputProps={{ "aria-label": "search google maps" }}
        />
      </div>
      <div className="flex gap-[12px]">
        <div className="w-[40px] h-[40px] bg-[#E6E6E6] rounded-full flex justify-center items-center">
          <CampaignIcon className="text-[#4D4D4D]" />
        </div>
        <div className="w-[40px] h-[40px] bg-[#E6E6E6] rounded-full flex justify-center items-center">
          <ArrowDropDownIcon className="text-[#4D4D4D]" />
        </div>
      </div>
    </div>
  );
}
