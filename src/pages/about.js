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
                <section class="hero">
                    <div className="container mx-auto px-10 flex flex-wrap flex-col md:flex-row items-center">
                        <div className="w-full xl:w-2/4 p-12 overflow-hidden">
                            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                                <Translate id="portfolio.role">Senior Java developer</Translate>
                            </h1>
                            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                                <Translate id="portfolio.degree">M.Sc., engineer</Translate>
                            </p>
                            <div className="container flex flex-col md:flex-row items-center">
                                <div className="flex items-center mx-2 w-full xl:w-1/3">
                                    <img className="h-8 pr-4" loading="lazy" alt="English" width="" height=""
                                         src="portfolio/flags/Flag_of_England_Flat_Wavy-128x88.png"/>
                                    <span><Translate id="portfolio.lang.eng">English (C1)</Translate></span>
                                </div>
                                <div className="flex items-center mx-2 w-full xl:w-1/3">
                                    <img className="h-8 pr-4" loading="lazy" alt="Polish" width="" height=""
                                         src="portfolio/flags/Flag_of_Poland_Flat_Wavy-128x92.png"/>
                                    <span><Translate id="portfolio.lang.pl">Polish (Native)</Translate></span>
                                </div>
                                <div className="flex items-center mx-2 w-full xl:w-1/3">
                                    <img className="h-8 pr-4" loading="lazy" alt="Russian" width="" height=""
                                         src="portfolio/flags/Flag_of_Russia_Flat_Wavy-128x98.png"/>
                                    <span><Translate id="portfolio.lang.ru">Russian (A1)</Translate></span>
                                </div>
                            </div>
                            <div>
                                <p className="leading-normal text-base md:text-2xl my-4 text-center md:text-left">
                                    <Translate id="portfolio.skills">Skills</Translate></p>
                                <span><Translate id="portfolio.skills.content">Programming languages: Java, Mule 4, Sql (Additionally I wrote some apps using JavaScript, Python) Frameworks: Spring, Spring Boot, Mule 4, RabbitMq, ToolJet Cloud: GCP (GKE, Functions, Storage, Pub/Sub, Scheduler, IAM, Google Shell, Firebase, Cloud Registry, App Engine) Others: Kubernetes, Docker, Maven, Git, Gitlab CI, Enterprise Architect, Agile, Scrum</Translate></span>
                                <div class="flex flex-wrap">
                                {/*<div class="grid grid-cols-4 md:grid-cols-5">*/}
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/docker.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/gcp.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/gcp i gke.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/git.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/gitlab.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/java.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/javascript.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/maven.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/mule.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/python.jpg"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/rabbitmq.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/spring.jpg"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/sql.png"  alt="" loading="lazy" height="" width=""/></div>
                                        <div class="m-2"><img class="h-16 max-w-full rounded-lg" src="portfolio/tech/tooljet.png"  alt="" loading="lazy" height="" width=""/></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col w-full xl:w-2/4 justify-center lg:items-start overflow-y-hidden">
                            <img
                                className="mx-auto w-max md:w-4/5"
                                src="portfolio/bartek_jablonski_3.png"/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mt-12 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7">
                        <div class="p-4 transition duration-200">
                            <img className="h-12 w-auto mx-auto" loading="lazy" alt="solwit" width="" height=""
                                 src="portfolio/companies/solwit-white.svg"/>

                        </div>
                        <div class="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="intel" width="" height=""
                                 src="portfolio/companies/intel.svg"/>
                        </div>
                        <div class="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="Unity Group" width="" height=""
                                 src="portfolio/companies/unitygroup.svg"/>
                        </div>
                        <div class="p-4 transition duration-200">
                            <img className="h-12 w-auto mx-auto" loading="lazy" alt="Lpp" width="" height=""
                                 src="portfolio/companies/lpp.svg"/>
                        </div>
                        <div class="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="finastra" width="" height=""
                                 src="portfolio/companies/finastra.svg"/>
                        </div>
                        <div class="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="capgemini" width="" height=""
                                 src="portfolio/companies/capgemini.svg"/>
                        </div>
                        <div class="p-4 transition duration-200">
                            <img class="h-12 w-auto mx-auto" loading="lazy" alt="envira" width="" height=""
                                 src="portfolio/companies/envira.webp"/>
                        </div>
                    </div>
                </section>
                <section className="mt-16">

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

                <section class="features section">
                    <div class="container">
                        <div class="features-inner section-inner has-bottom-divider">
                            <div class="features-wrap">
                                <div class="feature text-center is-revealing">
                                    <div class="feature-inner">
                                        <div class="feature-icon">
                                            <img
                                                src="landing_page/images/feature-icon-01.svg"
                                                alt="Feature 01"
                                            />
                                        </div>
                                        <h4 class="feature-title mt-24">
                                            SKILLS
                                        </h4>
                                        <p class="text-sm mb-0">
                                            Programming languages: Java, Mule 4, Sql
                                            (Additionally I wrote some apps using JavaScript, Python)
                                            Frameworks: Spring, Spring Boot, Mule 4, RabbitMq, ToolJet
                                            Cloud: GCP (GKE, Functions, Storage, Pub/Sub, Scheduler,
                                            IAM, Google Shell, Firebase, Cloud Registry, App Engine)
                                            Others: Kubernetes, Docker, Maven, Git, Gitlab CI,
                                            Enterprise Architect, Agile, Scrum
                                        </p>
                                    </div>
                                </div>
                                <div class="feature text-center is-revealing">
                                    <div class="feature-inner">
                                        <div class="feature-icon">
                                            <img
                                                src="landing_page/images/feature-icon-02.svg"
                                                alt="Feature 02"
                                            />
                                        </div>
                                        <h4 class="feature-title mt-24">
                                            Cloud And Other Certificates /gcp
                                        </h4>
                                        <p class="text-sm mb-0">
                                            Languages
                                            English (C1)
                                            Polish (Native)
                                            Russian (A1)
                                        </p>
                                    </div>
                                </div>
                                <div class="feature text-center is-revealing">
                                    <div class="feature-inner">
                                        <div class="feature-icon">
                                            <img
                                                src="landing_page/images/feature-icon-03.svg"
                                                alt="Feature 03"
                                            />
                                        </div>
                                        <h4 class="feature-title mt-24">
                                            Visited Countries
                                        </h4>
                                        <p class="text-sm mb-0">
                                            M.Sc., engineer
                                            Senior Java developer
                                            <strong>
                                                mcs51/stm8/cortex-m[0/0+/3/23/33/35p/4/7]/riscv
                                            </strong>{" "}
                                            mcu projects
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
