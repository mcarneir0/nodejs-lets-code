import { DateTime, Interval } from "luxon";

const t1 = DateTime.local();
const t2 = DateTime.local();
console.log(t2.diff(t1).toObject());    // Diferença entre duas datas
console.log(t2.toLocaleString());

//  Comparando datas
const data1 = DateTime.local(2022, 5, 5);
const data2 = DateTime.local(2022, 5, 30);
console.log(data1 > data2); // false
console.log(data1 < data2); // true

//  Adicionando dias e horas a uma data
const data3 = DateTime.now();
const data4 = data3.plus({ days: 10, hours: 12 });
console.log(data4.toLocaleString(DateTime.DATETIME_SHORT));

//  Subtraindo dias e horas a uma data
const data5 = DateTime.now();
const data6 = data5.minus({ days: 10, hours: 8 });
console.log(data6.toLocaleString(DateTime.DATETIME_SHORT));

//  Calculando a diferença entre duas datas
const data7 = DateTime.local(2020, 1, 5);
const data8 = DateTime.local(2022, 5, 30);
console.log(data8.diff(data7, ["years", "months", "days"]).toObject());
