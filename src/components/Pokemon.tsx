"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      const res = await fetch("/api/pokemons");
      const data = await res.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);

  return (
    <div>
      {pokemons.length === 0 ? (
        <div>로딩중...</div>
      ) : (
        <div className="flex flex-wrap justify-center items-center ">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="flex justify-center items-center w-48 h-48 rounded-md border-2 border-black m-1"
            >
              <Link
                href={`/pokemon/${pokemon.id}`}
                className="flex flex-col justify-center items-center "
              >
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                  width={90}
                  height={90}
                />
                <p>{pokemon.korean_name}</p>
                <p>도감 번호 {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
