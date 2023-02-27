import FOrder from '@/components/Form/FOrder';

export default function cardapio() {
  return (
    <>
      <header>
        <h1 className="text-center tracking-wider leading-snug py-9">
          Cardápio
        </h1>
      </header>
      <main>
        <FOrder />
      </main>
    </>
  );
}
