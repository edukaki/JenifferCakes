export default function OrderPanel(props) {
  const order = props.order;
  return (
    <section className="grid grid-flow-row w-full bg-white">
      <h3 className="py-4 text-center font-montserrat font-bold tracking-widest text-white bg-red-strong">
        Meu Bolo
      </h3>
      <div className="flex flex-row justify-between p-2 font-semibold">
        <span>Bolo</span>
        <span>R$ {order.tamanho.preco || '00'},00</span>
      </div>
      <div className="flex flex-col p-2">
        <div className="flex flex-row justify-between font-semibold">
          <span>Recheios</span>
          <span>R$ 00,00</span>
        </div>
        {order.recheios &&
          order.recheios.map((recheio, index) => (
            <span className="text-sm" key={index}>
              {recheio}
            </span>
          ))}
      </div>
      <div className="flex flex-row justify-between p-2 font-semibold">
        <span>Acréscimos</span>
        <span>
          R$ {order.acrescimos.length * order.tamanho.acrescimos || '00'},00
        </span>
      </div>
      <div className="flex flex-row justify-between p-2 font-semibold">
        <span>Topper</span>
        <span>R$ {(order.topper && order.tamanho.topper) || '00'},00</span>
      </div>
      <div className="flex flex-row justify-between py-4 px-2 font-montserrat font-bold text-lg tracking-widest text-white bg-red-strong">
        <span>Total</span>
        <span>
          R${' '}
          {(order.tamanho.preco || 0) +
            (order.acrescimos.length * order.tamanho.acrescimos || 0) +
            ((order.topper && order.tamanho.topper) || 0) || '00'}
          ,00
        </span>
      </div>
    </section>
  );
}
