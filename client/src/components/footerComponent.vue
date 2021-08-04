<template>
    <footer>
        <div id="footer-wrapper">
            <section class="footer-section">
                <h3 class="footer-heading">Hitta oss</h3>
                <address>
                    <i class="fa fa-map-marker"></i>
                    Gubbängsvägen 86, 122 45 Enskede, Sverige
                    <br>
                    <br>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">info@classgrader.com</a>
                    <br>
                    <br>
                    <i class="fa fa-phone"></i>
                    <a href="tel:+4733378901">+46 (0)765 12 931</a>
                    
                    
                </address>
            </section>
            
            <section class="footer-section">
                <h3 class="footer-heading">Social</h3>
                <ul id="footer-social">
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                </ul>
            </section>

            <section class="footer-section">
                <h3 class="footer-heading">Kontakta oss</h3>
        
                <form>
                    Email<br>
                    <input type="email" required=""><br>

                    Meddelande<br>
                    <textarea rows="2" cols="23" required=""></textarea>
                    <br><br>
                    <button id="submit-button" type="submit">Skicka</button>
                </form>  
            
          

        </section></div>
        <section class="footer-copyright">
            <p>copyright 2021 Class Grader</p>
        </section>

    </footer>
</template>

<style scoped>
footer {
	background-color: #344455;
	width: 100%;
	bottom: 0;
	left: 0;
	color: white;
	clear: both;
    margin-top: 100px;
}

footer a {
	color: white;
	text-decoration: none;
}

#footer-wrapper {
	display: flex;
	max-width: 1024px;
	margin: auto;
	font-size: 20px;
	text-align: center;
	justify-content: space-around;
	align-items: stretch;
}

.footer-section {
	min-height: 20px;
	padding: 20px;
	text-align: left;
}

.footer-heading {
	text-align: center;
	font-size: 30px;
	font-weight: 900;
	padding: 20px;
}

.footer-copyright {
	background-color: #1d2a38;
	text-align: center;
	font-size: 19px;
}

#footer-social li,
#footer-social li a {
	float: left;
	font-size: 35px;
}

ul#footer-social {
	margin: 0 auto;
	width: 78%;
}

#footer-social li {
	list-style-type: none;
	margin: 10px;
}

#submit-button {
	padding: 5px;
	width: 40%;
	color: white;
	background-color: #142b44;
	cursor: pointer;
}

footer p{
    margin: 0;
}
ul#footer-social{
display: contents;
}

.fa{
    margin: 5px;
}

@media only screen and (max-width: 768px) {
	#footer-wrapper{
		flex-direction: column;
		align-items: center;
	}
    #site-name{
        display: none;
    }
}


</style>