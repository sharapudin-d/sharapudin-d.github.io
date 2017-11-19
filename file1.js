function kek()
{
  var a = document.getElementById("2").getAttribute("value");
  if (a == "Показать")
  {
   document.getElementById("2").setAttribute("value", "Скрыть")
   document.getElementById("1").setAttribute("type", "text")
  }
  else
  {
   document.getElementById("2").setAttribute("value", "Показать")
   document.getElementById("1").setAttribute("type", "password")
  }
}
