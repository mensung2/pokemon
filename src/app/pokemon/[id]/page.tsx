import React from "react";

const fetchPokemonData = async (id: string) => {
  const apiUrl = "http://localhost:3000";
  const res = await fetch(`${apiUrl}/api/pokemons/${id}`);
  return res.json();
};

const PokemonDetail = async ({ params }: { params: { id: string } }) => {
  const pokemonData = await fetchPokemonData(params.id);

  return <div></div>;
};

export default PokemonDetail;
