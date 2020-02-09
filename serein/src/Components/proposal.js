import React from 'react';
// import laptop from '../ParalaxPics/laptopcafe.jpg';
import './proposal.css';
import highlight from './highlight.jpg';

export class Proposal extends React.Component{

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

            <div class="col-md-6" style={{'vertical-align': 'middle', 'margin-top': '15%'}}>
                <img src={highlight} width="100%"></img>
            </div>
            <div class="col-md-6">
            <h1 class="proposal-title">Our Solution</h1>
            <br></br>
            <h3 class = "proposal-subt">Using Google Cloud Natural Language analysis we can quantify applicant strength and hiring criteria into a clear criteria shared with applicant and employer.</h3>
            </div>
          
            </div>
            </div>
            
            </div>
            )
            }
            }