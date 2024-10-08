function versiecheck() {
    const ibrowser = navigator.appName;
    const versie = navigator.appVersion;
    const check = 'U gebruikt: ' + ibrowser + ' versie nummer: ' + versie;

    document.getElementById('resultaat').innerHTML = check;
}