import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { database } from "../../firebaseConfig";

export const EditUser = () => {
  const { users, editClick, removeClickHandler } = useContext(UserContext);
  const user = users.find((user) => user.id === editClick);
  const [values, setValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    insurancePrice: user.insurancePrice,
    paid: user.paid,
  });

  const changeHandler = (e) => {
    setValues((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const onEdit = (e) => {
    e.preventDefault();

    const userData = Object.fromEntries(new FormData(e.target));

    updateDoc(doc(database, "files", user.id), userData)
      .then(() => {
        removeClickHandler();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="overlay">
      <div className="backdrop"></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit User</h2>
            <button className="btn close" onClick={removeClickHandler}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </header>
          <form onSubmit={onEdit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
                <p className="form-error">
                  First name should be at least 3 characters long!
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
                <p className="form-error">
                  Last name should be at least 3 characters long!
                </p>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={values.email}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
                <p className="form-error">Email is not valid!</p>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone number</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    value={values.phoneNumber}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
                <p className="form-error">Phone number is not valid!</p>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="insurancePrice">Insurance Price</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    id="insurancePrice"
                    name="insurancePrice"
                    type="text"
                    value={values.insurancePrice}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
                <p className="form-error">insurancePrice is not valid!</p>
              </div>
              <div className="form-group">
                <label htmlFor="paid">Paid</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    id="paid"
                    name="paid"
                    type="text"
                    value={values.paid}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
                <p className="form-error">Phone number is not valid!</p>
              </div>
            </div>
            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">
                Edit
              </button>
              <button id="action-cancel" className="btn" type="button" onClick={removeClickHandler}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
