const Contador = () => {
  const [satan, setSatan] = React.useState(0);

  const aumentarSatan = () => setSatan(satan + 1);
  const disminuirSatan = () => setSatan(satan - 1);

  return (
    <div>
      <h1 className={satan < 0 ? "menor" : "mayor"}> Contador:{satan}</h1>
      <hr />

      <button onClick={aumentarSatan}>Aumentar</button>
      <button onClick={disminuirSatan}>Disminuir</button>
    </div>
  );
};
