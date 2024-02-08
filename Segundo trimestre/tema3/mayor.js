function mayor(vector){
    let mayor=vector[0]; //por defector el primer elemento es mayor
    for (var i=0;i<vector.length;i++){
        if (vector[i]>mayor)
        mayor = vector[i];
    } 
    return mayor;
}