import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import LoginRegister from "../Dialog/LoginRegister";
import { NavLink } from "react-router-dom";

const navListMenuItems = [
    {
        title: "BUY A HOME",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "PROPERTIES IN PUNE",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "POPULAR SERCHES",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "LAND / PLOT",
        icon: SquaresPlusIcon,
    },

    {
        title: "",
        description: "FLATS",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "PROPERTIES IN PUNE",
        icon: SquaresPlusIcon,
    },

    {
        title: "",
        description: "COMMERCIAL",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Builder Floor",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Verified properties in pune",
        icon: SquaresPlusIcon,
    },

    {
        title: "",
        description: "POPULAR AREAS",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Independent house",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "New projects in pune",
        icon: SquaresPlusIcon,
    },

    {
        title: "",
        description: "POPULAR AREAS",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Plots in pune",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "ARTICALES AND NEWS",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Serviced Apartments",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Studio Apartment / 1 RK Flats",
        icon: SquaresPlusIcon,
    },
];

const sellItems = [
    {
        title: "FOR OWNER",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "FOR AGENT AND BUILDER",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "SELLING TOOLS",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Post property for free",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "My dashboard",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Property Valuation",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "My Dashboard",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Add packages",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Find an Agents",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Sales Enquiry",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Rates & Trends",
        icon: SquaresPlusIcon,
    },
];

const RentItems = [
    {
        title: "BUY A HOME",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "PROPERTIES IN PUNE",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "POPULAR SERCHES",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "LAND / PLOT",
        icon: SquaresPlusIcon,
    },

    {
        title: "",
        description: "FLATS",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "PROPERTIES IN PUNE",
        icon: SquaresPlusIcon,
    },

    {
        title: "",
        description: "COMMERCIAL",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Builder Floor",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Verified properties in pune",
        icon: SquaresPlusIcon,
    },

    {
        title: "",
        description: "POPULAR AREAS",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Independent house",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "New projects in pune",
        icon: SquaresPlusIcon,
    },

    {
        title: "",
        description: "POPULAR AREAS",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Plots in pune",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "ARTICALES AND NEWS",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Serviced Apartments",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        title: "",
        description: "Studio Apartment / 1 RK Flats",
        icon: SquaresPlusIcon,
    },
];

const DashboardItems = [
    {
        title: "Dashbord",
        description: "",
        icon: SquaresPlusIcon,
    },
    {
        description: "My properties",
    },
    {
        description: "My Invoices",
    },
    {
        description: "My Favorites",
    },
    {
        description: "Reviews",
    },
    {
        description: "My Profile",
    },
    {
        description: "Add property",
        navLink: "properties"
    },
];


function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSellMenuOpen, setIsSellMenuOpen] = React.useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isSellMobileMenuOpen, setSellIsMobileMenuOpen] = React.useState(false);

    const [isRentMenuOpen, setRentIsMenuOpen] = React.useState(false);
    const [isRentMobileMenuOpen, setRentIsMobileMenuOpen] = React.useState(false);

    const [isDashMenuOpen, setDashIsMenuOpen] = React.useState(false);
    const [isDashMobileMenuOpen, setDashIsMobileMenuOpen] = React.useState(false);


    const renderDashItems = DashboardItems.map(({ icon, title, description,navLink }, key) => (
        <a href="#" key={key}>
            <MenuItem className="flex items-center gap-3 rounded-lg">
                {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    {React.createElement(icon, {
                        strokeWidth: 2,
                        className: "h-6 text-gray-900 w-6",
                    })}
                </div> */}
                <div>
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center text-sm font-bold"
                    >
                        {title}
                    </Typography>
                    
                    <Typography
                        variant="paragraph"
                        className="text-xs !font-medium text-blue-gray-500"
                    >
                        <NavLink to={navLink}> {description}</NavLink>
                       
                    </Typography>
                   
                   
                </div>
            </MenuItem>
        </a>
    ))

    const renderRentItems = RentItems.map(({ icon, title, description }, key) => (
        <a href="#" key={key}>
            <MenuItem className="flex items-center gap-3 rounded-lg">
                {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    {React.createElement(icon, {
                        strokeWidth: 2,
                        className: "h-6 text-gray-900 w-6",
                    })}
                </div> */}
                <div>
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center text-sm font-bold"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="text-xs !font-medium text-blue-gray-500"
                    >
                        {description}
                    </Typography>
                </div>
            </MenuItem>
        </a>
    ))


    const renderSellItems = sellItems.map(({ icon, title, description }, key) => (
        <a href="#" key={key}>
            <MenuItem className="flex items-center gap-3 rounded-lg">
                {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    {React.createElement(icon, {
                        strokeWidth: 2,
                        className: "h-6 text-gray-900 w-6",
                    })}
                </div> */}
                <div>
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center text-sm font-bold"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="text-xs !font-medium text-blue-gray-500"
                    >
                        {description}
                    </Typography>
                </div>
            </MenuItem>
        </a>
    ));
    const renderItems = navListMenuItems.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div> */}
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            {/* BUY */}
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >

                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Buy
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
            {/* SELL  */}
            <Menu
                open={isSellMenuOpen}
                handler={setIsSellMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isSellMenuOpen || isSellMobileMenuOpen}
                            onClick={() => setSellIsMobileMenuOpen((cur) => !cur)}
                        >
                            Sell
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isSellMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isSellMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderSellItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isSellMobileMenuOpen}>{renderSellItems}</Collapse>
            </div>

            {/* RENT */}

            <Menu
                open={isRentMenuOpen}
                handler={setRentIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isRentMenuOpen || isRentMobileMenuOpen}
                            onClick={() => setRentIsMobileMenuOpen((cur) => !cur)}
                        >
                            Rent
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isRentMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isRentMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderRentItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isRentMobileMenuOpen}>{renderRentItems}</Collapse>
            </div>

            {/* Dashboard */}

            <Menu
                open={isDashMenuOpen}
                handler={setDashIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isDashMenuOpen || isDashMobileMenuOpen}
                            onClick={() => setDashIsMobileMenuOpen((cur) => !cur)}
                        >
                            Dashboard
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isDashMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isDashMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className=" gap-y-2 outline-none outline-0">
                        {renderDashItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isDashMobileMenuOpen}>{renderDashItems}</Collapse>
            </div>




        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                {/* <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem> */}
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                {/* <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Contact Us
                </ListItem> */}
            </Typography>
        </List>
    );
}

export function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <div>
            <Navbar className="mx-auto max-w-screen-4xl px-4 py-2 fixed z-10  top-0 rounded-none">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-2xl text-red-900"
                    >
                        RealEstate
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <div className="hidden gap-2 lg:flex">
                        <Button variant="outlined" size="sm" color="red" onClick={handleOpen}>
                            LogIn / Register
                        </Button>
                        <Dialog size="xs"
                            open={open}
                            handler={handleOpen}
                            className="bg-transparent shadow-none">
                            <LoginRegister />
                        </Dialog>
                        <Button variant="gradient" size="sm" color="red">
                            Submit Property
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                    <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                        <Button variant="outlined" size="sm" color="blue-gray" fullWidth onClick={handleOpen}>
                            LogIn / Register
                        </Button>
                        <Button variant="gradient" size="sm" fullWidth>
                            Submit Property
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Header