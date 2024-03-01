if (
	(window.performance.navigation && window.performance.navigation.type === 1) ||
	window.performance
		.getEntriesByType("navigation")
		.map((nav) => nav.type)
		.includes("reload")
)
	alert("Reload Detection");

// if (sessionStorage.getItem("is_reloaded")) alert("Reloaded!");
// sessionStorage.setItem("is_reloaded", true);
