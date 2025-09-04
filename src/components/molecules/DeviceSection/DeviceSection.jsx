import React from "react";

const DeviceSection = ({ title, usage }) => (
    <div className="shadow-2 roundedMore bg-super-light-grey mb1">
        <p className="darkgray pl2 pt1 pb1">{title}</p>
        <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
            {usage}
        </p>
    </div>
);

export default DeviceSection;
