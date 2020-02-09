import React from 'react';
import { Parallax, Background } from 'react-parallax';
// import laptop from '../ParalaxPics/laptopcafe.jpg';
import './contact.css';
import ModalExample from './modal';
import chart from './chart.png'; 

export class Contacts extends React.Component{

    render(){
        return (
            <div>
            <div className="Projects">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'></link>
            </div>
            <div class="container proposal">
            <div class="row">

           
            <div class="col-md-6">
            <h1 class="proposal-titlee">THE EFFECTS</h1>
            <h3 class = "proposal-sube">RECRUITS CAN JUDGE ACCURATELY POTENTIAL APPLICANTS
            <br></br><br></br>
            APPLICANTS CAN GET FEEDBACK AND ADJUST ACCORDINGLY
            </h3>

            <button type="button" class="btn btn-warning learn-more">LEARN MORE</button>
            </div>
            <div class="col-md-6">
                <img src={chart}></img>
            </div>
          
            </div>
            </div>
            
            </div>
            )
            }
            }