import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { t } from "i18next";
import { IoMdArrowRoundBack } from "react-icons/io";
export default function Dashboard() {
  const { currentUser, logOut } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logOut();
      navigate("/signup");
    } catch (erorr) {
      setError("Failed to log out" + error);
    }
  }
  return (
    <>
      <Card>
        <button
          style={{ width: "fit-content" }}
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-primary m-3"
        >
          <IoMdArrowRoundBack />
        </button>
        <Card.Body>
          <h2 className="text-center mb-4">{t("profile")}</h2>
          {error && (
            <Alert className="text-center" variant="danger">
              {"* " + error}
            </Alert>
          )}
          <strong>{t("email")}:</strong> {currentUser && currentUser.email}
          <Link to={"/update-profile"} className="btn btn-primary w-100 mt-3">
            {t("update profile")}
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button onClick={handleLogOut} className="btn btn-primary">
          {t("logout")}
        </Button>
      </div>
    </>
  );
}
