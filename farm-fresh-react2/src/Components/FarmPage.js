import React, { useState } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const FarmPage = () => {
    //fetch farm data from server when the component mounts
    //set data to the farmlist state property

    const [farmList, setFarmList] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("")
            .then(res => {
                setFarmList(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>

        </>
    )
}

export default FarmPage;