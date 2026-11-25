import { useParams } from "react-router-dom";

const Usuario = () => {
  const { usuario } = useParams();
  return (
    <div>
      <h1>Usuario: {usuario}</h1>
    </div>
  );
};

export default Usuario;