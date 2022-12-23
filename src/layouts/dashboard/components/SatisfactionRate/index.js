import React from "react";

import { Card } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { IoHappy } from "react-icons/io5";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
import { useState, useEffect, useMemo } from "react";

import { FaHeartbeat, FaTired } from "react-icons/fa";
import { ImSleepy2 } from "react-icons/im";
import { BiHappy } from "react-icons/bi";
import { GiSteeringWheel } from "react-icons/gi";
import { FiCoffee } from "react-icons/fi";
import { IoIosWarning } from "react-icons/io";

import Popup from "examples/PopUp/popup.js";
import "./index.css";
const SatisfactionRate = ({
  conductorSecurityData,
  setConductorSecurityData,
  drowsinessDetection,
  setDrowsinessDetection,
}) => {
  const { info, gradients } = colors;
  const { cardContent } = gradients;

  return (
    <>
      <Card sx={{ height: "340px" }}>
        <VuiBox display="flex" flexDirection="column">
          <div className="sssh">
            <VuiTypography variant="lg" color="white" fontWeight="bold" mb="4px">
              Driver drowsiness detection
            </VuiTypography>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setDrowsinessDetection(!drowsinessDetection)}
                defaultChecked={true}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {conductorSecurityData && drowsinessDetection ? (
            <>
              <VuiBox sx={{ alignSelf: "center", justifySelf: "center", zIndex: "-1" }}>
                <VuiBox sx={{ position: "relative", display: "inline-flex" }}>
                  {conductorSecurityData.status == "normale" ? (
                    <>
                      <FaHeartbeat size="200px" color="green" />
                    </>
                  ) : (
                    <>
                      {conductorSecurityData.status == "somnolent" &&
                      conductorSecurityData.drowsiness == "no" ? (
                        <>
                          <FaHeartbeat size="200px" color="yellow" />
                        </>
                      ) : (
                        <></>
                      )}
                      {conductorSecurityData.status == "somnolent" &&
                      conductorSecurityData.drowsiness == "yes" ? (
                        <>
                          <FaHeartbeat size="200px" color="red" />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </VuiBox>
              </VuiBox>

              <VuiBox
                sx={({ breakpoints }) => ({
                  width: "90%",
                  padding: "18px 22px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  height: "82px",
                  mx: "auto",
                  borderRadius: "20px",
                  background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                  transform: "translateY(-90%)",
                  zIndex: "1000",
                })}
              >
                <VuiBox
                  flexDirection="column"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ minWidth: "80px" }}
                >
                  {conductorSecurityData.status == "normale" ? (
                    <>
                      <VuiTypography color="white" variant="h3">
                        <BiHappy size="30px" color="green" />
                      </VuiTypography>
                      <VuiTypography color="text" variant="caption" fontWeight="regular">
                        Active
                      </VuiTypography>
                    </>
                  ) : (
                    <>
                      {conductorSecurityData.status == "somnolent" &&
                      conductorSecurityData.drowsiness == "no" ? (
                        <>
                          <VuiTypography color="white" variant="h3">
                            <FaTired size="30px" color="yellow" />
                          </VuiTypography>
                          <VuiTypography color="text" variant="caption" fontWeight="regular">
                            Tired
                          </VuiTypography>
                        </>
                      ) : (
                        <></>
                      )}
                      {conductorSecurityData.status == "somnolent" &&
                      conductorSecurityData.drowsiness == "yes" ? (
                        <>
                          <VuiTypography color="white" variant="h3">
                            <ImSleepy2 size="30px" color="red" />
                          </VuiTypography>
                          <VuiTypography color="text" variant="caption" fontWeight="bold">
                            Sleepy
                          </VuiTypography>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </VuiBox>

                <VuiBox
                  flexDirection="column"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ minWidth: "80px" }}
                >
                  <VuiTypography color="white" variant="h3">
                    {conductorSecurityData ? conductorSecurityData.fr : <>NaN</>}
                  </VuiTypography>
                  <VuiTypography color="text" variant="caption" fontWeight="regular">
                    pulsation
                  </VuiTypography>
                </VuiBox>

                <VuiBox
                  flexDirection="column"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ minWidth: "80px" }}
                >
                  {conductorSecurityData.status == "normale" ? (
                    <>
                      <VuiTypography color="white" variant="h3">
                        <GiSteeringWheel size="30px" color="green" />
                      </VuiTypography>
                      <VuiTypography color="text" variant="caption" fontWeight="regular">
                        Go ahead
                      </VuiTypography>
                    </>
                  ) : (
                    <>
                      {conductorSecurityData.status == "somnolent" &&
                      conductorSecurityData.drowsiness == "no" ? (
                        <>
                          <VuiTypography color="white" variant="h3">
                            <FiCoffee size="30px" color="yellow" />
                          </VuiTypography>
                          <VuiTypography color="text" variant="caption" fontWeight="regular">
                            Take a rest
                          </VuiTypography>
                        </>
                      ) : (
                        <></>
                      )}
                      {conductorSecurityData.status == "somnolent" &&
                      conductorSecurityData.drowsiness == "yes" ? (
                        <>
                          <VuiTypography color="white" variant="h3">
                            <IoIosWarning size="30px" color="red" />
                          </VuiTypography>
                          <VuiTypography color="text" variant="caption" fontWeight="bold">
                            Stop !
                          </VuiTypography>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </VuiBox>
              </VuiBox>
            </>
          ) : (
            <>
            <VuiBox sx={{ alignSelf: "center", justifySelf: "center", zIndex: "-1" }}>
              <VuiBox sx={{ position: "relative", display: "inline-flex" }}>
                 <FaHeartbeat size="200px" color="grey" />

              </VuiBox>
            </VuiBox>

            <VuiBox
              sx={({ breakpoints }) => ({
                width: "90%",
                padding: "18px 22px",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                height: "82px",
                mx: "auto",
                borderRadius: "20px",
                background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                transform: "translateY(-90%)",
                zIndex: "1000",
              })}
            >
              <VuiBox
                flexDirection="column"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ minWidth: "80px" }}
              ><VuiTypography color="white" variant="h3">
                      <BiHappy size="30px" color="grey" />
                    </VuiTypography>
                    <VuiTypography color="text" variant="caption" fontWeight="regular">
                      NaN
                    </VuiTypography>

              </VuiBox>

              <VuiBox
                flexDirection="column"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ minWidth: "80px" }}
              >
                <VuiTypography color="white" variant="h3">
                  NaN
                </VuiTypography>
                <VuiTypography color="text" variant="caption" fontWeight="regular">
                  pulsation
                </VuiTypography>
              </VuiBox>

              <VuiBox
                flexDirection="column"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ minWidth: "80px" }}
              ><VuiTypography color="white" variant="h3">
                      <GiSteeringWheel size="30px" color="grey" />
                    </VuiTypography>
                    <VuiTypography color="text" variant="caption" fontWeight="regular">
                      NaN
                    </VuiTypography>

              </VuiBox>
            </VuiBox>
          </>
          )}
        </VuiBox>
      </Card>
    </>
  );
};

export default SatisfactionRate;
