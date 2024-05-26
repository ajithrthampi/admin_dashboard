import React from "react";
import {
    Typography,
    Alert,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Homepages from "../../pages/Homepages";
import Header from "../Header";

export function Notifications() {
    const [showAlerts, setShowAlerts] = React.useState({
        blue: true,
        green: true,
        orange: true,
        red: true,
    });
    const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
        blue: true,
        green: true,
        orange: true,
        red: true,
    });
    const alerts = ["gray", "green", "orange", "red"];

    return (
        <Homepages>
            <div className="h-[100%] overflow-hidden overflow-y-scroll no-scrollbar">
                <Header data={"Notifications"} />
                <div className="mx-auto  my-20 flex max-w-screen-lg flex-col gap-8">
                    <Card>
                        <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="m-0 p-4"
                        >
                            <Typography variant="h5" color="" className="font-Roboto">
                                Alerts
                            </Typography>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-4 p-4  ">
                            {alerts.map((color) => (
                                <Alert
                                    className={` bg-[${color}] w-full bg-red-500`}>
                                    <p>
                                        A simple {color} alert with an <a href="#">example link</a>. Give
                                        it a click if you like.
                                    </p>
                                </Alert>
                            ))}
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="m-0 p-4"
                        >
                            <Typography variant="h5" color="blue-gray" className="font-Roboto">
                                Alerts with Icon
                            </Typography>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-4 p-4">
                            {alerts.map((color) => (
                                <Alert
                                    key={color}
                                    open={showAlertsWithIcon[color]}
                                    // color={color}
                                    className={` bg-[${color}] bg-green-500`}
                                    icon={
                                        <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                                    }>
                                    A simple {color} alert with an <a href="#">example link</a>. Give
                                    it a click if you like.
                                </Alert>
                            ))}
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Homepages>



    );
}

export default Notifications;
