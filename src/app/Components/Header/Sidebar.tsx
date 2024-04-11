import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

interface ISidebar {
  isOpen: boolean;
  openOptions: (newOpen: boolean) => () => void;
}

const mockData = [
  {
    id: 1,
    sidebarIcon: <InboxIcon />,
    description: "Main page",
    to: "/",
  },
  {
    id: 2,
    sidebarIcon: <InboxIcon />,
    description: "All category (for dev)",
    to: "allcategory",
  },
  {
    id: 3,
    sidebarIcon: <InboxIcon />,
    description: "Детектив",
    to: "detective",
  },
  {
    id: 4,
    sidebarIcon: <InboxIcon />,
    description: "Фантастика",
    to: "fantastic",
  },
  {
    id: 5,
    sidebarIcon: <InboxIcon />,
    description: "Научная фантастика",
    to: "scienceiction",
  },
  {
    id: 6,
    sidebarIcon: <InboxIcon />,
    description: "About",
    to: "about",
  },
];

function Sidebar({ isOpen, openOptions }: ISidebar) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {mockData.map((option) => (
          <ListItem key={option.id} disablePadding>
            <ListItemButton href={option.to}>
              <ListItemIcon>{option.sidebarIcon}</ListItemIcon>
              <ListItemText primary={option.description} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer open={isOpen} onClose={openOptions(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default Sidebar;
