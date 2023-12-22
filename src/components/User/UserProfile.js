import React from "react";
import editIcon from "../../images/edit_icon.png";
import { SubTitle } from "../Uitily/SubTitle";
import "../../styles/User.css";
import { ToastContainer } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { UserProfileHook } from "../../hook/User/UserProfileHook";

export const UserProfile = () => {
  const [
    user,
    show,
    handleClose,
    handleShow,
    handelUpdate,
    name,
    onChangeName,
    phone,
    onChangePhone,
    email,
    onChangeEmail,
    currentPassword,
    onChangeCurrentPassword,
    newPassword,
    onChangeNewPassword,
    passwordConfirm,
    onChangePasswordConfirm,
    handelClick
  ] = UserProfileHook();
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="input-add-brand"
            placeholder="الاسم"
            value={name}
            onChange={onChangeName}
          />
          <input
            type="text"
            className="input-add-brand mt-3"
            placeholder="رقم الهاتف"
            value={phone}
            onChange={onChangePhone}
          />
          <input
            type="text"
            className="input-add-brand mt-3"
            placeholder="الايميل"
            value={email}
            onChange={onChangeEmail}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <div className="font-modals">تراجع</div>
          </Button>
          <Button variant="success" onClick={handleClose}>
            <div className="font-modals" onClick={handelUpdate}>
              حفظ
            </div>
          </Button>
        </Modal.Footer>
      </Modal>

      <SubTitle title="الصفحه الشخصية" />
      <div className="parent-UserProfile">
        <div className="d-flex justify-content-between">
          <div>
            الاسم : <span style={{ color: "gray" }}>{user.name}</span>
          </div>
          <div onClick={handleShow} style={{ cursor: "pointer" }}>
            <img alt="" src={editIcon} className="deleteicon" />
            <span style={{ color: "gray", fontSize: "14px" }}>تعديل</span>
          </div>
        </div>
        <div className="mt-3">
          رقم الهاتف : <span style={{ color: "gray" }}>{user.phone}</span>
        </div>
        <div className="mt-3">
          الايميل : <span style={{ color: "gray" }}>{user.email}</span>
        </div>
      </div>

      <SubTitle title="تغير كلمة المرور" />

      <div className="mt-3 parent-edit-add">
        <input
          type="password"
          className="input-add-brand"
          placeholder="ادخل كلمة المرور القديمه"
          value={currentPassword}
          onChange={onChangeCurrentPassword}
        />
        <input
          type="password"
          className="input-add-brand mt-3"
          placeholder="ادخل كلمة المرور الجديده"
          value={newPassword}
          onChange={onChangeNewPassword}
        />
        <input
          type="password"
          className="input-add-brand mt-3"
          placeholder="تأكيد كلمة المرور الجديده"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
        <div className="d-flex justify-content-end">
          <button onClick={handelClick} className="btn-add-brand">حفظ كلمة المرور</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
