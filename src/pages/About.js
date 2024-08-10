import React from 'react';
import CollapsibleCard from '../components/CollapsibleCard';
import * as myConstants from "../constants";

function About() {
  return (
    <div>
      <h1 className='about-page-title'>Javaughn Smith</h1>
      <div id='about-page'>
        <div>
          <div>
            <a
              href={myConstants.RESUME}
              aria-label="Javaughn Smith's Resume"
              download
            >
              Resume PDF
            </a> <span>&#183;</span> <a
              href={myConstants.LINKEDIN_URL}
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              LinkedIn
            </a> <span>&#183;</span> <a
              href={myConstants.GITHUB_URL}
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Github'
            >
              GitHub
            </a>
          </div>
          <span>The links above will take you to my resume, linkedin, and github, respectively.</span>
        </div>
        <CollapsibleCard titleClass="collapsible-card-title" title="Overview">
          <p>
            Back-end developer with ~2 years of experience in analysis, design, development, and
            maintenance of distributed systems and cloud computing for digital enterprising.
            Thrive in a collaborative, purpose- driven, cross-functional environment with a growth mindset.
          </p>
        </CollapsibleCard>
        <CollapsibleCard titleClass="collapsible-card-title" title="Skills">
          <div className='scroller'>
            <ul className='tag-list scroller__inner'>
              <li className='tag'>Software Development</li>
              <li className='tag'>Data Structures</li>
              <li className='tag'>Algorithms</li>
              <li className='tag'>Distributed Systems</li>
              <li className='tag'>Scalable Solutions</li>
              <li className='tag'>Microservices</li>
              <li className='tag'>Functional Programming</li>
              <li className='tag'>Unit Testing</li>
              <li className='tag'>System Design</li>
              <li className='tag'>Databasing</li>
              <li className='tag'>Version Control</li>
              <li className='tag'>APIs</li>
              <li className='tag'>Containerization</li>
              <li className='tag'>Test Automation</li>
              <li className='tag'>CI/CD</li>
              <li className='tag'>DevOps</li>
              <li className='tag'>IaC</li>
              <li className='tag'>Object-Oriented Programming</li>
              <li className='tag' aria-hidden="true">Software Development</li>
              <li className='tag' aria-hidden="true">Data Structures</li>
              <li className='tag' aria-hidden="true">Algorithms</li>
              <li className='tag' aria-hidden="true">Distributed Systems</li>
              <li className='tag' aria-hidden="true">Scalable Solutions</li>
              <li className='tag' aria-hidden="true">Microservices</li>
              <li className='tag' aria-hidden="true">Functional Programming</li>
              <li className='tag' aria-hidden="true">Unit Testing</li>
              <li className='tag' aria-hidden="true">System Design</li>
              <li className='tag' aria-hidden="true">Databasing</li>
              <li className='tag' aria-hidden="true">Version Control</li>
              <li className='tag' aria-hidden="true">APIs</li>
              <li className='tag' aria-hidden="true">Containerization</li>
              <li className='tag' aria-hidden="true">Test Automation</li>
              <li className='tag' aria-hidden="true">CI/CD</li>
              <li className='tag' aria-hidden="true">DevOps</li>
              <li className='tag' aria-hidden="true">IaC</li>
              <li className='tag' aria-hidden="true">Object-Oriented Programming</li>
            </ul> {/* hover arrows */}
          </div>
          <div className='scroller' data-direction="right">
            <ul className='tag-list scroller__inner'>
              <li className='tag'>Java</li>
              <li className='tag'>Python</li>
              <li className='tag'>Git</li>
              <li className='tag'>SQL</li>
              <li className='tag'>Linux</li>
              <li className='tag'>Mockito</li>
              <li className='tag'>Docker</li>
              <li className='tag'>React.js</li>
              <li className='tag'>AWS</li>
              <li className='tag'>C++</li>
              <li className='tag'>JSON</li>
              <li className='tag'>YAML</li>
              <li className='tag'>HTML</li>
              <li className='tag'>CSS</li>
              <li className='tag' aria-hidden="true">Java</li>
              <li className='tag' aria-hidden="true">Python</li>
              <li className='tag' aria-hidden="true">Git</li>
              <li className='tag' aria-hidden="true">SQL</li>
              <li className='tag' aria-hidden="true">Linux</li>
              <li className='tag' aria-hidden="true">Mockito</li>
              <li className='tag' aria-hidden="true">Docker</li>
              <li className='tag' aria-hidden="true">React.js</li>
              <li className='tag' aria-hidden="true">AWS</li>
              <li className='tag' aria-hidden="true">C++</li>
              <li className='tag' aria-hidden="true">JSON</li>
              <li className='tag' aria-hidden="true">YAML</li>
              <li className='tag' aria-hidden="true">HTML</li>
              <li className='tag' aria-hidden="true">CSS</li>
              <li className='tag' aria-hidden="true">Java</li>
              <li className='tag' aria-hidden="true">Python</li>
              <li className='tag' aria-hidden="true">Git</li>
              <li className='tag' aria-hidden="true">SQL</li>
              <li className='tag' aria-hidden="true">Linux</li>
              <li className='tag' aria-hidden="true">Mockito</li>
              <li className='tag' aria-hidden="true">Docker</li>
              <li className='tag' aria-hidden="true">React.js</li>
              <li className='tag' aria-hidden="true">AWS</li>
              <li className='tag' aria-hidden="true">C++</li>
              <li className='tag' aria-hidden="true">JSON</li>
              <li className='tag' aria-hidden="true">YAML</li>
              <li className='tag' aria-hidden="true">HTML</li>
              <li className='tag' aria-hidden="true">CSS</li>
            </ul> {/* hover arrows */}
          </div>
        </CollapsibleCard>
        <CollapsibleCard titleClass="collapsible-card-title" title="Experience">
          <CollapsibleCard cardClass="collapsible-sub-card" titleClass="collapsible-sub-card-title" title="Amazon Web Services">
            <h4>Systems Development Engineer</h4>
            <h5>Feb 2022 - Oct 2023</h5>
            <ul>
              <li>
                Enabled the launch of 21 discrete data centres serving external
                customers in 7 distinct geographical locations within the span
                of 2 years, as well as the automatic migration of thousands of
                AWS cloud services across hundreds of existing data centres,
                driving overall company growth
              </li>
              <li>
                Ensured reliable, available, and user-friendly development tools
                for thousands of internal customers, empowering them to drive
                sales via routine end-to-end testing, monitoring, and maintenance
                of SaaS offerings for continuous functionality and high performance
              </li>
              <li>
                Drove efficiency via facilitation of Agile methodology by leading
                and participating in regular scrum, design, informational, process
                improvement, and planning meetings, which enabled my team to
                complete tasks in 8 days or less
              </li>
              <li>
                Upheld high performance and reliability of SaaS offerings by
                resolving 1-5 technical issues daily, which minimized costs by
                increasing software stability
              </li>
              <li>
                Increased service adoption for my team by approx. 3 customers per
                week by troubleshooting user issues, and researching and answering
                user questions in our forum in a timely fashion
              </li>
              <li>
                Improved operations by analyzing workflows, identifying and
                addressing gaps in existing processes as well as designing new ones,
                and continuously iterating on solutions
              </li>
              <li>
                Exceptional oral and written communication skills, and professional
                experience as a business/engineering leader responsible for
                communicating information to technical and non-technical internal
                and external clients
              </li>
            </ul>
          </CollapsibleCard>
          <CollapsibleCard cardClass="collapsible-sub-card" titleClass="collapsible-sub-card-title" title="Ulteig">
            <h4>System Integrator</h4>
            <h5>Jun 2021 - Feb 2022</h5>
            <ul>
              <li>
                Developed PLC logic for Allen-Bradley MicroLogix processors
                automating control of sensors and actuators used in water and
                wastewater treatment processes across various cities.
              </li>
              <li>
                Designed and programmed HMI screens facilitating simplistic and
                efficient local and remote monitoring and control of automated
                systems.
              </li>
              <li>
                Generated and updated documentation of treatment systems to
                clearly communicate their design and function.
              </li>
            </ul>
          </CollapsibleCard>
          <CollapsibleCard cardClass="collapsible-sub-card" titleClass="collapsible-sub-card-title" title="Mixto">
            <h4>Client Accounts Coordinator</h4>
            <h5>Mar 2021 - May 2021</h5>
            <ul>
              <li>
                Coordinated internal operations at multiple levels to
                consistently deliver high quality service for our clientele
                within 3 business days
              </li>
              <li>
                Lead meetings with clients for large scale, long term, high
                sensitivity projects ensuring that requirements and expectations
                were communicated clearly between internal and external
                stakeholders
              </li>
              <li>
                Trained new employees and developed a manual of tasks and best
                practices for success
              </li>
            </ul>
          </CollapsibleCard>
          <CollapsibleCard cardClass="collapsible-sub-card" titleClass="collapsible-sub-card-title" title="Halton Region">
            <h4>SCADA Technology Co-op Student</h4>
            <h5>Jan 2019 - Aug 2019</h5>
            <ul>
              <li>
                Developed a VB application for secure monitoring, collection,
                and historizing of hundreds of thousands of unique data points
                used in water and wastewater treatment process control and
                auditing across the region
              </li>
              <li>
                Performed firmware updates, device configuration, and programming
                on Allen-Bradley ControlLogix. MicroLogix, SLCs, and Power
                Monitors used in water and wastewater treatment processes across
                the region
              </li>
              <li>
                Generated electrical schematics, network drawings, design drawings,
                and P&IDs for new device installations using AutoCAD
              </li>
              <li>
                Reviewed and updated network architecture drawings in AutoCAD
                which were used for keeping track of devices on the WAN and
                improving efficiency in the process of remotely accessing and
                controlling those devices
              </li>
            </ul>
          </CollapsibleCard>
        </CollapsibleCard>
        <CollapsibleCard cardClass="collapsible-card" titleClass="collapsible-card-title" title="Education">
        </CollapsibleCard>
      </div>
    </div>
  )
}

export default About
