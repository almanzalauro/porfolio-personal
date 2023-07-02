import './css/technologies.css';

function Technologies() {
    return (
        <div className="technologies content">
            <div className="technologies-content">
                <div className="technologies-title">
                    <h2>Tecnologías</h2>
                </div>

                <div class="technologies-content-icon">
                    <i className="fa-brands fa-html5 "><p>Html5</p></i>
                    <i className="fa-brands fa-css3"><p>Css</p></i>
                    <i className="fa-brands fa-python"><p>Python</p></i>
                    <i className="fa-brands fa-sass"><p>Sass</p></i>
                    <i className="fa-brands fa-bootstrap"><p>Bootstrap</p></i>
                    <i className="fab fa-git-alt"><p>Git</p></i>
                    <i class="fab fa-react"><p>React</p></i>
                </div>
            </div>
        </div>
    );
}

export default Technologies;