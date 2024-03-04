document.addEventListener(`DOMContentLoaded`,function(){
    document.getElementById(`button-avanzada`).addEventListener(`click`, function(){
        let todas = document.getElementsByName(`todas`)[0].value;
        let exacta = document.getElementsByName(`exacta`)[0].value;
        let cualquiera = document.getElementsByName(`cualquiera`)[0].value;
        let ninguna = document.getElementsByName(`ninguna`)[0].value;
        window.open(`https://www.google.com/search?as_q=${todas}&as_epq=${exacta}&as_oq=${cualquiera}&as_eq=${ninguna}&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=`);
    });
});