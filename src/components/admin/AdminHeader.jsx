import { useState } from "react";
import { Accordion, Col, Container, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { FaBackward, FaBootstrap, FaGlobe, FaHome, FaSpaceShuttle } from "react-icons/fa";
import Urls from "~/constants/Urls";
import ListCar from "../car/ListCar";

const AdminHeader = () => {


  return (
    <>
      <Nav className="bg-body-secondary rounded" variant="tabs" >

        <Nav.Item>
          <Nav.Link href="/admin" className="text-dark"><FaHome/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cars" href={"/admin/cars"} className="text-dark">Cars</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="brands" href={"/admin/brands"} className="text-dark">Brands</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="colors" href={"/admin/colors"} className="text-dark">Colors</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="users" href="" className="text-dark">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="home" href="/"><FaGlobe/> Web siteye geri dön</Nav.Link>
        </Nav.Item>
        
        

      </Nav>

    </>
  );
};

export default AdminHeader;
