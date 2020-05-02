import React, { Component } from 'react';
import headshot from './images/headshot.jpg';
import github from './images/github.svg';
import linkedin from './images/linkedin.png';
import './App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="BaseApp">
        <header className="App-header">
          <img src={headshot} className="HeadShot" alt="Ethan Zohar" />
          <h1 className="Name">Ethan Zohar</h1>
          <div className="MainRow">
            <a href="https://github.com/ethanzohar" target="_blank"><img src={github} /></a>
            <a href="https://linkedin.com/in/ethan-zohar" target="_blank"><img src={linkedin} /></a>
          </div>
          <h3 className="About">Software Engineering @ University of Waterloo</h3>
        </header>
        <main className="App-main">
          <section>
            <section className="MainSection">
              <h2 className="SectionHeader">The Skills that I have</h2>
              <p className="BodyTextSkills">After being introduced to coding 5 years ago I have developed a strong love for it. As my love grows, 
              my skill set does as well. With respect to languages, I can develop in Java, Python, C++, JavaScript, and Bash. I am 
              proficient in frameworks such as Apache Flink, Spring/Springboot, Node.JS, React, Thymeleaf, and PyGame. I know database 
              standards such as PostgreSQL, MongoDB, and MySQL. I am familiar with tools such as Github, Docker, AWS, and Azure AD. 
              Plus I know coding architecture styles such as REST and WebRTC/Socket Connections.</p>
            </section>
            <section className="MainSection">
              <h2 className="SectionHeader">Where I learnt them</h2>
                <section className="InnerSection">
                  <h2 className="InnerHeader">MindBridge AI - Flink Pipeline Developer Co-op (September 2019 - December 2019)</h2>
                  <p className="BodyText">During this co-op term I learned about big data concepts and the importance of efficient code. 
                  As my entire job revolved around enormous Excel spreadsheets and CSV files that were tens of millions of rows large, 
                  even the slightest inefficiency in my code would be detrimental. I learned the inner workings and subtleties of Apache 
                  Flink as I wrote several algorithms to analyze the financial data contained within the spreadsheets. I learned the benefits 
                  and pitfalls of different database formats as I performed an internal data storage and data transfer overhaul which moved our 
                  pipelines database from MongoDB to PostgreSQL. From this change I was able to reduce the size of our codebase by 40% and 
                  increase the pipeline's runtime efficiency by upwards of 35%. Finally, I learned the nuances of cross-team communication as \
                  I worked with the front-end team in order to help format our data in a manner that was usable and convenient for them.</p>
                </section>
                <section className="InnerSection">
                  <h2 className="InnerHeader">MindBridge AI - Full Stack & DevOps Developer Co-op (January 2019 - April 2019)</h2>
                  <p className="BodyText">Working as an internal tools developer on a small team means that you get to see a new feature from start 
                  to finish, but that also means that you must be capable of completing every step along the way. For this co-op I did just that, 
                  I worked closely with the customer service team and developed tools which would reduce the amount of manual work they would 
                  have to do. The main tool that I developed for them was an Excel spreadsheet and CSV CLI tool. This tool would sanitize the 
                  data and verify that it was of the correct format before entering the pipeline. It was able to split and concatenate multiple 
                  files in order to allow the CS team to manually inspect the data. After the introduction of this tool it reduced the CS teams 
                  overhead by 50+ weekly and is now being integrated into the main app. Another tool that I made for the CS team as an admin 
                  interface which would allow manual overrides to each of the customers accounts with options for manual entry into the accounts. 
                  Some example operations included adding and deleting users, changing the server that they were accessing, and altering the 
                  jobs that they were running. I learned about Azure AD, Bash, and Terraform through the development of a backup disk cleanup 
                  script which would save snapshots from specific time periods to create a chronological buffer. Finally, I learned about the 
                  importance of robust code through working with the company CISO to develop critical security features that directly affect the end users.</p>
                </section>
                <section className="InnerSection">
                  <h2 className="InnerHeader">Plastic Mobile - Software & Hardware Lab Intern (July 2018 - August 2018)</h2>
                  <p className="BodyText">Working on an innovation team was a lot of fun because I was given complete freedom to experiment and take my projects
                  in whichever direction I desired. I worked on an Android application that utilized Google's ArCore to control a Roomba. 
                  The end product was a coffee delivering robot where the users would simply press a button on their phone ordering coffee and 
                  the Roomba would take care of the rest. With the Android device attached to the top of the Roomba, the device was able to 
                  determine its position within the office through the use of ArCore and image recognition algorithms. QR codes were placed 
                  around the office and the application was able to triangulate its position in the office based on the codes that were 
                  visible. After implementing a pathfinding algorithm and a simple command que, the Roomba was able to autonomously drive 
                  around the office and deliver coffee.</p>
                </section>
            </section>
            <section className="MainSection">
              <h2 className="SectionHeader">How I show them off</h2>
                <section className="InnerSection">
                  <h2 className="InnerHeader">Live Screen Sharing Service (July 2019 - September 2019)</h2>
                  <a className="AboutMeLink" href="https://www.screenshare.pro" target="_blank">screenshare.pro</a>
                  <p className="BodyText">Aftering working on some group projects with friends I found that there was no good solution to simple screen 
                  sharing. All sites or applications would require downloads, logins, and friend requests to get working, but I wanted something 
                  simpler. So I made it! This was my first "large scale" application that was distributed online so I learned a lot. I learned 
                  about deploying projects on dedicated servers, in this case I used an AWS EC2 instance. The majority of the learning came from 
                  the struggles of transferring large amounts of pixel data (for the live stream) in an efficient manner. I went with a C++ 
                  socket backend for increased efficiency because the original idea was to develop a custom video encoding algorithm and transfer 
                  the pixels between users that way. This did not give the video quality for framerate that I was looking for. The next step 
                  was looking into already developed video standards such as h.264, but these were deemed too cumbersome to implement for what I 
                  was looking for. The final decision was made to create direct socket connections using WebRTC sockets between the streamer and 
                  the viewers where the backend would only act as a means to make the initial connection between users. This gave me the performance 
                  I was looking for and I still use this tool with my friends all the time.</p>
                </section>
                <section className="InnerSection">
                  <h2 className="InnerHeader">Online Pokémon Battle Simulator (May 2018 - July 2018)</h2>
                  <a className="AboutMeLink" href="https://www.github.com/Computer-Kids-Club/pokeman" target="_blank">github.com/Computer-Kids-Club/pokeman</a>
                  <p className="BodyText">For my final project of my highschool career my friends and I decided to go all out. We went with the idea 
                  of making a complete clone of Pokemon Showdown with local multiplayer. This project taught me so much and was one of the main sources 
                  for my love of programming. I used websockets for the first time ever, I used a separate frontend and backend written in different 
                  languages for the first time, but most importantly I used web scraping for the first time ever. I used an online database which 
                  contained all of the Pokemon's statistics, sprites, and move information. Figuring out that the code I write could interact with 
                  things that other people have done opened so many doors for my coding career and gave me tons more ideas on things to make with 
                  this new found knowledge. This project taught me how to work in a team, how to use source control tools, and how to solve problems 
                  that I have never solved before.</p>
                </section>
            </section>
            <section className="MainSection">
              <h2 className="SectionHeader">Education</h2>
                <section className="InnerSection">
                  <h2 className="InnerHeader">Software Engineering - University of Waterloo (September 2018 - April 2023)</h2>
                  <p className="BodyText">For my first year of university I was studying Computer Engineering at UWaterloo, but it was in this first 
                  year that I learnt that my love mainly lied with the software side of computers. After ranking 19/185 in my second semester with 
                  an average of 87.36% I applied and got accepted to transfer into Software Engineering at UWaterloo.</p>
                </section>
            </section>
          </section>
          </main>
        <main>
        </main>
      </div>
    );
  }
}

export default HomePage;
