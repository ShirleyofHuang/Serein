import React, { useState} from 'react';
import { Parallax, Background } from 'react-parallax';
// import laptop from '../ParalaxPics/laptopcafe.jpg';
import './problem.css';
import chart from './chart.png'
// import {Example} from './modal';
import ModalExample from './modal';


export class InputForm extends React.Component{
    state = { show: false };

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
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
            <div class="input-section">
                <br></br>
                <br></br>
            <div class="container">
            <div class="row">
            <div class="col-md-6">
            <h1 class="proposal-title">THE PROBLEM</h1>
            <br></br>
            <br></br>
            <h3 class = "proposal-subt">A LACK OF TRANSPANRANCY CAUSES DISTRUST IN THE WORKING FORCE</h3>
            <button type="button" class="btn btn-warning learn-more">LEARN MORE</button>
            </div>
                <div class="col-md-6">
                <img src={chart}></img>
                </div>
            </div>
            
            </div>
          
            </div>
            </div>
          
            )
            }
            }
