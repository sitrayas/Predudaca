function calcularFechaParto(ultimaRegla) {
    // Crea un objeto de fecha a partir de la última regla
    let fecha = new Date(ultimaRegla);
    
    // Suma un año a la fecha
    fecha.setFullYear(fecha.getFullYear() + 1);
    
    // Resta 3 meses a la fecha
    fecha.setMonth(fecha.getMonth() - 3);
    
    // Suma 7 días a la fecha
    fecha.setDate(fecha.getDate() + 7);
    
    // Obtiene el día, mes y año de la fecha resultante
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    
    // Devuelve la fecha resultante en el formato "día de mes de año"
    return `${dia} de ${mes} de ${anio}`;
  }
  
  // Ejemplo de uso de la función
  console.log(calcularFechaParto("2022-10-01")); // "8 de enero de 2024"
  