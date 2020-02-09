import React from 'react';
import Chart from 'chart.js'
import chart from './chart.png';
import './livedemo.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    UncontrolledCollapse,
    Button,
    Card, 
    CardBody
  } from 'reactstrap';

export class LiveDemo extends React.Component{
    drawChart() {
        var data = {
            labels: ["Hard Skills", "Initiative", "Creativity", "Attitude"],
            datasets: [
                {
                    label: "Anish",
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [31, 62, 29, 75]
                },
                {
                    label: "Shirley",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [40, 56, 83, 80]
                },
                {
                    label: "Michael",
                    backgroundColor: "rgba(144,238,144,0.2)",
                    borderColor: "rgba(144,238,144,1)",
                    pointBackgroundColor: "rgba(144,238,144,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(144,238,144,1)",
                    data: [95, 13, 28, 60]
                },
                {
                    label: "Internship",
                    backgroundColor: "rgba(106,113,173,0.2)",
                    borderColor: "rgba(106,113,173,1)",
                    pointBackgroundColor: "rgba(106,113,173,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(106,113,173,1)",
                    data: [70, 40, 60, 90]
                }
            ]
        };
        var ctx = document.getElementById("myChart");
        var options = {
                        tooltips: {
                    mode: 'label'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            };
        var myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: options
        });
       
    }

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
            <div class='column' className='balance'>
           
            <div>
                <br></br>
                <h2>LIVE DEMO</h2>
                <div class="row">
                    <div class="col-md-6">
                        <img src={chart}></img>
                    </div>
                    <div class="col-md-6">
                    <Button color="warning" id="toggler1" style={{ marginBottom: '1rem' }} onClick={this.drawChart}>
                        GENERATE JOB POSTING CHART
                    </Button>
                    
                    <div class="col-md-6">
                        <canvas id="myChart" width="400px" height="400px"></canvas>
                    </div>

                    </div>



                </div>
                       
                    </div>
           
            </div>
            </div>
        );
    }
}