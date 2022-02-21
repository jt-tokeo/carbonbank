import '../css/project.css';
import config from "../config/config.json";
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, MapConsumer } from 'react-leaflet';
import { useState, useEffect, useRef } from 'react';

function Projects() {
    const { t, i18n } = useTranslation();

    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState(0);
    const [zoom, setZoom] = useState(5);
    const [centerCoord, setCenterCoord] = useState([51.505, -0.09]);

    async function getProjects() {
        let res = await fetch(config.api_url + "/projects", {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        let status = res.status;
        let jsonres = await res.json();

        const p = `{ "projects": [
            { 
            "_id": "60ec3c4d3400cf52db5a1efb", 
            "userId": "60ec3c4d3400cf52db5a1efa", 
            "country": "France", 
            "departement":"Loire-Atlantique",
            "collected" : "collected to come",
            "codeDep":"44",
            "city": "Pau", 
            "name": "Vision 2025 tranche 2", 
            "description": "Participate in the financing of a 5 wind farm in Loire-Atlantique ", 
            "type":"Eolian",
            "depositDate": "2021-07-12T12:57:49.169Z", 
            "published": true, 
            "latitude": 47.719100, 
            "longitude":  -1.485209941,
            "imgUrl":"https://www.lumo-france.com/uploads/2021/03/image-cve-image(750x375-crop).jpg",
            "proposedBy":"EngieGreen",
            "taux":"3 %",
            "duration":"2Y",
            "term":"6",
            "toCollect":"200 000",
            "scheduledOpen":"2021-09-06"

        }, 
            { 
            "_id": "60f81476c2b48e27f91ddc31", 
            "userId": "60f81444c2b48e27f91ddc30", 
            "address": "t", 
            "country": "France", 
            "departement":"Chatillon-sur-Indre",
            "collected" : "collected to come",
            "codeDep":"36",
            "city": "Pau", 
            "zipCode": "64000", 
            "name": "Soleil des Boischaut", 
            "description": "Take part in this ground-mounted photovoltaic power plant project in the department of Indre ", 
            "type":"Solar",
            "estimatedFundVolume": "0", "expectedRevenue": "0", 
            "depositDate": "2021-07-21T12:35:02.901Z", 
            "published": true, 
            "latitude": 46.9833, 
            "longitude": 1.1667,
            "imgUrl":"https://www.lumo-france.com/uploads/2021/03/saint-aubin-des-chateaux-photo-2-image(700x300-crop).jpg",
            "proposedBy":"Sergies et EneR",
            "taux":"3 %",
            "duration":"4Y",
            "term":"4",
            "toCollect":"150 000",
            "scheduledOpen":"2021-11-23"
            
        }] }`;
        const obj = JSON.parse(p);
        if (status === 200) setProjects(obj.projects);
        else {
            //handle error
        }

    }

    function selectProject(id, coord) {
        setCurrentProject(id);
        setCenterCoord(coord);
        setZoom(10);
    }

    function unselectProject() {
        setCurrentProject(0);
        setZoom(5);
    }
    function ProjectMarker(props) {
        const leafletRef = useRef();
        useEffect(() => {
            if (props.active) leafletRef.current.openPopup();
        })
        return <Marker ref={leafletRef} {...props} />
    }

    function NoMarkerClicked() {
        const map = useMapEvents({
            click() {
                unselectProject();
            }
        })

        return null;
    }

    useEffect(() => getProjects(), []);
    return (
        <main>
            <section className="sectionProject mapMax sectionNoLimit">

                <div className="MapProject" id="MapProject">
                    <MapContainer center={centerCoord} zoom={zoom} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {projects.map((project) =>
                            <ProjectMarker position={[project.latitude, project.longitude]} key={project._id} eventHandlers={{
                                click: (event) => {
                                    selectProject(project._id, [project.latitude, project.longitude]);
                                }
                            }} active={project._id == currentProject}>
                                <Popup>
                                    <div className="projectCardPopUp displayFlex">
                                        <div className="col1 NoWrap">
                                            <h3 className="col85 marginB005">{project.name}</h3>
                                            <p className="col15 textCenter boxCollect">to collect <strong>{project.toCollect} €</strong></p>
                                        </div>

                                        <div className="lignEnd marginB01"></div>

                                        <div className="NoWrap col6P projectCardTextList3">
                                            <ul>
                                                <li className="NoWrap marginB0005">
                                                    <div className="col2P"></div>
                                                    <p className="col8 margin0">scheduled opening {project.scheduledOpen}</p>
                                                </li>
                                                <li className="NoWrap marginB0005">
                                                    <div className="col2P"></div>
                                                    <p className="col8 margin0">{project.departement} ({project.codeDep})</p>
                                                </li>
                                                <li className="NoWrap marginB0005">
                                                    <div className="col2P"></div>
                                                    <p className="col8 margin0">{project.description}</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col4P projectCardTextList2">
                                            <p><strong>{project.taux}</strong> Interest rate </p>
                                            <p><strong>{project.duration}</strong> refund period </p>
                                            <p><strong>{project.term}</strong> Term </p>
                                        </div>
                                    </div>
                                </Popup>
                            </ProjectMarker>
                        )}
                        <NoMarkerClicked />
                        <MapConsumer>
                            {(map) => {
                                map.flyTo(centerCoord, zoom);
                                return null
                            }}
                        </MapConsumer>
                    </MapContainer>

                    <div className="listeProjets"


                        onClick={(event) => {
                            unselectProject();
                        }}
                    >
                        {projects.map((project) =>
                            <div key={project._id} className={`projectCard marginB020 ${currentProject == project._id ? "currentProject" : ""}`}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    selectProject(project._id, [project.latitude, project.longitude]);
                                }}>

                                <div className="projectCardImg marginB005">
                                    <img src={project.imgUrl} />
                                </div>

                                <div className="col90P textCenter displayCollumCenter projectCardTitle">
                                    <h4 className="marginB01">{project.name}</h4>
                                    <p className="">Proposed by {project.proposedBy}</p>
                                </div>

                                <div className="marginT005 marginB005 lignEnd"></div>

                                <div className="col7 displayCollumCenter projectCardTextList">
                                    <h5>{project.description}</h5>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </section>

        </main>
    );
}

export default Projects;