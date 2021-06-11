import React from "react";
import { Card } from "react-bootstrap";

const CompanyLogo = () => {
  return (
    <Card style={{ width: '7rem', marginLeft: "0" }}>
      <Card.Img variant="top" src="data:image/png;base64,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" />
    </Card>
  )
}
export default CompanyLogo;