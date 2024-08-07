import React from 'react'
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";


export default function SidePanel() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

const navOptions = [
  {
    icon: "",
    key: "Home",
  },
  {
    icon: "",
    key: "Orders",
  },
  {
    icon: "",
    key: "Products",
  },
  {
    icon: "",
    key: "Delievery",
  },
  {
    icon: "",
    key: "Marketing",
  },
  {
    icon: "",
    key: "Analytics",
  },
  {
    icon: "",
    key: "Tools",
  },
  {
    icon: "",
    key: "Discounts",
  },
  {
    icon: "",
    key: "Audience",
  },
  {
    icon: "",
    key: "Appearance",
  },
  {
    icon: "",
    key: "Plugins",
  },
];

  return (
    <div className="w-[224px] bg-[#1E2640] px-[10px] py-4 h-screen overflow-auto flex flex-col gap-4 text-white">
      <div>
        <List
          sx={{ width: "100%"}}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick} sx={{padding:0}}>
            <ListItemIcon sx={{minWidth:0, marginRight:"12px"}}>
              <img
                src="SidePanelHeaderLogo.svg"
                alt=""
                className="w-[39px] h-[39px]"
              />
            </ListItemIcon>
            <ListItemText sx={{display:'flex', flexDirection:'column'}}>
              <p className='text-[15px] font-[500]'>Nishyan</p>
              <p className='text-[13px] font-[400]'>Visit Store</p>
            </ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit></Collapse>
        </List>
      </div>
      <div className='w-full flex flex-col gap-1'>
        {
            navOptions.map((item)=>{
                return (<div className='px-2 py-2'>
                    <p key={item.key}>{item.key}</p>
                </div>);  
            })
        }
      </div>
    </div>
  );
}
