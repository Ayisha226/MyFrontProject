import React from "react";
import '../../../../../Assets/css/main.css'
import DownloadBtn from "../../../Buttons/DownloadBtn";

const Shape = () => {
    return (
        <section className="shape mt-5">
            <div className="container">
                <div className="row align-items-center justify-content-between mt-5">
                    <div className=" shapetext col-lg-5">
                        <h1 className=" h1shape text-light fs-1"> Bootstrap carousel</h1>
                        <p className=" textshape text-light fs-6 mt-2">Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
                        <DownloadBtn Class="componenstsbtn" content={"SEE ALL COMPONENTS"} />
                    </div>
                    <div className="col-lg-6 mb-5 mt-5">
                        <div id="carouselExampleIndicators" class="carousel slide rounded" data-bs-ride="true">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/img-1-1200x1000.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/theme/img-2-1200x1000.jpg" class="d-block w-100" alt="..." />
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shape;
