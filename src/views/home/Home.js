import "./home.css";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { appStore } from "../../App";
import Header from "../header/Header";
import { useTranslation } from "react-i18next";
import Loading from "../../components/loading/Loading";
export default function Home() {
  const { data, loading } = useContext(appStore);
  const { t, i18n } = useTranslation();
  return (
    <section className="home d-flex flex-column" style={{ paddingTop: "10em" }}>
      <Header />
      {data != "" ? (
        <Container>
          <div className="main__card">
            <h1>
              {t("country")}: {data?.location.country}
            </h1>
            <h2>
              {t("temp")}:{" " + data?.current.temp_c}
              <sup>o</sup>
            </h2>
            <p>
              {t("city")} : {data?.location.name}
            </p>
            <p>
              {t("timeZone")} : {data?.location.tz_id}
            </p>
            <span>{data?.current.condition.text}</span>
            <img src={data?.current.condition.icon} alt="weather icon" />
          </div>
          <table className="mt-3 w-100">
            <tbody>
              {data?.forecast.forecastday?.map((item) => (
                <tr>
                  <td>{item.date}</td>
                  <td>
                    {item.day.condition.text}
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      src={item.day.condition.icon}
                      alt="weather icon"
                    />
                  </td>
                  <td>
                    {item.day.maxtemp_c} / {item.day.mintemp_c} <sup>o</sup>C
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="weather__details mt-3 d-flex justify-content-around align-items-center flex-wrap p-3">
            <h3>
              {t("realTemp")}
              <p>
                {" " + data?.current.temp_c} <sup>o</sup>C
              </p>
            </h3>
            <h3>
              {t("sun rise")}
              <p>{data?.forecast.forecastday[0].astro.sunrise}</p>
            </h3>
            <h3>
              {t("sun set")} <p>{data?.forecast.forecastday[0].astro.sunset}</p>
            </h3>
            <h3>
              {t("uv")} <p>{data?.current.uv}</p>
            </h3>
          </div>
        </Container>
      ) : (
        <Loading />
      )}
    </section>
  );
}
