import "../style/footer.css"

export const Footer = () => {
    return (
    <div className="div-footer footer">
        <div>
                <form id="footer-form" action="">
                    <label>Contáctenos</label>
                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="Apellido"/>
                    <input type="email" placeholder="Email"/>
                    <label >Ingrese aquí su consulta</label>
                    <textarea name="" id=""/>
                </form>
            </div>
                <div >
                    <img src="../img/logos/logo4.jpg" className="footer-logo" alt="Flowing Logo"/>
                </div>
                <div>
                    <p>Donde encontrarnos</p>
                
                    <div className="map-container">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.310216907338!2d-58.48143512441849!3d-34.52036767298424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb14e8fa0baa1%3A0x8813e88409d82d54!2sClub%20Banco%20Ciudad!5e0!3m2!1ses-419!2sar!4v1723747568616!5m2!1ses-419!2sar" 
                            s
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">                      
                            </iframe>
                        </div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.4487749205623!2d-58.496577624418634!3d-34.516856372985515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb13ba0dafec9%3A0x22383e78aebbe319!2sClub%20Social%20y%20Deportivo%20Defensores%20De%20Olivos!5e0!3m2!1ses-419!2sar!4v1723747679632!5m2!1ses-419!2sar" 
                            
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                </div>
            </div>
        </div>
    )
}