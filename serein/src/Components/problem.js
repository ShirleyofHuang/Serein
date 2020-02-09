import React, { useState} from 'react';
import './problem.css';
import group from './group.png'


export class Problem extends React.Component{

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
            <div class="container" height="auto">
            <div class="row">
            <div class="col-md-6">
            <h1 class="proposal-title">The Problem</h1>
            <br></br>
            <h3 class = "proposal-subt">Companies are being forced to turn towards strategies to expedite the hiring process at the expense of transparency.</h3>
            </div>
                <div class="col-md-6">
                <img src={group} width="100%"></img>
                </div>
            </div>
            
            </div>
          
            </div>
            </div>
          
            )
            }
            }
