import { Typography } from "@mui/material";
import { CardCentrales } from "../components/CardCentrales";
import { Title } from "../components/Title";
import { localidades } from "../helpers/index";

export const Dashboard = (): JSX.Element => {
  return (
    <>
      <Title
        title="Centrales disponibles"
        styles="text-black mt-3 p-4 text-center text-xl font-semibold "
      />
      {localidades.length === 0 ? (
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {" "}
          Word of the Day{" "}
        </Typography>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {localidades.map((localidad) => (
            <CardCentrales
              key={localidad.code}
              localities={localidad}
              styles="rounded shadow-xl border-slate-700 m-3 p-3 bg-slate-900"
            />
          ))}
        </section>
      )}
    </>
  );
};
