// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import { useState, useEffect, useMemo } from "react";
import Popup from "examples/PopUp/popup.js";
import { IoIosWarning } from "react-icons/io";

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [conductorSecurityData, setConductorSecurityData] = useState();
  const [drowsinessAlerte, setDrowsinessAlerte] = useState(false);
  const [drowsinessDetection, setDrowsinessDetection] = useState(true);

  useEffect(() => {
    
    const interval3 = setInterval(() => {
      if(drowsinessDetection){
      fetch("http://localhost:1880/data")
        .then((res) => res.json())
        .then(
          (result) => {
            setConductorSecurityData(result);
            console.log(result);
            if (result.status == "somnolent") {
              if (result.drowsiness == "yes") {
                
                  setDrowsinessAlerte(true);
                
              }
            }
          },
          (error) => {
            console.log("error");
          }
        );
      }
    }, 10000);
    
    return () => clearInterval(interval3);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={5}>
              <WelcomeMark />
            </Grid>
            <Grid item xs={12} lg={6} xl={3}>
              <SatisfactionRate
                conductorSecurityData={conductorSecurityData}
                setConductorSecurityData={setConductorSecurityData}
                drowsinessDetection={drowsinessDetection}
                setDrowsinessDetection={setDrowsinessDetection}
              />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking />
            </Grid>
          </Grid>
        </VuiBox>

        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={12}>
            <OrderOverview />
          </Grid>
        </Grid>
      </VuiBox>
      {conductorSecurityData && drowsinessDetection ? (
        <>
          {conductorSecurityData.status == "somnolent" ? (
            <>
              {conductorSecurityData.drowsiness == "yes" ? (
                <>
                  {conductorSecurityData.NbrDrowsiness != 3 ? (

                    <>{console.log("heeeeeere")}
                      <Popup trigger={drowsinessAlerte} setTrigger={setDrowsinessAlerte}>
                        <IoIosWarning size="150px" color="yellow" />
                        <br />
                        <hi>sleep risk ( warning tone) !!!!</hi>
                      </Popup>
                    </>
                  ) : (
                    <>
                      <Popup trigger={drowsinessAlerte} setTrigger={setDrowsinessAlerte}>
                        <IoIosWarning size="150px" color="red" />
                        <br />
                        <hi > Automatic Breaking !!! </hi>
                      </Popup>
                    </>
                  )}
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        <></>
      )}

      
    </DashboardLayout>
  );
}

export default Dashboard;
