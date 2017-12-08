window.localStorage.clear();

var botoesMenu = document.getElementById("espacoBotoesMenu").querySelectorAll("input");

for (var i = 0; i < botoesMenu.length; i++) {
	botoesMenu[i].onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
		this.style.transform = "rotate(2deg)"
	}

	botoesMenu[i].onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "4px solid #E9A93F";
		this.style.transform = "rotate(0deg)"
	}

	botoesMenu[i].onclick = function() {
		if (this.getAttribute("name") == "iniciar") {
			window.location = "html/adicionar_informacoes_equipe.html";
		}
		else if (this.getAttribute("name") == "regras") {
			window.location = "html/regras1.html";
		}
		else if (this.getAttribute("name") == "sobre") {
			window.location = "html/sobre1.html";
		}
	}
}