import { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./header.css";
import { appStore } from "../../App";
export default function Header() {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { data, setData, setLoading } = useContext(appStore);
  let mounted = true;
  const changeEn = () => {
    i18n.changeLanguage("en");
    document.body.style.direction = "ltr";
  };
  const changeFr = () => {
    i18n.changeLanguage("fr");
    document.body.style.direction = "ltr";
  };
  const changeAr = () => {
    i18n.changeLanguage("ar");
    document.body.style.direction = "rtl";
  };

  useEffect(() => {
    const getData = async (country) => {
      const api_url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${country}&days=3`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ef0dbfd861mshe5dd4db07b1c6b3p131c09jsn81f251158520",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      setLoading(true);
      const response = await fetch(api_url, options);
      if (mounted) {
        const result = await response.clone().json();
        setData(result);
        setLoading(false);
      }

      return () => {
        mounted = false;
      };
    };
    const btn = document.getElementById("search_btn");
    const input = document.getElementById("search__input__filed");
    btn.onclick = () => {
      getData(input.value);
    };
    if (input.value === "") {
      getData("london");
    } else {
      btn.onclick = () => {
        getData(input.value);
      };
    }
  }, []);
  return (
    <header className="position-fixed top-0">
      <Container className="d-flex justify-content-around align-items-center">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="contain__result__search">
          <div id="search__container" className="search_input d-flex">
            <input
              id="search__input__filed"
              type="text"
              placeholder={t("search city")}
            />
            <button id="search_btn" className="search_btn">
              <IoSearch />
            </button>
          </div>
        </div>
        {currentUser != "" && (
          <Link to={"/signup"} className="signup__link">
            {t("sign up")}
          </Link>
        )}
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="btn__profile"
        >
          <FaRegUser />
        </button>
        <div className="dropdown">
          <button className="dropbtn">
            <MdLanguage /> <MdOutlineKeyboardArrowDown />
          </button>
          <div className="dropdown-content">
            <ul>
              <li>
                <button onClick={changeEn}>English</button>
              </li>
              <li>
                <button onClick={changeFr}>French</button>
              </li>
              <li>
                <button onClick={changeAr}>Arabic</button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
