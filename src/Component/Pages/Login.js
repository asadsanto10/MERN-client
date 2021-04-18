import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginImage from '../../Asset/Img/login.jpg';
import './Login.scss';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSubmitFrom = (data) => {
    console.log(data);
  };

  return (
    <>
      <section id="login">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Form onSubmit={handleSubmit(handelSubmitFrom)}>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email adress"
                    {...register('email', {
                      required: 'This field is required',

                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                  />
                  {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...register('password', {
                      required: 'This field is required',
                      minLength: {
                        value: 8,
                        message: 'Password must have at least 8 characters',
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password.message}</span>
                  )}
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <Link className="mt-3" to="/register">
                Create account
              </Link>
            </Col>

            <Col md={6}>
              <img src={loginImage} className="responsive" alt="login" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
