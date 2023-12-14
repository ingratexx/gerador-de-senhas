function getPassword(){
       
    var chars = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%¨&*()_+`{^}>:?<=-[ç~]1234567890.;/,";
    var passwordLengths = {
        easyPassword : 8,
        intermediaryPassword : 12,
        hardPassword : 16

    };

    var select = document.getElementById('dificuldade');
    var senhaGerada = document.getElementById("senhaGerada");

    select.addEventListener("change", setWeather);

    function setWeather () {
        var choice = select.value;
        var password = generatePassword(passwordLengths[choice]);
        senhaGerada.value + password;
    }


    function generatePassword(length) {
        var generatePassword = "";
        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            generatePassword += chars.substring(randomNumber, randomNumber + 1);
        }

        return generatePassword
    }


}

getPassword();

    