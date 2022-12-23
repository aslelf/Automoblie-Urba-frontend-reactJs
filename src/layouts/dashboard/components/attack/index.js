import React from 'react';
import { withRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Stack } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import linearGradient from 'assets/theme/functions/linearGradient';
import colors from 'assets/theme/base/colors';

const Attack = () => {  
  const { info, gradients } = colors;
	const { cardContent } = gradients;
  const  params  = useParams();
  console.log("/CheckViolenceAct/"+params.force)
	const http = axios.create({
    baseURL:"http://localhost:1880",
    headers:{
        "Content-type" : "application/json",
    }
  });
  http.get("/CheckViolenceAct/"+params.force+"/0").then((res) => {
    if(res.data['activity']==="normal"){
      document.getElementById("message").innerHTML =
      "<p class='wrapper'style='color : green'>Activité normale !</p>!"
      setTimeout(function(){ 
        document.getElementById("message").innerHTML =
        "";
        
      }, 10000);
    }
    else{
      document.getElementById("message").innerHTML =
      "<p style='color : red'> activité malveillante sur la surface de la voiture</p>";			
      setTimeout(function(){
        //params.force=5;
        http.get("/CheckViolenceAct/"+params.force+"/10").then((res) => {
          if(res.data['activity']==="Back to Safety"){
            document.getElementById("message").innerHTML =
            "<p class='wrapper'style='color : green'>la voiture n'est plus  en danger </p>!"
            setTimeout(function(){ 
              document.getElementById("message").innerHTML =
              "";
              
            }, 10000);
          }
          else{
            document.getElementById("message").innerHTML =
            "<p style='color : red'> l'activite malveillante persiste envoie de l'email au proproétaire et à la police</p>";			
          }
        });
      }, 10000);
    }
  });
  
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
						Détection des dangers et des actes de violence
					</VuiTypography>
				</VuiBox>
		  <div class="wrapper" id="message"></div>
			</VuiBox>
		</Card>

	);

  }
export default Attack;
