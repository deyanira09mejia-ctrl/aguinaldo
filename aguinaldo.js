document.getElementById("formSueldo").addEventListener("submit", function(event) {
  event.preventDefault();

  
  const nombre = document.getElementById("nombre").value;
  const sueldo = parseFloat(document.getElementById("sueldo").value);
  const meses = parseInt(document.getElementById("meses").value);

  
  const años = Math.floor(meses / 12);
  const sobrantes = meses % 12;

  
  let aguinaldo = años * 2000 + sobrantes * 100;

  if (aguinaldo > 10000) {
    aguinaldo = 10000;
  }

  const total = sueldo + aguinaldo;

  
  document.getElementById("resultado").innerHTML = `
    <p>Empleado: ${nombre}</p>
    <p>Aguinaldo: $${aguinaldo}</p>
    <p>Total a pagar: $${total}</p>
  `;

  
  document.getElementById("formSueldo").reset();
});
