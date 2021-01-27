import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Row,
  Col,
  UncontrolledDropdown,
  Dropdown,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const SalaryForm = ({ handleSubmit }) => {
  const [salary, setSalary] = useState(10000);
  const [country, setCountry] = useState(null);
  const [currency, setCurrency] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const request = {
      salary: salary,
      country: country,
      currency: currency,
    };

    console.log(request);

    handleSubmit(request);
  };

  return (
    <Form className="contact-form" onSubmit={handleFormSubmit}>
      <Row>
        <Col>
          <FormGroup>
            <Label htmlFor="salary">Salary</Label>
            <Input
              name="salary"
              type="numeric"
              id="salary"
              placeholder="Enter base salary..."
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <UncontrolledDropdown>
              <ButtonGroup>
                <Button color="secondary" type="button">
                  Country
                </Button>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  className="dropdown-toggle-split"
                  color="secondary"
                  data-toggle="dropdown"
                  type="button"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </DropdownToggle>
              </ButtonGroup>
              <DropdownMenu>
                <DropdownItem onClick={(e) => setCountry(e.target.innerHTML)}>
                  Colombia
                </DropdownItem>
                <DropdownItem onClick={(e) => setCountry(e.target.innerHTML)}>
                  Uruguay
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Input
              name="country"
              type="text"
              id="country"
              placeholder="Select a country"
              value={country}
              disabled={true}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="currency">Currency</Label>
            <Input
              name="currency"
              type="text"
              id="currency"
              placeholder="Select a currency"
              value="USD"
              onChange={(e) => console.log(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col className="ml-auto mr-auto" md="4">
          <FormGroup>
            <Button className="btn-fill" color="primary" size="sm">
              Calculate payroll
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default SalaryForm;
