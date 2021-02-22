import React, { useState } from "react";
import {
    Card, CardImg, CardBody,CardTitle
  } from 'reactstrap';
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaLaughBeam } from "react-icons/fa";



const MyCard = ({receive}) => {

    const [currentData, setCurrentData] = useState('');

    const [name, setName] = useState('');

    const changeName = (args)=>{
        switch (args) {
            case "name":
                setCurrentData(receive.name?.title + receive.name?.first + receive.name?.last)
                break;
            case "phone":
                setCurrentData(receive.cell)
                break;
            case "email":
                setCurrentData(receive.email)
                break;
            case "age":
                setCurrentData(receive.dob?.age)
                break;
        
            default:
                break;
        }
    }

    return(
    <div>  
      <Card className="candy">
        <CardImg 
        className="rounded-circle img-thumbnail" top src={receive.picture?.large} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">
              <span>{currentData}</span>
          </CardTitle>
          <span>
              <FaUserAlt className="mr-4" size="25px" onClick={()=> changeName("name")}/>
              <FaEnvelope className="mr-4" size="25px" onClick={()=> changeName("email")}/>
              <FaPhoneAlt className="mr-4" size="25px" onClick={()=> changeName("phone")}/>
              <FaLaughBeam className="mr-4" size="25px" onClick={()=> changeName("age")}/>
          </span>
        </CardBody>
      </Card>
    </div>
    )
}

export default MyCard;