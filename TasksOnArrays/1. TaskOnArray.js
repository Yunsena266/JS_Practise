console.log(	[1, 4, 3, 0, 4, 5, 4].filter(elem => !(elem % 2)).reduceRight((accumulator, elem) => accumulator + Math.sqrt(elem), 0)
 ); 