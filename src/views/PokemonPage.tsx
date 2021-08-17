/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import "../index.css"
import Skeleton, { SkeletonTheme, } from 'react-loading-skeleton';

const PokemonPage = () => {

    let apiUrl = "https://pokeapi.co/api/v2/pokemon/"
    var pokemonName: any = [];
    var pokemonImage: any = [];

    const [pokemon, setPokemon] = useState<any>();
    const [state, setState] = useState<any[]>([]);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    async function getPokemonData() {
        const pokemonData = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=104"
        );


        if (pokemonData) {
            const res2 = await axios.all(pokemonData.data.results.map((p: any) => axios.get(p.url)));

            if (res2) {
                pokemonName = await res2.map((p: any) => p.data.name);
                pokemonImage = await res2.map((p: any) => p.data.sprites.front_default);
                setPokemon({ name: pokemonName, image: pokemonImage })
            }
        }
    }

    useEffect(() => {
        getPokemonData()

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
    }, [apiUrl])


    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }


    console.log(windowDimensions)

    function loading() {

        let width = 150
        let height = 96
        windowDimensions.width < 990 ? width = 80 : windowDimensions.width < 1200 ? width = 100 : windowDimensions.width < 1400 ? width = 120 : width = 150

        console.log(width)

        return (
            <>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>

                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>

                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>

                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
                <div className=" mb-4">
                    <SkeletonTheme color="#D1DAE4" highlightColor="#D1DAE4">
                        <Skeleton height={height} width={width} />
                    </SkeletonTheme>

                    <SkeletonTheme color="#B1BCCC" highlightColor="#B1BCCC">
                        <Skeleton className="mt-2" height={20} />
                    </SkeletonTheme>
                </div>
            </>
        )
    }

    return (
        <div className="container mt-4 ">
            <div className="card text-center mb-5" style={{ background: "#CBD5E0" }}>
                <h4 className="p-4">Test Fetch Api</h4>

                <div className="wrapper">
                    {pokemon ?
                        pokemon.name.map((data: any, key: number) => {

                            return (
                                <div key={key}>
                                    <img style={{ width: 96, height: 96 }} src={pokemon.image[key]} />
                                    <p className="bg-dark text-light rounded-pill ">{data}</p>
                                </div>
                            )

                        })

                        : loading()
                    }
                </div>







            </div>



        </div>
    )
}

export default PokemonPage


