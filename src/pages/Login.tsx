import { Button, Row, Col, Input } from 'antd'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const Home = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const navigate = useNavigate()

    const { setLoggedInUser } = useContext(UserContext)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value,
        }))
    }

    const handleLogin = () => {
        if (user.username && user.password) {
            localStorage.setItem('loggedInUser', user.username)
            // setLoggedInUser(user.username)
            navigate('movies')
            
        }
    }

    return (
        <div>
            <Row
                justify="center"
                align="top"
                style={{ minHeight: '100vh' }}
            >
                <Col span={8} style={{ margin: '50px' }}>
                    <form>
                        <div>
                            <label style={{ margin: '10px' }}>Username</label>
                            <Input
                                style={{ margin: '10px' }}
                                required
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleInputChange}
                                placeholder="Enter username"
                            ></Input>
                        </div>
                        <div>
                            <label style={{ margin: '10px' }}> Password</label>
                            <Input
                                style={{ margin: '10px' }}
                                required
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                                placeholder="Enter password"
                            ></Input>
                        </div>
                        <Row style={{ margin: '10px' }}>
                            <Col span={4}>
                                <Button type="primary" onClick={handleLogin}>
                                    Login
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </div>
    )
}

export default Home
