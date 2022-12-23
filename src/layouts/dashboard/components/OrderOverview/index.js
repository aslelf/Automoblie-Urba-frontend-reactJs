import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";
import { useState, useEffect, useMemo } from "react";

function OrdersOverview() {
  const [meteorologicalData, setMeteorologicalData] = useState();

  // Poll the server for new data.
  useEffect(() => {
    const interval3 = setInterval(() => {
      fetch("http://localhost:1880/MeteorologicalState")
        .then((res) => res.json())
        .then(
          (result) => {
            setMeteorologicalData(result);
          },
          (error) => {
            console.log("error");
          }
        );
    }, 2000);
    return () => clearInterval(interval3);
  }, []);

  return (
    <Card className="h-100">
      <VuiBox mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Capteurs
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              Activé
            </VuiTypography>{" "}
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <style>
          {`.fooDiv {
              display: flex;
              flex-direction:row;
              flex-wrap:wrap;
              justify-content:space-between;
            }`}
        </style>
        <div className="fooDiv">
        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Capteur de visibilité "
              dateTime={
                "Vitesse :  " +
                meteorologicalData.VisibleValue +
                "m " +
                " Status :  " +
                meteorologicalData.VisibleStatus
              }
            />
          </>
        ) : (
          <></>
        )}
        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Capteur de précipitation "
              dateTime={
                "Vitesse :  " +
                meteorologicalData.PrecValue +
                "mm " +
                " Status :  " +
                meteorologicalData.PrecStatus
              }
            />
          </>
        ) : (
          <></>
        )}
        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Caméra des fenetres passagers "
              dateTime={
                "Fenetre Passager :  " +
                meteorologicalData.FenetrePassager +
                " Status :  " +
                meteorologicalData.FenetreCamStatus
              }
            />
          </>
        ) : (
          <></>
        )}
        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Capteur de tempétrature interne "
              dateTime={
                "Fenetre Passager :  " +
                meteorologicalData.TempValue +
                " °C " +
                meteorologicalData.TempStatus
              }
            />
          </>
        ) : (
          <></>
        )}
        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Capteur de vittesse de vent "
              dateTime={
                "Vitesse :  " +
                meteorologicalData.VendValue +
                "Km/h " +
                " Status :  " +
                meteorologicalData.VendStatus
              }
            />
          </>
        ) : (
          <></>
        )}
        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Capteur de neige "
              dateTime={
                "Vitesse :  " +
                meteorologicalData.NeigeValue +
                " cm " +
                " Status :  " +
                meteorologicalData.NeigeStatus
              }
            />
          </>
        ) : (
          <></>
        )}

        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Chauffage de sieges "
              dateTime={meteorologicalData.ChauffageDeSieges}
            />
          </>
        ) : (
          <></>
        )}

        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Chauffage des poignes des portes "
              dateTime={meteorologicalData.Chauffagepoigneporte}
            />
          </>
        ) : (
          <></>
        )}
        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Chauffage des essue-glaces "
              dateTime={meteorologicalData.ChauffageEssueGlaces}
            />
          </>
        ) : (
          <></>
        )}
        {meteorologicalData ? (
          <>
            <TimelineItem
              icon={<FaBell size="16px" color={palette.info.main} />}
              title="Chauffage des coffres "
              dateTime={meteorologicalData.ChauffageCoffres}
            />
          </>
        ) : (
          <></>
        )}

        {/* <TimelineItem icon={<AdobeXD size="20px" />} title="New order #9583120" dateTime="17 DEC" /> */}
        </div>
      </VuiBox>
    </Card>
  );
}

export default OrdersOverview;
