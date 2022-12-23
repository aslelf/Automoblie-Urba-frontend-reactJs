import { useState, useEffect, useMemo } from "react";
import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { FaBell, FaAirFreshener } from "react-icons/fa";
import { GiWindTurbine, GiCarDoor, GiFogLight } from "react-icons/gi";
import { MdAir } from "react-icons/md";
import { TbWiper } from "react-icons/tb";
import { CgSmartHomeLight, CgEditFlipV } from "react-icons/cg";
import "./welcome.css";

import gif from "assets/images/BackgroundImage.jpg";
import TimelineItem from "examples/Timeline/TimelineItem";
import palette from "assets/theme/base/colors";

const WelcomeMark = () => {
  const [meteorologicalData, setMeteorologicalData] = useState();

  // Poll the server for new data.
  useEffect(() => {
    const interval3 = setInterval(() => {
      fetch("http://localhost:1880/MeteorologicalState")
        .then((res) => res.json())
        .then(
          (result) => {
            setMeteorologicalData(result);
            console.log("Meteo res");
            console.log(result);
            console.log("Meteo res");
          },
          (error) => {
            console.log("error");
          }
        );
    }, 2000);
    return () => clearInterval(interval3);
  }, []);
  return (
    <div class="addTop">
      <Card
        sx={() => ({
          height: "230px",
          py: "5px",
          backgroundImage: `url(${gif})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
        })}
      >
        <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
          <VuiBox>
            <VuiTypography
              color="white"
              variant="button"
              fontWeight="bold"
              fontSize="20px"
              mb="19px"
            >
              État de la voiture
            </VuiTypography>
            <VuiTypography color="white" variant="h6" fontWeight="bold" mb="11px">
              {meteorologicalData ? (
                <>
                  <div class="flexing">
                    <div class="first">
                      {meteorologicalData.TurbineEolienne == "Activer" ? (
                        <>
                          <TimelineItem
                            icon={<GiWindTurbine size="16px" color="blue" />}
                            title=""
                            dateTime="Turbine Activaté"
                          />
                        </>
                      ) : (
                        <>
                          <TimelineItem
                            icon={<GiWindTurbine size="16px" color="white" />}
                            title=""
                            dateTime="Turbine Desactivé"
                          />
                        </>
                      )}
                      <div class="margClass">
                        {meteorologicalData.Climatiseur == "Activer" ? (
                          <>
                            {meteorologicalData.ClimatiseurNiveau == "haut" ? (
                              <>
                                <TimelineItem
                                  icon={<MdAir size="16px" color="red" />}
                                  title=""
                                  dateTime="Climatiseur Activé"
                                />
                              </>
                            ) : (
                              <>
                                <TimelineItem
                                  icon={<MdAir size="16px" color="white" />}
                                  title=""
                                  dateTime="Climatiseur Désactivé"
                                />
                              </>
                            )}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div class="margClass">
                        {meteorologicalData.ModeAirFrais == "Activer" ? (
                          <>
                            <TimelineItem
                              icon={<FaAirFreshener size="16px" color="blue" />}
                              title=""
                              dateTime="Assainisseur d'air Activé"
                            />
                            {/* Add a datetime value instead  */}
                          </>
                        ) : (
                          <>
                            <TimelineItem
                              icon={<FaAirFreshener size="16px" color="white" />}
                              title=""
                              dateTime="Assainisseur d'air Désactivé"
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div class="last">
                      {meteorologicalData.FenetrePassager == "Activer" ? (
                        <>
                          <TimelineItem
                            icon={<GiCarDoor size="16px" color="blue" />}
                            title=""
                            dateTime="Fenetres Passager Activés"
                          />
                        </>
                      ) : (
                        <>
                          <TimelineItem
                            icon={<GiCarDoor size="16px" color="white" />}
                            title=""
                            dateTime="Fenetres Passager Désactivés"
                          />
                        </>
                      )}
                      <div class="margClass">
                        {meteorologicalData.FeuxDeBrouillard == "Activer" ? (
                          <>
                            <TimelineItem
                              icon={<GiFogLight size="16px" color="blue" />}
                              title=""
                              dateTime="Feux de brouillard Activé"
                            />
                          </>
                        ) : (
                          <>
                            <TimelineItem
                              icon={<GiFogLight size="16px" color="white" />}
                              title=""
                              dateTime="Feux de brouillard Désactivé"
                            />
                          </>
                        )}
                      </div>
                      <div class="margClass">
                        {meteorologicalData.FeuxDeRoute == "Activer" ? (
                          <>
                            <TimelineItem
                              icon={<CgSmartHomeLight size="16px" color="blue" />}
                              title=""
                              dateTime="Feux de route Activé"
                            />
                          </>
                        ) : (
                          <>
                            <TimelineItem
                              icon={<CgSmartHomeLight size="16px" color="white" />}
                              title=""
                              dateTime="Feux de route Désactivé"
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div class="extra">
                      {meteorologicalData.EssueGlaces == "Activer" ? (
                        <>
                          <TimelineItem
                            icon={<TbWiper size="16px" color="blue" />}
                            title=""
                            dateTime="Essuie-glace Activé"
                          />
                        </>
                      ) : (
                        <>
                          <TimelineItem
                            icon={<TbWiper size="16px" color="white" />}
                            title=""
                            dateTime="Essuie-glace Désactivé"
                          />
                        </>
                      )}
                      <div class="margClass">
                        {meteorologicalData.Toit == "Activer" ? (
                          <>
                            <TimelineItem
                              icon={<CgEditFlipV size="16px" color="blue" />}
                              title=""
                              dateTime="Toit ouvert"
                            />
                          </>
                        ) : (
                          <>
                            <TimelineItem
                              icon={<CgEditFlipV size="16px" color="white" />}
                              title=""
                              dateTime="Toit fermé"
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </VuiTypography>
          </VuiBox>
          <VuiTypography
            component="a"
            href="#"
            variant="button"
            color="white"
            fontWeight="regular"
            sx={{
              mr: "5px",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          ></VuiTypography>
        </VuiBox>
      </Card>
    </div>
  );
};

export default WelcomeMark;
