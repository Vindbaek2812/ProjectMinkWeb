import React from 'react';
import './App.css';
import Chart from './components/Chart';


function App() {
  return (
    <html>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <header class="sidebar">
        <a class="active" href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
        <a href="#statistics"><i class="fa fa-fw fa-pie-chart"></i> Statistic</a>
        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
        <a href="#login"><i class="fa fa-fw fa-user"></i> Login</a>
        </header>
        <body class='body'>
          <div class='content'>
            <ul class="flex-container">
              <li class="flex-item1">
                <Chart class="Yes"/></li>
                <ul class='flex-container-mini'>
                  <li class="flex-item-mini">2</li>
                  <li class="flex-item-mini">2</li>
                </ul>
                <ul class='flex-container-mini'>
                  <li class="flex-item-mini">2</li>
                  <li class="flex-item-mini">2</li>
                </ul>
                <ul class='flex-container-mini'>
                  <li class="flex-item-mini">2</li>
                  <li class="flex-item-mini">2</li>
                </ul>
                <ul class='flex-container-mini'>
                  <li class="flex-item-mini">2</li>
                  <li class="flex-item-mini">2</li>
                </ul>
                <li class="flex-item1">
                <Chart class="Yes"/>
                </li>
                <ul class='flex-container-mini'>
                  <li class="flex-item-mini">2</li>
                  <li class="flex-item-mini">2</li>
                </ul>
                <ul class='flex-container-mini'>
                  <li class="flex-item-mini">2</li>
                  <li class="flex-item-mini">2</li>
                </ul>
                <ul class='flex-container-mini'>
                  <li class="flex-item-mini">2</li>
                  <li class="flex-item-mini">2</li>
                </ul>
                <ul class='flex-container-mini'>
                  <li class="flex-item-mini">2</li>
                  <li class="flex-item-mini">2</li>
                </ul>
              </ul>
          </div>
        </body>
    </html>
  );
}

export default App;
