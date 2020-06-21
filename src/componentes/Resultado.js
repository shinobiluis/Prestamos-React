import React from 'react';

const Resultado = ({total, plazo, cantidad}) => {
    return (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantiadd solicitada es ${cantidad}</p>
            <p>A pagar en un plazo de: {plazo} meses</p>
            <p>Su pago mensual es de: ${ (total / plazo).toFixed(2) }</p>
            <p>Total a pagar: ${(total).toFixed(2)}</p>
        </div>
    );
};
 
export default Resultado;