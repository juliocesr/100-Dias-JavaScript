function numeroromano (s) {
    let valor = s.toUpperCase().split('');
    const nums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let resultado = 0;

    for (let i = 0; i < valor.length; i++) {
        if (nums[valor[i]] < nums[valor[i + 1]]) {
            resultado -= nums[valor[i]];
        } else {
            resultado += nums[valor[i]];
        }
    }

    return resultado;
}