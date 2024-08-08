import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FilterFramesOutlinedIcon from "@mui/icons-material/FilterFramesOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";

export default function SidePanel() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navOptions = [
    { icon: <HomeOutlinedIcon sx={{minWidth:"0px"}}/>, name: "Home" },
    { icon: <FilterFramesOutlinedIcon />, name: "Orders" },
    { icon: <CategoryOutlinedIcon />, name: "Products" },
    { icon: <LocalShippingOutlinedIcon />, name: "Delivery" },
    { icon: <CampaignOutlinedIcon />, name: "Marketing" },
    { icon: <AnalyticsOutlinedIcon />, name: "Analytics" },
    { icon: <ConstructionOutlinedIcon />, name: "Tools" },
    { icon: <DiscountOutlinedIcon />, name: "Discounts" },
    { icon: <PeopleOutlineOutlinedIcon />, name: "Audience" },
    { icon: <ColorLensOutlinedIcon />, name: "Appearance" },
    { icon: <BoltOutlinedIcon />, name: "Plugins" },
  ];

  return (
    <div className="w-[224px] bg-[#1E2640] px-[10px] py-4 h-screen overflow-auto flex flex-col gap-4 text-white">
      <div>
        <List sx={{ width: "100%" }} component="nav">
          <ListItemButton onClick={handleClick} sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 0, marginRight: "12px" }}>
              <img
                src="SidePanelHeaderLogo.svg"
                alt=""
                className="w-[39px] h-[39px]"
              />
            </ListItemIcon>
            <ListItemText sx={{ display: "flex", flexDirection: "column" }}>
              <p className="text-[15px] font-[500]">Nishyan</p>
              <p className="text-[13px] font-[400]">Visit Store</p>
            </ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit></Collapse>
        </List>
      </div>
      <div className="w-full flex flex-col gap-1">
        {navOptions.map((item, key) => (
          <ListItemButton
            key={key}
            sx={{ color: "white", padding: "8px 16px", display:"flex", alignItems:"center", gap:"12px"}}
          >
            <ListItemIcon sx={{ color: "white", minWidth:"0" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} sx={{fontSize:"14px"}}/>
          </ListItemButton>
        ))}
      </div>
    </div>
  );
}
