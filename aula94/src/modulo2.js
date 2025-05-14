const pet = 'Amelie';
const idadepet = '10';
const cpf = 'afgaewrgaerg'; // não vai ser exportado porque não está dentro da caixa do export

export default function subtracao(x, y) {
    return x - y;
} // esse default só pode ser usado uma vez por módulo

export { pet, idadepet };