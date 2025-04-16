//                -5      -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Vitoria', 'Eduardo', 'Gabriel', 'Julia', 'Laura'];
// nomes.splice(índice, qtdeadeletar, elem1aadicionar, elem2, elem3);
const removidos = nomes.splice(-3, Number.MAX_VALUE); // quer dizer que é pra remover do -3 até o final
console.log(nomes, removidos);

// para adicionar:
const trocados = nomes.splice(1, 1, 'Marina', 'Renato'); // adiciona o Marina no índice 1, tirando o João, e coloca o Renato em seguida
console.log(nomes, removidos, trocados);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
console.log(typeof a1);
const a3 = a1.concat(a2, [7, 8, 9], 'Marina');
console.log(a3);
console.log(typeof a3);
//concatenando com rest e spread:
const a4 = [...a1, 20, ...a2, 40, ...[7, 8, 9, 60]]; // os ... antes do array do 7,8,9 faz com que ele se torne uma spread e espalha os números no object ao invés de colocar o array fechadinho
console.log(a4);
