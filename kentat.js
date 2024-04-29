//tekstikenttien validointi

function validateForm() {
  
  var Ok = '✔'
  var eiOk = '✗'
  var kaavake = document.forms["kaavake"]

  //ID tarkistukset
  var k = kaavake["kayttaja"]
  var osa1 = document.getElementById("k1")

  if (k.value == "" || k.value == null) {
    osa1.style.color = 'red'
    osa1.innerText = eiOk
  } else if (k.value.length < 6) {
    osa1.style.color = 'red'
    osa1.innerText = eiOk + ' min. 6 merkkiä'
  } else {
    osa1.style.color = 'green'
    osa1.innerText = Ok
  }

  //Salasanan tarkistukset
  var s = kaavake["sala"]
  var osa2 = document.getElementById("k2")
  var val = /^(?=.*\d)(?=.*[0-9])(?=.*[A-Ö])(?=.*["!@£$€&%#"]).{6,}$/

  if (s.value == "" || s.value == null) {
    osa2.style.color = 'red'
    osa2.innerText = eiOk
  } else if (!(val.test(s.value))) {
    osa2.style.color = 'red'
    osa2.innerText = eiOk + ' min. 1 iso kirjain, 1 numero ja 1 erikoismerkki'
  } else {
    osa2.style.color = 'green'
    osa2.innerText = Ok
  }
  
  //Nimi olemassa
  var n = kaavake["nimi"]
  var osa3 = document.getElementById("k3")

  if (n.value == "" || n.value == null) {
    osa3.style.color = 'red'
    osa3.innerText = eiOk
  } else {
    osa3.style.color = 'green'
    osa3.innerText = Ok
  }

  //Osoitteen tarkistus
  var o = kaavake["osoite"]
  var osa4 = document.getElementById("k4")

  if (o.value == "" || o.value == null) {
    osa4.style.color = 'red'
    osa4.innerText = eiOk
  } else {
    osa4.style.color = 'green'
    osa4.innerText = Ok
  }

  //Maa tarkistus
  var m = kaavake["maa"]
  var osa5 = document.getElementById("k5")

  if (m.value == "" || m.value == null) {
    osa5.style.color = 'red'
    osa5.innerText = eiOk
  } else {
    osa5.style.color = 'green'
    osa5.innerText = Ok
  }

  //Postinumero tarkistukset
  var p = kaavake["pnro"]
  var osa6 = document.getElementById("k6")
  var pit = p.value.length

  if (p.value == "" || p.value == null) {
    osa6.style.color = 'red'
    osa6.innerText = eiOk
  } 
  else if (pit !== 5 || isNaN(p.value)) {
    osa6.style.color = 'red'
    osa6.innerText = eiOk + ' viisi numeroa'
  } else {
    osa6.style.color = 'green'
    osa6.innerText = Ok
  }

//S-posti tarkistus
  var sp = kaavake["sposti"]
  var osa7 = document.getElementById("k7")
  var at = "@"
  var piste = "."

  if (sp.value =="" || sp.value == null) {
    osa7.style.color = 'red'
    osa7.innerText = eiOk
  } else if (!(sp.value.includes(at, 3) && sp.value.includes(piste, 5))) {
    osa7.style.color = 'red'
    osa7.innerText = eiOk + '  muoto: esim@erkki.com'
  } else {
    osa7.style.color = 'green'
    osa7.innerText = Ok
  }

//Sukupuoli tarkistus
  var mi = kaavake["mies"]
  var na = kaavake["nainen"]
  var osa8 = document.getElementById("k8")

  if (mi.checked == false && na.checked == false) {
    osa8.style.color = 'red'
    osa8.innerText = eiOk
  }else {
    osa8.style.color = 'green'
    osa8.innerText = Ok
  }

//Kieli valinta
  var suomi = kaavake["suomi"]
  var muu = kaavake["muu"]
  var osa9 = document.getElementById("k9")

  if (suomi.checked == false && muu.checked == false) {
    osa9.style.color = 'red'
    osa9.innerText = eiOk
  } else {
    osa9.style.color = 'green'
    osa9.innerText = Ok
  }
  if (osa1.innerText == Ok && osa2.innerText == Ok && osa3.innerText == Ok && osa4.innerText == Ok &&
      osa5.innerText == Ok && osa6.innerText == Ok && osa7.innerText == Ok && osa8.innerText == Ok &&
      osa9.innerText == Ok) {
          return true
      } else {
        return false
      }
}