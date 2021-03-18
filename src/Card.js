import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaPhone, FaMapMarked, FaEnvelope } from "react-icons/fa";

const Cards = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle image-thumbnail border-danger"
          src={details.picture?.large}
          alt=""
        />
        <CardTitle className="text-success">
          <h2>
            <span>{`${details.name?.title}. ${details.name?.first} ${details.name?.last}`}</span>
          </h2>
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default Cards;
