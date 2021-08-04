<template>
    <div>
        <header>
        <nav>
            <a href="index.html">
                <div id="site-name"><h2>Class Grader</h2></div>
            </a>

            <ul class="menu">
                <li><a class="menu-item" href="#">Kontakt</a></li>
                <li><a class="menu-item" href="#">Regler</a></li>
                <li><a class="menu-item" href="index.html">Hem</a></li>
            </ul>
        </nav>
    </header>
    </div>
</template>

<style scoped>
header {
	background-color: #344455;
}
* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    
}
nav {
	height: 80px;
	width: 100%;
	max-width: 1024px;
	margin: auto;
}

nav ul {
	margin-top: 0;
}

nav ul li {
	list-style-type: none;
	padding-left: 20px;
	display: inline;
	float: right;
}

nav ul li a {
	color: white;
	font-size: 20px;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	text-decoration: none;
	line-height: 90px;
	font-weight: 600;
}
h2 {
	color: white;
	font-size: 23px;
    margin: 0;
    float: left;
}

#site-name {
    float: left;
    padding-top: 25px;
    margin-left: 30px;
    max-width: 440px;
    width: auto;
    font-size: 25px;
    font-weight: 800;
    text-transform: uppercase;
}

@media only screen and (max-width: 768px) {
    #site-name{
        display: none;
    }
    ul.menu {
    display: inline-block;
}
}

</style>

