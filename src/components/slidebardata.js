import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';


export const Slidebardata =[
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "Profile",
        icon: <PersonIcon/>,
        link: "/home"
    },
    {
        title: "MENU",
        icon: <SpeakerNotesIcon/>,
        link: "/orderitems"
    },
    {
        title: "help",
        icon: <HelpIcon/>,
        link: "/home"
    },
    {
        title: "Contact",
        icon: <CallIcon/>,
        link: "/home"
    }
];