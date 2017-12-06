function fileNameExtractor(dirtyFileName){
  dirtyFileName.split('').map(digit => String(digit));
  const b = dirtyFileName.indexOf('_'); // define length of date
  const rest = dirtyFileName.slice(b+1); // move date out from file name
  const secondAr = rest.split('.');
  secondAr.pop();                     // move extension out from file name
  const final = secondAr.join('.');
  return final;
}

/*
Описание
Вы должны извлечь часть имени файла по следующим правилам:

Предположим, что имя начинается с даты, представленной в виде длинного числа
После даты следует знак подчеркивания.
Далее имя файла с расширением.
В самом конце всегда есть дополнительное расширение файла.
*/


/* test
Test.assertSimilar(fileNameExtractor("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"), "FILE_NAME.EXTENSION");
Test.assertSimilar(fileNameExtractor("1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34"), "This_is_an_otherExample.mpg");
Test.assertSimilar(fileNameExtractor("11254_w1gqt2x7m6v6xbt9.fgz.gz2"), "w1gqt2x7m6v6xbt9.fgz");
Test.assertSimilar(fileNameExtractor("544_psa2nslkprchxgvi.m24.gsd"), "psa2nslkprchxgvi.m24");
Test.assertSimilar(fileNameExtractor("123_o56hs7s0sikvs4i.ydg.md4"), "o56hs7s0sikvs4i.ydg");
Test.assertSimilar(fileNameExtractor("321_qdrsul7xonzsemi.jgr.md3"), "qdrsul7xonzsemi.jgr");
Test.assertSimilar(fileNameExtractor("2_v53ir3ddmmer8uxr.spp.gz7"), "v53ir3ddmmer8uxr.spp");
Test.assertSimilar(fileNameExtractor("1_ohto28texko6r.g52.gz2"), "ohto28texko6r.g52");

*/
