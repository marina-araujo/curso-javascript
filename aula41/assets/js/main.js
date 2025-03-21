function max(x, y) {
    /*if (x > y) return x;
    return y;*/
    return x > y ? x : y;
};

const max2 = (x, y) => x > y ? x : y;

const maior = max2(40, 50);
console.log(maior);