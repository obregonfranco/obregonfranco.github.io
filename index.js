document.getElementById('info').onclick = function() {
    document.getElementById("texto").innerHTML = "Fecha de nacimiento: 16/11/1999 <br>  <br> Ciudad: Mataderos, Ciudad Autónoma de Buenos Aires <br>  <br> Disponibilidad horaria: Full Time"
}
document.getElementById('objetivo').onclick = function() {
    document.getElementById("texto").innerHTML = "Actualmente estoy en búsqueda de un sitio donde poder desarrollarme profesionalmente, siento que podría integrarme perfectamente en un grupo de trabajo, donde además podría aportar mis conocimientos y seguir creciendo. Me considero una persona muy responsable y me involucro en los proyectos para dar lo mejor de mí. Me gusta estar informado y seguir capacitándome con nuevas herramientas."
}
document.getElementById('educacion').onclick = function() {
    document.getElementById("texto").innerHTML = "En curso <br> Universidad de Buenos Aires - FADU <br> Diseño Gráfico <br>  <br> 2013 - 2018 <br> Escuela Técnica N° 29 &quot;Reconquista de Buenos Aires&quot; <br> Técnico en Computación <br>  <br>  <br> Cursos: <br>  <br> Marketing Digital <br> Crehana, 2020. <br> Curso de introduccion al marketing digital. <br>  <br> Desarrollador Front End Jr. <br> Acámica - Aprende Programando, 2017. <br> Curso de Desarrollo Web."
}
document.getElementById('experiencia').onclick = function() {
    document.getElementById("texto").innerHTML = "Operador Telefónico <br> CAT Technologies, May 2022 - Nov 2022 <br> Atención telefónica, soporte técnico y solución de problemas a usuarios. <br>  <br> Diseñador Gráfico <br> BaseFirma - Global, 2021 - 2022 <br> Me desempeñe realizando tareas de diseño gráfico dentro del área de branding para todos los países donde tiene presencia la empresa. <br>  <br> Diseñador Gráfico <br> Freelance, 2018 - 2021 <br> Realización de logos, flyers, diseños para indumentaria, etc. Trabajando con herramientas como Adobe Illustrator para vectores y Adobe Photoshop. Con conocimientos en marketing digital. <br>  <br> Soporte Técnico <br> Ministerio de Desarrollo Urbano y Transporte, Jun 2018 - Dic 2018 <br> A modo de pasantía realizando tareas tales como solución de problemas de hardware y software, revisióny reparación de equipos, armado de pc, configuración de sistemas operativos y asistencia a usuarios."
}
document.getElementById('habilidades').onclick = function() {
    document.getElementById("texto").innerHTML = "Marketing Digital <br>  <br> Diseño Gráfico <br>  <br> Conocimientos de Hardware"
}


$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 20 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});
