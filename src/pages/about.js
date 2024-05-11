import React from "react";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import Translate from "@docusaurus/Translate";
import {Slide} from "react-awesome-reveal";

export default function About() {
    const {siteConfig, i18n} = useDocusaurusContext();
    let localePathRoot = "";
    if (i18n.currentLocale != i18n.defaultLocale)
        localePathRoot = "/" + i18n.currentLocale;
    return (
        <Layout title={`Portfolio`}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <script src="landing_page/js/preset.js"></script>
            </Head>
            <main>
                <section className="hero">
                    <div className="container mx-auto md:px-30 flex flex-wrap flex-col md:flex-row items-center">
                        <div className="w-full xl:w-2/4 md:p-8 overflow-hidden">
                            <Slide direction={"left"}><h1
                                className="text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center">
                                <Translate id="portfolio.role">Senior Java developer</Translate>
                            </h1></Slide>
                            <Slide direction={"left"} delay={100}><p
                                className="leading-normal text-2xl md:text-4xl mb-8 text-center">
                                <Translate id="portfolio.degree">M.Sc., engineer</Translate>
                            </p></Slide>
                                <div
                                    className="container flex flex-col md:flex-row items-center content-center mx-auto">
                            <Slide direction={"up"} cascade={true} duration={350}>
                                    <div className="flex items-center content-center justify-center mx-auto md:w-1/3">
                                        <img className="h-8 pr-4" loading="lazy" alt="English" width="" height=""
                                             src="portfolio/flags/Flag_of_England_Flat_Wavy-128x88.png"/>
                                        <span><Translate id="portfolio.lang.eng">English (C1)</Translate></span>
                                    </div>
                                    <div className="flex items-center content-center justify-center mx-auto md:w-1/3">
                                        <img className="h-8 pr-4" loading="lazy" alt="Polish" width="" height=""
                                             src="portfolio/flags/Flag_of_Poland_Flat_Wavy-128x92.png"/>
                                        <span><Translate id="portfolio.lang.pl">Polish (Native)</Translate></span>
                                    </div>
                                    <div className="flex items-center content-center justify-center mx-auto md:w-1/3">
                                        <img className="h-8 pr-4" loading="lazy" alt="Russian" width="" height=""
                                             src="portfolio/flags/Flag_of_Russia_Flat_Wavy-128x98.png"/>
                                        <span><Translate id="portfolio.lang.ru">Russian (A1)</Translate></span>
                                    </div>
                            </Slide>
                                </div>

                        </div>
                        <div
                            className="flex flex-col w-full xl:w-2/4 lg:items-start overflow-y-hidden">
                            <Slide direction={"down"}>
                                <img
                                className="mx-auto w-max"
                                src="portfolio/bartek_jablonski_2.png"/>
                            </Slide>
                        </div>
                    </div>
                </section>
                <section className="bg-[#242526]">
                    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7">
                        <div className="p-4 transition duration-200">
                            <img className="h-12 w-auto mx-auto" loading="lazy" alt="solwit" width="" height=""
                                 src="portfolio/companies/solwit-white.svg"/>

                        </div>
                        <div className="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="intel" width="" height=""
                                 src="portfolio/companies/intel.svg"/>
                        </div>
                        <div className="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="Unity Group" width="" height=""
                                 src="portfolio/companies/unitygroup.svg"/>
                        </div>
                        <div className="p-4 transition duration-200">
                            <img className="h-12 w-auto mx-auto" loading="lazy" alt="Lpp" width="" height=""
                                 src="portfolio/companies/lpp.svg"/>
                        </div>
                        <div className="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="finastra" width="" height=""
                                 src="portfolio/companies/finastra.svg"/>
                        </div>
                        <div className="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="capgemini" width="" height=""
                                 src="portfolio/companies/capgemini.svg"/>
                        </div>
                        <div className="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="envira" width="" height=""
                                 src="portfolio/companies/envira.webp"/>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mt-16 container mx-auto px-10 flex flex-wrap flex-col md:flex-row items-center">
                        <div
                            className="flex flex-col w-full xl:w-1/2 justify-center items-center lg:items-start overflow-y-hidden">

                            <h1 className="leading-normal text-3xl md:text-4xl my-4 text-center md:text-left">
                                <Translate id="portfolio.skills">Skills</Translate></h1>
                            <p><b><Translate id="portfolio.skills.languages.title">Programming
                                languages: </Translate></b>
                                <Translate id="portfolio.skills.languages.content">Java, Mule 4, Sql (Additionally I
                                    wrote some apps using JavaScript, Python)</Translate></p>
                            <p><b><Translate id="portfolio.skills.frameworks.title">Frameworks: </Translate></b>
                                <Translate id="portfolio.skills.frameworks.content">Spring, Spring Boot, Mule 4,
                                    RabbitMq, ToolJet Cloud: GCP (GKE, Functions, Storage,
                                    Pub/Sub, Scheduler, IAM, Google Shell, Firebase, Cloud Registry, App
                                    Engine)</Translate>
                            </p>
                            <p><b><Translate id="portfolio.skills.others.title">Others: </Translate></b>
                                <Translate id="portfolio.skills.others.content">Kubernetes, Docker, Maven, Git,
                                    Gitlab CI, Enterprise Architect, Agile, Scrum</Translate>
                            </p>
                        </div>
                        <div
                            className="flex flex-col w-full xl:w-1/2 items-center justify-center lg:items-start overflow-y-hidden">

                            <div className="flex flex-wrap">
                                {/*<div class="grid grid-cols-4 md:grid-cols-5">*/}
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/docker.png" alt="" loading="lazy"
                                                          height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/gcp.png" alt="" loading="lazy" height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/gcp i gke.png" alt="" loading="lazy"
                                                          height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/git.png" alt="" loading="lazy" height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/gitlab.png" alt="" loading="lazy"
                                                          height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/java.png" alt="" loading="lazy" height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/javascript.png" alt="" loading="lazy"
                                                          height="" width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/maven.png" alt="" loading="lazy" height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/mule.png" alt="" loading="lazy" height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/python.jpg" alt="" loading="lazy"
                                                          height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/rabbitmq.png" alt="" loading="lazy"
                                                          height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/spring.jpg" alt="" loading="lazy"
                                                          height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/sql.png" alt="" loading="lazy" height=""
                                                          width=""/></div>
                                <div className="m-2"><img className="h-16 max-w-full rounded-lg"
                                                          src="portfolio/tech/tooljet.png" alt="" loading="lazy"
                                                          height=""
                                                          width=""/></div>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="mt-16 container mx-auto px-10 flex flex-wrap flex-col md:flex-row md:items-start">
                        <div
                            className="flex flex-col w-full md:w-1/3 justify-center md:items-start px-4">
                            <div className="mx-auto justify-center">
                                <img
                                    src="portfolio/gcp/Create_and_Manage_Cloud_Resources.png"
                                    alt="GCP GKE"
                                />
                            </div>
                            <h4 className="mt-5">
                                <Translate id="portfolio.gcp.gke.title">
                                    Manage Kubernetes in Google Cloud
                                </Translate>
                            </h4>

                            <p className="text-sm mb-0">
                                <Translate id="portfolio.gcp.gke.content">
                                    Google Kubernetes Engine and multiple deployment approaches including how to:
                                    configure and build images to run and debug Docker containers, build Kubernetes
                                    Engine clusters, and manage them with kubectl, deploy Kubernetes applications using
                                    deployments and continuous delivery techniques.
                                </Translate>
                            </p>
                            <div className="text-center content-center mx-auto my-5">
                                <a
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    href={`${localePathRoot}/gcp#manage-kubernetes-in-google-cloud`}
                                >
                                    <Translate id="portfolio.gcp.button">
                                        More informations
                                    </Translate>
                                </a>
                            </div>
                        </div>
                        <div
                            className="flex flex-col w-full md:w-1/3 justify-center md:items-start px-4">
                            <div className="mx-auto justify-center">
                                <img
                                    src="portfolio/gcp/Create_and_Manage_Cloud_Resources.png"
                                    alt="GCP Cloud Resources"
                                />
                            </div>
                            <h4 className="mt-5">
                                <Translate id="portfolio.gcp.cloud-resources.title">
                                    Create and Manage Cloud Resources
                                </Translate>
                            </h4>

                            <p className="text-sm mb-0">
                                <Translate id="portfolio.gcp.cloud-resources.content">
                                    Write gcloud commands and use Cloud Shell, create and deploy virtual machines in
                                    Compute Engine, run containerized applications on Google Kubernetes Engine, and
                                    configure network and HTTP load balancers.
                                </Translate>
                            </p>
                            <div className="text-center content-center mx-auto my-5">
                                <a
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    href={`${localePathRoot}/gcp#create-and-manage-cloud-resources`}
                                >
                                    <Translate id="portfolio.gcp.button">
                                        More informations
                                    </Translate>
                                </a>
                            </div>
                        </div>
                        <div
                            className="flex flex-col w-full md:w-1/3 justify-center md:items-start px-4">
                            <div className="mx-auto justify-center">
                                <img
                                    src="portfolio/gcp/others.png"
                                    alt="GCP others"
                                />
                            </div>
                            <h4 className="mt-5">
                                <Translate id="portfolio.gcp.other.title">
                                    Other courses
                                </Translate>
                            </h4>

                            <p className="text-sm mb-0">
                                <Translate id="portfolio.gcp.other.content">
                                    Networking Fundamentals on Google Cloud,
                                    Perform Foundational Infrastructure Tasks,
                                    Serverless Firebase Development,
                                    Store, Process, and Manage Data on Google Cloud - Command Line,
                                    Get Started with Pub/Sub,
                                    Google Cloud Essentials,
                                    And another labs passed
                                </Translate>
                            </p>
                            <div className="text-center content-center mx-auto my-5">
                                <a
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    href={`${localePathRoot}/gcp`}
                                >
                                    <Translate id="portfolio.gcp.others.button">
                                        More courses
                                    </Translate>
                                </a>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="hero mt-16">

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
                            }}
                            date="03.2020 - 08.2023"
                            iconStyle={{background: "#25c2a0", color: "#fff"}}
                            icon={<WorkIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                <Translate id="portfolio.work.camply.name">Camply.pl</Translate>
                            </h3>
                            <img className="mt-3" className="mt-3" src="portfolio/camply.webp" alt="camply"/>
                            <h4 className="vertical-timeline-element-subtitle">
                                <Translate id="portfolio.work.camply.role">
                                    Owner/Senior Backend Developer
                                </Translate>
                            </h4>
                            <p>
                                <Translate id="portfolio.work.camply.description">
                                    Camply.pl was polish marketplace for camps and semi-camps. I was
                                    responsible for the application backend, database,
                                    finances,settlements and for part of contacts with customers and
                                    partners.I actively participated in sales and marketing
                                    activities. Camply has signed 73 travel agencies and sold
                                    hundreds reservations.Backend involved: Spring boot, query-dsl,
                                    Mysql, Gitlab CI, GoogleKubernetes Engine, Google cloud
                                    functions, Thymeleaf, rabbitMq,App Engine GCP, Google storage,
                                    OAuth, Firebase, Tooljet
                                </Translate>
                            </p>
                            <div className="text-center mt-5">

                                <a
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    href={`${localePathRoot}/docs/camply`}
                                >
                                    <Translate id="portfolio.work.camply.more">
                                        More informations
                                    </Translate>
                                </a>
                            </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
                            }}
                            date="06.2020 - 01.2023"
                            iconStyle={{background: "#25c2a0", color: "#fff"}}
                            icon={<WorkIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                <Translate id="portfolio.work.lpp.name">
                                    LPP SA (via Unity Group)
                                </Translate>
                            </h3>
                            <img className="mt-3" src="portfolio/LPP.jpg" alt="LPP SA"/>
                            <h4 className="vertical-timeline-element-subtitle">
                                <Translate id="portfolio.work.lpp.role">
                                    Senior Java Developer (Remote)
                                </Translate>
                            </h4>
                            <p>
                                <Translate id="portfolio.work.lpp.description">
                                    Integration project for world company in clothing industry
                                    (LPP-House,Cropp,Sinsey etc.). The goal is to provide
                                    multichannel stock management solution.Technologies: Java17,
                                    Kubernetes, Mule 4, Mule3, Spring boot,Spring integration,
                                    RabbitMq, ActiveMq, oracle db, ApacheIgnite, Grafana,
                                    Prometheus, Enterprise Architect
                                </Translate>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
                            }}
                            date="03.2020 - 06.2020"
                            iconStyle={{background: "#25c2a0", color: "#fff"}}
                            icon={<WorkIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                <Translate id="portfolio.work.unity-group.name">
                                    Unity Group
                                </Translate>
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                <Translate id="portfolio.work.unity-group.role">
                                    Java Developer (Remote)
                                </Translate>
                            </h4>
                            <p>
                                <Translate id="portfolio.work.unity-group.description">
                                    Integration project for company providing household goods. The
                                    goal is to automate and streamline price and stock management.
                                    Technologies: Mule, Spring boot(JHipster), RabbitMq
                                </Translate>
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
                            }}
                            date="07.2019 - 03.2020"
                            iconStyle={{background: "#25c2a0", color: "#fff"}}
                            icon={<WorkIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                <Translate id="portfolio.work.finastra.name">
                                    Finastra (via Solwit SA)
                                </Translate>
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                <Translate id="portfolio.work.finastra.role">
                                    Java Developer
                                </Translate>
                            </h4>
                            <p>
                                <Translate id="portfolio.work.finastra.description">
                                    Entire communication in English. Tech stack: Spring boot 2+,
                                    Java 8 MongoDb, Postman, Oauth2,OpenId Connect, Kubernetes,
                                    Azure, Jira, Microservices Software designing and
                                    implementation, analysing and solving complex engineering
                                    problems, creating and reviewing requirements and functional
                                    design, diagnosing and troubleshooting software faults,
                                    integration and testing software
                                </Translate>
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
                            }}
                            date="05.2018 - 07.2019"
                            iconStyle={{background: "#25c2a0", color: "#fff"}}
                            icon={<WorkIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                <Translate id="portfolio.work.solwit.name">Solwit SA</Translate>
                            </h3>
                            <img className="mt-3" src="portfolio/Solwi-sa.jpg" alt="Solwit SA"/>
                            <h4 className="vertical-timeline-element-subtitle">
                                <Translate id="portfolio.work.solwit.role">
                                    Junior Java Developer
                                </Translate>
                            </h4>
                            <p>
                                <Translate id="portfolio.work.solwit.envira.description">
                                    01.2019 – 07.2019 (Envira project) – Spring, Spring MVC,
                                    JSP,JavaScript, Jooq, Docker, Jira, Bamboo, Upsource, Git
                                </Translate>
                                <br/>
                                <Translate id="portfolio.work.solwit.intel.description">
                                    05.2018 - 12.2018 (Intel project) – Spring boot, Angular
                                    5(TypeScript), Gradle, Jenkins, Docker, PostgreSql, VSTS, Git
                                </Translate>
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
                            }}
                            date="06.2020 - 01.2023"
                            iconStyle={{background: "#25c2a0", color: "#fff"}}
                            icon={<WorkIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                <Translate id="portfolio.work.capgemini.name">
                                    Capgemini
                                </Translate>
                            </h3>
                            <img className="mt-3" src="portfolio/capgemini-office.jpg" alt="Capgemini"/>
                            <h4 className="vertical-timeline-element-subtitle">
                                <Translate id="portfolio.work.capgemini.role">
                                    Internship Java Developer
                                </Translate>
                            </h4>
                            <p>
                                <Translate id="portfolio.work.lpp.capgemini">
                                    For 3 months I was learning basics of java, spring, jpa,
                                    sql,javascript, angular 4 under the guidance of Capgemini
                                    experts.
                                </Translate>
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="10.2016 - 02.2018"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
                            }}
                            iconStyle={{background: "rgb(233, 30, 99)", color: "#fff"}}
                            icon={<SchoolIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                <Translate id="portfolio.education.pwr.name">
                                    Wroclaw University of Science and Technology
                                </Translate>
                            </h3>
                            <img className="mt-3" src="portfolio/pwr.jpg" alt="Politechnika Wroclawska"/>
                            <h4 className="vertical-timeline-element-subtitle">
                                <Translate id="portfolio.education.degree.master">
                                    Second degree of Computer Science
                                </Translate>
                            </h4>
                            <p>
                                <Translate id="portfolio.education.degree.master.thesis">
                                    Master’s thesis consists in designing an application for
                                    managing a restaurant - FeedServ. Then,implement the module to
                                    manage orders and examine the usability (UX) of this module
                                    (used technologies angular 4 and spring boot).
                                </Translate>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="10.2012 - 06.2016"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.1)",
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
                            }}
                            iconStyle={{background: "rgb(233, 30, 99)", color: "#fff"}}
                            icon={<SchoolIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                <Translate id="portfolio.education.pwr.name">
                                    Wroclaw University of Science and Technology
                                </Translate>
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                <Translate id="portfolio.education.degree.bachelor">
                                    First degree of Civil Engineering
                                </Translate>
                            </h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            iconStyle={{background: "rgb(16, 204, 82)", color: "#fff"}}
                            icon={<StarIcon/>}
                        />
                    </VerticalTimeline>
                </section>


            </main>
        </Layout>
    );
}
