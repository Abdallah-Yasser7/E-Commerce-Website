import React from "react";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit_icon.png";
import { Button, Modal } from "react-bootstrap";
import { useAdminAllSubCategoryHook } from "../../hook/subcategory/AdminAllSubCategoryHook";

export const AdminAllSubCategory = ({ subCategory }) => {
  let id = subCategory._id;
  let name = subCategory.name;
  const [
    ,
    ,
    ,
    showDelete,
    handleClose,
    handelDelete,
    handleShow,
    showEdit,
    handleCloseEdit,
    handelEdit,
    handleShowEdit,
    handelChangeEdit,
    value
  ] = useAdminAllSubCategoryHook(id, name);

  return (
    <div className="parent-UserAdressCard mt-3" style={{ width: "60%" }}>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font-modals">
            هل انت متأكد من حذف التصنيف الفرعي ؟
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <div className="font-modals">تراجع</div>
          </Button>
          <Button variant="danger" onClick={handleClose}>
            <div className="font-modals" onClick={handelDelete}>
              حذف
            </div>
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            autoFocus
            onChange={handelChangeEdit}
            type="text"
            style={{ width: "100%", border: "none", outline: "none" }}
            value={value}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            <div className="font-modals">تراجع</div>
          </Button>
          <Button variant="success" onClick={handleCloseEdit}>
            <div className="font-modals" onClick={handelEdit}>
              حفظ
            </div>
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex justify-content-between">
        <div>
          اسم التصنيف الفرعي :{" "}
          <span style={{ fontWeight: "bold" }}>{subCategory.name}</span>
        </div>
        <div className="d-flex">
          <div onClick={handleShowEdit} style={{ cursor: "pointer" }}>
            <img alt="" src={editicon} className="deleteicon" />
            <span style={{ color: "gray", fontSize: "14px" }}>تعديل</span>
          </div>
          <div onClick={handleShow} style={{ cursor: "pointer" }}>
            <img alt="" src={deleteicon} className="deleteicon" />
            <span style={{ color: "gray", fontSize: "14px" }}>ازاله</span>
          </div>
        </div>
      </div>
    </div>
  );
};
