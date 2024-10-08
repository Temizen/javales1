function check() {
    const ibrowser = navigator.appName;
    const versie = navigator.appVersion;
    const apparaat = navigator.platform;
    resultaat = 'U gebruikt ' + ibrowser + ' versie nummer  ' + versie + ' op een ' + apparaat + ' apparaat.';
    document.getElementById('versiecheck').innerHTML = resultaat;
}
