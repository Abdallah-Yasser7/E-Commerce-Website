import React from "react";
import { Container } from "react-bootstrap";
import UnopDropdown from "unop-react-dropdown";
import "../../styles/Products.css"
import sort from "../../images/sort.png"

export const DropdownTitle = ({ title }) => {
  const handler = () => {}
  return (
    <Container className="d-flex justify-content-between p-3">
      <div className="dropdown-title">{title}</div>
      <UnopDropdown
        onAppear={handler}
        onDisappearStart={handler}
        trigger={
          <p className="p-drop">
            <img alt="" src={sort} className="img-drop"/>
            ترتيب حسب
          </p>
        }
        delay={0}
        align="CENTER"
        hover
      >
        <div className="option-drop">
          <div className="border-bottom p-2">الاكثر مبيعاّ</div>
          <div className="border-bottom p-2">الاعلي تقيماّ</div>
          <div className="border-bottom p-2">السعر من الاقل للاعلي</div>
          <div className="p-2">السعر من الاعلي للاقل</div>
        </div>
      </UnopDropdown>
    </Container>
  );
};
