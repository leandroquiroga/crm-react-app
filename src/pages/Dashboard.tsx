import { CardCentrales } from "../components/CardCentrales";
import { Title } from "../components/Title";

export const Dashboard = () => {
  return (
    <>
      <Title
        title="Centrales disponibles"
        styles="text-black mt-3 p-4 text-center text-xl font-semibold "
      />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <CardCentrales
          index={1}
          styles="rounded shadow-xl border-slate-700 m-3 p-3 bg-slate-900"
        />
        <CardCentrales
          index={2}
          styles="rounded shadow-xl border-slate-700 m-3 p-3 bg-slate-900"
        />
        <CardCentrales
          index={3}
          styles="rounded shadow-xl border-slate-700 m-3 p-3 bg-slate-900"
        />
        <CardCentrales
          index={4}
          styles="rounded shadow-xl border-slate-700 m-3 p-3 bg-slate-900"
        />
      </section>
    </>
  );
};
