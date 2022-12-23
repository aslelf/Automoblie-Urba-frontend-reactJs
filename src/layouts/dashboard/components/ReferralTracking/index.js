import React from 'react';
import { Card, Stack } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import { FaEllipsisH } from 'react-icons/fa';
import linearGradient from 'assets/theme/functions/linearGradient';
import axios from 'axios';
import TimelineItem from "examples/Timeline/TimelineItem";
import { GiStopSign } from 'react-icons/gi';
import { useState, useEffect, useMemo } from "react";

function ReferralTracking() {
	const { info, gradients } = colors;
	const { cardContent } = gradients;
	const [RoadData, setRoadData] = useState();
	
	let RoadState="";
  // Poll the server for new data.
  const checkRoadSafety = () => {
	// api call
	const http = axios.create({
        baseURL:"http://localhost:1880",
        headers:{
            "Content-type" : "application/json",
        }
    });
	console.log(RoadState)
	if(RoadState==="Unsafe"){
		console.log("here");
		document.getElementById("danger").innerHTML =
		"<p class='wrapper'style='color : red'>Danger : Freinage automatique !</p>!"
		setTimeout(function(){ 
			document.getElementById("danger").innerHTML =
			"";
			RoadState="";
			
		}, 10000);
	}
	else if(RoadState==="Safe"){
		document.getElementById("Alert").innerHTML +=
		"<p style='color : red'>"+''+"</p>";			
	}
	else{ 
	 console.log("here in else");
	 http.get("/CheckRoadSafety").then((res) => {
	 RoadState=res.data['Road'];
	 console.log(RoadState);
	 console.log("hhh");
	 console.log(RoadState)
	 if(RoadState==="Safe"){
	 console.log("safe if")
	 document.getElementById("Alert").innerHTML =
	 "<p style='color : green'>"+res.data['Message']+"</p>";
	 setTimeout(function(){ 
		 document.getElementById("Alert").innerHTML =
		 "";
		 RoadState="";
		 
	 }, 10000);

 }if(RoadState==="Unsafe"){
	 console.log(res);
	 document.getElementById("Alert").innerHTML =
	 "<p style='color : red'>"+res.data['Message']+"</p>";
	 setTimeout(function(){ 
		 document.getElementById("Alert").innerHTML =
		 "";
		 RoadState="";
	 }, 10000);			
 }
	})

} 

}
	  

	return (
		<Card
			sx={{
				height: '100%',
				background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg)
			}}>
			<VuiBox sx={{ width: '100%' }}>
				<VuiBox
					display='flex'
					alignItems='center'
					justifyContent='space-beetween'
					sx={{ width: '100%' }}
					mb='40px'>
					<VuiTypography variant='lg' color='white' mr='auto' fontWeight='bold'>
						Passing Cars
					</VuiTypography>
				</VuiBox>
				<div class="wrapper" >
				<button type="button" class="button" onClick={checkRoadSafety}>
            Pass a Car
          </button>
		  <br/>
		  </div>
		  <div class="wrapper" id="Alert"></div>
			</VuiBox>
			<div id="danger">
                 
			</div>
		</Card>
	);
}

export default ReferralTracking;
