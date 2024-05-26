import React from 'react'
import Homepages from '../../pages/Homepages'
import Header from '../Header'
import { HiHome } from "react-icons/hi2";
import { BiSolidMessageMinus } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Avatar,
    Typography,
    Tabs,
    TabsHeader,
    Tab,
    Switch,
    Tooltip,
    Button,
} from "@material-tailwind/react";
import {
    HomeIcon,
    ChatBubbleLeftEllipsisIcon,
    Cog6ToothIcon,
    PencilIcon,
} from "@heroicons/react/24/solid";
import platformSettingsData from '../../data/platform-settings-data';
import conversationsData from '../../data/conversations-data';
import projectsData from '../../data/projects-data';
import { Link } from 'react-router-dom';
import ProfileInfoCard from '../../widgets/cards/profile-info-card';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import MessageCard from '../../widgets/cards/message-card';
import pattern from '../../assets/login/pattern.png'






const Profile = () => {
    return (
        <Homepages>
            <div className=' w-full h-[100%] overflow-hidden overflow-y-scroll'>
                <Header data={"Profile"} />
                <div className={`relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('../')  bg-cover	bg-center`}
                    style={{ backgroundImage: `url(${pattern})` }}
                >
                    <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
                </div>
                <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
                    <CardBody className="p-4">
                        <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
                            <div className="flex items-center gap-6">
                                <Avatar
                                    src="https://tse1.mm.bing.net/th?id=OIP.X42b4q5g88ldlViDnsLj9QHaEK&pid=Api&P=0&h=180"
                                    alt="bruce-mars"
                                    size="xl"
                                    variant="rounded"
                                    className="rounded-lg shadow-lg shadow-blue-gray-500/40 w-[75px] h-[75px]"
                                />
                                <div>
                                    <Typography variant="h5" color="blue-gray" className="mb-1">
                                        Richard Davis
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        className="font-normal text-blue-gray-600"
                                    >
                                        CEO / Co-Founder
                                    </Typography>
                                </div>
                            </div>
                            <div className="w-96">
                                <Tabs value="app">
                                    <TabsHeader>
                                        <Tab value="app">
                                            <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                                            App
                                        </Tab>
                                        <Tab value="message">
                                            <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                                            Message
                                        </Tab>
                                        <Tab value="settings">
                                            <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                                            Settings
                                        </Tab>
                                    </TabsHeader>
                                </Tabs>
                            </div>
                        </div>
                        <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
                            <div>
                                <Typography variant="h6" color="blue-gray" className="mb-3 font-Roboto">
                                    Platform Settings
                                </Typography>
                                <div className="flex flex-col gap-12">
                                    {platformSettingsData.map(({ title, options }) => (
                                        <div key={title}>
                                            <Typography className="mb-4 block text-xs font-semibold uppercase text-gray-500">
                                                {title}
                                            </Typography>
                                            <div className="flex flex-col gap-6 font-Roboto">
                                                {options.map(({ checked, label }) => (
                                                    <Switch
                                                        className='checked:bg-[#60a563] bg-gray-200'
                                                        key={label}
                                                        id={label}
                                                        label={label}
                                                        defaultChecked={checked}
                                                        labelProps={{
                                                            className: "text-sm font-normal text-gray-500 pl-2",
                                                        }}
                                                    />
                                                ))}
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                            <ProfileInfoCard
                                title="Profile Information"
                                description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                                details={{
                                    "first name": "Alec M. Thompson",
                                    mobile: "(44) 123 1234 123",
                                    email: "alecthompson@mail.com",
                                    location: "USA",
                                    social: (
                                        <div className="flex items-center gap-4">
                                            <FaFacebook className='text-[#1976d2] text-base' />
                                            <FaTwitter className='text-[#42a5f5] text-base' />
                                            <IoLogoInstagram className='text-[#c96fb6] text-lg' />
                                        </div>
                                    ),
                                }}
                                action={
                                    <Tooltip content="Edit Profile">
                                        <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                                    </Tooltip>
                                }
                            />
                            <div>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Platform Settings
                                </Typography>
                                <ul className="flex flex-col gap-6">
                                    {conversationsData.map((props) => (
                                        <MessageCard
                                            key={props.name}
                                            {...props}
                                            action={
                                                <Button variant="text" size="sm">
                                                    reply
                                                </Button>
                                            }
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="px-4 pb-4">
                            <Typography variant="h6" color="blue-gray" className="mb-2 font-Roboto">
                                Projects
                            </Typography>
                            <Typography
                                variant="small"
                                className="font-normal text-gray-500 font-Roboto"
                            >
                                Architects design houses
                            </Typography>
                            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                                {projectsData.map(
                                    ({ img, title, description, tag, route, members }) => (
                                        <Card key={title} color="transparent" shadow={false}>
                                            <CardHeader
                                                floated={false}
                                                color="gray"
                                                className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                                            >
                                                <img
                                                    src={img}
                                                    alt={title}
                                                    className="h-full w-full object-cover"
                                                />
                                            </CardHeader>
                                            <CardBody className="py-0 px-1">
                                                <Typography
                                                    variant="small"
                                                    className="font-normal text-gray-500 font-Roboto"
                                                >
                                                    {tag}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    color="blue-gray"
                                                    className="mt-1 mb-2 font-Roboto"
                                                >
                                                    {title}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal text-gray-500 font-Roboto"
                                                >
                                                    {description}
                                                </Typography>
                                            </CardBody>
                                            <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                                                <Link to={route}>
                                                    <Button variant="outlined" size="sm" className='py-2 font-Roboto border border-black'>
                                                        view project
                                                    </Button>
                                                </Link>
                                                <div>
                                                    {members.map(({ img, name }, key) => (
                                                        <Tooltip key={name} content={name}>
                                                            <Avatar
                                                                src={img}
                                                                alt={name}
                                                                size="xs"
                                                                variant="circular"
                                                                className={`cursor-pointer border-2 rounded-full border-white ${key === 0 ? "" : "-ml-2.5"
                                                                    }`}
                                                            />
                                                        </Tooltip>
                                                    ))}
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    )
                                )}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Homepages>
    )
}

export default Profile