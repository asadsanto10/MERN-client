import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginImage from '../../Asset/Img/login.jpg';

const axios = require('axios');

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [errorRegister, isErrorRegister] = useState({});

  const handelSubmitFrom = async (data) => {
    try {
      const { name, email, number, password, cPassword } = data;
      const message = await axios.post(
        'http://localhost:5000/register',
        {
          name,
          email,
          phone: number,
          password,
          cPassword,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // console.log(message.data.message);
      const success = message.data;
      isErrorRegister(success);
    } catch (error) {
      // console.log(error.response.data.error);
      const errormsg = error.response.data;
      isErrorRegister(errormsg);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    }

    //   const message = await fetch('http://localhost:5000/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       phone: number,
    //       password,
    //       cPassword,
    //     }),
    //   });
    //   const datas = await message.json();
    //   console.log(datas);
    // } catch (error) {
    //   console.log(error);
    // }

    // fetch('http://localhost:5000/register', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     phone: number,
    //     password,
    //     cPassword,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((ssd) => {
    //     console.log(ssd);
    //     // history.replace(from);
    //   });
  };

  return (
    <>
      <section id="login">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Form onSubmit={handleSubmit(handelSubmitFrom)}>
                <Form.Group>
                  <Form.Label>Youe Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Youe Name"
                    {...register('name', {
                      required: 'This field is required',
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: 'Only latter are allowed',
                      },
                      minLength: {
                        value: 5,
                        message: 'Minimum 5 characters to start',
                      },
                      maxLength: {
                        value: 12,
                        message: 'Maximum 12 characters to alowed',
                      },
                    })}
                  />
                  {errors.name && <span className="text-danger">{errors.name.message}</span>}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
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
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="number"
                    placeholder="Mobile Number"
                    {...register('number', {
                      required: 'This field is required',
                    })}
                  />
                  {errors.number && <span className="text-danger">{errors.number.message}</span>}
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

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="cPassword"
                    placeholder="Confirm Password"
                    {...register('cPassword', {
                      required: 'This field is required',
                      validate: (value) =>
                        value === watch('password') || 'The passwords do not match',
                    })}
                  />
                  {errors.cPassword && (
                    <span className="text-danger">{errors.cPassword.message}</span>
                  )}
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <Link className="mt-3" to="/login">
                Sign In
              </Link>
              {errorRegister && <p>{errorRegister.error || errorRegister.message}</p>}
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

export default Register;
