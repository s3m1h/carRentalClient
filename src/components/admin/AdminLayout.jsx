import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <Container fluid className="bg-dark text-dark min-vh-100">
                <Row className="justify-content-md-center">
                    <Col xs={15} md={10} >
                        <AdminHeader />
                        <div className="bg-white mt-2 mb-4 p-4 rounded">
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminLayout