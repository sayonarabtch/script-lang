function* generator(zagcite, nazstati, paragraph1, paragraph2, dopinfo, teext1, teext2) {
  yield '<!DOCTYPE html>' +
 '<html lang="ru"><head><meta charset="utf-8" /><title>Документ без названия</title></head> ' +
 '<body bgcolor="d5713f"> <table border="1" bordercolor="cc215a" width="800" align="center"> <tr>  <td bgcolor="e6e6fa">  <!--Шапка сайта.-->'+

 '<table border="1" bordercolor="cc215a" width="790" height="200" cellpadding="10"> <tr> ' + 
 '<h1><font color="cc215a" face="Monotype Corsiva"> ' +
 zagcite + '</font>' + 

 '<h3 align="left">   </h3>  ' +
 '</h1>  </th> </tr> </table>   ' +
 '<table border="1" bordercolor="cc215a" width="790" cellpadding="10"> <tr>  ' +
 '<td rowspan="4" width="600" bgcolor="e6e6fa">  ' +
 '<h3>' + nazvstati +'</h3>  ' +
 '<p style="text-indent:20px"><span style = "font-size: 30px;"> ' +
 '<font face="Monotype Corsiva"> <font color="cc215a"> ' +
 '</font></font></span>' + paragraph1 + '</p>' +
  teext1 +
 '<p> ' + paragraph2 + ' </p>' + teext2 + '</td>  ' +
 '<td bgcolor="e6e6fa" align="left">' +

 '<td bgcolor="e6e6fa" align="center">' +
 '<h3>Дополнительная информация</h3>' +
 '<p align="left">' + dopinfo + '</p>  </td>  </td>  </tr>  </tr>  </table> </table> </body> </html> ' ;
  
  
}

var gen = generator("Ололоев", "Название статьи","Параграф 1","Параграф 2", "Доп инфо", "Нужный текст параграфа 1","Нужный текст параграфа 2");

console.log(gen.next().value);