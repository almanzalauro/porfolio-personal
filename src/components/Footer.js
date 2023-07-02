import './css/footer.css';
function Footer() {
    return (
        <div className="footer content">

            <div className='footer-content'>
                <div className="created-by">
                    <p>Lauro almanza 2023</p>
                    
                </div>

                <div className="social-links">
                    <ul>
                        <a href="https://www.instagram.com/lauro.almanza/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                        <a href="http://www.github.com/almanzalauro" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/lauroalmanza/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer;